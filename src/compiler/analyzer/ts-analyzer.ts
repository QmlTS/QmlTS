import { Project } from "ts-morph";
import type { Diagnostic } from "../diagnostics.js";
import type {
	DiscoveredProject,
	DiscoveredSourceFile,
	DiscoveredView,
	DiscoveredViewModel,
	TsAnalyzer,
} from "./analyzer-types.js";
import { analyzeDiagnostics } from "./analyze-diagnostics.js";
import { discoverImports } from "./discover-imports.js";
import { discoverViewModels } from "./discover-viewmodels.js";
import { discoverViews } from "./discover-views.js";

class TsAnalyzerImpl implements TsAnalyzer {
	private readonly project: Project;
	private virtualCounter = 0;

	constructor(tsconfigPath?: string) {
		this.project = new Project({
			tsConfigFilePath: tsconfigPath,
			skipAddingFilesFromTsConfig: true,
			skipFileDependencyResolution: true,
			compilerOptions: tsconfigPath
				? undefined
				: {
						strict: true,
						target: 99 /* ESNext */,
						module: 99 /* ESNext */,
					},
		});
	}

	analyzeSource(
		source: string,
		fileName?: string,
	): DiscoveredSourceFile {
		const virtualPath =
			fileName ??
			`__qmlts_virtual__/source-${this.virtualCounter++}.ts`;
		const sf = this.project.createSourceFile(virtualPath, source, {
			overwrite: true,
		});
		try {
			return this.analyzeSourceFile(sf);
		} finally {
			this.project.removeSourceFile(sf);
		}
	}

	analyzeFile(filePath: string): DiscoveredSourceFile {
		let sf = this.project.getSourceFile(filePath);
		if (!sf) {
			sf = this.project.addSourceFileAtPath(filePath);
		}
		return this.analyzeSourceFile(sf);
	}

	analyzeProject(tsconfigPath: string): DiscoveredProject {
		let projectForAnalysis: Project;
		try {
			projectForAnalysis = new Project({
				tsConfigFilePath: tsconfigPath,
			});
		} catch (err) {
			return {
				files: [],
				allViewModels: [],
				allViews: [],
				diagnostics: [
					{
						severity: "error",
						code: "QMLTS-G001",
						message: `Failed to load tsconfig: ${err instanceof Error ? err.message : String(err)}`,
						file: tsconfigPath,
					},
				],
			};
		}

		const allFiles: DiscoveredSourceFile[] = [];
		const allViewModels: DiscoveredViewModel[] = [];
		const allViews: DiscoveredView[] = [];
		const allDiagnostics: Diagnostic[] = [];

		for (const sf of projectForAnalysis.getSourceFiles()) {
			if (sf.isDeclarationFile()) continue;
			if (sf.isInNodeModules()) continue;

			const analyzed = this.analyzeSourceFile(sf);
			allFiles.push(analyzed);
			allViewModels.push(...analyzed.viewModels);
			allViews.push(...analyzed.views);
			allDiagnostics.push(...analyzed.diagnostics);
		}

		return {
			files: allFiles,
			allViewModels,
			allViews,
			diagnostics: allDiagnostics,
		};
	}

	private analyzeSourceFile(
		sf: import("ts-morph").SourceFile,
	): DiscoveredSourceFile {
		const imports = discoverImports(sf);
		const viewModels = discoverViewModels(sf);
		const views = discoverViews(sf, imports);
		const diagnostics = analyzeDiagnostics(sf);
		return {
			filePath: sf.getFilePath(),
			imports,
			viewModels,
			views,
			diagnostics,
		};
	}
}

export function createTsAnalyzer(tsconfigPath?: string): TsAnalyzer {
	return new TsAnalyzerImpl(tsconfigPath);
}
