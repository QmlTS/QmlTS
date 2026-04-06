// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ContextMenu
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue } from '../../runtime/index.js';
import type { MenuBuilder } from './Menu.js';
export interface ContextMenuAttachedBuilder {
  menu(value: MenuBuilder): ContextMenuAttachedBuilder;
  menuBind(expr: string): ContextMenuAttachedBuilder;
  objectName(value: string): ContextMenuAttachedBuilder;
  objectNameBind(expr: string): ContextMenuAttachedBuilder;
  onMenuChanged(handler: DslSignalHandlerValue): ContextMenuAttachedBuilder;
  onRequested(handler: DslSignalHandlerValue): ContextMenuAttachedBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ContextMenuAttachedBuilder;
}
