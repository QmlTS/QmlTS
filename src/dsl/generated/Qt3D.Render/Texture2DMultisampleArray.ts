// AUTO-GENERATED — DO NOT EDIT
// Type: Texture2DMultisampleArray
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface Texture2DMultisampleArrayBuilder {
  id(id: string): Texture2DMultisampleArrayBuilder;
  child(obj: QmlObjectBuilder): Texture2DMultisampleArrayBuilder;

  comparisonFunction(value: QmlEnumToken): Texture2DMultisampleArrayBuilder;
  comparisonFunctionBind(expr: string): Texture2DMultisampleArrayBuilder;
  comparisonMode(value: QmlEnumToken): Texture2DMultisampleArrayBuilder;
  comparisonModeBind(expr: string): Texture2DMultisampleArrayBuilder;
  depth(value: number): Texture2DMultisampleArrayBuilder;
  depthBind(expr: string): Texture2DMultisampleArrayBuilder;
  enabled(value: boolean): Texture2DMultisampleArrayBuilder;
  enabledBind(expr: string): Texture2DMultisampleArrayBuilder;
  format(value: QmlEnumToken): Texture2DMultisampleArrayBuilder;
  formatBind(expr: string): Texture2DMultisampleArrayBuilder;
  generateMipMaps(value: boolean): Texture2DMultisampleArrayBuilder;
  generateMipMapsBind(expr: string): Texture2DMultisampleArrayBuilder;
  height(value: number): Texture2DMultisampleArrayBuilder;
  heightBind(expr: string): Texture2DMultisampleArrayBuilder;
  layers(value: number): Texture2DMultisampleArrayBuilder;
  layersBind(expr: string): Texture2DMultisampleArrayBuilder;
  magnificationFilter(value: QmlEnumToken): Texture2DMultisampleArrayBuilder;
  magnificationFilterBind(expr: string): Texture2DMultisampleArrayBuilder;
  maximumAnisotropy(value: number): Texture2DMultisampleArrayBuilder;
  maximumAnisotropyBind(expr: string): Texture2DMultisampleArrayBuilder;
  minificationFilter(value: QmlEnumToken): Texture2DMultisampleArrayBuilder;
  minificationFilterBind(expr: string): Texture2DMultisampleArrayBuilder;
  mipLevels(value: number): Texture2DMultisampleArrayBuilder;
  mipLevelsBind(expr: string): Texture2DMultisampleArrayBuilder;
  objectName(value: string): Texture2DMultisampleArrayBuilder;
  objectNameBind(expr: string): Texture2DMultisampleArrayBuilder;
  parent(value: QmlValue): Texture2DMultisampleArrayBuilder;
  parentBind(expr: string): Texture2DMultisampleArrayBuilder;
  samples(value: number): Texture2DMultisampleArrayBuilder;
  samplesBind(expr: string): Texture2DMultisampleArrayBuilder;
  width(value: number): Texture2DMultisampleArrayBuilder;
  widthBind(expr: string): Texture2DMultisampleArrayBuilder;
  onComparisonFunctionChanged(body: string): Texture2DMultisampleArrayBuilder;
  onComparisonModeChanged(body: string): Texture2DMultisampleArrayBuilder;
  onDepthChanged(body: string): Texture2DMultisampleArrayBuilder;
  onEnabledChanged(body: string): Texture2DMultisampleArrayBuilder;
  onFormatChanged(body: string): Texture2DMultisampleArrayBuilder;
  onGenerateMipMapsChanged(body: string): Texture2DMultisampleArrayBuilder;
  onHandleChanged(body: string): Texture2DMultisampleArrayBuilder;
  onHandleTypeChanged(body: string): Texture2DMultisampleArrayBuilder;
  onHeightChanged(body: string): Texture2DMultisampleArrayBuilder;
  onLayersChanged(body: string): Texture2DMultisampleArrayBuilder;
  onMagnificationFilterChanged(body: string): Texture2DMultisampleArrayBuilder;
  onMaximumAnisotropyChanged(body: string): Texture2DMultisampleArrayBuilder;
  onMinificationFilterChanged(body: string): Texture2DMultisampleArrayBuilder;
  onMipLevelsChanged(body: string): Texture2DMultisampleArrayBuilder;
  onNodeDestroyed(body: string): Texture2DMultisampleArrayBuilder;
  onObjectNameChanged(body: string): Texture2DMultisampleArrayBuilder;
  onParentChanged(body: string): Texture2DMultisampleArrayBuilder;
  onSamplesChanged(body: string): Texture2DMultisampleArrayBuilder;
  onStatusChanged(body: string): Texture2DMultisampleArrayBuilder;
  onWidthChanged(body: string): Texture2DMultisampleArrayBuilder;
}

