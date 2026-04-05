// AUTO-GENERATED — DO NOT EDIT
// Type: AnimatedImage
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlSize, QmlUrl, QmlValue } from '../../runtime/index.js';
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
export interface AnimatedImageBuilder {
  id(id: string): AnimatedImageBuilder;
  child(obj: QmlObjectBuilder): AnimatedImageBuilder;

  activeFocusOnTab(value: boolean): AnimatedImageBuilder;
  activeFocusOnTabBind(expr: string): AnimatedImageBuilder;
  antialiasing(value: boolean): AnimatedImageBuilder;
  antialiasingBind(expr: string): AnimatedImageBuilder;
  asynchronous(value: boolean): AnimatedImageBuilder;
  asynchronousBind(expr: string): AnimatedImageBuilder;
  autoTransform(value: boolean): AnimatedImageBuilder;
  autoTransformBind(expr: string): AnimatedImageBuilder;
  baselineOffset(value: number): AnimatedImageBuilder;
  baselineOffsetBind(expr: string): AnimatedImageBuilder;
  cache(value: boolean): AnimatedImageBuilder;
  cacheBind(expr: string): AnimatedImageBuilder;
  clip(value: boolean): AnimatedImageBuilder;
  clipBind(expr: string): AnimatedImageBuilder;
  colorSpace(value: QmlValue): AnimatedImageBuilder;
  colorSpaceBind(expr: string): AnimatedImageBuilder;
  containmentMask(value: QtObjectBuilder): AnimatedImageBuilder;
  containmentMaskBind(expr: string): AnimatedImageBuilder;
  currentFrame(value: number): AnimatedImageBuilder;
  currentFrameBind(expr: string): AnimatedImageBuilder;
  enabled(value: boolean): AnimatedImageBuilder;
  enabledBind(expr: string): AnimatedImageBuilder;
  fillMode(value: QmlValue): AnimatedImageBuilder;
  fillModeBind(expr: string): AnimatedImageBuilder;
  focus(value: boolean): AnimatedImageBuilder;
  focusBind(expr: string): AnimatedImageBuilder;
  focusPolicy(value: QmlValue): AnimatedImageBuilder;
  focusPolicyBind(expr: string): AnimatedImageBuilder;
  height(value: number): AnimatedImageBuilder;
  heightBind(expr: string): AnimatedImageBuilder;
  horizontalAlignment(value: QmlValue): AnimatedImageBuilder;
  horizontalAlignmentBind(expr: string): AnimatedImageBuilder;
  mipmap(value: boolean): AnimatedImageBuilder;
  mipmapBind(expr: string): AnimatedImageBuilder;
  mirror(value: boolean): AnimatedImageBuilder;
  mirrorBind(expr: string): AnimatedImageBuilder;
  mirrorVertically(value: boolean): AnimatedImageBuilder;
  mirrorVerticallyBind(expr: string): AnimatedImageBuilder;
  objectName(value: string): AnimatedImageBuilder;
  objectNameBind(expr: string): AnimatedImageBuilder;
  opacity(value: number): AnimatedImageBuilder;
  opacityBind(expr: string): AnimatedImageBuilder;
  palette(value: PaletteBuilder): AnimatedImageBuilder;
  paletteBind(expr: string): AnimatedImageBuilder;
  parent(value: ItemBuilder): AnimatedImageBuilder;
  parentBind(expr: string): AnimatedImageBuilder;
  paused(value: boolean): AnimatedImageBuilder;
  pausedBind(expr: string): AnimatedImageBuilder;
  playing(value: boolean): AnimatedImageBuilder;
  playingBind(expr: string): AnimatedImageBuilder;
  retainWhileLoading(value: boolean): AnimatedImageBuilder;
  retainWhileLoadingBind(expr: string): AnimatedImageBuilder;
  rotation(value: number): AnimatedImageBuilder;
  rotationBind(expr: string): AnimatedImageBuilder;
  scale(value: number): AnimatedImageBuilder;
  scaleBind(expr: string): AnimatedImageBuilder;
  smooth(value: boolean): AnimatedImageBuilder;
  smoothBind(expr: string): AnimatedImageBuilder;
  source(value: QmlUrl): AnimatedImageBuilder;
  sourceBind(expr: string): AnimatedImageBuilder;
  sourceClipRect(value: QmlRect): AnimatedImageBuilder;
  sourceClipRectBind(expr: string): AnimatedImageBuilder;
  sourceSize(value: QmlSize): AnimatedImageBuilder;
  sourceSizeBind(expr: string): AnimatedImageBuilder;
  speed(value: number): AnimatedImageBuilder;
  speedBind(expr: string): AnimatedImageBuilder;
  state(value: string): AnimatedImageBuilder;
  stateBind(expr: string): AnimatedImageBuilder;
  transformOrigin(value: QmlValue): AnimatedImageBuilder;
  transformOriginBind(expr: string): AnimatedImageBuilder;
  verticalAlignment(value: QmlValue): AnimatedImageBuilder;
  verticalAlignmentBind(expr: string): AnimatedImageBuilder;
  visible(value: boolean): AnimatedImageBuilder;
  visibleBind(expr: string): AnimatedImageBuilder;
  width(value: number): AnimatedImageBuilder;
  widthBind(expr: string): AnimatedImageBuilder;
  x(value: number): AnimatedImageBuilder;
  xBind(expr: string): AnimatedImageBuilder;
  y(value: number): AnimatedImageBuilder;
  yBind(expr: string): AnimatedImageBuilder;
  z(value: number): AnimatedImageBuilder;
  zBind(expr: string): AnimatedImageBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): AnimatedImageBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): AnimatedImageBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): AnimatedImageBuilder;
  onAsynchronousChanged(handler: () => void): AnimatedImageBuilder;
  onAutoTransformChanged(handler: () => void): AnimatedImageBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): AnimatedImageBuilder;
  onCacheChanged(handler: () => void): AnimatedImageBuilder;
  onChildrenChanged(handler: () => void): AnimatedImageBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): AnimatedImageBuilder;
  onClipChanged(handler: (arg0: boolean) => void): AnimatedImageBuilder;
  onColorSpaceChanged(handler: () => void): AnimatedImageBuilder;
  onContainmentMaskChanged(handler: () => void): AnimatedImageBuilder;
  onCurrentFrameChanged(handler: () => void): AnimatedImageBuilder;
  onEnabledChanged(handler: () => void): AnimatedImageBuilder;
  onFillModeChanged(handler: () => void): AnimatedImageBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): AnimatedImageBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): AnimatedImageBuilder;
  onFrameChanged(handler: () => void): AnimatedImageBuilder;
  onFrameCountChanged(handler: () => void): AnimatedImageBuilder;
  onHeightChanged(handler: () => void): AnimatedImageBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): AnimatedImageBuilder;
  onImplicitHeightChanged(handler: () => void): AnimatedImageBuilder;
  onImplicitWidthChanged(handler: () => void): AnimatedImageBuilder;
  onMipmapChanged(handler: (arg0: boolean) => void): AnimatedImageBuilder;
  onMirrorChanged(handler: () => void): AnimatedImageBuilder;
  onMirrorVerticallyChanged(handler: () => void): AnimatedImageBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AnimatedImageBuilder;
  onOpacityChanged(handler: () => void): AnimatedImageBuilder;
  onPaintedGeometryChanged(handler: () => void): AnimatedImageBuilder;
  onPaletteChanged(handler: () => void): AnimatedImageBuilder;
  onPaletteCreated(handler: () => void): AnimatedImageBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): AnimatedImageBuilder;
  onPausedChanged(handler: () => void): AnimatedImageBuilder;
  onPlayingChanged(handler: () => void): AnimatedImageBuilder;
  onProgressChanged(handler: (progress: number) => void): AnimatedImageBuilder;
  onRetainWhileLoadingChanged(handler: () => void): AnimatedImageBuilder;
  onRotationChanged(handler: () => void): AnimatedImageBuilder;
  onScaleChanged(handler: () => void): AnimatedImageBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): AnimatedImageBuilder;
  onSourceChanged(handler: (arg0: QmlUrl) => void): AnimatedImageBuilder;
  onSourceClipRectChanged(handler: () => void): AnimatedImageBuilder;
  onSourceSizeChanged(handler: () => void): AnimatedImageBuilder;
  onSpeedChanged(handler: () => void): AnimatedImageBuilder;
  onStateChanged(handler: (arg0: string) => void): AnimatedImageBuilder;
  onStatusChanged(handler: (arg0: QmlValue) => void): AnimatedImageBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): AnimatedImageBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): AnimatedImageBuilder;
  onVisibleChanged(handler: () => void): AnimatedImageBuilder;
  onVisibleChildrenChanged(handler: () => void): AnimatedImageBuilder;
  onWidthChanged(handler: () => void): AnimatedImageBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): AnimatedImageBuilder;
  onXChanged(handler: () => void): AnimatedImageBuilder;
  onYChanged(handler: () => void): AnimatedImageBuilder;
  onZChanged(handler: () => void): AnimatedImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AnimatedImageBuilder;
  layer(setup: (b: LayerBuilder) => void): AnimatedImageBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): AnimatedImageBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): AnimatedImageBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): AnimatedImageBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): AnimatedImageBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): AnimatedImageBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): AnimatedImageBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): AnimatedImageBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): AnimatedImageBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): AnimatedImageBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): AnimatedImageBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): AnimatedImageBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): AnimatedImageBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): AnimatedImageBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): AnimatedImageBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): AnimatedImageBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): AnimatedImageBuilder;
}

