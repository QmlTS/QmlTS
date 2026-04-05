// AUTO-GENERATED — DO NOT EDIT
// Type: BarSet
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface BarSetBuilder {
  id(id: string): BarSetBuilder;
  child(obj: QmlObjectBuilder): BarSetBuilder;

  borderColor(value: QmlColor): BarSetBuilder;
  borderColorBind(expr: string): BarSetBuilder;
  borderWidth(value: number): BarSetBuilder;
  borderWidthBind(expr: string): BarSetBuilder;
  color(value: QmlColor): BarSetBuilder;
  colorBind(expr: string): BarSetBuilder;
  label(value: string): BarSetBuilder;
  labelBind(expr: string): BarSetBuilder;
  labelColor(value: QmlColor): BarSetBuilder;
  labelColorBind(expr: string): BarSetBuilder;
  objectName(value: string): BarSetBuilder;
  objectNameBind(expr: string): BarSetBuilder;
  selectedColor(value: QmlColor): BarSetBuilder;
  selectedColorBind(expr: string): BarSetBuilder;
  values(value: QmlValue[]): BarSetBuilder;
  valuesBind(expr: string): BarSetBuilder;
  onBorderColorChanged(body: string): BarSetBuilder;
  onBorderWidthChanged(body: string): BarSetBuilder;
  onColorChanged(body: string): BarSetBuilder;
  onCountChanged(body: string): BarSetBuilder;
  onLabelChanged(body: string): BarSetBuilder;
  onLabelColorChanged(body: string): BarSetBuilder;
  onObjectNameChanged(body: string): BarSetBuilder;
  onSelectedBarsChanged(body: string): BarSetBuilder;
  onSelectedColorChanged(body: string): BarSetBuilder;
  onUpdate(body: string): BarSetBuilder;
  onUpdatedBars(body: string): BarSetBuilder;
  onValueAdded(body: string): BarSetBuilder;
  onValueChanged(body: string): BarSetBuilder;
  onValueRemoved(body: string): BarSetBuilder;
  onValuesAdded(body: string): BarSetBuilder;
  onValuesChanged(body: string): BarSetBuilder;
  onValuesRemoved(body: string): BarSetBuilder;
}

const BARSET_META: TypeMetadata = {
  typeName: 'BarSet',
  properties: [
    { name: 'borderColor', hasValue: true, hasBinding: true },
    { name: 'borderWidth', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'label', hasValue: true, hasBinding: true },
    { name: 'labelColor', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'selectedColor', hasValue: true, hasBinding: true },
    { name: 'values', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBorderColorChanged', paramCount: 1 },
    { handlerName: 'onBorderWidthChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onLabelChanged', paramCount: 0 },
    { handlerName: 'onLabelColorChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSelectedBarsChanged', paramCount: 1 },
    { handlerName: 'onSelectedColorChanged', paramCount: 1 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onUpdatedBars', paramCount: 0 },
    { handlerName: 'onValueAdded', paramCount: 2 },
    { handlerName: 'onValueChanged', paramCount: 1 },
    { handlerName: 'onValueRemoved', paramCount: 2 },
    { handlerName: 'onValuesAdded', paramCount: 2 },
    { handlerName: 'onValuesChanged', paramCount: 0 },
    { handlerName: 'onValuesRemoved', paramCount: 2 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function BarSet(): BarSetBuilder {
  return createFluentBuilder('BarSet', BARSET_META) as unknown as BarSetBuilder;
}
