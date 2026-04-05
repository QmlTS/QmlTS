// AUTO-GENERATED — DO NOT EDIT
// Type: CylinderGeometryView
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
export interface CylinderGeometryViewBuilder {
  id(id: string): CylinderGeometryViewBuilder;
  child(obj: QmlObjectBuilder): CylinderGeometryViewBuilder;

  enabled(value: boolean): CylinderGeometryViewBuilder;
  enabledBind(expr: string): CylinderGeometryViewBuilder;
  firstInstance(value: number): CylinderGeometryViewBuilder;
  firstInstanceBind(expr: string): CylinderGeometryViewBuilder;
  firstVertex(value: number): CylinderGeometryViewBuilder;
  firstVertexBind(expr: string): CylinderGeometryViewBuilder;
  geometry(value: GeometryBuilder): CylinderGeometryViewBuilder;
  geometryBind(expr: string): CylinderGeometryViewBuilder;
  indexBufferByteOffset(value: number): CylinderGeometryViewBuilder;
  indexBufferByteOffsetBind(expr: string): CylinderGeometryViewBuilder;
  indexOffset(value: number): CylinderGeometryViewBuilder;
  indexOffsetBind(expr: string): CylinderGeometryViewBuilder;
  instanceCount(value: number): CylinderGeometryViewBuilder;
  instanceCountBind(expr: string): CylinderGeometryViewBuilder;
  length(value: number): CylinderGeometryViewBuilder;
  lengthBind(expr: string): CylinderGeometryViewBuilder;
  objectName(value: string): CylinderGeometryViewBuilder;
  objectNameBind(expr: string): CylinderGeometryViewBuilder;
  parent(value: QmlValue): CylinderGeometryViewBuilder;
  parentBind(expr: string): CylinderGeometryViewBuilder;
  primitiveRestartEnabled(value: boolean): CylinderGeometryViewBuilder;
  primitiveRestartEnabledBind(expr: string): CylinderGeometryViewBuilder;
  primitiveType(value: QmlEnumToken): CylinderGeometryViewBuilder;
  primitiveTypeBind(expr: string): CylinderGeometryViewBuilder;
  radius(value: number): CylinderGeometryViewBuilder;
  radiusBind(expr: string): CylinderGeometryViewBuilder;
  restartIndexValue(value: number): CylinderGeometryViewBuilder;
  restartIndexValueBind(expr: string): CylinderGeometryViewBuilder;
  rings(value: number): CylinderGeometryViewBuilder;
  ringsBind(expr: string): CylinderGeometryViewBuilder;
  slices(value: number): CylinderGeometryViewBuilder;
  slicesBind(expr: string): CylinderGeometryViewBuilder;
  vertexCount(value: number): CylinderGeometryViewBuilder;
  vertexCountBind(expr: string): CylinderGeometryViewBuilder;
  verticesPerPatch(value: number): CylinderGeometryViewBuilder;
  verticesPerPatchBind(expr: string): CylinderGeometryViewBuilder;
  onEnabledChanged(body: string): CylinderGeometryViewBuilder;
  onFirstInstanceChanged(body: string): CylinderGeometryViewBuilder;
  onFirstVertexChanged(body: string): CylinderGeometryViewBuilder;
  onGeometryChanged(body: string): CylinderGeometryViewBuilder;
  onIndexBufferByteOffsetChanged(body: string): CylinderGeometryViewBuilder;
  onIndexOffsetChanged(body: string): CylinderGeometryViewBuilder;
  onInstanceCountChanged(body: string): CylinderGeometryViewBuilder;
  onLengthChanged(body: string): CylinderGeometryViewBuilder;
  onNodeDestroyed(body: string): CylinderGeometryViewBuilder;
  onObjectNameChanged(body: string): CylinderGeometryViewBuilder;
  onParentChanged(body: string): CylinderGeometryViewBuilder;
  onPrimitiveRestartEnabledChanged(body: string): CylinderGeometryViewBuilder;
  onPrimitiveTypeChanged(body: string): CylinderGeometryViewBuilder;
  onRadiusChanged(body: string): CylinderGeometryViewBuilder;
  onRestartIndexValueChanged(body: string): CylinderGeometryViewBuilder;
  onRingsChanged(body: string): CylinderGeometryViewBuilder;
  onSlicesChanged(body: string): CylinderGeometryViewBuilder;
  onVertexCountChanged(body: string): CylinderGeometryViewBuilder;
  onVerticesPerPatchChanged(body: string): CylinderGeometryViewBuilder;
}

const CYLINDERGEOMETRYVIEW_META: TypeMetadata = {
  typeName: 'CylinderGeometryView',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'length', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'slices', hasValue: true, hasBinding: true },
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
    { handlerName: 'onLengthChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveRestartEnabledChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveTypeChanged', paramCount: 1 },
    { handlerName: 'onRadiusChanged', paramCount: 1 },
    { handlerName: 'onRestartIndexValueChanged', paramCount: 1 },
    { handlerName: 'onRingsChanged', paramCount: 1 },
    { handlerName: 'onSlicesChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function CylinderGeometryView(): CylinderGeometryViewBuilder {
  return createFluentBuilder('CylinderGeometryView', CYLINDERGEOMETRYVIEW_META) as unknown as CylinderGeometryViewBuilder;
}

export namespace CylinderGeometryView {
  export namespace PrimitiveType {
    export const Points = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'TriangleStrip');
    export const TriangleFan = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'LinesAdjacency');
    export const TrianglesAdjacency = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'TrianglesAdjacency');
    export const LineStripAdjacency = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'LineStripAdjacency');
    export const TriangleStripAdjacency = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'TriangleStripAdjacency');
    export const Patches = createEnumToken('CylinderGeometryView', 'PrimitiveType', 'Patches');
  }
}
