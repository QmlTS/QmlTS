// AUTO-GENERATED — DO NOT EDIT
// Type: WebEngineView
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { WebChannelBuilder } from '../QtWebChannel/WebChannel.js';
import type { WebEngineProfileBuilder } from './WebEngineProfile.js';
export interface WebEngineViewBuilder {
  id(id: string): WebEngineViewBuilder;
  child(obj: QmlObjectBuilder): WebEngineViewBuilder;

  activeFocusOnPress(value: boolean): WebEngineViewBuilder;
  activeFocusOnPressBind(expr: string): WebEngineViewBuilder;
  activeFocusOnTab(value: boolean): WebEngineViewBuilder;
  activeFocusOnTabBind(expr: string): WebEngineViewBuilder;
  antialiasing(value: boolean): WebEngineViewBuilder;
  antialiasingBind(expr: string): WebEngineViewBuilder;
  audioMuted(value: boolean): WebEngineViewBuilder;
  audioMutedBind(expr: string): WebEngineViewBuilder;
  backgroundColor(value: QmlColor): WebEngineViewBuilder;
  backgroundColorBind(expr: string): WebEngineViewBuilder;
  baselineOffset(value: number): WebEngineViewBuilder;
  baselineOffsetBind(expr: string): WebEngineViewBuilder;
  clip(value: boolean): WebEngineViewBuilder;
  clipBind(expr: string): WebEngineViewBuilder;
  containmentMask(value: QtObjectBuilder): WebEngineViewBuilder;
  containmentMaskBind(expr: string): WebEngineViewBuilder;
  devToolsView(value: WebEngineViewBuilder): WebEngineViewBuilder;
  devToolsViewBind(expr: string): WebEngineViewBuilder;
  enabled(value: boolean): WebEngineViewBuilder;
  enabledBind(expr: string): WebEngineViewBuilder;
  focus(value: boolean): WebEngineViewBuilder;
  focusBind(expr: string): WebEngineViewBuilder;
  focusPolicy(value: QmlEnumToken): WebEngineViewBuilder;
  focusPolicyBind(expr: string): WebEngineViewBuilder;
  height(value: number): WebEngineViewBuilder;
  heightBind(expr: string): WebEngineViewBuilder;
  implicitHeight(value: number): WebEngineViewBuilder;
  implicitHeightBind(expr: string): WebEngineViewBuilder;
  implicitWidth(value: number): WebEngineViewBuilder;
  implicitWidthBind(expr: string): WebEngineViewBuilder;
  inspectedView(value: WebEngineViewBuilder): WebEngineViewBuilder;
  inspectedViewBind(expr: string): WebEngineViewBuilder;
  lifecycleState(value: QmlEnumToken): WebEngineViewBuilder;
  lifecycleStateBind(expr: string): WebEngineViewBuilder;
  objectName(value: string): WebEngineViewBuilder;
  objectNameBind(expr: string): WebEngineViewBuilder;
  opacity(value: number): WebEngineViewBuilder;
  opacityBind(expr: string): WebEngineViewBuilder;
  palette(value: PaletteBuilder): WebEngineViewBuilder;
  paletteBind(expr: string): WebEngineViewBuilder;
  parent(value: ItemBuilder): WebEngineViewBuilder;
  parentBind(expr: string): WebEngineViewBuilder;
  profile(value: WebEngineProfileBuilder): WebEngineViewBuilder;
  profileBind(expr: string): WebEngineViewBuilder;
  rotation(value: number): WebEngineViewBuilder;
  rotationBind(expr: string): WebEngineViewBuilder;
  scale(value: number): WebEngineViewBuilder;
  scaleBind(expr: string): WebEngineViewBuilder;
  smooth(value: boolean): WebEngineViewBuilder;
  smoothBind(expr: string): WebEngineViewBuilder;
  state(value: string): WebEngineViewBuilder;
  stateBind(expr: string): WebEngineViewBuilder;
  touchHandleDelegate(value: QmlComponent): WebEngineViewBuilder;
  touchHandleDelegateBind(expr: string): WebEngineViewBuilder;
  transformOrigin(value: QmlEnumToken): WebEngineViewBuilder;
  transformOriginBind(expr: string): WebEngineViewBuilder;
  url(value: QmlUrl): WebEngineViewBuilder;
  urlBind(expr: string): WebEngineViewBuilder;
  visible(value: boolean): WebEngineViewBuilder;
  visibleBind(expr: string): WebEngineViewBuilder;
  webChannel(value: WebChannelBuilder): WebEngineViewBuilder;
  webChannelBind(expr: string): WebEngineViewBuilder;
  webChannelWorld(value: number): WebEngineViewBuilder;
  webChannelWorldBind(expr: string): WebEngineViewBuilder;
  width(value: number): WebEngineViewBuilder;
  widthBind(expr: string): WebEngineViewBuilder;
  x(value: number): WebEngineViewBuilder;
  xBind(expr: string): WebEngineViewBuilder;
  y(value: number): WebEngineViewBuilder;
  yBind(expr: string): WebEngineViewBuilder;
  z(value: number): WebEngineViewBuilder;
  zBind(expr: string): WebEngineViewBuilder;
  zoomFactor(value: number): WebEngineViewBuilder;
  zoomFactorBind(expr: string): WebEngineViewBuilder;
  onActiveFocusChanged(body: string): WebEngineViewBuilder;
  onActiveFocusOnPressChanged(body: string): WebEngineViewBuilder;
  onActiveFocusOnTabChanged(body: string): WebEngineViewBuilder;
  onAntialiasingChanged(body: string): WebEngineViewBuilder;
  onAudioMutedChanged(body: string): WebEngineViewBuilder;
  onAuthenticationDialogRequested(body: string): WebEngineViewBuilder;
  onBackgroundColorChanged(body: string): WebEngineViewBuilder;
  onBaselineOffsetChanged(body: string): WebEngineViewBuilder;
  onCanGoBackChanged(body: string): WebEngineViewBuilder;
  onCanGoForwardChanged(body: string): WebEngineViewBuilder;
  onCertificateError(body: string): WebEngineViewBuilder;
  onChildrenChanged(body: string): WebEngineViewBuilder;
  onChildrenRectChanged(body: string): WebEngineViewBuilder;
  onClipChanged(body: string): WebEngineViewBuilder;
  onColorDialogRequested(body: string): WebEngineViewBuilder;
  onContainmentMaskChanged(body: string): WebEngineViewBuilder;
  onContentsSizeChanged(body: string): WebEngineViewBuilder;
  onContextMenuRequested(body: string): WebEngineViewBuilder;
  onDesktopMediaRequested(body: string): WebEngineViewBuilder;
  onDevToolsViewChanged(body: string): WebEngineViewBuilder;
  onEnabledChanged(body: string): WebEngineViewBuilder;
  onFeaturePermissionRequested(body: string): WebEngineViewBuilder;
  onFileDialogRequested(body: string): WebEngineViewBuilder;
  onFileSystemAccessRequested(body: string): WebEngineViewBuilder;
  onFindTextFinished(body: string): WebEngineViewBuilder;
  onFocusChanged(body: string): WebEngineViewBuilder;
  onFocusPolicyChanged(body: string): WebEngineViewBuilder;
  onFullScreenRequested(body: string): WebEngineViewBuilder;
  onGeometryChangeRequested(body: string): WebEngineViewBuilder;
  onHeightChanged(body: string): WebEngineViewBuilder;
  onIconChanged(body: string): WebEngineViewBuilder;
  onImplicitHeightChanged(body: string): WebEngineViewBuilder;
  onImplicitWidthChanged(body: string): WebEngineViewBuilder;
  onInspectedViewChanged(body: string): WebEngineViewBuilder;
  onIsFullScreenChanged(body: string): WebEngineViewBuilder;
  onJavaScriptConsoleMessage(body: string): WebEngineViewBuilder;
  onJavaScriptDialogRequested(body: string): WebEngineViewBuilder;
  onLifecycleStateChanged(body: string): WebEngineViewBuilder;
  onLinkHovered(body: string): WebEngineViewBuilder;
  onLoadProgressChanged(body: string): WebEngineViewBuilder;
  onLoadingChanged(body: string): WebEngineViewBuilder;
  onNavigationRequested(body: string): WebEngineViewBuilder;
  onNewWindowRequested(body: string): WebEngineViewBuilder;
  onObjectNameChanged(body: string): WebEngineViewBuilder;
  onOpacityChanged(body: string): WebEngineViewBuilder;
  onPaletteChanged(body: string): WebEngineViewBuilder;
  onPaletteCreated(body: string): WebEngineViewBuilder;
  onParentChanged(body: string): WebEngineViewBuilder;
  onPdfPrintingFinished(body: string): WebEngineViewBuilder;
  onPermissionRequested(body: string): WebEngineViewBuilder;
  onPrintRequested(body: string): WebEngineViewBuilder;
  onPrintRequestedByFrame(body: string): WebEngineViewBuilder;
  onProfileChanged(body: string): WebEngineViewBuilder;
  onQuotaRequested(body: string): WebEngineViewBuilder;
  onRecentlyAudibleChanged(body: string): WebEngineViewBuilder;
  onRecommendedStateChanged(body: string): WebEngineViewBuilder;
  onRegisterProtocolHandlerRequested(body: string): WebEngineViewBuilder;
  onRenderProcessPidChanged(body: string): WebEngineViewBuilder;
  onRenderProcessTerminated(body: string): WebEngineViewBuilder;
  onRotationChanged(body: string): WebEngineViewBuilder;
  onScaleChanged(body: string): WebEngineViewBuilder;
  onScrollPositionChanged(body: string): WebEngineViewBuilder;
  onSelectClientCertificate(body: string): WebEngineViewBuilder;
  onSmoothChanged(body: string): WebEngineViewBuilder;
  onStateChanged(body: string): WebEngineViewBuilder;
  onTitleChanged(body: string): WebEngineViewBuilder;
  onTooltipRequested(body: string): WebEngineViewBuilder;
  onTouchHandleDelegateChanged(body: string): WebEngineViewBuilder;
  onTouchSelectionMenuRequested(body: string): WebEngineViewBuilder;
  onTransformOriginChanged(body: string): WebEngineViewBuilder;
  onUrlChanged(body: string): WebEngineViewBuilder;
  onVisibleChanged(body: string): WebEngineViewBuilder;
  onVisibleChildrenChanged(body: string): WebEngineViewBuilder;
  onWebAuthUxRequested(body: string): WebEngineViewBuilder;
  onWebChannelChanged(body: string): WebEngineViewBuilder;
  onWebChannelWorldChanged(body: string): WebEngineViewBuilder;
  onWidthChanged(body: string): WebEngineViewBuilder;
  onWindowChanged(body: string): WebEngineViewBuilder;
  onWindowCloseRequested(body: string): WebEngineViewBuilder;
  onXChanged(body: string): WebEngineViewBuilder;
  onYChanged(body: string): WebEngineViewBuilder;
  onZChanged(body: string): WebEngineViewBuilder;
  onZoomFactorChanged(body: string): WebEngineViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): WebEngineViewBuilder;
  layer(setup: (b: LayerBuilder) => void): WebEngineViewBuilder;
}

