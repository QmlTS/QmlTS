// AUTO-GENERATED — DO NOT EDIT
// Type: LightSensor
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface LightSensorBuilder {
  id(id: string): LightSensorBuilder;
  child(obj: QmlObjectBuilder): LightSensorBuilder;

  active(value: boolean): LightSensorBuilder;
  activeBind(expr: string): LightSensorBuilder;
  alwaysOn(value: boolean): LightSensorBuilder;
  alwaysOnBind(expr: string): LightSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): LightSensorBuilder;
  axesOrientationModeBind(expr: string): LightSensorBuilder;
  bufferSize(value: number): LightSensorBuilder;
  bufferSizeBind(expr: string): LightSensorBuilder;
  dataRate(value: number): LightSensorBuilder;
  dataRateBind(expr: string): LightSensorBuilder;
  identifier(value: string): LightSensorBuilder;
  identifierBind(expr: string): LightSensorBuilder;
  objectName(value: string): LightSensorBuilder;
  objectNameBind(expr: string): LightSensorBuilder;
  outputRange(value: number): LightSensorBuilder;
  outputRangeBind(expr: string): LightSensorBuilder;
  skipDuplicates(value: boolean): LightSensorBuilder;
  skipDuplicatesBind(expr: string): LightSensorBuilder;
  userOrientation(value: number): LightSensorBuilder;
  userOrientationBind(expr: string): LightSensorBuilder;
  onActiveChanged(body: string): LightSensorBuilder;
  onAlwaysOnChanged(body: string): LightSensorBuilder;
  onAvailableDataRatesChanged(body: string): LightSensorBuilder;
  onAxesOrientationModeChanged(body: string): LightSensorBuilder;
  onBufferSizeChanged(body: string): LightSensorBuilder;
  onBusyChanged(body: string): LightSensorBuilder;
  onConnectedToBackendChanged(body: string): LightSensorBuilder;
  onCurrentOrientationChanged(body: string): LightSensorBuilder;
  onDataRateChanged(body: string): LightSensorBuilder;
  onDescriptionChanged(body: string): LightSensorBuilder;
  onEfficientBufferSizeChanged(body: string): LightSensorBuilder;
  onErrorChanged(body: string): LightSensorBuilder;
  onFieldOfViewChanged(body: string): LightSensorBuilder;
  onIdentifierChanged(body: string): LightSensorBuilder;
  onMaxBufferSizeChanged(body: string): LightSensorBuilder;
  onObjectNameChanged(body: string): LightSensorBuilder;
  onOutputRangeChanged(body: string): LightSensorBuilder;
  onOutputRangesChanged(body: string): LightSensorBuilder;
  onReadingChanged(body: string): LightSensorBuilder;
  onSkipDuplicatesChanged(body: string): LightSensorBuilder;
  onUserOrientationChanged(body: string): LightSensorBuilder;
}

const LIGHTSENSOR_META: TypeMetadata = {
  typeName: 'LightSensor',
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
    { handlerName: 'onFieldOfViewChanged', paramCount: 1 },
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

export function LightSensor(): LightSensorBuilder {
  return createFluentBuilder('LightSensor', LIGHTSENSOR_META) as unknown as LightSensorBuilder;
}

export namespace LightSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'LightSensor',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'LightSensor',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'LightSensor',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('LightSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('LightSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('LightSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('LightSensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('LightSensor', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('LightSensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('LightSensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'LightSensor',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
