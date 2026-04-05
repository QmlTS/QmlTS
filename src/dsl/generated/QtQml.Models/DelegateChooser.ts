// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateChooser
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface DelegateChooserBuilder {
  id(id: string): DelegateChooserBuilder;
  child(obj: QmlObjectBuilder): DelegateChooserBuilder;

  objectName(value: string): DelegateChooserBuilder;
  objectNameBind(expr: string): DelegateChooserBuilder;
  role(value: string): DelegateChooserBuilder;
  roleBind(expr: string): DelegateChooserBuilder;
  onDelegateChanged(handler: () => void): DelegateChooserBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DelegateChooserBuilder;
  onProgressChanged(handler: (arg0: number) => void): DelegateChooserBuilder;
  onRoleChanged(handler: () => void): DelegateChooserBuilder;
  onStatusChanged(handler: (arg0: QmlValue) => void): DelegateChooserBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): DelegateChooserBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): DelegateChooserBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): DelegateChooserBuilder;
}

export function DelegateChooser(): DelegateChooserBuilder {
  return new DslBuilderImpl('DelegateChooser') as unknown as DelegateChooserBuilder;
}

export namespace DelegateChooser {
  export namespace CompilationMode {
    export const PreferSynchronous = createEnumToken(
      'DelegateChooser',
      'CompilationMode',
      'PreferSynchronous',
    );
    export const Asynchronous = createEnumToken(
      'DelegateChooser',
      'CompilationMode',
      'Asynchronous',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('DelegateChooser', 'Status', 'Null');
    export const Ready = createEnumToken('DelegateChooser', 'Status', 'Ready');
    export const Loading = createEnumToken('DelegateChooser', 'Status', 'Loading');
    export const Error = createEnumToken('DelegateChooser', 'Status', 'Error');
  }
}
