// AUTO-GENERATED — DO NOT EDIT
// Type: TorusGeometryView
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
export interface TorusGeometryViewBuilder {
  id(id: string): TorusGeometryViewBuilder;
  child(obj: QmlObjectBuilder): TorusGeometryViewBuilder;

  enabled(value: boolean): TorusGeometryViewBuilder;
  enabledBind(expr: string): TorusGeometryViewBuilder;
  firstInstance(value: number): TorusGeometryViewBuilder;
  firstInstanceBind(expr: string): TorusGeometryViewBuilder;
  firstVertex(value: number): TorusGeometryViewBuilder;
  firstVertexBind(expr: string): TorusGeometryViewBuilder;
  geometry(value: GeometryBuilder): TorusGeometryViewBuilder;
  geometryBind(expr: string): TorusGeometryViewBuilder;
  indexBufferByteOffset(value: number): TorusGeometryViewBuilder;
  indexBufferByteOffsetBind(expr: string): TorusGeometryViewBuilder;
  indexOffset(value: number): TorusGeometryViewBuilder;
  indexOffsetBind(expr: string): TorusGeometryViewBuilder;
  instanceCount(value: number): TorusGeometryViewBuilder;
  instanceCountBind(expr: string): TorusGeometryViewBuilder;
  minorRadius(value: number): TorusGeometryViewBuilder;
  minorRadiusBind(expr: string): TorusGeometryViewBuilder;
  objectName(value: string): TorusGeometryViewBuilder;
  objectNameBind(expr: string): TorusGeometryViewBuilder;
  parent(value: QmlValue): TorusGeometryViewBuilder;
  parentBind(expr: string): TorusGeometryViewBuilder;
  primitiveRestartEnabled(value: boolean): TorusGeometryViewBuilder;
  primitiveRestartEnabledBind(expr: string): TorusGeometryViewBuilder;
  primitiveType(value: QmlEnumToken): TorusGeometryViewBuilder;
  primitiveTypeBind(expr: string): TorusGeometryViewBuilder;
  radius(value: number): TorusGeometryViewBuilder;
  radiusBind(expr: string): TorusGeometryViewBuilder;
  restartIndexValue(value: number): TorusGeometryViewBuilder;
  restartIndexValueBind(expr: string): TorusGeometryViewBuilder;
  rings(value: number): TorusGeometryViewBuilder;
  ringsBind(expr: string): TorusGeometryViewBuilder;
  slices(value: number): TorusGeometryViewBuilder;
  slicesBind(expr: string): TorusGeometryViewBuilder;
  vertexCount(value: number): TorusGeometryViewBuilder;
  vertexCountBind(expr: string): TorusGeometryViewBuilder;
  verticesPerPatch(value: number): TorusGeometryViewBuilder;
  verticesPerPatchBind(expr: string): TorusGeometryViewBuilder;
  onEnabledChanged(body: string): TorusGeometryViewBuilder;
  onFirstInstanceChanged(body: string): TorusGeometryViewBuilder;
  onFirstVertexChanged(body: string): TorusGeometryViewBuilder;
  onGeometryChanged(body: string): TorusGeometryViewBuilder;
  onIndexBufferByteOffsetChanged(body: string): TorusGeometryViewBuilder;
  onIndexOffsetChanged(body: string): TorusGeometryViewBuilder;
  onInstanceCountChanged(body: string): TorusGeometryViewBuilder;
  onMinorRadiusChanged(body: string): TorusGeometryViewBuilder;
  onNodeDestroyed(body: string): TorusGeometryViewBuilder;
  onObjectNameChanged(body: string): TorusGeometryViewBuilder;
  onParentChanged(body: string): TorusGeometryViewBuilder;
  onPrimitiveRestartEnabledChanged(body: string): TorusGeometryViewBuilder;
  onPrimitiveTypeChanged(body: string): TorusGeometryViewBuilder;
  onRadiusChanged(body: string): TorusGeometryViewBuilder;
  onRestartIndexValueChanged(body: string): TorusGeometryViewBuilder;
  onRingsChanged(body: string): TorusGeometryViewBuilder;
  onSlicesChanged(body: string): TorusGeometryViewBuilder;
  onVertexCountChanged(body: string): TorusGeometryViewBuilder;
  onVerticesPerPatchChanged(body: string): TorusGeometryViewBuilder;
}

const TORUSGEOMETRYVIEW_META: TypeMetadata = {
  typeName: 'TorusGeometryView',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'firstInstance', hasValue: true, hasBinding: true },
    { name: 'firstVertex', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'indexBufferByteOffset', hasValue: true, hasBinding: true },
    { name: 'indexOffset', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'minorRadius', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMinorRadiusChanged', paramCount: 1 },
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

export function TorusGeometryView(): TorusGeometryViewBuilder {
  return createFluentBuilder(
    'TorusGeometryView',
    TORUSGEOMETRYVIEW_META,
  ) as unknown as TorusGeometryViewBuilder;
}

export namespace TorusGeometryView {
  export namespace PrimitiveType {
    export const Points = createEnumToken('TorusGeometryView', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('TorusGeometryView', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('TorusGeometryView', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('TorusGeometryView', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('TorusGeometryView', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken(
      'TorusGeometryView',
      'PrimitiveType',
      'TriangleStrip',
    );
    export const TriangleFan = createEnumToken('TorusGeometryView', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken(
      'TorusGeometryView',
      'PrimitiveType',
      'LinesAdjacency',
    );
    export const TrianglesAdjacency = createEnumToken(
      'TorusGeometryView',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'TorusGeometryView',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'TorusGeometryView',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('TorusGeometryView', 'PrimitiveType', 'Patches');
  }
}
