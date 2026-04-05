// AUTO-GENERATED — DO NOT EDIT
// Type: DebugOverlay
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface DebugOverlayBuilder {
  id(id: string): DebugOverlayBuilder;
  child(obj: QmlObjectBuilder): DebugOverlayBuilder;

  enabled(value: boolean): DebugOverlayBuilder;
  enabledBind(expr: string): DebugOverlayBuilder;
  objectName(value: string): DebugOverlayBuilder;
  objectNameBind(expr: string): DebugOverlayBuilder;
  parent(value: QmlValue): DebugOverlayBuilder;
  parentBind(expr: string): DebugOverlayBuilder;
  onEnabledChanged(body: string): DebugOverlayBuilder;
  onNodeDestroyed(body: string): DebugOverlayBuilder;
  onObjectNameChanged(body: string): DebugOverlayBuilder;
  onParentChanged(body: string): DebugOverlayBuilder;
}

const DEBUGOVERLAY_META: TypeMetadata = {
  typeName: 'DebugOverlay',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function DebugOverlay(): DebugOverlayBuilder {
  return createFluentBuilder('DebugOverlay', DEBUGOVERLAY_META) as unknown as DebugOverlayBuilder;
}
