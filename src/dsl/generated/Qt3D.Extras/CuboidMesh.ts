// AUTO-GENERATED — DO NOT EDIT
// Type: CuboidMesh
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlSize,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
import type { GeometryViewBuilder } from '../Qt3D.Core/GeometryView.js';
export interface CuboidMeshBuilder {
  id(id: string): CuboidMeshBuilder;
  child(obj: QmlObjectBuilder): CuboidMeshBuilder;

  enabled(value: boolean): CuboidMeshBuilder;
  enabledBind(expr: string): CuboidMeshBuilder;
  firstInstance(value: number): CuboidMeshBuilder;
  firstInstanceBind(expr: string): CuboidMeshBuilder;
  firstVertex(value: number): CuboidMeshBuilder;
  firstVertexBind(expr: string): CuboidMeshBuilder;
  geometry(value: GeometryBuilder): CuboidMeshBuilder;
  geometryBind(expr: string): CuboidMeshBuilder;
  indexBufferByteOffset(value: number): CuboidMeshBuilder;
  indexBufferByteOffsetBind(expr: string): CuboidMeshBuilder;
  indexOffset(value: number): CuboidMeshBuilder;
  indexOffsetBind(expr: string): CuboidMeshBuilder;
  instanceCount(value: number): CuboidMeshBuilder;
  instanceCountBind(expr: string): CuboidMeshBuilder;
  isShareable(value: boolean): CuboidMeshBuilder;
  isShareableBind(expr: string): CuboidMeshBuilder;
  maxPoint(value: QmlVector3d): CuboidMeshBuilder;
  maxPointBind(expr: string): CuboidMeshBuilder;
  minPoint(value: QmlVector3d): CuboidMeshBuilder;
  minPointBind(expr: string): CuboidMeshBuilder;
  objectName(value: string): CuboidMeshBuilder;
  objectNameBind(expr: string): CuboidMeshBuilder;
  parent(value: QmlValue): CuboidMeshBuilder;
  parentBind(expr: string): CuboidMeshBuilder;
  primitiveRestartEnabled(value: boolean): CuboidMeshBuilder;
  primitiveRestartEnabledBind(expr: string): CuboidMeshBuilder;
  primitiveType(value: QmlEnumToken): CuboidMeshBuilder;
  primitiveTypeBind(expr: string): CuboidMeshBuilder;
  restartIndexValue(value: number): CuboidMeshBuilder;
  restartIndexValueBind(expr: string): CuboidMeshBuilder;
  sortIndex(value: number): CuboidMeshBuilder;
  sortIndexBind(expr: string): CuboidMeshBuilder;
  vertexCount(value: number): CuboidMeshBuilder;
  vertexCountBind(expr: string): CuboidMeshBuilder;
  verticesPerPatch(value: number): CuboidMeshBuilder;
  verticesPerPatchBind(expr: string): CuboidMeshBuilder;
  view(value: GeometryViewBuilder): CuboidMeshBuilder;
  viewBind(expr: string): CuboidMeshBuilder;
  xExtent(value: number): CuboidMeshBuilder;
  xExtentBind(expr: string): CuboidMeshBuilder;
  xyMeshResolution(value: QmlSize): CuboidMeshBuilder;
  xyMeshResolutionBind(expr: string): CuboidMeshBuilder;
  xzMeshResolution(value: QmlSize): CuboidMeshBuilder;
  xzMeshResolutionBind(expr: string): CuboidMeshBuilder;
  yExtent(value: number): CuboidMeshBuilder;
  yExtentBind(expr: string): CuboidMeshBuilder;
  yzMeshResolution(value: QmlSize): CuboidMeshBuilder;
  yzMeshResolutionBind(expr: string): CuboidMeshBuilder;
  zExtent(value: number): CuboidMeshBuilder;
  zExtentBind(expr: string): CuboidMeshBuilder;
  onAddedToEntity(body: string): CuboidMeshBuilder;
  onEnabledChanged(body: string): CuboidMeshBuilder;
  onFirstInstanceChanged(body: string): CuboidMeshBuilder;
  onFirstVertexChanged(body: string): CuboidMeshBuilder;
  onGeometryChanged(body: string): CuboidMeshBuilder;
  onImplicitMaxPointChanged(body: string): CuboidMeshBuilder;
  onImplicitMinPointChanged(body: string): CuboidMeshBuilder;
  onImplicitPointsValidChanged(body: string): CuboidMeshBuilder;
  onIndexBufferByteOffsetChanged(body: string): CuboidMeshBuilder;
  onIndexOffsetChanged(body: string): CuboidMeshBuilder;
  onInstanceCountChanged(body: string): CuboidMeshBuilder;
  onMaxPointChanged(body: string): CuboidMeshBuilder;
  onMinPointChanged(body: string): CuboidMeshBuilder;
  onNodeDestroyed(body: string): CuboidMeshBuilder;
  onObjectNameChanged(body: string): CuboidMeshBuilder;
  onParentChanged(body: string): CuboidMeshBuilder;
  onPrimitiveRestartEnabledChanged(body: string): CuboidMeshBuilder;
  onPrimitiveTypeChanged(body: string): CuboidMeshBuilder;
  onRemovedFromEntity(body: string): CuboidMeshBuilder;
  onRestartIndexValueChanged(body: string): CuboidMeshBuilder;
  onShareableChanged(body: string): CuboidMeshBuilder;
  onSortIndexChanged(body: string): CuboidMeshBuilder;
  onVertexCountChanged(body: string): CuboidMeshBuilder;
  onVerticesPerPatchChanged(body: string): CuboidMeshBuilder;
  onViewChanged(body: string): CuboidMeshBuilder;
  onXExtentChanged(body: string): CuboidMeshBuilder;
  onXyMeshResolutionChanged(body: string): CuboidMeshBuilder;
  onXzMeshResolutionChanged(body: string): CuboidMeshBuilder;
  onYExtentChanged(body: string): CuboidMeshBuilder;
  onYzMeshResolutionChanged(body: string): CuboidMeshBuilder;
  onZExtentChanged(body: string): CuboidMeshBuilder;
}

