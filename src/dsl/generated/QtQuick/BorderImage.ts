// AUTO-GENERATED — DO NOT EDIT
// Type: BorderImage
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
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
import type { BorderBuilder } from './QQuickScaleGrid.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface BorderImageBuilder {
  id(id: string): BorderImageBuilder;
  child(obj: QmlObjectBuilder): BorderImageBuilder;

  activeFocusOnTab(value: boolean): BorderImageBuilder;
  activeFocusOnTabBind(expr: string): BorderImageBuilder;
  antialiasing(value: boolean): BorderImageBuilder;
  antialiasingBind(expr: string): BorderImageBuilder;
  asynchronous(value: boolean): BorderImageBuilder;
  asynchronousBind(expr: string): BorderImageBuilder;
  baselineOffset(value: number): BorderImageBuilder;
  baselineOffsetBind(expr: string): BorderImageBuilder;
  cache(value: boolean): BorderImageBuilder;
  cacheBind(expr: string): BorderImageBuilder;
  clip(value: boolean): BorderImageBuilder;
  clipBind(expr: string): BorderImageBuilder;
  colorSpace(value: QmlValue): BorderImageBuilder;
  colorSpaceBind(expr: string): BorderImageBuilder;
  containmentMask(value: QtObjectBuilder): BorderImageBuilder;
  containmentMaskBind(expr: string): BorderImageBuilder;
  currentFrame(value: number): BorderImageBuilder;
  currentFrameBind(expr: string): BorderImageBuilder;
  enabled(value: boolean): BorderImageBuilder;
  enabledBind(expr: string): BorderImageBuilder;
  focus(value: boolean): BorderImageBuilder;
  focusBind(expr: string): BorderImageBuilder;
  focusPolicy(value: QmlEnumToken): BorderImageBuilder;
  focusPolicyBind(expr: string): BorderImageBuilder;
  height(value: number): BorderImageBuilder;
  heightBind(expr: string): BorderImageBuilder;
  horizontalTileMode(value: QmlEnumToken): BorderImageBuilder;
  horizontalTileModeBind(expr: string): BorderImageBuilder;
  mirror(value: boolean): BorderImageBuilder;
  mirrorBind(expr: string): BorderImageBuilder;
  mirrorVertically(value: boolean): BorderImageBuilder;
  mirrorVerticallyBind(expr: string): BorderImageBuilder;
  objectName(value: string): BorderImageBuilder;
  objectNameBind(expr: string): BorderImageBuilder;
  opacity(value: number): BorderImageBuilder;
  opacityBind(expr: string): BorderImageBuilder;
  palette(value: PaletteBuilder): BorderImageBuilder;
  paletteBind(expr: string): BorderImageBuilder;
  parent(value: ItemBuilder): BorderImageBuilder;
  parentBind(expr: string): BorderImageBuilder;
  retainWhileLoading(value: boolean): BorderImageBuilder;
  retainWhileLoadingBind(expr: string): BorderImageBuilder;
  rotation(value: number): BorderImageBuilder;
  rotationBind(expr: string): BorderImageBuilder;
  scale(value: number): BorderImageBuilder;
  scaleBind(expr: string): BorderImageBuilder;
  smooth(value: boolean): BorderImageBuilder;
  smoothBind(expr: string): BorderImageBuilder;
  source(value: QmlUrl): BorderImageBuilder;
  sourceBind(expr: string): BorderImageBuilder;
  state(value: string): BorderImageBuilder;
  stateBind(expr: string): BorderImageBuilder;
  transformOrigin(value: QmlEnumToken): BorderImageBuilder;
  transformOriginBind(expr: string): BorderImageBuilder;
  verticalTileMode(value: QmlEnumToken): BorderImageBuilder;
  verticalTileModeBind(expr: string): BorderImageBuilder;
  visible(value: boolean): BorderImageBuilder;
  visibleBind(expr: string): BorderImageBuilder;
  width(value: number): BorderImageBuilder;
  widthBind(expr: string): BorderImageBuilder;
  x(value: number): BorderImageBuilder;
  xBind(expr: string): BorderImageBuilder;
  y(value: number): BorderImageBuilder;
  yBind(expr: string): BorderImageBuilder;
  z(value: number): BorderImageBuilder;
  zBind(expr: string): BorderImageBuilder;
  onActiveFocusChanged(body: string): BorderImageBuilder;
  onActiveFocusOnTabChanged(body: string): BorderImageBuilder;
  onAntialiasingChanged(body: string): BorderImageBuilder;
  onAsynchronousChanged(body: string): BorderImageBuilder;
  onBaselineOffsetChanged(body: string): BorderImageBuilder;
  onCacheChanged(body: string): BorderImageBuilder;
  onChildrenChanged(body: string): BorderImageBuilder;
  onChildrenRectChanged(body: string): BorderImageBuilder;
  onClipChanged(body: string): BorderImageBuilder;
  onColorSpaceChanged(body: string): BorderImageBuilder;
  onContainmentMaskChanged(body: string): BorderImageBuilder;
  onCurrentFrameChanged(body: string): BorderImageBuilder;
  onEnabledChanged(body: string): BorderImageBuilder;
  onFocusChanged(body: string): BorderImageBuilder;
  onFocusPolicyChanged(body: string): BorderImageBuilder;
  onFrameCountChanged(body: string): BorderImageBuilder;
  onHeightChanged(body: string): BorderImageBuilder;
  onHorizontalTileModeChanged(body: string): BorderImageBuilder;
  onImplicitHeightChanged(body: string): BorderImageBuilder;
  onImplicitWidthChanged(body: string): BorderImageBuilder;
  onMirrorChanged(body: string): BorderImageBuilder;
  onMirrorVerticallyChanged(body: string): BorderImageBuilder;
  onObjectNameChanged(body: string): BorderImageBuilder;
  onOpacityChanged(body: string): BorderImageBuilder;
  onPaletteChanged(body: string): BorderImageBuilder;
  onPaletteCreated(body: string): BorderImageBuilder;
  onParentChanged(body: string): BorderImageBuilder;
  onProgressChanged(body: string): BorderImageBuilder;
  onRetainWhileLoadingChanged(body: string): BorderImageBuilder;
  onRotationChanged(body: string): BorderImageBuilder;
  onScaleChanged(body: string): BorderImageBuilder;
  onSmoothChanged(body: string): BorderImageBuilder;
  onSourceChanged(body: string): BorderImageBuilder;
  onSourceClipRectChanged(body: string): BorderImageBuilder;
  onSourceSizeChanged(body: string): BorderImageBuilder;
  onStateChanged(body: string): BorderImageBuilder;
  onStatusChanged(body: string): BorderImageBuilder;
  onTransformOriginChanged(body: string): BorderImageBuilder;
  onVerticalTileModeChanged(body: string): BorderImageBuilder;
  onVisibleChanged(body: string): BorderImageBuilder;
  onVisibleChildrenChanged(body: string): BorderImageBuilder;
  onWidthChanged(body: string): BorderImageBuilder;
  onWindowChanged(body: string): BorderImageBuilder;
  onXChanged(body: string): BorderImageBuilder;
  onYChanged(body: string): BorderImageBuilder;
  onZChanged(body: string): BorderImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): BorderImageBuilder;
  border(setup: (b: BorderBuilder) => void): BorderImageBuilder;
  layer(setup: (b: LayerBuilder) => void): BorderImageBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): BorderImageBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): BorderImageBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): BorderImageBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): BorderImageBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): BorderImageBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): BorderImageBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): BorderImageBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): BorderImageBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): BorderImageBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): BorderImageBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): BorderImageBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): BorderImageBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): BorderImageBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): BorderImageBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): BorderImageBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): BorderImageBuilder;
}

