// AUTO-GENERATED — DO NOT EDIT
// Type: Plugin
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface PluginBuilder {
  id(id: string): PluginBuilder;
  child(obj: QmlObjectBuilder): PluginBuilder;

  allowExperimental(value: boolean): PluginBuilder;
  allowExperimentalBind(expr: string): PluginBuilder;
  locales(value: string[]): PluginBuilder;
  localesBind(expr: string): PluginBuilder;
  name(value: string): PluginBuilder;
  nameBind(expr: string): PluginBuilder;
  objectName(value: string): PluginBuilder;
  objectNameBind(expr: string): PluginBuilder;
  preferred(value: string[]): PluginBuilder;
  preferredBind(expr: string): PluginBuilder;
  required(value: QmlValue): PluginBuilder;
  requiredBind(expr: string): PluginBuilder;
  onAllowExperimentalChanged(body: string): PluginBuilder;
  onAttached(body: string): PluginBuilder;
  onLocalesChanged(body: string): PluginBuilder;
  onNameChanged(body: string): PluginBuilder;
  onObjectNameChanged(body: string): PluginBuilder;
  onPreferredChanged(body: string): PluginBuilder;
}

const PLUGIN_META: TypeMetadata = {
  typeName: 'Plugin',
  properties: [
    { name: 'allowExperimental', hasValue: true, hasBinding: true },
    { name: 'locales', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'preferred', hasValue: true, hasBinding: true },
    { name: 'required', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAllowExperimentalChanged', paramCount: 1 },
    { handlerName: 'onAttached', paramCount: 0 },
    { handlerName: 'onLocalesChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPreferredChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'parameters',
};

export function Plugin(): PluginBuilder {
  return createFluentBuilder('Plugin', PLUGIN_META) as unknown as PluginBuilder;
}

export namespace Plugin {
  export namespace GeocodingFeature {
    export const NoGeocodingFeatures = createEnumToken('Plugin', 'GeocodingFeature', 'NoGeocodingFeatures');
    export const OnlineGeocodingFeature = createEnumToken('Plugin', 'GeocodingFeature', 'OnlineGeocodingFeature');
    export const OfflineGeocodingFeature = createEnumToken('Plugin', 'GeocodingFeature', 'OfflineGeocodingFeature');
    export const ReverseGeocodingFeature = createEnumToken('Plugin', 'GeocodingFeature', 'ReverseGeocodingFeature');
    export const LocalizedGeocodingFeature = createEnumToken('Plugin', 'GeocodingFeature', 'LocalizedGeocodingFeature');
    export const AnyGeocodingFeatures = createEnumToken('Plugin', 'GeocodingFeature', 'AnyGeocodingFeatures');
  }
  export namespace GeocodingFeatures {
    export const NoGeocodingFeatures = createEnumToken('Plugin', 'GeocodingFeatures', 'NoGeocodingFeatures');
    export const OnlineGeocodingFeature = createEnumToken('Plugin', 'GeocodingFeatures', 'OnlineGeocodingFeature');
    export const OfflineGeocodingFeature = createEnumToken('Plugin', 'GeocodingFeatures', 'OfflineGeocodingFeature');
    export const ReverseGeocodingFeature = createEnumToken('Plugin', 'GeocodingFeatures', 'ReverseGeocodingFeature');
    export const LocalizedGeocodingFeature = createEnumToken('Plugin', 'GeocodingFeatures', 'LocalizedGeocodingFeature');
    export const AnyGeocodingFeatures = createEnumToken('Plugin', 'GeocodingFeatures', 'AnyGeocodingFeatures');
  }
  export namespace MappingFeature {
    export const NoMappingFeatures = createEnumToken('Plugin', 'MappingFeature', 'NoMappingFeatures');
    export const OnlineMappingFeature = createEnumToken('Plugin', 'MappingFeature', 'OnlineMappingFeature');
    export const OfflineMappingFeature = createEnumToken('Plugin', 'MappingFeature', 'OfflineMappingFeature');
    export const LocalizedMappingFeature = createEnumToken('Plugin', 'MappingFeature', 'LocalizedMappingFeature');
    export const AnyMappingFeatures = createEnumToken('Plugin', 'MappingFeature', 'AnyMappingFeatures');
  }
  export namespace MappingFeatures {
    export const NoMappingFeatures = createEnumToken('Plugin', 'MappingFeatures', 'NoMappingFeatures');
    export const OnlineMappingFeature = createEnumToken('Plugin', 'MappingFeatures', 'OnlineMappingFeature');
    export const OfflineMappingFeature = createEnumToken('Plugin', 'MappingFeatures', 'OfflineMappingFeature');
    export const LocalizedMappingFeature = createEnumToken('Plugin', 'MappingFeatures', 'LocalizedMappingFeature');
    export const AnyMappingFeatures = createEnumToken('Plugin', 'MappingFeatures', 'AnyMappingFeatures');
  }
  export namespace NavigationFeatures {
    export const NoNavigationFeatures = createEnumToken('Plugin', 'NavigationFeatures', 'NoNavigationFeatures');
    export const OnlineNavigationFeature = createEnumToken('Plugin', 'NavigationFeatures', 'OnlineNavigationFeature');
    export const OfflineNavigationFeature = createEnumToken('Plugin', 'NavigationFeatures', 'OfflineNavigationFeature');
    export const AnyNavigationFeatures = createEnumToken('Plugin', 'NavigationFeatures', 'AnyNavigationFeatures');
  }
  export namespace PlacesFeature {
    export const NoPlacesFeatures = createEnumToken('Plugin', 'PlacesFeature', 'NoPlacesFeatures');
    export const OnlinePlacesFeature = createEnumToken('Plugin', 'PlacesFeature', 'OnlinePlacesFeature');
    export const OfflinePlacesFeature = createEnumToken('Plugin', 'PlacesFeature', 'OfflinePlacesFeature');
    export const SavePlaceFeature = createEnumToken('Plugin', 'PlacesFeature', 'SavePlaceFeature');
    export const RemovePlaceFeature = createEnumToken('Plugin', 'PlacesFeature', 'RemovePlaceFeature');
    export const SaveCategoryFeature = createEnumToken('Plugin', 'PlacesFeature', 'SaveCategoryFeature');
    export const RemoveCategoryFeature = createEnumToken('Plugin', 'PlacesFeature', 'RemoveCategoryFeature');
    export const PlaceRecommendationsFeature = createEnumToken('Plugin', 'PlacesFeature', 'PlaceRecommendationsFeature');
    export const SearchSuggestionsFeature = createEnumToken('Plugin', 'PlacesFeature', 'SearchSuggestionsFeature');
    export const LocalizedPlacesFeature = createEnumToken('Plugin', 'PlacesFeature', 'LocalizedPlacesFeature');
    export const NotificationsFeature = createEnumToken('Plugin', 'PlacesFeature', 'NotificationsFeature');
    export const PlaceMatchingFeature = createEnumToken('Plugin', 'PlacesFeature', 'PlaceMatchingFeature');
    export const AnyPlacesFeatures = createEnumToken('Plugin', 'PlacesFeature', 'AnyPlacesFeatures');
  }
  export namespace PlacesFeatures {
    export const NoPlacesFeatures = createEnumToken('Plugin', 'PlacesFeatures', 'NoPlacesFeatures');
    export const OnlinePlacesFeature = createEnumToken('Plugin', 'PlacesFeatures', 'OnlinePlacesFeature');
    export const OfflinePlacesFeature = createEnumToken('Plugin', 'PlacesFeatures', 'OfflinePlacesFeature');
    export const SavePlaceFeature = createEnumToken('Plugin', 'PlacesFeatures', 'SavePlaceFeature');
    export const RemovePlaceFeature = createEnumToken('Plugin', 'PlacesFeatures', 'RemovePlaceFeature');
    export const SaveCategoryFeature = createEnumToken('Plugin', 'PlacesFeatures', 'SaveCategoryFeature');
    export const RemoveCategoryFeature = createEnumToken('Plugin', 'PlacesFeatures', 'RemoveCategoryFeature');
    export const PlaceRecommendationsFeature = createEnumToken('Plugin', 'PlacesFeatures', 'PlaceRecommendationsFeature');
    export const SearchSuggestionsFeature = createEnumToken('Plugin', 'PlacesFeatures', 'SearchSuggestionsFeature');
    export const LocalizedPlacesFeature = createEnumToken('Plugin', 'PlacesFeatures', 'LocalizedPlacesFeature');
    export const NotificationsFeature = createEnumToken('Plugin', 'PlacesFeatures', 'NotificationsFeature');
    export const PlaceMatchingFeature = createEnumToken('Plugin', 'PlacesFeatures', 'PlaceMatchingFeature');
    export const AnyPlacesFeatures = createEnumToken('Plugin', 'PlacesFeatures', 'AnyPlacesFeatures');
  }
  export namespace RoutingFeature {
    export const NoRoutingFeatures = createEnumToken('Plugin', 'RoutingFeature', 'NoRoutingFeatures');
    export const OnlineRoutingFeature = createEnumToken('Plugin', 'RoutingFeature', 'OnlineRoutingFeature');
    export const OfflineRoutingFeature = createEnumToken('Plugin', 'RoutingFeature', 'OfflineRoutingFeature');
    export const LocalizedRoutingFeature = createEnumToken('Plugin', 'RoutingFeature', 'LocalizedRoutingFeature');
    export const RouteUpdatesFeature = createEnumToken('Plugin', 'RoutingFeature', 'RouteUpdatesFeature');
    export const AlternativeRoutesFeature = createEnumToken('Plugin', 'RoutingFeature', 'AlternativeRoutesFeature');
    export const ExcludeAreasRoutingFeature = createEnumToken('Plugin', 'RoutingFeature', 'ExcludeAreasRoutingFeature');
    export const AnyRoutingFeatures = createEnumToken('Plugin', 'RoutingFeature', 'AnyRoutingFeatures');
  }
  export namespace RoutingFeatures {
    export const NoRoutingFeatures = createEnumToken('Plugin', 'RoutingFeatures', 'NoRoutingFeatures');
    export const OnlineRoutingFeature = createEnumToken('Plugin', 'RoutingFeatures', 'OnlineRoutingFeature');
    export const OfflineRoutingFeature = createEnumToken('Plugin', 'RoutingFeatures', 'OfflineRoutingFeature');
    export const LocalizedRoutingFeature = createEnumToken('Plugin', 'RoutingFeatures', 'LocalizedRoutingFeature');
    export const RouteUpdatesFeature = createEnumToken('Plugin', 'RoutingFeatures', 'RouteUpdatesFeature');
    export const AlternativeRoutesFeature = createEnumToken('Plugin', 'RoutingFeatures', 'AlternativeRoutesFeature');
    export const ExcludeAreasRoutingFeature = createEnumToken('Plugin', 'RoutingFeatures', 'ExcludeAreasRoutingFeature');
    export const AnyRoutingFeatures = createEnumToken('Plugin', 'RoutingFeatures', 'AnyRoutingFeatures');
  }
}
