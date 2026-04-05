// AUTO-GENERATED — DO NOT EDIT
// Type: PinchHandler
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlPoint, QmlValue, QmlVector2d } from '../../runtime/index.js';
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
export interface PinchHandlerBuilder {
  id(id: string): PinchHandlerBuilder;
  child(obj: QmlObjectBuilder): PinchHandlerBuilder;

  acceptedButtons(value: QmlValue): PinchHandlerBuilder;
  acceptedButtonsBind(expr: string): PinchHandlerBuilder;
  acceptedDevices(value: QmlValue): PinchHandlerBuilder;
  acceptedDevicesBind(expr: string): PinchHandlerBuilder;
  acceptedModifiers(value: QmlValue): PinchHandlerBuilder;
  acceptedModifiersBind(expr: string): PinchHandlerBuilder;
  acceptedPointerTypes(value: QmlValue): PinchHandlerBuilder;
  acceptedPointerTypesBind(expr: string): PinchHandlerBuilder;
  cursorShape(value: QmlValue): PinchHandlerBuilder;
  cursorShapeBind(expr: string): PinchHandlerBuilder;
  dragThreshold(value: number): PinchHandlerBuilder;
  dragThresholdBind(expr: string): PinchHandlerBuilder;
  enabled(value: boolean): PinchHandlerBuilder;
  enabledBind(expr: string): PinchHandlerBuilder;
  grabPermissions(value: QmlValue): PinchHandlerBuilder;
  grabPermissionsBind(expr: string): PinchHandlerBuilder;
  margin(value: number): PinchHandlerBuilder;
  marginBind(expr: string): PinchHandlerBuilder;
  maximumPointCount(value: number): PinchHandlerBuilder;
  maximumPointCountBind(expr: string): PinchHandlerBuilder;
  maximumRotation(value: number): PinchHandlerBuilder;
  maximumRotationBind(expr: string): PinchHandlerBuilder;
  maximumScale(value: number): PinchHandlerBuilder;
  maximumScaleBind(expr: string): PinchHandlerBuilder;
  minimumPointCount(value: number): PinchHandlerBuilder;
  minimumPointCountBind(expr: string): PinchHandlerBuilder;
  minimumRotation(value: number): PinchHandlerBuilder;
  minimumRotationBind(expr: string): PinchHandlerBuilder;
  minimumScale(value: number): PinchHandlerBuilder;
  minimumScaleBind(expr: string): PinchHandlerBuilder;
  objectName(value: string): PinchHandlerBuilder;
  objectNameBind(expr: string): PinchHandlerBuilder;
  parent(value: ItemBuilder): PinchHandlerBuilder;
  parentBind(expr: string): PinchHandlerBuilder;
  persistentRotation(value: number): PinchHandlerBuilder;
  persistentRotationBind(expr: string): PinchHandlerBuilder;
  persistentScale(value: number): PinchHandlerBuilder;
  persistentScaleBind(expr: string): PinchHandlerBuilder;
  persistentTranslation(value: QmlPoint): PinchHandlerBuilder;
  persistentTranslationBind(expr: string): PinchHandlerBuilder;
  target(value: ItemBuilder): PinchHandlerBuilder;
  targetBind(expr: string): PinchHandlerBuilder;
  onAcceptedButtonsChanged(handler: () => void): PinchHandlerBuilder;
  onAcceptedDevicesChanged(handler: () => void): PinchHandlerBuilder;
  onAcceptedModifiersChanged(handler: () => void): PinchHandlerBuilder;
  onAcceptedPointerTypesChanged(handler: () => void): PinchHandlerBuilder;
  onActiveChanged(handler: () => void): PinchHandlerBuilder;
  onCanceled(handler: (point: QmlValue) => void): PinchHandlerBuilder;
  onCentroidChanged(handler: () => void): PinchHandlerBuilder;
  onCursorShapeChanged(handler: () => void): PinchHandlerBuilder;
  onDragThresholdChanged(handler: () => void): PinchHandlerBuilder;
  onEnabledChanged(handler: () => void): PinchHandlerBuilder;
  onGrabChanged(handler: (transition: QmlValue, point: QmlValue) => void): PinchHandlerBuilder;
  onGrabPermissionChanged(handler: () => void): PinchHandlerBuilder;
  onMarginChanged(handler: () => void): PinchHandlerBuilder;
  onMaximumPointCountChanged(handler: () => void): PinchHandlerBuilder;
  onMaximumRotationChanged(handler: () => void): PinchHandlerBuilder;
  onMaximumScaleChanged(handler: () => void): PinchHandlerBuilder;
  onMinimumPointCountChanged(handler: () => void): PinchHandlerBuilder;
  onMinimumRotationChanged(handler: () => void): PinchHandlerBuilder;
  onMinimumScaleChanged(handler: () => void): PinchHandlerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PinchHandlerBuilder;
  onParentChanged(handler: () => void): PinchHandlerBuilder;
  onRotationChanged(handler: (delta: number) => void): PinchHandlerBuilder;
  onScaleChanged(handler: (delta: number) => void): PinchHandlerBuilder;
  onTargetChanged(handler: () => void): PinchHandlerBuilder;
  onTranslationChanged(handler: (delta: QmlVector2d) => void): PinchHandlerBuilder;
  onUpdated(handler: () => void): PinchHandlerBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PinchHandlerBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PinchHandlerBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PinchHandlerBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PinchHandlerBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PinchHandlerBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PinchHandlerBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PinchHandlerBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PinchHandlerBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PinchHandlerBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PinchHandlerBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PinchHandlerBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PinchHandlerBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PinchHandlerBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PinchHandlerBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PinchHandlerBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PinchHandlerBuilder;
}

export function PinchHandler(): PinchHandlerBuilder {
  return new DslBuilderImpl('PinchHandler') as unknown as PinchHandlerBuilder;
}

export namespace PinchHandler {
  export namespace GrabPermissions {
    export const TakeOverForbidden = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'TakeOverForbidden',
    );
    export const CanTakeOverFromHandlersOfSameType = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfSameType',
    );
    export const CanTakeOverFromHandlersOfDifferentType = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfDifferentType',
    );
    export const CanTakeOverFromItems = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'CanTakeOverFromItems',
    );
    export const CanTakeOverFromAnything = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'CanTakeOverFromAnything',
    );
    export const ApprovesTakeOverByHandlersOfSameType = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfSameType',
    );
    export const ApprovesTakeOverByHandlersOfDifferentType = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfDifferentType',
    );
    export const ApprovesTakeOverByItems = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'ApprovesTakeOverByItems',
    );
    export const ApprovesCancellation = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'ApprovesCancellation',
    );
    export const ApprovesTakeOverByAnything = createEnumToken(
      'PinchHandler',
      'GrabPermissions',
      'ApprovesTakeOverByAnything',
    );
  }
}
