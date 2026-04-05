// AUTO-GENERATED — DO NOT EDIT
// Type: Custom3DLabel
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlFont, QmlObjectBuilder, QmlQuaternion, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface Custom3DLabelBuilder {
  id(id: string): Custom3DLabelBuilder;
  child(obj: QmlObjectBuilder): Custom3DLabelBuilder;

  backgroundColor(value: QmlColor): Custom3DLabelBuilder;
  backgroundColorBind(expr: string): Custom3DLabelBuilder;
  backgroundVisible(value: boolean): Custom3DLabelBuilder;
  backgroundVisibleBind(expr: string): Custom3DLabelBuilder;
  borderVisible(value: boolean): Custom3DLabelBuilder;
  borderVisibleBind(expr: string): Custom3DLabelBuilder;
  facingCamera(value: boolean): Custom3DLabelBuilder;
  facingCameraBind(expr: string): Custom3DLabelBuilder;
  font(value: QmlFont): Custom3DLabelBuilder;
  fontBind(expr: string): Custom3DLabelBuilder;
  meshFile(value: string): Custom3DLabelBuilder;
  meshFileBind(expr: string): Custom3DLabelBuilder;
  objectName(value: string): Custom3DLabelBuilder;
  objectNameBind(expr: string): Custom3DLabelBuilder;
  position(value: QmlVector3d): Custom3DLabelBuilder;
  positionBind(expr: string): Custom3DLabelBuilder;
  positionAbsolute(value: boolean): Custom3DLabelBuilder;
  positionAbsoluteBind(expr: string): Custom3DLabelBuilder;
  rotation(value: QmlQuaternion): Custom3DLabelBuilder;
  rotationBind(expr: string): Custom3DLabelBuilder;
  rotationAbsolute(value: boolean): Custom3DLabelBuilder;
  rotationAbsoluteBind(expr: string): Custom3DLabelBuilder;
  scaling(value: QmlVector3d): Custom3DLabelBuilder;
  scalingBind(expr: string): Custom3DLabelBuilder;
  scalingAbsolute(value: boolean): Custom3DLabelBuilder;
  scalingAbsoluteBind(expr: string): Custom3DLabelBuilder;
  shadowCasting(value: boolean): Custom3DLabelBuilder;
  shadowCastingBind(expr: string): Custom3DLabelBuilder;
  text(value: string): Custom3DLabelBuilder;
  textBind(expr: string): Custom3DLabelBuilder;
  textColor(value: QmlColor): Custom3DLabelBuilder;
  textColorBind(expr: string): Custom3DLabelBuilder;
  textureFile(value: string): Custom3DLabelBuilder;
  textureFileBind(expr: string): Custom3DLabelBuilder;
  visible(value: boolean): Custom3DLabelBuilder;
  visibleBind(expr: string): Custom3DLabelBuilder;
  onBackgroundColorChanged(body: string): Custom3DLabelBuilder;
  onBackgroundVisibleChanged(body: string): Custom3DLabelBuilder;
  onBorderVisibleChanged(body: string): Custom3DLabelBuilder;
  onFacingCameraChanged(body: string): Custom3DLabelBuilder;
  onFontChanged(body: string): Custom3DLabelBuilder;
  onMeshFileChanged(body: string): Custom3DLabelBuilder;
  onNeedUpdate(body: string): Custom3DLabelBuilder;
  onObjectNameChanged(body: string): Custom3DLabelBuilder;
  onPositionAbsoluteChanged(body: string): Custom3DLabelBuilder;
  onPositionChanged(body: string): Custom3DLabelBuilder;
  onRotationAbsoluteChanged(body: string): Custom3DLabelBuilder;
  onRotationChanged(body: string): Custom3DLabelBuilder;
  onScalingAbsoluteChanged(body: string): Custom3DLabelBuilder;
  onScalingChanged(body: string): Custom3DLabelBuilder;
  onShadowCastingChanged(body: string): Custom3DLabelBuilder;
  onTextChanged(body: string): Custom3DLabelBuilder;
  onTextColorChanged(body: string): Custom3DLabelBuilder;
  onTextureFileChanged(body: string): Custom3DLabelBuilder;
  onVisibleChanged(body: string): Custom3DLabelBuilder;
}

const CUSTOM3DLABEL_META: TypeMetadata = {
  typeName: 'Custom3DLabel',
  properties: [
    { name: 'backgroundColor', hasValue: true, hasBinding: true },
    { name: 'backgroundVisible', hasValue: true, hasBinding: true },
    { name: 'borderVisible', hasValue: true, hasBinding: true },
    { name: 'facingCamera', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'meshFile', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'positionAbsolute', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rotationAbsolute', hasValue: true, hasBinding: true },
    { name: 'scaling', hasValue: true, hasBinding: true },
    { name: 'scalingAbsolute', hasValue: true, hasBinding: true },
    { name: 'shadowCasting', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'textColor', hasValue: true, hasBinding: true },
    { name: 'textureFile', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBackgroundColorChanged', paramCount: 1 },
    { handlerName: 'onBackgroundVisibleChanged', paramCount: 1 },
    { handlerName: 'onBorderVisibleChanged', paramCount: 1 },
    { handlerName: 'onFacingCameraChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 1 },
    { handlerName: 'onMeshFileChanged', paramCount: 1 },
    { handlerName: 'onNeedUpdate', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionAbsoluteChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onRotationAbsoluteChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 1 },
    { handlerName: 'onScalingAbsoluteChanged', paramCount: 1 },
    { handlerName: 'onScalingChanged', paramCount: 1 },
    { handlerName: 'onShadowCastingChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 1 },
    { handlerName: 'onTextColorChanged', paramCount: 1 },
    { handlerName: 'onTextureFileChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Custom3DLabel(): Custom3DLabelBuilder {
  return createFluentBuilder('Custom3DLabel', CUSTOM3DLABEL_META) as unknown as Custom3DLabelBuilder;
}
