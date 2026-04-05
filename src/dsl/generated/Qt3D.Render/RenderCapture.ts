// AUTO-GENERATED — DO NOT EDIT
// Type: RenderCapture
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface RenderCaptureBuilder {
  id(id: string): RenderCaptureBuilder;
  child(obj: QmlObjectBuilder): RenderCaptureBuilder;

  enabled(value: boolean): RenderCaptureBuilder;
  enabledBind(expr: string): RenderCaptureBuilder;
  objectName(value: string): RenderCaptureBuilder;
  objectNameBind(expr: string): RenderCaptureBuilder;
  parent(value: QmlValue): RenderCaptureBuilder;
  parentBind(expr: string): RenderCaptureBuilder;
  onEnabledChanged(body: string): RenderCaptureBuilder;
  onNodeDestroyed(body: string): RenderCaptureBuilder;
  onObjectNameChanged(body: string): RenderCaptureBuilder;
  onParentChanged(body: string): RenderCaptureBuilder;
}

const RENDERCAPTURE_META: TypeMetadata = {
  typeName: 'RenderCapture',
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
  grouped: [],
  attached: [],
};

export function RenderCapture(): RenderCaptureBuilder {
  return createFluentBuilder(
    'RenderCapture',
    RENDERCAPTURE_META,
  ) as unknown as RenderCaptureBuilder;
}
