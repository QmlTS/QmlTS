// AUTO-GENERATED — DO NOT EDIT
// Type: TorusMesh
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
import type { GeometryViewBuilder } from '../Qt3D.Core/GeometryView.js';
export interface TorusMeshBuilder {
  id(id: string): TorusMeshBuilder;
  child(obj: QmlObjectBuilder): TorusMeshBuilder;

  enabled(value: boolean): TorusMeshBuilder;
  enabledBind(expr: string): TorusMeshBuilder;
  firstInstance(value: number): TorusMeshBuilder;
  firstInstanceBind(expr: string): TorusMeshBuilder;
  firstVertex(value: number): TorusMeshBuilder;
  firstVertexBind(expr: string): TorusMeshBuilder;
  geometry(value: GeometryBuilder): TorusMeshBuilder;
  geometryBind(expr: string): TorusMeshBuilder;
  indexBufferByteOffset(value: number): TorusMeshBuilder;
  indexBufferByteOffsetBind(expr: string): TorusMeshBuilder;
  indexOffset(value: number): TorusMeshBuilder;
  indexOffsetBind(expr: string): TorusMeshBuilder;
  instanceCount(value: number): TorusMeshBuilder;
  instanceCountBind(expr: string): TorusMeshBuilder;
  isShareable(value: boolean): TorusMeshBuilder;
  isShareableBind(expr: string): TorusMeshBuilder;
  maxPoint(value: QmlVector3d): TorusMeshBuilder;
  maxPointBind(expr: string): TorusMeshBuilder;
  minPoint(value: QmlVector3d): TorusMeshBuilder;
  minPointBind(expr: string): TorusMeshBuilder;
  minorRadius(value: number): TorusMeshBuilder;
  minorRadiusBind(expr: string): TorusMeshBuilder;
  objectName(value: string): TorusMeshBuilder;
  objectNameBind(expr: string): TorusMeshBuilder;
  parent(value: QmlValue): TorusMeshBuilder;
  parentBind(expr: string): TorusMeshBuilder;
  primitiveRestartEnabled(value: boolean): TorusMeshBuilder;
  primitiveRestartEnabledBind(expr: string): TorusMeshBuilder;
  primitiveType(value: QmlEnumToken): TorusMeshBuilder;
  primitiveTypeBind(expr: string): TorusMeshBuilder;
  radius(value: number): TorusMeshBuilder;
  radiusBind(expr: string): TorusMeshBuilder;
  restartIndexValue(value: number): TorusMeshBuilder;
  restartIndexValueBind(expr: string): TorusMeshBuilder;
  rings(value: number): TorusMeshBuilder;
  ringsBind(expr: string): TorusMeshBuilder;
  slices(value: number): TorusMeshBuilder;
  slicesBind(expr: string): TorusMeshBuilder;
  sortIndex(value: number): TorusMeshBuilder;
  sortIndexBind(expr: string): TorusMeshBuilder;
  vertexCount(value: number): TorusMeshBuilder;
  vertexCountBind(expr: string): TorusMeshBuilder;
  verticesPerPatch(value: number): TorusMeshBuilder;
  verticesPerPatchBind(expr: string): TorusMeshBuilder;
  view(value: GeometryViewBuilder): TorusMeshBuilder;
  viewBind(expr: string): TorusMeshBuilder;
  onAddedToEntity(body: string): TorusMeshBuilder;
  onEnabledChanged(body: string): TorusMeshBuilder;
  onFirstInstanceChanged(body: string): TorusMeshBuilder;
  onFirstVertexChanged(body: string): TorusMeshBuilder;
  onGeometryChanged(body: string): TorusMeshBuilder;
  onImplicitMaxPointChanged(body: string): TorusMeshBuilder;
  onImplicitMinPointChanged(body: string): TorusMeshBuilder;
  onImplicitPointsValidChanged(body: string): TorusMeshBuilder;
  onIndexBufferByteOffsetChanged(body: string): TorusMeshBuilder;
  onIndexOffsetChanged(body: string): TorusMeshBuilder;
  onInstanceCountChanged(body: string): TorusMeshBuilder;
  onMaxPointChanged(body: string): TorusMeshBuilder;
  onMinPointChanged(body: string): TorusMeshBuilder;
  onMinorRadiusChanged(body: string): TorusMeshBuilder;
  onNodeDestroyed(body: string): TorusMeshBuilder;
  onObjectNameChanged(body: string): TorusMeshBuilder;
  onParentChanged(body: string): TorusMeshBuilder;
  onPrimitiveRestartEnabledChanged(body: string): TorusMeshBuilder;
  onPrimitiveTypeChanged(body: string): TorusMeshBuilder;
  onRadiusChanged(body: string): TorusMeshBuilder;
  onRemovedFromEntity(body: string): TorusMeshBuilder;
  onRestartIndexValueChanged(body: string): TorusMeshBuilder;
  onRingsChanged(body: string): TorusMeshBuilder;
  onShareableChanged(body: string): TorusMeshBuilder;
  onSlicesChanged(body: string): TorusMeshBuilder;
  onSortIndexChanged(body: string): TorusMeshBuilder;
  onVertexCountChanged(body: string): TorusMeshBuilder;
  onVerticesPerPatchChanged(body: string): TorusMeshBuilder;
  onViewChanged(body: string): TorusMeshBuilder;
}

