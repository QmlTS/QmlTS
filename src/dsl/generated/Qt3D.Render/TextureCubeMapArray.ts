// AUTO-GENERATED — DO NOT EDIT
// Type: TextureCubeMapArray
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TextureCubeMapArrayBuilder {
  id(id: string): TextureCubeMapArrayBuilder;
  child(obj: QmlObjectBuilder): TextureCubeMapArrayBuilder;
  children(...objs: QmlObjectBuilder[]): TextureCubeMapArrayBuilder;

  comparisonFunction(value: QmlEnumToken): TextureCubeMapArrayBuilder;
  comparisonFunctionBind(expr: string): TextureCubeMapArrayBuilder;
  comparisonMode(value: QmlEnumToken): TextureCubeMapArrayBuilder;
  comparisonModeBind(expr: string): TextureCubeMapArrayBuilder;
  depth(value: number): TextureCubeMapArrayBuilder;
  depthBind(expr: string): TextureCubeMapArrayBuilder;
  enabled(value: boolean): TextureCubeMapArrayBuilder;
  enabledBind(expr: string): TextureCubeMapArrayBuilder;
  format(value: QmlEnumToken): TextureCubeMapArrayBuilder;
  formatBind(expr: string): TextureCubeMapArrayBuilder;
  generateMipMaps(value: boolean): TextureCubeMapArrayBuilder;
  generateMipMapsBind(expr: string): TextureCubeMapArrayBuilder;
  height(value: number): TextureCubeMapArrayBuilder;
  heightBind(expr: string): TextureCubeMapArrayBuilder;
  layers(value: number): TextureCubeMapArrayBuilder;
  layersBind(expr: string): TextureCubeMapArrayBuilder;
  magnificationFilter(value: QmlEnumToken): TextureCubeMapArrayBuilder;
  magnificationFilterBind(expr: string): TextureCubeMapArrayBuilder;
  maximumAnisotropy(value: number): TextureCubeMapArrayBuilder;
  maximumAnisotropyBind(expr: string): TextureCubeMapArrayBuilder;
  minificationFilter(value: QmlEnumToken): TextureCubeMapArrayBuilder;
  minificationFilterBind(expr: string): TextureCubeMapArrayBuilder;
  mipLevels(value: number): TextureCubeMapArrayBuilder;
  mipLevelsBind(expr: string): TextureCubeMapArrayBuilder;
  objectName(value: string): TextureCubeMapArrayBuilder;
  objectNameBind(expr: string): TextureCubeMapArrayBuilder;
  parent(value: QmlValue): TextureCubeMapArrayBuilder;
  parentBind(expr: string): TextureCubeMapArrayBuilder;
  samples(value: number): TextureCubeMapArrayBuilder;
  samplesBind(expr: string): TextureCubeMapArrayBuilder;
  width(value: number): TextureCubeMapArrayBuilder;
  widthBind(expr: string): TextureCubeMapArrayBuilder;
  onComparisonFunctionChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onComparisonModeChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onDepthChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onFormatChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onGenerateMipMapsChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onHandleChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onHandleTypeChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onMagnificationFilterChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onMaximumAnisotropyChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onMinificationFilterChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onMipLevelsChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onSamplesChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TextureCubeMapArrayBuilder;
}

const TEXTURECUBEMAPARRAY_META: TypeMetadata = {
  typeName: 'TextureCubeMapArray',
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

export function TextureCubeMapArray(): TextureCubeMapArrayBuilder {
  return createFluentBuilder(
    'TextureCubeMapArray',
    TEXTURECUBEMAPARRAY_META,
  ) as unknown as TextureCubeMapArrayBuilder;
}

export namespace TextureCubeMapArray {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken(
      'TextureCubeMapArray',
      'ComparisonMode',
      'CompareNone',
    );
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'TextureCubeMapArray',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'TextureCubeMapArray',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'TextureCubeMapArray',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'TextureCubeMapArray',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'TextureCubeMapArray',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'TextureCubeMapArray',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('TextureCubeMapArray', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('TextureCubeMapArray', 'Filter', 'Nearest');
    export const Linear = createEnumToken('TextureCubeMapArray', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'TextureCubeMapArray',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'TextureCubeMapArray',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'TextureCubeMapArray',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'TextureCubeMapArray',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('TextureCubeMapArray', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'TextureCubeMapArray',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken(
      'TextureCubeMapArray',
      'HandleType',
      'RHITextureId',
    );
  }
  export namespace Status {
    export const None = createEnumToken('TextureCubeMapArray', 'Status', 'None');
    export const Loading = createEnumToken('TextureCubeMapArray', 'Status', 'Loading');
    export const Ready = createEnumToken('TextureCubeMapArray', 'Status', 'Ready');
    export const Error = createEnumToken('TextureCubeMapArray', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken(
      'TextureCubeMapArray',
      'Target',
      'TargetAutomatic',
    );
    export const Target1D = createEnumToken('TextureCubeMapArray', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('TextureCubeMapArray', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('TextureCubeMapArray', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('TextureCubeMapArray', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('TextureCubeMapArray', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('TextureCubeMapArray', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken(
      'TextureCubeMapArray',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'TextureCubeMapArray',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'TextureCubeMapArray',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken(
      'TextureCubeMapArray',
      'Target',
      'TargetRectangle',
    );
    export const TargetBuffer = createEnumToken('TextureCubeMapArray', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGBA8_UNorm',
    );
    export const R16_UNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGB16_UNorm',
    );
    export const RGBA16_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGBA16_UNorm',
    );
    export const R8_SNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGBA8_SNorm',
    );
    export const R16_SNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGB16_SNorm',
    );
    export const RGBA16_SNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGBA16_SNorm',
    );
    export const R8U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'R_ATI1N_UNorm',
    );
    export const R_ATI1N_SNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'R_ATI1N_SNorm',
    );
    export const RG_ATI2N_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGB_BP_UNorm',
    );
    export const R11_EAC_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'R11_EAC_UNorm',
    );
    export const R11_EAC_SNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'R11_EAC_SNorm',
    );
    export const RG11_EAC_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'SRGB8_Alpha8',
    );
    export const SRGB_DXT1 = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'SRGB_BP_UNorm',
    );
    export const DepthFormat = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'DepthFormat',
    );
    export const AlphaFormat = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'AlphaFormat',
    );
    export const RGBFormat = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('TextureCubeMapArray', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'TextureCubeMapArray',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
