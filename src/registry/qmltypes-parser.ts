import type {
  ParseDiagnostic,
  QmltypesParseResult,
  RawQmltypesComponent,
  RawQmltypesEnum,
  RawQmltypesMethod,
  RawQmltypesParameter,
  RawQmltypesProperty,
  RawQmltypesSignal,
} from './types.js';

// ---------------------------------------------------------------------------
// Tokenizer
// ---------------------------------------------------------------------------

type TokenType =
  | 'identifier'
  | 'string'
  | 'number'
  | 'lbrace'
  | 'rbrace'
  | 'lbracket'
  | 'rbracket'
  | 'colon'
  | 'semicolon'
  | 'comma'
  | 'eof';

interface Token {
  type: TokenType;
  value: string;
  line: number;
}

function tokenize(content: string): Token[] {
  const tokens: Token[] = [];
  let pos = 0;
  let line = 1;

  function peek(): string {
    return content.charAt(pos);
  }

  function peekAt(offset: number): string {
    return content.charAt(pos + offset);
  }

  function advance(): string {
    const ch = content.charAt(pos);
    if (ch === '\n') line++;
    pos++;
    return ch;
  }

  function skipWhitespaceAndComments(): void {
    while (pos < content.length) {
      const ch = peek();
      if (ch === ' ' || ch === '\t' || ch === '\r' || ch === '\n') {
        advance();
        continue;
      }
      if (ch === '/' && peekAt(1) === '/') {
        while (pos < content.length && peek() !== '\n') pos++;
        continue;
      }
      break;
    }
  }

  function readString(): string {
    advance(); // skip opening "
    let result = '';
    while (pos < content.length) {
      const ch = advance();
      if (ch === '\\' && pos < content.length) {
        const escaped = advance();
        if (escaped === 'n') result += '\n';
        else if (escaped === 't') result += '\t';
        else if (escaped === 'r') result += '\r';
        else result += escaped;
      } else if (ch === '"') {
        return result;
      } else {
        result += ch;
      }
    }
    return result; // unterminated string
  }

  function readNumber(): string {
    let result = '';
    if (peek() === '-') result += advance();
    while (pos < content.length && /[0-9.]/.test(peek())) {
      result += advance();
    }
    return result;
  }

  function readIdentifier(): string {
    let result = '';
    while (pos < content.length && /[a-zA-Z0-9_.]/.test(peek())) {
      result += advance();
    }
    return result;
  }

  while (true) {
    skipWhitespaceAndComments();
    if (pos >= content.length) {
      tokens.push({ type: 'eof', value: '', line });
      break;
    }

    const startLine = line;
    const ch = peek();
    switch (ch) {
      case '{':
        advance();
        tokens.push({ type: 'lbrace', value: '{', line: startLine });
        continue;
      case '}':
        advance();
        tokens.push({ type: 'rbrace', value: '}', line: startLine });
        continue;
      case '[':
        advance();
        tokens.push({ type: 'lbracket', value: '[', line: startLine });
        continue;
      case ']':
        advance();
        tokens.push({ type: 'rbracket', value: ']', line: startLine });
        continue;
      case ':':
        advance();
        tokens.push({ type: 'colon', value: ':', line: startLine });
        continue;
      case ';':
        advance();
        tokens.push({ type: 'semicolon', value: ';', line: startLine });
        continue;
      case ',':
        advance();
        tokens.push({ type: 'comma', value: ',', line: startLine });
        continue;
      case '"':
        tokens.push({ type: 'string', value: readString(), line: startLine });
        continue;
      default:
        if (/[a-zA-Z_]/.test(ch)) {
          tokens.push({ type: 'identifier', value: readIdentifier(), line: startLine });
          continue;
        }
        if (/[0-9]/.test(ch) || (ch === '-' && /[0-9]/.test(peekAt(1)))) {
          tokens.push({ type: 'number', value: readNumber(), line: startLine });
          continue;
        }
        advance(); // skip unknown character
    }
  }
  return tokens;
}

