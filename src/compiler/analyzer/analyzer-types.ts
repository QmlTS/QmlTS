import type { Diagnostic } from '../diagnostics.js';

export interface DiscoveredSourceFile {
  readonly filePath: string;
  readonly viewModels: readonly DiscoveredViewModel[];
  readonly views: readonly DiscoveredView[];
  readonly imports: readonly DiscoveredImport[];
  readonly diagnostics: readonly Diagnostic[];
}

export interface DiscoveredImport {
  readonly moduleSpecifier: string;
  readonly namedImports: readonly string[];
  readonly defaultImport?: string;
  readonly isDslImport: boolean;
  readonly qtModuleUri?: string;
}

export interface DiscoveredView {
  readonly functionName: string;
  readonly exportKind: 'default' | 'named';
  readonly vmParam?: { readonly name: string; readonly type: string };
  readonly filePath: string;
  readonly line: number;
}

export interface DiscoveredViewModel {
  readonly className: string;
  readonly filePath: string;
  readonly line: number;
  readonly isExported: boolean;
}

export interface DiscoveredProject {
  readonly files: readonly DiscoveredSourceFile[];
  readonly allViewModels: readonly DiscoveredViewModel[];
  readonly allViews: readonly DiscoveredView[];
  readonly diagnostics: readonly Diagnostic[];
}

export interface TsAnalyzer {
  analyzeSource(source: string, fileName?: string): DiscoveredSourceFile;
  analyzeFile(filePath: string): DiscoveredSourceFile;
  analyzeProject(tsconfigPath: string): DiscoveredProject;
}
