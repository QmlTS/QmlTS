// AUTO-GENERATED — DO NOT EDIT
// Type: Bars3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlSize,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { NodeBuilder } from '../QtQuick3D/Node.js';
import type { SceneEnvironmentBuilder } from '../QtQuick3D/SceneEnvironment.js';
import type { Category3DAxisBuilder } from './Category3DAxis.js';
import type { GraphsThemeBuilder } from './GraphsTheme.js';
import type { Value3DAxisBuilder } from './Value3DAxis.js';
export interface Bars3DBuilder {
  id(id: string): Bars3DBuilder;
  child(obj: QmlObjectBuilder): Bars3DBuilder;
  children(...objs: QmlObjectBuilder[]): Bars3DBuilder;

  activeFocusOnTab(value: boolean): Bars3DBuilder;
  activeFocusOnTabBind(expr: string): Bars3DBuilder;
  ambientLightStrength(value: number): Bars3DBuilder;
  ambientLightStrengthBind(expr: string): Bars3DBuilder;
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
  camera(value: QmlValue): Bars3DBuilder;
  cameraBind(expr: string): Bars3DBuilder;
  cameraPreset(value: QmlEnumToken): Bars3DBuilder;
  cameraPresetBind(expr: string): Bars3DBuilder;
  cameraTargetPosition(value: QmlVector3d): Bars3DBuilder;
  cameraTargetPositionBind(expr: string): Bars3DBuilder;
  cameraXRotation(value: number): Bars3DBuilder;
  cameraXRotationBind(expr: string): Bars3DBuilder;
  cameraYRotation(value: number): Bars3DBuilder;
  cameraYRotationBind(expr: string): Bars3DBuilder;
  cameraZoomLevel(value: number): Bars3DBuilder;
  cameraZoomLevelBind(expr: string): Bars3DBuilder;
  clip(value: boolean): Bars3DBuilder;
  clipBind(expr: string): Bars3DBuilder;
  columnAxis(value: Category3DAxisBuilder): Bars3DBuilder;
  columnAxisBind(expr: string): Bars3DBuilder;
  containmentMask(value: QtObjectBuilder): Bars3DBuilder;
  containmentMaskBind(expr: string): Bars3DBuilder;
  cutoffMargin(value: number): Bars3DBuilder;
  cutoffMarginBind(expr: string): Bars3DBuilder;
  enabled(value: boolean): Bars3DBuilder;
  enabledBind(expr: string): Bars3DBuilder;
  environment(value: SceneEnvironmentBuilder): Bars3DBuilder;
  environmentBind(expr: string): Bars3DBuilder;
  explicitTextureHeight(value: number): Bars3DBuilder;
  explicitTextureHeightBind(expr: string): Bars3DBuilder;
  explicitTextureWidth(value: number): Bars3DBuilder;
  explicitTextureWidthBind(expr: string): Bars3DBuilder;
  floorLevel(value: number): Bars3DBuilder;
  floorLevelBind(expr: string): Bars3DBuilder;
  focus(value: boolean): Bars3DBuilder;
  focusBind(expr: string): Bars3DBuilder;
  focusPolicy(value: QmlEnumToken): Bars3DBuilder;
  focusPolicyBind(expr: string): Bars3DBuilder;
  gridLineType(value: QmlEnumToken): Bars3DBuilder;
  gridLineTypeBind(expr: string): Bars3DBuilder;
  height(value: number): Bars3DBuilder;
  heightBind(expr: string): Bars3DBuilder;
  horizontalAspectRatio(value: number): Bars3DBuilder;
  horizontalAspectRatioBind(expr: string): Bars3DBuilder;
  implicitHeight(value: number): Bars3DBuilder;
  implicitHeightBind(expr: string): Bars3DBuilder;
  implicitWidth(value: number): Bars3DBuilder;
  implicitWidthBind(expr: string): Bars3DBuilder;
  importScene(value: NodeBuilder): Bars3DBuilder;
  importSceneBind(expr: string): Bars3DBuilder;
  labelMargin(value: number): Bars3DBuilder;
  labelMarginBind(expr: string): Bars3DBuilder;
  lightColor(value: QmlColor): Bars3DBuilder;
  lightColorBind(expr: string): Bars3DBuilder;
  lightStrength(value: number): Bars3DBuilder;
  lightStrengthBind(expr: string): Bars3DBuilder;
  locale(value: string): Bars3DBuilder;
  localeBind(expr: string): Bars3DBuilder;
  margin(value: number): Bars3DBuilder;
  marginBind(expr: string): Bars3DBuilder;
  maxCameraXRotation(value: number): Bars3DBuilder;
  maxCameraXRotationBind(expr: string): Bars3DBuilder;
  maxCameraYRotation(value: number): Bars3DBuilder;
  maxCameraYRotationBind(expr: string): Bars3DBuilder;
  maxCameraZoomLevel(value: number): Bars3DBuilder;
  maxCameraZoomLevelBind(expr: string): Bars3DBuilder;
  measureFps(value: boolean): Bars3DBuilder;
  measureFpsBind(expr: string): Bars3DBuilder;
  minCameraXRotation(value: number): Bars3DBuilder;
  minCameraXRotationBind(expr: string): Bars3DBuilder;
  minCameraYRotation(value: number): Bars3DBuilder;
  minCameraYRotationBind(expr: string): Bars3DBuilder;
  minCameraZoomLevel(value: number): Bars3DBuilder;
  minCameraZoomLevelBind(expr: string): Bars3DBuilder;
  msaaSamples(value: number): Bars3DBuilder;
  msaaSamplesBind(expr: string): Bars3DBuilder;
  multiSeriesUniform(value: boolean): Bars3DBuilder;
  multiSeriesUniformBind(expr: string): Bars3DBuilder;
  objectName(value: string): Bars3DBuilder;
  objectNameBind(expr: string): Bars3DBuilder;
  opacity(value: number): Bars3DBuilder;
  opacityBind(expr: string): Bars3DBuilder;
  optimizationHint(value: QmlEnumToken): Bars3DBuilder;
  optimizationHintBind(expr: string): Bars3DBuilder;
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
  renderFormat(value: QmlEnumToken): Bars3DBuilder;
  renderFormatBind(expr: string): Bars3DBuilder;
  renderMode(value: QmlEnumToken): Bars3DBuilder;
  renderModeBind(expr: string): Bars3DBuilder;
  renderOverrides(value: QmlEnumToken): Bars3DBuilder;
  renderOverridesBind(expr: string): Bars3DBuilder;
  renderingMode(value: QmlEnumToken): Bars3DBuilder;
  renderingModeBind(expr: string): Bars3DBuilder;
  rotation(value: number): Bars3DBuilder;
  rotationBind(expr: string): Bars3DBuilder;
  rotationEnabled(value: boolean): Bars3DBuilder;
  rotationEnabledBind(expr: string): Bars3DBuilder;
  rowAxis(value: Category3DAxisBuilder): Bars3DBuilder;
  rowAxisBind(expr: string): Bars3DBuilder;
  scale(value: number): Bars3DBuilder;
  scaleBind(expr: string): Bars3DBuilder;
  selectionEnabled(value: boolean): Bars3DBuilder;
  selectionEnabledBind(expr: string): Bars3DBuilder;
  selectionMode(value: QmlEnumToken): Bars3DBuilder;
  selectionModeBind(expr: string): Bars3DBuilder;
  shadowQuality(value: QmlEnumToken): Bars3DBuilder;
  shadowQualityBind(expr: string): Bars3DBuilder;
  shadowStrength(value: number): Bars3DBuilder;
  shadowStrengthBind(expr: string): Bars3DBuilder;
  smooth(value: boolean): Bars3DBuilder;
  smoothBind(expr: string): Bars3DBuilder;
  state(value: string): Bars3DBuilder;
  stateBind(expr: string): Bars3DBuilder;
  theme(value: GraphsThemeBuilder): Bars3DBuilder;
  themeBind(expr: string): Bars3DBuilder;
  transformOrigin(value: QmlEnumToken): Bars3DBuilder;
  transformOriginBind(expr: string): Bars3DBuilder;
  transparencyTechnique(value: QmlEnumToken): Bars3DBuilder;
  transparencyTechniqueBind(expr: string): Bars3DBuilder;
  valueAxis(value: Value3DAxisBuilder): Bars3DBuilder;
  valueAxisBind(expr: string): Bars3DBuilder;
  visible(value: boolean): Bars3DBuilder;
  visibleBind(expr: string): Bars3DBuilder;
  width(value: number): Bars3DBuilder;
  widthBind(expr: string): Bars3DBuilder;
  wrapCameraXRotation(value: boolean): Bars3DBuilder;
  wrapCameraXRotationBind(expr: string): Bars3DBuilder;
  wrapCameraYRotation(value: boolean): Bars3DBuilder;
  wrapCameraYRotationBind(expr: string): Bars3DBuilder;
  x(value: number): Bars3DBuilder;
  xBind(expr: string): Bars3DBuilder;
  y(value: number): Bars3DBuilder;
  yBind(expr: string): Bars3DBuilder;
  z(value: number): Bars3DBuilder;
  zBind(expr: string): Bars3DBuilder;
  zoomAtTargetEnabled(value: boolean): Bars3DBuilder;
  zoomAtTargetEnabledBind(expr: string): Bars3DBuilder;
  zoomEnabled(value: boolean): Bars3DBuilder;
  zoomEnabledBind(expr: string): Bars3DBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onActiveThemeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onAmbientLightStrengthChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onAspectRatioChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onAxisZChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onBarSeriesMarginChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onBarSpacingChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onBarSpacingRelativeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onBarThicknessChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onCameraChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onCameraPresetChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onCameraTargetPositionChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onCameraXRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onCameraYRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onCameraZoomLevelChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onClipChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onColumnAxisChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onCurrentFpsChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onCutoffMarginChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onDoubleTapped(handler: DslSignalHandlerValue): Bars3DBuilder;
  onDragged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onEffectiveTextureSizeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onEnvironmentChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onExplicitTextureHeightChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onExplicitTextureWidthChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onFloorLevelChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onGridLineTypeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onHorizontalAspectRatioChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onImportSceneChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onLabelMarginChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onLightColorChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onLightStrengthChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onLongPressed(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMarginChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMaxCameraXRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMaxCameraYRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMaxCameraZoomLevelChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMeasureFpsChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMeshFileNameChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMinCameraXRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMinCameraYRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMinCameraZoomLevelChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMouseMove(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMsaaSamplesChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onMultiSeriesUniformChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onNeedRender(handler: DslSignalHandlerValue): Bars3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onOptimizationHintChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onOrthoProjectionChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): Bars3DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onPinch(handler: DslSignalHandlerValue): Bars3DBuilder;
  onPolarChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onPrimarySeriesChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onQueriedGraphPositionChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onRadialLabelOffsetChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onRenderFormatChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onRenderModeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onRenderOverridesChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onRenderingModeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onRotationEnabledChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onRowAxisChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onSceneChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onSelectedElementChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onSelectedSeriesChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onSelectionEnabledChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onSelectionModeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onShadowQualityChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onShadowStrengthChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onShadowsSupportedChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onSliceImageChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onStateChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onTapped(handler: DslSignalHandlerValue): Bars3DBuilder;
  onThemeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onThemeTypeChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onTransparencyTechniqueChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onValueAxisChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onWheel(handler: DslSignalHandlerValue): Bars3DBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onWrapCameraXRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onWrapCameraYRotationChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onXChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onYChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onZChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onZoomAtTargetEnabledChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  onZoomEnabledChanged(handler: DslSignalHandlerValue): Bars3DBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): Bars3DBuilder;
  layer(setup: (b: LayerBuilder) => void): Bars3DBuilder;
}

