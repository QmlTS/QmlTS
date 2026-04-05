// AUTO-GENERATED — DO NOT EDIT
// Type: PlaneGeometryView
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlSize, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
export interface PlaneGeometryViewBuilder {
  id(id: string): PlaneGeometryViewBuilder;
  child(obj: QmlObjectBuilder): PlaneGeometryViewBuilder;

  enabled(value: boolean): PlaneGeometryViewBuilder;
  enabledBind(expr: string): PlaneGeometryViewBuilder;
  firstInstance(value: number): PlaneGeometryViewBuilder;
  firstInstanceBind(expr: string): PlaneGeometryViewBuilder;
  firstVertex(value: number): PlaneGeometryViewBuilder;
  firstVertexBind(expr: string): PlaneGeometryViewBuilder;
  geometry(value: GeometryBuilder): PlaneGeometryViewBuilder;
  geometryBind(expr: string): PlaneGeometryViewBuilder;
  height(value: number): PlaneGeometryViewBuilder;
  heightBind(expr: string): PlaneGeometryViewBuilder;
  indexBufferByteOffset(value: number): PlaneGeometryViewBuilder;
  indexBufferByteOffsetBind(expr: string): PlaneGeometryViewBuilder;
  indexOffset(value: number): PlaneGeometryViewBuilder;
  indexOffsetBind(expr: string): PlaneGeometryViewBuilder;
  instanceCount(value: number): PlaneGeometryViewBuilder;
  instanceCountBind(expr: string): PlaneGeometryViewBuilder;
  meshResolution(value: QmlSize): PlaneGeometryViewBuilder;
  meshResolutionBind(expr: string): PlaneGeometryViewBuilder;
  mirrored(value: boolean): PlaneGeometryViewBuilder;
  mirroredBind(expr: string): PlaneGeometryViewBuilder;
  objectName(value: string): PlaneGeometryViewBuilder;
  objectNameBind(expr: string): PlaneGeometryViewBuilder;
  parent(value: QmlValue): PlaneGeometryViewBuilder;
  parentBind(expr: string): PlaneGeometryViewBuilder;
  primitiveRestartEnabled(value: boolean): PlaneGeometryViewBuilder;
  primitiveRestartEnabledBind(expr: string): PlaneGeometryViewBuilder;
  primitiveType(value: QmlEnumToken): PlaneGeometryViewBuilder;
  primitiveTypeBind(expr: string): PlaneGeometryViewBuilder;
  restartIndexValue(value: number): PlaneGeometryViewBuilder;
  restartIndexValueBind(expr: string): PlaneGeometryViewBuilder;
  vertexCount(value: number): PlaneGeometryViewBuilder;
  vertexCountBind(expr: string): PlaneGeometryViewBuilder;
  verticesPerPatch(value: number): PlaneGeometryViewBuilder;
  verticesPerPatchBind(expr: string): PlaneGeometryViewBuilder;
  width(value: number): PlaneGeometryViewBuilder;
  widthBind(expr: string): PlaneGeometryViewBuilder;
  onEnabledChanged(body: string): PlaneGeometryViewBuilder;
  onFirstInstanceChanged(body: string): PlaneGeometryViewBuilder;
  onFirstVertexChanged(body: string): PlaneGeometryViewBuilder;
  onGeometryChanged(body: string): PlaneGeometryViewBuilder;
  onHeightChanged(body: string): PlaneGeometryViewBuilder;
  onIndexBufferByteOffsetChanged(body: string): PlaneGeometryViewBuilder;
  onIndexOffsetChanged(body: string): PlaneGeometryViewBuilder;
  onInstanceCountChanged(body: string): PlaneGeometryViewBuilder;
  onMeshResolutionChanged(body: string): PlaneGeometryViewBuilder;
  onMirroredChanged(body: string): PlaneGeometryViewBuilder;
  onNodeDestroyed(body: string): PlaneGeometryViewBuilder;
  onObjectNameChanged(body: string): PlaneGeometryViewBuilder;
  onParentChanged(body: string): PlaneGeometryViewBuilder;
  onPrimitiveRestartEnabledChanged(body: string): PlaneGeometryViewBuilder;
  onPrimitiveTypeChanged(body: string): PlaneGeometryViewBuilder;
  onRestartIndexValueChanged(body: string): PlaneGeometryViewBuilder;
  onVertexCountChanged(body: string): PlaneGeometryViewBuilder;
  onVerticesPerPatchChanged(body: string): PlaneGeometryViewBuilder;
  onWidthChanged(body: string): PlaneGeometryViewBuilder;
}

const PLANEGEOMETRYVIEW_META: TypeMetadata = {
  typeName: 'PlaneGeometryView',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'meshResolution', hasValue: true, hasBinding: true },
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'vertexCount', hasValue: true, hasBinding: true },
    { name: 'verticesPerPatch', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFirstInstanceChanged', paramCount: 1 },
    { handlerName: 'onFirstVertexChanged', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onIndexBufferByteOffsetChanged', paramCount: 1 },
    { handlerName: 'onIndexOffsetChanged', paramCount: 1 },
    { handlerName: 'onInstanceCountChanged', paramCount: 1 },
    { handlerName: 'onMeshResolutionChanged', paramCount: 1 },
    { handlerName: 'onMirroredChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveRestartEnabledChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveTypeChanged', paramCount: 1 },
    { handlerName: 'onRestartIndexValueChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PlaneGeometryView(): PlaneGeometryViewBuilder {
  return createFluentBuilder('PlaneGeometryView', PLANEGEOMETRYVIEW_META) as unknown as PlaneGeometryViewBuilder;
}

export namespace PlaneGeometryView {
  export namespace PrimitiveType {
    export const Points = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'TrianglesAdjacency');
    export const LineStripAdjacency = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'LineStripAdjacency');
    export const TriangleStripAdjacency = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'TriangleStripAdjacency');
    export const Patches = createEnumToken('PlaneGeometryView', 'PrimitiveType', 'Patches');
  }
}
