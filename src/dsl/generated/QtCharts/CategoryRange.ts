// AUTO-GENERATED — DO NOT EDIT
// Type: CategoryRange
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface CategoryRangeBuilder {
  id(id: string): CategoryRangeBuilder;
  child(obj: QmlObjectBuilder): CategoryRangeBuilder;

  endValue(value: number): CategoryRangeBuilder;
  endValueBind(expr: string): CategoryRangeBuilder;
  label(value: string): CategoryRangeBuilder;
  labelBind(expr: string): CategoryRangeBuilder;
  objectName(value: string): CategoryRangeBuilder;
  objectNameBind(expr: string): CategoryRangeBuilder;
  onObjectNameChanged(body: string): CategoryRangeBuilder;
}

const CATEGORYRANGE_META: TypeMetadata = {
  typeName: 'CategoryRange',
  properties: [
    { name: 'endValue', hasValue: true, hasBinding: true },
    { name: 'label', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function CategoryRange(): CategoryRangeBuilder {
  return createFluentBuilder(
    'CategoryRange',
    CATEGORYRANGE_META,
  ) as unknown as CategoryRangeBuilder;
}
