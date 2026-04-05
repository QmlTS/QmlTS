// AUTO-GENERATED — DO NOT EDIT
// Type: PathSvg
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
export interface PathSvgBuilder {
  id(id: string): PathSvgBuilder;
  child(obj: QmlObjectBuilder): PathSvgBuilder;

  objectName(value: string): PathSvgBuilder;
  objectNameBind(expr: string): PathSvgBuilder;
  path(value: string): PathSvgBuilder;
  pathBind(expr: string): PathSvgBuilder;
  relativeX(value: number): PathSvgBuilder;
  relativeXBind(expr: string): PathSvgBuilder;
  relativeY(value: number): PathSvgBuilder;
  relativeYBind(expr: string): PathSvgBuilder;
  x(value: number): PathSvgBuilder;
  xBind(expr: string): PathSvgBuilder;
  y(value: number): PathSvgBuilder;
  yBind(expr: string): PathSvgBuilder;
  onChanged(handler: () => void): PathSvgBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathSvgBuilder;
  onPathChanged(handler: () => void): PathSvgBuilder;
  onRelativeXChanged(handler: () => void): PathSvgBuilder;
  onRelativeYChanged(handler: () => void): PathSvgBuilder;
  onXChanged(handler: () => void): PathSvgBuilder;
  onYChanged(handler: () => void): PathSvgBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathSvgBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathSvgBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathSvgBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathSvgBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathSvgBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathSvgBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathSvgBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathSvgBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathSvgBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathSvgBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathSvgBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathSvgBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathSvgBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathSvgBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathSvgBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathSvgBuilder;
}

export function PathSvg(): PathSvgBuilder {
  return new DslBuilderImpl('PathSvg') as unknown as PathSvgBuilder;
}
