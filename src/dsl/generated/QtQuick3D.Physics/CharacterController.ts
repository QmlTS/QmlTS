// AUTO-GENERATED — DO NOT EDIT
// Type: CharacterController
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { PhysicsMaterialBuilder } from './PhysicsMaterial.js';
export interface CharacterControllerBuilder {
  id(id: string): CharacterControllerBuilder;
  child(obj: QmlObjectBuilder): CharacterControllerBuilder;

  enableShapeHitCallback(value: boolean): CharacterControllerBuilder;
  enableShapeHitCallbackBind(expr: string): CharacterControllerBuilder;
  eulerRotation(value: QmlVector3d): CharacterControllerBuilder;
  eulerRotationBind(expr: string): CharacterControllerBuilder;
  filterGroup(value: number): CharacterControllerBuilder;
  filterGroupBind(expr: string): CharacterControllerBuilder;
  filterIgnoreGroups(value: number): CharacterControllerBuilder;
  filterIgnoreGroupsBind(expr: string): CharacterControllerBuilder;
  gravity(value: QmlVector3d): CharacterControllerBuilder;
  gravityBind(expr: string): CharacterControllerBuilder;
  layers(value: number): CharacterControllerBuilder;
  layersBind(expr: string): CharacterControllerBuilder;
  midAirControl(value: boolean): CharacterControllerBuilder;
  midAirControlBind(expr: string): CharacterControllerBuilder;
  movement(value: QmlVector3d): CharacterControllerBuilder;
  movementBind(expr: string): CharacterControllerBuilder;
  objectName(value: string): CharacterControllerBuilder;
  objectNameBind(expr: string): CharacterControllerBuilder;
  opacity(value: number): CharacterControllerBuilder;
  opacityBind(expr: string): CharacterControllerBuilder;
  parent(value: QmlValue): CharacterControllerBuilder;
  parentBind(expr: string): CharacterControllerBuilder;
  physicsMaterial(value: PhysicsMaterialBuilder): CharacterControllerBuilder;
  physicsMaterialBind(expr: string): CharacterControllerBuilder;
  pivot(value: QmlVector3d): CharacterControllerBuilder;
  pivotBind(expr: string): CharacterControllerBuilder;
  position(value: QmlVector3d): CharacterControllerBuilder;
  positionBind(expr: string): CharacterControllerBuilder;
  receiveContactReports(value: boolean): CharacterControllerBuilder;
  receiveContactReportsBind(expr: string): CharacterControllerBuilder;
  receiveTriggerReports(value: boolean): CharacterControllerBuilder;
  receiveTriggerReportsBind(expr: string): CharacterControllerBuilder;
  rotation(value: QmlQuaternion): CharacterControllerBuilder;
  rotationBind(expr: string): CharacterControllerBuilder;
  scale(value: QmlVector3d): CharacterControllerBuilder;
  scaleBind(expr: string): CharacterControllerBuilder;
  sendContactReports(value: boolean): CharacterControllerBuilder;
  sendContactReportsBind(expr: string): CharacterControllerBuilder;
  sendTriggerReports(value: boolean): CharacterControllerBuilder;
  sendTriggerReportsBind(expr: string): CharacterControllerBuilder;
  simulationEnabled(value: boolean): CharacterControllerBuilder;
  simulationEnabledBind(expr: string): CharacterControllerBuilder;
  state(value: string): CharacterControllerBuilder;
  stateBind(expr: string): CharacterControllerBuilder;
  staticFlags(value: number): CharacterControllerBuilder;
  staticFlagsBind(expr: string): CharacterControllerBuilder;
  visible(value: boolean): CharacterControllerBuilder;
  visibleBind(expr: string): CharacterControllerBuilder;
  x(value: number): CharacterControllerBuilder;
  xBind(expr: string): CharacterControllerBuilder;
  y(value: number): CharacterControllerBuilder;
  yBind(expr: string): CharacterControllerBuilder;
  z(value: number): CharacterControllerBuilder;
  zBind(expr: string): CharacterControllerBuilder;
  onBodyContact(body: string): CharacterControllerBuilder;
  onChildrenChanged(body: string): CharacterControllerBuilder;
  onCollisionsChanged(body: string): CharacterControllerBuilder;
  onEnableShapeHitCallbackChanged(body: string): CharacterControllerBuilder;
  onEnteredTriggerBody(body: string): CharacterControllerBuilder;
  onEulerRotationChanged(body: string): CharacterControllerBuilder;
  onExitedTriggerBody(body: string): CharacterControllerBuilder;
  onFilterGroupChanged(body: string): CharacterControllerBuilder;
  onFilterIgnoreGroupsChanged(body: string): CharacterControllerBuilder;
  onForwardChanged(body: string): CharacterControllerBuilder;
  onGravityChanged(body: string): CharacterControllerBuilder;
  onLayersChanged(body: string): CharacterControllerBuilder;
  onLocalOpacityChanged(body: string): CharacterControllerBuilder;
  onMidAirControlChanged(body: string): CharacterControllerBuilder;
  onMovementChanged(body: string): CharacterControllerBuilder;
  onObjectNameChanged(body: string): CharacterControllerBuilder;
  onParentChanged(body: string): CharacterControllerBuilder;
  onPhysicsMaterialChanged(body: string): CharacterControllerBuilder;
  onPivotChanged(body: string): CharacterControllerBuilder;
  onPositionChanged(body: string): CharacterControllerBuilder;
  onReceiveContactReportsChanged(body: string): CharacterControllerBuilder;
  onReceiveTriggerReportsChanged(body: string): CharacterControllerBuilder;
  onRightChanged(body: string): CharacterControllerBuilder;
  onRotationChanged(body: string): CharacterControllerBuilder;
  onScaleChanged(body: string): CharacterControllerBuilder;
  onScenePositionChanged(body: string): CharacterControllerBuilder;
  onSceneRotationChanged(body: string): CharacterControllerBuilder;
  onSceneScaleChanged(body: string): CharacterControllerBuilder;
  onSceneTransformChanged(body: string): CharacterControllerBuilder;
  onSendContactReportsChanged(body: string): CharacterControllerBuilder;
  onSendTriggerReportsChanged(body: string): CharacterControllerBuilder;
  onShapeHit(body: string): CharacterControllerBuilder;
  onSimulationEnabledChanged(body: string): CharacterControllerBuilder;
  onStateChanged(body: string): CharacterControllerBuilder;
  onStaticFlagsChanged(body: string): CharacterControllerBuilder;
  onUpChanged(body: string): CharacterControllerBuilder;
  onVisibleChanged(body: string): CharacterControllerBuilder;
  onXChanged(body: string): CharacterControllerBuilder;
  onYChanged(body: string): CharacterControllerBuilder;
  onZChanged(body: string): CharacterControllerBuilder;
}

