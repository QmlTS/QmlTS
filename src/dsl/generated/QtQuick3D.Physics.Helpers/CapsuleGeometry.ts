// AUTO-GENERATED — DO NOT EDIT
// Type: CapsuleGeometry
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface CapsuleGeometryBuilder {
  id(id: string): CapsuleGeometryBuilder;
  child(obj: QmlObjectBuilder): CapsuleGeometryBuilder;

  diameter(value: number): CapsuleGeometryBuilder;
  diameterBind(expr: string): CapsuleGeometryBuilder;
  enableNormals(value: boolean): CapsuleGeometryBuilder;
  enableNormalsBind(expr: string): CapsuleGeometryBuilder;
  enableUV(value: boolean): CapsuleGeometryBuilder;
  enableUVBind(expr: string): CapsuleGeometryBuilder;
  height(value: number): CapsuleGeometryBuilder;
  heightBind(expr: string): CapsuleGeometryBuilder;
  latitudes(value: number): CapsuleGeometryBuilder;
  latitudesBind(expr: string): CapsuleGeometryBuilder;
  longitudes(value: number): CapsuleGeometryBuilder;
  longitudesBind(expr: string): CapsuleGeometryBuilder;
  objectName(value: string): CapsuleGeometryBuilder;
  objectNameBind(expr: string): CapsuleGeometryBuilder;
  parent(value: QmlValue): CapsuleGeometryBuilder;
  parentBind(expr: string): CapsuleGeometryBuilder;
  rings(value: number): CapsuleGeometryBuilder;
  ringsBind(expr: string): CapsuleGeometryBuilder;
  state(value: string): CapsuleGeometryBuilder;
  stateBind(expr: string): CapsuleGeometryBuilder;
  onChildrenChanged(body: string): CapsuleGeometryBuilder;
  onDiameterChanged(body: string): CapsuleGeometryBuilder;
  onEnableNormalsChanged(body: string): CapsuleGeometryBuilder;
  onEnableUVChanged(body: string): CapsuleGeometryBuilder;
  onGeometryChanged(body: string): CapsuleGeometryBuilder;
  onGeometryNodeDirty(body: string): CapsuleGeometryBuilder;
  onHeightChanged(body: string): CapsuleGeometryBuilder;
  onLatitudesChanged(body: string): CapsuleGeometryBuilder;
  onLongitudesChanged(body: string): CapsuleGeometryBuilder;
  onObjectNameChanged(body: string): CapsuleGeometryBuilder;
  onParentChanged(body: string): CapsuleGeometryBuilder;
  onRingsChanged(body: string): CapsuleGeometryBuilder;
  onStateChanged(body: string): CapsuleGeometryBuilder;
}

const CAPSULEGEOMETRY_META: TypeMetadata = {
  typeName: 'CapsuleGeometry',
  properties: [
    { name: 'diameter', hasValue: true, hasBinding: true },
    { name: 'enableNormals', hasValue: true, hasBinding: true },
    { name: 'enableUV', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'latitudes', hasValue: true, hasBinding: true },
    { name: 'longitudes', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDiameterChanged', paramCount: 0 },
    { handlerName: 'onEnableNormalsChanged', paramCount: 0 },
    { handlerName: 'onEnableUVChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onLatitudesChanged', paramCount: 0 },
    { handlerName: 'onLongitudesChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onRingsChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function CapsuleGeometry(): CapsuleGeometryBuilder {
  return createFluentBuilder(
    'CapsuleGeometry',
    CAPSULEGEOMETRY_META,
  ) as unknown as CapsuleGeometryBuilder;
}
