// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ActionGroup
// Generated from Qt 6.11.0

import type { ActionGroupBuilder } from './ActionGroup.js';
export interface ActionGroupAttachedBuilder {
  group(value: ActionGroupBuilder): ActionGroupAttachedBuilder;
  groupBind(expr: string): ActionGroupAttachedBuilder;
  objectName(value: string): ActionGroupAttachedBuilder;
  objectNameBind(expr: string): ActionGroupAttachedBuilder;
  onGroupChanged(handler: () => void): ActionGroupAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ActionGroupAttachedBuilder;
}
