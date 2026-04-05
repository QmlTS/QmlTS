// AUTO-GENERATED — DO NOT EDIT
// Type: LoggingCategory
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
export interface LoggingCategoryBuilder {
  id(id: string): LoggingCategoryBuilder;
  child(obj: QmlObjectBuilder): LoggingCategoryBuilder;

  defaultLogLevel(value: QmlValue): LoggingCategoryBuilder;
  defaultLogLevelBind(expr: string): LoggingCategoryBuilder;
  name(value: string): LoggingCategoryBuilder;
  nameBind(expr: string): LoggingCategoryBuilder;
  objectName(value: string): LoggingCategoryBuilder;
  objectNameBind(expr: string): LoggingCategoryBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): LoggingCategoryBuilder;
}

export function LoggingCategory(): LoggingCategoryBuilder {
  return new DslBuilderImpl('LoggingCategory') as unknown as LoggingCategoryBuilder;
}

export namespace LoggingCategory {
  export namespace DefaultLogLevel {
    export const Debug = createEnumToken('LoggingCategory', 'DefaultLogLevel', 'Debug');
    export const Info = createEnumToken('LoggingCategory', 'DefaultLogLevel', 'Info');
    export const Warning = createEnumToken('LoggingCategory', 'DefaultLogLevel', 'Warning');
    export const Critical = createEnumToken('LoggingCategory', 'DefaultLogLevel', 'Critical');
    export const Fatal = createEnumToken('LoggingCategory', 'DefaultLogLevel', 'Fatal');
  }
}
