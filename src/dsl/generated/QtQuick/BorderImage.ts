// AUTO-GENERATED — DO NOT EDIT
// Type: BorderImage
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlUrl, QmlValue } from '../../runtime/index.js';
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
import type { BorderBuilder } from './QQuickScaleGrid.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface BorderImageBuilder {
  id(id: string): BorderImageBuilder;
  child(obj: QmlObjectBuilder): BorderImageBuilder;

  activeFocusOnTab(value: boolean): BorderImageBuilder;
  activeFocusOnTabBind(expr: string): BorderImageBuilder;
  antialiasing(value: boolean): BorderImageBuilder;
  antialiasingBind(expr: string): BorderImageBuilder;
  asynchronous(value: boolean): BorderImageBuilder;
  asynchronousBind(expr: string): BorderImageBuilder;
  baselineOffset(value: number): BorderImageBuilder;
  baselineOffsetBind(expr: string): BorderImageBuilder;
  cache(value: boolean): BorderImageBuilder;
  cacheBind(expr: string): BorderImageBuilder;
  clip(value: boolean): BorderImageBuilder;
  clipBind(expr: string): BorderImageBuilder;
  colorSpace(value: QmlValue): BorderImageBuilder;
  colorSpaceBind(expr: string): BorderImageBuilder;
  containmentMask(value: QtObjectBuilder): BorderImageBuilder;
  containmentMaskBind(expr: string): BorderImageBuilder;
  currentFrame(value: number): BorderImageBuilder;
  currentFrameBind(expr: string): BorderImageBuilder;
  enabled(value: boolean): BorderImageBuilder;
  enabledBind(expr: string): BorderImageBuilder;
  focus(value: boolean): BorderImageBuilder;
  focusBind(expr: string): BorderImageBuilder;
  focusPolicy(value: QmlValue): BorderImageBuilder;
  focusPolicyBind(expr: string): BorderImageBuilder;
  height(value: number): BorderImageBuilder;
  heightBind(expr: string): BorderImageBuilder;
  horizontalTileMode(value: QmlValue): BorderImageBuilder;
  horizontalTileModeBind(expr: string): BorderImageBuilder;
  mirror(value: boolean): BorderImageBuilder;
  mirrorBind(expr: string): BorderImageBuilder;
  mirrorVertically(value: boolean): BorderImageBuilder;
  mirrorVerticallyBind(expr: string): BorderImageBuilder;
  objectName(value: string): BorderImageBuilder;
  objectNameBind(expr: string): BorderImageBuilder;
  opacity(value: number): BorderImageBuilder;
  opacityBind(expr: string): BorderImageBuilder;
  palette(value: PaletteBuilder): BorderImageBuilder;
  paletteBind(expr: string): BorderImageBuilder;
  parent(value: ItemBuilder): BorderImageBuilder;
  parentBind(expr: string): BorderImageBuilder;
  retainWhileLoading(value: boolean): BorderImageBuilder;
  retainWhileLoadingBind(expr: string): BorderImageBuilder;
  rotation(value: number): BorderImageBuilder;
  rotationBind(expr: string): BorderImageBuilder;
  scale(value: number): BorderImageBuilder;
  scaleBind(expr: string): BorderImageBuilder;
  smooth(value: boolean): BorderImageBuilder;
  smoothBind(expr: string): BorderImageBuilder;
  source(value: QmlUrl): BorderImageBuilder;
  sourceBind(expr: string): BorderImageBuilder;
  state(value: string): BorderImageBuilder;
  stateBind(expr: string): BorderImageBuilder;
  transformOrigin(value: QmlValue): BorderImageBuilder;
  transformOriginBind(expr: string): BorderImageBuilder;
  verticalTileMode(value: QmlValue): BorderImageBuilder;
  verticalTileModeBind(expr: string): BorderImageBuilder;
  visible(value: boolean): BorderImageBuilder;
  visibleBind(expr: string): BorderImageBuilder;
  width(value: number): BorderImageBuilder;
  widthBind(expr: string): BorderImageBuilder;
  x(value: number): BorderImageBuilder;
  xBind(expr: string): BorderImageBuilder;
  y(value: number): BorderImageBuilder;
  yBind(expr: string): BorderImageBuilder;
  z(value: number): BorderImageBuilder;
  zBind(expr: string): BorderImageBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): BorderImageBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): BorderImageBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): BorderImageBuilder;
  onAsynchronousChanged(handler: () => void): BorderImageBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): BorderImageBuilder;
  onCacheChanged(handler: () => void): BorderImageBuilder;
  onChildrenChanged(handler: () => void): BorderImageBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): BorderImageBuilder;
  onClipChanged(handler: (arg0: boolean) => void): BorderImageBuilder;
  onColorSpaceChanged(handler: () => void): BorderImageBuilder;
  onContainmentMaskChanged(handler: () => void): BorderImageBuilder;
  onCurrentFrameChanged(handler: () => void): BorderImageBuilder;
  onEnabledChanged(handler: () => void): BorderImageBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): BorderImageBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): BorderImageBuilder;
  onFrameCountChanged(handler: () => void): BorderImageBuilder;
  onHeightChanged(handler: () => void): BorderImageBuilder;
  onHorizontalTileModeChanged(handler: () => void): BorderImageBuilder;
  onImplicitHeightChanged(handler: () => void): BorderImageBuilder;
  onImplicitWidthChanged(handler: () => void): BorderImageBuilder;
  onMirrorChanged(handler: () => void): BorderImageBuilder;
  onMirrorVerticallyChanged(handler: () => void): BorderImageBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): BorderImageBuilder;
  onOpacityChanged(handler: () => void): BorderImageBuilder;
  onPaletteChanged(handler: () => void): BorderImageBuilder;
  onPaletteCreated(handler: () => void): BorderImageBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): BorderImageBuilder;
  onProgressChanged(handler: (progress: number) => void): BorderImageBuilder;
  onRetainWhileLoadingChanged(handler: () => void): BorderImageBuilder;
  onRotationChanged(handler: () => void): BorderImageBuilder;
  onScaleChanged(handler: () => void): BorderImageBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): BorderImageBuilder;
  onSourceChanged(handler: (arg0: QmlUrl) => void): BorderImageBuilder;
  onSourceClipRectChanged(handler: () => void): BorderImageBuilder;
  onSourceSizeChanged(handler: () => void): BorderImageBuilder;
  onStateChanged(handler: (arg0: string) => void): BorderImageBuilder;
  onStatusChanged(handler: (arg0: QmlValue) => void): BorderImageBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): BorderImageBuilder;
  onVerticalTileModeChanged(handler: () => void): BorderImageBuilder;
  onVisibleChanged(handler: () => void): BorderImageBuilder;
  onVisibleChildrenChanged(handler: () => void): BorderImageBuilder;
  onWidthChanged(handler: () => void): BorderImageBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): BorderImageBuilder;
  onXChanged(handler: () => void): BorderImageBuilder;
  onYChanged(handler: () => void): BorderImageBuilder;
  onZChanged(handler: () => void): BorderImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): BorderImageBuilder;
  border(setup: (b: BorderBuilder) => void): BorderImageBuilder;
  layer(setup: (b: LayerBuilder) => void): BorderImageBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): BorderImageBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): BorderImageBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): BorderImageBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): BorderImageBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): BorderImageBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): BorderImageBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): BorderImageBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): BorderImageBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): BorderImageBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): BorderImageBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): BorderImageBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): BorderImageBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): BorderImageBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): BorderImageBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): BorderImageBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): BorderImageBuilder;
}

export function BorderImage(): BorderImageBuilder {
  return new DslBuilderImpl('BorderImage') as unknown as BorderImageBuilder;
}

export namespace BorderImage {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'BorderImage',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'BorderImage',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('BorderImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('BorderImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('BorderImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('BorderImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'BorderImage',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('BorderImage', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'BorderImage',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('BorderImage', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('BorderImage', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken(
      'BorderImage',
      'LoadPixmapOptions',
      'UseProviderOptions',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('BorderImage', 'Status', 'Null');
    export const Ready = createEnumToken('BorderImage', 'Status', 'Ready');
    export const Loading = createEnumToken('BorderImage', 'Status', 'Loading');
    export const Error = createEnumToken('BorderImage', 'Status', 'Error');
  }
  export namespace TileMode {
    export const Stretch = createEnumToken('BorderImage', 'TileMode', 'Stretch');
    export const Repeat = createEnumToken('BorderImage', 'TileMode', 'Repeat');
    export const Round = createEnumToken('BorderImage', 'TileMode', 'Round');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('BorderImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('BorderImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('BorderImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('BorderImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('BorderImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('BorderImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('BorderImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('BorderImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('BorderImage', 'TransformOrigin', 'BottomRight');
  }
}
