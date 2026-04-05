// AUTO-GENERATED — DO NOT EDIT
// Type: CylinderMesh
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
import type { GeometryViewBuilder } from '../Qt3D.Core/GeometryView.js';
export interface CylinderMeshBuilder {
  id(id: string): CylinderMeshBuilder;
  child(obj: QmlObjectBuilder): CylinderMeshBuilder;

  enabled(value: boolean): CylinderMeshBuilder;
  enabledBind(expr: string): CylinderMeshBuilder;
  firstInstance(value: number): CylinderMeshBuilder;
  firstInstanceBind(expr: string): CylinderMeshBuilder;
  firstVertex(value: number): CylinderMeshBuilder;
  firstVertexBind(expr: string): CylinderMeshBuilder;
  geometry(value: GeometryBuilder): CylinderMeshBuilder;
  geometryBind(expr: string): CylinderMeshBuilder;
  indexBufferByteOffset(value: number): CylinderMeshBuilder;
  indexBufferByteOffsetBind(expr: string): CylinderMeshBuilder;
  indexOffset(value: number): CylinderMeshBuilder;
  indexOffsetBind(expr: string): CylinderMeshBuilder;
  instanceCount(value: number): CylinderMeshBuilder;
  instanceCountBind(expr: string): CylinderMeshBuilder;
  isShareable(value: boolean): CylinderMeshBuilder;
  isShareableBind(expr: string): CylinderMeshBuilder;
  length(value: number): CylinderMeshBuilder;
  lengthBind(expr: string): CylinderMeshBuilder;
  maxPoint(value: QmlVector3d): CylinderMeshBuilder;
  maxPointBind(expr: string): CylinderMeshBuilder;
  minPoint(value: QmlVector3d): CylinderMeshBuilder;
  minPointBind(expr: string): CylinderMeshBuilder;
  objectName(value: string): CylinderMeshBuilder;
  objectNameBind(expr: string): CylinderMeshBuilder;
  parent(value: QmlValue): CylinderMeshBuilder;
  parentBind(expr: string): CylinderMeshBuilder;
  primitiveRestartEnabled(value: boolean): CylinderMeshBuilder;
  primitiveRestartEnabledBind(expr: string): CylinderMeshBuilder;
  primitiveType(value: QmlEnumToken): CylinderMeshBuilder;
  primitiveTypeBind(expr: string): CylinderMeshBuilder;
  radius(value: number): CylinderMeshBuilder;
  radiusBind(expr: string): CylinderMeshBuilder;
  restartIndexValue(value: number): CylinderMeshBuilder;
  restartIndexValueBind(expr: string): CylinderMeshBuilder;
  rings(value: number): CylinderMeshBuilder;
  ringsBind(expr: string): CylinderMeshBuilder;
  slices(value: number): CylinderMeshBuilder;
  slicesBind(expr: string): CylinderMeshBuilder;
  sortIndex(value: number): CylinderMeshBuilder;
  sortIndexBind(expr: string): CylinderMeshBuilder;
  vertexCount(value: number): CylinderMeshBuilder;
  vertexCountBind(expr: string): CylinderMeshBuilder;
  verticesPerPatch(value: number): CylinderMeshBuilder;
  verticesPerPatchBind(expr: string): CylinderMeshBuilder;
  view(value: GeometryViewBuilder): CylinderMeshBuilder;
  viewBind(expr: string): CylinderMeshBuilder;
  onAddedToEntity(body: string): CylinderMeshBuilder;
  onEnabledChanged(body: string): CylinderMeshBuilder;
  onFirstInstanceChanged(body: string): CylinderMeshBuilder;
  onFirstVertexChanged(body: string): CylinderMeshBuilder;
  onGeometryChanged(body: string): CylinderMeshBuilder;
  onImplicitMaxPointChanged(body: string): CylinderMeshBuilder;
  onImplicitMinPointChanged(body: string): CylinderMeshBuilder;
  onImplicitPointsValidChanged(body: string): CylinderMeshBuilder;
  onIndexBufferByteOffsetChanged(body: string): CylinderMeshBuilder;
  onIndexOffsetChanged(body: string): CylinderMeshBuilder;
  onInstanceCountChanged(body: string): CylinderMeshBuilder;
  onLengthChanged(body: string): CylinderMeshBuilder;
  onMaxPointChanged(body: string): CylinderMeshBuilder;
  onMinPointChanged(body: string): CylinderMeshBuilder;
  onNodeDestroyed(body: string): CylinderMeshBuilder;
  onObjectNameChanged(body: string): CylinderMeshBuilder;
  onParentChanged(body: string): CylinderMeshBuilder;
  onPrimitiveRestartEnabledChanged(body: string): CylinderMeshBuilder;
  onPrimitiveTypeChanged(body: string): CylinderMeshBuilder;
  onRadiusChanged(body: string): CylinderMeshBuilder;
  onRemovedFromEntity(body: string): CylinderMeshBuilder;
  onRestartIndexValueChanged(body: string): CylinderMeshBuilder;
  onRingsChanged(body: string): CylinderMeshBuilder;
  onShareableChanged(body: string): CylinderMeshBuilder;
  onSlicesChanged(body: string): CylinderMeshBuilder;
  onSortIndexChanged(body: string): CylinderMeshBuilder;
  onVertexCountChanged(body: string): CylinderMeshBuilder;
  onVerticesPerPatchChanged(body: string): CylinderMeshBuilder;
  onViewChanged(body: string): CylinderMeshBuilder;
}

const CYLINDERMESH_META: TypeMetadata = {
  typeName: 'CylinderMesh',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'length', hasValue: true, hasBinding: true },
    { name: 'maxPoint', hasValue: true, hasBinding: true },
    { name: 'minPoint', hasValue: true, hasBinding: true },
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
    { handlerName: 'onLengthChanged', paramCount: 1 },
    { handlerName: 'onMaxPointChanged', paramCount: 1 },
    { handlerName: 'onMinPointChanged', paramCount: 1 },
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

export function CylinderMesh(): CylinderMeshBuilder {
  return createFluentBuilder('CylinderMesh', CYLINDERMESH_META) as unknown as CylinderMeshBuilder;
}

export namespace CylinderMesh {
  export namespace PrimitiveType {
    export const Points = createEnumToken('CylinderMesh', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('CylinderMesh', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('CylinderMesh', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('CylinderMesh', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('CylinderMesh', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('CylinderMesh', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('CylinderMesh', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('CylinderMesh', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken('CylinderMesh', 'PrimitiveType', 'TrianglesAdjacency');
    export const LineStripAdjacency = createEnumToken('CylinderMesh', 'PrimitiveType', 'LineStripAdjacency');
    export const TriangleStripAdjacency = createEnumToken('CylinderMesh', 'PrimitiveType', 'TriangleStripAdjacency');
    export const Patches = createEnumToken('CylinderMesh', 'PrimitiveType', 'Patches');
  }
}
