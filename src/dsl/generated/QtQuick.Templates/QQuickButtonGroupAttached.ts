// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ButtonGroup
// Generated from Qt 6.11.0

import type { ButtonGroupBuilder } from './ButtonGroup.js';
export interface ButtonGroupAttachedBuilder {
  group(value: ButtonGroupBuilder): ButtonGroupAttachedBuilder;
  groupBind(expr: string): ButtonGroupAttachedBuilder;
  objectName(value: string): ButtonGroupAttachedBuilder;
  objectNameBind(expr: string): ButtonGroupAttachedBuilder;
  onGroupChanged(handler: () => void): ButtonGroupAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ButtonGroupAttachedBuilder;
}
