#!/usr/bin/env bun

/**
 * Generate the TypeScript Fluent DSL from the Qt registry snapshot.
 *
 * Usage:
 *   bun run generate:dsl                          # All modules → src/dsl/generated/
 *   bun run generate:dsl -- --output-dir=./out     # Custom output directory
 *   bun run generate:dsl -- --modules=QtQuick,QtQuick.Layouts
 *   bun run generate:dsl -- --format --validate
 */

import { join } from 'node:path';
import { generate } from '../src/dsl/generator/generator.js';
import {
  formatGeneratedFiles,
  validateGeneratedFiles,
  writeGeneratedFiles,
} from '../src/dsl/generator/orchestration.js';

const args = process.argv.slice(2);
const doFormat = args.includes('--format');
const doValidate = args.includes('--validate');
const modulesArg = args.find((a) => a.startsWith('--modules='));
const outputDirArg = args.find((a) => a.startsWith('--output-dir='));

// Default: all modules. --modules= restricts to a subset.
const moduleWhitelist = modulesArg
  ? modulesArg
      .replace('--modules=', '')
      .split(',')
      .map((moduleName) => moduleName.trim())
      .filter((moduleName) => moduleName.length > 0)
  : undefined;

const registryPath = join(import.meta.dir, '..', 'data', 'qt-6.11.0-registry.snapshot.json');
const defaultOutputDir = join(import.meta.dir, '..', 'src', 'dsl', 'generated');
const outputDir = outputDirArg ? outputDirArg.replace('--output-dir=', '') : defaultOutputDir;

async function main(): Promise<void> {
  if (modulesArg && moduleWhitelist && moduleWhitelist.length === 0) {
    console.error('Error: --modules must contain at least one module name.');
    process.exit(1);
  }

  console.log('Generating DSL...');
  console.log(`  Registry: ${registryPath}`);
  console.log(`  Output:   ${outputDir}`);
  console.log(`  Modules:  ${moduleWhitelist ? moduleWhitelist.join(', ') : 'ALL'}`);
  console.log();

  const result = generate({
    registryPath,
    outputDir,
    moduleWhitelist,
  });

  if (!result.success) {
    console.error('Generation failed:');
    for (const d of result.diagnostics.filter((d) => d.level === 'error')) {
      console.error(`  ${d.message}`);
    }
    process.exit(1);
  }

  // Write files to disk
  const writeResult = writeGeneratedFiles(result, outputDir);

  console.log('Generation complete:');
  console.log(`  Modules:    ${result.stats.modulesProcessed}`);
  console.log(`  Types:      ${result.stats.typesProcessed}`);
  console.log(`  Creatables: ${result.stats.creatableTypes}`);
  console.log(`  Singletons: ${result.stats.singletonTypes}`);
  console.log(`  Attached:   ${result.stats.attachedTypes}`);
  console.log(`  Grouped:    ${result.stats.groupedSurfaces}`);
  console.log(`  Files:      ${writeResult.filesWritten}`);
  console.log(`  Lines:      ${result.stats.totalLines}`);

  if (result.diagnostics.length > 0) {
    const warnings = result.diagnostics.filter((d) => d.level === 'warning');
    if (warnings.length > 0) {
      console.log(`\n  Warnings:   ${warnings.length}`);
    }
  }

  // Optional: format
  if (doFormat) {
    console.log('\nFormatting generated files...');
    const formatResult = await formatGeneratedFiles(outputDir);
    if (formatResult.success) {
      console.log('  Formatting complete.');
    } else {
      console.warn('  Formatting had issues:', formatResult.errors.join('\n'));
    }
  }

  // Optional: validate
  if (doValidate) {
    console.log('\nValidating generated files...');
    const validateResult = await validateGeneratedFiles(outputDir);
    if (validateResult.success) {
      console.log('  Validation passed.');
    } else {
      console.error('  Validation failed:');
      for (const err of validateResult.errors) {
        console.error(`    ${err}`);
      }
      process.exit(1);
    }
  }
}

main().catch((error: unknown) => {
  if (error instanceof Error) {
    console.error(error.stack ?? error.message);
  } else {
    console.error(String(error));
  }
  process.exit(1);
});
