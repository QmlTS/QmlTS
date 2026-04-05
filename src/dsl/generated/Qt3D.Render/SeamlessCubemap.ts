// AUTO-GENERATED — DO NOT EDIT
// Type: SeamlessCubemap
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface SeamlessCubemapBuilder {
  id(id: string): SeamlessCubemapBuilder;
  child(obj: QmlObjectBuilder): SeamlessCubemapBuilder;

  enabled(value: boolean): SeamlessCubemapBuilder;
  enabledBind(expr: string): SeamlessCubemapBuilder;
  objectName(value: string): SeamlessCubemapBuilder;
  objectNameBind(expr: string): SeamlessCubemapBuilder;
  parent(value: QmlValue): SeamlessCubemapBuilder;
  parentBind(expr: string): SeamlessCubemapBuilder;
  onEnabledChanged(body: string): SeamlessCubemapBuilder;
  onNodeDestroyed(body: string): SeamlessCubemapBuilder;
  onObjectNameChanged(body: string): SeamlessCubemapBuilder;
  onParentChanged(body: string): SeamlessCubemapBuilder;
}

const SEAMLESSCUBEMAP_META: TypeMetadata = {
  typeName: 'SeamlessCubemap',
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

export function SeamlessCubemap(): SeamlessCubemapBuilder {
  return createFluentBuilder('SeamlessCubemap', SEAMLESSCUBEMAP_META) as unknown as SeamlessCubemapBuilder;
}
