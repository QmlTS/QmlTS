// AUTO-GENERATED — DO NOT EDIT
// Type: Texture1D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface Texture1DBuilder {
  id(id: string): Texture1DBuilder;
  child(obj: QmlObjectBuilder): Texture1DBuilder;

  comparisonFunction(value: QmlEnumToken): Texture1DBuilder;
  comparisonFunctionBind(expr: string): Texture1DBuilder;
  comparisonMode(value: QmlEnumToken): Texture1DBuilder;
  comparisonModeBind(expr: string): Texture1DBuilder;
  depth(value: number): Texture1DBuilder;
  depthBind(expr: string): Texture1DBuilder;
  enabled(value: boolean): Texture1DBuilder;
  enabledBind(expr: string): Texture1DBuilder;
  format(value: QmlEnumToken): Texture1DBuilder;
  formatBind(expr: string): Texture1DBuilder;
  generateMipMaps(value: boolean): Texture1DBuilder;
  generateMipMapsBind(expr: string): Texture1DBuilder;
  height(value: number): Texture1DBuilder;
  heightBind(expr: string): Texture1DBuilder;
  layers(value: number): Texture1DBuilder;
  layersBind(expr: string): Texture1DBuilder;
  magnificationFilter(value: QmlEnumToken): Texture1DBuilder;
  magnificationFilterBind(expr: string): Texture1DBuilder;
  maximumAnisotropy(value: number): Texture1DBuilder;
  maximumAnisotropyBind(expr: string): Texture1DBuilder;
  minificationFilter(value: QmlEnumToken): Texture1DBuilder;
  minificationFilterBind(expr: string): Texture1DBuilder;
  mipLevels(value: number): Texture1DBuilder;
  mipLevelsBind(expr: string): Texture1DBuilder;
  objectName(value: string): Texture1DBuilder;
  objectNameBind(expr: string): Texture1DBuilder;
  parent(value: QmlValue): Texture1DBuilder;
  parentBind(expr: string): Texture1DBuilder;
  samples(value: number): Texture1DBuilder;
  samplesBind(expr: string): Texture1DBuilder;
  width(value: number): Texture1DBuilder;
  widthBind(expr: string): Texture1DBuilder;
  onComparisonFunctionChanged(body: string): Texture1DBuilder;
  onComparisonModeChanged(body: string): Texture1DBuilder;
  onDepthChanged(body: string): Texture1DBuilder;
  onEnabledChanged(body: string): Texture1DBuilder;
  onFormatChanged(body: string): Texture1DBuilder;
  onGenerateMipMapsChanged(body: string): Texture1DBuilder;
  onHandleChanged(body: string): Texture1DBuilder;
  onHandleTypeChanged(body: string): Texture1DBuilder;
  onHeightChanged(body: string): Texture1DBuilder;
  onLayersChanged(body: string): Texture1DBuilder;
  onMagnificationFilterChanged(body: string): Texture1DBuilder;
  onMaximumAnisotropyChanged(body: string): Texture1DBuilder;
  onMinificationFilterChanged(body: string): Texture1DBuilder;
  onMipLevelsChanged(body: string): Texture1DBuilder;
  onNodeDestroyed(body: string): Texture1DBuilder;
  onObjectNameChanged(body: string): Texture1DBuilder;
  onParentChanged(body: string): Texture1DBuilder;
  onSamplesChanged(body: string): Texture1DBuilder;
  onStatusChanged(body: string): Texture1DBuilder;
  onWidthChanged(body: string): Texture1DBuilder;
}

