// AUTO-GENERATED — DO NOT EDIT
// Type: PlaneGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlSize,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface PlaneGeometryBuilder {
  id(id: string): PlaneGeometryBuilder;
  child(obj: QmlObjectBuilder): PlaneGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): PlaneGeometryBuilder;

  asynchronous(value: boolean): PlaneGeometryBuilder;
  asynchronousBind(expr: string): PlaneGeometryBuilder;
  height(value: number): PlaneGeometryBuilder;
  heightBind(expr: string): PlaneGeometryBuilder;
  meshResolution(value: QmlSize): PlaneGeometryBuilder;
  meshResolutionBind(expr: string): PlaneGeometryBuilder;
  mirrored(value: boolean): PlaneGeometryBuilder;
  mirroredBind(expr: string): PlaneGeometryBuilder;
  objectName(value: string): PlaneGeometryBuilder;
  objectNameBind(expr: string): PlaneGeometryBuilder;
  parent(value: QmlValue): PlaneGeometryBuilder;
  parentBind(expr: string): PlaneGeometryBuilder;
  plane(value: QmlEnumToken): PlaneGeometryBuilder;
  planeBind(expr: string): PlaneGeometryBuilder;
  reversed(value: boolean): PlaneGeometryBuilder;
  reversedBind(expr: string): PlaneGeometryBuilder;
  state(value: string): PlaneGeometryBuilder;
  stateBind(expr: string): PlaneGeometryBuilder;
  width(value: number): PlaneGeometryBuilder;
  widthBind(expr: string): PlaneGeometryBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onGeometryNodeDirty(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onMeshResolutionChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onPlaneChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onReversedChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onStateChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
}

const PLANEGEOMETRY_META: TypeMetadata = {
  typeName: 'PlaneGeometry',
  properties: [
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'meshResolution', hasValue: true, hasBinding: true },
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'plane', hasValue: true, hasBinding: true },
    { name: 'reversed', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onMeshResolutionChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPlaneChanged', paramCount: 0 },
    { handlerName: 'onReversedChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function PlaneGeometry(): PlaneGeometryBuilder {
  return createFluentBuilder(
    'PlaneGeometry',
    PLANEGEOMETRY_META,
  ) as unknown as PlaneGeometryBuilder;
}

export namespace PlaneGeometry {
  export namespace Plane {
    export const XY = createEnumToken('PlaneGeometry', 'Plane', 'XY');
    export const XZ = createEnumToken('PlaneGeometry', 'Plane', 'XZ');
    export const ZY = createEnumToken('PlaneGeometry', 'Plane', 'ZY');
  }
  export namespace Status {
    export const Null = createEnumToken('PlaneGeometry', 'Status', 'Null');
    export const Ready = createEnumToken('PlaneGeometry', 'Status', 'Ready');
    export const Loading = createEnumToken('PlaneGeometry', 'Status', 'Loading');
    export const Error = createEnumToken('PlaneGeometry', 'Status', 'Error');
  }
}
