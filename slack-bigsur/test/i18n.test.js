'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { STRINGS, pickLanguage, createTranslator } = require('../src/i18n');

const placeholders = (text) => [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();

test('every language has the same keys and placeholders', () => {
  const english = Object.keys(STRINGS.en).sort();
  for (const [language, table] of Object.entries(STRINGS)) {
    assert.deepEqual(Object.keys(table).sort(), english, `${language} keys`);
    for (const key of english) {
      assert.deepEqual(placeholders(table[key]), placeholders(STRINGS.en[key]), `${language}:${key}`);
    }
  }
});

test('Chinese is picked for any zh locale, English otherwise', () => {
  assert.equal(pickLanguage(['zh-Hans-CN', 'en-US']), 'zh');
  assert.equal(pickLanguage(['zh-TW']), 'zh');
  assert.equal(pickLanguage('zh'), 'zh');
  assert.equal(pickLanguage(['en-US', 'zh-CN']), 'en');
  assert.equal(pickLanguage([]), 'en');
});

test('translations fill placeholders and fall back to English, then the key', () => {
  const zh = createTranslator('zh');
  assert.equal(zh('app.quit', { name: 'Slack' }), '退出 Slack');
  assert.equal(createTranslator('fr')('app.quit', { name: 'Slack' }), 'Quit Slack');
  assert.equal(zh('missing.key'), 'missing.key');
  assert.equal(zh('app.quit'), '退出 {name}');
});
