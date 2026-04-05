// AUTO-GENERATED — DO NOT EDIT
// Type: CustomSeriesData
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface CustomSeriesDataBuilder {
  id(id: string): CustomSeriesDataBuilder;
  child(obj: QmlObjectBuilder): CustomSeriesDataBuilder;

  data(value: QmlValue): CustomSeriesDataBuilder;
  dataBind(expr: string): CustomSeriesDataBuilder;
  objectName(value: string): CustomSeriesDataBuilder;
  objectNameBind(expr: string): CustomSeriesDataBuilder;
  onObjectNameChanged(body: string): CustomSeriesDataBuilder;
}

const CUSTOMSERIESDATA_META: TypeMetadata = {
  typeName: 'CustomSeriesData',
  properties: [
    { name: 'data', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function CustomSeriesData(): CustomSeriesDataBuilder {
  return createFluentBuilder('CustomSeriesData', CUSTOMSERIESDATA_META) as unknown as CustomSeriesDataBuilder;
}
