// AUTO-GENERATED — DO NOT EDIT
// Type: HeightFieldGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface HeightFieldGeometryBuilder {
  id(id: string): HeightFieldGeometryBuilder;
  child(obj: QmlObjectBuilder): HeightFieldGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): HeightFieldGeometryBuilder;

  extents(value: QmlVector3d): HeightFieldGeometryBuilder;
  extentsBind(expr: string): HeightFieldGeometryBuilder;
  heightMap(value: QmlUrl): HeightFieldGeometryBuilder;
  heightMapBind(expr: string): HeightFieldGeometryBuilder;
  objectName(value: string): HeightFieldGeometryBuilder;
  objectNameBind(expr: string): HeightFieldGeometryBuilder;
  parent(value: QmlValue): HeightFieldGeometryBuilder;
  parentBind(expr: string): HeightFieldGeometryBuilder;
  smoothShading(value: boolean): HeightFieldGeometryBuilder;
  smoothShadingBind(expr: string): HeightFieldGeometryBuilder;
  source(value: QmlUrl): HeightFieldGeometryBuilder;
  sourceBind(expr: string): HeightFieldGeometryBuilder;
  state(value: string): HeightFieldGeometryBuilder;
  stateBind(expr: string): HeightFieldGeometryBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
  onExtentsChanged(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
  onGeometryNodeDirty(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
  onSmoothShadingChanged(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
  onStateChanged(handler: DslSignalHandlerValue): HeightFieldGeometryBuilder;
}

const HEIGHTFIELDGEOMETRY_META: TypeMetadata = {
  typeName: 'HeightFieldGeometry',
  properties: [
    { name: 'extents', hasValue: true, hasBinding: true },
    { name: 'heightMap', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'smoothShading', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onExtentsChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onSmoothShadingChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function HeightFieldGeometry(): HeightFieldGeometryBuilder {
  return createFluentBuilder(
    'HeightFieldGeometry',
    HEIGHTFIELDGEOMETRY_META,
  ) as unknown as HeightFieldGeometryBuilder;
}
