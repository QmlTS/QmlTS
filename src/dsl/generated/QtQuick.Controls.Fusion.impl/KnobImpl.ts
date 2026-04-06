// AUTO-GENERATED — DO NOT EDIT
// Type: KnobImpl
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
export interface KnobImplBuilder {
  id(id: string): KnobImplBuilder;
  child(obj: QmlObjectBuilder): KnobImplBuilder;
  children(...objs: QmlObjectBuilder[]): KnobImplBuilder;

  activeFocusOnTab(value: boolean): KnobImplBuilder;
  activeFocusOnTabBind(expr: string): KnobImplBuilder;
  antialiasing(value: boolean): KnobImplBuilder;
  antialiasingBind(expr: string): KnobImplBuilder;
  baselineOffset(value: number): KnobImplBuilder;
  baselineOffsetBind(expr: string): KnobImplBuilder;
  clip(value: boolean): KnobImplBuilder;
  clipBind(expr: string): KnobImplBuilder;
  containmentMask(value: QtObjectBuilder): KnobImplBuilder;
  containmentMaskBind(expr: string): KnobImplBuilder;
  contentsScale(value: number): KnobImplBuilder;
  contentsScaleBind(expr: string): KnobImplBuilder;
  contentsSize(value: QmlSize): KnobImplBuilder;
  contentsSizeBind(expr: string): KnobImplBuilder;
  enabled(value: boolean): KnobImplBuilder;
  enabledBind(expr: string): KnobImplBuilder;
  fillColor(value: QmlColor): KnobImplBuilder;
  fillColorBind(expr: string): KnobImplBuilder;
  focus(value: boolean): KnobImplBuilder;
  focusBind(expr: string): KnobImplBuilder;
  focusPolicy(value: QmlEnumToken): KnobImplBuilder;
  focusPolicyBind(expr: string): KnobImplBuilder;
  height(value: number): KnobImplBuilder;
  heightBind(expr: string): KnobImplBuilder;
  implicitHeight(value: number): KnobImplBuilder;
  implicitHeightBind(expr: string): KnobImplBuilder;
  implicitWidth(value: number): KnobImplBuilder;
  implicitWidthBind(expr: string): KnobImplBuilder;
  objectName(value: string): KnobImplBuilder;
  objectNameBind(expr: string): KnobImplBuilder;
  opacity(value: number): KnobImplBuilder;
  opacityBind(expr: string): KnobImplBuilder;
  palette(value: PaletteBuilder): KnobImplBuilder;
  paletteBind(expr: string): KnobImplBuilder;
  parent(value: ItemBuilder): KnobImplBuilder;
  parentBind(expr: string): KnobImplBuilder;
  renderTarget(value: QmlEnumToken): KnobImplBuilder;
  renderTargetBind(expr: string): KnobImplBuilder;
  rotation(value: number): KnobImplBuilder;
  rotationBind(expr: string): KnobImplBuilder;
  scale(value: number): KnobImplBuilder;
  scaleBind(expr: string): KnobImplBuilder;
  smooth(value: boolean): KnobImplBuilder;
  smoothBind(expr: string): KnobImplBuilder;
  state(value: string): KnobImplBuilder;
  stateBind(expr: string): KnobImplBuilder;
  textureSize(value: QmlSize): KnobImplBuilder;
  textureSizeBind(expr: string): KnobImplBuilder;
  transformOrigin(value: QmlEnumToken): KnobImplBuilder;
  transformOriginBind(expr: string): KnobImplBuilder;
  visible(value: boolean): KnobImplBuilder;
  visibleBind(expr: string): KnobImplBuilder;
  width(value: number): KnobImplBuilder;
  widthBind(expr: string): KnobImplBuilder;
  x(value: number): KnobImplBuilder;
  xBind(expr: string): KnobImplBuilder;
  y(value: number): KnobImplBuilder;
  yBind(expr: string): KnobImplBuilder;
  z(value: number): KnobImplBuilder;
  zBind(expr: string): KnobImplBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onClipChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onContentsScaleChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onContentsSizeChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onFillColorChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): KnobImplBuilder;
  onParentChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onRenderTargetChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onStateChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onTextureSizeChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onXChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onYChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  onZChanged(handler: DslSignalHandlerValue): KnobImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): KnobImplBuilder;
  layer(setup: (b: LayerBuilder) => void): KnobImplBuilder;
}

const KNOBIMPL_META: TypeMetadata = {
  typeName: 'KnobImpl',
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

export function KnobImpl(): KnobImplBuilder {
  return createFluentBuilder('KnobImpl', KNOBIMPL_META) as unknown as KnobImplBuilder;
}

export namespace KnobImpl {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'KnobImpl',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'KnobImpl',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('KnobImpl', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('KnobImpl', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('KnobImpl', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('KnobImpl', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'KnobImpl',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('KnobImpl', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'KnobImpl',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PerformanceHints {
    export const FastFBOResizing = createEnumToken(
      'KnobImpl',
      'PerformanceHints',
      'FastFBOResizing',
    );
  }
  export namespace RenderTarget {
    export const Image = createEnumToken('KnobImpl', 'RenderTarget', 'Image');
    export const FramebufferObject = createEnumToken(
      'KnobImpl',
      'RenderTarget',
      'FramebufferObject',
    );
    export const InvertedYFramebufferObject = createEnumToken(
      'KnobImpl',
      'RenderTarget',
      'InvertedYFramebufferObject',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('KnobImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('KnobImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('KnobImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('KnobImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('KnobImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('KnobImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('KnobImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('KnobImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('KnobImpl', 'TransformOrigin', 'BottomRight');
  }
}
