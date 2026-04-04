// ═══════════════════════════════════════════════════════════════════════════
//  QML AST — Type Definitions
//  Pure TypeScript representation of QML documents.
//  Covers all Qt 6.11 QML syntax constructs.
// ═══════════════════════════════════════════════════════════════════════════

// ─── §1.1 Infrastructure ─────────────────────────────────────────────────

/** All AST node kind discriminant tags */
export type NodeKind =
  // Document-level
  | 'Document'
  | 'Import'
  | 'Pragma'
  // Object-level
  | 'ObjectDefinition'
  | 'InlineComponent'
  // Property declarations
  | 'PropertyDeclaration'
  | 'PropertyAlias'
  // Bindings
  | 'Binding'
  | 'GroupedBinding'
  | 'AttachedBinding'
  | 'ArrayBinding'
  | 'BehaviorOn'
  // Values
  | 'ScriptExpression'
  | 'ObjectValue'
  | 'ArrayValue'
  // Signals
  | 'SignalDeclaration'
  | 'SignalHandler'
  // Functions
  | 'FunctionDeclaration'
  // Enums
  | 'EnumDeclaration'
  // Special
  | 'IdAssignment'
  | 'Comment';

/** Source location (optional — generated ASTs have no location) */
export interface SourceSpan {
  startLine: number;
  startColumn: number;
  endLine: number;
  endColumn: number;
}

/** Base type for all AST nodes */
export interface AstNodeBase {
  readonly kind: NodeKind;
  span?: SourceSpan;
  leadingComments?: string[];
  trailingComment?: string;
}

// ─── §1.2 Document-Level Nodes ───────────────────────────────────────────

export interface QmlDocument extends AstNodeBase {
  kind: 'Document';
  pragmas: PragmaNode[];
  imports: ImportNode[];
  rootObject: ObjectDefinitionNode;
}

export interface ImportNode extends AstNodeBase {
  kind: 'Import';
  importKind: 'module' | 'directory' | 'javascript';
  moduleUri?: string;
  version?: string;
  path?: string;
  qualifier?: string;
}

export interface PragmaNode extends AstNodeBase {
  kind: 'Pragma';
  name: PragmaName;
  value?: string;
}

export type PragmaName =
  | 'Singleton'
  | 'ComponentBehavior'
  | 'ListPropertyAssignBehavior'
  | 'FunctionSignatureBehavior'
  | 'NativeMethodBehavior'
  | 'ValueTypeBehavior'
  | 'NativeTextRendering'
  | 'Translator';

// ─── §1.3 Object-Level Nodes ─────────────────────────────────────────────

export interface ObjectDefinitionNode extends AstNodeBase {
  kind: 'ObjectDefinition';
  typeName: string;
  members: ObjectMember[];
}

export interface InlineComponentNode extends AstNodeBase {
  kind: 'InlineComponent';
  name: string;
  body: ObjectDefinitionNode;
}

/** All possible member types inside an object definition */
export type ObjectMember =
  | IdAssignmentNode
  | PropertyDeclarationNode
  | PropertyAliasNode
  | BindingNode
  | GroupedBindingNode
  | AttachedBindingNode
  | ArrayBindingNode
  | BehaviorOnNode
  | SignalDeclarationNode
  | SignalHandlerNode
  | FunctionDeclarationNode
  | EnumDeclarationNode
  | InlineComponentNode
  | ObjectDefinitionNode
  | CommentNode;

// ─── §1.4 Id Assignment ─────────────────────────────────────────────────

export interface IdAssignmentNode extends AstNodeBase {
  kind: 'IdAssignment';
  id: string;
}

// ─── §1.5 Property Declarations ──────────────────────────────────────────

export interface PropertyDeclarationNode extends AstNodeBase {
  kind: 'PropertyDeclaration';
  name: string;
  typeName: string;
  isDefault?: boolean;
  isVirtual?: boolean;
  isOverride?: boolean;
  isFinal?: boolean;
  isRequired?: boolean;
  isReadonly?: boolean;
  initialValue?: BindingValue;
}

export interface PropertyAliasNode extends AstNodeBase {
  kind: 'PropertyAlias';
  name: string;
  targetPath: string;
  isDefault?: boolean;
  isReadonly?: boolean;
}

// ─── §1.6 Binding Nodes ─────────────────────────────────────────────────

export interface BindingNode extends AstNodeBase {
  kind: 'Binding';
  property: string;
  value: BindingValue;
}

export interface GroupedBindingNode extends AstNodeBase {
  kind: 'GroupedBinding';
  group: string;
  bindings: BindingNode[];
}

