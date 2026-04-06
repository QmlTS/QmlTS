import type { ClassDeclaration, SourceFile } from "ts-morph";
import type { DiscoveredViewModel } from "./analyzer-types.js";

const VM_DECORATOR_NAMES: ReadonlySet<string> = new Set([
	"State",
	"Command",
	"Effect",
]);

export function discoverViewModels(
	sourceFile: SourceFile,
): DiscoveredViewModel[] {
	const viewModels: DiscoveredViewModel[] = [];

	for (const cls of sourceFile.getClasses()) {
		if (!hasQmltsDecorator(cls)) continue;
		const name = cls.getName();
		if (!name) continue;
		viewModels.push({
			className: name,
			filePath: sourceFile.getFilePath(),
			line: cls.getStartLineNumber(),
			isExported: cls.isExported() || cls.isDefaultExport(),
		});
	}

	return viewModels;
}

function hasQmltsDecorator(cls: ClassDeclaration): boolean {
	for (const member of cls.getMembers()) {
		if (!("getDecorators" in member)) continue;
		const decoratable = member as {
			getDecorators(): { getName(): string }[];
		};
		for (const dec of decoratable.getDecorators()) {
			if (VM_DECORATOR_NAMES.has(dec.getName())) return true;
		}
	}
	return false;
}
