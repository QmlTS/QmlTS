// AUTO-GENERATED — DO NOT EDIT
// Type: RenderPassTexture
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface RenderPassTextureBuilder {
  id(id: string): RenderPassTextureBuilder;
  child(obj: QmlObjectBuilder): RenderPassTextureBuilder;

  format(value: QmlEnumToken): RenderPassTextureBuilder;
  formatBind(expr: string): RenderPassTextureBuilder;
  objectName(value: string): RenderPassTextureBuilder;
  objectNameBind(expr: string): RenderPassTextureBuilder;
  parent(value: QmlValue): RenderPassTextureBuilder;
  parentBind(expr: string): RenderPassTextureBuilder;
  state(value: string): RenderPassTextureBuilder;
  stateBind(expr: string): RenderPassTextureBuilder;
  onChildrenChanged(body: string): RenderPassTextureBuilder;
  onObjectNameChanged(body: string): RenderPassTextureBuilder;
  onParentChanged(body: string): RenderPassTextureBuilder;
  onStateChanged(body: string): RenderPassTextureBuilder;
}

const RENDERPASSTEXTURE_META: TypeMetadata = {
  typeName: 'RenderPassTexture',
  properties: [
    { name: 'format', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function RenderPassTexture(): RenderPassTextureBuilder {
  return createFluentBuilder('RenderPassTexture', RENDERPASSTEXTURE_META) as unknown as RenderPassTextureBuilder;
}

export namespace RenderPassTexture {
  export namespace TextureFormat {
    export const Unknown = createEnumToken('RenderPassTexture', 'TextureFormat', 'Unknown');
    export const RGBA8 = createEnumToken('RenderPassTexture', 'TextureFormat', 'RGBA8');
    export const RGBA16F = createEnumToken('RenderPassTexture', 'TextureFormat', 'RGBA16F');
    export const RGBA32F = createEnumToken('RenderPassTexture', 'TextureFormat', 'RGBA32F');
    export const R8 = createEnumToken('RenderPassTexture', 'TextureFormat', 'R8');
    export const R16 = createEnumToken('RenderPassTexture', 'TextureFormat', 'R16');
    export const R16F = createEnumToken('RenderPassTexture', 'TextureFormat', 'R16F');
    export const R32F = createEnumToken('RenderPassTexture', 'TextureFormat', 'R32F');
    export const Depth16 = createEnumToken('RenderPassTexture', 'TextureFormat', 'Depth16');
    export const Depth24 = createEnumToken('RenderPassTexture', 'TextureFormat', 'Depth24');
    export const Depth32 = createEnumToken('RenderPassTexture', 'TextureFormat', 'Depth32');
    export const Depth24Stencil8 = createEnumToken('RenderPassTexture', 'TextureFormat', 'Depth24Stencil8');
  }
}
