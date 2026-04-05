// AUTO-GENERATED — DO NOT EDIT
// Type: Pinch
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
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
export interface PinchBuilder {
  id(id: string): PinchBuilder;
  child(obj: QmlObjectBuilder): PinchBuilder;

  dragAxis(value: QmlValue): PinchBuilder;
  dragAxisBind(expr: string): PinchBuilder;
  maximumRotation(value: number): PinchBuilder;
  maximumRotationBind(expr: string): PinchBuilder;
  maximumScale(value: number): PinchBuilder;
  maximumScaleBind(expr: string): PinchBuilder;
  maximumX(value: number): PinchBuilder;
  maximumXBind(expr: string): PinchBuilder;
  maximumY(value: number): PinchBuilder;
  maximumYBind(expr: string): PinchBuilder;
  minimumRotation(value: number): PinchBuilder;
  minimumRotationBind(expr: string): PinchBuilder;
  minimumScale(value: number): PinchBuilder;
  minimumScaleBind(expr: string): PinchBuilder;
  minimumX(value: number): PinchBuilder;
  minimumXBind(expr: string): PinchBuilder;
  minimumY(value: number): PinchBuilder;
  minimumYBind(expr: string): PinchBuilder;
  objectName(value: string): PinchBuilder;
  objectNameBind(expr: string): PinchBuilder;
  target(value: ItemBuilder): PinchBuilder;
  targetBind(expr: string): PinchBuilder;
  onActiveChanged(handler: () => void): PinchBuilder;
  onDragAxisChanged(handler: () => void): PinchBuilder;
  onMaximumRotationChanged(handler: () => void): PinchBuilder;
  onMaximumScaleChanged(handler: () => void): PinchBuilder;
  onMaximumXChanged(handler: () => void): PinchBuilder;
  onMaximumYChanged(handler: () => void): PinchBuilder;
  onMinimumRotationChanged(handler: () => void): PinchBuilder;
  onMinimumScaleChanged(handler: () => void): PinchBuilder;
  onMinimumXChanged(handler: () => void): PinchBuilder;
  onMinimumYChanged(handler: () => void): PinchBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PinchBuilder;
  onTargetChanged(handler: () => void): PinchBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PinchBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PinchBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PinchBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PinchBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PinchBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PinchBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PinchBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PinchBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PinchBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PinchBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PinchBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PinchBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PinchBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PinchBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PinchBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PinchBuilder;
}

export function Pinch(): PinchBuilder {
  return new DslBuilderImpl('Pinch') as unknown as PinchBuilder;
}

export namespace Pinch {
  export namespace Axis {
    export const NoDrag = createEnumToken('Pinch', 'Axis', 'NoDrag');
    export const XAxis = createEnumToken('Pinch', 'Axis', 'XAxis');
    export const YAxis = createEnumToken('Pinch', 'Axis', 'YAxis');
    export const XAndYAxis = createEnumToken('Pinch', 'Axis', 'XAndYAxis');
    export const XandYAxis = createEnumToken('Pinch', 'Axis', 'XandYAxis');
  }
}
