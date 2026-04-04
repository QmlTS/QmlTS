import type {
  ArrayBindingNode,
  AstNode,
  AttachedBindingNode,
  BehaviorOnNode,
  BindingNode,
  BindingValue,
  CommentNode,
  EnumDeclarationNode,
  FunctionDeclarationNode,
  GroupedBindingNode,
  IdAssignmentNode,
  ImportNode,
  InlineComponentNode,
  ObjectDefinitionNode,
  ObjectMember,
  PragmaNode,
  PropertyAliasNode,
  PropertyDeclarationNode,
  QmlDocument,
  SignalDeclarationNode,
  SignalHandlerNode,
} from '../ast/index.js';
import { normalizeMembers } from './normalize.js';
import { SourceMapImpl } from './source-map.js';
import type {
  EmitOptions,
  EmitWithSourceMapResult,
  FragmentEmitOptions,
  ResolvedEmitOptions,
} from './types.js';
import { resolveOptions } from './types.js';
import { QmlWriter } from './writer.js';

// ─── Public API ──────────────────────────────────────────────────────────

export function emit(doc: QmlDocument, options?: EmitOptions): string {
  const opts = resolveOptions(options);
  const ctx = new EmitContext(opts, null);
  emitDocument(ctx, doc);
  return ctx.getOutput();
}

export function emitFragment(node: AstNode, options?: FragmentEmitOptions): string {
  const opts = resolveOptions(options);
  const indentLevel = (options as FragmentEmitOptions | undefined)?.indentLevel ?? 0;
  const ctx = new EmitContext(opts, null, indentLevel);
  emitNode(ctx, node);
  return ctx.getOutput();
}

export function emitWithSourceMap(
  doc: QmlDocument,
  options?: EmitOptions,
): EmitWithSourceMapResult {
  const opts = resolveOptions(options);
  const sourceMap = new SourceMapImpl();
  const ctx = new EmitContext(opts, sourceMap);
  emitDocument(ctx, doc);
  return { text: ctx.getOutput(), sourceMap };
}

// ─── Emit Context ────────────────────────────────────────────────────────

class EmitContext {
  readonly writer: QmlWriter;
  readonly opts: ResolvedEmitOptions;
  readonly sourceMap: SourceMapImpl | null;
  private _semicolonSuffix: string;

  private static resolveSemicolonSuffix(
    semicolonRule: ResolvedEmitOptions['semicolonRule'],
  ): string {
    // The pure emitter never emits multiple statements on a single line, so
    // "essential" currently has the same concrete output as "omit".
    return semicolonRule === 'always' ? ';' : '';
  }

  constructor(opts: ResolvedEmitOptions, sourceMap: SourceMapImpl | null, initialIndent = 0) {
    this.opts = opts;
    this.writer = new QmlWriter(opts, initialIndent);
    this.sourceMap = sourceMap;
    this._semicolonSuffix = EmitContext.resolveSemicolonSuffix(opts.semicolonRule);
  }

  get semi(): string {
    return this._semicolonSuffix;
  }

  getOutput(): string {
    return this.writer.getOutput();
  }

  recordSpan(node: AstNode, startLine: number, startColumn: number): void {
    if (this.sourceMap) {
      this.sourceMap.addEntry(node, node.kind, {
        startLine,
        startColumn,
        endLine: this.writer.line,
        endColumn: this.writer.column,
      });
    }
  }
}

// ─── Document ────────────────────────────────────────────────────────────

function emitDocument(ctx: EmitContext, doc: QmlDocument): void {
  const { writer, opts } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  // Generated header
  if (opts.emitGeneratedHeader) {
    writer.writeLine(`// ${opts.generatedHeaderText}`);
  }

  // Pragmas
  let imports = doc.imports;
  if (opts.sortImports) {
    imports = [...imports].sort((a, b) => {
      const aKey = a.moduleUri ?? a.path ?? '';
      const bKey = b.moduleUri ?? b.path ?? '';
      return aKey.localeCompare(bKey);
    });
  }

  for (const pragma of doc.pragmas) {
    emitPragma(ctx, pragma);
  }

  // Imports
  for (const imp of imports) {
    emitImport(ctx, imp);
  }

  // Blank line before root object if there are pragmas or imports
  if (doc.pragmas.length > 0 || imports.length > 0) {
    writer.writeNewline();
  }

  // Root object
  emitObject(ctx, doc.rootObject);

  // Trailing newline
  if (opts.trailingNewline) {
    writer.writeNewline();
  }

  ctx.recordSpan(doc, startLine, startCol);
}

