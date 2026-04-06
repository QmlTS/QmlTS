// AUTO-GENERATED — DO NOT EDIT
// Type: XrView
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
import type { SceneEnvironmentBuilder } from '../QtQuick3D/SceneEnvironment.js';
import type { XrOriginBuilder } from './XrOrigin.js';
export interface XrViewBuilder {
  id(id: string): XrViewBuilder;
  child(obj: QmlObjectBuilder): XrViewBuilder;
  children(...objs: QmlObjectBuilder[]): XrViewBuilder;

  depthSubmissionEnabled(value: boolean): XrViewBuilder;
  depthSubmissionEnabledBind(expr: string): XrViewBuilder;
  environment(value: SceneEnvironmentBuilder): XrViewBuilder;
  environmentBind(expr: string): XrViewBuilder;
  eulerRotation(value: QmlVector3d): XrViewBuilder;
  eulerRotationBind(expr: string): XrViewBuilder;
  fixedFoveation(value: QmlEnumToken): XrViewBuilder;
  fixedFoveationBind(expr: string): XrViewBuilder;
  layers(value: number): XrViewBuilder;
  layersBind(expr: string): XrViewBuilder;
  objectName(value: string): XrViewBuilder;
  objectNameBind(expr: string): XrViewBuilder;
  opacity(value: number): XrViewBuilder;
  opacityBind(expr: string): XrViewBuilder;
  parent(value: QmlValue): XrViewBuilder;
  parentBind(expr: string): XrViewBuilder;
  passthroughEnabled(value: boolean): XrViewBuilder;
  passthroughEnabledBind(expr: string): XrViewBuilder;
  pivot(value: QmlVector3d): XrViewBuilder;
  pivotBind(expr: string): XrViewBuilder;
  position(value: QmlVector3d): XrViewBuilder;
  positionBind(expr: string): XrViewBuilder;
  quitOnSessionEnd(value: boolean): XrViewBuilder;
  quitOnSessionEndBind(expr: string): XrViewBuilder;
  referenceSpace(value: QmlEnumToken): XrViewBuilder;
  referenceSpaceBind(expr: string): XrViewBuilder;
  rotation(value: QmlQuaternion): XrViewBuilder;
  rotationBind(expr: string): XrViewBuilder;
  scale(value: QmlVector3d): XrViewBuilder;
  scaleBind(expr: string): XrViewBuilder;
  state(value: string): XrViewBuilder;
  stateBind(expr: string): XrViewBuilder;
  staticFlags(value: number): XrViewBuilder;
  staticFlagsBind(expr: string): XrViewBuilder;
  visible(value: boolean): XrViewBuilder;
  visibleBind(expr: string): XrViewBuilder;
  x(value: number): XrViewBuilder;
  xBind(expr: string): XrViewBuilder;
  xrOrigin(value: XrOriginBuilder): XrViewBuilder;
  xrOriginBind(expr: string): XrViewBuilder;
  y(value: number): XrViewBuilder;
  yBind(expr: string): XrViewBuilder;
  z(value: number): XrViewBuilder;
  zBind(expr: string): XrViewBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onDepthSubmissionEnabledChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onEnvironmentChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onFixedFoveationChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onFrameReady(handler: DslSignalHandlerValue): XrViewBuilder;
  onInitializeFailed(handler: DslSignalHandlerValue): XrViewBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onMultiViewRenderingEnabledChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onParentChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onPassthroughEnabledChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onQuitOnSessionEndChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onReferenceSpaceChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onRightChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onSessionEnded(handler: DslSignalHandlerValue): XrViewBuilder;
  onStateChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onUpChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onXChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onXrOriginChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onYChanged(handler: DslSignalHandlerValue): XrViewBuilder;
  onZChanged(handler: DslSignalHandlerValue): XrViewBuilder;
}

const XRVIEW_META: TypeMetadata = {
  typeName: 'XrView',
  properties: [
    { name: 'depthSubmissionEnabled', hasValue: true, hasBinding: true },
    { name: 'environment', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'fixedFoveation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'passthroughEnabled', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'quitOnSessionEnd', hasValue: true, hasBinding: true },
    { name: 'referenceSpace', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'xrOrigin', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDepthSubmissionEnabledChanged', paramCount: 0 },
    { handlerName: 'onEnvironmentChanged', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onFixedFoveationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onFrameReady', paramCount: 0 },
    { handlerName: 'onInitializeFailed', paramCount: 1 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onMultiViewRenderingEnabledChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPassthroughEnabledChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onQuitOnSessionEndChanged', paramCount: 0 },
    { handlerName: 'onReferenceSpaceChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onSessionEnded', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onXrOriginChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function XrView(): XrViewBuilder {
  return createFluentBuilder('XrView', XRVIEW_META) as unknown as XrViewBuilder;
}

export namespace XrView {
  export namespace FoveationLevel {
    export const NoFoveation = createEnumToken('XrView', 'FoveationLevel', 'NoFoveation');
    export const LowFoveation = createEnumToken('XrView', 'FoveationLevel', 'LowFoveation');
    export const MediumFoveation = createEnumToken('XrView', 'FoveationLevel', 'MediumFoveation');
    export const HighFoveation = createEnumToken('XrView', 'FoveationLevel', 'HighFoveation');
  }
  export namespace ReferenceSpace {
    export const ReferenceSpaceUnknown = createEnumToken(
      'XrView',
      'ReferenceSpace',
      'ReferenceSpaceUnknown',
    );
    export const ReferenceSpaceLocal = createEnumToken(
      'XrView',
      'ReferenceSpace',
      'ReferenceSpaceLocal',
    );
    export const ReferenceSpaceStage = createEnumToken(
      'XrView',
      'ReferenceSpace',
      'ReferenceSpaceStage',
    );
    export const ReferenceSpaceLocalFloor = createEnumToken(
      'XrView',
      'ReferenceSpace',
      'ReferenceSpaceLocalFloor',
    );
  }
  export namespace StaticFlags {
    export const None = createEnumToken('XrView', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('XrView', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('XrView', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('XrView', 'TransformSpace', 'SceneSpace');
  }
}
