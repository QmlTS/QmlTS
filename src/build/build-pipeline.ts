import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, parse, relative, resolve } from 'node:path';
import type { Diagnostic } from '../compiler/diagnostics.js';
import { compile } from '../compiler/pipeline/compiler.js';
import type { CompilationResult, CompilationStats } from '../compiler/pipeline/pipeline-types.js';
import { BuildError } from './build-error.js';
import type {
  BuildPhase,
  BuildPipelineResult,
  BuildProgress,
  BundleResult,
  HostPrepResult,
  PhaseResult,
  PipelineRunOptions,
  ProductLayout,
  ResolvedPackages,
  SchemaFile,
} from './build-types.js';
import type { ResolvedQmltsConfig } from './config-types.js';
import { createEntryGenerator } from './entry-generator.js';
import { createHostPreparer } from './host-preparer.js';
import { deriveModuleMeta, validateSchemaConsistency } from './module-meta.js';
import { checkQtVersionCompatibility, createPackageResolver } from './package-resolver.js';
import {
  alignCompilationResultToLayout,
  attachModuleDir,
  createManifest,
  createProductLayout,
  currentPlatform,
  materializeLayout,
  writeCompilationUnits,
  writeEventBindings,
  writeManifest,
} from './product-layout.js';
import { createQmldirGenerator } from './qmldir-generator.js';
import { createQmltypesGenerator } from './qmltypes-generator.js';
import { createResourceBundler, dryRunBundle } from './resource-bundler.js';

// ─── Types ──────────────────────────────────────────────────

export interface BuildPipeline {
  onProgress(callback: (progress: BuildProgress) => void): void;
  run(options?: PipelineRunOptions): Promise<BuildPipelineResult>;
}

// ─── Phase runner helper ────────────────────────────────────

interface PhaseContext {
  config: ResolvedQmltsConfig;
  options: PipelineRunOptions;
  compilationResult?: CompilationResult;
  layout?: ProductLayout;
  validationBlockedOutput?: boolean;
  resolvedPackages?: ResolvedPackages;
  bundleResult?: BundleResult;
  hostPrepResult?: HostPrepResult;
  progressListeners: Array<(progress: BuildProgress) => void>;
}

function emitProgress(ctx: PhaseContext, progress: BuildProgress): void {
  for (const listener of ctx.progressListeners) {
    listener(progress);
  }
}

async function runPhase(
  phase: BuildPhase,
  ctx: PhaseContext,
  fn: () => Promise<{ diagnostics: readonly Diagnostic[] }>,
): Promise<PhaseResult> {
  emitProgress(ctx, { phase, message: `Starting ${phase}` });
  const start = performance.now();
  try {
    const { diagnostics } = await fn();
    const durationMs = performance.now() - start;
    const hasErrors = diagnostics.some((d) => d.severity === 'error');
    return { success: !hasErrors, durationMs, diagnostics };
  } catch (err) {
    const durationMs = performance.now() - start;
    if (err instanceof BuildError) {
      return { success: false, durationMs, diagnostics: err.diagnostics };
    }
    const diag: Diagnostic = {
      severity: 'error',
      code: 'QMLTS-G001',
      message: err instanceof Error ? err.message : String(err),
    };
    return { success: false, durationMs, diagnostics: [diag] };
  }
}

// ─── Individual phase implementations ───────────────────────

function phaseLoadConfig(_ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  return Promise.resolve({ diagnostics: [] });
}

async function phaseDiscoverQt(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];

  if (!ctx.config.qt.dir || !existsSync(ctx.config.qt.dir)) {
    diagnostics.push({
      severity: 'warning',
      code: 'QMLTS-Q001',
      message: ctx.config.qt.dir
        ? `Qt directory not found: ${ctx.config.qt.dir}`
        : 'No Qt directory configured; Qt validation will be skipped',
    });
  }

  return { diagnostics };
}

