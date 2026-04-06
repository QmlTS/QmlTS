// AUTO-GENERATED — DO NOT EDIT
// Type: Address
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface AddressBuilder {
  id(id: string): AddressBuilder;
  child(obj: QmlObjectBuilder): AddressBuilder;
  children(...objs: QmlObjectBuilder[]): AddressBuilder;

  address(value: QmlValue): AddressBuilder;
  addressBind(expr: string): AddressBuilder;
  city(value: string): AddressBuilder;
  cityBind(expr: string): AddressBuilder;
  country(value: string): AddressBuilder;
  countryBind(expr: string): AddressBuilder;
  countryCode(value: string): AddressBuilder;
  countryCodeBind(expr: string): AddressBuilder;
  county(value: string): AddressBuilder;
  countyBind(expr: string): AddressBuilder;
  district(value: string): AddressBuilder;
  districtBind(expr: string): AddressBuilder;
  objectName(value: string): AddressBuilder;
  objectNameBind(expr: string): AddressBuilder;
  postalCode(value: string): AddressBuilder;
  postalCodeBind(expr: string): AddressBuilder;
  state(value: string): AddressBuilder;
  stateBind(expr: string): AddressBuilder;
  street(value: string): AddressBuilder;
  streetBind(expr: string): AddressBuilder;
  streetNumber(value: string): AddressBuilder;
  streetNumberBind(expr: string): AddressBuilder;
  text(value: string): AddressBuilder;
  textBind(expr: string): AddressBuilder;
  onCityChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onCountryChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onCountryCodeChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onCountyChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onDistrictChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onIsTextGeneratedChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onPostalCodeChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onStateChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onStreetChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onStreetNumberChanged(handler: DslSignalHandlerValue): AddressBuilder;
  onTextChanged(handler: DslSignalHandlerValue): AddressBuilder;
}

const ADDRESS_META: TypeMetadata = {
  typeName: 'Address',
  properties: [
    { name: 'address', hasValue: true, hasBinding: true },
    { name: 'city', hasValue: true, hasBinding: true },
    { name: 'country', hasValue: true, hasBinding: true },
    { name: 'countryCode', hasValue: true, hasBinding: true },
    { name: 'county', hasValue: true, hasBinding: true },
    { name: 'district', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'postalCode', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'street', hasValue: true, hasBinding: true },
    { name: 'streetNumber', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCityChanged', paramCount: 0 },
    { handlerName: 'onCountryChanged', paramCount: 0 },
    { handlerName: 'onCountryCodeChanged', paramCount: 0 },
    { handlerName: 'onCountyChanged', paramCount: 0 },
    { handlerName: 'onDistrictChanged', paramCount: 0 },
    { handlerName: 'onIsTextGeneratedChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPostalCodeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStreetChanged', paramCount: 0 },
    { handlerName: 'onStreetNumberChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Address(): AddressBuilder {
  return createFluentBuilder('Address', ADDRESS_META) as unknown as AddressBuilder;
}
