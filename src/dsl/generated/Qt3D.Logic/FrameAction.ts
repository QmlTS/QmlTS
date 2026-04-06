// AUTO-GENERATED — DO NOT EDIT
// Type: FrameAction
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface FrameActionBuilder {
  id(id: string): FrameActionBuilder;
  child(obj: QmlObjectBuilder): FrameActionBuilder;
  children(...objs: QmlObjectBuilder[]): FrameActionBuilder;

  enabled(value: boolean): FrameActionBuilder;
  enabledBind(expr: string): FrameActionBuilder;
  isShareable(value: boolean): FrameActionBuilder;
  isShareableBind(expr: string): FrameActionBuilder;
  objectName(value: string): FrameActionBuilder;
  objectNameBind(expr: string): FrameActionBuilder;
  parent(value: QmlValue): FrameActionBuilder;
  parentBind(expr: string): FrameActionBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): FrameActionBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FrameActionBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): FrameActionBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FrameActionBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FrameActionBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): FrameActionBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): FrameActionBuilder;
  onTriggered(handler: DslSignalHandlerValue): FrameActionBuilder;
}

const FRAMEACTION_META: TypeMetadata = {
  typeName: 'FrameAction',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onTriggered', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function FrameAction(): FrameActionBuilder {
  return createFluentBuilder('FrameAction', FRAMEACTION_META) as unknown as FrameActionBuilder;
}