function phaseCompileTs(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const inputDir = dirname(ctx.config.entry);
  const compilerOpts = ctx.config.build.compilerOptions ?? {};

  const tsconfigPath = findTsconfig(inputDir, ctx.config.configDir);

  const result = compile({
    inputDir,
    outputDir: ctx.config.outDir,
    tsconfigPath,
    diagnostics: compilerOpts.diagnostics,
    codegen:
      compilerOpts.codegen ?? (ctx.config.build.sourceMaps ? { sourceMap: true } : undefined),
    runtime: ctx.config.runtime,
    moduleConfig: ctx.config.module
      ? { prefix: ctx.config.module.prefix, version: ctx.config.module.version }
      : undefined,
    v1Compat: ctx.config.v1Compat,
  });

  const filteredResult = filterCompilationResult(result, ctx.config, ctx.options.files);
  ctx.compilationResult = filteredResult;

  if (!filteredResult.success) {
    throw new BuildError(
      'compiling-ts',
      filteredResult.diagnostics,
      'TypeScript compilation failed',
    );
  }

  emitProgress(ctx, {
    phase: 'compiling-ts',
    message: `Compiled ${filteredResult.units.length} view(s)`,
    current: filteredResult.units.length,
    total: filteredResult.units.length,
  });

  return Promise.resolve({ diagnostics: filteredResult.diagnostics });
}

function findTsconfig(inputDir: string, configDir: string): string | undefined {
  let dir = inputDir;
  const root = parse(dir).root;
  while (true) {
    const candidate = join(dir, 'tsconfig.json');
    if (existsSync(candidate)) return candidate;
    if (dir === root) break;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  const configCandidate = join(configDir, 'tsconfig.json');
  if (existsSync(configCandidate)) return configCandidate;
  return undefined;
}

function filterCompilationResult(
  result: CompilationResult,
  config: ResolvedQmltsConfig,
  files: readonly string[] | undefined,
): CompilationResult {
  if (!files || files.length === 0) {
    return result;
  }

  const selectedFiles = new Set(files.map((file) => resolve(config.configDir, file)));
  const units = result.units.filter((unit) => selectedFiles.has(resolve(unit.sourceFile)));
  const selectedViewModels = new Set(
    units.flatMap(
      (unit) => [unit.viewModelName, unit.schema?.className].filter(Boolean) as string[],
    ),
  );
  const diagnostics = result.diagnostics.filter(
    (diagnostic) => !diagnostic.file || selectedFiles.has(resolve(diagnostic.file)),
  );
  const stats = recomputeCompilationStats(result.stats, units, selectedFiles.size);
  const success = !diagnostics.some((diagnostic) => diagnostic.severity === 'error');

  return {
    ...result,
    units,
    diagnostics,
    success,
    stats,
    eventBindings: {
      commands: result.eventBindings.commands.filter((command) =>
        selectedViewModels.has(command.viewModelClass),
      ),
      effects: result.eventBindings.effects.filter((effect) =>
        selectedViewModels.has(effect.viewModelClass),
      ),
    },
  };
}

function recomputeCompilationStats(
  original: CompilationStats,
  units: readonly CompilationResult['units'][number][],
  totalFiles: number,
): CompilationStats {
  const schemas = units
    .map((unit) => unit.schema)
    .filter((schema): schema is NonNullable<typeof schema> => Boolean(schema));

  return {
    ...original,
    totalFiles,
    totalViewModels: new Set(schemas.map((schema) => schema.className)).size,
    totalViews: units.filter((unit) => unit.qmlContent.length > 0).length,
    totalStates: schemas.reduce((sum, schema) => sum + schema.states.length, 0),
    totalCommands: schemas.reduce((sum, schema) => sum + schema.commands.length, 0),
    totalEffects: schemas.reduce((sum, schema) => sum + schema.effects.length, 0),
  };
}

async function phaseCollectDeps(
  ctx: PhaseContext,
): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];
  const nodeModules = join(ctx.config.configDir, 'node_modules');
  if (!existsSync(nodeModules)) {
    diagnostics.push({
      severity: 'warning',
      code: 'QMLTS-G002',
      message: 'node_modules not found; dependency collection skipped',
    });
    ctx.resolvedPackages = { packages: [], qmlImportPaths: [], nativeLibPaths: [] };
    return { diagnostics };
  }

  const resolver = createPackageResolver();
  const resolved = await resolver.resolve(ctx.config.configDir);
  ctx.resolvedPackages = resolved;

  if (resolved.packages.length > 0) {
    emitProgress(ctx, {
      phase: 'collecting-deps',
      message: `Resolved ${resolved.packages.length} @qmlts package(s)`,
      current: resolved.packages.length,
      total: resolved.packages.length,
    });
  }

  const qtWarnings = checkQtVersionCompatibility(resolved.packages, ctx.config.qt.targetVersion);
  for (const warning of qtWarnings) {
    diagnostics.push({ severity: 'warning', code: 'QMLTS-G002', message: warning });
  }

  return { diagnostics };
}

