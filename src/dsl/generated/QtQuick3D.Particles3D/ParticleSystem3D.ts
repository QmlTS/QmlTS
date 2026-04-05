// AUTO-GENERATED — DO NOT EDIT
// Type: ParticleSystem3D
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { LoggingDataBuilder } from './QQuick3DParticleSystemLogging.js';
export interface ParticleSystem3DBuilder {
  id(id: string): ParticleSystem3DBuilder;
  child(obj: QmlObjectBuilder): ParticleSystem3DBuilder;

  eulerRotation(value: QmlVector3d): ParticleSystem3DBuilder;
  eulerRotationBind(expr: string): ParticleSystem3DBuilder;
  layers(value: number): ParticleSystem3DBuilder;
  layersBind(expr: string): ParticleSystem3DBuilder;
  logging(value: boolean): ParticleSystem3DBuilder;
  loggingBind(expr: string): ParticleSystem3DBuilder;
  objectName(value: string): ParticleSystem3DBuilder;
  objectNameBind(expr: string): ParticleSystem3DBuilder;
  opacity(value: number): ParticleSystem3DBuilder;
  opacityBind(expr: string): ParticleSystem3DBuilder;
  parent(value: QmlValue): ParticleSystem3DBuilder;
  parentBind(expr: string): ParticleSystem3DBuilder;
  paused(value: boolean): ParticleSystem3DBuilder;
  pausedBind(expr: string): ParticleSystem3DBuilder;
  pivot(value: QmlVector3d): ParticleSystem3DBuilder;
  pivotBind(expr: string): ParticleSystem3DBuilder;
  position(value: QmlVector3d): ParticleSystem3DBuilder;
  positionBind(expr: string): ParticleSystem3DBuilder;
  rotation(value: QmlQuaternion): ParticleSystem3DBuilder;
  rotationBind(expr: string): ParticleSystem3DBuilder;
  running(value: boolean): ParticleSystem3DBuilder;
  runningBind(expr: string): ParticleSystem3DBuilder;
  scale(value: QmlVector3d): ParticleSystem3DBuilder;
  scaleBind(expr: string): ParticleSystem3DBuilder;
  seed(value: number): ParticleSystem3DBuilder;
  seedBind(expr: string): ParticleSystem3DBuilder;
  startTime(value: number): ParticleSystem3DBuilder;
  startTimeBind(expr: string): ParticleSystem3DBuilder;
  state(value: string): ParticleSystem3DBuilder;
  stateBind(expr: string): ParticleSystem3DBuilder;
  staticFlags(value: number): ParticleSystem3DBuilder;
  staticFlagsBind(expr: string): ParticleSystem3DBuilder;
  time(value: number): ParticleSystem3DBuilder;
  timeBind(expr: string): ParticleSystem3DBuilder;
  useRandomSeed(value: boolean): ParticleSystem3DBuilder;
  useRandomSeedBind(expr: string): ParticleSystem3DBuilder;
  visible(value: boolean): ParticleSystem3DBuilder;
  visibleBind(expr: string): ParticleSystem3DBuilder;
  x(value: number): ParticleSystem3DBuilder;
  xBind(expr: string): ParticleSystem3DBuilder;
  y(value: number): ParticleSystem3DBuilder;
  yBind(expr: string): ParticleSystem3DBuilder;
  z(value: number): ParticleSystem3DBuilder;
  zBind(expr: string): ParticleSystem3DBuilder;
  onChildrenChanged(body: string): ParticleSystem3DBuilder;
  onEulerRotationChanged(body: string): ParticleSystem3DBuilder;
  onForwardChanged(body: string): ParticleSystem3DBuilder;
  onLayersChanged(body: string): ParticleSystem3DBuilder;
  onLocalOpacityChanged(body: string): ParticleSystem3DBuilder;
  onLoggingChanged(body: string): ParticleSystem3DBuilder;
  onLoggingDataChanged(body: string): ParticleSystem3DBuilder;
  onObjectNameChanged(body: string): ParticleSystem3DBuilder;
  onParentChanged(body: string): ParticleSystem3DBuilder;
  onPausedChanged(body: string): ParticleSystem3DBuilder;
  onPivotChanged(body: string): ParticleSystem3DBuilder;
  onPositionChanged(body: string): ParticleSystem3DBuilder;
  onRightChanged(body: string): ParticleSystem3DBuilder;
  onRotationChanged(body: string): ParticleSystem3DBuilder;
  onRunningChanged(body: string): ParticleSystem3DBuilder;
  onScaleChanged(body: string): ParticleSystem3DBuilder;
  onScenePositionChanged(body: string): ParticleSystem3DBuilder;
  onSceneRotationChanged(body: string): ParticleSystem3DBuilder;
  onSceneScaleChanged(body: string): ParticleSystem3DBuilder;
  onSceneTransformChanged(body: string): ParticleSystem3DBuilder;
  onSeedChanged(body: string): ParticleSystem3DBuilder;
  onStartTimeChanged(body: string): ParticleSystem3DBuilder;
  onStateChanged(body: string): ParticleSystem3DBuilder;
  onStaticFlagsChanged(body: string): ParticleSystem3DBuilder;
  onTimeChanged(body: string): ParticleSystem3DBuilder;
  onUpChanged(body: string): ParticleSystem3DBuilder;
  onUseRandomSeedChanged(body: string): ParticleSystem3DBuilder;
  onVisibleChanged(body: string): ParticleSystem3DBuilder;
  onXChanged(body: string): ParticleSystem3DBuilder;
  onYChanged(body: string): ParticleSystem3DBuilder;
  onZChanged(body: string): ParticleSystem3DBuilder;
  loggingData(setup: (b: LoggingDataBuilder) => void): ParticleSystem3DBuilder;
}

const PARTICLESYSTEM3D_META: TypeMetadata = {
  typeName: 'ParticleSystem3D',
  properties: [
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'logging', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'paused', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'seed', hasValue: true, hasBinding: true },
    { name: 'startTime', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'time', hasValue: true, hasBinding: true },
    { name: 'useRandomSeed', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onLoggingChanged', paramCount: 0 },
    { handlerName: 'onLoggingDataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPausedChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRunningChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onSeedChanged', paramCount: 0 },
    { handlerName: 'onStartTimeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onTimeChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onUseRandomSeedChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'loggingData',
      groupName: 'loggingData',
      properties: [{ name: 'loggingInterval', hasValue: true, hasBinding: true }],
    },
  ],
  attached: [],
};

export function ParticleSystem3D(): ParticleSystem3DBuilder {
  return createFluentBuilder(
    'ParticleSystem3D',
    PARTICLESYSTEM3D_META,
  ) as unknown as ParticleSystem3DBuilder;
}

export namespace ParticleSystem3D {
  export namespace StaticFlags {
    export const None = createEnumToken('ParticleSystem3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('ParticleSystem3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('ParticleSystem3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('ParticleSystem3D', 'TransformSpace', 'SceneSpace');
  }
}
