// AUTO-GENERATED — DO NOT EDIT
// Type: SceneEnvironment
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { CubeMapTextureBuilder } from './CubeMapTexture.js';
import type { DebugSettingsBuilder } from './DebugSettings.js';
import type { FogBuilder } from './Fog.js';
import type { LightmapperBuilder } from './Lightmapper.js';
import type { TextureBuilder } from './Texture.js';
export interface SceneEnvironmentBuilder {
  id(id: string): SceneEnvironmentBuilder;
  child(obj: QmlObjectBuilder): SceneEnvironmentBuilder;
  children(...objs: QmlObjectBuilder[]): SceneEnvironmentBuilder;

  antialiasingMode(value: QmlEnumToken): SceneEnvironmentBuilder;
  antialiasingModeBind(expr: string): SceneEnvironmentBuilder;
  antialiasingQuality(value: QmlEnumToken): SceneEnvironmentBuilder;
  antialiasingQualityBind(expr: string): SceneEnvironmentBuilder;
  aoBias(value: number): SceneEnvironmentBuilder;
  aoBiasBind(expr: string): SceneEnvironmentBuilder;
  aoDistance(value: number): SceneEnvironmentBuilder;
  aoDistanceBind(expr: string): SceneEnvironmentBuilder;
  aoDither(value: boolean): SceneEnvironmentBuilder;
  aoDitherBind(expr: string): SceneEnvironmentBuilder;
  aoEnabled(value: boolean): SceneEnvironmentBuilder;
  aoEnabledBind(expr: string): SceneEnvironmentBuilder;
  aoSampleRate(value: number): SceneEnvironmentBuilder;
  aoSampleRateBind(expr: string): SceneEnvironmentBuilder;
  aoSoftness(value: number): SceneEnvironmentBuilder;
  aoSoftnessBind(expr: string): SceneEnvironmentBuilder;
  aoStrength(value: number): SceneEnvironmentBuilder;
  aoStrengthBind(expr: string): SceneEnvironmentBuilder;
  backgroundMode(value: QmlEnumToken): SceneEnvironmentBuilder;
  backgroundModeBind(expr: string): SceneEnvironmentBuilder;
  clearColor(value: QmlColor): SceneEnvironmentBuilder;
  clearColorBind(expr: string): SceneEnvironmentBuilder;
  debugSettings(value: DebugSettingsBuilder): SceneEnvironmentBuilder;
  debugSettingsBind(expr: string): SceneEnvironmentBuilder;
  depthPrePassEnabled(value: boolean): SceneEnvironmentBuilder;
  depthPrePassEnabledBind(expr: string): SceneEnvironmentBuilder;
  depthTestEnabled(value: boolean): SceneEnvironmentBuilder;
  depthTestEnabledBind(expr: string): SceneEnvironmentBuilder;
  fog(value: FogBuilder): SceneEnvironmentBuilder;
  fogBind(expr: string): SceneEnvironmentBuilder;
  lightProbe(value: TextureBuilder): SceneEnvironmentBuilder;
  lightProbeBind(expr: string): SceneEnvironmentBuilder;
  lightmapper(value: LightmapperBuilder): SceneEnvironmentBuilder;
  lightmapperBind(expr: string): SceneEnvironmentBuilder;
  objectName(value: string): SceneEnvironmentBuilder;
  objectNameBind(expr: string): SceneEnvironmentBuilder;
  oitMethod(value: QmlEnumToken): SceneEnvironmentBuilder;
  oitMethodBind(expr: string): SceneEnvironmentBuilder;
  parent(value: QmlValue): SceneEnvironmentBuilder;
  parentBind(expr: string): SceneEnvironmentBuilder;
  probeExposure(value: number): SceneEnvironmentBuilder;
  probeExposureBind(expr: string): SceneEnvironmentBuilder;
  probeHorizon(value: number): SceneEnvironmentBuilder;
  probeHorizonBind(expr: string): SceneEnvironmentBuilder;
  probeOrientation(value: QmlVector3d): SceneEnvironmentBuilder;
  probeOrientationBind(expr: string): SceneEnvironmentBuilder;
  scissorRect(value: QmlRect): SceneEnvironmentBuilder;
  scissorRectBind(expr: string): SceneEnvironmentBuilder;
  skyBoxCubeMap(value: CubeMapTextureBuilder): SceneEnvironmentBuilder;
  skyBoxCubeMapBind(expr: string): SceneEnvironmentBuilder;
  skyboxBlurAmount(value: number): SceneEnvironmentBuilder;
  skyboxBlurAmountBind(expr: string): SceneEnvironmentBuilder;
  specularAAEnabled(value: boolean): SceneEnvironmentBuilder;
  specularAAEnabledBind(expr: string): SceneEnvironmentBuilder;
  state(value: string): SceneEnvironmentBuilder;
  stateBind(expr: string): SceneEnvironmentBuilder;
  temporalAAEnabled(value: boolean): SceneEnvironmentBuilder;
  temporalAAEnabledBind(expr: string): SceneEnvironmentBuilder;
  temporalAAMode(value: QmlEnumToken): SceneEnvironmentBuilder;
  temporalAAModeBind(expr: string): SceneEnvironmentBuilder;
  temporalAAStrength(value: number): SceneEnvironmentBuilder;
  temporalAAStrengthBind(expr: string): SceneEnvironmentBuilder;
  tonemapMode(value: QmlEnumToken): SceneEnvironmentBuilder;
  tonemapModeBind(expr: string): SceneEnvironmentBuilder;
  onAntialiasingModeChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onAntialiasingQualityChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onAoBiasChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onAoDistanceChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onAoDitherChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onAoEnabledChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onAoSampleRateChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onAoSoftnessChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onAoStrengthChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onBackgroundModeChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onClearColorChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onDebugSettingsChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onDepthPrePassEnabledChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onDepthTestEnabledChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onFogChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onLightProbeChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onLightmapperChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onOitMethodChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onProbeExposureChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onProbeHorizonChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onProbeOrientationChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onScissorRectChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onSkyBoxCubeMapChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onSkyboxBlurAmountChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onSpecularAAEnabledChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onTemporalAAEnabledChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onTemporalAAModeChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onTemporalAAStrengthChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
  onTonemapModeChanged(handler: DslSignalHandlerValue): SceneEnvironmentBuilder;
}

