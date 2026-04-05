// AUTO-GENERATED — DO NOT EDIT
// Type: ObjectModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface ObjectModelBuilder {
  id(id: string): ObjectModelBuilder;
  child(obj: QmlObjectBuilder): ObjectModelBuilder;

  objectName(value: string): ObjectModelBuilder;
  objectNameBind(expr: string): ObjectModelBuilder;
  onChildrenChanged(handler: () => void): ObjectModelBuilder;
  onCountChanged(handler: () => void): ObjectModelBuilder;
  onCreatedItem(handler: (index: number, object: QtObjectBuilder) => void): ObjectModelBuilder;
  onDestroyingItem(handler: (object: QtObjectBuilder) => void): ObjectModelBuilder;
  onInitItem(handler: (index: number, object: QtObjectBuilder) => void): ObjectModelBuilder;
  onItemPooled(handler: (index: number, object: QtObjectBuilder) => void): ObjectModelBuilder;
  onItemReused(handler: (index: number, object: QtObjectBuilder) => void): ObjectModelBuilder;
  onModelUpdated(handler: (changeSet: QmlValue, reset: boolean) => void): ObjectModelBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ObjectModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ObjectModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ObjectModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ObjectModelBuilder;
}

export function ObjectModel(): ObjectModelBuilder {
  return new DslBuilderImpl('ObjectModel') as unknown as ObjectModelBuilder;
}
