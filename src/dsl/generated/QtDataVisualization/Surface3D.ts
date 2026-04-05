// AUTO-GENERATED — DO NOT EDIT
// Type: Surface3D
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { Value3DAxisBuilder } from '../QtGraphs/Value3DAxis.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface Surface3DBuilder {
  id(id: string): Surface3DBuilder;
  child(obj: QmlObjectBuilder): Surface3DBuilder;

  activeFocusOnTab(value: boolean): Surface3DBuilder;
  activeFocusOnTabBind(expr: string): Surface3DBuilder;
  antialiasing(value: boolean): Surface3DBuilder;
  antialiasingBind(expr: string): Surface3DBuilder;
  aspectRatio(value: number): Surface3DBuilder;
  aspectRatioBind(expr: string): Surface3DBuilder;
  axisX(value: Value3DAxisBuilder): Surface3DBuilder;
  axisXBind(expr: string): Surface3DBuilder;
  axisY(value: Value3DAxisBuilder): Surface3DBuilder;
  axisYBind(expr: string): Surface3DBuilder;
  axisZ(value: Value3DAxisBuilder): Surface3DBuilder;
  axisZBind(expr: string): Surface3DBuilder;
  baselineOffset(value: number): Surface3DBuilder;
  baselineOffsetBind(expr: string): Surface3DBuilder;
  clip(value: boolean): Surface3DBuilder;
  clipBind(expr: string): Surface3DBuilder;
  containmentMask(value: QtObjectBuilder): Surface3DBuilder;
  containmentMaskBind(expr: string): Surface3DBuilder;
  enabled(value: boolean): Surface3DBuilder;
  enabledBind(expr: string): Surface3DBuilder;
  flipHorizontalGrid(value: boolean): Surface3DBuilder;
  flipHorizontalGridBind(expr: string): Surface3DBuilder;
  focus(value: boolean): Surface3DBuilder;
  focusBind(expr: string): Surface3DBuilder;
  focusPolicy(value: QmlEnumToken): Surface3DBuilder;
  focusPolicyBind(expr: string): Surface3DBuilder;
  height(value: number): Surface3DBuilder;
  heightBind(expr: string): Surface3DBuilder;
  horizontalAspectRatio(value: number): Surface3DBuilder;
  horizontalAspectRatioBind(expr: string): Surface3DBuilder;
  implicitHeight(value: number): Surface3DBuilder;
  implicitHeightBind(expr: string): Surface3DBuilder;
  implicitWidth(value: number): Surface3DBuilder;
  implicitWidthBind(expr: string): Surface3DBuilder;
  inputHandler(value: QmlValue): Surface3DBuilder;
  inputHandlerBind(expr: string): Surface3DBuilder;
  locale(value: string): Surface3DBuilder;
  localeBind(expr: string): Surface3DBuilder;
  margin(value: number): Surface3DBuilder;
  marginBind(expr: string): Surface3DBuilder;
  measureFps(value: boolean): Surface3DBuilder;
  measureFpsBind(expr: string): Surface3DBuilder;
  msaaSamples(value: number): Surface3DBuilder;
  msaaSamplesBind(expr: string): Surface3DBuilder;
  objectName(value: string): Surface3DBuilder;
  objectNameBind(expr: string): Surface3DBuilder;
  opacity(value: number): Surface3DBuilder;
  opacityBind(expr: string): Surface3DBuilder;
  optimizationHints(value: QmlEnumToken): Surface3DBuilder;
  optimizationHintsBind(expr: string): Surface3DBuilder;
  orthoProjection(value: boolean): Surface3DBuilder;
  orthoProjectionBind(expr: string): Surface3DBuilder;
  palette(value: PaletteBuilder): Surface3DBuilder;
  paletteBind(expr: string): Surface3DBuilder;
  parent(value: ItemBuilder): Surface3DBuilder;
  parentBind(expr: string): Surface3DBuilder;
  polar(value: boolean): Surface3DBuilder;
  polarBind(expr: string): Surface3DBuilder;
  radialLabelOffset(value: number): Surface3DBuilder;
  radialLabelOffsetBind(expr: string): Surface3DBuilder;
  reflection(value: boolean): Surface3DBuilder;
  reflectionBind(expr: string): Surface3DBuilder;
  reflectivity(value: number): Surface3DBuilder;
  reflectivityBind(expr: string): Surface3DBuilder;
  renderingMode(value: QmlEnumToken): Surface3DBuilder;
  renderingModeBind(expr: string): Surface3DBuilder;
  rotation(value: number): Surface3DBuilder;
  rotationBind(expr: string): Surface3DBuilder;
  scale(value: number): Surface3DBuilder;
  scaleBind(expr: string): Surface3DBuilder;
  selectionMode(value: QmlEnumToken): Surface3DBuilder;
  selectionModeBind(expr: string): Surface3DBuilder;
  shadowQuality(value: QmlEnumToken): Surface3DBuilder;
  shadowQualityBind(expr: string): Surface3DBuilder;
  smooth(value: boolean): Surface3DBuilder;
  smoothBind(expr: string): Surface3DBuilder;
  state(value: string): Surface3DBuilder;
  stateBind(expr: string): Surface3DBuilder;
  theme(value: QmlValue): Surface3DBuilder;
  themeBind(expr: string): Surface3DBuilder;
  transformOrigin(value: QmlEnumToken): Surface3DBuilder;
  transformOriginBind(expr: string): Surface3DBuilder;
  visible(value: boolean): Surface3DBuilder;
  visibleBind(expr: string): Surface3DBuilder;
  width(value: number): Surface3DBuilder;
  widthBind(expr: string): Surface3DBuilder;
  x(value: number): Surface3DBuilder;
  xBind(expr: string): Surface3DBuilder;
  y(value: number): Surface3DBuilder;
  yBind(expr: string): Surface3DBuilder;
  z(value: number): Surface3DBuilder;
  zBind(expr: string): Surface3DBuilder;
  onActiveFocusChanged(body: string): Surface3DBuilder;
  onActiveFocusOnTabChanged(body: string): Surface3DBuilder;
  onAntialiasingChanged(body: string): Surface3DBuilder;
  onAspectRatioChanged(body: string): Surface3DBuilder;
  onAxisXChanged(body: string): Surface3DBuilder;
  onAxisYChanged(body: string): Surface3DBuilder;
  onAxisZChanged(body: string): Surface3DBuilder;
  onBaselineOffsetChanged(body: string): Surface3DBuilder;
  onChildrenChanged(body: string): Surface3DBuilder;
  onChildrenRectChanged(body: string): Surface3DBuilder;
  onClipChanged(body: string): Surface3DBuilder;
  onContainmentMaskChanged(body: string): Surface3DBuilder;
  onCurrentFpsChanged(body: string): Surface3DBuilder;
  onEnabledChanged(body: string): Surface3DBuilder;
  onFlipHorizontalGridChanged(body: string): Surface3DBuilder;
  onFocusChanged(body: string): Surface3DBuilder;
  onFocusPolicyChanged(body: string): Surface3DBuilder;
  onHeightChanged(body: string): Surface3DBuilder;
  onHorizontalAspectRatioChanged(body: string): Surface3DBuilder;
  onImplicitHeightChanged(body: string): Surface3DBuilder;
  onImplicitWidthChanged(body: string): Surface3DBuilder;
  onInputHandlerChanged(body: string): Surface3DBuilder;
  onLocaleChanged(body: string): Surface3DBuilder;
  onMarginChanged(body: string): Surface3DBuilder;
  onMeasureFpsChanged(body: string): Surface3DBuilder;
  onMsaaSamplesChanged(body: string): Surface3DBuilder;
  onObjectNameChanged(body: string): Surface3DBuilder;
  onOpacityChanged(body: string): Surface3DBuilder;
  onOptimizationHintsChanged(body: string): Surface3DBuilder;
  onOrthoProjectionChanged(body: string): Surface3DBuilder;
  onPaletteChanged(body: string): Surface3DBuilder;
  onPaletteCreated(body: string): Surface3DBuilder;
  onParentChanged(body: string): Surface3DBuilder;
  onPolarChanged(body: string): Surface3DBuilder;
  onQueriedGraphPositionChanged(body: string): Surface3DBuilder;
  onRadialLabelOffsetChanged(body: string): Surface3DBuilder;
  onReflectionChanged(body: string): Surface3DBuilder;
  onReflectivityChanged(body: string): Surface3DBuilder;
  onRenderingModeChanged(body: string): Surface3DBuilder;
  onRotationChanged(body: string): Surface3DBuilder;
  onScaleChanged(body: string): Surface3DBuilder;
  onSceneChanged(body: string): Surface3DBuilder;
  onSelectedElementChanged(body: string): Surface3DBuilder;
  onSelectedSeriesChanged(body: string): Surface3DBuilder;
  onSelectionModeChanged(body: string): Surface3DBuilder;
  onShadowQualityChanged(body: string): Surface3DBuilder;
  onShadowsSupportedChanged(body: string): Surface3DBuilder;
  onSmoothChanged(body: string): Surface3DBuilder;
  onStateChanged(body: string): Surface3DBuilder;
  onThemeChanged(body: string): Surface3DBuilder;
  onTransformOriginChanged(body: string): Surface3DBuilder;
  onVisibleChanged(body: string): Surface3DBuilder;
  onVisibleChildrenChanged(body: string): Surface3DBuilder;
  onWidthChanged(body: string): Surface3DBuilder;
  onWindowChanged(body: string): Surface3DBuilder;
  onXChanged(body: string): Surface3DBuilder;
  onYChanged(body: string): Surface3DBuilder;
  onZChanged(body: string): Surface3DBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): Surface3DBuilder;
  layer(setup: (b: LayerBuilder) => void): Surface3DBuilder;
}

