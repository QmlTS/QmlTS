// AUTO-GENERATED — DO NOT EDIT
// Type: SimpleQuadRenderer
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { TextureBuilder } from '../QtQuick3D/Texture.js';
export interface SimpleQuadRendererBuilder {
  id(id: string): SimpleQuadRendererBuilder;
  child(obj: QmlObjectBuilder): SimpleQuadRendererBuilder;

  objectName(value: string): SimpleQuadRendererBuilder;
  objectNameBind(expr: string): SimpleQuadRendererBuilder;
  parent(value: QmlValue): SimpleQuadRendererBuilder;
  parentBind(expr: string): SimpleQuadRendererBuilder;
  state(value: string): SimpleQuadRendererBuilder;
  stateBind(expr: string): SimpleQuadRendererBuilder;
  texture(value: TextureBuilder): SimpleQuadRendererBuilder;
  textureBind(expr: string): SimpleQuadRendererBuilder;
  onChildrenChanged(body: string): SimpleQuadRendererBuilder;
  onObjectNameChanged(body: string): SimpleQuadRendererBuilder;
  onParentChanged(body: string): SimpleQuadRendererBuilder;
  onStateChanged(body: string): SimpleQuadRendererBuilder;
  onTextureChanged(body: string): SimpleQuadRendererBuilder;
}

const SIMPLEQUADRENDERER_META: TypeMetadata = {
  typeName: 'SimpleQuadRenderer',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onTextureChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function SimpleQuadRenderer(): SimpleQuadRendererBuilder {
  return createFluentBuilder('SimpleQuadRenderer', SIMPLEQUADRENDERER_META) as unknown as SimpleQuadRendererBuilder;
}
