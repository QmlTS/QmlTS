// AUTO-GENERATED — DO NOT EDIT
// Type: Package
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface PackageBuilder {
  id(id: string): PackageBuilder;
  child(obj: QmlObjectBuilder): PackageBuilder;

  objectName(value: string): PackageBuilder;
  objectNameBind(expr: string): PackageBuilder;
  onObjectNameChanged(body: string): PackageBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): PackageBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): PackageBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): PackageBuilder;
}

const PACKAGE_META: TypeMetadata = {
  typeName: 'Package',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
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
  defaultProperty: 'data',
};

export function Package(): PackageBuilder {
  return createFluentBuilder('Package', PACKAGE_META) as unknown as PackageBuilder;
}
