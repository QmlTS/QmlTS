// AUTO-GENERATED — DO NOT EDIT
// Type: BakedLightmap
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface BakedLightmapBuilder {
  id(id: string): BakedLightmapBuilder;
  child(obj: QmlObjectBuilder): BakedLightmapBuilder;

  enabled(value: boolean): BakedLightmapBuilder;
  enabledBind(expr: string): BakedLightmapBuilder;
  key(value: string): BakedLightmapBuilder;
  keyBind(expr: string): BakedLightmapBuilder;
  loadPrefix(value: string): BakedLightmapBuilder;
  loadPrefixBind(expr: string): BakedLightmapBuilder;
  objectName(value: string): BakedLightmapBuilder;
  objectNameBind(expr: string): BakedLightmapBuilder;
  onChanged(body: string): BakedLightmapBuilder;
  onEnabledChanged(body: string): BakedLightmapBuilder;
  onKeyChanged(body: string): BakedLightmapBuilder;
  onLoadPrefixChanged(body: string): BakedLightmapBuilder;
  onObjectNameChanged(body: string): BakedLightmapBuilder;
}

const BAKEDLIGHTMAP_META: TypeMetadata = {
  typeName: 'BakedLightmap',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'key', hasValue: true, hasBinding: true },
    { name: 'loadPrefix', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onKeyChanged', paramCount: 0 },
    { handlerName: 'onLoadPrefixChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function BakedLightmap(): BakedLightmapBuilder {
  return createFluentBuilder('BakedLightmap', BAKEDLIGHTMAP_META) as unknown as BakedLightmapBuilder;
}
