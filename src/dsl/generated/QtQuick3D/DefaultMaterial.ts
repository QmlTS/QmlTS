// AUTO-GENERATED — DO NOT EDIT
// Type: DefaultMaterial
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
export interface DefaultMaterialBuilder {
  id(id: string): DefaultMaterialBuilder;
  child(obj: QmlObjectBuilder): DefaultMaterialBuilder;

  blendMode(value: QmlEnumToken): DefaultMaterialBuilder;
  blendModeBind(expr: string): DefaultMaterialBuilder;
  bumpAmount(value: number): DefaultMaterialBuilder;
  bumpAmountBind(expr: string): DefaultMaterialBuilder;
  bumpMap(value: TextureBuilder): DefaultMaterialBuilder;
  bumpMapBind(expr: string): DefaultMaterialBuilder;
  cullMode(value: QmlEnumToken): DefaultMaterialBuilder;
  cullModeBind(expr: string): DefaultMaterialBuilder;
  depthDrawMode(value: QmlEnumToken): DefaultMaterialBuilder;
  depthDrawModeBind(expr: string): DefaultMaterialBuilder;
  diffuseColor(value: QmlColor): DefaultMaterialBuilder;
  diffuseColorBind(expr: string): DefaultMaterialBuilder;
  diffuseLightWrap(value: number): DefaultMaterialBuilder;
  diffuseLightWrapBind(expr: string): DefaultMaterialBuilder;
  diffuseMap(value: TextureBuilder): DefaultMaterialBuilder;
  diffuseMapBind(expr: string): DefaultMaterialBuilder;
  emissiveFactor(value: QmlVector3d): DefaultMaterialBuilder;
  emissiveFactorBind(expr: string): DefaultMaterialBuilder;
  emissiveMap(value: TextureBuilder): DefaultMaterialBuilder;
  emissiveMapBind(expr: string): DefaultMaterialBuilder;
  fresnelPower(value: number): DefaultMaterialBuilder;
  fresnelPowerBind(expr: string): DefaultMaterialBuilder;
  indexOfRefraction(value: number): DefaultMaterialBuilder;
  indexOfRefractionBind(expr: string): DefaultMaterialBuilder;
  lightProbe(value: TextureBuilder): DefaultMaterialBuilder;
  lightProbeBind(expr: string): DefaultMaterialBuilder;
  lighting(value: QmlEnumToken): DefaultMaterialBuilder;
  lightingBind(expr: string): DefaultMaterialBuilder;
  lineWidth(value: number): DefaultMaterialBuilder;
  lineWidthBind(expr: string): DefaultMaterialBuilder;
  normalMap(value: TextureBuilder): DefaultMaterialBuilder;
  normalMapBind(expr: string): DefaultMaterialBuilder;
  objectName(value: string): DefaultMaterialBuilder;
  objectNameBind(expr: string): DefaultMaterialBuilder;
  opacity(value: number): DefaultMaterialBuilder;
  opacityBind(expr: string): DefaultMaterialBuilder;
  opacityChannel(value: QmlEnumToken): DefaultMaterialBuilder;
  opacityChannelBind(expr: string): DefaultMaterialBuilder;
  opacityMap(value: TextureBuilder): DefaultMaterialBuilder;
  opacityMapBind(expr: string): DefaultMaterialBuilder;
  parent(value: QmlValue): DefaultMaterialBuilder;
  parentBind(expr: string): DefaultMaterialBuilder;
  pointSize(value: number): DefaultMaterialBuilder;
  pointSizeBind(expr: string): DefaultMaterialBuilder;
  roughnessChannel(value: QmlEnumToken): DefaultMaterialBuilder;
  roughnessChannelBind(expr: string): DefaultMaterialBuilder;
  roughnessMap(value: TextureBuilder): DefaultMaterialBuilder;
  roughnessMapBind(expr: string): DefaultMaterialBuilder;
  specularAmount(value: number): DefaultMaterialBuilder;
  specularAmountBind(expr: string): DefaultMaterialBuilder;
  specularMap(value: TextureBuilder): DefaultMaterialBuilder;
  specularMapBind(expr: string): DefaultMaterialBuilder;
  specularModel(value: QmlEnumToken): DefaultMaterialBuilder;
  specularModelBind(expr: string): DefaultMaterialBuilder;
  specularReflectionMap(value: TextureBuilder): DefaultMaterialBuilder;
  specularReflectionMapBind(expr: string): DefaultMaterialBuilder;
  specularRoughness(value: number): DefaultMaterialBuilder;
  specularRoughnessBind(expr: string): DefaultMaterialBuilder;
  specularTint(value: QmlColor): DefaultMaterialBuilder;
  specularTintBind(expr: string): DefaultMaterialBuilder;
  state(value: string): DefaultMaterialBuilder;
  stateBind(expr: string): DefaultMaterialBuilder;
  translucencyChannel(value: QmlEnumToken): DefaultMaterialBuilder;
  translucencyChannelBind(expr: string): DefaultMaterialBuilder;
  translucencyMap(value: TextureBuilder): DefaultMaterialBuilder;
  translucencyMapBind(expr: string): DefaultMaterialBuilder;
  translucentFalloff(value: number): DefaultMaterialBuilder;
  translucentFalloffBind(expr: string): DefaultMaterialBuilder;
  vertexColorsEnabled(value: boolean): DefaultMaterialBuilder;
  vertexColorsEnabledBind(expr: string): DefaultMaterialBuilder;
  onBlendModeChanged(body: string): DefaultMaterialBuilder;
  onBumpAmountChanged(body: string): DefaultMaterialBuilder;
  onBumpMapChanged(body: string): DefaultMaterialBuilder;
  onChildrenChanged(body: string): DefaultMaterialBuilder;
  onCullModeChanged(body: string): DefaultMaterialBuilder;
  onDepthDrawModeChanged(body: string): DefaultMaterialBuilder;
  onDiffuseColorChanged(body: string): DefaultMaterialBuilder;
  onDiffuseLightWrapChanged(body: string): DefaultMaterialBuilder;
  onDiffuseMapChanged(body: string): DefaultMaterialBuilder;
  onEmissiveFactorChanged(body: string): DefaultMaterialBuilder;
  onEmissiveMapChanged(body: string): DefaultMaterialBuilder;
  onFresnelPowerChanged(body: string): DefaultMaterialBuilder;
  onIndexOfRefractionChanged(body: string): DefaultMaterialBuilder;
  onLightProbeChanged(body: string): DefaultMaterialBuilder;
  onLightingChanged(body: string): DefaultMaterialBuilder;
  onLineWidthChanged(body: string): DefaultMaterialBuilder;
  onNormalMapChanged(body: string): DefaultMaterialBuilder;
  onObjectNameChanged(body: string): DefaultMaterialBuilder;
  onOpacityChanged(body: string): DefaultMaterialBuilder;
  onOpacityChannelChanged(body: string): DefaultMaterialBuilder;
  onOpacityMapChanged(body: string): DefaultMaterialBuilder;
  onParentChanged(body: string): DefaultMaterialBuilder;
  onPointSizeChanged(body: string): DefaultMaterialBuilder;
  onRoughnessChannelChanged(body: string): DefaultMaterialBuilder;
  onRoughnessMapChanged(body: string): DefaultMaterialBuilder;
  onSpecularAmountChanged(body: string): DefaultMaterialBuilder;
  onSpecularMapChanged(body: string): DefaultMaterialBuilder;
  onSpecularModelChanged(body: string): DefaultMaterialBuilder;
  onSpecularReflectionMapChanged(body: string): DefaultMaterialBuilder;
  onSpecularRoughnessChanged(body: string): DefaultMaterialBuilder;
  onSpecularTintChanged(body: string): DefaultMaterialBuilder;
  onStateChanged(body: string): DefaultMaterialBuilder;
  onTranslucencyChannelChanged(body: string): DefaultMaterialBuilder;
  onTranslucencyMapChanged(body: string): DefaultMaterialBuilder;
  onTranslucentFalloffChanged(body: string): DefaultMaterialBuilder;
  onVertexColorsEnabledChanged(body: string): DefaultMaterialBuilder;
}

