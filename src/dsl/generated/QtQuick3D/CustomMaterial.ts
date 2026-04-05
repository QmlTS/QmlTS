// AUTO-GENERATED — DO NOT EDIT
// Type: CustomMaterial
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { TextureBuilder } from './Texture.js';
export interface CustomMaterialBuilder {
  id(id: string): CustomMaterialBuilder;
  child(obj: QmlObjectBuilder): CustomMaterialBuilder;

  alwaysDirty(value: boolean): CustomMaterialBuilder;
  alwaysDirtyBind(expr: string): CustomMaterialBuilder;
  cullMode(value: QmlEnumToken): CustomMaterialBuilder;
  cullModeBind(expr: string): CustomMaterialBuilder;
  depthDrawMode(value: QmlEnumToken): CustomMaterialBuilder;
  depthDrawModeBind(expr: string): CustomMaterialBuilder;
  destinationAlphaBlend(value: QmlEnumToken): CustomMaterialBuilder;
  destinationAlphaBlendBind(expr: string): CustomMaterialBuilder;
  destinationBlend(value: QmlEnumToken): CustomMaterialBuilder;
  destinationBlendBind(expr: string): CustomMaterialBuilder;
  fragmentShader(value: QmlUrl): CustomMaterialBuilder;
  fragmentShaderBind(expr: string): CustomMaterialBuilder;
  lightProbe(value: TextureBuilder): CustomMaterialBuilder;
  lightProbeBind(expr: string): CustomMaterialBuilder;
  lineWidth(value: number): CustomMaterialBuilder;
  lineWidthBind(expr: string): CustomMaterialBuilder;
  objectName(value: string): CustomMaterialBuilder;
  objectNameBind(expr: string): CustomMaterialBuilder;
  parent(value: QmlValue): CustomMaterialBuilder;
  parentBind(expr: string): CustomMaterialBuilder;
  shadingMode(value: QmlEnumToken): CustomMaterialBuilder;
  shadingModeBind(expr: string): CustomMaterialBuilder;
  sourceAlphaBlend(value: QmlEnumToken): CustomMaterialBuilder;
  sourceAlphaBlendBind(expr: string): CustomMaterialBuilder;
  sourceBlend(value: QmlEnumToken): CustomMaterialBuilder;
  sourceBlendBind(expr: string): CustomMaterialBuilder;
  state(value: string): CustomMaterialBuilder;
  stateBind(expr: string): CustomMaterialBuilder;
  vertexShader(value: QmlUrl): CustomMaterialBuilder;
  vertexShaderBind(expr: string): CustomMaterialBuilder;
  onAlwaysDirtyChanged(body: string): CustomMaterialBuilder;
  onChildrenChanged(body: string): CustomMaterialBuilder;
  onCullModeChanged(body: string): CustomMaterialBuilder;
  onDepthDrawModeChanged(body: string): CustomMaterialBuilder;
  onDstAlphaBlendChanged(body: string): CustomMaterialBuilder;
  onDstBlendChanged(body: string): CustomMaterialBuilder;
  onFragmentShaderChanged(body: string): CustomMaterialBuilder;
  onFragmentShaderCodeChanged(body: string): CustomMaterialBuilder;
  onLightProbeChanged(body: string): CustomMaterialBuilder;
  onLineWidthChanged(body: string): CustomMaterialBuilder;
  onObjectNameChanged(body: string): CustomMaterialBuilder;
  onParentChanged(body: string): CustomMaterialBuilder;
  onShadingModeChanged(body: string): CustomMaterialBuilder;
  onSrcAlphaBlendChanged(body: string): CustomMaterialBuilder;
  onSrcBlendChanged(body: string): CustomMaterialBuilder;
  onStateChanged(body: string): CustomMaterialBuilder;
  onVertexShaderChanged(body: string): CustomMaterialBuilder;
  onVertexShaderCodeChanged(body: string): CustomMaterialBuilder;
}

