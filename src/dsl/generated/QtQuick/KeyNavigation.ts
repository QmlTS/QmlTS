// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: KeyNavigation
// Generated from Qt 6.11.0

import type { QmlValue } from '../../runtime/index.js';
import type { ItemBuilder } from './Item.js';
export interface KeyNavigationAttachedBuilder {
  backtab(value: ItemBuilder): KeyNavigationAttachedBuilder;
  backtabBind(expr: string): KeyNavigationAttachedBuilder;
  down(value: ItemBuilder): KeyNavigationAttachedBuilder;
  downBind(expr: string): KeyNavigationAttachedBuilder;
  left(value: ItemBuilder): KeyNavigationAttachedBuilder;
  leftBind(expr: string): KeyNavigationAttachedBuilder;
  priority(value: QmlValue): KeyNavigationAttachedBuilder;
  priorityBind(expr: string): KeyNavigationAttachedBuilder;
  right(value: ItemBuilder): KeyNavigationAttachedBuilder;
  rightBind(expr: string): KeyNavigationAttachedBuilder;
  tab(value: ItemBuilder): KeyNavigationAttachedBuilder;
  tabBind(expr: string): KeyNavigationAttachedBuilder;
  up(value: ItemBuilder): KeyNavigationAttachedBuilder;
  upBind(expr: string): KeyNavigationAttachedBuilder;
  objectName(value: string): KeyNavigationAttachedBuilder;
  objectNameBind(expr: string): KeyNavigationAttachedBuilder;
  onBacktabChanged(handler: () => void): KeyNavigationAttachedBuilder;
  onDownChanged(handler: () => void): KeyNavigationAttachedBuilder;
  onLeftChanged(handler: () => void): KeyNavigationAttachedBuilder;
  onPriorityChanged(handler: () => void): KeyNavigationAttachedBuilder;
  onRightChanged(handler: () => void): KeyNavigationAttachedBuilder;
  onTabChanged(handler: () => void): KeyNavigationAttachedBuilder;
  onUpChanged(handler: () => void): KeyNavigationAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): KeyNavigationAttachedBuilder;
}
