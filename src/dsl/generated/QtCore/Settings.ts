// AUTO-GENERATED — DO NOT EDIT
// Type: Settings
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
export interface SettingsBuilder {
  id(id: string): SettingsBuilder;
  child(obj: QmlObjectBuilder): SettingsBuilder;

  category(value: string): SettingsBuilder;
  categoryBind(expr: string): SettingsBuilder;
  location(value: QmlUrl): SettingsBuilder;
  locationBind(expr: string): SettingsBuilder;
  objectName(value: string): SettingsBuilder;
  objectNameBind(expr: string): SettingsBuilder;
  onCategoryChanged(body: string): SettingsBuilder;
  onLocationChanged(body: string): SettingsBuilder;
  onObjectNameChanged(body: string): SettingsBuilder;
}

const SETTINGS_META: TypeMetadata = {
  typeName: 'Settings',
  properties: [
    { name: 'category', hasValue: true, hasBinding: true },
    { name: 'location', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCategoryChanged', paramCount: 1 },
    { handlerName: 'onLocationChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Settings(): SettingsBuilder {
  return createFluentBuilder('Settings', SETTINGS_META) as unknown as SettingsBuilder;
}
