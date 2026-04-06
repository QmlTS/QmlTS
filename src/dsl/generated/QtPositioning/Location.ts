// AUTO-GENERATED — DO NOT EDIT
// Type: Location
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { AddressBuilder } from './Address.js';
export interface LocationBuilder {
  id(id: string): LocationBuilder;
  child(obj: QmlObjectBuilder): LocationBuilder;
  children(...objs: QmlObjectBuilder[]): LocationBuilder;

  address(value: AddressBuilder): LocationBuilder;
  addressBind(expr: string): LocationBuilder;
  boundingShape(value: QmlValue): LocationBuilder;
  boundingShapeBind(expr: string): LocationBuilder;
  coordinate(value: QmlValue): LocationBuilder;
  coordinateBind(expr: string): LocationBuilder;
  extendedAttributes(value: QmlValue): LocationBuilder;
  extendedAttributesBind(expr: string): LocationBuilder;
  location(value: QmlValue): LocationBuilder;
  locationBind(expr: string): LocationBuilder;
  objectName(value: string): LocationBuilder;
  objectNameBind(expr: string): LocationBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LocationBuilder;
}

const LOCATION_META: TypeMetadata = {
  typeName: 'Location',
  properties: [
    { name: 'address', hasValue: true, hasBinding: true },
    { name: 'boundingShape', hasValue: true, hasBinding: true },
    { name: 'coordinate', hasValue: true, hasBinding: true },
    { name: 'extendedAttributes', hasValue: true, hasBinding: true },
    { name: 'location', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function Location(): LocationBuilder {
  return createFluentBuilder('Location', LOCATION_META) as unknown as LocationBuilder;
}
