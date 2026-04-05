// AUTO-GENERATED — DO NOT EDIT
// Type: MouseArea
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PaletteBuilder } from './Palette.js';
import type { AnchorsBuilder } from './QQuickAnchors.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { LayerBuilder } from './QQuickItemLayer.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface MouseAreaBuilder {
  id(id: string): MouseAreaBuilder;
  child(obj: QmlObjectBuilder): MouseAreaBuilder;

  acceptedButtons(value: QmlValue): MouseAreaBuilder;
  acceptedButtonsBind(expr: string): MouseAreaBuilder;
  activeFocusOnTab(value: boolean): MouseAreaBuilder;
  activeFocusOnTabBind(expr: string): MouseAreaBuilder;
  antialiasing(value: boolean): MouseAreaBuilder;
  antialiasingBind(expr: string): MouseAreaBuilder;
  baselineOffset(value: number): MouseAreaBuilder;
  baselineOffsetBind(expr: string): MouseAreaBuilder;
  clip(value: boolean): MouseAreaBuilder;
  clipBind(expr: string): MouseAreaBuilder;
  containmentMask(value: QtObjectBuilder): MouseAreaBuilder;
  containmentMaskBind(expr: string): MouseAreaBuilder;
  cursorShape(value: QmlValue): MouseAreaBuilder;
  cursorShapeBind(expr: string): MouseAreaBuilder;
  enabled(value: boolean): MouseAreaBuilder;
  enabledBind(expr: string): MouseAreaBuilder;
  focus(value: boolean): MouseAreaBuilder;
  focusBind(expr: string): MouseAreaBuilder;
  focusPolicy(value: QmlValue): MouseAreaBuilder;
  focusPolicyBind(expr: string): MouseAreaBuilder;
  height(value: number): MouseAreaBuilder;
  heightBind(expr: string): MouseAreaBuilder;
  hoverEnabled(value: boolean): MouseAreaBuilder;
  hoverEnabledBind(expr: string): MouseAreaBuilder;
  implicitHeight(value: number): MouseAreaBuilder;
  implicitHeightBind(expr: string): MouseAreaBuilder;
  implicitWidth(value: number): MouseAreaBuilder;
  implicitWidthBind(expr: string): MouseAreaBuilder;
  objectName(value: string): MouseAreaBuilder;
  objectNameBind(expr: string): MouseAreaBuilder;
  opacity(value: number): MouseAreaBuilder;
  opacityBind(expr: string): MouseAreaBuilder;
  palette(value: PaletteBuilder): MouseAreaBuilder;
  paletteBind(expr: string): MouseAreaBuilder;
  parent(value: ItemBuilder): MouseAreaBuilder;
  parentBind(expr: string): MouseAreaBuilder;
  pressAndHoldInterval(value: number): MouseAreaBuilder;
  pressAndHoldIntervalBind(expr: string): MouseAreaBuilder;
  preventStealing(value: boolean): MouseAreaBuilder;
  preventStealingBind(expr: string): MouseAreaBuilder;
  propagateComposedEvents(value: boolean): MouseAreaBuilder;
  propagateComposedEventsBind(expr: string): MouseAreaBuilder;
  rotation(value: number): MouseAreaBuilder;
  rotationBind(expr: string): MouseAreaBuilder;
  scale(value: number): MouseAreaBuilder;
  scaleBind(expr: string): MouseAreaBuilder;
  scrollGestureEnabled(value: boolean): MouseAreaBuilder;
  scrollGestureEnabledBind(expr: string): MouseAreaBuilder;
  smooth(value: boolean): MouseAreaBuilder;
  smoothBind(expr: string): MouseAreaBuilder;
  state(value: string): MouseAreaBuilder;
  stateBind(expr: string): MouseAreaBuilder;
  transformOrigin(value: QmlValue): MouseAreaBuilder;
  transformOriginBind(expr: string): MouseAreaBuilder;
  visible(value: boolean): MouseAreaBuilder;
  visibleBind(expr: string): MouseAreaBuilder;
  width(value: number): MouseAreaBuilder;
  widthBind(expr: string): MouseAreaBuilder;
  x(value: number): MouseAreaBuilder;
  xBind(expr: string): MouseAreaBuilder;
  y(value: number): MouseAreaBuilder;
  yBind(expr: string): MouseAreaBuilder;
  z(value: number): MouseAreaBuilder;
  zBind(expr: string): MouseAreaBuilder;
  onAcceptedButtonsChanged(handler: () => void): MouseAreaBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): MouseAreaBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): MouseAreaBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): MouseAreaBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): MouseAreaBuilder;
  onCanceled(handler: () => void): MouseAreaBuilder;
  onChildrenChanged(handler: () => void): MouseAreaBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): MouseAreaBuilder;
  onClicked(handler: (mouse: QmlValue) => void): MouseAreaBuilder;
  onClipChanged(handler: (arg0: boolean) => void): MouseAreaBuilder;
  onContainmentMaskChanged(handler: () => void): MouseAreaBuilder;
  onContainsPressChanged(handler: () => void): MouseAreaBuilder;
  onCursorShapeChanged(handler: () => void): MouseAreaBuilder;
  onDoubleClicked(handler: (mouse: QmlValue) => void): MouseAreaBuilder;
  onEnabledChanged(handler: () => void): MouseAreaBuilder;
  onEntered(handler: () => void): MouseAreaBuilder;
  onExited(handler: () => void): MouseAreaBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): MouseAreaBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): MouseAreaBuilder;
  onHeightChanged(handler: () => void): MouseAreaBuilder;
  onHoverEnabledChanged(handler: () => void): MouseAreaBuilder;
  onHoveredChanged(handler: () => void): MouseAreaBuilder;
  onImplicitHeightChanged(handler: () => void): MouseAreaBuilder;
  onImplicitWidthChanged(handler: () => void): MouseAreaBuilder;
  onMouseXChanged(handler: (mouse: QmlValue) => void): MouseAreaBuilder;
  onMouseYChanged(handler: (mouse: QmlValue) => void): MouseAreaBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): MouseAreaBuilder;
  onOpacityChanged(handler: () => void): MouseAreaBuilder;
  onPaletteChanged(handler: () => void): MouseAreaBuilder;
  onPaletteCreated(handler: () => void): MouseAreaBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): MouseAreaBuilder;
  onPositionChanged(handler: (mouse: QmlValue) => void): MouseAreaBuilder;
  onPressAndHold(handler: (mouse: QmlValue) => void): MouseAreaBuilder;
  onPressAndHoldIntervalChanged(handler: () => void): MouseAreaBuilder;
  onPressed(handler: (mouse: QmlValue) => void): MouseAreaBuilder;
  onPressedButtonsChanged(handler: () => void): MouseAreaBuilder;
  onPressedChanged(handler: () => void): MouseAreaBuilder;
  onPreventStealingChanged(handler: () => void): MouseAreaBuilder;
  onPropagateComposedEventsChanged(handler: () => void): MouseAreaBuilder;
  onReleased(handler: (mouse: QmlValue) => void): MouseAreaBuilder;
  onRotationChanged(handler: () => void): MouseAreaBuilder;
  onScaleChanged(handler: () => void): MouseAreaBuilder;
  onScrollGestureEnabledChanged(handler: () => void): MouseAreaBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): MouseAreaBuilder;
  onStateChanged(handler: (arg0: string) => void): MouseAreaBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): MouseAreaBuilder;
  onVisibleChanged(handler: () => void): MouseAreaBuilder;
  onVisibleChildrenChanged(handler: () => void): MouseAreaBuilder;
  onWheel(handler: (wheel: QmlValue) => void): MouseAreaBuilder;
  onWidthChanged(handler: () => void): MouseAreaBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): MouseAreaBuilder;
  onXChanged(handler: () => void): MouseAreaBuilder;
  onYChanged(handler: () => void): MouseAreaBuilder;
  onZChanged(handler: () => void): MouseAreaBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MouseAreaBuilder;
  layer(setup: (b: LayerBuilder) => void): MouseAreaBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): MouseAreaBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): MouseAreaBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): MouseAreaBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): MouseAreaBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): MouseAreaBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): MouseAreaBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): MouseAreaBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): MouseAreaBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): MouseAreaBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): MouseAreaBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): MouseAreaBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): MouseAreaBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): MouseAreaBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): MouseAreaBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): MouseAreaBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): MouseAreaBuilder;
}

export function MouseArea(): MouseAreaBuilder {
  return new DslBuilderImpl('MouseArea') as unknown as MouseAreaBuilder;
}

export namespace MouseArea {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MouseArea',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MouseArea',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MouseArea', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MouseArea', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MouseArea', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MouseArea', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MouseArea',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('MouseArea', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MouseArea',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MouseArea', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MouseArea', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MouseArea', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MouseArea', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MouseArea', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MouseArea', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MouseArea', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MouseArea', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MouseArea', 'TransformOrigin', 'BottomRight');
  }
}
