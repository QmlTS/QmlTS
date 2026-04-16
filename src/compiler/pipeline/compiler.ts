import { readFileSync } from 'node:fs';
import { basename, join, relative, resolve } from 'node:path';
import { Project, ts } from 'ts-morph';
import type { AstNode } from '../../ast/types.js';
import { emitWithSourceMap } from '../../emitter/emitter.js';
import { getQuery } from '../../index.js';
import type { ViewModelInstanceSlot, ViewModelSchema } from '../../viewmodel/schema.js';
import type { DiscoveredImport, DiscoveredSourceFile } from '../analyzer/analyzer-types.js';
import { createTsAnalyzer } from '../analyzer/ts-analyzer.js';
import { createIdAllocator } from '../ids/id-allocator.js';
import { createPostProcessor } from '../postprocess/post-processor.js';
import { analyzeView } from '../transform/dsl-classifier.js';
import { createDslTransformer } from '../transform/dsl-transformer.js';
import { createImportResolver } from '../transform/import-resolver.js';
import type {
  AnalyzedView,
  AnalyzedViewModel,
  EffectListenerInfo,
  TransformResult,
} from '../transform/transform-types.js';
import type { SchemaGenerationContext } from '../viewmodel/extractor-types.js';
import { createViewModelExtractor } from '../viewmodel/viewmodel-extractor.js';
import { createDiagnosticReporter } from './diagnostic-reporter.js';
import { buildEventBindings } from './event-bindings.js';
import type {
  CompilationResult,
  CompilationUnit,
  CompilerOptions,
  CompilerSourceMap,
  DiagnosticReporter,
  FileCacheEntry,
  SourceMapKind,
} from './pipeline-types.js';
import {
  annotateFromDslTree,
  annotateInjectedNodes,
  buildCompilerSourceMap,
} from './source-location-annotator.js';

// ─── Internal Project-Context Core ──────────────────────────────────────

export interface ProjectCompileContext {
  readonly project: readonly DiscoveredSourceFile[];
  readonly tsMorphProject: InstanceType<typeof Project>;
  readonly options: CompilerOptions;
}

interface ProjectCoreResult {
  readonly units: CompilationUnit[];
  readonly schemas: ViewModelSchema[];
  readonly schemasByFile: ReadonlyMap<string, readonly ViewModelSchema[]>;
  readonly diagnostics: readonly import('../diagnostics.js').Diagnostic[];
  readonly stats: {
    totalFiles: number;
    totalViewModels: number;
    totalViews: number;
    totalStates: number;
    totalCommands: number;
    totalEffects: number;
  };
}

/**
 * Create a project context for compilation. Used internally by both
 * compile() and IncrementalCompiler.
 */
export function createProjectContext(
  options: CompilerOptions,
  reporter: DiagnosticReporter,
): ProjectCompileContext | null {
  const analyzer = createTsAnalyzer(options.tsconfigPath);
  const tsconfigPath = options.tsconfigPath ?? join(options.inputDir, 'tsconfig.json');

  let project: DiscoveredSourceFile[];
  try {
    const discovered = analyzer.analyzeProject(tsconfigPath);
    project = [...discovered.files];
    for (const d of discovered.diagnostics) {
      reporter.report(d);
    }
  } catch {
    reporter.error('QMLTS-G001', `Failed to analyze project at ${tsconfigPath}`);
    return null;
  }

  const tsMorphProject = createTsMorphProject(tsconfigPath);
  return { project, tsMorphProject, options };
}

/**
 * Internal compilation core that supports selective recompilation.
 *
 * @param ctx - Full project context (analyzer results + ts-morph project)
 * @param dirtyFiles - Set of file paths to recompile. Files not in this set
 *                     use cached entries if available.
 * @param cachedEntries - File-level cache from previous compilation
 * @param reporter - Diagnostic reporter for this compilation pass
 */
