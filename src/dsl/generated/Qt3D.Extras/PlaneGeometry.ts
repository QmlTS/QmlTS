// AUTO-GENERATED — DO NOT EDIT
// Type: PlaneGeometry
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlSize, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { AttributeBuilder } from '../Qt3D.Core/Attribute.js';
export interface PlaneGeometryBuilder {
  id(id: string): PlaneGeometryBuilder;
  child(obj: QmlObjectBuilder): PlaneGeometryBuilder;

  boundingVolumePositionAttribute(value: AttributeBuilder): PlaneGeometryBuilder;
  boundingVolumePositionAttributeBind(expr: string): PlaneGeometryBuilder;
  enabled(value: boolean): PlaneGeometryBuilder;
  enabledBind(expr: string): PlaneGeometryBuilder;
  height(value: number): PlaneGeometryBuilder;
  heightBind(expr: string): PlaneGeometryBuilder;
  mirrored(value: boolean): PlaneGeometryBuilder;
  mirroredBind(expr: string): PlaneGeometryBuilder;
  objectName(value: string): PlaneGeometryBuilder;
  objectNameBind(expr: string): PlaneGeometryBuilder;
  parent(value: QmlValue): PlaneGeometryBuilder;
  parentBind(expr: string): PlaneGeometryBuilder;
  resolution(value: QmlSize): PlaneGeometryBuilder;
  resolutionBind(expr: string): PlaneGeometryBuilder;
  width(value: number): PlaneGeometryBuilder;
  widthBind(expr: string): PlaneGeometryBuilder;
  onBoundingVolumePositionAttributeChanged(body: string): PlaneGeometryBuilder;
  onEnabledChanged(body: string): PlaneGeometryBuilder;
  onHeightChanged(body: string): PlaneGeometryBuilder;
  onMaxExtentChanged(body: string): PlaneGeometryBuilder;
  onMinExtentChanged(body: string): PlaneGeometryBuilder;
  onMirroredChanged(body: string): PlaneGeometryBuilder;
  onNodeDestroyed(body: string): PlaneGeometryBuilder;
  onObjectNameChanged(body: string): PlaneGeometryBuilder;
  onParentChanged(body: string): PlaneGeometryBuilder;
  onResolutionChanged(body: string): PlaneGeometryBuilder;
  onWidthChanged(body: string): PlaneGeometryBuilder;
}

const PLANEGEOMETRY_META: TypeMetadata = {
  typeName: 'PlaneGeometry',
  properties: [
    { name: 'boundingVolumePositionAttribute', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'resolution', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundingVolumePositionAttributeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onMaxExtentChanged', paramCount: 1 },
    { handlerName: 'onMinExtentChanged', paramCount: 1 },
    { handlerName: 'onMirroredChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onResolutionChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PlaneGeometry(): PlaneGeometryBuilder {
  return createFluentBuilder('PlaneGeometry', PLANEGEOMETRY_META) as unknown as PlaneGeometryBuilder;
}
