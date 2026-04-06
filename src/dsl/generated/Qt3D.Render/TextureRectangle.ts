// AUTO-GENERATED — DO NOT EDIT
// Type: TextureRectangle
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TextureRectangleBuilder {
  id(id: string): TextureRectangleBuilder;
  child(obj: QmlObjectBuilder): TextureRectangleBuilder;
  children(...objs: QmlObjectBuilder[]): TextureRectangleBuilder;

  comparisonFunction(value: QmlEnumToken): TextureRectangleBuilder;
  comparisonFunctionBind(expr: string): TextureRectangleBuilder;
  comparisonMode(value: QmlEnumToken): TextureRectangleBuilder;
  comparisonModeBind(expr: string): TextureRectangleBuilder;
  depth(value: number): TextureRectangleBuilder;
  depthBind(expr: string): TextureRectangleBuilder;
  enabled(value: boolean): TextureRectangleBuilder;
  enabledBind(expr: string): TextureRectangleBuilder;
  format(value: QmlEnumToken): TextureRectangleBuilder;
  formatBind(expr: string): TextureRectangleBuilder;
  generateMipMaps(value: boolean): TextureRectangleBuilder;
  generateMipMapsBind(expr: string): TextureRectangleBuilder;
  height(value: number): TextureRectangleBuilder;
  heightBind(expr: string): TextureRectangleBuilder;
  layers(value: number): TextureRectangleBuilder;
  layersBind(expr: string): TextureRectangleBuilder;
  magnificationFilter(value: QmlEnumToken): TextureRectangleBuilder;
  magnificationFilterBind(expr: string): TextureRectangleBuilder;
  maximumAnisotropy(value: number): TextureRectangleBuilder;
  maximumAnisotropyBind(expr: string): TextureRectangleBuilder;
  minificationFilter(value: QmlEnumToken): TextureRectangleBuilder;
  minificationFilterBind(expr: string): TextureRectangleBuilder;
  mipLevels(value: number): TextureRectangleBuilder;
  mipLevelsBind(expr: string): TextureRectangleBuilder;
  objectName(value: string): TextureRectangleBuilder;
  objectNameBind(expr: string): TextureRectangleBuilder;
  parent(value: QmlValue): TextureRectangleBuilder;
  parentBind(expr: string): TextureRectangleBuilder;
  samples(value: number): TextureRectangleBuilder;
  samplesBind(expr: string): TextureRectangleBuilder;
  width(value: number): TextureRectangleBuilder;
  widthBind(expr: string): TextureRectangleBuilder;
  onComparisonFunctionChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onComparisonModeChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onDepthChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onFormatChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onGenerateMipMapsChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onHandleChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onHandleTypeChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onMagnificationFilterChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onMaximumAnisotropyChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onMinificationFilterChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onMipLevelsChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onSamplesChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TextureRectangleBuilder;
}

