import type {
  QmldirParseResult,
  RawQmldirFile,
  RawQmldirPlugin,
  RawQmldirImport,
  RawQmldirDepend,
  RawQmldirTypeEntry,
  ParseDiagnostic,
} from './types.js';

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function parseQmldir(content: string, filePath: string): QmldirParseResult {
  const diagnostics: ParseDiagnostic[] = [];

  let module: string | undefined;
  let plugin: RawQmldirPlugin | undefined;
  let classname: string | undefined;
  let designerSupported: boolean | undefined;
  let typeinfo: string | undefined;
  let prefer: string | undefined;
  let isStatic: boolean | undefined;
  let isSystem: boolean | undefined;
  const imports: RawQmldirImport[] = [];
  const depends: RawQmldirDepend[] = [];
  const typeEntries: RawQmldirTypeEntry[] = [];

  const lines = content.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]!;
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;

    const lineNum = i + 1;
    const parts = line.split(/\s+/);
    const keyword = parts[0]!;

    switch (keyword) {
      case 'module':
        module = parts[1];
        break;

      case 'plugin':
        plugin = {
          name: parts[1] ?? '',
          isOptional: plugin?.isOptional ?? false,
          linktarget: plugin?.linktarget,
        };
        break;

      case 'optional': {
        const sub = parts[1];
        if (sub === 'plugin') {
          plugin = {
            name: parts[2] ?? '',
            isOptional: true,
            linktarget: plugin?.linktarget,
          };
        } else if (sub === 'import') {
          imports.push({
            module: parts[2] ?? '',
            version: parts[3] ?? '',
            kind: 'optional',
          });
        } else {
          diagnostics.push({
            level: 'warning',
            message: `Unknown optional directive '${sub ?? ''}'`,
            file: filePath,
            line: lineNum,
          });
        }
        break;
      }

      case 'default':
        if (parts[1] === 'import') {
          imports.push({
            module: parts[2] ?? '',
            version: parts[3] ?? '',
            kind: 'default',
          });
        } else {
          diagnostics.push({
            level: 'warning',
            message: `Unknown default directive '${parts[1] ?? ''}'`,
            file: filePath,
            line: lineNum,
          });
        }
        break;

      case 'linktarget':
        if (plugin) {
          plugin = { ...plugin, linktarget: parts[1] };
        } else {
          // linktarget before plugin — store for later
          plugin = { name: '', isOptional: false, linktarget: parts[1] };
        }
        break;

      case 'classname':
        classname = parts[1];
        break;

      case 'designersupported':
        designerSupported = true;
        break;

      case 'typeinfo':
        typeinfo = parts[1];
        break;

      case 'prefer':
        prefer = parts[1];
        break;

      case 'static':
        isStatic = true;
        break;

      case 'system':
        isSystem = true;
        break;

      case 'import':
        imports.push({
          module: parts[1] ?? '',
          version: parts[2] ?? '',
          kind: 'required',
        });
        break;

      case 'depends':
        depends.push({
          module: parts[1] ?? '',
          version: parts[2] ?? '',
        });
        break;

      case 'singleton':
        typeEntries.push(
          buildTypeEntry(parts[1] ?? '', parts[2] ?? '', parts[3] ?? '', true),
        );
        break;

      case 'internal':
        // internal types don't have a public version — store as non-singleton
        typeEntries.push(
          buildTypeEntry(parts[1] ?? '', '', parts[2] ?? '', false),
        );
        break;

      default:
        // Type entry: TypeName version file
        if (/^[A-Z]/.test(keyword) && parts.length >= 3) {
          typeEntries.push(
            buildTypeEntry(keyword, parts[1] ?? '', parts[2] ?? '', false),
          );
        } else {
          diagnostics.push({
            level: 'warning',
            message: `Unknown directive '${keyword}'`,
            file: filePath,
            line: lineNum,
          });
        }
        break;
    }
  }

  const file: RawQmldirFile = {
    filePath,
    module,
    plugin,
    classname,
    designerSupported,
    typeinfo,
    prefer,
    isStatic,
    isSystem,
    imports,
    depends,
    typeEntries,
  };

  return {
    file,
    diagnostics,
    success: !diagnostics.some(d => d.level === 'error'),
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildTypeEntry(
  name: string,
  version: string,
  fp: string,
  isSingleton: boolean,
): RawQmldirTypeEntry {
  let styleSelector: string | undefined;
  const match = fp.match(/^\+([^/]+)\//);
  if (match) {
    styleSelector = match[1];
  }
  return { name, version, filePath: fp, isSingleton, styleSelector };
}
