// AUTO-GENERATED — DO NOT EDIT
// Type: SharedGLTexture
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SharedGLTextureBuilder {
  id(id: string): SharedGLTextureBuilder;
  child(obj: QmlObjectBuilder): SharedGLTextureBuilder;

  comparisonFunction(value: QmlEnumToken): SharedGLTextureBuilder;
  comparisonFunctionBind(expr: string): SharedGLTextureBuilder;
  comparisonMode(value: QmlEnumToken): SharedGLTextureBuilder;
  comparisonModeBind(expr: string): SharedGLTextureBuilder;
  depth(value: number): SharedGLTextureBuilder;
  depthBind(expr: string): SharedGLTextureBuilder;
  enabled(value: boolean): SharedGLTextureBuilder;
  enabledBind(expr: string): SharedGLTextureBuilder;
  format(value: QmlEnumToken): SharedGLTextureBuilder;
  formatBind(expr: string): SharedGLTextureBuilder;
  generateMipMaps(value: boolean): SharedGLTextureBuilder;
  generateMipMapsBind(expr: string): SharedGLTextureBuilder;
  height(value: number): SharedGLTextureBuilder;
  heightBind(expr: string): SharedGLTextureBuilder;
  layers(value: number): SharedGLTextureBuilder;
  layersBind(expr: string): SharedGLTextureBuilder;
  magnificationFilter(value: QmlEnumToken): SharedGLTextureBuilder;
  magnificationFilterBind(expr: string): SharedGLTextureBuilder;
  maximumAnisotropy(value: number): SharedGLTextureBuilder;
  maximumAnisotropyBind(expr: string): SharedGLTextureBuilder;
  minificationFilter(value: QmlEnumToken): SharedGLTextureBuilder;
  minificationFilterBind(expr: string): SharedGLTextureBuilder;
  mipLevels(value: number): SharedGLTextureBuilder;
  mipLevelsBind(expr: string): SharedGLTextureBuilder;
  objectName(value: string): SharedGLTextureBuilder;
  objectNameBind(expr: string): SharedGLTextureBuilder;
  parent(value: QmlValue): SharedGLTextureBuilder;
  parentBind(expr: string): SharedGLTextureBuilder;
  samples(value: number): SharedGLTextureBuilder;
  samplesBind(expr: string): SharedGLTextureBuilder;
  textureId(value: number): SharedGLTextureBuilder;
  textureIdBind(expr: string): SharedGLTextureBuilder;
  width(value: number): SharedGLTextureBuilder;
  widthBind(expr: string): SharedGLTextureBuilder;
  onComparisonFunctionChanged(body: string): SharedGLTextureBuilder;
  onComparisonModeChanged(body: string): SharedGLTextureBuilder;
  onDepthChanged(body: string): SharedGLTextureBuilder;
  onEnabledChanged(body: string): SharedGLTextureBuilder;
  onFormatChanged(body: string): SharedGLTextureBuilder;
  onGenerateMipMapsChanged(body: string): SharedGLTextureBuilder;
  onHandleChanged(body: string): SharedGLTextureBuilder;
  onHandleTypeChanged(body: string): SharedGLTextureBuilder;
  onHeightChanged(body: string): SharedGLTextureBuilder;
  onLayersChanged(body: string): SharedGLTextureBuilder;
  onMagnificationFilterChanged(body: string): SharedGLTextureBuilder;
  onMaximumAnisotropyChanged(body: string): SharedGLTextureBuilder;
  onMinificationFilterChanged(body: string): SharedGLTextureBuilder;
  onMipLevelsChanged(body: string): SharedGLTextureBuilder;
  onNodeDestroyed(body: string): SharedGLTextureBuilder;
  onObjectNameChanged(body: string): SharedGLTextureBuilder;
  onParentChanged(body: string): SharedGLTextureBuilder;
  onSamplesChanged(body: string): SharedGLTextureBuilder;
  onStatusChanged(body: string): SharedGLTextureBuilder;
  onTextureIdChanged(body: string): SharedGLTextureBuilder;
  onWidthChanged(body: string): SharedGLTextureBuilder;
}

