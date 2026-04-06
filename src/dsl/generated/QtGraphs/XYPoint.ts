// AUTO-GENERATED — DO NOT EDIT
// Type: XYPoint
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface XYPointBuilder {
  id(id: string): XYPointBuilder;
  child(obj: QmlObjectBuilder): XYPointBuilder;
  children(...objs: QmlObjectBuilder[]): XYPointBuilder;

  objectName(value: string): XYPointBuilder;
  objectNameBind(expr: string): XYPointBuilder;
  x(value: number): XYPointBuilder;
  xBind(expr: string): XYPointBuilder;
  y(value: number): XYPointBuilder;
  yBind(expr: string): XYPointBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): XYPointBuilder;
}

const XYPOINT_META: TypeMetadata = {
  typeName: 'XYPoint',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
  ],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function XYPoint(): XYPointBuilder {
  return createFluentBuilder('XYPoint', XYPOINT_META) as unknown as XYPointBuilder;
}
