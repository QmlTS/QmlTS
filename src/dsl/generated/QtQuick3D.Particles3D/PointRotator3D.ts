// AUTO-GENERATED — DO NOT EDIT
// Type: PointRotator3D
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
export interface PointRotator3DBuilder {
  id(id: string): PointRotator3DBuilder;
  child(obj: QmlObjectBuilder): PointRotator3DBuilder;
  children(...objs: QmlObjectBuilder[]): PointRotator3DBuilder;

  direction(value: QmlVector3d): PointRotator3DBuilder;
  directionBind(expr: string): PointRotator3DBuilder;
  enabled(value: boolean): PointRotator3DBuilder;
  enabledBind(expr: string): PointRotator3DBuilder;
  eulerRotation(value: QmlVector3d): PointRotator3DBuilder;
  eulerRotationBind(expr: string): PointRotator3DBuilder;
  layers(value: number): PointRotator3DBuilder;
  layersBind(expr: string): PointRotator3DBuilder;
  magnitude(value: number): PointRotator3DBuilder;
  magnitudeBind(expr: string): PointRotator3DBuilder;
  objectName(value: string): PointRotator3DBuilder;
  objectNameBind(expr: string): PointRotator3DBuilder;
  opacity(value: number): PointRotator3DBuilder;
  opacityBind(expr: string): PointRotator3DBuilder;
  parent(value: QmlValue): PointRotator3DBuilder;
  parentBind(expr: string): PointRotator3DBuilder;
  pivot(value: QmlVector3d): PointRotator3DBuilder;
  pivotBind(expr: string): PointRotator3DBuilder;
  pivotPoint(value: QmlVector3d): PointRotator3DBuilder;
  pivotPointBind(expr: string): PointRotator3DBuilder;
  position(value: QmlVector3d): PointRotator3DBuilder;
  positionBind(expr: string): PointRotator3DBuilder;
  rotation(value: QmlQuaternion): PointRotator3DBuilder;
  rotationBind(expr: string): PointRotator3DBuilder;
  scale(value: QmlVector3d): PointRotator3DBuilder;
  scaleBind(expr: string): PointRotator3DBuilder;
  state(value: string): PointRotator3DBuilder;
  stateBind(expr: string): PointRotator3DBuilder;
  staticFlags(value: number): PointRotator3DBuilder;
  staticFlagsBind(expr: string): PointRotator3DBuilder;
  system(value: ParticleSystem3DBuilder): PointRotator3DBuilder;
  systemBind(expr: string): PointRotator3DBuilder;
  visible(value: boolean): PointRotator3DBuilder;
  visibleBind(expr: string): PointRotator3DBuilder;
  x(value: number): PointRotator3DBuilder;
  xBind(expr: string): PointRotator3DBuilder;
  y(value: number): PointRotator3DBuilder;
  yBind(expr: string): PointRotator3DBuilder;
  z(value: number): PointRotator3DBuilder;
  zBind(expr: string): PointRotator3DBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onDirectionChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onMagnitudeChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onPivotPointChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onRightChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onStateChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onUpChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onUpdate(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onXChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onYChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
  onZChanged(handler: DslSignalHandlerValue): PointRotator3DBuilder;
}

const POINTROTATOR3D_META: TypeMetadata = {
  typeName: 'PointRotator3D',
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
    { name: 'pivotPoint', hasValue: true, hasBinding: true },
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
    { handlerName: 'onPivotPointChanged', paramCount: 0 },
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

export function PointRotator3D(): PointRotator3DBuilder {
  return createFluentBuilder(
    'PointRotator3D',
    POINTROTATOR3D_META,
  ) as unknown as PointRotator3DBuilder;
}

export namespace PointRotator3D {
  export namespace StaticFlags {
    export const None = createEnumToken('PointRotator3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('PointRotator3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('PointRotator3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('PointRotator3D', 'TransformSpace', 'SceneSpace');
  }
}
