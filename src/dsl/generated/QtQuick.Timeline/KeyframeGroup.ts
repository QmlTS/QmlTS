// AUTO-GENERATED — DO NOT EDIT
// Type: KeyframeGroup
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface KeyframeGroupBuilder {
  id(id: string): KeyframeGroupBuilder;
  child(obj: QmlObjectBuilder): KeyframeGroupBuilder;

  keyframeSource(value: QmlUrl): KeyframeGroupBuilder;
  keyframeSourceBind(expr: string): KeyframeGroupBuilder;
  objectName(value: string): KeyframeGroupBuilder;
  objectNameBind(expr: string): KeyframeGroupBuilder;
  property(value: string): KeyframeGroupBuilder;
  propertyBind(expr: string): KeyframeGroupBuilder;
  target(value: QtObjectBuilder): KeyframeGroupBuilder;
  targetBind(expr: string): KeyframeGroupBuilder;
  onKeyframeSourceChanged(body: string): KeyframeGroupBuilder;
  onObjectNameChanged(body: string): KeyframeGroupBuilder;
  onPropertyChanged(body: string): KeyframeGroupBuilder;
  onTargetChanged(body: string): KeyframeGroupBuilder;
}

const KEYFRAMEGROUP_META: TypeMetadata = {
  typeName: 'KeyframeGroup',
  properties: [
    { name: 'keyframeSource', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'property', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onKeyframeSourceChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPropertyChanged', paramCount: 0 },
    { handlerName: 'onTargetChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'keyframes',
};

export function KeyframeGroup(): KeyframeGroupBuilder {
  return createFluentBuilder('KeyframeGroup', KEYFRAMEGROUP_META) as unknown as KeyframeGroupBuilder;
}
