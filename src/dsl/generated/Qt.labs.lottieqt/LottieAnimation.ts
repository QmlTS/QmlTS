// AUTO-GENERATED — DO NOT EDIT
// Type: LottieAnimation
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlSize,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface LottieAnimationBuilder {
  id(id: string): LottieAnimationBuilder;
  child(obj: QmlObjectBuilder): LottieAnimationBuilder;

  activeFocusOnTab(value: boolean): LottieAnimationBuilder;
  activeFocusOnTabBind(expr: string): LottieAnimationBuilder;
  antialiasing(value: boolean): LottieAnimationBuilder;
  antialiasingBind(expr: string): LottieAnimationBuilder;
  autoPlay(value: boolean): LottieAnimationBuilder;
  autoPlayBind(expr: string): LottieAnimationBuilder;
  baselineOffset(value: number): LottieAnimationBuilder;
  baselineOffsetBind(expr: string): LottieAnimationBuilder;
  clip(value: boolean): LottieAnimationBuilder;
  clipBind(expr: string): LottieAnimationBuilder;
  containmentMask(value: QtObjectBuilder): LottieAnimationBuilder;
  containmentMaskBind(expr: string): LottieAnimationBuilder;
  contentsScale(value: number): LottieAnimationBuilder;
  contentsScaleBind(expr: string): LottieAnimationBuilder;
  contentsSize(value: QmlSize): LottieAnimationBuilder;
  contentsSizeBind(expr: string): LottieAnimationBuilder;
  direction(value: QmlEnumToken): LottieAnimationBuilder;
  directionBind(expr: string): LottieAnimationBuilder;
  enabled(value: boolean): LottieAnimationBuilder;
  enabledBind(expr: string): LottieAnimationBuilder;
  fillColor(value: QmlColor): LottieAnimationBuilder;
  fillColorBind(expr: string): LottieAnimationBuilder;
  focus(value: boolean): LottieAnimationBuilder;
  focusBind(expr: string): LottieAnimationBuilder;
  focusPolicy(value: QmlEnumToken): LottieAnimationBuilder;
  focusPolicyBind(expr: string): LottieAnimationBuilder;
  frameRate(value: number): LottieAnimationBuilder;
  frameRateBind(expr: string): LottieAnimationBuilder;
  height(value: number): LottieAnimationBuilder;
  heightBind(expr: string): LottieAnimationBuilder;
  implicitHeight(value: number): LottieAnimationBuilder;
  implicitHeightBind(expr: string): LottieAnimationBuilder;
  implicitWidth(value: number): LottieAnimationBuilder;
  implicitWidthBind(expr: string): LottieAnimationBuilder;
  loops(value: number): LottieAnimationBuilder;
  loopsBind(expr: string): LottieAnimationBuilder;
  objectName(value: string): LottieAnimationBuilder;
  objectNameBind(expr: string): LottieAnimationBuilder;
  opacity(value: number): LottieAnimationBuilder;
  opacityBind(expr: string): LottieAnimationBuilder;
  palette(value: PaletteBuilder): LottieAnimationBuilder;
  paletteBind(expr: string): LottieAnimationBuilder;
  parent(value: ItemBuilder): LottieAnimationBuilder;
  parentBind(expr: string): LottieAnimationBuilder;
  quality(value: QmlEnumToken): LottieAnimationBuilder;
  qualityBind(expr: string): LottieAnimationBuilder;
  renderTarget(value: QmlEnumToken): LottieAnimationBuilder;
  renderTargetBind(expr: string): LottieAnimationBuilder;
  rotation(value: number): LottieAnimationBuilder;
  rotationBind(expr: string): LottieAnimationBuilder;
  scale(value: number): LottieAnimationBuilder;
  scaleBind(expr: string): LottieAnimationBuilder;
  smooth(value: boolean): LottieAnimationBuilder;
  smoothBind(expr: string): LottieAnimationBuilder;
  source(value: QmlUrl): LottieAnimationBuilder;
  sourceBind(expr: string): LottieAnimationBuilder;
  state(value: string): LottieAnimationBuilder;
  stateBind(expr: string): LottieAnimationBuilder;
  status(value: QmlEnumToken): LottieAnimationBuilder;
  statusBind(expr: string): LottieAnimationBuilder;
  textureSize(value: QmlSize): LottieAnimationBuilder;
  textureSizeBind(expr: string): LottieAnimationBuilder;
  transformOrigin(value: QmlEnumToken): LottieAnimationBuilder;
  transformOriginBind(expr: string): LottieAnimationBuilder;
  visible(value: boolean): LottieAnimationBuilder;
  visibleBind(expr: string): LottieAnimationBuilder;
  width(value: number): LottieAnimationBuilder;
  widthBind(expr: string): LottieAnimationBuilder;
  x(value: number): LottieAnimationBuilder;
  xBind(expr: string): LottieAnimationBuilder;
  y(value: number): LottieAnimationBuilder;
  yBind(expr: string): LottieAnimationBuilder;
  z(value: number): LottieAnimationBuilder;
  zBind(expr: string): LottieAnimationBuilder;
  onActiveFocusChanged(body: string): LottieAnimationBuilder;
  onActiveFocusOnTabChanged(body: string): LottieAnimationBuilder;
  onAntialiasingChanged(body: string): LottieAnimationBuilder;
  onAutoPlayChanged(body: string): LottieAnimationBuilder;
  onBaselineOffsetChanged(body: string): LottieAnimationBuilder;
  onChildrenChanged(body: string): LottieAnimationBuilder;
  onChildrenRectChanged(body: string): LottieAnimationBuilder;
  onClipChanged(body: string): LottieAnimationBuilder;
  onContainmentMaskChanged(body: string): LottieAnimationBuilder;
  onContentsScaleChanged(body: string): LottieAnimationBuilder;
  onContentsSizeChanged(body: string): LottieAnimationBuilder;
  onDirectionChanged(body: string): LottieAnimationBuilder;
  onEnabledChanged(body: string): LottieAnimationBuilder;
  onEndFrameChanged(body: string): LottieAnimationBuilder;
  onFillColorChanged(body: string): LottieAnimationBuilder;
  onFinished(body: string): LottieAnimationBuilder;
  onFocusChanged(body: string): LottieAnimationBuilder;
  onFocusPolicyChanged(body: string): LottieAnimationBuilder;
  onFrameRateChanged(body: string): LottieAnimationBuilder;
  onHeightChanged(body: string): LottieAnimationBuilder;
  onImplicitHeightChanged(body: string): LottieAnimationBuilder;
  onImplicitWidthChanged(body: string): LottieAnimationBuilder;
  onLoopsChanged(body: string): LottieAnimationBuilder;
  onObjectNameChanged(body: string): LottieAnimationBuilder;
  onOpacityChanged(body: string): LottieAnimationBuilder;
  onPaletteChanged(body: string): LottieAnimationBuilder;
  onPaletteCreated(body: string): LottieAnimationBuilder;
  onParentChanged(body: string): LottieAnimationBuilder;
  onQualityChanged(body: string): LottieAnimationBuilder;
  onRenderTargetChanged(body: string): LottieAnimationBuilder;
  onRotationChanged(body: string): LottieAnimationBuilder;
  onScaleChanged(body: string): LottieAnimationBuilder;
  onSmoothChanged(body: string): LottieAnimationBuilder;
  onSourceChanged(body: string): LottieAnimationBuilder;
  onStartFrameChanged(body: string): LottieAnimationBuilder;
  onStateChanged(body: string): LottieAnimationBuilder;
  onStatusChanged(body: string): LottieAnimationBuilder;
  onTextureSizeChanged(body: string): LottieAnimationBuilder;
  onTransformOriginChanged(body: string): LottieAnimationBuilder;
  onVisibleChanged(body: string): LottieAnimationBuilder;
  onVisibleChildrenChanged(body: string): LottieAnimationBuilder;
  onWidthChanged(body: string): LottieAnimationBuilder;
  onWindowChanged(body: string): LottieAnimationBuilder;
  onXChanged(body: string): LottieAnimationBuilder;
  onYChanged(body: string): LottieAnimationBuilder;
  onZChanged(body: string): LottieAnimationBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): LottieAnimationBuilder;
  layer(setup: (b: LayerBuilder) => void): LottieAnimationBuilder;
}