async function phaseBundleAssets(
  ctx: PhaseContext,
): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];
  const assetsDir = resolve(ctx.config.configDir, ctx.config.assets.dir);
  if (!existsSync(assetsDir)) {
    diagnostics.push({
      severity: 'info',
      code: 'QMLTS-G003',
      message: `Assets directory not found: ${assetsDir}; asset bundling skipped`,
    });
    ctx.bundleResult = { files: [], totalSize: 0 };
    return { diagnostics };
  }

  if (ctx.options.dryRun) {
    ctx.bundleResult = dryRunBundle(ctx.config.assets, ctx.config.configDir);
    emitProgress(ctx, {
      phase: 'bundling-assets',
      message: `Would bundle ${ctx.bundleResult.files.length} asset(s)`,
    });
    return { diagnostics };
  }

  const layout = ctx.layout ?? createProductLayout(ctx.config.outDir, ctx.config);
  const bundler = createResourceBundler();
  const result = await bundler.bundle(ctx.config.assets, ctx.config.configDir, layout.assetsDir);
  ctx.bundleResult = result;

  if (result.files.length > 0) {
    emitProgress(ctx, {
      phase: 'bundling-assets',
      message: `Bundled ${result.files.length} asset(s) (${formatSize(result.totalSize)})`,
      current: result.files.length,
      total: result.files.length,
    });
  }

  return { diagnostics };
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function phaseValidateQml(
  ctx: PhaseContext,
): Promise<{ diagnostics: readonly Diagnostic[] }> {
  if (!ctx.compilationResult) {
    return { diagnostics: [] };
  }

  const qmlUnits = ctx.compilationResult.units.filter((unit) => unit.qmlContent);
  if (qmlUnits.length === 0 || ctx.options.dryRun) {
    return { diagnostics: [] };
  }

  if (!ctx.config.qt.dir || !existsSync(ctx.config.qt.dir)) {
    return {
      diagnostics: [
        {
          severity: 'warning',
          code: 'QMLTS-Q002',
          message: 'QML validation skipped: Qt tools not available',
        },
      ],
    };
  }

  const validationOutDir = mkdtempSync(join(tmpdir(), 'qmlts-build-validation-'));
  const { finalResult, validationResult } = prepareValidationOutputs(ctx, validationOutDir);
  let diagnostics: Diagnostic[];

  try {
    materializeLayout(validationResult.layout);
    writeCompilationUnits(
      validationResult.layout,
      validationResult.compilation.units,
      ctx.config.build.sourceMaps,
    );

    diagnostics = await runQtValidation(ctx, finalResult, validationResult.compilation);
  } finally {
    rmSync(validationOutDir, { recursive: true, force: true });
  }

  if (diagnostics.some((diagnostic) => diagnostic.severity === 'error')) {
    ctx.validationBlockedOutput = true;
  }

  return { diagnostics };
}

function phasePrepareHost(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];
  if (!ctx.compilationResult) {
    return Promise.resolve({ diagnostics });
  }

  // Compute the layout early so we know the hostLib target path
  const layout = createProductLayout(ctx.config.outDir, ctx.config);
  const platform =
    ctx.config.distribute.targets.length > 0
      ? ctx.config.distribute.targets[0]!
      : currentPlatform();

  const schemas = ctx.compilationResult.units
    .filter((unit) => unit.schema && unit.schemaOutputPath)
    .map((unit) => toHostPrepSchema(unit.schema!, unit.schemaOutputPath!));

  const preparer = createHostPreparer();
  const output = preparer.prepare({
    hostConfig: ctx.config.host,
    schemasDir: layout.schemasDir,
    schemas,
    hostLibTarget: layout.hostLib,
    platform,
    configDir: ctx.config.configDir,
    outDir: ctx.config.outDir,
    dryRun: ctx.options.dryRun,
  });

  diagnostics.push(...output.diagnostics);
  ctx.hostPrepResult = output.result;

  if (output.result.cargoBuildMs !== undefined) {
    emitProgress(ctx, {
      phase: 'preparing-host',
      message: `Cargo build completed in ${Math.round(output.result.cargoBuildMs)}ms`,
    });
  }

  return Promise.resolve({ diagnostics });
}

