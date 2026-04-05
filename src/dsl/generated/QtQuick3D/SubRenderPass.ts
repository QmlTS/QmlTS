// AUTO-GENERATED — DO NOT EDIT
// Type: SubRenderPass
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { RenderPassBuilder } from './RenderPass.js';
export interface SubRenderPassBuilder {
  id(id: string): SubRenderPassBuilder;
  child(obj: QmlObjectBuilder): SubRenderPassBuilder;

  objectName(value: string): SubRenderPassBuilder;
  objectNameBind(expr: string): SubRenderPassBuilder;
  parent(value: QmlValue): SubRenderPassBuilder;
  parentBind(expr: string): SubRenderPassBuilder;
  renderPass(value: RenderPassBuilder): SubRenderPassBuilder;
  renderPassBind(expr: string): SubRenderPassBuilder;
  state(value: string): SubRenderPassBuilder;
  stateBind(expr: string): SubRenderPassBuilder;
  onChildrenChanged(body: string): SubRenderPassBuilder;
  onObjectNameChanged(body: string): SubRenderPassBuilder;
  onParentChanged(body: string): SubRenderPassBuilder;
  onRenderPassChanged(body: string): SubRenderPassBuilder;
  onStateChanged(body: string): SubRenderPassBuilder;
}

const SUBRENDERPASS_META: TypeMetadata = {
  typeName: 'SubRenderPass',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderPass', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onRenderPassChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SubRenderPass(): SubRenderPassBuilder {
  return createFluentBuilder(
    'SubRenderPass',
    SUBRENDERPASS_META,
  ) as unknown as SubRenderPassBuilder;
}
