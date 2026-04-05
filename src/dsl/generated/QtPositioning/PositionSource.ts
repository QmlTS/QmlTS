// AUTO-GENERATED — DO NOT EDIT
// Type: PositionSource
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface PositionSourceBuilder {
  id(id: string): PositionSourceBuilder;
  child(obj: QmlObjectBuilder): PositionSourceBuilder;

  active(value: boolean): PositionSourceBuilder;
  activeBind(expr: string): PositionSourceBuilder;
  name(value: string): PositionSourceBuilder;
  nameBind(expr: string): PositionSourceBuilder;
  objectName(value: string): PositionSourceBuilder;
  objectNameBind(expr: string): PositionSourceBuilder;
  preferredPositioningMethods(value: QmlEnumToken): PositionSourceBuilder;
  preferredPositioningMethodsBind(expr: string): PositionSourceBuilder;
  updateInterval(value: number): PositionSourceBuilder;
  updateIntervalBind(expr: string): PositionSourceBuilder;
  onActiveChanged(body: string): PositionSourceBuilder;
  onNameChanged(body: string): PositionSourceBuilder;
  onObjectNameChanged(body: string): PositionSourceBuilder;
  onPositionChanged(body: string): PositionSourceBuilder;
  onPreferredPositioningMethodsChanged(body: string): PositionSourceBuilder;
  onSourceErrorChanged(body: string): PositionSourceBuilder;
  onSupportedPositioningMethodsChanged(body: string): PositionSourceBuilder;
  onUpdateIntervalChanged(body: string): PositionSourceBuilder;
  onValidityChanged(body: string): PositionSourceBuilder;
}

const POSITIONSOURCE_META: TypeMetadata = {
  typeName: 'PositionSource',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'preferredPositioningMethods', hasValue: true, hasBinding: true },
    { name: 'updateInterval', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onPreferredPositioningMethodsChanged', paramCount: 0 },
    { handlerName: 'onSourceErrorChanged', paramCount: 0 },
    { handlerName: 'onSupportedPositioningMethodsChanged', paramCount: 0 },
    { handlerName: 'onUpdateIntervalChanged', paramCount: 0 },
    { handlerName: 'onValidityChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'parameters',
};

export function PositionSource(): PositionSourceBuilder {
  return createFluentBuilder(
    'PositionSource',
    POSITIONSOURCE_META,
  ) as unknown as PositionSourceBuilder;
}

export namespace PositionSource {
  export namespace PositioningMethod {
    export const NoPositioningMethods = createEnumToken(
      'PositionSource',
      'PositioningMethod',
      'NoPositioningMethods',
    );
    export const SatellitePositioningMethods = createEnumToken(
      'PositionSource',
      'PositioningMethod',
      'SatellitePositioningMethods',
    );
    export const NonSatellitePositioningMethods = createEnumToken(
      'PositionSource',
      'PositioningMethod',
      'NonSatellitePositioningMethods',
    );
    export const AllPositioningMethods = createEnumToken(
      'PositionSource',
      'PositioningMethod',
      'AllPositioningMethods',
    );
  }
  export namespace PositioningMethods {
    export const NoPositioningMethods = createEnumToken(
      'PositionSource',
      'PositioningMethods',
      'NoPositioningMethods',
    );
    export const SatellitePositioningMethods = createEnumToken(
      'PositionSource',
      'PositioningMethods',
      'SatellitePositioningMethods',
    );
    export const NonSatellitePositioningMethods = createEnumToken(
      'PositionSource',
      'PositioningMethods',
      'NonSatellitePositioningMethods',
    );
    export const AllPositioningMethods = createEnumToken(
      'PositionSource',
      'PositioningMethods',
      'AllPositioningMethods',
    );
  }
  export namespace SourceError {
    export const AccessError = createEnumToken('PositionSource', 'SourceError', 'AccessError');
    export const ClosedError = createEnumToken('PositionSource', 'SourceError', 'ClosedError');
    export const UnknownSourceError = createEnumToken(
      'PositionSource',
      'SourceError',
      'UnknownSourceError',
    );
    export const NoError = createEnumToken('PositionSource', 'SourceError', 'NoError');
    export const UpdateTimeoutError = createEnumToken(
      'PositionSource',
      'SourceError',
      'UpdateTimeoutError',
    );
  }
}
