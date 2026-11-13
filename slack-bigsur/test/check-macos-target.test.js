'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { checkBundle, compareVersions, decodeVersion, readSlices } = require('../build/check-macos-target');

const CPU = { x64: 0x01000007, arm64: 0x0100000c };

function thinMachO(cpu, { minos = [11, 0], platform = 1, command = 0x32 } = {}) {
  const header = Buffer.alloc(32);
  header.writeUInt32LE(0xfeedfacf, 0);
  header.writeUInt32LE(CPU[cpu], 4);
  header.writeUInt32LE(2, 12);
  header.writeUInt32LE(1, 16);
  header.writeUInt32LE(24, 20);
  const load = Buffer.alloc(24);
  load.writeUInt32LE(command, 0);
  load.writeUInt32LE(24, 4);
  load.writeUInt32LE(platform, 8);
  load.writeUInt32LE((minos[0] << 16) | (minos[1] << 8), 12);
  return Buffer.concat([header, load]);
}

function fatMachO(slices) {
  const align = 4096;
  const header = Buffer.alloc(align);
  header.writeUInt32BE(0xcafebabe, 0);
  header.writeUInt32BE(slices.length, 4);
  const bodies = [];
  slices.forEach(([cpu, slice], index) => {
    const offset = align * (index + 1);
    const entry = 8 + index * 20;
    header.writeUInt32BE(CPU[cpu], entry);
    header.writeUInt32BE(offset, entry + 8);
    header.writeUInt32BE(slice.length, entry + 12);
    header.writeUInt32BE(12, entry + 16);
    bodies.push(Buffer.concat([slice, Buffer.alloc(align - slice.length)]));
  });
  return Buffer.concat([header, ...bodies]);
}

function plist(minimum) {
  return `<?xml version="1.0"?><plist><dict><key>LSMinimumSystemVersion</key>\n<string>${minimum}</string></dict></plist>`;
}

function makeBundle(files) {
  const app = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'macho-')), 'Test.app');
  for (const [relative, contents] of Object.entries(files)) {
    const fullPath = path.join(app, relative);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, contents);
  }
  return app;
}

test('versions decode and compare numerically', () => {
  assert.equal(decodeVersion((11 << 16) | (2 << 8) | 3), '11.2.3');
  assert.equal(compareVersions('11.0.0', '11.0'), 0);
  assert.equal(compareVersions('12.0', '11.6.8'), 1);
  assert.equal(compareVersions('10.15', '11'), -1);
  assert.equal(compareVersions('11.10', '11.9'), 1);
});

test('a bundle built for macOS 11 passes', () => {
  const app = makeBundle({
    'Contents/Info.plist': plist('11.0'),
    'Contents/MacOS/Test': thinMachO('arm64'),
    'Contents/Frameworks/Lib.dylib': fatMachO([['x64', thinMachO('x64')], ['arm64', thinMachO('arm64', { minos: [10, 15] })]]),
    'Contents/Resources/app.asar': Buffer.from('not a binary'),
  });
  const result = checkBundle(app, { target: '11.0' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.files, 2);
  assert.deepEqual(result.archs, ['arm64', 'x64']);
  assert.equal(result.highest, '11.0.0');
  assert.equal(result.plistMinimum, '11.0');
});

test('a slice that needs a newer macOS is reported', () => {
  const app = makeBundle({
    'Contents/Info.plist': plist('11.0'),
    'Contents/MacOS/Test': fatMachO([['x64', thinMachO('x64')], ['arm64', thinMachO('arm64', { minos: [12, 0] })]]),
  });
  const result = checkBundle(app, { target: '11.0' });
  assert.equal(result.highest, '12.0.0');
  assert.deepEqual(result.problems, [`${path.join('Contents', 'MacOS', 'Test')} (arm64): requires macOS 12.0.0`]);
});

test('missing minimums, wrong architectures and plist mismatches are reported', () => {
  const app = makeBundle({
    'Contents/Info.plist': plist('12.0'),
    'Contents/MacOS/Test': thinMachO('x64', { command: 0x19 }),
    'Contents/MacOS/Helper': thinMachO('x64', { platform: 2 }),
  });
  const problems = checkBundle(app, { target: '11.0', arch: 'arm64' }).problems.join('\n');
  assert.match(problems, /Test \(x64\): unexpected architecture/);
  assert.match(problems, /Test \(x64\): no macOS minimum version/);
  assert.match(problems, /Helper \(x64\): no macOS minimum version/);
  assert.match(problems, /LSMinimumSystemVersion is 12\.0, expected 11\.0/);
});

test('files that only look like fat binaries are ignored', () => {
  const javaClass = Buffer.from([0xca, 0xfe, 0xba, 0xbe, 0x00, 0x00, 0x00, 0x37, 0, 0, 0, 0]);
  const app = makeBundle({ 'Contents/Resources/Thing.class': javaClass, 'Contents/Resources/empty': Buffer.alloc(0) });
  assert.deepEqual(readSlices(path.join(app, 'Contents/Resources/Thing.class')), []);
  assert.deepEqual(checkBundle(app).problems, ['no Mach-O files found']);
});
