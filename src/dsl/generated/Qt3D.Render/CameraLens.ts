// AUTO-GENERATED — DO NOT EDIT
// Type: CameraLens
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlMatrix4x4,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface CameraLensBuilder {
  id(id: string): CameraLensBuilder;
  child(obj: QmlObjectBuilder): CameraLensBuilder;
  children(...objs: QmlObjectBuilder[]): CameraLensBuilder;

  aspectRatio(value: number): CameraLensBuilder;
  aspectRatioBind(expr: string): CameraLensBuilder;
  bottom(value: number): CameraLensBuilder;
  bottomBind(expr: string): CameraLensBuilder;
  enabled(value: boolean): CameraLensBuilder;
  enabledBind(expr: string): CameraLensBuilder;
  exposure(value: number): CameraLensBuilder;
  exposureBind(expr: string): CameraLensBuilder;
  farPlane(value: number): CameraLensBuilder;
  farPlaneBind(expr: string): CameraLensBuilder;
  fieldOfView(value: number): CameraLensBuilder;
  fieldOfViewBind(expr: string): CameraLensBuilder;
  isShareable(value: boolean): CameraLensBuilder;
  isShareableBind(expr: string): CameraLensBuilder;
  left(value: number): CameraLensBuilder;
  leftBind(expr: string): CameraLensBuilder;
  nearPlane(value: number): CameraLensBuilder;
  nearPlaneBind(expr: string): CameraLensBuilder;
  objectName(value: string): CameraLensBuilder;
  objectNameBind(expr: string): CameraLensBuilder;
  parent(value: QmlValue): CameraLensBuilder;
  parentBind(expr: string): CameraLensBuilder;
  projectionMatrix(value: QmlMatrix4x4): CameraLensBuilder;
  projectionMatrixBind(expr: string): CameraLensBuilder;
  projectionType(value: QmlEnumToken): CameraLensBuilder;
  projectionTypeBind(expr: string): CameraLensBuilder;
  right(value: number): CameraLensBuilder;
  rightBind(expr: string): CameraLensBuilder;
  top(value: number): CameraLensBuilder;
  topBind(expr: string): CameraLensBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): CameraLensBuilder;
  onAspectRatioChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onBottomChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onExposureChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onFarPlaneChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onFieldOfViewChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onLeftChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onNearPlaneChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): CameraLensBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onParentChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onProjectionMatrixChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onProjectionTypeChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): CameraLensBuilder;
  onRightChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onTopChanged(handler: DslSignalHandlerValue): CameraLensBuilder;
  onViewSphere(handler: DslSignalHandlerValue): CameraLensBuilder;
}

const CAMERALENS_META: TypeMetadata = {
  typeName: 'CameraLens',
  properties: [
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'bottom', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'exposure', hasValue: true, hasBinding: true },
    { name: 'farPlane', hasValue: true, hasBinding: true },
    { name: 'fieldOfView', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'left', hasValue: true, hasBinding: true },
    { name: 'nearPlane', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'projectionMatrix', hasValue: true, hasBinding: true },
    { name: 'projectionType', hasValue: true, hasBinding: true },
    { name: 'right', hasValue: true, hasBinding: true },
    { name: 'top', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onAspectRatioChanged', paramCount: 1 },
    { handlerName: 'onBottomChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onExposureChanged', paramCount: 1 },
    { handlerName: 'onFarPlaneChanged', paramCount: 1 },
    { handlerName: 'onFieldOfViewChanged', paramCount: 1 },
    { handlerName: 'onLeftChanged', paramCount: 1 },
    { handlerName: 'onNearPlaneChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onProjectionMatrixChanged', paramCount: 1 },
    { handlerName: 'onProjectionTypeChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRightChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onTopChanged', paramCount: 1 },
    { handlerName: 'onViewSphere', paramCount: 2 },
  ],
  grouped: [],
  attached: [],
};

export function CameraLens(): CameraLensBuilder {
  return createFluentBuilder('CameraLens', CAMERALENS_META) as unknown as CameraLensBuilder;
}

export namespace CameraLens {
  export namespace ProjectionType {
    export const OrthographicProjection = createEnumToken(
      'CameraLens',
      'ProjectionType',
      'OrthographicProjection',
    );
    export const PerspectiveProjection = createEnumToken(
      'CameraLens',
      'ProjectionType',
      'PerspectiveProjection',
    );
    export const FrustumProjection = createEnumToken(
      'CameraLens',
      'ProjectionType',
      'FrustumProjection',
    );
    export const CustomProjection = createEnumToken(
      'CameraLens',
      'ProjectionType',
      'CustomProjection',
    );
  }
}
