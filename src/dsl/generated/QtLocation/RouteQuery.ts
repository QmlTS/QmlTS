// AUTO-GENERATED — DO NOT EDIT
// Type: RouteQuery
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlDate,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RouteQueryBuilder {
  id(id: string): RouteQueryBuilder;
  child(obj: QmlObjectBuilder): RouteQueryBuilder;
  children(...objs: QmlObjectBuilder[]): RouteQueryBuilder;

  departureTime(value: QmlDate): RouteQueryBuilder;
  departureTimeBind(expr: string): RouteQueryBuilder;
  excludedAreas(value: QmlValue): RouteQueryBuilder;
  excludedAreasBind(expr: string): RouteQueryBuilder;
  maneuverDetail(value: QmlEnumToken): RouteQueryBuilder;
  maneuverDetailBind(expr: string): RouteQueryBuilder;
  numberAlternativeRoutes(value: number): RouteQueryBuilder;
  numberAlternativeRoutesBind(expr: string): RouteQueryBuilder;
  objectName(value: string): RouteQueryBuilder;
  objectNameBind(expr: string): RouteQueryBuilder;
  routeOptimizations(value: QmlEnumToken): RouteQueryBuilder;
  routeOptimizationsBind(expr: string): RouteQueryBuilder;
  segmentDetail(value: QmlEnumToken): RouteQueryBuilder;
  segmentDetailBind(expr: string): RouteQueryBuilder;
  travelModes(value: QmlEnumToken): RouteQueryBuilder;
  travelModesBind(expr: string): RouteQueryBuilder;
  waypoints(value: QmlValue): RouteQueryBuilder;
  waypointsBind(expr: string): RouteQueryBuilder;
  onDepartureTimeChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onExcludedAreasChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onFeatureTypesChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onManeuverDetailChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onNumberAlternativeRoutesChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onQueryDetailsChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onRouteOptimizationsChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onSegmentDetailChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onTravelModesChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
  onWaypointsChanged(handler: DslSignalHandlerValue): RouteQueryBuilder;
}

