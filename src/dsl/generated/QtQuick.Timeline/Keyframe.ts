// AUTO-GENERATED — DO NOT EDIT
// Type: Keyframe
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface KeyframeBuilder {
  id(id: string): KeyframeBuilder;
  child(obj: QmlObjectBuilder): KeyframeBuilder;
  children(...objs: QmlObjectBuilder[]): KeyframeBuilder;

  easing(value: QmlValue): KeyframeBuilder;
  easingBind(expr: string): KeyframeBuilder;
  frame(value: number): KeyframeBuilder;
  frameBind(expr: string): KeyframeBuilder;
  objectName(value: string): KeyframeBuilder;
  objectNameBind(expr: string): KeyframeBuilder;
  value(value: QmlValue): KeyframeBuilder;
  valueBind(expr: string): KeyframeBuilder;
  onEasingCurveChanged(handler: DslSignalHandlerValue): KeyframeBuilder;
  onFrameChanged(handler: DslSignalHandlerValue): KeyframeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): KeyframeBuilder;
  onValueChanged(handler: DslSignalHandlerValue): KeyframeBuilder;
}

const KEYFRAME_META: TypeMetadata = {
  typeName: 'Keyframe',
  properties: [
    { name: 'easing', hasValue: true, hasBinding: true },
    { name: 'frame', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEasingCurveChanged', paramCount: 0 },
    { handlerName: 'onFrameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Keyframe(): KeyframeBuilder {
  return createFluentBuilder('Keyframe', KEYFRAME_META) as unknown as KeyframeBuilder;
}
