// AUTO-GENERATED — DO NOT EDIT
// Type: Color
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ColorBuilder {
  id(id: string): ColorBuilder;
  child(obj: QmlObjectBuilder): ColorBuilder;

  color(value: QmlColor): ColorBuilder;
  colorBind(expr: string): ColorBuilder;
  objectName(value: string): ColorBuilder;
  objectNameBind(expr: string): ColorBuilder;
  onColorChanged(body: string): ColorBuilder;
  onObjectNameChanged(body: string): ColorBuilder;
}

const COLOR_META: TypeMetadata = {
  typeName: 'Color',
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

export function Color(): ColorBuilder {
  return createFluentBuilder('Color', COLOR_META) as unknown as ColorBuilder;
}
