// AUTO-GENERATED — DO NOT EDIT
// Type: IconImage
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlRect, QmlSize, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface IconImageBuilder {
  id(id: string): IconImageBuilder;
  child(obj: QmlObjectBuilder): IconImageBuilder;

  activeFocusOnTab(value: boolean): IconImageBuilder;
  activeFocusOnTabBind(expr: string): IconImageBuilder;
  antialiasing(value: boolean): IconImageBuilder;
  antialiasingBind(expr: string): IconImageBuilder;
  asynchronous(value: boolean): IconImageBuilder;
  asynchronousBind(expr: string): IconImageBuilder;
  autoTransform(value: boolean): IconImageBuilder;
  autoTransformBind(expr: string): IconImageBuilder;
  baselineOffset(value: number): IconImageBuilder;
  baselineOffsetBind(expr: string): IconImageBuilder;
  cache(value: boolean): IconImageBuilder;
  cacheBind(expr: string): IconImageBuilder;
  clip(value: boolean): IconImageBuilder;
  clipBind(expr: string): IconImageBuilder;
  color(value: QmlColor): IconImageBuilder;
  colorBind(expr: string): IconImageBuilder;
  colorSpace(value: QmlValue): IconImageBuilder;
  colorSpaceBind(expr: string): IconImageBuilder;
  containmentMask(value: QtObjectBuilder): IconImageBuilder;
  containmentMaskBind(expr: string): IconImageBuilder;
  currentFrame(value: number): IconImageBuilder;
  currentFrameBind(expr: string): IconImageBuilder;
  enabled(value: boolean): IconImageBuilder;
  enabledBind(expr: string): IconImageBuilder;
  fillMode(value: QmlEnumToken): IconImageBuilder;
  fillModeBind(expr: string): IconImageBuilder;
  focus(value: boolean): IconImageBuilder;
  focusBind(expr: string): IconImageBuilder;
  focusPolicy(value: QmlEnumToken): IconImageBuilder;
  focusPolicyBind(expr: string): IconImageBuilder;
  height(value: number): IconImageBuilder;
  heightBind(expr: string): IconImageBuilder;
  horizontalAlignment(value: QmlEnumToken): IconImageBuilder;
  horizontalAlignmentBind(expr: string): IconImageBuilder;
  mipmap(value: boolean): IconImageBuilder;
  mipmapBind(expr: string): IconImageBuilder;
  mirror(value: boolean): IconImageBuilder;
  mirrorBind(expr: string): IconImageBuilder;
  mirrorVertically(value: boolean): IconImageBuilder;
  mirrorVerticallyBind(expr: string): IconImageBuilder;
  name(value: string): IconImageBuilder;
  nameBind(expr: string): IconImageBuilder;
  objectName(value: string): IconImageBuilder;
  objectNameBind(expr: string): IconImageBuilder;
  opacity(value: number): IconImageBuilder;
  opacityBind(expr: string): IconImageBuilder;
  palette(value: PaletteBuilder): IconImageBuilder;
  paletteBind(expr: string): IconImageBuilder;
  parent(value: ItemBuilder): IconImageBuilder;
  parentBind(expr: string): IconImageBuilder;
  retainWhileLoading(value: boolean): IconImageBuilder;
  retainWhileLoadingBind(expr: string): IconImageBuilder;
  rotation(value: number): IconImageBuilder;
  rotationBind(expr: string): IconImageBuilder;
  scale(value: number): IconImageBuilder;
  scaleBind(expr: string): IconImageBuilder;
  smooth(value: boolean): IconImageBuilder;
  smoothBind(expr: string): IconImageBuilder;
  source(value: QmlUrl): IconImageBuilder;
  sourceBind(expr: string): IconImageBuilder;
  sourceClipRect(value: QmlRect): IconImageBuilder;
  sourceClipRectBind(expr: string): IconImageBuilder;
  sourceSize(value: QmlSize): IconImageBuilder;
  sourceSizeBind(expr: string): IconImageBuilder;
  state(value: string): IconImageBuilder;
  stateBind(expr: string): IconImageBuilder;
  transformOrigin(value: QmlEnumToken): IconImageBuilder;
  transformOriginBind(expr: string): IconImageBuilder;
  verticalAlignment(value: QmlEnumToken): IconImageBuilder;
  verticalAlignmentBind(expr: string): IconImageBuilder;
  visible(value: boolean): IconImageBuilder;
  visibleBind(expr: string): IconImageBuilder;
  width(value: number): IconImageBuilder;
  widthBind(expr: string): IconImageBuilder;
  x(value: number): IconImageBuilder;
  xBind(expr: string): IconImageBuilder;
  y(value: number): IconImageBuilder;
  yBind(expr: string): IconImageBuilder;
  z(value: number): IconImageBuilder;
  zBind(expr: string): IconImageBuilder;
  onActiveFocusChanged(body: string): IconImageBuilder;
  onActiveFocusOnTabChanged(body: string): IconImageBuilder;
  onAntialiasingChanged(body: string): IconImageBuilder;
  onAsynchronousChanged(body: string): IconImageBuilder;
  onAutoTransformChanged(body: string): IconImageBuilder;
  onBaselineOffsetChanged(body: string): IconImageBuilder;
  onCacheChanged(body: string): IconImageBuilder;
  onChildrenChanged(body: string): IconImageBuilder;
  onChildrenRectChanged(body: string): IconImageBuilder;
  onClipChanged(body: string): IconImageBuilder;
  onColorChanged(body: string): IconImageBuilder;
  onColorSpaceChanged(body: string): IconImageBuilder;
  onContainmentMaskChanged(body: string): IconImageBuilder;
  onCurrentFrameChanged(body: string): IconImageBuilder;
  onEnabledChanged(body: string): IconImageBuilder;
  onFillModeChanged(body: string): IconImageBuilder;
  onFocusChanged(body: string): IconImageBuilder;
  onFocusPolicyChanged(body: string): IconImageBuilder;
  onFrameCountChanged(body: string): IconImageBuilder;
  onHeightChanged(body: string): IconImageBuilder;
  onHorizontalAlignmentChanged(body: string): IconImageBuilder;
  onImplicitHeightChanged(body: string): IconImageBuilder;
  onImplicitWidthChanged(body: string): IconImageBuilder;
  onMipmapChanged(body: string): IconImageBuilder;
  onMirrorChanged(body: string): IconImageBuilder;
  onMirrorVerticallyChanged(body: string): IconImageBuilder;
  onNameChanged(body: string): IconImageBuilder;
  onObjectNameChanged(body: string): IconImageBuilder;
  onOpacityChanged(body: string): IconImageBuilder;
  onPaintedGeometryChanged(body: string): IconImageBuilder;
  onPaletteChanged(body: string): IconImageBuilder;
  onPaletteCreated(body: string): IconImageBuilder;
  onParentChanged(body: string): IconImageBuilder;
  onProgressChanged(body: string): IconImageBuilder;
  onRetainWhileLoadingChanged(body: string): IconImageBuilder;
  onRotationChanged(body: string): IconImageBuilder;
  onScaleChanged(body: string): IconImageBuilder;
  onSmoothChanged(body: string): IconImageBuilder;
  onSourceChanged(body: string): IconImageBuilder;
  onSourceClipRectChanged(body: string): IconImageBuilder;
  onSourceSizeChanged(body: string): IconImageBuilder;
  onStateChanged(body: string): IconImageBuilder;
  onStatusChanged(body: string): IconImageBuilder;
  onTransformOriginChanged(body: string): IconImageBuilder;
  onVerticalAlignmentChanged(body: string): IconImageBuilder;
  onVisibleChanged(body: string): IconImageBuilder;
  onVisibleChildrenChanged(body: string): IconImageBuilder;
  onWidthChanged(body: string): IconImageBuilder;
  onWindowChanged(body: string): IconImageBuilder;
  onXChanged(body: string): IconImageBuilder;
  onYChanged(body: string): IconImageBuilder;
  onZChanged(body: string): IconImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): IconImageBuilder;
  layer(setup: (b: LayerBuilder) => void): IconImageBuilder;
}

