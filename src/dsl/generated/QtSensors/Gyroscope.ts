// AUTO-GENERATED — DO NOT EDIT
// Type: Gyroscope
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface GyroscopeBuilder {
  id(id: string): GyroscopeBuilder;
  child(obj: QmlObjectBuilder): GyroscopeBuilder;

  active(value: boolean): GyroscopeBuilder;
  activeBind(expr: string): GyroscopeBuilder;
  alwaysOn(value: boolean): GyroscopeBuilder;
  alwaysOnBind(expr: string): GyroscopeBuilder;
  axesOrientationMode(value: QmlEnumToken): GyroscopeBuilder;
  axesOrientationModeBind(expr: string): GyroscopeBuilder;
  bufferSize(value: number): GyroscopeBuilder;
  bufferSizeBind(expr: string): GyroscopeBuilder;
  dataRate(value: number): GyroscopeBuilder;
  dataRateBind(expr: string): GyroscopeBuilder;
  identifier(value: string): GyroscopeBuilder;
  identifierBind(expr: string): GyroscopeBuilder;
  objectName(value: string): GyroscopeBuilder;
  objectNameBind(expr: string): GyroscopeBuilder;
  outputRange(value: number): GyroscopeBuilder;
  outputRangeBind(expr: string): GyroscopeBuilder;
  skipDuplicates(value: boolean): GyroscopeBuilder;
  skipDuplicatesBind(expr: string): GyroscopeBuilder;
  userOrientation(value: number): GyroscopeBuilder;
  userOrientationBind(expr: string): GyroscopeBuilder;
  onActiveChanged(body: string): GyroscopeBuilder;
  onAlwaysOnChanged(body: string): GyroscopeBuilder;
  onAvailableDataRatesChanged(body: string): GyroscopeBuilder;
  onAxesOrientationModeChanged(body: string): GyroscopeBuilder;
  onBufferSizeChanged(body: string): GyroscopeBuilder;
  onBusyChanged(body: string): GyroscopeBuilder;
  onConnectedToBackendChanged(body: string): GyroscopeBuilder;
  onCurrentOrientationChanged(body: string): GyroscopeBuilder;
  onDataRateChanged(body: string): GyroscopeBuilder;
  onDescriptionChanged(body: string): GyroscopeBuilder;
  onEfficientBufferSizeChanged(body: string): GyroscopeBuilder;
  onErrorChanged(body: string): GyroscopeBuilder;
  onIdentifierChanged(body: string): GyroscopeBuilder;
  onMaxBufferSizeChanged(body: string): GyroscopeBuilder;
  onObjectNameChanged(body: string): GyroscopeBuilder;
  onOutputRangeChanged(body: string): GyroscopeBuilder;
  onOutputRangesChanged(body: string): GyroscopeBuilder;
  onReadingChanged(body: string): GyroscopeBuilder;
  onSkipDuplicatesChanged(body: string): GyroscopeBuilder;
  onUserOrientationChanged(body: string): GyroscopeBuilder;
}

const GYROSCOPE_META: TypeMetadata = {
  typeName: 'Gyroscope',
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

export function Gyroscope(): GyroscopeBuilder {
  return createFluentBuilder('Gyroscope', GYROSCOPE_META) as unknown as GyroscopeBuilder;
}

export namespace Gyroscope {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'Gyroscope',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'Gyroscope',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'Gyroscope',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('Gyroscope', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('Gyroscope', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('Gyroscope', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('Gyroscope', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('Gyroscope', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('Gyroscope', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('Gyroscope', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'Gyroscope',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
