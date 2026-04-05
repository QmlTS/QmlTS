// AUTO-GENERATED — DO NOT EDIT
// Type: PathMove
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
export interface PathMoveBuilder {
  id(id: string): PathMoveBuilder;
  child(obj: QmlObjectBuilder): PathMoveBuilder;

  objectName(value: string): PathMoveBuilder;
  objectNameBind(expr: string): PathMoveBuilder;
  relativeX(value: number): PathMoveBuilder;
  relativeXBind(expr: string): PathMoveBuilder;
  relativeY(value: number): PathMoveBuilder;
  relativeYBind(expr: string): PathMoveBuilder;
  x(value: number): PathMoveBuilder;
  xBind(expr: string): PathMoveBuilder;
  y(value: number): PathMoveBuilder;
  yBind(expr: string): PathMoveBuilder;
  onChanged(handler: () => void): PathMoveBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathMoveBuilder;
  onRelativeXChanged(handler: () => void): PathMoveBuilder;
  onRelativeYChanged(handler: () => void): PathMoveBuilder;
  onXChanged(handler: () => void): PathMoveBuilder;
  onYChanged(handler: () => void): PathMoveBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathMoveBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathMoveBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathMoveBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathMoveBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathMoveBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathMoveBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathMoveBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathMoveBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathMoveBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathMoveBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathMoveBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathMoveBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathMoveBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathMoveBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathMoveBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathMoveBuilder;
}

export function PathMove(): PathMoveBuilder {
  return new DslBuilderImpl('PathMove') as unknown as PathMoveBuilder;
}
