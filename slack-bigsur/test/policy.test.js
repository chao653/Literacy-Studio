'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const policy = require('../src/policy');

test('trusted origins are Slack’s own https hosts', () => {
  assert.ok(policy.isTrustedOrigin('https://app.slack.com'));
  assert.ok(policy.isTrustedOrigin('https://acme.enterprise.slack.com/'));
  assert.ok(policy.isTrustedOrigin('https://a.slack-edge.com/x.js'));
  assert.ok(policy.isTrustedOrigin('https://app.slack-gov.com'));
  assert.ok(!policy.isTrustedOrigin('http://app.slack.com'));
  assert.ok(!policy.isTrustedOrigin('https://slack.com.evil.example'));
  assert.ok(!policy.isTrustedOrigin('https://evilslack.com'));
  assert.ok(!policy.isTrustedOrigin('file:///etc/passwd'));
  assert.ok(!policy.isTrustedOrigin(''));
  assert.ok(!policy.isTrustedOrigin(undefined));
});

test('Slack app URLs exclude documentation hosts', () => {
  assert.ok(policy.isSlackAppUrl('https://app.slack.com/client/T1/C1'));
  assert.ok(policy.isSlackAppUrl('https://acme.slack.com/archives/C1/p123'));
  assert.ok(!policy.isSlackAppUrl('https://slack.com/help'));
  assert.ok(!policy.isSlackAppUrl('https://api.slack.com/apps'));
  assert.ok(!policy.isSlackAppUrl('https://status.slack.com'));
  assert.ok(policy.isSlackUrl('https://slack.com/help'));
});

test('slack:// deep links map to web client URLs', () => {
  assert.equal(policy.slackDeepLinkToWeb('slack://open'), 'https://app.slack.com/client');
  assert.equal(policy.slackDeepLinkToWeb('slack://open?team=T123'), 'https://app.slack.com/client/T123');
  assert.equal(policy.slackDeepLinkToWeb('slack://channel?team=T123&id=C456'), 'https://app.slack.com/client/T123/C456');
  assert.equal(policy.slackDeepLinkToWeb('slack://user?team=T123&id=U456'), 'https://app.slack.com/client/T123');
  assert.equal(policy.slackDeepLinkToWeb('slack://channel?team=T1/../x&id=C1'), null);
  assert.equal(policy.slackDeepLinkToWeb('slack://channel?team=T1&id=C1%2F..'), 'https://app.slack.com/client/T1');
  assert.equal(policy.slackDeepLinkToWeb('slack://unknown'), null);
  assert.equal(policy.slackDeepLinkToWeb('https://app.slack.com'), null);
});

test('window.open requests are routed by URL and disposition', () => {
  assert.equal(policy.classifyWindowOpen('https://app.slack.com/client/T1', 'foreground-tab'), 'in-app');
  assert.equal(policy.classifyWindowOpen('https://example.com/', 'foreground-tab'), 'external');
  assert.equal(policy.classifyWindowOpen('https://accounts.google.com/o/oauth2', 'new-window'), 'in-app');
  assert.equal(policy.classifyWindowOpen('https://slack-redir.net/link?url=x', 'new-window'), 'external');
  assert.equal(policy.classifyWindowOpen('https://files.slack.com/files-pri/T1-F1/download/a.pdf'), 'download');
  assert.equal(policy.classifyWindowOpen('https://files.slack.com/files-pri/T1-F1/a.pdf'), 'in-app');
  assert.equal(policy.classifyWindowOpen('https://slack.com/help/articles/1'), 'external');
  assert.equal(policy.classifyWindowOpen('about:blank', 'new-window'), 'in-app');
  assert.equal(policy.classifyWindowOpen('about:blank', 'foreground-tab'), 'ignore');
  assert.equal(policy.classifyWindowOpen('blob:https://app.slack.com/1234'), 'in-app');
  assert.equal(policy.classifyWindowOpen('blob:https://evil.example/1234'), 'ignore');
  assert.equal(policy.classifyWindowOpen('slack://channel?team=T1&id=C1'), 'slack');
  assert.equal(policy.classifyWindowOpen('mailto:a@example.com'), 'external');
  assert.equal(policy.classifyWindowOpen('zoommtg://zoom.us/join?confno=1'), 'external');
  assert.equal(policy.classifyWindowOpen('file:///etc/passwd'), 'ignore');
  assert.equal(policy.classifyWindowOpen('javascript:alert(1)'), 'ignore');
  assert.equal(policy.classifyWindowOpen('not a url'), 'ignore');
});

test('external URLs are opened, confirmed or blocked by scheme', () => {
  assert.equal(policy.externalOpenPolicy('https://example.com'), 'open');
  assert.equal(policy.externalOpenPolicy('mailto:a@example.com'), 'open');
  assert.equal(policy.externalOpenPolicy('zoommtg://zoom.us/join'), 'open');
  assert.equal(policy.externalOpenPolicy('slack://open'), 'slack');
  assert.equal(policy.externalOpenPolicy('vscode://file/x'), 'confirm');
  assert.equal(policy.externalOpenPolicy('file:///Applications/Calculator.app'), 'block');
  assert.equal(policy.externalOpenPolicy('smb://server/share'), 'block');
  assert.equal(policy.externalOpenPolicy('x-apple.systempreferences:com.apple.preference.security'), 'block');
  assert.equal(policy.externalOpenPolicy('javascript:alert(1)'), 'block');
  assert.equal(policy.externalOpenPolicy(''), 'block');
});

test('in-window navigation allows web pages and only known local files', () => {
  const offline = 'file:///Applications/Slack%20for%20Big%20Sur.app/Contents/Resources/app.asar/src/offline/offline.html';
  assert.equal(policy.classifyNavigation('https://app.slack.com/client'), 'allow');
  assert.equal(policy.classifyNavigation('https://login.microsoftonline.com/saml'), 'allow');
  assert.equal(policy.classifyNavigation('https://slack-redir.net/link?url=x'), 'external');
  assert.equal(policy.classifyNavigation(`${offline}?url=x`, { allowedFileUrls: [offline] }), 'allow');
  assert.equal(policy.classifyNavigation('file:///etc/passwd', { allowedFileUrls: [offline] }), 'block');
  assert.equal(policy.classifyNavigation('slack://open'), 'slack');
  assert.equal(policy.classifyNavigation('mailto:a@example.com'), 'external');
  assert.equal(policy.classifyNavigation('garbage'), 'block');
});

test('pasted links are accepted only when they point at Slack', () => {
  assert.equal(policy.normalizeUserSlackLink('  https://acme.slack.com/archives/C1/p1 \n'), 'https://acme.slack.com/archives/C1/p1');
  assert.equal(policy.normalizeUserSlackLink('slack://channel?team=T1&id=C1'), 'https://app.slack.com/client/T1/C1');
  assert.equal(policy.normalizeUserSlackLink('https://example.com'), null);
  assert.equal(policy.normalizeUserSlackLink('look at https://acme.slack.com'), null);
  assert.equal(policy.normalizeUserSlackLink(''), null);
});
