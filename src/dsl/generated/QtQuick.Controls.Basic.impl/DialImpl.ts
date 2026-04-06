// AUTO-GENERATED — DO NOT EDIT
// Type: DialImpl
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
export interface DialImplBuilder {
  id(id: string): DialImplBuilder;
  child(obj: QmlObjectBuilder): DialImplBuilder;
  children(...objs: QmlObjectBuilder[]): DialImplBuilder;

  activeFocusOnTab(value: boolean): DialImplBuilder;
  activeFocusOnTabBind(expr: string): DialImplBuilder;
  antialiasing(value: boolean): DialImplBuilder;
  antialiasingBind(expr: string): DialImplBuilder;
  baselineOffset(value: number): DialImplBuilder;
  baselineOffsetBind(expr: string): DialImplBuilder;
  clip(value: boolean): DialImplBuilder;
  clipBind(expr: string): DialImplBuilder;
  color(value: QmlColor): DialImplBuilder;
  colorBind(expr: string): DialImplBuilder;
  containmentMask(value: QtObjectBuilder): DialImplBuilder;
  containmentMaskBind(expr: string): DialImplBuilder;
  contentsScale(value: number): DialImplBuilder;
  contentsScaleBind(expr: string): DialImplBuilder;
  contentsSize(value: QmlSize): DialImplBuilder;
  contentsSizeBind(expr: string): DialImplBuilder;
  enabled(value: boolean): DialImplBuilder;
  enabledBind(expr: string): DialImplBuilder;
  endAngle(value: number): DialImplBuilder;
  endAngleBind(expr: string): DialImplBuilder;
  fillColor(value: QmlColor): DialImplBuilder;
  fillColorBind(expr: string): DialImplBuilder;
  focus(value: boolean): DialImplBuilder;
  focusBind(expr: string): DialImplBuilder;
  focusPolicy(value: QmlEnumToken): DialImplBuilder;
  focusPolicyBind(expr: string): DialImplBuilder;
  height(value: number): DialImplBuilder;
  heightBind(expr: string): DialImplBuilder;
  implicitHeight(value: number): DialImplBuilder;
  implicitHeightBind(expr: string): DialImplBuilder;
  implicitWidth(value: number): DialImplBuilder;
  implicitWidthBind(expr: string): DialImplBuilder;
  objectName(value: string): DialImplBuilder;
  objectNameBind(expr: string): DialImplBuilder;
  opacity(value: number): DialImplBuilder;
  opacityBind(expr: string): DialImplBuilder;
  palette(value: PaletteBuilder): DialImplBuilder;
  paletteBind(expr: string): DialImplBuilder;
  parent(value: ItemBuilder): DialImplBuilder;
  parentBind(expr: string): DialImplBuilder;
  progress(value: number): DialImplBuilder;
  progressBind(expr: string): DialImplBuilder;
  renderTarget(value: QmlEnumToken): DialImplBuilder;
  renderTargetBind(expr: string): DialImplBuilder;
  rotation(value: number): DialImplBuilder;
  rotationBind(expr: string): DialImplBuilder;
  scale(value: number): DialImplBuilder;
  scaleBind(expr: string): DialImplBuilder;
  smooth(value: boolean): DialImplBuilder;
  smoothBind(expr: string): DialImplBuilder;
  startAngle(value: number): DialImplBuilder;
  startAngleBind(expr: string): DialImplBuilder;
  state(value: string): DialImplBuilder;
  stateBind(expr: string): DialImplBuilder;
  textureSize(value: QmlSize): DialImplBuilder;
  textureSizeBind(expr: string): DialImplBuilder;
  transformOrigin(value: QmlEnumToken): DialImplBuilder;
  transformOriginBind(expr: string): DialImplBuilder;
  visible(value: boolean): DialImplBuilder;
  visibleBind(expr: string): DialImplBuilder;
  width(value: number): DialImplBuilder;
  widthBind(expr: string): DialImplBuilder;
  x(value: number): DialImplBuilder;
  xBind(expr: string): DialImplBuilder;
  y(value: number): DialImplBuilder;
  yBind(expr: string): DialImplBuilder;
  z(value: number): DialImplBuilder;
  zBind(expr: string): DialImplBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onClipChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onContentsScaleChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onContentsSizeChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onFillColorChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): DialImplBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onRenderTargetChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onStateChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onTextureSizeChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onXChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onYChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  onZChanged(handler: DslSignalHandlerValue): DialImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DialImplBuilder;
  layer(setup: (b: LayerBuilder) => void): DialImplBuilder;
}

const DIALIMPL_META: TypeMetadata = {
  typeName: 'DialImpl',
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
    { name: 'endAngle', hasValue: true, hasBinding: true },
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
    { name: 'progress', hasValue: true, hasBinding: true },
    { name: 'renderTarget', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'startAngle', hasValue: true, hasBinding: true },
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

export function DialImpl(): DialImplBuilder {
  return createFluentBuilder('DialImpl', DIALIMPL_META) as unknown as DialImplBuilder;
}

export namespace DialImpl {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DialImpl',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DialImpl',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('DialImpl', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DialImpl', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DialImpl', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DialImpl', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DialImpl',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('DialImpl', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DialImpl',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PerformanceHints {
    export const FastFBOResizing = createEnumToken(
      'DialImpl',
      'PerformanceHints',
      'FastFBOResizing',
    );
  }
  export namespace RenderTarget {
    export const Image = createEnumToken('DialImpl', 'RenderTarget', 'Image');
    export const FramebufferObject = createEnumToken(
      'DialImpl',
      'RenderTarget',
      'FramebufferObject',
    );
    export const InvertedYFramebufferObject = createEnumToken(
      'DialImpl',
      'RenderTarget',
      'InvertedYFramebufferObject',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DialImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DialImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DialImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DialImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DialImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DialImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DialImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DialImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DialImpl', 'TransformOrigin', 'BottomRight');
  }
}
