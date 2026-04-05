// AUTO-GENERATED — DO NOT EDIT
// Type: Camera
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlMatrix4x4,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface CameraBuilder {
  id(id: string): CameraBuilder;
  child(obj: QmlObjectBuilder): CameraBuilder;

  aspectRatio(value: number): CameraBuilder;
  aspectRatioBind(expr: string): CameraBuilder;
  bottom(value: number): CameraBuilder;
  bottomBind(expr: string): CameraBuilder;
  enabled(value: boolean): CameraBuilder;
  enabledBind(expr: string): CameraBuilder;
  exposure(value: number): CameraBuilder;
  exposureBind(expr: string): CameraBuilder;
  farPlane(value: number): CameraBuilder;
  farPlaneBind(expr: string): CameraBuilder;
  fieldOfView(value: number): CameraBuilder;
  fieldOfViewBind(expr: string): CameraBuilder;
  left(value: number): CameraBuilder;
  leftBind(expr: string): CameraBuilder;
  nearPlane(value: number): CameraBuilder;
  nearPlaneBind(expr: string): CameraBuilder;
  objectName(value: string): CameraBuilder;
  objectNameBind(expr: string): CameraBuilder;
  parent(value: QmlValue): CameraBuilder;
  parentBind(expr: string): CameraBuilder;
  position(value: QmlVector3d): CameraBuilder;
  positionBind(expr: string): CameraBuilder;
  projectionMatrix(value: QmlMatrix4x4): CameraBuilder;
  projectionMatrixBind(expr: string): CameraBuilder;
  projectionType(value: QmlEnumToken): CameraBuilder;
  projectionTypeBind(expr: string): CameraBuilder;
  right(value: number): CameraBuilder;
  rightBind(expr: string): CameraBuilder;
  top(value: number): CameraBuilder;
  topBind(expr: string): CameraBuilder;
  upVector(value: QmlVector3d): CameraBuilder;
  upVectorBind(expr: string): CameraBuilder;
  viewCenter(value: QmlVector3d): CameraBuilder;
  viewCenterBind(expr: string): CameraBuilder;
  onAspectRatioChanged(body: string): CameraBuilder;
  onBottomChanged(body: string): CameraBuilder;
  onEnabledChanged(body: string): CameraBuilder;
  onExposureChanged(body: string): CameraBuilder;
  onFarPlaneChanged(body: string): CameraBuilder;
  onFieldOfViewChanged(body: string): CameraBuilder;
  onLeftChanged(body: string): CameraBuilder;
  onNearPlaneChanged(body: string): CameraBuilder;
  onNodeDestroyed(body: string): CameraBuilder;
  onObjectNameChanged(body: string): CameraBuilder;
  onParentChanged(body: string): CameraBuilder;
  onPositionChanged(body: string): CameraBuilder;
  onProjectionMatrixChanged(body: string): CameraBuilder;
  onProjectionTypeChanged(body: string): CameraBuilder;
  onRightChanged(body: string): CameraBuilder;
  onTopChanged(body: string): CameraBuilder;
  onUpVectorChanged(body: string): CameraBuilder;
  onViewCenterChanged(body: string): CameraBuilder;
  onViewMatrixChanged(body: string): CameraBuilder;
  onViewVectorChanged(body: string): CameraBuilder;
}

const CAMERA_META: TypeMetadata = {
  typeName: 'Camera',
  properties: [
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'bottom', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'exposure', hasValue: true, hasBinding: true },
    { name: 'farPlane', hasValue: true, hasBinding: true },
    { name: 'fieldOfView', hasValue: true, hasBinding: true },
    { name: 'left', hasValue: true, hasBinding: true },
    { name: 'nearPlane', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'projectionMatrix', hasValue: true, hasBinding: true },
    { name: 'projectionType', hasValue: true, hasBinding: true },
    { name: 'right', hasValue: true, hasBinding: true },
    { name: 'top', hasValue: true, hasBinding: true },
    { name: 'upVector', hasValue: true, hasBinding: true },
    { name: 'viewCenter', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAspectRatioChanged', paramCount: 1 },
    { handlerName: 'onBottomChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onExposureChanged', paramCount: 1 },
    { handlerName: 'onFarPlaneChanged', paramCount: 1 },
    { handlerName: 'onFieldOfViewChanged', paramCount: 1 },
    { handlerName: 'onLeftChanged', paramCount: 1 },
    { handlerName: 'onNearPlaneChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onProjectionMatrixChanged', paramCount: 1 },
    { handlerName: 'onProjectionTypeChanged', paramCount: 1 },
    { handlerName: 'onRightChanged', paramCount: 1 },
    { handlerName: 'onTopChanged', paramCount: 1 },
    { handlerName: 'onUpVectorChanged', paramCount: 1 },
    { handlerName: 'onViewCenterChanged', paramCount: 1 },
    { handlerName: 'onViewMatrixChanged', paramCount: 0 },
    { handlerName: 'onViewVectorChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Camera(): CameraBuilder {
  return createFluentBuilder('Camera', CAMERA_META) as unknown as CameraBuilder;
}

export namespace Camera {
  export namespace CameraTranslationOption {
    export const TranslateViewCenter = createEnumToken(
      'Camera',
      'CameraTranslationOption',
      'TranslateViewCenter',
    );
    export const DontTranslateViewCenter = createEnumToken(
      'Camera',
      'CameraTranslationOption',
      'DontTranslateViewCenter',
    );
  }
}
