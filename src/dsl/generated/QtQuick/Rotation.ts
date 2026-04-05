// AUTO-GENERATED — DO NOT EDIT
// Type: Rotation
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
export interface RotationBuilder {
  id(id: string): RotationBuilder;
  child(obj: QmlObjectBuilder): RotationBuilder;

  angle(value: number): RotationBuilder;
  angleBind(expr: string): RotationBuilder;
  axis(value: QmlVector3d): RotationBuilder;
  axisBind(expr: string): RotationBuilder;
  distanceToPlane(value: number): RotationBuilder;
  distanceToPlaneBind(expr: string): RotationBuilder;
  objectName(value: string): RotationBuilder;
  objectNameBind(expr: string): RotationBuilder;
  origin(value: QmlVector3d): RotationBuilder;
  originBind(expr: string): RotationBuilder;
  onAngleChanged(handler: () => void): RotationBuilder;
  onAxisChanged(handler: () => void): RotationBuilder;
  onDistanceToPlaneChanged(handler: () => void): RotationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RotationBuilder;
  onOriginChanged(handler: () => void): RotationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): RotationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): RotationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): RotationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): RotationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): RotationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): RotationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): RotationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): RotationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): RotationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): RotationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): RotationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): RotationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): RotationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): RotationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): RotationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): RotationBuilder;
}

export function Rotation(): RotationBuilder {
  return new DslBuilderImpl('Rotation') as unknown as RotationBuilder;
}
