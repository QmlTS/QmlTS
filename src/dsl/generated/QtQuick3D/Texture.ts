// AUTO-GENERATED — DO NOT EDIT
// Type: Texture
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
import type { ItemBuilder } from '../QtQuick/Item.js';
export interface TextureBuilder {
  id(id: string): TextureBuilder;
  child(obj: QmlObjectBuilder): TextureBuilder;
  children(...objs: QmlObjectBuilder[]): TextureBuilder;

  autoOrientation(value: boolean): TextureBuilder;
  autoOrientationBind(expr: string): TextureBuilder;
  flipU(value: boolean): TextureBuilder;
  flipUBind(expr: string): TextureBuilder;
  flipV(value: boolean): TextureBuilder;
  flipVBind(expr: string): TextureBuilder;
  generateMipmaps(value: boolean): TextureBuilder;
  generateMipmapsBind(expr: string): TextureBuilder;
  indexUV(value: number): TextureBuilder;
  indexUVBind(expr: string): TextureBuilder;
  magFilter(value: QmlEnumToken): TextureBuilder;
  magFilterBind(expr: string): TextureBuilder;
  mappingMode(value: QmlEnumToken): TextureBuilder;
  mappingModeBind(expr: string): TextureBuilder;
  minFilter(value: QmlEnumToken): TextureBuilder;
  minFilterBind(expr: string): TextureBuilder;
  mipFilter(value: QmlEnumToken): TextureBuilder;
  mipFilterBind(expr: string): TextureBuilder;
  objectName(value: string): TextureBuilder;
  objectNameBind(expr: string): TextureBuilder;
  parent(value: QmlValue): TextureBuilder;
  parentBind(expr: string): TextureBuilder;
  pivotU(value: number): TextureBuilder;
  pivotUBind(expr: string): TextureBuilder;
  pivotV(value: number): TextureBuilder;
  pivotVBind(expr: string): TextureBuilder;
  positionU(value: number): TextureBuilder;
  positionUBind(expr: string): TextureBuilder;
  positionV(value: number): TextureBuilder;
  positionVBind(expr: string): TextureBuilder;
  rotationUV(value: number): TextureBuilder;
  rotationUVBind(expr: string): TextureBuilder;
  scaleU(value: number): TextureBuilder;
  scaleUBind(expr: string): TextureBuilder;
  scaleV(value: number): TextureBuilder;
  scaleVBind(expr: string): TextureBuilder;
  source(value: QmlUrl): TextureBuilder;
  sourceBind(expr: string): TextureBuilder;
  sourceItem(value: ItemBuilder): TextureBuilder;
  sourceItemBind(expr: string): TextureBuilder;
  state(value: string): TextureBuilder;
  stateBind(expr: string): TextureBuilder;
  textureData(value: QmlValue): TextureBuilder;
  textureDataBind(expr: string): TextureBuilder;
  textureProvider(value: QmlValue): TextureBuilder;
  textureProviderBind(expr: string): TextureBuilder;
  tilingModeDepth(value: QmlEnumToken): TextureBuilder;
  tilingModeDepthBind(expr: string): TextureBuilder;
  tilingModeHorizontal(value: QmlEnumToken): TextureBuilder;
  tilingModeHorizontalBind(expr: string): TextureBuilder;
  tilingModeVertical(value: QmlEnumToken): TextureBuilder;
  tilingModeVerticalBind(expr: string): TextureBuilder;
  onAutoOrientationChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onDepthTilingChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onFlipUChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onFlipVChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onGenerateMipmapsChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onHorizontalTilingChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onIndexUVChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onMagFilterChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onMappingModeChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onMinFilterChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onMipFilterChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onPivotUChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onPivotVChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onPositionUChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onPositionVChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onRotationUVChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onScaleUChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onScaleVChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onSourceItemChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onTextureDataChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onTextureProviderChanged(handler: DslSignalHandlerValue): TextureBuilder;
  onVerticalTilingChanged(handler: DslSignalHandlerValue): TextureBuilder;
}

