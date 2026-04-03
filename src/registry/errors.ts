export class ScanError extends Error {
  public readonly qtDir: string;
  public readonly reason: 'not-found' | 'not-qt' | 'version-mismatch' | 'permission';

  constructor(
    message: string,
    qtDir: string,
    reason: 'not-found' | 'not-qt' | 'version-mismatch' | 'permission',
  ) {
    super(message);
    this.name = 'ScanError';
    this.qtDir = qtDir;
    this.reason = reason;
  }
}

export class ParseError extends Error {
  public readonly filePath: string;
  public readonly line?: number;
  public readonly column?: number;

  constructor(message: string, filePath: string, line?: number, column?: number) {
    super(message);
    this.name = 'ParseError';
    this.filePath = filePath;
    this.line = line;
    this.column = column;
  }
}

export class SnapshotError extends Error {
  public readonly reason: 'invalid-format' | 'version-mismatch' | 'corrupted' | 'io-error';

  constructor(
    message: string,
    reason: 'invalid-format' | 'version-mismatch' | 'corrupted' | 'io-error',
  ) {
    super(message);
    this.name = 'SnapshotError';
    this.reason = reason;
  }
}
