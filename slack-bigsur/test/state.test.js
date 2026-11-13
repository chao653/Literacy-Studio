'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { Store, DEFAULTS } = require('../src/store');
const { restoreBounds, DEFAULT_SIZE, MIN_SIZE } = require('../src/window-state');
const { uniqueFilePath } = require('../src/downloads');

const display = { x: 0, y: 0, width: 1440, height: 875 };

test('saved window bounds are restored when they are on a display', () => {
  assert.deepEqual(restoreBounds({ x: 100, y: 50, width: 1000, height: 700 }, [display]), {
    x: 100,
    y: 50,
    width: 1000,
    height: 700,
  });
});

test('off-screen windows keep their size but not their position', () => {
  assert.deepEqual(restoreBounds({ x: 3000, y: 50, width: 1000, height: 700 }, [display]), { width: 1000, height: 700 });
  assert.deepEqual(restoreBounds({ x: 1400, y: 50, width: 1000, height: 700 }, [display]), { width: 1000, height: 700 });
  const secondDisplay = { x: 1440, y: 0, width: 1920, height: 1080 };
  assert.deepEqual(restoreBounds({ x: 2000, y: 100, width: 800, height: 600 }, [display, secondDisplay]), {
    x: 2000,
    y: 100,
    width: 800,
    height: 600,
  });
});

test('missing or broken bounds fall back to defaults and minimums', () => {
  assert.deepEqual(restoreBounds(null, [display]), DEFAULT_SIZE);
  assert.deepEqual(restoreBounds({ x: 'a', y: 0, width: 10, height: 10 }, [display]), DEFAULT_SIZE);
  assert.deepEqual(restoreBounds({ x: 0, y: 0, width: 100, height: 100 }, [display]), {
    x: 0,
    y: 0,
    width: MIN_SIZE.width,
    height: MIN_SIZE.height,
  });
});

test('settings persist across store instances', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'slack-bigsur-test-'));
  const file = path.join(dir, 'nested', 'settings.json');
  const store = new Store(file);
  assert.equal(store.get('zoomFactor'), DEFAULTS.zoomFactor);
  store.set('zoomFactor', 1.2);
  store.set('chromeVersion', 150);
  store.flush();
  const reloaded = new Store(file);
  assert.equal(reloaded.get('zoomFactor'), 1.2);
  assert.equal(reloaded.get('chromeVersion'), 150);
  assert.equal(reloaded.get('showUnreadDot'), true);
  assert.ok(!fs.existsSync(`${file}.tmp`));
});

test('a corrupt settings file is ignored', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'slack-bigsur-test-'));
  const file = path.join(dir, 'settings.json');
  fs.writeFileSync(file, '{ not json');
  assert.deepEqual(new Store(file).data, { ...DEFAULTS });
  fs.writeFileSync(file, '[1, 2]');
  assert.deepEqual(new Store(file).data, { ...DEFAULTS });
});

test('downloads never overwrite existing files', () => {
  const existing = new Set(['/dl/report.pdf', '/dl/report (1).pdf', '/dl/archive']);
  const exists = (candidate) => existing.has(candidate);
  assert.equal(uniqueFilePath('/dl', 'report.pdf', exists), '/dl/report (2).pdf');
  assert.equal(uniqueFilePath('/dl', 'notes.txt', exists), '/dl/notes.txt');
  assert.equal(uniqueFilePath('/dl', 'archive', exists), '/dl/archive (1)');
});

test('download names cannot escape the downloads folder', () => {
  const exists = () => false;
  assert.equal(uniqueFilePath('/dl', '../../etc/passwd', exists), '/dl/passwd');
  assert.equal(uniqueFilePath('/dl', '.hidden', exists), '/dl/hidden');
  assert.equal(uniqueFilePath('/dl', '', exists), '/dl/download');
  assert.equal(uniqueFilePath('/dl', '...', exists), '/dl/download');
});
