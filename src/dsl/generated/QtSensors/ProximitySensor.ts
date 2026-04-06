// AUTO-GENERATED — DO NOT EDIT
// Type: ProximitySensor
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ProximitySensorBuilder {
  id(id: string): ProximitySensorBuilder;
  child(obj: QmlObjectBuilder): ProximitySensorBuilder;
  children(...objs: QmlObjectBuilder[]): ProximitySensorBuilder;

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
  onActiveChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onAlwaysOnChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onAvailableDataRatesChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onAxesOrientationModeChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onBufferSizeChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onBusyChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onConnectedToBackendChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onCurrentOrientationChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onDataRateChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onDescriptionChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onEfficientBufferSizeChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onIdentifierChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onMaxBufferSizeChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onOutputRangeChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onOutputRangesChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onReadingChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onSkipDuplicatesChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
  onUserOrientationChanged(handler: DslSignalHandlerValue): ProximitySensorBuilder;
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
  grouped: [],
  attached: [],
};

export function ProximitySensor(): ProximitySensorBuilder {
  return createFluentBuilder(
    'ProximitySensor',
    PROXIMITYSENSOR_META,
  ) as unknown as ProximitySensorBuilder;
}

export namespace ProximitySensor {
  export namespace AxesOrientationMode {
    export const FixedOrientation = createEnumToken(
      'ProximitySensor',
      'AxesOrientationMode',
      'FixedOrientation',
    );
    export const AutomaticOrientation = createEnumToken(
      'ProximitySensor',
      'AxesOrientationMode',
      'AutomaticOrientation',
    );
    export const UserOrientation = createEnumToken(
      'ProximitySensor',
      'AxesOrientationMode',
      'UserOrientation',
    );
  }
  export namespace Feature {
    export const Buffering = createEnumToken('ProximitySensor', 'Feature', 'Buffering');
    export const AlwaysOn = createEnumToken('ProximitySensor', 'Feature', 'AlwaysOn');
    export const GeoValues = createEnumToken('ProximitySensor', 'Feature', 'GeoValues');
    export const FieldOfView = createEnumToken('ProximitySensor', 'Feature', 'FieldOfView');
    export const AccelerationMode = createEnumToken(
      'ProximitySensor',
      'Feature',
      'AccelerationMode',
    );
    export const SkipDuplicates = createEnumToken('ProximitySensor', 'Feature', 'SkipDuplicates');
    export const AxesOrientation = createEnumToken('ProximitySensor', 'Feature', 'AxesOrientation');
    export const PressureSensorTemperature = createEnumToken(
      'ProximitySensor',
      'Feature',
      'PressureSensorTemperature',
    );
  }
}
