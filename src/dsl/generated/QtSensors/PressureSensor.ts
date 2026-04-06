// AUTO-GENERATED — DO NOT EDIT
// Type: PressureSensor
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface PressureSensorBuilder {
  id(id: string): PressureSensorBuilder;
  child(obj: QmlObjectBuilder): PressureSensorBuilder;
  children(...objs: QmlObjectBuilder[]): PressureSensorBuilder;

  active(value: boolean): PressureSensorBuilder;
  activeBind(expr: string): PressureSensorBuilder;
  alwaysOn(value: boolean): PressureSensorBuilder;
  alwaysOnBind(expr: string): PressureSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): PressureSensorBuilder;
  axesOrientationModeBind(expr: string): PressureSensorBuilder;
  bufferSize(value: number): PressureSensorBuilder;
  bufferSizeBind(expr: string): PressureSensorBuilder;
  dataRate(value: number): PressureSensorBuilder;
  dataRateBind(expr: string): PressureSensorBuilder;
  identifier(value: string): PressureSensorBuilder;
  identifierBind(expr: string): PressureSensorBuilder;
  objectName(value: string): PressureSensorBuilder;
  objectNameBind(expr: string): PressureSensorBuilder;
  outputRange(value: number): PressureSensorBuilder;
  outputRangeBind(expr: string): PressureSensorBuilder;
  skipDuplicates(value: boolean): PressureSensorBuilder;
  skipDuplicatesBind(expr: string): PressureSensorBuilder;
  userOrientation(value: number): PressureSensorBuilder;
  userOrientationBind(expr: string): PressureSensorBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onAlwaysOnChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onAvailableDataRatesChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onAxesOrientationModeChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onBufferSizeChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onBusyChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onConnectedToBackendChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onCurrentOrientationChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onDataRateChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onDescriptionChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onEfficientBufferSizeChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onIdentifierChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onMaxBufferSizeChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onOutputRangeChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onOutputRangesChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onReadingChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onSkipDuplicatesChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
  onUserOrientationChanged(handler: DslSignalHandlerValue): PressureSensorBuilder;
}

const PRESSURESENSOR_META: TypeMetadata = {
  typeName: 'PressureSensor',
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

export function PressureSensor(): PressureSensorBuilder {
  return createFluentBuilder(
    'PressureSensor',
    PRESSURESENSOR_META,
  ) as unknown as PressureSensorBuilder;
}

export namespace PressureSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'PressureSensor',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'PressureSensor',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'PressureSensor',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('PressureSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('PressureSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('PressureSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('PressureSensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken(
      'PressureSensor',
      'Feature',
      'AccelerationMode',
    );
    export const SkipDuplicates = createEnumToken('PressureSensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('PressureSensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'PressureSensor',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
