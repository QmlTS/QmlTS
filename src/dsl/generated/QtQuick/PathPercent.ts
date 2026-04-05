// AUTO-GENERATED — DO NOT EDIT
// Type: PathPercent
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
export interface PathPercentBuilder {
  id(id: string): PathPercentBuilder;
  child(obj: QmlObjectBuilder): PathPercentBuilder;

  objectName(value: string): PathPercentBuilder;
  objectNameBind(expr: string): PathPercentBuilder;
  value(value: number): PathPercentBuilder;
  valueBind(expr: string): PathPercentBuilder;
  onChanged(handler: () => void): PathPercentBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathPercentBuilder;
  onValueChanged(handler: () => void): PathPercentBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathPercentBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathPercentBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathPercentBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathPercentBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathPercentBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathPercentBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathPercentBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathPercentBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathPercentBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathPercentBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathPercentBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathPercentBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathPercentBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathPercentBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathPercentBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathPercentBuilder;
}

export function PathPercent(): PathPercentBuilder {
  return new DslBuilderImpl('PathPercent') as unknown as PathPercentBuilder;
}
