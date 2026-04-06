// AUTO-GENERATED — DO NOT EDIT
// Type: AdditiveClipBlend
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface AdditiveClipBlendBuilder {
  id(id: string): AdditiveClipBlendBuilder;
  child(obj: QmlObjectBuilder): AdditiveClipBlendBuilder;
  children(...objs: QmlObjectBuilder[]): AdditiveClipBlendBuilder;

  additiveClip(value: QmlValue): AdditiveClipBlendBuilder;
  additiveClipBind(expr: string): AdditiveClipBlendBuilder;
  additiveFactor(value: number): AdditiveClipBlendBuilder;
  additiveFactorBind(expr: string): AdditiveClipBlendBuilder;
  baseClip(value: QmlValue): AdditiveClipBlendBuilder;
  baseClipBind(expr: string): AdditiveClipBlendBuilder;
  enabled(value: boolean): AdditiveClipBlendBuilder;
  enabledBind(expr: string): AdditiveClipBlendBuilder;
  objectName(value: string): AdditiveClipBlendBuilder;
  objectNameBind(expr: string): AdditiveClipBlendBuilder;
  parent(value: QmlValue): AdditiveClipBlendBuilder;
  parentBind(expr: string): AdditiveClipBlendBuilder;
  onAdditiveClipChanged(handler: DslSignalHandlerValue): AdditiveClipBlendBuilder;
  onAdditiveFactorChanged(handler: DslSignalHandlerValue): AdditiveClipBlendBuilder;
  onBaseClipChanged(handler: DslSignalHandlerValue): AdditiveClipBlendBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): AdditiveClipBlendBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): AdditiveClipBlendBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AdditiveClipBlendBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AdditiveClipBlendBuilder;
}

const ADDITIVECLIPBLEND_META: TypeMetadata = {
  typeName: 'AdditiveClipBlend',
  properties: [
    { name: 'additiveClip', hasValue: true, hasBinding: true },
    { name: 'additiveFactor', hasValue: true, hasBinding: true },
    { name: 'baseClip', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAdditiveClipChanged', paramCount: 1 },
    { handlerName: 'onAdditiveFactorChanged', paramCount: 1 },
    { handlerName: 'onBaseClipChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AdditiveClipBlend(): AdditiveClipBlendBuilder {
  return createFluentBuilder(
    'AdditiveClipBlend',
    ADDITIVECLIPBLEND_META,
  ) as unknown as AdditiveClipBlendBuilder;
}
