'use strict';

// Slack's email sign-in shows a Google reCAPTCHA Enterprise check. On networks that cannot reach
// www.google.com or www.gstatic.com (mainland China, some company firewalls) the widget never
// appears and "Sign In With Email" stays disabled with no error. Google serves the same files from
// www.recaptcha.net and www.gstatic.cn for exactly this case, so requests for an unreachable host
// are sent to its mirror instead.
const MIRRORS = Object.freeze([
  {
    prefix: 'https://www.google.com/recaptcha/',
    mirror: 'https://www.recaptcha.net/recaptcha/',
    probe: 'https://www.google.com/generate_204',
  },
  {
    prefix: 'https://www.gstatic.com/recaptcha/',
    mirror: 'https://www.gstatic.cn/recaptcha/',
    probe: 'https://www.gstatic.com/generate_204',
  },
]);
const PROBE_TIMEOUT_MS = 4000;
const PROBE_TTL_MS = 10 * 60 * 1000;
// Failures of these resource types leave the widget blank; failed beacons and images do not.
const ESSENTIAL_RESOURCES = new Set(['script', 'subFrame']);

function findMirror(url) {
  return (typeof url === 'string' && MIRRORS.find((entry) => url.startsWith(entry.prefix))) || null;
}

function mirrorUrl(url) {
  const entry = findMirror(url);
  return entry ? entry.mirror + url.slice(entry.prefix.length) : null;
}

/** Caches one probe per URL for ttlMs; a probe that throws or rejects means "unreachable". */
function createReachability(probe, { ttlMs = PROBE_TTL_MS, now = Date.now } = {}) {
  const cache = new Map();
  const remember = (url, promise) => {
    cache.set(url, { promise, expires: now() + ttlMs });
    return promise;
  };
  return {
    isReachable(url) {
      const cached = cache.get(url);
      if (cached && cached.expires > now()) return cached.promise;
      let attempt;
      try {
        attempt = Promise.resolve(probe(url));
      } catch (error) {
        attempt = Promise.reject(error);
      }
      return remember(
        url,
        attempt.then(
          () => true,
          () => false,
        ),
      );
    },
    markUnreachable(url) {
      remember(url, Promise.resolve(false));
    },
  };
}

function sessionProbe(ses, timeoutMs = PROBE_TIMEOUT_MS) {
  return async (url) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      await ses.fetch(url, { method: 'HEAD', cache: 'no-store', signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
  };
}

/**
 * Sends reCAPTCHA requests to Google's mirror when the usual host is unreachable through this
 * session (so a system proxy or VPN is respected), and calls onUnavailable({ url, host, error,
 * mirrored, webContentsId }) when an essential reCAPTCHA request still fails.
 */
function registerRecaptchaFallback(ses, { onUnavailable = () => {}, probe = sessionProbe(ses), now = Date.now } = {}) {
  const reachability = createReachability(probe, { now });

  ses.webRequest.onBeforeRequest({ urls: MIRRORS.map((entry) => `${entry.prefix}*`) }, (details, callback) => {
    const entry = findMirror(details.url);
    if (!entry) {
      callback({});
      return;
    }
    reachability.isReachable(entry.probe).then((reachable) => {
      callback(reachable ? {} : { redirectURL: entry.mirror + details.url.slice(entry.prefix.length) });
    });
  });

  const watched = MIRRORS.flatMap((entry) => [`${entry.prefix}*`, `${entry.mirror}*`]);
  ses.webRequest.onErrorOccurred({ urls: watched }, (details) => {
    if (details.error === 'net::ERR_ABORTED' || !ESSENTIAL_RESOURCES.has(details.resourceType)) return;
    const entry = findMirror(details.url);
    if (entry) reachability.markUnreachable(entry.probe);
    onUnavailable({
      url: details.url,
      host: new URL(details.url).host,
      error: details.error,
      mirrored: !entry,
      webContentsId: details.webContentsId,
    });
  });

  return reachability;
}

module.exports = { MIRRORS, createReachability, findMirror, mirrorUrl, registerRecaptchaFallback };
