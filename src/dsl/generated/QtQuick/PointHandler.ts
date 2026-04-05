// AUTO-GENERATED — DO NOT EDIT
// Type: PointHandler
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
export interface PointHandlerBuilder {
  id(id: string): PointHandlerBuilder;
  child(obj: QmlObjectBuilder): PointHandlerBuilder;

  acceptedButtons(value: QmlValue): PointHandlerBuilder;
  acceptedButtonsBind(expr: string): PointHandlerBuilder;
  acceptedDevices(value: QmlValue): PointHandlerBuilder;
  acceptedDevicesBind(expr: string): PointHandlerBuilder;
  acceptedModifiers(value: QmlValue): PointHandlerBuilder;
  acceptedModifiersBind(expr: string): PointHandlerBuilder;
  acceptedPointerTypes(value: QmlValue): PointHandlerBuilder;
  acceptedPointerTypesBind(expr: string): PointHandlerBuilder;
  cursorShape(value: QmlValue): PointHandlerBuilder;
  cursorShapeBind(expr: string): PointHandlerBuilder;
  dragThreshold(value: number): PointHandlerBuilder;
  dragThresholdBind(expr: string): PointHandlerBuilder;
  enabled(value: boolean): PointHandlerBuilder;
  enabledBind(expr: string): PointHandlerBuilder;
  grabPermissions(value: QmlValue): PointHandlerBuilder;
  grabPermissionsBind(expr: string): PointHandlerBuilder;
  margin(value: number): PointHandlerBuilder;
  marginBind(expr: string): PointHandlerBuilder;
  objectName(value: string): PointHandlerBuilder;
  objectNameBind(expr: string): PointHandlerBuilder;
  parent(value: ItemBuilder): PointHandlerBuilder;
  parentBind(expr: string): PointHandlerBuilder;
  target(value: ItemBuilder): PointHandlerBuilder;
  targetBind(expr: string): PointHandlerBuilder;
  onAcceptedButtonsChanged(handler: () => void): PointHandlerBuilder;
  onAcceptedDevicesChanged(handler: () => void): PointHandlerBuilder;
  onAcceptedModifiersChanged(handler: () => void): PointHandlerBuilder;
  onAcceptedPointerTypesChanged(handler: () => void): PointHandlerBuilder;
  onActiveChanged(handler: () => void): PointHandlerBuilder;
  onCanceled(handler: (point: QmlValue) => void): PointHandlerBuilder;
  onCursorShapeChanged(handler: () => void): PointHandlerBuilder;
  onDragThresholdChanged(handler: () => void): PointHandlerBuilder;
  onEnabledChanged(handler: () => void): PointHandlerBuilder;
  onGrabChanged(handler: (transition: QmlValue, point: QmlValue) => void): PointHandlerBuilder;
  onGrabPermissionChanged(handler: () => void): PointHandlerBuilder;
  onMarginChanged(handler: () => void): PointHandlerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PointHandlerBuilder;
  onParentChanged(handler: () => void): PointHandlerBuilder;
  onPointChanged(handler: () => void): PointHandlerBuilder;
  onTargetChanged(handler: () => void): PointHandlerBuilder;
  onTranslationChanged(handler: () => void): PointHandlerBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PointHandlerBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PointHandlerBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PointHandlerBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PointHandlerBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PointHandlerBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PointHandlerBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PointHandlerBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PointHandlerBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PointHandlerBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PointHandlerBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PointHandlerBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PointHandlerBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PointHandlerBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PointHandlerBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PointHandlerBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PointHandlerBuilder;
}

export function PointHandler(): PointHandlerBuilder {
  return new DslBuilderImpl('PointHandler') as unknown as PointHandlerBuilder;
}

export namespace PointHandler {
  export namespace GrabPermissions {
    export const TakeOverForbidden = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'TakeOverForbidden',
    );
    export const CanTakeOverFromHandlersOfSameType = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfSameType',
    );
    export const CanTakeOverFromHandlersOfDifferentType = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfDifferentType',
    );
    export const CanTakeOverFromItems = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'CanTakeOverFromItems',
    );
    export const CanTakeOverFromAnything = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'CanTakeOverFromAnything',
    );
    export const ApprovesTakeOverByHandlersOfSameType = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfSameType',
    );
    export const ApprovesTakeOverByHandlersOfDifferentType = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfDifferentType',
    );
    export const ApprovesTakeOverByItems = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'ApprovesTakeOverByItems',
    );
    export const ApprovesCancellation = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'ApprovesCancellation',
    );
    export const ApprovesTakeOverByAnything = createEnumToken(
      'PointHandler',
      'GrabPermissions',
      'ApprovesTakeOverByAnything',
    );
  }
}