export interface AttachedBindingNode extends AstNodeBase {
  kind: 'AttachedBinding';
  attachedTypeName: string;
  bindings: BindingNode[];
}

export interface ArrayBindingNode extends AstNodeBase {
  kind: 'ArrayBinding';
  property: string;
  elements: BindingValue[];
}

export interface BehaviorOnNode extends AstNodeBase {
  kind: 'BehaviorOn';
  property: string;
  members: ObjectMember[];
}

// ─── §1.7 Binding Value Types ────────────────────────────────────────────

export type BindingValue =
  | NumberLiteral
  | StringLiteral
  | BooleanLiteral
  | NullLiteral
  | EnumReference
  | ScriptExpression
  | ScriptBlock
  | ObjectValue
  | ArrayValue;

export interface NumberLiteral {
  kind: 'number';
  value: number;
}

export interface StringLiteral {
  kind: 'string';
  value: string;
  quote?: '"' | "'";
}

export interface BooleanLiteral {
  kind: 'boolean';
  value: boolean;
}

export interface NullLiteral {
  kind: 'null';
}

export interface EnumReference {
  kind: 'enum';
  typeName: string;
  enumName?: string;
  valueName: string;
}

export interface ScriptExpression {
  kind: 'expression';
  code: string;
}

export interface ScriptBlock {
  kind: 'script-block';
  code: string;
}

export interface ObjectValue {
  kind: 'object';
  node: ObjectDefinitionNode;
}

export interface ArrayValue {
  kind: 'array';
  items: BindingValue[];
}

// ─── §1.8 Signal Nodes ──────────────────────────────────────────────────

export interface SignalDeclarationNode extends AstNodeBase {
  kind: 'SignalDeclaration';
  name: string;
  parameters: ParameterNode[];
}

export interface SignalHandlerNode extends AstNodeBase {
  kind: 'SignalHandler';
  name: string;
  body: SignalHandlerBody;
}

export type SignalHandlerBody = SignalHandlerExpression | SignalHandlerBlock | SignalHandlerArrow;

export interface SignalHandlerExpression {
  form: 'expression';
  code: string;
}

export interface SignalHandlerBlock {
  form: 'block';
  code: string;
}

export interface SignalHandlerArrow {
  form: 'arrow';
  parameters: string[];
  body: string;
  isBlock: boolean;
}

// ─── §1.9 Functions and Enums ────────────────────────────────────────────

export interface FunctionDeclarationNode extends AstNodeBase {
  kind: 'FunctionDeclaration';
  name: string;
  parameters: ParameterNode[];
  returnType?: string;
  body: string;
}

export interface ParameterNode {
  name: string;
  type?: string;
}

export interface EnumDeclarationNode extends AstNodeBase {
  kind: 'EnumDeclaration';
  name: string;
  members: EnumMemberNode[];
}

export interface EnumMemberNode {
  name: string;
  value?: number;
}

// ─── §1.10 Comment Node ─────────────────────────────────────────────────

export interface CommentNode extends AstNodeBase {
  kind: 'Comment';
  text: string;
  style: 'line' | 'block';
}

// ─── §1.11 AST Node Union ───────────────────────────────────────────────

export type AstNode =
  | QmlDocument
  | ImportNode
  | PragmaNode
  | ObjectDefinitionNode
  | InlineComponentNode
  | IdAssignmentNode
  | PropertyDeclarationNode
  | PropertyAliasNode
  | BindingNode
  | GroupedBindingNode
  | AttachedBindingNode
  | ArrayBindingNode
  | BehaviorOnNode
  | SignalDeclarationNode
  | SignalHandlerNode
  | FunctionDeclarationNode
  | EnumDeclarationNode
  | CommentNode;

// ─── §2 Builder Types ───────────────────────────────────────────────────

export interface ValueFactory {
  num(value: number): NumberLiteral;
  str(value: string, quote?: '"' | "'"): StringLiteral;
  bool(value: boolean): BooleanLiteral;
  nil(): NullLiteral;
  enumRef(typeName: string, valueName: string, enumName?: string): EnumReference;
  expr(code: string): ScriptExpression;
  block(code: string): ScriptBlock;
}

export type BindableValue = number | boolean | null | BindingValue;

export interface DocumentBuilder {
  pragma(name: PragmaName, value?: string): DocumentBuilder;
  importModule(uri: string, version?: string, qualifier?: string): DocumentBuilder;
  importDirectory(path: string, qualifier?: string): DocumentBuilder;
  importJs(path: string, qualifier: string): DocumentBuilder;
  addImport(node: ImportNode): DocumentBuilder;
  root(object: ObjectBuilder | ObjectDefinitionNode): QmlDocument;
}

