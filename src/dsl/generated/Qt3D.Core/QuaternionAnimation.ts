// AUTO-GENERATED — DO NOT EDIT
// Type: QuaternionAnimation
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface QuaternionAnimationBuilder {
  id(id: string): QuaternionAnimationBuilder;
  child(obj: QmlObjectBuilder): QuaternionAnimationBuilder;
  children(...objs: QmlObjectBuilder[]): QuaternionAnimationBuilder;

  alwaysRunToEnd(value: boolean): QuaternionAnimationBuilder;
  alwaysRunToEndBind(expr: string): QuaternionAnimationBuilder;
  duration(value: number): QuaternionAnimationBuilder;
  durationBind(expr: string): QuaternionAnimationBuilder;
  easing(value: QmlValue): QuaternionAnimationBuilder;
  easingBind(expr: string): QuaternionAnimationBuilder;
  from(value: QmlQuaternion): QuaternionAnimationBuilder;
  fromBind(expr: string): QuaternionAnimationBuilder;
  fromXRotation(value: number): QuaternionAnimationBuilder;
  fromXRotationBind(expr: string): QuaternionAnimationBuilder;
  fromYRotation(value: number): QuaternionAnimationBuilder;
  fromYRotationBind(expr: string): QuaternionAnimationBuilder;
  fromZRotation(value: number): QuaternionAnimationBuilder;
  fromZRotationBind(expr: string): QuaternionAnimationBuilder;
  loops(value: number): QuaternionAnimationBuilder;
  loopsBind(expr: string): QuaternionAnimationBuilder;
  objectName(value: string): QuaternionAnimationBuilder;
  objectNameBind(expr: string): QuaternionAnimationBuilder;
  paused(value: boolean): QuaternionAnimationBuilder;
  pausedBind(expr: string): QuaternionAnimationBuilder;
  properties(value: string): QuaternionAnimationBuilder;
  propertiesBind(expr: string): QuaternionAnimationBuilder;
  property(value: string): QuaternionAnimationBuilder;
  propertyBind(expr: string): QuaternionAnimationBuilder;
  running(value: boolean): QuaternionAnimationBuilder;
  runningBind(expr: string): QuaternionAnimationBuilder;
  target(value: QtObjectBuilder): QuaternionAnimationBuilder;
  targetBind(expr: string): QuaternionAnimationBuilder;
  to(value: QmlQuaternion): QuaternionAnimationBuilder;
  toBind(expr: string): QuaternionAnimationBuilder;
  toXRotation(value: number): QuaternionAnimationBuilder;
  toXRotationBind(expr: string): QuaternionAnimationBuilder;
  toYRotation(value: number): QuaternionAnimationBuilder;
  toYRotationBind(expr: string): QuaternionAnimationBuilder;
  toZRotation(value: number): QuaternionAnimationBuilder;
  toZRotationBind(expr: string): QuaternionAnimationBuilder;
  type(value: QmlEnumToken): QuaternionAnimationBuilder;
  typeBind(expr: string): QuaternionAnimationBuilder;
  onAlwaysRunToEndChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onEasingChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onFinished(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onFromChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onFromXRotationChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onFromYRotationChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onFromZRotationChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onLoopCountChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onPausedChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onPropertiesChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onPropertyChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onRunningChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onStarted(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onStopped(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onTargetChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onToChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onToXRotationChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onToYRotationChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onToZRotationChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
  onTypeChanged(handler: DslSignalHandlerValue): QuaternionAnimationBuilder;
}

const QUATERNIONANIMATION_META: TypeMetadata = {
  typeName: 'QuaternionAnimation',
  properties: [
    { name: 'alwaysRunToEnd', hasValue: true, hasBinding: true },
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'easing', hasValue: true, hasBinding: true },
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'fromXRotation', hasValue: true, hasBinding: true },
    { name: 'fromYRotation', hasValue: true, hasBinding: true },
    { name: 'fromZRotation', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'paused', hasValue: true, hasBinding: true },
    { name: 'properties', hasValue: true, hasBinding: true },
    { name: 'property', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
    { name: 'toXRotation', hasValue: true, hasBinding: true },
    { name: 'toYRotation', hasValue: true, hasBinding: true },
    { name: 'toZRotation', hasValue: true, hasBinding: true },
    { name: 'type', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlwaysRunToEndChanged', paramCount: 1 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onEasingChanged', paramCount: 1 },
    { handlerName: 'onFinished', paramCount: 0 },
    { handlerName: 'onFromChanged', paramCount: 0 },
    { handlerName: 'onFromXRotationChanged', paramCount: 1 },
    { handlerName: 'onFromYRotationChanged', paramCount: 1 },
    { handlerName: 'onFromZRotationChanged', paramCount: 1 },
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
    { handlerName: 'onToXRotationChanged', paramCount: 1 },
    { handlerName: 'onToYRotationChanged', paramCount: 1 },
    { handlerName: 'onToZRotationChanged', paramCount: 1 },
    { handlerName: 'onTypeChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function QuaternionAnimation(): QuaternionAnimationBuilder {
  return createFluentBuilder(
    'QuaternionAnimation',
    QUATERNIONANIMATION_META,
  ) as unknown as QuaternionAnimationBuilder;
}

export namespace QuaternionAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('QuaternionAnimation', 'Loops', 'Infinite');
  }
  export namespace Type {
    export const Slerp = createEnumToken('QuaternionAnimation', 'Type', 'Slerp');
    export const Nlerp = createEnumToken('QuaternionAnimation', 'Type', 'Nlerp');
  }
}
