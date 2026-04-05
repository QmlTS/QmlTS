// AUTO-GENERATED — DO NOT EDIT
// Type: StringSorter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface StringSorterBuilder {
  id(id: string): StringSorterBuilder;
  child(obj: QmlObjectBuilder): StringSorterBuilder;

  caseSensitivity(value: QmlValue): StringSorterBuilder;
  caseSensitivityBind(expr: string): StringSorterBuilder;
  column(value: number): StringSorterBuilder;
  columnBind(expr: string): StringSorterBuilder;
  enabled(value: boolean): StringSorterBuilder;
  enabledBind(expr: string): StringSorterBuilder;
  ignorePunctuation(value: boolean): StringSorterBuilder;
  ignorePunctuationBind(expr: string): StringSorterBuilder;
  locale(value: QmlValue): StringSorterBuilder;
  localeBind(expr: string): StringSorterBuilder;
  numericMode(value: boolean): StringSorterBuilder;
  numericModeBind(expr: string): StringSorterBuilder;
  objectName(value: string): StringSorterBuilder;
  objectNameBind(expr: string): StringSorterBuilder;
  priority(value: number): StringSorterBuilder;
  priorityBind(expr: string): StringSorterBuilder;
  roleName(value: string): StringSorterBuilder;
  roleNameBind(expr: string): StringSorterBuilder;
  sortOrder(value: QmlValue): StringSorterBuilder;
  sortOrderBind(expr: string): StringSorterBuilder;
  onCaseSensitivityChanged(handler: () => void): StringSorterBuilder;
  onColumnChanged(handler: () => void): StringSorterBuilder;
  onEnabledChanged(handler: () => void): StringSorterBuilder;
  onIgnorePunctuationChanged(handler: () => void): StringSorterBuilder;
  onInvalidateCache(handler: (filter: QmlValue) => void): StringSorterBuilder;
  onInvalidateModel(handler: () => void): StringSorterBuilder;
  onLocaleChanged(handler: () => void): StringSorterBuilder;
  onNumericModeChanged(handler: () => void): StringSorterBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): StringSorterBuilder;
  onPriorityChanged(handler: () => void): StringSorterBuilder;
  onRoleNameChanged(handler: () => void): StringSorterBuilder;
  onSortOrderChanged(handler: () => void): StringSorterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): StringSorterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): StringSorterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): StringSorterBuilder;
}

export function StringSorter(): StringSorterBuilder {
  return new DslBuilderImpl('StringSorter') as unknown as StringSorterBuilder;
}
