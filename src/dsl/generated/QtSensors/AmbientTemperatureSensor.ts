// AUTO-GENERATED — DO NOT EDIT
// Type: AmbientTemperatureSensor
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface AmbientTemperatureSensorBuilder {
  id(id: string): AmbientTemperatureSensorBuilder;
  child(obj: QmlObjectBuilder): AmbientTemperatureSensorBuilder;
  children(...objs: QmlObjectBuilder[]): AmbientTemperatureSensorBuilder;

  active(value: boolean): AmbientTemperatureSensorBuilder;
  activeBind(expr: string): AmbientTemperatureSensorBuilder;
  alwaysOn(value: boolean): AmbientTemperatureSensorBuilder;
  alwaysOnBind(expr: string): AmbientTemperatureSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): AmbientTemperatureSensorBuilder;
  axesOrientationModeBind(expr: string): AmbientTemperatureSensorBuilder;
  bufferSize(value: number): AmbientTemperatureSensorBuilder;
  bufferSizeBind(expr: string): AmbientTemperatureSensorBuilder;
  dataRate(value: number): AmbientTemperatureSensorBuilder;
  dataRateBind(expr: string): AmbientTemperatureSensorBuilder;
  identifier(value: string): AmbientTemperatureSensorBuilder;
  identifierBind(expr: string): AmbientTemperatureSensorBuilder;
  objectName(value: string): AmbientTemperatureSensorBuilder;
  objectNameBind(expr: string): AmbientTemperatureSensorBuilder;
  outputRange(value: number): AmbientTemperatureSensorBuilder;
  outputRangeBind(expr: string): AmbientTemperatureSensorBuilder;
  skipDuplicates(value: boolean): AmbientTemperatureSensorBuilder;
  skipDuplicatesBind(expr: string): AmbientTemperatureSensorBuilder;
  userOrientation(value: number): AmbientTemperatureSensorBuilder;
  userOrientationBind(expr: string): AmbientTemperatureSensorBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onAlwaysOnChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onAvailableDataRatesChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onAxesOrientationModeChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onBufferSizeChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onBusyChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onConnectedToBackendChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onCurrentOrientationChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onDataRateChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onDescriptionChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onEfficientBufferSizeChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onIdentifierChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onMaxBufferSizeChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onOutputRangeChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onOutputRangesChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onReadingChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onSkipDuplicatesChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
  onUserOrientationChanged(handler: DslSignalHandlerValue): AmbientTemperatureSensorBuilder;
}

const AMBIENTTEMPERATURESENSOR_META: TypeMetadata = {
  typeName: 'AmbientTemperatureSensor',
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

export function AmbientTemperatureSensor(): AmbientTemperatureSensorBuilder {
  return createFluentBuilder(
    'AmbientTemperatureSensor',
    AMBIENTTEMPERATURESENSOR_META,
  ) as unknown as AmbientTemperatureSensorBuilder;
}

export namespace AmbientTemperatureSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'AmbientTemperatureSensor',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'AmbientTemperatureSensor',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'AmbientTemperatureSensor',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('AmbientTemperatureSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('AmbientTemperatureSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('AmbientTemperatureSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken(
      'AmbientTemperatureSensor',
      'Feature',
      'FieldOfView',
    );
    export const AccelerationMode = createEnumToken(
      'AmbientTemperatureSensor',
      'Feature',
      'AccelerationMode',
    );
    export const SkipDuplicates = createEnumToken(
      'AmbientTemperatureSensor',
      'Feature',
      'SkipDuplicates',
    );
    export const AxesOrientation = createEnumToken(
      'AmbientTemperatureSensor',
      'Feature',
      'AxesOrientation',
    );
    export const PressureSensorTemperature = createEnumToken(
      'AmbientTemperatureSensor',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