const TORUSMESH_META: TypeMetadata = {
  typeName: 'TorusMesh',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'maxPoint', hasValue: true, hasBinding: true },
    { name: 'minPoint', hasValue: true, hasBinding: true },
    { name: 'minorRadius', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'slices', hasValue: true, hasBinding: true },
    { name: 'sortIndex', hasValue: true, hasBinding: true },
    { name: 'vertexCount', hasValue: true, hasBinding: true },
    { name: 'verticesPerPatch', hasValue: true, hasBinding: true },
    { name: 'view', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFirstInstanceChanged', paramCount: 1 },
    { handlerName: 'onFirstVertexChanged', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 1 },
    { handlerName: 'onImplicitMaxPointChanged', paramCount: 1 },
    { handlerName: 'onImplicitMinPointChanged', paramCount: 1 },
    { handlerName: 'onImplicitPointsValidChanged', paramCount: 1 },
    { handlerName: 'onIndexBufferByteOffsetChanged', paramCount: 1 },
    { handlerName: 'onIndexOffsetChanged', paramCount: 1 },
    { handlerName: 'onInstanceCountChanged', paramCount: 1 },
    { handlerName: 'onMaxPointChanged', paramCount: 1 },
    { handlerName: 'onMinPointChanged', paramCount: 1 },
    { handlerName: 'onMinorRadiusChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveRestartEnabledChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveTypeChanged', paramCount: 1 },
    { handlerName: 'onRadiusChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRestartIndexValueChanged', paramCount: 1 },
    { handlerName: 'onRingsChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSlicesChanged', paramCount: 1 },
    { handlerName: 'onSortIndexChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
    { handlerName: 'onViewChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function TorusMesh(): TorusMeshBuilder {
  return createFluentBuilder('TorusMesh', TORUSMESH_META) as unknown as TorusMeshBuilder;
}

export namespace TorusMesh {
  export namespace PrimitiveType {
    export const Points = createEnumToken('TorusMesh', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('TorusMesh', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('TorusMesh', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('TorusMesh', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('TorusMesh', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('TorusMesh', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('TorusMesh', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('TorusMesh', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken('TorusMesh', 'PrimitiveType', 'TrianglesAdjacency');
    export const LineStripAdjacency = createEnumToken('TorusMesh', 'PrimitiveType', 'LineStripAdjacency');
    export const TriangleStripAdjacency = createEnumToken('TorusMesh', 'PrimitiveType', 'TriangleStripAdjacency');
    export const Patches = createEnumToken('TorusMesh', 'PrimitiveType', 'Patches');
  }
}
