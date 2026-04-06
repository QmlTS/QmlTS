// AUTO-GENERATED — DO NOT EDIT
// Type: CylinderGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { AttributeBuilder } from '../Qt3D.Core/Attribute.js';
export interface CylinderGeometryBuilder {
  id(id: string): CylinderGeometryBuilder;
  child(obj: QmlObjectBuilder): CylinderGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): CylinderGeometryBuilder;

  boundingVolumePositionAttribute(value: AttributeBuilder): CylinderGeometryBuilder;
  boundingVolumePositionAttributeBind(expr: string): CylinderGeometryBuilder;
  enabled(value: boolean): CylinderGeometryBuilder;
  enabledBind(expr: string): CylinderGeometryBuilder;
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
  slices(value: number): CylinderGeometryBuilder;
  slicesBind(expr: string): CylinderGeometryBuilder;
  onBoundingVolumePositionAttributeChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onLengthChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onMaxExtentChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onMinExtentChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onRadiusChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onRingsChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
  onSlicesChanged(handler: DslSignalHandlerValue): CylinderGeometryBuilder;
}

const CYLINDERGEOMETRY_META: TypeMetadata = {
  typeName: 'CylinderGeometry',
  properties: [
    { name: 'boundingVolumePositionAttribute', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'length', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'slices', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundingVolumePositionAttributeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onLengthChanged', paramCount: 1 },
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

export function CylinderGeometry(): CylinderGeometryBuilder {
  return createFluentBuilder(
    'CylinderGeometry',
    CYLINDERGEOMETRY_META,
  ) as unknown as CylinderGeometryBuilder;
}
