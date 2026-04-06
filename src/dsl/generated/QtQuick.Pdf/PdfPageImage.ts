// AUTO-GENERATED — DO NOT EDIT
// Type: PdfPageImage
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
import type { PdfDocumentBuilder } from './PdfDocument.js';
export interface PdfPageImageBuilder {
  id(id: string): PdfPageImageBuilder;
  child(obj: QmlObjectBuilder): PdfPageImageBuilder;
  children(...objs: QmlObjectBuilder[]): PdfPageImageBuilder;

  activeFocusOnTab(value: boolean): PdfPageImageBuilder;
  activeFocusOnTabBind(expr: string): PdfPageImageBuilder;
  antialiasing(value: boolean): PdfPageImageBuilder;
  antialiasingBind(expr: string): PdfPageImageBuilder;
  asynchronous(value: boolean): PdfPageImageBuilder;
  asynchronousBind(expr: string): PdfPageImageBuilder;
  autoTransform(value: boolean): PdfPageImageBuilder;
  autoTransformBind(expr: string): PdfPageImageBuilder;
  baselineOffset(value: number): PdfPageImageBuilder;
  baselineOffsetBind(expr: string): PdfPageImageBuilder;
  cache(value: boolean): PdfPageImageBuilder;
  cacheBind(expr: string): PdfPageImageBuilder;
  clip(value: boolean): PdfPageImageBuilder;
  clipBind(expr: string): PdfPageImageBuilder;
  colorSpace(value: QmlValue): PdfPageImageBuilder;
  colorSpaceBind(expr: string): PdfPageImageBuilder;
  containmentMask(value: QtObjectBuilder): PdfPageImageBuilder;
  containmentMaskBind(expr: string): PdfPageImageBuilder;
  currentFrame(value: number): PdfPageImageBuilder;
  currentFrameBind(expr: string): PdfPageImageBuilder;
  document(value: PdfDocumentBuilder): PdfPageImageBuilder;
  documentBind(expr: string): PdfPageImageBuilder;
  enabled(value: boolean): PdfPageImageBuilder;
  enabledBind(expr: string): PdfPageImageBuilder;
  fillMode(value: QmlEnumToken): PdfPageImageBuilder;
  fillModeBind(expr: string): PdfPageImageBuilder;
  focus(value: boolean): PdfPageImageBuilder;
  focusBind(expr: string): PdfPageImageBuilder;
  focusPolicy(value: QmlEnumToken): PdfPageImageBuilder;
  focusPolicyBind(expr: string): PdfPageImageBuilder;
  height(value: number): PdfPageImageBuilder;
  heightBind(expr: string): PdfPageImageBuilder;
  horizontalAlignment(value: QmlEnumToken): PdfPageImageBuilder;
  horizontalAlignmentBind(expr: string): PdfPageImageBuilder;
  mipmap(value: boolean): PdfPageImageBuilder;
  mipmapBind(expr: string): PdfPageImageBuilder;
  mirror(value: boolean): PdfPageImageBuilder;
  mirrorBind(expr: string): PdfPageImageBuilder;
  mirrorVertically(value: boolean): PdfPageImageBuilder;
  mirrorVerticallyBind(expr: string): PdfPageImageBuilder;
  objectName(value: string): PdfPageImageBuilder;
  objectNameBind(expr: string): PdfPageImageBuilder;
  opacity(value: number): PdfPageImageBuilder;
  opacityBind(expr: string): PdfPageImageBuilder;
  palette(value: PaletteBuilder): PdfPageImageBuilder;
  paletteBind(expr: string): PdfPageImageBuilder;
  parent(value: ItemBuilder): PdfPageImageBuilder;
  parentBind(expr: string): PdfPageImageBuilder;
  retainWhileLoading(value: boolean): PdfPageImageBuilder;
  retainWhileLoadingBind(expr: string): PdfPageImageBuilder;
  rotation(value: number): PdfPageImageBuilder;
  rotationBind(expr: string): PdfPageImageBuilder;
  scale(value: number): PdfPageImageBuilder;
  scaleBind(expr: string): PdfPageImageBuilder;
  smooth(value: boolean): PdfPageImageBuilder;
  smoothBind(expr: string): PdfPageImageBuilder;
  source(value: QmlUrl): PdfPageImageBuilder;
  sourceBind(expr: string): PdfPageImageBuilder;
  sourceClipRect(value: QmlRect): PdfPageImageBuilder;
  sourceClipRectBind(expr: string): PdfPageImageBuilder;
  sourceSize(value: QmlSize): PdfPageImageBuilder;
  sourceSizeBind(expr: string): PdfPageImageBuilder;
  state(value: string): PdfPageImageBuilder;
  stateBind(expr: string): PdfPageImageBuilder;
  transformOrigin(value: QmlEnumToken): PdfPageImageBuilder;
  transformOriginBind(expr: string): PdfPageImageBuilder;
  verticalAlignment(value: QmlEnumToken): PdfPageImageBuilder;
  verticalAlignmentBind(expr: string): PdfPageImageBuilder;
  visible(value: boolean): PdfPageImageBuilder;
  visibleBind(expr: string): PdfPageImageBuilder;
  width(value: number): PdfPageImageBuilder;
  widthBind(expr: string): PdfPageImageBuilder;
  x(value: number): PdfPageImageBuilder;
  xBind(expr: string): PdfPageImageBuilder;
  y(value: number): PdfPageImageBuilder;
  yBind(expr: string): PdfPageImageBuilder;
  z(value: number): PdfPageImageBuilder;
  zBind(expr: string): PdfPageImageBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onAutoTransformChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onCacheChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onClipChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onColorSpaceChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onCurrentFrameChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onDocumentChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onFillModeChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onFrameCountChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onHorizontalAlignmentChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onMipmapChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onMirrorChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onMirrorVerticallyChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onPaintedGeometryChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onProgressChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onRetainWhileLoadingChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onSourceClipRectChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onSourceSizeChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onStateChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onVerticalAlignmentChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onXChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onYChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  onZChanged(handler: DslSignalHandlerValue): PdfPageImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PdfPageImageBuilder;
  layer(setup: (b: LayerBuilder) => void): PdfPageImageBuilder;
}

