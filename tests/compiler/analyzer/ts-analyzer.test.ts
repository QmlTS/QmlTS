import { describe, expect, test } from "bun:test";
import { join } from "node:path";
import { createTsAnalyzer } from "../../../src/compiler/analyzer/ts-analyzer.js";

describe("TsAnalyzer", () => {
	describe("import discovery", () => {
		test("AN-03: analyzeSource with imports — imports populated correctly", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        import { State } from '../../viewmodel/index.js';
        import lodash from 'lodash';
      `);
			expect(result.imports).toHaveLength(3);
			expect(result.imports[0]!.moduleSpecifier).toBe(
				"../../dsl/generated/QtQuick/Rectangle.js",
			);
			expect(result.imports[0]!.namedImports).toEqual(["Rectangle"]);
			expect(result.imports[1]!.moduleSpecifier).toBe(
				"../../viewmodel/index.js",
			);
			expect(result.imports[1]!.namedImports).toEqual(["State"]);
			expect(result.imports[2]!.defaultImport).toBe("lodash");
		});

		test("AN-04: DSL factory import via dsl/generated/QtQuick/ path", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle, Text } from '../../dsl/generated/QtQuick/index.js';
      `);
			expect(result.imports).toHaveLength(1);
			expect(result.imports[0]!.isDslImport).toBe(true);
			expect(result.imports[0]!.qtModuleUri).toBe("QtQuick");
		});

		test("AN-05: non-DSL import", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import lodash from 'lodash';
      `);
			expect(result.imports).toHaveLength(1);
			expect(result.imports[0]!.isDslImport).toBe(false);
			expect(result.imports[0]!.qtModuleUri).toBeUndefined();
		});

		test("AN-10: decorator import is NOT a DSL factory import", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { State, Command } from '../../viewmodel/index.js';
      `);
			expect(result.imports).toHaveLength(1);
			expect(result.imports[0]!.isDslImport).toBe(false);
			expect(result.imports[0]!.qtModuleUri).toBeUndefined();
		});
	});
});
