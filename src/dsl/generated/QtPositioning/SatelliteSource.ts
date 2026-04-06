// AUTO-GENERATED — DO NOT EDIT
// Type: SatelliteSource
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SatelliteSourceBuilder {
  id(id: string): SatelliteSourceBuilder;
  child(obj: QmlObjectBuilder): SatelliteSourceBuilder;
  children(...objs: QmlObjectBuilder[]): SatelliteSourceBuilder;

  active(value: boolean): SatelliteSourceBuilder;
  activeBind(expr: string): SatelliteSourceBuilder;
  name(value: string): SatelliteSourceBuilder;
  nameBind(expr: string): SatelliteSourceBuilder;
  objectName(value: string): SatelliteSourceBuilder;
  objectNameBind(expr: string): SatelliteSourceBuilder;
  updateInterval(value: number): SatelliteSourceBuilder;
  updateIntervalBind(expr: string): SatelliteSourceBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): SatelliteSourceBuilder;
  onNameChanged(handler: DslSignalHandlerValue): SatelliteSourceBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SatelliteSourceBuilder;
  onSatellitesInUseChanged(handler: DslSignalHandlerValue): SatelliteSourceBuilder;
  onSatellitesInViewChanged(handler: DslSignalHandlerValue): SatelliteSourceBuilder;
  onSourceErrorChanged(handler: DslSignalHandlerValue): SatelliteSourceBuilder;
  onUpdateIntervalChanged(handler: DslSignalHandlerValue): SatelliteSourceBuilder;
  onValidityChanged(handler: DslSignalHandlerValue): SatelliteSourceBuilder;
}

const SATELLITESOURCE_META: TypeMetadata = {
  typeName: 'SatelliteSource',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'updateInterval', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSatellitesInUseChanged', paramCount: 0 },
    { handlerName: 'onSatellitesInViewChanged', paramCount: 0 },
    { handlerName: 'onSourceErrorChanged', paramCount: 0 },
    { handlerName: 'onUpdateIntervalChanged', paramCount: 0 },
    { handlerName: 'onValidityChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'parameters',
};

export function SatelliteSource(): SatelliteSourceBuilder {
  return createFluentBuilder(
    'SatelliteSource',
    SATELLITESOURCE_META,
  ) as unknown as SatelliteSourceBuilder;
}

export namespace SatelliteSource {
  export namespace SourceError {
    export const AccessError = createEnumToken('SatelliteSource', 'SourceError', 'AccessError');
    export const ClosedError = createEnumToken('SatelliteSource', 'SourceError', 'ClosedError');
    export const NoError = createEnumToken('SatelliteSource', 'SourceError', 'NoError');
    export const UnknownSourceError = createEnumToken(
      'SatelliteSource',
      'SourceError',
      'UnknownSourceError',
    );
    export const UpdateTimeoutError = createEnumToken(
      'SatelliteSource',
      'SourceError',
      'UpdateTimeoutError',
    );
  }
}
