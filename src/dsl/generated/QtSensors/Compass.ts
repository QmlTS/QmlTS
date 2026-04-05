// AUTO-GENERATED — DO NOT EDIT
// Type: Compass
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface CompassBuilder {
  id(id: string): CompassBuilder;
  child(obj: QmlObjectBuilder): CompassBuilder;

  active(value: boolean): CompassBuilder;
  activeBind(expr: string): CompassBuilder;
  alwaysOn(value: boolean): CompassBuilder;
  alwaysOnBind(expr: string): CompassBuilder;
  axesOrientationMode(value: QmlEnumToken): CompassBuilder;
  axesOrientationModeBind(expr: string): CompassBuilder;
  bufferSize(value: number): CompassBuilder;
  bufferSizeBind(expr: string): CompassBuilder;
  dataRate(value: number): CompassBuilder;
  dataRateBind(expr: string): CompassBuilder;
  identifier(value: string): CompassBuilder;
  identifierBind(expr: string): CompassBuilder;
  objectName(value: string): CompassBuilder;
  objectNameBind(expr: string): CompassBuilder;
  outputRange(value: number): CompassBuilder;
  outputRangeBind(expr: string): CompassBuilder;
  skipDuplicates(value: boolean): CompassBuilder;
  skipDuplicatesBind(expr: string): CompassBuilder;
  userOrientation(value: number): CompassBuilder;
  userOrientationBind(expr: string): CompassBuilder;
  onActiveChanged(body: string): CompassBuilder;
  onAlwaysOnChanged(body: string): CompassBuilder;
  onAvailableDataRatesChanged(body: string): CompassBuilder;
  onAxesOrientationModeChanged(body: string): CompassBuilder;
  onBufferSizeChanged(body: string): CompassBuilder;
  onBusyChanged(body: string): CompassBuilder;
  onConnectedToBackendChanged(body: string): CompassBuilder;
  onCurrentOrientationChanged(body: string): CompassBuilder;
  onDataRateChanged(body: string): CompassBuilder;
  onDescriptionChanged(body: string): CompassBuilder;
  onEfficientBufferSizeChanged(body: string): CompassBuilder;
  onErrorChanged(body: string): CompassBuilder;
  onIdentifierChanged(body: string): CompassBuilder;
  onMaxBufferSizeChanged(body: string): CompassBuilder;
  onObjectNameChanged(body: string): CompassBuilder;
  onOutputRangeChanged(body: string): CompassBuilder;
  onOutputRangesChanged(body: string): CompassBuilder;
  onReadingChanged(body: string): CompassBuilder;
  onSkipDuplicatesChanged(body: string): CompassBuilder;
  onUserOrientationChanged(body: string): CompassBuilder;
}

const COMPASS_META: TypeMetadata = {
  typeName: 'Compass',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'alwaysOn', hasValue: true, hasBinding: true },
    { name: 'axesOrientationMode', hasValue: true, hasBinding: true },
    { name: 'bufferSize', hasValue: true, hasBinding: true },
    { name: 'dataRate', hasValue: true, hasBinding: true },
    { name: 'identifier', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'outputRange', hasValue: true, hasBinding: true },
    { name: 'skipDuplicates', hasValue: true, hasBinding: true },
    { name: 'userOrientation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
    { handlerName: 'onAlwaysOnChanged', paramCount: 0 },
    { handlerName: 'onAvailableDataRatesChanged', paramCount: 0 },
    { handlerName: 'onAxesOrientationModeChanged', paramCount: 1 },
    { handlerName: 'onBufferSizeChanged', paramCount: 1 },
    { handlerName: 'onBusyChanged', paramCount: 0 },
    { handlerName: 'onConnectedToBackendChanged', paramCount: 0 },
    { handlerName: 'onCurrentOrientationChanged', paramCount: 1 },
    { handlerName: 'onDataRateChanged', paramCount: 0 },
    { handlerName: 'onDescriptionChanged', paramCount: 0 },
    { handlerName: 'onEfficientBufferSizeChanged', paramCount: 1 },
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onIdentifierChanged', paramCount: 0 },
    { handlerName: 'onMaxBufferSizeChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOutputRangeChanged', paramCount: 0 },
    { handlerName: 'onOutputRangesChanged', paramCount: 0 },
    { handlerName: 'onReadingChanged', paramCount: 0 },
    { handlerName: 'onSkipDuplicatesChanged', paramCount: 1 },
    { handlerName: 'onUserOrientationChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Compass(): CompassBuilder {
  return createFluentBuilder('Compass', COMPASS_META) as unknown as CompassBuilder;
}

export namespace Compass {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'Compass',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'Compass',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'Compass',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('Compass', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('Compass', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('Compass', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('Compass', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('Compass', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('Compass', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('Compass', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'Compass',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
