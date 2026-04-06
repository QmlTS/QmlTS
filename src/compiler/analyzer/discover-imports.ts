import type { SourceFile } from "ts-morph";
import type { DiscoveredImport } from "./analyzer-types.js";
import { classifyImport } from "./dsl-module-map.js";

export function discoverImports(
	sourceFile: SourceFile,
): DiscoveredImport[] {
	const imports: DiscoveredImport[] = [];

	for (const decl of sourceFile.getImportDeclarations()) {
		const moduleSpecifier = decl.getModuleSpecifierValue();
		const namedImports = decl.getNamedImports().map((ni) => ni.getName());
		const defaultImport = decl.getDefaultImport()?.getText();
		const classification = classifyImport(moduleSpecifier);

		imports.push({
			moduleSpecifier,
			namedImports,
			defaultImport,
			isDslImport: classification.isDslImport,
			qtModuleUri: classification.qtModuleUri,
		});
	}

	return imports;
}
