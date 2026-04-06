// AUTO-GENERATED — DO NOT EDIT
// Type: LerpClipBlend
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface LerpClipBlendBuilder {
  id(id: string): LerpClipBlendBuilder;
  child(obj: QmlObjectBuilder): LerpClipBlendBuilder;
  children(...objs: QmlObjectBuilder[]): LerpClipBlendBuilder;

  blendFactor(value: number): LerpClipBlendBuilder;
  blendFactorBind(expr: string): LerpClipBlendBuilder;
  enabled(value: boolean): LerpClipBlendBuilder;
  enabledBind(expr: string): LerpClipBlendBuilder;
  endClip(value: QmlValue): LerpClipBlendBuilder;
  endClipBind(expr: string): LerpClipBlendBuilder;
  objectName(value: string): LerpClipBlendBuilder;
  objectNameBind(expr: string): LerpClipBlendBuilder;
  parent(value: QmlValue): LerpClipBlendBuilder;
  parentBind(expr: string): LerpClipBlendBuilder;
  startClip(value: QmlValue): LerpClipBlendBuilder;
  startClipBind(expr: string): LerpClipBlendBuilder;
  onBlendFactorChanged(handler: DslSignalHandlerValue): LerpClipBlendBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): LerpClipBlendBuilder;
  onEndClipChanged(handler: DslSignalHandlerValue): LerpClipBlendBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): LerpClipBlendBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LerpClipBlendBuilder;
  onParentChanged(handler: DslSignalHandlerValue): LerpClipBlendBuilder;
  onStartClipChanged(handler: DslSignalHandlerValue): LerpClipBlendBuilder;
}

const LERPCLIPBLEND_META: TypeMetadata = {
  typeName: 'LerpClipBlend',
  properties: [
    { name: 'blendFactor', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'endClip', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'startClip', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBlendFactorChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEndClipChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onStartClipChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function LerpClipBlend(): LerpClipBlendBuilder {
  return createFluentBuilder(
    'LerpClipBlend',
    LERPCLIPBLEND_META,
  ) as unknown as LerpClipBlendBuilder;
}
