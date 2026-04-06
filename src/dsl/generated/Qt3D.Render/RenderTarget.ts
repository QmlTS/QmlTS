// AUTO-GENERATED — DO NOT EDIT
// Type: RenderTarget
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface RenderTargetBuilder {
  id(id: string): RenderTargetBuilder;
  child(obj: QmlObjectBuilder): RenderTargetBuilder;
  children(...objs: QmlObjectBuilder[]): RenderTargetBuilder;

  enabled(value: boolean): RenderTargetBuilder;
  enabledBind(expr: string): RenderTargetBuilder;
  isShareable(value: boolean): RenderTargetBuilder;
  isShareableBind(expr: string): RenderTargetBuilder;
  objectName(value: string): RenderTargetBuilder;
  objectNameBind(expr: string): RenderTargetBuilder;
  parent(value: QmlValue): RenderTargetBuilder;
  parentBind(expr: string): RenderTargetBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): RenderTargetBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): RenderTargetBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): RenderTargetBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderTargetBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RenderTargetBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): RenderTargetBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): RenderTargetBuilder;
}

const RENDERTARGET_META: TypeMetadata = {
  typeName: 'RenderTarget',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function RenderTarget(): RenderTargetBuilder {
  return createFluentBuilder('RenderTarget', RENDERTARGET_META) as unknown as RenderTargetBuilder;
}
