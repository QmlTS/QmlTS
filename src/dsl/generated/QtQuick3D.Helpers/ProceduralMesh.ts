// AUTO-GENERATED — DO NOT EDIT
// Type: ProceduralMesh
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  QmlVector2d,
  QmlVector3d,
  QmlVector4d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ProceduralMeshBuilder {
  id(id: string): ProceduralMeshBuilder;
  child(obj: QmlObjectBuilder): ProceduralMeshBuilder;

  binormals(value: QmlVector3d): ProceduralMeshBuilder;
  binormalsBind(expr: string): ProceduralMeshBuilder;
  colors(value: QmlVector4d): ProceduralMeshBuilder;
  colorsBind(expr: string): ProceduralMeshBuilder;
  indexes(value: number): ProceduralMeshBuilder;
  indexesBind(expr: string): ProceduralMeshBuilder;
  joints(value: QmlVector4d): ProceduralMeshBuilder;
  jointsBind(expr: string): ProceduralMeshBuilder;
  normals(value: QmlVector3d): ProceduralMeshBuilder;
  normalsBind(expr: string): ProceduralMeshBuilder;
  objectName(value: string): ProceduralMeshBuilder;
  objectNameBind(expr: string): ProceduralMeshBuilder;
  parent(value: QmlValue): ProceduralMeshBuilder;
  parentBind(expr: string): ProceduralMeshBuilder;
  positions(value: QmlVector3d): ProceduralMeshBuilder;
  positionsBind(expr: string): ProceduralMeshBuilder;
  primitiveMode(value: QmlEnumToken): ProceduralMeshBuilder;
  primitiveModeBind(expr: string): ProceduralMeshBuilder;
  state(value: string): ProceduralMeshBuilder;
  stateBind(expr: string): ProceduralMeshBuilder;
  tangents(value: QmlVector3d): ProceduralMeshBuilder;
  tangentsBind(expr: string): ProceduralMeshBuilder;
  uv0s(value: QmlVector2d): ProceduralMeshBuilder;
  uv0sBind(expr: string): ProceduralMeshBuilder;
  uv1s(value: QmlVector2d): ProceduralMeshBuilder;
  uv1sBind(expr: string): ProceduralMeshBuilder;
  weights(value: QmlVector4d): ProceduralMeshBuilder;
  weightsBind(expr: string): ProceduralMeshBuilder;
  onBinormalsChanged(body: string): ProceduralMeshBuilder;
  onChildrenChanged(body: string): ProceduralMeshBuilder;
  onColorsChanged(body: string): ProceduralMeshBuilder;
  onGeometryChanged(body: string): ProceduralMeshBuilder;
  onGeometryNodeDirty(body: string): ProceduralMeshBuilder;
  onIndexesChanged(body: string): ProceduralMeshBuilder;
  onJointsChanged(body: string): ProceduralMeshBuilder;
  onNormalsChanged(body: string): ProceduralMeshBuilder;
  onObjectNameChanged(body: string): ProceduralMeshBuilder;
  onParentChanged(body: string): ProceduralMeshBuilder;
  onPositionsChanged(body: string): ProceduralMeshBuilder;
  onPrimitiveModeChanged(body: string): ProceduralMeshBuilder;
  onStateChanged(body: string): ProceduralMeshBuilder;
  onTangentsChanged(body: string): ProceduralMeshBuilder;
  onUv0sChanged(body: string): ProceduralMeshBuilder;
  onUv1sChanged(body: string): ProceduralMeshBuilder;
  onWeightsChanged(body: string): ProceduralMeshBuilder;
}

const PROCEDURALMESH_META: TypeMetadata = {
  typeName: 'ProceduralMesh',
  properties: [
    { name: 'binormals', hasValue: true, hasBinding: true },
    { name: 'colors', hasValue: true, hasBinding: true },
    { name: 'indexes', hasValue: true, hasBinding: true },
    { name: 'joints', hasValue: true, hasBinding: true },
    { name: 'normals', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'positions', hasValue: true, hasBinding: true },
    { name: 'primitiveMode', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'tangents', hasValue: true, hasBinding: true },
    { name: 'uv0s', hasValue: true, hasBinding: true },
    { name: 'uv1s', hasValue: true, hasBinding: true },
    { name: 'weights', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBinormalsChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorsChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onIndexesChanged', paramCount: 0 },
    { handlerName: 'onJointsChanged', paramCount: 0 },
    { handlerName: 'onNormalsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPositionsChanged', paramCount: 0 },
    { handlerName: 'onPrimitiveModeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onTangentsChanged', paramCount: 0 },
    { handlerName: 'onUv0sChanged', paramCount: 0 },
    { handlerName: 'onUv1sChanged', paramCount: 0 },
    { handlerName: 'onWeightsChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ProceduralMesh(): ProceduralMeshBuilder {
  return createFluentBuilder(
    'ProceduralMesh',
    PROCEDURALMESH_META,
  ) as unknown as ProceduralMeshBuilder;
}

export namespace ProceduralMesh {
  export namespace PrimitiveMode {
    export const Points = createEnumToken('ProceduralMesh', 'PrimitiveMode', 'Points');
    export const LineStrip = createEnumToken('ProceduralMesh', 'PrimitiveMode', 'LineStrip');
    export const Lines = createEnumToken('ProceduralMesh', 'PrimitiveMode', 'Lines');
    export const TriangleStrip = createEnumToken(
      'ProceduralMesh',
      'PrimitiveMode',
      'TriangleStrip',
    );
    export const TriangleFan = createEnumToken('ProceduralMesh', 'PrimitiveMode', 'TriangleFan');
    export const Triangles = createEnumToken('ProceduralMesh', 'PrimitiveMode', 'Triangles');
  }
}
