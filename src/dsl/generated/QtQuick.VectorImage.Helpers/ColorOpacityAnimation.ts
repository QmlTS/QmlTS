// AUTO-GENERATED — DO NOT EDIT
// Type: ColorOpacityAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface ColorOpacityAnimationBuilder {
  id(id: string): ColorOpacityAnimationBuilder;
  child(obj: QmlObjectBuilder): ColorOpacityAnimationBuilder;

  alwaysRunToEnd(value: boolean): ColorOpacityAnimationBuilder;
  alwaysRunToEndBind(expr: string): ColorOpacityAnimationBuilder;
  duration(value: number): ColorOpacityAnimationBuilder;
  durationBind(expr: string): ColorOpacityAnimationBuilder;
  easing(value: QmlValue): ColorOpacityAnimationBuilder;
  easingBind(expr: string): ColorOpacityAnimationBuilder;
  from(value: number): ColorOpacityAnimationBuilder;
  fromBind(expr: string): ColorOpacityAnimationBuilder;
  loops(value: number): ColorOpacityAnimationBuilder;
  loopsBind(expr: string): ColorOpacityAnimationBuilder;
  objectName(value: string): ColorOpacityAnimationBuilder;
  objectNameBind(expr: string): ColorOpacityAnimationBuilder;
  paused(value: boolean): ColorOpacityAnimationBuilder;
  pausedBind(expr: string): ColorOpacityAnimationBuilder;
  properties(value: string): ColorOpacityAnimationBuilder;
  propertiesBind(expr: string): ColorOpacityAnimationBuilder;
  property(value: string): ColorOpacityAnimationBuilder;
  propertyBind(expr: string): ColorOpacityAnimationBuilder;
  running(value: boolean): ColorOpacityAnimationBuilder;
  runningBind(expr: string): ColorOpacityAnimationBuilder;
  target(value: QtObjectBuilder): ColorOpacityAnimationBuilder;
  targetBind(expr: string): ColorOpacityAnimationBuilder;
  to(value: number): ColorOpacityAnimationBuilder;
  toBind(expr: string): ColorOpacityAnimationBuilder;
  onAlwaysRunToEndChanged(body: string): ColorOpacityAnimationBuilder;
  onDurationChanged(body: string): ColorOpacityAnimationBuilder;
  onEasingChanged(body: string): ColorOpacityAnimationBuilder;
  onFinished(body: string): ColorOpacityAnimationBuilder;
  onFromChanged(body: string): ColorOpacityAnimationBuilder;
  onLoopCountChanged(body: string): ColorOpacityAnimationBuilder;
  onObjectNameChanged(body: string): ColorOpacityAnimationBuilder;
  onPausedChanged(body: string): ColorOpacityAnimationBuilder;
  onPropertiesChanged(body: string): ColorOpacityAnimationBuilder;
  onPropertyChanged(body: string): ColorOpacityAnimationBuilder;
  onRunningChanged(body: string): ColorOpacityAnimationBuilder;
  onStarted(body: string): ColorOpacityAnimationBuilder;
  onStopped(body: string): ColorOpacityAnimationBuilder;
  onTargetChanged(body: string): ColorOpacityAnimationBuilder;
  onToChanged(body: string): ColorOpacityAnimationBuilder;
}

const COLOROPACITYANIMATION_META: TypeMetadata = {
  typeName: 'ColorOpacityAnimation',
  properties: [
    { name: 'alwaysRunToEnd', hasValue: true, hasBinding: true },
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

export function ColorOpacityAnimation(): ColorOpacityAnimationBuilder {
  return createFluentBuilder(
    'ColorOpacityAnimation',
    COLOROPACITYANIMATION_META,
  ) as unknown as ColorOpacityAnimationBuilder;
}

export namespace ColorOpacityAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('ColorOpacityAnimation', 'Loops', 'Infinite');
  }
}
