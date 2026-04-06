// AUTO-GENERATED — DO NOT EDIT
// Type: SubtreeEnabler
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SubtreeEnablerBuilder {
  id(id: string): SubtreeEnablerBuilder;
  child(obj: QmlObjectBuilder): SubtreeEnablerBuilder;
  children(...objs: QmlObjectBuilder[]): SubtreeEnablerBuilder;

  enabled(value: boolean): SubtreeEnablerBuilder;
  enabledBind(expr: string): SubtreeEnablerBuilder;
  enablement(value: QmlEnumToken): SubtreeEnablerBuilder;
  enablementBind(expr: string): SubtreeEnablerBuilder;
  objectName(value: string): SubtreeEnablerBuilder;
  objectNameBind(expr: string): SubtreeEnablerBuilder;
  parent(value: QmlValue): SubtreeEnablerBuilder;
  parentBind(expr: string): SubtreeEnablerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SubtreeEnablerBuilder;
  onEnablementChanged(handler: DslSignalHandlerValue): SubtreeEnablerBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): SubtreeEnablerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SubtreeEnablerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SubtreeEnablerBuilder;
}

const SUBTREEENABLER_META: TypeMetadata = {
  typeName: 'SubtreeEnabler',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'enablement', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEnablementChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SubtreeEnabler(): SubtreeEnablerBuilder {
  return createFluentBuilder(
    'SubtreeEnabler',
    SUBTREEENABLER_META,
  ) as unknown as SubtreeEnablerBuilder;
}

export namespace SubtreeEnabler {
  export namespace Enablement {
    export const Persistent = createEnumToken('SubtreeEnabler', 'Enablement', 'Persistent');
    export const SingleShot = createEnumToken('SubtreeEnabler', 'Enablement', 'SingleShot');
  }
}
