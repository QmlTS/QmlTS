// AUTO-GENERATED — DO NOT EDIT
// Type: FunctionFilter
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface FunctionFilterBuilder {
  id(id: string): FunctionFilterBuilder;
  child(obj: QmlObjectBuilder): FunctionFilterBuilder;
  children(...objs: QmlObjectBuilder[]): FunctionFilterBuilder;

  column(value: number): FunctionFilterBuilder;
  columnBind(expr: string): FunctionFilterBuilder;
  enabled(value: boolean): FunctionFilterBuilder;
  enabledBind(expr: string): FunctionFilterBuilder;
  inverted(value: boolean): FunctionFilterBuilder;
  invertedBind(expr: string): FunctionFilterBuilder;
  objectName(value: string): FunctionFilterBuilder;
  objectNameBind(expr: string): FunctionFilterBuilder;
  onColumnChanged(handler: DslSignalHandlerValue): FunctionFilterBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FunctionFilterBuilder;
  onInvalidateCache(handler: DslSignalHandlerValue): FunctionFilterBuilder;
  onInvalidateModel(handler: DslSignalHandlerValue): FunctionFilterBuilder;
  onInvertedChanged(handler: DslSignalHandlerValue): FunctionFilterBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FunctionFilterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): FunctionFilterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): FunctionFilterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): FunctionFilterBuilder;
}

const FUNCTIONFILTER_META: TypeMetadata = {
  typeName: 'FunctionFilter',
  properties: [
    { name: 'column', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'inverted', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onInvalidateCache', paramCount: 1 },
    { handlerName: 'onInvalidateModel', paramCount: 0 },
    { handlerName: 'onInvertedChanged', paramCount: 0 },
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

export function FunctionFilter(): FunctionFilterBuilder {
  return createFluentBuilder(
    'FunctionFilter',
    FUNCTIONFILTER_META,
  ) as unknown as FunctionFilterBuilder;
}
