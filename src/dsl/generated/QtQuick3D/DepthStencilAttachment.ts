// AUTO-GENERATED — DO NOT EDIT
// Type: DepthStencilAttachment
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface DepthStencilAttachmentBuilder {
  id(id: string): DepthStencilAttachmentBuilder;
  child(obj: QmlObjectBuilder): DepthStencilAttachmentBuilder;
  children(...objs: QmlObjectBuilder[]): DepthStencilAttachmentBuilder;

  objectName(value: string): DepthStencilAttachmentBuilder;
  objectNameBind(expr: string): DepthStencilAttachmentBuilder;
  parent(value: QmlValue): DepthStencilAttachmentBuilder;
  parentBind(expr: string): DepthStencilAttachmentBuilder;
  state(value: string): DepthStencilAttachmentBuilder;
  stateBind(expr: string): DepthStencilAttachmentBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): DepthStencilAttachmentBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DepthStencilAttachmentBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DepthStencilAttachmentBuilder;
  onStateChanged(handler: DslSignalHandlerValue): DepthStencilAttachmentBuilder;
}

const DEPTHSTENCILATTACHMENT_META: TypeMetadata = {
  typeName: 'DepthStencilAttachment',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
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

export function DepthStencilAttachment(): DepthStencilAttachmentBuilder {
  return createFluentBuilder(
    'DepthStencilAttachment',
    DEPTHSTENCILATTACHMENT_META,
  ) as unknown as DepthStencilAttachmentBuilder;
}
