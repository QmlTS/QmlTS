// AUTO-GENERATED — DO NOT EDIT
// Type: Texture2DArray
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface Texture2DArrayBuilder {
  id(id: string): Texture2DArrayBuilder;
  child(obj: QmlObjectBuilder): Texture2DArrayBuilder;

  comparisonFunction(value: QmlEnumToken): Texture2DArrayBuilder;
  comparisonFunctionBind(expr: string): Texture2DArrayBuilder;
  comparisonMode(value: QmlEnumToken): Texture2DArrayBuilder;
  comparisonModeBind(expr: string): Texture2DArrayBuilder;
  depth(value: number): Texture2DArrayBuilder;
  depthBind(expr: string): Texture2DArrayBuilder;
  enabled(value: boolean): Texture2DArrayBuilder;
  enabledBind(expr: string): Texture2DArrayBuilder;
  format(value: QmlEnumToken): Texture2DArrayBuilder;
  formatBind(expr: string): Texture2DArrayBuilder;
  generateMipMaps(value: boolean): Texture2DArrayBuilder;
  generateMipMapsBind(expr: string): Texture2DArrayBuilder;
  height(value: number): Texture2DArrayBuilder;
  heightBind(expr: string): Texture2DArrayBuilder;
  layers(value: number): Texture2DArrayBuilder;
  layersBind(expr: string): Texture2DArrayBuilder;
  magnificationFilter(value: QmlEnumToken): Texture2DArrayBuilder;
  magnificationFilterBind(expr: string): Texture2DArrayBuilder;
  maximumAnisotropy(value: number): Texture2DArrayBuilder;
  maximumAnisotropyBind(expr: string): Texture2DArrayBuilder;
  minificationFilter(value: QmlEnumToken): Texture2DArrayBuilder;
  minificationFilterBind(expr: string): Texture2DArrayBuilder;
  mipLevels(value: number): Texture2DArrayBuilder;
  mipLevelsBind(expr: string): Texture2DArrayBuilder;
  objectName(value: string): Texture2DArrayBuilder;
  objectNameBind(expr: string): Texture2DArrayBuilder;
  parent(value: QmlValue): Texture2DArrayBuilder;
  parentBind(expr: string): Texture2DArrayBuilder;
  samples(value: number): Texture2DArrayBuilder;
  samplesBind(expr: string): Texture2DArrayBuilder;
  width(value: number): Texture2DArrayBuilder;
  widthBind(expr: string): Texture2DArrayBuilder;
  onComparisonFunctionChanged(body: string): Texture2DArrayBuilder;
  onComparisonModeChanged(body: string): Texture2DArrayBuilder;
  onDepthChanged(body: string): Texture2DArrayBuilder;
  onEnabledChanged(body: string): Texture2DArrayBuilder;
  onFormatChanged(body: string): Texture2DArrayBuilder;
  onGenerateMipMapsChanged(body: string): Texture2DArrayBuilder;
  onHandleChanged(body: string): Texture2DArrayBuilder;
  onHandleTypeChanged(body: string): Texture2DArrayBuilder;
  onHeightChanged(body: string): Texture2DArrayBuilder;
  onLayersChanged(body: string): Texture2DArrayBuilder;
  onMagnificationFilterChanged(body: string): Texture2DArrayBuilder;
  onMaximumAnisotropyChanged(body: string): Texture2DArrayBuilder;
  onMinificationFilterChanged(body: string): Texture2DArrayBuilder;
  onMipLevelsChanged(body: string): Texture2DArrayBuilder;
  onNodeDestroyed(body: string): Texture2DArrayBuilder;
  onObjectNameChanged(body: string): Texture2DArrayBuilder;
  onParentChanged(body: string): Texture2DArrayBuilder;
  onSamplesChanged(body: string): Texture2DArrayBuilder;
  onStatusChanged(body: string): Texture2DArrayBuilder;
  onWidthChanged(body: string): Texture2DArrayBuilder;
}

