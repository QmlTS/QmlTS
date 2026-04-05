// AUTO-GENERATED — DO NOT EDIT
// Type: DragHandler
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, QmlVector2d } from '../../runtime/index.js';
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
export interface DragHandlerBuilder {
  id(id: string): DragHandlerBuilder;
  child(obj: QmlObjectBuilder): DragHandlerBuilder;

  acceptedButtons(value: QmlValue): DragHandlerBuilder;
  acceptedButtonsBind(expr: string): DragHandlerBuilder;
  acceptedDevices(value: QmlValue): DragHandlerBuilder;
  acceptedDevicesBind(expr: string): DragHandlerBuilder;
  acceptedModifiers(value: QmlValue): DragHandlerBuilder;
  acceptedModifiersBind(expr: string): DragHandlerBuilder;
  acceptedPointerTypes(value: QmlValue): DragHandlerBuilder;
  acceptedPointerTypesBind(expr: string): DragHandlerBuilder;
  cursorShape(value: QmlValue): DragHandlerBuilder;
  cursorShapeBind(expr: string): DragHandlerBuilder;
  dragThreshold(value: number): DragHandlerBuilder;
  dragThresholdBind(expr: string): DragHandlerBuilder;
  enabled(value: boolean): DragHandlerBuilder;
  enabledBind(expr: string): DragHandlerBuilder;
  grabPermissions(value: QmlValue): DragHandlerBuilder;
  grabPermissionsBind(expr: string): DragHandlerBuilder;
  margin(value: number): DragHandlerBuilder;
  marginBind(expr: string): DragHandlerBuilder;
  maximumPointCount(value: number): DragHandlerBuilder;
  maximumPointCountBind(expr: string): DragHandlerBuilder;
  minimumPointCount(value: number): DragHandlerBuilder;
  minimumPointCountBind(expr: string): DragHandlerBuilder;
  objectName(value: string): DragHandlerBuilder;
  objectNameBind(expr: string): DragHandlerBuilder;
  parent(value: ItemBuilder): DragHandlerBuilder;
  parentBind(expr: string): DragHandlerBuilder;
  persistentTranslation(value: QmlVector2d): DragHandlerBuilder;
  persistentTranslationBind(expr: string): DragHandlerBuilder;
  snapMode(value: QmlValue): DragHandlerBuilder;
  snapModeBind(expr: string): DragHandlerBuilder;
  target(value: ItemBuilder): DragHandlerBuilder;
  targetBind(expr: string): DragHandlerBuilder;
  onAcceptedButtonsChanged(handler: () => void): DragHandlerBuilder;
  onAcceptedDevicesChanged(handler: () => void): DragHandlerBuilder;
  onAcceptedModifiersChanged(handler: () => void): DragHandlerBuilder;
  onAcceptedPointerTypesChanged(handler: () => void): DragHandlerBuilder;
  onActiveChanged(handler: () => void): DragHandlerBuilder;
  onCanceled(handler: (point: QmlValue) => void): DragHandlerBuilder;
  onCentroidChanged(handler: () => void): DragHandlerBuilder;
  onCursorShapeChanged(handler: () => void): DragHandlerBuilder;
  onDragThresholdChanged(handler: () => void): DragHandlerBuilder;
  onEnabledChanged(handler: () => void): DragHandlerBuilder;
  onGrabChanged(handler: (transition: QmlValue, point: QmlValue) => void): DragHandlerBuilder;
  onGrabPermissionChanged(handler: () => void): DragHandlerBuilder;
  onMarginChanged(handler: () => void): DragHandlerBuilder;
  onMaximumPointCountChanged(handler: () => void): DragHandlerBuilder;
  onMinimumPointCountChanged(handler: () => void): DragHandlerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DragHandlerBuilder;
  onParentChanged(handler: () => void): DragHandlerBuilder;
  onSnapModeChanged(handler: () => void): DragHandlerBuilder;
  onTargetChanged(handler: () => void): DragHandlerBuilder;
  onTranslationChanged(handler: (delta: QmlVector2d) => void): DragHandlerBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): DragHandlerBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): DragHandlerBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): DragHandlerBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): DragHandlerBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): DragHandlerBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): DragHandlerBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): DragHandlerBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): DragHandlerBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): DragHandlerBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): DragHandlerBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): DragHandlerBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): DragHandlerBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): DragHandlerBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): DragHandlerBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): DragHandlerBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): DragHandlerBuilder;
}

export function DragHandler(): DragHandlerBuilder {
  return new DslBuilderImpl('DragHandler') as unknown as DragHandlerBuilder;
}

export namespace DragHandler {
  export namespace GrabPermissions {
    export const TakeOverForbidden = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'TakeOverForbidden',
    );
    export const CanTakeOverFromHandlersOfSameType = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfSameType',
    );
    export const CanTakeOverFromHandlersOfDifferentType = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfDifferentType',
    );
    export const CanTakeOverFromItems = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'CanTakeOverFromItems',
    );
    export const CanTakeOverFromAnything = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'CanTakeOverFromAnything',
    );
    export const ApprovesTakeOverByHandlersOfSameType = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfSameType',
    );
    export const ApprovesTakeOverByHandlersOfDifferentType = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfDifferentType',
    );
    export const ApprovesTakeOverByItems = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'ApprovesTakeOverByItems',
    );
    export const ApprovesCancellation = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'ApprovesCancellation',
    );
    export const ApprovesTakeOverByAnything = createEnumToken(
      'DragHandler',
      'GrabPermissions',
      'ApprovesTakeOverByAnything',
    );
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('DragHandler', 'SnapMode', 'NoSnap');
    export const SnapAuto = createEnumToken('DragHandler', 'SnapMode', 'SnapAuto');
    export const SnapIfPressedOutsideTarget = createEnumToken(
      'DragHandler',
      'SnapMode',
      'SnapIfPressedOutsideTarget',
    );
    export const SnapAlways = createEnumToken('DragHandler', 'SnapMode', 'SnapAlways');
  }
}
