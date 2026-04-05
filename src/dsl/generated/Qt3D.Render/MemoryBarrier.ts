// AUTO-GENERATED — DO NOT EDIT
// Type: MemoryBarrier
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface MemoryBarrierBuilder {
  id(id: string): MemoryBarrierBuilder;
  child(obj: QmlObjectBuilder): MemoryBarrierBuilder;

  enabled(value: boolean): MemoryBarrierBuilder;
  enabledBind(expr: string): MemoryBarrierBuilder;
  objectName(value: string): MemoryBarrierBuilder;
  objectNameBind(expr: string): MemoryBarrierBuilder;
  parent(value: QmlValue): MemoryBarrierBuilder;
  parentBind(expr: string): MemoryBarrierBuilder;
  onEnabledChanged(body: string): MemoryBarrierBuilder;
  onNodeDestroyed(body: string): MemoryBarrierBuilder;
  onObjectNameChanged(body: string): MemoryBarrierBuilder;
  onParentChanged(body: string): MemoryBarrierBuilder;
  onWaitOperationsChanged(body: string): MemoryBarrierBuilder;
}

const MEMORYBARRIER_META: TypeMetadata = {
  typeName: 'MemoryBarrier',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onWaitOperationsChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function MemoryBarrier(): MemoryBarrierBuilder {
  return createFluentBuilder(
    'MemoryBarrier',
    MEMORYBARRIER_META,
  ) as unknown as MemoryBarrierBuilder;
}

export namespace MemoryBarrier {
  export namespace Operations {
    export const None = createEnumToken('MemoryBarrier', 'Operations', 'None');
    export const VertexAttributeArray = createEnumToken(
      'MemoryBarrier',
      'Operations',
      'VertexAttributeArray',
    );
    export const ElementArray = createEnumToken('MemoryBarrier', 'Operations', 'ElementArray');
    export const Uniform = createEnumToken('MemoryBarrier', 'Operations', 'Uniform');
    export const TextureFetch = createEnumToken('MemoryBarrier', 'Operations', 'TextureFetch');
    export const ShaderImageAccess = createEnumToken(
      'MemoryBarrier',
      'Operations',
      'ShaderImageAccess',
    );
    export const Command = createEnumToken('MemoryBarrier', 'Operations', 'Command');
    export const PixelBuffer = createEnumToken('MemoryBarrier', 'Operations', 'PixelBuffer');
    export const TextureUpdate = createEnumToken('MemoryBarrier', 'Operations', 'TextureUpdate');
    export const BufferUpdate = createEnumToken('MemoryBarrier', 'Operations', 'BufferUpdate');
    export const FrameBuffer = createEnumToken('MemoryBarrier', 'Operations', 'FrameBuffer');
    export const TransformFeedback = createEnumToken(
      'MemoryBarrier',
      'Operations',
      'TransformFeedback',
    );
    export const AtomicCounter = createEnumToken('MemoryBarrier', 'Operations', 'AtomicCounter');
    export const ShaderStorage = createEnumToken('MemoryBarrier', 'Operations', 'ShaderStorage');
    export const QueryBuffer = createEnumToken('MemoryBarrier', 'Operations', 'QueryBuffer');
    export const All = createEnumToken('MemoryBarrier', 'Operations', 'All');
  }
}
