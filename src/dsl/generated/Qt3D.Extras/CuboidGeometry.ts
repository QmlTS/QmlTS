// AUTO-GENERATED — DO NOT EDIT
// Type: CuboidGeometry
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
export interface CuboidGeometryBuilder {
  id(id: string): CuboidGeometryBuilder;
  child(obj: QmlObjectBuilder): CuboidGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): CuboidGeometryBuilder;

  boundingVolumePositionAttribute(value: AttributeBuilder): CuboidGeometryBuilder;
  boundingVolumePositionAttributeBind(expr: string): CuboidGeometryBuilder;
  enabled(value: boolean): CuboidGeometryBuilder;
  enabledBind(expr: string): CuboidGeometryBuilder;
  objectName(value: string): CuboidGeometryBuilder;
  objectNameBind(expr: string): CuboidGeometryBuilder;
  parent(value: QmlValue): CuboidGeometryBuilder;
  parentBind(expr: string): CuboidGeometryBuilder;
  xExtent(value: number): CuboidGeometryBuilder;
  xExtentBind(expr: string): CuboidGeometryBuilder;
  xyMeshResolution(value: QmlSize): CuboidGeometryBuilder;
  xyMeshResolutionBind(expr: string): CuboidGeometryBuilder;
  xzMeshResolution(value: QmlSize): CuboidGeometryBuilder;
  xzMeshResolutionBind(expr: string): CuboidGeometryBuilder;
  yExtent(value: number): CuboidGeometryBuilder;
  yExtentBind(expr: string): CuboidGeometryBuilder;
  yzMeshResolution(value: QmlSize): CuboidGeometryBuilder;
  yzMeshResolutionBind(expr: string): CuboidGeometryBuilder;
  zExtent(value: number): CuboidGeometryBuilder;
  zExtentBind(expr: string): CuboidGeometryBuilder;
  onBoundingVolumePositionAttributeChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onMaxExtentChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onMinExtentChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onXExtentChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onXyMeshResolutionChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onXzMeshResolutionChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onYExtentChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onYzMeshResolutionChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
  onZExtentChanged(handler: DslSignalHandlerValue): CuboidGeometryBuilder;
}

const CUBOIDGEOMETRY_META: TypeMetadata = {
  typeName: 'CuboidGeometry',
  properties: [
    { name: 'boundingVolumePositionAttribute', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'xExtent', hasValue: true, hasBinding: true },
    { name: 'xyMeshResolution', hasValue: true, hasBinding: true },
    { name: 'xzMeshResolution', hasValue: true, hasBinding: true },
    { name: 'yExtent', hasValue: true, hasBinding: true },
    { name: 'yzMeshResolution', hasValue: true, hasBinding: true },
    { name: 'zExtent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundingVolumePositionAttributeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onMaxExtentChanged', paramCount: 1 },
    { handlerName: 'onMinExtentChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onXExtentChanged', paramCount: 1 },
    { handlerName: 'onXyMeshResolutionChanged', paramCount: 1 },
    { handlerName: 'onXzMeshResolutionChanged', paramCount: 1 },
    { handlerName: 'onYExtentChanged', paramCount: 1 },
    { handlerName: 'onYzMeshResolutionChanged', paramCount: 1 },
    { handlerName: 'onZExtentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function CuboidGeometry(): CuboidGeometryBuilder {
  return createFluentBuilder(
    'CuboidGeometry',
    CUBOIDGEOMETRY_META,
  ) as unknown as CuboidGeometryBuilder;
}
