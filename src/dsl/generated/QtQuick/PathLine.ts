// AUTO-GENERATED — DO NOT EDIT
// Type: PathLine
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
export interface PathLineBuilder {
  id(id: string): PathLineBuilder;
  child(obj: QmlObjectBuilder): PathLineBuilder;

  objectName(value: string): PathLineBuilder;
  objectNameBind(expr: string): PathLineBuilder;
  relativeX(value: number): PathLineBuilder;
  relativeXBind(expr: string): PathLineBuilder;
  relativeY(value: number): PathLineBuilder;
  relativeYBind(expr: string): PathLineBuilder;
  x(value: number): PathLineBuilder;
  xBind(expr: string): PathLineBuilder;
  y(value: number): PathLineBuilder;
  yBind(expr: string): PathLineBuilder;
  onChanged(handler: () => void): PathLineBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathLineBuilder;
  onRelativeXChanged(handler: () => void): PathLineBuilder;
  onRelativeYChanged(handler: () => void): PathLineBuilder;
  onXChanged(handler: () => void): PathLineBuilder;
  onYChanged(handler: () => void): PathLineBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathLineBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathLineBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathLineBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathLineBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathLineBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathLineBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathLineBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathLineBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathLineBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathLineBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathLineBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathLineBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathLineBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathLineBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathLineBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathLineBuilder;
}

export function PathLine(): PathLineBuilder {
  return new DslBuilderImpl('PathLine') as unknown as PathLineBuilder;
}
