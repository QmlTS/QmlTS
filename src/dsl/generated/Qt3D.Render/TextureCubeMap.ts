// AUTO-GENERATED — DO NOT EDIT
// Type: TextureCubeMap
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface TextureCubeMapBuilder {
  id(id: string): TextureCubeMapBuilder;
  child(obj: QmlObjectBuilder): TextureCubeMapBuilder;

  comparisonFunction(value: QmlEnumToken): TextureCubeMapBuilder;
  comparisonFunctionBind(expr: string): TextureCubeMapBuilder;
  comparisonMode(value: QmlEnumToken): TextureCubeMapBuilder;
  comparisonModeBind(expr: string): TextureCubeMapBuilder;
  depth(value: number): TextureCubeMapBuilder;
  depthBind(expr: string): TextureCubeMapBuilder;
  enabled(value: boolean): TextureCubeMapBuilder;
  enabledBind(expr: string): TextureCubeMapBuilder;
  format(value: QmlEnumToken): TextureCubeMapBuilder;
  formatBind(expr: string): TextureCubeMapBuilder;
  generateMipMaps(value: boolean): TextureCubeMapBuilder;
  generateMipMapsBind(expr: string): TextureCubeMapBuilder;
  height(value: number): TextureCubeMapBuilder;
  heightBind(expr: string): TextureCubeMapBuilder;
  layers(value: number): TextureCubeMapBuilder;
  layersBind(expr: string): TextureCubeMapBuilder;
  magnificationFilter(value: QmlEnumToken): TextureCubeMapBuilder;
  magnificationFilterBind(expr: string): TextureCubeMapBuilder;
  maximumAnisotropy(value: number): TextureCubeMapBuilder;
  maximumAnisotropyBind(expr: string): TextureCubeMapBuilder;
  minificationFilter(value: QmlEnumToken): TextureCubeMapBuilder;
  minificationFilterBind(expr: string): TextureCubeMapBuilder;
  mipLevels(value: number): TextureCubeMapBuilder;
  mipLevelsBind(expr: string): TextureCubeMapBuilder;
  objectName(value: string): TextureCubeMapBuilder;
  objectNameBind(expr: string): TextureCubeMapBuilder;
  parent(value: QmlValue): TextureCubeMapBuilder;
  parentBind(expr: string): TextureCubeMapBuilder;
  samples(value: number): TextureCubeMapBuilder;
  samplesBind(expr: string): TextureCubeMapBuilder;
  width(value: number): TextureCubeMapBuilder;
  widthBind(expr: string): TextureCubeMapBuilder;
  onComparisonFunctionChanged(body: string): TextureCubeMapBuilder;
  onComparisonModeChanged(body: string): TextureCubeMapBuilder;
  onDepthChanged(body: string): TextureCubeMapBuilder;
  onEnabledChanged(body: string): TextureCubeMapBuilder;
  onFormatChanged(body: string): TextureCubeMapBuilder;
  onGenerateMipMapsChanged(body: string): TextureCubeMapBuilder;
  onHandleChanged(body: string): TextureCubeMapBuilder;
  onHandleTypeChanged(body: string): TextureCubeMapBuilder;
  onHeightChanged(body: string): TextureCubeMapBuilder;
  onLayersChanged(body: string): TextureCubeMapBuilder;
  onMagnificationFilterChanged(body: string): TextureCubeMapBuilder;
  onMaximumAnisotropyChanged(body: string): TextureCubeMapBuilder;
  onMinificationFilterChanged(body: string): TextureCubeMapBuilder;
  onMipLevelsChanged(body: string): TextureCubeMapBuilder;
  onNodeDestroyed(body: string): TextureCubeMapBuilder;
  onObjectNameChanged(body: string): TextureCubeMapBuilder;
  onParentChanged(body: string): TextureCubeMapBuilder;
  onSamplesChanged(body: string): TextureCubeMapBuilder;
  onStatusChanged(body: string): TextureCubeMapBuilder;
  onWidthChanged(body: string): TextureCubeMapBuilder;
}