// ---------------------------------------------------------------------------
// Generic block parser — produces an untyped tree
// ---------------------------------------------------------------------------

type ScalarValue = string | number | boolean;
type PropValue = ScalarValue | ScalarValue[];

interface ParsedBlock {
  blockType: string;
  props: Map<string, PropValue>;
  children: ParsedBlock[];
  line: number;
}

class BlockParser {
  private readonly tokens: Token[];
  private pos = 0;
  private readonly diagnostics: ParseDiagnostic[];
  private readonly file: string;

  constructor(tokens: Token[], filePath: string, diagnostics: ParseDiagnostic[]) {
    this.tokens = tokens;
    this.file = filePath;
    this.diagnostics = diagnostics;
  }

  private peek(): Token {
    return this.tokens[this.pos] ?? { type: 'eof' as const, value: '', line: 0 };
  }

  private peekAt(offset: number): Token {
    return this.tokens[this.pos + offset] ?? { type: 'eof' as const, value: '', line: 0 };
  }

  private advance(): Token {
    const tok = this.tokens[this.pos] ?? { type: 'eof' as const, value: '', line: 0 };
    this.pos++;
    return tok;
  }

  private expect(type: TokenType): Token {
    const tok = this.advance();
    if (tok.type !== type) {
      this.diagnostics.push({
        level: 'error',
        message: `Expected ${type} but got ${tok.type} '${tok.value}'`,
        file: this.file,
        line: tok.line,
      });
    }
    return tok;
  }

  private consumeOptional(type: TokenType): boolean {
    if (this.peek().type === type) {
      this.advance();
      return true;
    }
    return false;
  }

  private parseValue(): PropValue {
    const tok = this.peek();
    if (tok.type === 'string') {
      this.advance();
      return tok.value;
    }
    if (tok.type === 'number') {
      this.advance();
      return Number(tok.value);
    }
    if (tok.type === 'identifier') {
      if (tok.value === 'true') {
        this.advance();
        return true;
      }
      if (tok.value === 'false') {
        this.advance();
        return false;
      }
      this.advance();
      return tok.value; // unquoted identifier as string value
    }
    if (tok.type === 'lbracket') {
      return this.parseArray();
    }

    this.diagnostics.push({
      level: 'error',
      message: `Unexpected token '${tok.value}' when parsing value`,
      file: this.file,
      line: tok.line,
    });
    this.advance();
    return '';
  }

  private parseArray(): ScalarValue[] {
    this.expect('lbracket');
    const items: ScalarValue[] = [];
    while (this.peek().type !== 'rbracket' && this.peek().type !== 'eof') {
      const tok = this.peek();
      if (tok.type === 'string') {
        this.advance();
        items.push(tok.value);
      } else if (tok.type === 'number') {
        this.advance();
        items.push(Number(tok.value));
      } else if (tok.type === 'identifier') {
        this.advance();
        if (tok.value === 'true') items.push(true);
        else if (tok.value === 'false') items.push(false);
        else items.push(tok.value);
      } else {
        this.advance();
      }
      this.consumeOptional('comma');
    }
    this.expect('rbracket');
    return items;
  }

  private parseBlock(): ParsedBlock {
    const typeTok = this.expect('identifier');
    this.expect('lbrace');

    const props = new Map<string, PropValue>();
    const children: ParsedBlock[] = [];

    while (this.peek().type !== 'rbrace' && this.peek().type !== 'eof') {
      const tok = this.peek();
      if (tok.type === 'identifier' && this.peekAt(1).type === 'lbrace') {
        children.push(this.parseBlock());
      } else if (tok.type === 'identifier' && this.peekAt(1).type === 'colon') {
        const key = this.advance().value;
        this.expect('colon');
        props.set(key, this.parseValue());
        this.consumeOptional('semicolon');
      } else {
        this.advance();
      }
    }
    this.expect('rbrace');

    return { blockType: typeTok.value, props, children, line: typeTok.line };
  }

