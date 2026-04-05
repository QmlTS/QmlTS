// AUTO-GENERATED — DO NOT EDIT
// Type: XrController
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface XrControllerBuilder {
  id(id: string): XrControllerBuilder;
  child(obj: QmlObjectBuilder): XrControllerBuilder;

  controller(value: QmlEnumToken): XrControllerBuilder;
  controllerBind(expr: string): XrControllerBuilder;
  eulerRotation(value: QmlVector3d): XrControllerBuilder;
  eulerRotationBind(expr: string): XrControllerBuilder;
  layers(value: number): XrControllerBuilder;
  layersBind(expr: string): XrControllerBuilder;
  objectName(value: string): XrControllerBuilder;
  objectNameBind(expr: string): XrControllerBuilder;
  opacity(value: number): XrControllerBuilder;
  opacityBind(expr: string): XrControllerBuilder;
  parent(value: QmlValue): XrControllerBuilder;
  parentBind(expr: string): XrControllerBuilder;
  pivot(value: QmlVector3d): XrControllerBuilder;
  pivotBind(expr: string): XrControllerBuilder;
  poseSpace(value: QmlEnumToken): XrControllerBuilder;
  poseSpaceBind(expr: string): XrControllerBuilder;
  position(value: QmlVector3d): XrControllerBuilder;
  positionBind(expr: string): XrControllerBuilder;
  rotation(value: QmlQuaternion): XrControllerBuilder;
  rotationBind(expr: string): XrControllerBuilder;
  scale(value: QmlVector3d): XrControllerBuilder;
  scaleBind(expr: string): XrControllerBuilder;
  state(value: string): XrControllerBuilder;
  stateBind(expr: string): XrControllerBuilder;
  staticFlags(value: number): XrControllerBuilder;
  staticFlagsBind(expr: string): XrControllerBuilder;
  visible(value: boolean): XrControllerBuilder;
  visibleBind(expr: string): XrControllerBuilder;
  x(value: number): XrControllerBuilder;
  xBind(expr: string): XrControllerBuilder;
  y(value: number): XrControllerBuilder;
  yBind(expr: string): XrControllerBuilder;
  z(value: number): XrControllerBuilder;
  zBind(expr: string): XrControllerBuilder;
  onActionMapperChanged(body: string): XrControllerBuilder;
  onChildrenChanged(body: string): XrControllerBuilder;
  onControllerChanged(body: string): XrControllerBuilder;
  onEulerRotationChanged(body: string): XrControllerBuilder;
  onForwardChanged(body: string): XrControllerBuilder;
  onIsActiveChanged(body: string): XrControllerBuilder;
  onJointDataUpdated(body: string): XrControllerBuilder;
  onJointPositionsChanged(body: string): XrControllerBuilder;
  onJointRotationsChanged(body: string): XrControllerBuilder;
  onLayersChanged(body: string): XrControllerBuilder;
  onLocalOpacityChanged(body: string): XrControllerBuilder;
  onObjectNameChanged(body: string): XrControllerBuilder;
  onParentChanged(body: string): XrControllerBuilder;
  onPivotChanged(body: string): XrControllerBuilder;
  onPokePositionChanged(body: string): XrControllerBuilder;
  onPoseSpaceChanged(body: string): XrControllerBuilder;
  onPositionChanged(body: string): XrControllerBuilder;
  onRightChanged(body: string): XrControllerBuilder;
  onRotationChanged(body: string): XrControllerBuilder;
  onScaleChanged(body: string): XrControllerBuilder;
  onScenePositionChanged(body: string): XrControllerBuilder;
  onSceneRotationChanged(body: string): XrControllerBuilder;
  onSceneScaleChanged(body: string): XrControllerBuilder;
  onSceneTransformChanged(body: string): XrControllerBuilder;
  onStateChanged(body: string): XrControllerBuilder;
  onStaticFlagsChanged(body: string): XrControllerBuilder;
  onUpChanged(body: string): XrControllerBuilder;
  onVisibleChanged(body: string): XrControllerBuilder;
  onXChanged(body: string): XrControllerBuilder;
  onYChanged(body: string): XrControllerBuilder;
  onZChanged(body: string): XrControllerBuilder;
}

const XRCONTROLLER_META: TypeMetadata = {
  typeName: 'XrController',
  properties: [
    { name: 'controller', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'poseSpace', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActionMapperChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onControllerChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onIsActiveChanged', paramCount: 0 },
    { handlerName: 'onJointDataUpdated', paramCount: 0 },
    { handlerName: 'onJointPositionsChanged', paramCount: 0 },
    { handlerName: 'onJointRotationsChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPokePositionChanged', paramCount: 0 },
    { handlerName: 'onPoseSpaceChanged', paramCount: 0 },
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

export function XrController(): XrControllerBuilder {
  return createFluentBuilder('XrController', XRCONTROLLER_META) as unknown as XrControllerBuilder;
}

export namespace XrController {
  export namespace Controller {
    export const ControllerLeft = createEnumToken('XrController', 'Controller', 'ControllerLeft');
    export const ControllerRight = createEnumToken('XrController', 'Controller', 'ControllerRight');
    export const ControllerNone = createEnumToken('XrController', 'Controller', 'ControllerNone');
    export const LeftController = createEnumToken('XrController', 'Controller', 'LeftController');
    export const RightController = createEnumToken('XrController', 'Controller', 'RightController');
    export const LeftHand = createEnumToken('XrController', 'Controller', 'LeftHand');
    export const RightHand = createEnumToken('XrController', 'Controller', 'RightHand');
    export const UnknownController = createEnumToken('XrController', 'Controller', 'UnknownController');
  }
  export namespace HandPoseSpace {
    export const GripPose = createEnumToken('XrController', 'HandPoseSpace', 'GripPose');
    export const AimPose = createEnumToken('XrController', 'HandPoseSpace', 'AimPose');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('XrController', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('XrController', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('XrController', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('XrController', 'TransformSpace', 'SceneSpace');
  }
}
