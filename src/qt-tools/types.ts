// ─── Qt Installation & Toolchain ────────────────────────────

export interface QtToolchainConfig {
  readonly qtDir?: string;
  readonly importPaths?: readonly string[];
  readonly timeout?: number;
  readonly cwd?: string;
  readonly env?: Readonly<Record<string, string>>;
}

export interface QtInstallation {
  readonly rootDir: string;
  readonly binDir: string;
  readonly qmlDir: string;
  readonly libDir: string;
  readonly version: QtVersion;
  readonly platform: string;
}

export interface QtVersion {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
  readonly string: string;
}

export interface ToolInfo {
  readonly name: string;
  readonly path: string;
  readonly available: boolean;
  readonly version?: string;
}

export interface ToolAvailability {
  readonly qmlformat: ToolInfo;
  readonly qmllint: ToolInfo;
  readonly qmlcachegen: ToolInfo;
  readonly qmltc: ToolInfo;
  readonly qmlimportscanner: ToolInfo;
  readonly qmldom: ToolInfo;
  readonly qml: ToolInfo;
  readonly rcc: ToolInfo;
  readonly qmltyperegistrar: ToolInfo;
}

export type QtToolName =
  | 'qmlformat'
  | 'qmllint'
  | 'qmlcachegen'
  | 'qmltc'
  | 'qmlimportscanner'
  | 'qmldom'
  | 'qml'
  | 'rcc'
  | 'qmltyperegistrar'
  | 'qmlaotstats'
  | 'moc';

// ─── Tool Runner ────────────────────────────────────────────

export interface ToolResult {
  readonly exitCode: number;
  readonly stdout: string;
  readonly stderr: string;
  readonly durationMs: number;
  readonly command: string;
}

export interface ToolRunnerOptions {
  readonly timeout?: number;
  readonly cwd?: string;
  readonly stdin?: string;
  readonly env?: Readonly<Record<string, string>>;
}

// ─── QmlFormat ──────────────────────────────────────────────

export interface QmlFormatOptions {
  readonly inplace?: boolean;
  readonly force?: boolean;
  readonly dryRun?: boolean;
  readonly ignoreSettings?: boolean;
  readonly settingsFile?: string;
  readonly verbose?: boolean;
  readonly tabs?: boolean;
  readonly indentWidth?: number;
  readonly columnWidth?: number;
  readonly normalize?: boolean;
  readonly newline?: 'native' | 'unix' | 'windows' | 'macos';
  readonly objectsSpacing?: boolean;
  readonly functionsSpacing?: boolean;
  readonly groupAttributesTogether?: boolean;
  readonly sortImports?: boolean;
  readonly singleLineEmptyObjects?: boolean;
  readonly semicolonRule?: 'always' | 'essential';
}

export interface QmlFormatResult extends ToolResult {
  readonly formattedText?: string;
  readonly hasChanges: boolean;
}

export interface QmlFormatBatchResult {
  readonly results: ReadonlyMap<string, QmlFormatResult>;
  readonly totalFiles: number;
  readonly successCount: number;
  readonly failCount: number;
}

// ─── QmlLint ────────────────────────────────────────────────

export type QmlLintLevel = 'disable' | 'info' | 'warning' | 'error';

export type QmlLintWarningCategory =
  // Core rules
  | 'access-singleton-via-object'
  | 'alias-cycle'
  | 'assignment-in-condition'
  | 'comma'
  | 'component-children-count'
  | 'confusing-expression-statement'
  | 'confusing-minuses'
  | 'confusing-pluses'
  | 'context-properties'
  | 'enums-are-not-types'
  | 'equality-type-coercion'
  | 'deprecated'
  | 'duplicate-enum-entries'
  | 'duplicate-import'
  | 'duplicate-inline-component'
  | 'duplicate-property-binding'
  | 'duplicated-name'
  | 'enum-entry-matches-enum'
  | 'eval'
  | 'import'
  | 'incompatible-type'
  | 'inheritance-cycle'
  | 'invalid-lint-directive'
  | 'literal-constructor'
  | 'missing-enum-entry'
  | 'missing-property'
  | 'missing-type'
  | 'multiline-strings'
  | 'non-list-property'
  | 'non-root-enum'
  | 'property-override'
  | 'unterminated-case'
  | 'prefer-non-var-properties'
  | 'prefixed-import-type'
  | 'read-only-property'
  | 'redundant-optional-chaining'
  | 'required'
  | 'signal-handler-parameters'
  | 'stale-property-read'
  | 'top-level-component'
  | 'translation-function-mismatch'
  | 'uncreatable-type'
  | 'unintentional-empty-block'
  | 'unqualified'
  | 'unreachable-code'
  | 'unresolved-alias'
  | 'unresolved-type'
  | 'unused-imports'
  | 'var-used-before-declaration'
  | 'with'
  // QtDesignStudio plugin rules
  | 'QtDesignStudio.FunctionsNotSupportedInQmlUi'
  | 'QtDesignStudio.ReferenceToParentItemNotSupportedByVisualDesigner'
  | 'QtDesignStudio.ImperativeCodeNotEditableInVisualDesigner'
  | 'QtDesignStudio.UnsupportedTypeInQmlUi'
  | 'QtDesignStudio.InvalidIdeInVisualDesigner'
  | 'QtDesignStudio.UnsupportedRootTypeInQmlUi'
  // QtQuick plugin rules
  | 'Quick.layout-positioning'
  | 'Quick.attached-property-type'
  | 'Quick.anchor-combinations'
  | 'Quick.controls-native-customize'
  | 'Quick.unexpected-var-type'
  | 'Quick.property-changes-parsed'
  | 'Quick.color'
  | 'Quick.state-no-child-item';

