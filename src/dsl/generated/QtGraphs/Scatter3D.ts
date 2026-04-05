// AUTO-GENERATED — DO NOT EDIT
// Type: Scatter3D
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
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
import type { GraphsThemeBuilder } from './GraphsTheme.js';
import type { Value3DAxisBuilder } from './Value3DAxis.js';
export interface Scatter3DBuilder {
  id(id: string): Scatter3DBuilder;
  child(obj: QmlObjectBuilder): Scatter3DBuilder;

  activeFocusOnTab(value: boolean): Scatter3DBuilder;
  activeFocusOnTabBind(expr: string): Scatter3DBuilder;
  ambientLightStrength(value: number): Scatter3DBuilder;
  ambientLightStrengthBind(expr: string): Scatter3DBuilder;
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
  camera(value: QmlValue): Scatter3DBuilder;
  cameraBind(expr: string): Scatter3DBuilder;
  cameraPreset(value: QmlEnumToken): Scatter3DBuilder;
  cameraPresetBind(expr: string): Scatter3DBuilder;
  cameraTargetPosition(value: QmlVector3d): Scatter3DBuilder;
  cameraTargetPositionBind(expr: string): Scatter3DBuilder;
  cameraXRotation(value: number): Scatter3DBuilder;
  cameraXRotationBind(expr: string): Scatter3DBuilder;
  cameraYRotation(value: number): Scatter3DBuilder;
  cameraYRotationBind(expr: string): Scatter3DBuilder;
  cameraZoomLevel(value: number): Scatter3DBuilder;
  cameraZoomLevelBind(expr: string): Scatter3DBuilder;
  clip(value: boolean): Scatter3DBuilder;
  clipBind(expr: string): Scatter3DBuilder;
  containmentMask(value: QtObjectBuilder): Scatter3DBuilder;
  containmentMaskBind(expr: string): Scatter3DBuilder;
  cutoffMargin(value: number): Scatter3DBuilder;
  cutoffMarginBind(expr: string): Scatter3DBuilder;
  enabled(value: boolean): Scatter3DBuilder;
  enabledBind(expr: string): Scatter3DBuilder;
  environment(value: SceneEnvironmentBuilder): Scatter3DBuilder;
  environmentBind(expr: string): Scatter3DBuilder;
  explicitTextureHeight(value: number): Scatter3DBuilder;
  explicitTextureHeightBind(expr: string): Scatter3DBuilder;
  explicitTextureWidth(value: number): Scatter3DBuilder;
  explicitTextureWidthBind(expr: string): Scatter3DBuilder;
  focus(value: boolean): Scatter3DBuilder;
  focusBind(expr: string): Scatter3DBuilder;
  focusPolicy(value: QmlEnumToken): Scatter3DBuilder;
  focusPolicyBind(expr: string): Scatter3DBuilder;
  gridLineType(value: QmlEnumToken): Scatter3DBuilder;
  gridLineTypeBind(expr: string): Scatter3DBuilder;
  height(value: number): Scatter3DBuilder;
  heightBind(expr: string): Scatter3DBuilder;
  horizontalAspectRatio(value: number): Scatter3DBuilder;
  horizontalAspectRatioBind(expr: string): Scatter3DBuilder;
  implicitHeight(value: number): Scatter3DBuilder;
  implicitHeightBind(expr: string): Scatter3DBuilder;
  implicitWidth(value: number): Scatter3DBuilder;
  implicitWidthBind(expr: string): Scatter3DBuilder;
  importScene(value: NodeBuilder): Scatter3DBuilder;
  importSceneBind(expr: string): Scatter3DBuilder;
  labelMargin(value: number): Scatter3DBuilder;
  labelMarginBind(expr: string): Scatter3DBuilder;
  lightColor(value: QmlColor): Scatter3DBuilder;
  lightColorBind(expr: string): Scatter3DBuilder;
  lightStrength(value: number): Scatter3DBuilder;
  lightStrengthBind(expr: string): Scatter3DBuilder;
  locale(value: string): Scatter3DBuilder;
  localeBind(expr: string): Scatter3DBuilder;
  margin(value: number): Scatter3DBuilder;
  marginBind(expr: string): Scatter3DBuilder;
  maxCameraXRotation(value: number): Scatter3DBuilder;
  maxCameraXRotationBind(expr: string): Scatter3DBuilder;
  maxCameraYRotation(value: number): Scatter3DBuilder;
  maxCameraYRotationBind(expr: string): Scatter3DBuilder;
  maxCameraZoomLevel(value: number): Scatter3DBuilder;
  maxCameraZoomLevelBind(expr: string): Scatter3DBuilder;
  measureFps(value: boolean): Scatter3DBuilder;
  measureFpsBind(expr: string): Scatter3DBuilder;
  minCameraXRotation(value: number): Scatter3DBuilder;
  minCameraXRotationBind(expr: string): Scatter3DBuilder;
  minCameraYRotation(value: number): Scatter3DBuilder;
  minCameraYRotationBind(expr: string): Scatter3DBuilder;
  minCameraZoomLevel(value: number): Scatter3DBuilder;
  minCameraZoomLevelBind(expr: string): Scatter3DBuilder;
  msaaSamples(value: number): Scatter3DBuilder;
  msaaSamplesBind(expr: string): Scatter3DBuilder;
  objectName(value: string): Scatter3DBuilder;
  objectNameBind(expr: string): Scatter3DBuilder;
  opacity(value: number): Scatter3DBuilder;
  opacityBind(expr: string): Scatter3DBuilder;
  optimizationHint(value: QmlEnumToken): Scatter3DBuilder;
  optimizationHintBind(expr: string): Scatter3DBuilder;
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
  renderFormat(value: QmlEnumToken): Scatter3DBuilder;
  renderFormatBind(expr: string): Scatter3DBuilder;
  renderMode(value: QmlEnumToken): Scatter3DBuilder;
  renderModeBind(expr: string): Scatter3DBuilder;
  renderOverrides(value: QmlEnumToken): Scatter3DBuilder;
  renderOverridesBind(expr: string): Scatter3DBuilder;
  renderingMode(value: QmlEnumToken): Scatter3DBuilder;
  renderingModeBind(expr: string): Scatter3DBuilder;
  rotation(value: number): Scatter3DBuilder;
  rotationBind(expr: string): Scatter3DBuilder;
  rotationEnabled(value: boolean): Scatter3DBuilder;
  rotationEnabledBind(expr: string): Scatter3DBuilder;
  scale(value: number): Scatter3DBuilder;
  scaleBind(expr: string): Scatter3DBuilder;
  selectionEnabled(value: boolean): Scatter3DBuilder;
  selectionEnabledBind(expr: string): Scatter3DBuilder;
  selectionMode(value: QmlEnumToken): Scatter3DBuilder;
  selectionModeBind(expr: string): Scatter3DBuilder;
  shadowQuality(value: QmlEnumToken): Scatter3DBuilder;
  shadowQualityBind(expr: string): Scatter3DBuilder;
  shadowStrength(value: number): Scatter3DBuilder;
  shadowStrengthBind(expr: string): Scatter3DBuilder;
  smooth(value: boolean): Scatter3DBuilder;
  smoothBind(expr: string): Scatter3DBuilder;
  state(value: string): Scatter3DBuilder;
  stateBind(expr: string): Scatter3DBuilder;
  theme(value: GraphsThemeBuilder): Scatter3DBuilder;
  themeBind(expr: string): Scatter3DBuilder;
  transformOrigin(value: QmlEnumToken): Scatter3DBuilder;
  transformOriginBind(expr: string): Scatter3DBuilder;
  transparencyTechnique(value: QmlEnumToken): Scatter3DBuilder;
  transparencyTechniqueBind(expr: string): Scatter3DBuilder;
  visible(value: boolean): Scatter3DBuilder;
  visibleBind(expr: string): Scatter3DBuilder;
  width(value: number): Scatter3DBuilder;
  widthBind(expr: string): Scatter3DBuilder;
  wrapCameraXRotation(value: boolean): Scatter3DBuilder;
  wrapCameraXRotationBind(expr: string): Scatter3DBuilder;
  wrapCameraYRotation(value: boolean): Scatter3DBuilder;
  wrapCameraYRotationBind(expr: string): Scatter3DBuilder;
  x(value: number): Scatter3DBuilder;
  xBind(expr: string): Scatter3DBuilder;
  y(value: number): Scatter3DBuilder;
  yBind(expr: string): Scatter3DBuilder;
  z(value: number): Scatter3DBuilder;
  zBind(expr: string): Scatter3DBuilder;
  zoomAtTargetEnabled(value: boolean): Scatter3DBuilder;
  zoomAtTargetEnabledBind(expr: string): Scatter3DBuilder;
  zoomEnabled(value: boolean): Scatter3DBuilder;
  zoomEnabledBind(expr: string): Scatter3DBuilder;
  onActiveFocusChanged(body: string): Scatter3DBuilder;
  onActiveFocusOnTabChanged(body: string): Scatter3DBuilder;
  onActiveThemeChanged(body: string): Scatter3DBuilder;
  onAmbientLightStrengthChanged(body: string): Scatter3DBuilder;
  onAntialiasingChanged(body: string): Scatter3DBuilder;
  onAspectRatioChanged(body: string): Scatter3DBuilder;
  onAxisXChanged(body: string): Scatter3DBuilder;
  onAxisYChanged(body: string): Scatter3DBuilder;
  onAxisZChanged(body: string): Scatter3DBuilder;
  onBaselineOffsetChanged(body: string): Scatter3DBuilder;
  onCameraChanged(body: string): Scatter3DBuilder;
  onCameraPresetChanged(body: string): Scatter3DBuilder;
  onCameraTargetPositionChanged(body: string): Scatter3DBuilder;
  onCameraXRotationChanged(body: string): Scatter3DBuilder;
  onCameraYRotationChanged(body: string): Scatter3DBuilder;
  onCameraZoomLevelChanged(body: string): Scatter3DBuilder;
  onChildrenChanged(body: string): Scatter3DBuilder;
  onChildrenRectChanged(body: string): Scatter3DBuilder;
  onClipChanged(body: string): Scatter3DBuilder;
  onContainmentMaskChanged(body: string): Scatter3DBuilder;
  onCurrentFpsChanged(body: string): Scatter3DBuilder;
  onCutoffMarginChanged(body: string): Scatter3DBuilder;
  onDoubleTapped(body: string): Scatter3DBuilder;
  onDragged(body: string): Scatter3DBuilder;
  onEffectiveTextureSizeChanged(body: string): Scatter3DBuilder;
  onEnabledChanged(body: string): Scatter3DBuilder;
  onEnvironmentChanged(body: string): Scatter3DBuilder;
  onExplicitTextureHeightChanged(body: string): Scatter3DBuilder;
  onExplicitTextureWidthChanged(body: string): Scatter3DBuilder;
  onFocusChanged(body: string): Scatter3DBuilder;
  onFocusPolicyChanged(body: string): Scatter3DBuilder;
  onGridLineTypeChanged(body: string): Scatter3DBuilder;
  onHeightChanged(body: string): Scatter3DBuilder;
  onHorizontalAspectRatioChanged(body: string): Scatter3DBuilder;
  onImplicitHeightChanged(body: string): Scatter3DBuilder;
  onImplicitWidthChanged(body: string): Scatter3DBuilder;
  onImportSceneChanged(body: string): Scatter3DBuilder;
  onLabelMarginChanged(body: string): Scatter3DBuilder;
  onLightColorChanged(body: string): Scatter3DBuilder;
  onLightStrengthChanged(body: string): Scatter3DBuilder;
  onLocaleChanged(body: string): Scatter3DBuilder;
  onLongPressed(body: string): Scatter3DBuilder;
  onMarginChanged(body: string): Scatter3DBuilder;
  onMaxCameraXRotationChanged(body: string): Scatter3DBuilder;
  onMaxCameraYRotationChanged(body: string): Scatter3DBuilder;
  onMaxCameraZoomLevelChanged(body: string): Scatter3DBuilder;
  onMeasureFpsChanged(body: string): Scatter3DBuilder;
  onMinCameraXRotationChanged(body: string): Scatter3DBuilder;
  onMinCameraYRotationChanged(body: string): Scatter3DBuilder;
  onMinCameraZoomLevelChanged(body: string): Scatter3DBuilder;
  onMouseMove(body: string): Scatter3DBuilder;
  onMsaaSamplesChanged(body: string): Scatter3DBuilder;
  onNeedRender(body: string): Scatter3DBuilder;
  onObjectNameChanged(body: string): Scatter3DBuilder;
  onOpacityChanged(body: string): Scatter3DBuilder;
  onOptimizationHintChanged(body: string): Scatter3DBuilder;
  onOrthoProjectionChanged(body: string): Scatter3DBuilder;
  onPaletteChanged(body: string): Scatter3DBuilder;
  onPaletteCreated(body: string): Scatter3DBuilder;
  onParentChanged(body: string): Scatter3DBuilder;
  onPinch(body: string): Scatter3DBuilder;
  onPolarChanged(body: string): Scatter3DBuilder;
  onQueriedGraphPositionChanged(body: string): Scatter3DBuilder;
  onRadialLabelOffsetChanged(body: string): Scatter3DBuilder;
  onRenderFormatChanged(body: string): Scatter3DBuilder;
  onRenderModeChanged(body: string): Scatter3DBuilder;
  onRenderOverridesChanged(body: string): Scatter3DBuilder;
  onRenderingModeChanged(body: string): Scatter3DBuilder;
  onRotationChanged(body: string): Scatter3DBuilder;
  onRotationEnabledChanged(body: string): Scatter3DBuilder;
  onScaleChanged(body: string): Scatter3DBuilder;
  onSceneChanged(body: string): Scatter3DBuilder;
  onSelectedElementChanged(body: string): Scatter3DBuilder;
  onSelectedSeriesChanged(body: string): Scatter3DBuilder;
  onSelectionEnabledChanged(body: string): Scatter3DBuilder;
  onSelectionModeChanged(body: string): Scatter3DBuilder;
  onShadowQualityChanged(body: string): Scatter3DBuilder;
  onShadowStrengthChanged(body: string): Scatter3DBuilder;
  onShadowsSupportedChanged(body: string): Scatter3DBuilder;
  onSmoothChanged(body: string): Scatter3DBuilder;
  onStateChanged(body: string): Scatter3DBuilder;
  onTapped(body: string): Scatter3DBuilder;
  onThemeChanged(body: string): Scatter3DBuilder;
  onThemeTypeChanged(body: string): Scatter3DBuilder;
  onTransformOriginChanged(body: string): Scatter3DBuilder;
  onTransparencyTechniqueChanged(body: string): Scatter3DBuilder;
  onVisibleChanged(body: string): Scatter3DBuilder;
  onVisibleChildrenChanged(body: string): Scatter3DBuilder;
  onWheel(body: string): Scatter3DBuilder;
  onWidthChanged(body: string): Scatter3DBuilder;
  onWindowChanged(body: string): Scatter3DBuilder;
  onWrapCameraXRotationChanged(body: string): Scatter3DBuilder;
  onWrapCameraYRotationChanged(body: string): Scatter3DBuilder;
  onXChanged(body: string): Scatter3DBuilder;
  onYChanged(body: string): Scatter3DBuilder;
  onZChanged(body: string): Scatter3DBuilder;
  onZoomAtTargetEnabledChanged(body: string): Scatter3DBuilder;
  onZoomEnabledChanged(body: string): Scatter3DBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): Scatter3DBuilder;
  layer(setup: (b: LayerBuilder) => void): Scatter3DBuilder;
}