  /** Skip import lines then parse all top-level blocks. */
  parse(): ParsedBlock[] {
    // Skip `import ...` preamble lines (not block-structured)
    while (this.peek().type === 'identifier' && this.peek().value === 'import') {
      while (this.peek().type !== 'eof') {
        if (
          this.peek().type === 'identifier' &&
          this.peek().value !== 'import' &&
          this.peekAt(1).type === 'lbrace'
        ) {
          break;
        }
        this.advance();
      }
    }

    const blocks: ParsedBlock[] = [];
    while (this.peek().type !== 'eof') {
      if (this.peek().type === 'identifier' && this.peekAt(1).type === 'lbrace') {
        blocks.push(this.parseBlock());
      } else {
        this.advance();
      }
    }
    return blocks;
  }
}

// ---------------------------------------------------------------------------
// Conversion helpers — generic block → typed interfaces
// ---------------------------------------------------------------------------

function str(props: Map<string, PropValue>, key: string): string | undefined {
  const v = props.get(key);
  return typeof v === 'string' ? v : undefined;
}

function bool(props: Map<string, PropValue>, key: string): boolean | undefined {
  const v = props.get(key);
  return typeof v === 'boolean' ? v : undefined;
}

function num(props: Map<string, PropValue>, key: string): number | undefined {
  const v = props.get(key);
  return typeof v === 'number' ? v : undefined;
}

function strArray(props: Map<string, PropValue>, key: string): string[] | undefined {
  const v = props.get(key);
  if (!Array.isArray(v)) return undefined;
  return v.filter((x): x is string => typeof x === 'string');
}

function numArray(props: Map<string, PropValue>, key: string): number[] | undefined {
  const v = props.get(key);
  if (!Array.isArray(v)) return undefined;
  return v.filter((x): x is number => typeof x === 'number');
}

// ---------------------------------------------------------------------------
// Block → typed conversions
// ---------------------------------------------------------------------------

function convertParameter(block: ParsedBlock): RawQmltypesParameter {
  return {
    name: str(block.props, 'name'),
    type: str(block.props, 'type') ?? '',
    isPointer: bool(block.props, 'isPointer'),
    isTypeConstant: bool(block.props, 'isTypeConstant'),
  };
}

function convertProperty(block: ParsedBlock): RawQmltypesProperty {
  return {
    name: str(block.props, 'name') ?? '',
    type: str(block.props, 'type') ?? '',
    read: str(block.props, 'read'),
    write: str(block.props, 'write'),
    reset: str(block.props, 'reset'),
    notify: str(block.props, 'notify'),
    bindable: str(block.props, 'bindable'),
    index: num(block.props, 'index'),
    revision: num(block.props, 'revision'),
    lineNumber: num(block.props, 'lineNumber'),
    privateClass: str(block.props, 'privateClass'),
    isReadonly: bool(block.props, 'isReadonly'),
    isPropertyConstant: bool(block.props, 'isPropertyConstant'),
    isFinal: bool(block.props, 'isFinal'),
    isList: bool(block.props, 'isList'),
    isPointer: bool(block.props, 'isPointer'),
    isRequired: bool(block.props, 'isRequired'),
    isOverride: bool(block.props, 'isOverride'),
    isVirtual: bool(block.props, 'isVirtual'),
    isTypeConstant: bool(block.props, 'isTypeConstant'),
  };
}

function convertSignal(block: ParsedBlock): RawQmltypesSignal {
  return {
    name: str(block.props, 'name') ?? '',
    revision: num(block.props, 'revision'),
    lineNumber: num(block.props, 'lineNumber'),
    isMethodConstant: bool(block.props, 'isMethodConstant'),
    parameters: block.children.filter((c) => c.blockType === 'Parameter').map(convertParameter),
  };
}

