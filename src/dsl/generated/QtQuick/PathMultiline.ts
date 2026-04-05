// AUTO-GENERATED — DO NOT EDIT
// Type: PathMultiline
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
export interface PathMultilineBuilder {
  id(id: string): PathMultilineBuilder;
  child(obj: QmlObjectBuilder): PathMultilineBuilder;

  objectName(value: string): PathMultilineBuilder;
  objectNameBind(expr: string): PathMultilineBuilder;
  paths(value: QmlValue): PathMultilineBuilder;
  pathsBind(expr: string): PathMultilineBuilder;
  relativeX(value: number): PathMultilineBuilder;
  relativeXBind(expr: string): PathMultilineBuilder;
  relativeY(value: number): PathMultilineBuilder;
  relativeYBind(expr: string): PathMultilineBuilder;
  x(value: number): PathMultilineBuilder;
  xBind(expr: string): PathMultilineBuilder;
  y(value: number): PathMultilineBuilder;
  yBind(expr: string): PathMultilineBuilder;
  onChanged(handler: () => void): PathMultilineBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathMultilineBuilder;
  onPathsChanged(handler: () => void): PathMultilineBuilder;
  onRelativeXChanged(handler: () => void): PathMultilineBuilder;
  onRelativeYChanged(handler: () => void): PathMultilineBuilder;
  onStartChanged(handler: () => void): PathMultilineBuilder;
  onXChanged(handler: () => void): PathMultilineBuilder;
  onYChanged(handler: () => void): PathMultilineBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathMultilineBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathMultilineBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathMultilineBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathMultilineBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathMultilineBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathMultilineBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathMultilineBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathMultilineBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathMultilineBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathMultilineBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathMultilineBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathMultilineBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathMultilineBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathMultilineBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathMultilineBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathMultilineBuilder;
}

export function PathMultiline(): PathMultilineBuilder {
  return new DslBuilderImpl('PathMultiline') as unknown as PathMultilineBuilder;
}
