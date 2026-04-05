// AUTO-GENERATED — DO NOT EDIT
// Type: HoverHandler
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
export interface HoverHandlerBuilder {
  id(id: string): HoverHandlerBuilder;
  child(obj: QmlObjectBuilder): HoverHandlerBuilder;

  acceptedButtons(value: QmlValue): HoverHandlerBuilder;
  acceptedButtonsBind(expr: string): HoverHandlerBuilder;
  acceptedDevices(value: QmlValue): HoverHandlerBuilder;
  acceptedDevicesBind(expr: string): HoverHandlerBuilder;
  acceptedModifiers(value: QmlValue): HoverHandlerBuilder;
  acceptedModifiersBind(expr: string): HoverHandlerBuilder;
  acceptedPointerTypes(value: QmlValue): HoverHandlerBuilder;
  acceptedPointerTypesBind(expr: string): HoverHandlerBuilder;
  blocking(value: boolean): HoverHandlerBuilder;
  blockingBind(expr: string): HoverHandlerBuilder;
  cursorShape(value: QmlValue): HoverHandlerBuilder;
  cursorShapeBind(expr: string): HoverHandlerBuilder;
  dragThreshold(value: number): HoverHandlerBuilder;
  dragThresholdBind(expr: string): HoverHandlerBuilder;
  enabled(value: boolean): HoverHandlerBuilder;
  enabledBind(expr: string): HoverHandlerBuilder;
  grabPermissions(value: QmlValue): HoverHandlerBuilder;
  grabPermissionsBind(expr: string): HoverHandlerBuilder;
  margin(value: number): HoverHandlerBuilder;
  marginBind(expr: string): HoverHandlerBuilder;
  objectName(value: string): HoverHandlerBuilder;
  objectNameBind(expr: string): HoverHandlerBuilder;
  parent(value: ItemBuilder): HoverHandlerBuilder;
  parentBind(expr: string): HoverHandlerBuilder;
  target(value: ItemBuilder): HoverHandlerBuilder;
  targetBind(expr: string): HoverHandlerBuilder;
  onAcceptedButtonsChanged(handler: () => void): HoverHandlerBuilder;
  onAcceptedDevicesChanged(handler: () => void): HoverHandlerBuilder;
  onAcceptedModifiersChanged(handler: () => void): HoverHandlerBuilder;
  onAcceptedPointerTypesChanged(handler: () => void): HoverHandlerBuilder;
  onActiveChanged(handler: () => void): HoverHandlerBuilder;
  onBlockingChanged(handler: () => void): HoverHandlerBuilder;
  onCanceled(handler: (point: QmlValue) => void): HoverHandlerBuilder;
  onCursorShapeChanged(handler: () => void): HoverHandlerBuilder;
  onDragThresholdChanged(handler: () => void): HoverHandlerBuilder;
  onEnabledChanged(handler: () => void): HoverHandlerBuilder;
  onGrabChanged(handler: (transition: QmlValue, point: QmlValue) => void): HoverHandlerBuilder;
  onGrabPermissionChanged(handler: () => void): HoverHandlerBuilder;
  onHoveredChanged(handler: () => void): HoverHandlerBuilder;
  onMarginChanged(handler: () => void): HoverHandlerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): HoverHandlerBuilder;
  onParentChanged(handler: () => void): HoverHandlerBuilder;
  onPointChanged(handler: () => void): HoverHandlerBuilder;
  onTargetChanged(handler: () => void): HoverHandlerBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): HoverHandlerBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): HoverHandlerBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): HoverHandlerBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): HoverHandlerBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): HoverHandlerBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): HoverHandlerBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): HoverHandlerBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): HoverHandlerBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): HoverHandlerBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): HoverHandlerBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): HoverHandlerBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): HoverHandlerBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): HoverHandlerBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): HoverHandlerBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): HoverHandlerBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): HoverHandlerBuilder;
}

export function HoverHandler(): HoverHandlerBuilder {
  return new DslBuilderImpl('HoverHandler') as unknown as HoverHandlerBuilder;
}

export namespace HoverHandler {
  export namespace GrabPermissions {
    export const TakeOverForbidden = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'TakeOverForbidden',
    );
    export const CanTakeOverFromHandlersOfSameType = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfSameType',
    );
    export const CanTakeOverFromHandlersOfDifferentType = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'CanTakeOverFromHandlersOfDifferentType',
    );
    export const CanTakeOverFromItems = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'CanTakeOverFromItems',
    );
    export const CanTakeOverFromAnything = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'CanTakeOverFromAnything',
    );
    export const ApprovesTakeOverByHandlersOfSameType = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfSameType',
    );
    export const ApprovesTakeOverByHandlersOfDifferentType = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'ApprovesTakeOverByHandlersOfDifferentType',
    );
    export const ApprovesTakeOverByItems = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'ApprovesTakeOverByItems',
    );
    export const ApprovesCancellation = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'ApprovesCancellation',
    );
    export const ApprovesTakeOverByAnything = createEnumToken(
      'HoverHandler',
      'GrabPermissions',
      'ApprovesTakeOverByAnything',
    );
  }
}
