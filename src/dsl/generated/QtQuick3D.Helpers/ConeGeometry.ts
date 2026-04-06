// AUTO-GENERATED — DO NOT EDIT
// Type: ConeGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ConeGeometryBuilder {
  id(id: string): ConeGeometryBuilder;
  child(obj: QmlObjectBuilder): ConeGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): ConeGeometryBuilder;

  asynchronous(value: boolean): ConeGeometryBuilder;
  asynchronousBind(expr: string): ConeGeometryBuilder;
  bottomRadius(value: number): ConeGeometryBuilder;
  bottomRadiusBind(expr: string): ConeGeometryBuilder;
  length(value: number): ConeGeometryBuilder;
  lengthBind(expr: string): ConeGeometryBuilder;
  objectName(value: string): ConeGeometryBuilder;
  objectNameBind(expr: string): ConeGeometryBuilder;
  parent(value: QmlValue): ConeGeometryBuilder;
  parentBind(expr: string): ConeGeometryBuilder;
  rings(value: number): ConeGeometryBuilder;
  ringsBind(expr: string): ConeGeometryBuilder;
  segments(value: number): ConeGeometryBuilder;
  segmentsBind(expr: string): ConeGeometryBuilder;
  state(value: string): ConeGeometryBuilder;
  stateBind(expr: string): ConeGeometryBuilder;
  topRadius(value: number): ConeGeometryBuilder;
  topRadiusBind(expr: string): ConeGeometryBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onBottomRadiusChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onGeometryNodeDirty(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onLengthChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onRingsChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onSegmentsChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onTopRadiusChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
}

const CONEGEOMETRY_META: TypeMetadata = {
  typeName: 'ConeGeometry',
  properties: [
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'bottomRadius', hasValue: true, hasBinding: true },
    { name: 'length', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'segments', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'topRadius', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onBottomRadiusChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onLengthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onRingsChanged', paramCount: 0 },
    { handlerName: 'onSegmentsChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onTopRadiusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ConeGeometry(): ConeGeometryBuilder {
  return createFluentBuilder('ConeGeometry', CONEGEOMETRY_META) as unknown as ConeGeometryBuilder;
}

export namespace ConeGeometry {
  export namespace Status {
    export const Null = createEnumToken('ConeGeometry', 'Status', 'Null');
    export const Ready = createEnumToken('ConeGeometry', 'Status', 'Ready');
    export const Loading = createEnumToken('ConeGeometry', 'Status', 'Loading');
    export const Error = createEnumToken('ConeGeometry', 'Status', 'Error');
  }
}
