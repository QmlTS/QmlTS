// AUTO-GENERATED — DO NOT EDIT
// Type: CuboidGeometry
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlSize, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface CuboidGeometryBuilder {
  id(id: string): CuboidGeometryBuilder;
  child(obj: QmlObjectBuilder): CuboidGeometryBuilder;

  asynchronous(value: boolean): CuboidGeometryBuilder;
  asynchronousBind(expr: string): CuboidGeometryBuilder;
  objectName(value: string): CuboidGeometryBuilder;
  objectNameBind(expr: string): CuboidGeometryBuilder;
  parent(value: QmlValue): CuboidGeometryBuilder;
  parentBind(expr: string): CuboidGeometryBuilder;
  state(value: string): CuboidGeometryBuilder;
  stateBind(expr: string): CuboidGeometryBuilder;
  xExtent(value: number): CuboidGeometryBuilder;
  xExtentBind(expr: string): CuboidGeometryBuilder;
  xyMeshResolution(value: QmlSize): CuboidGeometryBuilder;
  xyMeshResolutionBind(expr: string): CuboidGeometryBuilder;
  xzMeshResolution(value: QmlSize): CuboidGeometryBuilder;
  xzMeshResolutionBind(expr: string): CuboidGeometryBuilder;
  yExtent(value: number): CuboidGeometryBuilder;
  yExtentBind(expr: string): CuboidGeometryBuilder;
  yzMeshResolution(value: QmlSize): CuboidGeometryBuilder;
  yzMeshResolutionBind(expr: string): CuboidGeometryBuilder;
  zExtent(value: number): CuboidGeometryBuilder;
  zExtentBind(expr: string): CuboidGeometryBuilder;
  onAsynchronousChanged(body: string): CuboidGeometryBuilder;
  onChildrenChanged(body: string): CuboidGeometryBuilder;
  onGeometryChanged(body: string): CuboidGeometryBuilder;
  onGeometryNodeDirty(body: string): CuboidGeometryBuilder;
  onObjectNameChanged(body: string): CuboidGeometryBuilder;
  onParentChanged(body: string): CuboidGeometryBuilder;
  onStateChanged(body: string): CuboidGeometryBuilder;
  onStatusChanged(body: string): CuboidGeometryBuilder;
  onXExtentChanged(body: string): CuboidGeometryBuilder;
  onXyMeshResolutionChanged(body: string): CuboidGeometryBuilder;
  onXzMeshResolutionChanged(body: string): CuboidGeometryBuilder;
  onYExtentChanged(body: string): CuboidGeometryBuilder;
  onYzMeshResolutionChanged(body: string): CuboidGeometryBuilder;
  onZExtentChanged(body: string): CuboidGeometryBuilder;
}

const CUBOIDGEOMETRY_META: TypeMetadata = {
  typeName: 'CuboidGeometry',
  properties: [
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'xExtent', hasValue: true, hasBinding: true },
    { name: 'xyMeshResolution', hasValue: true, hasBinding: true },
    { name: 'xzMeshResolution', hasValue: true, hasBinding: true },
    { name: 'yExtent', hasValue: true, hasBinding: true },
    { name: 'yzMeshResolution', hasValue: true, hasBinding: true },
    { name: 'zExtent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onXExtentChanged', paramCount: 0 },
    { handlerName: 'onXyMeshResolutionChanged', paramCount: 0 },
    { handlerName: 'onXzMeshResolutionChanged', paramCount: 0 },
    { handlerName: 'onYExtentChanged', paramCount: 0 },
    { handlerName: 'onYzMeshResolutionChanged', paramCount: 0 },
    { handlerName: 'onZExtentChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function CuboidGeometry(): CuboidGeometryBuilder {
  return createFluentBuilder('CuboidGeometry', CUBOIDGEOMETRY_META) as unknown as CuboidGeometryBuilder;
}

export namespace CuboidGeometry {
  export namespace Status {
    export const Null = createEnumToken('CuboidGeometry', 'Status', 'Null');
    export const Ready = createEnumToken('CuboidGeometry', 'Status', 'Ready');
    export const Loading = createEnumToken('CuboidGeometry', 'Status', 'Loading');
    export const Error = createEnumToken('CuboidGeometry', 'Status', 'Error');
  }
}