const TEXTURECUBEMAP_META: TypeMetadata = {
  typeName: 'TextureCubeMap',
  properties: [
    { name: 'comparisonFunction', hasValue: true, hasBinding: true },
    { name: 'comparisonMode', hasValue: true, hasBinding: true },
    { name: 'depth', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'format', hasValue: true, hasBinding: true },
    { name: 'generateMipMaps', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'magnificationFilter', hasValue: true, hasBinding: true },
    { name: 'maximumAnisotropy', hasValue: true, hasBinding: true },
    { name: 'minificationFilter', hasValue: true, hasBinding: true },
    { name: 'mipLevels', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'samples', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onComparisonFunctionChanged', paramCount: 1 },
    { handlerName: 'onComparisonModeChanged', paramCount: 1 },
    { handlerName: 'onDepthChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFormatChanged', paramCount: 1 },
    { handlerName: 'onGenerateMipMapsChanged', paramCount: 1 },
    { handlerName: 'onHandleChanged', paramCount: 1 },
    { handlerName: 'onHandleTypeChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onLayersChanged', paramCount: 1 },
    { handlerName: 'onMagnificationFilterChanged', paramCount: 1 },
    { handlerName: 'onMaximumAnisotropyChanged', paramCount: 1 },
    { handlerName: 'onMinificationFilterChanged', paramCount: 1 },
    { handlerName: 'onMipLevelsChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSamplesChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function TextureCubeMap(): TextureCubeMapBuilder {
  return createFluentBuilder('TextureCubeMap', TEXTURECUBEMAP_META) as unknown as TextureCubeMapBuilder;
}

export namespace TextureCubeMap {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken('TextureCubeMap', 'ComparisonFunction', 'CompareLessEqual');
    export const CompareGreaterEqual = createEnumToken('TextureCubeMap', 'ComparisonFunction', 'CompareGreaterEqual');
    export const CompareLess = createEnumToken('TextureCubeMap', 'ComparisonFunction', 'CompareLess');
    export const CompareGreater = createEnumToken('TextureCubeMap', 'ComparisonFunction', 'CompareGreater');
    export const CompareEqual = createEnumToken('TextureCubeMap', 'ComparisonFunction', 'CompareEqual');
    export const CommpareNotEqual = createEnumToken('TextureCubeMap', 'ComparisonFunction', 'CommpareNotEqual');
    export const CompareAlways = createEnumToken('TextureCubeMap', 'ComparisonFunction', 'CompareAlways');
    export const CompareNever = createEnumToken('TextureCubeMap', 'ComparisonFunction', 'CompareNever');
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken('TextureCubeMap', 'ComparisonMode', 'CompareRefToTexture');
    export const CompareNone = createEnumToken('TextureCubeMap', 'ComparisonMode', 'CompareNone');
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken('TextureCubeMap', 'CubeMapFace', 'CubeMapPositiveX');
    export const CubeMapNegativeX = createEnumToken('TextureCubeMap', 'CubeMapFace', 'CubeMapNegativeX');
    export const CubeMapPositiveY = createEnumToken('TextureCubeMap', 'CubeMapFace', 'CubeMapPositiveY');
    export const CubeMapNegativeY = createEnumToken('TextureCubeMap', 'CubeMapFace', 'CubeMapNegativeY');
    export const CubeMapPositiveZ = createEnumToken('TextureCubeMap', 'CubeMapFace', 'CubeMapPositiveZ');
    export const CubeMapNegativeZ = createEnumToken('TextureCubeMap', 'CubeMapFace', 'CubeMapNegativeZ');
    export const AllFaces = createEnumToken('TextureCubeMap', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('TextureCubeMap', 'Filter', 'Nearest');
    export const Linear = createEnumToken('TextureCubeMap', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken('TextureCubeMap', 'Filter', 'NearestMipMapNearest');
    export const NearestMipMapLinear = createEnumToken('TextureCubeMap', 'Filter', 'NearestMipMapLinear');
    export const LinearMipMapNearest = createEnumToken('TextureCubeMap', 'Filter', 'LinearMipMapNearest');
    export const LinearMipMapLinear = createEnumToken('TextureCubeMap', 'Filter', 'LinearMipMapLinear');
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('TextureCubeMap', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken('TextureCubeMap', 'HandleType', 'OpenGLTextureId');
    export const RHITextureId = createEnumToken('TextureCubeMap', 'HandleType', 'RHITextureId');
  }
  export namespace Status {
    export const None = createEnumToken('TextureCubeMap', 'Status', 'None');
    export const Loading = createEnumToken('TextureCubeMap', 'Status', 'Loading');
    export const Ready = createEnumToken('TextureCubeMap', 'Status', 'Ready');
    export const Error = createEnumToken('TextureCubeMap', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken('TextureCubeMap', 'Target', 'TargetAutomatic');
    export const Target1D = createEnumToken('TextureCubeMap', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('TextureCubeMap', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('TextureCubeMap', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('TextureCubeMap', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('TextureCubeMap', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('TextureCubeMap', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken('TextureCubeMap', 'Target', 'TargetCubeMapArray');
    export const Target2DMultisample = createEnumToken('TextureCubeMap', 'Target', 'Target2DMultisample');
    export const Target2DMultisampleArray = createEnumToken('TextureCubeMap', 'Target', 'Target2DMultisampleArray');
    export const TargetRectangle = createEnumToken('TextureCubeMap', 'Target', 'TargetRectangle');
    export const TargetBuffer = createEnumToken('TextureCubeMap', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('TextureCubeMap', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('TextureCubeMap', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB16_UNorm');
    export const RGBA16_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA16_UNorm');
    export const R8_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB16_SNorm');
    export const RGBA16_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA16_SNorm');
    export const R8U = createEnumToken('TextureCubeMap', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('TextureCubeMap', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('TextureCubeMap', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('TextureCubeMap', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('TextureCubeMap', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('TextureCubeMap', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('TextureCubeMap', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('TextureCubeMap', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('TextureCubeMap', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('TextureCubeMap', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('TextureCubeMap', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('TextureCubeMap', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('TextureCubeMap', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('TextureCubeMap', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('TextureCubeMap', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'R_ATI1N_UNorm');
    export const R_ATI1N_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'R_ATI1N_SNorm');
    export const RG_ATI2N_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG_ATI2N_UNorm');
    export const RG_ATI2N_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG_ATI2N_SNorm');
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB_BP_UNSIGNED_FLOAT');
    export const RGB_BP_SIGNED_FLOAT = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB_BP_SIGNED_FLOAT');
    export const RGB_BP_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB_BP_UNorm');
    export const R11_EAC_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'R11_EAC_UNorm');
    export const R11_EAC_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'R11_EAC_SNorm');
    export const RG11_EAC_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG11_EAC_UNorm');
    export const RG11_EAC_SNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'RG11_EAC_SNorm');
    export const RGB8_ETC2 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB8_PunchThrough_Alpha1_ETC2');
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB8_PunchThrough_Alpha1_ETC2');
    export const RGBA8_ETC2_EAC = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBA8_ETC2_EAC');
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB8_Alpha8_ETC2_EAC');
    export const RGB8_ETC1 = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB8_Alpha8');
    export const SRGB_DXT1 = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB_Alpha_DXT1');
    export const SRGB_Alpha_DXT3 = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB_Alpha_DXT3');
    export const SRGB_Alpha_DXT5 = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB_Alpha_DXT5');
    export const SRGB_BP_UNorm = createEnumToken('TextureCubeMap', 'TextureFormat', 'SRGB_BP_UNorm');
    export const DepthFormat = createEnumToken('TextureCubeMap', 'TextureFormat', 'DepthFormat');
    export const AlphaFormat = createEnumToken('TextureCubeMap', 'TextureFormat', 'AlphaFormat');
    export const RGBFormat = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('TextureCubeMap', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken('TextureCubeMap', 'TextureFormat', 'LuminanceFormat');
    export const LuminanceAlphaFormat = createEnumToken('TextureCubeMap', 'TextureFormat', 'LuminanceAlphaFormat');
  }
}
