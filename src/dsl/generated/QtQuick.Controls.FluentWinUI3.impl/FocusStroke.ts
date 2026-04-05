// AUTO-GENERATED — DO NOT EDIT
// Type: FocusStroke
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlSize, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface FocusStrokeBuilder {
  id(id: string): FocusStrokeBuilder;
  child(obj: QmlObjectBuilder): FocusStrokeBuilder;

  activeFocusOnTab(value: boolean): FocusStrokeBuilder;
  activeFocusOnTabBind(expr: string): FocusStrokeBuilder;
  antialiasing(value: boolean): FocusStrokeBuilder;
  antialiasingBind(expr: string): FocusStrokeBuilder;
  baselineOffset(value: number): FocusStrokeBuilder;
  baselineOffsetBind(expr: string): FocusStrokeBuilder;
  clip(value: boolean): FocusStrokeBuilder;
  clipBind(expr: string): FocusStrokeBuilder;
  color(value: QmlColor): FocusStrokeBuilder;
  colorBind(expr: string): FocusStrokeBuilder;
  containmentMask(value: QtObjectBuilder): FocusStrokeBuilder;
  containmentMaskBind(expr: string): FocusStrokeBuilder;
  contentsScale(value: number): FocusStrokeBuilder;
  contentsScaleBind(expr: string): FocusStrokeBuilder;
  contentsSize(value: QmlSize): FocusStrokeBuilder;
  contentsSizeBind(expr: string): FocusStrokeBuilder;
  enabled(value: boolean): FocusStrokeBuilder;
  enabledBind(expr: string): FocusStrokeBuilder;
  fillColor(value: QmlColor): FocusStrokeBuilder;
  fillColorBind(expr: string): FocusStrokeBuilder;
  focus(value: boolean): FocusStrokeBuilder;
  focusBind(expr: string): FocusStrokeBuilder;
  focusPolicy(value: QmlEnumToken): FocusStrokeBuilder;
  focusPolicyBind(expr: string): FocusStrokeBuilder;
  height(value: number): FocusStrokeBuilder;
  heightBind(expr: string): FocusStrokeBuilder;
  implicitHeight(value: number): FocusStrokeBuilder;
  implicitHeightBind(expr: string): FocusStrokeBuilder;
  implicitWidth(value: number): FocusStrokeBuilder;
  implicitWidthBind(expr: string): FocusStrokeBuilder;
  objectName(value: string): FocusStrokeBuilder;
  objectNameBind(expr: string): FocusStrokeBuilder;
  opacity(value: number): FocusStrokeBuilder;
  opacityBind(expr: string): FocusStrokeBuilder;
  palette(value: PaletteBuilder): FocusStrokeBuilder;
  paletteBind(expr: string): FocusStrokeBuilder;
  parent(value: ItemBuilder): FocusStrokeBuilder;
  parentBind(expr: string): FocusStrokeBuilder;
  radius(value: number): FocusStrokeBuilder;
  radiusBind(expr: string): FocusStrokeBuilder;
  renderTarget(value: QmlEnumToken): FocusStrokeBuilder;
  renderTargetBind(expr: string): FocusStrokeBuilder;
  rotation(value: number): FocusStrokeBuilder;
  rotationBind(expr: string): FocusStrokeBuilder;
  scale(value: number): FocusStrokeBuilder;
  scaleBind(expr: string): FocusStrokeBuilder;
  smooth(value: boolean): FocusStrokeBuilder;
  smoothBind(expr: string): FocusStrokeBuilder;
  state(value: string): FocusStrokeBuilder;
  stateBind(expr: string): FocusStrokeBuilder;
  textureSize(value: QmlSize): FocusStrokeBuilder;
  textureSizeBind(expr: string): FocusStrokeBuilder;
  transformOrigin(value: QmlEnumToken): FocusStrokeBuilder;
  transformOriginBind(expr: string): FocusStrokeBuilder;
  visible(value: boolean): FocusStrokeBuilder;
  visibleBind(expr: string): FocusStrokeBuilder;
  width(value: number): FocusStrokeBuilder;
  widthBind(expr: string): FocusStrokeBuilder;
  x(value: number): FocusStrokeBuilder;
  xBind(expr: string): FocusStrokeBuilder;
  y(value: number): FocusStrokeBuilder;
  yBind(expr: string): FocusStrokeBuilder;
  z(value: number): FocusStrokeBuilder;
  zBind(expr: string): FocusStrokeBuilder;
  onActiveFocusChanged(body: string): FocusStrokeBuilder;
  onActiveFocusOnTabChanged(body: string): FocusStrokeBuilder;
  onAntialiasingChanged(body: string): FocusStrokeBuilder;
  onBaselineOffsetChanged(body: string): FocusStrokeBuilder;
  onChildrenChanged(body: string): FocusStrokeBuilder;
  onChildrenRectChanged(body: string): FocusStrokeBuilder;
  onClipChanged(body: string): FocusStrokeBuilder;
  onContainmentMaskChanged(body: string): FocusStrokeBuilder;
  onContentsScaleChanged(body: string): FocusStrokeBuilder;
  onContentsSizeChanged(body: string): FocusStrokeBuilder;
  onEnabledChanged(body: string): FocusStrokeBuilder;
  onFillColorChanged(body: string): FocusStrokeBuilder;
  onFocusChanged(body: string): FocusStrokeBuilder;
  onFocusPolicyChanged(body: string): FocusStrokeBuilder;
  onHeightChanged(body: string): FocusStrokeBuilder;
  onImplicitHeightChanged(body: string): FocusStrokeBuilder;
  onImplicitWidthChanged(body: string): FocusStrokeBuilder;
  onObjectNameChanged(body: string): FocusStrokeBuilder;
  onOpacityChanged(body: string): FocusStrokeBuilder;
  onPaletteChanged(body: string): FocusStrokeBuilder;
  onPaletteCreated(body: string): FocusStrokeBuilder;
  onParentChanged(body: string): FocusStrokeBuilder;
  onRenderTargetChanged(body: string): FocusStrokeBuilder;
  onRotationChanged(body: string): FocusStrokeBuilder;
  onScaleChanged(body: string): FocusStrokeBuilder;
  onSmoothChanged(body: string): FocusStrokeBuilder;
  onStateChanged(body: string): FocusStrokeBuilder;
  onTextureSizeChanged(body: string): FocusStrokeBuilder;
  onTransformOriginChanged(body: string): FocusStrokeBuilder;
  onVisibleChanged(body: string): FocusStrokeBuilder;
  onVisibleChildrenChanged(body: string): FocusStrokeBuilder;
  onWidthChanged(body: string): FocusStrokeBuilder;
  onWindowChanged(body: string): FocusStrokeBuilder;
  onXChanged(body: string): FocusStrokeBuilder;
  onYChanged(body: string): FocusStrokeBuilder;
  onZChanged(body: string): FocusStrokeBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FocusStrokeBuilder;
  layer(setup: (b: LayerBuilder) => void): FocusStrokeBuilder;
}

