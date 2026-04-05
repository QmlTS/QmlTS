// AUTO-GENERATED — DO NOT EDIT
// Type: PinchArea
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
export interface PinchAreaBuilder {
  id(id: string): PinchAreaBuilder;
  child(obj: QmlObjectBuilder): PinchAreaBuilder;

  activeFocusOnTab(value: boolean): PinchAreaBuilder;
  activeFocusOnTabBind(expr: string): PinchAreaBuilder;
  antialiasing(value: boolean): PinchAreaBuilder;
  antialiasingBind(expr: string): PinchAreaBuilder;
  baselineOffset(value: number): PinchAreaBuilder;
  baselineOffsetBind(expr: string): PinchAreaBuilder;
  clip(value: boolean): PinchAreaBuilder;
  clipBind(expr: string): PinchAreaBuilder;
  containmentMask(value: QtObjectBuilder): PinchAreaBuilder;
  containmentMaskBind(expr: string): PinchAreaBuilder;
  enabled(value: boolean): PinchAreaBuilder;
  enabledBind(expr: string): PinchAreaBuilder;
  focus(value: boolean): PinchAreaBuilder;
  focusBind(expr: string): PinchAreaBuilder;
  focusPolicy(value: QmlValue): PinchAreaBuilder;
  focusPolicyBind(expr: string): PinchAreaBuilder;
  height(value: number): PinchAreaBuilder;
  heightBind(expr: string): PinchAreaBuilder;
  implicitHeight(value: number): PinchAreaBuilder;
  implicitHeightBind(expr: string): PinchAreaBuilder;
  implicitWidth(value: number): PinchAreaBuilder;
  implicitWidthBind(expr: string): PinchAreaBuilder;
  objectName(value: string): PinchAreaBuilder;
  objectNameBind(expr: string): PinchAreaBuilder;
  opacity(value: number): PinchAreaBuilder;
  opacityBind(expr: string): PinchAreaBuilder;
  palette(value: PaletteBuilder): PinchAreaBuilder;
  paletteBind(expr: string): PinchAreaBuilder;
  parent(value: ItemBuilder): PinchAreaBuilder;
  parentBind(expr: string): PinchAreaBuilder;
  rotation(value: number): PinchAreaBuilder;
  rotationBind(expr: string): PinchAreaBuilder;
  scale(value: number): PinchAreaBuilder;
  scaleBind(expr: string): PinchAreaBuilder;
  smooth(value: boolean): PinchAreaBuilder;
  smoothBind(expr: string): PinchAreaBuilder;
  state(value: string): PinchAreaBuilder;
  stateBind(expr: string): PinchAreaBuilder;
  transformOrigin(value: QmlValue): PinchAreaBuilder;
  transformOriginBind(expr: string): PinchAreaBuilder;
  visible(value: boolean): PinchAreaBuilder;
  visibleBind(expr: string): PinchAreaBuilder;
  width(value: number): PinchAreaBuilder;
  widthBind(expr: string): PinchAreaBuilder;
  x(value: number): PinchAreaBuilder;
  xBind(expr: string): PinchAreaBuilder;
  y(value: number): PinchAreaBuilder;
  yBind(expr: string): PinchAreaBuilder;
  z(value: number): PinchAreaBuilder;
  zBind(expr: string): PinchAreaBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): PinchAreaBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): PinchAreaBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): PinchAreaBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): PinchAreaBuilder;
  onChildrenChanged(handler: () => void): PinchAreaBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): PinchAreaBuilder;
  onClipChanged(handler: (arg0: boolean) => void): PinchAreaBuilder;
  onContainmentMaskChanged(handler: () => void): PinchAreaBuilder;
  onEnabledChanged(handler: () => void): PinchAreaBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): PinchAreaBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): PinchAreaBuilder;
  onHeightChanged(handler: () => void): PinchAreaBuilder;
  onImplicitHeightChanged(handler: () => void): PinchAreaBuilder;
  onImplicitWidthChanged(handler: () => void): PinchAreaBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PinchAreaBuilder;
  onOpacityChanged(handler: () => void): PinchAreaBuilder;
  onPaletteChanged(handler: () => void): PinchAreaBuilder;
  onPaletteCreated(handler: () => void): PinchAreaBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): PinchAreaBuilder;
  onPinchFinished(handler: (pinch: QmlValue) => void): PinchAreaBuilder;
  onPinchStarted(handler: (pinch: QmlValue) => void): PinchAreaBuilder;
  onPinchUpdated(handler: (pinch: QmlValue) => void): PinchAreaBuilder;
  onRotationChanged(handler: () => void): PinchAreaBuilder;
  onScaleChanged(handler: () => void): PinchAreaBuilder;
  onSmartZoom(handler: (pinch: QmlValue) => void): PinchAreaBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): PinchAreaBuilder;
  onStateChanged(handler: (arg0: string) => void): PinchAreaBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): PinchAreaBuilder;
  onVisibleChanged(handler: () => void): PinchAreaBuilder;
  onVisibleChildrenChanged(handler: () => void): PinchAreaBuilder;
  onWidthChanged(handler: () => void): PinchAreaBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): PinchAreaBuilder;
  onXChanged(handler: () => void): PinchAreaBuilder;
  onYChanged(handler: () => void): PinchAreaBuilder;
  onZChanged(handler: () => void): PinchAreaBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PinchAreaBuilder;
  layer(setup: (b: LayerBuilder) => void): PinchAreaBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PinchAreaBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PinchAreaBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PinchAreaBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PinchAreaBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PinchAreaBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PinchAreaBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PinchAreaBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PinchAreaBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PinchAreaBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PinchAreaBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PinchAreaBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PinchAreaBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PinchAreaBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PinchAreaBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PinchAreaBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PinchAreaBuilder;
}

export function PinchArea(): PinchAreaBuilder {
  return new DslBuilderImpl('PinchArea') as unknown as PinchAreaBuilder;
}

export namespace PinchArea {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PinchArea',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PinchArea',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PinchArea', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PinchArea', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PinchArea', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PinchArea', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PinchArea',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('PinchArea', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PinchArea',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PinchArea', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PinchArea', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PinchArea', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PinchArea', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PinchArea', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PinchArea', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PinchArea', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PinchArea', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PinchArea', 'TransformOrigin', 'BottomRight');
  }
}
