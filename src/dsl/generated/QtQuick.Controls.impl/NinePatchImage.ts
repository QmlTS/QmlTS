// AUTO-GENERATED — DO NOT EDIT
// Type: NinePatchImage
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlRect,
  QmlSize,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface NinePatchImageBuilder {
  id(id: string): NinePatchImageBuilder;
  child(obj: QmlObjectBuilder): NinePatchImageBuilder;

  activeFocusOnTab(value: boolean): NinePatchImageBuilder;
  activeFocusOnTabBind(expr: string): NinePatchImageBuilder;
  antialiasing(value: boolean): NinePatchImageBuilder;
  antialiasingBind(expr: string): NinePatchImageBuilder;
  asynchronous(value: boolean): NinePatchImageBuilder;
  asynchronousBind(expr: string): NinePatchImageBuilder;
  autoTransform(value: boolean): NinePatchImageBuilder;
  autoTransformBind(expr: string): NinePatchImageBuilder;
  baselineOffset(value: number): NinePatchImageBuilder;
  baselineOffsetBind(expr: string): NinePatchImageBuilder;
  cache(value: boolean): NinePatchImageBuilder;
  cacheBind(expr: string): NinePatchImageBuilder;
  clip(value: boolean): NinePatchImageBuilder;
  clipBind(expr: string): NinePatchImageBuilder;
  colorSpace(value: QmlValue): NinePatchImageBuilder;
  colorSpaceBind(expr: string): NinePatchImageBuilder;
  containmentMask(value: QtObjectBuilder): NinePatchImageBuilder;
  containmentMaskBind(expr: string): NinePatchImageBuilder;
  currentFrame(value: number): NinePatchImageBuilder;
  currentFrameBind(expr: string): NinePatchImageBuilder;
  enabled(value: boolean): NinePatchImageBuilder;
  enabledBind(expr: string): NinePatchImageBuilder;
  fillMode(value: QmlEnumToken): NinePatchImageBuilder;
  fillModeBind(expr: string): NinePatchImageBuilder;
  focus(value: boolean): NinePatchImageBuilder;
  focusBind(expr: string): NinePatchImageBuilder;
  focusPolicy(value: QmlEnumToken): NinePatchImageBuilder;
  focusPolicyBind(expr: string): NinePatchImageBuilder;
  height(value: number): NinePatchImageBuilder;
  heightBind(expr: string): NinePatchImageBuilder;
  horizontalAlignment(value: QmlEnumToken): NinePatchImageBuilder;
  horizontalAlignmentBind(expr: string): NinePatchImageBuilder;
  mipmap(value: boolean): NinePatchImageBuilder;
  mipmapBind(expr: string): NinePatchImageBuilder;
  mirror(value: boolean): NinePatchImageBuilder;
  mirrorBind(expr: string): NinePatchImageBuilder;
  mirrorVertically(value: boolean): NinePatchImageBuilder;
  mirrorVerticallyBind(expr: string): NinePatchImageBuilder;
  objectName(value: string): NinePatchImageBuilder;
  objectNameBind(expr: string): NinePatchImageBuilder;
  opacity(value: number): NinePatchImageBuilder;
  opacityBind(expr: string): NinePatchImageBuilder;
  palette(value: PaletteBuilder): NinePatchImageBuilder;
  paletteBind(expr: string): NinePatchImageBuilder;
  parent(value: ItemBuilder): NinePatchImageBuilder;
  parentBind(expr: string): NinePatchImageBuilder;
  retainWhileLoading(value: boolean): NinePatchImageBuilder;
  retainWhileLoadingBind(expr: string): NinePatchImageBuilder;
  rotation(value: number): NinePatchImageBuilder;
  rotationBind(expr: string): NinePatchImageBuilder;
  scale(value: number): NinePatchImageBuilder;
  scaleBind(expr: string): NinePatchImageBuilder;
  smooth(value: boolean): NinePatchImageBuilder;
  smoothBind(expr: string): NinePatchImageBuilder;
  source(value: QmlUrl): NinePatchImageBuilder;
  sourceBind(expr: string): NinePatchImageBuilder;
  sourceClipRect(value: QmlRect): NinePatchImageBuilder;
  sourceClipRectBind(expr: string): NinePatchImageBuilder;
  sourceSize(value: QmlSize): NinePatchImageBuilder;
  sourceSizeBind(expr: string): NinePatchImageBuilder;
  state(value: string): NinePatchImageBuilder;
  stateBind(expr: string): NinePatchImageBuilder;
  transformOrigin(value: QmlEnumToken): NinePatchImageBuilder;
  transformOriginBind(expr: string): NinePatchImageBuilder;
  verticalAlignment(value: QmlEnumToken): NinePatchImageBuilder;
  verticalAlignmentBind(expr: string): NinePatchImageBuilder;
  visible(value: boolean): NinePatchImageBuilder;
  visibleBind(expr: string): NinePatchImageBuilder;
  width(value: number): NinePatchImageBuilder;
  widthBind(expr: string): NinePatchImageBuilder;
  x(value: number): NinePatchImageBuilder;
  xBind(expr: string): NinePatchImageBuilder;
  y(value: number): NinePatchImageBuilder;
  yBind(expr: string): NinePatchImageBuilder;
  z(value: number): NinePatchImageBuilder;
  zBind(expr: string): NinePatchImageBuilder;
  onActiveFocusChanged(body: string): NinePatchImageBuilder;
  onActiveFocusOnTabChanged(body: string): NinePatchImageBuilder;
  onAntialiasingChanged(body: string): NinePatchImageBuilder;
  onAsynchronousChanged(body: string): NinePatchImageBuilder;
  onAutoTransformChanged(body: string): NinePatchImageBuilder;
  onBaselineOffsetChanged(body: string): NinePatchImageBuilder;
  onBottomInsetChanged(body: string): NinePatchImageBuilder;
  onBottomPaddingChanged(body: string): NinePatchImageBuilder;
  onCacheChanged(body: string): NinePatchImageBuilder;
  onChildrenChanged(body: string): NinePatchImageBuilder;
  onChildrenRectChanged(body: string): NinePatchImageBuilder;
  onClipChanged(body: string): NinePatchImageBuilder;
  onColorSpaceChanged(body: string): NinePatchImageBuilder;
  onContainmentMaskChanged(body: string): NinePatchImageBuilder;
  onCurrentFrameChanged(body: string): NinePatchImageBuilder;
  onEnabledChanged(body: string): NinePatchImageBuilder;
  onFillModeChanged(body: string): NinePatchImageBuilder;
  onFocusChanged(body: string): NinePatchImageBuilder;
  onFocusPolicyChanged(body: string): NinePatchImageBuilder;
  onFrameCountChanged(body: string): NinePatchImageBuilder;
  onHeightChanged(body: string): NinePatchImageBuilder;
  onHorizontalAlignmentChanged(body: string): NinePatchImageBuilder;
  onImplicitHeightChanged(body: string): NinePatchImageBuilder;
  onImplicitWidthChanged(body: string): NinePatchImageBuilder;
  onLeftInsetChanged(body: string): NinePatchImageBuilder;
  onLeftPaddingChanged(body: string): NinePatchImageBuilder;
  onMipmapChanged(body: string): NinePatchImageBuilder;
  onMirrorChanged(body: string): NinePatchImageBuilder;
  onMirrorVerticallyChanged(body: string): NinePatchImageBuilder;
  onObjectNameChanged(body: string): NinePatchImageBuilder;
  onOpacityChanged(body: string): NinePatchImageBuilder;
  onPaintedGeometryChanged(body: string): NinePatchImageBuilder;
  onPaletteChanged(body: string): NinePatchImageBuilder;
  onPaletteCreated(body: string): NinePatchImageBuilder;
  onParentChanged(body: string): NinePatchImageBuilder;
  onProgressChanged(body: string): NinePatchImageBuilder;
  onRetainWhileLoadingChanged(body: string): NinePatchImageBuilder;
  onRightInsetChanged(body: string): NinePatchImageBuilder;
  onRightPaddingChanged(body: string): NinePatchImageBuilder;
  onRotationChanged(body: string): NinePatchImageBuilder;
  onScaleChanged(body: string): NinePatchImageBuilder;
  onSmoothChanged(body: string): NinePatchImageBuilder;
  onSourceChanged(body: string): NinePatchImageBuilder;
  onSourceClipRectChanged(body: string): NinePatchImageBuilder;
  onSourceSizeChanged(body: string): NinePatchImageBuilder;
  onStateChanged(body: string): NinePatchImageBuilder;
  onStatusChanged(body: string): NinePatchImageBuilder;
  onTopInsetChanged(body: string): NinePatchImageBuilder;
  onTopPaddingChanged(body: string): NinePatchImageBuilder;
  onTransformOriginChanged(body: string): NinePatchImageBuilder;
  onVerticalAlignmentChanged(body: string): NinePatchImageBuilder;
  onVisibleChanged(body: string): NinePatchImageBuilder;
  onVisibleChildrenChanged(body: string): NinePatchImageBuilder;
  onWidthChanged(body: string): NinePatchImageBuilder;
  onWindowChanged(body: string): NinePatchImageBuilder;
  onXChanged(body: string): NinePatchImageBuilder;
  onYChanged(body: string): NinePatchImageBuilder;
  onZChanged(body: string): NinePatchImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): NinePatchImageBuilder;
  layer(setup: (b: LayerBuilder) => void): NinePatchImageBuilder;
}

