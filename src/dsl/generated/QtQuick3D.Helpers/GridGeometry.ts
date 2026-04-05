// AUTO-GENERATED — DO NOT EDIT
// Type: GridGeometry
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface GridGeometryBuilder {
  id(id: string): GridGeometryBuilder;
  child(obj: QmlObjectBuilder): GridGeometryBuilder;

  horizontalLines(value: number): GridGeometryBuilder;
  horizontalLinesBind(expr: string): GridGeometryBuilder;
  horizontalStep(value: number): GridGeometryBuilder;
  horizontalStepBind(expr: string): GridGeometryBuilder;
  objectName(value: string): GridGeometryBuilder;
  objectNameBind(expr: string): GridGeometryBuilder;
  parent(value: QmlValue): GridGeometryBuilder;
  parentBind(expr: string): GridGeometryBuilder;
  state(value: string): GridGeometryBuilder;
  stateBind(expr: string): GridGeometryBuilder;
  verticalLines(value: number): GridGeometryBuilder;
  verticalLinesBind(expr: string): GridGeometryBuilder;
  verticalStep(value: number): GridGeometryBuilder;
  verticalStepBind(expr: string): GridGeometryBuilder;
  onChildrenChanged(body: string): GridGeometryBuilder;
  onGeometryChanged(body: string): GridGeometryBuilder;
  onGeometryNodeDirty(body: string): GridGeometryBuilder;
  onHorizontalLinesChanged(body: string): GridGeometryBuilder;
  onHorizontalStepChanged(body: string): GridGeometryBuilder;
  onObjectNameChanged(body: string): GridGeometryBuilder;
  onParentChanged(body: string): GridGeometryBuilder;
  onStateChanged(body: string): GridGeometryBuilder;
  onVerticalLinesChanged(body: string): GridGeometryBuilder;
  onVerticalStepChanged(body: string): GridGeometryBuilder;
}

const GRIDGEOMETRY_META: TypeMetadata = {
  typeName: 'GridGeometry',
  properties: [
    { name: 'horizontalLines', hasValue: true, hasBinding: true },
    { name: 'horizontalStep', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'verticalLines', hasValue: true, hasBinding: true },
    { name: 'verticalStep', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onHorizontalLinesChanged', paramCount: 0 },
    { handlerName: 'onHorizontalStepChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onVerticalLinesChanged', paramCount: 0 },
    { handlerName: 'onVerticalStepChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function GridGeometry(): GridGeometryBuilder {
  return createFluentBuilder('GridGeometry', GRIDGEOMETRY_META) as unknown as GridGeometryBuilder;
}
