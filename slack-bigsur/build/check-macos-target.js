#!/usr/bin/env node
'use strict';

// Verifies that a packaged .app can launch on the target macOS version: every
// Mach-O slice must declare a minimum OS no newer than the target, and the
// bundle's Info.plist must agree. Usage:
//   node build/check-macos-target.js "dist/mac-arm64/Slack for Big Sur.app" [--target=11.0] [--arch=arm64]

const fs = require('fs');
const path = require('path');

const MH_MAGIC_64 = 0xfeedfacf;
const FAT_MAGIC = 0xcafebabe;
const FAT_MAGIC_64 = 0xcafebabf;
const LC_VERSION_MIN_MACOSX = 0x24;
const LC_BUILD_VERSION = 0x32;
const PLATFORM_MACOS = 1;
const MAX_FAT_ARCHS = 16;
const CPU_NAMES = { 0x01000007: 'x64', 0x0100000c: 'arm64' };

function readAt(fd, position, length) {
  const buffer = Buffer.alloc(length);
  const read = fs.readSync(fd, buffer, 0, length, position);
  return buffer.subarray(0, read);
}

function decodeVersion(value) {
  return `${value >>> 16}.${(value >>> 8) & 0xff}.${value & 0xff}`;
}

function compareVersions(a, b) {
  const left = String(a).split('.').map(Number);
  const right = String(b).split('.').map(Number);
  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    const diff = (left[index] || 0) - (right[index] || 0);
    if (diff !== 0) return Math.sign(diff);
  }
  return 0;
}

function readThinSlice(fd, offset) {
  const header = readAt(fd, offset, 32);
  if (header.length < 32 || header.readUInt32LE(0) !== MH_MAGIC_64) return null;
  const cpu = CPU_NAMES[header.readUInt32LE(4)] || `cpu-0x${header.readUInt32LE(4).toString(16)}`;
  const commandCount = header.readUInt32LE(16);
  const commands = readAt(fd, offset + 32, header.readUInt32LE(20));
  let position = 0;
  for (let index = 0; index < commandCount && position + 8 <= commands.length; index += 1) {
    const command = commands.readUInt32LE(position);
    const size = commands.readUInt32LE(position + 4);
    if (size < 8) break;
    if (command === LC_BUILD_VERSION && position + 16 <= commands.length) {
      const platform = commands.readUInt32LE(position + 8);
      const minos = decodeVersion(commands.readUInt32LE(position + 12));
      return { cpu, minos, platform: platform === PLATFORM_MACOS ? 'macos' : `platform-${platform}` };
    }
    if (command === LC_VERSION_MIN_MACOSX && position + 12 <= commands.length) {
      return { cpu, minos: decodeVersion(commands.readUInt32LE(position + 8)), platform: 'macos' };
    }
    position += size;
  }
  return { cpu, minos: null, platform: null };
}

function fatSliceOffsets(fd, header) {
  const magic = header.readUInt32BE(0);
  const count = header.readUInt32BE(4);
  if (count === 0 || count > MAX_FAT_ARCHS) return null;
  const entrySize = magic === FAT_MAGIC_64 ? 32 : 20;
  const table = readAt(fd, 8, count * entrySize);
  if (table.length < count * entrySize) return null;
  const offsets = [];
  for (let index = 0; index < count; index += 1) {
    const entry = index * entrySize;
    offsets.push(magic === FAT_MAGIC_64 ? Number(table.readBigUInt64BE(entry + 8)) : table.readUInt32BE(entry + 8));
  }
  return offsets;
}

/** Returns one entry per Mach-O slice in the file, or an empty array for non-Mach-O files. */
function readSlices(filePath) {
  const fd = fs.openSync(filePath, 'r');
  try {
    const header = readAt(fd, 0, 8);
    if (header.length < 8) return [];
    if (header.readUInt32LE(0) === MH_MAGIC_64) return [readThinSlice(fd, 0)];
    const magic = header.readUInt32BE(0);
    if (magic !== FAT_MAGIC && magic !== FAT_MAGIC_64) return [];
    const offsets = fatSliceOffsets(fd, header);
    if (!offsets) return [];
    return offsets.map((offset) => readThinSlice(fd, offset)).filter(Boolean);
  } finally {
    fs.closeSync(fd);
  }
}

function* walkFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) yield* walkFiles(fullPath);
    else if (entry.isFile()) yield fullPath;
  }
}

function readPlistMinimum(appPath) {
  const plistPath = path.join(appPath, 'Contents', 'Info.plist');
  if (!fs.existsSync(plistPath)) return undefined;
  const match = fs
    .readFileSync(plistPath, 'utf8')
    .match(/<key>LSMinimumSystemVersion<\/key>\s*<string>([^<]+)<\/string>/);
  return match ? match[1].trim() : null;
}

/**
 * Scans a bundle and returns { files, archs, highest, problems }. A problem is
 * any slice newer than the target, without a macOS minimum, for an unexpected
 * architecture, or an Info.plist minimum that does not match the target.
 */
function checkBundle(appPath, { target = '11.0', arch } = {}) {
  const problems = [];
  const archs = new Set();
  let files = 0;
  let highest = null;

  for (const filePath of walkFiles(appPath)) {
    const slices = readSlices(filePath);
    if (slices.length === 0) continue;
    files += 1;
    const relative = path.relative(appPath, filePath);
    for (const slice of slices) {
      archs.add(slice.cpu);
      if (arch && slice.cpu !== arch) problems.push(`${relative} (${slice.cpu}): unexpected architecture`);
      if (!slice.minos || slice.platform !== 'macos') {
        problems.push(`${relative} (${slice.cpu}): no macOS minimum version`);
        continue;
      }
      if (!highest || compareVersions(slice.minos, highest) > 0) highest = slice.minos;
      if (compareVersions(slice.minos, target) > 0) {
        problems.push(`${relative} (${slice.cpu}): requires macOS ${slice.minos}`);
      }
    }
  }

  if (files === 0) problems.push('no Mach-O files found');
  const plistMinimum = readPlistMinimum(appPath);
  if (plistMinimum !== undefined && (plistMinimum === null || compareVersions(plistMinimum, target) !== 0)) {
    problems.push(`Info.plist LSMinimumSystemVersion is ${plistMinimum || 'missing'}, expected ${target}`);
  }

  return { files, archs: [...archs].sort(), highest, plistMinimum, problems };
}

function main(argv) {
  const option = (name) => {
    const prefix = `--${name}=`;
    const found = argv.find((value) => value.startsWith(prefix));
    return found ? found.slice(prefix.length) : undefined;
  };
  const appPath = argv.find((value) => !value.startsWith('--'));
  if (!appPath || !fs.existsSync(appPath)) {
    console.error('usage: check-macos-target.js <path/to/App.app> [--target=11.0] [--arch=arm64|x64]');
    return 2;
  }
  const target = option('target') || '11.0';
  const result = checkBundle(appPath, { target, arch: option('arch') });
  console.log(
    `${path.basename(appPath)}: ${result.files} Mach-O files, architectures ${result.archs.join(', ') || 'none'}, ` +
      `highest minimum macOS ${result.highest || 'unknown'}, Info.plist minimum ${result.plistMinimum || 'missing'}`,
  );
  for (const problem of result.problems) console.error(`  ✗ ${problem}`);
  if (result.problems.length > 0) return 1;
  console.log(`  ✓ every binary launches on macOS ${target}`);
  return 0;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));

module.exports = { checkBundle, compareVersions, decodeVersion, readSlices };