export function compileProjectCore(
  ctx: ProjectCompileContext,
  dirtyFiles: ReadonlySet<string>,
  cachedEntries: ReadonlyMap<string, FileCacheEntry>,
  reporter: DiagnosticReporter,
): ProjectCoreResult {
  const { project, tsMorphProject, options } = ctx;
  const query = getQuery();

  // Phase 1: Extract all ViewModels and generate schemas
  const idAllocator = createIdAllocator();
  const extractor = createViewModelExtractor();
  const vmMap = new Map<string, { vm: AnalyzedViewModel; schema: ViewModelSchema }>();
  const allSchemas: ViewModelSchema[] = [];
  const schemasByFile = new Map<string, ViewModelSchema[]>();

  let totalStates = 0;
  let totalCommands = 0;
  let totalEffects = 0;

  for (const file of project) {
    const isDirty = dirtyFiles.has(file.filePath);
    const cached = cachedEntries.get(file.filePath);
    const sf = getOrAddSourceFile(tsMorphProject, file.filePath);
    if (!sf) continue;

    for (const discoveredVm of file.viewModels) {
      const classDecl = sf.getClass(discoveredVm.className);
      if (!classDecl) continue;

      const vm = extractor.extract(classDecl);
      for (const d of extractor.validate(vm)) {
        reporter.report(d);
      }

      const cachedSchema = isDirty
        ? undefined
        : cached?.schemas.find((s) => schemaMatchesCompilerOptions(s, vm.className, options));

      const v2Context: SchemaGenerationContext | undefined =
        options.runtime === 'v2'
          ? { runtime: 'v2', moduleConfig: options.moduleConfig }
          : undefined;
      const schema = cachedSchema ?? extractor.generateSchema(vm, idAllocator, v2Context);
      vmMap.set(vm.className, { vm, schema });
      allSchemas.push(schema);
      if (!schemasByFile.has(file.filePath)) {
        schemasByFile.set(file.filePath, []);
      }
      schemasByFile.get(file.filePath)!.push(schema);

      totalStates += vm.states.length;
      totalCommands += vm.commands.length;
      totalEffects += vm.effects.length;
    }
  }

  // Phase 2: Compile each view
  const transformer = createDslTransformer(query);
  const importResolver = createImportResolver();
  const postProcessor = createPostProcessor(importResolver, query);
  const units: CompilationUnit[] = [];
  let totalViews = 0;

  for (const file of project) {
    const isDirty = dirtyFiles.has(file.filePath);
    const cached = cachedEntries.get(file.filePath);

    if (!isDirty && cached) {
      for (const unit of cached.units) {
        units.push(unit);
      }
      totalViews += file.views.length;
      continue;
    }

    for (const discoveredView of file.views) {
      totalViews++;
      const sf = getOrAddSourceFile(tsMorphProject, file.filePath);
      if (!sf) continue;

      const dslFactoryNames = buildDslFactoryNameSet(file.imports);
      const { analyzedView, diagnostics: classifyDiags } = analyzeView(
        discoveredView,
        sf,
        query,
        dslFactoryNames,
      );
      for (const d of classifyDiags) reporter.report(d);

      if (!analyzedView) continue;

      const pairedVm = discoveredView.vmParam?.type
        ? vmMap.get(discoveredView.vmParam.type)
        : undefined;

      const unit = compileView(
        analyzedView,
        pairedVm?.vm,
        pairedVm?.schema,
        file.filePath,
        transformer,
        postProcessor,
        reporter,
        options,
        discoveredView.vmParam?.name,
      );
      units.push(unit);
    }

    // Schema-only units for ViewModels without views
    for (const discoveredVm of file.viewModels) {
      const entry = vmMap.get(discoveredVm.className);
      if (!entry) continue;

      const alreadyHasSchema = units.some(
        (u) => u.viewModelName === discoveredVm.className && u.schema,
      );
      if (alreadyHasSchema) continue;

      const hasView = project.some((f) =>
        f.views.some((v) => v.vmParam?.type === discoveredVm.className),
      );
      if (!hasView) {
        units.push({
          sourceFile: file.filePath,
          viewName: discoveredVm.className,
          viewModelName: discoveredVm.className,
          qmlOutputPath: computeOutputPath(file.filePath, options, '.qml'),
          qmlContent: '',
          schema: entry.schema,
          schemaOutputPath: computeOutputPath(file.filePath, options, '.schema.json'),
          diagnostics: [],
        });
      }
    }
  }

  return {
    units,
    schemas: allSchemas,
    schemasByFile,
    diagnostics: reporter.getDiagnostics(),
    stats: {
      totalFiles: project.length,
      totalViewModels: vmMap.size,
      totalViews,
      totalStates,
      totalCommands,
      totalEffects,
    },
  };
}

// ─── Public API ─────────────────────────────────────────────────────────

/**
 * Compile a single source string. Returns the first CompilationUnit
 * produced (one per view discovered in the source).
 */
export function compileSource(source: string, options?: Partial<CompilerOptions>): CompilationUnit {
  const reporter = createDiagnosticReporter(options?.diagnostics);
  const units = compileSingleSource(source, undefined, options, reporter);

  if (units.length === 0) {
    return {
      sourceFile: '<source>',
      viewName: '<unknown>',
      qmlOutputPath: '<unknown>.qml',
      qmlContent: '',
      diagnostics: reporter.getDiagnostics(),
    };
  }

  // Merge all reporter diagnostics (analyzer, extractor) into the unit
  const unit = units[0]!;
  const allDiags = [...reporter.getDiagnostics(), ...unit.diagnostics];
  const deduped = dedupeDiagnostics(allDiags);

  return { ...unit, diagnostics: deduped };
}