function toHostPrepSchema(
  schema: NonNullable<CompilationResult['units'][number]['schema']>,
  filePath: string,
): SchemaFile {
  return {
    className: schema.className,
    filePath,
    content: {
      className: schema.className,
      version: schema.version,
      ...(schema.moduleUri ? { moduleUri: schema.moduleUri } : {}),
      ...(schema.moduleVersion
        ? {
            moduleVersion: { major: schema.moduleVersion.major, minor: schema.moduleVersion.minor },
          }
        : {}),
      ...(schema.compilerSlotKey ? { compilerSlotKey: schema.compilerSlotKey } : {}),
      states: schema.states.map((state) => ({
        name: state.name,
        qmlName: state.qmlName,
        qmlType: state.qmlType,
        memberId: state.memberId,
        readonly: state.readonly,
        deferred: state.deferred,
        defaultValue: typeof state.defaultValue === 'string' ? state.defaultValue : undefined,
      })),
      commands: schema.commands.map((command) => ({
        name: command.name,
        qmlName: command.qmlName,
        commandId: command.commandId,
        parameters: command.parameters.map((parameter) => ({
          name: parameter.name,
          type: parameter.type,
        })),
        async: command.async,
        throttle: command.throttle,
        throttleMs: command.throttleMs,
      })),
      effects: schema.effects.map((effect) => ({
        name: effect.name,
        qmlName: effect.qmlName,
        effectId: effect.effectId,
        parameters: effect.parameters.map((parameter) => ({
          name: parameter.name,
          type: parameter.type,
        })),
      })),
      lifecycle: {
        onMounted: schema.lifecycle.onMounted,
        onUnmounting: schema.lifecycle.onUnmounting,
        hotReload: schema.lifecycle.hotReload,
      },
    },
  };
}

