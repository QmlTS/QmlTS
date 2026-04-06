// AUTO-GENERATED — DO NOT EDIT
// Type: ThemeColor
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ThemeColorBuilder {
  id(id: string): ThemeColorBuilder;
  child(obj: QmlObjectBuilder): ThemeColorBuilder;
  children(...objs: QmlObjectBuilder[]): ThemeColorBuilder;

  color(value: QmlColor): ThemeColorBuilder;
  colorBind(expr: string): ThemeColorBuilder;
  objectName(value: string): ThemeColorBuilder;
  objectNameBind(expr: string): ThemeColorBuilder;
  onColorChanged(handler: DslSignalHandlerValue): ThemeColorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ThemeColorBuilder;
}

const THEMECOLOR_META: TypeMetadata = {
  typeName: 'ThemeColor',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ThemeColor(): ThemeColorBuilder {
  return createFluentBuilder('ThemeColor', THEMECOLOR_META) as unknown as ThemeColorBuilder;
}
