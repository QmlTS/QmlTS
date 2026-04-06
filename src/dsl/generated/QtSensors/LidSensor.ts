// AUTO-GENERATED — DO NOT EDIT
// Type: LidSensor
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface LidSensorBuilder {
  id(id: string): LidSensorBuilder;
  child(obj: QmlObjectBuilder): LidSensorBuilder;
  children(...objs: QmlObjectBuilder[]): LidSensorBuilder;

  active(value: boolean): LidSensorBuilder;
  activeBind(expr: string): LidSensorBuilder;
  alwaysOn(value: boolean): LidSensorBuilder;
  alwaysOnBind(expr: string): LidSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): LidSensorBuilder;
  axesOrientationModeBind(expr: string): LidSensorBuilder;
  bufferSize(value: number): LidSensorBuilder;
  bufferSizeBind(expr: string): LidSensorBuilder;
  dataRate(value: number): LidSensorBuilder;
  dataRateBind(expr: string): LidSensorBuilder;
  identifier(value: string): LidSensorBuilder;
  identifierBind(expr: string): LidSensorBuilder;
  objectName(value: string): LidSensorBuilder;
  objectNameBind(expr: string): LidSensorBuilder;
  outputRange(value: number): LidSensorBuilder;
  outputRangeBind(expr: string): LidSensorBuilder;
  skipDuplicates(value: boolean): LidSensorBuilder;
  skipDuplicatesBind(expr: string): LidSensorBuilder;
  userOrientation(value: number): LidSensorBuilder;
  userOrientationBind(expr: string): LidSensorBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onAlwaysOnChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onAvailableDataRatesChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onAxesOrientationModeChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onBufferSizeChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onBusyChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onConnectedToBackendChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onCurrentOrientationChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onDataRateChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onDescriptionChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onEfficientBufferSizeChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onIdentifierChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onMaxBufferSizeChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onOutputRangeChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onOutputRangesChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onReadingChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onSkipDuplicatesChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
  onUserOrientationChanged(handler: DslSignalHandlerValue): LidSensorBuilder;
}

const LIDSENSOR_META: TypeMetadata = {
  typeName: 'LidSensor',
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

export function LidSensor(): LidSensorBuilder {
  return createFluentBuilder('LidSensor', LIDSENSOR_META) as unknown as LidSensorBuilder;
}

export namespace LidSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'LidSensor',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'LidSensor',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'LidSensor',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('LidSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('LidSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('LidSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('LidSensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('LidSensor', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('LidSensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('LidSensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'LidSensor',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