function phaseWriteOutput(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  if (!ctx.compilationResult) {
    return Promise.resolve({
      diagnostics: [
        {
          severity: 'error',
          code: 'QMLTS-G001',
          message: 'Cannot write output: no compilation result available',
        },
      ],
    });
  }

  let layout = createProductLayout(ctx.config.outDir, ctx.config);

  // Derive V2 module metadata after compilation (schemas now available)
  const isV2 = ctx.config.runtime === 'v2';
  const schemasForMeta = ctx.compilationResult.units
    .filter((u) => u.schema)
    .map((u) => u.schema!);

  let moduleMeta: ReturnType<typeof deriveModuleMeta> = undefined;
  if (isV2 && ctx.config.module && schemasForMeta.length > 0) {
    // Convert to ViewModelSchemaJson for validation
    const schemaJsonsForValidation = schemasForMeta.map((s) => toHostPrepSchema(s, '').content);

    // Validate schema consistency before deriving metadata
    const consistencyDiags = validateSchemaConsistency(schemaJsonsForValidation);
    if (consistencyDiags.length > 0) {
      return Promise.resolve({ diagnostics: consistencyDiags });
    }

    moduleMeta = deriveModuleMeta(ctx.config.module, schemasForMeta);
  } else if (isV2 && schemasForMeta.length > 0 && !ctx.config.module) {
    return Promise.resolve({
      diagnostics: [
        {
          severity: 'error',
          code: 'QMLTS-B001',
          message: 'V2 build requires module configuration but none was provided',
        },
      ],
    });
  }

  layout = attachModuleDir(layout, moduleMeta);
  ctx.layout = layout;
  ctx.compilationResult = alignCompilationResultToLayout(
    ctx.compilationResult,
    layout,
    ctx.config.outDir,
  );

  if (ctx.options.dryRun) {
    return Promise.resolve({ diagnostics: [] });
  }

  materializeLayout(layout);

  copyResolvedPackageQmlImports(layout, ctx.resolvedPackages);
  writeCompilationUnits(layout, ctx.compilationResult.units, ctx.config.build.sourceMaps);
  writeEventBindings(layout, ctx.compilationResult.eventBindings);

  // V2: Write qmldir and qmltypes
  if (isV2 && moduleMeta && layout.moduleDir) {
    const qmldirGen = createQmldirGenerator();
    const qmltypesGen = createQmltypesGenerator();

    const qmldirContent = qmldirGen.generate({
      moduleUri: moduleMeta.moduleUri,
      qmltypesFilename: moduleMeta.qmltypesFilename,
    });
    writeFileSync(join(layout.moduleDir, 'qmldir'), qmldirContent, 'utf-8');

    const schemaJsons = ctx.compilationResult.units
      .filter((u) => u.schema)
      .map((u) => toHostPrepSchema(u.schema!, '').content);
    // Deduplicate by className (identical schemas already validated)
    const seen = new Set<string>();
    const uniqueSchemas = schemaJsons.filter((s) => {
      if (seen.has(s.className)) return false;
      seen.add(s.className);
      return true;
    });

    const qmltypesContent = qmltypesGen.generate({
      moduleUri: moduleMeta.moduleUri,
      moduleVersion: {
        major: moduleMeta.versionMajor,
        minor: moduleMeta.versionMinor,
      },
      schemas: uniqueSchemas,
    });
    writeFileSync(
      join(layout.moduleDir, moduleMeta.qmltypesFilename),
      qmltypesContent,
      'utf-8',
    );
  }

  // Generate entry file
  const generator = createEntryGenerator();
  const compiledViewModels = ctx.compilationResult.units
    .filter((u) => u.schema)
    .map((u) => ({
      className: u.schema!.className,
    }));

  const entrySourceFile = resolve(ctx.config.entry);
  const mainUnit =
    ctx.compilationResult.units.find((unit) => resolve(unit.sourceFile) === entrySourceFile) ??
    ctx.compilationResult.units[0];
  const mainQml = mainUnit
    ? `./${relative(layout.rootDir, mainUnit.qmlOutputPath).replace(/\\/g, '/')}`
    : './main.qml';

  const qmlImportPaths = collectQmlImportPaths(ctx);

  const entryContent = generator.generate({
    compiledViewModels,
    mainQml,
    qmlImportPaths,
    packages: ctx.resolvedPackages,
    runtime: isV2 ? 'v2' : undefined,
    moduleRegistration: moduleMeta
      ? {
          moduleUri: moduleMeta.moduleUri,
          versionMajor: moduleMeta.versionMajor,
          versionMinor: moduleMeta.versionMinor,
          typeNames: [...moduleMeta.typeNames],
        }
      : undefined,
  });

  mkdirSync(dirname(layout.entryFile), { recursive: true });
  writeFileSync(layout.entryFile, entryContent, 'utf-8');

  const manifest = createManifest(layout, ctx.compilationResult, ctx.config, moduleMeta);
  writeManifest(layout, manifest);

  emitProgress(ctx, {
    phase: 'writing-output',
    message: `Output written to ${ctx.config.outDir}`,
  });

  return Promise.resolve({ diagnostics: [] });
}

function prepareValidationOutputs(
  ctx: PhaseContext,
  validationOutDir: string,
): {
  finalResult: CompilationResult;
  validationResult: {
    layout: ProductLayout;
    compilation: CompilationResult;
  };
} {
  if (!ctx.compilationResult) {
    throw new BuildError('validating-qml', [], 'No compilation result available for validation');
  }

  const finalLayout = createProductLayout(ctx.config.outDir, ctx.config);
  const finalResult = alignCompilationResultToLayout(
    ctx.compilationResult,
    finalLayout,
    ctx.config.outDir,
  );
  const validationLayout = createProductLayout(validationOutDir, ctx.config);
  const validationCompilation = alignCompilationResultToLayout(
    ctx.compilationResult,
    validationLayout,
    ctx.config.outDir,
  );

  return {
    finalResult,
    validationResult: {
      layout: validationLayout,
      compilation: validationCompilation,
    },
  };
}

