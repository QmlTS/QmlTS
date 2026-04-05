// AUTO-GENERATED — DO NOT EDIT
// Type: ProximitySensor
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface ProximitySensorBuilder {
  id(id: string): ProximitySensorBuilder;
  child(obj: QmlObjectBuilder): ProximitySensorBuilder;

  active(value: boolean): ProximitySensorBuilder;
  activeBind(expr: string): ProximitySensorBuilder;
  alwaysOn(value: boolean): ProximitySensorBuilder;
  alwaysOnBind(expr: string): ProximitySensorBuilder;
  axesOrientationMode(value: QmlEnumToken): ProximitySensorBuilder;
  axesOrientationModeBind(expr: string): ProximitySensorBuilder;
  bufferSize(value: number): ProximitySensorBuilder;
  bufferSizeBind(expr: string): ProximitySensorBuilder;
  dataRate(value: number): ProximitySensorBuilder;
  dataRateBind(expr: string): ProximitySensorBuilder;
  identifier(value: string): ProximitySensorBuilder;
  identifierBind(expr: string): ProximitySensorBuilder;
  objectName(value: string): ProximitySensorBuilder;
  objectNameBind(expr: string): ProximitySensorBuilder;
  outputRange(value: number): ProximitySensorBuilder;
  outputRangeBind(expr: string): ProximitySensorBuilder;
  skipDuplicates(value: boolean): ProximitySensorBuilder;
  skipDuplicatesBind(expr: string): ProximitySensorBuilder;
  userOrientation(value: number): ProximitySensorBuilder;
  userOrientationBind(expr: string): ProximitySensorBuilder;
  onActiveChanged(body: string): ProximitySensorBuilder;
  onAlwaysOnChanged(body: string): ProximitySensorBuilder;
  onAvailableDataRatesChanged(body: string): ProximitySensorBuilder;
  onAxesOrientationModeChanged(body: string): ProximitySensorBuilder;
  onBufferSizeChanged(body: string): ProximitySensorBuilder;
  onBusyChanged(body: string): ProximitySensorBuilder;
  onConnectedToBackendChanged(body: string): ProximitySensorBuilder;
  onCurrentOrientationChanged(body: string): ProximitySensorBuilder;
  onDataRateChanged(body: string): ProximitySensorBuilder;
  onDescriptionChanged(body: string): ProximitySensorBuilder;
  onEfficientBufferSizeChanged(body: string): ProximitySensorBuilder;
  onErrorChanged(body: string): ProximitySensorBuilder;
  onIdentifierChanged(body: string): ProximitySensorBuilder;
  onMaxBufferSizeChanged(body: string): ProximitySensorBuilder;
  onObjectNameChanged(body: string): ProximitySensorBuilder;
  onOutputRangeChanged(body: string): ProximitySensorBuilder;
  onOutputRangesChanged(body: string): ProximitySensorBuilder;
  onReadingChanged(body: string): ProximitySensorBuilder;
  onSkipDuplicatesChanged(body: string): ProximitySensorBuilder;
  onUserOrientationChanged(body: string): ProximitySensorBuilder;
}

const PROXIMITYSENSOR_META: TypeMetadata = {
  typeName: 'ProximitySensor',
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

export function ProximitySensor(): ProximitySensorBuilder {
  return createFluentBuilder('ProximitySensor', PROXIMITYSENSOR_META) as unknown as ProximitySensorBuilder;
}

export namespace ProximitySensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken('ProximitySensor', 'AxesOrientationMode', 'FixedOrientation');
    export const AutomaticOrientation = createEnumToken('ProximitySensor', 'AxesOrientationMode', 'AutomaticOrientation');
    export const UserOrientation = createEnumToken('ProximitySensor', 'AxesOrientationMode', 'UserOrientation');
  }
  export namespace Feature {
    export const Buffering = createEnumToken('ProximitySensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('ProximitySensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('ProximitySensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('ProximitySensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken('ProximitySensor', 'Feature', 'AccelerationMode');
    export const SkipDuplicates = createEnumToken('ProximitySensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('ProximitySensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken('ProximitySensor', 'Feature', 'PressureSensorTemperature');
  }
}
