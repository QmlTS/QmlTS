// AUTO-GENERATED — DO NOT EDIT
// Type: RotationSensor
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface RotationSensorBuilder {
  id(id: string): RotationSensorBuilder;
  child(obj: QmlObjectBuilder): RotationSensorBuilder;

  active(value: boolean): RotationSensorBuilder;
  activeBind(expr: string): RotationSensorBuilder;
  alwaysOn(value: boolean): RotationSensorBuilder;
  alwaysOnBind(expr: string): RotationSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): RotationSensorBuilder;
  axesOrientationModeBind(expr: string): RotationSensorBuilder;
  bufferSize(value: number): RotationSensorBuilder;
  bufferSizeBind(expr: string): RotationSensorBuilder;
  dataRate(value: number): RotationSensorBuilder;
  dataRateBind(expr: string): RotationSensorBuilder;
  identifier(value: string): RotationSensorBuilder;
  identifierBind(expr: string): RotationSensorBuilder;
  objectName(value: string): RotationSensorBuilder;
  objectNameBind(expr: string): RotationSensorBuilder;
  outputRange(value: number): RotationSensorBuilder;
  outputRangeBind(expr: string): RotationSensorBuilder;
  skipDuplicates(value: boolean): RotationSensorBuilder;
  skipDuplicatesBind(expr: string): RotationSensorBuilder;
  userOrientation(value: number): RotationSensorBuilder;
  userOrientationBind(expr: string): RotationSensorBuilder;
  onActiveChanged(body: string): RotationSensorBuilder;
  onAlwaysOnChanged(body: string): RotationSensorBuilder;
  onAvailableDataRatesChanged(body: string): RotationSensorBuilder;
  onAxesOrientationModeChanged(body: string): RotationSensorBuilder;
  onBufferSizeChanged(body: string): RotationSensorBuilder;
  onBusyChanged(body: string): RotationSensorBuilder;
  onConnectedToBackendChanged(body: string): RotationSensorBuilder;
  onCurrentOrientationChanged(body: string): RotationSensorBuilder;
  onDataRateChanged(body: string): RotationSensorBuilder;
  onDescriptionChanged(body: string): RotationSensorBuilder;
  onEfficientBufferSizeChanged(body: string): RotationSensorBuilder;
  onErrorChanged(body: string): RotationSensorBuilder;
  onHasZChanged(body: string): RotationSensorBuilder;
  onIdentifierChanged(body: string): RotationSensorBuilder;
  onMaxBufferSizeChanged(body: string): RotationSensorBuilder;
  onObjectNameChanged(body: string): RotationSensorBuilder;
  onOutputRangeChanged(body: string): RotationSensorBuilder;
  onOutputRangesChanged(body: string): RotationSensorBuilder;
  onReadingChanged(body: string): RotationSensorBuilder;
  onSkipDuplicatesChanged(body: string): RotationSensorBuilder;
  onUserOrientationChanged(body: string): RotationSensorBuilder;
}

const ROTATIONSENSOR_META: TypeMetadata = {
  typeName: 'RotationSensor',
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
    { handlerName: 'onHasZChanged', paramCount: 1 },
    { handlerName: 'onIdentifierChanged', paramCount: 0 },
    { handlerName: 'onMaxBufferSizeChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOutputRangeChanged', paramCount: 0 },
    { handlerName: 'onOutputRangesChanged', paramCount: 0 },
    { handlerName: 'onReadingChanged', paramCount: 0 },
    { handlerName: 'onSkipDuplicatesChanged', paramCount: 1 },
    { handlerName: 'onUserOrientationChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function RotationSensor(): RotationSensorBuilder {
  return createFluentBuilder('RotationSensor', ROTATIONSENSOR_META) as unknown as RotationSensorBuilder;
}

export namespace RotationSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken('RotationSensor', 'AxesOrientationMode', 'FixedOrientation');
    export const AutomaticOrientation = createEnumToken('RotationSensor', 'AxesOrientationMode', 'AutomaticOrientation');
    export const UserOrientation = createEnumToken('RotationSensor', 'AxesOrientationMode', 'UserOrientation');
  }
  export namespace Feature {
    export const Buffering = createEnumToken('RotationSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('RotationSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('RotationSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('RotationSensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('RotationSensor', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('RotationSensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('RotationSensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken('RotationSensor', 'Feature', 'PressureSensorTemperature');
  }
}
