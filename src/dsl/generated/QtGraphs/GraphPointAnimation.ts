// AUTO-GENERATED — DO NOT EDIT
// Type: GraphPointAnimation
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface GraphPointAnimationBuilder {
  id(id: string): GraphPointAnimationBuilder;
  child(obj: QmlObjectBuilder): GraphPointAnimationBuilder;

  animating(value: QmlEnumToken): GraphPointAnimationBuilder;
  animatingBind(expr: string): GraphPointAnimationBuilder;
  currentTime(value: number): GraphPointAnimationBuilder;
  currentTimeBind(expr: string): GraphPointAnimationBuilder;
  direction(value: QmlEnumToken): GraphPointAnimationBuilder;
  directionBind(expr: string): GraphPointAnimationBuilder;
  duration(value: number): GraphPointAnimationBuilder;
  durationBind(expr: string): GraphPointAnimationBuilder;
  easingCurve(value: QmlValue): GraphPointAnimationBuilder;
  easingCurveBind(expr: string): GraphPointAnimationBuilder;
  endValue(value: QmlValue): GraphPointAnimationBuilder;
  endValueBind(expr: string): GraphPointAnimationBuilder;
  loopCount(value: number): GraphPointAnimationBuilder;
  loopCountBind(expr: string): GraphPointAnimationBuilder;
  objectName(value: string): GraphPointAnimationBuilder;
  objectNameBind(expr: string): GraphPointAnimationBuilder;
  startValue(value: QmlValue): GraphPointAnimationBuilder;
  startValueBind(expr: string): GraphPointAnimationBuilder;
  onAnimatingChanged(body: string): GraphPointAnimationBuilder;
  onCurrentLoopChanged(body: string): GraphPointAnimationBuilder;
  onDirectionChanged(body: string): GraphPointAnimationBuilder;
  onFinished(body: string): GraphPointAnimationBuilder;
  onObjectNameChanged(body: string): GraphPointAnimationBuilder;
  onStateChanged(body: string): GraphPointAnimationBuilder;
  onValueChanged(body: string): GraphPointAnimationBuilder;
}

const GRAPHPOINTANIMATION_META: TypeMetadata = {
  typeName: 'GraphPointAnimation',
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
  grouped: [
  ],
  attached: [
  ],
};

export function GraphPointAnimation(): GraphPointAnimationBuilder {
  return createFluentBuilder('GraphPointAnimation', GRAPHPOINTANIMATION_META) as unknown as GraphPointAnimationBuilder;
}

export namespace GraphPointAnimation {
  export namespace AnimationState {
    export const Playing = createEnumToken('GraphPointAnimation', 'AnimationState', 'Playing');
    export const Stopped = createEnumToken('GraphPointAnimation', 'AnimationState', 'Stopped');
  }
  export namespace Direction {
    export const Forward = createEnumToken('GraphPointAnimation', 'Direction', 'Forward');
    export const Backward = createEnumToken('GraphPointAnimation', 'Direction', 'Backward');
  }
  export namespace GraphAnimationType {
    export const GraphPoint = createEnumToken('GraphPointAnimation', 'GraphAnimationType', 'GraphPoint');
    export const ControlPoint = createEnumToken('GraphPointAnimation', 'GraphAnimationType', 'ControlPoint');
  }
  export namespace State {
    export const Stopped = createEnumToken('GraphPointAnimation', 'State', 'Stopped');
    export const Paused = createEnumToken('GraphPointAnimation', 'State', 'Paused');
    export const Running = createEnumToken('GraphPointAnimation', 'State', 'Running');
  }
}
