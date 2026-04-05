// AUTO-GENERATED — DO NOT EDIT
// Type: ConeGeometryView
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GeometryBuilder } from '../Qt3D.Core/Geometry.js';
export interface ConeGeometryViewBuilder {
  id(id: string): ConeGeometryViewBuilder;
  child(obj: QmlObjectBuilder): ConeGeometryViewBuilder;

  bottomRadius(value: number): ConeGeometryViewBuilder;
  bottomRadiusBind(expr: string): ConeGeometryViewBuilder;
  enabled(value: boolean): ConeGeometryViewBuilder;
  enabledBind(expr: string): ConeGeometryViewBuilder;
  firstInstance(value: number): ConeGeometryViewBuilder;
  firstInstanceBind(expr: string): ConeGeometryViewBuilder;
  firstVertex(value: number): ConeGeometryViewBuilder;
  firstVertexBind(expr: string): ConeGeometryViewBuilder;
  geometry(value: GeometryBuilder): ConeGeometryViewBuilder;
  geometryBind(expr: string): ConeGeometryViewBuilder;
  hasBottomEndcap(value: boolean): ConeGeometryViewBuilder;
  hasBottomEndcapBind(expr: string): ConeGeometryViewBuilder;
  hasTopEndcap(value: boolean): ConeGeometryViewBuilder;
  hasTopEndcapBind(expr: string): ConeGeometryViewBuilder;
  indexBufferByteOffset(value: number): ConeGeometryViewBuilder;
  indexBufferByteOffsetBind(expr: string): ConeGeometryViewBuilder;
  indexOffset(value: number): ConeGeometryViewBuilder;
  indexOffsetBind(expr: string): ConeGeometryViewBuilder;
  instanceCount(value: number): ConeGeometryViewBuilder;
  instanceCountBind(expr: string): ConeGeometryViewBuilder;
  length(value: number): ConeGeometryViewBuilder;
  lengthBind(expr: string): ConeGeometryViewBuilder;
  objectName(value: string): ConeGeometryViewBuilder;
  objectNameBind(expr: string): ConeGeometryViewBuilder;
  parent(value: QmlValue): ConeGeometryViewBuilder;
  parentBind(expr: string): ConeGeometryViewBuilder;
  primitiveRestartEnabled(value: boolean): ConeGeometryViewBuilder;
  primitiveRestartEnabledBind(expr: string): ConeGeometryViewBuilder;
  primitiveType(value: QmlEnumToken): ConeGeometryViewBuilder;
  primitiveTypeBind(expr: string): ConeGeometryViewBuilder;
  restartIndexValue(value: number): ConeGeometryViewBuilder;
  restartIndexValueBind(expr: string): ConeGeometryViewBuilder;
  rings(value: number): ConeGeometryViewBuilder;
  ringsBind(expr: string): ConeGeometryViewBuilder;
  slices(value: number): ConeGeometryViewBuilder;
  slicesBind(expr: string): ConeGeometryViewBuilder;
  topRadius(value: number): ConeGeometryViewBuilder;
  topRadiusBind(expr: string): ConeGeometryViewBuilder;
  vertexCount(value: number): ConeGeometryViewBuilder;
  vertexCountBind(expr: string): ConeGeometryViewBuilder;
  verticesPerPatch(value: number): ConeGeometryViewBuilder;
  verticesPerPatchBind(expr: string): ConeGeometryViewBuilder;
  onBottomRadiusChanged(body: string): ConeGeometryViewBuilder;
  onEnabledChanged(body: string): ConeGeometryViewBuilder;
  onFirstInstanceChanged(body: string): ConeGeometryViewBuilder;
  onFirstVertexChanged(body: string): ConeGeometryViewBuilder;
  onGeometryChanged(body: string): ConeGeometryViewBuilder;
  onHasBottomEndcapChanged(body: string): ConeGeometryViewBuilder;
  onHasTopEndcapChanged(body: string): ConeGeometryViewBuilder;
  onIndexBufferByteOffsetChanged(body: string): ConeGeometryViewBuilder;
  onIndexOffsetChanged(body: string): ConeGeometryViewBuilder;
  onInstanceCountChanged(body: string): ConeGeometryViewBuilder;
  onLengthChanged(body: string): ConeGeometryViewBuilder;
  onNodeDestroyed(body: string): ConeGeometryViewBuilder;
  onObjectNameChanged(body: string): ConeGeometryViewBuilder;
  onParentChanged(body: string): ConeGeometryViewBuilder;
  onPrimitiveRestartEnabledChanged(body: string): ConeGeometryViewBuilder;
  onPrimitiveTypeChanged(body: string): ConeGeometryViewBuilder;
  onRestartIndexValueChanged(body: string): ConeGeometryViewBuilder;
  onRingsChanged(body: string): ConeGeometryViewBuilder;
  onSlicesChanged(body: string): ConeGeometryViewBuilder;
  onTopRadiusChanged(body: string): ConeGeometryViewBuilder;
  onVertexCountChanged(body: string): ConeGeometryViewBuilder;
  onVerticesPerPatchChanged(body: string): ConeGeometryViewBuilder;
}

