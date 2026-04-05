// AUTO-GENERATED — DO NOT EDIT
// Type: Path
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlSize } from '../../runtime/index.js';
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
export interface PathBuilder {
  id(id: string): PathBuilder;
  child(obj: QmlObjectBuilder): PathBuilder;

  asynchronous(value: boolean): PathBuilder;
  asynchronousBind(expr: string): PathBuilder;
  objectName(value: string): PathBuilder;
  objectNameBind(expr: string): PathBuilder;
  scale(value: QmlSize): PathBuilder;
  scaleBind(expr: string): PathBuilder;
  simplify(value: boolean): PathBuilder;
  simplifyBind(expr: string): PathBuilder;
  startX(value: number): PathBuilder;
  startXBind(expr: string): PathBuilder;
  startY(value: number): PathBuilder;
  startYBind(expr: string): PathBuilder;
  onAsynchronousChanged(handler: () => void): PathBuilder;
  onChanged(handler: () => void): PathBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathBuilder;
  onScaleChanged(handler: () => void): PathBuilder;
  onSimplifyChanged(handler: () => void): PathBuilder;
  onStartXChanged(handler: () => void): PathBuilder;
  onStartYChanged(handler: () => void): PathBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathBuilder;
}

export function Path(): PathBuilder {
  return new DslBuilderImpl('Path') as unknown as PathBuilder;
}
