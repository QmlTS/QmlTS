// AUTO-GENERATED — DO NOT EDIT
// Type: SphereGeometryView
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
export interface SphereGeometryViewBuilder {
  id(id: string): SphereGeometryViewBuilder;
  child(obj: QmlObjectBuilder): SphereGeometryViewBuilder;

  enabled(value: boolean): SphereGeometryViewBuilder;
  enabledBind(expr: string): SphereGeometryViewBuilder;
  firstInstance(value: number): SphereGeometryViewBuilder;
  firstInstanceBind(expr: string): SphereGeometryViewBuilder;
  firstVertex(value: number): SphereGeometryViewBuilder;
  firstVertexBind(expr: string): SphereGeometryViewBuilder;
  generateTangents(value: boolean): SphereGeometryViewBuilder;
  generateTangentsBind(expr: string): SphereGeometryViewBuilder;
  geometry(value: GeometryBuilder): SphereGeometryViewBuilder;
  geometryBind(expr: string): SphereGeometryViewBuilder;
  indexBufferByteOffset(value: number): SphereGeometryViewBuilder;
  indexBufferByteOffsetBind(expr: string): SphereGeometryViewBuilder;
  indexOffset(value: number): SphereGeometryViewBuilder;
  indexOffsetBind(expr: string): SphereGeometryViewBuilder;
  instanceCount(value: number): SphereGeometryViewBuilder;
  instanceCountBind(expr: string): SphereGeometryViewBuilder;
  objectName(value: string): SphereGeometryViewBuilder;
  objectNameBind(expr: string): SphereGeometryViewBuilder;
  parent(value: QmlValue): SphereGeometryViewBuilder;
  parentBind(expr: string): SphereGeometryViewBuilder;
  primitiveRestartEnabled(value: boolean): SphereGeometryViewBuilder;
  primitiveRestartEnabledBind(expr: string): SphereGeometryViewBuilder;
  primitiveType(value: QmlEnumToken): SphereGeometryViewBuilder;
  primitiveTypeBind(expr: string): SphereGeometryViewBuilder;
  radius(value: number): SphereGeometryViewBuilder;
  radiusBind(expr: string): SphereGeometryViewBuilder;
  restartIndexValue(value: number): SphereGeometryViewBuilder;
  restartIndexValueBind(expr: string): SphereGeometryViewBuilder;
  rings(value: number): SphereGeometryViewBuilder;
  ringsBind(expr: string): SphereGeometryViewBuilder;
  slices(value: number): SphereGeometryViewBuilder;
  slicesBind(expr: string): SphereGeometryViewBuilder;
  vertexCount(value: number): SphereGeometryViewBuilder;
  vertexCountBind(expr: string): SphereGeometryViewBuilder;
  verticesPerPatch(value: number): SphereGeometryViewBuilder;
  verticesPerPatchBind(expr: string): SphereGeometryViewBuilder;
  onEnabledChanged(body: string): SphereGeometryViewBuilder;
  onFirstInstanceChanged(body: string): SphereGeometryViewBuilder;
  onFirstVertexChanged(body: string): SphereGeometryViewBuilder;
  onGenerateTangentsChanged(body: string): SphereGeometryViewBuilder;
  onGeometryChanged(body: string): SphereGeometryViewBuilder;
  onIndexBufferByteOffsetChanged(body: string): SphereGeometryViewBuilder;
  onIndexOffsetChanged(body: string): SphereGeometryViewBuilder;
  onInstanceCountChanged(body: string): SphereGeometryViewBuilder;
  onNodeDestroyed(body: string): SphereGeometryViewBuilder;
  onObjectNameChanged(body: string): SphereGeometryViewBuilder;
  onParentChanged(body: string): SphereGeometryViewBuilder;
  onPrimitiveRestartEnabledChanged(body: string): SphereGeometryViewBuilder;
  onPrimitiveTypeChanged(body: string): SphereGeometryViewBuilder;
  onRadiusChanged(body: string): SphereGeometryViewBuilder;
  onRestartIndexValueChanged(body: string): SphereGeometryViewBuilder;
  onRingsChanged(body: string): SphereGeometryViewBuilder;
  onSlicesChanged(body: string): SphereGeometryViewBuilder;
  onVertexCountChanged(body: string): SphereGeometryViewBuilder;
  onVerticesPerPatchChanged(body: string): SphereGeometryViewBuilder;
}

const SPHEREGEOMETRYVIEW_META: TypeMetadata = {
  typeName: 'SphereGeometryView',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'generateTangents', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
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
    { handlerName: 'onGenerateTangentsChanged', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 1 },
    { handlerName: 'onIndexBufferByteOffsetChanged', paramCount: 1 },
    { handlerName: 'onIndexOffsetChanged', paramCount: 1 },
    { handlerName: 'onInstanceCountChanged', paramCount: 1 },
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
  grouped: [],
  attached: [],
};

export function SphereGeometryView(): SphereGeometryViewBuilder {
  return createFluentBuilder(
    'SphereGeometryView',
    SPHEREGEOMETRYVIEW_META,
  ) as unknown as SphereGeometryViewBuilder;
}

export namespace SphereGeometryView {
  export namespace PrimitiveType {
    export const Points = createEnumToken('SphereGeometryView', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('SphereGeometryView', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('SphereGeometryView', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('SphereGeometryView', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('SphereGeometryView', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken(
      'SphereGeometryView',
      'PrimitiveType',
      'TriangleStrip',
    );
    export const TriangleFan = createEnumToken(
      'SphereGeometryView',
      'PrimitiveType',
      'TriangleFan',
    );
    export const LinesAdjacency = createEnumToken(
      'SphereGeometryView',
      'PrimitiveType',
      'LinesAdjacency',
    );
    export const TrianglesAdjacency = createEnumToken(
      'SphereGeometryView',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'SphereGeometryView',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'SphereGeometryView',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('SphereGeometryView', 'PrimitiveType', 'Patches');
  }
}
