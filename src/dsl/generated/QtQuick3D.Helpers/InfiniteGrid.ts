// AUTO-GENERATED — DO NOT EDIT
// Type: InfiniteGrid
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface InfiniteGridBuilder {
  id(id: string): InfiniteGridBuilder;
  child(obj: QmlObjectBuilder): InfiniteGridBuilder;

  gridAxes(value: boolean): InfiniteGridBuilder;
  gridAxesBind(expr: string): InfiniteGridBuilder;
  gridInterval(value: number): InfiniteGridBuilder;
  gridIntervalBind(expr: string): InfiniteGridBuilder;
  objectName(value: string): InfiniteGridBuilder;
  objectNameBind(expr: string): InfiniteGridBuilder;
  visible(value: boolean): InfiniteGridBuilder;
  visibleBind(expr: string): InfiniteGridBuilder;
  onGridAxesChanged(body: string): InfiniteGridBuilder;
  onGridIntervalChanged(body: string): InfiniteGridBuilder;
  onObjectNameChanged(body: string): InfiniteGridBuilder;
  onVisibleChanged(body: string): InfiniteGridBuilder;
}

const INFINITEGRID_META: TypeMetadata = {
  typeName: 'InfiniteGrid',
  properties: [
    { name: 'gridAxes', hasValue: true, hasBinding: true },
    { name: 'gridInterval', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onGridAxesChanged', paramCount: 0 },
    { handlerName: 'onGridIntervalChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function InfiniteGrid(): InfiniteGridBuilder {
  return createFluentBuilder('InfiniteGrid', INFINITEGRID_META) as unknown as InfiniteGridBuilder;
}
