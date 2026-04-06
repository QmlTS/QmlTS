// AUTO-GENERATED — DO NOT EDIT
// Type: FrustumCulling
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface FrustumCullingBuilder {
  id(id: string): FrustumCullingBuilder;
  child(obj: QmlObjectBuilder): FrustumCullingBuilder;
  children(...objs: QmlObjectBuilder[]): FrustumCullingBuilder;

  enabled(value: boolean): FrustumCullingBuilder;
  enabledBind(expr: string): FrustumCullingBuilder;
  objectName(value: string): FrustumCullingBuilder;
  objectNameBind(expr: string): FrustumCullingBuilder;
  parent(value: QmlValue): FrustumCullingBuilder;
  parentBind(expr: string): FrustumCullingBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FrustumCullingBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): FrustumCullingBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FrustumCullingBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FrustumCullingBuilder;
}

const FRUSTUMCULLING_META: TypeMetadata = {
  typeName: 'FrustumCulling',
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

export function FrustumCulling(): FrustumCullingBuilder {
  return createFluentBuilder(
    'FrustumCulling',
    FRUSTUMCULLING_META,
  ) as unknown as FrustumCullingBuilder;
}
