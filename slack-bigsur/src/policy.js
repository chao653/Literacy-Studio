'use strict';

const START_URL = 'https://app.slack.com/client';

const SLACK_APP_DOMAINS = ['slack.com', 'slack-gov.com'];
const TRUSTED_DOMAINS = [...SLACK_APP_DOMAINS, 'slack-edge.com'];

// Hosts under slack.com that serve documentation or marketing pages rather than the client.
const SLACK_INFO_HOSTS = new Set([
  'slack.com',
  'www.slack.com',
  'api.slack.com',
  'status.slack.com',
  'slack-gov.com',
  'www.slack-gov.com',
]);

const EXTERNAL_SCHEMES = new Set([
  'http:',
  'https:',
  'mailto:',
  'tel:',
  'sms:',
  'facetime:',
  'facetime-audio:',
  'zoommtg:',
  'zoomus:',
  'msteams:',
  'webex:',
  'webexteams:',
]);

const BLOCKED_SCHEMES = new Set([
  'about:',
  'blob:',
  'chrome:',
  'chrome-extension:',
  'data:',
  'devtools:',
  'file:',
  'filesystem:',
  'javascript:',
  'view-source:',
  'vbscript:',
  'afp:',
  'nfs:',
  'smb:',
  'x-apple.systempreferences:',
]);

function parseUrl(value) {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function hostMatches(hostname, domains) {
  const host = String(hostname || '').toLowerCase().replace(/\.$/, '');
  return domains.some((domain) => host === domain || host.endsWith(`.${domain}`));
}

function isTrustedOrigin(value) {
  const url = parseUrl(value);
  return Boolean(url && url.protocol === 'https:' && hostMatches(url.hostname, TRUSTED_DOMAINS));
}

function isSlackAppUrl(value) {
  const url = parseUrl(value);
  return Boolean(
    url &&
      url.protocol === 'https:' &&
      hostMatches(url.hostname, SLACK_APP_DOMAINS) &&
      !SLACK_INFO_HOSTS.has(url.hostname.toLowerCase()),
  );
}

function isSlackUrl(value) {
  const url = parseUrl(value);
  return Boolean(url && url.protocol === 'https:' && hostMatches(url.hostname, SLACK_APP_DOMAINS));
}

const SLACK_ID = /^[A-Z0-9]+$/;

// https://api.slack.com/reference/deep-linking
function slackDeepLinkToWeb(value) {
  const url = parseUrl(value);
  if (!url || url.protocol !== 'slack:') return null;

  const action = (url.hostname || url.pathname.replace(/^\/+/, '').split('/')[0] || '').toLowerCase();
  const team = url.searchParams.get('team');
  const id = url.searchParams.get('id');

  if (!team || !SLACK_ID.test(team)) {
    return action === 'open' ? START_URL : null;
  }
  if (action === 'channel' && id && SLACK_ID.test(id)) {
    return `${START_URL}/${team}/${id}`;
  }
  return `${START_URL}/${team}`;
}

// Decides what happens when a page asks for a new window (target=_blank, window.open).
//   'in-app'   open a child window of the wrapper (keeps the Slack session and window.opener)
//   'download' download the file in the background instead of opening a blank window
//   'external' hand the URL to the default browser or app
//   'slack'    a slack:// deep link that can be shown in the main window
//   'ignore'   do nothing
function classifyWindowOpen(value, disposition = 'foreground-tab') {
  const url = parseUrl(value);
  if (!url) return 'ignore';

  const isPopup = disposition === 'new-window';

  if (url.protocol === 'slack:') return 'slack';
  if (url.protocol === 'about:') return isPopup ? 'in-app' : 'ignore';
  if (url.protocol === 'blob:') {
    return isSlackUrl(url.origin) ? 'in-app' : 'ignore';
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    return BLOCKED_SCHEMES.has(url.protocol) ? 'ignore' : 'external';
  }

  const host = url.hostname.toLowerCase();
  if (host === 'slack-redir.net' || host.endsWith('.slack-redir.net')) return 'external';
  if (host === 'files.slack.com' && /\/download\//.test(url.pathname)) return 'download';
  if (isSlackAppUrl(url.href)) return 'in-app';
  // Scripted popups (window.open with features) are usually sign-in or OAuth flows that
  // report back to their opener, so they have to stay inside the wrapper.
  if (isPopup) return 'in-app';
  return 'external';
}

// Decides how a URL that should leave the wrapper may be opened.
//   'open'    open without asking
//   'confirm' ask the user first (unknown custom scheme)
//   'slack'   a slack:// deep link
//   'block'   never open
function externalOpenPolicy(value) {
  const url = parseUrl(value);
  if (!url) return 'block';
  if (url.protocol === 'slack:') return 'slack';
  if (BLOCKED_SCHEMES.has(url.protocol)) return 'block';
  if (EXTERNAL_SCHEMES.has(url.protocol)) return 'open';
  return /^[a-z][a-z0-9+.-]*:$/.test(url.protocol) ? 'confirm' : 'block';
}

// Decides what happens to a top-level navigation inside a wrapper window.
// Every http(s) page may load in place because enterprise SSO redirects through
// arbitrary identity-provider domains before landing back on Slack.
//   'allow' | 'external' | 'slack' | 'block'
function classifyNavigation(value, { allowedFileUrls = [] } = {}) {
  const url = parseUrl(value);
  if (!url) return 'block';
  if (url.protocol === 'https:' || url.protocol === 'http:') {
    const host = url.hostname.toLowerCase();
    if (host === 'slack-redir.net' || host.endsWith('.slack-redir.net')) return 'external';
    return 'allow';
  }
  if (url.protocol === 'file:') {
    const withoutQuery = `${url.protocol}//${url.host}${url.pathname}`;
    return allowedFileUrls.includes(withoutQuery) ? 'allow' : 'block';
  }
  if (url.protocol === 'slack:') return 'slack';
  return 'external';
}

// Accepts what a user might paste: a Slack web URL or a slack:// deep link.
function normalizeUserSlackLink(text) {
  const trimmed = String(text || '').trim();
  if (!trimmed || /\s/.test(trimmed)) return null;
  const deepLink = slackDeepLinkToWeb(trimmed);
  if (deepLink) return deepLink;
  return isSlackUrl(trimmed) ? new URL(trimmed).href : null;
}

module.exports = {
  START_URL,
  parseUrl,
  hostMatches,
  isTrustedOrigin,
  isSlackAppUrl,
  isSlackUrl,
  slackDeepLinkToWeb,
  classifyWindowOpen,
  externalOpenPolicy,
  classifyNavigation,
  normalizeUserSlackLink,
};
