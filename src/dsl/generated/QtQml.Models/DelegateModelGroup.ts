// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateModelGroup
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface DelegateModelGroupBuilder {
  id(id: string): DelegateModelGroupBuilder;
  child(obj: QmlObjectBuilder): DelegateModelGroupBuilder;

  includeByDefault(value: boolean): DelegateModelGroupBuilder;
  includeByDefaultBind(expr: string): DelegateModelGroupBuilder;
  name(value: string): DelegateModelGroupBuilder;
  nameBind(expr: string): DelegateModelGroupBuilder;
  objectName(value: string): DelegateModelGroupBuilder;
  objectNameBind(expr: string): DelegateModelGroupBuilder;
  onChanged(handler: (removed: QmlValue, inserted: QmlValue) => void): DelegateModelGroupBuilder;
  onCountChanged(handler: () => void): DelegateModelGroupBuilder;
  onDefaultIncludeChanged(handler: () => void): DelegateModelGroupBuilder;
  onNameChanged(handler: () => void): DelegateModelGroupBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DelegateModelGroupBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): DelegateModelGroupBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): DelegateModelGroupBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): DelegateModelGroupBuilder;
}

export function DelegateModelGroup(): DelegateModelGroupBuilder {
  return new DslBuilderImpl('DelegateModelGroup') as unknown as DelegateModelGroupBuilder;
}
