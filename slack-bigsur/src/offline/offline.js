'use strict';

(() => {
  const STRINGS = {
    en: {
      title: 'Can’t reach Slack',
      body: 'Check your internet connection. The app retries automatically when the connection comes back.',
      retry: 'Try Again',
      waiting: 'Retrying in {seconds}s…',
    },
    zh: {
      title: '无法连接到 Slack',
      body: '请检查网络连接。网络恢复后应用会自动重试。',
      retry: '重试',
      waiting: '{seconds} 秒后自动重试…',
    },
  };
  const RETRY_SECONDS = 15;

  const params = new URLSearchParams(window.location.search);
  const strings = STRINGS[params.get('lang')] || STRINGS.en;
  const target = params.get('url') || 'https://app.slack.com/client';
  const $ = (id) => document.getElementById(id);

  $('title').textContent = strings.title;
  $('body').textContent = strings.body;
  $('detail').textContent = [params.get('error'), params.get('code')].filter(Boolean).join(' · ');
  $('retry').textContent = strings.retry;

  const retry = () => {
    if (/^https:\/\//.test(target)) window.location.replace(target);
  };

  let remaining = RETRY_SECONDS;
  const tick = () => {
    $('status').textContent = strings.waiting.replace('{seconds}', String(remaining));
    if (remaining <= 0) {
      if (navigator.onLine) retry();
      remaining = RETRY_SECONDS;
    } else {
      remaining -= 1;
    }
  };

  $('retry').addEventListener('click', retry);
  window.addEventListener('online', retry);
  tick();
  setInterval(tick, 1000);
})();
