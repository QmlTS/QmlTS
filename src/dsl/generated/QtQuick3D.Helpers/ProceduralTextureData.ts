// AUTO-GENERATED — DO NOT EDIT
// Type: ProceduralTextureData
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ProceduralTextureDataBuilder {
  id(id: string): ProceduralTextureDataBuilder;
  child(obj: QmlObjectBuilder): ProceduralTextureDataBuilder;
  children(...objs: QmlObjectBuilder[]): ProceduralTextureDataBuilder;

  depth(value: number): ProceduralTextureDataBuilder;
  depthBind(expr: string): ProceduralTextureDataBuilder;
  format(value: QmlEnumToken): ProceduralTextureDataBuilder;
  formatBind(expr: string): ProceduralTextureDataBuilder;
  hasTransparency(value: boolean): ProceduralTextureDataBuilder;
  hasTransparencyBind(expr: string): ProceduralTextureDataBuilder;
  height(value: number): ProceduralTextureDataBuilder;
  heightBind(expr: string): ProceduralTextureDataBuilder;
  objectName(value: string): ProceduralTextureDataBuilder;
  objectNameBind(expr: string): ProceduralTextureDataBuilder;
  parent(value: QmlValue): ProceduralTextureDataBuilder;
  parentBind(expr: string): ProceduralTextureDataBuilder;
  state(value: string): ProceduralTextureDataBuilder;
  stateBind(expr: string): ProceduralTextureDataBuilder;
  textureData(value: string): ProceduralTextureDataBuilder;
  textureDataBind(expr: string): ProceduralTextureDataBuilder;
  width(value: number): ProceduralTextureDataBuilder;
  widthBind(expr: string): ProceduralTextureDataBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onDepthChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onFormatChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onHasTransparencyChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onTextureDataChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onTextureDataNodeDirty(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ProceduralTextureDataBuilder;
}

const PROCEDURALTEXTUREDATA_META: TypeMetadata = {
  typeName: 'ProceduralTextureData',
  properties: [
    { name: 'depth', hasValue: true, hasBinding: true },
    { name: 'format', hasValue: true, hasBinding: true },
    { name: 'hasTransparency', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textureData', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDepthChanged', paramCount: 0 },
    { handlerName: 'onFormatChanged', paramCount: 0 },
    { handlerName: 'onHasTransparencyChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onTextureDataChanged', paramCount: 0 },
    { handlerName: 'onTextureDataNodeDirty', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ProceduralTextureData(): ProceduralTextureDataBuilder {
  return createFluentBuilder(
    'ProceduralTextureData',
    PROCEDURALTEXTUREDATA_META,
  ) as unknown as ProceduralTextureDataBuilder;
}

export namespace ProceduralTextureData {
  export namespace Format {
    export const None = createEnumToken('ProceduralTextureData', 'Format', 'None');
    export const RGBA8 = createEnumToken('ProceduralTextureData', 'Format', 'RGBA8');
    export const RGBA16F = createEnumToken('ProceduralTextureData', 'Format', 'RGBA16F');
    export const RGBA32F = createEnumToken('ProceduralTextureData', 'Format', 'RGBA32F');
    export const RGBE8 = createEnumToken('ProceduralTextureData', 'Format', 'RGBE8');
    export const R8 = createEnumToken('ProceduralTextureData', 'Format', 'R8');
    export const R16 = createEnumToken('ProceduralTextureData', 'Format', 'R16');
    export const R16F = createEnumToken('ProceduralTextureData', 'Format', 'R16F');
    export const R32F = createEnumToken('ProceduralTextureData', 'Format', 'R32F');
    export const BC1 = createEnumToken('ProceduralTextureData', 'Format', 'BC1');
    export const BC2 = createEnumToken('ProceduralTextureData', 'Format', 'BC2');
    export const BC3 = createEnumToken('ProceduralTextureData', 'Format', 'BC3');
    export const BC4 = createEnumToken('ProceduralTextureData', 'Format', 'BC4');
    export const BC5 = createEnumToken('ProceduralTextureData', 'Format', 'BC5');
    export const BC6H = createEnumToken('ProceduralTextureData', 'Format', 'BC6H');
    export const BC7 = createEnumToken('ProceduralTextureData', 'Format', 'BC7');
    export const DXT1_RGBA = createEnumToken('ProceduralTextureData', 'Format', 'DXT1_RGBA');
    export const DXT1_RGB = createEnumToken('ProceduralTextureData', 'Format', 'DXT1_RGB');
    export const DXT3_RGBA = createEnumToken('ProceduralTextureData', 'Format', 'DXT3_RGBA');
    export const DXT5_RGBA = createEnumToken('ProceduralTextureData', 'Format', 'DXT5_RGBA');
    export const ETC2_RGB8 = createEnumToken('ProceduralTextureData', 'Format', 'ETC2_RGB8');
    export const ETC2_RGB8A1 = createEnumToken('ProceduralTextureData', 'Format', 'ETC2_RGB8A1');
    export const ETC2_RGBA8 = createEnumToken('ProceduralTextureData', 'Format', 'ETC2_RGBA8');
    export const ASTC_4x4 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_4x4');
    export const ASTC_5x4 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_5x4');
    export const ASTC_5x5 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_5x5');
    export const ASTC_6x5 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_6x5');
    export const ASTC_6x6 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_6x6');
    export const ASTC_8x5 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_8x5');
    export const ASTC_8x6 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_8x6');
    export const ASTC_8x8 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_8x8');
    export const ASTC_10x5 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_10x5');
    export const ASTC_10x6 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_10x6');
    export const ASTC_10x8 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_10x8');
    export const ASTC_10x10 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_10x10');
    export const ASTC_12x10 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_12x10');
    export const ASTC_12x12 = createEnumToken('ProceduralTextureData', 'Format', 'ASTC_12x12');
  }
}
