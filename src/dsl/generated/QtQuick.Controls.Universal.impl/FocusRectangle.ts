// AUTO-GENERATED — DO NOT EDIT
// Type: FocusRectangle
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlSize,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface FocusRectangleBuilder {
  id(id: string): FocusRectangleBuilder;
  child(obj: QmlObjectBuilder): FocusRectangleBuilder;
  children(...objs: QmlObjectBuilder[]): FocusRectangleBuilder;

  activeFocusOnTab(value: boolean): FocusRectangleBuilder;
  activeFocusOnTabBind(expr: string): FocusRectangleBuilder;
  antialiasing(value: boolean): FocusRectangleBuilder;
  antialiasingBind(expr: string): FocusRectangleBuilder;
  baselineOffset(value: number): FocusRectangleBuilder;
  baselineOffsetBind(expr: string): FocusRectangleBuilder;
  clip(value: boolean): FocusRectangleBuilder;
  clipBind(expr: string): FocusRectangleBuilder;
  containmentMask(value: QtObjectBuilder): FocusRectangleBuilder;
  containmentMaskBind(expr: string): FocusRectangleBuilder;
  contentsScale(value: number): FocusRectangleBuilder;
  contentsScaleBind(expr: string): FocusRectangleBuilder;
  contentsSize(value: QmlSize): FocusRectangleBuilder;
  contentsSizeBind(expr: string): FocusRectangleBuilder;
  enabled(value: boolean): FocusRectangleBuilder;
  enabledBind(expr: string): FocusRectangleBuilder;
  fillColor(value: QmlColor): FocusRectangleBuilder;
  fillColorBind(expr: string): FocusRectangleBuilder;
  focus(value: boolean): FocusRectangleBuilder;
  focusBind(expr: string): FocusRectangleBuilder;
  focusPolicy(value: QmlEnumToken): FocusRectangleBuilder;
  focusPolicyBind(expr: string): FocusRectangleBuilder;
  height(value: number): FocusRectangleBuilder;
  heightBind(expr: string): FocusRectangleBuilder;
  implicitHeight(value: number): FocusRectangleBuilder;
  implicitHeightBind(expr: string): FocusRectangleBuilder;
  implicitWidth(value: number): FocusRectangleBuilder;
  implicitWidthBind(expr: string): FocusRectangleBuilder;
  objectName(value: string): FocusRectangleBuilder;
  objectNameBind(expr: string): FocusRectangleBuilder;
  opacity(value: number): FocusRectangleBuilder;
  opacityBind(expr: string): FocusRectangleBuilder;
  palette(value: PaletteBuilder): FocusRectangleBuilder;
  paletteBind(expr: string): FocusRectangleBuilder;
  parent(value: ItemBuilder): FocusRectangleBuilder;
  parentBind(expr: string): FocusRectangleBuilder;
  renderTarget(value: QmlEnumToken): FocusRectangleBuilder;
  renderTargetBind(expr: string): FocusRectangleBuilder;
  rotation(value: number): FocusRectangleBuilder;
  rotationBind(expr: string): FocusRectangleBuilder;
  scale(value: number): FocusRectangleBuilder;
  scaleBind(expr: string): FocusRectangleBuilder;
  smooth(value: boolean): FocusRectangleBuilder;
  smoothBind(expr: string): FocusRectangleBuilder;
  state(value: string): FocusRectangleBuilder;
  stateBind(expr: string): FocusRectangleBuilder;
  textureSize(value: QmlSize): FocusRectangleBuilder;
  textureSizeBind(expr: string): FocusRectangleBuilder;
  transformOrigin(value: QmlEnumToken): FocusRectangleBuilder;
  transformOriginBind(expr: string): FocusRectangleBuilder;
  visible(value: boolean): FocusRectangleBuilder;
  visibleBind(expr: string): FocusRectangleBuilder;
  width(value: number): FocusRectangleBuilder;
  widthBind(expr: string): FocusRectangleBuilder;
  x(value: number): FocusRectangleBuilder;
  xBind(expr: string): FocusRectangleBuilder;
  y(value: number): FocusRectangleBuilder;
  yBind(expr: string): FocusRectangleBuilder;
  z(value: number): FocusRectangleBuilder;
  zBind(expr: string): FocusRectangleBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onClipChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onContentsScaleChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onContentsSizeChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onFillColorChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onRenderTargetChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onStateChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onTextureSizeChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onXChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onYChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  onZChanged(handler: DslSignalHandlerValue): FocusRectangleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FocusRectangleBuilder;
  layer(setup: (b: LayerBuilder) => void): FocusRectangleBuilder;
}

const FOCUSRECTANGLE_META: TypeMetadata = {
  typeName: 'FocusRectangle',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
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
  attached: [],
};

export function FocusRectangle(): FocusRectangleBuilder {
  return createFluentBuilder(
    'FocusRectangle',
    FOCUSRECTANGLE_META,
  ) as unknown as FocusRectangleBuilder;
}

export namespace FocusRectangle {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'FocusRectangle',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'FocusRectangle',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('FocusRectangle', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('FocusRectangle', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('FocusRectangle', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('FocusRectangle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'FocusRectangle',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'FocusRectangle',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PerformanceHints {
    export const FastFBOResizing = createEnumToken(
      'FocusRectangle',
      'PerformanceHints',
      'FastFBOResizing',
    );
  }
  export namespace RenderTarget {
    export const Image = createEnumToken('FocusRectangle', 'RenderTarget', 'Image');
    export const FramebufferObject = createEnumToken(
      'FocusRectangle',
      'RenderTarget',
      'FramebufferObject',
    );
    export const InvertedYFramebufferObject = createEnumToken(
      'FocusRectangle',
      'RenderTarget',
      'InvertedYFramebufferObject',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FocusRectangle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FocusRectangle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FocusRectangle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FocusRectangle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FocusRectangle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FocusRectangle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('FocusRectangle', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('FocusRectangle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('FocusRectangle', 'TransformOrigin', 'BottomRight');
  }
}
