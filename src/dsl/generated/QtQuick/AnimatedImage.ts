// AUTO-GENERATED — DO NOT EDIT
// Type: AnimatedImage
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlRect, QmlSize, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PaletteBuilder } from './Palette.js';
import type { AnchorsBuilder } from './QQuickAnchors.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { LayerBuilder } from './QQuickItemLayer.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface AnimatedImageBuilder {
  id(id: string): AnimatedImageBuilder;
  child(obj: QmlObjectBuilder): AnimatedImageBuilder;

  activeFocusOnTab(value: boolean): AnimatedImageBuilder;
  activeFocusOnTabBind(expr: string): AnimatedImageBuilder;
  antialiasing(value: boolean): AnimatedImageBuilder;
  antialiasingBind(expr: string): AnimatedImageBuilder;
  asynchronous(value: boolean): AnimatedImageBuilder;
  asynchronousBind(expr: string): AnimatedImageBuilder;
  autoTransform(value: boolean): AnimatedImageBuilder;
  autoTransformBind(expr: string): AnimatedImageBuilder;
  baselineOffset(value: number): AnimatedImageBuilder;
  baselineOffsetBind(expr: string): AnimatedImageBuilder;
  cache(value: boolean): AnimatedImageBuilder;
  cacheBind(expr: string): AnimatedImageBuilder;
  clip(value: boolean): AnimatedImageBuilder;
  clipBind(expr: string): AnimatedImageBuilder;
  colorSpace(value: QmlValue): AnimatedImageBuilder;
  colorSpaceBind(expr: string): AnimatedImageBuilder;
  containmentMask(value: QtObjectBuilder): AnimatedImageBuilder;
  containmentMaskBind(expr: string): AnimatedImageBuilder;
  currentFrame(value: number): AnimatedImageBuilder;
  currentFrameBind(expr: string): AnimatedImageBuilder;
  enabled(value: boolean): AnimatedImageBuilder;
  enabledBind(expr: string): AnimatedImageBuilder;
  fillMode(value: QmlEnumToken): AnimatedImageBuilder;
  fillModeBind(expr: string): AnimatedImageBuilder;
  focus(value: boolean): AnimatedImageBuilder;
  focusBind(expr: string): AnimatedImageBuilder;
  focusPolicy(value: QmlEnumToken): AnimatedImageBuilder;
  focusPolicyBind(expr: string): AnimatedImageBuilder;
  height(value: number): AnimatedImageBuilder;
  heightBind(expr: string): AnimatedImageBuilder;
  horizontalAlignment(value: QmlEnumToken): AnimatedImageBuilder;
  horizontalAlignmentBind(expr: string): AnimatedImageBuilder;
  mipmap(value: boolean): AnimatedImageBuilder;
  mipmapBind(expr: string): AnimatedImageBuilder;
  mirror(value: boolean): AnimatedImageBuilder;
  mirrorBind(expr: string): AnimatedImageBuilder;
  mirrorVertically(value: boolean): AnimatedImageBuilder;
  mirrorVerticallyBind(expr: string): AnimatedImageBuilder;
  objectName(value: string): AnimatedImageBuilder;
  objectNameBind(expr: string): AnimatedImageBuilder;
  opacity(value: number): AnimatedImageBuilder;
  opacityBind(expr: string): AnimatedImageBuilder;
  palette(value: PaletteBuilder): AnimatedImageBuilder;
  paletteBind(expr: string): AnimatedImageBuilder;
  parent(value: ItemBuilder): AnimatedImageBuilder;
  parentBind(expr: string): AnimatedImageBuilder;
  paused(value: boolean): AnimatedImageBuilder;
  pausedBind(expr: string): AnimatedImageBuilder;
  playing(value: boolean): AnimatedImageBuilder;
  playingBind(expr: string): AnimatedImageBuilder;
  retainWhileLoading(value: boolean): AnimatedImageBuilder;
  retainWhileLoadingBind(expr: string): AnimatedImageBuilder;
  rotation(value: number): AnimatedImageBuilder;
  rotationBind(expr: string): AnimatedImageBuilder;
  scale(value: number): AnimatedImageBuilder;
  scaleBind(expr: string): AnimatedImageBuilder;
  smooth(value: boolean): AnimatedImageBuilder;
  smoothBind(expr: string): AnimatedImageBuilder;
  source(value: QmlUrl): AnimatedImageBuilder;
  sourceBind(expr: string): AnimatedImageBuilder;
  sourceClipRect(value: QmlRect): AnimatedImageBuilder;
  sourceClipRectBind(expr: string): AnimatedImageBuilder;
  sourceSize(value: QmlSize): AnimatedImageBuilder;
  sourceSizeBind(expr: string): AnimatedImageBuilder;
  speed(value: number): AnimatedImageBuilder;
  speedBind(expr: string): AnimatedImageBuilder;
  state(value: string): AnimatedImageBuilder;
  stateBind(expr: string): AnimatedImageBuilder;
  transformOrigin(value: QmlEnumToken): AnimatedImageBuilder;
  transformOriginBind(expr: string): AnimatedImageBuilder;
  verticalAlignment(value: QmlEnumToken): AnimatedImageBuilder;
  verticalAlignmentBind(expr: string): AnimatedImageBuilder;
  visible(value: boolean): AnimatedImageBuilder;
  visibleBind(expr: string): AnimatedImageBuilder;
  width(value: number): AnimatedImageBuilder;
  widthBind(expr: string): AnimatedImageBuilder;
  x(value: number): AnimatedImageBuilder;
  xBind(expr: string): AnimatedImageBuilder;
  y(value: number): AnimatedImageBuilder;
  yBind(expr: string): AnimatedImageBuilder;
  z(value: number): AnimatedImageBuilder;
  zBind(expr: string): AnimatedImageBuilder;
  onActiveFocusChanged(body: string): AnimatedImageBuilder;
  onActiveFocusOnTabChanged(body: string): AnimatedImageBuilder;
  onAntialiasingChanged(body: string): AnimatedImageBuilder;
  onAsynchronousChanged(body: string): AnimatedImageBuilder;
  onAutoTransformChanged(body: string): AnimatedImageBuilder;
  onBaselineOffsetChanged(body: string): AnimatedImageBuilder;
  onCacheChanged(body: string): AnimatedImageBuilder;
  onChildrenChanged(body: string): AnimatedImageBuilder;
  onChildrenRectChanged(body: string): AnimatedImageBuilder;
  onClipChanged(body: string): AnimatedImageBuilder;
  onColorSpaceChanged(body: string): AnimatedImageBuilder;
  onContainmentMaskChanged(body: string): AnimatedImageBuilder;
  onCurrentFrameChanged(body: string): AnimatedImageBuilder;
  onEnabledChanged(body: string): AnimatedImageBuilder;
  onFillModeChanged(body: string): AnimatedImageBuilder;
  onFocusChanged(body: string): AnimatedImageBuilder;
  onFocusPolicyChanged(body: string): AnimatedImageBuilder;
  onFrameChanged(body: string): AnimatedImageBuilder;
  onFrameCountChanged(body: string): AnimatedImageBuilder;
  onHeightChanged(body: string): AnimatedImageBuilder;
  onHorizontalAlignmentChanged(body: string): AnimatedImageBuilder;
  onImplicitHeightChanged(body: string): AnimatedImageBuilder;
  onImplicitWidthChanged(body: string): AnimatedImageBuilder;
  onMipmapChanged(body: string): AnimatedImageBuilder;
  onMirrorChanged(body: string): AnimatedImageBuilder;
  onMirrorVerticallyChanged(body: string): AnimatedImageBuilder;
  onObjectNameChanged(body: string): AnimatedImageBuilder;
  onOpacityChanged(body: string): AnimatedImageBuilder;
  onPaintedGeometryChanged(body: string): AnimatedImageBuilder;
  onPaletteChanged(body: string): AnimatedImageBuilder;
  onPaletteCreated(body: string): AnimatedImageBuilder;
  onParentChanged(body: string): AnimatedImageBuilder;
  onPausedChanged(body: string): AnimatedImageBuilder;
  onPlayingChanged(body: string): AnimatedImageBuilder;
  onProgressChanged(body: string): AnimatedImageBuilder;
  onRetainWhileLoadingChanged(body: string): AnimatedImageBuilder;
  onRotationChanged(body: string): AnimatedImageBuilder;
  onScaleChanged(body: string): AnimatedImageBuilder;
  onSmoothChanged(body: string): AnimatedImageBuilder;
  onSourceChanged(body: string): AnimatedImageBuilder;
  onSourceClipRectChanged(body: string): AnimatedImageBuilder;
  onSourceSizeChanged(body: string): AnimatedImageBuilder;
  onSpeedChanged(body: string): AnimatedImageBuilder;
  onStateChanged(body: string): AnimatedImageBuilder;
  onStatusChanged(body: string): AnimatedImageBuilder;
  onTransformOriginChanged(body: string): AnimatedImageBuilder;
  onVerticalAlignmentChanged(body: string): AnimatedImageBuilder;
  onVisibleChanged(body: string): AnimatedImageBuilder;
  onVisibleChildrenChanged(body: string): AnimatedImageBuilder;
  onWidthChanged(body: string): AnimatedImageBuilder;
  onWindowChanged(body: string): AnimatedImageBuilder;
  onXChanged(body: string): AnimatedImageBuilder;
  onYChanged(body: string): AnimatedImageBuilder;
  onZChanged(body: string): AnimatedImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AnimatedImageBuilder;
  layer(setup: (b: LayerBuilder) => void): AnimatedImageBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): AnimatedImageBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): AnimatedImageBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): AnimatedImageBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): AnimatedImageBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): AnimatedImageBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): AnimatedImageBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): AnimatedImageBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): AnimatedImageBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): AnimatedImageBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): AnimatedImageBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): AnimatedImageBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): AnimatedImageBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): AnimatedImageBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): AnimatedImageBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): AnimatedImageBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): AnimatedImageBuilder;
}

