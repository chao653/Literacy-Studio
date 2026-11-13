'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  ANCHOR_MAJOR,
  estimateChromeMajor,
  resolveChromeMajor,
  buildUserAgent,
  buildBrands,
  buildUserAgentMetadata,
  buildProfile,
} = require('../src/user-agent');

const header = (brands) => brands.map(({ brand, version }) => `"${brand}";v="${version}"`).join(', ');

test('brand lists match what real Chrome releases send in Sec-CH-UA', () => {
  assert.equal(header(buildBrands(120)), '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"');
  assert.equal(header(buildBrands(124)), '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"');
  assert.equal(header(buildBrands(131)), '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"');
  assert.equal(header(buildBrands(138)), '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"');
});

test('full version list uses dotted versions in the same order', () => {
  assert.deepEqual(
    buildBrands(138, { fullVersions: true }).map((entry) => entry.version),
    ['8.0.0.0', '138.0.0.0', '138.0.0.0'],
  );
});

test('the Chrome version follows the four-week release calendar, one release behind', () => {
  assert.equal(estimateChromeMajor(Date.UTC(2020, 0, 1)), ANCHOR_MAJOR);
  assert.equal(estimateChromeMajor(Date.UTC(2025, 11, 2)), ANCHOR_MAJOR);
  assert.equal(estimateChromeMajor(Date.UTC(2026, 0, 13)), ANCHOR_MAJOR + 0);
  assert.equal(estimateChromeMajor(Date.UTC(2026, 10, 13)), 154);
  assert.equal(estimateChromeMajor(Date.UTC(2027, 10, 13)), 167);
});

test('a pinned Chrome version is used only when it is plausible', () => {
  const now = Date.UTC(2026, 10, 13);
  assert.equal(resolveChromeMajor('150', now), 150);
  assert.equal(resolveChromeMajor(160, now), 160);
  assert.equal(resolveChromeMajor(null, now), 154);
  assert.equal(resolveChromeMajor('abc', now), 154);
  assert.equal(resolveChromeMajor('99', now), 154);
  assert.equal(resolveChromeMajor('1000', now), 154);
});

test('user-agent strings use Chrome’s reduced format', () => {
  assert.equal(
    buildUserAgent(154, 'darwin'),
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36',
  );
  assert.match(buildUserAgent(154, 'win32'), /\(Windows NT 10\.0; Win64; x64\)/);
  assert.match(buildUserAgent(154, 'linux'), /\(X11; Linux x86_64\)/);
  assert.doesNotMatch(buildUserAgent(154, 'darwin'), /Electron/);
});

test('client-hint metadata describes Chrome on macOS', () => {
  const metadata = buildUserAgentMetadata(154, { platform: 'darwin', arch: 'arm64' });
  assert.equal(metadata.platform, 'macOS');
  assert.equal(metadata.platformVersion, '15.0.0');
  assert.equal(metadata.architecture, 'arm');
  assert.equal(metadata.bitness, '64');
  assert.equal(metadata.fullVersion, '154.0.0.0');
  assert.equal(metadata.mobile, false);
  assert.ok(metadata.brands.some((entry) => entry.brand === 'Google Chrome' && entry.version === '154'));

  assert.equal(buildUserAgentMetadata(154, { platform: 'darwin', arch: 'x64' }).architecture, 'x86');
  assert.equal(buildUserAgentMetadata(154, { platform: 'darwin', platformVersion: '14.6.1' }).platformVersion, '14.6.1');
});

test('buildProfile ties the string and the metadata to the same version', () => {
  const profile = buildProfile({ chromeVersion: '149', platform: 'darwin', arch: 'arm64' });
  assert.equal(profile.major, 149);
  assert.match(profile.userAgent, /Chrome\/149\.0\.0\.0/);
  assert.equal(profile.metadata.fullVersion, '149.0.0.0');
});
