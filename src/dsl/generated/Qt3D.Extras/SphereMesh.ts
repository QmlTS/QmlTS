// AUTO-GENERATED — DO NOT EDIT
// Type: SphereMesh
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
import type { GeometryViewBuilder } from '../Qt3D.Core/GeometryView.js';
export interface SphereMeshBuilder {
  id(id: string): SphereMeshBuilder;
  child(obj: QmlObjectBuilder): SphereMeshBuilder;

  enabled(value: boolean): SphereMeshBuilder;
  enabledBind(expr: string): SphereMeshBuilder;
  firstInstance(value: number): SphereMeshBuilder;
  firstInstanceBind(expr: string): SphereMeshBuilder;
  firstVertex(value: number): SphereMeshBuilder;
  firstVertexBind(expr: string): SphereMeshBuilder;
  generateTangents(value: boolean): SphereMeshBuilder;
  generateTangentsBind(expr: string): SphereMeshBuilder;
  geometry(value: GeometryBuilder): SphereMeshBuilder;
  geometryBind(expr: string): SphereMeshBuilder;
  indexBufferByteOffset(value: number): SphereMeshBuilder;
  indexBufferByteOffsetBind(expr: string): SphereMeshBuilder;
  indexOffset(value: number): SphereMeshBuilder;
  indexOffsetBind(expr: string): SphereMeshBuilder;
  instanceCount(value: number): SphereMeshBuilder;
  instanceCountBind(expr: string): SphereMeshBuilder;
  isShareable(value: boolean): SphereMeshBuilder;
  isShareableBind(expr: string): SphereMeshBuilder;
  maxPoint(value: QmlVector3d): SphereMeshBuilder;
  maxPointBind(expr: string): SphereMeshBuilder;
  minPoint(value: QmlVector3d): SphereMeshBuilder;
  minPointBind(expr: string): SphereMeshBuilder;
  objectName(value: string): SphereMeshBuilder;
  objectNameBind(expr: string): SphereMeshBuilder;
  parent(value: QmlValue): SphereMeshBuilder;
  parentBind(expr: string): SphereMeshBuilder;
  primitiveRestartEnabled(value: boolean): SphereMeshBuilder;
  primitiveRestartEnabledBind(expr: string): SphereMeshBuilder;
  primitiveType(value: QmlEnumToken): SphereMeshBuilder;
  primitiveTypeBind(expr: string): SphereMeshBuilder;
  radius(value: number): SphereMeshBuilder;
  radiusBind(expr: string): SphereMeshBuilder;
  restartIndexValue(value: number): SphereMeshBuilder;
  restartIndexValueBind(expr: string): SphereMeshBuilder;
  rings(value: number): SphereMeshBuilder;
  ringsBind(expr: string): SphereMeshBuilder;
  slices(value: number): SphereMeshBuilder;
  slicesBind(expr: string): SphereMeshBuilder;
  sortIndex(value: number): SphereMeshBuilder;
  sortIndexBind(expr: string): SphereMeshBuilder;
  vertexCount(value: number): SphereMeshBuilder;
  vertexCountBind(expr: string): SphereMeshBuilder;
  verticesPerPatch(value: number): SphereMeshBuilder;
  verticesPerPatchBind(expr: string): SphereMeshBuilder;
  view(value: GeometryViewBuilder): SphereMeshBuilder;
  viewBind(expr: string): SphereMeshBuilder;
  onAddedToEntity(body: string): SphereMeshBuilder;
  onEnabledChanged(body: string): SphereMeshBuilder;
  onFirstInstanceChanged(body: string): SphereMeshBuilder;
  onFirstVertexChanged(body: string): SphereMeshBuilder;
  onGenerateTangentsChanged(body: string): SphereMeshBuilder;
  onGeometryChanged(body: string): SphereMeshBuilder;
  onImplicitMaxPointChanged(body: string): SphereMeshBuilder;
  onImplicitMinPointChanged(body: string): SphereMeshBuilder;
  onImplicitPointsValidChanged(body: string): SphereMeshBuilder;
  onIndexBufferByteOffsetChanged(body: string): SphereMeshBuilder;
  onIndexOffsetChanged(body: string): SphereMeshBuilder;
  onInstanceCountChanged(body: string): SphereMeshBuilder;
  onMaxPointChanged(body: string): SphereMeshBuilder;
  onMinPointChanged(body: string): SphereMeshBuilder;
  onNodeDestroyed(body: string): SphereMeshBuilder;
  onObjectNameChanged(body: string): SphereMeshBuilder;
  onParentChanged(body: string): SphereMeshBuilder;
  onPrimitiveRestartEnabledChanged(body: string): SphereMeshBuilder;
  onPrimitiveTypeChanged(body: string): SphereMeshBuilder;
  onRadiusChanged(body: string): SphereMeshBuilder;
  onRemovedFromEntity(body: string): SphereMeshBuilder;
  onRestartIndexValueChanged(body: string): SphereMeshBuilder;
  onRingsChanged(body: string): SphereMeshBuilder;
  onShareableChanged(body: string): SphereMeshBuilder;
  onSlicesChanged(body: string): SphereMeshBuilder;
  onSortIndexChanged(body: string): SphereMeshBuilder;
  onVertexCountChanged(body: string): SphereMeshBuilder;
  onVerticesPerPatchChanged(body: string): SphereMeshBuilder;
  onViewChanged(body: string): SphereMeshBuilder;
}

const SPHEREMESH_META: TypeMetadata = {
  typeName: 'SphereMesh',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'generateTangents', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
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
    { handlerName: 'onGenerateTangentsChanged', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 1 },
    { handlerName: 'onImplicitMaxPointChanged', paramCount: 1 },
    { handlerName: 'onImplicitMinPointChanged', paramCount: 1 },
    { handlerName: 'onImplicitPointsValidChanged', paramCount: 1 },
    { handlerName: 'onIndexBufferByteOffsetChanged', paramCount: 1 },
    { handlerName: 'onIndexOffsetChanged', paramCount: 1 },
    { handlerName: 'onInstanceCountChanged', paramCount: 1 },
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
  grouped: [],
  attached: [],
};

export function SphereMesh(): SphereMeshBuilder {
  return createFluentBuilder('SphereMesh', SPHEREMESH_META) as unknown as SphereMeshBuilder;
}

export namespace SphereMesh {
  export namespace PrimitiveType {
    export const Points = createEnumToken('SphereMesh', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('SphereMesh', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('SphereMesh', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('SphereMesh', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('SphereMesh', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('SphereMesh', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('SphereMesh', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('SphereMesh', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken(
      'SphereMesh',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'SphereMesh',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'SphereMesh',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('SphereMesh', 'PrimitiveType', 'Patches');
  }
}
