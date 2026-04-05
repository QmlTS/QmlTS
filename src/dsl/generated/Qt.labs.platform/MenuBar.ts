// AUTO-GENERATED — DO NOT EDIT
// Type: MenuBar
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface MenuBarBuilder {
  id(id: string): MenuBarBuilder;
  child(obj: QmlObjectBuilder): MenuBarBuilder;

  objectName(value: string): MenuBarBuilder;
  objectNameBind(expr: string): MenuBarBuilder;
  window(value: QmlValue): MenuBarBuilder;
  windowBind(expr: string): MenuBarBuilder;
  onMenusChanged(body: string): MenuBarBuilder;
  onObjectNameChanged(body: string): MenuBarBuilder;
  onWindowChanged(body: string): MenuBarBuilder;
}

const MENUBAR_META: TypeMetadata = {
  typeName: 'MenuBar',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'window', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onMenusChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onWindowChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function MenuBar(): MenuBarBuilder {
  return createFluentBuilder('MenuBar', MENUBAR_META) as unknown as MenuBarBuilder;
}
