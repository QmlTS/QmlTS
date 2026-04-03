import type {
  RawQmltypesFile,
  RawQmltypesComponent,
  RawQmltypesProperty,
  RawQmltypesSignal,
  RawQmltypesMethod,
  RawQmltypesEnum,
  RawQmltypesParameter,
  RawQmldirFile,
  RawMetatypesFile,
  RawMetatypesClass,
  NormalizerConfig,
  NormalizeResult,
  MergeConflict,
  ParseDiagnostic,
  QmlRegistry,
  QmlModule,
  QmlType,
  QmlTypeExport,
  QmlProperty,
  QmlSignal,
  QmlMethod,
  QmlParameter,
  QmlEnum,
  QmlEnumValue,
  QmlFileTypeEntry,
  ModuleImport,
  ModuleDependency,
  TypeSource,
} from './types.js';
import { TypeNameMapper } from './type-name-mapper.js';

const DEFAULT_CONFIG: NormalizerConfig = {
  primarySource: 'qmltypes-primary',
  resolveInheritance: true,
  filterPrivate: true,
  mergeOverloads: false,
};

const BUILTIN_FILE_NAMES = ['builtins.qmltypes', 'jsroot.qmltypes'];

interface ModuleInfo {
  uri: string;
  dirPath: string;
  qmldirFile: RawQmldirFile;
}

interface ParsedExport {
  module: string;
  name: string;
  version: string;
}

function isBuiltinFile(filePath: string): boolean {
  const normalized = filePath.replace(/\\/g, '/');
  return BUILTIN_FILE_NAMES.some((name) => normalized.endsWith(`/${name}`) || normalized === name);
}

function dirPathOf(filePath: string): string {
  const normalized = filePath.replace(/\\/g, '/');
  const lastSlash = normalized.lastIndexOf('/');
  return lastSlash >= 0 ? normalized.substring(0, lastSlash) : '.';
}

function parseExportString(exp: string): ParsedExport | undefined {
  // Format: "ModuleUri/TypeName MajorVersion.MinorVersion"
  const spaceIdx = exp.lastIndexOf(' ');
  if (spaceIdx < 0) return undefined;
  const qualPart = exp.substring(0, spaceIdx);
  const versionPart = exp.substring(spaceIdx + 1);
  const slashIdx = qualPart.lastIndexOf('/');
  if (slashIdx < 0) return undefined;
  return {
    module: qualPart.substring(0, slashIdx),
    name: qualPart.substring(slashIdx + 1),
    version: versionPart,
  };
}

/** Decode a meta-object revision into major/minor version parts. */
export function decodeRevision(rev: number): { major: number; minor: number } {
  return { major: Math.floor(rev / 256), minor: rev % 256 };
}

function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  const major = (pa[0] ?? 0) - (pb[0] ?? 0);
  if (major !== 0) return major;
  return (pa[1] ?? 0) - (pb[1] ?? 0);
}

function determineCreatable(comp: RawQmltypesComponent): boolean {
  if (comp.isCreatable === false) return false;
  const sem = comp.accessSemantics ?? 'reference';
  if (sem === 'value' || sem === 'sequence' || sem === 'none') {
    return (comp.exports?.length ?? 0) > 0 && comp.isCreatable === true;
  }
  return true;
}

