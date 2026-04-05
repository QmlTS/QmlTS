// AUTO-GENERATED — DO NOT EDIT
// Type: CubeMapTexture
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
export interface CubeMapTextureBuilder {
  id(id: string): CubeMapTextureBuilder;
  child(obj: QmlObjectBuilder): CubeMapTextureBuilder;

  autoOrientation(value: boolean): CubeMapTextureBuilder;
  autoOrientationBind(expr: string): CubeMapTextureBuilder;
  flipU(value: boolean): CubeMapTextureBuilder;
  flipUBind(expr: string): CubeMapTextureBuilder;
  flipV(value: boolean): CubeMapTextureBuilder;
  flipVBind(expr: string): CubeMapTextureBuilder;
  generateMipmaps(value: boolean): CubeMapTextureBuilder;
  generateMipmapsBind(expr: string): CubeMapTextureBuilder;
  indexUV(value: number): CubeMapTextureBuilder;
  indexUVBind(expr: string): CubeMapTextureBuilder;
  magFilter(value: QmlEnumToken): CubeMapTextureBuilder;
  magFilterBind(expr: string): CubeMapTextureBuilder;
  mappingMode(value: QmlEnumToken): CubeMapTextureBuilder;
  mappingModeBind(expr: string): CubeMapTextureBuilder;
  minFilter(value: QmlEnumToken): CubeMapTextureBuilder;
  minFilterBind(expr: string): CubeMapTextureBuilder;
  mipFilter(value: QmlEnumToken): CubeMapTextureBuilder;
  mipFilterBind(expr: string): CubeMapTextureBuilder;
  objectName(value: string): CubeMapTextureBuilder;
  objectNameBind(expr: string): CubeMapTextureBuilder;
  parent(value: QmlValue): CubeMapTextureBuilder;
  parentBind(expr: string): CubeMapTextureBuilder;
  pivotU(value: number): CubeMapTextureBuilder;
  pivotUBind(expr: string): CubeMapTextureBuilder;
  pivotV(value: number): CubeMapTextureBuilder;
  pivotVBind(expr: string): CubeMapTextureBuilder;
  positionU(value: number): CubeMapTextureBuilder;
  positionUBind(expr: string): CubeMapTextureBuilder;
  positionV(value: number): CubeMapTextureBuilder;
  positionVBind(expr: string): CubeMapTextureBuilder;
  rotationUV(value: number): CubeMapTextureBuilder;
  rotationUVBind(expr: string): CubeMapTextureBuilder;
  scaleU(value: number): CubeMapTextureBuilder;
  scaleUBind(expr: string): CubeMapTextureBuilder;
  scaleV(value: number): CubeMapTextureBuilder;
  scaleVBind(expr: string): CubeMapTextureBuilder;
  source(value: QmlUrl): CubeMapTextureBuilder;
  sourceBind(expr: string): CubeMapTextureBuilder;
  sourceItem(value: ItemBuilder): CubeMapTextureBuilder;
  sourceItemBind(expr: string): CubeMapTextureBuilder;
  state(value: string): CubeMapTextureBuilder;
  stateBind(expr: string): CubeMapTextureBuilder;
  textureData(value: QmlValue): CubeMapTextureBuilder;
  textureDataBind(expr: string): CubeMapTextureBuilder;
  textureProvider(value: QmlValue): CubeMapTextureBuilder;
  textureProviderBind(expr: string): CubeMapTextureBuilder;
  tilingModeDepth(value: QmlEnumToken): CubeMapTextureBuilder;
  tilingModeDepthBind(expr: string): CubeMapTextureBuilder;
  tilingModeHorizontal(value: QmlEnumToken): CubeMapTextureBuilder;
  tilingModeHorizontalBind(expr: string): CubeMapTextureBuilder;
  tilingModeVertical(value: QmlEnumToken): CubeMapTextureBuilder;
  tilingModeVerticalBind(expr: string): CubeMapTextureBuilder;
  onAutoOrientationChanged(body: string): CubeMapTextureBuilder;
  onChildrenChanged(body: string): CubeMapTextureBuilder;
  onDepthTilingChanged(body: string): CubeMapTextureBuilder;
  onFlipUChanged(body: string): CubeMapTextureBuilder;
  onFlipVChanged(body: string): CubeMapTextureBuilder;
  onGenerateMipmapsChanged(body: string): CubeMapTextureBuilder;
  onHorizontalTilingChanged(body: string): CubeMapTextureBuilder;
  onIndexUVChanged(body: string): CubeMapTextureBuilder;
  onMagFilterChanged(body: string): CubeMapTextureBuilder;
  onMappingModeChanged(body: string): CubeMapTextureBuilder;
  onMinFilterChanged(body: string): CubeMapTextureBuilder;
  onMipFilterChanged(body: string): CubeMapTextureBuilder;
  onObjectNameChanged(body: string): CubeMapTextureBuilder;
  onParentChanged(body: string): CubeMapTextureBuilder;
  onPivotUChanged(body: string): CubeMapTextureBuilder;
  onPivotVChanged(body: string): CubeMapTextureBuilder;
  onPositionUChanged(body: string): CubeMapTextureBuilder;
  onPositionVChanged(body: string): CubeMapTextureBuilder;
  onRotationUVChanged(body: string): CubeMapTextureBuilder;
  onScaleUChanged(body: string): CubeMapTextureBuilder;
  onScaleVChanged(body: string): CubeMapTextureBuilder;
  onSourceChanged(body: string): CubeMapTextureBuilder;
  onSourceItemChanged(body: string): CubeMapTextureBuilder;
  onStateChanged(body: string): CubeMapTextureBuilder;
  onTextureDataChanged(body: string): CubeMapTextureBuilder;
  onTextureProviderChanged(body: string): CubeMapTextureBuilder;
  onVerticalTilingChanged(body: string): CubeMapTextureBuilder;
}

const CUBEMAPTEXTURE_META: TypeMetadata = {
  typeName: 'CubeMapTexture',
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
  grouped: [
  ],
  attached: [
  ],
};

export function CubeMapTexture(): CubeMapTextureBuilder {
  return createFluentBuilder('CubeMapTexture', CUBEMAPTEXTURE_META) as unknown as CubeMapTextureBuilder;
}

export namespace CubeMapTexture {
  export namespace Filter {
    export const None = createEnumToken('CubeMapTexture', 'Filter', 'None');
    export const Nearest = createEnumToken('CubeMapTexture', 'Filter', 'Nearest');
    export const Linear = createEnumToken('CubeMapTexture', 'Filter', 'Linear');
  }
  export namespace MappingMode {
    export const UV = createEnumToken('CubeMapTexture', 'MappingMode', 'UV');
    export const Environment = createEnumToken('CubeMapTexture', 'MappingMode', 'Environment');
    export const LightProbe = createEnumToken('CubeMapTexture', 'MappingMode', 'LightProbe');
  }
  export namespace TilingMode {
    export const ClampToEdge = createEnumToken('CubeMapTexture', 'TilingMode', 'ClampToEdge');
    export const MirroredRepeat = createEnumToken('CubeMapTexture', 'TilingMode', 'MirroredRepeat');
    export const Repeat = createEnumToken('CubeMapTexture', 'TilingMode', 'Repeat');
  }
}
