// AUTO-GENERATED — DO NOT EDIT
// Type: Magnetometer
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface MagnetometerBuilder {
  id(id: string): MagnetometerBuilder;
  child(obj: QmlObjectBuilder): MagnetometerBuilder;
  children(...objs: QmlObjectBuilder[]): MagnetometerBuilder;

  active(value: boolean): MagnetometerBuilder;
  activeBind(expr: string): MagnetometerBuilder;
  alwaysOn(value: boolean): MagnetometerBuilder;
  alwaysOnBind(expr: string): MagnetometerBuilder;
  axesOrientationMode(value: QmlEnumToken): MagnetometerBuilder;
  axesOrientationModeBind(expr: string): MagnetometerBuilder;
  bufferSize(value: number): MagnetometerBuilder;
  bufferSizeBind(expr: string): MagnetometerBuilder;
  dataRate(value: number): MagnetometerBuilder;
  dataRateBind(expr: string): MagnetometerBuilder;
  identifier(value: string): MagnetometerBuilder;
  identifierBind(expr: string): MagnetometerBuilder;
  objectName(value: string): MagnetometerBuilder;
  objectNameBind(expr: string): MagnetometerBuilder;
  outputRange(value: number): MagnetometerBuilder;
  outputRangeBind(expr: string): MagnetometerBuilder;
  returnGeoValues(value: boolean): MagnetometerBuilder;
  returnGeoValuesBind(expr: string): MagnetometerBuilder;
  skipDuplicates(value: boolean): MagnetometerBuilder;
  skipDuplicatesBind(expr: string): MagnetometerBuilder;
  userOrientation(value: number): MagnetometerBuilder;
  userOrientationBind(expr: string): MagnetometerBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onAlwaysOnChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onAvailableDataRatesChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onAxesOrientationModeChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onBufferSizeChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onBusyChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onConnectedToBackendChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onCurrentOrientationChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onDataRateChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onDescriptionChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onEfficientBufferSizeChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onIdentifierChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onMaxBufferSizeChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onOutputRangeChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onOutputRangesChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onReadingChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onReturnGeoValuesChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onSkipDuplicatesChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
  onUserOrientationChanged(handler: DslSignalHandlerValue): MagnetometerBuilder;
}

const MAGNETOMETER_META: TypeMetadata = {
  typeName: 'Magnetometer',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'alwaysOn', hasValue: true, hasBinding: true },
    { name: 'axesOrientationMode', hasValue: true, hasBinding: true },
    { name: 'bufferSize', hasValue: true, hasBinding: true },
    { name: 'dataRate', hasValue: true, hasBinding: true },
    { name: 'identifier', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'outputRange', hasValue: true, hasBinding: true },
    { name: 'returnGeoValues', hasValue: true, hasBinding: true },
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
    { handlerName: 'onReturnGeoValuesChanged', paramCount: 1 },
    { handlerName: 'onSkipDuplicatesChanged', paramCount: 1 },
    { handlerName: 'onUserOrientationChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Magnetometer(): MagnetometerBuilder {
  return createFluentBuilder('Magnetometer', MAGNETOMETER_META) as unknown as MagnetometerBuilder;
}

export namespace Magnetometer {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'Magnetometer',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'Magnetometer',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'Magnetometer',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('Magnetometer', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('Magnetometer', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('Magnetometer', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('Magnetometer', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('Magnetometer', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('Magnetometer', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('Magnetometer', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'Magnetometer',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