export function AnimatedImage(): AnimatedImageBuilder {
  return new DslBuilderImpl('AnimatedImage') as unknown as AnimatedImageBuilder;
}

export namespace AnimatedImage {
  export namespace FillMode {
    export const Stretch = createEnumToken('AnimatedImage', 'FillMode', 'Stretch');
    export const PreserveAspectFit = createEnumToken(
      'AnimatedImage',
      'FillMode',
      'PreserveAspectFit',
    );
    export const PreserveAspectCrop = createEnumToken(
      'AnimatedImage',
      'FillMode',
      'PreserveAspectCrop',
    );
    export const Tile = createEnumToken('AnimatedImage', 'FillMode', 'Tile');
    export const TileVertically = createEnumToken('AnimatedImage', 'FillMode', 'TileVertically');
    export const TileHorizontally = createEnumToken(
      'AnimatedImage',
      'FillMode',
      'TileHorizontally',
    );
    export const Pad = createEnumToken('AnimatedImage', 'FillMode', 'Pad');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AnimatedImage',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AnimatedImage',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('AnimatedImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('AnimatedImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('AnimatedImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('AnimatedImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'AnimatedImage',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('AnimatedImage', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('AnimatedImage', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('AnimatedImage', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AnimatedImage',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('AnimatedImage', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('AnimatedImage', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken(
      'AnimatedImage',
      'LoadPixmapOptions',
      'UseProviderOptions',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('AnimatedImage', 'Status', 'Null');
    export const Ready = createEnumToken('AnimatedImage', 'Status', 'Ready');
    export const Loading = createEnumToken('AnimatedImage', 'Status', 'Loading');
    export const Error = createEnumToken('AnimatedImage', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AnimatedImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AnimatedImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AnimatedImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AnimatedImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AnimatedImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AnimatedImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AnimatedImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AnimatedImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('AnimatedImage', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('AnimatedImage', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('AnimatedImage', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('AnimatedImage', 'VAlignment', 'AlignVCenter');
  }
}
