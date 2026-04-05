// AUTO-GENERATED — DO NOT EDIT
// Type: HumiditySensor
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface HumiditySensorBuilder {
  id(id: string): HumiditySensorBuilder;
  child(obj: QmlObjectBuilder): HumiditySensorBuilder;

  active(value: boolean): HumiditySensorBuilder;
  activeBind(expr: string): HumiditySensorBuilder;
  alwaysOn(value: boolean): HumiditySensorBuilder;
  alwaysOnBind(expr: string): HumiditySensorBuilder;
  axesOrientationMode(value: QmlEnumToken): HumiditySensorBuilder;
  axesOrientationModeBind(expr: string): HumiditySensorBuilder;
  bufferSize(value: number): HumiditySensorBuilder;
  bufferSizeBind(expr: string): HumiditySensorBuilder;
  dataRate(value: number): HumiditySensorBuilder;
  dataRateBind(expr: string): HumiditySensorBuilder;
  identifier(value: string): HumiditySensorBuilder;
  identifierBind(expr: string): HumiditySensorBuilder;
  objectName(value: string): HumiditySensorBuilder;
  objectNameBind(expr: string): HumiditySensorBuilder;
  outputRange(value: number): HumiditySensorBuilder;
  outputRangeBind(expr: string): HumiditySensorBuilder;
  skipDuplicates(value: boolean): HumiditySensorBuilder;
  skipDuplicatesBind(expr: string): HumiditySensorBuilder;
  userOrientation(value: number): HumiditySensorBuilder;
  userOrientationBind(expr: string): HumiditySensorBuilder;
  onActiveChanged(body: string): HumiditySensorBuilder;
  onAlwaysOnChanged(body: string): HumiditySensorBuilder;
  onAvailableDataRatesChanged(body: string): HumiditySensorBuilder;
  onAxesOrientationModeChanged(body: string): HumiditySensorBuilder;
  onBufferSizeChanged(body: string): HumiditySensorBuilder;
  onBusyChanged(body: string): HumiditySensorBuilder;
  onConnectedToBackendChanged(body: string): HumiditySensorBuilder;
  onCurrentOrientationChanged(body: string): HumiditySensorBuilder;
  onDataRateChanged(body: string): HumiditySensorBuilder;
  onDescriptionChanged(body: string): HumiditySensorBuilder;
  onEfficientBufferSizeChanged(body: string): HumiditySensorBuilder;
  onErrorChanged(body: string): HumiditySensorBuilder;
  onIdentifierChanged(body: string): HumiditySensorBuilder;
  onMaxBufferSizeChanged(body: string): HumiditySensorBuilder;
  onObjectNameChanged(body: string): HumiditySensorBuilder;
  onOutputRangeChanged(body: string): HumiditySensorBuilder;
  onOutputRangesChanged(body: string): HumiditySensorBuilder;
  onReadingChanged(body: string): HumiditySensorBuilder;
  onSkipDuplicatesChanged(body: string): HumiditySensorBuilder;
  onUserOrientationChanged(body: string): HumiditySensorBuilder;
}

const HUMIDITYSENSOR_META: TypeMetadata = {
  typeName: 'HumiditySensor',
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
  grouped: [
  ],
  attached: [
  ],
};

export function HumiditySensor(): HumiditySensorBuilder {
  return createFluentBuilder('HumiditySensor', HUMIDITYSENSOR_META) as unknown as HumiditySensorBuilder;
}

export namespace HumiditySensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken('HumiditySensor', 'AxesOrientationMode', 'FixedOrientation');
    export const AutomaticOrientation = createEnumToken('HumiditySensor', 'AxesOrientationMode', 'AutomaticOrientation');
    export const UserOrientation = createEnumToken('HumiditySensor', 'AxesOrientationMode', 'UserOrientation');
  }
  export namespace Feature {
    export const Buffering = createEnumToken('HumiditySensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('HumiditySensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('HumiditySensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('HumiditySensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('HumiditySensor', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('HumiditySensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('HumiditySensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken('HumiditySensor', 'Feature', 'PressureSensorTemperature');
  }
}
