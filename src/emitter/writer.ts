import type { ResolvedEmitOptions } from './types.js';

export class QmlWriter {
  private buffer = '';
  private _line = 1;
  private _column = 0;
  private _indentLevel = 0;
  private _indentStr: string;
  private _newline: string;

  constructor(opts: ResolvedEmitOptions, initialIndent = 0) {
    this._indentStr = opts.indentStyle === 'tabs' ? '\t' : ' '.repeat(opts.indentSize);
    this._newline = opts.newline;
    this._indentLevel = initialIndent;
  }

  get line(): number {
    return this._line;
  }

  get column(): number {
    return this._column;
  }

  get indentLevel(): number {
    return this._indentLevel;
  }

  indent(): void {
    this._indentLevel++;
  }

  dedent(): void {
    if (this._indentLevel > 0) this._indentLevel--;
  }

  write(text: string): void {
    for (let i = 0; i < text.length; i++) {
      const ch = text[i]!;
      if (ch === '\n') {
        this._line++;
        this._column = 0;
      } else if (ch === '\r') {
        // skip, \n handles line counting
      } else {
        this._column++;
      }
    }
    this.buffer += text;
  }

  writeIndent(): void {
    const indent = this._indentStr.repeat(this._indentLevel);
    this.write(indent);
  }

  writeLine(text: string): void {
    this.writeIndent();
    this.write(text);
    this.writeNewline();
  }

  writeNewline(): void {
    this.write(this._newline);
  }

  getPosition(): { line: number; column: number } {
    return { line: this._line, column: this._column };
  }

  getOutput(): string {
    return this.buffer;
  }
}
