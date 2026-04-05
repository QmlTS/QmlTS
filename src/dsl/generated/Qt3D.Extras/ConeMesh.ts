// AUTO-GENERATED — DO NOT EDIT
// Type: ConeMesh
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
export interface ConeMeshBuilder {
  id(id: string): ConeMeshBuilder;
  child(obj: QmlObjectBuilder): ConeMeshBuilder;

  bottomRadius(value: number): ConeMeshBuilder;
  bottomRadiusBind(expr: string): ConeMeshBuilder;
  enabled(value: boolean): ConeMeshBuilder;
  enabledBind(expr: string): ConeMeshBuilder;
  firstInstance(value: number): ConeMeshBuilder;
  firstInstanceBind(expr: string): ConeMeshBuilder;
  firstVertex(value: number): ConeMeshBuilder;
  firstVertexBind(expr: string): ConeMeshBuilder;
  geometry(value: GeometryBuilder): ConeMeshBuilder;
  geometryBind(expr: string): ConeMeshBuilder;
  hasBottomEndcap(value: boolean): ConeMeshBuilder;
  hasBottomEndcapBind(expr: string): ConeMeshBuilder;
  hasTopEndcap(value: boolean): ConeMeshBuilder;
  hasTopEndcapBind(expr: string): ConeMeshBuilder;
  indexBufferByteOffset(value: number): ConeMeshBuilder;
  indexBufferByteOffsetBind(expr: string): ConeMeshBuilder;
  indexOffset(value: number): ConeMeshBuilder;
  indexOffsetBind(expr: string): ConeMeshBuilder;
  instanceCount(value: number): ConeMeshBuilder;
  instanceCountBind(expr: string): ConeMeshBuilder;
  isShareable(value: boolean): ConeMeshBuilder;
  isShareableBind(expr: string): ConeMeshBuilder;
  length(value: number): ConeMeshBuilder;
  lengthBind(expr: string): ConeMeshBuilder;
  maxPoint(value: QmlVector3d): ConeMeshBuilder;
  maxPointBind(expr: string): ConeMeshBuilder;
  minPoint(value: QmlVector3d): ConeMeshBuilder;
  minPointBind(expr: string): ConeMeshBuilder;
  objectName(value: string): ConeMeshBuilder;
  objectNameBind(expr: string): ConeMeshBuilder;
  parent(value: QmlValue): ConeMeshBuilder;
  parentBind(expr: string): ConeMeshBuilder;
  primitiveRestartEnabled(value: boolean): ConeMeshBuilder;
  primitiveRestartEnabledBind(expr: string): ConeMeshBuilder;
  primitiveType(value: QmlEnumToken): ConeMeshBuilder;
  primitiveTypeBind(expr: string): ConeMeshBuilder;
  restartIndexValue(value: number): ConeMeshBuilder;
  restartIndexValueBind(expr: string): ConeMeshBuilder;
  rings(value: number): ConeMeshBuilder;
  ringsBind(expr: string): ConeMeshBuilder;
  slices(value: number): ConeMeshBuilder;
  slicesBind(expr: string): ConeMeshBuilder;
  sortIndex(value: number): ConeMeshBuilder;
  sortIndexBind(expr: string): ConeMeshBuilder;
  topRadius(value: number): ConeMeshBuilder;
  topRadiusBind(expr: string): ConeMeshBuilder;
  vertexCount(value: number): ConeMeshBuilder;
  vertexCountBind(expr: string): ConeMeshBuilder;
  verticesPerPatch(value: number): ConeMeshBuilder;
  verticesPerPatchBind(expr: string): ConeMeshBuilder;
  view(value: GeometryViewBuilder): ConeMeshBuilder;
  viewBind(expr: string): ConeMeshBuilder;
  onAddedToEntity(body: string): ConeMeshBuilder;
  onBottomRadiusChanged(body: string): ConeMeshBuilder;
  onEnabledChanged(body: string): ConeMeshBuilder;
  onFirstInstanceChanged(body: string): ConeMeshBuilder;
  onFirstVertexChanged(body: string): ConeMeshBuilder;
  onGeometryChanged(body: string): ConeMeshBuilder;
  onHasBottomEndcapChanged(body: string): ConeMeshBuilder;
  onHasTopEndcapChanged(body: string): ConeMeshBuilder;
  onImplicitMaxPointChanged(body: string): ConeMeshBuilder;
  onImplicitMinPointChanged(body: string): ConeMeshBuilder;
  onImplicitPointsValidChanged(body: string): ConeMeshBuilder;
  onIndexBufferByteOffsetChanged(body: string): ConeMeshBuilder;
  onIndexOffsetChanged(body: string): ConeMeshBuilder;
  onInstanceCountChanged(body: string): ConeMeshBuilder;
  onLengthChanged(body: string): ConeMeshBuilder;
  onMaxPointChanged(body: string): ConeMeshBuilder;
  onMinPointChanged(body: string): ConeMeshBuilder;
  onNodeDestroyed(body: string): ConeMeshBuilder;
  onObjectNameChanged(body: string): ConeMeshBuilder;
  onParentChanged(body: string): ConeMeshBuilder;
  onPrimitiveRestartEnabledChanged(body: string): ConeMeshBuilder;
  onPrimitiveTypeChanged(body: string): ConeMeshBuilder;
  onRemovedFromEntity(body: string): ConeMeshBuilder;
  onRestartIndexValueChanged(body: string): ConeMeshBuilder;
  onRingsChanged(body: string): ConeMeshBuilder;
  onShareableChanged(body: string): ConeMeshBuilder;
  onSlicesChanged(body: string): ConeMeshBuilder;
  onSortIndexChanged(body: string): ConeMeshBuilder;
  onTopRadiusChanged(body: string): ConeMeshBuilder;
  onVertexCountChanged(body: string): ConeMeshBuilder;
  onVerticesPerPatchChanged(body: string): ConeMeshBuilder;
  onViewChanged(body: string): ConeMeshBuilder;
}

