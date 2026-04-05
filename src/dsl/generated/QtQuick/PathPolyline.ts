// AUTO-GENERATED — DO NOT EDIT
// Type: PathPolyline
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
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
export interface PathPolylineBuilder {
  id(id: string): PathPolylineBuilder;
  child(obj: QmlObjectBuilder): PathPolylineBuilder;

  objectName(value: string): PathPolylineBuilder;
  objectNameBind(expr: string): PathPolylineBuilder;
  path(value: QmlValue): PathPolylineBuilder;
  pathBind(expr: string): PathPolylineBuilder;
  relativeX(value: number): PathPolylineBuilder;
  relativeXBind(expr: string): PathPolylineBuilder;
  relativeY(value: number): PathPolylineBuilder;
  relativeYBind(expr: string): PathPolylineBuilder;
  x(value: number): PathPolylineBuilder;
  xBind(expr: string): PathPolylineBuilder;
  y(value: number): PathPolylineBuilder;
  yBind(expr: string): PathPolylineBuilder;
  onChanged(handler: () => void): PathPolylineBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathPolylineBuilder;
  onPathChanged(handler: () => void): PathPolylineBuilder;
  onRelativeXChanged(handler: () => void): PathPolylineBuilder;
  onRelativeYChanged(handler: () => void): PathPolylineBuilder;
  onStartChanged(handler: () => void): PathPolylineBuilder;
  onXChanged(handler: () => void): PathPolylineBuilder;
  onYChanged(handler: () => void): PathPolylineBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathPolylineBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathPolylineBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathPolylineBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathPolylineBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathPolylineBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathPolylineBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathPolylineBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathPolylineBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathPolylineBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathPolylineBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathPolylineBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathPolylineBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathPolylineBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathPolylineBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathPolylineBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathPolylineBuilder;
}

export function PathPolyline(): PathPolylineBuilder {
  return new DslBuilderImpl('PathPolyline') as unknown as PathPolylineBuilder;
}
