// AUTO-GENERATED — DO NOT EDIT
// Type: Camera3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface Camera3DBuilder {
  id(id: string): Camera3DBuilder;
  child(obj: QmlObjectBuilder): Camera3DBuilder;

  cameraPreset(value: QmlEnumToken): Camera3DBuilder;
  cameraPresetBind(expr: string): Camera3DBuilder;
  maxZoomLevel(value: number): Camera3DBuilder;
  maxZoomLevelBind(expr: string): Camera3DBuilder;
  minZoomLevel(value: number): Camera3DBuilder;
  minZoomLevelBind(expr: string): Camera3DBuilder;
  objectName(value: string): Camera3DBuilder;
  objectNameBind(expr: string): Camera3DBuilder;
  position(value: QmlVector3d): Camera3DBuilder;
  positionBind(expr: string): Camera3DBuilder;
  target(value: QmlVector3d): Camera3DBuilder;
  targetBind(expr: string): Camera3DBuilder;
  wrapXRotation(value: boolean): Camera3DBuilder;
  wrapXRotationBind(expr: string): Camera3DBuilder;
  wrapYRotation(value: boolean): Camera3DBuilder;
  wrapYRotationBind(expr: string): Camera3DBuilder;
  xRotation(value: number): Camera3DBuilder;
  xRotationBind(expr: string): Camera3DBuilder;
  yRotation(value: number): Camera3DBuilder;
  yRotationBind(expr: string): Camera3DBuilder;
  zoomLevel(value: number): Camera3DBuilder;
  zoomLevelBind(expr: string): Camera3DBuilder;
  onCameraPresetChanged(body: string): Camera3DBuilder;
  onMaxZoomLevelChanged(body: string): Camera3DBuilder;
  onMinZoomLevelChanged(body: string): Camera3DBuilder;
  onObjectNameChanged(body: string): Camera3DBuilder;
  onPositionChanged(body: string): Camera3DBuilder;
  onTargetChanged(body: string): Camera3DBuilder;
  onWrapXRotationChanged(body: string): Camera3DBuilder;
  onWrapYRotationChanged(body: string): Camera3DBuilder;
  onXRotationChanged(body: string): Camera3DBuilder;
  onYRotationChanged(body: string): Camera3DBuilder;
  onZoomLevelChanged(body: string): Camera3DBuilder;
}

const CAMERA3D_META: TypeMetadata = {
  typeName: 'Camera3D',
  properties: [
    { name: 'cameraPreset', hasValue: true, hasBinding: true },
    { name: 'maxZoomLevel', hasValue: true, hasBinding: true },
    { name: 'minZoomLevel', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'wrapXRotation', hasValue: true, hasBinding: true },
    { name: 'wrapYRotation', hasValue: true, hasBinding: true },
    { name: 'xRotation', hasValue: true, hasBinding: true },
    { name: 'yRotation', hasValue: true, hasBinding: true },
    { name: 'zoomLevel', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCameraPresetChanged', paramCount: 1 },
    { handlerName: 'onMaxZoomLevelChanged', paramCount: 1 },
    { handlerName: 'onMinZoomLevelChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 1 },
    { handlerName: 'onWrapXRotationChanged', paramCount: 1 },
    { handlerName: 'onWrapYRotationChanged', paramCount: 1 },
    { handlerName: 'onXRotationChanged', paramCount: 1 },
    { handlerName: 'onYRotationChanged', paramCount: 1 },
    { handlerName: 'onZoomLevelChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Camera3D(): Camera3DBuilder {
  return createFluentBuilder('Camera3D', CAMERA3D_META) as unknown as Camera3DBuilder;
}

export namespace Camera3D {
  export namespace CameraPreset {
    export const CameraPresetNone = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetNone');
    export const CameraPresetFrontLow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetFrontLow');
    export const CameraPresetFront = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetFront');
    export const CameraPresetFrontHigh = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetFrontHigh');
    export const CameraPresetLeftLow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetLeftLow');
    export const CameraPresetLeft = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetLeft');
    export const CameraPresetLeftHigh = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetLeftHigh');
    export const CameraPresetRightLow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetRightLow');
    export const CameraPresetRight = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetRight');
    export const CameraPresetRightHigh = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetRightHigh');
    export const CameraPresetBehindLow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetBehindLow');
    export const CameraPresetBehind = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetBehind');
    export const CameraPresetBehindHigh = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetBehindHigh');
    export const CameraPresetIsometricLeft = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetIsometricLeft');
    export const CameraPresetIsometricLeftHigh = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetIsometricLeftHigh');
    export const CameraPresetIsometricRight = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetIsometricRight');
    export const CameraPresetIsometricRightHigh = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetIsometricRightHigh');
    export const CameraPresetDirectlyAbove = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetDirectlyAbove');
    export const CameraPresetDirectlyAboveCW45 = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetDirectlyAboveCW45');
    export const CameraPresetDirectlyAboveCCW45 = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetDirectlyAboveCCW45');
    export const CameraPresetFrontBelow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetFrontBelow');
    export const CameraPresetLeftBelow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetLeftBelow');
    export const CameraPresetRightBelow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetRightBelow');
    export const CameraPresetBehindBelow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetBehindBelow');
    export const CameraPresetDirectlyBelow = createEnumToken('Camera3D', 'CameraPreset', 'CameraPresetDirectlyBelow');
  }
}