export function normalize(
  qmltypesFiles: RawQmltypesFile[],
  qmldirFiles: RawQmldirFile[],
  metatypesFiles: RawMetatypesFile[],
  config: NormalizerConfig,
  qtVersion: string,
  qtDir: string,
): NormalizeResult {
  const startTime = Date.now();
  const mergedConfig: NormalizerConfig = { ...DEFAULT_CONFIG, ...config };
  const mapper = new TypeNameMapper();
  const diagnostics: ParseDiagnostic[] = [];
  const conflicts: MergeConflict[] = [];
  const orphanedTypes: string[] = [];

  // 1. Build module map from qmldir files
  const moduleMap = new Map<string, ModuleInfo>();
  const dirToModule = new Map<string, ModuleInfo>();

  for (const qmldir of qmldirFiles) {
    if (!qmldir.module) continue;
    const info: ModuleInfo = {
      uri: qmldir.module,
      dirPath: dirPathOf(qmldir.filePath),
      qmldirFile: qmldir,
    };
    moduleMap.set(qmldir.module, info);
    dirToModule.set(info.dirPath, info);
  }

  // 2. Build metatypes index
  const metatypesIndex = new Map<string, RawMetatypesClass>();
  for (const mtFile of metatypesFiles) {
    for (const entry of mtFile.entries) {
      for (const cls of entry.classes) {
        metatypesIndex.set(cls.className, cls);
        if (cls.qualifiedClassName !== cls.className) {
          metatypesIndex.set(cls.qualifiedClassName, cls);
        }
      }
    }
  }
  const referencedMetatypes = new Set<string>();

  // 3. Process qmltypes files
  const allTypes: QmlType[] = [];
  const builtinTypes: QmlType[] = [];
  const moduleTypeNames = new Map<string, Set<string>>();

  for (const qtFile of qmltypesFiles) {
    const isBuiltin = isBuiltinFile(qtFile.filePath);
    const fileDir = dirPathOf(qtFile.filePath);

    // Find which module this file belongs to
    let ownerModule: ModuleInfo | undefined;
    for (const [dirPath, mod] of dirToModule) {
      if (fileDir === dirPath || fileDir.startsWith(dirPath + '/')) {
        ownerModule = mod;
        break;
      }
    }

    for (const comp of qtFile.components) {
      const qmlType = buildQmlType(
        comp,
        qtFile.filePath,
        ownerModule,
        isBuiltin,
        mapper,
        metatypesIndex,
        referencedMetatypes,
        mergedConfig,
        diagnostics,
        conflicts,
      );

      if (isBuiltin) {
        builtinTypes.push(qmlType);
      } else {
        allTypes.push(qmlType);
        if (qmlType.moduleUri) {
          let names = moduleTypeNames.get(qmlType.moduleUri);
          if (!names) {
            names = new Set<string>();
            moduleTypeNames.set(qmlType.moduleUri, names);
          }
          if (qmlType.qmlName) {
            names.add(qmlType.qmlName);
          }
        }
      }
    }
  }

  // 4. Build modules
  const modules: QmlModule[] = [];
  for (const [_uri, info] of moduleMap) {
    const qmldir = info.qmldirFile;
    const typeNames = moduleTypeNames.get(info.uri);
    const mod: QmlModule = {
      uri: info.uri,
      dirPath: info.dirPath,
      qmltypesPath: qmldir.typeinfo,
      plugin: qmldir.plugin
        ? {
            name: qmldir.plugin.name,
            linktarget: qmldir.plugin.linktarget,
            className: qmldir.classname,
            optional: qmldir.plugin.isOptional,
          }
        : undefined,
      designerSupported: qmldir.designerSupported ?? false,
      isStatic: qmldir.isStatic ?? false,
      isSystem: qmldir.isSystem ?? false,
      preferPath: qmldir.prefer,
      imports: qmldir.imports.map(
        (imp): ModuleImport => ({
          module: imp.module,
          version: imp.version,
          kind: imp.kind,
        }),
      ),
      dependencies: qmldir.depends.map(
        (dep): ModuleDependency => ({
          module: dep.module,
          version: dep.version,
        }),
      ),
      exportedTypeNames: typeNames ? [...typeNames].sort() : [],
      qmlFileTypes: qmldir.typeEntries.map(
        (entry): QmlFileTypeEntry => ({
          name: entry.name,
          version: entry.version,
          filePath: entry.filePath,
          isSingleton: entry.isSingleton,
          styleSelector: entry.styleSelector,
        }),
      ),
    };
    modules.push(mod);
  }

  // 6. Track orphaned metatypes classes
  for (const [className] of metatypesIndex) {
    if (!referencedMetatypes.has(className)) {
      if (!orphanedTypes.includes(className)) {
        orphanedTypes.push(className);
      }
    }
  }

  const buildDuration = Date.now() - startTime;

  // 8. Build the QmlRegistry
  const registry: QmlRegistry = {
    formatVersion: '1.0.0',
    generatedAt: new Date().toISOString(),
    qtVersion,
    qtDir,
    buildDuration,
    modules,
    types: allTypes,
    builtins: builtinTypes,
    stats: {
      moduleCount: modules.length,
      typeCount: allTypes.length,
      builtinCount: builtinTypes.length,
      sourceFiles: {
        qmltypes: qmltypesFiles.length,
        qmldir: qmldirFiles.length,
        metatypes: metatypesFiles.length,
      },
    },
  };

  return { registry, diagnostics, orphanedTypes, conflicts };
}

