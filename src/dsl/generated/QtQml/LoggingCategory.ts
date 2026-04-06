// AUTO-GENERATED — DO NOT EDIT
// Type: LoggingCategory
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface LoggingCategoryBuilder {
  id(id: string): LoggingCategoryBuilder;
  child(obj: QmlObjectBuilder): LoggingCategoryBuilder;
  children(...objs: QmlObjectBuilder[]): LoggingCategoryBuilder;

  defaultLogLevel(value: QmlEnumToken): LoggingCategoryBuilder;
  defaultLogLevelBind(expr: string): LoggingCategoryBuilder;
  name(value: string): LoggingCategoryBuilder;
  nameBind(expr: string): LoggingCategoryBuilder;
  objectName(value: string): LoggingCategoryBuilder;
  objectNameBind(expr: string): LoggingCategoryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LoggingCategoryBuilder;
}

const LOGGINGCATEGORY_META: TypeMetadata = {
  typeName: 'LoggingCategory',
  properties: [
    { name: 'defaultLogLevel', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function LoggingCategory(): LoggingCategoryBuilder {
  return createFluentBuilder(
    'LoggingCategory',
    LOGGINGCATEGORY_META,
  ) as unknown as LoggingCategoryBuilder;
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
