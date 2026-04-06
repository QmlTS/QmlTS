// AUTO-GENERATED — DO NOT EDIT
// Type: ScaleAffector3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ParticleSystem3DBuilder } from './ParticleSystem3D.js';
export interface ScaleAffector3DBuilder {
  id(id: string): ScaleAffector3DBuilder;
  child(obj: QmlObjectBuilder): ScaleAffector3DBuilder;
  children(...objs: QmlObjectBuilder[]): ScaleAffector3DBuilder;

  duration(value: number): ScaleAffector3DBuilder;
  durationBind(expr: string): ScaleAffector3DBuilder;
  easingCurve(value: QmlValue): ScaleAffector3DBuilder;
  easingCurveBind(expr: string): ScaleAffector3DBuilder;
  enabled(value: boolean): ScaleAffector3DBuilder;
  enabledBind(expr: string): ScaleAffector3DBuilder;
  eulerRotation(value: QmlVector3d): ScaleAffector3DBuilder;
  eulerRotationBind(expr: string): ScaleAffector3DBuilder;
  layers(value: number): ScaleAffector3DBuilder;
  layersBind(expr: string): ScaleAffector3DBuilder;
  maxSize(value: number): ScaleAffector3DBuilder;
  maxSizeBind(expr: string): ScaleAffector3DBuilder;
  minSize(value: number): ScaleAffector3DBuilder;
  minSizeBind(expr: string): ScaleAffector3DBuilder;
  objectName(value: string): ScaleAffector3DBuilder;
  objectNameBind(expr: string): ScaleAffector3DBuilder;
  opacity(value: number): ScaleAffector3DBuilder;
  opacityBind(expr: string): ScaleAffector3DBuilder;
  parent(value: QmlValue): ScaleAffector3DBuilder;
  parentBind(expr: string): ScaleAffector3DBuilder;
  pivot(value: QmlVector3d): ScaleAffector3DBuilder;
  pivotBind(expr: string): ScaleAffector3DBuilder;
  position(value: QmlVector3d): ScaleAffector3DBuilder;
  positionBind(expr: string): ScaleAffector3DBuilder;
  rotation(value: QmlQuaternion): ScaleAffector3DBuilder;
  rotationBind(expr: string): ScaleAffector3DBuilder;
  scale(value: QmlVector3d): ScaleAffector3DBuilder;
  scaleBind(expr: string): ScaleAffector3DBuilder;
  state(value: string): ScaleAffector3DBuilder;
  stateBind(expr: string): ScaleAffector3DBuilder;
  staticFlags(value: number): ScaleAffector3DBuilder;
  staticFlagsBind(expr: string): ScaleAffector3DBuilder;
  system(value: ParticleSystem3DBuilder): ScaleAffector3DBuilder;
  systemBind(expr: string): ScaleAffector3DBuilder;
  type(value: QmlEnumToken): ScaleAffector3DBuilder;
  typeBind(expr: string): ScaleAffector3DBuilder;
  visible(value: boolean): ScaleAffector3DBuilder;
  visibleBind(expr: string): ScaleAffector3DBuilder;
  x(value: number): ScaleAffector3DBuilder;
  xBind(expr: string): ScaleAffector3DBuilder;
  y(value: number): ScaleAffector3DBuilder;
  yBind(expr: string): ScaleAffector3DBuilder;
  z(value: number): ScaleAffector3DBuilder;
  zBind(expr: string): ScaleAffector3DBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onEasingCurveChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onMaxSizeChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onMinSizeChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onRightChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onTypeChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onUpChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onUpdate(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onXChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onYChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
  onZChanged(handler: DslSignalHandlerValue): ScaleAffector3DBuilder;
}

const SCALEAFFECTOR3D_META: TypeMetadata = {
  typeName: 'ScaleAffector3D',
  properties: [
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'easingCurve', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'maxSize', hasValue: true, hasBinding: true },
    { name: 'minSize', hasValue: true, hasBinding: true },
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
    { name: 'type', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDurationChanged', paramCount: 0 },
    { handlerName: 'onEasingCurveChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onMaxSizeChanged', paramCount: 0 },
    { handlerName: 'onMinSizeChanged', paramCount: 0 },
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
    { handlerName: 'onTypeChanged', paramCount: 0 },
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

export function ScaleAffector3D(): ScaleAffector3DBuilder {
  return createFluentBuilder(
    'ScaleAffector3D',
    SCALEAFFECTOR3D_META,
  ) as unknown as ScaleAffector3DBuilder;
}

export namespace ScaleAffector3D {
  export namespace ScalingType {
    export const Linear = createEnumToken('ScaleAffector3D', 'ScalingType', 'Linear');
    export const SewSaw = createEnumToken('ScaleAffector3D', 'ScalingType', 'SewSaw');
    export const SineWave = createEnumToken('ScaleAffector3D', 'ScalingType', 'SineWave');
    export const AbsSineWave = createEnumToken('ScaleAffector3D', 'ScalingType', 'AbsSineWave');
    export const Step = createEnumToken('ScaleAffector3D', 'ScalingType', 'Step');
    export const SmoothStep = createEnumToken('ScaleAffector3D', 'ScalingType', 'SmoothStep');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('ScaleAffector3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('ScaleAffector3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('ScaleAffector3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('ScaleAffector3D', 'TransformSpace', 'SceneSpace');
  }
}