const TEXTURE2DMULTISAMPLEARRAY_META: TypeMetadata = {
  typeName: 'Texture2DMultisampleArray',
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

export function Texture2DMultisampleArray(): Texture2DMultisampleArrayBuilder {
  return createFluentBuilder(
    'Texture2DMultisampleArray',
    TEXTURE2DMULTISAMPLEARRAY_META,
  ) as unknown as Texture2DMultisampleArrayBuilder;
}

export namespace Texture2DMultisampleArray {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken(
      'Texture2DMultisampleArray',
      'ComparisonMode',
      'CompareNone',
    );
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'Texture2DMultisampleArray',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'Texture2DMultisampleArray',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'Texture2DMultisampleArray',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'Texture2DMultisampleArray',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'Texture2DMultisampleArray',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'Texture2DMultisampleArray',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('Texture2DMultisampleArray', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('Texture2DMultisampleArray', 'Filter', 'Nearest');
    export const Linear = createEnumToken('Texture2DMultisampleArray', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'Texture2DMultisampleArray',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'Texture2DMultisampleArray',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'Texture2DMultisampleArray',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'Texture2DMultisampleArray',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('Texture2DMultisampleArray', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'Texture2DMultisampleArray',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken(
      'Texture2DMultisampleArray',
      'HandleType',
      'RHITextureId',
    );
  }
  export namespace Status {
    export const None = createEnumToken('Texture2DMultisampleArray', 'Status', 'None');
    export const Loading = createEnumToken('Texture2DMultisampleArray', 'Status', 'Loading');
    export const Ready = createEnumToken('Texture2DMultisampleArray', 'Status', 'Ready');
    export const Error = createEnumToken('Texture2DMultisampleArray', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'TargetAutomatic',
    );
    export const Target1D = createEnumToken('Texture2DMultisampleArray', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'Target1DArray',
    );
    export const Target2D = createEnumToken('Texture2DMultisampleArray', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'Target2DArray',
    );
    export const Target3D = createEnumToken('Texture2DMultisampleArray', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'TargetCubeMap',
    );
    export const TargetCubeMapArray = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'TargetRectangle',
    );
    export const TargetBuffer = createEnumToken(
      'Texture2DMultisampleArray',
      'Target',
      'TargetBuffer',
    );
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'NoFormat',
    );
    export const Automatic = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'Automatic',
    );
    export const R8_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'R8_UNorm',
    );
    export const RG8_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG8_UNorm',
    );
    export const RGB8_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB8_UNorm',
    );
    export const RGBA8_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBA8_UNorm',
    );
    export const R16_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'R16_UNorm',
    );
    export const RG16_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG16_UNorm',
    );
    export const RGB16_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB16_UNorm',
    );
    export const RGBA16_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBA16_UNorm',
    );
    export const R8_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'R8_SNorm',
    );
    export const RG8_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG8_SNorm',
    );
    export const RGB8_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB8_SNorm',
    );
    export const RGBA8_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBA8_SNorm',
    );
    export const R16_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'R16_SNorm',
    );
    export const RG16_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG16_SNorm',
    );
    export const RGB16_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB16_SNorm',
    );
    export const RGBA16_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBA16_SNorm',
    );
    export const R8U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG11B10F',
    );
    export const RG3B2 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB10A2U',
    );
    export const D16 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'D32FS8X24',
    );
    export const RGB_DXT1 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB_DXT1',
    );
    export const RGBA_DXT1 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBA_DXT1',
    );
    export const RGBA_DXT3 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBA_DXT3',
    );
    export const RGBA_DXT5 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBA_DXT5',
    );
    export const R_ATI1N_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'R_ATI1N_UNorm',
    );
    export const R_ATI1N_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'R_ATI1N_SNorm',
    );
    export const RG_ATI2N_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB_BP_UNorm',
    );
    export const R11_EAC_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'R11_EAC_UNorm',
    );
    export const R11_EAC_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'R11_EAC_SNorm',
    );
    export const RG11_EAC_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB8_ETC2',
    );
    export const SRGB8_ETC2 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB8_ETC2',
    );
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGB8_ETC1',
    );
    export const SRGB8 = createEnumToken('Texture2DMultisampleArray', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB8_Alpha8',
    );
    export const SRGB_DXT1 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB_DXT1',
    );
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'SRGB_BP_UNorm',
    );
    export const DepthFormat = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'DepthFormat',
    );
    export const AlphaFormat = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'AlphaFormat',
    );
    export const RGBFormat = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBFormat',
    );
    export const RGBAFormat = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'RGBAFormat',
    );
    export const LuminanceFormat = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'Texture2DMultisampleArray',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
