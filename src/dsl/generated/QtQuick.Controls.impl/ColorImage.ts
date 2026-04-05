// AUTO-GENERATED — DO NOT EDIT
// Type: ColorImage
// Generated from Qt 6.11.0

import type {
  QmlColor,
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
export interface ColorImageBuilder {
  id(id: string): ColorImageBuilder;
  child(obj: QmlObjectBuilder): ColorImageBuilder;

  activeFocusOnTab(value: boolean): ColorImageBuilder;
  activeFocusOnTabBind(expr: string): ColorImageBuilder;
  antialiasing(value: boolean): ColorImageBuilder;
  antialiasingBind(expr: string): ColorImageBuilder;
  asynchronous(value: boolean): ColorImageBuilder;
  asynchronousBind(expr: string): ColorImageBuilder;
  autoTransform(value: boolean): ColorImageBuilder;
  autoTransformBind(expr: string): ColorImageBuilder;
  baselineOffset(value: number): ColorImageBuilder;
  baselineOffsetBind(expr: string): ColorImageBuilder;
  cache(value: boolean): ColorImageBuilder;
  cacheBind(expr: string): ColorImageBuilder;
  clip(value: boolean): ColorImageBuilder;
  clipBind(expr: string): ColorImageBuilder;
  color(value: QmlColor): ColorImageBuilder;
  colorBind(expr: string): ColorImageBuilder;
  colorSpace(value: QmlValue): ColorImageBuilder;
  colorSpaceBind(expr: string): ColorImageBuilder;
  containmentMask(value: QtObjectBuilder): ColorImageBuilder;
  containmentMaskBind(expr: string): ColorImageBuilder;
  currentFrame(value: number): ColorImageBuilder;
  currentFrameBind(expr: string): ColorImageBuilder;
  defaultColor(value: QmlColor): ColorImageBuilder;
  defaultColorBind(expr: string): ColorImageBuilder;
  enabled(value: boolean): ColorImageBuilder;
  enabledBind(expr: string): ColorImageBuilder;
  fillMode(value: QmlEnumToken): ColorImageBuilder;
  fillModeBind(expr: string): ColorImageBuilder;
  focus(value: boolean): ColorImageBuilder;
  focusBind(expr: string): ColorImageBuilder;
  focusPolicy(value: QmlEnumToken): ColorImageBuilder;
  focusPolicyBind(expr: string): ColorImageBuilder;
  height(value: number): ColorImageBuilder;
  heightBind(expr: string): ColorImageBuilder;
  horizontalAlignment(value: QmlEnumToken): ColorImageBuilder;
  horizontalAlignmentBind(expr: string): ColorImageBuilder;
  mipmap(value: boolean): ColorImageBuilder;
  mipmapBind(expr: string): ColorImageBuilder;
  mirror(value: boolean): ColorImageBuilder;
  mirrorBind(expr: string): ColorImageBuilder;
  mirrorVertically(value: boolean): ColorImageBuilder;
  mirrorVerticallyBind(expr: string): ColorImageBuilder;
  objectName(value: string): ColorImageBuilder;
  objectNameBind(expr: string): ColorImageBuilder;
  opacity(value: number): ColorImageBuilder;
  opacityBind(expr: string): ColorImageBuilder;
  palette(value: PaletteBuilder): ColorImageBuilder;
  paletteBind(expr: string): ColorImageBuilder;
  parent(value: ItemBuilder): ColorImageBuilder;
  parentBind(expr: string): ColorImageBuilder;
  retainWhileLoading(value: boolean): ColorImageBuilder;
  retainWhileLoadingBind(expr: string): ColorImageBuilder;
  rotation(value: number): ColorImageBuilder;
  rotationBind(expr: string): ColorImageBuilder;
  scale(value: number): ColorImageBuilder;
  scaleBind(expr: string): ColorImageBuilder;
  smooth(value: boolean): ColorImageBuilder;
  smoothBind(expr: string): ColorImageBuilder;
  source(value: QmlUrl): ColorImageBuilder;
  sourceBind(expr: string): ColorImageBuilder;
  sourceClipRect(value: QmlRect): ColorImageBuilder;
  sourceClipRectBind(expr: string): ColorImageBuilder;
  sourceSize(value: QmlSize): ColorImageBuilder;
  sourceSizeBind(expr: string): ColorImageBuilder;
  state(value: string): ColorImageBuilder;
  stateBind(expr: string): ColorImageBuilder;
  transformOrigin(value: QmlEnumToken): ColorImageBuilder;
  transformOriginBind(expr: string): ColorImageBuilder;
  verticalAlignment(value: QmlEnumToken): ColorImageBuilder;
  verticalAlignmentBind(expr: string): ColorImageBuilder;
  visible(value: boolean): ColorImageBuilder;
  visibleBind(expr: string): ColorImageBuilder;
  width(value: number): ColorImageBuilder;
  widthBind(expr: string): ColorImageBuilder;
  x(value: number): ColorImageBuilder;
  xBind(expr: string): ColorImageBuilder;
  y(value: number): ColorImageBuilder;
  yBind(expr: string): ColorImageBuilder;
  z(value: number): ColorImageBuilder;
  zBind(expr: string): ColorImageBuilder;
  onActiveFocusChanged(body: string): ColorImageBuilder;
  onActiveFocusOnTabChanged(body: string): ColorImageBuilder;
  onAntialiasingChanged(body: string): ColorImageBuilder;
  onAsynchronousChanged(body: string): ColorImageBuilder;
  onAutoTransformChanged(body: string): ColorImageBuilder;
  onBaselineOffsetChanged(body: string): ColorImageBuilder;
  onCacheChanged(body: string): ColorImageBuilder;
  onChildrenChanged(body: string): ColorImageBuilder;
  onChildrenRectChanged(body: string): ColorImageBuilder;
  onClipChanged(body: string): ColorImageBuilder;
  onColorChanged(body: string): ColorImageBuilder;
  onColorSpaceChanged(body: string): ColorImageBuilder;
  onContainmentMaskChanged(body: string): ColorImageBuilder;
  onCurrentFrameChanged(body: string): ColorImageBuilder;
  onDefaultColorChanged(body: string): ColorImageBuilder;
  onEnabledChanged(body: string): ColorImageBuilder;
  onFillModeChanged(body: string): ColorImageBuilder;
  onFocusChanged(body: string): ColorImageBuilder;
  onFocusPolicyChanged(body: string): ColorImageBuilder;
  onFrameCountChanged(body: string): ColorImageBuilder;
  onHeightChanged(body: string): ColorImageBuilder;
  onHorizontalAlignmentChanged(body: string): ColorImageBuilder;
  onImplicitHeightChanged(body: string): ColorImageBuilder;
  onImplicitWidthChanged(body: string): ColorImageBuilder;
  onMipmapChanged(body: string): ColorImageBuilder;
  onMirrorChanged(body: string): ColorImageBuilder;
  onMirrorVerticallyChanged(body: string): ColorImageBuilder;
  onObjectNameChanged(body: string): ColorImageBuilder;
  onOpacityChanged(body: string): ColorImageBuilder;
  onPaintedGeometryChanged(body: string): ColorImageBuilder;
  onPaletteChanged(body: string): ColorImageBuilder;
  onPaletteCreated(body: string): ColorImageBuilder;
  onParentChanged(body: string): ColorImageBuilder;
  onProgressChanged(body: string): ColorImageBuilder;
  onRetainWhileLoadingChanged(body: string): ColorImageBuilder;
  onRotationChanged(body: string): ColorImageBuilder;
  onScaleChanged(body: string): ColorImageBuilder;
  onSmoothChanged(body: string): ColorImageBuilder;
  onSourceChanged(body: string): ColorImageBuilder;
  onSourceClipRectChanged(body: string): ColorImageBuilder;
  onSourceSizeChanged(body: string): ColorImageBuilder;
  onStateChanged(body: string): ColorImageBuilder;
  onStatusChanged(body: string): ColorImageBuilder;
  onTransformOriginChanged(body: string): ColorImageBuilder;
  onVerticalAlignmentChanged(body: string): ColorImageBuilder;
  onVisibleChanged(body: string): ColorImageBuilder;
  onVisibleChildrenChanged(body: string): ColorImageBuilder;
  onWidthChanged(body: string): ColorImageBuilder;
  onWindowChanged(body: string): ColorImageBuilder;
  onXChanged(body: string): ColorImageBuilder;
  onYChanged(body: string): ColorImageBuilder;
  onZChanged(body: string): ColorImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ColorImageBuilder;
  layer(setup: (b: LayerBuilder) => void): ColorImageBuilder;
}

const COLORIMAGE_META: TypeMetadata = {
  typeName: 'ColorImage',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'autoTransform', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'cache', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'colorSpace', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'currentFrame', hasValue: true, hasBinding: true },
    { name: 'defaultColor', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCacheChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onColorSpaceChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFrameChanged', paramCount: 0 },
    { handlerName: 'onDefaultColorChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillModeChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFrameCountChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
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
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onSourceClipRectChanged', paramCount: 0 },
    { handlerName: 'onSourceSizeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
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

export function ColorImage(): ColorImageBuilder {
  return createFluentBuilder('ColorImage', COLORIMAGE_META) as unknown as ColorImageBuilder;
}

export namespace ColorImage {
  export namespace FillMode {
    export const Stretch = createEnumToken('ColorImage', 'FillMode', 'Stretch');
    export const PreserveAspectFit = createEnumToken('ColorImage', 'FillMode', 'PreserveAspectFit');
    export const PreserveAspectCrop = createEnumToken(
      'ColorImage',
      'FillMode',
      'PreserveAspectCrop',
    );
    export const Tile = createEnumToken('ColorImage', 'FillMode', 'Tile');
    export const TileVertically = createEnumToken('ColorImage', 'FillMode', 'TileVertically');
    export const TileHorizontally = createEnumToken('ColorImage', 'FillMode', 'TileHorizontally');
    export const Pad = createEnumToken('ColorImage', 'FillMode', 'Pad');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ColorImage',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ColorImage',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ColorImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ColorImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ColorImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ColorImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ColorImage',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('ColorImage', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('ColorImage', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('ColorImage', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ColorImage', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ColorImage',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('ColorImage', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('ColorImage', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken(
      'ColorImage',
      'LoadPixmapOptions',
      'UseProviderOptions',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('ColorImage', 'Status', 'Null');
    export const Ready = createEnumToken('ColorImage', 'Status', 'Ready');
    export const Loading = createEnumToken('ColorImage', 'Status', 'Loading');
    export const Error = createEnumToken('ColorImage', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ColorImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ColorImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ColorImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ColorImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ColorImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ColorImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ColorImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ColorImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ColorImage', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('ColorImage', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('ColorImage', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('ColorImage', 'VAlignment', 'AlignVCenter');
  }
}
