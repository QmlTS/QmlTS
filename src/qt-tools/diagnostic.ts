import type { QmlLintDiagnostic, QmlLintFix, QmlLintJsonOutput } from './types.js';

// "file.qml:10:5: error: message text"
const STRICT_RE = /^(.+?):(\d+):(\d+):\s*(error|warning|info):\s*(.+)$/;
// "file.qml:10: error: message"
const RELAXED_RE = /^(.+?):(\d+):\s*(error|warning|info):\s*(.+)$/;
// "[Dom][QmlFile][Parsing] Error: message"
const BRACKET_RE = /^\[.+?\]\s*(Error|Warning|Info):\s*(.+)$/i;

export function parseStderr(stderr: string, defaultFile?: string): QmlLintDiagnostic[] {
  const diagnostics: QmlLintDiagnostic[] = [];

  for (const rawLine of stderr.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;

    const strict = STRICT_RE.exec(line);
    if (strict) {
      diagnostics.push({
        file: strict[1]!,
        line: Number(strict[2]),
        column: Number(strict[3]),
        level: strict[4] as 'error' | 'warning' | 'info',
        message: strict[5]!,
      });
      continue;
    }

    const relaxed = RELAXED_RE.exec(line);
    if (relaxed) {
      diagnostics.push({
        file: relaxed[1]!,
        line: Number(relaxed[2]),
        level: relaxed[3] as 'error' | 'warning' | 'info',
        message: relaxed[4]!,
      });
      continue;
    }

    const bracket = BRACKET_RE.exec(line);
    if (bracket) {
      diagnostics.push({
        file: defaultFile ?? '<unknown>',
        line: 0,
        level: bracket[1]!.toLowerCase() as 'error' | 'warning' | 'info',
        message: bracket[2]!,
      });
    }
  }

  return diagnostics;
}

export function parseLintJson(json: string): QmlLintDiagnostic[] {
  const output: QmlLintJsonOutput = JSON.parse(json);
  const diagnostics: QmlLintDiagnostic[] = [];

  for (const file of output.files) {
    for (const warning of file.warnings) {
      let fix: QmlLintFix | undefined;
      if (warning.suggestions.length > 0) {
        const s = warning.suggestions[0]!;
        fix = {
          description: s.message,
          replacement: s.replacement,
          range: {
            startLine: s.line,
            startColumn: s.column,
            endLine: s.line,
            endColumn: s.column + s.length,
          },
        };
      }

      diagnostics.push({
        file: file.filename,
        line: warning.line,
        column: warning.column,
        level: mapType(warning.type),
        category: warning.id,
        message: warning.message,
        fix,
      });
    }
  }

  return diagnostics;
}

function mapType(type: string): 'error' | 'warning' | 'info' {
  switch (type) {
    case 'error':
      return 'error';
    case 'warning':
      return 'warning';
    case 'info':
      return 'info';
    default:
      return 'warning';
  }
}
