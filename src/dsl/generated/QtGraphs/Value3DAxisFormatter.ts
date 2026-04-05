// AUTO-GENERATED — DO NOT EDIT
// Type: Value3DAxisFormatter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface Value3DAxisFormatterBuilder {
  id(id: string): Value3DAxisFormatterBuilder;
  child(obj: QmlObjectBuilder): Value3DAxisFormatterBuilder;

  objectName(value: string): Value3DAxisFormatterBuilder;
  objectNameBind(expr: string): Value3DAxisFormatterBuilder;
  onObjectNameChanged(body: string): Value3DAxisFormatterBuilder;
}

const VALUE3DAXISFORMATTER_META: TypeMetadata = {
  typeName: 'Value3DAxisFormatter',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function Value3DAxisFormatter(): Value3DAxisFormatterBuilder {
  return createFluentBuilder(
    'Value3DAxisFormatter',
    VALUE3DAXISFORMATTER_META,
  ) as unknown as Value3DAxisFormatterBuilder;
}
