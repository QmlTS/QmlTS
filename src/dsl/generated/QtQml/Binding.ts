// AUTO-GENERATED — DO NOT EDIT
// Type: Binding
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface BindingBuilder {
  id(id: string): BindingBuilder;
  child(obj: QmlObjectBuilder): BindingBuilder;

  delayed(value: boolean): BindingBuilder;
  delayedBind(expr: string): BindingBuilder;
  objectName(value: string): BindingBuilder;
  objectNameBind(expr: string): BindingBuilder;
  property(value: string): BindingBuilder;
  propertyBind(expr: string): BindingBuilder;
  restoreMode(value: QmlEnumToken): BindingBuilder;
  restoreModeBind(expr: string): BindingBuilder;
  target(value: QtObjectBuilder): BindingBuilder;
  targetBind(expr: string): BindingBuilder;
  value(value: QmlValue): BindingBuilder;
  valueBind(expr: string): BindingBuilder;
  when(value: boolean): BindingBuilder;
  whenBind(expr: string): BindingBuilder;
  onDelayedChanged(body: string): BindingBuilder;
  onObjectChanged(body: string): BindingBuilder;
  onObjectNameChanged(body: string): BindingBuilder;
  onPropertyChanged(body: string): BindingBuilder;
  onRestoreModeChanged(body: string): BindingBuilder;
  onValueChanged(body: string): BindingBuilder;
  onWhenChanged(body: string): BindingBuilder;
}

const BINDING_META: TypeMetadata = {
  typeName: 'Binding',
  properties: [
    { name: 'delayed', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'property', hasValue: true, hasBinding: true },
    { name: 'restoreMode', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
    { name: 'when', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDelayedChanged', paramCount: 0 },
    { handlerName: 'onObjectChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPropertyChanged', paramCount: 0 },
    { handlerName: 'onRestoreModeChanged', paramCount: 0 },
    { handlerName: 'onValueChanged', paramCount: 0 },
    { handlerName: 'onWhenChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Binding(): BindingBuilder {
  return createFluentBuilder('Binding', BINDING_META) as unknown as BindingBuilder;
}

export namespace Binding {
  export namespace RestorationMode {
    export const RestoreNone = createEnumToken('Binding', 'RestorationMode', 'RestoreNone');
    export const RestoreBinding = createEnumToken('Binding', 'RestorationMode', 'RestoreBinding');
    export const RestoreValue = createEnumToken('Binding', 'RestorationMode', 'RestoreValue');
    export const RestoreBindingOrValue = createEnumToken('Binding', 'RestorationMode', 'RestoreBindingOrValue');
  }
}
