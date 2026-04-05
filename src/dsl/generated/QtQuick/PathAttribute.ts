// AUTO-GENERATED — DO NOT EDIT
// Type: PathAttribute
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface PathAttributeBuilder {
  id(id: string): PathAttributeBuilder;
  child(obj: QmlObjectBuilder): PathAttributeBuilder;

  name(value: string): PathAttributeBuilder;
  nameBind(expr: string): PathAttributeBuilder;
  objectName(value: string): PathAttributeBuilder;
  objectNameBind(expr: string): PathAttributeBuilder;
  value(value: number): PathAttributeBuilder;
  valueBind(expr: string): PathAttributeBuilder;
  onChanged(handler: () => void): PathAttributeBuilder;
  onNameChanged(handler: () => void): PathAttributeBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathAttributeBuilder;
  onValueChanged(handler: () => void): PathAttributeBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathAttributeBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathAttributeBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathAttributeBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathAttributeBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathAttributeBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathAttributeBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathAttributeBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathAttributeBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathAttributeBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathAttributeBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathAttributeBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathAttributeBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathAttributeBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathAttributeBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathAttributeBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathAttributeBuilder;
}

export function PathAttribute(): PathAttributeBuilder {
  return new DslBuilderImpl('PathAttribute') as unknown as PathAttributeBuilder;
}
