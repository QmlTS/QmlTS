// AUTO-GENERATED — DO NOT EDIT
// Type: SpecularGlossyMaterial
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
import type { TextureBuilder } from './Texture.js';
export interface SpecularGlossyMaterialBuilder {
  id(id: string): SpecularGlossyMaterialBuilder;
  child(obj: QmlObjectBuilder): SpecularGlossyMaterialBuilder;
  children(...objs: QmlObjectBuilder[]): SpecularGlossyMaterialBuilder;

  albedoChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  albedoChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  albedoColor(value: QmlColor): SpecularGlossyMaterialBuilder;
  albedoColorBind(expr: string): SpecularGlossyMaterialBuilder;
  albedoMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  albedoMapBind(expr: string): SpecularGlossyMaterialBuilder;
  albedoSingleChannelEnabled(value: boolean): SpecularGlossyMaterialBuilder;
  albedoSingleChannelEnabledBind(expr: string): SpecularGlossyMaterialBuilder;
  alphaCutoff(value: number): SpecularGlossyMaterialBuilder;
  alphaCutoffBind(expr: string): SpecularGlossyMaterialBuilder;
  alphaMode(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  alphaModeBind(expr: string): SpecularGlossyMaterialBuilder;
  attenuationColor(value: QmlColor): SpecularGlossyMaterialBuilder;
  attenuationColorBind(expr: string): SpecularGlossyMaterialBuilder;
  attenuationDistance(value: number): SpecularGlossyMaterialBuilder;
  attenuationDistanceBind(expr: string): SpecularGlossyMaterialBuilder;
  blendMode(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  blendModeBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatAmount(value: number): SpecularGlossyMaterialBuilder;
  clearcoatAmountBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  clearcoatChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatFresnelBias(value: number): SpecularGlossyMaterialBuilder;
  clearcoatFresnelBiasBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatFresnelPower(value: number): SpecularGlossyMaterialBuilder;
  clearcoatFresnelPowerBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatFresnelScale(value: number): SpecularGlossyMaterialBuilder;
  clearcoatFresnelScaleBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatFresnelScaleBiasEnabled(value: boolean): SpecularGlossyMaterialBuilder;
  clearcoatFresnelScaleBiasEnabledBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  clearcoatMapBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatNormalMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  clearcoatNormalMapBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatNormalStrength(value: number): SpecularGlossyMaterialBuilder;
  clearcoatNormalStrengthBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatRoughnessAmount(value: number): SpecularGlossyMaterialBuilder;
  clearcoatRoughnessAmountBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatRoughnessChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  clearcoatRoughnessChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  clearcoatRoughnessMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  clearcoatRoughnessMapBind(expr: string): SpecularGlossyMaterialBuilder;
  cullMode(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  cullModeBind(expr: string): SpecularGlossyMaterialBuilder;
  depthDrawMode(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  depthDrawModeBind(expr: string): SpecularGlossyMaterialBuilder;
  emissiveChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  emissiveChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  emissiveFactor(value: QmlVector3d): SpecularGlossyMaterialBuilder;
  emissiveFactorBind(expr: string): SpecularGlossyMaterialBuilder;
  emissiveMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  emissiveMapBind(expr: string): SpecularGlossyMaterialBuilder;
  emissiveSingleChannelEnabled(value: boolean): SpecularGlossyMaterialBuilder;
  emissiveSingleChannelEnabledBind(expr: string): SpecularGlossyMaterialBuilder;
  fresnelBias(value: number): SpecularGlossyMaterialBuilder;
  fresnelBiasBind(expr: string): SpecularGlossyMaterialBuilder;
  fresnelPower(value: number): SpecularGlossyMaterialBuilder;
  fresnelPowerBind(expr: string): SpecularGlossyMaterialBuilder;
  fresnelScale(value: number): SpecularGlossyMaterialBuilder;
  fresnelScaleBind(expr: string): SpecularGlossyMaterialBuilder;
  fresnelScaleBiasEnabled(value: boolean): SpecularGlossyMaterialBuilder;
  fresnelScaleBiasEnabledBind(expr: string): SpecularGlossyMaterialBuilder;
  glossiness(value: number): SpecularGlossyMaterialBuilder;
  glossinessBind(expr: string): SpecularGlossyMaterialBuilder;
  glossinessChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  glossinessChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  glossinessMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  glossinessMapBind(expr: string): SpecularGlossyMaterialBuilder;
  heightAmount(value: number): SpecularGlossyMaterialBuilder;
  heightAmountBind(expr: string): SpecularGlossyMaterialBuilder;
  heightChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  heightChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  heightMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  heightMapBind(expr: string): SpecularGlossyMaterialBuilder;
  invertOpacityMapValue(value: boolean): SpecularGlossyMaterialBuilder;
  invertOpacityMapValueBind(expr: string): SpecularGlossyMaterialBuilder;
  lightProbe(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  lightProbeBind(expr: string): SpecularGlossyMaterialBuilder;
  lighting(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  lightingBind(expr: string): SpecularGlossyMaterialBuilder;
  lineWidth(value: number): SpecularGlossyMaterialBuilder;
  lineWidthBind(expr: string): SpecularGlossyMaterialBuilder;
  maxHeightMapSamples(value: number): SpecularGlossyMaterialBuilder;
  maxHeightMapSamplesBind(expr: string): SpecularGlossyMaterialBuilder;
  minHeightMapSamples(value: number): SpecularGlossyMaterialBuilder;
  minHeightMapSamplesBind(expr: string): SpecularGlossyMaterialBuilder;
  normalMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  normalMapBind(expr: string): SpecularGlossyMaterialBuilder;
  normalStrength(value: number): SpecularGlossyMaterialBuilder;
  normalStrengthBind(expr: string): SpecularGlossyMaterialBuilder;
  objectName(value: string): SpecularGlossyMaterialBuilder;
  objectNameBind(expr: string): SpecularGlossyMaterialBuilder;
  occlusionAmount(value: number): SpecularGlossyMaterialBuilder;
  occlusionAmountBind(expr: string): SpecularGlossyMaterialBuilder;
  occlusionChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  occlusionChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  occlusionMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  occlusionMapBind(expr: string): SpecularGlossyMaterialBuilder;
  opacity(value: number): SpecularGlossyMaterialBuilder;
  opacityBind(expr: string): SpecularGlossyMaterialBuilder;
  opacityChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  opacityChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  opacityMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  opacityMapBind(expr: string): SpecularGlossyMaterialBuilder;
  parent(value: QmlValue): SpecularGlossyMaterialBuilder;
  parentBind(expr: string): SpecularGlossyMaterialBuilder;
  pointSize(value: number): SpecularGlossyMaterialBuilder;
  pointSizeBind(expr: string): SpecularGlossyMaterialBuilder;
  specularChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  specularChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  specularColor(value: QmlColor): SpecularGlossyMaterialBuilder;
  specularColorBind(expr: string): SpecularGlossyMaterialBuilder;
  specularMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  specularMapBind(expr: string): SpecularGlossyMaterialBuilder;
  specularSingleChannelEnabled(value: boolean): SpecularGlossyMaterialBuilder;
  specularSingleChannelEnabledBind(expr: string): SpecularGlossyMaterialBuilder;
  state(value: string): SpecularGlossyMaterialBuilder;
  stateBind(expr: string): SpecularGlossyMaterialBuilder;
  thicknessChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  thicknessChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  thicknessFactor(value: number): SpecularGlossyMaterialBuilder;
  thicknessFactorBind(expr: string): SpecularGlossyMaterialBuilder;
  thicknessMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  thicknessMapBind(expr: string): SpecularGlossyMaterialBuilder;
  transmissionChannel(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  transmissionChannelBind(expr: string): SpecularGlossyMaterialBuilder;
  transmissionFactor(value: number): SpecularGlossyMaterialBuilder;
  transmissionFactorBind(expr: string): SpecularGlossyMaterialBuilder;
  transmissionMap(value: TextureBuilder): SpecularGlossyMaterialBuilder;
  transmissionMapBind(expr: string): SpecularGlossyMaterialBuilder;
  vertexColorAlphaMask(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  vertexColorAlphaMaskBind(expr: string): SpecularGlossyMaterialBuilder;
  vertexColorBlueMask(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  vertexColorBlueMaskBind(expr: string): SpecularGlossyMaterialBuilder;
  vertexColorGreenMask(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  vertexColorGreenMaskBind(expr: string): SpecularGlossyMaterialBuilder;
  vertexColorRedMask(value: QmlEnumToken): SpecularGlossyMaterialBuilder;
  vertexColorRedMaskBind(expr: string): SpecularGlossyMaterialBuilder;
  vertexColorsEnabled(value: boolean): SpecularGlossyMaterialBuilder;
  vertexColorsEnabledBind(expr: string): SpecularGlossyMaterialBuilder;
  vertexColorsMaskEnabled(value: boolean): SpecularGlossyMaterialBuilder;
  vertexColorsMaskEnabledBind(expr: string): SpecularGlossyMaterialBuilder;
  onAlbedoChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onAlbedoColorChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onAlbedoMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onAlbedoSingleChannelEnabledChanged(
    handler: DslSignalHandlerValue,
  ): SpecularGlossyMaterialBuilder;
  onAlphaCutoffChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onAlphaModeChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onAttenuationColorChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onAttenuationDistanceChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onBlendModeChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatAmountChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatFresnelBiasChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatFresnelPowerChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatFresnelScaleBiasEnabledChanged(
    handler: DslSignalHandlerValue,
  ): SpecularGlossyMaterialBuilder;
  onClearcoatFresnelScaleChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatNormalMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatNormalStrengthChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatRoughnessAmountChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatRoughnessChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onClearcoatRoughnessMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onCullModeChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onDepthDrawModeChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onEmissiveChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onEmissiveFactorChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onEmissiveMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onEmissiveSingleChannelEnabledChanged(
    handler: DslSignalHandlerValue,
  ): SpecularGlossyMaterialBuilder;
  onFresnelBiasChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onFresnelPowerChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onFresnelScaleBiasEnabledChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onFresnelScaleChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onGlossinessChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onGlossinessChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onGlossinessMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onHeightAmountChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onHeightChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onHeightMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onInvertOpacityMapValueChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onLightProbeChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onLightingChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onLineWidthChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onMaxHeightMapSamplesChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onMinHeightMapSamplesChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onNormalMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onNormalStrengthChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onOcclusionAmountChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onOcclusionChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onOcclusionMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onOpacityChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onOpacityMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onPointSizeChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onSpecularChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onSpecularColorChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onSpecularMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onSpecularSingleChannelEnabledChanged(
    handler: DslSignalHandlerValue,
  ): SpecularGlossyMaterialBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onThicknessChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onThicknessFactorChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onThicknessMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onTransmissionChannelChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onTransmissionFactorChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onTransmissionMapChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onVertexColorAlphaMaskChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onVertexColorBlueMaskChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onVertexColorGreenMaskChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onVertexColorRedMaskChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onVertexColorsEnabledChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
  onVertexColorsMaskEnabledChanged(handler: DslSignalHandlerValue): SpecularGlossyMaterialBuilder;
}

const SPECULARGLOSSYMATERIAL_META: TypeMetadata = {
  typeName: 'SpecularGlossyMaterial',
  properties: [
    { name: 'albedoChannel', hasValue: true, hasBinding: true },
    { name: 'albedoColor', hasValue: true, hasBinding: true },
    { name: 'albedoMap', hasValue: true, hasBinding: true },
    { name: 'albedoSingleChannelEnabled', hasValue: true, hasBinding: true },
    { name: 'alphaCutoff', hasValue: true, hasBinding: true },
    { name: 'alphaMode', hasValue: true, hasBinding: true },
    { name: 'attenuationColor', hasValue: true, hasBinding: true },
    { name: 'attenuationDistance', hasValue: true, hasBinding: true },
    { name: 'blendMode', hasValue: true, hasBinding: true },
    { name: 'clearcoatAmount', hasValue: true, hasBinding: true },
    { name: 'clearcoatChannel', hasValue: true, hasBinding: true },
    { name: 'clearcoatFresnelBias', hasValue: true, hasBinding: true },
    { name: 'clearcoatFresnelPower', hasValue: true, hasBinding: true },
    { name: 'clearcoatFresnelScale', hasValue: true, hasBinding: true },
    { name: 'clearcoatFresnelScaleBiasEnabled', hasValue: true, hasBinding: true },
    { name: 'clearcoatMap', hasValue: true, hasBinding: true },
    { name: 'clearcoatNormalMap', hasValue: true, hasBinding: true },
    { name: 'clearcoatNormalStrength', hasValue: true, hasBinding: true },
    { name: 'clearcoatRoughnessAmount', hasValue: true, hasBinding: true },
    { name: 'clearcoatRoughnessChannel', hasValue: true, hasBinding: true },
    { name: 'clearcoatRoughnessMap', hasValue: true, hasBinding: true },
    { name: 'cullMode', hasValue: true, hasBinding: true },
    { name: 'depthDrawMode', hasValue: true, hasBinding: true },
    { name: 'emissiveChannel', hasValue: true, hasBinding: true },
    { name: 'emissiveFactor', hasValue: true, hasBinding: true },
    { name: 'emissiveMap', hasValue: true, hasBinding: true },
    { name: 'emissiveSingleChannelEnabled', hasValue: true, hasBinding: true },
    { name: 'fresnelBias', hasValue: true, hasBinding: true },
    { name: 'fresnelPower', hasValue: true, hasBinding: true },
    { name: 'fresnelScale', hasValue: true, hasBinding: true },
    { name: 'fresnelScaleBiasEnabled', hasValue: true, hasBinding: true },
    { name: 'glossiness', hasValue: true, hasBinding: true },
    { name: 'glossinessChannel', hasValue: true, hasBinding: true },
    { name: 'glossinessMap', hasValue: true, hasBinding: true },
    { name: 'heightAmount', hasValue: true, hasBinding: true },
    { name: 'heightChannel', hasValue: true, hasBinding: true },
    { name: 'heightMap', hasValue: true, hasBinding: true },
    { name: 'invertOpacityMapValue', hasValue: true, hasBinding: true },
    { name: 'lightProbe', hasValue: true, hasBinding: true },
    { name: 'lighting', hasValue: true, hasBinding: true },
    { name: 'lineWidth', hasValue: true, hasBinding: true },
    { name: 'maxHeightMapSamples', hasValue: true, hasBinding: true },
    { name: 'minHeightMapSamples', hasValue: true, hasBinding: true },
    { name: 'normalMap', hasValue: true, hasBinding: true },
    { name: 'normalStrength', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'occlusionAmount', hasValue: true, hasBinding: true },
    { name: 'occlusionChannel', hasValue: true, hasBinding: true },
    { name: 'occlusionMap', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'opacityChannel', hasValue: true, hasBinding: true },
    { name: 'opacityMap', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pointSize', hasValue: true, hasBinding: true },
    { name: 'specularChannel', hasValue: true, hasBinding: true },
    { name: 'specularColor', hasValue: true, hasBinding: true },
    { name: 'specularMap', hasValue: true, hasBinding: true },
    { name: 'specularSingleChannelEnabled', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'thicknessChannel', hasValue: true, hasBinding: true },
    { name: 'thicknessFactor', hasValue: true, hasBinding: true },
    { name: 'thicknessMap', hasValue: true, hasBinding: true },
    { name: 'transmissionChannel', hasValue: true, hasBinding: true },
    { name: 'transmissionFactor', hasValue: true, hasBinding: true },
    { name: 'transmissionMap', hasValue: true, hasBinding: true },
    { name: 'vertexColorAlphaMask', hasValue: true, hasBinding: true },
    { name: 'vertexColorBlueMask', hasValue: true, hasBinding: true },
    { name: 'vertexColorGreenMask', hasValue: true, hasBinding: true },
    { name: 'vertexColorRedMask', hasValue: true, hasBinding: true },
    { name: 'vertexColorsEnabled', hasValue: true, hasBinding: true },
    { name: 'vertexColorsMaskEnabled', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlbedoChannelChanged', paramCount: 0 },
    { handlerName: 'onAlbedoColorChanged', paramCount: 0 },
    { handlerName: 'onAlbedoMapChanged', paramCount: 0 },
    { handlerName: 'onAlbedoSingleChannelEnabledChanged', paramCount: 0 },
    { handlerName: 'onAlphaCutoffChanged', paramCount: 0 },
    { handlerName: 'onAlphaModeChanged', paramCount: 0 },
    { handlerName: 'onAttenuationColorChanged', paramCount: 0 },
    { handlerName: 'onAttenuationDistanceChanged', paramCount: 0 },
    { handlerName: 'onBlendModeChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onClearcoatAmountChanged', paramCount: 0 },
    { handlerName: 'onClearcoatChannelChanged', paramCount: 0 },
    { handlerName: 'onClearcoatFresnelBiasChanged', paramCount: 1 },
    { handlerName: 'onClearcoatFresnelPowerChanged', paramCount: 1 },
    { handlerName: 'onClearcoatFresnelScaleBiasEnabledChanged', paramCount: 1 },
    { handlerName: 'onClearcoatFresnelScaleChanged', paramCount: 1 },
    { handlerName: 'onClearcoatMapChanged', paramCount: 0 },
    { handlerName: 'onClearcoatNormalMapChanged', paramCount: 0 },
    { handlerName: 'onClearcoatNormalStrengthChanged', paramCount: 0 },
    { handlerName: 'onClearcoatRoughnessAmountChanged', paramCount: 0 },
    { handlerName: 'onClearcoatRoughnessChannelChanged', paramCount: 0 },
    { handlerName: 'onClearcoatRoughnessMapChanged', paramCount: 0 },
    { handlerName: 'onCullModeChanged', paramCount: 1 },
    { handlerName: 'onDepthDrawModeChanged', paramCount: 1 },
    { handlerName: 'onEmissiveChannelChanged', paramCount: 0 },
    { handlerName: 'onEmissiveFactorChanged', paramCount: 0 },
    { handlerName: 'onEmissiveMapChanged', paramCount: 0 },
    { handlerName: 'onEmissiveSingleChannelEnabledChanged', paramCount: 0 },
    { handlerName: 'onFresnelBiasChanged', paramCount: 1 },
    { handlerName: 'onFresnelPowerChanged', paramCount: 1 },
    { handlerName: 'onFresnelScaleBiasEnabledChanged', paramCount: 1 },
    { handlerName: 'onFresnelScaleChanged', paramCount: 1 },
    { handlerName: 'onGlossinessChanged', paramCount: 0 },
    { handlerName: 'onGlossinessChannelChanged', paramCount: 0 },
    { handlerName: 'onGlossinessMapChanged', paramCount: 0 },
    { handlerName: 'onHeightAmountChanged', paramCount: 0 },
    { handlerName: 'onHeightChannelChanged', paramCount: 0 },
    { handlerName: 'onHeightMapChanged', paramCount: 0 },
    { handlerName: 'onInvertOpacityMapValueChanged', paramCount: 0 },
    { handlerName: 'onLightProbeChanged', paramCount: 1 },
    { handlerName: 'onLightingChanged', paramCount: 0 },
    { handlerName: 'onLineWidthChanged', paramCount: 0 },
    { handlerName: 'onMaxHeightMapSamplesChanged', paramCount: 0 },
    { handlerName: 'onMinHeightMapSamplesChanged', paramCount: 0 },
    { handlerName: 'onNormalMapChanged', paramCount: 0 },
    { handlerName: 'onNormalStrengthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOcclusionAmountChanged', paramCount: 0 },
    { handlerName: 'onOcclusionChannelChanged', paramCount: 0 },
    { handlerName: 'onOcclusionMapChanged', paramCount: 0 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOpacityChannelChanged', paramCount: 0 },
    { handlerName: 'onOpacityMapChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPointSizeChanged', paramCount: 0 },
    { handlerName: 'onSpecularChannelChanged', paramCount: 0 },
    { handlerName: 'onSpecularColorChanged', paramCount: 0 },
    { handlerName: 'onSpecularMapChanged', paramCount: 0 },
    { handlerName: 'onSpecularSingleChannelEnabledChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onThicknessChannelChanged', paramCount: 0 },
    { handlerName: 'onThicknessFactorChanged', paramCount: 0 },
    { handlerName: 'onThicknessMapChanged', paramCount: 0 },
    { handlerName: 'onTransmissionChannelChanged', paramCount: 0 },
    { handlerName: 'onTransmissionFactorChanged', paramCount: 0 },
    { handlerName: 'onTransmissionMapChanged', paramCount: 0 },
    { handlerName: 'onVertexColorAlphaMaskChanged', paramCount: 0 },
    { handlerName: 'onVertexColorBlueMaskChanged', paramCount: 0 },
    { handlerName: 'onVertexColorGreenMaskChanged', paramCount: 0 },
    { handlerName: 'onVertexColorRedMaskChanged', paramCount: 0 },
    { handlerName: 'onVertexColorsEnabledChanged', paramCount: 1 },
    { handlerName: 'onVertexColorsMaskEnabledChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SpecularGlossyMaterial(): SpecularGlossyMaterialBuilder {
  return createFluentBuilder(
    'SpecularGlossyMaterial',
    SPECULARGLOSSYMATERIAL_META,
  ) as unknown as SpecularGlossyMaterialBuilder;
}

export namespace SpecularGlossyMaterial {
  export namespace AlphaMode {
    export const Default = createEnumToken('SpecularGlossyMaterial', 'AlphaMode', 'Default');
    export const Mask = createEnumToken('SpecularGlossyMaterial', 'AlphaMode', 'Mask');
    export const Blend = createEnumToken('SpecularGlossyMaterial', 'AlphaMode', 'Blend');
    export const Opaque = createEnumToken('SpecularGlossyMaterial', 'AlphaMode', 'Opaque');
  }
  export namespace BlendMode {
    export const SourceOver = createEnumToken('SpecularGlossyMaterial', 'BlendMode', 'SourceOver');
    export const Screen = createEnumToken('SpecularGlossyMaterial', 'BlendMode', 'Screen');
    export const Multiply = createEnumToken('SpecularGlossyMaterial', 'BlendMode', 'Multiply');
  }
  export namespace CullMode {
    export const BackFaceCulling = createEnumToken(
      'SpecularGlossyMaterial',
      'CullMode',
      'BackFaceCulling',
    );
    export const FrontFaceCulling = createEnumToken(
      'SpecularGlossyMaterial',
      'CullMode',
      'FrontFaceCulling',
    );
    export const NoCulling = createEnumToken('SpecularGlossyMaterial', 'CullMode', 'NoCulling');
  }
  export namespace DepthDrawMode {
    export const OpaqueOnlyDepthDraw = createEnumToken(
      'SpecularGlossyMaterial',
      'DepthDrawMode',
      'OpaqueOnlyDepthDraw',
    );
    export const AlwaysDepthDraw = createEnumToken(
      'SpecularGlossyMaterial',
      'DepthDrawMode',
      'AlwaysDepthDraw',
    );
    export const NeverDepthDraw = createEnumToken(
      'SpecularGlossyMaterial',
      'DepthDrawMode',
      'NeverDepthDraw',
    );
    export const OpaquePrePassDepthDraw = createEnumToken(
      'SpecularGlossyMaterial',
      'DepthDrawMode',
      'OpaquePrePassDepthDraw',
    );
  }
  export namespace Lighting {
    export const NoLighting = createEnumToken('SpecularGlossyMaterial', 'Lighting', 'NoLighting');
    export const FragmentLighting = createEnumToken(
      'SpecularGlossyMaterial',
      'Lighting',
      'FragmentLighting',
    );
  }
  export namespace TextureChannelMapping {
    export const R = createEnumToken('SpecularGlossyMaterial', 'TextureChannelMapping', 'R');
    export const G = createEnumToken('SpecularGlossyMaterial', 'TextureChannelMapping', 'G');
    export const B = createEnumToken('SpecularGlossyMaterial', 'TextureChannelMapping', 'B');
    export const A = createEnumToken('SpecularGlossyMaterial', 'TextureChannelMapping', 'A');
  }
  export namespace VertexColorMask {
    export const NoMask = createEnumToken('SpecularGlossyMaterial', 'VertexColorMask', 'NoMask');
    export const GlossinessMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'GlossinessMask',
    );
    export const NormalStrengthMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'NormalStrengthMask',
    );
    export const ClearcoatAmountMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'ClearcoatAmountMask',
    );
    export const ClearcoatRoughnessAmountMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'ClearcoatRoughnessAmountMask',
    );
    export const ClearcoatNormalStrengthMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'ClearcoatNormalStrengthMask',
    );
    export const HeightAmountMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'HeightAmountMask',
    );
    export const OcclusionAmountMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'OcclusionAmountMask',
    );
    export const ThicknessFactorMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'ThicknessFactorMask',
    );
    export const TransmissionFactorMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMask',
      'TransmissionFactorMask',
    );
  }
  export namespace VertexColorMaskFlags {
    export const NoMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'NoMask',
    );
    export const GlossinessMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'GlossinessMask',
    );
    export const NormalStrengthMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'NormalStrengthMask',
    );
    export const ClearcoatAmountMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'ClearcoatAmountMask',
    );
    export const ClearcoatRoughnessAmountMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'ClearcoatRoughnessAmountMask',
    );
    export const ClearcoatNormalStrengthMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'ClearcoatNormalStrengthMask',
    );
    export const HeightAmountMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'HeightAmountMask',
    );
    export const OcclusionAmountMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'OcclusionAmountMask',
    );
    export const ThicknessFactorMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'ThicknessFactorMask',
    );
    export const TransmissionFactorMask = createEnumToken(
      'SpecularGlossyMaterial',
      'VertexColorMaskFlags',
      'TransmissionFactorMask',
    );
  }
}