const FOCUSSTROKE_META: TypeMetadata = {
  typeName: 'FocusStroke',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentsScale', hasValue: true, hasBinding: true },
    { name: 'contentsSize', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillColor', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'renderTarget', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textureSize', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentsScaleChanged', paramCount: 0 },
    { handlerName: 'onContentsSizeChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillColorChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRenderTargetChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextureSizeChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
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

export function FocusStroke(): FocusStrokeBuilder {
  return createFluentBuilder('FocusStroke', FOCUSSTROKE_META) as unknown as FocusStrokeBuilder;
}

export namespace FocusStroke {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('FocusStroke', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('FocusStroke', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('FocusStroke', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('FocusStroke', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('FocusStroke', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('FocusStroke', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('FocusStroke', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('FocusStroke', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('FocusStroke', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('FocusStroke', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('FocusStroke', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace PerformanceHints {
    export const FastFBOResizing = createEnumToken('FocusStroke', 'PerformanceHints', 'FastFBOResizing');
  }
  export namespace RenderTarget {
    export const Image = createEnumToken('FocusStroke', 'RenderTarget', 'Image');
    export const FramebufferObject = createEnumToken('FocusStroke', 'RenderTarget', 'FramebufferObject');
    export const InvertedYFramebufferObject = createEnumToken('FocusStroke', 'RenderTarget', 'InvertedYFramebufferObject');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FocusStroke', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FocusStroke', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FocusStroke', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FocusStroke', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FocusStroke', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FocusStroke', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('FocusStroke', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('FocusStroke', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('FocusStroke', 'TransformOrigin', 'BottomRight');
  }
}
