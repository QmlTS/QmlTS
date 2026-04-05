// AUTO-GENERATED — DO NOT EDIT
// Type: Scatter3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { Value3DAxisBuilder } from '../QtGraphs/Value3DAxis.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface Scatter3DBuilder {
  id(id: string): Scatter3DBuilder;
  child(obj: QmlObjectBuilder): Scatter3DBuilder;

  activeFocusOnTab(value: boolean): Scatter3DBuilder;
  activeFocusOnTabBind(expr: string): Scatter3DBuilder;
  antialiasing(value: boolean): Scatter3DBuilder;
  antialiasingBind(expr: string): Scatter3DBuilder;
  aspectRatio(value: number): Scatter3DBuilder;
  aspectRatioBind(expr: string): Scatter3DBuilder;
  axisX(value: Value3DAxisBuilder): Scatter3DBuilder;
  axisXBind(expr: string): Scatter3DBuilder;
  axisY(value: Value3DAxisBuilder): Scatter3DBuilder;
  axisYBind(expr: string): Scatter3DBuilder;
  axisZ(value: Value3DAxisBuilder): Scatter3DBuilder;
  axisZBind(expr: string): Scatter3DBuilder;
  baselineOffset(value: number): Scatter3DBuilder;
  baselineOffsetBind(expr: string): Scatter3DBuilder;
  clip(value: boolean): Scatter3DBuilder;
  clipBind(expr: string): Scatter3DBuilder;
  containmentMask(value: QtObjectBuilder): Scatter3DBuilder;
  containmentMaskBind(expr: string): Scatter3DBuilder;
  enabled(value: boolean): Scatter3DBuilder;
  enabledBind(expr: string): Scatter3DBuilder;
  focus(value: boolean): Scatter3DBuilder;
  focusBind(expr: string): Scatter3DBuilder;
  focusPolicy(value: QmlEnumToken): Scatter3DBuilder;
  focusPolicyBind(expr: string): Scatter3DBuilder;
  height(value: number): Scatter3DBuilder;
  heightBind(expr: string): Scatter3DBuilder;
  horizontalAspectRatio(value: number): Scatter3DBuilder;
  horizontalAspectRatioBind(expr: string): Scatter3DBuilder;
  implicitHeight(value: number): Scatter3DBuilder;
  implicitHeightBind(expr: string): Scatter3DBuilder;
  implicitWidth(value: number): Scatter3DBuilder;
  implicitWidthBind(expr: string): Scatter3DBuilder;
  inputHandler(value: QmlValue): Scatter3DBuilder;
  inputHandlerBind(expr: string): Scatter3DBuilder;
  locale(value: string): Scatter3DBuilder;
  localeBind(expr: string): Scatter3DBuilder;
  margin(value: number): Scatter3DBuilder;
  marginBind(expr: string): Scatter3DBuilder;
  measureFps(value: boolean): Scatter3DBuilder;
  measureFpsBind(expr: string): Scatter3DBuilder;
  msaaSamples(value: number): Scatter3DBuilder;
  msaaSamplesBind(expr: string): Scatter3DBuilder;
  objectName(value: string): Scatter3DBuilder;
  objectNameBind(expr: string): Scatter3DBuilder;
  opacity(value: number): Scatter3DBuilder;
  opacityBind(expr: string): Scatter3DBuilder;
  optimizationHints(value: QmlEnumToken): Scatter3DBuilder;
  optimizationHintsBind(expr: string): Scatter3DBuilder;
  orthoProjection(value: boolean): Scatter3DBuilder;
  orthoProjectionBind(expr: string): Scatter3DBuilder;
  palette(value: PaletteBuilder): Scatter3DBuilder;
  paletteBind(expr: string): Scatter3DBuilder;
  parent(value: ItemBuilder): Scatter3DBuilder;
  parentBind(expr: string): Scatter3DBuilder;
  polar(value: boolean): Scatter3DBuilder;
  polarBind(expr: string): Scatter3DBuilder;
  radialLabelOffset(value: number): Scatter3DBuilder;
  radialLabelOffsetBind(expr: string): Scatter3DBuilder;
  reflection(value: boolean): Scatter3DBuilder;
  reflectionBind(expr: string): Scatter3DBuilder;
  reflectivity(value: number): Scatter3DBuilder;
  reflectivityBind(expr: string): Scatter3DBuilder;
  renderingMode(value: QmlEnumToken): Scatter3DBuilder;
  renderingModeBind(expr: string): Scatter3DBuilder;
  rotation(value: number): Scatter3DBuilder;
  rotationBind(expr: string): Scatter3DBuilder;
  scale(value: number): Scatter3DBuilder;
  scaleBind(expr: string): Scatter3DBuilder;
  selectionMode(value: QmlEnumToken): Scatter3DBuilder;
  selectionModeBind(expr: string): Scatter3DBuilder;
  shadowQuality(value: QmlEnumToken): Scatter3DBuilder;
  shadowQualityBind(expr: string): Scatter3DBuilder;
  smooth(value: boolean): Scatter3DBuilder;
  smoothBind(expr: string): Scatter3DBuilder;
  state(value: string): Scatter3DBuilder;
  stateBind(expr: string): Scatter3DBuilder;
  theme(value: QmlValue): Scatter3DBuilder;
  themeBind(expr: string): Scatter3DBuilder;
  transformOrigin(value: QmlEnumToken): Scatter3DBuilder;
  transformOriginBind(expr: string): Scatter3DBuilder;
  visible(value: boolean): Scatter3DBuilder;
  visibleBind(expr: string): Scatter3DBuilder;
  width(value: number): Scatter3DBuilder;
  widthBind(expr: string): Scatter3DBuilder;
  x(value: number): Scatter3DBuilder;
  xBind(expr: string): Scatter3DBuilder;
  y(value: number): Scatter3DBuilder;
  yBind(expr: string): Scatter3DBuilder;
  z(value: number): Scatter3DBuilder;
  zBind(expr: string): Scatter3DBuilder;
  onActiveFocusChanged(body: string): Scatter3DBuilder;
  onActiveFocusOnTabChanged(body: string): Scatter3DBuilder;
  onAntialiasingChanged(body: string): Scatter3DBuilder;
  onAspectRatioChanged(body: string): Scatter3DBuilder;
  onAxisXChanged(body: string): Scatter3DBuilder;
  onAxisYChanged(body: string): Scatter3DBuilder;
  onAxisZChanged(body: string): Scatter3DBuilder;
  onBaselineOffsetChanged(body: string): Scatter3DBuilder;
  onChildrenChanged(body: string): Scatter3DBuilder;
  onChildrenRectChanged(body: string): Scatter3DBuilder;
  onClipChanged(body: string): Scatter3DBuilder;
  onContainmentMaskChanged(body: string): Scatter3DBuilder;
  onCurrentFpsChanged(body: string): Scatter3DBuilder;
  onEnabledChanged(body: string): Scatter3DBuilder;
  onFocusChanged(body: string): Scatter3DBuilder;
  onFocusPolicyChanged(body: string): Scatter3DBuilder;
  onHeightChanged(body: string): Scatter3DBuilder;
  onHorizontalAspectRatioChanged(body: string): Scatter3DBuilder;
  onImplicitHeightChanged(body: string): Scatter3DBuilder;
  onImplicitWidthChanged(body: string): Scatter3DBuilder;
  onInputHandlerChanged(body: string): Scatter3DBuilder;
  onLocaleChanged(body: string): Scatter3DBuilder;
  onMarginChanged(body: string): Scatter3DBuilder;
  onMeasureFpsChanged(body: string): Scatter3DBuilder;
  onMsaaSamplesChanged(body: string): Scatter3DBuilder;
  onObjectNameChanged(body: string): Scatter3DBuilder;
  onOpacityChanged(body: string): Scatter3DBuilder;
  onOptimizationHintsChanged(body: string): Scatter3DBuilder;
  onOrthoProjectionChanged(body: string): Scatter3DBuilder;
  onPaletteChanged(body: string): Scatter3DBuilder;
  onPaletteCreated(body: string): Scatter3DBuilder;
  onParentChanged(body: string): Scatter3DBuilder;
  onPolarChanged(body: string): Scatter3DBuilder;
  onQueriedGraphPositionChanged(body: string): Scatter3DBuilder;
  onRadialLabelOffsetChanged(body: string): Scatter3DBuilder;
  onReflectionChanged(body: string): Scatter3DBuilder;
  onReflectivityChanged(body: string): Scatter3DBuilder;
  onRenderingModeChanged(body: string): Scatter3DBuilder;
  onRotationChanged(body: string): Scatter3DBuilder;
  onScaleChanged(body: string): Scatter3DBuilder;
  onSceneChanged(body: string): Scatter3DBuilder;
  onSelectedElementChanged(body: string): Scatter3DBuilder;
  onSelectedSeriesChanged(body: string): Scatter3DBuilder;
  onSelectionModeChanged(body: string): Scatter3DBuilder;
  onShadowQualityChanged(body: string): Scatter3DBuilder;
  onShadowsSupportedChanged(body: string): Scatter3DBuilder;
  onSmoothChanged(body: string): Scatter3DBuilder;
  onStateChanged(body: string): Scatter3DBuilder;
  onThemeChanged(body: string): Scatter3DBuilder;
  onTransformOriginChanged(body: string): Scatter3DBuilder;
  onVisibleChanged(body: string): Scatter3DBuilder;
  onVisibleChildrenChanged(body: string): Scatter3DBuilder;
  onWidthChanged(body: string): Scatter3DBuilder;
  onWindowChanged(body: string): Scatter3DBuilder;
  onXChanged(body: string): Scatter3DBuilder;
  onYChanged(body: string): Scatter3DBuilder;
  onZChanged(body: string): Scatter3DBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): Scatter3DBuilder;
  layer(setup: (b: LayerBuilder) => void): Scatter3DBuilder;
}

