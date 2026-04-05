// AUTO-GENERATED — DO NOT EDIT
// Type: CuboidGeometryView
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlSize, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
export interface CuboidGeometryViewBuilder {
  id(id: string): CuboidGeometryViewBuilder;
  child(obj: QmlObjectBuilder): CuboidGeometryViewBuilder;

  enabled(value: boolean): CuboidGeometryViewBuilder;
  enabledBind(expr: string): CuboidGeometryViewBuilder;
  firstInstance(value: number): CuboidGeometryViewBuilder;
  firstInstanceBind(expr: string): CuboidGeometryViewBuilder;
  firstVertex(value: number): CuboidGeometryViewBuilder;
  firstVertexBind(expr: string): CuboidGeometryViewBuilder;
  geometry(value: GeometryBuilder): CuboidGeometryViewBuilder;
  geometryBind(expr: string): CuboidGeometryViewBuilder;
  indexBufferByteOffset(value: number): CuboidGeometryViewBuilder;
  indexBufferByteOffsetBind(expr: string): CuboidGeometryViewBuilder;
  indexOffset(value: number): CuboidGeometryViewBuilder;
  indexOffsetBind(expr: string): CuboidGeometryViewBuilder;
  instanceCount(value: number): CuboidGeometryViewBuilder;
  instanceCountBind(expr: string): CuboidGeometryViewBuilder;
  objectName(value: string): CuboidGeometryViewBuilder;
  objectNameBind(expr: string): CuboidGeometryViewBuilder;
  parent(value: QmlValue): CuboidGeometryViewBuilder;
  parentBind(expr: string): CuboidGeometryViewBuilder;
  primitiveRestartEnabled(value: boolean): CuboidGeometryViewBuilder;
  primitiveRestartEnabledBind(expr: string): CuboidGeometryViewBuilder;
  primitiveType(value: QmlEnumToken): CuboidGeometryViewBuilder;
  primitiveTypeBind(expr: string): CuboidGeometryViewBuilder;
  restartIndexValue(value: number): CuboidGeometryViewBuilder;
  restartIndexValueBind(expr: string): CuboidGeometryViewBuilder;
  vertexCount(value: number): CuboidGeometryViewBuilder;
  vertexCountBind(expr: string): CuboidGeometryViewBuilder;
  verticesPerPatch(value: number): CuboidGeometryViewBuilder;
  verticesPerPatchBind(expr: string): CuboidGeometryViewBuilder;
  xExtent(value: number): CuboidGeometryViewBuilder;
  xExtentBind(expr: string): CuboidGeometryViewBuilder;
  xyMeshResolution(value: QmlSize): CuboidGeometryViewBuilder;
  xyMeshResolutionBind(expr: string): CuboidGeometryViewBuilder;
  xzMeshResolution(value: QmlSize): CuboidGeometryViewBuilder;
  xzMeshResolutionBind(expr: string): CuboidGeometryViewBuilder;
  yExtent(value: number): CuboidGeometryViewBuilder;
  yExtentBind(expr: string): CuboidGeometryViewBuilder;
  yzMeshResolution(value: QmlSize): CuboidGeometryViewBuilder;
  yzMeshResolutionBind(expr: string): CuboidGeometryViewBuilder;
  zExtent(value: number): CuboidGeometryViewBuilder;
  zExtentBind(expr: string): CuboidGeometryViewBuilder;
  onEnabledChanged(body: string): CuboidGeometryViewBuilder;
  onFirstInstanceChanged(body: string): CuboidGeometryViewBuilder;
  onFirstVertexChanged(body: string): CuboidGeometryViewBuilder;
  onGeometryChanged(body: string): CuboidGeometryViewBuilder;
  onIndexBufferByteOffsetChanged(body: string): CuboidGeometryViewBuilder;
  onIndexOffsetChanged(body: string): CuboidGeometryViewBuilder;
  onInstanceCountChanged(body: string): CuboidGeometryViewBuilder;
  onNodeDestroyed(body: string): CuboidGeometryViewBuilder;
  onObjectNameChanged(body: string): CuboidGeometryViewBuilder;
  onParentChanged(body: string): CuboidGeometryViewBuilder;
  onPrimitiveRestartEnabledChanged(body: string): CuboidGeometryViewBuilder;
  onPrimitiveTypeChanged(body: string): CuboidGeometryViewBuilder;
  onRestartIndexValueChanged(body: string): CuboidGeometryViewBuilder;
  onVertexCountChanged(body: string): CuboidGeometryViewBuilder;
  onVerticesPerPatchChanged(body: string): CuboidGeometryViewBuilder;
  onXExtentChanged(body: string): CuboidGeometryViewBuilder;
  onXyMeshResolutionChanged(body: string): CuboidGeometryViewBuilder;
  onXzMeshResolutionChanged(body: string): CuboidGeometryViewBuilder;
  onYExtentChanged(body: string): CuboidGeometryViewBuilder;
  onYzMeshResolutionChanged(body: string): CuboidGeometryViewBuilder;
  onZExtentChanged(body: string): CuboidGeometryViewBuilder;
}

const CUBOIDGEOMETRYVIEW_META: TypeMetadata = {
  typeName: 'CuboidGeometryView',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'vertexCount', hasValue: true, hasBinding: true },
    { name: 'verticesPerPatch', hasValue: true, hasBinding: true },
    { name: 'xExtent', hasValue: true, hasBinding: true },
    { name: 'xyMeshResolution', hasValue: true, hasBinding: true },
    { name: 'xzMeshResolution', hasValue: true, hasBinding: true },
    { name: 'yExtent', hasValue: true, hasBinding: true },
    { name: 'yzMeshResolution', hasValue: true, hasBinding: true },
    { name: 'zExtent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFirstInstanceChanged', paramCount: 1 },
    { handlerName: 'onFirstVertexChanged', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 1 },
    { handlerName: 'onIndexBufferByteOffsetChanged', paramCount: 1 },
    { handlerName: 'onIndexOffsetChanged', paramCount: 1 },
    { handlerName: 'onInstanceCountChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveRestartEnabledChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveTypeChanged', paramCount: 1 },
    { handlerName: 'onRestartIndexValueChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
    { handlerName: 'onXExtentChanged', paramCount: 1 },
    { handlerName: 'onXyMeshResolutionChanged', paramCount: 1 },
    { handlerName: 'onXzMeshResolutionChanged', paramCount: 1 },
    { handlerName: 'onYExtentChanged', paramCount: 1 },
    { handlerName: 'onYzMeshResolutionChanged', paramCount: 1 },
    { handlerName: 'onZExtentChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function CuboidGeometryView(): CuboidGeometryViewBuilder {
  return createFluentBuilder('CuboidGeometryView', CUBOIDGEOMETRYVIEW_META) as unknown as CuboidGeometryViewBuilder;
}

export namespace CuboidGeometryView {
  export namespace PrimitiveType {
    export const Points = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'TrianglesAdjacency');
    export const LineStripAdjacency = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'LineStripAdjacency');
    export const TriangleStripAdjacency = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'TriangleStripAdjacency');
    export const Patches = createEnumToken('CuboidGeometryView', 'PrimitiveType', 'Patches');
  }
}
