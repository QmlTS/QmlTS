#!/usr/bin/env bun

/**
 * Generate the TypeScript Fluent DSL from the Qt registry snapshot.
 *
 * Usage:
 *   bun run generate:dsl
 *   bun run generate:dsl -- --modules=QtQuick,QtQuick.Layouts
 *
 * By default, generates DSL for core (P0) modules.
 * Pass --all to generate for all modules.
 */

import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { generate } from '../src/dsl/generator/generator.js';

const P0_MODULES = [
  'QML',
  'QtQml',
  'QtQml.Models',
  'QtQuick',
  'QtQuick.Controls.Basic',
  'QtQuick.Templates',
  'QtQuick.Layouts',
  'QtCore',
];

const args = process.argv.slice(2);
const useAll = args.includes('--all');
const modulesArg = args.find((a) => a.startsWith('--modules='));
const moduleWhitelist = useAll
  ? undefined
  : modulesArg
    ? modulesArg.replace('--modules=', '').split(',')
    : P0_MODULES;

const registryPath = join(import.meta.dir, '..', 'data', 'qt-6.11.0-registry.snapshot.json');
const outputDir = join(import.meta.dir, '..', 'src', 'dsl', 'generated');

console.log('Generating DSL...');
console.log(`  Registry: ${registryPath}`);
console.log(`  Output:   ${outputDir}`);
console.log(`  Modules:  ${moduleWhitelist ? moduleWhitelist.join(', ') : 'ALL'}`);
console.log();

const result = generate({
  registryPath,
  outputDir,
  moduleWhitelist,
  formatOutput: false,
  validateOutput: false,
});

if (!result.success) {
  console.error('Generation failed:');
  for (const d of result.diagnostics.filter((d) => d.level === 'error')) {
    console.error(`  ${d.message}`);
  }
  process.exit(1);
}

// Clean output directory
try {
  rmSync(outputDir, { recursive: true, force: true });
} catch {
  // ignore
}

// Write files
for (const file of result.files) {
  const filePath = join(outputDir, file.relativePath);
  const dir = join(filePath, '..');
  mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, file.content, 'utf-8');
}

console.log('Generation complete:');
console.log(`  Modules:    ${result.stats.modulesProcessed}`);
console.log(`  Types:      ${result.stats.typesProcessed}`);
console.log(`  Creatables: ${result.stats.creatableTypes}`);
console.log(`  Singletons: ${result.stats.singletonTypes}`);
console.log(`  Attached:   ${result.stats.attachedTypes}`);
console.log(`  Grouped:    ${result.stats.groupedSurfaces}`);
console.log(`  Files:      ${result.stats.filesGenerated}`);
console.log(`  Lines:      ${result.stats.totalLines}`);

if (result.diagnostics.length > 0) {
  const warnings = result.diagnostics.filter((d) => d.level === 'warning');
  if (warnings.length > 0) {
    console.log(`\n  Warnings:   ${warnings.length}`);
  }
}
