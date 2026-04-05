// AUTO-GENERATED — DO NOT EDIT
// Type: TouchPoint
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
export interface TouchPointBuilder {
  id(id: string): TouchPointBuilder;
  child(obj: QmlObjectBuilder): TouchPointBuilder;

  objectName(value: string): TouchPointBuilder;
  objectNameBind(expr: string): TouchPointBuilder;
  onAreaChanged(handler: () => void): TouchPointBuilder;
  onEllipseDiametersChanged(handler: () => void): TouchPointBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TouchPointBuilder;
  onPointIdChanged(handler: () => void): TouchPointBuilder;
  onPressedChanged(handler: () => void): TouchPointBuilder;
  onPressureChanged(handler: () => void): TouchPointBuilder;
  onPreviousXChanged(handler: () => void): TouchPointBuilder;
  onPreviousYChanged(handler: () => void): TouchPointBuilder;
  onRotationChanged(handler: () => void): TouchPointBuilder;
  onSceneXChanged(handler: () => void): TouchPointBuilder;
  onSceneYChanged(handler: () => void): TouchPointBuilder;
  onStartXChanged(handler: () => void): TouchPointBuilder;
  onStartYChanged(handler: () => void): TouchPointBuilder;
  onUniqueIdChanged(handler: () => void): TouchPointBuilder;
  onVelocityChanged(handler: () => void): TouchPointBuilder;
  onXChanged(handler: () => void): TouchPointBuilder;
  onYChanged(handler: () => void): TouchPointBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TouchPointBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TouchPointBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TouchPointBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TouchPointBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TouchPointBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TouchPointBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TouchPointBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TouchPointBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TouchPointBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TouchPointBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TouchPointBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TouchPointBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TouchPointBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TouchPointBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TouchPointBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TouchPointBuilder;
}

export function TouchPoint(): TouchPointBuilder {
  return new DslBuilderImpl('TouchPoint') as unknown as TouchPointBuilder;
}
