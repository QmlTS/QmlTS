// AUTO-GENERATED — DO NOT EDIT
// Type: WebSocketServer
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface WebSocketServerBuilder {
  id(id: string): WebSocketServerBuilder;
  child(obj: QmlObjectBuilder): WebSocketServerBuilder;
  children(...objs: QmlObjectBuilder[]): WebSocketServerBuilder;

  accept(value: boolean): WebSocketServerBuilder;
  acceptBind(expr: string): WebSocketServerBuilder;
  host(value: string): WebSocketServerBuilder;
  hostBind(expr: string): WebSocketServerBuilder;
  listen(value: boolean): WebSocketServerBuilder;
  listenBind(expr: string): WebSocketServerBuilder;
  name(value: string): WebSocketServerBuilder;
  nameBind(expr: string): WebSocketServerBuilder;
  objectName(value: string): WebSocketServerBuilder;
  objectNameBind(expr: string): WebSocketServerBuilder;
  port(value: number): WebSocketServerBuilder;
  portBind(expr: string): WebSocketServerBuilder;
  supportedSubprotocols(value: string[]): WebSocketServerBuilder;
  supportedSubprotocolsBind(expr: string): WebSocketServerBuilder;
  onAcceptChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onClientConnected(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onErrorStringChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onHostChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onListenChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onNameChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onPortChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onSupportedSubprotocolsChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
  onUrlChanged(handler: DslSignalHandlerValue): WebSocketServerBuilder;
}

const WEBSOCKETSERVER_META: TypeMetadata = {
  typeName: 'WebSocketServer',
  properties: [
    { name: 'accept', hasValue: true, hasBinding: true },
    { name: 'host', hasValue: true, hasBinding: true },
    { name: 'listen', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'port', hasValue: true, hasBinding: true },
    { name: 'supportedSubprotocols', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAcceptChanged', paramCount: 1 },
    { handlerName: 'onClientConnected', paramCount: 1 },
    { handlerName: 'onErrorStringChanged', paramCount: 1 },
    { handlerName: 'onHostChanged', paramCount: 1 },
    { handlerName: 'onListenChanged', paramCount: 1 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPortChanged', paramCount: 1 },
    { handlerName: 'onSupportedSubprotocolsChanged', paramCount: 1 },
    { handlerName: 'onUrlChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function WebSocketServer(): WebSocketServerBuilder {
  return createFluentBuilder(
    'WebSocketServer',
    WEBSOCKETSERVER_META,
  ) as unknown as WebSocketServerBuilder;
}
