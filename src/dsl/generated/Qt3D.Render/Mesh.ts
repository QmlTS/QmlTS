// AUTO-GENERATED — DO NOT EDIT
// Type: Mesh
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
import type { GeometryViewBuilder } from '../Qt3D.Core/GeometryView.js';
export interface MeshBuilder {
  id(id: string): MeshBuilder;
  child(obj: QmlObjectBuilder): MeshBuilder;
  children(...objs: QmlObjectBuilder[]): MeshBuilder;

  enabled(value: boolean): MeshBuilder;
  enabledBind(expr: string): MeshBuilder;
  firstInstance(value: number): MeshBuilder;
  firstInstanceBind(expr: string): MeshBuilder;
  firstVertex(value: number): MeshBuilder;
  firstVertexBind(expr: string): MeshBuilder;
  geometry(value: GeometryBuilder): MeshBuilder;
  geometryBind(expr: string): MeshBuilder;
  indexBufferByteOffset(value: number): MeshBuilder;
  indexBufferByteOffsetBind(expr: string): MeshBuilder;
  indexOffset(value: number): MeshBuilder;
  indexOffsetBind(expr: string): MeshBuilder;
  instanceCount(value: number): MeshBuilder;
  instanceCountBind(expr: string): MeshBuilder;
  isShareable(value: boolean): MeshBuilder;
  isShareableBind(expr: string): MeshBuilder;
  maxPoint(value: QmlVector3d): MeshBuilder;
  maxPointBind(expr: string): MeshBuilder;
  meshName(value: string): MeshBuilder;
  meshNameBind(expr: string): MeshBuilder;
  minPoint(value: QmlVector3d): MeshBuilder;
  minPointBind(expr: string): MeshBuilder;
  objectName(value: string): MeshBuilder;
  objectNameBind(expr: string): MeshBuilder;
  parent(value: QmlValue): MeshBuilder;
  parentBind(expr: string): MeshBuilder;
  primitiveRestartEnabled(value: boolean): MeshBuilder;
  primitiveRestartEnabledBind(expr: string): MeshBuilder;
  primitiveType(value: QmlEnumToken): MeshBuilder;
  primitiveTypeBind(expr: string): MeshBuilder;
  restartIndexValue(value: number): MeshBuilder;
  restartIndexValueBind(expr: string): MeshBuilder;
  sortIndex(value: number): MeshBuilder;
  sortIndexBind(expr: string): MeshBuilder;
  source(value: QmlUrl): MeshBuilder;
  sourceBind(expr: string): MeshBuilder;
  vertexCount(value: number): MeshBuilder;
  vertexCountBind(expr: string): MeshBuilder;
  verticesPerPatch(value: number): MeshBuilder;
  verticesPerPatchBind(expr: string): MeshBuilder;
  view(value: GeometryViewBuilder): MeshBuilder;
  viewBind(expr: string): MeshBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): MeshBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onFirstInstanceChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onFirstVertexChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onImplicitMaxPointChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onImplicitMinPointChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onImplicitPointsValidChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onIndexBufferByteOffsetChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onIndexOffsetChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onInstanceCountChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onMaxPointChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onMeshNameChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onMinPointChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): MeshBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onParentChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onPrimitiveRestartEnabledChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onPrimitiveTypeChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): MeshBuilder;
  onRestartIndexValueChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onSortIndexChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onVertexCountChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onVerticesPerPatchChanged(handler: DslSignalHandlerValue): MeshBuilder;
  onViewChanged(handler: DslSignalHandlerValue): MeshBuilder;
}

const MESH_META: TypeMetadata = {
  typeName: 'Mesh',
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
    { name: 'meshName', hasValue: true, hasBinding: true },
    { name: 'minPoint', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'sortIndex', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMeshNameChanged', paramCount: 1 },
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
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
    { handlerName: 'onViewChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Mesh(): MeshBuilder {
  return createFluentBuilder('Mesh', MESH_META) as unknown as MeshBuilder;
}

export namespace Mesh {
  export namespace PrimitiveType {
    export const Points = createEnumToken('Mesh', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('Mesh', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('Mesh', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('Mesh', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('Mesh', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('Mesh', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('Mesh', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('Mesh', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken(
      'Mesh',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'Mesh',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'Mesh',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('Mesh', 'PrimitiveType', 'Patches');
  }
  export namespace Status {
    export const None = createEnumToken('Mesh', 'Status', 'None');
    export const Loading = createEnumToken('Mesh', 'Status', 'Loading');
    export const Ready = createEnumToken('Mesh', 'Status', 'Ready');
    export const Error = createEnumToken('Mesh', 'Status', 'Error');
  }
}
