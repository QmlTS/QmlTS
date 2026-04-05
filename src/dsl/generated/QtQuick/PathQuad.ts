// AUTO-GENERATED — DO NOT EDIT
// Type: PathQuad
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
export interface PathQuadBuilder {
  id(id: string): PathQuadBuilder;
  child(obj: QmlObjectBuilder): PathQuadBuilder;

  controlX(value: number): PathQuadBuilder;
  controlXBind(expr: string): PathQuadBuilder;
  controlY(value: number): PathQuadBuilder;
  controlYBind(expr: string): PathQuadBuilder;
  objectName(value: string): PathQuadBuilder;
  objectNameBind(expr: string): PathQuadBuilder;
  relativeControlX(value: number): PathQuadBuilder;
  relativeControlXBind(expr: string): PathQuadBuilder;
  relativeControlY(value: number): PathQuadBuilder;
  relativeControlYBind(expr: string): PathQuadBuilder;
  relativeX(value: number): PathQuadBuilder;
  relativeXBind(expr: string): PathQuadBuilder;
  relativeY(value: number): PathQuadBuilder;
  relativeYBind(expr: string): PathQuadBuilder;
  x(value: number): PathQuadBuilder;
  xBind(expr: string): PathQuadBuilder;
  y(value: number): PathQuadBuilder;
  yBind(expr: string): PathQuadBuilder;
  onChanged(handler: () => void): PathQuadBuilder;
  onControlXChanged(handler: () => void): PathQuadBuilder;
  onControlYChanged(handler: () => void): PathQuadBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathQuadBuilder;
  onRelativeControlXChanged(handler: () => void): PathQuadBuilder;
  onRelativeControlYChanged(handler: () => void): PathQuadBuilder;
  onRelativeXChanged(handler: () => void): PathQuadBuilder;
  onRelativeYChanged(handler: () => void): PathQuadBuilder;
  onXChanged(handler: () => void): PathQuadBuilder;
  onYChanged(handler: () => void): PathQuadBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathQuadBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathQuadBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathQuadBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathQuadBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathQuadBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathQuadBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathQuadBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathQuadBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathQuadBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathQuadBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathQuadBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathQuadBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathQuadBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathQuadBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathQuadBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathQuadBuilder;
}

export function PathQuad(): PathQuadBuilder {
  return new DslBuilderImpl('PathQuad') as unknown as PathQuadBuilder;
}
