// AUTO-GENERATED — DO NOT EDIT
// Type: Binding
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
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
  restoreMode(value: QmlValue): BindingBuilder;
  restoreModeBind(expr: string): BindingBuilder;
  target(value: QtObjectBuilder): BindingBuilder;
  targetBind(expr: string): BindingBuilder;
  value(value: QmlValue): BindingBuilder;
  valueBind(expr: string): BindingBuilder;
  when(value: boolean): BindingBuilder;
  whenBind(expr: string): BindingBuilder;
  onDelayedChanged(handler: () => void): BindingBuilder;
  onObjectChanged(handler: () => void): BindingBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): BindingBuilder;
  onPropertyChanged(handler: () => void): BindingBuilder;
  onRestoreModeChanged(handler: () => void): BindingBuilder;
  onValueChanged(handler: () => void): BindingBuilder;
  onWhenChanged(handler: () => void): BindingBuilder;
}

export function Binding(): BindingBuilder {
  return new DslBuilderImpl('Binding') as unknown as BindingBuilder;
}

export namespace Binding {
  export namespace RestorationMode {
    export const RestoreNone = createEnumToken('Binding', 'RestorationMode', 'RestoreNone');
    export const RestoreBinding = createEnumToken('Binding', 'RestorationMode', 'RestoreBinding');
    export const RestoreValue = createEnumToken('Binding', 'RestorationMode', 'RestoreValue');
    export const RestoreBindingOrValue = createEnumToken(
      'Binding',
      'RestorationMode',
      'RestoreBindingOrValue',
    );
  }
}
