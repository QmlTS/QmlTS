// AUTO-GENERATED — DO NOT EDIT
// Type: Connections
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface ConnectionsBuilder {
  id(id: string): ConnectionsBuilder;
  child(obj: QmlObjectBuilder): ConnectionsBuilder;
  children(...objs: QmlObjectBuilder[]): ConnectionsBuilder;

  enabled(value: boolean): ConnectionsBuilder;
  enabledBind(expr: string): ConnectionsBuilder;
  ignoreUnknownSignals(value: boolean): ConnectionsBuilder;
  ignoreUnknownSignalsBind(expr: string): ConnectionsBuilder;
  objectName(value: string): ConnectionsBuilder;
  objectNameBind(expr: string): ConnectionsBuilder;
  target(value: QtObjectBuilder): ConnectionsBuilder;
  targetBind(expr: string): ConnectionsBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ConnectionsBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ConnectionsBuilder;
  onTargetChanged(handler: DslSignalHandlerValue): ConnectionsBuilder;
}

const CONNECTIONS_META: TypeMetadata = {
  typeName: 'Connections',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'ignoreUnknownSignals', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Connections(): ConnectionsBuilder {
  return createFluentBuilder('Connections', CONNECTIONS_META) as unknown as ConnectionsBuilder;
}
