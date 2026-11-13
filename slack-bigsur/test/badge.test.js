'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { computeBadge, UNREAD_DOT } = require('../src/badge');

test('mentions show as a number, capped at 99+', () => {
  assert.equal(computeBadge({ mentions: 3, unread: 10 }), '3');
  assert.equal(computeBadge({ mentions: 99 }), '99');
  assert.equal(computeBadge({ mentions: 150 }), '99+');
  assert.equal(computeBadge({ mentions: 2.7 }), '2');
});

test('unread messages without mentions show a dot unless disabled', () => {
  assert.equal(computeBadge({ unread: 4 }), UNREAD_DOT);
  assert.equal(computeBadge({ title: '* general | Acme - Slack' }), UNREAD_DOT);
  assert.equal(computeBadge({ title: '! general | Acme - Slack' }), UNREAD_DOT);
  assert.equal(computeBadge({ unread: 4 }, { showUnreadDot: false }), '');
  assert.equal(computeBadge({ mentions: 1 }, { showUnreadDot: false }), '1');
});

test('nothing unread clears the badge', () => {
  assert.equal(computeBadge({ title: 'general | Acme - Slack' }), '');
  assert.equal(computeBadge({ mentions: -1, unread: 'x' }), '');
  assert.equal(computeBadge(), '');
});