const ICONIMAGE_META: TypeMetadata = {
  typeName: 'IconImage',
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
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillMode', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'mipmap', hasValue: true, hasBinding: true },
    { name: 'mirror', hasValue: true, hasBinding: true },
    { name: 'mirrorVertically', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
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
    { handlerName: 'onNameChanged', paramCount: 0 },
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
  attached: [
  ],
};

export function IconImage(): IconImageBuilder {
  return createFluentBuilder('IconImage', ICONIMAGE_META) as unknown as IconImageBuilder;
}

export namespace IconImage {
  export namespace FillMode {
    export const Stretch = createEnumToken('IconImage', 'FillMode', 'Stretch');
    export const PreserveAspectFit = createEnumToken('IconImage', 'FillMode', 'PreserveAspectFit');
    export const PreserveAspectCrop = createEnumToken('IconImage', 'FillMode', 'PreserveAspectCrop');
    export const Tile = createEnumToken('IconImage', 'FillMode', 'Tile');
    export const TileVertically = createEnumToken('IconImage', 'FillMode', 'TileVertically');
    export const TileHorizontally = createEnumToken('IconImage', 'FillMode', 'TileHorizontally');
    export const Pad = createEnumToken('IconImage', 'FillMode', 'Pad');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('IconImage', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('IconImage', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('IconImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('IconImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('IconImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('IconImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('IconImage', 'Flags', 'ItemObservesViewport');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('IconImage', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('IconImage', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('IconImage', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('IconImage', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('IconImage', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('IconImage', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('IconImage', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('IconImage', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('IconImage', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken('IconImage', 'LoadPixmapOptions', 'UseProviderOptions');
  }
  export namespace Status {
    export const Null = createEnumToken('IconImage', 'Status', 'Null');
    export const Ready = createEnumToken('IconImage', 'Status', 'Ready');
    export const Loading = createEnumToken('IconImage', 'Status', 'Loading');
    export const Error = createEnumToken('IconImage', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('IconImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('IconImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('IconImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('IconImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('IconImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('IconImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('IconImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('IconImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('IconImage', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('IconImage', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('IconImage', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('IconImage', 'VAlignment', 'AlignVCenter');
  }
}
