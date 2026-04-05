// AUTO-GENERATED — DO NOT EDIT
// Type: Bars3D
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlSize,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { Category3DAxisBuilder } from '../QtGraphs/Category3DAxis.js';
import type { Value3DAxisBuilder } from '../QtGraphs/Value3DAxis.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface Bars3DBuilder {
  id(id: string): Bars3DBuilder;
  child(obj: QmlObjectBuilder): Bars3DBuilder;

  activeFocusOnTab(value: boolean): Bars3DBuilder;
  activeFocusOnTabBind(expr: string): Bars3DBuilder;
  antialiasing(value: boolean): Bars3DBuilder;
  antialiasingBind(expr: string): Bars3DBuilder;
  aspectRatio(value: number): Bars3DBuilder;
  aspectRatioBind(expr: string): Bars3DBuilder;
  barSeriesMargin(value: QmlSize): Bars3DBuilder;
  barSeriesMarginBind(expr: string): Bars3DBuilder;
  barSpacing(value: QmlSize): Bars3DBuilder;
  barSpacingBind(expr: string): Bars3DBuilder;
  barSpacingRelative(value: boolean): Bars3DBuilder;
  barSpacingRelativeBind(expr: string): Bars3DBuilder;
  barThickness(value: number): Bars3DBuilder;
  barThicknessBind(expr: string): Bars3DBuilder;
  baselineOffset(value: number): Bars3DBuilder;
  baselineOffsetBind(expr: string): Bars3DBuilder;
  clip(value: boolean): Bars3DBuilder;
  clipBind(expr: string): Bars3DBuilder;
  columnAxis(value: Category3DAxisBuilder): Bars3DBuilder;
  columnAxisBind(expr: string): Bars3DBuilder;
  containmentMask(value: QtObjectBuilder): Bars3DBuilder;
  containmentMaskBind(expr: string): Bars3DBuilder;
  enabled(value: boolean): Bars3DBuilder;
  enabledBind(expr: string): Bars3DBuilder;
  floorLevel(value: number): Bars3DBuilder;
  floorLevelBind(expr: string): Bars3DBuilder;
  focus(value: boolean): Bars3DBuilder;
  focusBind(expr: string): Bars3DBuilder;
  focusPolicy(value: QmlEnumToken): Bars3DBuilder;
  focusPolicyBind(expr: string): Bars3DBuilder;
  height(value: number): Bars3DBuilder;
  heightBind(expr: string): Bars3DBuilder;
  horizontalAspectRatio(value: number): Bars3DBuilder;
  horizontalAspectRatioBind(expr: string): Bars3DBuilder;
  implicitHeight(value: number): Bars3DBuilder;
  implicitHeightBind(expr: string): Bars3DBuilder;
  implicitWidth(value: number): Bars3DBuilder;
  implicitWidthBind(expr: string): Bars3DBuilder;
  inputHandler(value: QmlValue): Bars3DBuilder;
  inputHandlerBind(expr: string): Bars3DBuilder;
  locale(value: string): Bars3DBuilder;
  localeBind(expr: string): Bars3DBuilder;
  margin(value: number): Bars3DBuilder;
  marginBind(expr: string): Bars3DBuilder;
  measureFps(value: boolean): Bars3DBuilder;
  measureFpsBind(expr: string): Bars3DBuilder;
  msaaSamples(value: number): Bars3DBuilder;
  msaaSamplesBind(expr: string): Bars3DBuilder;
  multiSeriesUniform(value: boolean): Bars3DBuilder;
  multiSeriesUniformBind(expr: string): Bars3DBuilder;
  objectName(value: string): Bars3DBuilder;
  objectNameBind(expr: string): Bars3DBuilder;
  opacity(value: number): Bars3DBuilder;
  opacityBind(expr: string): Bars3DBuilder;
  optimizationHints(value: QmlEnumToken): Bars3DBuilder;
  optimizationHintsBind(expr: string): Bars3DBuilder;
  orthoProjection(value: boolean): Bars3DBuilder;
  orthoProjectionBind(expr: string): Bars3DBuilder;
  palette(value: PaletteBuilder): Bars3DBuilder;
  paletteBind(expr: string): Bars3DBuilder;
  parent(value: ItemBuilder): Bars3DBuilder;
  parentBind(expr: string): Bars3DBuilder;
  polar(value: boolean): Bars3DBuilder;
  polarBind(expr: string): Bars3DBuilder;
  primarySeries(value: QmlValue): Bars3DBuilder;
  primarySeriesBind(expr: string): Bars3DBuilder;
  radialLabelOffset(value: number): Bars3DBuilder;
  radialLabelOffsetBind(expr: string): Bars3DBuilder;
  reflection(value: boolean): Bars3DBuilder;
  reflectionBind(expr: string): Bars3DBuilder;
  reflectivity(value: number): Bars3DBuilder;
  reflectivityBind(expr: string): Bars3DBuilder;
  renderingMode(value: QmlEnumToken): Bars3DBuilder;
  renderingModeBind(expr: string): Bars3DBuilder;
  rotation(value: number): Bars3DBuilder;
  rotationBind(expr: string): Bars3DBuilder;
  rowAxis(value: Category3DAxisBuilder): Bars3DBuilder;
  rowAxisBind(expr: string): Bars3DBuilder;
  scale(value: number): Bars3DBuilder;
  scaleBind(expr: string): Bars3DBuilder;
  selectionMode(value: QmlEnumToken): Bars3DBuilder;
  selectionModeBind(expr: string): Bars3DBuilder;
  shadowQuality(value: QmlEnumToken): Bars3DBuilder;
  shadowQualityBind(expr: string): Bars3DBuilder;
  smooth(value: boolean): Bars3DBuilder;
  smoothBind(expr: string): Bars3DBuilder;
  state(value: string): Bars3DBuilder;
  stateBind(expr: string): Bars3DBuilder;
  theme(value: QmlValue): Bars3DBuilder;
  themeBind(expr: string): Bars3DBuilder;
  transformOrigin(value: QmlEnumToken): Bars3DBuilder;
  transformOriginBind(expr: string): Bars3DBuilder;
  valueAxis(value: Value3DAxisBuilder): Bars3DBuilder;
  valueAxisBind(expr: string): Bars3DBuilder;
  visible(value: boolean): Bars3DBuilder;
  visibleBind(expr: string): Bars3DBuilder;
  width(value: number): Bars3DBuilder;
  widthBind(expr: string): Bars3DBuilder;
  x(value: number): Bars3DBuilder;
  xBind(expr: string): Bars3DBuilder;
  y(value: number): Bars3DBuilder;
  yBind(expr: string): Bars3DBuilder;
  z(value: number): Bars3DBuilder;
  zBind(expr: string): Bars3DBuilder;
  onActiveFocusChanged(body: string): Bars3DBuilder;
  onActiveFocusOnTabChanged(body: string): Bars3DBuilder;
  onAntialiasingChanged(body: string): Bars3DBuilder;
  onAspectRatioChanged(body: string): Bars3DBuilder;
  onBarSeriesMarginChanged(body: string): Bars3DBuilder;
  onBarSpacingChanged(body: string): Bars3DBuilder;
  onBarSpacingRelativeChanged(body: string): Bars3DBuilder;
  onBarThicknessChanged(body: string): Bars3DBuilder;
  onBaselineOffsetChanged(body: string): Bars3DBuilder;
  onChildrenChanged(body: string): Bars3DBuilder;
  onChildrenRectChanged(body: string): Bars3DBuilder;
  onClipChanged(body: string): Bars3DBuilder;
  onColumnAxisChanged(body: string): Bars3DBuilder;
  onContainmentMaskChanged(body: string): Bars3DBuilder;
  onCurrentFpsChanged(body: string): Bars3DBuilder;
  onEnabledChanged(body: string): Bars3DBuilder;
  onFloorLevelChanged(body: string): Bars3DBuilder;
  onFocusChanged(body: string): Bars3DBuilder;
  onFocusPolicyChanged(body: string): Bars3DBuilder;
  onHeightChanged(body: string): Bars3DBuilder;
  onHorizontalAspectRatioChanged(body: string): Bars3DBuilder;
  onImplicitHeightChanged(body: string): Bars3DBuilder;
  onImplicitWidthChanged(body: string): Bars3DBuilder;
  onInputHandlerChanged(body: string): Bars3DBuilder;
  onLocaleChanged(body: string): Bars3DBuilder;
  onMarginChanged(body: string): Bars3DBuilder;
  onMeasureFpsChanged(body: string): Bars3DBuilder;
  onMeshFileNameChanged(body: string): Bars3DBuilder;
  onMsaaSamplesChanged(body: string): Bars3DBuilder;
  onMultiSeriesUniformChanged(body: string): Bars3DBuilder;
  onObjectNameChanged(body: string): Bars3DBuilder;
  onOpacityChanged(body: string): Bars3DBuilder;
  onOptimizationHintsChanged(body: string): Bars3DBuilder;
  onOrthoProjectionChanged(body: string): Bars3DBuilder;
  onPaletteChanged(body: string): Bars3DBuilder;
  onPaletteCreated(body: string): Bars3DBuilder;
  onParentChanged(body: string): Bars3DBuilder;
  onPolarChanged(body: string): Bars3DBuilder;
  onPrimarySeriesChanged(body: string): Bars3DBuilder;
  onQueriedGraphPositionChanged(body: string): Bars3DBuilder;
  onRadialLabelOffsetChanged(body: string): Bars3DBuilder;
  onReflectionChanged(body: string): Bars3DBuilder;
  onReflectivityChanged(body: string): Bars3DBuilder;
  onRenderingModeChanged(body: string): Bars3DBuilder;
  onRotationChanged(body: string): Bars3DBuilder;
  onRowAxisChanged(body: string): Bars3DBuilder;
  onScaleChanged(body: string): Bars3DBuilder;
  onSceneChanged(body: string): Bars3DBuilder;
  onSelectedElementChanged(body: string): Bars3DBuilder;
  onSelectedSeriesChanged(body: string): Bars3DBuilder;
  onSelectionModeChanged(body: string): Bars3DBuilder;
  onShadowQualityChanged(body: string): Bars3DBuilder;
  onShadowsSupportedChanged(body: string): Bars3DBuilder;
  onSmoothChanged(body: string): Bars3DBuilder;
  onStateChanged(body: string): Bars3DBuilder;
  onThemeChanged(body: string): Bars3DBuilder;
  onTransformOriginChanged(body: string): Bars3DBuilder;
  onValueAxisChanged(body: string): Bars3DBuilder;
  onVisibleChanged(body: string): Bars3DBuilder;
  onVisibleChildrenChanged(body: string): Bars3DBuilder;
  onWidthChanged(body: string): Bars3DBuilder;
  onWindowChanged(body: string): Bars3DBuilder;
  onXChanged(body: string): Bars3DBuilder;
  onYChanged(body: string): Bars3DBuilder;
  onZChanged(body: string): Bars3DBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): Bars3DBuilder;
  layer(setup: (b: LayerBuilder) => void): Bars3DBuilder;
}