const TEXTURERECTANGLE_META: TypeMetadata = {
  typeName: 'TextureRectangle',
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

export function TextureRectangle(): TextureRectangleBuilder {
  return createFluentBuilder(
    'TextureRectangle',
    TEXTURERECTANGLE_META,
  ) as unknown as TextureRectangleBuilder;
}

export namespace TextureRectangle {
  export namespace ComparisonFunction {
    export const CompareLessEqual = createEnumToken(
      'TextureRectangle',
      'ComparisonFunction',
      'CompareLessEqual',
    );
    export const CompareGreaterEqual = createEnumToken(
      'TextureRectangle',
      'ComparisonFunction',
      'CompareGreaterEqual',
    );
    export const CompareLess = createEnumToken(
      'TextureRectangle',
      'ComparisonFunction',
      'CompareLess',
    );
    export const CompareGreater = createEnumToken(
      'TextureRectangle',
      'ComparisonFunction',
      'CompareGreater',
    );
    export const CompareEqual = createEnumToken(
      'TextureRectangle',
      'ComparisonFunction',
      'CompareEqual',
    );
    export const CommpareNotEqual = createEnumToken(
      'TextureRectangle',
      'ComparisonFunction',
      'CommpareNotEqual',
    );
    export const CompareAlways = createEnumToken(
      'TextureRectangle',
      'ComparisonFunction',
      'CompareAlways',
    );
    export const CompareNever = createEnumToken(
      'TextureRectangle',
      'ComparisonFunction',
      'CompareNever',
    );
  }
  export namespace ComparisonMode {
    export const CompareRefToTexture = createEnumToken(
      'TextureRectangle',
      'ComparisonMode',
      'CompareRefToTexture',
    );
    export const CompareNone = createEnumToken('TextureRectangle', 'ComparisonMode', 'CompareNone');
  }
  export namespace CubeMapFace {
    export const CubeMapPositiveX = createEnumToken(
      'TextureRectangle',
      'CubeMapFace',
      'CubeMapPositiveX',
    );
    export const CubeMapNegativeX = createEnumToken(
      'TextureRectangle',
      'CubeMapFace',
      'CubeMapNegativeX',
    );
    export const CubeMapPositiveY = createEnumToken(
      'TextureRectangle',
      'CubeMapFace',
      'CubeMapPositiveY',
    );
    export const CubeMapNegativeY = createEnumToken(
      'TextureRectangle',
      'CubeMapFace',
      'CubeMapNegativeY',
    );
    export const CubeMapPositiveZ = createEnumToken(
      'TextureRectangle',
      'CubeMapFace',
      'CubeMapPositiveZ',
    );
    export const CubeMapNegativeZ = createEnumToken(
      'TextureRectangle',
      'CubeMapFace',
      'CubeMapNegativeZ',
    );
    export const AllFaces = createEnumToken('TextureRectangle', 'CubeMapFace', 'AllFaces');
  }
  export namespace Filter {
    export const Nearest = createEnumToken('TextureRectangle', 'Filter', 'Nearest');
    export const Linear = createEnumToken('TextureRectangle', 'Filter', 'Linear');
    export const NearestMipMapNearest = createEnumToken(
      'TextureRectangle',
      'Filter',
      'NearestMipMapNearest',
    );
    export const NearestMipMapLinear = createEnumToken(
      'TextureRectangle',
      'Filter',
      'NearestMipMapLinear',
    );
    export const LinearMipMapNearest = createEnumToken(
      'TextureRectangle',
      'Filter',
      'LinearMipMapNearest',
    );
    export const LinearMipMapLinear = createEnumToken(
      'TextureRectangle',
      'Filter',
      'LinearMipMapLinear',
    );
  }
  export namespace HandleType {
    export const NoHandle = createEnumToken('TextureRectangle', 'HandleType', 'NoHandle');
    export const OpenGLTextureId = createEnumToken(
      'TextureRectangle',
      'HandleType',
      'OpenGLTextureId',
    );
    export const RHITextureId = createEnumToken('TextureRectangle', 'HandleType', 'RHITextureId');
  }
  export namespace Status {
    export const None = createEnumToken('TextureRectangle', 'Status', 'None');
    export const Loading = createEnumToken('TextureRectangle', 'Status', 'Loading');
    export const Ready = createEnumToken('TextureRectangle', 'Status', 'Ready');
    export const Error = createEnumToken('TextureRectangle', 'Status', 'Error');
  }
  export namespace Target {
    export const TargetAutomatic = createEnumToken('TextureRectangle', 'Target', 'TargetAutomatic');
    export const Target1D = createEnumToken('TextureRectangle', 'Target', 'Target1D');
    export const Target1DArray = createEnumToken('TextureRectangle', 'Target', 'Target1DArray');
    export const Target2D = createEnumToken('TextureRectangle', 'Target', 'Target2D');
    export const Target2DArray = createEnumToken('TextureRectangle', 'Target', 'Target2DArray');
    export const Target3D = createEnumToken('TextureRectangle', 'Target', 'Target3D');
    export const TargetCubeMap = createEnumToken('TextureRectangle', 'Target', 'TargetCubeMap');
    export const TargetCubeMapArray = createEnumToken(
      'TextureRectangle',
      'Target',
      'TargetCubeMapArray',
    );
    export const Target2DMultisample = createEnumToken(
      'TextureRectangle',
      'Target',
      'Target2DMultisample',
    );
    export const Target2DMultisampleArray = createEnumToken(
      'TextureRectangle',
      'Target',
      'Target2DMultisampleArray',
    );
    export const TargetRectangle = createEnumToken('TextureRectangle', 'Target', 'TargetRectangle');
    export const TargetBuffer = createEnumToken('TextureRectangle', 'Target', 'TargetBuffer');
  }
  export namespace TextureFormat {
    export const NoFormat = createEnumToken('TextureRectangle', 'TextureFormat', 'NoFormat');
    export const Automatic = createEnumToken('TextureRectangle', 'TextureFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RG8_UNorm');
    export const RGB8_UNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB8_UNorm');
    export const RGBA8_UNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RG16_UNorm');
    export const RGB16_UNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB16_UNorm');
    export const RGBA16_UNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RGBA16_UNorm',
    );
    export const R8_SNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RG8_SNorm');
    export const RGB8_SNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB8_SNorm');
    export const RGBA8_SNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RG16_SNorm');
    export const RGB16_SNorm = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB16_SNorm');
    export const RGBA16_SNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RGBA16_SNorm',
    );
    export const R8U = createEnumToken('TextureRectangle', 'TextureFormat', 'R8U');
    export const RG8U = createEnumToken('TextureRectangle', 'TextureFormat', 'RG8U');
    export const RGB8U = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB8U');
    export const RGBA8U = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA8U');
    export const R16U = createEnumToken('TextureRectangle', 'TextureFormat', 'R16U');
    export const RG16U = createEnumToken('TextureRectangle', 'TextureFormat', 'RG16U');
    export const RGB16U = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB16U');
    export const RGBA16U = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA16U');
    export const R32U = createEnumToken('TextureRectangle', 'TextureFormat', 'R32U');
    export const RG32U = createEnumToken('TextureRectangle', 'TextureFormat', 'RG32U');
    export const RGB32U = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB32U');
    export const RGBA32U = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA32U');
    export const R8I = createEnumToken('TextureRectangle', 'TextureFormat', 'R8I');
    export const RG8I = createEnumToken('TextureRectangle', 'TextureFormat', 'RG8I');
    export const RGB8I = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB8I');
    export const RGBA8I = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA8I');
    export const R16I = createEnumToken('TextureRectangle', 'TextureFormat', 'R16I');
    export const RG16I = createEnumToken('TextureRectangle', 'TextureFormat', 'RG16I');
    export const RGB16I = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB16I');
    export const RGBA16I = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA16I');
    export const R32I = createEnumToken('TextureRectangle', 'TextureFormat', 'R32I');
    export const RG32I = createEnumToken('TextureRectangle', 'TextureFormat', 'RG32I');
    export const RGB32I = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB32I');
    export const RGBA32I = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA32I');
    export const R16F = createEnumToken('TextureRectangle', 'TextureFormat', 'R16F');
    export const RG16F = createEnumToken('TextureRectangle', 'TextureFormat', 'RG16F');
    export const RGB16F = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB16F');
    export const RGBA16F = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA16F');
    export const R32F = createEnumToken('TextureRectangle', 'TextureFormat', 'R32F');
    export const RG32F = createEnumToken('TextureRectangle', 'TextureFormat', 'RG32F');
    export const RGB32F = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB32F');
    export const RGBA32F = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA32F');
    export const RGB9E5 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB9E5');
    export const RG11B10F = createEnumToken('TextureRectangle', 'TextureFormat', 'RG11B10F');
    export const RG3B2 = createEnumToken('TextureRectangle', 'TextureFormat', 'RG3B2');
    export const R5G6B5 = createEnumToken('TextureRectangle', 'TextureFormat', 'R5G6B5');
    export const RGB5A1 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB5A1');
    export const RGBA4 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA4');
    export const RGB10A2 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB10A2U');
    export const D16 = createEnumToken('TextureRectangle', 'TextureFormat', 'D16');
    export const D24 = createEnumToken('TextureRectangle', 'TextureFormat', 'D24');
    export const D24S8 = createEnumToken('TextureRectangle', 'TextureFormat', 'D24S8');
    export const D32 = createEnumToken('TextureRectangle', 'TextureFormat', 'D32');
    export const D32F = createEnumToken('TextureRectangle', 'TextureFormat', 'D32F');
    export const D32FS8X24 = createEnumToken('TextureRectangle', 'TextureFormat', 'D32FS8X24');
    export const RGB_DXT1 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB_DXT1');
    export const RGBA_DXT1 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA_DXT1');
    export const RGBA_DXT3 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA_DXT3');
    export const RGBA_DXT5 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBA_DXT5');
    export const R_ATI1N_UNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'R_ATI1N_UNorm',
    );
    export const R_ATI1N_SNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'R_ATI1N_SNorm',
    );
    export const RG_ATI2N_UNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RG_ATI2N_UNorm',
    );
    export const RG_ATI2N_SNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RG_ATI2N_SNorm',
    );
    export const RGB_BP_UNSIGNED_FLOAT = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RGB_BP_UNSIGNED_FLOAT',
    );
    export const RGB_BP_SIGNED_FLOAT = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RGB_BP_SIGNED_FLOAT',
    );
    export const RGB_BP_UNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RGB_BP_UNorm',
    );
    export const R11_EAC_UNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'R11_EAC_UNorm',
    );
    export const R11_EAC_SNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'R11_EAC_SNorm',
    );
    export const RG11_EAC_UNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RG11_EAC_UNorm',
    );
    export const RG11_EAC_SNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RG11_EAC_SNorm',
    );
    export const RGB8_ETC2 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB8_ETC2');
    export const SRGB8_ETC2 = createEnumToken('TextureRectangle', 'TextureFormat', 'SRGB8_ETC2');
    export const RGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RGB8_PunchThrough_Alpha1_ETC2',
    );
    export const SRGB8_PunchThrough_Alpha1_ETC2 = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'SRGB8_PunchThrough_Alpha1_ETC2',
    );
    export const RGBA8_ETC2_EAC = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'RGBA8_ETC2_EAC',
    );
    export const SRGB8_Alpha8_ETC2_EAC = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'SRGB8_Alpha8_ETC2_EAC',
    );
    export const RGB8_ETC1 = createEnumToken('TextureRectangle', 'TextureFormat', 'RGB8_ETC1');
    export const SRGB8 = createEnumToken('TextureRectangle', 'TextureFormat', 'SRGB8');
    export const SRGB8_Alpha8 = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'SRGB8_Alpha8',
    );
    export const SRGB_DXT1 = createEnumToken('TextureRectangle', 'TextureFormat', 'SRGB_DXT1');
    export const SRGB_Alpha_DXT1 = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'SRGB_Alpha_DXT1',
    );
    export const SRGB_Alpha_DXT3 = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'SRGB_Alpha_DXT3',
    );
    export const SRGB_Alpha_DXT5 = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'SRGB_Alpha_DXT5',
    );
    export const SRGB_BP_UNorm = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'SRGB_BP_UNorm',
    );
    export const DepthFormat = createEnumToken('TextureRectangle', 'TextureFormat', 'DepthFormat');
    export const AlphaFormat = createEnumToken('TextureRectangle', 'TextureFormat', 'AlphaFormat');
    export const RGBFormat = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBFormat');
    export const RGBAFormat = createEnumToken('TextureRectangle', 'TextureFormat', 'RGBAFormat');
    export const LuminanceFormat = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'LuminanceFormat',
    );
    export const LuminanceAlphaFormat = createEnumToken(
      'TextureRectangle',
      'TextureFormat',
      'LuminanceAlphaFormat',
    );
  }
}
