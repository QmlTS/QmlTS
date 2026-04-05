// AUTO-GENERATED — DO NOT EDIT
// Type: PhysicsWorld
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { NodeBuilder } from '../QtQuick3D/Node.js';
export interface PhysicsWorldBuilder {
  id(id: string): PhysicsWorldBuilder;
  child(obj: QmlObjectBuilder): PhysicsWorldBuilder;

  defaultDensity(value: number): PhysicsWorldBuilder;
  defaultDensityBind(expr: string): PhysicsWorldBuilder;
  enableCCD(value: boolean): PhysicsWorldBuilder;
  enableCCDBind(expr: string): PhysicsWorldBuilder;
  forceDebugDraw(value: boolean): PhysicsWorldBuilder;
  forceDebugDrawBind(expr: string): PhysicsWorldBuilder;
  gravity(value: QmlVector3d): PhysicsWorldBuilder;
  gravityBind(expr: string): PhysicsWorldBuilder;
  maximumTimestep(value: number): PhysicsWorldBuilder;
  maximumTimestepBind(expr: string): PhysicsWorldBuilder;
  minimumTimestep(value: number): PhysicsWorldBuilder;
  minimumTimestepBind(expr: string): PhysicsWorldBuilder;
  numThreads(value: number): PhysicsWorldBuilder;
  numThreadsBind(expr: string): PhysicsWorldBuilder;
  objectName(value: string): PhysicsWorldBuilder;
  objectNameBind(expr: string): PhysicsWorldBuilder;
  reportKinematicKinematicCollisions(value: boolean): PhysicsWorldBuilder;
  reportKinematicKinematicCollisionsBind(expr: string): PhysicsWorldBuilder;
  reportStaticKinematicCollisions(value: boolean): PhysicsWorldBuilder;
  reportStaticKinematicCollisionsBind(expr: string): PhysicsWorldBuilder;
  running(value: boolean): PhysicsWorldBuilder;
  runningBind(expr: string): PhysicsWorldBuilder;
  scene(value: NodeBuilder): PhysicsWorldBuilder;
  sceneBind(expr: string): PhysicsWorldBuilder;
  typicalLength(value: number): PhysicsWorldBuilder;
  typicalLengthBind(expr: string): PhysicsWorldBuilder;
  typicalSpeed(value: number): PhysicsWorldBuilder;
  typicalSpeedBind(expr: string): PhysicsWorldBuilder;
  viewport(value: NodeBuilder): PhysicsWorldBuilder;
  viewportBind(expr: string): PhysicsWorldBuilder;
  onDefaultDensityChanged(body: string): PhysicsWorldBuilder;
  onEnableCCDChanged(body: string): PhysicsWorldBuilder;
  onForceDebugDrawChanged(body: string): PhysicsWorldBuilder;
  onFrameDone(body: string): PhysicsWorldBuilder;
  onGravityChanged(body: string): PhysicsWorldBuilder;
  onMaximumTimestepChanged(body: string): PhysicsWorldBuilder;
  onMinimumTimestepChanged(body: string): PhysicsWorldBuilder;
  onNumThreadsChanged(body: string): PhysicsWorldBuilder;
  onObjectNameChanged(body: string): PhysicsWorldBuilder;
  onReportKinematicKinematicCollisionsChanged(body: string): PhysicsWorldBuilder;
  onReportStaticKinematicCollisionsChanged(body: string): PhysicsWorldBuilder;
  onRunningChanged(body: string): PhysicsWorldBuilder;
  onSceneChanged(body: string): PhysicsWorldBuilder;
  onTypicalLengthChanged(body: string): PhysicsWorldBuilder;
  onTypicalSpeedChanged(body: string): PhysicsWorldBuilder;
  onViewportChanged(body: string): PhysicsWorldBuilder;
}

const PHYSICSWORLD_META: TypeMetadata = {
  typeName: 'PhysicsWorld',
  properties: [
    { name: 'defaultDensity', hasValue: true, hasBinding: true },
    { name: 'enableCCD', hasValue: true, hasBinding: true },
    { name: 'forceDebugDraw', hasValue: true, hasBinding: true },
    { name: 'gravity', hasValue: true, hasBinding: true },
    { name: 'maximumTimestep', hasValue: true, hasBinding: true },
    { name: 'minimumTimestep', hasValue: true, hasBinding: true },
    { name: 'numThreads', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'reportKinematicKinematicCollisions', hasValue: true, hasBinding: true },
    { name: 'reportStaticKinematicCollisions', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
    { name: 'scene', hasValue: true, hasBinding: true },
    { name: 'typicalLength', hasValue: true, hasBinding: true },
    { name: 'typicalSpeed', hasValue: true, hasBinding: true },
    { name: 'viewport', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDefaultDensityChanged', paramCount: 1 },
    { handlerName: 'onEnableCCDChanged', paramCount: 1 },
    { handlerName: 'onForceDebugDrawChanged', paramCount: 1 },
    { handlerName: 'onFrameDone', paramCount: 1 },
    { handlerName: 'onGravityChanged', paramCount: 1 },
    { handlerName: 'onMaximumTimestepChanged', paramCount: 1 },
    { handlerName: 'onMinimumTimestepChanged', paramCount: 1 },
    { handlerName: 'onNumThreadsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onReportKinematicKinematicCollisionsChanged', paramCount: 0 },
    { handlerName: 'onReportStaticKinematicCollisionsChanged', paramCount: 0 },
    { handlerName: 'onRunningChanged', paramCount: 1 },
    { handlerName: 'onSceneChanged', paramCount: 0 },
    { handlerName: 'onTypicalLengthChanged', paramCount: 1 },
    { handlerName: 'onTypicalSpeedChanged', paramCount: 1 },
    { handlerName: 'onViewportChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PhysicsWorld(): PhysicsWorldBuilder {
  return createFluentBuilder('PhysicsWorld', PHYSICSWORLD_META) as unknown as PhysicsWorldBuilder;
}