const SCATTER3D_META: TypeMetadata = {
  typeName: 'Scatter3D',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisZ', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAspectRatio', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'inputHandler', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'margin', hasValue: true, hasBinding: true },
    { name: 'measureFps', hasValue: true, hasBinding: true },
    { name: 'msaaSamples', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'optimizationHints', hasValue: true, hasBinding: true },
    { name: 'orthoProjection', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'polar', hasValue: true, hasBinding: true },
    { name: 'radialLabelOffset', hasValue: true, hasBinding: true },
    { name: 'reflection', hasValue: true, hasBinding: true },
    { name: 'reflectivity', hasValue: true, hasBinding: true },
    { name: 'renderingMode', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectionMode', hasValue: true, hasBinding: true },
    { name: 'shadowQuality', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAspectRatioChanged', paramCount: 1 },
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onAxisZChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFpsChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAspectRatioChanged', paramCount: 1 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInputHandlerChanged', paramCount: 1 },
    { handlerName: 'onLocaleChanged', paramCount: 1 },
    { handlerName: 'onMarginChanged', paramCount: 1 },
    { handlerName: 'onMeasureFpsChanged', paramCount: 1 },
    { handlerName: 'onMsaaSamplesChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOptimizationHintsChanged', paramCount: 1 },
    { handlerName: 'onOrthoProjectionChanged', paramCount: 1 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPolarChanged', paramCount: 1 },
    { handlerName: 'onQueriedGraphPositionChanged', paramCount: 1 },
    { handlerName: 'onRadialLabelOffsetChanged', paramCount: 1 },
    { handlerName: 'onReflectionChanged', paramCount: 1 },
    { handlerName: 'onReflectivityChanged', paramCount: 1 },
    { handlerName: 'onRenderingModeChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneChanged', paramCount: 1 },
    { handlerName: 'onSelectedElementChanged', paramCount: 1 },
    { handlerName: 'onSelectedSeriesChanged', paramCount: 1 },
    { handlerName: 'onSelectionModeChanged', paramCount: 1 },
    { handlerName: 'onShadowQualityChanged', paramCount: 1 },
    { handlerName: 'onShadowsSupportedChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onThemeChanged', paramCount: 1 },
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
  defaultProperty: 'seriesList',
};

export function Scatter3D(): Scatter3DBuilder {
  return createFluentBuilder('Scatter3D', SCATTER3D_META) as unknown as Scatter3DBuilder;
}

export namespace Scatter3D {
  export namespace ElementType {
    export const ElementNone = createEnumToken('Scatter3D', 'ElementType', 'ElementNone');
    export const ElementSeries = createEnumToken('Scatter3D', 'ElementType', 'ElementSeries');
    export const ElementAxisXLabel = createEnumToken('Scatter3D', 'ElementType', 'ElementAxisXLabel');
    export const ElementAxisYLabel = createEnumToken('Scatter3D', 'ElementType', 'ElementAxisYLabel');
    export const ElementAxisZLabel = createEnumToken('Scatter3D', 'ElementType', 'ElementAxisZLabel');
    export const ElementCustomItem = createEnumToken('Scatter3D', 'ElementType', 'ElementCustomItem');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Scatter3D', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Scatter3D', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Scatter3D', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Scatter3D', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Scatter3D', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Scatter3D', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Scatter3D', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Scatter3D', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Scatter3D', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Scatter3D', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Scatter3D', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace OptimizationHint {
    export const OptimizationDefault = createEnumToken('Scatter3D', 'OptimizationHint', 'OptimizationDefault');
    export const OptimizationStatic = createEnumToken('Scatter3D', 'OptimizationHint', 'OptimizationStatic');
  }
  export namespace OptimizationHints {
    export const OptimizationDefault = createEnumToken('Scatter3D', 'OptimizationHints', 'OptimizationDefault');
    export const OptimizationStatic = createEnumToken('Scatter3D', 'OptimizationHints', 'OptimizationStatic');
  }
  export namespace RenderingMode {
    export const RenderDirectToBackground = createEnumToken('Scatter3D', 'RenderingMode', 'RenderDirectToBackground');
    export const RenderDirectToBackground_NoClear = createEnumToken('Scatter3D', 'RenderingMode', 'RenderDirectToBackground_NoClear');
    export const RenderIndirect = createEnumToken('Scatter3D', 'RenderingMode', 'RenderIndirect');
  }
  export namespace SelectionFlag {
    export const SelectionNone = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionNone');
    export const SelectionItem = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionItem');
    export const SelectionRow = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionRow');
    export const SelectionItemAndRow = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionItemAndRow');
    export const SelectionColumn = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionColumn');
    export const SelectionItemAndColumn = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionItemAndColumn');
    export const SelectionRowAndColumn = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionRowAndColumn');
    export const SelectionItemRowAndColumn = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionItemRowAndColumn');
    export const SelectionSlice = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionSlice');
    export const SelectionMultiSeries = createEnumToken('Scatter3D', 'SelectionFlag', 'SelectionMultiSeries');
  }
  export namespace SelectionFlags {
    export const SelectionNone = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionNone');
    export const SelectionItem = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionItem');
    export const SelectionRow = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionRow');
    export const SelectionItemAndRow = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionItemAndRow');
    export const SelectionColumn = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionColumn');
    export const SelectionItemAndColumn = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionItemAndColumn');
    export const SelectionRowAndColumn = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionRowAndColumn');
    export const SelectionItemRowAndColumn = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionItemRowAndColumn');
    export const SelectionSlice = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionSlice');
    export const SelectionMultiSeries = createEnumToken('Scatter3D', 'SelectionFlags', 'SelectionMultiSeries');
  }
  export namespace ShadowQuality {
    export const ShadowQualityNone = createEnumToken('Scatter3D', 'ShadowQuality', 'ShadowQualityNone');
    export const ShadowQualityLow = createEnumToken('Scatter3D', 'ShadowQuality', 'ShadowQualityLow');
    export const ShadowQualityMedium = createEnumToken('Scatter3D', 'ShadowQuality', 'ShadowQualityMedium');
    export const ShadowQualityHigh = createEnumToken('Scatter3D', 'ShadowQuality', 'ShadowQualityHigh');
    export const ShadowQualitySoftLow = createEnumToken('Scatter3D', 'ShadowQuality', 'ShadowQualitySoftLow');
    export const ShadowQualitySoftMedium = createEnumToken('Scatter3D', 'ShadowQuality', 'ShadowQualitySoftMedium');
    export const ShadowQualitySoftHigh = createEnumToken('Scatter3D', 'ShadowQuality', 'ShadowQualitySoftHigh');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Scatter3D', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Scatter3D', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Scatter3D', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Scatter3D', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Scatter3D', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Scatter3D', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Scatter3D', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Scatter3D', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Scatter3D', 'TransformOrigin', 'BottomRight');
  }
}
