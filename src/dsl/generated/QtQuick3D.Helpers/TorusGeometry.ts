// AUTO-GENERATED — DO NOT EDIT
// Type: TorusGeometry
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface TorusGeometryBuilder {
  id(id: string): TorusGeometryBuilder;
  child(obj: QmlObjectBuilder): TorusGeometryBuilder;

  asynchronous(value: boolean): TorusGeometryBuilder;
  asynchronousBind(expr: string): TorusGeometryBuilder;
  objectName(value: string): TorusGeometryBuilder;
  objectNameBind(expr: string): TorusGeometryBuilder;
  parent(value: QmlValue): TorusGeometryBuilder;
  parentBind(expr: string): TorusGeometryBuilder;
  radius(value: number): TorusGeometryBuilder;
  radiusBind(expr: string): TorusGeometryBuilder;
  rings(value: number): TorusGeometryBuilder;
  ringsBind(expr: string): TorusGeometryBuilder;
  segments(value: number): TorusGeometryBuilder;
  segmentsBind(expr: string): TorusGeometryBuilder;
  state(value: string): TorusGeometryBuilder;
  stateBind(expr: string): TorusGeometryBuilder;
  tubeRadius(value: number): TorusGeometryBuilder;
  tubeRadiusBind(expr: string): TorusGeometryBuilder;
  onAsynchronousChanged(body: string): TorusGeometryBuilder;
  onChildrenChanged(body: string): TorusGeometryBuilder;
  onGeometryChanged(body: string): TorusGeometryBuilder;
  onGeometryNodeDirty(body: string): TorusGeometryBuilder;
  onObjectNameChanged(body: string): TorusGeometryBuilder;
  onParentChanged(body: string): TorusGeometryBuilder;
  onRadiusChanged(body: string): TorusGeometryBuilder;
  onRingsChanged(body: string): TorusGeometryBuilder;
  onSegmentsChanged(body: string): TorusGeometryBuilder;
  onStateChanged(body: string): TorusGeometryBuilder;
  onStatusChanged(body: string): TorusGeometryBuilder;
  onTubeRadiusChanged(body: string): TorusGeometryBuilder;
}

const TORUSGEOMETRY_META: TypeMetadata = {
  typeName: 'TorusGeometry',
  properties: [
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'segments', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'tubeRadius', hasValue: true, hasBinding: true },
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
    { handlerName: 'onTubeRadiusChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function TorusGeometry(): TorusGeometryBuilder {
  return createFluentBuilder('TorusGeometry', TORUSGEOMETRY_META) as unknown as TorusGeometryBuilder;
}

export namespace TorusGeometry {
  export namespace Status {
    export const Null = createEnumToken('TorusGeometry', 'Status', 'Null');
    export const Ready = createEnumToken('TorusGeometry', 'Status', 'Ready');
    export const Loading = createEnumToken('TorusGeometry', 'Status', 'Loading');
    export const Error = createEnumToken('TorusGeometry', 'Status', 'Error');
  }
}
