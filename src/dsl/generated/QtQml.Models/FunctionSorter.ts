// AUTO-GENERATED — DO NOT EDIT
// Type: FunctionSorter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface FunctionSorterBuilder {
  id(id: string): FunctionSorterBuilder;
  child(obj: QmlObjectBuilder): FunctionSorterBuilder;

  column(value: number): FunctionSorterBuilder;
  columnBind(expr: string): FunctionSorterBuilder;
  enabled(value: boolean): FunctionSorterBuilder;
  enabledBind(expr: string): FunctionSorterBuilder;
  objectName(value: string): FunctionSorterBuilder;
  objectNameBind(expr: string): FunctionSorterBuilder;
  priority(value: number): FunctionSorterBuilder;
  priorityBind(expr: string): FunctionSorterBuilder;
  sortOrder(value: QmlValue): FunctionSorterBuilder;
  sortOrderBind(expr: string): FunctionSorterBuilder;
  onColumnChanged(handler: () => void): FunctionSorterBuilder;
  onEnabledChanged(handler: () => void): FunctionSorterBuilder;
  onInvalidateCache(handler: (filter: QmlValue) => void): FunctionSorterBuilder;
  onInvalidateModel(handler: () => void): FunctionSorterBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FunctionSorterBuilder;
  onPriorityChanged(handler: () => void): FunctionSorterBuilder;
  onSortOrderChanged(handler: () => void): FunctionSorterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): FunctionSorterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): FunctionSorterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): FunctionSorterBuilder;
}

export function FunctionSorter(): FunctionSorterBuilder {
  return new DslBuilderImpl('FunctionSorter') as unknown as FunctionSorterBuilder;
}