const TEXTURE1D_META: TypeMetadata = {
  typeName: 'Texture1D',
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

export function Texture1D(): Texture1DBuilder {
  return createFluentBuilder('Texture1D', TEXTURE1D_META) as unknown as Texture1DBuilder;
}

export namespace Texture1D {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken('Texture1D', 'ComparisonFunction', 'CompareLessEqual');
    export const CompareGreaterEqual = createEnumToken('Texture1D', 'ComparisonFunction', 'CompareGreaterEqual');
    export const CompareLess = createEnumToken('Texture1D', 'ComparisonFunction', 'CompareLess');
    export const CompareGreater = createEnumToken('Texture1D', 'ComparisonFunction', 'CompareGreater');
    export const CompareEqual = createEnumToken('Texture1D', 'ComparisonFunction', 'CompareEqual');
    export const CommpareNotEqual = createEnumToken('Texture1D', 'ComparisonFunction', 'CommpareNotEqual');
    export const CompareAlways = createEnumToken('Texture1D', 'ComparisonFunction', 'CompareAlways');
    export const CompareNever = createEnumToken('Texture1D', 'ComparisonFunction', 'CompareNever');
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken('Texture1D', 'ComparisonMode', 'CompareRefToTexture');
    export const CompareNone = createEnumToken('Texture1D', 'ComparisonMode', 'CompareNone');
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken('Texture1D', 'CubeMapFace', 'CubeMapPositiveX');
    export const CubeMapNegativeX = createEnumToken('Texture1D', 'CubeMapFace', 'CubeMapNegativeX');
    export const CubeMapPositiveY = createEnumToken('Texture1D', 'CubeMapFace', 'CubeMapPositiveY');
    export const CubeMapNegativeY = createEnumToken('Texture1D', 'CubeMapFace', 'CubeMapNegativeY');
    export const CubeMapPositiveZ = createEnumToken('Texture1D', 'CubeMapFace', 'CubeMapPositiveZ');
    export const CubeMapNegativeZ = createEnumToken('Texture1D', 'CubeMapFace', 'CubeMapNegativeZ');
    export const AllFaces = createEnumToken('Texture1D', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('Texture1D', 'Filter', 'Nearest');
    export const Linear = createEnumToken('Texture1D', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken('Texture1D', 'Filter', 'NearestMipMapNearest');
    export const NearestMipMapLinear = createEnumToken('Texture1D', 'Filter', 'NearestMipMapLinear');
    export const LinearMipMapNearest = createEnumToken('Texture1D', 'Filter', 'LinearMipMapNearest');
    export const LinearMipMapLinear = createEnumToken('Texture1D', 'Filter', 'LinearMipMapLinear');
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('Texture1D', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken('Texture1D', 'HandleType', 'OpenGLTextureId');
    export const RHITextureId = createEnumToken('Texture1D', 'HandleType', 'RHITextureId');
  }
  export namespace Status {
    export const None = createEnumToken('Texture1D', 'Status', 'None');
    export const Loading = createEnumToken('Texture1D', 'Status', 'Loading');
    export const Ready = createEnumToken('Texture1D', 'Status', 'Ready');
    export const Error = createEnumToken('Texture1D', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken('Texture1D', 'Target', 'TargetAutomatic');
    export const Target1D = createEnumToken('Texture1D', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('Texture1D', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('Texture1D', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('Texture1D', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('Texture1D', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('Texture1D', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken('Texture1D', 'Target', 'TargetCubeMapArray');
    export const Target2DMultisample = createEnumToken('Texture1D', 'Target', 'Target2DMultisample');
    export const Target2DMultisampleArray = createEnumToken('Texture1D', 'Target', 'Target2DMultisampleArray');
    export const TargetRectangle = createEnumToken('Texture1D', 'Target', 'TargetRectangle');
    export const TargetBuffer = createEnumToken('Texture1D', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('Texture1D', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('Texture1D', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGB16_UNorm');
    export const RGBA16_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGBA16_UNorm');
    export const R8_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGB16_SNorm');
    export const RGBA16_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGBA16_SNorm');
    export const R8U = createEnumToken('Texture1D', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('Texture1D', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('Texture1D', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('Texture1D', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('Texture1D', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('Texture1D', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('Texture1D', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('Texture1D', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('Texture1D', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('Texture1D', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('Texture1D', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('Texture1D', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('Texture1D', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('Texture1D', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('Texture1D', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('Texture1D', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('Texture1D', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('Texture1D', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('Texture1D', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('Texture1D', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('Texture1D', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('Texture1D', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('Texture1D', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('Texture1D', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('Texture1D', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('Texture1D', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('Texture1D', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('Texture1D', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('Texture1D', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('Texture1D', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('Texture1D', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('Texture1D', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('Texture1D', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('Texture1D', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('Texture1D', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('Texture1D', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('Texture1D', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('Texture1D', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('Texture1D', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('Texture1D', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('Texture1D', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('Texture1D', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('Texture1D', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('Texture1D', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('Texture1D', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('Texture1D', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('Texture1D', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('Texture1D', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('Texture1D', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('Texture1D', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'R_ATI1N_UNorm');
    export const R_ATI1N_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'R_ATI1N_SNorm');
    export const RG_ATI2N_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RG_ATI2N_UNorm');
    export const RG_ATI2N_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'RG_ATI2N_SNorm');
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken('Texture1D', 'TextureFormat', 'RGB_BP_UNSIGNED_FLOAT');
    export const RGB_BP_SIGNED_FLOAT = createEnumToken('Texture1D', 'TextureFormat', 'RGB_BP_SIGNED_FLOAT');
    export const RGB_BP_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RGB_BP_UNorm');
    export const R11_EAC_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'R11_EAC_UNorm');
    export const R11_EAC_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'R11_EAC_SNorm');
    export const RG11_EAC_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'RG11_EAC_UNorm');
    export const RG11_EAC_SNorm = createEnumToken('Texture1D', 'TextureFormat', 'RG11_EAC_SNorm');
    export const RGB8_ETC2 = createEnumToken('Texture1D', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('Texture1D', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken('Texture1D', 'TextureFormat', 'RGB8_PunchThrough_Alpha1_ETC2');
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken('Texture1D', 'TextureFormat', 'SRGB8_PunchThrough_Alpha1_ETC2');
    export const RGBA8_ETC2_EAC = createEnumToken('Texture1D', 'TextureFormat', 'RGBA8_ETC2_EAC');
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken('Texture1D', 'TextureFormat', 'SRGB8_Alpha8_ETC2_EAC');
    export const RGB8_ETC1 = createEnumToken('Texture1D', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('Texture1D', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken('Texture1D', 'TextureFormat', 'SRGB8_Alpha8');
    export const SRGB_DXT1 = createEnumToken('Texture1D', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken('Texture1D', 'TextureFormat', 'SRGB_Alpha_DXT1');
    export const SRGB_Alpha_DXT3 = createEnumToken('Texture1D', 'TextureFormat', 'SRGB_Alpha_DXT3');
    export const SRGB_Alpha_DXT5 = createEnumToken('Texture1D', 'TextureFormat', 'SRGB_Alpha_DXT5');
    export const SRGB_BP_UNorm = createEnumToken('Texture1D', 'TextureFormat', 'SRGB_BP_UNorm');
    export const DepthFormat = createEnumToken('Texture1D', 'TextureFormat', 'DepthFormat');
    export const AlphaFormat = createEnumToken('Texture1D', 'TextureFormat', 'AlphaFormat');
    export const RGBFormat = createEnumToken('Texture1D', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('Texture1D', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken('Texture1D', 'TextureFormat', 'LuminanceFormat');
    export const LuminanceAlphaFormat = createEnumToken('Texture1D', 'TextureFormat', 'LuminanceAlphaFormat');
  }
}
