// AUTO-GENERATED — DO NOT EDIT
// Type: Texture1DArray
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface Texture1DArrayBuilder {
  id(id: string): Texture1DArrayBuilder;
  child(obj: QmlObjectBuilder): Texture1DArrayBuilder;

  comparisonFunction(value: QmlEnumToken): Texture1DArrayBuilder;
  comparisonFunctionBind(expr: string): Texture1DArrayBuilder;
  comparisonMode(value: QmlEnumToken): Texture1DArrayBuilder;
  comparisonModeBind(expr: string): Texture1DArrayBuilder;
  depth(value: number): Texture1DArrayBuilder;
  depthBind(expr: string): Texture1DArrayBuilder;
  enabled(value: boolean): Texture1DArrayBuilder;
  enabledBind(expr: string): Texture1DArrayBuilder;
  format(value: QmlEnumToken): Texture1DArrayBuilder;
  formatBind(expr: string): Texture1DArrayBuilder;
  generateMipMaps(value: boolean): Texture1DArrayBuilder;
  generateMipMapsBind(expr: string): Texture1DArrayBuilder;
  height(value: number): Texture1DArrayBuilder;
  heightBind(expr: string): Texture1DArrayBuilder;
  layers(value: number): Texture1DArrayBuilder;
  layersBind(expr: string): Texture1DArrayBuilder;
  magnificationFilter(value: QmlEnumToken): Texture1DArrayBuilder;
  magnificationFilterBind(expr: string): Texture1DArrayBuilder;
  maximumAnisotropy(value: number): Texture1DArrayBuilder;
  maximumAnisotropyBind(expr: string): Texture1DArrayBuilder;
  minificationFilter(value: QmlEnumToken): Texture1DArrayBuilder;
  minificationFilterBind(expr: string): Texture1DArrayBuilder;
  mipLevels(value: number): Texture1DArrayBuilder;
  mipLevelsBind(expr: string): Texture1DArrayBuilder;
  objectName(value: string): Texture1DArrayBuilder;
  objectNameBind(expr: string): Texture1DArrayBuilder;
  parent(value: QmlValue): Texture1DArrayBuilder;
  parentBind(expr: string): Texture1DArrayBuilder;
  samples(value: number): Texture1DArrayBuilder;
  samplesBind(expr: string): Texture1DArrayBuilder;
  width(value: number): Texture1DArrayBuilder;
  widthBind(expr: string): Texture1DArrayBuilder;
  onComparisonFunctionChanged(body: string): Texture1DArrayBuilder;
  onComparisonModeChanged(body: string): Texture1DArrayBuilder;
  onDepthChanged(body: string): Texture1DArrayBuilder;
  onEnabledChanged(body: string): Texture1DArrayBuilder;
  onFormatChanged(body: string): Texture1DArrayBuilder;
  onGenerateMipMapsChanged(body: string): Texture1DArrayBuilder;
  onHandleChanged(body: string): Texture1DArrayBuilder;
  onHandleTypeChanged(body: string): Texture1DArrayBuilder;
  onHeightChanged(body: string): Texture1DArrayBuilder;
  onLayersChanged(body: string): Texture1DArrayBuilder;
  onMagnificationFilterChanged(body: string): Texture1DArrayBuilder;
  onMaximumAnisotropyChanged(body: string): Texture1DArrayBuilder;
  onMinificationFilterChanged(body: string): Texture1DArrayBuilder;
  onMipLevelsChanged(body: string): Texture1DArrayBuilder;
  onNodeDestroyed(body: string): Texture1DArrayBuilder;
  onObjectNameChanged(body: string): Texture1DArrayBuilder;
  onParentChanged(body: string): Texture1DArrayBuilder;
  onSamplesChanged(body: string): Texture1DArrayBuilder;
  onStatusChanged(body: string): Texture1DArrayBuilder;
  onWidthChanged(body: string): Texture1DArrayBuilder;
}