const DEFAULTMATERIAL_META: TypeMetadata = {
  typeName: 'DefaultMaterial',
  properties: [
    { name: 'blendMode', hasValue: true, hasBinding: true },
    { name: 'bumpAmount', hasValue: true, hasBinding: true },
    { name: 'bumpMap', hasValue: true, hasBinding: true },
    { name: 'cullMode', hasValue: true, hasBinding: true },
    { name: 'depthDrawMode', hasValue: true, hasBinding: true },
    { name: 'diffuseColor', hasValue: true, hasBinding: true },
    { name: 'diffuseLightWrap', hasValue: true, hasBinding: true },
    { name: 'diffuseMap', hasValue: true, hasBinding: true },
    { name: 'emissiveFactor', hasValue: true, hasBinding: true },
    { name: 'emissiveMap', hasValue: true, hasBinding: true },
    { name: 'fresnelPower', hasValue: true, hasBinding: true },
    { name: 'indexOfRefraction', hasValue: true, hasBinding: true },
    { name: 'lightProbe', hasValue: true, hasBinding: true },
    { name: 'lighting', hasValue: true, hasBinding: true },
    { name: 'lineWidth', hasValue: true, hasBinding: true },
    { name: 'normalMap', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'opacityChannel', hasValue: true, hasBinding: true },
    { name: 'opacityMap', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pointSize', hasValue: true, hasBinding: true },
    { name: 'roughnessChannel', hasValue: true, hasBinding: true },
    { name: 'roughnessMap', hasValue: true, hasBinding: true },
    { name: 'specularAmount', hasValue: true, hasBinding: true },
    { name: 'specularMap', hasValue: true, hasBinding: true },
    { name: 'specularModel', hasValue: true, hasBinding: true },
    { name: 'specularReflectionMap', hasValue: true, hasBinding: true },
    { name: 'specularRoughness', hasValue: true, hasBinding: true },
    { name: 'specularTint', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'translucencyChannel', hasValue: true, hasBinding: true },
    { name: 'translucencyMap', hasValue: true, hasBinding: true },
    { name: 'translucentFalloff', hasValue: true, hasBinding: true },
    { name: 'vertexColorsEnabled', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBlendModeChanged', paramCount: 1 },
    { handlerName: 'onBumpAmountChanged', paramCount: 1 },
    { handlerName: 'onBumpMapChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onCullModeChanged', paramCount: 1 },
    { handlerName: 'onDepthDrawModeChanged', paramCount: 1 },
    { handlerName: 'onDiffuseColorChanged', paramCount: 1 },
    { handlerName: 'onDiffuseLightWrapChanged', paramCount: 1 },
    { handlerName: 'onDiffuseMapChanged', paramCount: 1 },
    { handlerName: 'onEmissiveFactorChanged', paramCount: 1 },
    { handlerName: 'onEmissiveMapChanged', paramCount: 1 },
    { handlerName: 'onFresnelPowerChanged', paramCount: 1 },
    { handlerName: 'onIndexOfRefractionChanged', paramCount: 1 },
    { handlerName: 'onLightProbeChanged', paramCount: 1 },
    { handlerName: 'onLightingChanged', paramCount: 1 },
    { handlerName: 'onLineWidthChanged', paramCount: 0 },
    { handlerName: 'onNormalMapChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 1 },
    { handlerName: 'onOpacityChannelChanged', paramCount: 1 },
    { handlerName: 'onOpacityMapChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPointSizeChanged', paramCount: 0 },
    { handlerName: 'onRoughnessChannelChanged', paramCount: 1 },
    { handlerName: 'onRoughnessMapChanged', paramCount: 1 },
    { handlerName: 'onSpecularAmountChanged', paramCount: 1 },
    { handlerName: 'onSpecularMapChanged', paramCount: 1 },
    { handlerName: 'onSpecularModelChanged', paramCount: 1 },
    { handlerName: 'onSpecularReflectionMapChanged', paramCount: 1 },
    { handlerName: 'onSpecularRoughnessChanged', paramCount: 1 },
    { handlerName: 'onSpecularTintChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onTranslucencyChannelChanged', paramCount: 1 },
    { handlerName: 'onTranslucencyMapChanged', paramCount: 1 },
    { handlerName: 'onTranslucentFalloffChanged', paramCount: 1 },
    { handlerName: 'onVertexColorsEnabledChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function DefaultMaterial(): DefaultMaterialBuilder {
  return createFluentBuilder(
    'DefaultMaterial',
    DEFAULTMATERIAL_META,
  ) as unknown as DefaultMaterialBuilder;
}

export namespace DefaultMaterial {
  export namespace BlendMode {
    export const SourceOver = createEnumToken('DefaultMaterial', 'BlendMode', 'SourceOver');
    export const Screen = createEnumToken('DefaultMaterial', 'BlendMode', 'Screen');
    export const Multiply = createEnumToken('DefaultMaterial', 'BlendMode', 'Multiply');
  }
  export namespace CullMode {
    export const BackFaceCulling = createEnumToken(
      'DefaultMaterial',
      'CullMode',
      'BackFaceCulling',
    );
    export const FrontFaceCulling = createEnumToken(
      'DefaultMaterial',
      'CullMode',
      'FrontFaceCulling',
    );
    export const NoCulling = createEnumToken('DefaultMaterial', 'CullMode', 'NoCulling');
  }
  export namespace DepthDrawMode {
    export const OpaqueOnlyDepthDraw = createEnumToken(
      'DefaultMaterial',
      'DepthDrawMode',
      'OpaqueOnlyDepthDraw',
    );
    export const AlwaysDepthDraw = createEnumToken(
      'DefaultMaterial',
      'DepthDrawMode',
      'AlwaysDepthDraw',
    );
    export const NeverDepthDraw = createEnumToken(
      'DefaultMaterial',
      'DepthDrawMode',
      'NeverDepthDraw',
    );
    export const OpaquePrePassDepthDraw = createEnumToken(
      'DefaultMaterial',
      'DepthDrawMode',
      'OpaquePrePassDepthDraw',
    );
  }
  export namespace Lighting {
    export const NoLighting = createEnumToken('DefaultMaterial', 'Lighting', 'NoLighting');
    export const FragmentLighting = createEnumToken(
      'DefaultMaterial',
      'Lighting',
      'FragmentLighting',
    );
  }
  export namespace SpecularModel {
    export const Default = createEnumToken('DefaultMaterial', 'SpecularModel', 'Default');
    export const KGGX = createEnumToken('DefaultMaterial', 'SpecularModel', 'KGGX');
  }
  export namespace TextureChannelMapping {
    export const R = createEnumToken('DefaultMaterial', 'TextureChannelMapping', 'R');
    export const G = createEnumToken('DefaultMaterial', 'TextureChannelMapping', 'G');
    export const B = createEnumToken('DefaultMaterial', 'TextureChannelMapping', 'B');
    export const A = createEnumToken('DefaultMaterial', 'TextureChannelMapping', 'A');
  }
  export namespace VertexColorMask {
    export const NoMask = createEnumToken('DefaultMaterial', 'VertexColorMask', 'NoMask');
    export const RoughnessMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'RoughnessMask',
    );
    export const NormalStrengthMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'NormalStrengthMask',
    );
    export const SpecularAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'SpecularAmountMask',
    );
    export const ClearcoatAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'ClearcoatAmountMask',
    );
    export const ClearcoatRoughnessAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'ClearcoatRoughnessAmountMask',
    );
    export const ClearcoatNormalStrengthMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'ClearcoatNormalStrengthMask',
    );
    export const HeightAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'HeightAmountMask',
    );
    export const MetalnessMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'MetalnessMask',
    );
    export const OcclusionAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'OcclusionAmountMask',
    );
    export const ThicknessFactorMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'ThicknessFactorMask',
    );
    export const TransmissionFactorMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMask',
      'TransmissionFactorMask',
    );
  }
  export namespace VertexColorMaskFlags {
    export const NoMask = createEnumToken('DefaultMaterial', 'VertexColorMaskFlags', 'NoMask');
    export const RoughnessMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'RoughnessMask',
    );
    export const NormalStrengthMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'NormalStrengthMask',
    );
    export const SpecularAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'SpecularAmountMask',
    );
    export const ClearcoatAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'ClearcoatAmountMask',
    );
    export const ClearcoatRoughnessAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'ClearcoatRoughnessAmountMask',
    );
    export const ClearcoatNormalStrengthMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'ClearcoatNormalStrengthMask',
    );
    export const HeightAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'HeightAmountMask',
    );
    export const MetalnessMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'MetalnessMask',
    );
    export const OcclusionAmountMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'OcclusionAmountMask',
    );
    export const ThicknessFactorMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'ThicknessFactorMask',
    );
    export const TransmissionFactorMask = createEnumToken(
      'DefaultMaterial',
      'VertexColorMaskFlags',
      'TransmissionFactorMask',
    );
  }
}