const CHARACTERCONTROLLER_META: TypeMetadata = {
  typeName: 'CharacterController',
  properties: [
    { name: 'enableShapeHitCallback', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'filterGroup', hasValue: true, hasBinding: true },
    { name: 'filterIgnoreGroups', hasValue: true, hasBinding: true },
    { name: 'gravity', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'midAirControl', hasValue: true, hasBinding: true },
    { name: 'movement', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'physicsMaterial', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'receiveContactReports', hasValue: true, hasBinding: true },
    { name: 'receiveTriggerReports', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'sendContactReports', hasValue: true, hasBinding: true },
    { name: 'sendTriggerReports', hasValue: true, hasBinding: true },
    { name: 'simulationEnabled', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBodyContact', paramCount: 4 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onCollisionsChanged', paramCount: 0 },
    { handlerName: 'onEnableShapeHitCallbackChanged', paramCount: 0 },
    { handlerName: 'onEnteredTriggerBody', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onExitedTriggerBody', paramCount: 1 },
    { handlerName: 'onFilterGroupChanged', paramCount: 0 },
    { handlerName: 'onFilterIgnoreGroupsChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onGravityChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onMidAirControlChanged', paramCount: 0 },
    { handlerName: 'onMovementChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPhysicsMaterialChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onReceiveContactReportsChanged', paramCount: 1 },
    { handlerName: 'onReceiveTriggerReportsChanged', paramCount: 1 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onSendContactReportsChanged', paramCount: 1 },
    { handlerName: 'onSendTriggerReportsChanged', paramCount: 1 },
    { handlerName: 'onShapeHit', paramCount: 4 },
    { handlerName: 'onSimulationEnabledChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function CharacterController(): CharacterControllerBuilder {
  return createFluentBuilder('CharacterController', CHARACTERCONTROLLER_META) as unknown as CharacterControllerBuilder;
}

export namespace CharacterController {
  export namespace Collisions {
    export const None = createEnumToken('CharacterController', 'Collisions', 'None');
    export const Side = createEnumToken('CharacterController', 'Collisions', 'Side');
    export const Up = createEnumToken('CharacterController', 'Collisions', 'Up');
    export const Down = createEnumToken('CharacterController', 'Collisions', 'Down');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('CharacterController', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('CharacterController', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('CharacterController', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('CharacterController', 'TransformSpace', 'SceneSpace');
  }
}
