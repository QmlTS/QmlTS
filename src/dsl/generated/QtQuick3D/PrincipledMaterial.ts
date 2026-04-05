// AUTO-GENERATED — DO NOT EDIT
// Type: PrincipledMaterial
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
import type { TextureBuilder } from './Texture.js';
export interface PrincipledMaterialBuilder {
  id(id: string): PrincipledMaterialBuilder;
  child(obj: QmlObjectBuilder): PrincipledMaterialBuilder;

  alphaCutoff(value: number): PrincipledMaterialBuilder;
  alphaCutoffBind(expr: string): PrincipledMaterialBuilder;
  alphaMode(value: QmlEnumToken): PrincipledMaterialBuilder;
  alphaModeBind(expr: string): PrincipledMaterialBuilder;
  attenuationColor(value: QmlColor): PrincipledMaterialBuilder;
  attenuationColorBind(expr: string): PrincipledMaterialBuilder;
  attenuationDistance(value: number): PrincipledMaterialBuilder;
  attenuationDistanceBind(expr: string): PrincipledMaterialBuilder;
  baseColor(value: QmlColor): PrincipledMaterialBuilder;
  baseColorBind(expr: string): PrincipledMaterialBuilder;
  baseColorChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  baseColorChannelBind(expr: string): PrincipledMaterialBuilder;
  baseColorMap(value: TextureBuilder): PrincipledMaterialBuilder;
  baseColorMapBind(expr: string): PrincipledMaterialBuilder;
  baseColorSingleChannelEnabled(value: boolean): PrincipledMaterialBuilder;
  baseColorSingleChannelEnabledBind(expr: string): PrincipledMaterialBuilder;
  blendMode(value: QmlEnumToken): PrincipledMaterialBuilder;
  blendModeBind(expr: string): PrincipledMaterialBuilder;
  clearcoatAmount(value: number): PrincipledMaterialBuilder;
  clearcoatAmountBind(expr: string): PrincipledMaterialBuilder;
  clearcoatChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  clearcoatChannelBind(expr: string): PrincipledMaterialBuilder;
  clearcoatFresnelBias(value: number): PrincipledMaterialBuilder;
  clearcoatFresnelBiasBind(expr: string): PrincipledMaterialBuilder;
  clearcoatFresnelPower(value: number): PrincipledMaterialBuilder;
  clearcoatFresnelPowerBind(expr: string): PrincipledMaterialBuilder;
  clearcoatFresnelScale(value: number): PrincipledMaterialBuilder;
  clearcoatFresnelScaleBind(expr: string): PrincipledMaterialBuilder;
  clearcoatFresnelScaleBiasEnabled(value: boolean): PrincipledMaterialBuilder;
  clearcoatFresnelScaleBiasEnabledBind(expr: string): PrincipledMaterialBuilder;
  clearcoatMap(value: TextureBuilder): PrincipledMaterialBuilder;
  clearcoatMapBind(expr: string): PrincipledMaterialBuilder;
  clearcoatNormalMap(value: TextureBuilder): PrincipledMaterialBuilder;
  clearcoatNormalMapBind(expr: string): PrincipledMaterialBuilder;
  clearcoatNormalStrength(value: number): PrincipledMaterialBuilder;
  clearcoatNormalStrengthBind(expr: string): PrincipledMaterialBuilder;
  clearcoatRoughnessAmount(value: number): PrincipledMaterialBuilder;
  clearcoatRoughnessAmountBind(expr: string): PrincipledMaterialBuilder;
  clearcoatRoughnessChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  clearcoatRoughnessChannelBind(expr: string): PrincipledMaterialBuilder;
  clearcoatRoughnessMap(value: TextureBuilder): PrincipledMaterialBuilder;
  clearcoatRoughnessMapBind(expr: string): PrincipledMaterialBuilder;
  cullMode(value: QmlEnumToken): PrincipledMaterialBuilder;
  cullModeBind(expr: string): PrincipledMaterialBuilder;
  depthDrawMode(value: QmlEnumToken): PrincipledMaterialBuilder;
  depthDrawModeBind(expr: string): PrincipledMaterialBuilder;
  emissiveChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  emissiveChannelBind(expr: string): PrincipledMaterialBuilder;
  emissiveFactor(value: QmlVector3d): PrincipledMaterialBuilder;
  emissiveFactorBind(expr: string): PrincipledMaterialBuilder;
  emissiveMap(value: TextureBuilder): PrincipledMaterialBuilder;
  emissiveMapBind(expr: string): PrincipledMaterialBuilder;
  emissiveSingleChannelEnabled(value: boolean): PrincipledMaterialBuilder;
  emissiveSingleChannelEnabledBind(expr: string): PrincipledMaterialBuilder;
  fresnelBias(value: number): PrincipledMaterialBuilder;
  fresnelBiasBind(expr: string): PrincipledMaterialBuilder;
  fresnelPower(value: number): PrincipledMaterialBuilder;
  fresnelPowerBind(expr: string): PrincipledMaterialBuilder;
  fresnelScale(value: number): PrincipledMaterialBuilder;
  fresnelScaleBind(expr: string): PrincipledMaterialBuilder;
  fresnelScaleBiasEnabled(value: boolean): PrincipledMaterialBuilder;
  fresnelScaleBiasEnabledBind(expr: string): PrincipledMaterialBuilder;
  heightAmount(value: number): PrincipledMaterialBuilder;
  heightAmountBind(expr: string): PrincipledMaterialBuilder;
  heightChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  heightChannelBind(expr: string): PrincipledMaterialBuilder;
  heightMap(value: TextureBuilder): PrincipledMaterialBuilder;
  heightMapBind(expr: string): PrincipledMaterialBuilder;
  indexOfRefraction(value: number): PrincipledMaterialBuilder;
  indexOfRefractionBind(expr: string): PrincipledMaterialBuilder;
  invertOpacityMapValue(value: boolean): PrincipledMaterialBuilder;
  invertOpacityMapValueBind(expr: string): PrincipledMaterialBuilder;
  lightProbe(value: TextureBuilder): PrincipledMaterialBuilder;
  lightProbeBind(expr: string): PrincipledMaterialBuilder;
  lighting(value: QmlEnumToken): PrincipledMaterialBuilder;
  lightingBind(expr: string): PrincipledMaterialBuilder;
  lineWidth(value: number): PrincipledMaterialBuilder;
  lineWidthBind(expr: string): PrincipledMaterialBuilder;
  maxHeightMapSamples(value: number): PrincipledMaterialBuilder;
  maxHeightMapSamplesBind(expr: string): PrincipledMaterialBuilder;
  metalness(value: number): PrincipledMaterialBuilder;
  metalnessBind(expr: string): PrincipledMaterialBuilder;
  metalnessChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  metalnessChannelBind(expr: string): PrincipledMaterialBuilder;
  metalnessMap(value: TextureBuilder): PrincipledMaterialBuilder;
  metalnessMapBind(expr: string): PrincipledMaterialBuilder;
  minHeightMapSamples(value: number): PrincipledMaterialBuilder;
  minHeightMapSamplesBind(expr: string): PrincipledMaterialBuilder;
  normalMap(value: TextureBuilder): PrincipledMaterialBuilder;
  normalMapBind(expr: string): PrincipledMaterialBuilder;
  normalStrength(value: number): PrincipledMaterialBuilder;
  normalStrengthBind(expr: string): PrincipledMaterialBuilder;
  objectName(value: string): PrincipledMaterialBuilder;
  objectNameBind(expr: string): PrincipledMaterialBuilder;
  occlusionAmount(value: number): PrincipledMaterialBuilder;
  occlusionAmountBind(expr: string): PrincipledMaterialBuilder;
  occlusionChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  occlusionChannelBind(expr: string): PrincipledMaterialBuilder;
  occlusionMap(value: TextureBuilder): PrincipledMaterialBuilder;
  occlusionMapBind(expr: string): PrincipledMaterialBuilder;
  opacity(value: number): PrincipledMaterialBuilder;
  opacityBind(expr: string): PrincipledMaterialBuilder;
  opacityChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  opacityChannelBind(expr: string): PrincipledMaterialBuilder;
  opacityMap(value: TextureBuilder): PrincipledMaterialBuilder;
  opacityMapBind(expr: string): PrincipledMaterialBuilder;
  parent(value: QmlValue): PrincipledMaterialBuilder;
  parentBind(expr: string): PrincipledMaterialBuilder;
  pointSize(value: number): PrincipledMaterialBuilder;
  pointSizeBind(expr: string): PrincipledMaterialBuilder;
  roughness(value: number): PrincipledMaterialBuilder;
  roughnessBind(expr: string): PrincipledMaterialBuilder;
  roughnessChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  roughnessChannelBind(expr: string): PrincipledMaterialBuilder;
  roughnessMap(value: TextureBuilder): PrincipledMaterialBuilder;
  roughnessMapBind(expr: string): PrincipledMaterialBuilder;
  specularAmount(value: number): PrincipledMaterialBuilder;
  specularAmountBind(expr: string): PrincipledMaterialBuilder;
  specularChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  specularChannelBind(expr: string): PrincipledMaterialBuilder;
  specularMap(value: TextureBuilder): PrincipledMaterialBuilder;
  specularMapBind(expr: string): PrincipledMaterialBuilder;
  specularReflectionMap(value: TextureBuilder): PrincipledMaterialBuilder;
  specularReflectionMapBind(expr: string): PrincipledMaterialBuilder;
  specularSingleChannelEnabled(value: boolean): PrincipledMaterialBuilder;
  specularSingleChannelEnabledBind(expr: string): PrincipledMaterialBuilder;
  specularTint(value: number): PrincipledMaterialBuilder;
  specularTintBind(expr: string): PrincipledMaterialBuilder;
  state(value: string): PrincipledMaterialBuilder;
  stateBind(expr: string): PrincipledMaterialBuilder;
  thicknessChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  thicknessChannelBind(expr: string): PrincipledMaterialBuilder;
  thicknessFactor(value: number): PrincipledMaterialBuilder;
  thicknessFactorBind(expr: string): PrincipledMaterialBuilder;
  thicknessMap(value: TextureBuilder): PrincipledMaterialBuilder;
  thicknessMapBind(expr: string): PrincipledMaterialBuilder;
  transmissionChannel(value: QmlEnumToken): PrincipledMaterialBuilder;
  transmissionChannelBind(expr: string): PrincipledMaterialBuilder;
  transmissionFactor(value: number): PrincipledMaterialBuilder;
  transmissionFactorBind(expr: string): PrincipledMaterialBuilder;
  transmissionMap(value: TextureBuilder): PrincipledMaterialBuilder;
  transmissionMapBind(expr: string): PrincipledMaterialBuilder;
  vertexColorAlphaMask(value: QmlEnumToken): PrincipledMaterialBuilder;
  vertexColorAlphaMaskBind(expr: string): PrincipledMaterialBuilder;
  vertexColorBlueMask(value: QmlEnumToken): PrincipledMaterialBuilder;
  vertexColorBlueMaskBind(expr: string): PrincipledMaterialBuilder;
  vertexColorGreenMask(value: QmlEnumToken): PrincipledMaterialBuilder;
  vertexColorGreenMaskBind(expr: string): PrincipledMaterialBuilder;
  vertexColorRedMask(value: QmlEnumToken): PrincipledMaterialBuilder;
  vertexColorRedMaskBind(expr: string): PrincipledMaterialBuilder;
  vertexColorsEnabled(value: boolean): PrincipledMaterialBuilder;
  vertexColorsEnabledBind(expr: string): PrincipledMaterialBuilder;
  vertexColorsMaskEnabled(value: boolean): PrincipledMaterialBuilder;
  vertexColorsMaskEnabledBind(expr: string): PrincipledMaterialBuilder;
  onAlphaCutoffChanged(body: string): PrincipledMaterialBuilder;
  onAlphaModeChanged(body: string): PrincipledMaterialBuilder;
  onAttenuationColorChanged(body: string): PrincipledMaterialBuilder;
  onAttenuationDistanceChanged(body: string): PrincipledMaterialBuilder;
  onBaseColorChanged(body: string): PrincipledMaterialBuilder;
  onBaseColorChannelChanged(body: string): PrincipledMaterialBuilder;
  onBaseColorMapChanged(body: string): PrincipledMaterialBuilder;
  onBaseColorSingleChannelEnabledChanged(body: string): PrincipledMaterialBuilder;
  onBlendModeChanged(body: string): PrincipledMaterialBuilder;
  onChildrenChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatAmountChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatChannelChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatFresnelBiasChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatFresnelPowerChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatFresnelScaleBiasEnabledChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatFresnelScaleChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatMapChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatNormalMapChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatNormalStrengthChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatRoughnessAmountChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatRoughnessChannelChanged(body: string): PrincipledMaterialBuilder;
  onClearcoatRoughnessMapChanged(body: string): PrincipledMaterialBuilder;
  onCullModeChanged(body: string): PrincipledMaterialBuilder;
  onDepthDrawModeChanged(body: string): PrincipledMaterialBuilder;
  onEmissiveChannelChanged(body: string): PrincipledMaterialBuilder;
  onEmissiveFactorChanged(body: string): PrincipledMaterialBuilder;
  onEmissiveMapChanged(body: string): PrincipledMaterialBuilder;
  onEmissiveSingleChannelEnabledChanged(body: string): PrincipledMaterialBuilder;
  onFresnelBiasChanged(body: string): PrincipledMaterialBuilder;
  onFresnelPowerChanged(body: string): PrincipledMaterialBuilder;
  onFresnelScaleBiasEnabledChanged(body: string): PrincipledMaterialBuilder;
  onFresnelScaleChanged(body: string): PrincipledMaterialBuilder;
  onHeightAmountChanged(body: string): PrincipledMaterialBuilder;
  onHeightChannelChanged(body: string): PrincipledMaterialBuilder;
  onHeightMapChanged(body: string): PrincipledMaterialBuilder;
  onIndexOfRefractionChanged(body: string): PrincipledMaterialBuilder;
  onInvertOpacityMapValueChanged(body: string): PrincipledMaterialBuilder;
  onLightProbeChanged(body: string): PrincipledMaterialBuilder;
  onLightingChanged(body: string): PrincipledMaterialBuilder;
  onLineWidthChanged(body: string): PrincipledMaterialBuilder;
  onMaxHeightMapSamplesChanged(body: string): PrincipledMaterialBuilder;
  onMetalnessChanged(body: string): PrincipledMaterialBuilder;
  onMetalnessChannelChanged(body: string): PrincipledMaterialBuilder;
  onMetalnessMapChanged(body: string): PrincipledMaterialBuilder;
  onMinHeightMapSamplesChanged(body: string): PrincipledMaterialBuilder;
  onNormalMapChanged(body: string): PrincipledMaterialBuilder;
  onNormalStrengthChanged(body: string): PrincipledMaterialBuilder;
  onObjectNameChanged(body: string): PrincipledMaterialBuilder;
  onOcclusionAmountChanged(body: string): PrincipledMaterialBuilder;
  onOcclusionChannelChanged(body: string): PrincipledMaterialBuilder;
  onOcclusionMapChanged(body: string): PrincipledMaterialBuilder;
  onOpacityChanged(body: string): PrincipledMaterialBuilder;
  onOpacityChannelChanged(body: string): PrincipledMaterialBuilder;
  onOpacityMapChanged(body: string): PrincipledMaterialBuilder;
  onParentChanged(body: string): PrincipledMaterialBuilder;
  onPointSizeChanged(body: string): PrincipledMaterialBuilder;
  onRoughnessChanged(body: string): PrincipledMaterialBuilder;
  onRoughnessChannelChanged(body: string): PrincipledMaterialBuilder;
  onRoughnessMapChanged(body: string): PrincipledMaterialBuilder;
  onSpecularAmountChanged(body: string): PrincipledMaterialBuilder;
  onSpecularChannelChanged(body: string): PrincipledMaterialBuilder;
  onSpecularMapChanged(body: string): PrincipledMaterialBuilder;
  onSpecularReflectionMapChanged(body: string): PrincipledMaterialBuilder;
  onSpecularSingleChannelEnabledChanged(body: string): PrincipledMaterialBuilder;
  onSpecularTintChanged(body: string): PrincipledMaterialBuilder;
  onStateChanged(body: string): PrincipledMaterialBuilder;
  onThicknessChannelChanged(body: string): PrincipledMaterialBuilder;
  onThicknessFactorChanged(body: string): PrincipledMaterialBuilder;
  onThicknessMapChanged(body: string): PrincipledMaterialBuilder;
  onTransmissionChannelChanged(body: string): PrincipledMaterialBuilder;
  onTransmissionFactorChanged(body: string): PrincipledMaterialBuilder;
  onTransmissionMapChanged(body: string): PrincipledMaterialBuilder;
  onVertexColorAlphaMaskChanged(body: string): PrincipledMaterialBuilder;
  onVertexColorBlueMaskChanged(body: string): PrincipledMaterialBuilder;
  onVertexColorGreenMaskChanged(body: string): PrincipledMaterialBuilder;
  onVertexColorRedMaskChanged(body: string): PrincipledMaterialBuilder;
  onVertexColorsEnabledChanged(body: string): PrincipledMaterialBuilder;
  onVertexColorsMaskEnabledChanged(body: string): PrincipledMaterialBuilder;
}

