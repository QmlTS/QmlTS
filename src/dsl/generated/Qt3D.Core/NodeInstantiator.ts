// AUTO-GENERATED — DO NOT EDIT
// Type: NodeInstantiator
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface NodeInstantiatorBuilder {
  id(id: string): NodeInstantiatorBuilder;
  child(obj: QmlObjectBuilder): NodeInstantiatorBuilder;

  active(value: boolean): NodeInstantiatorBuilder;
  activeBind(expr: string): NodeInstantiatorBuilder;
  asynchronous(value: boolean): NodeInstantiatorBuilder;
  asynchronousBind(expr: string): NodeInstantiatorBuilder;
  delegate(value: QmlComponent): NodeInstantiatorBuilder;
  delegateBind(expr: string): NodeInstantiatorBuilder;
  enabled(value: boolean): NodeInstantiatorBuilder;
  enabledBind(expr: string): NodeInstantiatorBuilder;
  model(value: QmlValue): NodeInstantiatorBuilder;
  modelBind(expr: string): NodeInstantiatorBuilder;
  objectName(value: string): NodeInstantiatorBuilder;
  objectNameBind(expr: string): NodeInstantiatorBuilder;
  parent(value: QmlValue): NodeInstantiatorBuilder;
  parentBind(expr: string): NodeInstantiatorBuilder;
  onActiveChanged(body: string): NodeInstantiatorBuilder;
  onAsynchronousChanged(body: string): NodeInstantiatorBuilder;
  onCountChanged(body: string): NodeInstantiatorBuilder;
  onDelegateChanged(body: string): NodeInstantiatorBuilder;
  onEnabledChanged(body: string): NodeInstantiatorBuilder;
  onModelChanged(body: string): NodeInstantiatorBuilder;
  onNodeDestroyed(body: string): NodeInstantiatorBuilder;
  onObjectAdded(body: string): NodeInstantiatorBuilder;
  onObjectChanged(body: string): NodeInstantiatorBuilder;
  onObjectNameChanged(body: string): NodeInstantiatorBuilder;
  onObjectRemoved(body: string): NodeInstantiatorBuilder;
  onParentChanged(body: string): NodeInstantiatorBuilder;
}

const NODEINSTANTIATOR_META: TypeMetadata = {
  typeName: 'NodeInstantiator',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectAdded', paramCount: 2 },
    { handlerName: 'onObjectChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onObjectRemoved', paramCount: 2 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'delegate',
};

export function NodeInstantiator(): NodeInstantiatorBuilder {
  return createFluentBuilder('NodeInstantiator', NODEINSTANTIATOR_META) as unknown as NodeInstantiatorBuilder;
}