const NINEPATCHIMAGE_META: TypeMetadata = {
  typeName: 'NinePatchImage',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'autoTransform', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'cache', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'colorSpace', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'currentFrame', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillMode', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'mipmap', hasValue: true, hasBinding: true },
    { name: 'mirror', hasValue: true, hasBinding: true },
    { name: 'mirrorVertically', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'retainWhileLoading', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'sourceClipRect', hasValue: true, hasBinding: true },
    { name: 'sourceSize', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalAlignment', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onAutoTransformChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onCacheChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorSpaceChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFrameChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillModeChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFrameCountChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onMipmapChanged', paramCount: 1 },
    { handlerName: 'onMirrorChanged', paramCount: 0 },
    { handlerName: 'onMirrorVerticallyChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaintedGeometryChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onProgressChanged', paramCount: 1 },
    { handlerName: 'onRetainWhileLoadingChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onSourceClipRectChanged', paramCount: 0 },
    { handlerName: 'onSourceSizeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'anchors',
      groupName: 'anchors',
      properties: [
        { name: 'alignWhenCentered', hasValue: true, hasBinding: true },
        { name: 'baseline', hasValue: true, hasBinding: true },
        { name: 'baselineOffset', hasValue: true, hasBinding: true },
        { name: 'bottom', hasValue: true, hasBinding: true },
        { name: 'bottomMargin', hasValue: true, hasBinding: true },
        { name: 'centerIn', hasValue: true, hasBinding: true },
        { name: 'fill', hasValue: true, hasBinding: true },
        { name: 'horizontalCenter', hasValue: true, hasBinding: true },
        { name: 'horizontalCenterOffset', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'leftMargin', hasValue: true, hasBinding: true },
        { name: 'margins', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'rightMargin', hasValue: true, hasBinding: true },
        { name: 'top', hasValue: true, hasBinding: true },
        { name: 'topMargin', hasValue: true, hasBinding: true },
        { name: 'verticalCenter', hasValue: true, hasBinding: true },
        { name: 'verticalCenterOffset', hasValue: true, hasBinding: true },
      ],
    },
    {
      methodName: 'layer',
      groupName: 'layer',
      properties: [
        { name: 'effect', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'format', hasValue: true, hasBinding: true },
        { name: 'live', hasValue: true, hasBinding: true },
        { name: 'mipmap', hasValue: true, hasBinding: true },
        { name: 'samplerName', hasValue: true, hasBinding: true },
        { name: 'samples', hasValue: true, hasBinding: true },
        { name: 'smooth', hasValue: true, hasBinding: true },
        { name: 'sourceRect', hasValue: true, hasBinding: true },
        { name: 'textureMirroring', hasValue: true, hasBinding: true },
        { name: 'textureSize', hasValue: true, hasBinding: true },
        { name: 'wrapMode', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [],
};

export function NinePatchImage(): NinePatchImageBuilder {
  return createFluentBuilder(
    'NinePatchImage',
    NINEPATCHIMAGE_META,
  ) as unknown as NinePatchImageBuilder;
}

export namespace NinePatchImage {
  export namespace FillMode {
    export const Stretch = createEnumToken('NinePatchImage', 'FillMode', 'Stretch');
    export const PreserveAspectFit = createEnumToken(
      'NinePatchImage',
      'FillMode',
      'PreserveAspectFit',
    );
    export const PreserveAspectCrop = createEnumToken(
      'NinePatchImage',
      'FillMode',
      'PreserveAspectCrop',
    );
    export const Tile = createEnumToken('NinePatchImage', 'FillMode', 'Tile');
    export const TileVertically = createEnumToken('NinePatchImage', 'FillMode', 'TileVertically');
    export const TileHorizontally = createEnumToken(
      'NinePatchImage',
      'FillMode',
      'TileHorizontally',
    );
    export const Pad = createEnumToken('NinePatchImage', 'FillMode', 'Pad');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'NinePatchImage',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'NinePatchImage',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('NinePatchImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('NinePatchImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('NinePatchImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('NinePatchImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'NinePatchImage',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('NinePatchImage', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('NinePatchImage', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('NinePatchImage', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'NinePatchImage',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('NinePatchImage', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('NinePatchImage', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken(
      'NinePatchImage',
      'LoadPixmapOptions',
      'UseProviderOptions',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('NinePatchImage', 'Status', 'Null');
    export const Ready = createEnumToken('NinePatchImage', 'Status', 'Ready');
    export const Loading = createEnumToken('NinePatchImage', 'Status', 'Loading');
    export const Error = createEnumToken('NinePatchImage', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('NinePatchImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('NinePatchImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('NinePatchImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('NinePatchImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('NinePatchImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('NinePatchImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('NinePatchImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('NinePatchImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('NinePatchImage', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('NinePatchImage', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('NinePatchImage', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('NinePatchImage', 'VAlignment', 'AlignVCenter');
  }
}