const SHAREDGLTEXTURE_META: TypeMetadata = {
  typeName: 'SharedGLTexture',
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
    { name: 'textureId', hasValue: true, hasBinding: true },
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
    { handlerName: 'onTextureIdChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SharedGLTexture(): SharedGLTextureBuilder {
  return createFluentBuilder(
    'SharedGLTexture',
    SHAREDGLTEXTURE_META,
  ) as unknown as SharedGLTextureBuilder;
}

export namespace SharedGLTexture {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'SharedGLTexture',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'SharedGLTexture',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'SharedGLTexture',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'SharedGLTexture',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'SharedGLTexture',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'SharedGLTexture',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'SharedGLTexture',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'SharedGLTexture',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'SharedGLTexture',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken('SharedGLTexture', 'ComparisonMode', 'CompareNone');
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'SharedGLTexture',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'SharedGLTexture',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'SharedGLTexture',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'SharedGLTexture',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'SharedGLTexture',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'SharedGLTexture',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('SharedGLTexture', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('SharedGLTexture', 'Filter', 'Nearest');
    export const Linear = createEnumToken('SharedGLTexture', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'SharedGLTexture',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'SharedGLTexture',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'SharedGLTexture',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'SharedGLTexture',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('SharedGLTexture', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'SharedGLTexture',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken('SharedGLTexture', 'HandleType', 'RHITextureId');
  }
  export namespace Status {
    export const None = createEnumToken('SharedGLTexture', 'Status', 'None');
    export const Loading = createEnumToken('SharedGLTexture', 'Status', 'Loading');
    export const Ready = createEnumToken('SharedGLTexture', 'Status', 'Ready');
    export const Error = createEnumToken('SharedGLTexture', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken('SharedGLTexture', 'Target', 'TargetAutomatic');
    export const Target1D = createEnumToken('SharedGLTexture', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('SharedGLTexture', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('SharedGLTexture', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('SharedGLTexture', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('SharedGLTexture', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('SharedGLTexture', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken(
      'SharedGLTexture',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'SharedGLTexture',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'SharedGLTexture',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken('SharedGLTexture', 'Target', 'TargetRectangle');
    export const TargetBuffer = createEnumToken('SharedGLTexture', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('SharedGLTexture', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('SharedGLTexture', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB16_UNorm');
    export const RGBA16_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA16_UNorm');
    export const R8_SNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB16_SNorm');
    export const RGBA16_SNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA16_SNorm');
    export const R8U = createEnumToken('SharedGLTexture', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('SharedGLTexture', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('SharedGLTexture', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('SharedGLTexture', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('SharedGLTexture', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('SharedGLTexture', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('SharedGLTexture', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('SharedGLTexture', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('SharedGLTexture', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('SharedGLTexture', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('SharedGLTexture', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('SharedGLTexture', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('SharedGLTexture', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('SharedGLTexture', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('SharedGLTexture', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'R_ATI1N_UNorm',
    );
    export const R_ATI1N_SNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'R_ATI1N_SNorm',
    );
    export const RG_ATI2N_UNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB_BP_UNorm');
    export const R11_EAC_UNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'R11_EAC_UNorm',
    );
    export const R11_EAC_SNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'R11_EAC_SNorm',
    );
    export const RG11_EAC_UNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('SharedGLTexture', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('SharedGLTexture', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken('SharedGLTexture', 'TextureFormat', 'SRGB8_Alpha8');
    export const SRGB_DXT1 = createEnumToken('SharedGLTexture', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'SRGB_BP_UNorm',
    );
    export const DepthFormat = createEnumToken('SharedGLTexture', 'TextureFormat', 'DepthFormat');
    export const AlphaFormat = createEnumToken('SharedGLTexture', 'TextureFormat', 'AlphaFormat');
    export const RGBFormat = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('SharedGLTexture', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'SharedGLTexture',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
