// AUTO-GENERATED — DO NOT EDIT
// Type: ObjectModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface ObjectModelBuilder {
  id(id: string): ObjectModelBuilder;
  child(obj: QmlObjectBuilder): ObjectModelBuilder;

  objectName(value: string): ObjectModelBuilder;
  objectNameBind(expr: string): ObjectModelBuilder;
  onChildrenChanged(body: string): ObjectModelBuilder;
  onCountChanged(body: string): ObjectModelBuilder;
  onCreatedItem(body: string): ObjectModelBuilder;
  onDestroyingItem(body: string): ObjectModelBuilder;
  onInitItem(body: string): ObjectModelBuilder;
  onItemPooled(body: string): ObjectModelBuilder;
  onItemReused(body: string): ObjectModelBuilder;
  onModelUpdated(body: string): ObjectModelBuilder;
  onObjectNameChanged(body: string): ObjectModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ObjectModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ObjectModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ObjectModelBuilder;
}

const OBJECTMODEL_META: TypeMetadata = {
  typeName: 'ObjectModel',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCreatedItem', paramCount: 2 },
    { handlerName: 'onDestroyingItem', paramCount: 1 },
    { handlerName: 'onInitItem', paramCount: 2 },
    { handlerName: 'onItemPooled', paramCount: 2 },
    { handlerName: 'onItemReused', paramCount: 2 },
    { handlerName: 'onModelUpdated', paramCount: 2 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
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
  defaultProperty: 'children',
};

export function ObjectModel(): ObjectModelBuilder {
  return createFluentBuilder('ObjectModel', OBJECTMODEL_META) as unknown as ObjectModelBuilder;
}
