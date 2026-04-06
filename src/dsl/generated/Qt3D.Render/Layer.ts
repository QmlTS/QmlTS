// AUTO-GENERATED — DO NOT EDIT
// Type: Layer
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface LayerBuilder {
  id(id: string): LayerBuilder;
  child(obj: QmlObjectBuilder): LayerBuilder;
  children(...objs: QmlObjectBuilder[]): LayerBuilder;

  enabled(value: boolean): LayerBuilder;
  enabledBind(expr: string): LayerBuilder;
  isShareable(value: boolean): LayerBuilder;
  isShareableBind(expr: string): LayerBuilder;
  objectName(value: string): LayerBuilder;
  objectNameBind(expr: string): LayerBuilder;
  parent(value: QmlValue): LayerBuilder;
  parentBind(expr: string): LayerBuilder;
  recursive(value: boolean): LayerBuilder;
  recursiveBind(expr: string): LayerBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): LayerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): LayerBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): LayerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LayerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): LayerBuilder;
  onRecursiveChanged(handler: DslSignalHandlerValue): LayerBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): LayerBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): LayerBuilder;
}

const LAYER_META: TypeMetadata = {
  typeName: 'Layer',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'recursive', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRecursiveChanged', paramCount: 0 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Layer(): LayerBuilder {
  return createFluentBuilder('Layer', LAYER_META) as unknown as LayerBuilder;
}
