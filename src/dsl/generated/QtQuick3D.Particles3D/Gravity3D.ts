// AUTO-GENERATED — DO NOT EDIT
// Type: Gravity3D
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ParticleSystem3DBuilder } from './ParticleSystem3D.js';
export interface Gravity3DBuilder {
  id(id: string): Gravity3DBuilder;
  child(obj: QmlObjectBuilder): Gravity3DBuilder;

  direction(value: QmlVector3d): Gravity3DBuilder;
  directionBind(expr: string): Gravity3DBuilder;
  enabled(value: boolean): Gravity3DBuilder;
  enabledBind(expr: string): Gravity3DBuilder;
  eulerRotation(value: QmlVector3d): Gravity3DBuilder;
  eulerRotationBind(expr: string): Gravity3DBuilder;
  layers(value: number): Gravity3DBuilder;
  layersBind(expr: string): Gravity3DBuilder;
  magnitude(value: number): Gravity3DBuilder;
  magnitudeBind(expr: string): Gravity3DBuilder;
  objectName(value: string): Gravity3DBuilder;
  objectNameBind(expr: string): Gravity3DBuilder;
  opacity(value: number): Gravity3DBuilder;
  opacityBind(expr: string): Gravity3DBuilder;
  parent(value: QmlValue): Gravity3DBuilder;
  parentBind(expr: string): Gravity3DBuilder;
  pivot(value: QmlVector3d): Gravity3DBuilder;
  pivotBind(expr: string): Gravity3DBuilder;
  position(value: QmlVector3d): Gravity3DBuilder;
  positionBind(expr: string): Gravity3DBuilder;
  rotation(value: QmlQuaternion): Gravity3DBuilder;
  rotationBind(expr: string): Gravity3DBuilder;
  scale(value: QmlVector3d): Gravity3DBuilder;
  scaleBind(expr: string): Gravity3DBuilder;
  state(value: string): Gravity3DBuilder;
  stateBind(expr: string): Gravity3DBuilder;
  staticFlags(value: number): Gravity3DBuilder;
  staticFlagsBind(expr: string): Gravity3DBuilder;
  system(value: ParticleSystem3DBuilder): Gravity3DBuilder;
  systemBind(expr: string): Gravity3DBuilder;
  visible(value: boolean): Gravity3DBuilder;
  visibleBind(expr: string): Gravity3DBuilder;
  x(value: number): Gravity3DBuilder;
  xBind(expr: string): Gravity3DBuilder;
  y(value: number): Gravity3DBuilder;
  yBind(expr: string): Gravity3DBuilder;
  z(value: number): Gravity3DBuilder;
  zBind(expr: string): Gravity3DBuilder;
  onChildrenChanged(body: string): Gravity3DBuilder;
  onDirectionChanged(body: string): Gravity3DBuilder;
  onEnabledChanged(body: string): Gravity3DBuilder;
  onEulerRotationChanged(body: string): Gravity3DBuilder;
  onForwardChanged(body: string): Gravity3DBuilder;
  onLayersChanged(body: string): Gravity3DBuilder;
  onLocalOpacityChanged(body: string): Gravity3DBuilder;
  onMagnitudeChanged(body: string): Gravity3DBuilder;
  onObjectNameChanged(body: string): Gravity3DBuilder;
  onParentChanged(body: string): Gravity3DBuilder;
  onPivotChanged(body: string): Gravity3DBuilder;
  onPositionChanged(body: string): Gravity3DBuilder;
  onRightChanged(body: string): Gravity3DBuilder;
  onRotationChanged(body: string): Gravity3DBuilder;
  onScaleChanged(body: string): Gravity3DBuilder;
  onScenePositionChanged(body: string): Gravity3DBuilder;
  onSceneRotationChanged(body: string): Gravity3DBuilder;
  onSceneScaleChanged(body: string): Gravity3DBuilder;
  onSceneTransformChanged(body: string): Gravity3DBuilder;
  onStateChanged(body: string): Gravity3DBuilder;
  onStaticFlagsChanged(body: string): Gravity3DBuilder;
  onSystemChanged(body: string): Gravity3DBuilder;
  onUpChanged(body: string): Gravity3DBuilder;
  onUpdate(body: string): Gravity3DBuilder;
  onVisibleChanged(body: string): Gravity3DBuilder;
  onXChanged(body: string): Gravity3DBuilder;
  onYChanged(body: string): Gravity3DBuilder;
  onZChanged(body: string): Gravity3DBuilder;
}

const GRAVITY3D_META: TypeMetadata = {
  typeName: 'Gravity3D',
  properties: [
    { name: 'direction', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'magnitude', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDirectionChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onMagnitudeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onSystemChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Gravity3D(): Gravity3DBuilder {
  return createFluentBuilder('Gravity3D', GRAVITY3D_META) as unknown as Gravity3DBuilder;
}

export namespace Gravity3D {
  export namespace StaticFlags {
    export const None = createEnumToken('Gravity3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Gravity3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Gravity3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Gravity3D', 'TransformSpace', 'SceneSpace');
  }
}