export interface QmlLintOptions {
  readonly importPaths?: readonly string[];
  readonly qmltypesFiles?: readonly string[];
  readonly resourceFiles?: readonly string[];
  readonly silent?: boolean;
  readonly json?: boolean;
  readonly ignoreSettings?: boolean;
  readonly module?: boolean;
  readonly bare?: boolean;
  readonly fix?: boolean;
  readonly dryRun?: boolean;
  readonly disablePlugins?: readonly string[];
  readonly pluginPaths?: readonly string[];
  readonly maxWarnings?: number;
  readonly warningLevels?: Partial<Record<QmlLintWarningCategory, QmlLintLevel>>;
}

export interface QmlLintDiagnostic {
  readonly level: 'info' | 'warning' | 'error';
  readonly category?: QmlLintWarningCategory | string;
  readonly message: string;
  readonly file: string;
  readonly line: number;
  readonly column?: number;
  readonly fix?: QmlLintFix;
}

export interface QmlLintFix {
  readonly description: string;
  readonly replacement?: string;
  readonly range?: {
    readonly startLine: number;
    readonly startColumn: number;
    readonly endLine: number;
    readonly endColumn: number;
  };
}

export interface QmlLintResult extends ToolResult {
  readonly valid: boolean;
  readonly diagnostics: readonly QmlLintDiagnostic[];
  readonly summary: {
    readonly errors: number;
    readonly warnings: number;
    readonly infos: number;
  };
}

export interface QmlLintJsonOutput {
  readonly files: readonly {
    readonly filename: string;
    readonly success: boolean;
    readonly warnings: readonly {
      readonly message: string;
      readonly id?: string;
      readonly type: string;
      readonly line: number;
      readonly column: number;
      readonly charOffset: number;
      readonly length: number;
      readonly suggestions: readonly {
        readonly message: string;
        readonly replacement: string;
        readonly filename: string;
        readonly line: number;
        readonly column: number;
        readonly charOffset: number;
        readonly length: number;
      }[];
    }[];
  }[];
  readonly revision: number;
}

export interface QmlLintBatchResult {
  readonly results: ReadonlyMap<string, QmlLintResult>;
  readonly totalFiles: number;
  readonly passCount: number;
  readonly failCount: number;
  readonly totalDiagnostics: number;
}

// ─── QmlCachegen ────────────────────────────────────────────

export interface QmlCachegenOptions {
  readonly outputFile?: string;
  readonly importPaths?: readonly string[];
  readonly qmldirFiles?: readonly string[];
  readonly resourceFiles?: readonly string[];
  readonly resourcePath?: string;
  readonly bare?: boolean;
  readonly onlyBytecode?: boolean;
  readonly verbose?: boolean;
  readonly warningsAreErrors?: boolean;
  readonly validateBasicBlocks?: boolean;
  readonly dumpAotStats?: boolean;
  readonly moduleId?: string;
  readonly filterResourceFile?: boolean;
  readonly resourceFileMappings?: readonly string[];
  readonly resourceName?: string;
}

export interface QmlCachegenResult extends ToolResult {
  readonly success: boolean;
  readonly outputFile?: string;
  readonly aotStats?: QmlAotStats;
  readonly warnings: readonly string[];
}

export interface QmlAotStats {
  readonly totalBindings: number;
  readonly compiledBindings: number;
  readonly totalFunctions: number;
  readonly compiledFunctions: number;
  readonly compilationRate: number;
}

export interface QmlCachegenBatchResult {
  readonly results: ReadonlyMap<string, QmlCachegenResult>;
  readonly totalFiles: number;
  readonly successCount: number;
  readonly failCount: number;
  readonly aggregateAotStats?: QmlAotStats;
}

// ─── QualityGate ────────────────────────────────────────────

export type QualityGateLevel = 'syntax' | 'lint' | 'compile' | 'full';

export interface QualityGateOptions {
  readonly level: QualityGateLevel;
  readonly lintOptions?: QmlLintOptions;
  readonly cachegenOptions?: QmlCachegenOptions;
  readonly runOptions?: QmlRunOptions;
  readonly onProgress?: (stage: string, current: number, total: number) => void;
}

export interface QualityGateResult {
  readonly filePath: string;
  readonly passed: boolean;
  readonly formatResult?: QmlFormatResult;
  readonly lintResult?: QmlLintResult;
  readonly cachegenResult?: QmlCachegenResult;
  readonly smokeTestResult?: QmlSmokeTestResult;
  readonly diagnostics: readonly QmlLintDiagnostic[];
}

