// AUTO-GENERATED — DO NOT EDIT
// Type: TriggerBody
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface TriggerBodyBuilder {
  id(id: string): TriggerBodyBuilder;
  child(obj: QmlObjectBuilder): TriggerBodyBuilder;

  eulerRotation(value: QmlVector3d): TriggerBodyBuilder;
  eulerRotationBind(expr: string): TriggerBodyBuilder;
  filterGroup(value: number): TriggerBodyBuilder;
  filterGroupBind(expr: string): TriggerBodyBuilder;
  filterIgnoreGroups(value: number): TriggerBodyBuilder;
  filterIgnoreGroupsBind(expr: string): TriggerBodyBuilder;
  layers(value: number): TriggerBodyBuilder;
  layersBind(expr: string): TriggerBodyBuilder;
  objectName(value: string): TriggerBodyBuilder;
  objectNameBind(expr: string): TriggerBodyBuilder;
  opacity(value: number): TriggerBodyBuilder;
  opacityBind(expr: string): TriggerBodyBuilder;
  parent(value: QmlValue): TriggerBodyBuilder;
  parentBind(expr: string): TriggerBodyBuilder;
  pivot(value: QmlVector3d): TriggerBodyBuilder;
  pivotBind(expr: string): TriggerBodyBuilder;
  position(value: QmlVector3d): TriggerBodyBuilder;
  positionBind(expr: string): TriggerBodyBuilder;
  receiveContactReports(value: boolean): TriggerBodyBuilder;
  receiveContactReportsBind(expr: string): TriggerBodyBuilder;
  receiveTriggerReports(value: boolean): TriggerBodyBuilder;
  receiveTriggerReportsBind(expr: string): TriggerBodyBuilder;
  rotation(value: QmlQuaternion): TriggerBodyBuilder;
  rotationBind(expr: string): TriggerBodyBuilder;
  scale(value: QmlVector3d): TriggerBodyBuilder;
  scaleBind(expr: string): TriggerBodyBuilder;
  sendContactReports(value: boolean): TriggerBodyBuilder;
  sendContactReportsBind(expr: string): TriggerBodyBuilder;
  sendTriggerReports(value: boolean): TriggerBodyBuilder;
  sendTriggerReportsBind(expr: string): TriggerBodyBuilder;
  state(value: string): TriggerBodyBuilder;
  stateBind(expr: string): TriggerBodyBuilder;
  staticFlags(value: number): TriggerBodyBuilder;
  staticFlagsBind(expr: string): TriggerBodyBuilder;
  visible(value: boolean): TriggerBodyBuilder;
  visibleBind(expr: string): TriggerBodyBuilder;
  x(value: number): TriggerBodyBuilder;
  xBind(expr: string): TriggerBodyBuilder;
  y(value: number): TriggerBodyBuilder;
  yBind(expr: string): TriggerBodyBuilder;
  z(value: number): TriggerBodyBuilder;
  zBind(expr: string): TriggerBodyBuilder;
  onBodyContact(body: string): TriggerBodyBuilder;
  onBodyEntered(body: string): TriggerBodyBuilder;
  onBodyExited(body: string): TriggerBodyBuilder;
  onChildrenChanged(body: string): TriggerBodyBuilder;
  onCollisionCountChanged(body: string): TriggerBodyBuilder;
  onEnteredTriggerBody(body: string): TriggerBodyBuilder;
  onEulerRotationChanged(body: string): TriggerBodyBuilder;
  onExitedTriggerBody(body: string): TriggerBodyBuilder;
  onFilterGroupChanged(body: string): TriggerBodyBuilder;
  onFilterIgnoreGroupsChanged(body: string): TriggerBodyBuilder;
  onForwardChanged(body: string): TriggerBodyBuilder;
  onLayersChanged(body: string): TriggerBodyBuilder;
  onLocalOpacityChanged(body: string): TriggerBodyBuilder;
  onObjectNameChanged(body: string): TriggerBodyBuilder;
  onParentChanged(body: string): TriggerBodyBuilder;
  onPivotChanged(body: string): TriggerBodyBuilder;
  onPositionChanged(body: string): TriggerBodyBuilder;
  onReceiveContactReportsChanged(body: string): TriggerBodyBuilder;
  onReceiveTriggerReportsChanged(body: string): TriggerBodyBuilder;
  onRightChanged(body: string): TriggerBodyBuilder;
  onRotationChanged(body: string): TriggerBodyBuilder;
  onScaleChanged(body: string): TriggerBodyBuilder;
  onScenePositionChanged(body: string): TriggerBodyBuilder;
  onSceneRotationChanged(body: string): TriggerBodyBuilder;
  onSceneScaleChanged(body: string): TriggerBodyBuilder;
  onSceneTransformChanged(body: string): TriggerBodyBuilder;
  onSendContactReportsChanged(body: string): TriggerBodyBuilder;
  onSendTriggerReportsChanged(body: string): TriggerBodyBuilder;
  onStateChanged(body: string): TriggerBodyBuilder;
  onStaticFlagsChanged(body: string): TriggerBodyBuilder;
  onUpChanged(body: string): TriggerBodyBuilder;
  onVisibleChanged(body: string): TriggerBodyBuilder;
  onXChanged(body: string): TriggerBodyBuilder;
  onYChanged(body: string): TriggerBodyBuilder;
  onZChanged(body: string): TriggerBodyBuilder;
}

const TRIGGERBODY_META: TypeMetadata = {
  typeName: 'TriggerBody',
  properties: [
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'filterGroup', hasValue: true, hasBinding: true },
    { name: 'filterIgnoreGroups', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'receiveContactReports', hasValue: true, hasBinding: true },
    { name: 'receiveTriggerReports', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'sendContactReports', hasValue: true, hasBinding: true },
    { name: 'sendTriggerReports', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBodyContact', paramCount: 4 },
    { handlerName: 'onBodyEntered', paramCount: 1 },
    { handlerName: 'onBodyExited', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onCollisionCountChanged', paramCount: 0 },
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

export function TriggerBody(): TriggerBodyBuilder {
  return createFluentBuilder('TriggerBody', TRIGGERBODY_META) as unknown as TriggerBodyBuilder;
}

export namespace TriggerBody {
  export namespace StaticFlags {
    export const None = createEnumToken('TriggerBody', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('TriggerBody', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('TriggerBody', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('TriggerBody', 'TransformSpace', 'SceneSpace');
  }
}
