import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import {
	cpSync,
	mkdtempSync,
	readFileSync,
	rmSync,
	unlinkSync,
	writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { watch } from '../../../src/compiler/pipeline/compiler-watcher.js';
import type {
	CompilationResult,
	CompilerOptions,
} from '../../../src/compiler/pipeline/pipeline-types.js';

const FIXTURES = join(import.meta.dir, 'fixtures');

function waitFor(
	condition: () => boolean,
	timeoutMs: number,
): Promise<void> {
	return new Promise((resolve, reject) => {
		const start = Date.now();
		const check = () => {
			if (condition()) {
				resolve();
			} else if (Date.now() - start > timeoutMs) {
				reject(new Error(`waitFor timed out after ${timeoutMs}ms`));
			} else {
				setTimeout(check, 50);
			}
		};
		check();
	});
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('CompilerWatcher', () => {
	let tempDir: string;
	let options: CompilerOptions;

	beforeEach(() => {
		tempDir = mkdtempSync(join(tmpdir(), 'qmlts-watch-'));
		cpSync(FIXTURES, tempDir, { recursive: true });
		options = {
			inputDir: tempDir,
			outputDir: join(tempDir, 'dist'),
			tsconfigPath: join(tempDir, 'tsconfig.json'),
			diagnostics: { suppress: ['QMLTS-A011'] },
			watch: { debounceMs: 200 },
		};
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
	});

	test(
		'CP-11: watch mode triggers callback on file change',
		async () => {
			const results: CompilationResult[] = [];

			const watcher = watch(options, (result) => {
				results.push(result);
			});

			try {
				await waitFor(() => results.length >= 1, 10_000);
				expect(results[0]!.success).toBe(true);

				const counterViewPath = join(tempDir, 'CounterView.ts');
				const original = readFileSync(counterViewPath, 'utf-8');
				writeFileSync(
					counterViewPath,
					original.replace('width(200)', 'width(999)'),
				);

				await waitFor(() => results.length >= 2, 10_000);
				expect(results[1]!.success).toBe(true);

				const counterUnit = results[1]!.units.find(
					(u) => u.viewName === 'CounterView',
				);
				expect(counterUnit).toBeDefined();
				expect(counterUnit!.qmlContent).toContain('999');
			} finally {
				watcher.close();
			}
		},
		20_000,
	);

	test(
		'CP-11b: close stops callbacks',
		async () => {
			const results: CompilationResult[] = [];

			const watcher = watch(options, (result) => {
				results.push(result);
			});

			try {
				await waitFor(() => results.length >= 1, 10_000);
				watcher.close();

				const countBefore = results.length;

				const counterViewPath = join(tempDir, 'CounterView.ts');
				const original = readFileSync(counterViewPath, 'utf-8');
				writeFileSync(
					counterViewPath,
					original.replace('width(200)', 'width(888)'),
				);

				await sleep(500);
				expect(results.length).toBe(countBefore);
			} finally {
				watcher.close();
			}
		},
		15_000,
	);

	test(
		'CP-11c: rebuild returns fresh result',
		async () => {
			const results: CompilationResult[] = [];

			const watcher = watch(options, (result) => {
				results.push(result);
			});

			try {
				await waitFor(() => results.length >= 1, 10_000);

				const rebuilt = await watcher.rebuild();
				expect(rebuilt.success).toBe(true);
				expect(rebuilt.units.length).toBeGreaterThan(0);
			} finally {
				watcher.close();
			}
		},
		15_000,
	);

	test(
		'CP-11d: unlink triggers recompile',
		async () => {
			const results: CompilationResult[] = [];

			const watcher = watch(options, (result) => {
				results.push(result);
			});

			try {
				await waitFor(() => results.length >= 1, 10_000);

				// Delete CounterView.ts and update tsconfig to exclude it
				unlinkSync(join(tempDir, 'CounterView.ts'));
				const tsconfig = JSON.parse(
					readFileSync(
						join(tempDir, 'tsconfig.json'),
						'utf-8',
					),
				);
				tsconfig.include = tsconfig.include.filter(
					(f: string) => f !== 'CounterView.ts',
				);
				writeFileSync(
					join(tempDir, 'tsconfig.json'),
					JSON.stringify(tsconfig, null, 2),
				);

				await waitFor(() => results.length >= 2, 10_000);
			} finally {
				watcher.close();
			}
		},
		20_000,
	);
});
