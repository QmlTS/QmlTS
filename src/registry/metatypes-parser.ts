import type {
  MetatypesParseResult,
  ParseDiagnostic,
  RawMetatypesArgument,
  RawMetatypesClass,
  RawMetatypesClassInfo,
  RawMetatypesEntry,
  RawMetatypesEnum,
  RawMetatypesFile,
  RawMetatypesInterface,
  RawMetatypesMethod,
  RawMetatypesProperty,
  RawMetatypesSuperClass,
} from './types.js';

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function parseMetatypes(content: string, filePath: string): MetatypesParseResult {
  const diagnostics: ParseDiagnostic[] = [];
  const emptyResult: MetatypesParseResult = {
    file: { filePath, entries: [] },
    diagnostics,
    success: true,
  };

  if (!content.trim()) return emptyResult;

  let rawData: unknown;
  try {
    rawData = JSON.parse(content);
  } catch (error) {
    diagnostics.push({
      level: 'error',
      message: `Invalid JSON: ${error instanceof Error ? error.message : String(error)}`,
      file: filePath,
    });
    return { file: { filePath, entries: [] }, diagnostics, success: false };
  }

  if (!Array.isArray(rawData)) {
    diagnostics.push({
      level: 'error',
      message: 'Expected top-level JSON array',
      file: filePath,
    });
    return { file: { filePath, entries: [] }, diagnostics, success: false };
  }

  const entries: RawMetatypesEntry[] = [];
  for (const raw of rawData) {
    if (raw == null || typeof raw !== 'object') {
      diagnostics.push({
        level: 'warning',
        message: 'Skipping non-object entry in metatypes array',
        file: filePath,
      });
      continue;
    }
    entries.push(coerceEntry(raw as Record<string, unknown>));
  }

  const file: RawMetatypesFile = { filePath, entries };
  const hasErrors = diagnostics.some((d) => d.level === 'error');
  return { file, diagnostics, success: !hasErrors };
}

// ---------------------------------------------------------------------------
// Coercion helpers — safely map untyped JSON to strict interfaces
// ---------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */

function coerceEntry(raw: Record<string, any>): RawMetatypesEntry {
  return {
    inputFile: String(raw['inputFile'] ?? ''),
    outputRevision: Number(raw['outputRevision'] ?? 0),
    classes: Array.isArray(raw['classes']) ? (raw['classes'] as any[]).map(coerceClass) : [],
  };
}

function coerceClass(raw: any): RawMetatypesClass {
  const r = raw as Record<string, any>;
  return {
    className: String(r['className'] ?? ''),
    qualifiedClassName: String(r['qualifiedClassName'] ?? ''),
    lineNumber: r['lineNumber'] != null ? Number(r['lineNumber']) : undefined,
    object: r['object'] === true ? true : undefined,
    gadget: r['gadget'] === true ? true : undefined,
    namespace: r['namespace'] === true ? true : undefined,
    superClasses: Array.isArray(r['superClasses'])
      ? (r['superClasses'] as any[]).map(coerceSuperClass)
      : undefined,
    classInfos: Array.isArray(r['classInfos'])
      ? (r['classInfos'] as any[]).map(coerceClassInfo)
      : undefined,
    enums: Array.isArray(r['enums']) ? (r['enums'] as any[]).map(coerceEnum) : undefined,
    properties: Array.isArray(r['properties'])
      ? (r['properties'] as any[]).map(coerceProperty)
      : undefined,
    signals: Array.isArray(r['signals']) ? (r['signals'] as any[]).map(coerceMethod) : undefined,
    slots: Array.isArray(r['slots']) ? (r['slots'] as any[]).map(coerceMethod) : undefined,
    methods: Array.isArray(r['methods']) ? (r['methods'] as any[]).map(coerceMethod) : undefined,
    interfaces: Array.isArray(r['interfaces'])
      ? (r['interfaces'] as any[]).map(coerceInterfaceList)
      : undefined,
  };
}

function coerceSuperClass(raw: any): RawMetatypesSuperClass {
  const r = raw as Record<string, any>;
  return {
    name: String(r['name'] ?? ''),
    access: coerceAccess(r['access']),
  };
}

function coerceClassInfo(raw: any): RawMetatypesClassInfo {
  const r = raw as Record<string, any>;
  return {
    name: String(r['name'] ?? ''),
    value: String(r['value'] ?? ''),
  };
}

function coerceProperty(raw: any): RawMetatypesProperty {
  const r = raw as Record<string, any>;
  return {
    name: String(r['name'] ?? ''),
    type: String(r['type'] ?? ''),
    read: r['read'] != null ? String(r['read']) : undefined,
    write: r['write'] != null ? String(r['write']) : undefined,
    notify: r['notify'] != null ? String(r['notify']) : undefined,
    bindable: r['bindable'] != null ? String(r['bindable']) : undefined,
    index: Number(r['index'] ?? 0),
    lineNumber: r['lineNumber'] != null ? Number(r['lineNumber']) : undefined,
    constant: r['constant'] === true,
    required: r['required'] === true,
    designable: r['designable'] !== false,
    scriptable: r['scriptable'] !== false,
    stored: r['stored'] !== false,
    user: r['user'] === true,
    final: r['final'] === true,
    override: r['override'] === true,
    virtual: r['virtual'] === true,
  };
}

function coerceMethod(raw: any): RawMetatypesMethod {
  const r = raw as Record<string, any>;
  return {
    name: String(r['name'] ?? ''),
    returnType: String(r['returnType'] ?? 'void'),
    access: coerceAccess(r['access']),
    index: Number(r['index'] ?? 0),
    lineNumber: r['lineNumber'] != null ? Number(r['lineNumber']) : undefined,
    revision: r['revision'] != null ? Number(r['revision']) : undefined,
    isCloned: r['isCloned'] === true ? true : undefined,
    isConst: r['isConst'] === true ? true : undefined,
    arguments: Array.isArray(r['arguments'])
      ? (r['arguments'] as any[]).map(coerceArgument)
      : undefined,
  };
}

function coerceArgument(raw: any): RawMetatypesArgument {
  const r = raw as Record<string, any>;
  return {
    name: String(r['name'] ?? ''),
    type: String(r['type'] ?? ''),
  };
}

function coerceEnum(raw: any): RawMetatypesEnum {
  const r = raw as Record<string, any>;
  let values: string[];
  if (Array.isArray(r['values'])) {
    values = (r['values'] as any[]).map((v: any) => String(v));
  } else if (r['values'] != null && typeof r['values'] === 'object') {
    // Some metatypes encode enum values as { "Name": numericValue } objects
    values = Object.keys(r['values'] as object);
  } else {
    values = [];
  }
  return {
    name: String(r['name'] ?? ''),
    alias: r['alias'] != null ? String(r['alias']) : undefined,
    type: r['type'] != null ? String(r['type']) : undefined,
    isClass: r['isClass'] === true,
    isFlag: r['isFlag'] === true,
    lineNumber: r['lineNumber'] != null ? Number(r['lineNumber']) : undefined,
    values,
  };
}

function coerceInterfaceList(raw: any): RawMetatypesInterface[] {
  if (!Array.isArray(raw)) return [];
  return (raw as any[]).map(coerceInterface);
}

function coerceInterface(raw: any): RawMetatypesInterface {
  const r = raw as Record<string, any>;
  return {
    className: String(r['className'] ?? ''),
    id: String(r['id'] ?? ''),
  };
}

function coerceAccess(val: unknown): 'public' | 'protected' | 'private' {
  if (val === 'protected') return 'protected';
  if (val === 'private') return 'private';
  return 'public';
}
