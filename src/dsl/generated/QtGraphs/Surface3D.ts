// AUTO-GENERATED — DO NOT EDIT
// Type: Surface3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
export interface Surface3DBuilder {
  id(id: string): Surface3DBuilder;
  child(obj: QmlObjectBuilder): Surface3DBuilder;
  children(...objs: QmlObjectBuilder[]): Surface3DBuilder;

  activeFocusOnTab(value: boolean): Surface3DBuilder;
  activeFocusOnTabBind(expr: string): Surface3DBuilder;
  ambientLightStrength(value: number): Surface3DBuilder;
  ambientLightStrengthBind(expr: string): Surface3DBuilder;
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
  camera(value: QmlValue): Surface3DBuilder;
  cameraBind(expr: string): Surface3DBuilder;
  cameraPreset(value: QmlEnumToken): Surface3DBuilder;
  cameraPresetBind(expr: string): Surface3DBuilder;
  cameraTargetPosition(value: QmlVector3d): Surface3DBuilder;
  cameraTargetPositionBind(expr: string): Surface3DBuilder;
  cameraXRotation(value: number): Surface3DBuilder;
  cameraXRotationBind(expr: string): Surface3DBuilder;
  cameraYRotation(value: number): Surface3DBuilder;
  cameraYRotationBind(expr: string): Surface3DBuilder;
  cameraZoomLevel(value: number): Surface3DBuilder;
  cameraZoomLevelBind(expr: string): Surface3DBuilder;
  clip(value: boolean): Surface3DBuilder;
  clipBind(expr: string): Surface3DBuilder;
  containmentMask(value: QtObjectBuilder): Surface3DBuilder;
  containmentMaskBind(expr: string): Surface3DBuilder;
  cutoffMargin(value: number): Surface3DBuilder;
  cutoffMarginBind(expr: string): Surface3DBuilder;
  enabled(value: boolean): Surface3DBuilder;
  enabledBind(expr: string): Surface3DBuilder;
  environment(value: SceneEnvironmentBuilder): Surface3DBuilder;
  environmentBind(expr: string): Surface3DBuilder;
  explicitTextureHeight(value: number): Surface3DBuilder;
  explicitTextureHeightBind(expr: string): Surface3DBuilder;
  explicitTextureWidth(value: number): Surface3DBuilder;
  explicitTextureWidthBind(expr: string): Surface3DBuilder;
  flipHorizontalGrid(value: boolean): Surface3DBuilder;
  flipHorizontalGridBind(expr: string): Surface3DBuilder;
  focus(value: boolean): Surface3DBuilder;
  focusBind(expr: string): Surface3DBuilder;
  focusPolicy(value: QmlEnumToken): Surface3DBuilder;
  focusPolicyBind(expr: string): Surface3DBuilder;
  gridLineType(value: QmlEnumToken): Surface3DBuilder;
  gridLineTypeBind(expr: string): Surface3DBuilder;
  height(value: number): Surface3DBuilder;
  heightBind(expr: string): Surface3DBuilder;
  horizontalAspectRatio(value: number): Surface3DBuilder;
  horizontalAspectRatioBind(expr: string): Surface3DBuilder;
  implicitHeight(value: number): Surface3DBuilder;
  implicitHeightBind(expr: string): Surface3DBuilder;
  implicitWidth(value: number): Surface3DBuilder;
  implicitWidthBind(expr: string): Surface3DBuilder;
  importScene(value: NodeBuilder): Surface3DBuilder;
  importSceneBind(expr: string): Surface3DBuilder;
  labelMargin(value: number): Surface3DBuilder;
  labelMarginBind(expr: string): Surface3DBuilder;
  lightColor(value: QmlColor): Surface3DBuilder;
  lightColorBind(expr: string): Surface3DBuilder;
  lightStrength(value: number): Surface3DBuilder;
  lightStrengthBind(expr: string): Surface3DBuilder;
  locale(value: string): Surface3DBuilder;
  localeBind(expr: string): Surface3DBuilder;
  margin(value: number): Surface3DBuilder;
  marginBind(expr: string): Surface3DBuilder;
  maxCameraXRotation(value: number): Surface3DBuilder;
  maxCameraXRotationBind(expr: string): Surface3DBuilder;
  maxCameraYRotation(value: number): Surface3DBuilder;
  maxCameraYRotationBind(expr: string): Surface3DBuilder;
  maxCameraZoomLevel(value: number): Surface3DBuilder;
  maxCameraZoomLevelBind(expr: string): Surface3DBuilder;
  measureFps(value: boolean): Surface3DBuilder;
  measureFpsBind(expr: string): Surface3DBuilder;
  minCameraXRotation(value: number): Surface3DBuilder;
  minCameraXRotationBind(expr: string): Surface3DBuilder;
  minCameraYRotation(value: number): Surface3DBuilder;
  minCameraYRotationBind(expr: string): Surface3DBuilder;
  minCameraZoomLevel(value: number): Surface3DBuilder;
  minCameraZoomLevelBind(expr: string): Surface3DBuilder;
  msaaSamples(value: number): Surface3DBuilder;
  msaaSamplesBind(expr: string): Surface3DBuilder;
  objectName(value: string): Surface3DBuilder;
  objectNameBind(expr: string): Surface3DBuilder;
  opacity(value: number): Surface3DBuilder;
  opacityBind(expr: string): Surface3DBuilder;
  optimizationHint(value: QmlEnumToken): Surface3DBuilder;
  optimizationHintBind(expr: string): Surface3DBuilder;
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
  renderFormat(value: QmlEnumToken): Surface3DBuilder;
  renderFormatBind(expr: string): Surface3DBuilder;
  renderMode(value: QmlEnumToken): Surface3DBuilder;
  renderModeBind(expr: string): Surface3DBuilder;
  renderOverrides(value: QmlEnumToken): Surface3DBuilder;
  renderOverridesBind(expr: string): Surface3DBuilder;
  renderingMode(value: QmlEnumToken): Surface3DBuilder;
  renderingModeBind(expr: string): Surface3DBuilder;
  rotation(value: number): Surface3DBuilder;
  rotationBind(expr: string): Surface3DBuilder;
  rotationEnabled(value: boolean): Surface3DBuilder;
  rotationEnabledBind(expr: string): Surface3DBuilder;
  scale(value: number): Surface3DBuilder;
  scaleBind(expr: string): Surface3DBuilder;
  selectionEnabled(value: boolean): Surface3DBuilder;
  selectionEnabledBind(expr: string): Surface3DBuilder;
  selectionMode(value: QmlEnumToken): Surface3DBuilder;
  selectionModeBind(expr: string): Surface3DBuilder;
  shadowQuality(value: QmlEnumToken): Surface3DBuilder;
  shadowQualityBind(expr: string): Surface3DBuilder;
  shadowStrength(value: number): Surface3DBuilder;
  shadowStrengthBind(expr: string): Surface3DBuilder;
  smooth(value: boolean): Surface3DBuilder;
  smoothBind(expr: string): Surface3DBuilder;
  state(value: string): Surface3DBuilder;
  stateBind(expr: string): Surface3DBuilder;
  theme(value: GraphsThemeBuilder): Surface3DBuilder;
  themeBind(expr: string): Surface3DBuilder;
  transformOrigin(value: QmlEnumToken): Surface3DBuilder;
  transformOriginBind(expr: string): Surface3DBuilder;
  transparencyTechnique(value: QmlEnumToken): Surface3DBuilder;
  transparencyTechniqueBind(expr: string): Surface3DBuilder;
  visible(value: boolean): Surface3DBuilder;
  visibleBind(expr: string): Surface3DBuilder;
  width(value: number): Surface3DBuilder;
  widthBind(expr: string): Surface3DBuilder;
  wrapCameraXRotation(value: boolean): Surface3DBuilder;
  wrapCameraXRotationBind(expr: string): Surface3DBuilder;
  wrapCameraYRotation(value: boolean): Surface3DBuilder;
  wrapCameraYRotationBind(expr: string): Surface3DBuilder;
  x(value: number): Surface3DBuilder;
  xBind(expr: string): Surface3DBuilder;
  y(value: number): Surface3DBuilder;
  yBind(expr: string): Surface3DBuilder;
  z(value: number): Surface3DBuilder;
  zBind(expr: string): Surface3DBuilder;
  zoomAtTargetEnabled(value: boolean): Surface3DBuilder;
  zoomAtTargetEnabledBind(expr: string): Surface3DBuilder;
  zoomEnabled(value: boolean): Surface3DBuilder;
  zoomEnabledBind(expr: string): Surface3DBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onActiveThemeChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onAmbientLightStrengthChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onAspectRatioChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onAxisZChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onCameraChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onCameraPresetChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onCameraTargetPositionChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onCameraXRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onCameraYRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onCameraZoomLevelChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onClipChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onCurrentFpsChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onCutoffMarginChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onDoubleTapped(handler: DslSignalHandlerValue): Surface3DBuilder;
  onDragged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onEffectiveTextureSizeChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onEnvironmentChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onExplicitTextureHeightChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onExplicitTextureWidthChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onFlipHorizontalGridChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onGridLineTypeChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onHorizontalAspectRatioChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onImportSceneChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onLabelMarginChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onLightColorChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onLightStrengthChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onLongPressed(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMarginChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMaxCameraXRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMaxCameraYRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMaxCameraZoomLevelChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMeasureFpsChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMinCameraXRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMinCameraYRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMinCameraZoomLevelChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMouseMove(handler: DslSignalHandlerValue): Surface3DBuilder;
  onMsaaSamplesChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onNeedRender(handler: DslSignalHandlerValue): Surface3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onOptimizationHintChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onOrthoProjectionChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): Surface3DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onPinch(handler: DslSignalHandlerValue): Surface3DBuilder;
  onPolarChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onQueriedGraphPositionChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onRadialLabelOffsetChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onRenderFormatChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onRenderModeChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onRenderOverridesChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onRenderingModeChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onRotationEnabledChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onSceneChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onSelectedElementChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onSelectedSeriesChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onSelectionEnabledChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onSelectionModeChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onShadowQualityChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onShadowStrengthChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onShadowsSupportedChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onSliceImageChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onStateChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onTapped(handler: DslSignalHandlerValue): Surface3DBuilder;
  onThemeChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onThemeTypeChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onTransparencyTechniqueChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onWheel(handler: DslSignalHandlerValue): Surface3DBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onWrapCameraXRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onWrapCameraYRotationChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onXChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onYChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onZChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onZoomAtTargetEnabledChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  onZoomEnabledChanged(handler: DslSignalHandlerValue): Surface3DBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): Surface3DBuilder;
  layer(setup: (b: LayerBuilder) => void): Surface3DBuilder;
}

