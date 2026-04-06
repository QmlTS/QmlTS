// AUTO-GENERATED — DO NOT EDIT
// Type: ConeGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { AttributeBuilder } from '../Qt3D.Core/Attribute.js';
export interface ConeGeometryBuilder {
  id(id: string): ConeGeometryBuilder;
  child(obj: QmlObjectBuilder): ConeGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): ConeGeometryBuilder;

  bottomRadius(value: number): ConeGeometryBuilder;
  bottomRadiusBind(expr: string): ConeGeometryBuilder;
  boundingVolumePositionAttribute(value: AttributeBuilder): ConeGeometryBuilder;
  boundingVolumePositionAttributeBind(expr: string): ConeGeometryBuilder;
  enabled(value: boolean): ConeGeometryBuilder;
  enabledBind(expr: string): ConeGeometryBuilder;
  hasBottomEndcap(value: boolean): ConeGeometryBuilder;
  hasBottomEndcapBind(expr: string): ConeGeometryBuilder;
  hasTopEndcap(value: boolean): ConeGeometryBuilder;
  hasTopEndcapBind(expr: string): ConeGeometryBuilder;
  length(value: number): ConeGeometryBuilder;
  lengthBind(expr: string): ConeGeometryBuilder;
  objectName(value: string): ConeGeometryBuilder;
  objectNameBind(expr: string): ConeGeometryBuilder;
  parent(value: QmlValue): ConeGeometryBuilder;
  parentBind(expr: string): ConeGeometryBuilder;
  rings(value: number): ConeGeometryBuilder;
  ringsBind(expr: string): ConeGeometryBuilder;
  slices(value: number): ConeGeometryBuilder;
  slicesBind(expr: string): ConeGeometryBuilder;
  topRadius(value: number): ConeGeometryBuilder;
  topRadiusBind(expr: string): ConeGeometryBuilder;
  onBottomRadiusChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onBoundingVolumePositionAttributeChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onHasBottomEndcapChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onHasTopEndcapChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onLengthChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onMaxExtentChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onMinExtentChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onRingsChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onSlicesChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
  onTopRadiusChanged(handler: DslSignalHandlerValue): ConeGeometryBuilder;
}

const CONEGEOMETRY_META: TypeMetadata = {
  typeName: 'ConeGeometry',
  properties: [
    { name: 'bottomRadius', hasValue: true, hasBinding: true },
    { name: 'boundingVolumePositionAttribute', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'hasBottomEndcap', hasValue: true, hasBinding: true },
    { name: 'hasTopEndcap', hasValue: true, hasBinding: true },
    { name: 'length', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'slices', hasValue: true, hasBinding: true },
    { name: 'topRadius', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBottomRadiusChanged', paramCount: 1 },
    { handlerName: 'onBoundingVolumePositionAttributeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onHasBottomEndcapChanged', paramCount: 1 },
    { handlerName: 'onHasTopEndcapChanged', paramCount: 1 },
    { handlerName: 'onLengthChanged', paramCount: 1 },
    { handlerName: 'onMaxExtentChanged', paramCount: 1 },
    { handlerName: 'onMinExtentChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRingsChanged', paramCount: 1 },
    { handlerName: 'onSlicesChanged', paramCount: 1 },
    { handlerName: 'onTopRadiusChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ConeGeometry(): ConeGeometryBuilder {
  return createFluentBuilder('ConeGeometry', CONEGEOMETRY_META) as unknown as ConeGeometryBuilder;
}
