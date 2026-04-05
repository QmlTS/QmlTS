// AUTO-GENERATED — DO NOT EDIT
// Type: Command
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface CommandBuilder {
  id(id: string): CommandBuilder;
  child(obj: QmlObjectBuilder): CommandBuilder;

  objectName(value: string): CommandBuilder;
  objectNameBind(expr: string): CommandBuilder;
  parent(value: QmlValue): CommandBuilder;
  parentBind(expr: string): CommandBuilder;
  state(value: string): CommandBuilder;
  stateBind(expr: string): CommandBuilder;
  onChildrenChanged(body: string): CommandBuilder;
  onObjectNameChanged(body: string): CommandBuilder;
  onParentChanged(body: string): CommandBuilder;
  onStateChanged(body: string): CommandBuilder;
}

const COMMAND_META: TypeMetadata = {
  typeName: 'Command',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function Command(): CommandBuilder {
  return createFluentBuilder('Command', COMMAND_META) as unknown as CommandBuilder;
}
