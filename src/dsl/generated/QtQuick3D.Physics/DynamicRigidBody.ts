// AUTO-GENERATED — DO NOT EDIT
// Type: DynamicRigidBody
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
import type { PhysicsMaterialBuilder } from './PhysicsMaterial.js';
export interface DynamicRigidBodyBuilder {
  id(id: string): DynamicRigidBodyBuilder;
  child(obj: QmlObjectBuilder): DynamicRigidBodyBuilder;
  children(...objs: QmlObjectBuilder[]): DynamicRigidBodyBuilder;

  angularAxisLock(value: QmlEnumToken): DynamicRigidBodyBuilder;
  angularAxisLockBind(expr: string): DynamicRigidBodyBuilder;
  centerOfMassPosition(value: QmlVector3d): DynamicRigidBodyBuilder;
  centerOfMassPositionBind(expr: string): DynamicRigidBodyBuilder;
  centerOfMassRotation(value: QmlQuaternion): DynamicRigidBodyBuilder;
  centerOfMassRotationBind(expr: string): DynamicRigidBodyBuilder;
  density(value: number): DynamicRigidBodyBuilder;
  densityBind(expr: string): DynamicRigidBodyBuilder;
  eulerRotation(value: QmlVector3d): DynamicRigidBodyBuilder;
  eulerRotationBind(expr: string): DynamicRigidBodyBuilder;
  filterGroup(value: number): DynamicRigidBodyBuilder;
  filterGroupBind(expr: string): DynamicRigidBodyBuilder;
  filterIgnoreGroups(value: number): DynamicRigidBodyBuilder;
  filterIgnoreGroupsBind(expr: string): DynamicRigidBodyBuilder;
  gravityEnabled(value: boolean): DynamicRigidBodyBuilder;
  gravityEnabledBind(expr: string): DynamicRigidBodyBuilder;
  inertiaMatrix(value: number): DynamicRigidBodyBuilder;
  inertiaMatrixBind(expr: string): DynamicRigidBodyBuilder;
  inertiaTensor(value: QmlVector3d): DynamicRigidBodyBuilder;
  inertiaTensorBind(expr: string): DynamicRigidBodyBuilder;
  isKinematic(value: boolean): DynamicRigidBodyBuilder;
  isKinematicBind(expr: string): DynamicRigidBodyBuilder;
  isSleeping(value: boolean): DynamicRigidBodyBuilder;
  isSleepingBind(expr: string): DynamicRigidBodyBuilder;
  kinematicEulerRotation(value: QmlVector3d): DynamicRigidBodyBuilder;
  kinematicEulerRotationBind(expr: string): DynamicRigidBodyBuilder;
  kinematicPivot(value: QmlVector3d): DynamicRigidBodyBuilder;
  kinematicPivotBind(expr: string): DynamicRigidBodyBuilder;
  kinematicPosition(value: QmlVector3d): DynamicRigidBodyBuilder;
  kinematicPositionBind(expr: string): DynamicRigidBodyBuilder;
  kinematicRotation(value: QmlQuaternion): DynamicRigidBodyBuilder;
  kinematicRotationBind(expr: string): DynamicRigidBodyBuilder;
  layers(value: number): DynamicRigidBodyBuilder;
  layersBind(expr: string): DynamicRigidBodyBuilder;
  linearAxisLock(value: QmlEnumToken): DynamicRigidBodyBuilder;
  linearAxisLockBind(expr: string): DynamicRigidBodyBuilder;
  mass(value: number): DynamicRigidBodyBuilder;
  massBind(expr: string): DynamicRigidBodyBuilder;
  massMode(value: QmlEnumToken): DynamicRigidBodyBuilder;
  massModeBind(expr: string): DynamicRigidBodyBuilder;
  objectName(value: string): DynamicRigidBodyBuilder;
  objectNameBind(expr: string): DynamicRigidBodyBuilder;
  opacity(value: number): DynamicRigidBodyBuilder;
  opacityBind(expr: string): DynamicRigidBodyBuilder;
  parent(value: QmlValue): DynamicRigidBodyBuilder;
  parentBind(expr: string): DynamicRigidBodyBuilder;
  physicsMaterial(value: PhysicsMaterialBuilder): DynamicRigidBodyBuilder;
  physicsMaterialBind(expr: string): DynamicRigidBodyBuilder;
  pivot(value: QmlVector3d): DynamicRigidBodyBuilder;
  pivotBind(expr: string): DynamicRigidBodyBuilder;
  position(value: QmlVector3d): DynamicRigidBodyBuilder;
  positionBind(expr: string): DynamicRigidBodyBuilder;
  receiveContactReports(value: boolean): DynamicRigidBodyBuilder;
  receiveContactReportsBind(expr: string): DynamicRigidBodyBuilder;
  receiveTriggerReports(value: boolean): DynamicRigidBodyBuilder;
  receiveTriggerReportsBind(expr: string): DynamicRigidBodyBuilder;
  rotation(value: QmlQuaternion): DynamicRigidBodyBuilder;
  rotationBind(expr: string): DynamicRigidBodyBuilder;
  scale(value: QmlVector3d): DynamicRigidBodyBuilder;
  scaleBind(expr: string): DynamicRigidBodyBuilder;
  sendContactReports(value: boolean): DynamicRigidBodyBuilder;
  sendContactReportsBind(expr: string): DynamicRigidBodyBuilder;
  sendTriggerReports(value: boolean): DynamicRigidBodyBuilder;
  sendTriggerReportsBind(expr: string): DynamicRigidBodyBuilder;
  simulationEnabled(value: boolean): DynamicRigidBodyBuilder;
  simulationEnabledBind(expr: string): DynamicRigidBodyBuilder;
  state(value: string): DynamicRigidBodyBuilder;
  stateBind(expr: string): DynamicRigidBodyBuilder;
  staticFlags(value: number): DynamicRigidBodyBuilder;
  staticFlagsBind(expr: string): DynamicRigidBodyBuilder;
  visible(value: boolean): DynamicRigidBodyBuilder;
  visibleBind(expr: string): DynamicRigidBodyBuilder;
  x(value: number): DynamicRigidBodyBuilder;
  xBind(expr: string): DynamicRigidBodyBuilder;
  y(value: number): DynamicRigidBodyBuilder;
  yBind(expr: string): DynamicRigidBodyBuilder;
  z(value: number): DynamicRigidBodyBuilder;
  zBind(expr: string): DynamicRigidBodyBuilder;
  onAngularAxisLockChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onBodyContact(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onCenterOfMassPositionChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onCenterOfMassRotationChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onDensityChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onEnteredTriggerBody(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onExitedTriggerBody(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onFilterGroupChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onFilterIgnoreGroupsChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onGravityEnabledChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onInertiaMatrixChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onInertiaTensorChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onIsKinematicChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onIsSleepingChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onKinematicEulerRotationChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onKinematicPivotChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onKinematicPositionChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onKinematicRotationChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onLinearAxisLockChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onMassChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onMassModeChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onPhysicsMaterialChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onReceiveContactReportsChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onReceiveTriggerReportsChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onRightChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onSendContactReportsChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onSendTriggerReportsChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onSimulationEnabledChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onStateChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onUpChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onXChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onYChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
  onZChanged(handler: DslSignalHandlerValue): DynamicRigidBodyBuilder;
}

const DYNAMICRIGIDBODY_META: TypeMetadata = {
  typeName: 'DynamicRigidBody',
  properties: [
    { name: 'angularAxisLock', hasValue: true, hasBinding: true },
    { name: 'centerOfMassPosition', hasValue: true, hasBinding: true },
    { name: 'centerOfMassRotation', hasValue: true, hasBinding: true },
    { name: 'density', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'filterGroup', hasValue: true, hasBinding: true },
    { name: 'filterIgnoreGroups', hasValue: true, hasBinding: true },
    { name: 'gravityEnabled', hasValue: true, hasBinding: true },
    { name: 'inertiaMatrix', hasValue: true, hasBinding: true },
    { name: 'inertiaTensor', hasValue: true, hasBinding: true },
    { name: 'isKinematic', hasValue: true, hasBinding: true },
    { name: 'isSleeping', hasValue: true, hasBinding: true },
    { name: 'kinematicEulerRotation', hasValue: true, hasBinding: true },
    { name: 'kinematicPivot', hasValue: true, hasBinding: true },
    { name: 'kinematicPosition', hasValue: true, hasBinding: true },
    { name: 'kinematicRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'linearAxisLock', hasValue: true, hasBinding: true },
    { name: 'mass', hasValue: true, hasBinding: true },
    { name: 'massMode', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAngularAxisLockChanged', paramCount: 0 },
    { handlerName: 'onBodyContact', paramCount: 4 },
    { handlerName: 'onCenterOfMassPositionChanged', paramCount: 0 },
    { handlerName: 'onCenterOfMassRotationChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDensityChanged', paramCount: 1 },
    { handlerName: 'onEnteredTriggerBody', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onExitedTriggerBody', paramCount: 1 },
    { handlerName: 'onFilterGroupChanged', paramCount: 0 },
    { handlerName: 'onFilterIgnoreGroupsChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onGravityEnabledChanged', paramCount: 0 },
    { handlerName: 'onInertiaMatrixChanged', paramCount: 0 },
    { handlerName: 'onInertiaTensorChanged', paramCount: 0 },
    { handlerName: 'onIsKinematicChanged', paramCount: 1 },
    { handlerName: 'onIsSleepingChanged', paramCount: 1 },
    { handlerName: 'onKinematicEulerRotationChanged', paramCount: 1 },
    { handlerName: 'onKinematicPivotChanged', paramCount: 1 },
    { handlerName: 'onKinematicPositionChanged', paramCount: 1 },
    { handlerName: 'onKinematicRotationChanged', paramCount: 1 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLinearAxisLockChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onMassChanged', paramCount: 1 },
    { handlerName: 'onMassModeChanged', paramCount: 0 },
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

export function DynamicRigidBody(): DynamicRigidBodyBuilder {
  return createFluentBuilder(
    'DynamicRigidBody',
    DYNAMICRIGIDBODY_META,
  ) as unknown as DynamicRigidBodyBuilder;
}

export namespace DynamicRigidBody {
  export namespace AxisLock {
    export const LockNone = createEnumToken('DynamicRigidBody', 'AxisLock', 'LockNone');
    export const LockX = createEnumToken('DynamicRigidBody', 'AxisLock', 'LockX');
    export const LockY = createEnumToken('DynamicRigidBody', 'AxisLock', 'LockY');
    export const LockZ = createEnumToken('DynamicRigidBody', 'AxisLock', 'LockZ');
  }
  export namespace MassMode {
    export const DefaultDensity = createEnumToken('DynamicRigidBody', 'MassMode', 'DefaultDensity');
    export const CustomDensity = createEnumToken('DynamicRigidBody', 'MassMode', 'CustomDensity');
    export const Mass = createEnumToken('DynamicRigidBody', 'MassMode', 'Mass');
    export const MassAndInertiaTensor = createEnumToken(
      'DynamicRigidBody',
      'MassMode',
      'MassAndInertiaTensor',
    );
    export const MassAndInertiaMatrix = createEnumToken(
      'DynamicRigidBody',
      'MassMode',
      'MassAndInertiaMatrix',
    );
  }
  export namespace StaticFlags {
    export const None = createEnumToken('DynamicRigidBody', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('DynamicRigidBody', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('DynamicRigidBody', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('DynamicRigidBody', 'TransformSpace', 'SceneSpace');
  }
}