const SCENEENVIRONMENT_META: TypeMetadata = {
  typeName: 'SceneEnvironment',
  properties: [
    { name: 'antialiasingMode', hasValue: true, hasBinding: true },
    { name: 'antialiasingQuality', hasValue: true, hasBinding: true },
    { name: 'aoBias', hasValue: true, hasBinding: true },
    { name: 'aoDistance', hasValue: true, hasBinding: true },
    { name: 'aoDither', hasValue: true, hasBinding: true },
    { name: 'aoEnabled', hasValue: true, hasBinding: true },
    { name: 'aoSampleRate', hasValue: true, hasBinding: true },
    { name: 'aoSoftness', hasValue: true, hasBinding: true },
    { name: 'aoStrength', hasValue: true, hasBinding: true },
    { name: 'backgroundMode', hasValue: true, hasBinding: true },
    { name: 'clearColor', hasValue: true, hasBinding: true },
    { name: 'debugSettings', hasValue: true, hasBinding: true },
    { name: 'depthPrePassEnabled', hasValue: true, hasBinding: true },
    { name: 'depthTestEnabled', hasValue: true, hasBinding: true },
    { name: 'fog', hasValue: true, hasBinding: true },
    { name: 'lightProbe', hasValue: true, hasBinding: true },
    { name: 'lightmapper', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'oitMethod', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'probeExposure', hasValue: true, hasBinding: true },
    { name: 'probeHorizon', hasValue: true, hasBinding: true },
    { name: 'probeOrientation', hasValue: true, hasBinding: true },
    { name: 'scissorRect', hasValue: true, hasBinding: true },
    { name: 'skyBoxCubeMap', hasValue: true, hasBinding: true },
    { name: 'skyboxBlurAmount', hasValue: true, hasBinding: true },
    { name: 'specularAAEnabled', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'temporalAAEnabled', hasValue: true, hasBinding: true },
    { name: 'temporalAAMode', hasValue: true, hasBinding: true },
    { name: 'temporalAAStrength', hasValue: true, hasBinding: true },
    { name: 'tonemapMode', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAntialiasingModeChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingQualityChanged', paramCount: 0 },
    { handlerName: 'onAoBiasChanged', paramCount: 0 },
    { handlerName: 'onAoDistanceChanged', paramCount: 0 },
    { handlerName: 'onAoDitherChanged', paramCount: 0 },
    { handlerName: 'onAoEnabledChanged', paramCount: 0 },
    { handlerName: 'onAoSampleRateChanged', paramCount: 0 },
    { handlerName: 'onAoSoftnessChanged', paramCount: 0 },
    { handlerName: 'onAoStrengthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundModeChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onClearColorChanged', paramCount: 0 },
    { handlerName: 'onDebugSettingsChanged', paramCount: 0 },
    { handlerName: 'onDepthPrePassEnabledChanged', paramCount: 0 },
    { handlerName: 'onDepthTestEnabledChanged', paramCount: 0 },
    { handlerName: 'onFogChanged', paramCount: 0 },
    { handlerName: 'onLightProbeChanged', paramCount: 0 },
    { handlerName: 'onLightmapperChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOitMethodChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onProbeExposureChanged', paramCount: 0 },
    { handlerName: 'onProbeHorizonChanged', paramCount: 0 },
    { handlerName: 'onProbeOrientationChanged', paramCount: 0 },
    { handlerName: 'onScissorRectChanged', paramCount: 0 },
    { handlerName: 'onSkyBoxCubeMapChanged', paramCount: 0 },
    { handlerName: 'onSkyboxBlurAmountChanged', paramCount: 0 },
    { handlerName: 'onSpecularAAEnabledChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onTemporalAAEnabledChanged', paramCount: 0 },
    { handlerName: 'onTemporalAAModeChanged', paramCount: 0 },
    { handlerName: 'onTemporalAAStrengthChanged', paramCount: 0 },
    { handlerName: 'onTonemapModeChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function SceneEnvironment(): SceneEnvironmentBuilder {
  return createFluentBuilder(
    'SceneEnvironment',
    SCENEENVIRONMENT_META,
  ) as unknown as SceneEnvironmentBuilder;
}

export namespace SceneEnvironment {
  export namespace QQuick3DEnvironmentAAModeValues {
    export const NoAA = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentAAModeValues',
      'NoAA',
    );
    export const SSAA = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentAAModeValues',
      'SSAA',
    );
    export const MSAA = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentAAModeValues',
      'MSAA',
    );
    export const ProgressiveAA = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentAAModeValues',
      'ProgressiveAA',
    );
  }
  export namespace QQuick3DEnvironmentAAQualityValues {
    export const Medium = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentAAQualityValues',
      'Medium',
    );
    export const High = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentAAQualityValues',
      'High',
    );
    export const VeryHigh = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentAAQualityValues',
      'VeryHigh',
    );
  }
  export namespace QQuick3DEnvironmentBackgroundTypes {
    export const Transparent = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'Transparent',
    );
    export const Unspecified = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'Unspecified',
    );
    export const Color = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'Color',
    );
    export const SkyBox = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'SkyBox',
    );
    export const SkyBoxCubeMap = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'SkyBoxCubeMap',
    );
  }
  export namespace QQuick3DEnvironmentOITMethod {
    export const OITNone = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentOITMethod',
      'OITNone',
    );
    export const OITWeightedBlended = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentOITMethod',
      'OITWeightedBlended',
    );
    export const OITLinkedList = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentOITMethod',
      'OITLinkedList',
    );
  }
  export namespace QQuick3DEnvironmentTemporalAAMode {
    export const TAADefault = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentTemporalAAMode',
      'TAADefault',
    );
    export const TAAMotionVector = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentTemporalAAMode',
      'TAAMotionVector',
    );
  }
  export namespace QQuick3DEnvironmentTonemapModes {
    export const TonemapModeNone = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeNone',
    );
    export const TonemapModeLinear = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeLinear',
    );
    export const TonemapModeAces = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeAces',
    );
    export const TonemapModeHejlDawson = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeHejlDawson',
    );
    export const TonemapModeFilmic = createEnumToken(
      'SceneEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeFilmic',
    );
  }
}
