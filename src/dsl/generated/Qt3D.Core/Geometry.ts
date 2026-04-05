// AUTO-GENERATED — DO NOT EDIT
// Type: Geometry
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { AttributeBuilder } from './Attribute.js';
export interface GeometryBuilder {
  id(id: string): GeometryBuilder;
  child(obj: QmlObjectBuilder): GeometryBuilder;

  boundingVolumePositionAttribute(value: AttributeBuilder): GeometryBuilder;
  boundingVolumePositionAttributeBind(expr: string): GeometryBuilder;
  enabled(value: boolean): GeometryBuilder;
  enabledBind(expr: string): GeometryBuilder;
  objectName(value: string): GeometryBuilder;
  objectNameBind(expr: string): GeometryBuilder;
  parent(value: QmlValue): GeometryBuilder;
  parentBind(expr: string): GeometryBuilder;
  onBoundingVolumePositionAttributeChanged(body: string): GeometryBuilder;
  onEnabledChanged(body: string): GeometryBuilder;
  onMaxExtentChanged(body: string): GeometryBuilder;
  onMinExtentChanged(body: string): GeometryBuilder;
  onNodeDestroyed(body: string): GeometryBuilder;
  onObjectNameChanged(body: string): GeometryBuilder;
  onParentChanged(body: string): GeometryBuilder;
}

const GEOMETRY_META: TypeMetadata = {
  typeName: 'Geometry',
  properties: [
    { name: 'boundingVolumePositionAttribute', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundingVolumePositionAttributeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onMaxExtentChanged', paramCount: 1 },
    { handlerName: 'onMinExtentChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Geometry(): GeometryBuilder {
  return createFluentBuilder('Geometry', GEOMETRY_META) as unknown as GeometryBuilder;
}
