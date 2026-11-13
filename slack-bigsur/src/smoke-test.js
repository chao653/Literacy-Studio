'use strict';

const fs = require('node:fs');
const { app, ipcMain } = require('electron');
const { isSlackUrl } = require('./policy');

const PROBE = `(() => {
  const html = document.documentElement ? document.documentElement.outerHTML : '';
  const text = document.body ? document.body.innerText : '';
  const uaData = navigator.userAgentData;
  return {
    url: location.href,
    title: document.title,
    userAgent: navigator.userAgent,
    brands: uaData ? uaData.brands.map((entry) => entry.brand + ' ' + entry.version) : null,
    deprecatedBrowser: /"is_deprecated_webclient_browser":true/.test(html),
    unsupportedBrowser:
      /"is_unsupported_webclient_browser":true/.test(html) ||
      /browser (is not|isn.t|is no longer) supported|no longer supporting this version of your browser|please update your browser/i.test(text),
    textSample: text.replace(/\\s+/g, ' ').trim().slice(0, 300),
  };
})()`;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForSlack(contents, deadline) {
  while (Date.now() < deadline) {
    await delay(1000);
    if (contents.isDestroyed()) throw new Error('window closed');
    if (!contents.isLoading() && isSlackUrl(contents.getURL())) return;
  }
  throw new Error(`timed out waiting for Slack (last URL: ${contents.getURL()})`);
}

// Loads Slack, checks that it accepted the wrapper as a supported browser, prints a
// SMOKE_RESULT line and exits with 0 (pass) or 1 (fail).
async function runSmokeTest(win, { profile, timeoutMs = 90000, settleMs = 8000, screenshotPath }) {
  const contents = win.webContents;
  const result = { ok: false, electron: process.versions.electron, chromium: process.versions.chrome };
  let preloadReported = false;
  ipcMain.on('slack:unread', (event) => {
    if (event.sender === contents) preloadReported = true;
  });

  try {
    await waitForSlack(contents, Date.now() + timeoutMs);
    await delay(settleMs);
    const probe = await contents.executeJavaScript(PROBE, true);
    const checks = {
      reachedSlack: isSlackUrl(probe.url),
      userAgentApplied: probe.userAgent === profile.userAgent,
      clientHintsApplied: Array.isArray(probe.brands) && probe.brands.includes(`Google Chrome ${profile.major}`),
      notDeprecated: !probe.deprecatedBrowser,
      notBlocked: !probe.unsupportedBrowser,
      preloadReported,
    };
    Object.assign(result, { probe, checks, ok: Object.values(checks).every(Boolean) });

    if (screenshotPath) {
      const image = await contents.capturePage();
      fs.writeFileSync(screenshotPath, image.toPNG());
      result.screenshot = screenshotPath;
    }
  } catch (error) {
    result.error = error.message;
  }

  process.stdout.write(`SMOKE_RESULT ${JSON.stringify(result)}\n`);
  app.exit(result.ok ? 0 : 1);
}

module.exports = { runSmokeTest };