const BARS3D_META: TypeMetadata = {
  typeName: 'Bars3D',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'ambientLightStrength', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'barSeriesMargin', hasValue: true, hasBinding: true },
    { name: 'barSpacing', hasValue: true, hasBinding: true },
    { name: 'barSpacingRelative', hasValue: true, hasBinding: true },
    { name: 'barThickness', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'cameraPreset', hasValue: true, hasBinding: true },
    { name: 'cameraTargetPosition', hasValue: true, hasBinding: true },
    { name: 'cameraXRotation', hasValue: true, hasBinding: true },
    { name: 'cameraYRotation', hasValue: true, hasBinding: true },
    { name: 'cameraZoomLevel', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'columnAxis', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'cutoffMargin', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'environment', hasValue: true, hasBinding: true },
    { name: 'explicitTextureHeight', hasValue: true, hasBinding: true },
    { name: 'explicitTextureWidth', hasValue: true, hasBinding: true },
    { name: 'floorLevel', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'gridLineType', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAspectRatio', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'importScene', hasValue: true, hasBinding: true },
    { name: 'labelMargin', hasValue: true, hasBinding: true },
    { name: 'lightColor', hasValue: true, hasBinding: true },
    { name: 'lightStrength', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'margin', hasValue: true, hasBinding: true },
    { name: 'maxCameraXRotation', hasValue: true, hasBinding: true },
    { name: 'maxCameraYRotation', hasValue: true, hasBinding: true },
    { name: 'maxCameraZoomLevel', hasValue: true, hasBinding: true },
    { name: 'measureFps', hasValue: true, hasBinding: true },
    { name: 'minCameraXRotation', hasValue: true, hasBinding: true },
    { name: 'minCameraYRotation', hasValue: true, hasBinding: true },
    { name: 'minCameraZoomLevel', hasValue: true, hasBinding: true },
    { name: 'msaaSamples', hasValue: true, hasBinding: true },
    { name: 'multiSeriesUniform', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'optimizationHint', hasValue: true, hasBinding: true },
    { name: 'orthoProjection', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'polar', hasValue: true, hasBinding: true },
    { name: 'primarySeries', hasValue: true, hasBinding: true },
    { name: 'radialLabelOffset', hasValue: true, hasBinding: true },
    { name: 'renderFormat', hasValue: true, hasBinding: true },
    { name: 'renderMode', hasValue: true, hasBinding: true },
    { name: 'renderOverrides', hasValue: true, hasBinding: true },
    { name: 'renderingMode', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rotationEnabled', hasValue: true, hasBinding: true },
    { name: 'rowAxis', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectionEnabled', hasValue: true, hasBinding: true },
    { name: 'selectionMode', hasValue: true, hasBinding: true },
    { name: 'shadowQuality', hasValue: true, hasBinding: true },
    { name: 'shadowStrength', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'transparencyTechnique', hasValue: true, hasBinding: true },
    { name: 'valueAxis', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrapCameraXRotation', hasValue: true, hasBinding: true },
    { name: 'wrapCameraYRotation', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
    { name: 'zoomAtTargetEnabled', hasValue: true, hasBinding: true },
    { name: 'zoomEnabled', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onActiveThemeChanged', paramCount: 1 },
    { handlerName: 'onAmbientLightStrengthChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAspectRatioChanged', paramCount: 1 },
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onAxisZChanged', paramCount: 1 },
    { handlerName: 'onBarSeriesMarginChanged', paramCount: 1 },
    { handlerName: 'onBarSpacingChanged', paramCount: 1 },
    { handlerName: 'onBarSpacingRelativeChanged', paramCount: 1 },
    { handlerName: 'onBarThicknessChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onCameraChanged', paramCount: 0 },
    { handlerName: 'onCameraPresetChanged', paramCount: 1 },
    { handlerName: 'onCameraTargetPositionChanged', paramCount: 1 },
    { handlerName: 'onCameraXRotationChanged', paramCount: 1 },
    { handlerName: 'onCameraYRotationChanged', paramCount: 1 },
    { handlerName: 'onCameraZoomLevelChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColumnAxisChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFpsChanged', paramCount: 1 },
    { handlerName: 'onCutoffMarginChanged', paramCount: 1 },
    { handlerName: 'onDoubleTapped', paramCount: 2 },
    { handlerName: 'onDragged', paramCount: 1 },
    { handlerName: 'onEffectiveTextureSizeChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEnvironmentChanged', paramCount: 0 },
    { handlerName: 'onExplicitTextureHeightChanged', paramCount: 0 },
    { handlerName: 'onExplicitTextureWidthChanged', paramCount: 0 },
    { handlerName: 'onFloorLevelChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGridLineTypeChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAspectRatioChanged', paramCount: 1 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onImportSceneChanged', paramCount: 0 },
    { handlerName: 'onLabelMarginChanged', paramCount: 1 },
    { handlerName: 'onLightColorChanged', paramCount: 0 },
    { handlerName: 'onLightStrengthChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 1 },
    { handlerName: 'onLongPressed', paramCount: 0 },
    { handlerName: 'onMarginChanged', paramCount: 1 },
    { handlerName: 'onMaxCameraXRotationChanged', paramCount: 1 },
    { handlerName: 'onMaxCameraYRotationChanged', paramCount: 1 },
    { handlerName: 'onMaxCameraZoomLevelChanged', paramCount: 1 },
    { handlerName: 'onMeasureFpsChanged', paramCount: 1 },
    { handlerName: 'onMeshFileNameChanged', paramCount: 1 },
    { handlerName: 'onMinCameraXRotationChanged', paramCount: 1 },
    { handlerName: 'onMinCameraYRotationChanged', paramCount: 1 },
    { handlerName: 'onMinCameraZoomLevelChanged', paramCount: 1 },
    { handlerName: 'onMouseMove', paramCount: 1 },
    { handlerName: 'onMsaaSamplesChanged', paramCount: 1 },
    { handlerName: 'onMultiSeriesUniformChanged', paramCount: 1 },
    { handlerName: 'onNeedRender', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOptimizationHintChanged', paramCount: 1 },
    { handlerName: 'onOrthoProjectionChanged', paramCount: 1 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPinch', paramCount: 1 },
    { handlerName: 'onPolarChanged', paramCount: 1 },
    { handlerName: 'onPrimarySeriesChanged', paramCount: 1 },
    { handlerName: 'onQueriedGraphPositionChanged', paramCount: 1 },
    { handlerName: 'onRadialLabelOffsetChanged', paramCount: 1 },
    { handlerName: 'onRenderFormatChanged', paramCount: 0 },
    { handlerName: 'onRenderModeChanged', paramCount: 0 },
    { handlerName: 'onRenderOverridesChanged', paramCount: 0 },
    { handlerName: 'onRenderingModeChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRotationEnabledChanged', paramCount: 1 },
    { handlerName: 'onRowAxisChanged', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneChanged', paramCount: 0 },
    { handlerName: 'onSelectedElementChanged', paramCount: 1 },
    { handlerName: 'onSelectedSeriesChanged', paramCount: 1 },
    { handlerName: 'onSelectionEnabledChanged', paramCount: 1 },
    { handlerName: 'onSelectionModeChanged', paramCount: 1 },
    { handlerName: 'onShadowQualityChanged', paramCount: 1 },
    { handlerName: 'onShadowStrengthChanged', paramCount: 0 },
    { handlerName: 'onShadowsSupportedChanged', paramCount: 1 },
    { handlerName: 'onSliceImageChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTapped', paramCount: 2 },
    { handlerName: 'onThemeChanged', paramCount: 1 },
    { handlerName: 'onThemeTypeChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onTransparencyTechniqueChanged', paramCount: 1 },
    { handlerName: 'onValueAxisChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWheel', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWrapCameraXRotationChanged', paramCount: 1 },
    { handlerName: 'onWrapCameraYRotationChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
    { handlerName: 'onZoomAtTargetEnabledChanged', paramCount: 1 },
    { handlerName: 'onZoomEnabledChanged', paramCount: 1 },
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
  export namespace RenderMode {
    export const Offscreen = createEnumToken('Bars3D', 'RenderMode', 'Offscreen');
    export const Underlay = createEnumToken('Bars3D', 'RenderMode', 'Underlay');
    export const Overlay = createEnumToken('Bars3D', 'RenderMode', 'Overlay');
    export const Inline = createEnumToken('Bars3D', 'RenderMode', 'Inline');
  }
  export namespace RenderOverride {
    export const None = createEnumToken('Bars3D', 'RenderOverride', 'None');
    export const DisableInternalPasses = createEnumToken(
      'Bars3D',
      'RenderOverride',
      'DisableInternalPasses',
    );
  }
  export namespace RenderOverrides {
    export const None = createEnumToken('Bars3D', 'RenderOverrides', 'None');
    export const DisableInternalPasses = createEnumToken(
      'Bars3D',
      'RenderOverrides',
      'DisableInternalPasses',
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
