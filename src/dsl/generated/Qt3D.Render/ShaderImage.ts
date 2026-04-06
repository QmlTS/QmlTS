// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderImage
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ShaderImageBuilder {
  id(id: string): ShaderImageBuilder;
  child(obj: QmlObjectBuilder): ShaderImageBuilder;
  children(...objs: QmlObjectBuilder[]): ShaderImageBuilder;

  access(value: QmlEnumToken): ShaderImageBuilder;
  accessBind(expr: string): ShaderImageBuilder;
  enabled(value: boolean): ShaderImageBuilder;
  enabledBind(expr: string): ShaderImageBuilder;
  format(value: QmlEnumToken): ShaderImageBuilder;
  formatBind(expr: string): ShaderImageBuilder;
  layer(value: number): ShaderImageBuilder;
  layerBind(expr: string): ShaderImageBuilder;
  layered(value: boolean): ShaderImageBuilder;
  layeredBind(expr: string): ShaderImageBuilder;
  mipLevel(value: number): ShaderImageBuilder;
  mipLevelBind(expr: string): ShaderImageBuilder;
  objectName(value: string): ShaderImageBuilder;
  objectNameBind(expr: string): ShaderImageBuilder;
  parent(value: QmlValue): ShaderImageBuilder;
  parentBind(expr: string): ShaderImageBuilder;
  texture(value: QmlValue): ShaderImageBuilder;
  textureBind(expr: string): ShaderImageBuilder;
  onAccessChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onFormatChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onLayerChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onLayeredChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onMipLevelChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
  onTextureChanged(handler: DslSignalHandlerValue): ShaderImageBuilder;
}

const SHADERIMAGE_META: TypeMetadata = {
  typeName: 'ShaderImage',
  properties: [
    { name: 'access', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'format', hasValue: true, hasBinding: true },
    { name: 'layer', hasValue: true, hasBinding: true },
    { name: 'layered', hasValue: true, hasBinding: true },
    { name: 'mipLevel', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccessChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFormatChanged', paramCount: 1 },
    { handlerName: 'onLayerChanged', paramCount: 1 },
    { handlerName: 'onLayeredChanged', paramCount: 1 },
    { handlerName: 'onMipLevelChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onTextureChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ShaderImage(): ShaderImageBuilder {
  return createFluentBuilder('ShaderImage', SHADERIMAGE_META) as unknown as ShaderImageBuilder;
}

export namespace ShaderImage {
  export namespace Access {
    export const ReadOnly = createEnumToken('ShaderImage', 'Access', 'ReadOnly');
    export const WriteOnly = createEnumToken('ShaderImage', 'Access', 'WriteOnly');
    export const ReadWrite = createEnumToken('ShaderImage', 'Access', 'ReadWrite');
  }
  export namespace ImageFormat {
    export const NoFormat = createEnumToken('ShaderImage', 'ImageFormat', 'NoFormat');
    export const Automatic = createEnumToken('ShaderImage', 'ImageFormat', 'Automatic');
    export const R8_UNorm = createEnumToken('ShaderImage', 'ImageFormat', 'R8_UNorm');
    export const RG8_UNorm = createEnumToken('ShaderImage', 'ImageFormat', 'RG8_UNorm');
    export const RGBA8_UNorm = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA8_UNorm');
    export const R16_UNorm = createEnumToken('ShaderImage', 'ImageFormat', 'R16_UNorm');
    export const RG16_UNorm = createEnumToken('ShaderImage', 'ImageFormat', 'RG16_UNorm');
    export const RGBA16_UNorm = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA16_UNorm');
    export const R8_SNorm = createEnumToken('ShaderImage', 'ImageFormat', 'R8_SNorm');
    export const RG8_SNorm = createEnumToken('ShaderImage', 'ImageFormat', 'RG8_SNorm');
    export const RGBA8_SNorm = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA8_SNorm');
    export const R16_SNorm = createEnumToken('ShaderImage', 'ImageFormat', 'R16_SNorm');
    export const RG16_SNorm = createEnumToken('ShaderImage', 'ImageFormat', 'RG16_SNorm');
    export const RGBA16_SNorm = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA16_SNorm');
    export const R8U = createEnumToken('ShaderImage', 'ImageFormat', 'R8U');
    export const RG8U = createEnumToken('ShaderImage', 'ImageFormat', 'RG8U');
    export const RGBA8U = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA8U');
    export const R16U = createEnumToken('ShaderImage', 'ImageFormat', 'R16U');
    export const RG16U = createEnumToken('ShaderImage', 'ImageFormat', 'RG16U');
    export const RGBA16U = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA16U');
    export const R32U = createEnumToken('ShaderImage', 'ImageFormat', 'R32U');
    export const RG32U = createEnumToken('ShaderImage', 'ImageFormat', 'RG32U');
    export const RGBA32U = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA32U');
    export const R8I = createEnumToken('ShaderImage', 'ImageFormat', 'R8I');
    export const RG8I = createEnumToken('ShaderImage', 'ImageFormat', 'RG8I');
    export const RGBA8I = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA8I');
    export const R16I = createEnumToken('ShaderImage', 'ImageFormat', 'R16I');
    export const RG16I = createEnumToken('ShaderImage', 'ImageFormat', 'RG16I');
    export const RGBA16I = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA16I');
    export const R32I = createEnumToken('ShaderImage', 'ImageFormat', 'R32I');
    export const RG32I = createEnumToken('ShaderImage', 'ImageFormat', 'RG32I');
    export const RGBA32I = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA32I');
    export const R16F = createEnumToken('ShaderImage', 'ImageFormat', 'R16F');
    export const RG16F = createEnumToken('ShaderImage', 'ImageFormat', 'RG16F');
    export const RGBA16F = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA16F');
    export const R32F = createEnumToken('ShaderImage', 'ImageFormat', 'R32F');
    export const RG32F = createEnumToken('ShaderImage', 'ImageFormat', 'RG32F');
    export const RGBA32F = createEnumToken('ShaderImage', 'ImageFormat', 'RGBA32F');
    export const RG11B10F = createEnumToken('ShaderImage', 'ImageFormat', 'RG11B10F');
    export const RGB10A2 = createEnumToken('ShaderImage', 'ImageFormat', 'RGB10A2');
    export const RGB10A2U = createEnumToken('ShaderImage', 'ImageFormat', 'RGB10A2U');
  }
}
