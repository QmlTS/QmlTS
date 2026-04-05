// AUTO-GENERATED — DO NOT EDIT
// Type: Transform
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
export interface TransformBuilder {
  id(id: string): TransformBuilder;
  child(obj: QmlObjectBuilder): TransformBuilder;

  enabled(value: boolean): TransformBuilder;
  enabledBind(expr: string): TransformBuilder;
  isShareable(value: boolean): TransformBuilder;
  isShareableBind(expr: string): TransformBuilder;
  matrix(value: QmlMatrix4x4): TransformBuilder;
  matrixBind(expr: string): TransformBuilder;
  objectName(value: string): TransformBuilder;
  objectNameBind(expr: string): TransformBuilder;
  parent(value: QmlValue): TransformBuilder;
  parentBind(expr: string): TransformBuilder;
  rotation(value: QmlQuaternion): TransformBuilder;
  rotationBind(expr: string): TransformBuilder;
  rotationX(value: number): TransformBuilder;
  rotationXBind(expr: string): TransformBuilder;
  rotationY(value: number): TransformBuilder;
  rotationYBind(expr: string): TransformBuilder;
  rotationZ(value: number): TransformBuilder;
  rotationZBind(expr: string): TransformBuilder;
  scale(value: number): TransformBuilder;
  scaleBind(expr: string): TransformBuilder;
  scale3D(value: QmlVector3d): TransformBuilder;
  scale3DBind(expr: string): TransformBuilder;
  translation(value: QmlVector3d): TransformBuilder;
  translationBind(expr: string): TransformBuilder;
  onAddedToEntity(body: string): TransformBuilder;
  onEnabledChanged(body: string): TransformBuilder;
  onMatrixChanged(body: string): TransformBuilder;
  onNodeDestroyed(body: string): TransformBuilder;
  onObjectNameChanged(body: string): TransformBuilder;
  onParentChanged(body: string): TransformBuilder;
  onRemovedFromEntity(body: string): TransformBuilder;
  onRotationChanged(body: string): TransformBuilder;
  onRotationXChanged(body: string): TransformBuilder;
  onRotationYChanged(body: string): TransformBuilder;
  onRotationZChanged(body: string): TransformBuilder;
  onScale3DChanged(body: string): TransformBuilder;
  onScaleChanged(body: string): TransformBuilder;
  onShareableChanged(body: string): TransformBuilder;
  onTranslationChanged(body: string): TransformBuilder;
  onWorldMatrixChanged(body: string): TransformBuilder;
}

const TRANSFORM_META: TypeMetadata = {
  typeName: 'Transform',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'matrix', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rotationX', hasValue: true, hasBinding: true },
    { name: 'rotationY', hasValue: true, hasBinding: true },
    { name: 'rotationZ', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'scale3D', hasValue: true, hasBinding: true },
    { name: 'translation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onMatrixChanged', paramCount: 0 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 1 },
    { handlerName: 'onRotationXChanged', paramCount: 1 },
    { handlerName: 'onRotationYChanged', paramCount: 1 },
    { handlerName: 'onRotationZChanged', paramCount: 1 },
    { handlerName: 'onScale3DChanged', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onTranslationChanged', paramCount: 1 },
    { handlerName: 'onWorldMatrixChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Transform(): TransformBuilder {
  return createFluentBuilder('Transform', TRANSFORM_META) as unknown as TransformBuilder;
}
