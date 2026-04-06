// AUTO-GENERATED — DO NOT EDIT
// Type: BlitFramebuffer
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { RenderTargetBuilder } from './RenderTarget.js';
export interface BlitFramebufferBuilder {
  id(id: string): BlitFramebufferBuilder;
  child(obj: QmlObjectBuilder): BlitFramebufferBuilder;
  children(...objs: QmlObjectBuilder[]): BlitFramebufferBuilder;

  destination(value: RenderTargetBuilder): BlitFramebufferBuilder;
  destinationBind(expr: string): BlitFramebufferBuilder;
  destinationAttachmentPoint(value: QmlEnumToken): BlitFramebufferBuilder;
  destinationAttachmentPointBind(expr: string): BlitFramebufferBuilder;
  destinationRect(value: QmlRect): BlitFramebufferBuilder;
  destinationRectBind(expr: string): BlitFramebufferBuilder;
  enabled(value: boolean): BlitFramebufferBuilder;
  enabledBind(expr: string): BlitFramebufferBuilder;
  interpolationMethod(value: QmlEnumToken): BlitFramebufferBuilder;
  interpolationMethodBind(expr: string): BlitFramebufferBuilder;
  objectName(value: string): BlitFramebufferBuilder;
  objectNameBind(expr: string): BlitFramebufferBuilder;
  parent(value: QmlValue): BlitFramebufferBuilder;
  parentBind(expr: string): BlitFramebufferBuilder;
  source(value: RenderTargetBuilder): BlitFramebufferBuilder;
  sourceBind(expr: string): BlitFramebufferBuilder;
  sourceAttachmentPoint(value: QmlEnumToken): BlitFramebufferBuilder;
  sourceAttachmentPointBind(expr: string): BlitFramebufferBuilder;
  sourceRect(value: QmlRect): BlitFramebufferBuilder;
  sourceRectBind(expr: string): BlitFramebufferBuilder;
  onDestinationAttachmentPointChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onDestinationChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onDestinationRectChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onInterpolationMethodChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onParentChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onSourceAttachmentPointChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
  onSourceRectChanged(handler: DslSignalHandlerValue): BlitFramebufferBuilder;
}

const BLITFRAMEBUFFER_META: TypeMetadata = {
  typeName: 'BlitFramebuffer',
  properties: [
    { name: 'destination', hasValue: true, hasBinding: true },
    { name: 'destinationAttachmentPoint', hasValue: true, hasBinding: true },
    { name: 'destinationRect', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'interpolationMethod', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'sourceAttachmentPoint', hasValue: true, hasBinding: true },
    { name: 'sourceRect', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDestinationAttachmentPointChanged', paramCount: 0 },
    { handlerName: 'onDestinationChanged', paramCount: 0 },
    { handlerName: 'onDestinationRectChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onInterpolationMethodChanged', paramCount: 0 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSourceAttachmentPointChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onSourceRectChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function BlitFramebuffer(): BlitFramebufferBuilder {
  return createFluentBuilder(
    'BlitFramebuffer',
    BLITFRAMEBUFFER_META,
  ) as unknown as BlitFramebufferBuilder;
}

export namespace BlitFramebuffer {
  export namespace InterpolationMethod {
    export const Nearest = createEnumToken('BlitFramebuffer', 'InterpolationMethod', 'Nearest');
    export const Linear = createEnumToken('BlitFramebuffer', 'InterpolationMethod', 'Linear');
  }
}
