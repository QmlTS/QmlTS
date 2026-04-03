#!/usr/bin/env bun
/**
 * Generate the pre-built Qt 6.11 registry snapshot.
 *
 * Usage:
 *   QT_DIR=/path/to/qt/6.11.0/gcc_64 bun run generate
 *
 * This script is intended for maintainers only — run it when Qt is
 * upgraded, then commit the updated snapshot file.
 */

import { join } from 'node:path';
import { RegistryBuilder } from '../src/registry/builder.js';
import { RegistrySnapshot } from '../src/registry/snapshot.js';
import { QT_VERSION } from '../src/registry/scanner.js';

const QT_DIR = process.env['QT_DIR'];
if (!QT_DIR) {
  console.error('Error: QT_DIR environment variable is required.');
  console.error('Example: QT_DIR=/path/to/qt/6.11.0/gcc_64 bun run generate');
  process.exit(1);
}

const outputPath = join(import.meta.dir, '..', 'data', `qt-${QT_VERSION}-registry.snapshot.json`);

console.log(`Generating registry snapshot from: ${QT_DIR}`);
console.log(`Target Qt version: ${QT_VERSION}`);
console.log();

const builder = new RegistryBuilder();
const result = await builder.build({
  qtDir: QT_DIR,
  onProgress: (phase, _progress, detail) => {
    console.log(`  [${phase}] ${detail}`);
  },
});

if (!result.success) {
  console.error('\nBuild failed:');
  for (const d of result.diagnostics.filter(d => d.level === 'error')) {
    console.error(`  ${d.message}`);
  }
  process.exit(1);
}

const snapshot = new RegistrySnapshot();
const json = snapshot.serialize(result.registry, false);
await Bun.write(outputPath, json);

const { stats } = result.registry;
console.log();
console.log('Snapshot generated successfully:');
console.log(`  Types:      ${stats.typeCount}`);
console.log(`  Builtins:   ${stats.builtinCount}`);
console.log(`  Modules:    ${stats.moduleCount}`);
console.log(`  Sources:    ${stats.sourceFiles.qmltypes} qmltypes, ${stats.sourceFiles.qmldir} qmldir, ${stats.sourceFiles.metatypes} metatypes`);
console.log(`  Size:       ${Math.round(json.length / 1024)} KB`);
console.log(`  Duration:   ${Math.round(result.duration)} ms`);
console.log(`  Output:     ${outputPath}`);
