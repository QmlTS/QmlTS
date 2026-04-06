// AUTO-GENERATED — DO NOT EDIT
// Type: TorusGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { AttributeBuilder } from '../Qt3D.Core/Attribute.js';
export interface TorusGeometryBuilder {
  id(id: string): TorusGeometryBuilder;
  child(obj: QmlObjectBuilder): TorusGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): TorusGeometryBuilder;

  boundingVolumePositionAttribute(value: AttributeBuilder): TorusGeometryBuilder;
  boundingVolumePositionAttributeBind(expr: string): TorusGeometryBuilder;
  enabled(value: boolean): TorusGeometryBuilder;
  enabledBind(expr: string): TorusGeometryBuilder;
  minorRadius(value: number): TorusGeometryBuilder;
  minorRadiusBind(expr: string): TorusGeometryBuilder;
  objectName(value: string): TorusGeometryBuilder;
  objectNameBind(expr: string): TorusGeometryBuilder;
  parent(value: QmlValue): TorusGeometryBuilder;
  parentBind(expr: string): TorusGeometryBuilder;
  radius(value: number): TorusGeometryBuilder;
  radiusBind(expr: string): TorusGeometryBuilder;
  rings(value: number): TorusGeometryBuilder;
  ringsBind(expr: string): TorusGeometryBuilder;
  slices(value: number): TorusGeometryBuilder;
  slicesBind(expr: string): TorusGeometryBuilder;
  onBoundingVolumePositionAttributeChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onMaxExtentChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onMinExtentChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onMinorRadiusChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onRadiusChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onRingsChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
  onSlicesChanged(handler: DslSignalHandlerValue): TorusGeometryBuilder;
}

const TORUSGEOMETRY_META: TypeMetadata = {
  typeName: 'TorusGeometry',
  properties: [
    { name: 'boundingVolumePositionAttribute', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'minorRadius', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'slices', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundingVolumePositionAttributeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onMaxExtentChanged', paramCount: 1 },
    { handlerName: 'onMinExtentChanged', paramCount: 1 },
    { handlerName: 'onMinorRadiusChanged', paramCount: 1 },
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

export function TorusGeometry(): TorusGeometryBuilder {
  return createFluentBuilder(
    'TorusGeometry',
    TORUSGEOMETRY_META,
  ) as unknown as TorusGeometryBuilder;
}
