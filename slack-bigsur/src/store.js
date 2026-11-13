'use strict';

const fs = require('node:fs');
const path = require('node:path');

const DEFAULTS = Object.freeze({
  windowBounds: null,
  windowMaximized: false,
  zoomFactor: 1,
  showUnreadDot: true,
  askWhereToSave: false,
  // Pins the Chrome major version presented to Slack; null follows the release calendar.
  chromeVersion: null,
  // macOS version reported in the high-entropy client hints.
  platformVersion: null,
  startUrl: null,
});

class Store {
  constructor(filePath, { saveDelayMs = 500 } = {}) {
    this.filePath = filePath;
    this.saveDelayMs = saveDelayMs;
    this.timer = null;
    this.data = { ...DEFAULTS, ...readJson(filePath) };
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    if (this.data[key] === value) return;
    this.data[key] = value;
    this.scheduleSave();
  }

  scheduleSave() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(), this.saveDelayMs);
    if (typeof this.timer.unref === 'function') this.timer.unref();
  }

  flush() {
    clearTimeout(this.timer);
    this.timer = null;
    fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
    const tmpPath = `${this.filePath}.tmp`;
    fs.writeFileSync(tmpPath, `${JSON.stringify(this.data, null, 2)}\n`);
    fs.renameSync(tmpPath, this.filePath);
  }
}

function readJson(filePath) {
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

module.exports = { Store, DEFAULTS };
