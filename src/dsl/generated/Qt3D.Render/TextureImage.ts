// AUTO-GENERATED — DO NOT EDIT
// Type: TextureImage
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TextureImageBuilder {
  id(id: string): TextureImageBuilder;
  child(obj: QmlObjectBuilder): TextureImageBuilder;

  enabled(value: boolean): TextureImageBuilder;
  enabledBind(expr: string): TextureImageBuilder;
  face(value: QmlEnumToken): TextureImageBuilder;
  faceBind(expr: string): TextureImageBuilder;
  layer(value: number): TextureImageBuilder;
  layerBind(expr: string): TextureImageBuilder;
  mipLevel(value: number): TextureImageBuilder;
  mipLevelBind(expr: string): TextureImageBuilder;
  mirrored(value: boolean): TextureImageBuilder;
  mirroredBind(expr: string): TextureImageBuilder;
  objectName(value: string): TextureImageBuilder;
  objectNameBind(expr: string): TextureImageBuilder;
  parent(value: QmlValue): TextureImageBuilder;
  parentBind(expr: string): TextureImageBuilder;
  source(value: QmlUrl): TextureImageBuilder;
  sourceBind(expr: string): TextureImageBuilder;
  onEnabledChanged(body: string): TextureImageBuilder;
  onFaceChanged(body: string): TextureImageBuilder;
  onLayerChanged(body: string): TextureImageBuilder;
  onMipLevelChanged(body: string): TextureImageBuilder;
  onMirroredChanged(body: string): TextureImageBuilder;
  onNodeDestroyed(body: string): TextureImageBuilder;
  onObjectNameChanged(body: string): TextureImageBuilder;
  onParentChanged(body: string): TextureImageBuilder;
  onSourceChanged(body: string): TextureImageBuilder;
  onStatusChanged(body: string): TextureImageBuilder;
}

const TEXTUREIMAGE_META: TypeMetadata = {
  typeName: 'TextureImage',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'face', hasValue: true, hasBinding: true },
    { name: 'layer', hasValue: true, hasBinding: true },
    { name: 'mipLevel', hasValue: true, hasBinding: true },
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFaceChanged', paramCount: 1 },
    { handlerName: 'onLayerChanged', paramCount: 1 },
    { handlerName: 'onMipLevelChanged', paramCount: 1 },
    { handlerName: 'onMirroredChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function TextureImage(): TextureImageBuilder {
  return createFluentBuilder('TextureImage', TEXTUREIMAGE_META) as unknown as TextureImageBuilder;
}

export namespace TextureImage {
  export namespace Status {
    export const None = createEnumToken('TextureImage', 'Status', 'None');
    export const Loading = createEnumToken('TextureImage', 'Status', 'Loading');
    export const Ready = createEnumToken('TextureImage', 'Status', 'Ready');
    export const Error = createEnumToken('TextureImage', 'Status', 'Error');
  }
}
