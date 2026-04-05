// AUTO-GENERATED — DO NOT EDIT
// Type: ParentChange
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
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
export interface ParentChangeBuilder {
  id(id: string): ParentChangeBuilder;
  child(obj: QmlObjectBuilder): ParentChangeBuilder;

  height(value: QmlValue): ParentChangeBuilder;
  heightBind(expr: string): ParentChangeBuilder;
  objectName(value: string): ParentChangeBuilder;
  objectNameBind(expr: string): ParentChangeBuilder;
  parent(value: ItemBuilder): ParentChangeBuilder;
  parentBind(expr: string): ParentChangeBuilder;
  rotation(value: QmlValue): ParentChangeBuilder;
  rotationBind(expr: string): ParentChangeBuilder;
  scale(value: QmlValue): ParentChangeBuilder;
  scaleBind(expr: string): ParentChangeBuilder;
  target(value: ItemBuilder): ParentChangeBuilder;
  targetBind(expr: string): ParentChangeBuilder;
  width(value: QmlValue): ParentChangeBuilder;
  widthBind(expr: string): ParentChangeBuilder;
  x(value: QmlValue): ParentChangeBuilder;
  xBind(expr: string): ParentChangeBuilder;
  y(value: QmlValue): ParentChangeBuilder;
  yBind(expr: string): ParentChangeBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ParentChangeBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ParentChangeBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ParentChangeBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ParentChangeBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ParentChangeBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ParentChangeBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ParentChangeBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ParentChangeBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ParentChangeBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ParentChangeBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ParentChangeBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ParentChangeBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ParentChangeBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ParentChangeBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ParentChangeBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ParentChangeBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ParentChangeBuilder;
}

export function ParentChange(): ParentChangeBuilder {
  return new DslBuilderImpl('ParentChange') as unknown as ParentChangeBuilder;
}
