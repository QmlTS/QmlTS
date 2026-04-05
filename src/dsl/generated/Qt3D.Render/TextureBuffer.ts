// AUTO-GENERATED — DO NOT EDIT
// Type: TextureBuffer
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TextureBufferBuilder {
  id(id: string): TextureBufferBuilder;
  child(obj: QmlObjectBuilder): TextureBufferBuilder;

  comparisonFunction(value: QmlEnumToken): TextureBufferBuilder;
  comparisonFunctionBind(expr: string): TextureBufferBuilder;
  comparisonMode(value: QmlEnumToken): TextureBufferBuilder;
  comparisonModeBind(expr: string): TextureBufferBuilder;
  depth(value: number): TextureBufferBuilder;
  depthBind(expr: string): TextureBufferBuilder;
  enabled(value: boolean): TextureBufferBuilder;
  enabledBind(expr: string): TextureBufferBuilder;
  format(value: QmlEnumToken): TextureBufferBuilder;
  formatBind(expr: string): TextureBufferBuilder;
  generateMipMaps(value: boolean): TextureBufferBuilder;
  generateMipMapsBind(expr: string): TextureBufferBuilder;
  height(value: number): TextureBufferBuilder;
  heightBind(expr: string): TextureBufferBuilder;
  layers(value: number): TextureBufferBuilder;
  layersBind(expr: string): TextureBufferBuilder;
  magnificationFilter(value: QmlEnumToken): TextureBufferBuilder;
  magnificationFilterBind(expr: string): TextureBufferBuilder;
  maximumAnisotropy(value: number): TextureBufferBuilder;
  maximumAnisotropyBind(expr: string): TextureBufferBuilder;
  minificationFilter(value: QmlEnumToken): TextureBufferBuilder;
  minificationFilterBind(expr: string): TextureBufferBuilder;
  mipLevels(value: number): TextureBufferBuilder;
  mipLevelsBind(expr: string): TextureBufferBuilder;
  objectName(value: string): TextureBufferBuilder;
  objectNameBind(expr: string): TextureBufferBuilder;
  parent(value: QmlValue): TextureBufferBuilder;
  parentBind(expr: string): TextureBufferBuilder;
  samples(value: number): TextureBufferBuilder;
  samplesBind(expr: string): TextureBufferBuilder;
  width(value: number): TextureBufferBuilder;
  widthBind(expr: string): TextureBufferBuilder;
  onComparisonFunctionChanged(body: string): TextureBufferBuilder;
  onComparisonModeChanged(body: string): TextureBufferBuilder;
  onDepthChanged(body: string): TextureBufferBuilder;
  onEnabledChanged(body: string): TextureBufferBuilder;
  onFormatChanged(body: string): TextureBufferBuilder;
  onGenerateMipMapsChanged(body: string): TextureBufferBuilder;
  onHandleChanged(body: string): TextureBufferBuilder;
  onHandleTypeChanged(body: string): TextureBufferBuilder;
  onHeightChanged(body: string): TextureBufferBuilder;
  onLayersChanged(body: string): TextureBufferBuilder;
  onMagnificationFilterChanged(body: string): TextureBufferBuilder;
  onMaximumAnisotropyChanged(body: string): TextureBufferBuilder;
  onMinificationFilterChanged(body: string): TextureBufferBuilder;
  onMipLevelsChanged(body: string): TextureBufferBuilder;
  onNodeDestroyed(body: string): TextureBufferBuilder;
  onObjectNameChanged(body: string): TextureBufferBuilder;
  onParentChanged(body: string): TextureBufferBuilder;
  onSamplesChanged(body: string): TextureBufferBuilder;
  onStatusChanged(body: string): TextureBufferBuilder;
  onWidthChanged(body: string): TextureBufferBuilder;
}

const TEXTUREBUFFER_META: TypeMetadata = {
  typeName: 'TextureBuffer',
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

export function TextureBuffer(): TextureBufferBuilder {
  return createFluentBuilder(
    'TextureBuffer',
    TEXTUREBUFFER_META,
  ) as unknown as TextureBufferBuilder;
}

export namespace TextureBuffer {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'TextureBuffer',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'TextureBuffer',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'TextureBuffer',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'TextureBuffer',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'TextureBuffer',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'TextureBuffer',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'TextureBuffer',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'TextureBuffer',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'TextureBuffer',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken('TextureBuffer', 'ComparisonMode', 'CompareNone');
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'TextureBuffer',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'TextureBuffer',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'TextureBuffer',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'TextureBuffer',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'TextureBuffer',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'TextureBuffer',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('TextureBuffer', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('TextureBuffer', 'Filter', 'Nearest');
    export const Linear = createEnumToken('TextureBuffer', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'TextureBuffer',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'TextureBuffer',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'TextureBuffer',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'TextureBuffer',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('TextureBuffer', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'TextureBuffer',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken('TextureBuffer', 'HandleType', 'RHITextureId');
  }
  export namespace Status {
    export const None = createEnumToken('TextureBuffer', 'Status', 'None');
    export const Loading = createEnumToken('TextureBuffer', 'Status', 'Loading');
    export const Ready = createEnumToken('TextureBuffer', 'Status', 'Ready');
    export const Error = createEnumToken('TextureBuffer', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken('TextureBuffer', 'Target', 'TargetAutomatic');
    export const Target1D = createEnumToken('TextureBuffer', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('TextureBuffer', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('TextureBuffer', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('TextureBuffer', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('TextureBuffer', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('TextureBuffer', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken(
      'TextureBuffer',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'TextureBuffer',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'TextureBuffer',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken('TextureBuffer', 'Target', 'TargetRectangle');
    export const TargetBuffer = createEnumToken('TextureBuffer', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('TextureBuffer', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('TextureBuffer', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB16_UNorm');
    export const RGBA16_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA16_UNorm');
    export const R8_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB16_SNorm');
    export const RGBA16_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA16_SNorm');
    export const R8U = createEnumToken('TextureBuffer', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('TextureBuffer', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('TextureBuffer', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('TextureBuffer', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('TextureBuffer', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('TextureBuffer', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('TextureBuffer', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('TextureBuffer', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('TextureBuffer', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('TextureBuffer', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('TextureBuffer', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('TextureBuffer', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('TextureBuffer', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('TextureBuffer', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('TextureBuffer', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('TextureBuffer', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('TextureBuffer', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('TextureBuffer', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('TextureBuffer', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('TextureBuffer', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('TextureBuffer', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('TextureBuffer', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('TextureBuffer', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('TextureBuffer', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('TextureBuffer', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'R_ATI1N_UNorm');
    export const R_ATI1N_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'R_ATI1N_SNorm');
    export const RG_ATI2N_UNorm = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB_BP_UNorm');
    export const R11_EAC_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'R11_EAC_UNorm');
    export const R11_EAC_SNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'R11_EAC_SNorm');
    export const RG11_EAC_UNorm = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('TextureBuffer', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken('TextureBuffer', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('TextureBuffer', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken('TextureBuffer', 'TextureFormat', 'SRGB8_Alpha8');
    export const SRGB_DXT1 = createEnumToken('TextureBuffer', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken('TextureBuffer', 'TextureFormat', 'SRGB_BP_UNorm');
    export const DepthFormat = createEnumToken('TextureBuffer', 'TextureFormat', 'DepthFormat');
    export const AlphaFormat = createEnumToken('TextureBuffer', 'TextureFormat', 'AlphaFormat');
    export const RGBFormat = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('TextureBuffer', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'TextureBuffer',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
