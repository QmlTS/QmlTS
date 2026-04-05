// AUTO-GENERATED — DO NOT EDIT
// Type: SyntaxHighlighter
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface SyntaxHighlighterBuilder {
  id(id: string): SyntaxHighlighterBuilder;
  child(obj: QmlObjectBuilder): SyntaxHighlighterBuilder;

  document(value: QmlValue): SyntaxHighlighterBuilder;
  documentBind(expr: string): SyntaxHighlighterBuilder;
  objectName(value: string): SyntaxHighlighterBuilder;
  objectNameBind(expr: string): SyntaxHighlighterBuilder;
  onDocumentChanged(body: string): SyntaxHighlighterBuilder;
  onObjectNameChanged(body: string): SyntaxHighlighterBuilder;
}

const SYNTAXHIGHLIGHTER_META: TypeMetadata = {
  typeName: 'SyntaxHighlighter',
  properties: [
    { name: 'document', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDocumentChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function SyntaxHighlighter(): SyntaxHighlighterBuilder {
  return createFluentBuilder('SyntaxHighlighter', SYNTAXHIGHLIGHTER_META) as unknown as SyntaxHighlighterBuilder;
}
