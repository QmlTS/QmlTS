// AUTO-GENERATED — DO NOT EDIT
// Type: Texture2DMultisample
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface Texture2DMultisampleBuilder {
  id(id: string): Texture2DMultisampleBuilder;
  child(obj: QmlObjectBuilder): Texture2DMultisampleBuilder;

  comparisonFunction(value: QmlEnumToken): Texture2DMultisampleBuilder;
  comparisonFunctionBind(expr: string): Texture2DMultisampleBuilder;
  comparisonMode(value: QmlEnumToken): Texture2DMultisampleBuilder;
  comparisonModeBind(expr: string): Texture2DMultisampleBuilder;
  depth(value: number): Texture2DMultisampleBuilder;
  depthBind(expr: string): Texture2DMultisampleBuilder;
  enabled(value: boolean): Texture2DMultisampleBuilder;
  enabledBind(expr: string): Texture2DMultisampleBuilder;
  format(value: QmlEnumToken): Texture2DMultisampleBuilder;
  formatBind(expr: string): Texture2DMultisampleBuilder;
  generateMipMaps(value: boolean): Texture2DMultisampleBuilder;
  generateMipMapsBind(expr: string): Texture2DMultisampleBuilder;
  height(value: number): Texture2DMultisampleBuilder;
  heightBind(expr: string): Texture2DMultisampleBuilder;
  layers(value: number): Texture2DMultisampleBuilder;
  layersBind(expr: string): Texture2DMultisampleBuilder;
  magnificationFilter(value: QmlEnumToken): Texture2DMultisampleBuilder;
  magnificationFilterBind(expr: string): Texture2DMultisampleBuilder;
  maximumAnisotropy(value: number): Texture2DMultisampleBuilder;
  maximumAnisotropyBind(expr: string): Texture2DMultisampleBuilder;
  minificationFilter(value: QmlEnumToken): Texture2DMultisampleBuilder;
  minificationFilterBind(expr: string): Texture2DMultisampleBuilder;
  mipLevels(value: number): Texture2DMultisampleBuilder;
  mipLevelsBind(expr: string): Texture2DMultisampleBuilder;
  objectName(value: string): Texture2DMultisampleBuilder;
  objectNameBind(expr: string): Texture2DMultisampleBuilder;
  parent(value: QmlValue): Texture2DMultisampleBuilder;
  parentBind(expr: string): Texture2DMultisampleBuilder;
  samples(value: number): Texture2DMultisampleBuilder;
  samplesBind(expr: string): Texture2DMultisampleBuilder;
  width(value: number): Texture2DMultisampleBuilder;
  widthBind(expr: string): Texture2DMultisampleBuilder;
  onComparisonFunctionChanged(body: string): Texture2DMultisampleBuilder;
  onComparisonModeChanged(body: string): Texture2DMultisampleBuilder;
  onDepthChanged(body: string): Texture2DMultisampleBuilder;
  onEnabledChanged(body: string): Texture2DMultisampleBuilder;
  onFormatChanged(body: string): Texture2DMultisampleBuilder;
  onGenerateMipMapsChanged(body: string): Texture2DMultisampleBuilder;
  onHandleChanged(body: string): Texture2DMultisampleBuilder;
  onHandleTypeChanged(body: string): Texture2DMultisampleBuilder;
  onHeightChanged(body: string): Texture2DMultisampleBuilder;
  onLayersChanged(body: string): Texture2DMultisampleBuilder;
  onMagnificationFilterChanged(body: string): Texture2DMultisampleBuilder;
  onMaximumAnisotropyChanged(body: string): Texture2DMultisampleBuilder;
  onMinificationFilterChanged(body: string): Texture2DMultisampleBuilder;
  onMipLevelsChanged(body: string): Texture2DMultisampleBuilder;
  onNodeDestroyed(body: string): Texture2DMultisampleBuilder;
  onObjectNameChanged(body: string): Texture2DMultisampleBuilder;
  onParentChanged(body: string): Texture2DMultisampleBuilder;
  onSamplesChanged(body: string): Texture2DMultisampleBuilder;
  onStatusChanged(body: string): Texture2DMultisampleBuilder;
  onWidthChanged(body: string): Texture2DMultisampleBuilder;
}

