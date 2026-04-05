// AUTO-GENERATED — DO NOT EDIT
// Type: RoleSorter
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface RoleSorterBuilder {
  id(id: string): RoleSorterBuilder;
  child(obj: QmlObjectBuilder): RoleSorterBuilder;

  column(value: number): RoleSorterBuilder;
  columnBind(expr: string): RoleSorterBuilder;
  enabled(value: boolean): RoleSorterBuilder;
  enabledBind(expr: string): RoleSorterBuilder;
  objectName(value: string): RoleSorterBuilder;
  objectNameBind(expr: string): RoleSorterBuilder;
  priority(value: number): RoleSorterBuilder;
  priorityBind(expr: string): RoleSorterBuilder;
  roleName(value: string): RoleSorterBuilder;
  roleNameBind(expr: string): RoleSorterBuilder;
  sortOrder(value: QmlEnumToken): RoleSorterBuilder;
  sortOrderBind(expr: string): RoleSorterBuilder;
  onColumnChanged(body: string): RoleSorterBuilder;
  onEnabledChanged(body: string): RoleSorterBuilder;
  onInvalidateCache(body: string): RoleSorterBuilder;
  onInvalidateModel(body: string): RoleSorterBuilder;
  onObjectNameChanged(body: string): RoleSorterBuilder;
  onPriorityChanged(body: string): RoleSorterBuilder;
  onRoleNameChanged(body: string): RoleSorterBuilder;
  onSortOrderChanged(body: string): RoleSorterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): RoleSorterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): RoleSorterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): RoleSorterBuilder;
}

const ROLESORTER_META: TypeMetadata = {
  typeName: 'RoleSorter',
  properties: [
    { name: 'column', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'priority', hasValue: true, hasBinding: true },
    { name: 'roleName', hasValue: true, hasBinding: true },
    { name: 'sortOrder', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onInvalidateCache', paramCount: 1 },
    { handlerName: 'onInvalidateModel', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPriorityChanged', paramCount: 0 },
    { handlerName: 'onRoleNameChanged', paramCount: 0 },
    { handlerName: 'onSortOrderChanged', paramCount: 0 },
  ],
  grouped: [
  ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      signals: [
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function RoleSorter(): RoleSorterBuilder {
  return createFluentBuilder('RoleSorter', ROLESORTER_META) as unknown as RoleSorterBuilder;
}
