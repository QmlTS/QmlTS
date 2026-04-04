// Types

export { parseLintJson, parseStderr } from './diagnostic.js';
// Errors
export {
  QtInstallationNotFoundError,
  QtToolError,
  QtToolNotFoundError,
  QtToolTimeoutError,
} from './errors.js';
// Factories
export {
  createDiagnosticParser,
  createQmlCachegen,
  createQmlDom,
  createQmlFormat,
  createQmlImportScanner,
  createQmlLint,
  createQmlRunner,
  createQmlTypeRegistrar,
  createQmltc,
  createQtToolchain,
  createQualityGate,
  createRcc,
  createToolRunner,
} from './factories.js';
export {
  buildRunArgs,
  listConfigs,
  run as qmlRun,
  runString as qmlRunString,
  smokeTest,
} from './qml-runner.js';
export {
  buildCachegenArgs,
  compile as cachegenCompile,
  compileFiles as cachegenCompileFiles,
  compileString as cachegenCompileString,
} from './qmlcachegen.js';
export { buildDomArgs, dumpAst, dumpDom, dumpString } from './qmldom.js';
// Tool wrappers
export {
  buildFormatArgs,
  formatFile,
  formatFiles,
  formatString,
  getDefaultOptions,
  writeDefaults as formatWriteDefaults,
} from './qmlformat.js';
export {
  buildImportScannerArgs,
  scanDir,
  scanFiles,
  scanQrcFiles,
  scanString as scanImportsString,
} from './qmlimportscanner.js';
export {
  buildLintArgs,
  lintFile,
  lintFiles,
  lintModule,
  lintString,
  listPlugins,
  parseJsonOutput,
  writeDefaults as lintWriteDefaults,
} from './qmllint.js';
export {
  buildQmltcArgs,
  compile as qmltcCompile,
  compileString as qmltcCompileString,
} from './qmltc.js';
export {
  buildTypeRegistrarArgs,
  generateQmltypes,
  register,
} from './qmltyperegistrar.js';
export { check, checkFiles, checkString } from './quality-gate.js';
export {
  buildRccArgs,
  compile as rccCompile,
  createQrcXml,
  generateProjectQrc,
  listEntries,
  listMappings,
} from './rcc.js';
export { withTempQmlFile } from './temp-file.js';
// Infrastructure
export { getToolBinaryPath, runTool } from './tool-runner.js';
export { checkTools, discover, getImportPaths, getToolPath } from './toolchain.js';

export type {
  QmlAotStats,
  QmlCachegenBatchResult,
  QmlCachegenOptions,
  QmlCachegenResult,
  QmlDomOptions,
  QmlDomResult,
  QmlFormatBatchResult,
  QmlFormatOptions,
  QmlFormatResult,
  QmlImportScannerOptions,
  QmlImportScannerResult,
  QmlLintBatchResult,
  QmlLintDiagnostic,
  QmlLintFix,
  QmlLintJsonOutput,
  QmlLintLevel,
  QmlLintOptions,
  QmlLintResult,
  QmlLintWarningCategory,
  QmlRunOptions,
  QmlRunResult,
  QmlSmokeTestResult,
  QmlTypeRegistrarOptions,
  QmlTypeRegistrarResult,
  QmltcOptions,
  QmltcResult,
  QtInstallation,
  QtToolchainConfig,
  QtToolName,
  QtVersion,
  QualityGateBatchResult,
  QualityGateLevel,
  QualityGateOptions,
  QualityGateResult,
  RccOptions,
  RccResult,
  ScannedImport,
  ToolAvailability,
  ToolInfo,
  ToolResult,
  ToolRunnerOptions,
} from './types.js';
