// AUTO-GENERATED — DO NOT EDIT
// Type: Accelerometer
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface AccelerometerBuilder {
  id(id: string): AccelerometerBuilder;
  child(obj: QmlObjectBuilder): AccelerometerBuilder;
  children(...objs: QmlObjectBuilder[]): AccelerometerBuilder;

  accelerationMode(value: QmlEnumToken): AccelerometerBuilder;
  accelerationModeBind(expr: string): AccelerometerBuilder;
  active(value: boolean): AccelerometerBuilder;
  activeBind(expr: string): AccelerometerBuilder;
  alwaysOn(value: boolean): AccelerometerBuilder;
  alwaysOnBind(expr: string): AccelerometerBuilder;
  axesOrientationMode(value: QmlEnumToken): AccelerometerBuilder;
  axesOrientationModeBind(expr: string): AccelerometerBuilder;
  bufferSize(value: number): AccelerometerBuilder;
  bufferSizeBind(expr: string): AccelerometerBuilder;
  dataRate(value: number): AccelerometerBuilder;
  dataRateBind(expr: string): AccelerometerBuilder;
  identifier(value: string): AccelerometerBuilder;
  identifierBind(expr: string): AccelerometerBuilder;
  objectName(value: string): AccelerometerBuilder;
  objectNameBind(expr: string): AccelerometerBuilder;
  outputRange(value: number): AccelerometerBuilder;
  outputRangeBind(expr: string): AccelerometerBuilder;
  skipDuplicates(value: boolean): AccelerometerBuilder;
  skipDuplicatesBind(expr: string): AccelerometerBuilder;
  userOrientation(value: number): AccelerometerBuilder;
  userOrientationBind(expr: string): AccelerometerBuilder;
  onAccelerationModeChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onAlwaysOnChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onAvailableDataRatesChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onAxesOrientationModeChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onBufferSizeChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onBusyChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onConnectedToBackendChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onCurrentOrientationChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onDataRateChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onDescriptionChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onEfficientBufferSizeChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onIdentifierChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onMaxBufferSizeChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onOutputRangeChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onOutputRangesChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onReadingChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onSkipDuplicatesChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
  onUserOrientationChanged(handler: DslSignalHandlerValue): AccelerometerBuilder;
}

const ACCELEROMETER_META: TypeMetadata = {
  typeName: 'Accelerometer',
  properties: [
    { name: 'accelerationMode', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAccelerationModeChanged', paramCount: 1 },
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

export function Accelerometer(): AccelerometerBuilder {
  return createFluentBuilder(
    'Accelerometer',
    ACCELEROMETER_META,
  ) as unknown as AccelerometerBuilder;
}

export namespace Accelerometer {
  export namespace AccelerationMode {
    export const Combined = createEnumToken('Accelerometer', 'AccelerationMode', 'Combined');
    export const Gravity = createEnumToken('Accelerometer', 'AccelerationMode', 'Gravity');
    export const User = createEnumToken('Accelerometer', 'AccelerationMode', 'User');
  }
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'Accelerometer',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'Accelerometer',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'Accelerometer',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('Accelerometer', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('Accelerometer', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('Accelerometer', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('Accelerometer', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('Accelerometer', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('Accelerometer', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('Accelerometer', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'Accelerometer',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
