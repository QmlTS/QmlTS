// AUTO-GENERATED — DO NOT EDIT
// Type: FrameGraphNode
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface FrameGraphNodeBuilder {
  id(id: string): FrameGraphNodeBuilder;
  child(obj: QmlObjectBuilder): FrameGraphNodeBuilder;

  enabled(value: boolean): FrameGraphNodeBuilder;
  enabledBind(expr: string): FrameGraphNodeBuilder;
  objectName(value: string): FrameGraphNodeBuilder;
  objectNameBind(expr: string): FrameGraphNodeBuilder;
  parent(value: QmlValue): FrameGraphNodeBuilder;
  parentBind(expr: string): FrameGraphNodeBuilder;
  onEnabledChanged(body: string): FrameGraphNodeBuilder;
  onNodeDestroyed(body: string): FrameGraphNodeBuilder;
  onObjectNameChanged(body: string): FrameGraphNodeBuilder;
  onParentChanged(body: string): FrameGraphNodeBuilder;
}

const FRAMEGRAPHNODE_META: TypeMetadata = {
  typeName: 'FrameGraphNode',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function FrameGraphNode(): FrameGraphNodeBuilder {
  return createFluentBuilder('FrameGraphNode', FRAMEGRAPHNODE_META) as unknown as FrameGraphNodeBuilder;
}
