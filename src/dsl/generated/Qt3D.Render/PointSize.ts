// AUTO-GENERATED — DO NOT EDIT
// Type: PointSize
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface PointSizeBuilder {
  id(id: string): PointSizeBuilder;
  child(obj: QmlObjectBuilder): PointSizeBuilder;

  enabled(value: boolean): PointSizeBuilder;
  enabledBind(expr: string): PointSizeBuilder;
  objectName(value: string): PointSizeBuilder;
  objectNameBind(expr: string): PointSizeBuilder;
  parent(value: QmlValue): PointSizeBuilder;
  parentBind(expr: string): PointSizeBuilder;
  sizeMode(value: QmlEnumToken): PointSizeBuilder;
  sizeModeBind(expr: string): PointSizeBuilder;
  value(value: number): PointSizeBuilder;
  valueBind(expr: string): PointSizeBuilder;
  onEnabledChanged(body: string): PointSizeBuilder;
  onNodeDestroyed(body: string): PointSizeBuilder;
  onObjectNameChanged(body: string): PointSizeBuilder;
  onParentChanged(body: string): PointSizeBuilder;
  onSizeModeChanged(body: string): PointSizeBuilder;
  onValueChanged(body: string): PointSizeBuilder;
}

const POINTSIZE_META: TypeMetadata = {
  typeName: 'PointSize',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sizeMode', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSizeModeChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PointSize(): PointSizeBuilder {
  return createFluentBuilder('PointSize', POINTSIZE_META) as unknown as PointSizeBuilder;
}

export namespace PointSize {
  export namespace SizeMode {
    export const Fixed = createEnumToken('PointSize', 'SizeMode', 'Fixed');
    export const Programmable = createEnumToken('PointSize', 'SizeMode', 'Programmable');
  }
}
