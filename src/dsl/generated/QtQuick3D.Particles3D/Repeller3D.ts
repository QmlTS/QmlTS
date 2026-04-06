// AUTO-GENERATED — DO NOT EDIT
// Type: Repeller3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ParticleSystem3DBuilder } from './ParticleSystem3D.js';
export interface Repeller3DBuilder {
  id(id: string): Repeller3DBuilder;
  child(obj: QmlObjectBuilder): Repeller3DBuilder;
  children(...objs: QmlObjectBuilder[]): Repeller3DBuilder;

  enabled(value: boolean): Repeller3DBuilder;
  enabledBind(expr: string): Repeller3DBuilder;
  eulerRotation(value: QmlVector3d): Repeller3DBuilder;
  eulerRotationBind(expr: string): Repeller3DBuilder;
  layers(value: number): Repeller3DBuilder;
  layersBind(expr: string): Repeller3DBuilder;
  objectName(value: string): Repeller3DBuilder;
  objectNameBind(expr: string): Repeller3DBuilder;
  opacity(value: number): Repeller3DBuilder;
  opacityBind(expr: string): Repeller3DBuilder;
  outerRadius(value: number): Repeller3DBuilder;
  outerRadiusBind(expr: string): Repeller3DBuilder;
  parent(value: QmlValue): Repeller3DBuilder;
  parentBind(expr: string): Repeller3DBuilder;
  pivot(value: QmlVector3d): Repeller3DBuilder;
  pivotBind(expr: string): Repeller3DBuilder;
  position(value: QmlVector3d): Repeller3DBuilder;
  positionBind(expr: string): Repeller3DBuilder;
  radius(value: number): Repeller3DBuilder;
  radiusBind(expr: string): Repeller3DBuilder;
  rotation(value: QmlQuaternion): Repeller3DBuilder;
  rotationBind(expr: string): Repeller3DBuilder;
  scale(value: QmlVector3d): Repeller3DBuilder;
  scaleBind(expr: string): Repeller3DBuilder;
  state(value: string): Repeller3DBuilder;
  stateBind(expr: string): Repeller3DBuilder;
  staticFlags(value: number): Repeller3DBuilder;
  staticFlagsBind(expr: string): Repeller3DBuilder;
  strength(value: number): Repeller3DBuilder;
  strengthBind(expr: string): Repeller3DBuilder;
  system(value: ParticleSystem3DBuilder): Repeller3DBuilder;
  systemBind(expr: string): Repeller3DBuilder;
  visible(value: boolean): Repeller3DBuilder;
  visibleBind(expr: string): Repeller3DBuilder;
  x(value: number): Repeller3DBuilder;
  xBind(expr: string): Repeller3DBuilder;
  y(value: number): Repeller3DBuilder;
  yBind(expr: string): Repeller3DBuilder;
  z(value: number): Repeller3DBuilder;
  zBind(expr: string): Repeller3DBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onOuterRadiusChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onRadiusChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onRightChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onStateChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onStrengthChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onUpChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onUpdate(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onXChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onYChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
  onZChanged(handler: DslSignalHandlerValue): Repeller3DBuilder;
}

const REPELLER3D_META: TypeMetadata = {
  typeName: 'Repeller3D',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'outerRadius', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'strength', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOuterRadiusChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRadiusChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onStrengthChanged', paramCount: 0 },
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

export function Repeller3D(): Repeller3DBuilder {
  return createFluentBuilder('Repeller3D', REPELLER3D_META) as unknown as Repeller3DBuilder;
}

export namespace Repeller3D {
  export namespace StaticFlags {
    export const None = createEnumToken('Repeller3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Repeller3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Repeller3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Repeller3D', 'TransformSpace', 'SceneSpace');
  }
}
