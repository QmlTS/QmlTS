// AUTO-GENERATED — DO NOT EDIT
// Type: PlaneMesh
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
export interface PlaneMeshBuilder {
  id(id: string): PlaneMeshBuilder;
  child(obj: QmlObjectBuilder): PlaneMeshBuilder;

  enabled(value: boolean): PlaneMeshBuilder;
  enabledBind(expr: string): PlaneMeshBuilder;
  firstInstance(value: number): PlaneMeshBuilder;
  firstInstanceBind(expr: string): PlaneMeshBuilder;
  firstVertex(value: number): PlaneMeshBuilder;
  firstVertexBind(expr: string): PlaneMeshBuilder;
  geometry(value: GeometryBuilder): PlaneMeshBuilder;
  geometryBind(expr: string): PlaneMeshBuilder;
  height(value: number): PlaneMeshBuilder;
  heightBind(expr: string): PlaneMeshBuilder;
  indexBufferByteOffset(value: number): PlaneMeshBuilder;
  indexBufferByteOffsetBind(expr: string): PlaneMeshBuilder;
  indexOffset(value: number): PlaneMeshBuilder;
  indexOffsetBind(expr: string): PlaneMeshBuilder;
  instanceCount(value: number): PlaneMeshBuilder;
  instanceCountBind(expr: string): PlaneMeshBuilder;
  isShareable(value: boolean): PlaneMeshBuilder;
  isShareableBind(expr: string): PlaneMeshBuilder;
  maxPoint(value: QmlVector3d): PlaneMeshBuilder;
  maxPointBind(expr: string): PlaneMeshBuilder;
  meshResolution(value: QmlSize): PlaneMeshBuilder;
  meshResolutionBind(expr: string): PlaneMeshBuilder;
  minPoint(value: QmlVector3d): PlaneMeshBuilder;
  minPointBind(expr: string): PlaneMeshBuilder;
  mirrored(value: boolean): PlaneMeshBuilder;
  mirroredBind(expr: string): PlaneMeshBuilder;
  objectName(value: string): PlaneMeshBuilder;
  objectNameBind(expr: string): PlaneMeshBuilder;
  parent(value: QmlValue): PlaneMeshBuilder;
  parentBind(expr: string): PlaneMeshBuilder;
  primitiveRestartEnabled(value: boolean): PlaneMeshBuilder;
  primitiveRestartEnabledBind(expr: string): PlaneMeshBuilder;
  primitiveType(value: QmlEnumToken): PlaneMeshBuilder;
  primitiveTypeBind(expr: string): PlaneMeshBuilder;
  restartIndexValue(value: number): PlaneMeshBuilder;
  restartIndexValueBind(expr: string): PlaneMeshBuilder;
  sortIndex(value: number): PlaneMeshBuilder;
  sortIndexBind(expr: string): PlaneMeshBuilder;
  vertexCount(value: number): PlaneMeshBuilder;
  vertexCountBind(expr: string): PlaneMeshBuilder;
  verticesPerPatch(value: number): PlaneMeshBuilder;
  verticesPerPatchBind(expr: string): PlaneMeshBuilder;
  view(value: GeometryViewBuilder): PlaneMeshBuilder;
  viewBind(expr: string): PlaneMeshBuilder;
  width(value: number): PlaneMeshBuilder;
  widthBind(expr: string): PlaneMeshBuilder;
  onAddedToEntity(body: string): PlaneMeshBuilder;
  onEnabledChanged(body: string): PlaneMeshBuilder;
  onFirstInstanceChanged(body: string): PlaneMeshBuilder;
  onFirstVertexChanged(body: string): PlaneMeshBuilder;
  onGeometryChanged(body: string): PlaneMeshBuilder;
  onHeightChanged(body: string): PlaneMeshBuilder;
  onImplicitMaxPointChanged(body: string): PlaneMeshBuilder;
  onImplicitMinPointChanged(body: string): PlaneMeshBuilder;
  onImplicitPointsValidChanged(body: string): PlaneMeshBuilder;
  onIndexBufferByteOffsetChanged(body: string): PlaneMeshBuilder;
  onIndexOffsetChanged(body: string): PlaneMeshBuilder;
  onInstanceCountChanged(body: string): PlaneMeshBuilder;
  onMaxPointChanged(body: string): PlaneMeshBuilder;
  onMeshResolutionChanged(body: string): PlaneMeshBuilder;
  onMinPointChanged(body: string): PlaneMeshBuilder;
  onMirroredChanged(body: string): PlaneMeshBuilder;
  onNodeDestroyed(body: string): PlaneMeshBuilder;
  onObjectNameChanged(body: string): PlaneMeshBuilder;
  onParentChanged(body: string): PlaneMeshBuilder;
  onPrimitiveRestartEnabledChanged(body: string): PlaneMeshBuilder;
  onPrimitiveTypeChanged(body: string): PlaneMeshBuilder;
  onRemovedFromEntity(body: string): PlaneMeshBuilder;
  onRestartIndexValueChanged(body: string): PlaneMeshBuilder;
  onShareableChanged(body: string): PlaneMeshBuilder;
  onSortIndexChanged(body: string): PlaneMeshBuilder;
  onVertexCountChanged(body: string): PlaneMeshBuilder;
  onVerticesPerPatchChanged(body: string): PlaneMeshBuilder;
  onViewChanged(body: string): PlaneMeshBuilder;
  onWidthChanged(body: string): PlaneMeshBuilder;
}

const PLANEMESH_META: TypeMetadata = {
  typeName: 'PlaneMesh',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'maxPoint', hasValue: true, hasBinding: true },
    { name: 'meshResolution', hasValue: true, hasBinding: true },
    { name: 'minPoint', hasValue: true, hasBinding: true },
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'sortIndex', hasValue: true, hasBinding: true },
    { name: 'vertexCount', hasValue: true, hasBinding: true },
    { name: 'verticesPerPatch', hasValue: true, hasBinding: true },
    { name: 'view', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFirstInstanceChanged', paramCount: 1 },
    { handlerName: 'onFirstVertexChanged', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onImplicitMaxPointChanged', paramCount: 1 },
    { handlerName: 'onImplicitMinPointChanged', paramCount: 1 },
    { handlerName: 'onImplicitPointsValidChanged', paramCount: 1 },
    { handlerName: 'onIndexBufferByteOffsetChanged', paramCount: 1 },
    { handlerName: 'onIndexOffsetChanged', paramCount: 1 },
    { handlerName: 'onInstanceCountChanged', paramCount: 1 },
    { handlerName: 'onMaxPointChanged', paramCount: 1 },
    { handlerName: 'onMeshResolutionChanged', paramCount: 1 },
    { handlerName: 'onMinPointChanged', paramCount: 1 },
    { handlerName: 'onMirroredChanged', paramCount: 1 },
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
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function PlaneMesh(): PlaneMeshBuilder {
  return createFluentBuilder('PlaneMesh', PLANEMESH_META) as unknown as PlaneMeshBuilder;
}

export namespace PlaneMesh {
  export namespace PrimitiveType {
    export const Points = createEnumToken('PlaneMesh', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('PlaneMesh', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('PlaneMesh', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('PlaneMesh', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('PlaneMesh', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('PlaneMesh', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('PlaneMesh', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('PlaneMesh', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken(
      'PlaneMesh',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'PlaneMesh',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'PlaneMesh',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('PlaneMesh', 'PrimitiveType', 'Patches');
  }
}
