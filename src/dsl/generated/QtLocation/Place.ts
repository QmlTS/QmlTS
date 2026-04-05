// AUTO-GENERATED — DO NOT EDIT
// Type: Place
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { LocationBuilder } from '../QtPositioning/Location.js';
import type { PluginBuilder } from './Plugin.js';
export interface PlaceBuilder {
  id(id: string): PlaceBuilder;
  child(obj: QmlObjectBuilder): PlaceBuilder;

  attribution(value: string): PlaceBuilder;
  attributionBind(expr: string): PlaceBuilder;
  favorite(value: PlaceBuilder): PlaceBuilder;
  favoriteBind(expr: string): PlaceBuilder;
  icon(value: QmlValue): PlaceBuilder;
  iconBind(expr: string): PlaceBuilder;
  location(value: LocationBuilder): PlaceBuilder;
  locationBind(expr: string): PlaceBuilder;
  name(value: string): PlaceBuilder;
  nameBind(expr: string): PlaceBuilder;
  objectName(value: string): PlaceBuilder;
  objectNameBind(expr: string): PlaceBuilder;
  place(value: QmlValue): PlaceBuilder;
  placeBind(expr: string): PlaceBuilder;
  placeId(value: string): PlaceBuilder;
  placeIdBind(expr: string): PlaceBuilder;
  plugin(value: PluginBuilder): PlaceBuilder;
  pluginBind(expr: string): PlaceBuilder;
  ratings(value: QmlValue): PlaceBuilder;
  ratingsBind(expr: string): PlaceBuilder;
  supplier(value: QmlValue): PlaceBuilder;
  supplierBind(expr: string): PlaceBuilder;
  visibility(value: QmlEnumToken): PlaceBuilder;
  visibilityBind(expr: string): PlaceBuilder;
  onAttributionChanged(body: string): PlaceBuilder;
  onCategoriesChanged(body: string): PlaceBuilder;
  onContactDetailsChanged(body: string): PlaceBuilder;
  onDetailsFetchedChanged(body: string): PlaceBuilder;
  onEditorialModelChanged(body: string): PlaceBuilder;
  onExtendedAttributesChanged(body: string): PlaceBuilder;
  onFavoriteChanged(body: string): PlaceBuilder;
  onIconChanged(body: string): PlaceBuilder;
  onImageModelChanged(body: string): PlaceBuilder;
  onLocationChanged(body: string): PlaceBuilder;
  onNameChanged(body: string): PlaceBuilder;
  onObjectNameChanged(body: string): PlaceBuilder;
  onPlaceIdChanged(body: string): PlaceBuilder;
  onPluginChanged(body: string): PlaceBuilder;
  onPrimaryEmailChanged(body: string): PlaceBuilder;
  onPrimaryFaxChanged(body: string): PlaceBuilder;
  onPrimaryPhoneChanged(body: string): PlaceBuilder;
  onPrimaryWebsiteChanged(body: string): PlaceBuilder;
  onRatingsChanged(body: string): PlaceBuilder;
  onReviewModelChanged(body: string): PlaceBuilder;
  onStatusChanged(body: string): PlaceBuilder;
  onSupplierChanged(body: string): PlaceBuilder;
  onVisibilityChanged(body: string): PlaceBuilder;
}

const PLACE_META: TypeMetadata = {
  typeName: 'Place',
  properties: [
    { name: 'attribution', hasValue: true, hasBinding: true },
    { name: 'favorite', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'location', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'place', hasValue: true, hasBinding: true },
    { name: 'placeId', hasValue: true, hasBinding: true },
    { name: 'plugin', hasValue: true, hasBinding: true },
    { name: 'ratings', hasValue: true, hasBinding: true },
    { name: 'supplier', hasValue: true, hasBinding: true },
    { name: 'visibility', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAttributionChanged', paramCount: 0 },
    { handlerName: 'onCategoriesChanged', paramCount: 0 },
    { handlerName: 'onContactDetailsChanged', paramCount: 0 },
    { handlerName: 'onDetailsFetchedChanged', paramCount: 0 },
    { handlerName: 'onEditorialModelChanged', paramCount: 0 },
    { handlerName: 'onExtendedAttributesChanged', paramCount: 0 },
    { handlerName: 'onFavoriteChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onImageModelChanged', paramCount: 0 },
    { handlerName: 'onLocationChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPlaceIdChanged', paramCount: 0 },
    { handlerName: 'onPluginChanged', paramCount: 0 },
    { handlerName: 'onPrimaryEmailChanged', paramCount: 0 },
    { handlerName: 'onPrimaryFaxChanged', paramCount: 0 },
    { handlerName: 'onPrimaryPhoneChanged', paramCount: 0 },
    { handlerName: 'onPrimaryWebsiteChanged', paramCount: 0 },
    { handlerName: 'onRatingsChanged', paramCount: 0 },
    { handlerName: 'onReviewModelChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onSupplierChanged', paramCount: 0 },
    { handlerName: 'onVisibilityChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Place(): PlaceBuilder {
  return createFluentBuilder('Place', PLACE_META) as unknown as PlaceBuilder;
}

export namespace Place {
  export namespace Status {
    export const Ready = createEnumToken('Place', 'Status', 'Ready');
    export const Saving = createEnumToken('Place', 'Status', 'Saving');
    export const Fetching = createEnumToken('Place', 'Status', 'Fetching');
    export const Removing = createEnumToken('Place', 'Status', 'Removing');
    export const Error = createEnumToken('Place', 'Status', 'Error');
  }
  export namespace Visibility {
    export const UnspecifiedVisibility = createEnumToken(
      'Place',
      'Visibility',
      'UnspecifiedVisibility',
    );
    export const DeviceVisibility = createEnumToken('Place', 'Visibility', 'DeviceVisibility');
    export const PrivateVisibility = createEnumToken('Place', 'Visibility', 'PrivateVisibility');
    export const PublicVisibility = createEnumToken('Place', 'Visibility', 'PublicVisibility');
  }
}
