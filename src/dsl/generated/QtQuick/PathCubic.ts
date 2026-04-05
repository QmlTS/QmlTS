// AUTO-GENERATED — DO NOT EDIT
// Type: PathCubic
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
export interface PathCubicBuilder {
  id(id: string): PathCubicBuilder;
  child(obj: QmlObjectBuilder): PathCubicBuilder;

  control1X(value: number): PathCubicBuilder;
  control1XBind(expr: string): PathCubicBuilder;
  control1Y(value: number): PathCubicBuilder;
  control1YBind(expr: string): PathCubicBuilder;
  control2X(value: number): PathCubicBuilder;
  control2XBind(expr: string): PathCubicBuilder;
  control2Y(value: number): PathCubicBuilder;
  control2YBind(expr: string): PathCubicBuilder;
  objectName(value: string): PathCubicBuilder;
  objectNameBind(expr: string): PathCubicBuilder;
  relativeControl1X(value: number): PathCubicBuilder;
  relativeControl1XBind(expr: string): PathCubicBuilder;
  relativeControl1Y(value: number): PathCubicBuilder;
  relativeControl1YBind(expr: string): PathCubicBuilder;
  relativeControl2X(value: number): PathCubicBuilder;
  relativeControl2XBind(expr: string): PathCubicBuilder;
  relativeControl2Y(value: number): PathCubicBuilder;
  relativeControl2YBind(expr: string): PathCubicBuilder;
  relativeX(value: number): PathCubicBuilder;
  relativeXBind(expr: string): PathCubicBuilder;
  relativeY(value: number): PathCubicBuilder;
  relativeYBind(expr: string): PathCubicBuilder;
  x(value: number): PathCubicBuilder;
  xBind(expr: string): PathCubicBuilder;
  y(value: number): PathCubicBuilder;
  yBind(expr: string): PathCubicBuilder;
  onChanged(handler: () => void): PathCubicBuilder;
  onControl1XChanged(handler: () => void): PathCubicBuilder;
  onControl1YChanged(handler: () => void): PathCubicBuilder;
  onControl2XChanged(handler: () => void): PathCubicBuilder;
  onControl2YChanged(handler: () => void): PathCubicBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathCubicBuilder;
  onRelativeControl1XChanged(handler: () => void): PathCubicBuilder;
  onRelativeControl1YChanged(handler: () => void): PathCubicBuilder;
  onRelativeControl2XChanged(handler: () => void): PathCubicBuilder;
  onRelativeControl2YChanged(handler: () => void): PathCubicBuilder;
  onRelativeXChanged(handler: () => void): PathCubicBuilder;
  onRelativeYChanged(handler: () => void): PathCubicBuilder;
  onXChanged(handler: () => void): PathCubicBuilder;
  onYChanged(handler: () => void): PathCubicBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathCubicBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathCubicBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathCubicBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathCubicBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathCubicBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathCubicBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathCubicBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathCubicBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathCubicBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathCubicBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathCubicBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathCubicBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathCubicBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathCubicBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathCubicBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathCubicBuilder;
}

export function PathCubic(): PathCubicBuilder {
  return new DslBuilderImpl('PathCubic') as unknown as PathCubicBuilder;
}
