// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateModel
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface DelegateModelBuilder {
  id(id: string): DelegateModelBuilder;
  child(obj: QmlObjectBuilder): DelegateModelBuilder;

  delegate(value: QmlComponent): DelegateModelBuilder;
  delegateBind(expr: string): DelegateModelBuilder;
  delegateModelAccess(value: QmlEnumToken): DelegateModelBuilder;
  delegateModelAccessBind(expr: string): DelegateModelBuilder;
  filterOnGroup(value: string): DelegateModelBuilder;
  filterOnGroupBind(expr: string): DelegateModelBuilder;
  model(value: QmlValue): DelegateModelBuilder;
  modelBind(expr: string): DelegateModelBuilder;
  objectName(value: string): DelegateModelBuilder;
  objectNameBind(expr: string): DelegateModelBuilder;
  rootIndex(value: QmlValue): DelegateModelBuilder;
  rootIndexBind(expr: string): DelegateModelBuilder;
  onCountChanged(body: string): DelegateModelBuilder;
  onCreatedItem(body: string): DelegateModelBuilder;
  onDefaultGroupsChanged(body: string): DelegateModelBuilder;
  onDelegateChanged(body: string): DelegateModelBuilder;
  onDelegateModelAccessChanged(body: string): DelegateModelBuilder;
  onDestroyingItem(body: string): DelegateModelBuilder;
  onFilterGroupChanged(body: string): DelegateModelBuilder;
  onInitItem(body: string): DelegateModelBuilder;
  onItemPooled(body: string): DelegateModelBuilder;
  onItemReused(body: string): DelegateModelBuilder;
  onModelChanged(body: string): DelegateModelBuilder;
  onModelUpdated(body: string): DelegateModelBuilder;
  onObjectNameChanged(body: string): DelegateModelBuilder;
  onRootIndexChanged(body: string): DelegateModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): DelegateModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): DelegateModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): DelegateModelBuilder;
}

const DELEGATEMODEL_META: TypeMetadata = {
  typeName: 'DelegateModel',
  properties: [
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'delegateModelAccess', hasValue: true, hasBinding: true },
    { name: 'filterOnGroup', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rootIndex', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCreatedItem', paramCount: 2 },
    { handlerName: 'onDefaultGroupsChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDelegateModelAccessChanged', paramCount: 0 },
    { handlerName: 'onDestroyingItem', paramCount: 1 },
    { handlerName: 'onFilterGroupChanged', paramCount: 0 },
    { handlerName: 'onInitItem', paramCount: 2 },
    { handlerName: 'onItemPooled', paramCount: 2 },
    { handlerName: 'onItemReused', paramCount: 2 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onModelUpdated', paramCount: 2 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRootIndexChanged', paramCount: 0 },
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

export function DelegateModel(): DelegateModelBuilder {
  return createFluentBuilder(
    'DelegateModel',
    DELEGATEMODEL_META,
  ) as unknown as DelegateModelBuilder;
}

export namespace DelegateModel {
  export namespace DelegateModelAccess {
    export const Qt5ReadWrite = createEnumToken(
      'DelegateModel',
      'DelegateModelAccess',
      'Qt5ReadWrite',
    );
    export const ReadOnly = createEnumToken('DelegateModel', 'DelegateModelAccess', 'ReadOnly');
    export const ReadWrite = createEnumToken('DelegateModel', 'DelegateModelAccess', 'ReadWrite');
  }
}
