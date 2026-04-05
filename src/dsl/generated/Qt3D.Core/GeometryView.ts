// AUTO-GENERATED — DO NOT EDIT
// Type: GeometryView
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { GeometryBuilder } from './Geometry.js';
export interface GeometryViewBuilder {
  id(id: string): GeometryViewBuilder;
  child(obj: QmlObjectBuilder): GeometryViewBuilder;

  enabled(value: boolean): GeometryViewBuilder;
  enabledBind(expr: string): GeometryViewBuilder;
  firstInstance(value: number): GeometryViewBuilder;
  firstInstanceBind(expr: string): GeometryViewBuilder;
  firstVertex(value: number): GeometryViewBuilder;
  firstVertexBind(expr: string): GeometryViewBuilder;
  geometry(value: GeometryBuilder): GeometryViewBuilder;
  geometryBind(expr: string): GeometryViewBuilder;
  indexBufferByteOffset(value: number): GeometryViewBuilder;
  indexBufferByteOffsetBind(expr: string): GeometryViewBuilder;
  indexOffset(value: number): GeometryViewBuilder;
  indexOffsetBind(expr: string): GeometryViewBuilder;
  instanceCount(value: number): GeometryViewBuilder;
  instanceCountBind(expr: string): GeometryViewBuilder;
  objectName(value: string): GeometryViewBuilder;
  objectNameBind(expr: string): GeometryViewBuilder;
  parent(value: QmlValue): GeometryViewBuilder;
  parentBind(expr: string): GeometryViewBuilder;
  primitiveRestartEnabled(value: boolean): GeometryViewBuilder;
  primitiveRestartEnabledBind(expr: string): GeometryViewBuilder;
  primitiveType(value: QmlEnumToken): GeometryViewBuilder;
  primitiveTypeBind(expr: string): GeometryViewBuilder;
  restartIndexValue(value: number): GeometryViewBuilder;
  restartIndexValueBind(expr: string): GeometryViewBuilder;
  vertexCount(value: number): GeometryViewBuilder;
  vertexCountBind(expr: string): GeometryViewBuilder;
  verticesPerPatch(value: number): GeometryViewBuilder;
  verticesPerPatchBind(expr: string): GeometryViewBuilder;
  onEnabledChanged(body: string): GeometryViewBuilder;
  onFirstInstanceChanged(body: string): GeometryViewBuilder;
  onFirstVertexChanged(body: string): GeometryViewBuilder;
  onGeometryChanged(body: string): GeometryViewBuilder;
  onIndexBufferByteOffsetChanged(body: string): GeometryViewBuilder;
  onIndexOffsetChanged(body: string): GeometryViewBuilder;
  onInstanceCountChanged(body: string): GeometryViewBuilder;
  onNodeDestroyed(body: string): GeometryViewBuilder;
  onObjectNameChanged(body: string): GeometryViewBuilder;
  onParentChanged(body: string): GeometryViewBuilder;
  onPrimitiveRestartEnabledChanged(body: string): GeometryViewBuilder;
  onPrimitiveTypeChanged(body: string): GeometryViewBuilder;
  onRestartIndexValueChanged(body: string): GeometryViewBuilder;
  onVertexCountChanged(body: string): GeometryViewBuilder;
  onVerticesPerPatchChanged(body: string): GeometryViewBuilder;
}

const GEOMETRYVIEW_META: TypeMetadata = {
  typeName: 'GeometryView',
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
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function GeometryView(): GeometryViewBuilder {
  return createFluentBuilder('GeometryView', GEOMETRYVIEW_META) as unknown as GeometryViewBuilder;
}

export namespace GeometryView {
  export namespace PrimitiveType {
    export const Points = createEnumToken('GeometryView', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('GeometryView', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('GeometryView', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('GeometryView', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('GeometryView', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('GeometryView', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('GeometryView', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('GeometryView', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken('GeometryView', 'PrimitiveType', 'TrianglesAdjacency');
    export const LineStripAdjacency = createEnumToken('GeometryView', 'PrimitiveType', 'LineStripAdjacency');
    export const TriangleStripAdjacency = createEnumToken('GeometryView', 'PrimitiveType', 'TriangleStripAdjacency');
    export const Patches = createEnumToken('GeometryView', 'PrimitiveType', 'Patches');
  }
}
