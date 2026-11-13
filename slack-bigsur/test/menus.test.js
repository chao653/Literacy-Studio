'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { buildAppMenuTemplate, buildContextMenuTemplate, truncate } = require('../src/menus');
const { createTranslator } = require('../src/i18n');

const t = createTranslator('en');

function recordingActions() {
  const calls = [];
  const actions = new Proxy({}, { get: (_target, name) => (...args) => calls.push([name, ...args]) });
  return { calls, actions };
}

function flatten(items) {
  return items.flatMap((item) => [item, ...(Array.isArray(item.submenu) ? flatten(item.submenu) : [])]);
}

const settings = { openAtLogin: false, showUnreadDot: true, askWhereToSave: false };

test('the macOS menu starts with the app menu', () => {
  const { actions } = recordingActions();
  const template = buildAppMenuTemplate({ t, name: 'Slack for Big Sur', isMac: true, settings, actions });
  assert.equal(template[0].label, 'Slack for Big Sur');
  assert.deepEqual(
    template.map((menu) => menu.label),
    ['Slack for Big Sur', 'File', 'Edit', 'View', 'History', 'Window', 'Help'],
  );
  const other = buildAppMenuTemplate({ t, name: 'Slack for Big Sur', isMac: false, settings, actions });
  assert.equal(other[0].label, 'File');
});

test('Slack’s own shortcuts are left to the page', () => {
  const { actions } = recordingActions();
  const items = flatten(buildAppMenuTemplate({ t, name: 'Slack', isMac: true, settings, actions }));
  const accelerators = items.map((item) => item.accelerator).filter(Boolean);
  for (const reserved of ['CommandOrControl+K', 'CommandOrControl+N', 'CommandOrControl+F', 'CommandOrControl+,']) {
    assert.ok(!accelerators.includes(reserved), reserved);
  }
  assert.ok(accelerators.includes('CommandOrControl+R'));
  assert.ok(accelerators.includes('CommandOrControl+['));
});

test('menu items call their actions', () => {
  const { calls, actions } = recordingActions();
  const items = flatten(buildAppMenuTemplate({ t, name: 'Slack', isMac: true, settings, actions }));
  items.find((item) => item.label === 'Show Unread Dot in Dock').click({ checked: false });
  items.find((item) => item.label === 'Zoom In' && item.visible !== false).click();
  items.find((item) => item.label === 'Copy Diagnostic Info').click();
  assert.deepEqual(calls, [['setShowUnreadDot', false], ['zoomIn'], ['copyDiagnostics']]);
});

test('context menu offers spelling fixes for misspelled words', () => {
  const { calls, actions } = recordingActions();
  const template = buildContextMenuTemplate(
    {
      isEditable: true,
      misspelledWord: 'helo',
      dictionarySuggestions: ['hello', 'help', 'hero', 'halo', 'held', 'helm'],
      editFlags: { canCut: true, canCopy: true, canPaste: true, canSelectAll: true },
    },
    { t, isMac: true, showInspect: false, actions },
  );
  const labels = template.map((item) => item.label || item.type);
  assert.deepEqual(labels.slice(0, 7), ['hello', 'help', 'hero', 'halo', 'held', 'Add to Dictionary', 'separator']);
  template[0].click();
  template[5].click();
  assert.deepEqual(calls, [['replaceMisspelling', 'hello'], ['addToDictionary', 'helo']]);
});

test('context menu for links, images and selections', () => {
  const { calls, actions } = recordingActions();
  const template = buildContextMenuTemplate(
    {
      linkURL: 'https://example.com/a',
      mediaType: 'image',
      srcURL: 'https://files.slack.com/x.png',
      selectionText: 'a fairly long selected piece of text',
      x: 5,
      y: 6,
      editFlags: { canCopy: true },
    },
    { t, isMac: true, showInspect: true, actions },
  );
  const labels = template.filter((item) => item.type !== 'separator').map((item) => item.label);
  assert.deepEqual(labels, [
    'Open Link in Browser',
    'Copy Link',
    'Copy Image',
    'Copy Image Address',
    'Save Image As…',
    'Look Up “a fairly long selected…”',
    'Search Google for “a fairly long selected…”',
    'Copy',
    'Inspect Element',
  ]);
  template.find((item) => item.label === 'Copy Image').click();
  assert.deepEqual(calls, [['copyImageAt', 5, 6]]);
});

test('context menu ignores non-web links and is empty when there is nothing to do', () => {
  const { actions } = recordingActions();
  const template = buildContextMenuTemplate({ linkURL: 'javascript:alert(1)' }, { t, isMac: true, showInspect: false, actions });
  assert.deepEqual(template, []);
});

test('truncate shortens long text to one line', () => {
  assert.equal(truncate('short'), 'short');
  assert.equal(truncate('line one\nline two', 10), 'line one…');
  assert.equal(truncate('x'.repeat(30)).length, 24);
  assert.equal(truncate('abcdefgh ijklmnop', 10), 'abcdefgh…');
});
