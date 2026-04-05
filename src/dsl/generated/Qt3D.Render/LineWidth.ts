// AUTO-GENERATED — DO NOT EDIT
// Type: LineWidth
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface LineWidthBuilder {
  id(id: string): LineWidthBuilder;
  child(obj: QmlObjectBuilder): LineWidthBuilder;

  enabled(value: boolean): LineWidthBuilder;
  enabledBind(expr: string): LineWidthBuilder;
  objectName(value: string): LineWidthBuilder;
  objectNameBind(expr: string): LineWidthBuilder;
  parent(value: QmlValue): LineWidthBuilder;
  parentBind(expr: string): LineWidthBuilder;
  smooth(value: boolean): LineWidthBuilder;
  smoothBind(expr: string): LineWidthBuilder;
  value(value: number): LineWidthBuilder;
  valueBind(expr: string): LineWidthBuilder;
  onEnabledChanged(body: string): LineWidthBuilder;
  onNodeDestroyed(body: string): LineWidthBuilder;
  onObjectNameChanged(body: string): LineWidthBuilder;
  onParentChanged(body: string): LineWidthBuilder;
  onSmoothChanged(body: string): LineWidthBuilder;
  onValueChanged(body: string): LineWidthBuilder;
}

const LINEWIDTH_META: TypeMetadata = {
  typeName: 'LineWidth',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function LineWidth(): LineWidthBuilder {
  return createFluentBuilder('LineWidth', LINEWIDTH_META) as unknown as LineWidthBuilder;
}
