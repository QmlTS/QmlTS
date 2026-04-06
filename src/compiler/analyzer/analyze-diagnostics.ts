import { DiagnosticCategory, type SourceFile, ts } from 'ts-morph';
import type { Diagnostic, DiagnosticSeverity } from '../diagnostics.js';

export function analyzeDiagnostics(sourceFile: SourceFile): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const filePath = sourceFile.getFilePath();

  for (const tsDiag of sourceFile.getPreEmitDiagnostics()) {
    const start = tsDiag.getStart();
    const sourceFileDiag = tsDiag.getSourceFile();

    let line: number | undefined;
    let column: number | undefined;
    if (start !== undefined && sourceFileDiag) {
      const lineAndCol = sourceFileDiag.getLineAndColumnAtPos(start);
      line = lineAndCol.line;
      column = lineAndCol.column;
    }

    const flatMessage = ts.flattenDiagnosticMessageText(tsDiag.getMessageText() as string, '\n');

    diagnostics.push({
      severity: mapSeverity(tsDiag.getCategory()),
      code: 'QMLTS-A011',
      message: `TS${tsDiag.getCode()}: ${flatMessage}`,
      file: filePath,
      line,
      column,
    });
  }

  return diagnostics;
}

function mapSeverity(category: DiagnosticCategory): DiagnosticSeverity {
  switch (category) {
    case DiagnosticCategory.Error:
      return 'error';
    case DiagnosticCategory.Warning:
      return 'warning';
    case DiagnosticCategory.Suggestion:
      return 'hint';
    case DiagnosticCategory.Message:
      return 'info';
    default:
      return 'error';
  }
}