async function runQtValidation(
  ctx: PhaseContext,
  finalResult: CompilationResult,
  validationResult: CompilationResult,
): Promise<Diagnostic[]> {
  const validationFileMap = new Map<string, string>();
  for (let i = 0; i < validationResult.units.length; i++) {
    const validationUnit = validationResult.units[i];
    const finalUnit = finalResult.units[i];
    if (validationUnit?.qmlOutputPath && finalUnit?.qmlOutputPath) {
      validationFileMap.set(validationUnit.qmlOutputPath, finalUnit.qmlOutputPath);
    }
  }

  const { checkFiles, discover } = await import('../qt-tools/index.js');
  const { validateCompilationOutput } = await import('../compiler/pipeline/qt-validation.js');

  const installation = await discover({ qtDir: ctx.config.qt.dir });
  const qmlFiles = validationResult.units
    .filter((unit) => unit.qmlContent)
    .map((unit) => unit.qmlOutputPath);

  const qualityGateResult = await checkFiles(installation, qmlFiles, {
    level: resolveValidationGate(ctx.config),
    lintOptions: ctx.config.build.lint ? ctx.config.build.lintOptions : undefined,
  });

  const diagnostics = mapQualityGateDiagnostics(qualityGateResult, validationFileMap);

  const validationDiagnostics = await validateCompilationOutput(validationResult, {
    qtDir: ctx.config.qt.dir,
    lint: false,
    format: ctx.config.build.format,
    importScan: true,
    importPaths: collectQmlImportPaths(ctx),
  });

  diagnostics.push(
    ...mapDiagnosticsToFinalPaths(validationDiagnostics.diagnostics, validationFileMap),
  );

  return diagnostics;
}

function resolveValidationGate(
  config: ResolvedQmltsConfig,
): ResolvedQmltsConfig['build']['qualityGate'] {
  if (!config.build.lint && config.build.qualityGate === 'lint') {
    return 'syntax';
  }
  return config.build.qualityGate;
}

function mapQualityGateDiagnostics(
  result: Awaited<ReturnType<typeof import('../qt-tools/index.js')['checkFiles']>>,
  validationFileMap: ReadonlyMap<string, string>,
): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];

  for (const [filePath, gateResult] of result.results) {
    const finalPath = validationFileMap.get(filePath) ?? filePath;

    if (gateResult.formatResult && gateResult.formatResult.exitCode !== 0) {
      diagnostics.push({
        severity: 'error',
        code: 'QMLTS-Q002',
        message: `[qmlformat] syntax validation failed for ${finalPath}`,
        file: finalPath,
      });
    }

    for (const diagnostic of gateResult.diagnostics) {
      diagnostics.push({
        severity:
          diagnostic.level === 'error'
            ? 'error'
            : diagnostic.level === 'warning'
              ? 'warning'
              : 'info',
        code: 'QMLTS-Q001',
        message: `[qmllint] ${diagnostic.message}`,
        file: finalPath,
        line: diagnostic.line,
        column: diagnostic.column,
      });
    }

    if (gateResult.cachegenResult && !gateResult.cachegenResult.success) {
      diagnostics.push({
        severity: 'error',
        code: 'QMLTS-Q002',
        message: `[qmlcachegen] failed for ${finalPath}`,
        file: finalPath,
      });
    }

    if (gateResult.smokeTestResult && !gateResult.smokeTestResult.loaded) {
      diagnostics.push({
        severity: 'error',
        code: 'QMLTS-Q002',
        message: `[qml] smoke test failed for ${finalPath}`,
        file: finalPath,
      });
    }

    if (!gateResult.passed && diagnostics.every((diagnostic) => diagnostic.file !== finalPath)) {
      diagnostics.push({
        severity: 'error',
        code: 'QMLTS-Q002',
        message: `QML quality gate failed for ${finalPath}`,
        file: finalPath,
      });
    }
  }

  return diagnostics;
}

function mapDiagnosticsToFinalPaths(
  diagnostics: readonly Diagnostic[],
  validationFileMap: ReadonlyMap<string, string>,
): Diagnostic[] {
  return diagnostics.map((diagnostic) =>
    diagnostic.file && validationFileMap.has(diagnostic.file)
      ? { ...diagnostic, file: validationFileMap.get(diagnostic.file)! }
      : diagnostic,
  );
}

function collectQmlImportPaths(ctx: PhaseContext): string[] {
  const paths: string[] = [];
  const seenPaths = new Set<string>();

  for (const path of ctx.config.qmlModulePaths) {
    if (!seenPaths.has(path)) {
      seenPaths.add(path);
      paths.push(path);
    }
  }

  if (ctx.resolvedPackages) {
    for (const path of ctx.resolvedPackages.qmlImportPaths) {
      if (!seenPaths.has(path)) {
        seenPaths.add(path);
        paths.push(path);
      }
    }
  }

  return paths;
}