function convertMethod(block: ParsedBlock): RawQmltypesMethod {
  return {
    name: str(block.props, 'name') ?? '',
    type: str(block.props, 'type'),
    revision: num(block.props, 'revision'),
    lineNumber: num(block.props, 'lineNumber'),
    isPointer: bool(block.props, 'isPointer'),
    isCloned: bool(block.props, 'isCloned'),
    isConstructor: bool(block.props, 'isConstructor'),
    isJavaScriptFunction: bool(block.props, 'isJavaScriptFunction'),
    isMethodConstant: bool(block.props, 'isMethodConstant'),
    isTypeConstant: bool(block.props, 'isTypeConstant'),
    parameters: block.children.filter((c) => c.blockType === 'Parameter').map(convertParameter),
  };
}

function convertEnum(block: ParsedBlock): RawQmltypesEnum {
  return {
    name: str(block.props, 'name') ?? '',
    alias: str(block.props, 'alias'),
    type: str(block.props, 'type'),
    isFlag: bool(block.props, 'isFlag'),
    isScoped: bool(block.props, 'isScoped'),
    lineNumber: num(block.props, 'lineNumber'),
    values: strArray(block.props, 'values') ?? [],
  };
}

function convertComponent(block: ParsedBlock): RawQmltypesComponent {
  return {
    name: str(block.props, 'name') ?? '',
    file: str(block.props, 'file'),
    lineNumber: num(block.props, 'lineNumber'),
    accessSemantics: str(block.props, 'accessSemantics') as RawQmltypesComponent['accessSemantics'],
    prototype: str(block.props, 'prototype'),
    extension: str(block.props, 'extension'),
    extensionIsJavaScript: bool(block.props, 'extensionIsJavaScript'),
    extensionIsNamespace: bool(block.props, 'extensionIsNamespace'),
    valueType: str(block.props, 'valueType'),
    exports: strArray(block.props, 'exports'),
    exportMetaObjectRevisions: numArray(block.props, 'exportMetaObjectRevisions'),
    isCreatable: bool(block.props, 'isCreatable'),
    isSingleton: bool(block.props, 'isSingleton'),
    isStructured: bool(block.props, 'isStructured'),
    isJavaScriptBuiltin: bool(block.props, 'isJavaScriptBuiltin'),
    defaultProperty: str(block.props, 'defaultProperty'),
    parentProperty: str(block.props, 'parentProperty'),
    attachedType: str(block.props, 'attachedType'),
    deferredNames: strArray(block.props, 'deferredNames'),
    immediateNames: strArray(block.props, 'immediateNames'),
    interfaces: strArray(block.props, 'interfaces'),
    hasCustomParser: bool(block.props, 'hasCustomParser'),
    enforcesScopedEnums: bool(block.props, 'enforcesScopedEnums'),
    properties: block.children.filter((c) => c.blockType === 'Property').map(convertProperty),
    signals: block.children.filter((c) => c.blockType === 'Signal').map(convertSignal),
    methods: block.children.filter((c) => c.blockType === 'Method').map(convertMethod),
    enums: block.children.filter((c) => c.blockType === 'Enum').map(convertEnum),
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function parseQmltypes(content: string, filePath: string): QmltypesParseResult {
  const diagnostics: ParseDiagnostic[] = [];
  const emptyResult: QmltypesParseResult = {
    file: { filePath, components: [] },
    diagnostics,
    success: true,
  };

  if (!content.trim()) return emptyResult;

  try {
    const tokens = tokenize(content);
    const parser = new BlockParser(tokens, filePath, diagnostics);
    const blocks = parser.parse();

    const components: RawQmltypesComponent[] = [];
    for (const block of blocks) {
      if (block.blockType === 'Module') {
        for (const child of block.children) {
          if (child.blockType === 'Component') {
            components.push(convertComponent(child));
          }
        }
      } else if (block.blockType === 'Component') {
        // Handle files without Module wrapper
        components.push(convertComponent(block));
      }
    }

    const hasErrors = diagnostics.some((d) => d.level === 'error');
    return {
      file: { filePath, components },
      diagnostics,
      success: !hasErrors,
    };
  } catch (error) {
    diagnostics.push({
      level: 'error',
      message: `Failed to parse qmltypes: ${error instanceof Error ? error.message : String(error)}`,
      file: filePath,
    });
    return { file: { filePath, components: [] }, diagnostics, success: false };
  }
}
