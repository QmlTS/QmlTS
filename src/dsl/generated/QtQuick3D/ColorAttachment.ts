// AUTO-GENERATED — DO NOT EDIT
// Type: ColorAttachment
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { RenderPassTextureBuilder } from './RenderPassTexture.js';
export interface ColorAttachmentBuilder {
  id(id: string): ColorAttachmentBuilder;
  child(obj: QmlObjectBuilder): ColorAttachmentBuilder;

  name(value: string): ColorAttachmentBuilder;
  nameBind(expr: string): ColorAttachmentBuilder;
  objectName(value: string): ColorAttachmentBuilder;
  objectNameBind(expr: string): ColorAttachmentBuilder;
  parent(value: QmlValue): ColorAttachmentBuilder;
  parentBind(expr: string): ColorAttachmentBuilder;
  state(value: string): ColorAttachmentBuilder;
  stateBind(expr: string): ColorAttachmentBuilder;
  target(value: RenderPassTextureBuilder): ColorAttachmentBuilder;
  targetBind(expr: string): ColorAttachmentBuilder;
  onChildrenChanged(body: string): ColorAttachmentBuilder;
  onObjectNameChanged(body: string): ColorAttachmentBuilder;
  onParentChanged(body: string): ColorAttachmentBuilder;
  onStateChanged(body: string): ColorAttachmentBuilder;
}

const COLORATTACHMENT_META: TypeMetadata = {
  typeName: 'ColorAttachment',
  properties: [
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ColorAttachment(): ColorAttachmentBuilder {
  return createFluentBuilder(
    'ColorAttachment',
    COLORATTACHMENT_META,
  ) as unknown as ColorAttachmentBuilder;
}