const TEXTURE2DARRAY_META: TypeMetadata = {
  typeName: 'Texture2DArray',
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

export function Texture2DArray(): Texture2DArrayBuilder {
  return createFluentBuilder(
    'Texture2DArray',
    TEXTURE2DARRAY_META,
  ) as unknown as Texture2DArrayBuilder;
}

export namespace Texture2DArray {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'Texture2DArray',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'Texture2DArray',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'Texture2DArray',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'Texture2DArray',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'Texture2DArray',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'Texture2DArray',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'Texture2DArray',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'Texture2DArray',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'Texture2DArray',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken('Texture2DArray', 'ComparisonMode', 'CompareNone');
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'Texture2DArray',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'Texture2DArray',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'Texture2DArray',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'Texture2DArray',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'Texture2DArray',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'Texture2DArray',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('Texture2DArray', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('Texture2DArray', 'Filter', 'Nearest');
    export const Linear = createEnumToken('Texture2DArray', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'Texture2DArray',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'Texture2DArray',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'Texture2DArray',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'Texture2DArray',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('Texture2DArray', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'Texture2DArray',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken('Texture2DArray', 'HandleType', 'RHITextureId');
  }
  export namespace Status {
    export const None = createEnumToken('Texture2DArray', 'Status', 'None');
    export const Loading = createEnumToken('Texture2DArray', 'Status', 'Loading');
    export const Ready = createEnumToken('Texture2DArray', 'Status', 'Ready');
    export const Error = createEnumToken('Texture2DArray', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken('Texture2DArray', 'Target', 'TargetAutomatic');
    export const Target1D = createEnumToken('Texture2DArray', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('Texture2DArray', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('Texture2DArray', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('Texture2DArray', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('Texture2DArray', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('Texture2DArray', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken(
      'Texture2DArray',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'Texture2DArray',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'Texture2DArray',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken('Texture2DArray', 'Target', 'TargetRectangle');
    export const TargetBuffer = createEnumToken('Texture2DArray', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('Texture2DArray', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('Texture2DArray', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB16_UNorm');
    export const RGBA16_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA16_UNorm');
    export const R8_SNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB16_SNorm');
    export const RGBA16_SNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA16_SNorm');
    export const R8U = createEnumToken('Texture2DArray', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('Texture2DArray', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('Texture2DArray', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('Texture2DArray', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('Texture2DArray', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('Texture2DArray', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('Texture2DArray', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('Texture2DArray', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('Texture2DArray', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('Texture2DArray', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('Texture2DArray', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('Texture2DArray', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('Texture2DArray', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('Texture2DArray', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('Texture2DArray', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('Texture2DArray', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('Texture2DArray', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('Texture2DArray', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('Texture2DArray', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('Texture2DArray', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('Texture2DArray', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('Texture2DArray', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('Texture2DArray', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('Texture2DArray', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('Texture2DArray', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'R_ATI1N_UNorm',
    );
    export const R_ATI1N_SNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'R_ATI1N_SNorm',
    );
    export const RG_ATI2N_UNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB_BP_UNorm');
    export const R11_EAC_UNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'R11_EAC_UNorm',
    );
    export const R11_EAC_SNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'R11_EAC_SNorm',
    );
    export const RG11_EAC_UNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('Texture2DArray', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken('Texture2DArray', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('Texture2DArray', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken('Texture2DArray', 'TextureFormat', 'SRGB8_Alpha8');
    export const SRGB_DXT1 = createEnumToken('Texture2DArray', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'SRGB_BP_UNorm',
    );
    export const DepthFormat = createEnumToken('Texture2DArray', 'TextureFormat', 'DepthFormat');
    export const AlphaFormat = createEnumToken('Texture2DArray', 'TextureFormat', 'AlphaFormat');
    export const RGBFormat = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('Texture2DArray', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'Texture2DArray',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
