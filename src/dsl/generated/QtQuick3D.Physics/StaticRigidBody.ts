// AUTO-GENERATED — DO NOT EDIT
// Type: StaticRigidBody
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PhysicsMaterialBuilder } from './PhysicsMaterial.js';
export interface StaticRigidBodyBuilder {
  id(id: string): StaticRigidBodyBuilder;
  child(obj: QmlObjectBuilder): StaticRigidBodyBuilder;

  eulerRotation(value: QmlVector3d): StaticRigidBodyBuilder;
  eulerRotationBind(expr: string): StaticRigidBodyBuilder;
  filterGroup(value: number): StaticRigidBodyBuilder;
  filterGroupBind(expr: string): StaticRigidBodyBuilder;
  filterIgnoreGroups(value: number): StaticRigidBodyBuilder;
  filterIgnoreGroupsBind(expr: string): StaticRigidBodyBuilder;
  layers(value: number): StaticRigidBodyBuilder;
  layersBind(expr: string): StaticRigidBodyBuilder;
  objectName(value: string): StaticRigidBodyBuilder;
  objectNameBind(expr: string): StaticRigidBodyBuilder;
  opacity(value: number): StaticRigidBodyBuilder;
  opacityBind(expr: string): StaticRigidBodyBuilder;
  parent(value: QmlValue): StaticRigidBodyBuilder;
  parentBind(expr: string): StaticRigidBodyBuilder;
  physicsMaterial(value: PhysicsMaterialBuilder): StaticRigidBodyBuilder;
  physicsMaterialBind(expr: string): StaticRigidBodyBuilder;
  pivot(value: QmlVector3d): StaticRigidBodyBuilder;
  pivotBind(expr: string): StaticRigidBodyBuilder;
  position(value: QmlVector3d): StaticRigidBodyBuilder;
  positionBind(expr: string): StaticRigidBodyBuilder;
  receiveContactReports(value: boolean): StaticRigidBodyBuilder;
  receiveContactReportsBind(expr: string): StaticRigidBodyBuilder;
  receiveTriggerReports(value: boolean): StaticRigidBodyBuilder;
  receiveTriggerReportsBind(expr: string): StaticRigidBodyBuilder;
  rotation(value: QmlQuaternion): StaticRigidBodyBuilder;
  rotationBind(expr: string): StaticRigidBodyBuilder;
  scale(value: QmlVector3d): StaticRigidBodyBuilder;
  scaleBind(expr: string): StaticRigidBodyBuilder;
  sendContactReports(value: boolean): StaticRigidBodyBuilder;
  sendContactReportsBind(expr: string): StaticRigidBodyBuilder;
  sendTriggerReports(value: boolean): StaticRigidBodyBuilder;
  sendTriggerReportsBind(expr: string): StaticRigidBodyBuilder;
  simulationEnabled(value: boolean): StaticRigidBodyBuilder;
  simulationEnabledBind(expr: string): StaticRigidBodyBuilder;
  state(value: string): StaticRigidBodyBuilder;
  stateBind(expr: string): StaticRigidBodyBuilder;
  staticFlags(value: number): StaticRigidBodyBuilder;
  staticFlagsBind(expr: string): StaticRigidBodyBuilder;
  visible(value: boolean): StaticRigidBodyBuilder;
  visibleBind(expr: string): StaticRigidBodyBuilder;
  x(value: number): StaticRigidBodyBuilder;
  xBind(expr: string): StaticRigidBodyBuilder;
  y(value: number): StaticRigidBodyBuilder;
  yBind(expr: string): StaticRigidBodyBuilder;
  z(value: number): StaticRigidBodyBuilder;
  zBind(expr: string): StaticRigidBodyBuilder;
  onBodyContact(body: string): StaticRigidBodyBuilder;
  onChildrenChanged(body: string): StaticRigidBodyBuilder;
  onEnteredTriggerBody(body: string): StaticRigidBodyBuilder;
  onEulerRotationChanged(body: string): StaticRigidBodyBuilder;
  onExitedTriggerBody(body: string): StaticRigidBodyBuilder;
  onFilterGroupChanged(body: string): StaticRigidBodyBuilder;
  onFilterIgnoreGroupsChanged(body: string): StaticRigidBodyBuilder;
  onForwardChanged(body: string): StaticRigidBodyBuilder;
  onLayersChanged(body: string): StaticRigidBodyBuilder;
  onLocalOpacityChanged(body: string): StaticRigidBodyBuilder;
  onObjectNameChanged(body: string): StaticRigidBodyBuilder;
  onParentChanged(body: string): StaticRigidBodyBuilder;
  onPhysicsMaterialChanged(body: string): StaticRigidBodyBuilder;
  onPivotChanged(body: string): StaticRigidBodyBuilder;
  onPositionChanged(body: string): StaticRigidBodyBuilder;
  onReceiveContactReportsChanged(body: string): StaticRigidBodyBuilder;
  onReceiveTriggerReportsChanged(body: string): StaticRigidBodyBuilder;
  onRightChanged(body: string): StaticRigidBodyBuilder;
  onRotationChanged(body: string): StaticRigidBodyBuilder;
  onScaleChanged(body: string): StaticRigidBodyBuilder;
  onScenePositionChanged(body: string): StaticRigidBodyBuilder;
  onSceneRotationChanged(body: string): StaticRigidBodyBuilder;
  onSceneScaleChanged(body: string): StaticRigidBodyBuilder;
  onSceneTransformChanged(body: string): StaticRigidBodyBuilder;
  onSendContactReportsChanged(body: string): StaticRigidBodyBuilder;
  onSendTriggerReportsChanged(body: string): StaticRigidBodyBuilder;
  onSimulationEnabledChanged(body: string): StaticRigidBodyBuilder;
  onStateChanged(body: string): StaticRigidBodyBuilder;
  onStaticFlagsChanged(body: string): StaticRigidBodyBuilder;
  onUpChanged(body: string): StaticRigidBodyBuilder;
  onVisibleChanged(body: string): StaticRigidBodyBuilder;
  onXChanged(body: string): StaticRigidBodyBuilder;
  onYChanged(body: string): StaticRigidBodyBuilder;
  onZChanged(body: string): StaticRigidBodyBuilder;
}

const STATICRIGIDBODY_META: TypeMetadata = {
  typeName: 'StaticRigidBody',
  properties: [
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'filterGroup', hasValue: true, hasBinding: true },
    { name: 'filterIgnoreGroups', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
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
    { handlerName: 'onEnteredTriggerBody', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onExitedTriggerBody', paramCount: 1 },
    { handlerName: 'onFilterGroupChanged', paramCount: 0 },
    { handlerName: 'onFilterIgnoreGroupsChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
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
    { handlerName: 'onSimulationEnabledChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function StaticRigidBody(): StaticRigidBodyBuilder {
  return createFluentBuilder(
    'StaticRigidBody',
    STATICRIGIDBODY_META,
  ) as unknown as StaticRigidBodyBuilder;
}

export namespace StaticRigidBody {
  export namespace StaticFlags {
    export const None = createEnumToken('StaticRigidBody', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('StaticRigidBody', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('StaticRigidBody', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('StaticRigidBody', 'TransformSpace', 'SceneSpace');
  }
}
