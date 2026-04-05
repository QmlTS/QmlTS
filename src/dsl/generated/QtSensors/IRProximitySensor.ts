// AUTO-GENERATED — DO NOT EDIT
// Type: IRProximitySensor
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface IRProximitySensorBuilder {
  id(id: string): IRProximitySensorBuilder;
  child(obj: QmlObjectBuilder): IRProximitySensorBuilder;

  active(value: boolean): IRProximitySensorBuilder;
  activeBind(expr: string): IRProximitySensorBuilder;
  alwaysOn(value: boolean): IRProximitySensorBuilder;
  alwaysOnBind(expr: string): IRProximitySensorBuilder;
  axesOrientationMode(value: QmlEnumToken): IRProximitySensorBuilder;
  axesOrientationModeBind(expr: string): IRProximitySensorBuilder;
  bufferSize(value: number): IRProximitySensorBuilder;
  bufferSizeBind(expr: string): IRProximitySensorBuilder;
  dataRate(value: number): IRProximitySensorBuilder;
  dataRateBind(expr: string): IRProximitySensorBuilder;
  identifier(value: string): IRProximitySensorBuilder;
  identifierBind(expr: string): IRProximitySensorBuilder;
  objectName(value: string): IRProximitySensorBuilder;
  objectNameBind(expr: string): IRProximitySensorBuilder;
  outputRange(value: number): IRProximitySensorBuilder;
  outputRangeBind(expr: string): IRProximitySensorBuilder;
  skipDuplicates(value: boolean): IRProximitySensorBuilder;
  skipDuplicatesBind(expr: string): IRProximitySensorBuilder;
  userOrientation(value: number): IRProximitySensorBuilder;
  userOrientationBind(expr: string): IRProximitySensorBuilder;
  onActiveChanged(body: string): IRProximitySensorBuilder;
  onAlwaysOnChanged(body: string): IRProximitySensorBuilder;
  onAvailableDataRatesChanged(body: string): IRProximitySensorBuilder;
  onAxesOrientationModeChanged(body: string): IRProximitySensorBuilder;
  onBufferSizeChanged(body: string): IRProximitySensorBuilder;
  onBusyChanged(body: string): IRProximitySensorBuilder;
  onConnectedToBackendChanged(body: string): IRProximitySensorBuilder;
  onCurrentOrientationChanged(body: string): IRProximitySensorBuilder;
  onDataRateChanged(body: string): IRProximitySensorBuilder;
  onDescriptionChanged(body: string): IRProximitySensorBuilder;
  onEfficientBufferSizeChanged(body: string): IRProximitySensorBuilder;
  onErrorChanged(body: string): IRProximitySensorBuilder;
  onIdentifierChanged(body: string): IRProximitySensorBuilder;
  onMaxBufferSizeChanged(body: string): IRProximitySensorBuilder;
  onObjectNameChanged(body: string): IRProximitySensorBuilder;
  onOutputRangeChanged(body: string): IRProximitySensorBuilder;
  onOutputRangesChanged(body: string): IRProximitySensorBuilder;
  onReadingChanged(body: string): IRProximitySensorBuilder;
  onSkipDuplicatesChanged(body: string): IRProximitySensorBuilder;
  onUserOrientationChanged(body: string): IRProximitySensorBuilder;
}

const IRPROXIMITYSENSOR_META: TypeMetadata = {
  typeName: 'IRProximitySensor',
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

export function IRProximitySensor(): IRProximitySensorBuilder {
  return createFluentBuilder('IRProximitySensor', IRPROXIMITYSENSOR_META) as unknown as IRProximitySensorBuilder;
}

export namespace IRProximitySensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken('IRProximitySensor', 'AxesOrientationMode', 'FixedOrientation');
    export const AutomaticOrientation = createEnumToken('IRProximitySensor', 'AxesOrientationMode', 'AutomaticOrientation');
    export const UserOrientation = createEnumToken('IRProximitySensor', 'AxesOrientationMode', 'UserOrientation');
  }
  export namespace Feature {
    export const Buffering = createEnumToken('IRProximitySensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('IRProximitySensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('IRProximitySensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('IRProximitySensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('IRProximitySensor', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('IRProximitySensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('IRProximitySensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken('IRProximitySensor', 'Feature', 'PressureSensorTemperature');
  }
}
