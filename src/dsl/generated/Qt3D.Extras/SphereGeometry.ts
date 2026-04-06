// AUTO-GENERATED — DO NOT EDIT
// Type: SphereGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { AttributeBuilder } from '../Qt3D.Core/Attribute.js';
export interface SphereGeometryBuilder {
  id(id: string): SphereGeometryBuilder;
  child(obj: QmlObjectBuilder): SphereGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): SphereGeometryBuilder;

  boundingVolumePositionAttribute(value: AttributeBuilder): SphereGeometryBuilder;
  boundingVolumePositionAttributeBind(expr: string): SphereGeometryBuilder;
  enabled(value: boolean): SphereGeometryBuilder;
  enabledBind(expr: string): SphereGeometryBuilder;
  generateTangents(value: boolean): SphereGeometryBuilder;
  generateTangentsBind(expr: string): SphereGeometryBuilder;
  objectName(value: string): SphereGeometryBuilder;
  objectNameBind(expr: string): SphereGeometryBuilder;
  parent(value: QmlValue): SphereGeometryBuilder;
  parentBind(expr: string): SphereGeometryBuilder;
  radius(value: number): SphereGeometryBuilder;
  radiusBind(expr: string): SphereGeometryBuilder;
  rings(value: number): SphereGeometryBuilder;
  ringsBind(expr: string): SphereGeometryBuilder;
  slices(value: number): SphereGeometryBuilder;
  slicesBind(expr: string): SphereGeometryBuilder;
  onBoundingVolumePositionAttributeChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onGenerateTangentsChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onMaxExtentChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onMinExtentChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onRadiusChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onRingsChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
  onSlicesChanged(handler: DslSignalHandlerValue): SphereGeometryBuilder;
}

const SPHEREGEOMETRY_META: TypeMetadata = {
  typeName: 'SphereGeometry',
  properties: [
    { name: 'boundingVolumePositionAttribute', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'generateTangents', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'slices', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundingVolumePositionAttributeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onGenerateTangentsChanged', paramCount: 1 },
    { handlerName: 'onMaxExtentChanged', paramCount: 1 },
    { handlerName: 'onMinExtentChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRadiusChanged', paramCount: 1 },
    { handlerName: 'onRingsChanged', paramCount: 1 },
    { handlerName: 'onSlicesChanged', paramCount: 1 },
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