const SURFACE3D_META: TypeMetadata = {
  typeName: 'Surface3D',
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
    { name: 'flipHorizontalGrid', hasValue: true, hasBinding: true },
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
    { handlerName: 'onFlipHorizontalGridChanged', paramCount: 1 },
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
    { handlerName: 'onSliceImageChanged', paramCount: 1 },
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

export function Surface3D(): Surface3DBuilder {
  return createFluentBuilder('Surface3D', SURFACE3D_META) as unknown as Surface3DBuilder;
}

export namespace Surface3D {
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
  export namespace RenderMode {
    export const Offscreen = createEnumToken('Surface3D', 'RenderMode', 'Offscreen');
    export const Underlay = createEnumToken('Surface3D', 'RenderMode', 'Underlay');
    export const Overlay = createEnumToken('Surface3D', 'RenderMode', 'Overlay');
    export const Inline = createEnumToken('Surface3D', 'RenderMode', 'Inline');
  }
  export namespace RenderOverride {
    export const None = createEnumToken('Surface3D', 'RenderOverride', 'None');
    export const DisableInternalPasses = createEnumToken(
      'Surface3D',
      'RenderOverride',
      'DisableInternalPasses',
    );
  }
  export namespace RenderOverrides {
    export const None = createEnumToken('Surface3D', 'RenderOverrides', 'None');
    export const DisableInternalPasses = createEnumToken(
      'Surface3D',
      'RenderOverrides',
      'DisableInternalPasses',
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
