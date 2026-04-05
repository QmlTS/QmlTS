// AUTO-GENERATED — DO NOT EDIT
// Type: TapSensor
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface TapSensorBuilder {
  id(id: string): TapSensorBuilder;
  child(obj: QmlObjectBuilder): TapSensorBuilder;

  active(value: boolean): TapSensorBuilder;
  activeBind(expr: string): TapSensorBuilder;
  alwaysOn(value: boolean): TapSensorBuilder;
  alwaysOnBind(expr: string): TapSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): TapSensorBuilder;
  axesOrientationModeBind(expr: string): TapSensorBuilder;
  bufferSize(value: number): TapSensorBuilder;
  bufferSizeBind(expr: string): TapSensorBuilder;
  dataRate(value: number): TapSensorBuilder;
  dataRateBind(expr: string): TapSensorBuilder;
  identifier(value: string): TapSensorBuilder;
  identifierBind(expr: string): TapSensorBuilder;
  objectName(value: string): TapSensorBuilder;
  objectNameBind(expr: string): TapSensorBuilder;
  outputRange(value: number): TapSensorBuilder;
  outputRangeBind(expr: string): TapSensorBuilder;
  returnDoubleTapEvents(value: boolean): TapSensorBuilder;
  returnDoubleTapEventsBind(expr: string): TapSensorBuilder;
  skipDuplicates(value: boolean): TapSensorBuilder;
  skipDuplicatesBind(expr: string): TapSensorBuilder;
  userOrientation(value: number): TapSensorBuilder;
  userOrientationBind(expr: string): TapSensorBuilder;
  onActiveChanged(body: string): TapSensorBuilder;
  onAlwaysOnChanged(body: string): TapSensorBuilder;
  onAvailableDataRatesChanged(body: string): TapSensorBuilder;
  onAxesOrientationModeChanged(body: string): TapSensorBuilder;
  onBufferSizeChanged(body: string): TapSensorBuilder;
  onBusyChanged(body: string): TapSensorBuilder;
  onConnectedToBackendChanged(body: string): TapSensorBuilder;
  onCurrentOrientationChanged(body: string): TapSensorBuilder;
  onDataRateChanged(body: string): TapSensorBuilder;
  onDescriptionChanged(body: string): TapSensorBuilder;
  onEfficientBufferSizeChanged(body: string): TapSensorBuilder;
  onErrorChanged(body: string): TapSensorBuilder;
  onIdentifierChanged(body: string): TapSensorBuilder;
  onMaxBufferSizeChanged(body: string): TapSensorBuilder;
  onObjectNameChanged(body: string): TapSensorBuilder;
  onOutputRangeChanged(body: string): TapSensorBuilder;
  onOutputRangesChanged(body: string): TapSensorBuilder;
  onReadingChanged(body: string): TapSensorBuilder;
  onReturnDoubleTapEventsChanged(body: string): TapSensorBuilder;
  onSkipDuplicatesChanged(body: string): TapSensorBuilder;
  onUserOrientationChanged(body: string): TapSensorBuilder;
}

const TAPSENSOR_META: TypeMetadata = {
  typeName: 'TapSensor',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'alwaysOn', hasValue: true, hasBinding: true },
    { name: 'axesOrientationMode', hasValue: true, hasBinding: true },
    { name: 'bufferSize', hasValue: true, hasBinding: true },
    { name: 'dataRate', hasValue: true, hasBinding: true },
    { name: 'identifier', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'outputRange', hasValue: true, hasBinding: true },
    { name: 'returnDoubleTapEvents', hasValue: true, hasBinding: true },
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
    { handlerName: 'onReturnDoubleTapEventsChanged', paramCount: 1 },
    { handlerName: 'onSkipDuplicatesChanged', paramCount: 1 },
    { handlerName: 'onUserOrientationChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function TapSensor(): TapSensorBuilder {
  return createFluentBuilder('TapSensor', TAPSENSOR_META) as unknown as TapSensorBuilder;
}

export namespace TapSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken('TapSensor', 'AxesOrientationMode', 'FixedOrientation');
    export const AutomaticOrientation = createEnumToken('TapSensor', 'AxesOrientationMode', 'AutomaticOrientation');
    export const UserOrientation = createEnumToken('TapSensor', 'AxesOrientationMode', 'UserOrientation');
  }
  export namespace Feature {
    export const Buffering = createEnumToken('TapSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('TapSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('TapSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('TapSensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('TapSensor', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('TapSensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('TapSensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken('TapSensor', 'Feature', 'PressureSensorTemperature');
  }
}
