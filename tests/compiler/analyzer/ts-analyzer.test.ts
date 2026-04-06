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

	describe("viewmodel discovery", () => {
		test("AN-01: analyzeSource with @State class — viewModels non-empty", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        function State() { return (t: any, c: any) => {}; }
        export class LoginViewModel {
          @State() username = '';
          @State() password = '';
        }
      `);
			expect(result.viewModels).toHaveLength(1);
			expect(result.viewModels[0]!.className).toBe("LoginViewModel");
			expect(result.viewModels[0]!.isExported).toBe(true);
		});

		test("AN-11: non-exported decorated class discovered with isExported=false", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        function State() { return (t: any, c: any) => {}; }
        class InternalViewModel {
          @State() value = 0;
        }
      `);
			expect(result.viewModels).toHaveLength(1);
			expect(result.viewModels[0]!.className).toBe("InternalViewModel");
			expect(result.viewModels[0]!.isExported).toBe(false);
		});

		test("AN-16: multiple ViewModels in one file", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        function State() { return (t: any, c: any) => {}; }
        function Command() { return (t: any, c: any) => {}; }
        export class FooVM {
          @State() x = 0;
        }
        export class BarVM {
          @Command() run() {}
        }
      `);
			expect(result.viewModels).toHaveLength(2);
			expect(result.viewModels[0]!.className).toBe("FooVM");
			expect(result.viewModels[1]!.className).toBe("BarVM");
		});

		test("AN-23: class without decorators is NOT discovered", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        export class PlainService {
          doWork() { return 42; }
        }
      `);
			expect(result.viewModels).toHaveLength(0);
		});
	});

	describe("view discovery", () => {
		test("AN-02: analyzeSource with View function — views non-empty", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        export default function MyView() {
          return Rectangle();
        }
      `);
			expect(result.views).toHaveLength(1);
			expect(result.views[0]!.functionName).toBe("MyView");
		});

		test("AN-06: default-exported View — exportKind is default", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        export default function MainView() {
          return Rectangle();
        }
      `);
			expect(result.views).toHaveLength(1);
			expect(result.views[0]!.exportKind).toBe("default");
		});

		test("AN-07: named-exported View — exportKind is named", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        export function SidePanel() {
          return Rectangle();
        }
      `);
			expect(result.views).toHaveLength(1);
			expect(result.views[0]!.exportKind).toBe("named");
		});

		test("AN-12: arrow-function View discovered", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        export const CardView = () => Rectangle();
      `);
			expect(result.views).toHaveLength(1);
			expect(result.views[0]!.functionName).toBe("CardView");
			expect(result.views[0]!.exportKind).toBe("named");
		});

		test("AN-13: re-exported View discovered", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        const DetailView = () => Rectangle();
        export default DetailView;
      `);
			expect(result.views).toHaveLength(1);
			expect(result.views[0]!.functionName).toBe("DetailView");
			expect(result.views[0]!.exportKind).toBe("default");
		});

		test("AN-14: View with typed vmParam — name and type extracted", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        export default function LoginView(vm: LoginViewModel) {
          return Rectangle();
        }
      `);
			expect(result.views).toHaveLength(1);
			expect(result.views[0]!.vmParam).toEqual({
				name: "vm",
				type: "LoginViewModel",
			});
		});

		test("AN-15: View without vmParam — vmParam is undefined", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        export default function StaticView() {
          return Rectangle();
        }
      `);
			expect(result.views).toHaveLength(1);
			expect(result.views[0]!.vmParam).toBeUndefined();
		});

		test("AN-17: multiple Views in one file", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        import { Text } from '../../dsl/generated/QtQuick/Text.js';
        export function Header() { return Rectangle(); }
        export function Footer() { return Text(); }
      `);
			expect(result.views).toHaveLength(2);
			expect(result.views[0]!.functionName).toBe("Header");
			expect(result.views[1]!.functionName).toBe("Footer");
		});

		test("AN-22: exported function NOT returning DSL call chain — not a view", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        export function helper() {
          return 42;
        }
        export function formatName(name: string) {
          return name.toUpperCase();
        }
      `);
			expect(result.views).toHaveLength(0);
		});
	});

	describe("diagnostics", () => {
		test("AN-09: source with syntax error — diagnostics non-empty", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource(`
        export function broken( {
          return 42;
        }
      `);
			expect(result.diagnostics.length).toBeGreaterThan(0);
			expect(result.diagnostics[0]!.severity).toBe("error");
			expect(result.diagnostics[0]!.code).toBe("QMLTS-A011");
		});
	});

	describe("analyzeSource integration", () => {
		test("AN-18: empty source file — all arrays empty, no diagnostics", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeSource("");
			expect(result.viewModels).toHaveLength(0);
			expect(result.views).toHaveLength(0);
			expect(result.imports).toHaveLength(0);
			expect(result.diagnostics).toHaveLength(0);
		});

		test("AN-20: repeated analyzeSource calls are isolated", () => {
			const analyzer = createTsAnalyzer();

			const r1 = analyzer.analyzeSource(`
        import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
        export function V1() { return Rectangle(); }
      `);
			const r2 = analyzer.analyzeSource(`
        import { Text } from '../../dsl/generated/QtQuick/Text.js';
        export function V2() { return Text(); }
      `);

			expect(r1.views).toHaveLength(1);
			expect(r1.views[0]!.functionName).toBe("V1");
			expect(r2.views).toHaveLength(1);
			expect(r2.views[0]!.functionName).toBe("V2");

			// Virtual file paths do not collide
			expect(r1.filePath).not.toBe(r2.filePath);
		});
	});

	describe("analyzeFile", () => {
		test("analyzeFile reads a real file", () => {
			const analyzer = createTsAnalyzer();
			const result = analyzer.analyzeFile(
				join(import.meta.dir, "fixtures/simple-view.ts"),
			);
			expect(result.filePath).toContain("simple-view.ts");
		});
	});
});
