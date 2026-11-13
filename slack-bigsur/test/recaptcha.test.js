'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { createReachability, mirrorUrl, registerRecaptchaFallback } = require('../src/recaptcha');

const LOADER = 'https://www.google.com/recaptcha/enterprise.js?onload=cb&render=explicit';
const RELEASE = 'https://www.gstatic.com/recaptcha/releases/abc/recaptcha__en.js';

function fakeSession() {
  const handlers = {};
  return {
    handlers,
    webRequest: {
      onBeforeRequest: (filter, listener) => (handlers.before = { filter, listener }),
      onErrorOccurred: (filter, listener) => (handlers.error = { filter, listener }),
    },
  };
}

function request(ses, url) {
  return new Promise((resolve) => ses.handlers.before.listener({ url }, resolve));
}

function setup({ unreachable = [], now } = {}) {
  const ses = fakeSession();
  const probes = [];
  const unavailable = [];
  registerRecaptchaFallback(ses, {
    probe: async (url) => {
      probes.push(url);
      if (unreachable.some((host) => url.includes(host))) throw new Error('net::ERR_CONNECTION_TIMED_OUT');
    },
    onUnavailable: (info) => unavailable.push(info),
    now,
  });
  return { ses, probes, unavailable };
}

test('reCAPTCHA URLs map to Google’s mirrors and nothing else does', () => {
  assert.equal(mirrorUrl(LOADER), 'https://www.recaptcha.net/recaptcha/enterprise.js?onload=cb&render=explicit');
  assert.equal(mirrorUrl(RELEASE), 'https://www.gstatic.cn/recaptcha/releases/abc/recaptcha__en.js');
  assert.equal(mirrorUrl('https://www.google.com/maps'), null);
  assert.equal(mirrorUrl('https://www.google.com.evil.example/recaptcha/api.js'), null);
  assert.equal(mirrorUrl('http://www.google.com/recaptcha/api.js'), null);
  assert.equal(mirrorUrl(undefined), null);
});

test('only the original hosts are intercepted, but failures on the mirrors are watched too', () => {
  const { ses } = setup();
  assert.deepEqual(ses.handlers.before.filter.urls, ['https://www.google.com/recaptcha/*', 'https://www.gstatic.com/recaptcha/*']);
  assert.deepEqual(ses.handlers.error.filter.urls, [
    'https://www.google.com/recaptcha/*',
    'https://www.recaptcha.net/recaptcha/*',
    'https://www.gstatic.com/recaptcha/*',
    'https://www.gstatic.cn/recaptcha/*',
  ]);
});

test('requests pass through untouched when Google is reachable, probing each host once', async () => {
  const { ses, probes } = setup();
  assert.deepEqual(await request(ses, LOADER), {});
  assert.deepEqual(await request(ses, `${LOADER}&again=1`), {});
  assert.deepEqual(await request(ses, RELEASE), {});
  assert.deepEqual(probes, ['https://www.google.com/generate_204', 'https://www.gstatic.com/generate_204']);
});

test('requests for an unreachable host are redirected to its mirror', async () => {
  const { ses } = setup({ unreachable: ['www.google.com'] });
  assert.deepEqual(await request(ses, LOADER), { redirectURL: mirrorUrl(LOADER) });
  assert.deepEqual(await request(ses, RELEASE), {});
});

test('a probe is repeated once its result expires', async () => {
  let clock = 0;
  const { ses, probes } = setup({ now: () => clock });
  await request(ses, LOADER);
  clock += 9 * 60 * 1000;
  await request(ses, LOADER);
  assert.equal(probes.length, 1);
  clock += 2 * 60 * 1000;
  await request(ses, LOADER);
  assert.equal(probes.length, 2);
});

test('probes that throw synchronously count as unreachable', async () => {
  const reachability = createReachability(() => {
    throw new Error('boom');
  });
  assert.equal(await reachability.isReachable('https://www.google.com/generate_204'), false);
});

test('a failed load switches the host to its mirror and asks the user to reload', async () => {
  const { ses, unavailable } = setup();
  assert.deepEqual(await request(ses, LOADER), {});
  ses.handlers.error.listener({ url: LOADER, error: 'net::ERR_CONNECTION_RESET', resourceType: 'script', webContentsId: 7 });
  assert.deepEqual(unavailable, [
    { url: LOADER, host: 'www.google.com', error: 'net::ERR_CONNECTION_RESET', mirrored: false, webContentsId: 7 },
  ]);
  assert.deepEqual(await request(ses, LOADER), { redirectURL: mirrorUrl(LOADER) });
});

test('a failure on the mirror is reported as such; cancelled requests and beacons are ignored', () => {
  const { ses, unavailable } = setup();
  const fire = (details) => ses.handlers.error.listener(details);
  fire({ url: 'https://www.recaptcha.net/recaptcha/enterprise/anchor?k=1', error: 'net::ERR_NAME_NOT_RESOLVED', resourceType: 'subFrame' });
  fire({ url: LOADER, error: 'net::ERR_ABORTED', resourceType: 'script' });
  fire({ url: 'https://www.google.com/recaptcha/enterprise/clr?k=1', error: 'net::ERR_FAILED', resourceType: 'xhr' });
  assert.equal(unavailable.length, 1);
  assert.equal(unavailable[0].host, 'www.recaptcha.net');
  assert.equal(unavailable[0].mirrored, true);
});
