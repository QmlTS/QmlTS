// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateChoice
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface DelegateChoiceBuilder {
  id(id: string): DelegateChoiceBuilder;
  child(obj: QmlObjectBuilder): DelegateChoiceBuilder;
  children(...objs: QmlObjectBuilder[]): DelegateChoiceBuilder;

  column(value: number): DelegateChoiceBuilder;
  columnBind(expr: string): DelegateChoiceBuilder;
  delegate(value: QmlComponent): DelegateChoiceBuilder;
  delegateBind(expr: string): DelegateChoiceBuilder;
  index(value: number): DelegateChoiceBuilder;
  indexBind(expr: string): DelegateChoiceBuilder;
  objectName(value: string): DelegateChoiceBuilder;
  objectNameBind(expr: string): DelegateChoiceBuilder;
  roleValue(value: QmlValue): DelegateChoiceBuilder;
  roleValueBind(expr: string): DelegateChoiceBuilder;
  row(value: number): DelegateChoiceBuilder;
  rowBind(expr: string): DelegateChoiceBuilder;
  onChanged(handler: DslSignalHandlerValue): DelegateChoiceBuilder;
  onColumnChanged(handler: DslSignalHandlerValue): DelegateChoiceBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): DelegateChoiceBuilder;
  onIndexChanged(handler: DslSignalHandlerValue): DelegateChoiceBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DelegateChoiceBuilder;
  onRoleValueChanged(handler: DslSignalHandlerValue): DelegateChoiceBuilder;
  onRowChanged(handler: DslSignalHandlerValue): DelegateChoiceBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): DelegateChoiceBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): DelegateChoiceBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): DelegateChoiceBuilder;
}

const DELEGATECHOICE_META: TypeMetadata = {
  typeName: 'DelegateChoice',
  properties: [
    { name: 'column', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'index', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'roleValue', hasValue: true, hasBinding: true },
    { name: 'row', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onColumnChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onIndexChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRoleValueChanged', paramCount: 0 },
    { handlerName: 'onRowChanged', paramCount: 0 },
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

export function DelegateChoice(): DelegateChoiceBuilder {
  return createFluentBuilder(
    'DelegateChoice',
    DELEGATECHOICE_META,
  ) as unknown as DelegateChoiceBuilder;
}
