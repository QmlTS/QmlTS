// AUTO-GENERATED — DO NOT EDIT
// Type: Package
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface PackageBuilder {
  id(id: string): PackageBuilder;
  child(obj: QmlObjectBuilder): PackageBuilder;

  objectName(value: string): PackageBuilder;
  objectNameBind(expr: string): PackageBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PackageBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): PackageBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): PackageBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): PackageBuilder;
}

export function Package(): PackageBuilder {
  return new DslBuilderImpl('Package') as unknown as PackageBuilder;
}