function buildQmlType(
  comp: RawQmltypesComponent,
  filePath: string,
  ownerModule: ModuleInfo | undefined,
  _isBuiltin: boolean,
  mapper: TypeNameMapper,
  metatypesIndex: Map<string, RawMetatypesClass>,
  referencedMetatypes: Set<string>,
  config: NormalizerConfig,
  diagnostics: ParseDiagnostic[],
  conflicts: MergeConflict[],
): QmlType {
  // Parse exports
  const parsedExports: Array<ParsedExport & { revision: number }> = [];
  const rawExports = comp.exports ?? [];
  const rawRevisions = comp.exportMetaObjectRevisions ?? [];

  for (let i = 0; i < rawExports.length; i++) {
    const parsed = parseExportString(rawExports[i]!);
    if (!parsed) {
      diagnostics.push({
        level: 'warning',
        message: `Could not parse export string: "${rawExports[i]}"`,
        file: filePath,
      });
      continue;
    }
    const rev = rawRevisions[i] ?? 0;
    parsedExports.push({ ...parsed, revision: rev });
  }

  // Determine qmlName from highest-version export
  let qmlName = comp.name;
  let moduleUri = ownerModule?.uri ?? '';

  if (parsedExports.length > 0) {
    let highest = parsedExports[0]!;
    for (let i = 1; i < parsedExports.length; i++) {
      if (compareVersions(parsedExports[i]!.version, highest.version) > 0) {
        highest = parsedExports[i]!;
      }
    }
    qmlName = highest.name;
    moduleUri = highest.module;
  }

  // Build type exports
  const typeExports: QmlTypeExport[] = parsedExports.map((pe) => {
    return {
      module: pe.module,
      name: pe.name,
      version: pe.version,
      revision: pe.revision,
    };
  });

  // Map properties
  const properties: QmlProperty[] = comp.properties.map((prop) => mapProperty(prop, mapper));

  // Map signals
  const signals: QmlSignal[] = comp.signals.map((sig) => mapSignal(sig, mapper));

  // Map methods
  const methods: QmlMethod[] = comp.methods.map((meth) => mapMethod(meth, mapper));

  // Map enums
  const enums: QmlEnum[] = comp.enums.map((en) => mapEnum(en));

  // Check metatypes for supplementary info
  const mtClass = metatypesIndex.get(comp.name);
  if (mtClass) {
    referencedMetatypes.add(comp.name);
    if (mtClass.qualifiedClassName !== comp.name) {
      referencedMetatypes.add(mtClass.qualifiedClassName);
    }
    mergeMetatypesInfo(
      comp,
      mtClass,
      properties,
      methods,
      config,
      conflicts,
    );
  }

  const sources: TypeSource[] = [{ kind: 'qmltypes', filePath }];
  if (mtClass) {
    // Find metatypes file path from the index — use a placeholder since we track by class
    sources.push({ kind: 'metatypes', filePath: '' });
  }

  // Filter private if configured
  let filteredProps = properties;
  let filteredMethods = methods;
  if (config.filterPrivate) {
    filteredProps = properties.filter((p) => !p.name.startsWith('_'));
    filteredMethods = methods;
  }

  return {
    qualifiedName: comp.name,
    qmlName,
    moduleUri,
    sourceFile: comp.file,
    sourceLine: comp.lineNumber,
    accessSemantics: comp.accessSemantics ?? 'reference',
    baseType: comp.prototype,
    extensionType: comp.extension,
    extensionIsJavaScript: comp.extensionIsJavaScript,
    extensionIsNamespace: comp.extensionIsNamespace,
    valueType: comp.valueType,
    exports: typeExports,
    creatable: determineCreatable(comp),
    singleton: comp.isSingleton ?? false,
    structured: comp.isStructured,
    javaScriptBuiltin: comp.isJavaScriptBuiltin,
    defaultProperty: comp.defaultProperty,
    parentProperty: comp.parentProperty,
    attachedType: comp.attachedType,
    deferredNames: comp.deferredNames,
    immediateNames: comp.immediateNames,
    interfaces: comp.interfaces,
    hasCustomParser: comp.hasCustomParser,
    enforcesScopedEnums: comp.enforcesScopedEnums,
    properties: filteredProps,
    signals,
    methods: filteredMethods,
    enums,
    sources,
  };
}

