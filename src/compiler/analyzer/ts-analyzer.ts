import { Project } from "ts-morph";
import type {
	DiscoveredProject,
	DiscoveredSourceFile,
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

	analyzeProject(_tsconfigPath: string): DiscoveredProject {
		throw new Error("Not yet implemented");
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
