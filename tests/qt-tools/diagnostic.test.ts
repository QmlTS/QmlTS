import { describe, expect, test } from 'bun:test';
import { parseLintJson, parseStderr } from '../../src/qt-tools/diagnostic.js';

describe('DiagnosticParser', () => {
  // DP-01: parseStderr strict format
  test('DP-01: parseStderr parses file:line:col: level: message', () => {
    const result = parseStderr('file.qml:10:5: error: unexpected token');
    expect(result).toHaveLength(1);
    expect(result[0]!.line).toBe(10);
    expect(result[0]!.column).toBe(5);
    expect(result[0]!.level).toBe('error');
    expect(result[0]!.message).toBe('unexpected token');
    expect(result[0]!.file).toBe('file.qml');
  });

  // DP-02: parseStderr multi-line
  test('DP-02: parseStderr handles multiple lines', () => {
    const stderr = 'a.qml:1:1: warning: msg1\nb.qml:2:3: error: msg2';
    const result = parseStderr(stderr);
    expect(result).toHaveLength(2);
    expect(result[0]!.level).toBe('warning');
    expect(result[1]!.level).toBe('error');
  });

  // DP-03: parseStderr no filename uses default
  test('DP-03: parseStderr uses defaultFile for bracket format', () => {
    const stderr = '[Dom][QmlFile][Parsing] Error: Expected token `}`';
    const result = parseStderr(stderr, 'fallback.qml');
    expect(result).toHaveLength(1);
    expect(result[0]!.file).toBe('fallback.qml');
    expect(result[0]!.level).toBe('error');
    expect(result[0]!.message).toBe('Expected token `}`');
  });

  // DP-04: parseLintJson valid output
  test('DP-04: parseLintJson parses qmllint JSON output', () => {
    const json = JSON.stringify({
      files: [
        {
          filename: 'test.qml',
          success: false,
          warnings: [
            {
              charOffset: 39,
              column: 12,
              id: 'incompatible-type',
              length: 14,
              line: 4,
              message: 'Cannot assign string to double',
              suggestions: [],
              type: 'warning',
            },
          ],
        },
      ],
      revision: 4,
    });
    const result = parseLintJson(json);
    expect(result).toHaveLength(1);
    expect(result[0]!.line).toBe(4);
    expect(result[0]!.column).toBe(12);
    expect(result[0]!.category).toBe('incompatible-type');
    expect(result[0]!.level).toBe('warning');
    expect(result[0]!.message).toBe('Cannot assign string to double');
  });

  // DP-05: parseLintJson with suggestion
  test('DP-05: parseLintJson includes fix from suggestion', () => {
    const json = JSON.stringify({
      files: [
        {
          filename: 'fix.qml',
          success: false,
          warnings: [
            {
              charOffset: 10,
              column: 5,
              id: 'unused-imports',
              length: 8,
              line: 2,
              message: 'Unused import',
              suggestions: [
                {
                  message: 'Remove import',
                  replacement: '',
                  filename: 'fix.qml',
                  line: 2,
                  column: 1,
                  charOffset: 7,
                  length: 20,
                },
              ],
              type: 'info',
            },
          ],
        },
      ],
      revision: 4,
    });
    const result = parseLintJson(json);
    expect(result).toHaveLength(1);
    expect(result[0]!.fix).toBeDefined();
    expect(result[0]!.fix!.description).toBe('Remove import');
    expect(result[0]!.level).toBe('info');
  });

  // DP-06: empty stderr
  test('DP-06: parseStderr returns empty array for empty input', () => {
    expect(parseStderr('')).toHaveLength(0);
    expect(parseStderr('  \n  ')).toHaveLength(0);
  });
});