export interface ObjectBuilder {
  id(id: string): ObjectBuilder;
  declareProp(
    type: string,
    name: string,
    initialValue?: BindableValue,
    modifiers?: PropertyModifiers,
  ): ObjectBuilder;
  declareAlias(
    name: string,
    targetPath: string,
    modifiers?: Pick<PropertyModifiers, 'default' | 'readonly'>,
  ): ObjectBuilder;
  bind(property: string, value: BindableValue): ObjectBuilder;
  grouped(group: string, setup: (g: GroupedBindingBuilder) => void): ObjectBuilder;
  attached(typeName: string, setup: (a: AttachedBindingBuilder) => void): ObjectBuilder;
  arrayBind(property: string, elements: BindableValue[]): ObjectBuilder;
  behaviorOn(
    property: string,
    animationObject: ObjectBuilder | ObjectDefinitionNode,
  ): ObjectBuilder;
  declareSignal(name: string, parameters?: ParameterNode[]): ObjectBuilder;
  handler(name: string, body: BindableValue | ArrowHandlerDef): ObjectBuilder;
  fn(name: string, signature: FunctionSignature, body: string): ObjectBuilder;
  child(object: ObjectBuilder | ObjectDefinitionNode): ObjectBuilder;
  inlineComponent(name: string, object: ObjectBuilder | ObjectDefinitionNode): ObjectBuilder;
  declareEnum(name: string, members: EnumMemberNode[]): ObjectBuilder;
  comment(text: string, style?: 'line' | 'block'): ObjectBuilder;
  addMember(member: ObjectMember): ObjectBuilder;
  build(): ObjectDefinitionNode;
}

export interface PropertyModifiers {
  default?: boolean;
  virtual?: boolean;
  override?: boolean;
  final?: boolean;
  required?: boolean;
  readonly?: boolean;
}

export interface ArrowHandlerDef {
  params: string[];
  body: string;
  isBlock?: boolean;
}

export interface FunctionSignature {
  params?: ParameterNode[];
  returnType?: string;
}

export interface GroupedBindingBuilder {
  bind(property: string, value: BindableValue): GroupedBindingBuilder;
}

export interface AttachedBindingBuilder {
  bind(property: string, value: BindableValue): AttachedBindingBuilder;
  handler(name: string, body: BindableValue | ArrowHandlerDef): AttachedBindingBuilder;
}

// ─── §3 Visitor / Walker / Transform Types ───────────────────────────────

export interface QmlAstVisitor {
  visitDocument?(node: QmlDocument): void | false;
  visitImport?(node: ImportNode): void | false;
  visitPragma?(node: PragmaNode): void | false;
  visitObjectDefinition?(node: ObjectDefinitionNode): void | false;
  visitInlineComponent?(node: InlineComponentNode): void | false;
  visitIdAssignment?(node: IdAssignmentNode): void | false;
  visitPropertyDeclaration?(node: PropertyDeclarationNode): void | false;
  visitPropertyAlias?(node: PropertyAliasNode): void | false;
  visitBinding?(node: BindingNode): void | false;
  visitGroupedBinding?(node: GroupedBindingNode): void | false;
  visitAttachedBinding?(node: AttachedBindingNode): void | false;
  visitArrayBinding?(node: ArrayBindingNode): void | false;
  visitBehaviorOn?(node: BehaviorOnNode): void | false;
  visitSignalDeclaration?(node: SignalDeclarationNode): void | false;
  visitSignalHandler?(node: SignalHandlerNode): void | false;
  visitFunctionDeclaration?(node: FunctionDeclarationNode): void | false;
  visitEnumDeclaration?(node: EnumDeclarationNode): void | false;
  visitComment?(node: CommentNode): void | false;
}

export interface WalkerCallbacks {
  enter?(node: AstNode, parent: AstNode | null, path: string[]): void | false;
  leave?(node: AstNode, parent: AstNode | null, path: string[]): void;
}