function copyResolvedPackageQmlImports(
  layout: ProductLayout,
  resolvedPackages: ResolvedPackages | undefined,
): void {
  if (!resolvedPackages) {
    return;
  }

  const copiedRoots = new Set<string>();
  for (const pkg of resolvedPackages.packages) {
    if (!pkg.qmlImportPath || copiedRoots.has(pkg.qmlImportPath)) {
      continue;
    }
    copiedRoots.add(pkg.qmlImportPath);
    copyDirectoryContents(pkg.qmlImportPath, layout.qmlDir);
  }
}

function copyDirectoryContents(sourceDir: string, targetDir: string): void {
  if (!existsSync(sourceDir) || !statSync(sourceDir).isDirectory()) {
    return;
  }

  const entries = readdirSync(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = join(sourceDir, entry.name);
    const targetPath = join(targetDir, entry.name);

    if (entry.isDirectory()) {
      mkdirSync(targetPath, { recursive: true });
      copyDirectoryContents(sourcePath, targetPath);
      continue;
    }

    if (entry.isFile()) {
      mkdirSync(dirname(targetPath), { recursive: true });
      copyFileSync(sourcePath, targetPath);
    }
  }
}

// ─── Pipeline factory ───────────────────────────────────────

const PHASE_RUNNERS: ReadonlyMap<
  BuildPhase,
  (ctx: PhaseContext) => Promise<{ diagnostics: readonly Diagnostic[] }>
> = new Map([
  ['loading-config', phaseLoadConfig],
  ['discovering-qt', phaseDiscoverQt],
  ['compiling-ts', phaseCompileTs],
  ['collecting-deps', phaseCollectDeps],
  ['bundling-assets', phaseBundleAssets],
  ['validating-qml', phaseValidateQml],
  ['preparing-host', phasePrepareHost],
  ['writing-output', phaseWriteOutput],
]);

const EXECUTABLE_PHASES: readonly BuildPhase[] = [
  'loading-config',
  'discovering-qt',
  'compiling-ts',
  'collecting-deps',
  'bundling-assets',
  'validating-qml',
  'preparing-host',
  'writing-output',
];

export function createBuildPipeline(config: ResolvedQmltsConfig): BuildPipeline {
  const progressListeners: Array<(progress: BuildProgress) => void> = [];

  return {
    onProgress(callback) {
      progressListeners.push(callback);
    },

    async run(options: PipelineRunOptions = {}): Promise<BuildPipelineResult> {
      const pipelineStart = performance.now();
      const phases = new Map<BuildPhase, PhaseResult>();

      const ctx: PhaseContext = {
        config,
        options,
        progressListeners,
      };

      if (options.force) {
        const cacheDir = join(config.configDir, '.qmlts');
        if (existsSync(cacheDir)) {
          rmSync(cacheDir, { recursive: true, force: true });
        }
      }

      let compilationFailed = false;

      for (const phase of EXECUTABLE_PHASES) {
        if ((compilationFailed || ctx.validationBlockedOutput) && phase === 'writing-output') {
          phases.set(phase, {
            success: !ctx.validationBlockedOutput,
            durationMs: 0,
            diagnostics: [
              {
                severity: ctx.validationBlockedOutput ? 'warning' : 'error',
                code: 'QMLTS-G001',
                message: compilationFailed
                  ? 'Skipped: compilation failed in earlier phase'
                  : 'Skipped: QML validation failed earlier in the pipeline',
              },
            ],
          });
          continue;
        }

        const runner = PHASE_RUNNERS.get(phase)!;
        const result = await runPhase(phase, ctx, () => runner(ctx));
        phases.set(phase, result);

        if (!result.success && phase === 'compiling-ts') {
          compilationFailed = true;
        }
      }

      const output = ctx.layout ?? createProductLayout(config.outDir, config);
      const success = [...phases.values()].every((r) => r.success);
      const durationMs = performance.now() - pipelineStart;

      emitProgress(ctx, {
        phase: 'done',
        message: success ? 'Build succeeded' : 'Build completed with errors',
      });

      return {
        success,
        phases,
        output,
        durationMs,
        compilationStats: ctx.compilationResult?.stats,
      };
    },
  };
}