// ─── Pragma ──────────────────────────────────────────────────────────────

function emitPragma(ctx: EmitContext, node: PragmaNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  writer.writeIndent();
  if (node.value) {
    writer.write(`pragma ${node.name}: ${node.value}`);
  } else {
    writer.write(`pragma ${node.name}`);
  }
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Import ──────────────────────────────────────────────────────────────

function emitImport(ctx: EmitContext, node: ImportNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  let line = 'import ';
  if (node.importKind === 'module') {
    line += node.moduleUri ?? '';
    if (node.version) line += ` ${node.version}`;
    if (node.qualifier) line += ` as ${node.qualifier}`;
  } else {
    line += `"${node.path ?? ''}"`;
    if (node.qualifier) line += ` as ${node.qualifier}`;
  }

  writer.writeIndent();
  writer.write(line);
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Object ──────────────────────────────────────────────────────────────

function emitObject(
  ctx: EmitContext,
  node: ObjectDefinitionNode,
  options?: { inlineStart?: boolean },
): void {
  const { writer, opts } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;
  const inlineStart = options?.inlineStart ?? false;

  emitLeadingComments(ctx, node);

  const members = opts.normalize ? normalizeMembers(node.members) : node.members;

  if (members.length === 0 && opts.singleLineEmptyObjects) {
    if (!inlineStart) {
      writer.writeIndent();
    }
    writer.write(`${node.typeName} { }`);
    emitTrailingComment(ctx, node);
  } else {
    if (!inlineStart) {
      writer.writeIndent();
    }
    writer.write(`${node.typeName} {`);
    emitTrailingComment(ctx, node);
    writer.writeNewline();
    writer.indent();
    emitMembers(ctx, members);
    writer.dedent();
    writer.writeIndent();
    writer.write('}');
  }

  ctx.recordSpan(node, startLine, startCol);
}

// ─── Members ─────────────────────────────────────────────────────────────

function emitMembers(ctx: EmitContext, members: ObjectMember[]): void {
  const { opts } = ctx;

  for (let i = 0; i < members.length; i++) {
    const member = members[i]!;
    const prev = i > 0 ? members[i - 1] : undefined;

    // Blank lines between sections
    if (prev && opts.insertBlankLinesBetweenSections) {
      if (shouldInsertBlankLine(prev, member, opts)) {
        ctx.writer.writeNewline();
      }
    }

    emitMember(ctx, member);
  }
}

function shouldInsertBlankLine(
  prev: ObjectMember,
  curr: ObjectMember,
  opts: ResolvedEmitOptions,
): boolean {
  // Between different categories
  const prevCat = getMemberCategory(prev);
  const currCat = getMemberCategory(curr);

  if (prevCat !== currCat && prev.kind !== 'Comment' && curr.kind !== 'Comment') {
    return true;
  }

  // Between child objects
  if (
    opts.insertBlankLinesBetweenObjects &&
    prev.kind === 'ObjectDefinition' &&
    curr.kind === 'ObjectDefinition'
  ) {
    return true;
  }

  // Between functions
  if (
    opts.insertBlankLinesBetweenFunctions &&
    prev.kind === 'FunctionDeclaration' &&
    curr.kind === 'FunctionDeclaration'
  ) {
    return true;
  }

  return false;
}

function getMemberCategory(m: ObjectMember): number {
  switch (m.kind) {
    case 'IdAssignment':
      return 0;
    case 'PropertyDeclaration':
    case 'PropertyAlias':
      return 1;
    case 'SignalDeclaration':
      return 2;
    case 'Binding':
    case 'GroupedBinding':
    case 'AttachedBinding':
    case 'ArrayBinding':
    case 'BehaviorOn':
      return 3;
    case 'SignalHandler':
      return 4;
    case 'FunctionDeclaration':
      return 5;
    case 'ObjectDefinition':
      return 6;
    case 'InlineComponent':
      return 7;
    case 'EnumDeclaration':
      return 8;
    case 'Comment':
      return -1;
  }
}

function emitMember(ctx: EmitContext, member: ObjectMember): void {
  switch (member.kind) {
    case 'IdAssignment':
      emitIdAssignment(ctx, member);
      break;
    case 'Binding':
      emitBinding(ctx, member);
      break;
    case 'GroupedBinding':
      emitGroupedBinding(ctx, member);
      break;
    case 'AttachedBinding':
      emitAttachedBinding(ctx, member);
      break;
    case 'ArrayBinding':
      emitArrayBinding(ctx, member);
      break;
    case 'BehaviorOn':
      emitBehaviorOn(ctx, member);
      break;
    case 'PropertyDeclaration':
      emitPropertyDeclaration(ctx, member);
      break;
    case 'PropertyAlias':
      emitPropertyAlias(ctx, member);
      break;
    case 'SignalDeclaration':
      emitSignalDeclaration(ctx, member);
      break;
    case 'SignalHandler':
      emitSignalHandler(ctx, member);
      break;
    case 'FunctionDeclaration':
      emitFunctionDeclaration(ctx, member);
      break;
    case 'EnumDeclaration':
      emitEnumDeclaration(ctx, member);
      break;
    case 'InlineComponent':
      emitInlineComponent(ctx, member);
      break;
    case 'ObjectDefinition':
      emitObject(ctx, member);
      ctx.writer.writeNewline();
      break;
    case 'Comment':
      emitCommentNode(ctx, member);
      break;
  }
}

// ─── Node dispatcher (for emitFragment) ──────────────────────────────────

function emitNode(ctx: EmitContext, node: AstNode): void {
  switch (node.kind) {
    case 'Document':
      emitDocument(ctx, node);
      break;
    case 'Import':
      emitImport(ctx, node);
      break;
    case 'Pragma':
      emitPragma(ctx, node);
      break;
    case 'ObjectDefinition':
      emitObject(ctx, node);
      break;
    case 'IdAssignment':
      emitIdAssignment(ctx, node);
      break;
    case 'Binding':
      emitBinding(ctx, node);
      break;
    case 'GroupedBinding':
      emitGroupedBinding(ctx, node);
      break;
    case 'AttachedBinding':
      emitAttachedBinding(ctx, node);
      break;
    case 'ArrayBinding':
      emitArrayBinding(ctx, node);
      break;
    case 'BehaviorOn':
      emitBehaviorOn(ctx, node);
      break;
    case 'PropertyDeclaration':
      emitPropertyDeclaration(ctx, node);
      break;
    case 'PropertyAlias':
      emitPropertyAlias(ctx, node);
      break;
    case 'SignalDeclaration':
      emitSignalDeclaration(ctx, node);
      break;
    case 'SignalHandler':
      emitSignalHandler(ctx, node);
      break;
    case 'FunctionDeclaration':
      emitFunctionDeclaration(ctx, node);
      break;
    case 'EnumDeclaration':
      emitEnumDeclaration(ctx, node);
      break;
    case 'InlineComponent':
      emitInlineComponent(ctx, node);
      break;
    case 'Comment':
      emitCommentNode(ctx, node);
      break;
  }
}

// ─── Id Assignment ───────────────────────────────────────────────────────

function emitIdAssignment(ctx: EmitContext, node: IdAssignmentNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);
  writer.writeIndent();
  writer.write(`id: ${node.id}${ctx.semi}`);
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Binding ─────────────────────────────────────────────────────────────

function emitBinding(ctx: EmitContext, node: BindingNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);
  writer.writeIndent();
  writer.write(`${node.property}: `);
  emitBindingValue(ctx, node.value);
  writer.write(ctx.semi);
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Binding Value───────────────────────────────────────────────────────

function emitBindingValue(ctx: EmitContext, value: BindingValue): void {
  const { writer, opts } = ctx;

  switch (value.kind) {
    case 'number':
      writer.write(String(value.value));
      break;

    case 'string': {
      const q = resolveQuote(value.quote, opts.quoteStyle);
      writer.write(`${q}${value.value}${q}`);
      break;
    }

    case 'boolean':
      writer.write(String(value.value));
      break;

    case 'null':
      writer.write('null');
      break;

    case 'enum':
      if (value.enumName) {
        writer.write(`${value.typeName}.${value.enumName}.${value.valueName}`);
      } else {
        writer.write(`${value.typeName}.${value.valueName}`);
      }
      break;

    case 'expression':
      writer.write(value.code);
      break;

    case 'script-block': {
      const lines = value.code.split('\n');
      if (lines.length === 1) {
        writer.write(`{ ${value.code} }`);
      } else {
        writer.write('{');
        writer.writeNewline();
        writer.indent();
        for (const line of lines) {
          writer.writeIndent();
          writer.write(line);
          writer.writeNewline();
        }
        writer.dedent();
        writer.writeIndent();
        writer.write('}');
      }
      break;
    }

    case 'object':
      emitObject(ctx, value.node, { inlineStart: true });
      break;

    case 'array': {
      writer.write('[');
      for (let i = 0; i < value.items.length; i++) {
        if (i > 0) writer.write(', ');
        emitBindingValue(ctx, value.items[i]!);
      }
      writer.write(']');
      break;
    }
  }
}

function resolveQuote(
  nodeQuote: '"' | "'" | undefined,
  style: 'double' | 'single' | 'preserve',
): string {
  if (style === 'preserve' && nodeQuote) return nodeQuote;
  if (style === 'single') return "'";
  return '"';
}

// ─── Grouped Binding ─────────────────────────────────────────────────────

function emitGroupedBinding(ctx: EmitContext, node: GroupedBindingNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);
  writer.writeIndent();
  writer.write(`${node.group} {`);
  writer.writeNewline();
  writer.indent();

  for (const binding of node.bindings) {
    emitBinding(ctx, binding);
  }

  writer.dedent();
  writer.writeIndent();
  writer.write('}');
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Attached Binding────────────────────────────────────────────────────

function emitAttachedBinding(ctx: EmitContext, node: AttachedBindingNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  if (node.bindings.length === 0) {
    if (ctx.opts.emitComments && node.trailingComment) {
      writer.writeIndent();
      writer.write(`// ${node.trailingComment}`);
      writer.writeNewline();
    }
    ctx.recordSpan(node, startLine, startCol);
    return;
  }

  for (let i = 0; i < node.bindings.length; i++) {
    const binding = node.bindings[i]!;
    const bindingStartLine = writer.line;
    const bindingStartCol = writer.column;
    const isLastBinding = i === node.bindings.length - 1;

    emitLeadingComments(ctx, binding);
    writer.writeIndent();
    writer.write(`${node.attachedTypeName}.${binding.property}: `);
    emitBindingValue(ctx, binding.value);
    writer.write(ctx.semi);
    emitTrailingComment(ctx, binding);
    if (isLastBinding) {
      emitTrailingComment(ctx, node);
    }
    ctx.recordSpan(binding, bindingStartLine, bindingStartCol);
    writer.writeNewline();
  }

  ctx.recordSpan(node, startLine, startCol);
}

// ─── Array Binding ───────────────────────────────────────────────────────

function emitArrayBinding(ctx: EmitContext, node: ArrayBindingNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  if (node.elements.length === 1 && isSimpleValue(node.elements[0]!)) {
    // Single simple element — single line
    writer.writeIndent();
    writer.write(`${node.property}: [`);
    emitBindingValue(ctx, node.elements[0]!);
    writer.write(`]${ctx.semi}`);
  } else {
    // Multi-element — each on its own line
    writer.writeIndent();
    writer.write(`${node.property}: [`);
    writer.writeNewline();
    writer.indent();

    for (let i = 0; i < node.elements.length; i++) {
      const elem = node.elements[i]!;
      if (elem.kind === 'object') {
        emitObject(ctx, elem.node);
        if (i < node.elements.length - 1) writer.write(',');
        writer.writeNewline();
      } else {
        writer.writeIndent();
        emitBindingValue(ctx, elem);
        if (i < node.elements.length - 1) writer.write(',');
        writer.writeNewline();
      }
    }

    writer.dedent();
    writer.writeIndent();
    writer.write(`]${ctx.semi}`);
  }

  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

function isSimpleValue(v: BindingValue): boolean {
  return (
    v.kind === 'number' ||
    v.kind === 'string' ||
    v.kind === 'boolean' ||
    v.kind === 'null' ||
    v.kind === 'enum' ||
    v.kind === 'expression'
  );
}

// ─── Behavior On ─────────────────────────────────────────────────────────

function emitBehaviorOn(ctx: EmitContext, node: BehaviorOnNode): void {
  const { writer, opts } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);
  writer.writeIndent();
  writer.write(`Behavior on ${node.property} {`);
  writer.writeNewline();
  writer.indent();

  const members = opts.normalize ? normalizeMembers(node.members) : node.members;
  emitMembers(ctx, members);

  writer.dedent();
  writer.writeIndent();
  writer.write('}');
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Property Declaration────────────────────────────────────────────────

function emitPropertyDeclaration(ctx: EmitContext, node: PropertyDeclarationNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  const modifiers: string[] = [];
  if (node.isDefault) modifiers.push('default');
  if (node.isVirtual) modifiers.push('virtual');
  if (node.isOverride) modifiers.push('override');
  if (node.isFinal) modifiers.push('final');
  if (node.isRequired) modifiers.push('required');
  if (node.isReadonly) modifiers.push('readonly');

  const prefix = modifiers.length > 0 ? `${modifiers.join(' ')} ` : '';

  writer.writeIndent();
  writer.write(`${prefix}property ${node.typeName} ${node.name}`);

  if (node.initialValue) {
    writer.write(': ');
    emitBindingValue(ctx, node.initialValue);
  }

  writer.write(ctx.semi);
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Property Alias──────────────────────────────────────────────────────

function emitPropertyAlias(ctx: EmitContext, node: PropertyAliasNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  const modifiers: string[] = [];
  if (node.isDefault) modifiers.push('default');
  if (node.isReadonly) modifiers.push('readonly');

  const prefix = modifiers.length > 0 ? `${modifiers.join(' ')} ` : '';

  writer.writeIndent();
  writer.write(`${prefix}property alias ${node.name}: ${node.targetPath}${ctx.semi}`);
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Signal Declaration──────────────────────────────────────────────────

function emitSignalDeclaration(ctx: EmitContext, node: SignalDeclarationNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  const params = node.parameters.map((p) => (p.type ? `${p.name}: ${p.type}` : p.name)).join(', ');

  writer.writeIndent();
  writer.write(`signal ${node.name}(${params})`);
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Signal Handler ──────────────────────────────────────────────────────

function emitSignalHandler(ctx: EmitContext, node: SignalHandlerNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  const body = node.body;

  switch (body.form) {
    case 'expression':
      writer.writeIndent();
      writer.write(`${node.name}: ${body.code}${ctx.semi}`);
      emitTrailingComment(ctx, node);
      ctx.recordSpan(node, startLine, startCol);
      writer.writeNewline();
      break;

    case 'block': {
      const lines = body.code.split('\n');
      if (lines.length === 1) {
        writer.writeIndent();
        writer.write(`${node.name}: { ${body.code} }`);
        emitTrailingComment(ctx, node);
        ctx.recordSpan(node, startLine, startCol);
        writer.writeNewline();
      } else {
        writer.writeIndent();
        writer.write(`${node.name}: {`);
        writer.writeNewline();
        writer.indent();
        for (const line of lines) {
          writer.writeIndent();
          writer.write(line);
          writer.writeNewline();
        }
        writer.dedent();
        writer.writeIndent();
        writer.write('}');
        emitTrailingComment(ctx, node);
        ctx.recordSpan(node, startLine, startCol);
        writer.writeNewline();
      }
      break;
    }

    case 'arrow': {
      const params =
        body.parameters.length === 1
          ? `(${body.parameters[0]})`
          : `(${body.parameters.join(', ')})`;

      writer.writeIndent();
      if (body.isBlock) {
        writer.write(`${node.name}: ${params} => { ${body.body} }`);
      } else {
        writer.write(`${node.name}: ${params} => ${body.body}`);
      }
      emitTrailingComment(ctx, node);
      ctx.recordSpan(node, startLine, startCol);
      writer.writeNewline();
      break;
    }
  }
}

// ─── Function Declaration ────────────────────────────────────────────────

function emitFunctionDeclaration(ctx: EmitContext, node: FunctionDeclarationNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  const params = node.parameters.map((p) => (p.type ? `${p.name}: ${p.type}` : p.name)).join(', ');

  const returnType = node.returnType ? `: ${node.returnType}` : '';

  const bodyLines = node.body.split('\n');
  if (bodyLines.length === 1) {
    writer.writeIndent();
    writer.write(`function ${node.name}(${params})${returnType} { ${node.body} }`);
    emitTrailingComment(ctx, node);
    ctx.recordSpan(node, startLine, startCol);
    writer.writeNewline();
  } else {
    writer.writeIndent();
    writer.write(`function ${node.name}(${params})${returnType} {`);
    writer.writeNewline();
    writer.indent();
    for (const line of bodyLines) {
      writer.writeIndent();
      writer.write(line);
      writer.writeNewline();
    }
    writer.dedent();
    writer.writeIndent();
    writer.write('}');
    emitTrailingComment(ctx, node);
    ctx.recordSpan(node, startLine, startCol);
    writer.writeNewline();
  }
}

// ─── Enum Declaration ────────────────────────────────────────────────────

function emitEnumDeclaration(ctx: EmitContext, node: EnumDeclarationNode): void {
  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);
  writer.writeIndent();
  writer.write(`enum ${node.name} {`);
  writer.writeNewline();
  writer.indent();

  for (let i = 0; i < node.members.length; i++) {
    const member = node.members[i]!;
    writer.writeIndent();
    if (member.value !== undefined) {
      writer.write(`${member.name} = ${member.value}`);
    } else {
      writer.write(member.name);
    }
    if (i < node.members.length - 1) writer.write(',');
    writer.writeNewline();
  }

  writer.dedent();
  writer.writeIndent();
  writer.write('}');
  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Inline Component────────────────────────────────────────────────────

function emitInlineComponent(ctx: EmitContext, node: InlineComponentNode): void {
  const { writer, opts } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  emitLeadingComments(ctx, node);

  const members = opts.normalize ? normalizeMembers(node.body.members) : node.body.members;

  if (members.length === 0 && opts.singleLineEmptyObjects) {
    writer.writeIndent();
    writer.write(`component ${node.name}: ${node.body.typeName} { }`);
  } else {
    writer.writeIndent();
    writer.write(`component ${node.name}: ${node.body.typeName} {`);
    writer.writeNewline();
    writer.indent();
    emitMembers(ctx, members);
    writer.dedent();
    writer.writeIndent();
    writer.write('}');
  }

  emitTrailingComment(ctx, node);
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Comment Node ────────────────────────────────────────────────────────

function emitCommentNode(ctx: EmitContext, node: CommentNode): void {
  if (!ctx.opts.emitComments) return;

  const { writer } = ctx;
  const startLine = writer.line;
  const startCol = writer.column;

  writer.writeIndent();
  if (node.style === 'line') {
    writer.write(`// ${node.text}`);
  } else {
    writer.write(`/* ${node.text} */`);
  }
  ctx.recordSpan(node, startLine, startCol);
  writer.writeNewline();
}

// ─── Leading/Trailing Comments ───────────────────────────────────────────

function emitLeadingComments(ctx: EmitContext, node: { leadingComments?: string[] }): void {
  if (!ctx.opts.emitComments || !node.leadingComments) return;
  for (const comment of node.leadingComments) {
    ctx.writer.writeLine(`// ${comment}`);
  }
}

function emitTrailingComment(ctx: EmitContext, node: { trailingComment?: string }): void {
  if (!ctx.opts.emitComments || !node.trailingComment) return;
  ctx.writer.write(` // ${node.trailingComment}`);
}
