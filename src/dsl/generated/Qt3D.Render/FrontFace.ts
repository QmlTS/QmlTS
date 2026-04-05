// AUTO-GENERATED — DO NOT EDIT
// Type: FrontFace
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface FrontFaceBuilder {
  id(id: string): FrontFaceBuilder;
  child(obj: QmlObjectBuilder): FrontFaceBuilder;

  direction(value: QmlEnumToken): FrontFaceBuilder;
  directionBind(expr: string): FrontFaceBuilder;
  enabled(value: boolean): FrontFaceBuilder;
  enabledBind(expr: string): FrontFaceBuilder;
  objectName(value: string): FrontFaceBuilder;
  objectNameBind(expr: string): FrontFaceBuilder;
  parent(value: QmlValue): FrontFaceBuilder;
  parentBind(expr: string): FrontFaceBuilder;
  onDirectionChanged(body: string): FrontFaceBuilder;
  onEnabledChanged(body: string): FrontFaceBuilder;
  onNodeDestroyed(body: string): FrontFaceBuilder;
  onObjectNameChanged(body: string): FrontFaceBuilder;
  onParentChanged(body: string): FrontFaceBuilder;
}

const FRONTFACE_META: TypeMetadata = {
  typeName: 'FrontFace',
  properties: [
    { name: 'direction', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDirectionChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function FrontFace(): FrontFaceBuilder {
  return createFluentBuilder('FrontFace', FRONTFACE_META) as unknown as FrontFaceBuilder;
}

export namespace FrontFace {
  export namespace WindingDirection {
    export const ClockWise = createEnumToken('FrontFace', 'WindingDirection', 'ClockWise');
    export const CounterClockWise = createEnumToken(
      'FrontFace',
      'WindingDirection',
      'CounterClockWise',
    );
  }
}
