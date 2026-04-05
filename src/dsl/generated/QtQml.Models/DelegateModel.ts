// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateModel
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface DelegateModelBuilder {
  id(id: string): DelegateModelBuilder;
  child(obj: QmlObjectBuilder): DelegateModelBuilder;

  delegate(value: QmlComponent): DelegateModelBuilder;
  delegateBind(expr: string): DelegateModelBuilder;
  delegateModelAccess(value: QmlValue): DelegateModelBuilder;
  delegateModelAccessBind(expr: string): DelegateModelBuilder;
  filterOnGroup(value: string): DelegateModelBuilder;
  filterOnGroupBind(expr: string): DelegateModelBuilder;
  model(value: QmlValue): DelegateModelBuilder;
  modelBind(expr: string): DelegateModelBuilder;
  objectName(value: string): DelegateModelBuilder;
  objectNameBind(expr: string): DelegateModelBuilder;
  rootIndex(value: QmlValue): DelegateModelBuilder;
  rootIndexBind(expr: string): DelegateModelBuilder;
  onCountChanged(handler: () => void): DelegateModelBuilder;
  onCreatedItem(handler: (index: number, object: QtObjectBuilder) => void): DelegateModelBuilder;
  onDefaultGroupsChanged(handler: () => void): DelegateModelBuilder;
  onDelegateChanged(handler: () => void): DelegateModelBuilder;
  onDelegateModelAccessChanged(handler: () => void): DelegateModelBuilder;
  onDestroyingItem(handler: (object: QtObjectBuilder) => void): DelegateModelBuilder;
  onFilterGroupChanged(handler: () => void): DelegateModelBuilder;
  onInitItem(handler: (index: number, object: QtObjectBuilder) => void): DelegateModelBuilder;
  onItemPooled(handler: (index: number, object: QtObjectBuilder) => void): DelegateModelBuilder;
  onItemReused(handler: (index: number, object: QtObjectBuilder) => void): DelegateModelBuilder;
  onModelChanged(handler: () => void): DelegateModelBuilder;
  onModelUpdated(handler: (changeSet: QmlValue, reset: boolean) => void): DelegateModelBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DelegateModelBuilder;
  onRootIndexChanged(handler: () => void): DelegateModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): DelegateModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): DelegateModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): DelegateModelBuilder;
}

export function DelegateModel(): DelegateModelBuilder {
  return new DslBuilderImpl('DelegateModel') as unknown as DelegateModelBuilder;
}

export namespace DelegateModel {
  export namespace DelegateModelAccess {
    export const Qt5ReadWrite = createEnumToken(
      'DelegateModel',
      'DelegateModelAccess',
      'Qt5ReadWrite',
    );
    export const ReadOnly = createEnumToken('DelegateModel', 'DelegateModelAccess', 'ReadOnly');
    export const ReadWrite = createEnumToken('DelegateModel', 'DelegateModelAccess', 'ReadWrite');
  }
}
