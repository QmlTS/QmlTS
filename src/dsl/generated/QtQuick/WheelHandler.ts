// AUTO-GENERATED — DO NOT EDIT
// Type: WheelHandler
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
export interface WheelHandlerBuilder {
  id(id: string): WheelHandlerBuilder;
  child(obj: QmlObjectBuilder): WheelHandlerBuilder;

  acceptedButtons(value: QmlValue): WheelHandlerBuilder;
  acceptedButtonsBind(expr: string): WheelHandlerBuilder;
  acceptedDevices(value: QmlValue): WheelHandlerBuilder;
  acceptedDevicesBind(expr: string): WheelHandlerBuilder;
  acceptedModifiers(value: QmlValue): WheelHandlerBuilder;
  acceptedModifiersBind(expr: string): WheelHandlerBuilder;
  acceptedPointerTypes(value: QmlValue): WheelHandlerBuilder;
  acceptedPointerTypesBind(expr: string): WheelHandlerBuilder;
  activeTimeout(value: number): WheelHandlerBuilder;
  activeTimeoutBind(expr: string): WheelHandlerBuilder;
  blocking(value: boolean): WheelHandlerBuilder;
  blockingBind(expr: string): WheelHandlerBuilder;
  cursorShape(value: QmlValue): WheelHandlerBuilder;
  cursorShapeBind(expr: string): WheelHandlerBuilder;
  dragThreshold(value: number): WheelHandlerBuilder;
  dragThresholdBind(expr: string): WheelHandlerBuilder;
  enabled(value: boolean): WheelHandlerBuilder;
  enabledBind(expr: string): WheelHandlerBuilder;
  grabPermissions(value: QmlValue): WheelHandlerBuilder;
  grabPermissionsBind(expr: string): WheelHandlerBuilder;
  invertible(value: boolean): WheelHandlerBuilder;
  invertibleBind(expr: string): WheelHandlerBuilder;
  margin(value: number): WheelHandlerBuilder;
  marginBind(expr: string): WheelHandlerBuilder;
  objectName(value: string): WheelHandlerBuilder;
  objectNameBind(expr: string): WheelHandlerBuilder;
  orientation(value: QmlValue): WheelHandlerBuilder;
  orientationBind(expr: string): WheelHandlerBuilder;
  parent(value: ItemBuilder): WheelHandlerBuilder;
  parentBind(expr: string): WheelHandlerBuilder;
  property(value: string): WheelHandlerBuilder;
  propertyBind(expr: string): WheelHandlerBuilder;
  rotation(value: number): WheelHandlerBuilder;
  rotationBind(expr: string): WheelHandlerBuilder;
  rotationScale(value: number): WheelHandlerBuilder;
  rotationScaleBind(expr: string): WheelHandlerBuilder;
  target(value: ItemBuilder): WheelHandlerBuilder;
  targetBind(expr: string): WheelHandlerBuilder;
  targetScaleMultiplier(value: number): WheelHandlerBuilder;
  targetScaleMultiplierBind(expr: string): WheelHandlerBuilder;
  targetTransformAroundCursor(value: boolean): WheelHandlerBuilder;
  targetTransformAroundCursorBind(expr: string): WheelHandlerBuilder;
  onAcceptedButtonsChanged(handler: () => void): WheelHandlerBuilder;
  onAcceptedDevicesChanged(handler: () => void): WheelHandlerBuilder;
  onAcceptedModifiersChanged(handler: () => void): WheelHandlerBuilder;
  onAcceptedPointerTypesChanged(handler: () => void): WheelHandlerBuilder;
  onActiveChanged(handler: () => void): WheelHandlerBuilder;
  onActiveTimeoutChanged(handler: () => void): WheelHandlerBuilder;
  onBlockingChanged(handler: () => void): WheelHandlerBuilder;
  onCanceled(handler: (point: QmlValue) => void): WheelHandlerBuilder;
  onCursorShapeChanged(handler: () => void): WheelHandlerBuilder;
  onDragThresholdChanged(handler: () => void): WheelHandlerBuilder;
  onEnabledChanged(handler: () => void): WheelHandlerBuilder;
  onGrabChanged(handler: (transition: QmlValue, point: QmlValue) => void): WheelHandlerBuilder;
  onGrabPermissionChanged(handler: () => void): WheelHandlerBuilder;
  onInvertibleChanged(handler: () => void): WheelHandlerBuilder;
  onMarginChanged(handler: () => void): WheelHandlerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): WheelHandlerBuilder;
  onOrientationChanged(handler: () => void): WheelHandlerBuilder;
  onParentChanged(handler: () => void): WheelHandlerBuilder;
  onPointChanged(handler: () => void): WheelHandlerBuilder;
  onPropertyChanged(handler: () => void): WheelHandlerBuilder;
  onRotationChanged(handler: () => void): WheelHandlerBuilder;
  onRotationScaleChanged(handler: () => void): WheelHandlerBuilder;
  onTargetChanged(handler: () => void): WheelHandlerBuilder;
  onTargetScaleMultiplierChanged(handler: () => void): WheelHandlerBuilder;
  onTargetTransformAroundCursorChanged(handler: () => void): WheelHandlerBuilder;
  onWheel(handler: (event: QmlValue) => void): WheelHandlerBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): WheelHandlerBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): WheelHandlerBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): WheelHandlerBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): WheelHandlerBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): WheelHandlerBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): WheelHandlerBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): WheelHandlerBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): WheelHandlerBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): WheelHandlerBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): WheelHandlerBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): WheelHandlerBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): WheelHandlerBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): WheelHandlerBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): WheelHandlerBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): WheelHandlerBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): WheelHandlerBuilder;
}

export function WheelHandler(): WheelHandlerBuilder {
  return new DslBuilderImpl('WheelHandler') as unknown as WheelHandlerBuilder;
}

export namespace WheelHandler {
  export namespace GrabPermissions {
    export const TakeOverForbidden = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'TakeOverForbidden',
    );
    export const CanTakeOverFromHandlersOfSameType = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfSameType',
    );
    export const CanTakeOverFromHandlersOfDifferentType = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfDifferentType',
    );
    export const CanTakeOverFromItems = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'CanTakeOverFromItems',
    );
    export const CanTakeOverFromAnything = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'CanTakeOverFromAnything',
    );
    export const ApprovesTakeOverByHandlersOfSameType = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfSameType',
    );
    export const ApprovesTakeOverByHandlersOfDifferentType = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfDifferentType',
    );
    export const ApprovesTakeOverByItems = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'ApprovesTakeOverByItems',
    );
    export const ApprovesCancellation = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'ApprovesCancellation',
    );
    export const ApprovesTakeOverByAnything = createEnumToken(
      'WheelHandler',
      'GrabPermissions',
      'ApprovesTakeOverByAnything',
    );
  }
}
