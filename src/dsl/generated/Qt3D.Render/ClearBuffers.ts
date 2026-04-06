// AUTO-GENERATED — DO NOT EDIT
// Type: ClearBuffers
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { RenderTargetOutputBuilder } from './RenderTargetOutput.js';
export interface ClearBuffersBuilder {
  id(id: string): ClearBuffersBuilder;
  child(obj: QmlObjectBuilder): ClearBuffersBuilder;
  children(...objs: QmlObjectBuilder[]): ClearBuffersBuilder;

  buffers(value: QmlEnumToken): ClearBuffersBuilder;
  buffersBind(expr: string): ClearBuffersBuilder;
  clearColor(value: QmlColor): ClearBuffersBuilder;
  clearColorBind(expr: string): ClearBuffersBuilder;
  clearDepthValue(value: number): ClearBuffersBuilder;
  clearDepthValueBind(expr: string): ClearBuffersBuilder;
  clearStencilValue(value: number): ClearBuffersBuilder;
  clearStencilValueBind(expr: string): ClearBuffersBuilder;
  colorBuffer(value: RenderTargetOutputBuilder): ClearBuffersBuilder;
  colorBufferBind(expr: string): ClearBuffersBuilder;
  enabled(value: boolean): ClearBuffersBuilder;
  enabledBind(expr: string): ClearBuffersBuilder;
  objectName(value: string): ClearBuffersBuilder;
  objectNameBind(expr: string): ClearBuffersBuilder;
  parent(value: QmlValue): ClearBuffersBuilder;
  parentBind(expr: string): ClearBuffersBuilder;
  onBuffersChanged(handler: DslSignalHandlerValue): ClearBuffersBuilder;
  onClearColorChanged(handler: DslSignalHandlerValue): ClearBuffersBuilder;
  onClearDepthValueChanged(handler: DslSignalHandlerValue): ClearBuffersBuilder;
  onClearStencilValueChanged(handler: DslSignalHandlerValue): ClearBuffersBuilder;
  onColorBufferChanged(handler: DslSignalHandlerValue): ClearBuffersBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ClearBuffersBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ClearBuffersBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ClearBuffersBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ClearBuffersBuilder;
}

const CLEARBUFFERS_META: TypeMetadata = {
  typeName: 'ClearBuffers',
  properties: [
    { name: 'buffers', hasValue: true, hasBinding: true },
    { name: 'clearColor', hasValue: true, hasBinding: true },
    { name: 'clearDepthValue', hasValue: true, hasBinding: true },
    { name: 'clearStencilValue', hasValue: true, hasBinding: true },
    { name: 'colorBuffer', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBuffersChanged', paramCount: 1 },
    { handlerName: 'onClearColorChanged', paramCount: 1 },
    { handlerName: 'onClearDepthValueChanged', paramCount: 1 },
    { handlerName: 'onClearStencilValueChanged', paramCount: 1 },
    { handlerName: 'onColorBufferChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ClearBuffers(): ClearBuffersBuilder {
  return createFluentBuilder('ClearBuffers', CLEARBUFFERS_META) as unknown as ClearBuffersBuilder;
}

export namespace ClearBuffers {
  export namespace BufferType {
    export const None = createEnumToken('ClearBuffers', 'BufferType', 'None');
    export const ColorBuffer = createEnumToken('ClearBuffers', 'BufferType', 'ColorBuffer');
    export const DepthBuffer = createEnumToken('ClearBuffers', 'BufferType', 'DepthBuffer');
    export const StencilBuffer = createEnumToken('ClearBuffers', 'BufferType', 'StencilBuffer');
    export const DepthStencilBuffer = createEnumToken(
      'ClearBuffers',
      'BufferType',
      'DepthStencilBuffer',
    );
    export const ColorDepthBuffer = createEnumToken(
      'ClearBuffers',
      'BufferType',
      'ColorDepthBuffer',
    );
    export const ColorDepthStencilBuffer = createEnumToken(
      'ClearBuffers',
      'BufferType',
      'ColorDepthStencilBuffer',
    );
    export const AllBuffers = createEnumToken('ClearBuffers', 'BufferType', 'AllBuffers');
  }
}