const LOTTIEANIMATION_META: TypeMetadata = {
  typeName: 'LottieAnimation',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoPlay', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentsScale', hasValue: true, hasBinding: true },
    { name: 'contentsSize', hasValue: true, hasBinding: true },
    { name: 'direction', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillColor', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'frameRate', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'quality', hasValue: true, hasBinding: true },
    { name: 'renderTarget', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'status', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAutoPlayChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentsScaleChanged', paramCount: 0 },
    { handlerName: 'onContentsSizeChanged', paramCount: 0 },
    { handlerName: 'onDirectionChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEndFrameChanged', paramCount: 0 },
    { handlerName: 'onFillColorChanged', paramCount: 0 },
    { handlerName: 'onFinished', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFrameRateChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLoopsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onQualityChanged', paramCount: 0 },
    { handlerName: 'onRenderTargetChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStartFrameChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
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

export function LottieAnimation(): LottieAnimationBuilder {
  return createFluentBuilder(
    'LottieAnimation',
    LOTTIEANIMATION_META,
  ) as unknown as LottieAnimationBuilder;
}

export namespace LottieAnimation {
  export namespace Direction {
    export const Forward = createEnumToken('LottieAnimation', 'Direction', 'Forward');
    export const Reverse = createEnumToken('LottieAnimation', 'Direction', 'Reverse');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'LottieAnimation',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'LottieAnimation',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('LottieAnimation', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('LottieAnimation', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('LottieAnimation', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('LottieAnimation', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'LottieAnimation',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'LottieAnimation',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoopCount {
    export const Infinite = createEnumToken('LottieAnimation', 'LoopCount', 'Infinite');
  }
  export namespace PerformanceHints {
    export const FastFBOResizing = createEnumToken(
      'LottieAnimation',
      'PerformanceHints',
      'FastFBOResizing',
    );
  }
  export namespace Quality {
    export const LowQuality = createEnumToken('LottieAnimation', 'Quality', 'LowQuality');
    export const MediumQuality = createEnumToken('LottieAnimation', 'Quality', 'MediumQuality');
    export const HighQuality = createEnumToken('LottieAnimation', 'Quality', 'HighQuality');
  }
  export namespace RenderTarget {
    export const Image = createEnumToken('LottieAnimation', 'RenderTarget', 'Image');
    export const FramebufferObject = createEnumToken(
      'LottieAnimation',
      'RenderTarget',
      'FramebufferObject',
    );
    export const InvertedYFramebufferObject = createEnumToken(
      'LottieAnimation',
      'RenderTarget',
      'InvertedYFramebufferObject',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('LottieAnimation', 'Status', 'Null');
    export const Loading = createEnumToken('LottieAnimation', 'Status', 'Loading');
    export const Ready = createEnumToken('LottieAnimation', 'Status', 'Ready');
    export const Error = createEnumToken('LottieAnimation', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('LottieAnimation', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('LottieAnimation', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('LottieAnimation', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('LottieAnimation', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('LottieAnimation', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('LottieAnimation', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('LottieAnimation', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('LottieAnimation', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('LottieAnimation', 'TransformOrigin', 'BottomRight');
  }
}
