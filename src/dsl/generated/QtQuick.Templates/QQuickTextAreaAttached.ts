// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: TextArea
// Generated from Qt 6.11.0

import type { TextAreaBuilder } from './TextArea.js';
export interface TextAreaAttachedBuilder {
  flickable(value: TextAreaBuilder): TextAreaAttachedBuilder;
  flickableBind(expr: string): TextAreaAttachedBuilder;
  objectName(value: string): TextAreaAttachedBuilder;
  objectNameBind(expr: string): TextAreaAttachedBuilder;
  onFlickableChanged(handler: () => void): TextAreaAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TextAreaAttachedBuilder;
}
