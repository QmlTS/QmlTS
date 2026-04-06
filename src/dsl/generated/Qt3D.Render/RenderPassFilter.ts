// AUTO-GENERATED — DO NOT EDIT
// Type: RenderPassFilter
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface RenderPassFilterBuilder {
  id(id: string): RenderPassFilterBuilder;
  child(obj: QmlObjectBuilder): RenderPassFilterBuilder;
  children(...objs: QmlObjectBuilder[]): RenderPassFilterBuilder;

  enabled(value: boolean): RenderPassFilterBuilder;
  enabledBind(expr: string): RenderPassFilterBuilder;
  objectName(value: string): RenderPassFilterBuilder;
  objectNameBind(expr: string): RenderPassFilterBuilder;
  parent(value: QmlValue): RenderPassFilterBuilder;
  parentBind(expr: string): RenderPassFilterBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): RenderPassFilterBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): RenderPassFilterBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderPassFilterBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RenderPassFilterBuilder;
}

const RENDERPASSFILTER_META: TypeMetadata = {
  typeName: 'RenderPassFilter',
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
  grouped: [],
  attached: [],
};

export function RenderPassFilter(): RenderPassFilterBuilder {
  return createFluentBuilder(
    'RenderPassFilter',
    RENDERPASSFILTER_META,
  ) as unknown as RenderPassFilterBuilder;
}