const SURFACE3D_META: TypeMetadata = {
  typeName: 'Surface3D',
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
    { name: 'flipHorizontalGrid', hasValue: true, hasBinding: true },
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
    { handlerName: 'onFlipHorizontalGridChanged', paramCount: 1 },
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
  attached: [],
  defaultProperty: 'seriesList',
};

export function Surface3D(): Surface3DBuilder {
  return createFluentBuilder('Surface3D', SURFACE3D_META) as unknown as Surface3DBuilder;
}

export namespace Surface3D {
  export namespace ElementType {
    export const ElementNone = createEnumToken('Surface3D', 'ElementType', 'ElementNone');
    export const ElementSeries = createEnumToken('Surface3D', 'ElementType', 'ElementSeries');
    export const ElementAxisXLabel = createEnumToken(
      'Surface3D',
      'ElementType',
      'ElementAxisXLabel',
    );
    export const ElementAxisYLabel = createEnumToken(
      'Surface3D',
      'ElementType',
      'ElementAxisYLabel',
    );
    export const ElementAxisZLabel = createEnumToken(
      'Surface3D',
      'ElementType',
      'ElementAxisZLabel',
    );
    export const ElementCustomItem = createEnumToken(
      'Surface3D',
      'ElementType',
      'ElementCustomItem',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Surface3D',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Surface3D',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Surface3D', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Surface3D', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Surface3D', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Surface3D', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Surface3D',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Surface3D', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Surface3D',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OptimizationHint {
    export const OptimizationDefault = createEnumToken(
      'Surface3D',
      'OptimizationHint',
      'OptimizationDefault',
    );
    export const OptimizationStatic = createEnumToken(
      'Surface3D',
      'OptimizationHint',
      'OptimizationStatic',
    );
  }
  export namespace OptimizationHints {
    export const OptimizationDefault = createEnumToken(
      'Surface3D',
      'OptimizationHints',
      'OptimizationDefault',
    );
    export const OptimizationStatic = createEnumToken(
      'Surface3D',
      'OptimizationHints',
      'OptimizationStatic',
    );
  }
  export namespace RenderingMode {
    export const RenderDirectToBackground = createEnumToken(
      'Surface3D',
      'RenderingMode',
      'RenderDirectToBackground',
    );
    export const RenderDirectToBackground_NoClear = createEnumToken(
      'Surface3D',
      'RenderingMode',
      'RenderDirectToBackground_NoClear',
    );
    export const RenderIndirect = createEnumToken('Surface3D', 'RenderingMode', 'RenderIndirect');
  }
  export namespace SelectionFlag {
    export const SelectionNone = createEnumToken('Surface3D', 'SelectionFlag', 'SelectionNone');
    export const SelectionItem = createEnumToken('Surface3D', 'SelectionFlag', 'SelectionItem');
    export const SelectionRow = createEnumToken('Surface3D', 'SelectionFlag', 'SelectionRow');
    export const SelectionItemAndRow = createEnumToken(
      'Surface3D',
      'SelectionFlag',
      'SelectionItemAndRow',
    );
    export const SelectionColumn = createEnumToken('Surface3D', 'SelectionFlag', 'SelectionColumn');
    export const SelectionItemAndColumn = createEnumToken(
      'Surface3D',
      'SelectionFlag',
      'SelectionItemAndColumn',
    );
    export const SelectionRowAndColumn = createEnumToken(
      'Surface3D',
      'SelectionFlag',
      'SelectionRowAndColumn',
    );
    export const SelectionItemRowAndColumn = createEnumToken(
      'Surface3D',
      'SelectionFlag',
      'SelectionItemRowAndColumn',
    );
    export const SelectionSlice = createEnumToken('Surface3D', 'SelectionFlag', 'SelectionSlice');
    export const SelectionMultiSeries = createEnumToken(
      'Surface3D',
      'SelectionFlag',
      'SelectionMultiSeries',
    );
  }
  export namespace SelectionFlags {
    export const SelectionNone = createEnumToken('Surface3D', 'SelectionFlags', 'SelectionNone');
    export const SelectionItem = createEnumToken('Surface3D', 'SelectionFlags', 'SelectionItem');
    export const SelectionRow = createEnumToken('Surface3D', 'SelectionFlags', 'SelectionRow');
    export const SelectionItemAndRow = createEnumToken(
      'Surface3D',
      'SelectionFlags',
      'SelectionItemAndRow',
    );
    export const SelectionColumn = createEnumToken(
      'Surface3D',
      'SelectionFlags',
      'SelectionColumn',
    );
    export const SelectionItemAndColumn = createEnumToken(
      'Surface3D',
      'SelectionFlags',
      'SelectionItemAndColumn',
    );
    export const SelectionRowAndColumn = createEnumToken(
      'Surface3D',
      'SelectionFlags',
      'SelectionRowAndColumn',
    );
    export const SelectionItemRowAndColumn = createEnumToken(
      'Surface3D',
      'SelectionFlags',
      'SelectionItemRowAndColumn',
    );
    export const SelectionSlice = createEnumToken('Surface3D', 'SelectionFlags', 'SelectionSlice');
    export const SelectionMultiSeries = createEnumToken(
      'Surface3D',
      'SelectionFlags',
      'SelectionMultiSeries',
    );
  }
  export namespace ShadowQuality {
    export const ShadowQualityNone = createEnumToken(
      'Surface3D',
      'ShadowQuality',
      'ShadowQualityNone',
    );
    export const ShadowQualityLow = createEnumToken(
      'Surface3D',
      'ShadowQuality',
      'ShadowQualityLow',
    );
    export const ShadowQualityMedium = createEnumToken(
      'Surface3D',
      'ShadowQuality',
      'ShadowQualityMedium',
    );
    export const ShadowQualityHigh = createEnumToken(
      'Surface3D',
      'ShadowQuality',
      'ShadowQualityHigh',
    );
    export const ShadowQualitySoftLow = createEnumToken(
      'Surface3D',
      'ShadowQuality',
      'ShadowQualitySoftLow',
    );
    export const ShadowQualitySoftMedium = createEnumToken(
      'Surface3D',
      'ShadowQuality',
      'ShadowQualitySoftMedium',
    );
    export const ShadowQualitySoftHigh = createEnumToken(
      'Surface3D',
      'ShadowQuality',
      'ShadowQualitySoftHigh',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Surface3D', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Surface3D', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Surface3D', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Surface3D', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Surface3D', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Surface3D', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Surface3D', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Surface3D', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Surface3D', 'TransformOrigin', 'BottomRight');
  }
}