export interface QualityGateBatchResult {
  readonly results: ReadonlyMap<string, QualityGateResult>;
  readonly totalFiles: number;
  readonly passedCount: number;
  readonly failedCount: number;
  readonly totalDiagnostics: number;
  readonly durationMs: number;
}

// ─── Qmltc ──────────────────────────────────────────────────

export interface QmltcOptions {
  readonly implPath: string;
  readonly headerPath: string;
  readonly importPaths?: readonly string[];
  readonly qmldirFiles?: readonly string[];
  readonly resourceFiles?: readonly string[];
  readonly metaResourceFiles?: readonly string[];
  readonly namespace?: string;
  readonly module?: string;
  readonly exportMacro?: string;
  readonly exportInclude?: string;
  readonly bare?: boolean;
}

export interface QmltcResult extends ToolResult {
  readonly success: boolean;
  readonly headerFile?: string;
  readonly implFile?: string;
  readonly errors: readonly string[];
}

// ─── QmlImportScanner ───────────────────────────────────────

export interface QmlImportScannerOptions {
  readonly mode:
    | { readonly type: 'rootPath'; readonly path: string }
    | { readonly type: 'qmlFiles'; readonly files: readonly string[] }
    | { readonly type: 'qrcFiles'; readonly files: readonly string[] };
  readonly importPaths: readonly string[];
  readonly excludeDirs?: readonly string[];
}

export interface ScannedImport {
  readonly name: string;
  readonly version?: string;
  readonly type: 'module' | 'directory' | 'javascript';
  readonly path?: string;
  readonly classname?: string;
  readonly plugin?: string;
}

export interface QmlImportScannerResult extends ToolResult {
  readonly success: boolean;
  readonly imports: readonly ScannedImport[];
}

// ─── QmlDom ─────────────────────────────────────────────────

export interface QmlDomOptions {
  readonly dump?: boolean;
  readonly dumpAst?: boolean;
  readonly reformat?: boolean;
  readonly reformatDir?: string;
  readonly filterFields?: string;
  readonly importPaths?: readonly string[];
  readonly qmltypesFiles?: readonly string[];
  readonly pathToDump?: string;
  readonly dependencies?: 'none' | 'required' | 'reachable';
  readonly backups?: number;
}

export interface QmlDomResult extends ToolResult {
  readonly success: boolean;
  readonly dom?: unknown;
  readonly ast?: unknown;
}

// ─── QML Runner ─────────────────────────────────────────────

export interface QmlRunOptions {
  readonly appType?: 'core' | 'gui' | 'widget';
  readonly importPaths?: readonly string[];
  readonly config?: string;
  readonly translationFile?: string;
  readonly quiet?: boolean;
  readonly verbose?: boolean;
  readonly rhi?: 'default' | 'vulkan' | 'metal' | 'd3d11' | 'd3d12' | 'opengl';
  readonly software?: boolean;
  readonly transparent?: boolean;
  readonly fixedAnimations?: boolean;
  readonly selectors?: readonly string[];
  readonly timeout?: number;
  readonly qmlArgs?: readonly string[];
  readonly platform?: string;
}

export interface QmlRunResult extends ToolResult {
  readonly success: boolean;
  readonly timedOut: boolean;
}

export interface QmlSmokeTestResult extends QmlRunResult {
  readonly loaded: boolean;
  readonly runtimeErrors: readonly string[];
}

// ─── Rcc ────────────────────────────────────────────────────

export interface RccOptions {
  readonly outputFile?: string;
  readonly name?: string;
  readonly root?: string;
  readonly compressAlgo?: 'zlib' | 'none';
  readonly compressLevel?: number;
  readonly noCompress?: boolean;
  readonly generator?: 'cpp' | 'python' | 'python2';
  readonly binary?: boolean;
  readonly useNamespace?: boolean;
  readonly verbose?: boolean;
  readonly depfile?: string;
  readonly list?: boolean;
  readonly listMapping?: boolean;
}

export interface RccResult extends ToolResult {
  readonly success: boolean;
  readonly outputFile?: string;
  readonly entries?: readonly string[];
  readonly mappings?: ReadonlyMap<string, string>;
}

// ─── QmlTypeRegistrar ───────────────────────────────────────

export interface QmlTypeRegistrarOptions {
  readonly outputFile: string;
  readonly importName?: string;
  readonly majorVersion?: number;
  readonly minorVersion?: number;
  readonly pastMajorVersion?: number;
  readonly namespace?: string;
  readonly generateQmltypes?: string;
  readonly foreignTypes?: readonly string[];
  readonly privateIncludes?: boolean;
  readonly followForeignVersioning?: boolean;
  readonly jsroot?: boolean;
  readonly extract?: boolean;
}

export interface QmlTypeRegistrarResult extends ToolResult {
  readonly success: boolean;
  readonly outputFile?: string;
  readonly qmltypesFile?: string;
}
