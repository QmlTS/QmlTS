// AUTO-GENERATED — DO NOT EDIT
// Type: MultiSampleAntiAliasing
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface MultiSampleAntiAliasingBuilder {
  id(id: string): MultiSampleAntiAliasingBuilder;
  child(obj: QmlObjectBuilder): MultiSampleAntiAliasingBuilder;

  enabled(value: boolean): MultiSampleAntiAliasingBuilder;
  enabledBind(expr: string): MultiSampleAntiAliasingBuilder;
  objectName(value: string): MultiSampleAntiAliasingBuilder;
  objectNameBind(expr: string): MultiSampleAntiAliasingBuilder;
  parent(value: QmlValue): MultiSampleAntiAliasingBuilder;
  parentBind(expr: string): MultiSampleAntiAliasingBuilder;
  onEnabledChanged(body: string): MultiSampleAntiAliasingBuilder;
  onNodeDestroyed(body: string): MultiSampleAntiAliasingBuilder;
  onObjectNameChanged(body: string): MultiSampleAntiAliasingBuilder;
  onParentChanged(body: string): MultiSampleAntiAliasingBuilder;
}

const MULTISAMPLEANTIALIASING_META: TypeMetadata = {
  typeName: 'MultiSampleAntiAliasing',
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

export function MultiSampleAntiAliasing(): MultiSampleAntiAliasingBuilder {
  return createFluentBuilder(
    'MultiSampleAntiAliasing',
    MULTISAMPLEANTIALIASING_META,
  ) as unknown as MultiSampleAntiAliasingBuilder;
}
