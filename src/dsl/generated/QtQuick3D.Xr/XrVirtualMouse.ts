// AUTO-GENERATED — DO NOT EDIT
// Type: XrVirtualMouse
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { NodeBuilder } from '../QtQuick3D/Node.js';
import type { XrViewBuilder } from './XrView.js';
export interface XrVirtualMouseBuilder {
  id(id: string): XrVirtualMouseBuilder;
  child(obj: QmlObjectBuilder): XrVirtualMouseBuilder;

  enabled(value: boolean): XrVirtualMouseBuilder;
  enabledBind(expr: string): XrVirtualMouseBuilder;
  leftMouseButton(value: boolean): XrVirtualMouseBuilder;
  leftMouseButtonBind(expr: string): XrVirtualMouseBuilder;
  middleMouseButton(value: boolean): XrVirtualMouseBuilder;
  middleMouseButtonBind(expr: string): XrVirtualMouseBuilder;
  objectName(value: string): XrVirtualMouseBuilder;
  objectNameBind(expr: string): XrVirtualMouseBuilder;
  rightMouseButton(value: boolean): XrVirtualMouseBuilder;
  rightMouseButtonBind(expr: string): XrVirtualMouseBuilder;
  scrollPixelDelta(value: number): XrVirtualMouseBuilder;
  scrollPixelDeltaBind(expr: string): XrVirtualMouseBuilder;
  scrollTimerInterval(value: number): XrVirtualMouseBuilder;
  scrollTimerIntervalBind(expr: string): XrVirtualMouseBuilder;
  scrollWheelX(value: number): XrVirtualMouseBuilder;
  scrollWheelXBind(expr: string): XrVirtualMouseBuilder;
  scrollWheelY(value: number): XrVirtualMouseBuilder;
  scrollWheelYBind(expr: string): XrVirtualMouseBuilder;
  source(value: NodeBuilder): XrVirtualMouseBuilder;
  sourceBind(expr: string): XrVirtualMouseBuilder;
  view(value: XrViewBuilder): XrVirtualMouseBuilder;
  viewBind(expr: string): XrVirtualMouseBuilder;
  onEnabledChanged(body: string): XrVirtualMouseBuilder;
  onLeftMouseButtonChanged(body: string): XrVirtualMouseBuilder;
  onMiddleMouseButtonChanged(body: string): XrVirtualMouseBuilder;
  onObjectNameChanged(body: string): XrVirtualMouseBuilder;
  onRightMouseButtonChanged(body: string): XrVirtualMouseBuilder;
  onScrollPixelDeltaChanged(body: string): XrVirtualMouseBuilder;
  onScrollTimerIntervalChanged(body: string): XrVirtualMouseBuilder;
  onScrollWheelXChanged(body: string): XrVirtualMouseBuilder;
  onScrollWheelYChanged(body: string): XrVirtualMouseBuilder;
  onSourceChanged(body: string): XrVirtualMouseBuilder;
  onViewChanged(body: string): XrVirtualMouseBuilder;
}

const XRVIRTUALMOUSE_META: TypeMetadata = {
  typeName: 'XrVirtualMouse',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'leftMouseButton', hasValue: true, hasBinding: true },
    { name: 'middleMouseButton', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rightMouseButton', hasValue: true, hasBinding: true },
    { name: 'scrollPixelDelta', hasValue: true, hasBinding: true },
    { name: 'scrollTimerInterval', hasValue: true, hasBinding: true },
    { name: 'scrollWheelX', hasValue: true, hasBinding: true },
    { name: 'scrollWheelY', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'view', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onLeftMouseButtonChanged', paramCount: 1 },
    { handlerName: 'onMiddleMouseButtonChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRightMouseButtonChanged', paramCount: 1 },
    { handlerName: 'onScrollPixelDeltaChanged', paramCount: 1 },
    { handlerName: 'onScrollTimerIntervalChanged', paramCount: 1 },
    { handlerName: 'onScrollWheelXChanged', paramCount: 1 },
    { handlerName: 'onScrollWheelYChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onViewChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function XrVirtualMouse(): XrVirtualMouseBuilder {
  return createFluentBuilder('XrVirtualMouse', XRVIRTUALMOUSE_META) as unknown as XrVirtualMouseBuilder;
}
