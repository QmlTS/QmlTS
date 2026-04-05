// AUTO-GENERATED — DO NOT EDIT
// Type: Dithering
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface DitheringBuilder {
  id(id: string): DitheringBuilder;
  child(obj: QmlObjectBuilder): DitheringBuilder;

  enabled(value: boolean): DitheringBuilder;
  enabledBind(expr: string): DitheringBuilder;
  objectName(value: string): DitheringBuilder;
  objectNameBind(expr: string): DitheringBuilder;
  parent(value: QmlValue): DitheringBuilder;
  parentBind(expr: string): DitheringBuilder;
  onEnabledChanged(body: string): DitheringBuilder;
  onNodeDestroyed(body: string): DitheringBuilder;
  onObjectNameChanged(body: string): DitheringBuilder;
  onParentChanged(body: string): DitheringBuilder;
}

const DITHERING_META: TypeMetadata = {
  typeName: 'Dithering',
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

export function Dithering(): DitheringBuilder {
  return createFluentBuilder('Dithering', DITHERING_META) as unknown as DitheringBuilder;
}