function mapProperty(prop: RawQmltypesProperty, mapper: TypeNameMapper): QmlProperty {
  return {
    name: prop.name,
    type: mapper.mapCppToQml(prop.type),
    cppType: prop.type,
    readonly: prop.isReadonly ?? false,
    constant: prop.isPropertyConstant ?? false,
    required: prop.isRequired ?? false,
    final: prop.isFinal ?? false,
    pointer: prop.isPointer ?? false,
    list: prop.isList ?? false,
    hasNotify: !!prop.notify,
    notifySignal: prop.notify,
    hasBindable: !!prop.bindable,
    resetFunction: prop.reset,
    revision: prop.revision,
    fromPrivateClass: prop.privateClass,
  };
}

function mapSignal(sig: RawQmltypesSignal, mapper: TypeNameMapper): QmlSignal {
  return {
    name: sig.name,
    parameters: sig.parameters.map((p) => mapParameter(p, mapper)),
    revision: sig.revision,
  };
}

function mapMethod(meth: RawQmltypesMethod, mapper: TypeNameMapper): QmlMethod {
  return {
    name: meth.name,
    returnType: meth.type ? mapper.mapCppToQml(meth.type) : 'void',
    cppReturnType: meth.type ?? 'void',
    returnsPointer: meth.isPointer ?? false,
    parameters: meth.parameters.map((p) => mapParameter(p, mapper)),
    cloned: meth.isCloned ?? false,
    constructor: meth.isConstructor ?? false,
    javaScriptFunction: meth.isJavaScriptFunction ?? false,
    revision: meth.revision,
  };
}

function mapParameter(param: RawQmltypesParameter, mapper: TypeNameMapper): QmlParameter {
  return {
    name: param.name ?? '',
    type: mapper.mapCppToQml(param.type),
    cppType: param.type,
    pointer: param.isPointer ?? false,
  };
}

function mapEnum(en: RawQmltypesEnum): QmlEnum {
  return {
    name: en.name,
    alias: en.alias,
    underlyingType: en.type,
    isFlag: en.isFlag ?? false,
    isScoped: en.isScoped ?? false,
    values: en.values.map(
      (v): QmlEnumValue => ({ name: v }),
    ),
  };
}

function mergeMetatypesInfo(
  comp: RawQmltypesComponent,
  mtClass: RawMetatypesClass,
  properties: QmlProperty[],
  _methods: QmlMethod[],
  config: NormalizerConfig,
  conflicts: MergeConflict[],
): void {
  // Merge property-level info from metatypes (access levels, extra flags)
  if (!mtClass.properties) return;

  const mtPropMap = new Map<string, (typeof mtClass.properties)[number]>();
  for (const mp of mtClass.properties) {
    mtPropMap.set(mp.name, mp);
  }

  for (const prop of properties) {
    const mtProp = mtPropMap.get(prop.name);
    if (!mtProp) continue;

    // Check for type conflicts between qmltypes and metatypes
    if (config.primarySource === 'qmltypes-primary') {
      if (prop.cppType !== mtProp.type && prop.cppType !== '' && mtProp.type !== '') {
        conflicts.push({
          typeName: comp.name,
          field: `property.${prop.name}.type`,
          qmltypesValue: prop.cppType,
          metatypesValue: mtProp.type,
          resolution: 'used-qmltypes',
        });
      }
    } else {
      if (prop.cppType !== mtProp.type && prop.cppType !== '' && mtProp.type !== '') {
        conflicts.push({
          typeName: comp.name,
          field: `property.${prop.name}.type`,
          qmltypesValue: prop.cppType,
          metatypesValue: mtProp.type,
          resolution: 'used-metatypes',
        });
        prop.cppType = mtProp.type;
      }
    }
  }
}
