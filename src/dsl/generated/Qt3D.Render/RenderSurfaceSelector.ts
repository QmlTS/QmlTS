// AUTO-GENERATED — DO NOT EDIT
// Type: RenderSurfaceSelector
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlSize, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface RenderSurfaceSelectorBuilder {
  id(id: string): RenderSurfaceSelectorBuilder;
  child(obj: QmlObjectBuilder): RenderSurfaceSelectorBuilder;

  enabled(value: boolean): RenderSurfaceSelectorBuilder;
  enabledBind(expr: string): RenderSurfaceSelectorBuilder;
  externalRenderTargetSize(value: QmlSize): RenderSurfaceSelectorBuilder;
  externalRenderTargetSizeBind(expr: string): RenderSurfaceSelectorBuilder;
  objectName(value: string): RenderSurfaceSelectorBuilder;
  objectNameBind(expr: string): RenderSurfaceSelectorBuilder;
  parent(value: QmlValue): RenderSurfaceSelectorBuilder;
  parentBind(expr: string): RenderSurfaceSelectorBuilder;
  surface(value: QtObjectBuilder): RenderSurfaceSelectorBuilder;
  surfaceBind(expr: string): RenderSurfaceSelectorBuilder;
  surfacePixelRatio(value: number): RenderSurfaceSelectorBuilder;
  surfacePixelRatioBind(expr: string): RenderSurfaceSelectorBuilder;
  onEnabledChanged(body: string): RenderSurfaceSelectorBuilder;
  onExternalRenderTargetSizeChanged(body: string): RenderSurfaceSelectorBuilder;
  onNodeDestroyed(body: string): RenderSurfaceSelectorBuilder;
  onObjectNameChanged(body: string): RenderSurfaceSelectorBuilder;
  onParentChanged(body: string): RenderSurfaceSelectorBuilder;
  onSurfaceChanged(body: string): RenderSurfaceSelectorBuilder;
  onSurfacePixelRatioChanged(body: string): RenderSurfaceSelectorBuilder;
}

const RENDERSURFACESELECTOR_META: TypeMetadata = {
  typeName: 'RenderSurfaceSelector',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'externalRenderTargetSize', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'surface', hasValue: true, hasBinding: true },
    { name: 'surfacePixelRatio', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onExternalRenderTargetSizeChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSurfaceChanged', paramCount: 1 },
    { handlerName: 'onSurfacePixelRatioChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function RenderSurfaceSelector(): RenderSurfaceSelectorBuilder {
  return createFluentBuilder(
    'RenderSurfaceSelector',
    RENDERSURFACESELECTOR_META,
  ) as unknown as RenderSurfaceSelectorBuilder;
}
