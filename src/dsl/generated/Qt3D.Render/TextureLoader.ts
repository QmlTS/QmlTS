// AUTO-GENERATED — DO NOT EDIT
// Type: TextureLoader
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TextureLoaderBuilder {
  id(id: string): TextureLoaderBuilder;
  child(obj: QmlObjectBuilder): TextureLoaderBuilder;
  children(...objs: QmlObjectBuilder[]): TextureLoaderBuilder;

  comparisonFunction(value: QmlEnumToken): TextureLoaderBuilder;
  comparisonFunctionBind(expr: string): TextureLoaderBuilder;
  comparisonMode(value: QmlEnumToken): TextureLoaderBuilder;
  comparisonModeBind(expr: string): TextureLoaderBuilder;
  depth(value: number): TextureLoaderBuilder;
  depthBind(expr: string): TextureLoaderBuilder;
  enabled(value: boolean): TextureLoaderBuilder;
  enabledBind(expr: string): TextureLoaderBuilder;
  format(value: QmlEnumToken): TextureLoaderBuilder;
  formatBind(expr: string): TextureLoaderBuilder;
  generateMipMaps(value: boolean): TextureLoaderBuilder;
  generateMipMapsBind(expr: string): TextureLoaderBuilder;
  height(value: number): TextureLoaderBuilder;
  heightBind(expr: string): TextureLoaderBuilder;
  layers(value: number): TextureLoaderBuilder;
  layersBind(expr: string): TextureLoaderBuilder;
  magnificationFilter(value: QmlEnumToken): TextureLoaderBuilder;
  magnificationFilterBind(expr: string): TextureLoaderBuilder;
  maximumAnisotropy(value: number): TextureLoaderBuilder;
  maximumAnisotropyBind(expr: string): TextureLoaderBuilder;
  minificationFilter(value: QmlEnumToken): TextureLoaderBuilder;
  minificationFilterBind(expr: string): TextureLoaderBuilder;
  mipLevels(value: number): TextureLoaderBuilder;
  mipLevelsBind(expr: string): TextureLoaderBuilder;
  mirrored(value: boolean): TextureLoaderBuilder;
  mirroredBind(expr: string): TextureLoaderBuilder;
  objectName(value: string): TextureLoaderBuilder;
  objectNameBind(expr: string): TextureLoaderBuilder;
  parent(value: QmlValue): TextureLoaderBuilder;
  parentBind(expr: string): TextureLoaderBuilder;
  samples(value: number): TextureLoaderBuilder;
  samplesBind(expr: string): TextureLoaderBuilder;
  source(value: QmlUrl): TextureLoaderBuilder;
  sourceBind(expr: string): TextureLoaderBuilder;
  width(value: number): TextureLoaderBuilder;
  widthBind(expr: string): TextureLoaderBuilder;
  onComparisonFunctionChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onComparisonModeChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onDepthChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onFormatChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onGenerateMipMapsChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onHandleChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onHandleTypeChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onMagnificationFilterChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onMaximumAnisotropyChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onMinificationFilterChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onMipLevelsChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onSamplesChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TextureLoaderBuilder;
}

const TEXTURELOADER_META: TypeMetadata = {
  typeName: 'TextureLoader',
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
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'samples', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMirroredChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSamplesChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function TextureLoader(): TextureLoaderBuilder {
  return createFluentBuilder(
    'TextureLoader',
    TEXTURELOADER_META,
  ) as unknown as TextureLoaderBuilder;
}

export namespace TextureLoader {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'TextureLoader',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'TextureLoader',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'TextureLoader',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'TextureLoader',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'TextureLoader',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'TextureLoader',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'TextureLoader',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'TextureLoader',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'TextureLoader',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken('TextureLoader', 'ComparisonMode', 'CompareNone');
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'TextureLoader',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'TextureLoader',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'TextureLoader',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'TextureLoader',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'TextureLoader',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'TextureLoader',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('TextureLoader', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('TextureLoader', 'Filter', 'Nearest');
    export const Linear = createEnumToken('TextureLoader', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'TextureLoader',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'TextureLoader',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'TextureLoader',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'TextureLoader',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('TextureLoader', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'TextureLoader',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken('TextureLoader', 'HandleType', 'RHITextureId');
  }
  export namespace Status {
    export const None = createEnumToken('TextureLoader', 'Status', 'None');
    export const Loading = createEnumToken('TextureLoader', 'Status', 'Loading');
    export const Ready = createEnumToken('TextureLoader', 'Status', 'Ready');
    export const Error = createEnumToken('TextureLoader', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken('TextureLoader', 'Target', 'TargetAutomatic');
    export const Target1D = createEnumToken('TextureLoader', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('TextureLoader', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('TextureLoader', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('TextureLoader', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('TextureLoader', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('TextureLoader', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken(
      'TextureLoader',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'TextureLoader',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'TextureLoader',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken('TextureLoader', 'Target', 'TargetRectangle');
    export const TargetBuffer = createEnumToken('TextureLoader', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('TextureLoader', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('TextureLoader', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGB16_UNorm');
    export const RGBA16_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA16_UNorm');
    export const R8_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGB16_SNorm');
    export const RGBA16_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA16_SNorm');
    export const R8U = createEnumToken('TextureLoader', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('TextureLoader', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('TextureLoader', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('TextureLoader', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('TextureLoader', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('TextureLoader', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('TextureLoader', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('TextureLoader', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('TextureLoader', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('TextureLoader', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('TextureLoader', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('TextureLoader', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('TextureLoader', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('TextureLoader', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('TextureLoader', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('TextureLoader', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('TextureLoader', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('TextureLoader', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('TextureLoader', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('TextureLoader', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('TextureLoader', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('TextureLoader', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('TextureLoader', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('TextureLoader', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('TextureLoader', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('TextureLoader', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('TextureLoader', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('TextureLoader', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('TextureLoader', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('TextureLoader', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('TextureLoader', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('TextureLoader', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('TextureLoader', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('TextureLoader', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('TextureLoader', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('TextureLoader', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('TextureLoader', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('TextureLoader', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('TextureLoader', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'R_ATI1N_UNorm');
    export const R_ATI1N_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'R_ATI1N_SNorm');
    export const RG_ATI2N_UNorm = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'RGB_BP_UNorm');
    export const R11_EAC_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'R11_EAC_UNorm');
    export const R11_EAC_SNorm = createEnumToken('TextureLoader', 'TextureFormat', 'R11_EAC_SNorm');
    export const RG11_EAC_UNorm = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken('TextureLoader', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('TextureLoader', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken('TextureLoader', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('TextureLoader', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken('TextureLoader', 'TextureFormat', 'SRGB8_Alpha8');
    export const SRGB_DXT1 = createEnumToken('TextureLoader', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken('TextureLoader', 'TextureFormat', 'SRGB_BP_UNorm');
    export const DepthFormat = createEnumToken('TextureLoader', 'TextureFormat', 'DepthFormat');
    export const AlphaFormat = createEnumToken('TextureLoader', 'TextureFormat', 'AlphaFormat');
    export const RGBFormat = createEnumToken('TextureLoader', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('TextureLoader', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'TextureLoader',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
