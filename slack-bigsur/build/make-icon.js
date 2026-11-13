'use strict';

// Renders build/icon.png (1024×1024) with Chromium's canvas: `npm run icon`.
// electron-builder turns it into the .icns file when packaging.
const fs = require('node:fs');
const path = require('node:path');
const { app, BrowserWindow } = require('electron');

const DRAW = `(() => {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // macOS 11 icon grid: an 824 px rounded square centred on the 1024 px canvas.
  const inset = 100;
  const side = size - inset * 2;
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.28)';
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 12;
  const tile = new Path2D();
  tile.roundRect(inset, inset, side, side, 185);
  const background = ctx.createLinearGradient(0, inset, 0, inset + side);
  background.addColorStop(0, '#7c3085');
  background.addColorStop(1, '#3f0e40');
  ctx.fillStyle = background;
  ctx.fill(tile);
  ctx.restore();

  // Speech bubble with a tail at the bottom left.
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.22)';
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 8;
  const bubble = new Path2D();
  bubble.roundRect(252, 282, 520, 380, 120);
  // Wound the same way as roundRect so the overlap stays filled.
  bubble.moveTo(340, 610);
  bubble.lineTo(470, 650);
  bubble.lineTo(300, 760);
  bubble.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill(bubble);
  ctx.restore();

  const dots = ['#36c5f0', '#2eb67d', '#ecb22e'];
  dots.forEach((color, index) => {
    ctx.beginPath();
    ctx.arc(392 + index * 120, 472, 42, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });

  return canvas.toDataURL('image/png');
})()`;

app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, webPreferences: { sandbox: true, contextIsolation: true } });
  await win.loadURL('data:text/html,<!doctype html><title>icon</title>');
  const dataUrl = await win.webContents.executeJavaScript(DRAW);
  const output = path.join(__dirname, 'icon.png');
  fs.writeFileSync(output, Buffer.from(dataUrl.split(',')[1], 'base64'));
  console.log(`wrote ${output}`);
  app.quit();
});
