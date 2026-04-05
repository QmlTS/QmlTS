// AUTO-GENERATED — DO NOT EDIT
// Type: ValueFilter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface ValueFilterBuilder {
  id(id: string): ValueFilterBuilder;
  child(obj: QmlObjectBuilder): ValueFilterBuilder;

  column(value: number): ValueFilterBuilder;
  columnBind(expr: string): ValueFilterBuilder;
  enabled(value: boolean): ValueFilterBuilder;
  enabledBind(expr: string): ValueFilterBuilder;
  inverted(value: boolean): ValueFilterBuilder;
  invertedBind(expr: string): ValueFilterBuilder;
  objectName(value: string): ValueFilterBuilder;
  objectNameBind(expr: string): ValueFilterBuilder;
  roleName(value: string): ValueFilterBuilder;
  roleNameBind(expr: string): ValueFilterBuilder;
  value(value: QmlValue): ValueFilterBuilder;
  valueBind(expr: string): ValueFilterBuilder;
  onColumnChanged(body: string): ValueFilterBuilder;
  onEnabledChanged(body: string): ValueFilterBuilder;
  onInvalidateCache(body: string): ValueFilterBuilder;
  onInvalidateModel(body: string): ValueFilterBuilder;
  onInvertedChanged(body: string): ValueFilterBuilder;
  onObjectNameChanged(body: string): ValueFilterBuilder;
  onRoleNameChanged(body: string): ValueFilterBuilder;
  onValueChanged(body: string): ValueFilterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ValueFilterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ValueFilterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ValueFilterBuilder;
}

const VALUEFILTER_META: TypeMetadata = {
  typeName: 'ValueFilter',
  properties: [
    { name: 'column', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'inverted', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'roleName', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onInvalidateCache', paramCount: 1 },
    { handlerName: 'onInvalidateModel', paramCount: 0 },
    { handlerName: 'onInvertedChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRoleNameChanged', paramCount: 0 },
    { handlerName: 'onValueChanged', paramCount: 0 },
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

export function ValueFilter(): ValueFilterBuilder {
  return createFluentBuilder('ValueFilter', VALUEFILTER_META) as unknown as ValueFilterBuilder;
}