const PRINCIPLEDMATERIAL_META: TypeMetadata = {
  typeName: 'PrincipledMaterial',
  properties: [
    { name: 'alphaCutoff', hasValue: true, hasBinding: true },
    { name: 'alphaMode', hasValue: true, hasBinding: true },
    { name: 'attenuationColor', hasValue: true, hasBinding: true },
    { name: 'attenuationDistance', hasValue: true, hasBinding: true },
    { name: 'baseColor', hasValue: true, hasBinding: true },
    { name: 'baseColorChannel', hasValue: true, hasBinding: true },
    { name: 'baseColorMap', hasValue: true, hasBinding: true },
    { name: 'baseColorSingleChannelEnabled', hasValue: true, hasBinding: true },
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
    { name: 'heightAmount', hasValue: true, hasBinding: true },
    { name: 'heightChannel', hasValue: true, hasBinding: true },
    { name: 'heightMap', hasValue: true, hasBinding: true },
    { name: 'indexOfRefraction', hasValue: true, hasBinding: true },
    { name: 'invertOpacityMapValue', hasValue: true, hasBinding: true },
    { name: 'lightProbe', hasValue: true, hasBinding: true },
    { name: 'lighting', hasValue: true, hasBinding: true },
    { name: 'lineWidth', hasValue: true, hasBinding: true },
    { name: 'maxHeightMapSamples', hasValue: true, hasBinding: true },
    { name: 'metalness', hasValue: true, hasBinding: true },
    { name: 'metalnessChannel', hasValue: true, hasBinding: true },
    { name: 'metalnessMap', hasValue: true, hasBinding: true },
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
    { name: 'roughness', hasValue: true, hasBinding: true },
    { name: 'roughnessChannel', hasValue: true, hasBinding: true },
    { name: 'roughnessMap', hasValue: true, hasBinding: true },
    { name: 'specularAmount', hasValue: true, hasBinding: true },
    { name: 'specularChannel', hasValue: true, hasBinding: true },
    { name: 'specularMap', hasValue: true, hasBinding: true },
    { name: 'specularReflectionMap', hasValue: true, hasBinding: true },
    { name: 'specularSingleChannelEnabled', hasValue: true, hasBinding: true },
    { name: 'specularTint', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAlphaCutoffChanged', paramCount: 1 },
    { handlerName: 'onAlphaModeChanged', paramCount: 1 },
    { handlerName: 'onAttenuationColorChanged', paramCount: 1 },
    { handlerName: 'onAttenuationDistanceChanged', paramCount: 1 },
    { handlerName: 'onBaseColorChanged', paramCount: 1 },
    { handlerName: 'onBaseColorChannelChanged', paramCount: 1 },
    { handlerName: 'onBaseColorMapChanged', paramCount: 1 },
    { handlerName: 'onBaseColorSingleChannelEnabledChanged', paramCount: 1 },
    { handlerName: 'onBlendModeChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onClearcoatAmountChanged', paramCount: 1 },
    { handlerName: 'onClearcoatChannelChanged', paramCount: 1 },
    { handlerName: 'onClearcoatFresnelBiasChanged', paramCount: 1 },
    { handlerName: 'onClearcoatFresnelPowerChanged', paramCount: 1 },
    { handlerName: 'onClearcoatFresnelScaleBiasEnabledChanged', paramCount: 1 },
    { handlerName: 'onClearcoatFresnelScaleChanged', paramCount: 1 },
    { handlerName: 'onClearcoatMapChanged', paramCount: 1 },
    { handlerName: 'onClearcoatNormalMapChanged', paramCount: 1 },
    { handlerName: 'onClearcoatNormalStrengthChanged', paramCount: 1 },
    { handlerName: 'onClearcoatRoughnessAmountChanged', paramCount: 1 },
    { handlerName: 'onClearcoatRoughnessChannelChanged', paramCount: 1 },
    { handlerName: 'onClearcoatRoughnessMapChanged', paramCount: 1 },
    { handlerName: 'onCullModeChanged', paramCount: 1 },
    { handlerName: 'onDepthDrawModeChanged', paramCount: 1 },
    { handlerName: 'onEmissiveChannelChanged', paramCount: 1 },
    { handlerName: 'onEmissiveFactorChanged', paramCount: 1 },
    { handlerName: 'onEmissiveMapChanged', paramCount: 1 },
    { handlerName: 'onEmissiveSingleChannelEnabledChanged', paramCount: 1 },
    { handlerName: 'onFresnelBiasChanged', paramCount: 1 },
    { handlerName: 'onFresnelPowerChanged', paramCount: 1 },
    { handlerName: 'onFresnelScaleBiasEnabledChanged', paramCount: 1 },
    { handlerName: 'onFresnelScaleChanged', paramCount: 1 },
    { handlerName: 'onHeightAmountChanged', paramCount: 1 },
    { handlerName: 'onHeightChannelChanged', paramCount: 1 },
    { handlerName: 'onHeightMapChanged', paramCount: 1 },
    { handlerName: 'onIndexOfRefractionChanged', paramCount: 1 },
    { handlerName: 'onInvertOpacityMapValueChanged', paramCount: 1 },
    { handlerName: 'onLightProbeChanged', paramCount: 1 },
    { handlerName: 'onLightingChanged', paramCount: 1 },
    { handlerName: 'onLineWidthChanged', paramCount: 0 },
    { handlerName: 'onMaxHeightMapSamplesChanged', paramCount: 1 },
    { handlerName: 'onMetalnessChanged', paramCount: 1 },
    { handlerName: 'onMetalnessChannelChanged', paramCount: 1 },
    { handlerName: 'onMetalnessMapChanged', paramCount: 1 },
    { handlerName: 'onMinHeightMapSamplesChanged', paramCount: 1 },
    { handlerName: 'onNormalMapChanged', paramCount: 1 },
    { handlerName: 'onNormalStrengthChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOcclusionAmountChanged', paramCount: 1 },
    { handlerName: 'onOcclusionChannelChanged', paramCount: 1 },
    { handlerName: 'onOcclusionMapChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 1 },
    { handlerName: 'onOpacityChannelChanged', paramCount: 1 },
    { handlerName: 'onOpacityMapChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPointSizeChanged', paramCount: 0 },
    { handlerName: 'onRoughnessChanged', paramCount: 1 },
    { handlerName: 'onRoughnessChannelChanged', paramCount: 1 },
    { handlerName: 'onRoughnessMapChanged', paramCount: 1 },
    { handlerName: 'onSpecularAmountChanged', paramCount: 1 },
    { handlerName: 'onSpecularChannelChanged', paramCount: 1 },
    { handlerName: 'onSpecularMapChanged', paramCount: 1 },
    { handlerName: 'onSpecularReflectionMapChanged', paramCount: 1 },
    { handlerName: 'onSpecularSingleChannelEnabledChanged', paramCount: 1 },
    { handlerName: 'onSpecularTintChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onThicknessChannelChanged', paramCount: 1 },
    { handlerName: 'onThicknessFactorChanged', paramCount: 1 },
    { handlerName: 'onThicknessMapChanged', paramCount: 1 },
    { handlerName: 'onTransmissionChannelChanged', paramCount: 1 },
    { handlerName: 'onTransmissionFactorChanged', paramCount: 1 },
    { handlerName: 'onTransmissionMapChanged', paramCount: 1 },
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

export function PrincipledMaterial(): PrincipledMaterialBuilder {
  return createFluentBuilder(
    'PrincipledMaterial',
    PRINCIPLEDMATERIAL_META,
  ) as unknown as PrincipledMaterialBuilder;
}

export namespace PrincipledMaterial {
  export namespace AlphaMode {
    export const Default = createEnumToken('PrincipledMaterial', 'AlphaMode', 'Default');
    export const Mask = createEnumToken('PrincipledMaterial', 'AlphaMode', 'Mask');
    export const Blend = createEnumToken('PrincipledMaterial', 'AlphaMode', 'Blend');
    export const Opaque = createEnumToken('PrincipledMaterial', 'AlphaMode', 'Opaque');
  }
  export namespace BlendMode {
    export const SourceOver = createEnumToken('PrincipledMaterial', 'BlendMode', 'SourceOver');
    export const Screen = createEnumToken('PrincipledMaterial', 'BlendMode', 'Screen');
    export const Multiply = createEnumToken('PrincipledMaterial', 'BlendMode', 'Multiply');
  }
  export namespace CullMode {
    export const BackFaceCulling = createEnumToken(
      'PrincipledMaterial',
      'CullMode',
      'BackFaceCulling',
    );
    export const FrontFaceCulling = createEnumToken(
      'PrincipledMaterial',
      'CullMode',
      'FrontFaceCulling',
    );
    export const NoCulling = createEnumToken('PrincipledMaterial', 'CullMode', 'NoCulling');
  }
  export namespace DepthDrawMode {
    export const OpaqueOnlyDepthDraw = createEnumToken(
      'PrincipledMaterial',
      'DepthDrawMode',
      'OpaqueOnlyDepthDraw',
    );
    export const AlwaysDepthDraw = createEnumToken(
      'PrincipledMaterial',
      'DepthDrawMode',
      'AlwaysDepthDraw',
    );
    export const NeverDepthDraw = createEnumToken(
      'PrincipledMaterial',
      'DepthDrawMode',
      'NeverDepthDraw',
    );
    export const OpaquePrePassDepthDraw = createEnumToken(
      'PrincipledMaterial',
      'DepthDrawMode',
      'OpaquePrePassDepthDraw',
    );
  }
  export namespace Lighting {
    export const NoLighting = createEnumToken('PrincipledMaterial', 'Lighting', 'NoLighting');
    export const FragmentLighting = createEnumToken(
      'PrincipledMaterial',
      'Lighting',
      'FragmentLighting',
    );
  }
  export namespace TextureChannelMapping {
    export const R = createEnumToken('PrincipledMaterial', 'TextureChannelMapping', 'R');
    export const G = createEnumToken('PrincipledMaterial', 'TextureChannelMapping', 'G');
    export const B = createEnumToken('PrincipledMaterial', 'TextureChannelMapping', 'B');
    export const A = createEnumToken('PrincipledMaterial', 'TextureChannelMapping', 'A');
  }
  export namespace VertexColorMask {
    export const NoMask = createEnumToken('PrincipledMaterial', 'VertexColorMask', 'NoMask');
    export const RoughnessMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'RoughnessMask',
    );
    export const NormalStrengthMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'NormalStrengthMask',
    );
    export const SpecularAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'SpecularAmountMask',
    );
    export const ClearcoatAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'ClearcoatAmountMask',
    );
    export const ClearcoatRoughnessAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'ClearcoatRoughnessAmountMask',
    );
    export const ClearcoatNormalStrengthMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'ClearcoatNormalStrengthMask',
    );
    export const HeightAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'HeightAmountMask',
    );
    export const MetalnessMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'MetalnessMask',
    );
    export const OcclusionAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'OcclusionAmountMask',
    );
    export const ThicknessFactorMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'ThicknessFactorMask',
    );
    export const TransmissionFactorMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMask',
      'TransmissionFactorMask',
    );
  }
  export namespace VertexColorMaskFlags {
    export const NoMask = createEnumToken('PrincipledMaterial', 'VertexColorMaskFlags', 'NoMask');
    export const RoughnessMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'RoughnessMask',
    );
    export const NormalStrengthMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'NormalStrengthMask',
    );
    export const SpecularAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'SpecularAmountMask',
    );
    export const ClearcoatAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'ClearcoatAmountMask',
    );
    export const ClearcoatRoughnessAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'ClearcoatRoughnessAmountMask',
    );
    export const ClearcoatNormalStrengthMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'ClearcoatNormalStrengthMask',
    );
    export const HeightAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'HeightAmountMask',
    );
    export const MetalnessMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'MetalnessMask',
    );
    export const OcclusionAmountMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'OcclusionAmountMask',
    );
    export const ThicknessFactorMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'ThicknessFactorMask',
    );
    export const TransmissionFactorMask = createEnumToken(
      'PrincipledMaterial',
      'VertexColorMaskFlags',
      'TransmissionFactorMask',
    );
  }
}
