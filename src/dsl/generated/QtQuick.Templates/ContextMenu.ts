// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ContextMenu
// Generated from Qt 6.11.0

import type { QmlPoint } from '../../runtime/index.js';
import type { MenuBuilder } from './Menu.js';
export interface ContextMenuAttachedBuilder {
  menu(value: MenuBuilder): ContextMenuAttachedBuilder;
  menuBind(expr: string): ContextMenuAttachedBuilder;
  objectName(value: string): ContextMenuAttachedBuilder;
  objectNameBind(expr: string): ContextMenuAttachedBuilder;
  onMenuChanged(handler: () => void): ContextMenuAttachedBuilder;
  onRequested(handler: (position: QmlPoint) => void): ContextMenuAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ContextMenuAttachedBuilder;
}
