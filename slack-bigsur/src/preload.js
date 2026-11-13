'use strict';

// Runs in an isolated world: it can read Slack's DOM but shares no JavaScript with
// the page, and exposes nothing to it.
const { ipcRenderer } = require('electron');

const POLL_MS = 2000;
const UNREAD_CHANNEL = '.p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted)';
const MENTION_BADGE = `${UNREAD_CHANNEL} .p-channel_sidebar__badge`;
const UNREAD_SPECIAL_LINK = [
  '.p-channel_sidebar__link--unread',
  ':not([data-sidebar-link-id="Punreads"])',
  ':not([data-sidebar-link-id="Pdrafts"])',
  ':not([data-sidebar-link-id="Pdms"])',
  ':not([data-sidebar-link-id="Ppaid-benefits"])',
].join('');

function isSlackClientPage() {
  const host = window.location.hostname;
  return window.location.protocol === 'https:' && (host === 'slack.com' || host.endsWith('.slack.com'));
}

function readCounts() {
  let mentions = 0;
  for (const badge of document.querySelectorAll(MENTION_BADGE)) {
    const value = Number.parseInt(badge.textContent, 10);
    mentions += Number.isFinite(value) && value > 0 ? value : 1;
  }
  mentions += document.querySelectorAll(UNREAD_SPECIAL_LINK).length;
  const unread = document.querySelectorAll(UNREAD_CHANNEL).length;
  return { mentions, unread };
}

let last = '';
function report() {
  if (!isSlackClientPage() || !document.body) return;
  const counts = readCounts();
  const key = `${counts.mentions}/${counts.unread}`;
  if (key === last) return;
  last = key;
  ipcRenderer.send('slack:unread', counts);
}

window.addEventListener('DOMContentLoaded', () => {
  report();
  setInterval(report, POLL_MS);
});
