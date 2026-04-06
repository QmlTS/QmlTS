// AUTO-GENERATED — DO NOT EDIT
// Type: WebView
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface WebViewBuilder {
  id(id: string): WebViewBuilder;
  child(obj: QmlObjectBuilder): WebViewBuilder;
  children(...objs: QmlObjectBuilder[]): WebViewBuilder;

  activeFocusOnTab(value: boolean): WebViewBuilder;
  activeFocusOnTabBind(expr: string): WebViewBuilder;
  antialiasing(value: boolean): WebViewBuilder;
  antialiasingBind(expr: string): WebViewBuilder;
  baselineOffset(value: number): WebViewBuilder;
  baselineOffsetBind(expr: string): WebViewBuilder;
  clip(value: boolean): WebViewBuilder;
  clipBind(expr: string): WebViewBuilder;
  containmentMask(value: QtObjectBuilder): WebViewBuilder;
  containmentMaskBind(expr: string): WebViewBuilder;
  enabled(value: boolean): WebViewBuilder;
  enabledBind(expr: string): WebViewBuilder;
  focus(value: boolean): WebViewBuilder;
  focusBind(expr: string): WebViewBuilder;
  focusPolicy(value: QmlEnumToken): WebViewBuilder;
  focusPolicyBind(expr: string): WebViewBuilder;
  height(value: number): WebViewBuilder;
  heightBind(expr: string): WebViewBuilder;
  httpUserAgent(value: string): WebViewBuilder;
  httpUserAgentBind(expr: string): WebViewBuilder;
  objectName(value: string): WebViewBuilder;
  objectNameBind(expr: string): WebViewBuilder;
  opacity(value: number): WebViewBuilder;
  opacityBind(expr: string): WebViewBuilder;
  palette(value: PaletteBuilder): WebViewBuilder;
  paletteBind(expr: string): WebViewBuilder;
  parent(value: ItemBuilder): WebViewBuilder;
  parentBind(expr: string): WebViewBuilder;
  rotation(value: number): WebViewBuilder;
  rotationBind(expr: string): WebViewBuilder;
  scale(value: number): WebViewBuilder;
  scaleBind(expr: string): WebViewBuilder;
  smooth(value: boolean): WebViewBuilder;
  smoothBind(expr: string): WebViewBuilder;
  state(value: string): WebViewBuilder;
  stateBind(expr: string): WebViewBuilder;
  transformOrigin(value: QmlEnumToken): WebViewBuilder;
  transformOriginBind(expr: string): WebViewBuilder;
  url(value: QmlUrl): WebViewBuilder;
  urlBind(expr: string): WebViewBuilder;
  visible(value: boolean): WebViewBuilder;
  visibleBind(expr: string): WebViewBuilder;
  width(value: number): WebViewBuilder;
  widthBind(expr: string): WebViewBuilder;
  window(value: QmlValue): WebViewBuilder;
  windowBind(expr: string): WebViewBuilder;
  x(value: number): WebViewBuilder;
  xBind(expr: string): WebViewBuilder;
  y(value: number): WebViewBuilder;
  yBind(expr: string): WebViewBuilder;
  z(value: number): WebViewBuilder;
  zBind(expr: string): WebViewBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onClipChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onContainedWindowChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onCookieAdded(handler: DslSignalHandlerValue): WebViewBuilder;
  onCookieRemoved(handler: DslSignalHandlerValue): WebViewBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onHttpUserAgentChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onLoadProgressChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onLoadingChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): WebViewBuilder;
  onParentChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onStateChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onTitleChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onUrlChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onXChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onYChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  onZChanged(handler: DslSignalHandlerValue): WebViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): WebViewBuilder;
  layer(setup: (b: LayerBuilder) => void): WebViewBuilder;
}

const WEBVIEW_META: TypeMetadata = {
  typeName: 'WebView',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'httpUserAgent', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'url', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'window', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainedWindowChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCookieAdded', paramCount: 2 },
    { handlerName: 'onCookieRemoved', paramCount: 2 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHttpUserAgentChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLoadProgressChanged', paramCount: 0 },
    { handlerName: 'onLoadingChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onUrlChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'anchors',
      groupName: 'anchors',
      properties: [
        { name: 'alignWhenCentered', hasValue: true, hasBinding: true },
        { name: 'baseline', hasValue: true, hasBinding: true },
        { name: 'baselineOffset', hasValue: true, hasBinding: true },
        { name: 'bottom', hasValue: true, hasBinding: true },
        { name: 'bottomMargin', hasValue: true, hasBinding: true },
        { name: 'centerIn', hasValue: true, hasBinding: true },
        { name: 'fill', hasValue: true, hasBinding: true },
        { name: 'horizontalCenter', hasValue: true, hasBinding: true },
        { name: 'horizontalCenterOffset', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'leftMargin', hasValue: true, hasBinding: true },
        { name: 'margins', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'rightMargin', hasValue: true, hasBinding: true },
        { name: 'top', hasValue: true, hasBinding: true },
        { name: 'topMargin', hasValue: true, hasBinding: true },
        { name: 'verticalCenter', hasValue: true, hasBinding: true },
        { name: 'verticalCenterOffset', hasValue: true, hasBinding: true },
      ],
    },
    {
      methodName: 'layer',
      groupName: 'layer',
      properties: [
        { name: 'effect', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'format', hasValue: true, hasBinding: true },
        { name: 'live', hasValue: true, hasBinding: true },
        { name: 'mipmap', hasValue: true, hasBinding: true },
        { name: 'samplerName', hasValue: true, hasBinding: true },
        { name: 'samples', hasValue: true, hasBinding: true },
        { name: 'smooth', hasValue: true, hasBinding: true },
        { name: 'sourceRect', hasValue: true, hasBinding: true },
        { name: 'textureMirroring', hasValue: true, hasBinding: true },
        { name: 'textureSize', hasValue: true, hasBinding: true },
        { name: 'wrapMode', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [],
};

export function WebView(): WebViewBuilder {
  return createFluentBuilder('WebView', WEBVIEW_META) as unknown as WebViewBuilder;
}

export namespace WebView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'WebView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'WebView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('WebView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('WebView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('WebView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('WebView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('WebView', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('WebView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'WebView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadStatus {
    export const LoadStartedStatus = createEnumToken('WebView', 'LoadStatus', 'LoadStartedStatus');
    export const LoadStoppedStatus = createEnumToken('WebView', 'LoadStatus', 'LoadStoppedStatus');
    export const LoadSucceededStatus = createEnumToken(
      'WebView',
      'LoadStatus',
      'LoadSucceededStatus',
    );
    export const LoadFailedStatus = createEnumToken('WebView', 'LoadStatus', 'LoadFailedStatus');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('WebView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('WebView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('WebView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('WebView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('WebView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('WebView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('WebView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('WebView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('WebView', 'TransformOrigin', 'BottomRight');
  }
}
