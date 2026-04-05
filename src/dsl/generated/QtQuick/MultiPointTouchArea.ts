// AUTO-GENERATED — DO NOT EDIT
// Type: MultiPointTouchArea
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
export interface MultiPointTouchAreaBuilder {
  id(id: string): MultiPointTouchAreaBuilder;
  child(obj: QmlObjectBuilder): MultiPointTouchAreaBuilder;

  activeFocusOnTab(value: boolean): MultiPointTouchAreaBuilder;
  activeFocusOnTabBind(expr: string): MultiPointTouchAreaBuilder;
  antialiasing(value: boolean): MultiPointTouchAreaBuilder;
  antialiasingBind(expr: string): MultiPointTouchAreaBuilder;
  baselineOffset(value: number): MultiPointTouchAreaBuilder;
  baselineOffsetBind(expr: string): MultiPointTouchAreaBuilder;
  clip(value: boolean): MultiPointTouchAreaBuilder;
  clipBind(expr: string): MultiPointTouchAreaBuilder;
  containmentMask(value: QtObjectBuilder): MultiPointTouchAreaBuilder;
  containmentMaskBind(expr: string): MultiPointTouchAreaBuilder;
  enabled(value: boolean): MultiPointTouchAreaBuilder;
  enabledBind(expr: string): MultiPointTouchAreaBuilder;
  focus(value: boolean): MultiPointTouchAreaBuilder;
  focusBind(expr: string): MultiPointTouchAreaBuilder;
  focusPolicy(value: QmlValue): MultiPointTouchAreaBuilder;
  focusPolicyBind(expr: string): MultiPointTouchAreaBuilder;
  height(value: number): MultiPointTouchAreaBuilder;
  heightBind(expr: string): MultiPointTouchAreaBuilder;
  implicitHeight(value: number): MultiPointTouchAreaBuilder;
  implicitHeightBind(expr: string): MultiPointTouchAreaBuilder;
  implicitWidth(value: number): MultiPointTouchAreaBuilder;
  implicitWidthBind(expr: string): MultiPointTouchAreaBuilder;
  maximumTouchPoints(value: number): MultiPointTouchAreaBuilder;
  maximumTouchPointsBind(expr: string): MultiPointTouchAreaBuilder;
  minimumTouchPoints(value: number): MultiPointTouchAreaBuilder;
  minimumTouchPointsBind(expr: string): MultiPointTouchAreaBuilder;
  mouseEnabled(value: boolean): MultiPointTouchAreaBuilder;
  mouseEnabledBind(expr: string): MultiPointTouchAreaBuilder;
  objectName(value: string): MultiPointTouchAreaBuilder;
  objectNameBind(expr: string): MultiPointTouchAreaBuilder;
  opacity(value: number): MultiPointTouchAreaBuilder;
  opacityBind(expr: string): MultiPointTouchAreaBuilder;
  palette(value: PaletteBuilder): MultiPointTouchAreaBuilder;
  paletteBind(expr: string): MultiPointTouchAreaBuilder;
  parent(value: ItemBuilder): MultiPointTouchAreaBuilder;
  parentBind(expr: string): MultiPointTouchAreaBuilder;
  rotation(value: number): MultiPointTouchAreaBuilder;
  rotationBind(expr: string): MultiPointTouchAreaBuilder;
  scale(value: number): MultiPointTouchAreaBuilder;
  scaleBind(expr: string): MultiPointTouchAreaBuilder;
  smooth(value: boolean): MultiPointTouchAreaBuilder;
  smoothBind(expr: string): MultiPointTouchAreaBuilder;
  state(value: string): MultiPointTouchAreaBuilder;
  stateBind(expr: string): MultiPointTouchAreaBuilder;
  transformOrigin(value: QmlValue): MultiPointTouchAreaBuilder;
  transformOriginBind(expr: string): MultiPointTouchAreaBuilder;
  visible(value: boolean): MultiPointTouchAreaBuilder;
  visibleBind(expr: string): MultiPointTouchAreaBuilder;
  width(value: number): MultiPointTouchAreaBuilder;
  widthBind(expr: string): MultiPointTouchAreaBuilder;
  x(value: number): MultiPointTouchAreaBuilder;
  xBind(expr: string): MultiPointTouchAreaBuilder;
  y(value: number): MultiPointTouchAreaBuilder;
  yBind(expr: string): MultiPointTouchAreaBuilder;
  z(value: number): MultiPointTouchAreaBuilder;
  zBind(expr: string): MultiPointTouchAreaBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): MultiPointTouchAreaBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): MultiPointTouchAreaBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): MultiPointTouchAreaBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): MultiPointTouchAreaBuilder;
  onCanceled(handler: (touchPoints: QmlValue) => void): MultiPointTouchAreaBuilder;
  onChildrenChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): MultiPointTouchAreaBuilder;
  onClipChanged(handler: (arg0: boolean) => void): MultiPointTouchAreaBuilder;
  onContainmentMaskChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onEnabledChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): MultiPointTouchAreaBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): MultiPointTouchAreaBuilder;
  onGestureStarted(handler: (gesture: QmlValue) => void): MultiPointTouchAreaBuilder;
  onHeightChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onImplicitHeightChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onImplicitWidthChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onMaximumTouchPointsChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onMinimumTouchPointsChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onMouseEnabledChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): MultiPointTouchAreaBuilder;
  onOpacityChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onPaletteChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onPaletteCreated(handler: () => void): MultiPointTouchAreaBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): MultiPointTouchAreaBuilder;
  onPressed(handler: (touchPoints: QmlValue) => void): MultiPointTouchAreaBuilder;
  onReleased(handler: (touchPoints: QmlValue) => void): MultiPointTouchAreaBuilder;
  onRotationChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onScaleChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): MultiPointTouchAreaBuilder;
  onStateChanged(handler: (arg0: string) => void): MultiPointTouchAreaBuilder;
  onTouchUpdated(handler: (touchPoints: QmlValue) => void): MultiPointTouchAreaBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): MultiPointTouchAreaBuilder;
  onUpdated(handler: (touchPoints: QmlValue) => void): MultiPointTouchAreaBuilder;
  onVisibleChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onVisibleChildrenChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onWidthChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): MultiPointTouchAreaBuilder;
  onXChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onYChanged(handler: () => void): MultiPointTouchAreaBuilder;
  onZChanged(handler: () => void): MultiPointTouchAreaBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MultiPointTouchAreaBuilder;
  layer(setup: (b: LayerBuilder) => void): MultiPointTouchAreaBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): MultiPointTouchAreaBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): MultiPointTouchAreaBuilder;
}

export function MultiPointTouchArea(): MultiPointTouchAreaBuilder {
  return new DslBuilderImpl('MultiPointTouchArea') as unknown as MultiPointTouchAreaBuilder;
}

export namespace MultiPointTouchArea {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MultiPointTouchArea',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MultiPointTouchArea',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'MultiPointTouchArea',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'MultiPointTouchArea',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'MultiPointTouchArea',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('MultiPointTouchArea', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MultiPointTouchArea',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MultiPointTouchArea',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MultiPointTouchArea', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MultiPointTouchArea', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MultiPointTouchArea', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MultiPointTouchArea', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MultiPointTouchArea', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MultiPointTouchArea', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'MultiPointTouchArea',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('MultiPointTouchArea', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'MultiPointTouchArea',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
