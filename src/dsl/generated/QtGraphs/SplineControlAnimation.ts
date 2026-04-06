// AUTO-GENERATED — DO NOT EDIT
// Type: SplineControlAnimation
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SplineControlAnimationBuilder {
  id(id: string): SplineControlAnimationBuilder;
  child(obj: QmlObjectBuilder): SplineControlAnimationBuilder;
  children(...objs: QmlObjectBuilder[]): SplineControlAnimationBuilder;

  animating(value: QmlEnumToken): SplineControlAnimationBuilder;
  animatingBind(expr: string): SplineControlAnimationBuilder;
  currentTime(value: number): SplineControlAnimationBuilder;
  currentTimeBind(expr: string): SplineControlAnimationBuilder;
  direction(value: QmlEnumToken): SplineControlAnimationBuilder;
  directionBind(expr: string): SplineControlAnimationBuilder;
  duration(value: number): SplineControlAnimationBuilder;
  durationBind(expr: string): SplineControlAnimationBuilder;
  easingCurve(value: QmlValue): SplineControlAnimationBuilder;
  easingCurveBind(expr: string): SplineControlAnimationBuilder;
  endValue(value: QmlValue): SplineControlAnimationBuilder;
  endValueBind(expr: string): SplineControlAnimationBuilder;
  loopCount(value: number): SplineControlAnimationBuilder;
  loopCountBind(expr: string): SplineControlAnimationBuilder;
  objectName(value: string): SplineControlAnimationBuilder;
  objectNameBind(expr: string): SplineControlAnimationBuilder;
  startValue(value: QmlValue): SplineControlAnimationBuilder;
  startValueBind(expr: string): SplineControlAnimationBuilder;
  onAnimatingChanged(handler: DslSignalHandlerValue): SplineControlAnimationBuilder;
  onCurrentLoopChanged(handler: DslSignalHandlerValue): SplineControlAnimationBuilder;
  onDirectionChanged(handler: DslSignalHandlerValue): SplineControlAnimationBuilder;
  onFinished(handler: DslSignalHandlerValue): SplineControlAnimationBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SplineControlAnimationBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SplineControlAnimationBuilder;
  onValueChanged(handler: DslSignalHandlerValue): SplineControlAnimationBuilder;
}

const SPLINECONTROLANIMATION_META: TypeMetadata = {
  typeName: 'SplineControlAnimation',
  properties: [
    { name: 'animating', hasValue: true, hasBinding: true },
    { name: 'currentTime', hasValue: true, hasBinding: true },
    { name: 'direction', hasValue: true, hasBinding: true },
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'easingCurve', hasValue: true, hasBinding: true },
    { name: 'endValue', hasValue: true, hasBinding: true },
    { name: 'loopCount', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'startValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAnimatingChanged', paramCount: 0 },
    { handlerName: 'onCurrentLoopChanged', paramCount: 1 },
    { handlerName: 'onDirectionChanged', paramCount: 1 },
    { handlerName: 'onFinished', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 2 },
    { handlerName: 'onValueChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SplineControlAnimation(): SplineControlAnimationBuilder {
  return createFluentBuilder(
    'SplineControlAnimation',
    SPLINECONTROLANIMATION_META,
  ) as unknown as SplineControlAnimationBuilder;
}

export namespace SplineControlAnimation {
  export namespace AnimationState {
    export const Playing = createEnumToken('SplineControlAnimation', 'AnimationState', 'Playing');
    export const Stopped = createEnumToken('SplineControlAnimation', 'AnimationState', 'Stopped');
  }
  export namespace Direction {
    export const Forward = createEnumToken('SplineControlAnimation', 'Direction', 'Forward');
    export const Backward = createEnumToken('SplineControlAnimation', 'Direction', 'Backward');
  }
  export namespace GraphAnimationType {
    export const GraphPoint = createEnumToken(
      'SplineControlAnimation',
      'GraphAnimationType',
      'GraphPoint',
    );
    export const ControlPoint = createEnumToken(
      'SplineControlAnimation',
      'GraphAnimationType',
      'ControlPoint',
    );
  }
  export namespace State {
    export const Stopped = createEnumToken('SplineControlAnimation', 'State', 'Stopped');
    export const Paused = createEnumToken('SplineControlAnimation', 'State', 'Paused');
    export const Running = createEnumToken('SplineControlAnimation', 'State', 'Running');
  }
}