const BORDERIMAGE_META: TypeMetadata = {
  typeName: 'BorderImage',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'cache', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'colorSpace', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'currentFrame', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalTileMode', hasValue: true, hasBinding: true },
    { name: 'mirror', hasValue: true, hasBinding: true },
    { name: 'mirrorVertically', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'retainWhileLoading', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalTileMode', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onCacheChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorSpaceChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFrameChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFrameCountChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalTileModeChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onMirrorChanged', paramCount: 0 },
    { handlerName: 'onMirrorVerticallyChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onProgressChanged', paramCount: 1 },
    { handlerName: 'onRetainWhileLoadingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onSourceClipRectChanged', paramCount: 0 },
    { handlerName: 'onSourceSizeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalTileModeChanged', paramCount: 0 },
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
      methodName: 'border',
      groupName: 'border',
      properties: [
        { name: 'bottom', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'top', hasValue: true, hasBinding: true },
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

export function BorderImage(): BorderImageBuilder {
  return createFluentBuilder('BorderImage', BORDERIMAGE_META) as unknown as BorderImageBuilder;
}

export namespace BorderImage {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('BorderImage', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('BorderImage', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('BorderImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('BorderImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('BorderImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('BorderImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('BorderImage', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('BorderImage', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('BorderImage', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('BorderImage', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('BorderImage', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace LoadPixmapOptions {
    export const NoOption = createEnumToken('BorderImage', 'LoadPixmapOptions', 'NoOption');
    export const HandleDPR = createEnumToken('BorderImage', 'LoadPixmapOptions', 'HandleDPR');
    export const UseProviderOptions = createEnumToken('BorderImage', 'LoadPixmapOptions', 'UseProviderOptions');
  }
  export namespace Status {
    export const Null = createEnumToken('BorderImage', 'Status', 'Null');
    export const Ready = createEnumToken('BorderImage', 'Status', 'Ready');
    export const Loading = createEnumToken('BorderImage', 'Status', 'Loading');
    export const Error = createEnumToken('BorderImage', 'Status', 'Error');
  }
  export namespace TileMode {
    export const Stretch = createEnumToken('BorderImage', 'TileMode', 'Stretch');
    export const Repeat = createEnumToken('BorderImage', 'TileMode', 'Repeat');
    export const Round = createEnumToken('BorderImage', 'TileMode', 'Round');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('BorderImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('BorderImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('BorderImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('BorderImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('BorderImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('BorderImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('BorderImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('BorderImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('BorderImage', 'TransformOrigin', 'BottomRight');
  }
}
