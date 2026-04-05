// AUTO-GENERATED — DO NOT EDIT
// Type: Shear
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
export interface ShearBuilder {
  id(id: string): ShearBuilder;
  child(obj: QmlObjectBuilder): ShearBuilder;

  objectName(value: string): ShearBuilder;
  objectNameBind(expr: string): ShearBuilder;
  origin(value: QmlVector3d): ShearBuilder;
  originBind(expr: string): ShearBuilder;
  xAngle(value: number): ShearBuilder;
  xAngleBind(expr: string): ShearBuilder;
  xFactor(value: number): ShearBuilder;
  xFactorBind(expr: string): ShearBuilder;
  yAngle(value: number): ShearBuilder;
  yAngleBind(expr: string): ShearBuilder;
  yFactor(value: number): ShearBuilder;
  yFactorBind(expr: string): ShearBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ShearBuilder;
  onOriginChanged(handler: () => void): ShearBuilder;
  onXAngleChanged(handler: () => void): ShearBuilder;
  onXFactorChanged(handler: () => void): ShearBuilder;
  onYAngleChanged(handler: () => void): ShearBuilder;
  onYFactorChanged(handler: () => void): ShearBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ShearBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ShearBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ShearBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ShearBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ShearBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ShearBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ShearBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ShearBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ShearBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ShearBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ShearBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ShearBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ShearBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ShearBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ShearBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ShearBuilder;
}

export function Shear(): ShearBuilder {
  return new DslBuilderImpl('Shear') as unknown as ShearBuilder;
}