const PDFPAGEIMAGE_META: TypeMetadata = {
  typeName: 'PdfPageImage',
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
    { name: 'document', hasValue: true, hasBinding: true },
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
    { handlerName: 'onColorSpaceChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFrameChanged', paramCount: 0 },
    { handlerName: 'onDocumentChanged', paramCount: 0 },
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

export function PdfPageImage(): PdfPageImageBuilder {
  return createFluentBuilder('PdfPageImage', PDFPAGEIMAGE_META) as unknown as PdfPageImageBuilder;
}

export namespace PdfPageImage {
  export namespace FillMode {
    export const Stretch = createEnumToken('PdfPageImage', 'FillMode', 'Stretch');
    export const PreserveAspectFit = createEnumToken(
      'PdfPageImage',
      'FillMode',
      'PreserveAspectFit',
    );
    export const PreserveAspectCrop = createEnumToken(
      'PdfPageImage',
      'FillMode',
      'PreserveAspectCrop',
    );
    export const Tile = createEnumToken('PdfPageImage', 'FillMode', 'Tile');
    export const TileVertically = createEnumToken('PdfPageImage', 'FillMode', 'TileVertically');
    export const TileHorizontally = createEnumToken('PdfPageImage', 'FillMode', 'TileHorizontally');
    export const Pad = createEnumToken('PdfPageImage', 'FillMode', 'Pad');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PdfPageImage',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PdfPageImage',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PdfPageImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PdfPageImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PdfPageImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PdfPageImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PdfPageImage',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('PdfPageImage', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('PdfPageImage', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('PdfPageImage', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('PdfPageImage', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PdfPageImage',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('PdfPageImage', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('PdfPageImage', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken(
      'PdfPageImage',
      'LoadPixmapOptions',
      'UseProviderOptions',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('PdfPageImage', 'Status', 'Null');
    export const Ready = createEnumToken('PdfPageImage', 'Status', 'Ready');
    export const Loading = createEnumToken('PdfPageImage', 'Status', 'Loading');
    export const Error = createEnumToken('PdfPageImage', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PdfPageImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PdfPageImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PdfPageImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PdfPageImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PdfPageImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PdfPageImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PdfPageImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PdfPageImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PdfPageImage', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('PdfPageImage', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('PdfPageImage', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('PdfPageImage', 'VAlignment', 'AlignVCenter');
  }
}
