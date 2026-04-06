// AUTO-GENERATED — DO NOT EDIT
// Type: ConeMesh
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
  children(...objs: QmlObjectBuilder[]): ConeMeshBuilder;

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
  onAddedToEntity(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onBottomRadiusChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onFirstInstanceChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onFirstVertexChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onHasBottomEndcapChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onHasTopEndcapChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onImplicitMaxPointChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onImplicitMinPointChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onImplicitPointsValidChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onIndexBufferByteOffsetChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onIndexOffsetChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onInstanceCountChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onLengthChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onMaxPointChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onMinPointChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onPrimitiveRestartEnabledChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onPrimitiveTypeChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onRestartIndexValueChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onRingsChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onSlicesChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onSortIndexChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onTopRadiusChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onVertexCountChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onVerticesPerPatchChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
  onViewChanged(handler: DslSignalHandlerValue): ConeMeshBuilder;
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