const TEXTURE2DMULTISAMPLE_META: TypeMetadata = {
  typeName: 'Texture2DMultisample',
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
  grouped: [],
  attached: [],
};

export function Texture2DMultisample(): Texture2DMultisampleBuilder {
  return createFluentBuilder(
    'Texture2DMultisample',
    TEXTURE2DMULTISAMPLE_META,
  ) as unknown as Texture2DMultisampleBuilder;
}

export namespace Texture2DMultisample {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'Texture2DMultisample',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'Texture2DMultisample',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'Texture2DMultisample',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'Texture2DMultisample',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'Texture2DMultisample',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'Texture2DMultisample',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'Texture2DMultisample',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'Texture2DMultisample',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'Texture2DMultisample',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken(
      'Texture2DMultisample',
      'ComparisonMode',
      'CompareNone',
    );
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'Texture2DMultisample',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'Texture2DMultisample',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'Texture2DMultisample',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'Texture2DMultisample',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'Texture2DMultisample',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'Texture2DMultisample',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('Texture2DMultisample', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('Texture2DMultisample', 'Filter', 'Nearest');
    export const Linear = createEnumToken('Texture2DMultisample', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'Texture2DMultisample',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'Texture2DMultisample',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'Texture2DMultisample',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'Texture2DMultisample',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('Texture2DMultisample', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'Texture2DMultisample',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken(
      'Texture2DMultisample',
      'HandleType',
      'RHITextureId',
    );
  }
  export namespace Status {
    export const None = createEnumToken('Texture2DMultisample', 'Status', 'None');
    export const Loading = createEnumToken('Texture2DMultisample', 'Status', 'Loading');
    export const Ready = createEnumToken('Texture2DMultisample', 'Status', 'Ready');
    export const Error = createEnumToken('Texture2DMultisample', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken(
      'Texture2DMultisample',
      'Target',
      'TargetAutomatic',
    );
    export const Target1D = createEnumToken('Texture2DMultisample', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('Texture2DMultisample', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('Texture2DMultisample', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('Texture2DMultisample', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('Texture2DMultisample', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('Texture2DMultisample', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken(
      'Texture2DMultisample',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'Texture2DMultisample',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'Texture2DMultisample',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken(
      'Texture2DMultisample',
      'Target',
      'TargetRectangle',
    );
    export const TargetBuffer = createEnumToken('Texture2DMultisample', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('Texture2DMultisample', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('Texture2DMultisample', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGB8_UNorm',
    );
    export const RGBA8_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGBA8_UNorm',
    );
    export const R16_UNorm = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RG16_UNorm',
    );
    export const RGB16_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGB16_UNorm',
    );
    export const RGBA16_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGBA16_UNorm',
    );
    export const R8_SNorm = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGB8_SNorm',
    );
    export const RGBA8_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGBA8_SNorm',
    );
    export const R16_SNorm = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RG16_SNorm',
    );
    export const RGB16_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGB16_SNorm',
    );
    export const RGBA16_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGBA16_SNorm',
    );
    export const R8U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('Texture2DMultisample', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'R_ATI1N_UNorm',
    );
    export const R_ATI1N_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'R_ATI1N_SNorm',
    );
    export const RG_ATI2N_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGB_BP_UNorm',
    );
    export const R11_EAC_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'R11_EAC_UNorm',
    );
    export const R11_EAC_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'R11_EAC_SNorm',
    );
    export const RG11_EAC_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'SRGB8_ETC2',
    );
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'SRGB8_Alpha8',
    );
    export const SRGB_DXT1 = createEnumToken('Texture2DMultisample', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'SRGB_BP_UNorm',
    );
    export const DepthFormat = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'DepthFormat',
    );
    export const AlphaFormat = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'AlphaFormat',
    );
    export const RGBFormat = createEnumToken('Texture2DMultisample', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'RGBAFormat',
    );
    export const LuminanceFormat = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'Texture2DMultisample',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