const ROUTEQUERY_META: TypeMetadata = {
  typeName: 'RouteQuery',
  properties: [
    { name: 'departureTime', hasValue: true, hasBinding: true },
    { name: 'excludedAreas', hasValue: true, hasBinding: true },
    { name: 'maneuverDetail', hasValue: true, hasBinding: true },
    { name: 'numberAlternativeRoutes', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'routeOptimizations', hasValue: true, hasBinding: true },
    { name: 'segmentDetail', hasValue: true, hasBinding: true },
    { name: 'travelModes', hasValue: true, hasBinding: true },
    { name: 'waypoints', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDepartureTimeChanged', paramCount: 0 },
    { handlerName: 'onExcludedAreasChanged', paramCount: 0 },
    { handlerName: 'onFeatureTypesChanged', paramCount: 0 },
    { handlerName: 'onManeuverDetailChanged', paramCount: 0 },
    { handlerName: 'onNumberAlternativeRoutesChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onQueryDetailsChanged', paramCount: 0 },
    { handlerName: 'onRouteOptimizationsChanged', paramCount: 0 },
    { handlerName: 'onSegmentDetailChanged', paramCount: 0 },
    { handlerName: 'onTravelModesChanged', paramCount: 0 },
    { handlerName: 'onWaypointsChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function RouteQuery(): RouteQueryBuilder {
  return createFluentBuilder('RouteQuery', ROUTEQUERY_META) as unknown as RouteQueryBuilder;
}

export namespace RouteQuery {
  export namespace FeatureTypes {
    export const NoFeature = createEnumToken('RouteQuery', 'FeatureTypes', 'NoFeature');
    export const TollFeature = createEnumToken('RouteQuery', 'FeatureTypes', 'TollFeature');
    export const HighwayFeature = createEnumToken('RouteQuery', 'FeatureTypes', 'HighwayFeature');
    export const PublicTransitFeature = createEnumToken(
      'RouteQuery',
      'FeatureTypes',
      'PublicTransitFeature',
    );
    export const FerryFeature = createEnumToken('RouteQuery', 'FeatureTypes', 'FerryFeature');
    export const TunnelFeature = createEnumToken('RouteQuery', 'FeatureTypes', 'TunnelFeature');
    export const DirtRoadFeature = createEnumToken('RouteQuery', 'FeatureTypes', 'DirtRoadFeature');
    export const ParksFeature = createEnumToken('RouteQuery', 'FeatureTypes', 'ParksFeature');
    export const MotorPoolLaneFeature = createEnumToken(
      'RouteQuery',
      'FeatureTypes',
      'MotorPoolLaneFeature',
    );
    export const TrafficFeature = createEnumToken('RouteQuery', 'FeatureTypes', 'TrafficFeature');
  }
  export namespace FeatureWeight {
    export const NeutralFeatureWeight = createEnumToken(
      'RouteQuery',
      'FeatureWeight',
      'NeutralFeatureWeight',
    );
    export const PreferFeatureWeight = createEnumToken(
      'RouteQuery',
      'FeatureWeight',
      'PreferFeatureWeight',
    );
    export const RequireFeatureWeight = createEnumToken(
      'RouteQuery',
      'FeatureWeight',
      'RequireFeatureWeight',
    );
    export const AvoidFeatureWeight = createEnumToken(
      'RouteQuery',
      'FeatureWeight',
      'AvoidFeatureWeight',
    );
    export const DisallowFeatureWeight = createEnumToken(
      'RouteQuery',
      'FeatureWeight',
      'DisallowFeatureWeight',
    );
  }
  export namespace ManeuverDetail {
    export const NoManeuvers = createEnumToken('RouteQuery', 'ManeuverDetail', 'NoManeuvers');
    export const BasicManeuvers = createEnumToken('RouteQuery', 'ManeuverDetail', 'BasicManeuvers');
  }
  export namespace ManeuverDetails {
    export const NoManeuvers = createEnumToken('RouteQuery', 'ManeuverDetails', 'NoManeuvers');
    export const BasicManeuvers = createEnumToken(
      'RouteQuery',
      'ManeuverDetails',
      'BasicManeuvers',
    );
  }
  export namespace RouteOptimization {
    export const ShortestRoute = createEnumToken(
      'RouteQuery',
      'RouteOptimization',
      'ShortestRoute',
    );
    export const FastestRoute = createEnumToken('RouteQuery', 'RouteOptimization', 'FastestRoute');
    export const MostEconomicRoute = createEnumToken(
      'RouteQuery',
      'RouteOptimization',
      'MostEconomicRoute',
    );
    export const MostScenicRoute = createEnumToken(
      'RouteQuery',
      'RouteOptimization',
      'MostScenicRoute',
    );
  }
  export namespace RouteOptimizations {
    export const ShortestRoute = createEnumToken(
      'RouteQuery',
      'RouteOptimizations',
      'ShortestRoute',
    );
    export const FastestRoute = createEnumToken('RouteQuery', 'RouteOptimizations', 'FastestRoute');
    export const MostEconomicRoute = createEnumToken(
      'RouteQuery',
      'RouteOptimizations',
      'MostEconomicRoute',
    );
    export const MostScenicRoute = createEnumToken(
      'RouteQuery',
      'RouteOptimizations',
      'MostScenicRoute',
    );
  }
  export namespace SegmentDetail {
    export const NoSegmentData = createEnumToken('RouteQuery', 'SegmentDetail', 'NoSegmentData');
    export const BasicSegmentData = createEnumToken(
      'RouteQuery',
      'SegmentDetail',
      'BasicSegmentData',
    );
  }
  export namespace SegmentDetails {
    export const NoSegmentData = createEnumToken('RouteQuery', 'SegmentDetails', 'NoSegmentData');
    export const BasicSegmentData = createEnumToken(
      'RouteQuery',
      'SegmentDetails',
      'BasicSegmentData',
    );
  }
  export namespace TravelMode {
    export const CarTravel = createEnumToken('RouteQuery', 'TravelMode', 'CarTravel');
    export const PedestrianTravel = createEnumToken('RouteQuery', 'TravelMode', 'PedestrianTravel');
    export const BicycleTravel = createEnumToken('RouteQuery', 'TravelMode', 'BicycleTravel');
    export const PublicTransitTravel = createEnumToken(
      'RouteQuery',
      'TravelMode',
      'PublicTransitTravel',
    );
    export const TruckTravel = createEnumToken('RouteQuery', 'TravelMode', 'TruckTravel');
  }
  export namespace TravelModes {
    export const CarTravel = createEnumToken('RouteQuery', 'TravelModes', 'CarTravel');
    export const PedestrianTravel = createEnumToken(
      'RouteQuery',
      'TravelModes',
      'PedestrianTravel',
    );
    export const BicycleTravel = createEnumToken('RouteQuery', 'TravelModes', 'BicycleTravel');
    export const PublicTransitTravel = createEnumToken(
      'RouteQuery',
      'TravelModes',
      'PublicTransitTravel',
    );
    export const TruckTravel = createEnumToken('RouteQuery', 'TravelModes', 'TruckTravel');
  }
}
