// AUTO-GENERATED — DO NOT EDIT
// Type: ColorGradient
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ColorGradientBuilder {
  id(id: string): ColorGradientBuilder;
  child(obj: QmlObjectBuilder): ColorGradientBuilder;
  children(...objs: QmlObjectBuilder[]): ColorGradientBuilder;

  objectName(value: string): ColorGradientBuilder;
  objectNameBind(expr: string): ColorGradientBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ColorGradientBuilder;
  onUpdated(handler: DslSignalHandlerValue): ColorGradientBuilder;
}

const COLORGRADIENT_META: TypeMetadata = {
  typeName: 'ColorGradient',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onUpdated', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'stops',
};

export function ColorGradient(): ColorGradientBuilder {
  return createFluentBuilder(
    'ColorGradient',
    COLORGRADIENT_META,
  ) as unknown as ColorGradientBuilder;
}
