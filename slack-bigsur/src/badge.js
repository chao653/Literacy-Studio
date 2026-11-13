'use strict';

const UNREAD_DOT = '•';

function toCount(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.floor(number) : 0;
}

// Slack prefixes the page title with "*" while anything is unread; the sidebar DOM
// (counted by the preload script) supplies the number of mentions and direct messages.
function computeBadge({ mentions = 0, unread = 0, title = '' } = {}, { showUnreadDot = true } = {}) {
  const mentionCount = toCount(mentions);
  if (mentionCount > 0) {
    return mentionCount > 99 ? '99+' : String(mentionCount);
  }
  const hasUnread = toCount(unread) > 0 || /^\s*[*!]/.test(String(title));
  return showUnreadDot && hasUnread ? UNREAD_DOT : '';
}

module.exports = { UNREAD_DOT, computeBadge };
