// AUTO-GENERATED — DO NOT EDIT
// Type: ValueFilter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
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
  onColumnChanged(handler: () => void): ValueFilterBuilder;
  onEnabledChanged(handler: () => void): ValueFilterBuilder;
  onInvalidateCache(handler: (filter: QmlValue) => void): ValueFilterBuilder;
  onInvalidateModel(handler: () => void): ValueFilterBuilder;
  onInvertedChanged(handler: () => void): ValueFilterBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ValueFilterBuilder;
  onRoleNameChanged(handler: () => void): ValueFilterBuilder;
  onValueChanged(handler: () => void): ValueFilterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ValueFilterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ValueFilterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ValueFilterBuilder;
}

export function ValueFilter(): ValueFilterBuilder {
  return new DslBuilderImpl('ValueFilter') as unknown as ValueFilterBuilder;
}
