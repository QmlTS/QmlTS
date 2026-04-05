// AUTO-GENERATED — DO NOT EDIT
// Type: StringSorter
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface StringSorterBuilder {
  id(id: string): StringSorterBuilder;
  child(obj: QmlObjectBuilder): StringSorterBuilder;

  caseSensitivity(value: QmlEnumToken): StringSorterBuilder;
  caseSensitivityBind(expr: string): StringSorterBuilder;
  column(value: number): StringSorterBuilder;
  columnBind(expr: string): StringSorterBuilder;
  enabled(value: boolean): StringSorterBuilder;
  enabledBind(expr: string): StringSorterBuilder;
  ignorePunctuation(value: boolean): StringSorterBuilder;
  ignorePunctuationBind(expr: string): StringSorterBuilder;
  locale(value: string): StringSorterBuilder;
  localeBind(expr: string): StringSorterBuilder;
  numericMode(value: boolean): StringSorterBuilder;
  numericModeBind(expr: string): StringSorterBuilder;
  objectName(value: string): StringSorterBuilder;
  objectNameBind(expr: string): StringSorterBuilder;
  priority(value: number): StringSorterBuilder;
  priorityBind(expr: string): StringSorterBuilder;
  roleName(value: string): StringSorterBuilder;
  roleNameBind(expr: string): StringSorterBuilder;
  sortOrder(value: QmlEnumToken): StringSorterBuilder;
  sortOrderBind(expr: string): StringSorterBuilder;
  onCaseSensitivityChanged(body: string): StringSorterBuilder;
  onColumnChanged(body: string): StringSorterBuilder;
  onEnabledChanged(body: string): StringSorterBuilder;
  onIgnorePunctuationChanged(body: string): StringSorterBuilder;
  onInvalidateCache(body: string): StringSorterBuilder;
  onInvalidateModel(body: string): StringSorterBuilder;
  onLocaleChanged(body: string): StringSorterBuilder;
  onNumericModeChanged(body: string): StringSorterBuilder;
  onObjectNameChanged(body: string): StringSorterBuilder;
  onPriorityChanged(body: string): StringSorterBuilder;
  onRoleNameChanged(body: string): StringSorterBuilder;
  onSortOrderChanged(body: string): StringSorterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): StringSorterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): StringSorterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): StringSorterBuilder;
}

const STRINGSORTER_META: TypeMetadata = {
  typeName: 'StringSorter',
  properties: [
    { name: 'caseSensitivity', hasValue: true, hasBinding: true },
    { name: 'column', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'ignorePunctuation', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'numericMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'priority', hasValue: true, hasBinding: true },
    { name: 'roleName', hasValue: true, hasBinding: true },
    { name: 'sortOrder', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCaseSensitivityChanged', paramCount: 0 },
    { handlerName: 'onColumnChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onIgnorePunctuationChanged', paramCount: 0 },
    { handlerName: 'onInvalidateCache', paramCount: 1 },
    { handlerName: 'onInvalidateModel', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onNumericModeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPriorityChanged', paramCount: 0 },
    { handlerName: 'onRoleNameChanged', paramCount: 0 },
    { handlerName: 'onSortOrderChanged', paramCount: 0 },
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

export function StringSorter(): StringSorterBuilder {
  return createFluentBuilder('StringSorter', STRINGSORTER_META) as unknown as StringSorterBuilder;
}