const CONEMESH_META: TypeMetadata = {
  typeName: 'ConeMesh',
  properties: [
    { name: 'bottomRadius', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'hasBottomEndcap', hasValue: true, hasBinding: true },
    { name: 'hasTopEndcap', hasValue: true, hasBinding: true },
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
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'slices', hasValue: true, hasBinding: true },
    { name: 'sortIndex', hasValue: true, hasBinding: true },
    { name: 'topRadius', hasValue: true, hasBinding: true },
    { name: 'vertexCount', hasValue: true, hasBinding: true },
    { name: 'verticesPerPatch', hasValue: true, hasBinding: true },
    { name: 'view', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onBottomRadiusChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFirstInstanceChanged', paramCount: 1 },
    { handlerName: 'onFirstVertexChanged', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 1 },
    { handlerName: 'onHasBottomEndcapChanged', paramCount: 1 },
    { handlerName: 'onHasTopEndcapChanged', paramCount: 1 },
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
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRestartIndexValueChanged', paramCount: 1 },
    { handlerName: 'onRingsChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSlicesChanged', paramCount: 1 },
    { handlerName: 'onSortIndexChanged', paramCount: 1 },
    { handlerName: 'onTopRadiusChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
    { handlerName: 'onViewChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ConeMesh(): ConeMeshBuilder {
  return createFluentBuilder('ConeMesh', CONEMESH_META) as unknown as ConeMeshBuilder;
}

export namespace ConeMesh {
  export namespace PrimitiveType {
    export const Points = createEnumToken('ConeMesh', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('ConeMesh', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('ConeMesh', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('ConeMesh', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('ConeMesh', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('ConeMesh', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('ConeMesh', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('ConeMesh', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken(
      'ConeMesh',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'ConeMesh',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'ConeMesh',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('ConeMesh', 'PrimitiveType', 'Patches');
  }
}
