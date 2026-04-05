// AUTO-GENERATED — DO NOT EDIT
// Type: GeometryRenderer
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
export interface GeometryRendererBuilder {
  id(id: string): GeometryRendererBuilder;
  child(obj: QmlObjectBuilder): GeometryRendererBuilder;

  enabled(value: boolean): GeometryRendererBuilder;
  enabledBind(expr: string): GeometryRendererBuilder;
  firstInstance(value: number): GeometryRendererBuilder;
  firstInstanceBind(expr: string): GeometryRendererBuilder;
  firstVertex(value: number): GeometryRendererBuilder;
  firstVertexBind(expr: string): GeometryRendererBuilder;
  geometry(value: GeometryBuilder): GeometryRendererBuilder;
  geometryBind(expr: string): GeometryRendererBuilder;
  indexBufferByteOffset(value: number): GeometryRendererBuilder;
  indexBufferByteOffsetBind(expr: string): GeometryRendererBuilder;
  indexOffset(value: number): GeometryRendererBuilder;
  indexOffsetBind(expr: string): GeometryRendererBuilder;
  instanceCount(value: number): GeometryRendererBuilder;
  instanceCountBind(expr: string): GeometryRendererBuilder;
  isShareable(value: boolean): GeometryRendererBuilder;
  isShareableBind(expr: string): GeometryRendererBuilder;
  maxPoint(value: QmlVector3d): GeometryRendererBuilder;
  maxPointBind(expr: string): GeometryRendererBuilder;
  minPoint(value: QmlVector3d): GeometryRendererBuilder;
  minPointBind(expr: string): GeometryRendererBuilder;
  objectName(value: string): GeometryRendererBuilder;
  objectNameBind(expr: string): GeometryRendererBuilder;
  parent(value: QmlValue): GeometryRendererBuilder;
  parentBind(expr: string): GeometryRendererBuilder;
  primitiveRestartEnabled(value: boolean): GeometryRendererBuilder;
  primitiveRestartEnabledBind(expr: string): GeometryRendererBuilder;
  primitiveType(value: QmlEnumToken): GeometryRendererBuilder;
  primitiveTypeBind(expr: string): GeometryRendererBuilder;
  restartIndexValue(value: number): GeometryRendererBuilder;
  restartIndexValueBind(expr: string): GeometryRendererBuilder;
  sortIndex(value: number): GeometryRendererBuilder;
  sortIndexBind(expr: string): GeometryRendererBuilder;
  vertexCount(value: number): GeometryRendererBuilder;
  vertexCountBind(expr: string): GeometryRendererBuilder;
  verticesPerPatch(value: number): GeometryRendererBuilder;
  verticesPerPatchBind(expr: string): GeometryRendererBuilder;
  view(value: GeometryViewBuilder): GeometryRendererBuilder;
  viewBind(expr: string): GeometryRendererBuilder;
  onAddedToEntity(body: string): GeometryRendererBuilder;
  onEnabledChanged(body: string): GeometryRendererBuilder;
  onFirstInstanceChanged(body: string): GeometryRendererBuilder;
  onFirstVertexChanged(body: string): GeometryRendererBuilder;
  onGeometryChanged(body: string): GeometryRendererBuilder;
  onImplicitMaxPointChanged(body: string): GeometryRendererBuilder;
  onImplicitMinPointChanged(body: string): GeometryRendererBuilder;
  onImplicitPointsValidChanged(body: string): GeometryRendererBuilder;
  onIndexBufferByteOffsetChanged(body: string): GeometryRendererBuilder;
  onIndexOffsetChanged(body: string): GeometryRendererBuilder;
  onInstanceCountChanged(body: string): GeometryRendererBuilder;
  onMaxPointChanged(body: string): GeometryRendererBuilder;
  onMinPointChanged(body: string): GeometryRendererBuilder;
  onNodeDestroyed(body: string): GeometryRendererBuilder;
  onObjectNameChanged(body: string): GeometryRendererBuilder;
  onParentChanged(body: string): GeometryRendererBuilder;
  onPrimitiveRestartEnabledChanged(body: string): GeometryRendererBuilder;
  onPrimitiveTypeChanged(body: string): GeometryRendererBuilder;
  onRemovedFromEntity(body: string): GeometryRendererBuilder;
  onRestartIndexValueChanged(body: string): GeometryRendererBuilder;
  onShareableChanged(body: string): GeometryRendererBuilder;
  onSortIndexChanged(body: string): GeometryRendererBuilder;
  onVertexCountChanged(body: string): GeometryRendererBuilder;
  onVerticesPerPatchChanged(body: string): GeometryRendererBuilder;
  onViewChanged(body: string): GeometryRendererBuilder;
}

const GEOMETRYRENDERER_META: TypeMetadata = {
  typeName: 'GeometryRenderer',
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
    { name: 'minPoint', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'sortIndex', hasValue: true, hasBinding: true },
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
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
    { handlerName: 'onViewChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function GeometryRenderer(): GeometryRendererBuilder {
  return createFluentBuilder(
    'GeometryRenderer',
    GEOMETRYRENDERER_META,
  ) as unknown as GeometryRendererBuilder;
}

export namespace GeometryRenderer {
  export namespace PrimitiveType {
    export const Points = createEnumToken('GeometryRenderer', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('GeometryRenderer', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('GeometryRenderer', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('GeometryRenderer', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('GeometryRenderer', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken(
      'GeometryRenderer',
      'PrimitiveType',
      'TriangleStrip',
    );
    export const TriangleFan = createEnumToken('GeometryRenderer', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken(
      'GeometryRenderer',
      'PrimitiveType',
      'LinesAdjacency',
    );
    export const TrianglesAdjacency = createEnumToken(
      'GeometryRenderer',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'GeometryRenderer',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'GeometryRenderer',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('GeometryRenderer', 'PrimitiveType', 'Patches');
  }
}
