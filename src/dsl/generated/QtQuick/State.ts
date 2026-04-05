// AUTO-GENERATED — DO NOT EDIT
// Type: State
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
export interface StateBuilder {
  id(id: string): StateBuilder;
  child(obj: QmlObjectBuilder): StateBuilder;

  extend(value: string): StateBuilder;
  extendBind(expr: string): StateBuilder;
  name(value: string): StateBuilder;
  nameBind(expr: string): StateBuilder;
  objectName(value: string): StateBuilder;
  objectNameBind(expr: string): StateBuilder;
  when(value: boolean): StateBuilder;
  whenBind(expr: string): StateBuilder;
  onCompleted(handler: () => void): StateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): StateBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): StateBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): StateBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): StateBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): StateBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): StateBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): StateBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): StateBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): StateBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): StateBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): StateBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): StateBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): StateBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): StateBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): StateBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): StateBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): StateBuilder;
}

export function State(): StateBuilder {
  return new DslBuilderImpl('State') as unknown as StateBuilder;
}
