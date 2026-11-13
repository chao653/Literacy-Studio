'use strict';

// Slack decides which browsers may use the web client from the browser version it
// sees, so the wrapper presents itself as a current Google Chrome. The embedded
// engine is Electron 37 / Chromium 138, the newest Chromium that still runs on
// macOS 11.

// Chrome 143 reached the stable channel on 2025-12-02; a new major ships every four weeks.
const ANCHOR_MAJOR = 143;
const ANCHOR_DATE_MS = Date.UTC(2025, 11, 2);
const RELEASE_INTERVAL_MS = 28 * 24 * 60 * 60 * 1000;

const GREASE_CHARS = [' ', '(', ':', '-', '.', '/', ')', ';', '=', '?', '_'];
const GREASE_VERSIONS = ['8', '99', '24'];
const BRAND_ORDERS = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
];

// Stays one release behind the estimated stable version: release dates slip around
// holidays, and claiming a Chrome that has not shipped yet would stand out.
function estimateChromeMajor(nowMs = Date.now()) {
  const elapsed = Math.max(0, nowMs - ANCHOR_DATE_MS);
  return Math.max(ANCHOR_MAJOR, ANCHOR_MAJOR + Math.floor(elapsed / RELEASE_INTERVAL_MS) - 1);
}

function resolveChromeMajor(override, nowMs = Date.now()) {
  const parsed = Number.parseInt(override, 10);
  if (Number.isInteger(parsed) && parsed >= 100 && parsed < 1000) {
    return parsed;
  }
  return estimateChromeMajor(nowMs);
}

function platformToken(platform) {
  if (platform === 'darwin') return 'Macintosh; Intel Mac OS X 10_15_7';
  if (platform === 'win32') return 'Windows NT 10.0; Win64; x64';
  return 'X11; Linux x86_64';
}

// Chrome's reduced user-agent string: the OS version is frozen and only the major version is real.
function buildUserAgent(major, platform = process.platform) {
  return `Mozilla/5.0 (${platformToken(platform)}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${major}.0.0.0 Safari/537.36`;
}

// Mirrors Chromium's GenerateBrandVersionList / GetGreasedUserAgentBrandVersion so the
// client hints look exactly like those of a real Chrome with the same major version.
function buildBrands(major, { fullVersions = false } = {}) {
  const order = BRAND_ORDERS[major % BRAND_ORDERS.length];
  const greaseBrand = `Not${GREASE_CHARS[major % GREASE_CHARS.length]}A${GREASE_CHARS[(major + 1) % GREASE_CHARS.length]}Brand`;
  const greaseMajor = GREASE_VERSIONS[major % GREASE_VERSIONS.length];
  const version = (value) => (fullVersions ? `${value}.0.0.0` : String(value));

  const list = new Array(3);
  list[order[0]] = { brand: greaseBrand, version: version(greaseMajor) };
  list[order[1]] = { brand: 'Chromium', version: version(major) };
  list[order[2]] = { brand: 'Google Chrome', version: version(major) };
  return list;
}

function platformName(platform) {
  if (platform === 'darwin') return 'macOS';
  if (platform === 'win32') return 'Windows';
  return 'Linux';
}

function buildUserAgentMetadata(major, { platform = process.platform, arch = process.arch, platformVersion } = {}) {
  return {
    brands: buildBrands(major),
    fullVersionList: buildBrands(major, { fullVersions: true }),
    fullVersion: `${major}.0.0.0`,
    platform: platformName(platform),
    platformVersion: platformVersion || (platform === 'darwin' ? '15.0.0' : '10.0.0'),
    architecture: arch === 'arm64' || arch === 'arm' ? 'arm' : 'x86',
    model: '',
    mobile: false,
    bitness: '64',
    wow64: false,
  };
}

function buildProfile({ chromeVersion, platformVersion, platform = process.platform, arch = process.arch, nowMs = Date.now() } = {}) {
  const major = resolveChromeMajor(chromeVersion, nowMs);
  return {
    major,
    userAgent: buildUserAgent(major, platform),
    metadata: buildUserAgentMetadata(major, { platform, arch, platformVersion }),
  };
}

module.exports = {
  ANCHOR_MAJOR,
  estimateChromeMajor,
  resolveChromeMajor,
  buildUserAgent,
  buildBrands,
  buildUserAgentMetadata,
  buildProfile,
};