const BARS3D_META: TypeMetadata = {
  typeName: 'Bars3D',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'barSeriesMargin', hasValue: true, hasBinding: true },
    { name: 'barSpacing', hasValue: true, hasBinding: true },
    { name: 'barSpacingRelative', hasValue: true, hasBinding: true },
    { name: 'barThickness', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'columnAxis', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'floorLevel', hasValue: true, hasBinding: true },
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
    { name: 'multiSeriesUniform', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'optimizationHints', hasValue: true, hasBinding: true },
    { name: 'orthoProjection', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'polar', hasValue: true, hasBinding: true },
    { name: 'primarySeries', hasValue: true, hasBinding: true },
    { name: 'radialLabelOffset', hasValue: true, hasBinding: true },
    { name: 'reflection', hasValue: true, hasBinding: true },
    { name: 'reflectivity', hasValue: true, hasBinding: true },
    { name: 'renderingMode', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rowAxis', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectionMode', hasValue: true, hasBinding: true },
    { name: 'shadowQuality', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'valueAxis', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBarSeriesMarginChanged', paramCount: 1 },
    { handlerName: 'onBarSpacingChanged', paramCount: 1 },
    { handlerName: 'onBarSpacingRelativeChanged', paramCount: 1 },
    { handlerName: 'onBarThicknessChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColumnAxisChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFpsChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFloorLevelChanged', paramCount: 1 },
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
    { handlerName: 'onMeshFileNameChanged', paramCount: 1 },
    { handlerName: 'onMsaaSamplesChanged', paramCount: 1 },
    { handlerName: 'onMultiSeriesUniformChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOptimizationHintsChanged', paramCount: 1 },
    { handlerName: 'onOrthoProjectionChanged', paramCount: 1 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPolarChanged', paramCount: 1 },
    { handlerName: 'onPrimarySeriesChanged', paramCount: 1 },
    { handlerName: 'onQueriedGraphPositionChanged', paramCount: 1 },
    { handlerName: 'onRadialLabelOffsetChanged', paramCount: 1 },
    { handlerName: 'onReflectionChanged', paramCount: 1 },
    { handlerName: 'onReflectivityChanged', paramCount: 1 },
    { handlerName: 'onRenderingModeChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRowAxisChanged', paramCount: 1 },
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
    { handlerName: 'onValueAxisChanged', paramCount: 1 },
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

export function Bars3D(): Bars3DBuilder {
  return createFluentBuilder('Bars3D', BARS3D_META) as unknown as Bars3DBuilder;
}

export namespace Bars3D {
  export namespace ElementType {
    export const ElementNone = createEnumToken('Bars3D', 'ElementType', 'ElementNone');
    export const ElementSeries = createEnumToken('Bars3D', 'ElementType', 'ElementSeries');
    export const ElementAxisXLabel = createEnumToken('Bars3D', 'ElementType', 'ElementAxisXLabel');
    export const ElementAxisYLabel = createEnumToken('Bars3D', 'ElementType', 'ElementAxisYLabel');
    export const ElementAxisZLabel = createEnumToken('Bars3D', 'ElementType', 'ElementAxisZLabel');
    export const ElementCustomItem = createEnumToken('Bars3D', 'ElementType', 'ElementCustomItem');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Bars3D',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Bars3D',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Bars3D', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Bars3D', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Bars3D', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Bars3D', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Bars3D', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Bars3D', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Bars3D',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OptimizationHint {
    export const OptimizationDefault = createEnumToken(
      'Bars3D',
      'OptimizationHint',
      'OptimizationDefault',
    );
    export const OptimizationStatic = createEnumToken(
      'Bars3D',
      'OptimizationHint',
      'OptimizationStatic',
    );
  }
  export namespace OptimizationHints {
    export const OptimizationDefault = createEnumToken(
      'Bars3D',
      'OptimizationHints',
      'OptimizationDefault',
    );
    export const OptimizationStatic = createEnumToken(
      'Bars3D',
      'OptimizationHints',
      'OptimizationStatic',
    );
  }
  export namespace RenderingMode {
    export const RenderDirectToBackground = createEnumToken(
      'Bars3D',
      'RenderingMode',
      'RenderDirectToBackground',
    );
    export const RenderDirectToBackground_NoClear = createEnumToken(
      'Bars3D',
      'RenderingMode',
      'RenderDirectToBackground_NoClear',
    );
    export const RenderIndirect = createEnumToken('Bars3D', 'RenderingMode', 'RenderIndirect');
  }
  export namespace SelectionFlag {
    export const SelectionNone = createEnumToken('Bars3D', 'SelectionFlag', 'SelectionNone');
    export const SelectionItem = createEnumToken('Bars3D', 'SelectionFlag', 'SelectionItem');
    export const SelectionRow = createEnumToken('Bars3D', 'SelectionFlag', 'SelectionRow');
    export const SelectionItemAndRow = createEnumToken(
      'Bars3D',
      'SelectionFlag',
      'SelectionItemAndRow',
    );
    export const SelectionColumn = createEnumToken('Bars3D', 'SelectionFlag', 'SelectionColumn');
    export const SelectionItemAndColumn = createEnumToken(
      'Bars3D',
      'SelectionFlag',
      'SelectionItemAndColumn',
    );
    export const SelectionRowAndColumn = createEnumToken(
      'Bars3D',
      'SelectionFlag',
      'SelectionRowAndColumn',
    );
    export const SelectionItemRowAndColumn = createEnumToken(
      'Bars3D',
      'SelectionFlag',
      'SelectionItemRowAndColumn',
    );
    export const SelectionSlice = createEnumToken('Bars3D', 'SelectionFlag', 'SelectionSlice');
    export const SelectionMultiSeries = createEnumToken(
      'Bars3D',
      'SelectionFlag',
      'SelectionMultiSeries',
    );
  }
  export namespace SelectionFlags {
    export const SelectionNone = createEnumToken('Bars3D', 'SelectionFlags', 'SelectionNone');
    export const SelectionItem = createEnumToken('Bars3D', 'SelectionFlags', 'SelectionItem');
    export const SelectionRow = createEnumToken('Bars3D', 'SelectionFlags', 'SelectionRow');
    export const SelectionItemAndRow = createEnumToken(
      'Bars3D',
      'SelectionFlags',
      'SelectionItemAndRow',
    );
    export const SelectionColumn = createEnumToken('Bars3D', 'SelectionFlags', 'SelectionColumn');
    export const SelectionItemAndColumn = createEnumToken(
      'Bars3D',
      'SelectionFlags',
      'SelectionItemAndColumn',
    );
    export const SelectionRowAndColumn = createEnumToken(
      'Bars3D',
      'SelectionFlags',
      'SelectionRowAndColumn',
    );
    export const SelectionItemRowAndColumn = createEnumToken(
      'Bars3D',
      'SelectionFlags',
      'SelectionItemRowAndColumn',
    );
    export const SelectionSlice = createEnumToken('Bars3D', 'SelectionFlags', 'SelectionSlice');
    export const SelectionMultiSeries = createEnumToken(
      'Bars3D',
      'SelectionFlags',
      'SelectionMultiSeries',
    );
  }
  export namespace ShadowQuality {
    export const ShadowQualityNone = createEnumToken(
      'Bars3D',
      'ShadowQuality',
      'ShadowQualityNone',
    );
    export const ShadowQualityLow = createEnumToken('Bars3D', 'ShadowQuality', 'ShadowQualityLow');
    export const ShadowQualityMedium = createEnumToken(
      'Bars3D',
      'ShadowQuality',
      'ShadowQualityMedium',
    );
    export const ShadowQualityHigh = createEnumToken(
      'Bars3D',
      'ShadowQuality',
      'ShadowQualityHigh',
    );
    export const ShadowQualitySoftLow = createEnumToken(
      'Bars3D',
      'ShadowQuality',
      'ShadowQualitySoftLow',
    );
    export const ShadowQualitySoftMedium = createEnumToken(
      'Bars3D',
      'ShadowQuality',
      'ShadowQualitySoftMedium',
    );
    export const ShadowQualitySoftHigh = createEnumToken(
      'Bars3D',
      'ShadowQuality',
      'ShadowQualitySoftHigh',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Bars3D', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Bars3D', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Bars3D', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Bars3D', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Bars3D', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Bars3D', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Bars3D', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Bars3D', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Bars3D', 'TransformOrigin', 'BottomRight');
  }
}
