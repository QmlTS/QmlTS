// AUTO-GENERATED — DO NOT EDIT
// Type: Connections
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface ConnectionsBuilder {
  id(id: string): ConnectionsBuilder;
  child(obj: QmlObjectBuilder): ConnectionsBuilder;

  enabled(value: boolean): ConnectionsBuilder;
  enabledBind(expr: string): ConnectionsBuilder;
  ignoreUnknownSignals(value: boolean): ConnectionsBuilder;
  ignoreUnknownSignalsBind(expr: string): ConnectionsBuilder;
  objectName(value: string): ConnectionsBuilder;
  objectNameBind(expr: string): ConnectionsBuilder;
  target(value: QtObjectBuilder): ConnectionsBuilder;
  targetBind(expr: string): ConnectionsBuilder;
  onEnabledChanged(handler: () => void): ConnectionsBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ConnectionsBuilder;
  onTargetChanged(handler: () => void): ConnectionsBuilder;
}

export function Connections(): ConnectionsBuilder {
  return new DslBuilderImpl('Connections') as unknown as ConnectionsBuilder;
}
