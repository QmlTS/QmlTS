// AUTO-GENERATED — DO NOT EDIT
// Type: ColorGradientStop
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ColorGradientStopBuilder {
  id(id: string): ColorGradientStopBuilder;
  child(obj: QmlObjectBuilder): ColorGradientStopBuilder;

  color(value: QmlColor): ColorGradientStopBuilder;
  colorBind(expr: string): ColorGradientStopBuilder;
  objectName(value: string): ColorGradientStopBuilder;
  objectNameBind(expr: string): ColorGradientStopBuilder;
  position(value: number): ColorGradientStopBuilder;
  positionBind(expr: string): ColorGradientStopBuilder;
  onColorChanged(body: string): ColorGradientStopBuilder;
  onObjectNameChanged(body: string): ColorGradientStopBuilder;
  onPositionChanged(body: string): ColorGradientStopBuilder;
}

const COLORGRADIENTSTOP_META: TypeMetadata = {
  typeName: 'ColorGradientStop',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ColorGradientStop(): ColorGradientStopBuilder {
  return createFluentBuilder(
    'ColorGradientStop',
    COLORGRADIENTSTOP_META,
  ) as unknown as ColorGradientStopBuilder;
}
