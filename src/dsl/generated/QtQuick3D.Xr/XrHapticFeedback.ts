// AUTO-GENERATED — DO NOT EDIT
// Type: XrHapticFeedback
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface XrHapticFeedbackBuilder {
  id(id: string): XrHapticFeedbackBuilder;
  child(obj: QmlObjectBuilder): XrHapticFeedbackBuilder;

  condition(value: QmlEnumToken): XrHapticFeedbackBuilder;
  conditionBind(expr: string): XrHapticFeedbackBuilder;
  controller(value: QmlEnumToken): XrHapticFeedbackBuilder;
  controllerBind(expr: string): XrHapticFeedbackBuilder;
  hapticEffect(value: QmlValue): XrHapticFeedbackBuilder;
  hapticEffectBind(expr: string): XrHapticFeedbackBuilder;
  objectName(value: string): XrHapticFeedbackBuilder;
  objectNameBind(expr: string): XrHapticFeedbackBuilder;
  trigger(value: boolean): XrHapticFeedbackBuilder;
  triggerBind(expr: string): XrHapticFeedbackBuilder;
  onConditionChanged(body: string): XrHapticFeedbackBuilder;
  onControllerChanged(body: string): XrHapticFeedbackBuilder;
  onHapticEffectChanged(body: string): XrHapticFeedbackBuilder;
  onObjectNameChanged(body: string): XrHapticFeedbackBuilder;
  onTriggerChanged(body: string): XrHapticFeedbackBuilder;
}

const XRHAPTICFEEDBACK_META: TypeMetadata = {
  typeName: 'XrHapticFeedback',
  properties: [
    { name: 'condition', hasValue: true, hasBinding: true },
    { name: 'controller', hasValue: true, hasBinding: true },
    { name: 'hapticEffect', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'trigger', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onConditionChanged', paramCount: 0 },
    { handlerName: 'onControllerChanged', paramCount: 0 },
    { handlerName: 'onHapticEffectChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onTriggerChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function XrHapticFeedback(): XrHapticFeedbackBuilder {
  return createFluentBuilder('XrHapticFeedback', XRHAPTICFEEDBACK_META) as unknown as XrHapticFeedbackBuilder;
}

export namespace XrHapticFeedback {
  export namespace Condition {
    export const RisingEdge = createEnumToken('XrHapticFeedback', 'Condition', 'RisingEdge');
    export const TrailingEdge = createEnumToken('XrHapticFeedback', 'Condition', 'TrailingEdge');
  }
  export namespace Controller {
    export const LeftController = createEnumToken('XrHapticFeedback', 'Controller', 'LeftController');
    export const RightController = createEnumToken('XrHapticFeedback', 'Controller', 'RightController');
    export const UnknownController = createEnumToken('XrHapticFeedback', 'Controller', 'UnknownController');
  }
}
