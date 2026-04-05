// AUTO-GENERATED — DO NOT EDIT
// Type: Instantiator
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface InstantiatorBuilder {
  id(id: string): InstantiatorBuilder;
  child(obj: QmlObjectBuilder): InstantiatorBuilder;

  active(value: boolean): InstantiatorBuilder;
  activeBind(expr: string): InstantiatorBuilder;
  asynchronous(value: boolean): InstantiatorBuilder;
  asynchronousBind(expr: string): InstantiatorBuilder;
  delegate(value: QmlComponent): InstantiatorBuilder;
  delegateBind(expr: string): InstantiatorBuilder;
  delegateModelAccess(value: QmlValue): InstantiatorBuilder;
  delegateModelAccessBind(expr: string): InstantiatorBuilder;
  model(value: QmlValue): InstantiatorBuilder;
  modelBind(expr: string): InstantiatorBuilder;
  objectName(value: string): InstantiatorBuilder;
  objectNameBind(expr: string): InstantiatorBuilder;
  onActiveChanged(handler: () => void): InstantiatorBuilder;
  onAsynchronousChanged(handler: () => void): InstantiatorBuilder;
  onCountChanged(handler: () => void): InstantiatorBuilder;
  onDelegateChanged(handler: () => void): InstantiatorBuilder;
  onDelegateModelAccessChanged(handler: () => void): InstantiatorBuilder;
  onModelChanged(handler: () => void): InstantiatorBuilder;
  onObjectAdded(handler: (index: number, object: QtObjectBuilder) => void): InstantiatorBuilder;
  onObjectChanged(handler: () => void): InstantiatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): InstantiatorBuilder;
  onObjectRemoved(handler: (index: number, object: QtObjectBuilder) => void): InstantiatorBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): InstantiatorBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): InstantiatorBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): InstantiatorBuilder;
}

export function Instantiator(): InstantiatorBuilder {
  return new DslBuilderImpl('Instantiator') as unknown as InstantiatorBuilder;
}