const TEXTURE1DARRAY_META: TypeMetadata = {
  typeName: 'Texture1DArray',
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

export function Texture1DArray(): Texture1DArrayBuilder {
  return createFluentBuilder(
    'Texture1DArray',
    TEXTURE1DARRAY_META,
  ) as unknown as Texture1DArrayBuilder;
}

export namespace Texture1DArray {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'Texture1DArray',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'Texture1DArray',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'Texture1DArray',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'Texture1DArray',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'Texture1DArray',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'Texture1DArray',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'Texture1DArray',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'Texture1DArray',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'Texture1DArray',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken('Texture1DArray', 'ComparisonMode', 'CompareNone');
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'Texture1DArray',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'Texture1DArray',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'Texture1DArray',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'Texture1DArray',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'Texture1DArray',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'Texture1DArray',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('Texture1DArray', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('Texture1DArray', 'Filter', 'Nearest');
    export const Linear = createEnumToken('Texture1DArray', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'Texture1DArray',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'Texture1DArray',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'Texture1DArray',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'Texture1DArray',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('Texture1DArray', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'Texture1DArray',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken('Texture1DArray', 'HandleType', 'RHITextureId');
  }
  export namespace Status {
    export const None = createEnumToken('Texture1DArray', 'Status', 'None');
    export const Loading = createEnumToken('Texture1DArray', 'Status', 'Loading');
    export const Ready = createEnumToken('Texture1DArray', 'Status', 'Ready');
    export const Error = createEnumToken('Texture1DArray', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken('Texture1DArray', 'Target', 'TargetAutomatic');
    export const Target1D = createEnumToken('Texture1DArray', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('Texture1DArray', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('Texture1DArray', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('Texture1DArray', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('Texture1DArray', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('Texture1DArray', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken(
      'Texture1DArray',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'Texture1DArray',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'Texture1DArray',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken('Texture1DArray', 'Target', 'TargetRectangle');
    export const TargetBuffer = createEnumToken('Texture1DArray', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('Texture1DArray', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('Texture1DArray', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB16_UNorm');
    export const RGBA16_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA16_UNorm');
    export const R8_SNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB16_SNorm');
    export const RGBA16_SNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA16_SNorm');
    export const R8U = createEnumToken('Texture1DArray', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('Texture1DArray', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('Texture1DArray', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('Texture1DArray', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('Texture1DArray', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('Texture1DArray', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('Texture1DArray', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('Texture1DArray', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('Texture1DArray', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('Texture1DArray', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('Texture1DArray', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('Texture1DArray', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('Texture1DArray', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('Texture1DArray', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('Texture1DArray', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('Texture1DArray', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('Texture1DArray', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('Texture1DArray', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('Texture1DArray', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('Texture1DArray', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('Texture1DArray', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('Texture1DArray', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('Texture1DArray', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('Texture1DArray', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('Texture1DArray', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'R_ATI1N_UNorm',
    );
    export const R_ATI1N_SNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'R_ATI1N_SNorm',
    );
    export const RG_ATI2N_UNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB_BP_UNorm');
    export const R11_EAC_UNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'R11_EAC_UNorm',
    );
    export const R11_EAC_SNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'R11_EAC_SNorm',
    );
    export const RG11_EAC_UNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('Texture1DArray', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken('Texture1DArray', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('Texture1DArray', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken('Texture1DArray', 'TextureFormat', 'SRGB8_Alpha8');
    export const SRGB_DXT1 = createEnumToken('Texture1DArray', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'SRGB_BP_UNorm',
    );
    export const DepthFormat = createEnumToken('Texture1DArray', 'TextureFormat', 'DepthFormat');
    export const AlphaFormat = createEnumToken('Texture1DArray', 'TextureFormat', 'AlphaFormat');
    export const RGBFormat = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('Texture1DArray', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'Texture1DArray',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