const WEBENGINEVIEW_META: TypeMetadata = {
  typeName: 'WebEngineView',
  properties: [
    { name: 'activeFocusOnPress', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'audioMuted', hasValue: true, hasBinding: true },
    { name: 'backgroundColor', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'devToolsView', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'inspectedView', hasValue: true, hasBinding: true },
    { name: 'lifecycleState', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'profile', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'touchHandleDelegate', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'url', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'webChannel', hasValue: true, hasBinding: true },
    { name: 'webChannelWorld', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
    { name: 'zoomFactor', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnPressChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAudioMutedChanged', paramCount: 1 },
    { handlerName: 'onAuthenticationDialogRequested', paramCount: 1 },
    { handlerName: 'onBackgroundColorChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onCanGoBackChanged', paramCount: 0 },
    { handlerName: 'onCanGoForwardChanged', paramCount: 0 },
    { handlerName: 'onCertificateError', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorDialogRequested', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentsSizeChanged', paramCount: 1 },
    { handlerName: 'onContextMenuRequested', paramCount: 1 },
    { handlerName: 'onDesktopMediaRequested', paramCount: 1 },
    { handlerName: 'onDevToolsViewChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFeaturePermissionRequested', paramCount: 2 },
    { handlerName: 'onFileDialogRequested', paramCount: 1 },
    { handlerName: 'onFileSystemAccessRequested', paramCount: 1 },
    { handlerName: 'onFindTextFinished', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFullScreenRequested', paramCount: 1 },
    { handlerName: 'onGeometryChangeRequested', paramCount: 2 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInspectedViewChanged', paramCount: 0 },
    { handlerName: 'onIsFullScreenChanged', paramCount: 0 },
    { handlerName: 'onJavaScriptConsoleMessage', paramCount: 4 },
    { handlerName: 'onJavaScriptDialogRequested', paramCount: 1 },
    { handlerName: 'onLifecycleStateChanged', paramCount: 1 },
    { handlerName: 'onLinkHovered', paramCount: 1 },
    { handlerName: 'onLoadProgressChanged', paramCount: 0 },
    { handlerName: 'onLoadingChanged', paramCount: 1 },
    { handlerName: 'onNavigationRequested', paramCount: 1 },
    { handlerName: 'onNewWindowRequested', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPdfPrintingFinished', paramCount: 2 },
    { handlerName: 'onPermissionRequested', paramCount: 1 },
    { handlerName: 'onPrintRequested', paramCount: 0 },
    { handlerName: 'onPrintRequestedByFrame', paramCount: 1 },
    { handlerName: 'onProfileChanged', paramCount: 0 },
    { handlerName: 'onQuotaRequested', paramCount: 1 },
    { handlerName: 'onRecentlyAudibleChanged', paramCount: 1 },
    { handlerName: 'onRecommendedStateChanged', paramCount: 1 },
    { handlerName: 'onRegisterProtocolHandlerRequested', paramCount: 1 },
    { handlerName: 'onRenderProcessPidChanged', paramCount: 1 },
    { handlerName: 'onRenderProcessTerminated', paramCount: 2 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScrollPositionChanged', paramCount: 1 },
    { handlerName: 'onSelectClientCertificate', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onTooltipRequested', paramCount: 1 },
    { handlerName: 'onTouchHandleDelegateChanged', paramCount: 0 },
    { handlerName: 'onTouchSelectionMenuRequested', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onUrlChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWebAuthUxRequested', paramCount: 1 },
    { handlerName: 'onWebChannelChanged', paramCount: 0 },
    { handlerName: 'onWebChannelWorldChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWindowCloseRequested', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
    { handlerName: 'onZoomFactorChanged', paramCount: 1 },
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
  defaultProperty: 'data',
};

export function WebEngineView(): WebEngineViewBuilder {
  return createFluentBuilder(
    'WebEngineView',
    WEBENGINEVIEW_META,
  ) as unknown as WebEngineViewBuilder;
}

export namespace WebEngineView {
  export namespace ErrorDomain {
    export const NoErrorDomain = createEnumToken('WebEngineView', 'ErrorDomain', 'NoErrorDomain');
    export const InternalErrorDomain = createEnumToken(
      'WebEngineView',
      'ErrorDomain',
      'InternalErrorDomain',
    );
    export const ConnectionErrorDomain = createEnumToken(
      'WebEngineView',
      'ErrorDomain',
      'ConnectionErrorDomain',
    );
    export const CertificateErrorDomain = createEnumToken(
      'WebEngineView',
      'ErrorDomain',
      'CertificateErrorDomain',
    );
    export const HttpErrorDomain = createEnumToken(
      'WebEngineView',
      'ErrorDomain',
      'HttpErrorDomain',
    );
    export const FtpErrorDomain = createEnumToken('WebEngineView', 'ErrorDomain', 'FtpErrorDomain');
    export const DnsErrorDomain = createEnumToken('WebEngineView', 'ErrorDomain', 'DnsErrorDomain');
  }
  export namespace Feature {
    export const MediaAudioCapture = createEnumToken(
      'WebEngineView',
      'Feature',
      'MediaAudioCapture',
    );
    export const MediaVideoCapture = createEnumToken(
      'WebEngineView',
      'Feature',
      'MediaVideoCapture',
    );
    export const MediaAudioVideoCapture = createEnumToken(
      'WebEngineView',
      'Feature',
      'MediaAudioVideoCapture',
    );
    export const Geolocation = createEnumToken('WebEngineView', 'Feature', 'Geolocation');
    export const DesktopVideoCapture = createEnumToken(
      'WebEngineView',
      'Feature',
      'DesktopVideoCapture',
    );
    export const DesktopAudioVideoCapture = createEnumToken(
      'WebEngineView',
      'Feature',
      'DesktopAudioVideoCapture',
    );
    export const Notifications = createEnumToken('WebEngineView', 'Feature', 'Notifications');
    export const ClipboardReadWrite = createEnumToken(
      'WebEngineView',
      'Feature',
      'ClipboardReadWrite',
    );
    export const LocalFontsAccess = createEnumToken('WebEngineView', 'Feature', 'LocalFontsAccess');
  }
  export namespace FindFlags {
    export const FindBackward = createEnumToken('WebEngineView', 'FindFlags', 'FindBackward');
    export const FindCaseSensitively = createEnumToken(
      'WebEngineView',
      'FindFlags',
      'FindCaseSensitively',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'WebEngineView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'WebEngineView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('WebEngineView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('WebEngineView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('WebEngineView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('WebEngineView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'WebEngineView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'WebEngineView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace JavaScriptConsoleMessageLevel {
    export const InfoMessageLevel = createEnumToken(
      'WebEngineView',
      'JavaScriptConsoleMessageLevel',
      'InfoMessageLevel',
    );
    export const WarningMessageLevel = createEnumToken(
      'WebEngineView',
      'JavaScriptConsoleMessageLevel',
      'WarningMessageLevel',
    );
    export const ErrorMessageLevel = createEnumToken(
      'WebEngineView',
      'JavaScriptConsoleMessageLevel',
      'ErrorMessageLevel',
    );
  }
  export namespace LifecycleState {
    export const Active = createEnumToken('WebEngineView', 'LifecycleState', 'Active');
    export const Frozen = createEnumToken('WebEngineView', 'LifecycleState', 'Frozen');
    export const Discarded = createEnumToken('WebEngineView', 'LifecycleState', 'Discarded');
  }
  export namespace LoadStatus {
    export const LoadStartedStatus = createEnumToken(
      'WebEngineView',
      'LoadStatus',
      'LoadStartedStatus',
    );
    export const LoadStoppedStatus = createEnumToken(
      'WebEngineView',
      'LoadStatus',
      'LoadStoppedStatus',
    );
    export const LoadSucceededStatus = createEnumToken(
      'WebEngineView',
      'LoadStatus',
      'LoadSucceededStatus',
    );
    export const LoadFailedStatus = createEnumToken(
      'WebEngineView',
      'LoadStatus',
      'LoadFailedStatus',
    );
  }
  export namespace NavigationRequestAction {
    export const AcceptRequest = createEnumToken(
      'WebEngineView',
      'NavigationRequestAction',
      'AcceptRequest',
    );
    export const IgnoreRequest = createEnumToken(
      'WebEngineView',
      'NavigationRequestAction',
      'IgnoreRequest',
    );
  }
  export namespace NavigationType {
    export const LinkClickedNavigation = createEnumToken(
      'WebEngineView',
      'NavigationType',
      'LinkClickedNavigation',
    );
    export const TypedNavigation = createEnumToken(
      'WebEngineView',
      'NavigationType',
      'TypedNavigation',
    );
    export const FormSubmittedNavigation = createEnumToken(
      'WebEngineView',
      'NavigationType',
      'FormSubmittedNavigation',
    );
    export const BackForwardNavigation = createEnumToken(
      'WebEngineView',
      'NavigationType',
      'BackForwardNavigation',
    );
    export const ReloadNavigation = createEnumToken(
      'WebEngineView',
      'NavigationType',
      'ReloadNavigation',
    );
    export const OtherNavigation = createEnumToken(
      'WebEngineView',
      'NavigationType',
      'OtherNavigation',
    );
    export const RedirectNavigation = createEnumToken(
      'WebEngineView',
      'NavigationType',
      'RedirectNavigation',
    );
  }
  export namespace NewViewDestination {
    export const NewViewInWindow = createEnumToken(
      'WebEngineView',
      'NewViewDestination',
      'NewViewInWindow',
    );
    export const NewViewInTab = createEnumToken(
      'WebEngineView',
      'NewViewDestination',
      'NewViewInTab',
    );
    export const NewViewInDialog = createEnumToken(
      'WebEngineView',
      'NewViewDestination',
      'NewViewInDialog',
    );
    export const NewViewInBackgroundTab = createEnumToken(
      'WebEngineView',
      'NewViewDestination',
      'NewViewInBackgroundTab',
    );
  }
  export namespace PrintedPageOrientation {
    export const Portrait = createEnumToken('WebEngineView', 'PrintedPageOrientation', 'Portrait');
    export const Landscape = createEnumToken(
      'WebEngineView',
      'PrintedPageOrientation',
      'Landscape',
    );
  }
  export namespace PrintedPageSizeId {
    export const Letter = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Letter');
    export const Legal = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Legal');
    export const Executive = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Executive');
    export const A0 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A0');
    export const A1 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A1');
    export const A2 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A2');
    export const A3 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A3');
    export const A4 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A4');
    export const A5 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A5');
    export const A6 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A6');
    export const A7 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A7');
    export const A8 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A8');
    export const A9 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A9');
    export const A10 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A10');
    export const B0 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B0');
    export const B1 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B1');
    export const B2 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B2');
    export const B3 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B3');
    export const B4 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B4');
    export const B5 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B5');
    export const B6 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B6');
    export const B7 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B7');
    export const B8 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B8');
    export const B9 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B9');
    export const B10 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B10');
    export const C5E = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'C5E');
    export const Comm10E = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Comm10E');
    export const DLE = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'DLE');
    export const Folio = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Folio');
    export const Ledger = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Ledger');
    export const Tabloid = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Tabloid');
    export const Custom = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Custom');
    export const A3Extra = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A3Extra');
    export const A4Extra = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A4Extra');
    export const A4Plus = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A4Plus');
    export const A4Small = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A4Small');
    export const A5Extra = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'A5Extra');
    export const B5Extra = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'B5Extra');
    export const JisB0 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB0');
    export const JisB1 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB1');
    export const JisB2 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB2');
    export const JisB3 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB3');
    export const JisB4 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB4');
    export const JisB5 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB5');
    export const JisB6 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB6');
    export const JisB7 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB7');
    export const JisB8 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB8');
    export const JisB9 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB9');
    export const JisB10 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'JisB10');
    export const AnsiC = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'AnsiC');
    export const AnsiD = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'AnsiD');
    export const AnsiE = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'AnsiE');
    export const LegalExtra = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'LegalExtra');
    export const LetterExtra = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'LetterExtra');
    export const LetterPlus = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'LetterPlus');
    export const LetterSmall = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'LetterSmall');
    export const TabloidExtra = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'TabloidExtra',
    );
    export const ArchA = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'ArchA');
    export const ArchB = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'ArchB');
    export const ArchC = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'ArchC');
    export const ArchD = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'ArchD');
    export const ArchE = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'ArchE');
    export const Imperial7x9 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Imperial7x9');
    export const Imperial8x10 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'Imperial8x10',
    );
    export const Imperial9x11 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'Imperial9x11',
    );
    export const Imperial9x12 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'Imperial9x12',
    );
    export const Imperial10x11 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'Imperial10x11',
    );
    export const Imperial10x13 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'Imperial10x13',
    );
    export const Imperial10x14 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'Imperial10x14',
    );
    export const Imperial12x11 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'Imperial12x11',
    );
    export const Imperial15x11 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'Imperial15x11',
    );
    export const ExecutiveStandard = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'ExecutiveStandard',
    );
    export const Note = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Note');
    export const Quarto = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Quarto');
    export const Statement = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Statement');
    export const SuperA = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'SuperA');
    export const SuperB = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'SuperB');
    export const Postcard = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Postcard');
    export const DoublePostcard = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'DoublePostcard',
    );
    export const Prc16K = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Prc16K');
    export const Prc32K = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Prc32K');
    export const Prc32KBig = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Prc32KBig');
    export const FanFoldUS = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'FanFoldUS');
    export const FanFoldGerman = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'FanFoldGerman',
    );
    export const FanFoldGermanLegal = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'FanFoldGermanLegal',
    );
    export const EnvelopeB4 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeB4');
    export const EnvelopeB5 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeB5');
    export const EnvelopeB6 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeB6');
    export const EnvelopeC0 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC0');
    export const EnvelopeC1 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC1');
    export const EnvelopeC2 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC2');
    export const EnvelopeC3 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC3');
    export const EnvelopeC4 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC4');
    export const EnvelopeC6 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC6');
    export const EnvelopeC65 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC65');
    export const EnvelopeC7 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC7');
    export const Envelope9 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Envelope9');
    export const Envelope11 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Envelope11');
    export const Envelope12 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Envelope12');
    export const Envelope14 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Envelope14');
    export const EnvelopeMonarch = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopeMonarch',
    );
    export const EnvelopePersonal = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePersonal',
    );
    export const EnvelopeChou3 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopeChou3',
    );
    export const EnvelopeChou4 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopeChou4',
    );
    export const EnvelopeInvite = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopeInvite',
    );
    export const EnvelopeItalian = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopeItalian',
    );
    export const EnvelopeKaku2 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopeKaku2',
    );
    export const EnvelopeKaku3 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopeKaku3',
    );
    export const EnvelopePrc1 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc1',
    );
    export const EnvelopePrc2 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc2',
    );
    export const EnvelopePrc3 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc3',
    );
    export const EnvelopePrc4 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc4',
    );
    export const EnvelopePrc5 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc5',
    );
    export const EnvelopePrc6 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc6',
    );
    export const EnvelopePrc7 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc7',
    );
    export const EnvelopePrc8 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc8',
    );
    export const EnvelopePrc9 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc9',
    );
    export const EnvelopePrc10 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopePrc10',
    );
    export const EnvelopeYou4 = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'EnvelopeYou4',
    );
    export const LastPageSize = createEnumToken(
      'WebEngineView',
      'PrintedPageSizeId',
      'LastPageSize',
    );
    export const AnsiA = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'AnsiA');
    export const AnsiB = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'AnsiB');
    export const EnvelopeC5 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeC5');
    export const EnvelopeDL = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'EnvelopeDL');
    export const Envelope10 = createEnumToken('WebEngineView', 'PrintedPageSizeId', 'Envelope10');
  }
  export namespace RenderProcessTerminationStatus {
    export const NormalTerminationStatus = createEnumToken(
      'WebEngineView',
      'RenderProcessTerminationStatus',
      'NormalTerminationStatus',
    );
    export const AbnormalTerminationStatus = createEnumToken(
      'WebEngineView',
      'RenderProcessTerminationStatus',
      'AbnormalTerminationStatus',
    );
    export const CrashedTerminationStatus = createEnumToken(
      'WebEngineView',
      'RenderProcessTerminationStatus',
      'CrashedTerminationStatus',
    );
    export const KilledTerminationStatus = createEnumToken(
      'WebEngineView',
      'RenderProcessTerminationStatus',
      'KilledTerminationStatus',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('WebEngineView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('WebEngineView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('WebEngineView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('WebEngineView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('WebEngineView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('WebEngineView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('WebEngineView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('WebEngineView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('WebEngineView', 'TransformOrigin', 'BottomRight');
  }
  export namespace WebAction {
    export const NoWebAction = createEnumToken('WebEngineView', 'WebAction', 'NoWebAction');
    export const Back = createEnumToken('WebEngineView', 'WebAction', 'Back');
    export const Forward = createEnumToken('WebEngineView', 'WebAction', 'Forward');
    export const Stop = createEnumToken('WebEngineView', 'WebAction', 'Stop');
    export const Reload = createEnumToken('WebEngineView', 'WebAction', 'Reload');
    export const Cut = createEnumToken('WebEngineView', 'WebAction', 'Cut');
    export const Copy = createEnumToken('WebEngineView', 'WebAction', 'Copy');
    export const Paste = createEnumToken('WebEngineView', 'WebAction', 'Paste');
    export const Undo = createEnumToken('WebEngineView', 'WebAction', 'Undo');
    export const Redo = createEnumToken('WebEngineView', 'WebAction', 'Redo');
    export const SelectAll = createEnumToken('WebEngineView', 'WebAction', 'SelectAll');
    export const ReloadAndBypassCache = createEnumToken(
      'WebEngineView',
      'WebAction',
      'ReloadAndBypassCache',
    );
    export const PasteAndMatchStyle = createEnumToken(
      'WebEngineView',
      'WebAction',
      'PasteAndMatchStyle',
    );
    export const OpenLinkInThisWindow = createEnumToken(
      'WebEngineView',
      'WebAction',
      'OpenLinkInThisWindow',
    );
    export const OpenLinkInNewWindow = createEnumToken(
      'WebEngineView',
      'WebAction',
      'OpenLinkInNewWindow',
    );
    export const OpenLinkInNewTab = createEnumToken(
      'WebEngineView',
      'WebAction',
      'OpenLinkInNewTab',
    );
    export const CopyLinkToClipboard = createEnumToken(
      'WebEngineView',
      'WebAction',
      'CopyLinkToClipboard',
    );
    export const DownloadLinkToDisk = createEnumToken(
      'WebEngineView',
      'WebAction',
      'DownloadLinkToDisk',
    );
    export const CopyImageToClipboard = createEnumToken(
      'WebEngineView',
      'WebAction',
      'CopyImageToClipboard',
    );
    export const CopyImageUrlToClipboard = createEnumToken(
      'WebEngineView',
      'WebAction',
      'CopyImageUrlToClipboard',
    );
    export const DownloadImageToDisk = createEnumToken(
      'WebEngineView',
      'WebAction',
      'DownloadImageToDisk',
    );
    export const CopyMediaUrlToClipboard = createEnumToken(
      'WebEngineView',
      'WebAction',
      'CopyMediaUrlToClipboard',
    );
    export const ToggleMediaControls = createEnumToken(
      'WebEngineView',
      'WebAction',
      'ToggleMediaControls',
    );
    export const ToggleMediaLoop = createEnumToken('WebEngineView', 'WebAction', 'ToggleMediaLoop');
    export const ToggleMediaPlayPause = createEnumToken(
      'WebEngineView',
      'WebAction',
      'ToggleMediaPlayPause',
    );
    export const ToggleMediaMute = createEnumToken('WebEngineView', 'WebAction', 'ToggleMediaMute');
    export const DownloadMediaToDisk = createEnumToken(
      'WebEngineView',
      'WebAction',
      'DownloadMediaToDisk',
    );
    export const InspectElement = createEnumToken('WebEngineView', 'WebAction', 'InspectElement');
    export const ExitFullScreen = createEnumToken('WebEngineView', 'WebAction', 'ExitFullScreen');
    export const RequestClose = createEnumToken('WebEngineView', 'WebAction', 'RequestClose');
    export const Unselect = createEnumToken('WebEngineView', 'WebAction', 'Unselect');
    export const SavePage = createEnumToken('WebEngineView', 'WebAction', 'SavePage');
    export const OpenLinkInNewBackgroundTab = createEnumToken(
      'WebEngineView',
      'WebAction',
      'OpenLinkInNewBackgroundTab',
    );
    export const ViewSource = createEnumToken('WebEngineView', 'WebAction', 'ViewSource');
    export const ToggleBold = createEnumToken('WebEngineView', 'WebAction', 'ToggleBold');
    export const ToggleItalic = createEnumToken('WebEngineView', 'WebAction', 'ToggleItalic');
    export const ToggleUnderline = createEnumToken('WebEngineView', 'WebAction', 'ToggleUnderline');
    export const ToggleStrikethrough = createEnumToken(
      'WebEngineView',
      'WebAction',
      'ToggleStrikethrough',
    );
    export const AlignLeft = createEnumToken('WebEngineView', 'WebAction', 'AlignLeft');
    export const AlignCenter = createEnumToken('WebEngineView', 'WebAction', 'AlignCenter');
    export const AlignRight = createEnumToken('WebEngineView', 'WebAction', 'AlignRight');
    export const AlignJustified = createEnumToken('WebEngineView', 'WebAction', 'AlignJustified');
    export const Indent = createEnumToken('WebEngineView', 'WebAction', 'Indent');
    export const Outdent = createEnumToken('WebEngineView', 'WebAction', 'Outdent');
    export const InsertOrderedList = createEnumToken(
      'WebEngineView',
      'WebAction',
      'InsertOrderedList',
    );
    export const InsertUnorderedList = createEnumToken(
      'WebEngineView',
      'WebAction',
      'InsertUnorderedList',
    );
    export const ChangeTextDirectionLTR = createEnumToken(
      'WebEngineView',
      'WebAction',
      'ChangeTextDirectionLTR',
    );
    export const ChangeTextDirectionRTL = createEnumToken(
      'WebEngineView',
      'WebAction',
      'ChangeTextDirectionRTL',
    );
    export const WebActionCount = createEnumToken('WebEngineView', 'WebAction', 'WebActionCount');
  }
}
