import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { compile } from '../../../src/compiler/pipeline/compiler.js';
import { writeCompilationOutput } from '../../../src/compiler/pipeline/output-writer.js';
import type { CompilerOptions } from '../../../src/compiler/pipeline/pipeline-types.js';

const FIXTURES = join(import.meta.dir, 'fixtures');

describe('writeCompilationOutput', () => {
	let tempDir: string;
	let outputDir: string;
	let options: CompilerOptions;

	beforeEach(() => {
		tempDir = mkdtempSync(join(tmpdir(), 'qmlts-ow-'));
		outputDir = join(tempDir, 'dist');
		options = {
			inputDir: FIXTURES,
			outputDir,
			tsconfigPath: join(FIXTURES, 'tsconfig.json'),
			diagnostics: { suppress: ['QMLTS-A011'] },
		};
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
	});

	test('writes .qml files to qmlOutputPath', () => {
		const result = compile(options);
		writeCompilationOutput(result);

		for (const unit of result.units) {
			if (unit.qmlContent) {
				expect(existsSync(unit.qmlOutputPath)).toBe(true);
				const written = readFileSync(unit.qmlOutputPath, 'utf-8');
				expect(written).toBe(unit.qmlContent);
			}
		}
	});

	test('writes .schema.json files when schema is present', () => {
		const result = compile(options);
		writeCompilationOutput(result);

		const unitsWithSchema = result.units.filter(
			(u) => u.schema && u.schemaOutputPath,
		);
		expect(unitsWithSchema.length).toBeGreaterThan(0);

		for (const unit of unitsWithSchema) {
			expect(existsSync(unit.schemaOutputPath!)).toBe(true);
			const written = JSON.parse(
				readFileSync(unit.schemaOutputPath!, 'utf-8'),
			);
			expect(written).toEqual(unit.schema);
		}
	});

	test('writes event-bindings.json', () => {
		const result = compile(options);
		writeCompilationOutput(result);

		const ebPath = join(outputDir, 'event-bindings.json');
		expect(existsSync(ebPath)).toBe(true);
		const written = JSON.parse(readFileSync(ebPath, 'utf-8'));
		expect(written).toEqual(result.eventBindings);
	});

	test('skips units with empty qmlContent', () => {
		const result = compile(options);
		writeCompilationOutput(result);

		const emptyUnits = result.units.filter((u) => !u.qmlContent);
		for (const unit of emptyUnits) {
			expect(existsSync(unit.qmlOutputPath)).toBe(false);
		}
	});
});