const TEXTURE_META: TypeMetadata = {
  typeName: 'Texture',
  properties: [
    { name: 'autoOrientation', hasValue: true, hasBinding: true },
    { name: 'flipU', hasValue: true, hasBinding: true },
    { name: 'flipV', hasValue: true, hasBinding: true },
    { name: 'generateMipmaps', hasValue: true, hasBinding: true },
    { name: 'indexUV', hasValue: true, hasBinding: true },
    { name: 'magFilter', hasValue: true, hasBinding: true },
    { name: 'mappingMode', hasValue: true, hasBinding: true },
    { name: 'minFilter', hasValue: true, hasBinding: true },
    { name: 'mipFilter', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivotU', hasValue: true, hasBinding: true },
    { name: 'pivotV', hasValue: true, hasBinding: true },
    { name: 'positionU', hasValue: true, hasBinding: true },
    { name: 'positionV', hasValue: true, hasBinding: true },
    { name: 'rotationUV', hasValue: true, hasBinding: true },
    { name: 'scaleU', hasValue: true, hasBinding: true },
    { name: 'scaleV', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'sourceItem', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textureData', hasValue: true, hasBinding: true },
    { name: 'textureProvider', hasValue: true, hasBinding: true },
    { name: 'tilingModeDepth', hasValue: true, hasBinding: true },
    { name: 'tilingModeHorizontal', hasValue: true, hasBinding: true },
    { name: 'tilingModeVertical', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoOrientationChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDepthTilingChanged', paramCount: 0 },
    { handlerName: 'onFlipUChanged', paramCount: 0 },
    { handlerName: 'onFlipVChanged', paramCount: 0 },
    { handlerName: 'onGenerateMipmapsChanged', paramCount: 0 },
    { handlerName: 'onHorizontalTilingChanged', paramCount: 0 },
    { handlerName: 'onIndexUVChanged', paramCount: 0 },
    { handlerName: 'onMagFilterChanged', paramCount: 0 },
    { handlerName: 'onMappingModeChanged', paramCount: 0 },
    { handlerName: 'onMinFilterChanged', paramCount: 0 },
    { handlerName: 'onMipFilterChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotUChanged', paramCount: 0 },
    { handlerName: 'onPivotVChanged', paramCount: 0 },
    { handlerName: 'onPositionUChanged', paramCount: 0 },
    { handlerName: 'onPositionVChanged', paramCount: 0 },
    { handlerName: 'onRotationUVChanged', paramCount: 0 },
    { handlerName: 'onScaleUChanged', paramCount: 0 },
    { handlerName: 'onScaleVChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onSourceItemChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onTextureDataChanged', paramCount: 0 },
    { handlerName: 'onTextureProviderChanged', paramCount: 0 },
    { handlerName: 'onVerticalTilingChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function Texture(): TextureBuilder {
  return createFluentBuilder('Texture', TEXTURE_META) as unknown as TextureBuilder;
}

export namespace Texture {
  export namespace Filter {
    export const None = createEnumToken('Texture', 'Filter', 'None');
    export const Nearest = createEnumToken('Texture', 'Filter', 'Nearest');
    export const Linear = createEnumToken('Texture', 'Filter', 'Linear');
  }
  export namespace MappingMode {
    export const UV = createEnumToken('Texture', 'MappingMode', 'UV');
    export const Environment = createEnumToken('Texture', 'MappingMode', 'Environment');
    export const LightProbe = createEnumToken('Texture', 'MappingMode', 'LightProbe');
  }
  export namespace TilingMode {
    export const ClampToEdge = createEnumToken('Texture', 'TilingMode', 'ClampToEdge');
    export const MirroredRepeat = createEnumToken('Texture', 'TilingMode', 'MirroredRepeat');
    export const Repeat = createEnumToken('Texture', 'TilingMode', 'Repeat');
  }
}
