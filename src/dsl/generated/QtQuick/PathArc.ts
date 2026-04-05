// AUTO-GENERATED — DO NOT EDIT
// Type: PathArc
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
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
export interface PathArcBuilder {
  id(id: string): PathArcBuilder;
  child(obj: QmlObjectBuilder): PathArcBuilder;

  direction(value: QmlValue): PathArcBuilder;
  directionBind(expr: string): PathArcBuilder;
  objectName(value: string): PathArcBuilder;
  objectNameBind(expr: string): PathArcBuilder;
  radiusX(value: number): PathArcBuilder;
  radiusXBind(expr: string): PathArcBuilder;
  radiusY(value: number): PathArcBuilder;
  radiusYBind(expr: string): PathArcBuilder;
  relativeX(value: number): PathArcBuilder;
  relativeXBind(expr: string): PathArcBuilder;
  relativeY(value: number): PathArcBuilder;
  relativeYBind(expr: string): PathArcBuilder;
  useLargeArc(value: boolean): PathArcBuilder;
  useLargeArcBind(expr: string): PathArcBuilder;
  x(value: number): PathArcBuilder;
  xBind(expr: string): PathArcBuilder;
  xAxisRotation(value: number): PathArcBuilder;
  xAxisRotationBind(expr: string): PathArcBuilder;
  y(value: number): PathArcBuilder;
  yBind(expr: string): PathArcBuilder;
  onChanged(handler: () => void): PathArcBuilder;
  onDirectionChanged(handler: () => void): PathArcBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathArcBuilder;
  onRadiusXChanged(handler: () => void): PathArcBuilder;
  onRadiusYChanged(handler: () => void): PathArcBuilder;
  onRelativeXChanged(handler: () => void): PathArcBuilder;
  onRelativeYChanged(handler: () => void): PathArcBuilder;
  onUseLargeArcChanged(handler: () => void): PathArcBuilder;
  onXAxisRotationChanged(handler: () => void): PathArcBuilder;
  onXChanged(handler: () => void): PathArcBuilder;
  onYChanged(handler: () => void): PathArcBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathArcBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathArcBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathArcBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathArcBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathArcBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathArcBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathArcBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathArcBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathArcBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathArcBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathArcBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathArcBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathArcBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathArcBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathArcBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathArcBuilder;
}

export function PathArc(): PathArcBuilder {
  return new DslBuilderImpl('PathArc') as unknown as PathArcBuilder;
}

export namespace PathArc {
  export namespace ArcDirection {
    export const Clockwise = createEnumToken('PathArc', 'ArcDirection', 'Clockwise');
    export const Counterclockwise = createEnumToken('PathArc', 'ArcDirection', 'Counterclockwise');
  }
}