const SCATTER3D_META: TypeMetadata = {
  typeName: 'Scatter3D',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'ambientLightStrength', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisZ', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'cameraPreset', hasValue: true, hasBinding: true },
    { name: 'cameraTargetPosition', hasValue: true, hasBinding: true },
    { name: 'cameraXRotation', hasValue: true, hasBinding: true },
    { name: 'cameraYRotation', hasValue: true, hasBinding: true },
    { name: 'cameraZoomLevel', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'cutoffMargin', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'environment', hasValue: true, hasBinding: true },
    { name: 'explicitTextureHeight', hasValue: true, hasBinding: true },
    { name: 'explicitTextureWidth', hasValue: true, hasBinding: true },
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
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'optimizationHint', hasValue: true, hasBinding: true },
    { name: 'orthoProjection', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'polar', hasValue: true, hasBinding: true },
    { name: 'radialLabelOffset', hasValue: true, hasBinding: true },
    { name: 'renderFormat', hasValue: true, hasBinding: true },
    { name: 'renderMode', hasValue: true, hasBinding: true },
    { name: 'renderOverrides', hasValue: true, hasBinding: true },
    { name: 'renderingMode', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rotationEnabled', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMinCameraXRotationChanged', paramCount: 1 },
    { handlerName: 'onMinCameraYRotationChanged', paramCount: 1 },
    { handlerName: 'onMinCameraZoomLevelChanged', paramCount: 1 },
    { handlerName: 'onMouseMove', paramCount: 1 },
    { handlerName: 'onMsaaSamplesChanged', paramCount: 1 },
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
    { handlerName: 'onQueriedGraphPositionChanged', paramCount: 1 },
    { handlerName: 'onRadialLabelOffsetChanged', paramCount: 1 },
    { handlerName: 'onRenderFormatChanged', paramCount: 0 },
    { handlerName: 'onRenderModeChanged', paramCount: 0 },
    { handlerName: 'onRenderOverridesChanged', paramCount: 0 },
    { handlerName: 'onRenderingModeChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRotationEnabledChanged', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneChanged', paramCount: 0 },
    { handlerName: 'onSelectedElementChanged', paramCount: 1 },
    { handlerName: 'onSelectedSeriesChanged', paramCount: 1 },
    { handlerName: 'onSelectionEnabledChanged', paramCount: 1 },
    { handlerName: 'onSelectionModeChanged', paramCount: 1 },
    { handlerName: 'onShadowQualityChanged', paramCount: 1 },
    { handlerName: 'onShadowStrengthChanged', paramCount: 0 },
    { handlerName: 'onShadowsSupportedChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTapped', paramCount: 2 },
    { handlerName: 'onThemeChanged', paramCount: 1 },
    { handlerName: 'onThemeTypeChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onTransparencyTechniqueChanged', paramCount: 1 },
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

export function Scatter3D(): Scatter3DBuilder {
  return createFluentBuilder('Scatter3D', SCATTER3D_META) as unknown as Scatter3DBuilder;
}

export namespace Scatter3D {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Scatter3D',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Scatter3D',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Scatter3D', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Scatter3D', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Scatter3D', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Scatter3D', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Scatter3D',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Scatter3D', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Scatter3D',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RenderMode {
    export const Offscreen = createEnumToken('Scatter3D', 'RenderMode', 'Offscreen');
    export const Underlay = createEnumToken('Scatter3D', 'RenderMode', 'Underlay');
    export const Overlay = createEnumToken('Scatter3D', 'RenderMode', 'Overlay');
    export const Inline = createEnumToken('Scatter3D', 'RenderMode', 'Inline');
  }
  export namespace RenderOverride {
    export const None = createEnumToken('Scatter3D', 'RenderOverride', 'None');
    export const DisableInternalPasses = createEnumToken(
      'Scatter3D',
      'RenderOverride',
      'DisableInternalPasses',
    );
  }
  export namespace RenderOverrides {
    export const None = createEnumToken('Scatter3D', 'RenderOverrides', 'None');
    export const DisableInternalPasses = createEnumToken(
      'Scatter3D',
      'RenderOverrides',
      'DisableInternalPasses',
    );
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