const ANIMATEDIMAGE_META: TypeMetadata = {
  typeName: 'AnimatedImage',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'autoTransform', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'cache', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'colorSpace', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'currentFrame', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillMode', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'mipmap', hasValue: true, hasBinding: true },
    { name: 'mirror', hasValue: true, hasBinding: true },
    { name: 'mirrorVertically', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'paused', hasValue: true, hasBinding: true },
    { name: 'playing', hasValue: true, hasBinding: true },
    { name: 'retainWhileLoading', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'sourceClipRect', hasValue: true, hasBinding: true },
    { name: 'sourceSize', hasValue: true, hasBinding: true },
    { name: 'speed', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalAlignment', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onAutoTransformChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onCacheChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorSpaceChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFrameChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillModeChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFrameChanged', paramCount: 0 },
    { handlerName: 'onFrameCountChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onMipmapChanged', paramCount: 1 },
    { handlerName: 'onMirrorChanged', paramCount: 0 },
    { handlerName: 'onMirrorVerticallyChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaintedGeometryChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPausedChanged', paramCount: 0 },
    { handlerName: 'onPlayingChanged', paramCount: 0 },
    { handlerName: 'onProgressChanged', paramCount: 1 },
    { handlerName: 'onRetainWhileLoadingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onSourceClipRectChanged', paramCount: 0 },
    { handlerName: 'onSourceSizeChanged', paramCount: 0 },
    { handlerName: 'onSpeedChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalAlignmentChanged', paramCount: 1 },
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
  attached: [
    {
      methodName: 'accessible',
      attachedTypeName: 'Accessible',
      properties: [
        { name: 'checkStateMixed', hasValue: true, hasBinding: true },
        { name: 'checkable', hasValue: true, hasBinding: true },
        { name: 'checked', hasValue: true, hasBinding: true },
        { name: 'defaultButton', hasValue: true, hasBinding: true },
        { name: 'description', hasValue: true, hasBinding: true },
        { name: 'editable', hasValue: true, hasBinding: true },
        { name: 'focusable', hasValue: true, hasBinding: true },
        { name: 'focused', hasValue: true, hasBinding: true },
        { name: 'id', hasValue: true, hasBinding: true },
        { name: 'ignored', hasValue: true, hasBinding: true },
        { name: 'labelFor', hasValue: true, hasBinding: true },
        { name: 'labelledBy', hasValue: true, hasBinding: true },
        { name: 'multiLine', hasValue: true, hasBinding: true },
        { name: 'name', hasValue: true, hasBinding: true },
        { name: 'passwordEdit', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
        { name: 'readOnly', hasValue: true, hasBinding: true },
        { name: 'role', hasValue: true, hasBinding: true },
        { name: 'searchEdit', hasValue: true, hasBinding: true },
        { name: 'selectable', hasValue: true, hasBinding: true },
        { name: 'selectableText', hasValue: true, hasBinding: true },
        { name: 'selected', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCheckStateMixedChanged', paramCount: 1 },
        { handlerName: 'onCheckableChanged', paramCount: 1 },
        { handlerName: 'onCheckedChanged', paramCount: 1 },
        { handlerName: 'onDecreaseAction', paramCount: 0 },
        { handlerName: 'onDefaultButtonChanged', paramCount: 1 },
        { handlerName: 'onDescriptionChanged', paramCount: 0 },
        { handlerName: 'onEditableChanged', paramCount: 1 },
        { handlerName: 'onFocusableChanged', paramCount: 1 },
        { handlerName: 'onFocusedChanged', paramCount: 1 },
        { handlerName: 'onIdChanged', paramCount: 0 },
        { handlerName: 'onIgnoredChanged', paramCount: 0 },
        { handlerName: 'onIncreaseAction', paramCount: 0 },
        { handlerName: 'onLabelForChanged', paramCount: 0 },
        { handlerName: 'onLabelledByChanged', paramCount: 0 },
        { handlerName: 'onMultiLineChanged', paramCount: 1 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onNextPageAction', paramCount: 0 },
        { handlerName: 'onPasswordEditChanged', paramCount: 1 },
        { handlerName: 'onPressAction', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 1 },
        { handlerName: 'onPreviousPageAction', paramCount: 0 },
        { handlerName: 'onReadOnlyChanged', paramCount: 1 },
        { handlerName: 'onRoleChanged', paramCount: 0 },
        { handlerName: 'onScrollDownAction', paramCount: 0 },
        { handlerName: 'onScrollLeftAction', paramCount: 0 },
        { handlerName: 'onScrollRightAction', paramCount: 0 },
        { handlerName: 'onScrollUpAction', paramCount: 0 },
        { handlerName: 'onSearchEditChanged', paramCount: 1 },
        { handlerName: 'onSelectableChanged', paramCount: 1 },
        { handlerName: 'onSelectableTextChanged', paramCount: 1 },
        { handlerName: 'onSelectedChanged', paramCount: 1 },
        { handlerName: 'onToggleAction', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'drag',
      attachedTypeName: 'Drag',
      properties: [
        { name: 'active', hasValue: true, hasBinding: true },
        { name: 'dragType', hasValue: true, hasBinding: true },
        { name: 'hotSpot', hasValue: true, hasBinding: true },
        { name: 'imageSource', hasValue: true, hasBinding: true },
        { name: 'imageSourceSize', hasValue: true, hasBinding: true },
        { name: 'keys', hasValue: true, hasBinding: true },
        { name: 'mimeData', hasValue: true, hasBinding: true },
        { name: 'proposedAction', hasValue: true, hasBinding: true },
        { name: 'source', hasValue: true, hasBinding: true },
        { name: 'supportedActions', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActiveChanged', paramCount: 0 },
        { handlerName: 'onDragFinished', paramCount: 1 },
        { handlerName: 'onDragStarted', paramCount: 0 },
        { handlerName: 'onDragTypeChanged', paramCount: 0 },
        { handlerName: 'onHotSpotChanged', paramCount: 0 },
        { handlerName: 'onImageSourceChanged', paramCount: 0 },
        { handlerName: 'onImageSourceSizeChanged', paramCount: 0 },
        { handlerName: 'onKeysChanged', paramCount: 0 },
        { handlerName: 'onMimeDataChanged', paramCount: 0 },
        { handlerName: 'onProposedActionChanged', paramCount: 0 },
        { handlerName: 'onSourceChanged', paramCount: 0 },
        { handlerName: 'onSupportedActionsChanged', paramCount: 0 },
        { handlerName: 'onTargetChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'enterKey',
      attachedTypeName: 'EnterKey',
      properties: [
        { name: 'type', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onTypeChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'graphicsInfo',
      attachedTypeName: 'GraphicsInfo',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onApiChanged', paramCount: 0 },
        { handlerName: 'onMajorVersionChanged', paramCount: 0 },
        { handlerName: 'onMinorVersionChanged', paramCount: 0 },
        { handlerName: 'onProfileChanged', paramCount: 0 },
        { handlerName: 'onRenderableTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderCompilationTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderSourceTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderTypeChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'gridView',
      attachedTypeName: 'GridView',
      properties: [
        { name: 'delayRemove', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdd', paramCount: 0 },
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onDelayRemoveChanged', paramCount: 0 },
        { handlerName: 'onNextSectionChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onPrevSectionChanged', paramCount: 0 },
        { handlerName: 'onRemove', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onSectionChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'keyNavigation',
      attachedTypeName: 'KeyNavigation',
      properties: [
        { name: 'backtab', hasValue: true, hasBinding: true },
        { name: 'down', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'priority', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'tab', hasValue: true, hasBinding: true },
        { name: 'up', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onBacktabChanged', paramCount: 0 },
        { handlerName: 'onDownChanged', paramCount: 0 },
        { handlerName: 'onLeftChanged', paramCount: 0 },
        { handlerName: 'onPriorityChanged', paramCount: 0 },
        { handlerName: 'onRightChanged', paramCount: 0 },
        { handlerName: 'onTabChanged', paramCount: 0 },
        { handlerName: 'onUpChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'keys',
      attachedTypeName: 'Keys',
      properties: [
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'priority', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAsteriskPressed', paramCount: 1 },
        { handlerName: 'onBackPressed', paramCount: 1 },
        { handlerName: 'onBacktabPressed', paramCount: 1 },
        { handlerName: 'onCallPressed', paramCount: 1 },
        { handlerName: 'onCancelPressed', paramCount: 1 },
        { handlerName: 'onContext1Pressed', paramCount: 1 },
        { handlerName: 'onContext2Pressed', paramCount: 1 },
        { handlerName: 'onContext3Pressed', paramCount: 1 },
        { handlerName: 'onContext4Pressed', paramCount: 1 },
        { handlerName: 'onDeletePressed', paramCount: 1 },
        { handlerName: 'onDigit0Pressed', paramCount: 1 },
        { handlerName: 'onDigit1Pressed', paramCount: 1 },
        { handlerName: 'onDigit2Pressed', paramCount: 1 },
        { handlerName: 'onDigit3Pressed', paramCount: 1 },
        { handlerName: 'onDigit4Pressed', paramCount: 1 },
        { handlerName: 'onDigit5Pressed', paramCount: 1 },
        { handlerName: 'onDigit6Pressed', paramCount: 1 },
        { handlerName: 'onDigit7Pressed', paramCount: 1 },
        { handlerName: 'onDigit8Pressed', paramCount: 1 },
        { handlerName: 'onDigit9Pressed', paramCount: 1 },
        { handlerName: 'onDownPressed', paramCount: 1 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onEnterPressed', paramCount: 1 },
        { handlerName: 'onEscapePressed', paramCount: 1 },
        { handlerName: 'onFlipPressed', paramCount: 1 },
        { handlerName: 'onHangupPressed', paramCount: 1 },
        { handlerName: 'onLeftPressed', paramCount: 1 },
        { handlerName: 'onMenuPressed', paramCount: 1 },
        { handlerName: 'onNoPressed', paramCount: 1 },
        { handlerName: 'onNumberSignPressed', paramCount: 1 },
        { handlerName: 'onPressed', paramCount: 1 },
        { handlerName: 'onPriorityChanged', paramCount: 0 },
        { handlerName: 'onReleased', paramCount: 1 },
        { handlerName: 'onReturnPressed', paramCount: 1 },
        { handlerName: 'onRightPressed', paramCount: 1 },
        { handlerName: 'onSelectPressed', paramCount: 1 },
        { handlerName: 'onShortcutOverride', paramCount: 1 },
        { handlerName: 'onSpacePressed', paramCount: 1 },
        { handlerName: 'onTabPressed', paramCount: 1 },
        { handlerName: 'onUpPressed', paramCount: 1 },
        { handlerName: 'onVolumeDownPressed', paramCount: 1 },
        { handlerName: 'onVolumeUpPressed', paramCount: 1 },
        { handlerName: 'onYesPressed', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'layoutMirroring',
      attachedTypeName: 'LayoutMirroring',
      properties: [
        { name: 'childrenInherit', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onChildrenInheritChanged', paramCount: 0 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'listView',
      attachedTypeName: 'ListView',
      properties: [
        { name: 'delayRemove', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdd', paramCount: 0 },
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onDelayRemoveChanged', paramCount: 0 },
        { handlerName: 'onNextSectionChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onPrevSectionChanged', paramCount: 0 },
        { handlerName: 'onRemove', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onSectionChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'pathView',
      attachedTypeName: 'PathView',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onPathChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'positioner',
      attachedTypeName: 'Positioner',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsFirstItemChanged', paramCount: 0 },
        { handlerName: 'onIsLastItemChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'safeArea',
      attachedTypeName: 'SafeArea',
      properties: [
        { name: 'additionalMargins', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdditionalMarginsChanged', paramCount: 0 },
        { handlerName: 'onMarginsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'screen',
      attachedTypeName: 'Screen',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDesktopGeometryChanged', paramCount: 0 },
        { handlerName: 'onDevicePixelRatioChanged', paramCount: 0 },
        { handlerName: 'onHeightChanged', paramCount: 0 },
        { handlerName: 'onLogicalPixelDensityChanged', paramCount: 0 },
        { handlerName: 'onManufacturerChanged', paramCount: 0 },
        { handlerName: 'onModelChanged', paramCount: 0 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onOrientationChanged', paramCount: 0 },
        { handlerName: 'onPixelDensityChanged', paramCount: 0 },
        { handlerName: 'onPrimaryOrientationChanged', paramCount: 0 },
        { handlerName: 'onSerialNumberChanged', paramCount: 0 },
        { handlerName: 'onVirtualXChanged', paramCount: 0 },
        { handlerName: 'onVirtualYChanged', paramCount: 0 },
        { handlerName: 'onWidthChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'tableView',
      attachedTypeName: 'TableView',
      properties: [
        { name: 'editDelegate', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCommit', paramCount: 0 },
        { handlerName: 'onEditDelegateChanged', paramCount: 0 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'viewTransition',
      attachedTypeName: 'ViewTransition',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDestinationChanged', paramCount: 0 },
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onItemChanged', paramCount: 0 },
        { handlerName: 'onTargetIndexesChanged', paramCount: 0 },
        { handlerName: 'onTargetItemsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'window',
      attachedTypeName: 'Window',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActiveChanged', paramCount: 0 },
        { handlerName: 'onActiveFocusItemChanged', paramCount: 0 },
        { handlerName: 'onContentItemChanged', paramCount: 0 },
        { handlerName: 'onHeightChanged', paramCount: 0 },
        { handlerName: 'onVisibilityChanged', paramCount: 0 },
        { handlerName: 'onWidthChanged', paramCount: 0 },
        { handlerName: 'onWindowChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function AnimatedImage(): AnimatedImageBuilder {
  return createFluentBuilder('AnimatedImage', ANIMATEDIMAGE_META) as unknown as AnimatedImageBuilder;
}

export namespace AnimatedImage {
  export namespace FillMode {
    export const Stretch = createEnumToken('AnimatedImage', 'FillMode', 'Stretch');
    export const PreserveAspectFit = createEnumToken('AnimatedImage', 'FillMode', 'PreserveAspectFit');
    export const PreserveAspectCrop = createEnumToken('AnimatedImage', 'FillMode', 'PreserveAspectCrop');
    export const Tile = createEnumToken('AnimatedImage', 'FillMode', 'Tile');
    export const TileVertically = createEnumToken('AnimatedImage', 'FillMode', 'TileVertically');
    export const TileHorizontally = createEnumToken('AnimatedImage', 'FillMode', 'TileHorizontally');
    export const Pad = createEnumToken('AnimatedImage', 'FillMode', 'Pad');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('AnimatedImage', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('AnimatedImage', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('AnimatedImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('AnimatedImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('AnimatedImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('AnimatedImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('AnimatedImage', 'Flags', 'ItemObservesViewport');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('AnimatedImage', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('AnimatedImage', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('AnimatedImage', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('AnimatedImage', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('AnimatedImage', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('AnimatedImage', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('AnimatedImage', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('AnimatedImage', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('AnimatedImage', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken('AnimatedImage', 'LoadPixmapOptions', 'UseProviderOptions');
  }
  export namespace Status {
    export const Null = createEnumToken('AnimatedImage', 'Status', 'Null');
    export const Ready = createEnumToken('AnimatedImage', 'Status', 'Ready');
    export const Loading = createEnumToken('AnimatedImage', 'Status', 'Loading');
    export const Error = createEnumToken('AnimatedImage', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AnimatedImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AnimatedImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AnimatedImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AnimatedImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AnimatedImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AnimatedImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AnimatedImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AnimatedImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('AnimatedImage', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('AnimatedImage', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('AnimatedImage', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('AnimatedImage', 'VAlignment', 'AlignVCenter');
  }
}
