// AUTO-GENERATED — DO NOT EDIT
// Type: SceneEffectEnvironment
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { CubeMapTextureBuilder } from '../QtQuick3D/CubeMapTexture.js';
import type { DebugSettingsBuilder } from '../QtQuick3D/DebugSettings.js';
import type { FogBuilder } from '../QtQuick3D/Fog.js';
import type { LightmapperBuilder } from '../QtQuick3D/Lightmapper.js';
import type { TextureBuilder } from '../QtQuick3D/Texture.js';
export interface SceneEffectEnvironmentBuilder {
  id(id: string): SceneEffectEnvironmentBuilder;
  child(obj: QmlObjectBuilder): SceneEffectEnvironmentBuilder;

  antialiasingMode(value: QmlEnumToken): SceneEffectEnvironmentBuilder;
  antialiasingModeBind(expr: string): SceneEffectEnvironmentBuilder;
  antialiasingQuality(value: QmlEnumToken): SceneEffectEnvironmentBuilder;
  antialiasingQualityBind(expr: string): SceneEffectEnvironmentBuilder;
  aoBias(value: number): SceneEffectEnvironmentBuilder;
  aoBiasBind(expr: string): SceneEffectEnvironmentBuilder;
  aoDistance(value: number): SceneEffectEnvironmentBuilder;
  aoDistanceBind(expr: string): SceneEffectEnvironmentBuilder;
  aoDither(value: boolean): SceneEffectEnvironmentBuilder;
  aoDitherBind(expr: string): SceneEffectEnvironmentBuilder;
  aoEnabled(value: boolean): SceneEffectEnvironmentBuilder;
  aoEnabledBind(expr: string): SceneEffectEnvironmentBuilder;
  aoSampleRate(value: number): SceneEffectEnvironmentBuilder;
  aoSampleRateBind(expr: string): SceneEffectEnvironmentBuilder;
  aoSoftness(value: number): SceneEffectEnvironmentBuilder;
  aoSoftnessBind(expr: string): SceneEffectEnvironmentBuilder;
  aoStrength(value: number): SceneEffectEnvironmentBuilder;
  aoStrengthBind(expr: string): SceneEffectEnvironmentBuilder;
  backgroundMode(value: QmlEnumToken): SceneEffectEnvironmentBuilder;
  backgroundModeBind(expr: string): SceneEffectEnvironmentBuilder;
  clearColor(value: QmlColor): SceneEffectEnvironmentBuilder;
  clearColorBind(expr: string): SceneEffectEnvironmentBuilder;
  debugSettings(value: DebugSettingsBuilder): SceneEffectEnvironmentBuilder;
  debugSettingsBind(expr: string): SceneEffectEnvironmentBuilder;
  depthPrePassEnabled(value: boolean): SceneEffectEnvironmentBuilder;
  depthPrePassEnabledBind(expr: string): SceneEffectEnvironmentBuilder;
  depthTestEnabled(value: boolean): SceneEffectEnvironmentBuilder;
  depthTestEnabledBind(expr: string): SceneEffectEnvironmentBuilder;
  fog(value: FogBuilder): SceneEffectEnvironmentBuilder;
  fogBind(expr: string): SceneEffectEnvironmentBuilder;
  lightProbe(value: TextureBuilder): SceneEffectEnvironmentBuilder;
  lightProbeBind(expr: string): SceneEffectEnvironmentBuilder;
  lightmapper(value: LightmapperBuilder): SceneEffectEnvironmentBuilder;
  lightmapperBind(expr: string): SceneEffectEnvironmentBuilder;
  objectName(value: string): SceneEffectEnvironmentBuilder;
  objectNameBind(expr: string): SceneEffectEnvironmentBuilder;
  oitMethod(value: QmlEnumToken): SceneEffectEnvironmentBuilder;
  oitMethodBind(expr: string): SceneEffectEnvironmentBuilder;
  parent(value: QmlValue): SceneEffectEnvironmentBuilder;
  parentBind(expr: string): SceneEffectEnvironmentBuilder;
  probeExposure(value: number): SceneEffectEnvironmentBuilder;
  probeExposureBind(expr: string): SceneEffectEnvironmentBuilder;
  probeHorizon(value: number): SceneEffectEnvironmentBuilder;
  probeHorizonBind(expr: string): SceneEffectEnvironmentBuilder;
  probeOrientation(value: QmlVector3d): SceneEffectEnvironmentBuilder;
  probeOrientationBind(expr: string): SceneEffectEnvironmentBuilder;
  scissorRect(value: QmlRect): SceneEffectEnvironmentBuilder;
  scissorRectBind(expr: string): SceneEffectEnvironmentBuilder;
  skyBoxCubeMap(value: CubeMapTextureBuilder): SceneEffectEnvironmentBuilder;
  skyBoxCubeMapBind(expr: string): SceneEffectEnvironmentBuilder;
  skyboxBlurAmount(value: number): SceneEffectEnvironmentBuilder;
  skyboxBlurAmountBind(expr: string): SceneEffectEnvironmentBuilder;
  specularAAEnabled(value: boolean): SceneEffectEnvironmentBuilder;
  specularAAEnabledBind(expr: string): SceneEffectEnvironmentBuilder;
  state(value: string): SceneEffectEnvironmentBuilder;
  stateBind(expr: string): SceneEffectEnvironmentBuilder;
  temporalAAEnabled(value: boolean): SceneEffectEnvironmentBuilder;
  temporalAAEnabledBind(expr: string): SceneEffectEnvironmentBuilder;
  temporalAAMode(value: QmlEnumToken): SceneEffectEnvironmentBuilder;
  temporalAAModeBind(expr: string): SceneEffectEnvironmentBuilder;
  temporalAAStrength(value: number): SceneEffectEnvironmentBuilder;
  temporalAAStrengthBind(expr: string): SceneEffectEnvironmentBuilder;
  tonemapMode(value: QmlEnumToken): SceneEffectEnvironmentBuilder;
  tonemapModeBind(expr: string): SceneEffectEnvironmentBuilder;
  onAntialiasingModeChanged(body: string): SceneEffectEnvironmentBuilder;
  onAntialiasingQualityChanged(body: string): SceneEffectEnvironmentBuilder;
  onAoBiasChanged(body: string): SceneEffectEnvironmentBuilder;
  onAoDistanceChanged(body: string): SceneEffectEnvironmentBuilder;
  onAoDitherChanged(body: string): SceneEffectEnvironmentBuilder;
  onAoEnabledChanged(body: string): SceneEffectEnvironmentBuilder;
  onAoSampleRateChanged(body: string): SceneEffectEnvironmentBuilder;
  onAoSoftnessChanged(body: string): SceneEffectEnvironmentBuilder;
  onAoStrengthChanged(body: string): SceneEffectEnvironmentBuilder;
  onBackgroundModeChanged(body: string): SceneEffectEnvironmentBuilder;
  onChildrenChanged(body: string): SceneEffectEnvironmentBuilder;
  onClearColorChanged(body: string): SceneEffectEnvironmentBuilder;
  onDebugSettingsChanged(body: string): SceneEffectEnvironmentBuilder;
  onDepthPrePassEnabledChanged(body: string): SceneEffectEnvironmentBuilder;
  onDepthTestEnabledChanged(body: string): SceneEffectEnvironmentBuilder;
  onFogChanged(body: string): SceneEffectEnvironmentBuilder;
  onLightProbeChanged(body: string): SceneEffectEnvironmentBuilder;
  onLightmapperChanged(body: string): SceneEffectEnvironmentBuilder;
  onObjectNameChanged(body: string): SceneEffectEnvironmentBuilder;
  onOitMethodChanged(body: string): SceneEffectEnvironmentBuilder;
  onParentChanged(body: string): SceneEffectEnvironmentBuilder;
  onProbeExposureChanged(body: string): SceneEffectEnvironmentBuilder;
  onProbeHorizonChanged(body: string): SceneEffectEnvironmentBuilder;
  onProbeOrientationChanged(body: string): SceneEffectEnvironmentBuilder;
  onScissorRectChanged(body: string): SceneEffectEnvironmentBuilder;
  onSkyBoxCubeMapChanged(body: string): SceneEffectEnvironmentBuilder;
  onSkyboxBlurAmountChanged(body: string): SceneEffectEnvironmentBuilder;
  onSpecularAAEnabledChanged(body: string): SceneEffectEnvironmentBuilder;
  onStateChanged(body: string): SceneEffectEnvironmentBuilder;
  onTemporalAAEnabledChanged(body: string): SceneEffectEnvironmentBuilder;
  onTemporalAAModeChanged(body: string): SceneEffectEnvironmentBuilder;
  onTemporalAAStrengthChanged(body: string): SceneEffectEnvironmentBuilder;
  onTonemapModeChanged(body: string): SceneEffectEnvironmentBuilder;
}

