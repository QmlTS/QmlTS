// AUTO-GENERATED — DO NOT EDIT
// Type: GeoJsonData
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface GeoJsonDataBuilder {
  id(id: string): GeoJsonDataBuilder;
  child(obj: QmlObjectBuilder): GeoJsonDataBuilder;

  model(value: QmlValue): GeoJsonDataBuilder;
  modelBind(expr: string): GeoJsonDataBuilder;
  objectName(value: string): GeoJsonDataBuilder;
  objectNameBind(expr: string): GeoJsonDataBuilder;
  sourceUrl(value: QmlUrl): GeoJsonDataBuilder;
  sourceUrlBind(expr: string): GeoJsonDataBuilder;
  onModelChanged(body: string): GeoJsonDataBuilder;
  onObjectNameChanged(body: string): GeoJsonDataBuilder;
  onSourceUrlChanged(body: string): GeoJsonDataBuilder;
}

const GEOJSONDATA_META: TypeMetadata = {
  typeName: 'GeoJsonData',
  properties: [
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'sourceUrl', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSourceUrlChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function GeoJsonData(): GeoJsonDataBuilder {
  return createFluentBuilder('GeoJsonData', GEOJSONDATA_META) as unknown as GeoJsonDataBuilder;
}
