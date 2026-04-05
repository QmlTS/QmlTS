// AUTO-GENERATED — DO NOT EDIT
// Type: LightmapMesh
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface LightmapMeshBuilder {
  id(id: string): LightmapMeshBuilder;
  child(obj: QmlObjectBuilder): LightmapMeshBuilder;

  key(value: string): LightmapMeshBuilder;
  keyBind(expr: string): LightmapMeshBuilder;
  objectName(value: string): LightmapMeshBuilder;
  objectNameBind(expr: string): LightmapMeshBuilder;
  parent(value: QmlValue): LightmapMeshBuilder;
  parentBind(expr: string): LightmapMeshBuilder;
  source(value: QmlUrl): LightmapMeshBuilder;
  sourceBind(expr: string): LightmapMeshBuilder;
  state(value: string): LightmapMeshBuilder;
  stateBind(expr: string): LightmapMeshBuilder;
  onBoundsChanged(body: string): LightmapMeshBuilder;
  onChildrenChanged(body: string): LightmapMeshBuilder;
  onGeometryChanged(body: string): LightmapMeshBuilder;
  onGeometryNodeDirty(body: string): LightmapMeshBuilder;
  onKeyChanged(body: string): LightmapMeshBuilder;
  onObjectNameChanged(body: string): LightmapMeshBuilder;
  onParentChanged(body: string): LightmapMeshBuilder;
  onSourceChanged(body: string): LightmapMeshBuilder;
  onStateChanged(body: string): LightmapMeshBuilder;
}

const LIGHTMAPMESH_META: TypeMetadata = {
  typeName: 'LightmapMesh',
  properties: [
    { name: 'key', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundsChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onKeyChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function LightmapMesh(): LightmapMeshBuilder {
  return createFluentBuilder('LightmapMesh', LIGHTMAPMESH_META) as unknown as LightmapMeshBuilder;
}
