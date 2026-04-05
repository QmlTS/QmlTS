// AUTO-GENERATED — DO NOT EDIT
// Type: Camera
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlPoint,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface CameraBuilder {
  id(id: string): CameraBuilder;
  child(obj: QmlObjectBuilder): CameraBuilder;

  active(value: boolean): CameraBuilder;
  activeBind(expr: string): CameraBuilder;
  cameraDevice(value: QmlValue): CameraBuilder;
  cameraDeviceBind(expr: string): CameraBuilder;
  cameraFormat(value: QmlValue): CameraBuilder;
  cameraFormatBind(expr: string): CameraBuilder;
  colorTemperature(value: number): CameraBuilder;
  colorTemperatureBind(expr: string): CameraBuilder;
  customFocusPoint(value: QmlPoint): CameraBuilder;
  customFocusPointBind(expr: string): CameraBuilder;
  exposureCompensation(value: number): CameraBuilder;
  exposureCompensationBind(expr: string): CameraBuilder;
  exposureMode(value: QmlEnumToken): CameraBuilder;
  exposureModeBind(expr: string): CameraBuilder;
  flashMode(value: QmlEnumToken): CameraBuilder;
  flashModeBind(expr: string): CameraBuilder;
  focusDistance(value: number): CameraBuilder;
  focusDistanceBind(expr: string): CameraBuilder;
  focusMode(value: QmlEnumToken): CameraBuilder;
  focusModeBind(expr: string): CameraBuilder;
  manualExposureTime(value: number): CameraBuilder;
  manualExposureTimeBind(expr: string): CameraBuilder;
  manualIsoSensitivity(value: number): CameraBuilder;
  manualIsoSensitivityBind(expr: string): CameraBuilder;
  objectName(value: string): CameraBuilder;
  objectNameBind(expr: string): CameraBuilder;
  torchMode(value: QmlEnumToken): CameraBuilder;
  torchModeBind(expr: string): CameraBuilder;
  whiteBalanceMode(value: QmlEnumToken): CameraBuilder;
  whiteBalanceModeBind(expr: string): CameraBuilder;
  zoomFactor(value: number): CameraBuilder;
  zoomFactorBind(expr: string): CameraBuilder;
  onActiveChanged(body: string): CameraBuilder;
  onBrightnessChanged(body: string): CameraBuilder;
  onCameraDeviceChanged(body: string): CameraBuilder;
  onCameraFormatChanged(body: string): CameraBuilder;
  onColorTemperatureChanged(body: string): CameraBuilder;
  onContrastChanged(body: string): CameraBuilder;
  onCustomFocusPointChanged(body: string): CameraBuilder;
  onErrorChanged(body: string): CameraBuilder;
  onErrorOccurred(body: string): CameraBuilder;
  onExposureCompensationChanged(body: string): CameraBuilder;
  onExposureModeChanged(body: string): CameraBuilder;
  onExposureTimeChanged(body: string): CameraBuilder;
  onFlashModeChanged(body: string): CameraBuilder;
  onFlashReady(body: string): CameraBuilder;
  onFocusDistanceChanged(body: string): CameraBuilder;
  onFocusModeChanged(body: string): CameraBuilder;
  onFocusPointChanged(body: string): CameraBuilder;
  onHueChanged(body: string): CameraBuilder;
  onIsoSensitivityChanged(body: string): CameraBuilder;
  onManualExposureTimeChanged(body: string): CameraBuilder;
  onManualIsoSensitivityChanged(body: string): CameraBuilder;
  onMaximumZoomFactorChanged(body: string): CameraBuilder;
  onMinimumZoomFactorChanged(body: string): CameraBuilder;
  onObjectNameChanged(body: string): CameraBuilder;
  onSaturationChanged(body: string): CameraBuilder;
  onSupportedFeaturesChanged(body: string): CameraBuilder;
  onTorchModeChanged(body: string): CameraBuilder;
  onWhiteBalanceModeChanged(body: string): CameraBuilder;
  onZoomFactorChanged(body: string): CameraBuilder;
}