/**
 * Compile a single file from disk.
 */
export function compileFile(filePath: string, options?: Partial<CompilerOptions>): CompilationUnit {
  const absPath = resolve(filePath);
  const source = readFileSync(absPath, 'utf-8');
  const reporter = createDiagnosticReporter(options?.diagnostics);
  const units = compileSingleSource(source, absPath, options, reporter);

  if (units.length === 0) {
    return {
      sourceFile: absPath,
      viewName: '<unknown>',
      qmlOutputPath: computeOutputPath(absPath, options, '.qml'),
      qmlContent: '',
      diagnostics: reporter.getDiagnostics(),
    };
  }

  const unit = units[0]!;
  const allDiags = [...reporter.getDiagnostics(), ...unit.diagnostics];
  const deduped = dedupeDiagnostics(allDiags);

  return { ...unit, diagnostics: deduped };
}

/**
 * Compile a full project (all files in inputDir). Returns aggregated results.
 */
export function compile(options: CompilerOptions): CompilationResult {
  const startTime = performance.now();
  const reporter = createDiagnosticReporter(options.diagnostics);

  const ctx = createProjectContext(options, reporter);
  if (!ctx) {
    return buildEmptyResult(reporter, startTime);
  }

  // Full compilation: all files are dirty, no cache
  const allDirty = new Set(ctx.project.map((f) => f.filePath));
  const noCache = new Map<string, FileCacheEntry>();

  const coreResult = compileProjectCore(ctx, allDirty, noCache, reporter);
  const eventBindings = buildEventBindings(coreResult.schemas);
  const durationMs = Math.round(performance.now() - startTime);

  const allDiagnostics = [
    ...coreResult.diagnostics,
    ...coreResult.units.flatMap((u) => u.diagnostics),
  ];
  const deduped = dedupeDiagnostics(allDiagnostics);
  const success = !deduped.some((d) => d.severity === 'error');

  return {
    units: coreResult.units,
    eventBindings,
    diagnostics: deduped,
    success,
    stats: { ...coreResult.stats, durationMs },
  };
}

// ─── Internal Pipeline ──────────────────────────────────────────────────

function compileSingleSource(
  source: string,
  filePath: string | undefined,
  options: Partial<CompilerOptions> | undefined,
  reporter: DiagnosticReporter,
): CompilationUnit[] {
  const query = getQuery();
  const idAllocator = createIdAllocator();
  const extractor = createViewModelExtractor();

  // Create ts-morph project and add source
  const project = createTsMorphProject();
  const virtualPath = filePath ?? '__qmlts_virtual__/source.ts';
  const sf = project.createSourceFile(virtualPath, source, { overwrite: true });

  // Analyze: discover imports, views, viewmodels
  const analyzer = createTsAnalyzer();
  const discovered = analyzer.analyzeSource(source, virtualPath);
  const isVirtual = filePath == null;
  for (const d of discovered.diagnostics) {
    // Skip TS module resolution errors for virtual sources — DSL imports
    // are pattern-matched, not TS-resolved, so they can't resolve from virtual paths.
    if (isVirtual && isVirtualModuleResolutionDiagnostic(d)) continue;
    reporter.report(d);
  }

  // Extract ViewModels and generate schemas
  const vmMap = new Map<string, { vm: AnalyzedViewModel; schema: ViewModelSchema }>();
  const allSchemas: ViewModelSchema[] = [];

  for (const discoveredVm of discovered.viewModels) {
    const classDecl = sf.getClass(discoveredVm.className);
    if (!classDecl) continue;

    const vm = extractor.extract(classDecl);
    for (const d of extractor.validate(vm)) reporter.report(d);
    const v2Context: SchemaGenerationContext | undefined =
      options?.runtime === 'v2' ? { runtime: 'v2', moduleConfig: options.moduleConfig } : undefined;
    const schema = extractor.generateSchema(vm, idAllocator, v2Context);
    vmMap.set(vm.className, { vm, schema });
    allSchemas.push(schema);
  }

  // Compile each view
  const dslFactoryNames = buildDslFactoryNameSet(discovered.imports);
  const transformer = createDslTransformer(query);
  const importResolver = createImportResolver();
  const postProcessor = createPostProcessor(importResolver, query);
  const units: CompilationUnit[] = [];

  for (const discoveredView of discovered.views) {
    const { analyzedView, diagnostics: classifyDiags } = analyzeView(
      discoveredView,
      sf,
      query,
      dslFactoryNames,
    );
    for (const d of classifyDiags) reporter.report(d);

    if (!analyzedView) continue;

    const pairedVm = discoveredView.vmParam?.type
      ? vmMap.get(discoveredView.vmParam.type)
      : undefined;

    const unit = compileView(
      analyzedView,
      pairedVm?.vm,
      pairedVm?.schema,
      filePath ?? virtualPath,
      transformer,
      postProcessor,
      reporter,
      options ? ({ ...options } as CompilerOptions) : undefined,
      discoveredView.vmParam?.name,
    );
    units.push(unit);
  }

  return units;
}

