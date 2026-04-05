// AUTO-GENERATED — DO NOT EDIT
// Type: PathAngleArc
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
export interface PathAngleArcBuilder {
  id(id: string): PathAngleArcBuilder;
  child(obj: QmlObjectBuilder): PathAngleArcBuilder;

  centerX(value: number): PathAngleArcBuilder;
  centerXBind(expr: string): PathAngleArcBuilder;
  centerY(value: number): PathAngleArcBuilder;
  centerYBind(expr: string): PathAngleArcBuilder;
  moveToStart(value: boolean): PathAngleArcBuilder;
  moveToStartBind(expr: string): PathAngleArcBuilder;
  objectName(value: string): PathAngleArcBuilder;
  objectNameBind(expr: string): PathAngleArcBuilder;
  radiusX(value: number): PathAngleArcBuilder;
  radiusXBind(expr: string): PathAngleArcBuilder;
  radiusY(value: number): PathAngleArcBuilder;
  radiusYBind(expr: string): PathAngleArcBuilder;
  relativeX(value: number): PathAngleArcBuilder;
  relativeXBind(expr: string): PathAngleArcBuilder;
  relativeY(value: number): PathAngleArcBuilder;
  relativeYBind(expr: string): PathAngleArcBuilder;
  startAngle(value: number): PathAngleArcBuilder;
  startAngleBind(expr: string): PathAngleArcBuilder;
  sweepAngle(value: number): PathAngleArcBuilder;
  sweepAngleBind(expr: string): PathAngleArcBuilder;
  x(value: number): PathAngleArcBuilder;
  xBind(expr: string): PathAngleArcBuilder;
  y(value: number): PathAngleArcBuilder;
  yBind(expr: string): PathAngleArcBuilder;
  onCenterXChanged(handler: () => void): PathAngleArcBuilder;
  onCenterYChanged(handler: () => void): PathAngleArcBuilder;
  onChanged(handler: () => void): PathAngleArcBuilder;
  onMoveToStartChanged(handler: () => void): PathAngleArcBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathAngleArcBuilder;
  onRadiusXChanged(handler: () => void): PathAngleArcBuilder;
  onRadiusYChanged(handler: () => void): PathAngleArcBuilder;
  onRelativeXChanged(handler: () => void): PathAngleArcBuilder;
  onRelativeYChanged(handler: () => void): PathAngleArcBuilder;
  onStartAngleChanged(handler: () => void): PathAngleArcBuilder;
  onSweepAngleChanged(handler: () => void): PathAngleArcBuilder;
  onXChanged(handler: () => void): PathAngleArcBuilder;
  onYChanged(handler: () => void): PathAngleArcBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathAngleArcBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathAngleArcBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathAngleArcBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathAngleArcBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathAngleArcBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathAngleArcBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathAngleArcBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathAngleArcBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathAngleArcBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathAngleArcBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathAngleArcBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathAngleArcBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathAngleArcBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathAngleArcBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathAngleArcBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathAngleArcBuilder;
}

export function PathAngleArc(): PathAngleArcBuilder {
  return new DslBuilderImpl('PathAngleArc') as unknown as PathAngleArcBuilder;
}
