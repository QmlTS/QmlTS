// AUTO-GENERATED — DO NOT EDIT
// Type: WebSocketServer
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface WebSocketServerBuilder {
  id(id: string): WebSocketServerBuilder;
  child(obj: QmlObjectBuilder): WebSocketServerBuilder;

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
  onAcceptChanged(body: string): WebSocketServerBuilder;
  onClientConnected(body: string): WebSocketServerBuilder;
  onErrorStringChanged(body: string): WebSocketServerBuilder;
  onHostChanged(body: string): WebSocketServerBuilder;
  onListenChanged(body: string): WebSocketServerBuilder;
  onNameChanged(body: string): WebSocketServerBuilder;
  onObjectNameChanged(body: string): WebSocketServerBuilder;
  onPortChanged(body: string): WebSocketServerBuilder;
  onSupportedSubprotocolsChanged(body: string): WebSocketServerBuilder;
  onUrlChanged(body: string): WebSocketServerBuilder;
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