function compileView(
  analyzedView: AnalyzedView,
  vm: AnalyzedViewModel | undefined,
  schema: ViewModelSchema | undefined,
  sourceFilePath: string,
  transformer: ReturnType<typeof createDslTransformer>,
  postProcessor: ReturnType<typeof createPostProcessor>,
  reporter: DiagnosticReporter,
  options?: Partial<CompilerOptions>,
  vmParamName?: string,
): CompilationUnit {
  const viewName = analyzedView.functionName;
  const qmlOutputPath = computeOutputPath(sourceFilePath, options, '.qml');
  const generateSourceMap = options?.codegen?.sourceMap ?? false;

  // Transform: DSL IR → QML AST
  const transformResult = transformer.transform(analyzedView, vm);
  for (const d of transformResult.diagnostics) reporter.report(d);

  // Bridge ViewModel effects → effectListeners for PostProcessor.
  // The transformer doesn't populate effectListeners from the ViewModel —
  // effects are ViewModel metadata, not DSL tree constructs.
  const effectListeners: EffectListenerInfo[] = vm
    ? vm.effects.map((e) => ({
        signalName: e.qmlName,
        effectName: e.fieldName,
        objectTypeName: analyzedView.dslTree.typeName,
        handlerParameters: e.parameters.map((p) => p.name),
      }))
    : [];

  const augmentedResult: TransformResult = {
    ...transformResult,
    effectListeners: [...transformResult.effectListeners, ...effectListeners],
  };

  // PostProcess: inject imports, Connections, lifecycle
  const postResult = postProcessor.process(augmentedResult, vm);
  for (const d of postResult.diagnostics) reporter.report(d);

  // Source map annotation — must happen AFTER PostProcessor clone so that
  // the kindMap references the same node objects the emitter will receive.
  // PostProcessor's deepClone (JSON parse/stringify) creates new objects,
  // breaking WeakMap references from pre-clone annotation.
  const kindMap = new WeakMap<AstNode, SourceMapKind>();
  if (generateSourceMap) {
    annotateFromDslTree(postResult.document, analyzedView.dslTree, kindMap);
    annotateInjectedNodes(postResult.document, vm, kindMap);
  }

  // Emit QML text
  const { text: qmlContent, sourceMap: emitterSourceMap } = emitWithSourceMap(
    postResult.document,
    options?.codegen?.emitOptions,
  );

  // Build compiler-level source map
  let sourceMap: CompilerSourceMap | undefined;
  if (generateSourceMap) {
    sourceMap = buildCompilerSourceMap(emitterSourceMap, kindMap, sourceFilePath, qmlOutputPath);
  }

  // Collect per-unit diagnostics (only from this view's transform + postprocess)
  const unitDiagnostics = [...transformResult.diagnostics, ...postResult.diagnostics];

  // V2 slot metadata
  const isV2 = options?.runtime === 'v2';
  const slot: ViewModelInstanceSlot | undefined =
    isV2 && vm && schema
      ? {
          viewName,
          parameterName: vmParamName ?? 'vm',
          className: vm.className,
          qmlId: '__qmlts_vm0',
          compilerSlotKey: `${viewName}::__qmlts_vm0`,
          ownership: 'owned' as const,
          moduleUri: schema.moduleUri,
          moduleVersion: schema.moduleVersion
            ? { major: schema.moduleVersion.major, minor: schema.moduleVersion.minor }
            : undefined,
        }
      : undefined;

  return {
    sourceFile: sourceFilePath,
    viewName,
    viewModelName: vm?.className,
    qmlOutputPath,
    qmlContent,
    schema,
    schemaOutputPath: schema
      ? computeOutputPath(sourceFilePath, options, '.schema.json')
      : undefined,
    sourceMap,
    diagnostics: unitDiagnostics,
    ...(slot
      ? {
          compilerSlotKey: slot.compilerSlotKey,
          moduleUri: schema!.moduleUri,
          viewModelNames: [vm!.className],
          viewModelSlots: [slot],
          moduleImports: schema!.moduleUri
            ? [
                {
                  moduleUri: schema!.moduleUri,
                  version: schema!.moduleVersion
                    ? `${schema!.moduleVersion.major}.${schema!.moduleVersion.minor}`
                    : undefined,
                },
              ]
            : undefined,
        }
      : {}),
  };
}

