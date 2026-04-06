// AUTO-GENERATED — DO NOT EDIT
// Type: AnimatedSprite
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
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
export interface AnimatedSpriteBuilder {
  id(id: string): AnimatedSpriteBuilder;
  child(obj: QmlObjectBuilder): AnimatedSpriteBuilder;
  children(...objs: QmlObjectBuilder[]): AnimatedSpriteBuilder;

  activeFocusOnTab(value: boolean): AnimatedSpriteBuilder;
  activeFocusOnTabBind(expr: string): AnimatedSpriteBuilder;
  antialiasing(value: boolean): AnimatedSpriteBuilder;
  antialiasingBind(expr: string): AnimatedSpriteBuilder;
  baselineOffset(value: number): AnimatedSpriteBuilder;
  baselineOffsetBind(expr: string): AnimatedSpriteBuilder;
  clip(value: boolean): AnimatedSpriteBuilder;
  clipBind(expr: string): AnimatedSpriteBuilder;
  containmentMask(value: QtObjectBuilder): AnimatedSpriteBuilder;
  containmentMaskBind(expr: string): AnimatedSpriteBuilder;
  currentFrame(value: number): AnimatedSpriteBuilder;
  currentFrameBind(expr: string): AnimatedSpriteBuilder;
  enabled(value: boolean): AnimatedSpriteBuilder;
  enabledBind(expr: string): AnimatedSpriteBuilder;
  finishBehavior(value: QmlEnumToken): AnimatedSpriteBuilder;
  finishBehaviorBind(expr: string): AnimatedSpriteBuilder;
  focus(value: boolean): AnimatedSpriteBuilder;
  focusBind(expr: string): AnimatedSpriteBuilder;
  focusPolicy(value: QmlEnumToken): AnimatedSpriteBuilder;
  focusPolicyBind(expr: string): AnimatedSpriteBuilder;
  frameCount(value: number): AnimatedSpriteBuilder;
  frameCountBind(expr: string): AnimatedSpriteBuilder;
  frameDuration(value: number): AnimatedSpriteBuilder;
  frameDurationBind(expr: string): AnimatedSpriteBuilder;
  frameHeight(value: number): AnimatedSpriteBuilder;
  frameHeightBind(expr: string): AnimatedSpriteBuilder;
  frameRate(value: number): AnimatedSpriteBuilder;
  frameRateBind(expr: string): AnimatedSpriteBuilder;
  frameSync(value: boolean): AnimatedSpriteBuilder;
  frameSyncBind(expr: string): AnimatedSpriteBuilder;
  frameWidth(value: number): AnimatedSpriteBuilder;
  frameWidthBind(expr: string): AnimatedSpriteBuilder;
  frameX(value: number): AnimatedSpriteBuilder;
  frameXBind(expr: string): AnimatedSpriteBuilder;
  frameY(value: number): AnimatedSpriteBuilder;
  frameYBind(expr: string): AnimatedSpriteBuilder;
  height(value: number): AnimatedSpriteBuilder;
  heightBind(expr: string): AnimatedSpriteBuilder;
  implicitHeight(value: number): AnimatedSpriteBuilder;
  implicitHeightBind(expr: string): AnimatedSpriteBuilder;
  implicitWidth(value: number): AnimatedSpriteBuilder;
  implicitWidthBind(expr: string): AnimatedSpriteBuilder;
  interpolate(value: boolean): AnimatedSpriteBuilder;
  interpolateBind(expr: string): AnimatedSpriteBuilder;
  loops(value: number): AnimatedSpriteBuilder;
  loopsBind(expr: string): AnimatedSpriteBuilder;
  objectName(value: string): AnimatedSpriteBuilder;
  objectNameBind(expr: string): AnimatedSpriteBuilder;
  opacity(value: number): AnimatedSpriteBuilder;
  opacityBind(expr: string): AnimatedSpriteBuilder;
  palette(value: PaletteBuilder): AnimatedSpriteBuilder;
  paletteBind(expr: string): AnimatedSpriteBuilder;
  parent(value: ItemBuilder): AnimatedSpriteBuilder;
  parentBind(expr: string): AnimatedSpriteBuilder;
  paused(value: boolean): AnimatedSpriteBuilder;
  pausedBind(expr: string): AnimatedSpriteBuilder;
  reverse(value: boolean): AnimatedSpriteBuilder;
  reverseBind(expr: string): AnimatedSpriteBuilder;
  rotation(value: number): AnimatedSpriteBuilder;
  rotationBind(expr: string): AnimatedSpriteBuilder;
  running(value: boolean): AnimatedSpriteBuilder;
  runningBind(expr: string): AnimatedSpriteBuilder;
  scale(value: number): AnimatedSpriteBuilder;
  scaleBind(expr: string): AnimatedSpriteBuilder;
  smooth(value: boolean): AnimatedSpriteBuilder;
  smoothBind(expr: string): AnimatedSpriteBuilder;
  source(value: QmlUrl): AnimatedSpriteBuilder;
  sourceBind(expr: string): AnimatedSpriteBuilder;
  state(value: string): AnimatedSpriteBuilder;
  stateBind(expr: string): AnimatedSpriteBuilder;
  transformOrigin(value: QmlEnumToken): AnimatedSpriteBuilder;
  transformOriginBind(expr: string): AnimatedSpriteBuilder;
  visible(value: boolean): AnimatedSpriteBuilder;
  visibleBind(expr: string): AnimatedSpriteBuilder;
  width(value: number): AnimatedSpriteBuilder;
  widthBind(expr: string): AnimatedSpriteBuilder;
  x(value: number): AnimatedSpriteBuilder;
  xBind(expr: string): AnimatedSpriteBuilder;
  y(value: number): AnimatedSpriteBuilder;
  yBind(expr: string): AnimatedSpriteBuilder;
  z(value: number): AnimatedSpriteBuilder;
  zBind(expr: string): AnimatedSpriteBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onClipChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onCurrentFrameChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFinishBehaviorChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFinished(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFrameCountChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFrameDurationChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFrameHeightChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFrameRateChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFrameSyncChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFrameWidthChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFrameXChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onFrameYChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onInterpolateChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onLoopsChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onPausedChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onReverseChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onRunningChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onStateChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onXChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onYChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  onZChanged(handler: DslSignalHandlerValue): AnimatedSpriteBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AnimatedSpriteBuilder;
  layer(setup: (b: LayerBuilder) => void): AnimatedSpriteBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): AnimatedSpriteBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): AnimatedSpriteBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): AnimatedSpriteBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): AnimatedSpriteBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): AnimatedSpriteBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): AnimatedSpriteBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): AnimatedSpriteBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): AnimatedSpriteBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): AnimatedSpriteBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): AnimatedSpriteBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): AnimatedSpriteBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): AnimatedSpriteBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): AnimatedSpriteBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): AnimatedSpriteBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): AnimatedSpriteBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): AnimatedSpriteBuilder;
}

