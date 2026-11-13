'use strict';

// session.setUserAgent() only changes the User-Agent string. The client hints
// (navigator.userAgentData, Sec-CH-UA*) would still describe Electron's Chromium 138
// without a "Google Chrome" brand, so they are overridden through the DevTools
// protocol for the page and, via auto-attach, for its cross-site iframes and workers.
const AUTO_ATTACH = { autoAttach: true, waitForDebuggerOnStart: true, flatten: true };

function overrideMethod(targetType) {
  // Workers have no Emulation domain; Network.setUserAgentOverride covers them.
  return targetType === 'page' || targetType === 'iframe'
    ? 'Emulation.setUserAgentOverride'
    : 'Network.setUserAgentOverride';
}

function applyUserAgentOverride(contents, profile, log = console) {
  const dbg = contents.debugger;
  const override = { userAgent: profile.userAgent, userAgentMetadata: profile.metadata };
  const warn = (what) => (error) => log.warn(`[user-agent] ${what}: ${error.message}`);

  dbg.on('message', (_event, method, params) => {
    if (method !== 'Target.attachedToTarget' || !params || !params.sessionId) return;
    const sessionId = params.sessionId;
    const type = params.targetInfo && params.targetInfo.type;
    const steps = [dbg.sendCommand(overrideMethod(type), override, sessionId)];
    if (type === 'iframe') steps.push(dbg.sendCommand('Target.setAutoAttach', AUTO_ATTACH, sessionId));

    // The target is paused until it is told to run, so it must be resumed even when
    // an override fails.
    Promise.allSettled(steps)
      .then(() => dbg.sendCommand('Runtime.runIfWaitingForDebugger', {}, sessionId))
      .catch(() => {});
  });

  try {
    dbg.attach('1.3');
  } catch (error) {
    warn('could not attach to the page')(error);
    return Promise.resolve(false);
  }
  return Promise.all([
    dbg.sendCommand('Emulation.setUserAgentOverride', override).then(
      () => true,
      (error) => {
        warn('override failed')(error);
        return false;
      },
    ),
    dbg.sendCommand('Target.setAutoAttach', AUTO_ATTACH).catch(warn('auto-attach failed')),
  ]).then(([applied]) => applied);
}

module.exports = { applyUserAgentOverride, overrideMethod };
