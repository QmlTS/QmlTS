// AUTO-GENERATED — DO NOT EDIT
// Type: AmbientLightSensor
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface AmbientLightSensorBuilder {
  id(id: string): AmbientLightSensorBuilder;
  child(obj: QmlObjectBuilder): AmbientLightSensorBuilder;

  active(value: boolean): AmbientLightSensorBuilder;
  activeBind(expr: string): AmbientLightSensorBuilder;
  alwaysOn(value: boolean): AmbientLightSensorBuilder;
  alwaysOnBind(expr: string): AmbientLightSensorBuilder;
  axesOrientationMode(value: QmlEnumToken): AmbientLightSensorBuilder;
  axesOrientationModeBind(expr: string): AmbientLightSensorBuilder;
  bufferSize(value: number): AmbientLightSensorBuilder;
  bufferSizeBind(expr: string): AmbientLightSensorBuilder;
  dataRate(value: number): AmbientLightSensorBuilder;
  dataRateBind(expr: string): AmbientLightSensorBuilder;
  identifier(value: string): AmbientLightSensorBuilder;
  identifierBind(expr: string): AmbientLightSensorBuilder;
  objectName(value: string): AmbientLightSensorBuilder;
  objectNameBind(expr: string): AmbientLightSensorBuilder;
  outputRange(value: number): AmbientLightSensorBuilder;
  outputRangeBind(expr: string): AmbientLightSensorBuilder;
  skipDuplicates(value: boolean): AmbientLightSensorBuilder;
  skipDuplicatesBind(expr: string): AmbientLightSensorBuilder;
  userOrientation(value: number): AmbientLightSensorBuilder;
  userOrientationBind(expr: string): AmbientLightSensorBuilder;
  onActiveChanged(body: string): AmbientLightSensorBuilder;
  onAlwaysOnChanged(body: string): AmbientLightSensorBuilder;
  onAvailableDataRatesChanged(body: string): AmbientLightSensorBuilder;
  onAxesOrientationModeChanged(body: string): AmbientLightSensorBuilder;
  onBufferSizeChanged(body: string): AmbientLightSensorBuilder;
  onBusyChanged(body: string): AmbientLightSensorBuilder;
  onConnectedToBackendChanged(body: string): AmbientLightSensorBuilder;
  onCurrentOrientationChanged(body: string): AmbientLightSensorBuilder;
  onDataRateChanged(body: string): AmbientLightSensorBuilder;
  onDescriptionChanged(body: string): AmbientLightSensorBuilder;
  onEfficientBufferSizeChanged(body: string): AmbientLightSensorBuilder;
  onErrorChanged(body: string): AmbientLightSensorBuilder;
  onIdentifierChanged(body: string): AmbientLightSensorBuilder;
  onMaxBufferSizeChanged(body: string): AmbientLightSensorBuilder;
  onObjectNameChanged(body: string): AmbientLightSensorBuilder;
  onOutputRangeChanged(body: string): AmbientLightSensorBuilder;
  onOutputRangesChanged(body: string): AmbientLightSensorBuilder;
  onReadingChanged(body: string): AmbientLightSensorBuilder;
  onSkipDuplicatesChanged(body: string): AmbientLightSensorBuilder;
  onUserOrientationChanged(body: string): AmbientLightSensorBuilder;
}

const AMBIENTLIGHTSENSOR_META: TypeMetadata = {
  typeName: 'AmbientLightSensor',
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

export function AmbientLightSensor(): AmbientLightSensorBuilder {
  return createFluentBuilder(
    'AmbientLightSensor',
    AMBIENTLIGHTSENSOR_META,
  ) as unknown as AmbientLightSensorBuilder;
}

export namespace AmbientLightSensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'AmbientLightSensor',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'AmbientLightSensor',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'AmbientLightSensor',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('AmbientLightSensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('AmbientLightSensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('AmbientLightSensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('AmbientLightSensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken(
      'AmbientLightSensor',
      'Feature',
      'AccelerationMode',
    );
    export const SkipDuplicates = createEnumToken(
      'AmbientLightSensor',
      'Feature',
      'SkipDuplicates',
    );
    export const AxesOrientation = createEnumToken(
      'AmbientLightSensor',
      'Feature',
      'AxesOrientation',
    );
    export const PressureSensorTemperature = createEnumToken(
      'AmbientLightSensor',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
