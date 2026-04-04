import type { QmlLintDiagnostic, QmlLintFix, QmlLintJsonOutput } from './types.js';

type DiagnosticLevel = 'error' | 'warning' | 'info';

const LEVELS: readonly DiagnosticLevel[] = ['error', 'warning', 'info'];

interface ParsedMessageLine {
  readonly prefix: string;
  readonly level: DiagnosticLevel;
  readonly message: string;
}

interface ParsedLocation {
  readonly file: string;
  readonly line: number;
  readonly column?: number;
}

export function parseStderr(stderr: string, defaultFile?: string): QmlLintDiagnostic[] {
  const diagnostics: QmlLintDiagnostic[] = [];

  for (const rawLine of stderr.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;

    const standard = parseStandardDiagnostic(line);
    if (standard) {
      diagnostics.push(standard);
      continue;
    }

    const bracket = parseBracketDiagnostic(line, defaultFile);
    if (bracket) {
      diagnostics.push(bracket);
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

function parseStandardDiagnostic(line: string): QmlLintDiagnostic | undefined {
  const parsedMessage = splitMessageLine(line);
  if (!parsedMessage) return undefined;

  const location = parseLocation(parsedMessage.prefix);
  if (!location) return undefined;

  return {
    file: location.file,
    line: location.line,
    column: location.column,
    level: parsedMessage.level,
    message: parsedMessage.message,
  };
}

function splitMessageLine(line: string): ParsedMessageLine | undefined {
  const lowerLine = line.toLowerCase();

  for (let i = 0; i < line.length; i++) {
    if (line[i] !== ':') continue;

    let cursor = i + 1;
    while (cursor < line.length && isAsciiWhitespace(line[cursor]!)) {
      cursor++;
    }

    for (const level of LEVELS) {
      if (!lowerLine.startsWith(level, cursor)) continue;

      const afterLevel = cursor + level.length;
      if (line[afterLevel] !== ':') continue;

      const prefix = line.slice(0, i).trim();
      const message = line.slice(afterLevel + 1).trim();
      if (!prefix || !message) continue;

      return { prefix, level, message };
    }
  }

  return undefined;
}

function parseLocation(prefix: string): ParsedLocation | undefined {
  const segments = prefix.split(':');
  if (segments.length < 2) return undefined;

  const last = segments[segments.length - 1]!.trim();
  const secondLast = segments[segments.length - 2]!.trim();

  if (isDecimal(secondLast) && isDecimal(last)) {
    const file = segments.slice(0, -2).join(':').trim();
    if (!file) return undefined;
    return {
      file,
      line: Number(secondLast),
      column: Number(last),
    };
  }

  if (isDecimal(last)) {
    const file = segments.slice(0, -1).join(':').trim();
    if (!file) return undefined;
    return {
      file,
      line: Number(last),
    };
  }

  return undefined;
}

function parseBracketDiagnostic(line: string, defaultFile?: string): QmlLintDiagnostic | undefined {
  if (!line.startsWith('[')) return undefined;

  const lastBracket = line.lastIndexOf(']');
  if (lastBracket < 0) return undefined;

  const tail = line.slice(lastBracket + 1).trim();
  if (!tail) return undefined;

  const separator = tail.indexOf(':');
  if (separator <= 0) return undefined;

  const rawLevel = tail.slice(0, separator).trim().toLowerCase();
  if (!LEVELS.includes(rawLevel as DiagnosticLevel)) return undefined;

  const message = tail.slice(separator + 1).trim();
  if (!message) return undefined;

  return {
    file: defaultFile ?? '<unknown>',
    line: 0,
    level: rawLevel as DiagnosticLevel,
    message,
  };
}

function isAsciiWhitespace(char: string): boolean {
  return char === ' ' || char === '\t';
}

function isDecimal(value: string): boolean {
  if (value.length === 0) return false;
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code < 48 || code > 57) return false;
  }
  return true;
}

function mapType(type: string): DiagnosticLevel {
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
