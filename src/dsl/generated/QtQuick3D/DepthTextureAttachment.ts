// AUTO-GENERATED — DO NOT EDIT
// Type: DepthTextureAttachment
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { RenderPassTextureBuilder } from './RenderPassTexture.js';
export interface DepthTextureAttachmentBuilder {
  id(id: string): DepthTextureAttachmentBuilder;
  child(obj: QmlObjectBuilder): DepthTextureAttachmentBuilder;

  objectName(value: string): DepthTextureAttachmentBuilder;
  objectNameBind(expr: string): DepthTextureAttachmentBuilder;
  parent(value: QmlValue): DepthTextureAttachmentBuilder;
  parentBind(expr: string): DepthTextureAttachmentBuilder;
  state(value: string): DepthTextureAttachmentBuilder;
  stateBind(expr: string): DepthTextureAttachmentBuilder;
  target(value: RenderPassTextureBuilder): DepthTextureAttachmentBuilder;
  targetBind(expr: string): DepthTextureAttachmentBuilder;
  onChildrenChanged(body: string): DepthTextureAttachmentBuilder;
  onObjectNameChanged(body: string): DepthTextureAttachmentBuilder;
  onParentChanged(body: string): DepthTextureAttachmentBuilder;
  onStateChanged(body: string): DepthTextureAttachmentBuilder;
}

const DEPTHTEXTUREATTACHMENT_META: TypeMetadata = {
  typeName: 'DepthTextureAttachment',
  properties: [
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

export function DepthTextureAttachment(): DepthTextureAttachmentBuilder {
  return createFluentBuilder(
    'DepthTextureAttachment',
    DEPTHTEXTUREATTACHMENT_META,
  ) as unknown as DepthTextureAttachmentBuilder;
}