// ─── Utilities ──────────────────────────────────────────────────────────

function createTsMorphProject(tsconfigPath?: string): InstanceType<typeof Project> {
  return new Project({
    tsConfigFilePath: tsconfigPath,
    skipAddingFilesFromTsConfig: !tsconfigPath,
    skipFileDependencyResolution: true,
    compilerOptions: tsconfigPath
      ? undefined
      : {
          strict: true,
          target: ts.ScriptTarget.ESNext,
          module: ts.ModuleKind.ESNext,
        },
  });
}

function getOrAddSourceFile(
  project: InstanceType<typeof Project>,
  filePath: string,
): import('ts-morph').SourceFile | undefined {
  let sf = project.getSourceFile(filePath);
  if (!sf) {
    try {
      sf = project.addSourceFileAtPath(filePath);
    } catch {
      return undefined;
    }
  }
  return sf;
}

function buildDslFactoryNameSet(imports: readonly DiscoveredImport[]): ReadonlySet<string> {
  const names = new Set<string>();
  for (const imp of imports) {
    if (!imp.isDslImport) continue;
    for (const name of imp.namedImports) {
      names.add(name);
    }
    if (imp.defaultImport) {
      names.add(imp.defaultImport);
    }
  }
  return names;
}

function schemaMatchesCompilerOptions(
  schema: ViewModelSchema,
  className: string,
  options: CompilerOptions,
): boolean {
  if (schema.className !== className) return false;

  const expectedVersion = options.runtime === 'v2' ? 2 : 1;
  if (schema.version !== expectedVersion) return false;

  if (options.runtime !== 'v2') return true;

  const expectedModuleUri = options.moduleConfig
    ? `${options.moduleConfig.prefix}.ViewModels`
    : undefined;
  const expectedModuleVersion = options.moduleConfig?.version;

  return (
    schema.moduleUri === expectedModuleUri &&
    moduleVersionsEqual(schema.moduleVersion, expectedModuleVersion)
  );
}

function moduleVersionsEqual(
  a: { readonly major: number; readonly minor: number } | undefined,
  b: { readonly major: number; readonly minor: number } | undefined,
): boolean {
  if (!a || !b) return a === b;
  return a.major === b.major && a.minor === b.minor;
}

function computeOutputPath(
  sourceFilePath: string,
  options: Partial<CompilerOptions> | undefined,
  extension: string,
): string {
  const base = basename(sourceFilePath).replace(/\.tsx?$/, '');
  if (options?.outputDir && options?.inputDir) {
    const rel = relative(resolve(options.inputDir), resolve(sourceFilePath));
    const relBase = rel.replace(/\.tsx?$/, '');
    return join(options.outputDir, `${relBase}${extension}`);
  }
  if (options?.outputDir) {
    return join(options.outputDir, `${base}${extension}`);
  }
  return `${base}${extension}`;
}

function buildEmptyResult(reporter: DiagnosticReporter, startTime: number): CompilationResult {
  return {
    units: [],
    eventBindings: { commands: [], effects: [] },
    diagnostics: reporter.getDiagnostics(),
    success: false,
    stats: {
      totalFiles: 0,
      totalViewModels: 0,
      totalViews: 0,
      totalStates: 0,
      totalCommands: 0,
      totalEffects: 0,
      durationMs: Math.round(performance.now() - startTime),
    },
  };
}

function dedupeDiagnostics(
  diagnostics: CompilationUnit['diagnostics'],
): CompilationUnit['diagnostics'] {
  const seen = new Set<string>();
  return diagnostics.filter((d) => {
    const key = [
      d.severity,
      d.code,
      d.file ?? '',
      d.line ?? '',
      d.column ?? '',
      d.endLine ?? '',
      d.endColumn ?? '',
      d.message,
    ].join(':');
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function isVirtualModuleResolutionDiagnostic(
  diagnostic: CompilationUnit['diagnostics'][number],
): boolean {
  return (
    diagnostic.code === 'QMLTS-A011' &&
    (diagnostic.message.includes('TS2307:') || diagnostic.message.includes('Cannot find module'))
  );
}
