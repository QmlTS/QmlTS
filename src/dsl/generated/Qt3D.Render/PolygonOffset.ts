// AUTO-GENERATED — DO NOT EDIT
// Type: PolygonOffset
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface PolygonOffsetBuilder {
  id(id: string): PolygonOffsetBuilder;
  child(obj: QmlObjectBuilder): PolygonOffsetBuilder;
  children(...objs: QmlObjectBuilder[]): PolygonOffsetBuilder;

  depthSteps(value: number): PolygonOffsetBuilder;
  depthStepsBind(expr: string): PolygonOffsetBuilder;
  enabled(value: boolean): PolygonOffsetBuilder;
  enabledBind(expr: string): PolygonOffsetBuilder;
  objectName(value: string): PolygonOffsetBuilder;
  objectNameBind(expr: string): PolygonOffsetBuilder;
  parent(value: QmlValue): PolygonOffsetBuilder;
  parentBind(expr: string): PolygonOffsetBuilder;
  scaleFactor(value: number): PolygonOffsetBuilder;
  scaleFactorBind(expr: string): PolygonOffsetBuilder;
  onDepthStepsChanged(handler: DslSignalHandlerValue): PolygonOffsetBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PolygonOffsetBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): PolygonOffsetBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PolygonOffsetBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PolygonOffsetBuilder;
  onScaleFactorChanged(handler: DslSignalHandlerValue): PolygonOffsetBuilder;
}

const POLYGONOFFSET_META: TypeMetadata = {
  typeName: 'PolygonOffset',
  properties: [
    { name: 'depthSteps', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'scaleFactor', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDepthStepsChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onScaleFactorChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function PolygonOffset(): PolygonOffsetBuilder {
  return createFluentBuilder(
    'PolygonOffset',
    POLYGONOFFSET_META,
  ) as unknown as PolygonOffsetBuilder;
}