const CUSTOMMATERIAL_META: TypeMetadata = {
  typeName: 'CustomMaterial',
  properties: [
    { name: 'alwaysDirty', hasValue: true, hasBinding: true },
    { name: 'cullMode', hasValue: true, hasBinding: true },
    { name: 'depthDrawMode', hasValue: true, hasBinding: true },
    { name: 'destinationAlphaBlend', hasValue: true, hasBinding: true },
    { name: 'destinationBlend', hasValue: true, hasBinding: true },
    { name: 'fragmentShader', hasValue: true, hasBinding: true },
    { name: 'lightProbe', hasValue: true, hasBinding: true },
    { name: 'lineWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shadingMode', hasValue: true, hasBinding: true },
    { name: 'sourceAlphaBlend', hasValue: true, hasBinding: true },
    { name: 'sourceBlend', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'vertexShader', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlwaysDirtyChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onCullModeChanged', paramCount: 1 },
    { handlerName: 'onDepthDrawModeChanged', paramCount: 1 },
    { handlerName: 'onDstAlphaBlendChanged', paramCount: 0 },
    { handlerName: 'onDstBlendChanged', paramCount: 0 },
    { handlerName: 'onFragmentShaderChanged', paramCount: 0 },
    { handlerName: 'onFragmentShaderCodeChanged', paramCount: 0 },
    { handlerName: 'onLightProbeChanged', paramCount: 1 },
    { handlerName: 'onLineWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onShadingModeChanged', paramCount: 0 },
    { handlerName: 'onSrcAlphaBlendChanged', paramCount: 0 },
    { handlerName: 'onSrcBlendChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onVertexShaderChanged', paramCount: 0 },
    { handlerName: 'onVertexShaderCodeChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function CustomMaterial(): CustomMaterialBuilder {
  return createFluentBuilder('CustomMaterial', CUSTOMMATERIAL_META) as unknown as CustomMaterialBuilder;
}

export namespace CustomMaterial {
  export namespace BlendMode {
    export const NoBlend = createEnumToken('CustomMaterial', 'BlendMode', 'NoBlend');
    export const Zero = createEnumToken('CustomMaterial', 'BlendMode', 'Zero');
    export const One = createEnumToken('CustomMaterial', 'BlendMode', 'One');
    export const SrcColor = createEnumToken('CustomMaterial', 'BlendMode', 'SrcColor');
    export const OneMinusSrcColor = createEnumToken('CustomMaterial', 'BlendMode', 'OneMinusSrcColor');
    export const DstColor = createEnumToken('CustomMaterial', 'BlendMode', 'DstColor');
    export const OneMinusDstColor = createEnumToken('CustomMaterial', 'BlendMode', 'OneMinusDstColor');
    export const SrcAlpha = createEnumToken('CustomMaterial', 'BlendMode', 'SrcAlpha');
    export const OneMinusSrcAlpha = createEnumToken('CustomMaterial', 'BlendMode', 'OneMinusSrcAlpha');
    export const DstAlpha = createEnumToken('CustomMaterial', 'BlendMode', 'DstAlpha');
    export const OneMinusDstAlpha = createEnumToken('CustomMaterial', 'BlendMode', 'OneMinusDstAlpha');
    export const ConstantColor = createEnumToken('CustomMaterial', 'BlendMode', 'ConstantColor');
    export const OneMinusConstantColor = createEnumToken('CustomMaterial', 'BlendMode', 'OneMinusConstantColor');
    export const ConstantAlpha = createEnumToken('CustomMaterial', 'BlendMode', 'ConstantAlpha');
    export const OneMinusConstantAlpha = createEnumToken('CustomMaterial', 'BlendMode', 'OneMinusConstantAlpha');
    export const SrcAlphaSaturate = createEnumToken('CustomMaterial', 'BlendMode', 'SrcAlphaSaturate');
  }
  export namespace CullMode {
    export const BackFaceCulling = createEnumToken('CustomMaterial', 'CullMode', 'BackFaceCulling');
    export const FrontFaceCulling = createEnumToken('CustomMaterial', 'CullMode', 'FrontFaceCulling');
    export const NoCulling = createEnumToken('CustomMaterial', 'CullMode', 'NoCulling');
  }
  export namespace DepthDrawMode {
    export const OpaqueOnlyDepthDraw = createEnumToken('CustomMaterial', 'DepthDrawMode', 'OpaqueOnlyDepthDraw');
    export const AlwaysDepthDraw = createEnumToken('CustomMaterial', 'DepthDrawMode', 'AlwaysDepthDraw');
    export const NeverDepthDraw = createEnumToken('CustomMaterial', 'DepthDrawMode', 'NeverDepthDraw');
    export const OpaquePrePassDepthDraw = createEnumToken('CustomMaterial', 'DepthDrawMode', 'OpaquePrePassDepthDraw');
  }
  export namespace ShadingMode {
    export const Unshaded = createEnumToken('CustomMaterial', 'ShadingMode', 'Unshaded');
    export const Shaded = createEnumToken('CustomMaterial', 'ShadingMode', 'Shaded');
  }
  export namespace TextureChannelMapping {
    export const R = createEnumToken('CustomMaterial', 'TextureChannelMapping', 'R');
    export const G = createEnumToken('CustomMaterial', 'TextureChannelMapping', 'G');
    export const B = createEnumToken('CustomMaterial', 'TextureChannelMapping', 'B');
    export const A = createEnumToken('CustomMaterial', 'TextureChannelMapping', 'A');
  }
  export namespace VertexColorMask {
    export const NoMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'NoMask');
    export const RoughnessMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'RoughnessMask');
    export const NormalStrengthMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'NormalStrengthMask');
    export const SpecularAmountMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'SpecularAmountMask');
    export const ClearcoatAmountMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'ClearcoatAmountMask');
    export const ClearcoatRoughnessAmountMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'ClearcoatRoughnessAmountMask');
    export const ClearcoatNormalStrengthMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'ClearcoatNormalStrengthMask');
    export const HeightAmountMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'HeightAmountMask');
    export const MetalnessMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'MetalnessMask');
    export const OcclusionAmountMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'OcclusionAmountMask');
    export const ThicknessFactorMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'ThicknessFactorMask');
    export const TransmissionFactorMask = createEnumToken('CustomMaterial', 'VertexColorMask', 'TransmissionFactorMask');
  }
  export namespace VertexColorMaskFlags {
    export const NoMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'NoMask');
    export const RoughnessMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'RoughnessMask');
    export const NormalStrengthMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'NormalStrengthMask');
    export const SpecularAmountMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'SpecularAmountMask');
    export const ClearcoatAmountMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'ClearcoatAmountMask');
    export const ClearcoatRoughnessAmountMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'ClearcoatRoughnessAmountMask');
    export const ClearcoatNormalStrengthMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'ClearcoatNormalStrengthMask');
    export const HeightAmountMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'HeightAmountMask');
    export const MetalnessMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'MetalnessMask');
    export const OcclusionAmountMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'OcclusionAmountMask');
    export const ThicknessFactorMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'ThicknessFactorMask');
    export const TransmissionFactorMask = createEnumToken('CustomMaterial', 'VertexColorMaskFlags', 'TransmissionFactorMask');
  }
}
