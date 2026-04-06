// AUTO-GENERATED — DO NOT EDIT
// Type: MapCopyrightNotice
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
import type { MapBuilder } from './Map.js';
export interface MapCopyrightNoticeBuilder {
  id(id: string): MapCopyrightNoticeBuilder;
  child(obj: QmlObjectBuilder): MapCopyrightNoticeBuilder;
  children(...objs: QmlObjectBuilder[]): MapCopyrightNoticeBuilder;

  activeFocusOnTab(value: boolean): MapCopyrightNoticeBuilder;
  activeFocusOnTabBind(expr: string): MapCopyrightNoticeBuilder;
  antialiasing(value: boolean): MapCopyrightNoticeBuilder;
  antialiasingBind(expr: string): MapCopyrightNoticeBuilder;
  baselineOffset(value: number): MapCopyrightNoticeBuilder;
  baselineOffsetBind(expr: string): MapCopyrightNoticeBuilder;
  clip(value: boolean): MapCopyrightNoticeBuilder;
  clipBind(expr: string): MapCopyrightNoticeBuilder;
  containmentMask(value: QtObjectBuilder): MapCopyrightNoticeBuilder;
  containmentMaskBind(expr: string): MapCopyrightNoticeBuilder;
  contentsScale(value: number): MapCopyrightNoticeBuilder;
  contentsScaleBind(expr: string): MapCopyrightNoticeBuilder;
  contentsSize(value: QmlSize): MapCopyrightNoticeBuilder;
  contentsSizeBind(expr: string): MapCopyrightNoticeBuilder;
  enabled(value: boolean): MapCopyrightNoticeBuilder;
  enabledBind(expr: string): MapCopyrightNoticeBuilder;
  fillColor(value: QmlColor): MapCopyrightNoticeBuilder;
  fillColorBind(expr: string): MapCopyrightNoticeBuilder;
  focus(value: boolean): MapCopyrightNoticeBuilder;
  focusBind(expr: string): MapCopyrightNoticeBuilder;
  focusPolicy(value: QmlEnumToken): MapCopyrightNoticeBuilder;
  focusPolicyBind(expr: string): MapCopyrightNoticeBuilder;
  height(value: number): MapCopyrightNoticeBuilder;
  heightBind(expr: string): MapCopyrightNoticeBuilder;
  implicitHeight(value: number): MapCopyrightNoticeBuilder;
  implicitHeightBind(expr: string): MapCopyrightNoticeBuilder;
  implicitWidth(value: number): MapCopyrightNoticeBuilder;
  implicitWidthBind(expr: string): MapCopyrightNoticeBuilder;
  mapSource(value: MapBuilder): MapCopyrightNoticeBuilder;
  mapSourceBind(expr: string): MapCopyrightNoticeBuilder;
  objectName(value: string): MapCopyrightNoticeBuilder;
  objectNameBind(expr: string): MapCopyrightNoticeBuilder;
  opacity(value: number): MapCopyrightNoticeBuilder;
  opacityBind(expr: string): MapCopyrightNoticeBuilder;
  palette(value: PaletteBuilder): MapCopyrightNoticeBuilder;
  paletteBind(expr: string): MapCopyrightNoticeBuilder;
  parent(value: ItemBuilder): MapCopyrightNoticeBuilder;
  parentBind(expr: string): MapCopyrightNoticeBuilder;
  renderTarget(value: QmlEnumToken): MapCopyrightNoticeBuilder;
  renderTargetBind(expr: string): MapCopyrightNoticeBuilder;
  rotation(value: number): MapCopyrightNoticeBuilder;
  rotationBind(expr: string): MapCopyrightNoticeBuilder;
  scale(value: number): MapCopyrightNoticeBuilder;
  scaleBind(expr: string): MapCopyrightNoticeBuilder;
  smooth(value: boolean): MapCopyrightNoticeBuilder;
  smoothBind(expr: string): MapCopyrightNoticeBuilder;
  state(value: string): MapCopyrightNoticeBuilder;
  stateBind(expr: string): MapCopyrightNoticeBuilder;
  styleSheet(value: string): MapCopyrightNoticeBuilder;
  styleSheetBind(expr: string): MapCopyrightNoticeBuilder;
  textureSize(value: QmlSize): MapCopyrightNoticeBuilder;
  textureSizeBind(expr: string): MapCopyrightNoticeBuilder;
  transformOrigin(value: QmlEnumToken): MapCopyrightNoticeBuilder;
  transformOriginBind(expr: string): MapCopyrightNoticeBuilder;
  visible(value: boolean): MapCopyrightNoticeBuilder;
  visibleBind(expr: string): MapCopyrightNoticeBuilder;
  width(value: number): MapCopyrightNoticeBuilder;
  widthBind(expr: string): MapCopyrightNoticeBuilder;
  x(value: number): MapCopyrightNoticeBuilder;
  xBind(expr: string): MapCopyrightNoticeBuilder;
  y(value: number): MapCopyrightNoticeBuilder;
  yBind(expr: string): MapCopyrightNoticeBuilder;
  z(value: number): MapCopyrightNoticeBuilder;
  zBind(expr: string): MapCopyrightNoticeBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onBackgroundColorChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onClipChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onContentsScaleChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onContentsSizeChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onCopyrightsVisibleChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onFillColorChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onLinkActivated(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onMapSourceChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onRenderTargetChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onStateChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onStyleSheetChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onTextureSizeChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onXChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onYChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  onZChanged(handler: DslSignalHandlerValue): MapCopyrightNoticeBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapCopyrightNoticeBuilder;
  layer(setup: (b: LayerBuilder) => void): MapCopyrightNoticeBuilder;
}

const MAPCOPYRIGHTNOTICE_META: TypeMetadata = {
  typeName: 'MapCopyrightNotice',
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
    { name: 'mapSource', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderTarget', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'styleSheet', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBackgroundColorChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentsScaleChanged', paramCount: 0 },
    { handlerName: 'onContentsSizeChanged', paramCount: 0 },
    { handlerName: 'onCopyrightsVisibleChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillColorChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLinkActivated', paramCount: 1 },
    { handlerName: 'onMapSourceChanged', paramCount: 0 },
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
    { handlerName: 'onStyleSheetChanged', paramCount: 1 },
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

export function MapCopyrightNotice(): MapCopyrightNoticeBuilder {
  return createFluentBuilder(
    'MapCopyrightNotice',
    MAPCOPYRIGHTNOTICE_META,
  ) as unknown as MapCopyrightNoticeBuilder;
}

export namespace MapCopyrightNotice {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MapCopyrightNotice',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MapCopyrightNotice',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'MapCopyrightNotice',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'MapCopyrightNotice',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'MapCopyrightNotice',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('MapCopyrightNotice', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MapCopyrightNotice',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MapCopyrightNotice',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PerformanceHints {
    export const FastFBOResizing = createEnumToken(
      'MapCopyrightNotice',
      'PerformanceHints',
      'FastFBOResizing',
    );
  }
  export namespace RenderTarget {
    export const Image = createEnumToken('MapCopyrightNotice', 'RenderTarget', 'Image');
    export const FramebufferObject = createEnumToken(
      'MapCopyrightNotice',
      'RenderTarget',
      'FramebufferObject',
    );
    export const InvertedYFramebufferObject = createEnumToken(
      'MapCopyrightNotice',
      'RenderTarget',
      'InvertedYFramebufferObject',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapCopyrightNotice', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapCopyrightNotice', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapCopyrightNotice', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapCopyrightNotice', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapCopyrightNotice', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapCopyrightNotice', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'MapCopyrightNotice',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('MapCopyrightNotice', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'MapCopyrightNotice',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
