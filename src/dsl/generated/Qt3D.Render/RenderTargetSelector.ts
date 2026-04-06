// AUTO-GENERATED — DO NOT EDIT
// Type: RenderTargetSelector
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { RenderTargetBuilder } from './RenderTarget.js';
export interface RenderTargetSelectorBuilder {
  id(id: string): RenderTargetSelectorBuilder;
  child(obj: QmlObjectBuilder): RenderTargetSelectorBuilder;
  children(...objs: QmlObjectBuilder[]): RenderTargetSelectorBuilder;

  enabled(value: boolean): RenderTargetSelectorBuilder;
  enabledBind(expr: string): RenderTargetSelectorBuilder;
  objectName(value: string): RenderTargetSelectorBuilder;
  objectNameBind(expr: string): RenderTargetSelectorBuilder;
  parent(value: QmlValue): RenderTargetSelectorBuilder;
  parentBind(expr: string): RenderTargetSelectorBuilder;
  target(value: RenderTargetBuilder): RenderTargetSelectorBuilder;
  targetBind(expr: string): RenderTargetSelectorBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): RenderTargetSelectorBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): RenderTargetSelectorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderTargetSelectorBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RenderTargetSelectorBuilder;
  onTargetChanged(handler: DslSignalHandlerValue): RenderTargetSelectorBuilder;
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
  grouped: [],
  attached: [],
};

export function RenderTargetSelector(): RenderTargetSelectorBuilder {
  return createFluentBuilder(
    'RenderTargetSelector',
    RENDERTARGETSELECTOR_META,
  ) as unknown as RenderTargetSelectorBuilder;
}
