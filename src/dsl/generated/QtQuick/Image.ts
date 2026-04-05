// AUTO-GENERATED — DO NOT EDIT
// Type: Image
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
export interface ImageBuilder {
  id(id: string): ImageBuilder;
  child(obj: QmlObjectBuilder): ImageBuilder;

  activeFocusOnTab(value: boolean): ImageBuilder;
  activeFocusOnTabBind(expr: string): ImageBuilder;
  antialiasing(value: boolean): ImageBuilder;
  antialiasingBind(expr: string): ImageBuilder;
  asynchronous(value: boolean): ImageBuilder;
  asynchronousBind(expr: string): ImageBuilder;
  autoTransform(value: boolean): ImageBuilder;
  autoTransformBind(expr: string): ImageBuilder;
  baselineOffset(value: number): ImageBuilder;
  baselineOffsetBind(expr: string): ImageBuilder;
  cache(value: boolean): ImageBuilder;
  cacheBind(expr: string): ImageBuilder;
  clip(value: boolean): ImageBuilder;
  clipBind(expr: string): ImageBuilder;
  colorSpace(value: QmlValue): ImageBuilder;
  colorSpaceBind(expr: string): ImageBuilder;
  containmentMask(value: QtObjectBuilder): ImageBuilder;
  containmentMaskBind(expr: string): ImageBuilder;
  currentFrame(value: number): ImageBuilder;
  currentFrameBind(expr: string): ImageBuilder;
  enabled(value: boolean): ImageBuilder;
  enabledBind(expr: string): ImageBuilder;
  fillMode(value: QmlValue): ImageBuilder;
  fillModeBind(expr: string): ImageBuilder;
  focus(value: boolean): ImageBuilder;
  focusBind(expr: string): ImageBuilder;
  focusPolicy(value: QmlValue): ImageBuilder;
  focusPolicyBind(expr: string): ImageBuilder;
  height(value: number): ImageBuilder;
  heightBind(expr: string): ImageBuilder;
  horizontalAlignment(value: QmlValue): ImageBuilder;
  horizontalAlignmentBind(expr: string): ImageBuilder;
  mipmap(value: boolean): ImageBuilder;
  mipmapBind(expr: string): ImageBuilder;
  mirror(value: boolean): ImageBuilder;
  mirrorBind(expr: string): ImageBuilder;
  mirrorVertically(value: boolean): ImageBuilder;
  mirrorVerticallyBind(expr: string): ImageBuilder;
  objectName(value: string): ImageBuilder;
  objectNameBind(expr: string): ImageBuilder;
  opacity(value: number): ImageBuilder;
  opacityBind(expr: string): ImageBuilder;
  palette(value: PaletteBuilder): ImageBuilder;
  paletteBind(expr: string): ImageBuilder;
  parent(value: ItemBuilder): ImageBuilder;
  parentBind(expr: string): ImageBuilder;
  retainWhileLoading(value: boolean): ImageBuilder;
  retainWhileLoadingBind(expr: string): ImageBuilder;
  rotation(value: number): ImageBuilder;
  rotationBind(expr: string): ImageBuilder;
  scale(value: number): ImageBuilder;
  scaleBind(expr: string): ImageBuilder;
  smooth(value: boolean): ImageBuilder;
  smoothBind(expr: string): ImageBuilder;
  source(value: QmlUrl): ImageBuilder;
  sourceBind(expr: string): ImageBuilder;
  sourceClipRect(value: QmlRect): ImageBuilder;
  sourceClipRectBind(expr: string): ImageBuilder;
  sourceSize(value: QmlSize): ImageBuilder;
  sourceSizeBind(expr: string): ImageBuilder;
  state(value: string): ImageBuilder;
  stateBind(expr: string): ImageBuilder;
  transformOrigin(value: QmlValue): ImageBuilder;
  transformOriginBind(expr: string): ImageBuilder;
  verticalAlignment(value: QmlValue): ImageBuilder;
  verticalAlignmentBind(expr: string): ImageBuilder;
  visible(value: boolean): ImageBuilder;
  visibleBind(expr: string): ImageBuilder;
  width(value: number): ImageBuilder;
  widthBind(expr: string): ImageBuilder;
  x(value: number): ImageBuilder;
  xBind(expr: string): ImageBuilder;
  y(value: number): ImageBuilder;
  yBind(expr: string): ImageBuilder;
  z(value: number): ImageBuilder;
  zBind(expr: string): ImageBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ImageBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ImageBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ImageBuilder;
  onAsynchronousChanged(handler: () => void): ImageBuilder;
  onAutoTransformChanged(handler: () => void): ImageBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): ImageBuilder;
  onCacheChanged(handler: () => void): ImageBuilder;
  onChildrenChanged(handler: () => void): ImageBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ImageBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ImageBuilder;
  onColorSpaceChanged(handler: () => void): ImageBuilder;
  onContainmentMaskChanged(handler: () => void): ImageBuilder;
  onCurrentFrameChanged(handler: () => void): ImageBuilder;
  onEnabledChanged(handler: () => void): ImageBuilder;
  onFillModeChanged(handler: () => void): ImageBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ImageBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ImageBuilder;
  onFrameCountChanged(handler: () => void): ImageBuilder;
  onHeightChanged(handler: () => void): ImageBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): ImageBuilder;
  onImplicitHeightChanged(handler: () => void): ImageBuilder;
  onImplicitWidthChanged(handler: () => void): ImageBuilder;
  onMipmapChanged(handler: (arg0: boolean) => void): ImageBuilder;
  onMirrorChanged(handler: () => void): ImageBuilder;
  onMirrorVerticallyChanged(handler: () => void): ImageBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ImageBuilder;
  onOpacityChanged(handler: () => void): ImageBuilder;
  onPaintedGeometryChanged(handler: () => void): ImageBuilder;
  onPaletteChanged(handler: () => void): ImageBuilder;
  onPaletteCreated(handler: () => void): ImageBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ImageBuilder;
  onProgressChanged(handler: (progress: number) => void): ImageBuilder;
  onRetainWhileLoadingChanged(handler: () => void): ImageBuilder;
  onRotationChanged(handler: () => void): ImageBuilder;
  onScaleChanged(handler: () => void): ImageBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ImageBuilder;
  onSourceChanged(handler: (arg0: QmlUrl) => void): ImageBuilder;
  onSourceClipRectChanged(handler: () => void): ImageBuilder;
  onSourceSizeChanged(handler: () => void): ImageBuilder;
  onStateChanged(handler: (arg0: string) => void): ImageBuilder;
  onStatusChanged(handler: (arg0: QmlValue) => void): ImageBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ImageBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): ImageBuilder;
  onVisibleChanged(handler: () => void): ImageBuilder;
  onVisibleChildrenChanged(handler: () => void): ImageBuilder;
  onWidthChanged(handler: () => void): ImageBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ImageBuilder;
  onXChanged(handler: () => void): ImageBuilder;
  onYChanged(handler: () => void): ImageBuilder;
  onZChanged(handler: () => void): ImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ImageBuilder;
  layer(setup: (b: LayerBuilder) => void): ImageBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ImageBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ImageBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ImageBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ImageBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ImageBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ImageBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ImageBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ImageBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ImageBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ImageBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ImageBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ImageBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ImageBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ImageBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ImageBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ImageBuilder;
}

