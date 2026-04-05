// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateChooser
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface DelegateChooserBuilder {
  id(id: string): DelegateChooserBuilder;
  child(obj: QmlObjectBuilder): DelegateChooserBuilder;

  objectName(value: string): DelegateChooserBuilder;
  objectNameBind(expr: string): DelegateChooserBuilder;
  role(value: string): DelegateChooserBuilder;
  roleBind(expr: string): DelegateChooserBuilder;
  onDelegateChanged(body: string): DelegateChooserBuilder;
  onObjectNameChanged(body: string): DelegateChooserBuilder;
  onProgressChanged(body: string): DelegateChooserBuilder;
  onRoleChanged(body: string): DelegateChooserBuilder;
  onStatusChanged(body: string): DelegateChooserBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): DelegateChooserBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): DelegateChooserBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): DelegateChooserBuilder;
}

const DELEGATECHOOSER_META: TypeMetadata = {
  typeName: 'DelegateChooser',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'role', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onProgressChanged', paramCount: 1 },
    { handlerName: 'onRoleChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
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
  defaultProperty: 'choices',
};

export function DelegateChooser(): DelegateChooserBuilder {
  return createFluentBuilder('DelegateChooser', DELEGATECHOOSER_META) as unknown as DelegateChooserBuilder;
}

export namespace DelegateChooser {
  export namespace CompilationMode {
    export const PreferSynchronous = createEnumToken('DelegateChooser', 'CompilationMode', 'PreferSynchronous');
    export const Asynchronous = createEnumToken('DelegateChooser', 'CompilationMode', 'Asynchronous');
  }
  export namespace Status {
    export const Null = createEnumToken('DelegateChooser', 'Status', 'Null');
    export const Ready = createEnumToken('DelegateChooser', 'Status', 'Ready');
    export const Loading = createEnumToken('DelegateChooser', 'Status', 'Loading');
    export const Error = createEnumToken('DelegateChooser', 'Status', 'Error');
  }
}
