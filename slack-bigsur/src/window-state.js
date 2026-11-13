'use strict';

const DEFAULT_SIZE = { width: 1280, height: 820 };
const MIN_SIZE = { width: 640, height: 480 };
// How much of the window must overlap a display before saved coordinates are trusted.
const MIN_VISIBLE_PX = 80;

function isValidRect(rect) {
  return Boolean(rect) && ['x', 'y', 'width', 'height'].every((key) => Number.isFinite(rect[key]));
}

function overlap(a, b) {
  const width = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
  const height = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
  return width > 0 && height > 0 ? { width, height } : null;
}

// Returns bounds for a new window: the saved ones when they still land on a connected
// display, otherwise just the saved size so the OS can place the window.
function restoreBounds(saved, workAreas) {
  if (!isValidRect(saved)) return { ...DEFAULT_SIZE };

  const size = {
    width: Math.max(MIN_SIZE.width, Math.round(saved.width)),
    height: Math.max(MIN_SIZE.height, Math.round(saved.height)),
  };
  const candidate = { x: Math.round(saved.x), y: Math.round(saved.y), ...size };
  const visible = (workAreas || []).some((area) => {
    const shared = overlap(candidate, area);
    return shared && shared.width >= MIN_VISIBLE_PX && shared.height >= MIN_VISIBLE_PX;
  });
  return visible ? candidate : size;
}

module.exports = { DEFAULT_SIZE, MIN_SIZE, restoreBounds };
