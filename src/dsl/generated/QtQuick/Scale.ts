// AUTO-GENERATED — DO NOT EDIT
// Type: Scale
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlVector3d } from '../../runtime/index.js';
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
export interface ScaleBuilder {
  id(id: string): ScaleBuilder;
  child(obj: QmlObjectBuilder): ScaleBuilder;

  objectName(value: string): ScaleBuilder;
  objectNameBind(expr: string): ScaleBuilder;
  origin(value: QmlVector3d): ScaleBuilder;
  originBind(expr: string): ScaleBuilder;
  xScale(value: number): ScaleBuilder;
  xScaleBind(expr: string): ScaleBuilder;
  yScale(value: number): ScaleBuilder;
  yScaleBind(expr: string): ScaleBuilder;
  zScale(value: number): ScaleBuilder;
  zScaleBind(expr: string): ScaleBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ScaleBuilder;
  onOriginChanged(handler: () => void): ScaleBuilder;
  onScaleChanged(handler: () => void): ScaleBuilder;
  onXScaleChanged(handler: () => void): ScaleBuilder;
  onYScaleChanged(handler: () => void): ScaleBuilder;
  onZScaleChanged(handler: () => void): ScaleBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ScaleBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ScaleBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ScaleBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ScaleBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ScaleBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ScaleBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ScaleBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ScaleBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ScaleBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ScaleBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ScaleBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ScaleBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ScaleBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ScaleBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ScaleBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ScaleBuilder;
}

export function Scale(): ScaleBuilder {
  return new DslBuilderImpl('Scale') as unknown as ScaleBuilder;
}