const CONEGEOMETRYVIEW_META: TypeMetadata = {
  typeName: 'ConeGeometryView',
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
    { name: 'length', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'primitiveRestartEnabled', hasValue: true, hasBinding: true },
    { name: 'primitiveType', hasValue: true, hasBinding: true },
    { name: 'restartIndexValue', hasValue: true, hasBinding: true },
    { name: 'rings', hasValue: true, hasBinding: true },
    { name: 'slices', hasValue: true, hasBinding: true },
    { name: 'topRadius', hasValue: true, hasBinding: true },
    { name: 'vertexCount', hasValue: true, hasBinding: true },
    { name: 'verticesPerPatch', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBottomRadiusChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFirstInstanceChanged', paramCount: 1 },
    { handlerName: 'onFirstVertexChanged', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 1 },
    { handlerName: 'onHasBottomEndcapChanged', paramCount: 1 },
    { handlerName: 'onHasTopEndcapChanged', paramCount: 1 },
    { handlerName: 'onIndexBufferByteOffsetChanged', paramCount: 1 },
    { handlerName: 'onIndexOffsetChanged', paramCount: 1 },
    { handlerName: 'onInstanceCountChanged', paramCount: 1 },
    { handlerName: 'onLengthChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveRestartEnabledChanged', paramCount: 1 },
    { handlerName: 'onPrimitiveTypeChanged', paramCount: 1 },
    { handlerName: 'onRestartIndexValueChanged', paramCount: 1 },
    { handlerName: 'onRingsChanged', paramCount: 1 },
    { handlerName: 'onSlicesChanged', paramCount: 1 },
    { handlerName: 'onTopRadiusChanged', paramCount: 1 },
    { handlerName: 'onVertexCountChanged', paramCount: 1 },
    { handlerName: 'onVerticesPerPatchChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ConeGeometryView(): ConeGeometryViewBuilder {
  return createFluentBuilder(
    'ConeGeometryView',
    CONEGEOMETRYVIEW_META,
  ) as unknown as ConeGeometryViewBuilder;
}

export namespace ConeGeometryView {
  export namespace PrimitiveType {
    export const Points = createEnumToken('ConeGeometryView', 'PrimitiveType', 'Points');
    export const Lines = createEnumToken('ConeGeometryView', 'PrimitiveType', 'Lines');
    export const LineLoop = createEnumToken('ConeGeometryView', 'PrimitiveType', 'LineLoop');
    export const LineStrip = createEnumToken('ConeGeometryView', 'PrimitiveType', 'LineStrip');
    export const Triangles = createEnumToken('ConeGeometryView', 'PrimitiveType', 'Triangles');
    export const TriangleStrip = createEnumToken(
      'ConeGeometryView',
      'PrimitiveType',
      'TriangleStrip',
    );
    export const TriangleFan = createEnumToken('ConeGeometryView', 'PrimitiveType', 'TriangleFan');
    export const LinesAdjacency = createEnumToken(
      'ConeGeometryView',
      'PrimitiveType',
      'LinesAdjacency',
    );
    export const TrianglesAdjacency = createEnumToken(
      'ConeGeometryView',
      'PrimitiveType',
      'TrianglesAdjacency',
    );
    export const LineStripAdjacency = createEnumToken(
      'ConeGeometryView',
      'PrimitiveType',
      'LineStripAdjacency',
    );
    export const TriangleStripAdjacency = createEnumToken(
      'ConeGeometryView',
      'PrimitiveType',
      'TriangleStripAdjacency',
    );
    export const Patches = createEnumToken('ConeGeometryView', 'PrimitiveType', 'Patches');
  }
}