export function Image(): ImageBuilder {
  return new DslBuilderImpl('Image') as unknown as ImageBuilder;
}

export namespace Image {
  export namespace FillMode {
    export const Stretch = createEnumToken('Image', 'FillMode', 'Stretch');
    export const PreserveAspectFit = createEnumToken('Image', 'FillMode', 'PreserveAspectFit');
    export const PreserveAspectCrop = createEnumToken('Image', 'FillMode', 'PreserveAspectCrop');
    export const Tile = createEnumToken('Image', 'FillMode', 'Tile');
    export const TileVertically = createEnumToken('Image', 'FillMode', 'TileVertically');
    export const TileHorizontally = createEnumToken('Image', 'FillMode', 'TileHorizontally');
    export const Pad = createEnumToken('Image', 'FillMode', 'Pad');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Image',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Image',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Image', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Image', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Image', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Image', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Image', 'Flags', 'ItemObservesViewport');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('Image', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('Image', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('Image', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Image',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Image',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Image', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Image',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('Image', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('Image', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken(
      'Image',
      'LoadPixmapOptions',
      'UseProviderOptions',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('Image', 'Status', 'Null');
    export const Ready = createEnumToken('Image', 'Status', 'Ready');
    export const Loading = createEnumToken('Image', 'Status', 'Loading');
    export const Error = createEnumToken('Image', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Image', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Image', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Image', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Image', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Image', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Image', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Image', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Image', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Image', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('Image', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('Image', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('Image', 'VAlignment', 'AlignVCenter');
  }
}
