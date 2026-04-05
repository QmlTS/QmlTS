// AUTO-GENERATED — DO NOT EDIT
// Type: CoordinateAnimation
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface CoordinateAnimationBuilder {
  id(id: string): CoordinateAnimationBuilder;
  child(obj: QmlObjectBuilder): CoordinateAnimationBuilder;

  alwaysRunToEnd(value: boolean): CoordinateAnimationBuilder;
  alwaysRunToEndBind(expr: string): CoordinateAnimationBuilder;
  direction(value: QmlEnumToken): CoordinateAnimationBuilder;
  directionBind(expr: string): CoordinateAnimationBuilder;
  duration(value: number): CoordinateAnimationBuilder;
  durationBind(expr: string): CoordinateAnimationBuilder;
  easing(value: QmlValue): CoordinateAnimationBuilder;
  easingBind(expr: string): CoordinateAnimationBuilder;
  from(value: QmlValue): CoordinateAnimationBuilder;
  fromBind(expr: string): CoordinateAnimationBuilder;
  loops(value: number): CoordinateAnimationBuilder;
  loopsBind(expr: string): CoordinateAnimationBuilder;
  objectName(value: string): CoordinateAnimationBuilder;
  objectNameBind(expr: string): CoordinateAnimationBuilder;
  paused(value: boolean): CoordinateAnimationBuilder;
  pausedBind(expr: string): CoordinateAnimationBuilder;
  properties(value: string): CoordinateAnimationBuilder;
  propertiesBind(expr: string): CoordinateAnimationBuilder;
  property(value: string): CoordinateAnimationBuilder;
  propertyBind(expr: string): CoordinateAnimationBuilder;
  running(value: boolean): CoordinateAnimationBuilder;
  runningBind(expr: string): CoordinateAnimationBuilder;
  target(value: QtObjectBuilder): CoordinateAnimationBuilder;
  targetBind(expr: string): CoordinateAnimationBuilder;
  to(value: QmlValue): CoordinateAnimationBuilder;
  toBind(expr: string): CoordinateAnimationBuilder;
  onAlwaysRunToEndChanged(body: string): CoordinateAnimationBuilder;
  onDirectionChanged(body: string): CoordinateAnimationBuilder;
  onDurationChanged(body: string): CoordinateAnimationBuilder;
  onEasingChanged(body: string): CoordinateAnimationBuilder;
  onFinished(body: string): CoordinateAnimationBuilder;
  onFromChanged(body: string): CoordinateAnimationBuilder;
  onLoopCountChanged(body: string): CoordinateAnimationBuilder;
  onObjectNameChanged(body: string): CoordinateAnimationBuilder;
  onPausedChanged(body: string): CoordinateAnimationBuilder;
  onPropertiesChanged(body: string): CoordinateAnimationBuilder;
  onPropertyChanged(body: string): CoordinateAnimationBuilder;
  onRunningChanged(body: string): CoordinateAnimationBuilder;
  onStarted(body: string): CoordinateAnimationBuilder;
  onStopped(body: string): CoordinateAnimationBuilder;
  onTargetChanged(body: string): CoordinateAnimationBuilder;
  onToChanged(body: string): CoordinateAnimationBuilder;
}

const COORDINATEANIMATION_META: TypeMetadata = {
  typeName: 'CoordinateAnimation',
  properties: [
    { name: 'alwaysRunToEnd', hasValue: true, hasBinding: true },
    { name: 'direction', hasValue: true, hasBinding: true },
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'easing', hasValue: true, hasBinding: true },
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'paused', hasValue: true, hasBinding: true },
    { name: 'properties', hasValue: true, hasBinding: true },
    { name: 'property', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlwaysRunToEndChanged', paramCount: 1 },
    { handlerName: 'onDirectionChanged', paramCount: 0 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onEasingChanged', paramCount: 1 },
    { handlerName: 'onFinished', paramCount: 0 },
    { handlerName: 'onFromChanged', paramCount: 0 },
    { handlerName: 'onLoopCountChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPausedChanged', paramCount: 1 },
    { handlerName: 'onPropertiesChanged', paramCount: 1 },
    { handlerName: 'onPropertyChanged', paramCount: 0 },
    { handlerName: 'onRunningChanged', paramCount: 1 },
    { handlerName: 'onStarted', paramCount: 0 },
    { handlerName: 'onStopped', paramCount: 0 },
    { handlerName: 'onTargetChanged', paramCount: 0 },
    { handlerName: 'onToChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function CoordinateAnimation(): CoordinateAnimationBuilder {
  return createFluentBuilder(
    'CoordinateAnimation',
    COORDINATEANIMATION_META,
  ) as unknown as CoordinateAnimationBuilder;
}

export namespace CoordinateAnimation {
  export namespace Direction {
    export const Shortest = createEnumToken('CoordinateAnimation', 'Direction', 'Shortest');
    export const West = createEnumToken('CoordinateAnimation', 'Direction', 'West');
    export const East = createEnumToken('CoordinateAnimation', 'Direction', 'East');
  }
  export namespace Loops {
    export const Infinite = createEnumToken('CoordinateAnimation', 'Loops', 'Infinite');
  }
}
