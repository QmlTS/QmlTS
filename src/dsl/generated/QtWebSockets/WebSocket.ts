// AUTO-GENERATED — DO NOT EDIT
// Type: WebSocket
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
export interface WebSocketBuilder {
  id(id: string): WebSocketBuilder;
  child(obj: QmlObjectBuilder): WebSocketBuilder;

  active(value: boolean): WebSocketBuilder;
  activeBind(expr: string): WebSocketBuilder;
  objectName(value: string): WebSocketBuilder;
  objectNameBind(expr: string): WebSocketBuilder;
  requestedSubprotocols(value: string[]): WebSocketBuilder;
  requestedSubprotocolsBind(expr: string): WebSocketBuilder;
  url(value: QmlUrl): WebSocketBuilder;
  urlBind(expr: string): WebSocketBuilder;
  onActiveChanged(body: string): WebSocketBuilder;
  onBinaryMessageReceived(body: string): WebSocketBuilder;
  onErrorStringChanged(body: string): WebSocketBuilder;
  onNegotiatedSubprotocolChanged(body: string): WebSocketBuilder;
  onObjectNameChanged(body: string): WebSocketBuilder;
  onPong(body: string): WebSocketBuilder;
  onRequestedSubprotocolsChanged(body: string): WebSocketBuilder;
  onStatusChanged(body: string): WebSocketBuilder;
  onTextMessageReceived(body: string): WebSocketBuilder;
  onUrlChanged(body: string): WebSocketBuilder;
}

const WEBSOCKET_META: TypeMetadata = {
  typeName: 'WebSocket',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'requestedSubprotocols', hasValue: true, hasBinding: true },
    { name: 'url', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 1 },
    { handlerName: 'onBinaryMessageReceived', paramCount: 1 },
    { handlerName: 'onErrorStringChanged', paramCount: 1 },
    { handlerName: 'onNegotiatedSubprotocolChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPong', paramCount: 2 },
    { handlerName: 'onRequestedSubprotocolsChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onTextMessageReceived', paramCount: 1 },
    { handlerName: 'onUrlChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function WebSocket(): WebSocketBuilder {
  return createFluentBuilder('WebSocket', WEBSOCKET_META) as unknown as WebSocketBuilder;
}

export namespace WebSocket {
  export namespace Status {
    export const Connecting = createEnumToken('WebSocket', 'Status', 'Connecting');
    export const Open = createEnumToken('WebSocket', 'Status', 'Open');
    export const Closing = createEnumToken('WebSocket', 'Status', 'Closing');
    export const Closed = createEnumToken('WebSocket', 'Status', 'Closed');
    export const Error = createEnumToken('WebSocket', 'Status', 'Error');
  }
}
