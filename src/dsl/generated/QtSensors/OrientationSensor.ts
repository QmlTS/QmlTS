// AUTO-GENERATED — DO NOT EDIT
// Type: OrientationSensor
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface OrientationSensorBuilder {
  id(id: string): OrientationSensorBuilder;
  child(obj: QmlObjectBuilder): OrientationSensorBuilder;

  active(value: boolean): OrientationSensorBuilder;
  activeBind(expr: string): OrientationSensorBuilder;
  alwaysOn(value: boolean): OrientationSensorBuilder;
  alwaysOnBind(expr: string): OrientationSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): OrientationSensorBuilder;
  axesOrientationModeBind(expr: string): OrientationSensorBuilder;
  bufferSize(value: number): OrientationSensorBuilder;
  bufferSizeBind(expr: string): OrientationSensorBuilder;
  dataRate(value: number): OrientationSensorBuilder;
  dataRateBind(expr: string): OrientationSensorBuilder;
  identifier(value: string): OrientationSensorBuilder;
  identifierBind(expr: string): OrientationSensorBuilder;
  objectName(value: string): OrientationSensorBuilder;
  objectNameBind(expr: string): OrientationSensorBuilder;
  outputRange(value: number): OrientationSensorBuilder;
  outputRangeBind(expr: string): OrientationSensorBuilder;
  skipDuplicates(value: boolean): OrientationSensorBuilder;
  skipDuplicatesBind(expr: string): OrientationSensorBuilder;
  userOrientation(value: number): OrientationSensorBuilder;
  userOrientationBind(expr: string): OrientationSensorBuilder;
  onActiveChanged(body: string): OrientationSensorBuilder;
  onAlwaysOnChanged(body: string): OrientationSensorBuilder;
  onAvailableDataRatesChanged(body: string): OrientationSensorBuilder;
  onAxesOrientationModeChanged(body: string): OrientationSensorBuilder;
  onBufferSizeChanged(body: string): OrientationSensorBuilder;
  onBusyChanged(body: string): OrientationSensorBuilder;
  onConnectedToBackendChanged(body: string): OrientationSensorBuilder;
  onCurrentOrientationChanged(body: string): OrientationSensorBuilder;
  onDataRateChanged(body: string): OrientationSensorBuilder;
  onDescriptionChanged(body: string): OrientationSensorBuilder;
  onEfficientBufferSizeChanged(body: string): OrientationSensorBuilder;
  onErrorChanged(body: string): OrientationSensorBuilder;
  onIdentifierChanged(body: string): OrientationSensorBuilder;
  onMaxBufferSizeChanged(body: string): OrientationSensorBuilder;
  onObjectNameChanged(body: string): OrientationSensorBuilder;
  onOutputRangeChanged(body: string): OrientationSensorBuilder;
  onOutputRangesChanged(body: string): OrientationSensorBuilder;
  onReadingChanged(body: string): OrientationSensorBuilder;
  onSkipDuplicatesChanged(body: string): OrientationSensorBuilder;
  onUserOrientationChanged(body: string): OrientationSensorBuilder;
}

const ORIENTATIONSENSOR_META: TypeMetadata = {
  typeName: 'OrientationSensor',
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

export function OrientationSensor(): OrientationSensorBuilder {
  return createFluentBuilder(
    'OrientationSensor',
    ORIENTATIONSENSOR_META,
  ) as unknown as OrientationSensorBuilder;
}

export namespace OrientationSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'OrientationSensor',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'OrientationSensor',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'OrientationSensor',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('OrientationSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('OrientationSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('OrientationSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('OrientationSensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken(
      'OrientationSensor',
      'Feature',
      'AccelerationMode',
    );
    export const SkipDuplicates = createEnumToken('OrientationSensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken(
      'OrientationSensor',
      'Feature',
      'AxesOrientation',
    );
    export const PressureSensorTemperature = createEnumToken(
      'OrientationSensor',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
