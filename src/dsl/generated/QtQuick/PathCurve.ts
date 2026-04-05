// AUTO-GENERATED — DO NOT EDIT
// Type: PathCurve
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
export interface PathCurveBuilder {
  id(id: string): PathCurveBuilder;
  child(obj: QmlObjectBuilder): PathCurveBuilder;

  objectName(value: string): PathCurveBuilder;
  objectNameBind(expr: string): PathCurveBuilder;
  relativeX(value: number): PathCurveBuilder;
  relativeXBind(expr: string): PathCurveBuilder;
  relativeY(value: number): PathCurveBuilder;
  relativeYBind(expr: string): PathCurveBuilder;
  x(value: number): PathCurveBuilder;
  xBind(expr: string): PathCurveBuilder;
  y(value: number): PathCurveBuilder;
  yBind(expr: string): PathCurveBuilder;
  onChanged(handler: () => void): PathCurveBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathCurveBuilder;
  onRelativeXChanged(handler: () => void): PathCurveBuilder;
  onRelativeYChanged(handler: () => void): PathCurveBuilder;
  onXChanged(handler: () => void): PathCurveBuilder;
  onYChanged(handler: () => void): PathCurveBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathCurveBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathCurveBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathCurveBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathCurveBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathCurveBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathCurveBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathCurveBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathCurveBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathCurveBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathCurveBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathCurveBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathCurveBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathCurveBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathCurveBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathCurveBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathCurveBuilder;
}

export function PathCurve(): PathCurveBuilder {
  return new DslBuilderImpl('PathCurve') as unknown as PathCurveBuilder;
}
