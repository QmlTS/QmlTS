// AUTO-GENERATED — DO NOT EDIT
// Type: GradientStop
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder } from '../../runtime/index.js';
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
export interface GradientStopBuilder {
  id(id: string): GradientStopBuilder;
  child(obj: QmlObjectBuilder): GradientStopBuilder;

  color(value: QmlColor): GradientStopBuilder;
  colorBind(expr: string): GradientStopBuilder;
  objectName(value: string): GradientStopBuilder;
  objectNameBind(expr: string): GradientStopBuilder;
  position(value: number): GradientStopBuilder;
  positionBind(expr: string): GradientStopBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): GradientStopBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): GradientStopBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): GradientStopBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): GradientStopBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): GradientStopBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): GradientStopBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): GradientStopBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): GradientStopBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): GradientStopBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): GradientStopBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): GradientStopBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): GradientStopBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): GradientStopBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): GradientStopBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): GradientStopBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): GradientStopBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): GradientStopBuilder;
}

export function GradientStop(): GradientStopBuilder {
  return new DslBuilderImpl('GradientStop') as unknown as GradientStopBuilder;
}
