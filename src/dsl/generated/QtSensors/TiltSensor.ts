// AUTO-GENERATED — DO NOT EDIT
// Type: TiltSensor
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TiltSensorBuilder {
  id(id: string): TiltSensorBuilder;
  child(obj: QmlObjectBuilder): TiltSensorBuilder;
  children(...objs: QmlObjectBuilder[]): TiltSensorBuilder;

  active(value: boolean): TiltSensorBuilder;
  activeBind(expr: string): TiltSensorBuilder;
  alwaysOn(value: boolean): TiltSensorBuilder;
  alwaysOnBind(expr: string): TiltSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): TiltSensorBuilder;
  axesOrientationModeBind(expr: string): TiltSensorBuilder;
  bufferSize(value: number): TiltSensorBuilder;
  bufferSizeBind(expr: string): TiltSensorBuilder;
  dataRate(value: number): TiltSensorBuilder;
  dataRateBind(expr: string): TiltSensorBuilder;
  identifier(value: string): TiltSensorBuilder;
  identifierBind(expr: string): TiltSensorBuilder;
  objectName(value: string): TiltSensorBuilder;
  objectNameBind(expr: string): TiltSensorBuilder;
  outputRange(value: number): TiltSensorBuilder;
  outputRangeBind(expr: string): TiltSensorBuilder;
  skipDuplicates(value: boolean): TiltSensorBuilder;
  skipDuplicatesBind(expr: string): TiltSensorBuilder;
  userOrientation(value: number): TiltSensorBuilder;
  userOrientationBind(expr: string): TiltSensorBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onAlwaysOnChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onAvailableDataRatesChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onAxesOrientationModeChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onBufferSizeChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onBusyChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onConnectedToBackendChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onCurrentOrientationChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onDataRateChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onDescriptionChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onEfficientBufferSizeChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onIdentifierChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onMaxBufferSizeChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onOutputRangeChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onOutputRangesChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onReadingChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onSkipDuplicatesChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
  onUserOrientationChanged(handler: DslSignalHandlerValue): TiltSensorBuilder;
}

const TILTSENSOR_META: TypeMetadata = {
  typeName: 'TiltSensor',
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

export function TiltSensor(): TiltSensorBuilder {
  return createFluentBuilder('TiltSensor', TILTSENSOR_META) as unknown as TiltSensorBuilder;
}

export namespace TiltSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'TiltSensor',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'TiltSensor',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'TiltSensor',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('TiltSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('TiltSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('TiltSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('TiltSensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('TiltSensor', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('TiltSensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('TiltSensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'TiltSensor',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
