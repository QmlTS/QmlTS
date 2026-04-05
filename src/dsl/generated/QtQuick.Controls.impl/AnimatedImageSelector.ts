// AUTO-GENERATED — DO NOT EDIT
// Type: AnimatedImageSelector
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface AnimatedImageSelectorBuilder {
  id(id: string): AnimatedImageSelectorBuilder;
  child(obj: QmlObjectBuilder): AnimatedImageSelectorBuilder;

  cache(value: boolean): AnimatedImageSelectorBuilder;
  cacheBind(expr: string): AnimatedImageSelectorBuilder;
  name(value: string): AnimatedImageSelectorBuilder;
  nameBind(expr: string): AnimatedImageSelectorBuilder;
  objectName(value: string): AnimatedImageSelectorBuilder;
  objectNameBind(expr: string): AnimatedImageSelectorBuilder;
  path(value: string): AnimatedImageSelectorBuilder;
  pathBind(expr: string): AnimatedImageSelectorBuilder;
  separator(value: string): AnimatedImageSelectorBuilder;
  separatorBind(expr: string): AnimatedImageSelectorBuilder;
  states(value: QmlValue[]): AnimatedImageSelectorBuilder;
  statesBind(expr: string): AnimatedImageSelectorBuilder;
  onObjectNameChanged(body: string): AnimatedImageSelectorBuilder;
  onSourceChanged(body: string): AnimatedImageSelectorBuilder;
}

const ANIMATEDIMAGESELECTOR_META: TypeMetadata = {
  typeName: 'AnimatedImageSelector',
  properties: [
    { name: 'cache', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'path', hasValue: true, hasBinding: true },
    { name: 'separator', hasValue: true, hasBinding: true },
    { name: 'states', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function AnimatedImageSelector(): AnimatedImageSelectorBuilder {
  return createFluentBuilder(
    'AnimatedImageSelector',
    ANIMATEDIMAGESELECTOR_META,
  ) as unknown as AnimatedImageSelectorBuilder;
}
