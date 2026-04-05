// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateChoice
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface DelegateChoiceBuilder {
  id(id: string): DelegateChoiceBuilder;
  child(obj: QmlObjectBuilder): DelegateChoiceBuilder;

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
  onChanged(handler: () => void): DelegateChoiceBuilder;
  onColumnChanged(handler: () => void): DelegateChoiceBuilder;
  onDelegateChanged(handler: () => void): DelegateChoiceBuilder;
  onIndexChanged(handler: () => void): DelegateChoiceBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DelegateChoiceBuilder;
  onRoleValueChanged(handler: () => void): DelegateChoiceBuilder;
  onRowChanged(handler: () => void): DelegateChoiceBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): DelegateChoiceBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): DelegateChoiceBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): DelegateChoiceBuilder;
}

export function DelegateChoice(): DelegateChoiceBuilder {
  return new DslBuilderImpl('DelegateChoice') as unknown as DelegateChoiceBuilder;
}
