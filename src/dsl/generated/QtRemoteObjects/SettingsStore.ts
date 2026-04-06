// AUTO-GENERATED — DO NOT EDIT
// Type: SettingsStore
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface SettingsStoreBuilder {
  id(id: string): SettingsStoreBuilder;
  child(obj: QmlObjectBuilder): SettingsStoreBuilder;
  children(...objs: QmlObjectBuilder[]): SettingsStoreBuilder;

  objectName(value: string): SettingsStoreBuilder;
  objectNameBind(expr: string): SettingsStoreBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SettingsStoreBuilder;
}

const SETTINGSSTORE_META: TypeMetadata = {
  typeName: 'SettingsStore',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function SettingsStore(): SettingsStoreBuilder {
  return createFluentBuilder(
    'SettingsStore',
    SETTINGSSTORE_META,
  ) as unknown as SettingsStoreBuilder;
}
