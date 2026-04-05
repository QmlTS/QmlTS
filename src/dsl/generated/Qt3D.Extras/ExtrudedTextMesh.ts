// AUTO-GENERATED — DO NOT EDIT
// Type: ExtrudedTextMesh
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlFont, QmlObjectBuilder, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
import type { GeometryViewBuilder } from '../Qt3D.Core/GeometryView.js';
export interface ExtrudedTextMeshBuilder {
  id(id: string): ExtrudedTextMeshBuilder;
  child(obj: QmlObjectBuilder): ExtrudedTextMeshBuilder;

  depth(value: number): ExtrudedTextMeshBuilder;
  depthBind(expr: string): ExtrudedTextMeshBuilder;
  enabled(value: boolean): ExtrudedTextMeshBuilder;
  enabledBind(expr: string): ExtrudedTextMeshBuilder;
  firstInstance(value: number): ExtrudedTextMeshBuilder;
  firstInstanceBind(expr: string): ExtrudedTextMeshBuilder;
  firstVertex(value: number): ExtrudedTextMeshBuilder;
  firstVertexBind(expr: string): ExtrudedTextMeshBuilder;
  font(value: QmlFont): ExtrudedTextMeshBuilder;
  fontBind(expr: string): ExtrudedTextMeshBuilder;
  geometry(value: GeometryBuilder): ExtrudedTextMeshBuilder;
  geometryBind(expr: string): ExtrudedTextMeshBuilder;
  indexBufferByteOffset(value: number): ExtrudedTextMeshBuilder;
  indexBufferByteOffsetBind(expr: string): ExtrudedTextMeshBuilder;
  indexOffset(value: number): ExtrudedTextMeshBuilder;
  indexOffsetBind(expr: string): ExtrudedTextMeshBuilder;
  instanceCount(value: number): ExtrudedTextMeshBuilder;
  instanceCountBind(expr: string): ExtrudedTextMeshBuilder;
  isShareable(value: boolean): ExtrudedTextMeshBuilder;
  isShareableBind(expr: string): ExtrudedTextMeshBuilder;
  maxPoint(value: QmlVector3d): ExtrudedTextMeshBuilder;
  maxPointBind(expr: string): ExtrudedTextMeshBuilder;
  minPoint(value: QmlVector3d): ExtrudedTextMeshBuilder;
  minPointBind(expr: string): ExtrudedTextMeshBuilder;
  objectName(value: string): ExtrudedTextMeshBuilder;
  objectNameBind(expr: string): ExtrudedTextMeshBuilder;
  parent(value: QmlValue): ExtrudedTextMeshBuilder;
  parentBind(expr: string): ExtrudedTextMeshBuilder;
  primitiveRestartEnabled(value: boolean): ExtrudedTextMeshBuilder;
  primitiveRestartEnabledBind(expr: string): ExtrudedTextMeshBuilder;
  primitiveType(value: QmlEnumToken): ExtrudedTextMeshBuilder;
  primitiveTypeBind(expr: string): ExtrudedTextMeshBuilder;
  restartIndexValue(value: number): ExtrudedTextMeshBuilder;
  restartIndexValueBind(expr: string): ExtrudedTextMeshBuilder;
  sortIndex(value: number): ExtrudedTextMeshBuilder;
  sortIndexBind(expr: string): ExtrudedTextMeshBuilder;
  text(value: string): ExtrudedTextMeshBuilder;
  textBind(expr: string): ExtrudedTextMeshBuilder;
  vertexCount(value: number): ExtrudedTextMeshBuilder;
  vertexCountBind(expr: string): ExtrudedTextMeshBuilder;
  verticesPerPatch(value: number): ExtrudedTextMeshBuilder;
  verticesPerPatchBind(expr: string): ExtrudedTextMeshBuilder;
  view(value: GeometryViewBuilder): ExtrudedTextMeshBuilder;
  viewBind(expr: string): ExtrudedTextMeshBuilder;
  onAddedToEntity(body: string): ExtrudedTextMeshBuilder;
  onDepthChanged(body: string): ExtrudedTextMeshBuilder;
  onEnabledChanged(body: string): ExtrudedTextMeshBuilder;
  onFirstInstanceChanged(body: string): ExtrudedTextMeshBuilder;
  onFirstVertexChanged(body: string): ExtrudedTextMeshBuilder;
  onFontChanged(body: string): ExtrudedTextMeshBuilder;
  onGeometryChanged(body: string): ExtrudedTextMeshBuilder;
  onImplicitMaxPointChanged(body: string): ExtrudedTextMeshBuilder;
  onImplicitMinPointChanged(body: string): ExtrudedTextMeshBuilder;
  onImplicitPointsValidChanged(body: string): ExtrudedTextMeshBuilder;
  onIndexBufferByteOffsetChanged(body: string): ExtrudedTextMeshBuilder;
  onIndexOffsetChanged(body: string): ExtrudedTextMeshBuilder;
  onInstanceCountChanged(body: string): ExtrudedTextMeshBuilder;
  onMaxPointChanged(body: string): ExtrudedTextMeshBuilder;
  onMinPointChanged(body: string): ExtrudedTextMeshBuilder;
  onNodeDestroyed(body: string): ExtrudedTextMeshBuilder;
  onObjectNameChanged(body: string): ExtrudedTextMeshBuilder;
  onParentChanged(body: string): ExtrudedTextMeshBuilder;
  onPrimitiveRestartEnabledChanged(body: string): ExtrudedTextMeshBuilder;
  onPrimitiveTypeChanged(body: string): ExtrudedTextMeshBuilder;
  onRemovedFromEntity(body: string): ExtrudedTextMeshBuilder;
  onRestartIndexValueChanged(body: string): ExtrudedTextMeshBuilder;
  onShareableChanged(body: string): ExtrudedTextMeshBuilder;
  onSortIndexChanged(body: string): ExtrudedTextMeshBuilder;
  onTextChanged(body: string): ExtrudedTextMeshBuilder;
  onVertexCountChanged(body: string): ExtrudedTextMeshBuilder;
  onVerticesPerPatchChanged(body: string): ExtrudedTextMeshBuilder;
  onViewChanged(body: string): ExtrudedTextMeshBuilder;
}

const EXTRUDEDTEXTMESH_META: TypeMetadata = {
  typeName: 'ExtrudedTextMesh',
  properties: [
    { name: 'depth', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
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
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'vertexCount', hasValue: true, hasBinding: true },
    { name: 'verticesPerPatch', hasValue: true, hasBinding: true },
    { name: 'view', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onDepthChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFirstInstanceChanged', paramCount: 1 },
    { handlerName: 'onFirstVertexChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 1 },
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
    { handlerName: 'onTextChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
    { handlerName: 'onViewChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ExtrudedTextMesh(): ExtrudedTextMeshBuilder {
  return createFluentBuilder('ExtrudedTextMesh', EXTRUDEDTEXTMESH_META) as unknown as ExtrudedTextMeshBuilder;
}

export namespace ExtrudedTextMesh {
  export namespace PrimitiveType {
    export const Points = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'TrianglesAdjacency');
    export const LineStripAdjacency = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'LineStripAdjacency');
    export const TriangleStripAdjacency = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'TriangleStripAdjacency');
    export const Patches = createEnumToken('ExtrudedTextMesh', 'PrimitiveType', 'Patches');
  }
}
