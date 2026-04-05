// AUTO-GENERATED — DO NOT EDIT
// Type: ResourceLoader
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ResourceLoaderBuilder {
  id(id: string): ResourceLoaderBuilder;
  child(obj: QmlObjectBuilder): ResourceLoaderBuilder;

  meshSources(value: QmlUrl): ResourceLoaderBuilder;
  meshSourcesBind(expr: string): ResourceLoaderBuilder;
  objectName(value: string): ResourceLoaderBuilder;
  objectNameBind(expr: string): ResourceLoaderBuilder;
  parent(value: QmlValue): ResourceLoaderBuilder;
  parentBind(expr: string): ResourceLoaderBuilder;
  state(value: string): ResourceLoaderBuilder;
  stateBind(expr: string): ResourceLoaderBuilder;
  onChildrenChanged(body: string): ResourceLoaderBuilder;
  onMeshSourcesChanged(body: string): ResourceLoaderBuilder;
  onObjectNameChanged(body: string): ResourceLoaderBuilder;
  onParentChanged(body: string): ResourceLoaderBuilder;
  onStateChanged(body: string): ResourceLoaderBuilder;
}

const RESOURCELOADER_META: TypeMetadata = {
  typeName: 'ResourceLoader',
  properties: [
    { name: 'meshSources', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onMeshSourcesChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function ResourceLoader(): ResourceLoaderBuilder {
  return createFluentBuilder('ResourceLoader', RESOURCELOADER_META) as unknown as ResourceLoaderBuilder;
}
