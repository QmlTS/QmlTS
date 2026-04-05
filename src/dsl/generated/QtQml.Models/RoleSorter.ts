// AUTO-GENERATED — DO NOT EDIT
// Type: RoleSorter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
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
  sortOrder(value: QmlValue): RoleSorterBuilder;
  sortOrderBind(expr: string): RoleSorterBuilder;
  onColumnChanged(handler: () => void): RoleSorterBuilder;
  onEnabledChanged(handler: () => void): RoleSorterBuilder;
  onInvalidateCache(handler: (filter: QmlValue) => void): RoleSorterBuilder;
  onInvalidateModel(handler: () => void): RoleSorterBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RoleSorterBuilder;
  onPriorityChanged(handler: () => void): RoleSorterBuilder;
  onRoleNameChanged(handler: () => void): RoleSorterBuilder;
  onSortOrderChanged(handler: () => void): RoleSorterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): RoleSorterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): RoleSorterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): RoleSorterBuilder;
}

export function RoleSorter(): RoleSorterBuilder {
  return new DslBuilderImpl('RoleSorter') as unknown as RoleSorterBuilder;
}
