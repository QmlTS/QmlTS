// AUTO-GENERATED — DO NOT EDIT
// Type: Joint
// Generated from Qt 6.11.0

import type {
  QmlMatrix4x4,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface JointBuilder {
  id(id: string): JointBuilder;
  child(obj: QmlObjectBuilder): JointBuilder;

  enabled(value: boolean): JointBuilder;
  enabledBind(expr: string): JointBuilder;
  inverseBindMatrix(value: QmlMatrix4x4): JointBuilder;
  inverseBindMatrixBind(expr: string): JointBuilder;
  name(value: string): JointBuilder;
  nameBind(expr: string): JointBuilder;
  objectName(value: string): JointBuilder;
  objectNameBind(expr: string): JointBuilder;
  parent(value: QmlValue): JointBuilder;
  parentBind(expr: string): JointBuilder;
  rotation(value: QmlQuaternion): JointBuilder;
  rotationBind(expr: string): JointBuilder;
  rotationX(value: number): JointBuilder;
  rotationXBind(expr: string): JointBuilder;
  rotationY(value: number): JointBuilder;
  rotationYBind(expr: string): JointBuilder;
  rotationZ(value: number): JointBuilder;
  rotationZBind(expr: string): JointBuilder;
  scale(value: QmlVector3d): JointBuilder;
  scaleBind(expr: string): JointBuilder;
  translation(value: QmlVector3d): JointBuilder;
  translationBind(expr: string): JointBuilder;
  onEnabledChanged(body: string): JointBuilder;
  onInverseBindMatrixChanged(body: string): JointBuilder;
  onNameChanged(body: string): JointBuilder;
  onNodeDestroyed(body: string): JointBuilder;
  onObjectNameChanged(body: string): JointBuilder;
  onParentChanged(body: string): JointBuilder;
  onRotationChanged(body: string): JointBuilder;
  onRotationXChanged(body: string): JointBuilder;
  onRotationYChanged(body: string): JointBuilder;
  onRotationZChanged(body: string): JointBuilder;
  onScaleChanged(body: string): JointBuilder;
  onTranslationChanged(body: string): JointBuilder;
}

const JOINT_META: TypeMetadata = {
  typeName: 'Joint',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'inverseBindMatrix', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rotationX', hasValue: true, hasBinding: true },
    { name: 'rotationY', hasValue: true, hasBinding: true },
    { name: 'rotationZ', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'translation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onInverseBindMatrixChanged', paramCount: 1 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 1 },
    { handlerName: 'onRotationXChanged', paramCount: 1 },
    { handlerName: 'onRotationYChanged', paramCount: 1 },
    { handlerName: 'onRotationZChanged', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 1 },
    { handlerName: 'onTranslationChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Joint(): JointBuilder {
  return createFluentBuilder('Joint', JOINT_META) as unknown as JointBuilder;
}