const ANIMATEDSPRITE_META: TypeMetadata = {
  typeName: 'AnimatedSprite',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'currentFrame', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'finishBehavior', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'frameCount', hasValue: true, hasBinding: true },
    { name: 'frameDuration', hasValue: true, hasBinding: true },
    { name: 'frameHeight', hasValue: true, hasBinding: true },
    { name: 'frameRate', hasValue: true, hasBinding: true },
    { name: 'frameSync', hasValue: true, hasBinding: true },
    { name: 'frameWidth', hasValue: true, hasBinding: true },
    { name: 'frameX', hasValue: true, hasBinding: true },
    { name: 'frameY', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'interpolate', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'paused', hasValue: true, hasBinding: true },
    { name: 'reverse', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCurrentFrameChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFinishBehaviorChanged', paramCount: 1 },
    { handlerName: 'onFinished', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFrameCountChanged', paramCount: 1 },
    { handlerName: 'onFrameDurationChanged', paramCount: 1 },
    { handlerName: 'onFrameHeightChanged', paramCount: 1 },
    { handlerName: 'onFrameRateChanged', paramCount: 1 },
    { handlerName: 'onFrameSyncChanged', paramCount: 1 },
    { handlerName: 'onFrameWidthChanged', paramCount: 1 },
    { handlerName: 'onFrameXChanged', paramCount: 1 },
    { handlerName: 'onFrameYChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInterpolateChanged', paramCount: 1 },
    { handlerName: 'onLoopsChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPausedChanged', paramCount: 1 },
    { handlerName: 'onReverseChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRunningChanged', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onPathChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'positioner',
      attachedTypeName: 'Positioner',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
  defaultProperty: 'data',
};

export function AnimatedSprite(): AnimatedSpriteBuilder {
  return createFluentBuilder(
    'AnimatedSprite',
    ANIMATEDSPRITE_META,
  ) as unknown as AnimatedSpriteBuilder;
}

export namespace AnimatedSprite {
  export namespace FinishBehavior {
    export const FinishAtInitialFrame = createEnumToken(
      'AnimatedSprite',
      'FinishBehavior',
      'FinishAtInitialFrame',
    );
    export const FinishAtFinalFrame = createEnumToken(
      'AnimatedSprite',
      'FinishBehavior',
      'FinishAtFinalFrame',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AnimatedSprite',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AnimatedSprite',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('AnimatedSprite', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('AnimatedSprite', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('AnimatedSprite', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('AnimatedSprite', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'AnimatedSprite',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoopParameters {
    export const Infinite = createEnumToken('AnimatedSprite', 'LoopParameters', 'Infinite');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AnimatedSprite', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AnimatedSprite', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AnimatedSprite', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('AnimatedSprite', 'TransformOrigin', 'BottomRight');
  }
}
