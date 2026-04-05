// AUTO-GENERATED — DO NOT EDIT
// Type: WrapMode
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface WrapModeBuilder {
  id(id: string): WrapModeBuilder;
  child(obj: QmlObjectBuilder): WrapModeBuilder;

  objectName(value: string): WrapModeBuilder;
  objectNameBind(expr: string): WrapModeBuilder;
  x(value: QmlEnumToken): WrapModeBuilder;
  xBind(expr: string): WrapModeBuilder;
  y(value: QmlEnumToken): WrapModeBuilder;
  yBind(expr: string): WrapModeBuilder;
  z(value: QmlEnumToken): WrapModeBuilder;
  zBind(expr: string): WrapModeBuilder;
  onObjectNameChanged(body: string): WrapModeBuilder;
  onXChanged(body: string): WrapModeBuilder;
  onYChanged(body: string): WrapModeBuilder;
  onZChanged(body: string): WrapModeBuilder;
}

const WRAPMODE_META: TypeMetadata = {
  typeName: 'WrapMode',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 1 },
    { handlerName: 'onYChanged', paramCount: 1 },
    { handlerName: 'onZChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function WrapMode(): WrapModeBuilder {
  return createFluentBuilder('WrapMode', WRAPMODE_META) as unknown as WrapModeBuilder;
}

export namespace WrapMode {
  export namespace WrapMode {
    export const Repeat = createEnumToken('WrapMode', 'WrapMode', 'Repeat');
    export const MirroredRepeat = createEnumToken('WrapMode', 'WrapMode', 'MirroredRepeat');
    export const ClampToEdge = createEnumToken('WrapMode', 'WrapMode', 'ClampToEdge');
    export const ClampToBorder = createEnumToken('WrapMode', 'WrapMode', 'ClampToBorder');
  }
}
