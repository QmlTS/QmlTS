// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateModelGroup
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface DelegateModelGroupBuilder {
  id(id: string): DelegateModelGroupBuilder;
  child(obj: QmlObjectBuilder): DelegateModelGroupBuilder;
  children(...objs: QmlObjectBuilder[]): DelegateModelGroupBuilder;

  includeByDefault(value: boolean): DelegateModelGroupBuilder;
  includeByDefaultBind(expr: string): DelegateModelGroupBuilder;
  name(value: string): DelegateModelGroupBuilder;
  nameBind(expr: string): DelegateModelGroupBuilder;
  objectName(value: string): DelegateModelGroupBuilder;
  objectNameBind(expr: string): DelegateModelGroupBuilder;
  onChanged(handler: DslSignalHandlerValue): DelegateModelGroupBuilder;
  onCountChanged(handler: DslSignalHandlerValue): DelegateModelGroupBuilder;
  onDefaultIncludeChanged(handler: DslSignalHandlerValue): DelegateModelGroupBuilder;
  onNameChanged(handler: DslSignalHandlerValue): DelegateModelGroupBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DelegateModelGroupBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): DelegateModelGroupBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): DelegateModelGroupBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): DelegateModelGroupBuilder;
}

const DELEGATEMODELGROUP_META: TypeMetadata = {
  typeName: 'DelegateModelGroup',
  properties: [
    { name: 'includeByDefault', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 2 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDefaultIncludeChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
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
};

export function DelegateModelGroup(): DelegateModelGroupBuilder {
  return createFluentBuilder(
    'DelegateModelGroup',
    DELEGATEMODELGROUP_META,
  ) as unknown as DelegateModelGroupBuilder;
}
