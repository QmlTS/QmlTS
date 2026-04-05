// AUTO-GENERATED — DO NOT EDIT
// Type: ForwardRenderer
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlRect, QmlSize, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { EntityBuilder } from '../Qt3D.Core/Entity.js';
export interface ForwardRendererBuilder {
  id(id: string): ForwardRendererBuilder;
  child(obj: QmlObjectBuilder): ForwardRendererBuilder;

  buffersToClear(value: QmlEnumToken): ForwardRendererBuilder;
  buffersToClearBind(expr: string): ForwardRendererBuilder;
  camera(value: EntityBuilder): ForwardRendererBuilder;
  cameraBind(expr: string): ForwardRendererBuilder;
  clearColor(value: QmlColor): ForwardRendererBuilder;
  clearColorBind(expr: string): ForwardRendererBuilder;
  enabled(value: boolean): ForwardRendererBuilder;
  enabledBind(expr: string): ForwardRendererBuilder;
  externalRenderTargetSize(value: QmlSize): ForwardRendererBuilder;
  externalRenderTargetSizeBind(expr: string): ForwardRendererBuilder;
  frustumCulling(value: boolean): ForwardRendererBuilder;
  frustumCullingBind(expr: string): ForwardRendererBuilder;
  gamma(value: number): ForwardRendererBuilder;
  gammaBind(expr: string): ForwardRendererBuilder;
  objectName(value: string): ForwardRendererBuilder;
  objectNameBind(expr: string): ForwardRendererBuilder;
  parent(value: QmlValue): ForwardRendererBuilder;
  parentBind(expr: string): ForwardRendererBuilder;
  showDebugOverlay(value: boolean): ForwardRendererBuilder;
  showDebugOverlayBind(expr: string): ForwardRendererBuilder;
  surface(value: QtObjectBuilder): ForwardRendererBuilder;
  surfaceBind(expr: string): ForwardRendererBuilder;
  viewportRect(value: QmlRect): ForwardRendererBuilder;
  viewportRectBind(expr: string): ForwardRendererBuilder;
  window(value: QtObjectBuilder): ForwardRendererBuilder;
  windowBind(expr: string): ForwardRendererBuilder;
  onBuffersToClearChanged(body: string): ForwardRendererBuilder;
  onCameraChanged(body: string): ForwardRendererBuilder;
  onClearColorChanged(body: string): ForwardRendererBuilder;
  onEnabledChanged(body: string): ForwardRendererBuilder;
  onExternalRenderTargetSizeChanged(body: string): ForwardRendererBuilder;
  onFrustumCullingEnabledChanged(body: string): ForwardRendererBuilder;
  onGammaChanged(body: string): ForwardRendererBuilder;
  onNodeDestroyed(body: string): ForwardRendererBuilder;
  onObjectNameChanged(body: string): ForwardRendererBuilder;
  onParentChanged(body: string): ForwardRendererBuilder;
  onShowDebugOverlayChanged(body: string): ForwardRendererBuilder;
  onSurfaceChanged(body: string): ForwardRendererBuilder;
  onViewportRectChanged(body: string): ForwardRendererBuilder;
}

const FORWARDRENDERER_META: TypeMetadata = {
  typeName: 'ForwardRenderer',
  properties: [
    { name: 'buffersToClear', hasValue: true, hasBinding: true },
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'clearColor', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'externalRenderTargetSize', hasValue: true, hasBinding: true },
    { name: 'frustumCulling', hasValue: true, hasBinding: true },
    { name: 'gamma', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'showDebugOverlay', hasValue: true, hasBinding: true },
    { name: 'surface', hasValue: true, hasBinding: true },
    { name: 'viewportRect', hasValue: true, hasBinding: true },
    { name: 'window', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBuffersToClearChanged', paramCount: 1 },
    { handlerName: 'onCameraChanged', paramCount: 1 },
    { handlerName: 'onClearColorChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onExternalRenderTargetSizeChanged', paramCount: 1 },
    { handlerName: 'onFrustumCullingEnabledChanged', paramCount: 1 },
    { handlerName: 'onGammaChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onShowDebugOverlayChanged', paramCount: 1 },
    { handlerName: 'onSurfaceChanged', paramCount: 1 },
    { handlerName: 'onViewportRectChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ForwardRenderer(): ForwardRendererBuilder {
  return createFluentBuilder('ForwardRenderer', FORWARDRENDERER_META) as unknown as ForwardRendererBuilder;
}
