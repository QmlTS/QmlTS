// AUTO-GENERATED — DO NOT EDIT
// Type: AxisAccumulator
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { AxisBuilder } from './Axis.js';
export interface AxisAccumulatorBuilder {
  id(id: string): AxisAccumulatorBuilder;
  child(obj: QmlObjectBuilder): AxisAccumulatorBuilder;
  children(...objs: QmlObjectBuilder[]): AxisAccumulatorBuilder;

  enabled(value: boolean): AxisAccumulatorBuilder;
  enabledBind(expr: string): AxisAccumulatorBuilder;
  isShareable(value: boolean): AxisAccumulatorBuilder;
  isShareableBind(expr: string): AxisAccumulatorBuilder;
  objectName(value: string): AxisAccumulatorBuilder;
  objectNameBind(expr: string): AxisAccumulatorBuilder;
  parent(value: QmlValue): AxisAccumulatorBuilder;
  parentBind(expr: string): AxisAccumulatorBuilder;
  scale(value: number): AxisAccumulatorBuilder;
  scaleBind(expr: string): AxisAccumulatorBuilder;
  sourceAxis(value: AxisBuilder): AxisAccumulatorBuilder;
  sourceAxisBind(expr: string): AxisAccumulatorBuilder;
  sourceAxisType(value: QmlEnumToken): AxisAccumulatorBuilder;
  sourceAxisTypeBind(expr: string): AxisAccumulatorBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onSourceAxisChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onSourceAxisTypeChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onValueChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
  onVelocityChanged(handler: DslSignalHandlerValue): AxisAccumulatorBuilder;
}

const AXISACCUMULATOR_META: TypeMetadata = {
  typeName: 'AxisAccumulator',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'sourceAxis', hasValue: true, hasBinding: true },
    { name: 'sourceAxisType', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSourceAxisChanged', paramCount: 1 },
    { handlerName: 'onSourceAxisTypeChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 1 },
    { handlerName: 'onVelocityChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AxisAccumulator(): AxisAccumulatorBuilder {
  return createFluentBuilder(
    'AxisAccumulator',
    AXISACCUMULATOR_META,
  ) as unknown as AxisAccumulatorBuilder;
}

export namespace AxisAccumulator {
  export namespace SourceAxisType {
    export const Velocity = createEnumToken('AxisAccumulator', 'SourceAxisType', 'Velocity');
    export const Acceleration = createEnumToken(
      'AxisAccumulator',
      'SourceAxisType',
      'Acceleration',
    );
  }
}
