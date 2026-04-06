// AUTO-GENERATED — DO NOT EDIT
// Type: Viewport
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ViewportBuilder {
  id(id: string): ViewportBuilder;
  child(obj: QmlObjectBuilder): ViewportBuilder;
  children(...objs: QmlObjectBuilder[]): ViewportBuilder;

  enabled(value: boolean): ViewportBuilder;
  enabledBind(expr: string): ViewportBuilder;
  gamma(value: number): ViewportBuilder;
  gammaBind(expr: string): ViewportBuilder;
  normalizedRect(value: QmlRect): ViewportBuilder;
  normalizedRectBind(expr: string): ViewportBuilder;
  objectName(value: string): ViewportBuilder;
  objectNameBind(expr: string): ViewportBuilder;
  parent(value: QmlValue): ViewportBuilder;
  parentBind(expr: string): ViewportBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ViewportBuilder;
  onGammaChanged(handler: DslSignalHandlerValue): ViewportBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ViewportBuilder;
  onNormalizedRectChanged(handler: DslSignalHandlerValue): ViewportBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ViewportBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ViewportBuilder;
}

const VIEWPORT_META: TypeMetadata = {
  typeName: 'Viewport',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'gamma', hasValue: true, hasBinding: true },
    { name: 'normalizedRect', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onGammaChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onNormalizedRectChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Viewport(): ViewportBuilder {
  return createFluentBuilder('Viewport', VIEWPORT_META) as unknown as ViewportBuilder;
}
