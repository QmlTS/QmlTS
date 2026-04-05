// AUTO-GENERATED — DO NOT EDIT
// Type: RenderTargetSelector
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { RenderTargetBuilder } from './RenderTarget.js';
export interface RenderTargetSelectorBuilder {
  id(id: string): RenderTargetSelectorBuilder;
  child(obj: QmlObjectBuilder): RenderTargetSelectorBuilder;

  enabled(value: boolean): RenderTargetSelectorBuilder;
  enabledBind(expr: string): RenderTargetSelectorBuilder;
  objectName(value: string): RenderTargetSelectorBuilder;
  objectNameBind(expr: string): RenderTargetSelectorBuilder;
  parent(value: QmlValue): RenderTargetSelectorBuilder;
  parentBind(expr: string): RenderTargetSelectorBuilder;
  target(value: RenderTargetBuilder): RenderTargetSelectorBuilder;
  targetBind(expr: string): RenderTargetSelectorBuilder;
  onEnabledChanged(body: string): RenderTargetSelectorBuilder;
  onNodeDestroyed(body: string): RenderTargetSelectorBuilder;
  onObjectNameChanged(body: string): RenderTargetSelectorBuilder;
  onParentChanged(body: string): RenderTargetSelectorBuilder;
  onTargetChanged(body: string): RenderTargetSelectorBuilder;
}

const RENDERTARGETSELECTOR_META: TypeMetadata = {
  typeName: 'RenderTargetSelector',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function RenderTargetSelector(): RenderTargetSelectorBuilder {
  return createFluentBuilder('RenderTargetSelector', RENDERTARGETSELECTOR_META) as unknown as RenderTargetSelectorBuilder;
}
