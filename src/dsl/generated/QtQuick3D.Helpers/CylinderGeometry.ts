// AUTO-GENERATED — DO NOT EDIT
// Type: CylinderGeometry
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface CylinderGeometryBuilder {
  id(id: string): CylinderGeometryBuilder;
  child(obj: QmlObjectBuilder): CylinderGeometryBuilder;

  asynchronous(value: boolean): CylinderGeometryBuilder;
  asynchronousBind(expr: string): CylinderGeometryBuilder;
  length(value: number): CylinderGeometryBuilder;
  lengthBind(expr: string): CylinderGeometryBuilder;
  objectName(value: string): CylinderGeometryBuilder;
  objectNameBind(expr: string): CylinderGeometryBuilder;
  parent(value: QmlValue): CylinderGeometryBuilder;
  parentBind(expr: string): CylinderGeometryBuilder;
  radius(value: number): CylinderGeometryBuilder;
  radiusBind(expr: string): CylinderGeometryBuilder;
  rings(value: number): CylinderGeometryBuilder;
  ringsBind(expr: string): CylinderGeometryBuilder;
  segments(value: number): CylinderGeometryBuilder;
  segmentsBind(expr: string): CylinderGeometryBuilder;
  state(value: string): CylinderGeometryBuilder;
  stateBind(expr: string): CylinderGeometryBuilder;
  onAsynchronousChanged(body: string): CylinderGeometryBuilder;
  onChildrenChanged(body: string): CylinderGeometryBuilder;
  onGeometryChanged(body: string): CylinderGeometryBuilder;
  onGeometryNodeDirty(body: string): CylinderGeometryBuilder;
  onLengthChanged(body: string): CylinderGeometryBuilder;
  onObjectNameChanged(body: string): CylinderGeometryBuilder;
  onParentChanged(body: string): CylinderGeometryBuilder;
  onRadiusChanged(body: string): CylinderGeometryBuilder;
  onRingsChanged(body: string): CylinderGeometryBuilder;
  onSegmentsChanged(body: string): CylinderGeometryBuilder;
  onStateChanged(body: string): CylinderGeometryBuilder;
  onStatusChanged(body: string): CylinderGeometryBuilder;
}

const CYLINDERGEOMETRY_META: TypeMetadata = {
  typeName: 'CylinderGeometry',
  properties: [
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'length', hasValue: true, hasBinding: true },
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
    { handlerName: 'onLengthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onRadiusChanged', paramCount: 0 },
    { handlerName: 'onRingsChanged', paramCount: 0 },
    { handlerName: 'onSegmentsChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function CylinderGeometry(): CylinderGeometryBuilder {
  return createFluentBuilder('CylinderGeometry', CYLINDERGEOMETRY_META) as unknown as CylinderGeometryBuilder;
}

export namespace CylinderGeometry {
  export namespace Status {
    export const Null = createEnumToken('CylinderGeometry', 'Status', 'Null');
    export const Ready = createEnumToken('CylinderGeometry', 'Status', 'Ready');
    export const Loading = createEnumToken('CylinderGeometry', 'Status', 'Loading');
    export const Error = createEnumToken('CylinderGeometry', 'Status', 'Error');
  }
}