const CUBOIDMESH_META: TypeMetadata = {
  typeName: 'CuboidMesh',
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
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'sortIndex', hasValue: true, hasBinding: true },
    { name: 'vertexCount', hasValue: true, hasBinding: true },
    { name: 'verticesPerPatch', hasValue: true, hasBinding: true },
    { name: 'view', hasValue: true, hasBinding: true },
    { name: 'xExtent', hasValue: true, hasBinding: true },
    { name: 'xyMeshResolution', hasValue: true, hasBinding: true },
    { name: 'xzMeshResolution', hasValue: true, hasBinding: true },
    { name: 'yExtent', hasValue: true, hasBinding: true },
    { name: 'yzMeshResolution', hasValue: true, hasBinding: true },
    { name: 'zExtent', hasValue: true, hasBinding: true },
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
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveRestartEnabledChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveTypeChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRestartIndexValueChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSortIndexChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
    { handlerName: 'onViewChanged', paramCount: 1 },
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

export function CuboidMesh(): CuboidMeshBuilder {
  return createFluentBuilder('CuboidMesh', CUBOIDMESH_META) as unknown as CuboidMeshBuilder;
}

export namespace CuboidMesh {
  export namespace PrimitiveType {
    export const Points = createEnumToken('CuboidMesh', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('CuboidMesh', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('CuboidMesh', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('CuboidMesh', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('CuboidMesh', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('CuboidMesh', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('CuboidMesh', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('CuboidMesh', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken(
      'CuboidMesh',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'CuboidMesh',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'CuboidMesh',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('CuboidMesh', 'PrimitiveType', 'Patches');
  }
}
