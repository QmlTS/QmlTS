// AUTO-GENERATED — DO NOT EDIT
// Type: FunctionSorter
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface FunctionSorterBuilder {
  id(id: string): FunctionSorterBuilder;
  child(obj: QmlObjectBuilder): FunctionSorterBuilder;
  children(...objs: QmlObjectBuilder[]): FunctionSorterBuilder;

  column(value: number): FunctionSorterBuilder;
  columnBind(expr: string): FunctionSorterBuilder;
  enabled(value: boolean): FunctionSorterBuilder;
  enabledBind(expr: string): FunctionSorterBuilder;
  objectName(value: string): FunctionSorterBuilder;
  objectNameBind(expr: string): FunctionSorterBuilder;
  priority(value: number): FunctionSorterBuilder;
  priorityBind(expr: string): FunctionSorterBuilder;
  sortOrder(value: QmlEnumToken): FunctionSorterBuilder;
  sortOrderBind(expr: string): FunctionSorterBuilder;
  onColumnChanged(handler: DslSignalHandlerValue): FunctionSorterBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FunctionSorterBuilder;
  onInvalidateCache(handler: DslSignalHandlerValue): FunctionSorterBuilder;
  onInvalidateModel(handler: DslSignalHandlerValue): FunctionSorterBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FunctionSorterBuilder;
  onPriorityChanged(handler: DslSignalHandlerValue): FunctionSorterBuilder;
  onSortOrderChanged(handler: DslSignalHandlerValue): FunctionSorterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): FunctionSorterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): FunctionSorterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): FunctionSorterBuilder;
}

const FUNCTIONSORTER_META: TypeMetadata = {
  typeName: 'FunctionSorter',
  properties: [
    { name: 'column', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'priority', hasValue: true, hasBinding: true },
    { name: 'sortOrder', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onInvalidateCache', paramCount: 1 },
    { handlerName: 'onInvalidateModel', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPriorityChanged', paramCount: 0 },
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

export function FunctionSorter(): FunctionSorterBuilder {
  return createFluentBuilder(
    'FunctionSorter',
    FUNCTIONSORTER_META,
  ) as unknown as FunctionSorterBuilder;
}
