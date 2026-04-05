// AUTO-GENERATED — DO NOT EDIT
// Type: ListElement
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface ListElementBuilder {
  id(id: string): ListElementBuilder;
  child(obj: QmlObjectBuilder): ListElementBuilder;

  objectName(value: string): ListElementBuilder;
  objectNameBind(expr: string): ListElementBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ListElementBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ListElementBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ListElementBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ListElementBuilder;
}

export function ListElement(): ListElementBuilder {
  return new DslBuilderImpl('ListElement') as unknown as ListElementBuilder;
}
