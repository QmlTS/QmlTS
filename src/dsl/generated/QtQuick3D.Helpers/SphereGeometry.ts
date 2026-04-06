// AUTO-GENERATED — DO NOT EDIT
// Type: SphereGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SphereGeometryBuilder {
  id(id: string): SphereGeometryBuilder;
  child(obj: QmlObjectBuilder): SphereGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): SphereGeometryBuilder;

  asynchronous(value: boolean): SphereGeometryBuilder;
  asynchronousBind(expr: string): SphereGeometryBuilder;
  objectName(value: string): SphereGeometryBuilder;
  objectNameBind(expr: string): SphereGeometryBuilder;
  parent(value: QmlValue): SphereGeometryBuilder;
  parentBind(expr: string): SphereGeometryBuilder;
  radius(value: number): SphereGeometryBuilder;
  radiusBind(expr: string): SphereGeometryBuilder;
  rings(value: number): SphereGeometryBuilder;
  ringsBind(expr: string): SphereGeometryBuilder;
  segments(value: number): SphereGeometryBuilder;
  segmentsBind(expr: string): SphereGeometryBuilder;
  state(value: string): SphereGeometryBuilder;
  stateBind(expr: string): SphereGeometryBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onGeometryNodeDirty(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onRadiusChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onRingsChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onSegmentsChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
}

const SPHEREGEOMETRY_META: TypeMetadata = {
  typeName: 'SphereGeometry',
  properties: [
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'segments', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onRadiusChanged', paramCount: 0 },
    { handlerName: 'onRingsChanged', paramCount: 0 },
    { handlerName: 'onSegmentsChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SphereGeometry(): SphereGeometryBuilder {
  return createFluentBuilder(
    'SphereGeometry',
    SPHEREGEOMETRY_META,
  ) as unknown as SphereGeometryBuilder;
}

export namespace SphereGeometry {
  export namespace Status {
    export const Null = createEnumToken('SphereGeometry', 'Status', 'Null');
    export const Ready = createEnumToken('SphereGeometry', 'Status', 'Ready');
    export const Loading = createEnumToken('SphereGeometry', 'Status', 'Loading');
    export const Error = createEnumToken('SphereGeometry', 'Status', 'Error');
  }
}