export interface QmlAstTransformer {
  transformDocument?(node: QmlDocument): QmlDocument | undefined;
  transformImport?(node: ImportNode): ImportNode | null | undefined;
  transformPragma?(node: PragmaNode): PragmaNode | null | undefined;
  transformObjectDefinition?(node: ObjectDefinitionNode): ObjectDefinitionNode | undefined;
  transformBinding?(node: BindingNode): BindingNode | null | undefined;
  transformGroupedBinding?(node: GroupedBindingNode): GroupedBindingNode | null | undefined;
  transformAttachedBinding?(node: AttachedBindingNode): AttachedBindingNode | null | undefined;
  transformSignalHandler?(node: SignalHandlerNode): SignalHandlerNode | null | undefined;
  transformPropertyDeclaration?(
    node: PropertyDeclarationNode,
  ): PropertyDeclarationNode | null | undefined;
  transformMember?(node: ObjectMember): ObjectMember | null | undefined;
}

// ─── §4 Validator Types ──────────────────────────────────────────────────

export interface ValidationResult {
  valid: boolean;
  diagnostics: ValidationDiagnostic[];
}

export interface ValidationDiagnostic {
  level: 'error' | 'warning' | 'info';
  code: string;
  message: string;
  span?: SourceSpan;
  nodeKind?: NodeKind;
  context?: Record<string, string>;
}

/**
 * Minimal registry query interface for semantic validation.
 * Structurally compatible with module 01's RegistryQueryInterface (duck typing).
 */
export interface RegistryQueryLike {
  findByQmlName(name: string, moduleUri?: string): { qualifiedName: string } | undefined;
  getAllProperties(
    qualifiedName: string,
    inherited?: boolean,
  ): { name: string; type: string; readonly: boolean }[];
  getAllSignals(qualifiedName: string, inherited?: boolean): { name: string }[];
  getAttachedType(qualifiedName: string): { qualifiedName: string } | undefined;
  getDefaultProperty(qualifiedName: string): { name: string; type: string } | undefined;
}

/** Predefined validation diagnostic codes */
export const DiagnosticCode = {
  // Structural errors (E0xx)
  DUPLICATE_ID: 'E001',
  INVALID_ID_FORMAT: 'E002',
  DUPLICATE_PROPERTY_NAME: 'E003',
  DUPLICATE_SIGNAL_NAME: 'E004',
  INVALID_HANDLER_NAME: 'E005',
  REQUIRED_READONLY_CONFLICT: 'E006',
  INVALID_IMPORT_PATH: 'E007',
  DUPLICATE_ENUM_MEMBER: 'E008',
  INVALID_COMPONENT_NAME: 'E009',
  MAX_NESTING_EXCEEDED: 'E010',
  MISSING_ROOT_OBJECT: 'E011',

  // Semantic errors (E1xx)
  UNKNOWN_TYPE: 'E100',
  UNKNOWN_PROPERTY: 'E101',
  UNKNOWN_SIGNAL: 'E102',
  UNKNOWN_ATTACHED_TYPE: 'E103',
  MISSING_REQUIRED_PROP: 'E104',
  READONLY_PROP_BOUND: 'E105',
  INVALID_ENUM_REF: 'E106',
  UNKNOWN_MODULE: 'E107',
  TYPE_MISMATCH: 'E108',

  // Warnings (W0xx)
  UNUSED_IMPORT: 'W001',
  IMPLICIT_IMPORT_VERSION: 'W002',
  EMPTY_SIGNAL_HANDLER: 'W003',
  SHADOWED_ID: 'W004',
  UNNECESSARY_SEMICOLON: 'W005',
} as const;

export type DiagnosticCodeValue = (typeof DiagnosticCode)[keyof typeof DiagnosticCode];

// ─── §5 Serializer Types ─────────────────────────────────────────────────

export interface AstSerializer {
  serialize(node: AstNode, pretty?: boolean): string;
  deserialize(json: string): AstNode;
  clone<T extends AstNode>(node: T): T;
}

// ─── §6 Utility Types ────────────────────────────────────────────────────

export interface AstUtils {
  collectIds(doc: QmlDocument): Map<string, ObjectDefinitionNode>;
  collectTypeNames(doc: QmlDocument): string[];
  collectImportedModules(doc: QmlDocument): string[];
  findObjectsByType(doc: QmlDocument, typeName: string): ObjectDefinitionNode[];
  findObjectById(doc: QmlDocument, id: string): ObjectDefinitionNode | undefined;
  getBindingValue(object: ObjectDefinitionNode, property: string): BindingValue | undefined;
  getObjectId(object: ObjectDefinitionNode): string | undefined;
  getChildren(object: ObjectDefinitionNode): ObjectDefinitionNode[];
  countNodes(doc: QmlDocument): number;
  maxDepth(doc: QmlDocument): number;
  structuralEqual(a: AstNode, b: AstNode): boolean;
  summarize(doc: QmlDocument): string;
}
