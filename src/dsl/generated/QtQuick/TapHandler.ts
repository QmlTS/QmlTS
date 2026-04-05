// AUTO-GENERATED — DO NOT EDIT
// Type: TapHandler
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
export interface TapHandlerBuilder {
  id(id: string): TapHandlerBuilder;
  child(obj: QmlObjectBuilder): TapHandlerBuilder;

  acceptedButtons(value: QmlValue): TapHandlerBuilder;
  acceptedButtonsBind(expr: string): TapHandlerBuilder;
  acceptedDevices(value: QmlValue): TapHandlerBuilder;
  acceptedDevicesBind(expr: string): TapHandlerBuilder;
  acceptedModifiers(value: QmlValue): TapHandlerBuilder;
  acceptedModifiersBind(expr: string): TapHandlerBuilder;
  acceptedPointerTypes(value: QmlValue): TapHandlerBuilder;
  acceptedPointerTypesBind(expr: string): TapHandlerBuilder;
  cursorShape(value: QmlValue): TapHandlerBuilder;
  cursorShapeBind(expr: string): TapHandlerBuilder;
  dragThreshold(value: number): TapHandlerBuilder;
  dragThresholdBind(expr: string): TapHandlerBuilder;
  enabled(value: boolean): TapHandlerBuilder;
  enabledBind(expr: string): TapHandlerBuilder;
  exclusiveSignals(value: QmlValue): TapHandlerBuilder;
  exclusiveSignalsBind(expr: string): TapHandlerBuilder;
  gesturePolicy(value: QmlValue): TapHandlerBuilder;
  gesturePolicyBind(expr: string): TapHandlerBuilder;
  grabPermissions(value: QmlValue): TapHandlerBuilder;
  grabPermissionsBind(expr: string): TapHandlerBuilder;
  longPressThreshold(value: number): TapHandlerBuilder;
  longPressThresholdBind(expr: string): TapHandlerBuilder;
  margin(value: number): TapHandlerBuilder;
  marginBind(expr: string): TapHandlerBuilder;
  objectName(value: string): TapHandlerBuilder;
  objectNameBind(expr: string): TapHandlerBuilder;
  parent(value: ItemBuilder): TapHandlerBuilder;
  parentBind(expr: string): TapHandlerBuilder;
  target(value: ItemBuilder): TapHandlerBuilder;
  targetBind(expr: string): TapHandlerBuilder;
  onAcceptedButtonsChanged(handler: () => void): TapHandlerBuilder;
  onAcceptedDevicesChanged(handler: () => void): TapHandlerBuilder;
  onAcceptedModifiersChanged(handler: () => void): TapHandlerBuilder;
  onAcceptedPointerTypesChanged(handler: () => void): TapHandlerBuilder;
  onActiveChanged(handler: () => void): TapHandlerBuilder;
  onCanceled(handler: (point: QmlValue) => void): TapHandlerBuilder;
  onCursorShapeChanged(handler: () => void): TapHandlerBuilder;
  onDoubleTapped(handler: (eventPoint: QmlValue, arg1: QmlValue) => void): TapHandlerBuilder;
  onDragThresholdChanged(handler: () => void): TapHandlerBuilder;
  onEnabledChanged(handler: () => void): TapHandlerBuilder;
  onExclusiveSignalsChanged(handler: () => void): TapHandlerBuilder;
  onGesturePolicyChanged(handler: () => void): TapHandlerBuilder;
  onGrabChanged(handler: (transition: QmlValue, point: QmlValue) => void): TapHandlerBuilder;
  onGrabPermissionChanged(handler: () => void): TapHandlerBuilder;
  onLongPressThresholdChanged(handler: () => void): TapHandlerBuilder;
  onLongPressed(handler: () => void): TapHandlerBuilder;
  onMarginChanged(handler: () => void): TapHandlerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TapHandlerBuilder;
  onParentChanged(handler: () => void): TapHandlerBuilder;
  onPointChanged(handler: () => void): TapHandlerBuilder;
  onPressedChanged(handler: () => void): TapHandlerBuilder;
  onSingleTapped(handler: (eventPoint: QmlValue, arg1: QmlValue) => void): TapHandlerBuilder;
  onTapCountChanged(handler: () => void): TapHandlerBuilder;
  onTapped(handler: (eventPoint: QmlValue, arg1: QmlValue) => void): TapHandlerBuilder;
  onTargetChanged(handler: () => void): TapHandlerBuilder;
  onTimeHeldChanged(handler: () => void): TapHandlerBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TapHandlerBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TapHandlerBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TapHandlerBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TapHandlerBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TapHandlerBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TapHandlerBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TapHandlerBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TapHandlerBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TapHandlerBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TapHandlerBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TapHandlerBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TapHandlerBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TapHandlerBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TapHandlerBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TapHandlerBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TapHandlerBuilder;
}

export function TapHandler(): TapHandlerBuilder {
  return new DslBuilderImpl('TapHandler') as unknown as TapHandlerBuilder;
}

export namespace TapHandler {
  export namespace ExclusiveSignals {
    export const NotExclusive = createEnumToken('TapHandler', 'ExclusiveSignals', 'NotExclusive');
    export const SingleTap = createEnumToken('TapHandler', 'ExclusiveSignals', 'SingleTap');
    export const DoubleTap = createEnumToken('TapHandler', 'ExclusiveSignals', 'DoubleTap');
  }
  export namespace GesturePolicy {
    export const DragThreshold = createEnumToken('TapHandler', 'GesturePolicy', 'DragThreshold');
    export const WithinBounds = createEnumToken('TapHandler', 'GesturePolicy', 'WithinBounds');
    export const ReleaseWithinBounds = createEnumToken(
      'TapHandler',
      'GesturePolicy',
      'ReleaseWithinBounds',
    );
    export const DragWithinBounds = createEnumToken(
      'TapHandler',
      'GesturePolicy',
      'DragWithinBounds',
    );
  }
  export namespace GrabPermissions {
    export const TakeOverForbidden = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'TakeOverForbidden',
    );
    export const CanTakeOverFromHandlersOfSameType = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfSameType',
    );
    export const CanTakeOverFromHandlersOfDifferentType = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfDifferentType',
    );
    export const CanTakeOverFromItems = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'CanTakeOverFromItems',
    );
    export const CanTakeOverFromAnything = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'CanTakeOverFromAnything',
    );
    export const ApprovesTakeOverByHandlersOfSameType = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfSameType',
    );
    export const ApprovesTakeOverByHandlersOfDifferentType = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfDifferentType',
    );
    export const ApprovesTakeOverByItems = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'ApprovesTakeOverByItems',
    );
    export const ApprovesCancellation = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'ApprovesCancellation',
    );
    export const ApprovesTakeOverByAnything = createEnumToken(
      'TapHandler',
      'GrabPermissions',
      'ApprovesTakeOverByAnything',
    );
  }
}
