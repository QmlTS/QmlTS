import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import type { CompilationResult } from './pipeline-types.js';
import { sourceMapToJson } from './source-map.js';

/**
 * Write all compilation output files to disk.
 * Uses the qmlOutputPath from each CompilationUnit as the authoritative path.
 */
export function writeCompilationOutput(result: CompilationResult): void {
	const dirs: string[] = [];

	for (const unit of result.units) {
		if (!unit.qmlContent) continue;

		const dir = dirname(unit.qmlOutputPath);
		mkdirSync(dir, { recursive: true });
		writeFileSync(unit.qmlOutputPath, unit.qmlContent, 'utf-8');
		dirs.push(dir);

		if (unit.schema && unit.schemaOutputPath) {
			const schemaDir = dirname(unit.schemaOutputPath);
			mkdirSync(schemaDir, { recursive: true });
			writeFileSync(
				unit.schemaOutputPath,
				JSON.stringify(unit.schema, null, 2),
				'utf-8',
			);
		}

		if (unit.sourceMap) {
			const mapPath = `${unit.qmlOutputPath}.map`;
			const mapDir = dirname(mapPath);
			mkdirSync(mapDir, { recursive: true });
			writeFileSync(mapPath, sourceMapToJson(unit.sourceMap), 'utf-8');
		}
	}

	if (dirs.length > 0) {
		const commonDir = findCommonDir(dirs) ?? dirs[0]!;
		const ebPath = join(commonDir, 'event-bindings.json');
		mkdirSync(dirname(ebPath), { recursive: true });
		writeFileSync(
			ebPath,
			JSON.stringify(result.eventBindings, null, 2),
			'utf-8',
		);
	}
}

function findCommonDir(dirs: string[]): string | undefined {
	if (dirs.length === 0) return undefined;
	if (dirs.length === 1) return dirs[0];

	const parts = dirs.map((d) => d.split(/[\\/]/));
	const minLen = Math.min(...parts.map((p) => p.length));
	const common: string[] = [];

	for (let i = 0; i < minLen; i++) {
		const segment = parts[0]![i];
		if (parts.every((p) => p[i] === segment)) {
			common.push(segment!);
		} else {
			break;
		}
	}

	return common.length > 0 ? common.join('/') : undefined;
}