const SCENEEFFECTENVIRONMENT_META: TypeMetadata = {
  typeName: 'SceneEffectEnvironment',
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
};

export function SceneEffectEnvironment(): SceneEffectEnvironmentBuilder {
  return createFluentBuilder(
    'SceneEffectEnvironment',
    SCENEEFFECTENVIRONMENT_META,
  ) as unknown as SceneEffectEnvironmentBuilder;
}

export namespace SceneEffectEnvironment {
  export namespace QQuick3DEnvironmentAAModeValues {
    export const NoAA = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentAAModeValues',
      'NoAA',
    );
    export const SSAA = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentAAModeValues',
      'SSAA',
    );
    export const MSAA = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentAAModeValues',
      'MSAA',
    );
    export const ProgressiveAA = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentAAModeValues',
      'ProgressiveAA',
    );
  }
  export namespace QQuick3DEnvironmentAAQualityValues {
    export const Medium = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentAAQualityValues',
      'Medium',
    );
    export const High = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentAAQualityValues',
      'High',
    );
    export const VeryHigh = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentAAQualityValues',
      'VeryHigh',
    );
  }
  export namespace QQuick3DEnvironmentBackgroundTypes {
    export const Transparent = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'Transparent',
    );
    export const Unspecified = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'Unspecified',
    );
    export const Color = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'Color',
    );
    export const SkyBox = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'SkyBox',
    );
    export const SkyBoxCubeMap = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentBackgroundTypes',
      'SkyBoxCubeMap',
    );
  }
  export namespace QQuick3DEnvironmentOITMethod {
    export const OITNone = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentOITMethod',
      'OITNone',
    );
    export const OITWeightedBlended = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentOITMethod',
      'OITWeightedBlended',
    );
    export const OITLinkedList = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentOITMethod',
      'OITLinkedList',
    );
  }
  export namespace QQuick3DEnvironmentTemporalAAMode {
    export const TAADefault = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentTemporalAAMode',
      'TAADefault',
    );
    export const TAAMotionVector = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentTemporalAAMode',
      'TAAMotionVector',
    );
  }
  export namespace QQuick3DEnvironmentTonemapModes {
    export const TonemapModeNone = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeNone',
    );
    export const TonemapModeLinear = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeLinear',
    );
    export const TonemapModeAces = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeAces',
    );
    export const TonemapModeHejlDawson = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeHejlDawson',
    );
    export const TonemapModeFilmic = createEnumToken(
      'SceneEffectEnvironment',
      'QQuick3DEnvironmentTonemapModes',
      'TonemapModeFilmic',
    );
  }
}
