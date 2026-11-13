'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');
const { applyUserAgentOverride, overrideMethod } = require('../src/ua-override');

const profile = { userAgent: 'UA', metadata: { brands: [] } };
const quiet = { warn() {} };

function fakeContents({ attachThrows = false, failing = [] } = {}) {
  const dbg = new EventEmitter();
  dbg.commands = [];
  dbg.attach = () => {
    if (attachThrows) throw new Error('already attached');
  };
  dbg.sendCommand = (method, params, sessionId) => {
    dbg.commands.push([method, sessionId || null]);
    return failing.includes(method) ? Promise.reject(new Error('nope')) : Promise.resolve({});
  };
  return { debugger: dbg };
}

const settle = () => new Promise((resolve) => setImmediate(resolve));

test('workers get the Network override, pages and frames the Emulation one', () => {
  assert.equal(overrideMethod('page'), 'Emulation.setUserAgentOverride');
  assert.equal(overrideMethod('iframe'), 'Emulation.setUserAgentOverride');
  assert.equal(overrideMethod('worker'), 'Network.setUserAgentOverride');
  assert.equal(overrideMethod('service_worker'), 'Network.setUserAgentOverride');
  assert.equal(overrideMethod('shared_worker'), 'Network.setUserAgentOverride');
});

test('the page is overridden and auto-attach is enabled', async () => {
  const contents = fakeContents();
  assert.equal(await applyUserAgentOverride(contents, profile, quiet), true);
  assert.deepEqual(contents.debugger.commands, [
    ['Emulation.setUserAgentOverride', null],
    ['Target.setAutoAttach', null],
  ]);
});

test('attached iframes are overridden, auto-attached and resumed', async () => {
  const contents = fakeContents();
  await applyUserAgentOverride(contents, profile, quiet);
  contents.debugger.commands.length = 0;
  contents.debugger.emit('message', {}, 'Target.attachedToTarget', { sessionId: 'S1', targetInfo: { type: 'iframe' } });
  await settle();
  assert.deepEqual(contents.debugger.commands, [
    ['Emulation.setUserAgentOverride', 'S1'],
    ['Target.setAutoAttach', 'S1'],
    ['Runtime.runIfWaitingForDebugger', 'S1'],
  ]);
});

test('paused workers are resumed even when the override fails', async () => {
  const contents = fakeContents({ failing: ['Network.setUserAgentOverride'] });
  await applyUserAgentOverride(contents, profile, quiet);
  contents.debugger.commands.length = 0;
  contents.debugger.emit('message', {}, 'Target.attachedToTarget', { sessionId: 'W1', targetInfo: { type: 'worker' } });
  await settle();
  assert.deepEqual(contents.debugger.commands, [
    ['Network.setUserAgentOverride', 'W1'],
    ['Runtime.runIfWaitingForDebugger', 'W1'],
  ]);
});

test('other protocol events are ignored', async () => {
  const contents = fakeContents();
  await applyUserAgentOverride(contents, profile, quiet);
  contents.debugger.commands.length = 0;
  contents.debugger.emit('message', {}, 'Target.detachedFromTarget', { sessionId: 'S1' });
  contents.debugger.emit('message', {}, 'Target.attachedToTarget', {});
  await settle();
  assert.deepEqual(contents.debugger.commands, []);
});

test('failures are reported instead of thrown', async () => {
  assert.equal(await applyUserAgentOverride(fakeContents({ attachThrows: true }), profile, quiet), false);
  const failing = fakeContents({ failing: ['Emulation.setUserAgentOverride'] });
  assert.equal(await applyUserAgentOverride(failing, profile, quiet), false);
});
