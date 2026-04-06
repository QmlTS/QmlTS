// AUTO-GENERATED — DO NOT EDIT
// Type: Custom3DItem
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface Custom3DItemBuilder {
  id(id: string): Custom3DItemBuilder;
  child(obj: QmlObjectBuilder): Custom3DItemBuilder;
  children(...objs: QmlObjectBuilder[]): Custom3DItemBuilder;

  meshFile(value: string): Custom3DItemBuilder;
  meshFileBind(expr: string): Custom3DItemBuilder;
  objectName(value: string): Custom3DItemBuilder;
  objectNameBind(expr: string): Custom3DItemBuilder;
  position(value: QmlVector3d): Custom3DItemBuilder;
  positionBind(expr: string): Custom3DItemBuilder;
  positionAbsolute(value: boolean): Custom3DItemBuilder;
  positionAbsoluteBind(expr: string): Custom3DItemBuilder;
  rotation(value: QmlQuaternion): Custom3DItemBuilder;
  rotationBind(expr: string): Custom3DItemBuilder;
  rotationAbsolute(value: boolean): Custom3DItemBuilder;
  rotationAbsoluteBind(expr: string): Custom3DItemBuilder;
  scaling(value: QmlVector3d): Custom3DItemBuilder;
  scalingBind(expr: string): Custom3DItemBuilder;
  scalingAbsolute(value: boolean): Custom3DItemBuilder;
  scalingAbsoluteBind(expr: string): Custom3DItemBuilder;
  shadowCasting(value: boolean): Custom3DItemBuilder;
  shadowCastingBind(expr: string): Custom3DItemBuilder;
  textureFile(value: string): Custom3DItemBuilder;
  textureFileBind(expr: string): Custom3DItemBuilder;
  visible(value: boolean): Custom3DItemBuilder;
  visibleBind(expr: string): Custom3DItemBuilder;
  onMeshFileChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onNeedUpdate(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onPositionAbsoluteChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onRotationAbsoluteChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onScalingAbsoluteChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onScalingChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onShadowCastingChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onTextureFileChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): Custom3DItemBuilder;
}

const CUSTOM3DITEM_META: TypeMetadata = {
  typeName: 'Custom3DItem',
  properties: [
    { name: 'meshFile', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'positionAbsolute', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rotationAbsolute', hasValue: true, hasBinding: true },
    { name: 'scaling', hasValue: true, hasBinding: true },
    { name: 'scalingAbsolute', hasValue: true, hasBinding: true },
    { name: 'shadowCasting', hasValue: true, hasBinding: true },
    { name: 'textureFile', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
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
    { handlerName: 'onTextureFileChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Custom3DItem(): Custom3DItemBuilder {
  return createFluentBuilder('Custom3DItem', CUSTOM3DITEM_META) as unknown as Custom3DItemBuilder;
}
