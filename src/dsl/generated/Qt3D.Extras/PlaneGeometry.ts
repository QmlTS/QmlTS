// AUTO-GENERATED — DO NOT EDIT
// Type: PlaneGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlSize,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { AttributeBuilder } from '../Qt3D.Core/Attribute.js';
export interface PlaneGeometryBuilder {
  id(id: string): PlaneGeometryBuilder;
  child(obj: QmlObjectBuilder): PlaneGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): PlaneGeometryBuilder;

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
  onBoundingVolumePositionAttributeChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onMaxExtentChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onMinExtentChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onResolutionChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): PlaneGeometryBuilder;
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
  grouped: [],
  attached: [],
};

export function PlaneGeometry(): PlaneGeometryBuilder {
  return createFluentBuilder(
    'PlaneGeometry',
    PLANEGEOMETRY_META,
  ) as unknown as PlaneGeometryBuilder;
}
