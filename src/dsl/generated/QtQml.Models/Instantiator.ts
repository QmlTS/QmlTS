// AUTO-GENERATED — DO NOT EDIT
// Type: Instantiator
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface InstantiatorBuilder {
  id(id: string): InstantiatorBuilder;
  child(obj: QmlObjectBuilder): InstantiatorBuilder;

  active(value: boolean): InstantiatorBuilder;
  activeBind(expr: string): InstantiatorBuilder;
  asynchronous(value: boolean): InstantiatorBuilder;
  asynchronousBind(expr: string): InstantiatorBuilder;
  delegate(value: QmlComponent): InstantiatorBuilder;
  delegateBind(expr: string): InstantiatorBuilder;
  delegateModelAccess(value: QmlEnumToken): InstantiatorBuilder;
  delegateModelAccessBind(expr: string): InstantiatorBuilder;
  model(value: QmlValue): InstantiatorBuilder;
  modelBind(expr: string): InstantiatorBuilder;
  objectName(value: string): InstantiatorBuilder;
  objectNameBind(expr: string): InstantiatorBuilder;
  onActiveChanged(body: string): InstantiatorBuilder;
  onAsynchronousChanged(body: string): InstantiatorBuilder;
  onCountChanged(body: string): InstantiatorBuilder;
  onDelegateChanged(body: string): InstantiatorBuilder;
  onDelegateModelAccessChanged(body: string): InstantiatorBuilder;
  onModelChanged(body: string): InstantiatorBuilder;
  onObjectAdded(body: string): InstantiatorBuilder;
  onObjectChanged(body: string): InstantiatorBuilder;
  onObjectNameChanged(body: string): InstantiatorBuilder;
  onObjectRemoved(body: string): InstantiatorBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): InstantiatorBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): InstantiatorBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): InstantiatorBuilder;
}

const INSTANTIATOR_META: TypeMetadata = {
  typeName: 'Instantiator',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'delegateModelAccess', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDelegateModelAccessChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectAdded', paramCount: 2 },
    { handlerName: 'onObjectChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onObjectRemoved', paramCount: 2 },
  ],
  grouped: [],
  attached: [
    {
      methodName: 'delegateModel',
      attachedTypeName: 'DelegateModel',
      properties: [
        { name: 'groups', hasValue: true, hasBinding: true },
        { name: 'inItems', hasValue: true, hasBinding: true },
        { name: 'inPersistedItems', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupsChanged', paramCount: 0 },
        { handlerName: 'onUnresolvedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'objectModel',
      attachedTypeName: 'ObjectModel',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'package',
      attachedTypeName: 'Package',
      properties: [
        { name: 'name', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
    },
  ],
  defaultProperty: 'delegate',
};

export function Instantiator(): InstantiatorBuilder {
  return createFluentBuilder('Instantiator', INSTANTIATOR_META) as unknown as InstantiatorBuilder;
}