const CAMERA_META: TypeMetadata = {
  typeName: 'Camera',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'cameraDevice', hasValue: true, hasBinding: true },
    { name: 'cameraFormat', hasValue: true, hasBinding: true },
    { name: 'colorTemperature', hasValue: true, hasBinding: true },
    { name: 'customFocusPoint', hasValue: true, hasBinding: true },
    { name: 'exposureCompensation', hasValue: true, hasBinding: true },
    { name: 'exposureMode', hasValue: true, hasBinding: true },
    { name: 'flashMode', hasValue: true, hasBinding: true },
    { name: 'focusDistance', hasValue: true, hasBinding: true },
    { name: 'focusMode', hasValue: true, hasBinding: true },
    { name: 'manualExposureTime', hasValue: true, hasBinding: true },
    { name: 'manualIsoSensitivity', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'torchMode', hasValue: true, hasBinding: true },
    { name: 'whiteBalanceMode', hasValue: true, hasBinding: true },
    { name: 'zoomFactor', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 1 },
    { handlerName: 'onBrightnessChanged', paramCount: 0 },
    { handlerName: 'onCameraDeviceChanged', paramCount: 0 },
    { handlerName: 'onCameraFormatChanged', paramCount: 0 },
    { handlerName: 'onColorTemperatureChanged', paramCount: 0 },
    { handlerName: 'onContrastChanged', paramCount: 0 },
    { handlerName: 'onCustomFocusPointChanged', paramCount: 0 },
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onErrorOccurred', paramCount: 2 },
    { handlerName: 'onExposureCompensationChanged', paramCount: 1 },
    { handlerName: 'onExposureModeChanged', paramCount: 0 },
    { handlerName: 'onExposureTimeChanged', paramCount: 1 },
    { handlerName: 'onFlashModeChanged', paramCount: 0 },
    { handlerName: 'onFlashReady', paramCount: 1 },
    { handlerName: 'onFocusDistanceChanged', paramCount: 1 },
    { handlerName: 'onFocusModeChanged', paramCount: 0 },
    { handlerName: 'onFocusPointChanged', paramCount: 0 },
    { handlerName: 'onHueChanged', paramCount: 0 },
    { handlerName: 'onIsoSensitivityChanged', paramCount: 1 },
    { handlerName: 'onManualExposureTimeChanged', paramCount: 1 },
    { handlerName: 'onManualIsoSensitivityChanged', paramCount: 1 },
    { handlerName: 'onMaximumZoomFactorChanged', paramCount: 1 },
    { handlerName: 'onMinimumZoomFactorChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSaturationChanged', paramCount: 0 },
    { handlerName: 'onSupportedFeaturesChanged', paramCount: 0 },
    { handlerName: 'onTorchModeChanged', paramCount: 0 },
    { handlerName: 'onWhiteBalanceModeChanged', paramCount: 0 },
    { handlerName: 'onZoomFactorChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Camera(): CameraBuilder {
  return createFluentBuilder('Camera', CAMERA_META) as unknown as CameraBuilder;
}

