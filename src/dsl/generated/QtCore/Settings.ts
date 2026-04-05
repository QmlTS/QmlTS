// AUTO-GENERATED — DO NOT EDIT
// Type: Settings
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
export interface SettingsBuilder {
  id(id: string): SettingsBuilder;
  child(obj: QmlObjectBuilder): SettingsBuilder;

  category(value: string): SettingsBuilder;
  categoryBind(expr: string): SettingsBuilder;
  location(value: QmlUrl): SettingsBuilder;
  locationBind(expr: string): SettingsBuilder;
  objectName(value: string): SettingsBuilder;
  objectNameBind(expr: string): SettingsBuilder;
  onCategoryChanged(handler: (arg: string) => void): SettingsBuilder;
  onLocationChanged(handler: (arg: QmlUrl) => void): SettingsBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SettingsBuilder;
}

export function Settings(): SettingsBuilder {
  return new DslBuilderImpl('Settings') as unknown as SettingsBuilder;
}
