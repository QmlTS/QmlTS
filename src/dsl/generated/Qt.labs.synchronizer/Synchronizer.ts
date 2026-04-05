// AUTO-GENERATED — DO NOT EDIT
// Type: Synchronizer
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface SynchronizerBuilder {
  id(id: string): SynchronizerBuilder;
  child(obj: QmlObjectBuilder): SynchronizerBuilder;

  objectName(value: string): SynchronizerBuilder;
  objectNameBind(expr: string): SynchronizerBuilder;
  sourceObject(value: QtObjectBuilder): SynchronizerBuilder;
  sourceObjectBind(expr: string): SynchronizerBuilder;
  sourceProperty(value: string): SynchronizerBuilder;
  sourcePropertyBind(expr: string): SynchronizerBuilder;
  targetObject(value: QtObjectBuilder): SynchronizerBuilder;
  targetObjectBind(expr: string): SynchronizerBuilder;
  targetProperty(value: string): SynchronizerBuilder;
  targetPropertyBind(expr: string): SynchronizerBuilder;
  onObjectNameChanged(body: string): SynchronizerBuilder;
  onSourceObjectChanged(body: string): SynchronizerBuilder;
  onSourcePropertyChanged(body: string): SynchronizerBuilder;
  onTargetObjectChanged(body: string): SynchronizerBuilder;
  onTargetPropertyChanged(body: string): SynchronizerBuilder;
  onValueBounced(body: string): SynchronizerBuilder;
  onValueIgnored(body: string): SynchronizerBuilder;
}

const SYNCHRONIZER_META: TypeMetadata = {
  typeName: 'Synchronizer',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'sourceObject', hasValue: true, hasBinding: true },
    { name: 'sourceProperty', hasValue: true, hasBinding: true },
    { name: 'targetObject', hasValue: true, hasBinding: true },
    { name: 'targetProperty', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSourceObjectChanged', paramCount: 0 },
    { handlerName: 'onSourcePropertyChanged', paramCount: 0 },
    { handlerName: 'onTargetObjectChanged', paramCount: 0 },
    { handlerName: 'onTargetPropertyChanged', paramCount: 0 },
    { handlerName: 'onValueBounced', paramCount: 2 },
    { handlerName: 'onValueIgnored', paramCount: 2 },
  ],
  grouped: [],
  attached: [],
};

export function Synchronizer(): SynchronizerBuilder {
  return createFluentBuilder('Synchronizer', SYNCHRONIZER_META) as unknown as SynchronizerBuilder;
}