export namespace Camera {
  export namespace Error {
    export const NoError = createEnumToken('Camera', 'Error', 'NoError');
    export const CameraError = createEnumToken('Camera', 'Error', 'CameraError');
  }
  export namespace ExposureMode {
    export const ExposureAuto = createEnumToken('Camera', 'ExposureMode', 'ExposureAuto');
    export const ExposureManual = createEnumToken('Camera', 'ExposureMode', 'ExposureManual');
    export const ExposurePortrait = createEnumToken('Camera', 'ExposureMode', 'ExposurePortrait');
    export const ExposureNight = createEnumToken('Camera', 'ExposureMode', 'ExposureNight');
    export const ExposureSports = createEnumToken('Camera', 'ExposureMode', 'ExposureSports');
    export const ExposureSnow = createEnumToken('Camera', 'ExposureMode', 'ExposureSnow');
    export const ExposureBeach = createEnumToken('Camera', 'ExposureMode', 'ExposureBeach');
    export const ExposureAction = createEnumToken('Camera', 'ExposureMode', 'ExposureAction');
    export const ExposureLandscape = createEnumToken('Camera', 'ExposureMode', 'ExposureLandscape');
    export const ExposureNightPortrait = createEnumToken(
      'Camera',
      'ExposureMode',
      'ExposureNightPortrait',
    );
    export const ExposureTheatre = createEnumToken('Camera', 'ExposureMode', 'ExposureTheatre');
    export const ExposureSunset = createEnumToken('Camera', 'ExposureMode', 'ExposureSunset');
    export const ExposureSteadyPhoto = createEnumToken(
      'Camera',
      'ExposureMode',
      'ExposureSteadyPhoto',
    );
    export const ExposureFireworks = createEnumToken('Camera', 'ExposureMode', 'ExposureFireworks');
    export const ExposureParty = createEnumToken('Camera', 'ExposureMode', 'ExposureParty');
    export const ExposureCandlelight = createEnumToken(
      'Camera',
      'ExposureMode',
      'ExposureCandlelight',
    );
    export const ExposureBarcode = createEnumToken('Camera', 'ExposureMode', 'ExposureBarcode');
  }
  export namespace Features {
    export const ColorTemperature = createEnumToken('Camera', 'Features', 'ColorTemperature');
    export const ExposureCompensation = createEnumToken(
      'Camera',
      'Features',
      'ExposureCompensation',
    );
    export const IsoSensitivity = createEnumToken('Camera', 'Features', 'IsoSensitivity');
    export const ManualExposureTime = createEnumToken('Camera', 'Features', 'ManualExposureTime');
    export const CustomFocusPoint = createEnumToken('Camera', 'Features', 'CustomFocusPoint');
    export const FocusDistance = createEnumToken('Camera', 'Features', 'FocusDistance');
  }
  export namespace FlashMode {
    export const FlashOff = createEnumToken('Camera', 'FlashMode', 'FlashOff');
    export const FlashOn = createEnumToken('Camera', 'FlashMode', 'FlashOn');
    export const FlashAuto = createEnumToken('Camera', 'FlashMode', 'FlashAuto');
  }
  export namespace FocusMode {
    export const FocusModeAuto = createEnumToken('Camera', 'FocusMode', 'FocusModeAuto');
    export const FocusModeAutoNear = createEnumToken('Camera', 'FocusMode', 'FocusModeAutoNear');
    export const FocusModeAutoFar = createEnumToken('Camera', 'FocusMode', 'FocusModeAutoFar');
    export const FocusModeHyperfocal = createEnumToken(
      'Camera',
      'FocusMode',
      'FocusModeHyperfocal',
    );
    export const FocusModeInfinity = createEnumToken('Camera', 'FocusMode', 'FocusModeInfinity');
    export const FocusModeManual = createEnumToken('Camera', 'FocusMode', 'FocusModeManual');
  }
  export namespace TorchMode {
    export const TorchOff = createEnumToken('Camera', 'TorchMode', 'TorchOff');
    export const TorchOn = createEnumToken('Camera', 'TorchMode', 'TorchOn');
    export const TorchAuto = createEnumToken('Camera', 'TorchMode', 'TorchAuto');
  }
  export namespace WhiteBalanceMode {
    export const WhiteBalanceAuto = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceAuto',
    );
    export const WhiteBalanceManual = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceManual',
    );
    export const WhiteBalanceSunlight = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceSunlight',
    );
    export const WhiteBalanceCloudy = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceCloudy',
    );
    export const WhiteBalanceShade = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceShade',
    );
    export const WhiteBalanceTungsten = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceTungsten',
    );
    export const WhiteBalanceFluorescent = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceFluorescent',
    );
    export const WhiteBalanceFlash = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceFlash',
    );
    export const WhiteBalanceSunset = createEnumToken(
      'Camera',
      'WhiteBalanceMode',
      'WhiteBalanceSunset',
    );
  }
}
