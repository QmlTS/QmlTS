// ─── Types ──────────────────────────────────────────────────

export interface QmldirGeneratorOptions {
  readonly moduleUri: string;
  readonly qmltypesFilename: string;
}

export interface QmldirGenerator {
  generate(options: QmldirGeneratorOptions): string;
}

// ─── Factory ────────────────────────────────────────────────

export function createQmldirGenerator(): QmldirGenerator {
  return {
    generate(options: QmldirGeneratorOptions): string {
      const lines: string[] = [];
      lines.push(`module ${options.moduleUri}`);
      lines.push(`typeinfo ${options.qmltypesFilename}`);
      lines.push('');
      return lines.join('\n');
    },
  };
}
