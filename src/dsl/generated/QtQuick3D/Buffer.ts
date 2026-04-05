// AUTO-GENERATED — DO NOT EDIT
// Type: Buffer
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface BufferBuilder {
  id(id: string): BufferBuilder;
  child(obj: QmlObjectBuilder): BufferBuilder;

  bufferFlags(value: QmlEnumToken): BufferBuilder;
  bufferFlagsBind(expr: string): BufferBuilder;
  format(value: QmlEnumToken): BufferBuilder;
  formatBind(expr: string): BufferBuilder;
  name(value: string): BufferBuilder;
  nameBind(expr: string): BufferBuilder;
  objectName(value: string): BufferBuilder;
  objectNameBind(expr: string): BufferBuilder;
  parent(value: QmlValue): BufferBuilder;
  parentBind(expr: string): BufferBuilder;
  sizeMultiplier(value: number): BufferBuilder;
  sizeMultiplierBind(expr: string): BufferBuilder;
  state(value: string): BufferBuilder;
  stateBind(expr: string): BufferBuilder;
  textureCoordOperation(value: QmlEnumToken): BufferBuilder;
  textureCoordOperationBind(expr: string): BufferBuilder;
  textureFilterOperation(value: QmlEnumToken): BufferBuilder;
  textureFilterOperationBind(expr: string): BufferBuilder;
  onChanged(body: string): BufferBuilder;
  onChildrenChanged(body: string): BufferBuilder;
  onObjectNameChanged(body: string): BufferBuilder;
  onParentChanged(body: string): BufferBuilder;
  onStateChanged(body: string): BufferBuilder;
}

const BUFFER_META: TypeMetadata = {
  typeName: 'Buffer',
  properties: [
    { name: 'bufferFlags', hasValue: true, hasBinding: true },
    { name: 'format', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sizeMultiplier', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textureCoordOperation', hasValue: true, hasBinding: true },
    { name: 'textureFilterOperation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
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

export function Buffer(): BufferBuilder {
  return createFluentBuilder('Buffer', BUFFER_META) as unknown as BufferBuilder;
}

export namespace Buffer {
  export namespace AllocateBufferFlagValues {
    export const None = createEnumToken('Buffer', 'AllocateBufferFlagValues', 'None');
    export const SceneLifetime = createEnumToken('Buffer', 'AllocateBufferFlagValues', 'SceneLifetime');
  }
  export namespace TextureCoordOperation {
    export const Unknown = createEnumToken('Buffer', 'TextureCoordOperation', 'Unknown');
    export const ClampToEdge = createEnumToken('Buffer', 'TextureCoordOperation', 'ClampToEdge');
    export const MirroredRepeat = createEnumToken('Buffer', 'TextureCoordOperation', 'MirroredRepeat');
    export const Repeat = createEnumToken('Buffer', 'TextureCoordOperation', 'Repeat');
  }
  export namespace TextureFilterOperation {
    export const Unknown = createEnumToken('Buffer', 'TextureFilterOperation', 'Unknown');
    export const Nearest = createEnumToken('Buffer', 'TextureFilterOperation', 'Nearest');
    export const Linear = createEnumToken('Buffer', 'TextureFilterOperation', 'Linear');
  }
  export namespace TextureFormat {
    export const Unknown = createEnumToken('Buffer', 'TextureFormat', 'Unknown');
    export const RGBA8 = createEnumToken('Buffer', 'TextureFormat', 'RGBA8');
    export const RGBA16F = createEnumToken('Buffer', 'TextureFormat', 'RGBA16F');
    export const RGBA32F = createEnumToken('Buffer', 'TextureFormat', 'RGBA32F');
    export const R8 = createEnumToken('Buffer', 'TextureFormat', 'R8');
    export const R16 = createEnumToken('Buffer', 'TextureFormat', 'R16');
    export const R16F = createEnumToken('Buffer', 'TextureFormat', 'R16F');
    export const R32F = createEnumToken('Buffer', 'TextureFormat', 'R32F');
  }
}
