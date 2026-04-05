// AUTO-GENERATED — DO NOT EDIT
// Type: FunctionFilter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface FunctionFilterBuilder {
  id(id: string): FunctionFilterBuilder;
  child(obj: QmlObjectBuilder): FunctionFilterBuilder;

  column(value: number): FunctionFilterBuilder;
  columnBind(expr: string): FunctionFilterBuilder;
  enabled(value: boolean): FunctionFilterBuilder;
  enabledBind(expr: string): FunctionFilterBuilder;
  inverted(value: boolean): FunctionFilterBuilder;
  invertedBind(expr: string): FunctionFilterBuilder;
  objectName(value: string): FunctionFilterBuilder;
  objectNameBind(expr: string): FunctionFilterBuilder;
  onColumnChanged(handler: () => void): FunctionFilterBuilder;
  onEnabledChanged(handler: () => void): FunctionFilterBuilder;
  onInvalidateCache(handler: (filter: QmlValue) => void): FunctionFilterBuilder;
  onInvalidateModel(handler: () => void): FunctionFilterBuilder;
  onInvertedChanged(handler: () => void): FunctionFilterBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FunctionFilterBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): FunctionFilterBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): FunctionFilterBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): FunctionFilterBuilder;
}

export function FunctionFilter(): FunctionFilterBuilder {
  return new DslBuilderImpl('FunctionFilter') as unknown as FunctionFilterBuilder;
}
