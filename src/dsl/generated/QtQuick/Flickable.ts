// AUTO-GENERATED — DO NOT EDIT
// Type: Flickable
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
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
import type { TransitionBuilder } from './Transition.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface FlickableBuilder {
  id(id: string): FlickableBuilder;
  child(obj: QmlObjectBuilder): FlickableBuilder;
  children(...objs: QmlObjectBuilder[]): FlickableBuilder;

  acceptedButtons(value: QmlEnumToken): FlickableBuilder;
  acceptedButtonsBind(expr: string): FlickableBuilder;
  activeFocusOnTab(value: boolean): FlickableBuilder;
  activeFocusOnTabBind(expr: string): FlickableBuilder;
  antialiasing(value: boolean): FlickableBuilder;
  antialiasingBind(expr: string): FlickableBuilder;
  baselineOffset(value: number): FlickableBuilder;
  baselineOffsetBind(expr: string): FlickableBuilder;
  bottomMargin(value: number): FlickableBuilder;
  bottomMarginBind(expr: string): FlickableBuilder;
  boundsBehavior(value: QmlEnumToken): FlickableBuilder;
  boundsBehaviorBind(expr: string): FlickableBuilder;
  boundsMovement(value: QmlEnumToken): FlickableBuilder;
  boundsMovementBind(expr: string): FlickableBuilder;
  clip(value: boolean): FlickableBuilder;
  clipBind(expr: string): FlickableBuilder;
  containmentMask(value: QtObjectBuilder): FlickableBuilder;
  containmentMaskBind(expr: string): FlickableBuilder;
  contentHeight(value: number): FlickableBuilder;
  contentHeightBind(expr: string): FlickableBuilder;
  contentWidth(value: number): FlickableBuilder;
  contentWidthBind(expr: string): FlickableBuilder;
  contentX(value: number): FlickableBuilder;
  contentXBind(expr: string): FlickableBuilder;
  contentY(value: number): FlickableBuilder;
  contentYBind(expr: string): FlickableBuilder;
  enabled(value: boolean): FlickableBuilder;
  enabledBind(expr: string): FlickableBuilder;
  flickDeceleration(value: number): FlickableBuilder;
  flickDecelerationBind(expr: string): FlickableBuilder;
  flickableDirection(value: QmlEnumToken): FlickableBuilder;
  flickableDirectionBind(expr: string): FlickableBuilder;
  focus(value: boolean): FlickableBuilder;
  focusBind(expr: string): FlickableBuilder;
  focusPolicy(value: QmlEnumToken): FlickableBuilder;
  focusPolicyBind(expr: string): FlickableBuilder;
  height(value: number): FlickableBuilder;
  heightBind(expr: string): FlickableBuilder;
  implicitHeight(value: number): FlickableBuilder;
  implicitHeightBind(expr: string): FlickableBuilder;
  implicitWidth(value: number): FlickableBuilder;
  implicitWidthBind(expr: string): FlickableBuilder;
  interactive(value: boolean): FlickableBuilder;
  interactiveBind(expr: string): FlickableBuilder;
  leftMargin(value: number): FlickableBuilder;
  leftMarginBind(expr: string): FlickableBuilder;
  maximumFlickVelocity(value: number): FlickableBuilder;
  maximumFlickVelocityBind(expr: string): FlickableBuilder;
  objectName(value: string): FlickableBuilder;
  objectNameBind(expr: string): FlickableBuilder;
  opacity(value: number): FlickableBuilder;
  opacityBind(expr: string): FlickableBuilder;
  palette(value: PaletteBuilder): FlickableBuilder;
  paletteBind(expr: string): FlickableBuilder;
  parent(value: ItemBuilder): FlickableBuilder;
  parentBind(expr: string): FlickableBuilder;
  pixelAligned(value: boolean): FlickableBuilder;
  pixelAlignedBind(expr: string): FlickableBuilder;
  pressDelay(value: number): FlickableBuilder;
  pressDelayBind(expr: string): FlickableBuilder;
  rebound(value: TransitionBuilder): FlickableBuilder;
  reboundBind(expr: string): FlickableBuilder;
  rightMargin(value: number): FlickableBuilder;
  rightMarginBind(expr: string): FlickableBuilder;
  rotation(value: number): FlickableBuilder;
  rotationBind(expr: string): FlickableBuilder;
  scale(value: number): FlickableBuilder;
  scaleBind(expr: string): FlickableBuilder;
  smooth(value: boolean): FlickableBuilder;
  smoothBind(expr: string): FlickableBuilder;
  state(value: string): FlickableBuilder;
  stateBind(expr: string): FlickableBuilder;
  synchronousDrag(value: boolean): FlickableBuilder;
  synchronousDragBind(expr: string): FlickableBuilder;
  topMargin(value: number): FlickableBuilder;
  topMarginBind(expr: string): FlickableBuilder;
  transformOrigin(value: QmlEnumToken): FlickableBuilder;
  transformOriginBind(expr: string): FlickableBuilder;
  visible(value: boolean): FlickableBuilder;
  visibleBind(expr: string): FlickableBuilder;
  width(value: number): FlickableBuilder;
  widthBind(expr: string): FlickableBuilder;
  x(value: number): FlickableBuilder;
  xBind(expr: string): FlickableBuilder;
  y(value: number): FlickableBuilder;
  yBind(expr: string): FlickableBuilder;
  z(value: number): FlickableBuilder;
  zBind(expr: string): FlickableBuilder;
  onAcceptedButtonsChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onAtXBeginningChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onAtXEndChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onAtYBeginningChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onAtYEndChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onBottomMarginChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onBoundsBehaviorChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onBoundsMovementChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onClipChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onContentXChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onContentYChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onDragEnded(handler: DslSignalHandlerValue): FlickableBuilder;
  onDragStarted(handler: DslSignalHandlerValue): FlickableBuilder;
  onDraggingChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onDraggingHorizontallyChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onDraggingVerticallyChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onFlickDecelerationChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onFlickEnded(handler: DslSignalHandlerValue): FlickableBuilder;
  onFlickStarted(handler: DslSignalHandlerValue): FlickableBuilder;
  onFlickableDirectionChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onFlickingChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onFlickingHorizontallyChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onFlickingVerticallyChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onHorizontalOvershootChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onHorizontalVelocityChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onInteractiveChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onIsAtBoundaryChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onLeftMarginChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onMaximumFlickVelocityChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onMovementEnded(handler: DslSignalHandlerValue): FlickableBuilder;
  onMovementStarted(handler: DslSignalHandlerValue): FlickableBuilder;
  onMovingChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onMovingHorizontallyChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onMovingVerticallyChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onOriginXChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onOriginYChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): FlickableBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onPixelAlignedChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onPressDelayChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onReboundChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onRightMarginChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onStateChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onSynchronousDragChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onTopMarginChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onVerticalOvershootChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onVerticalVelocityChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onXChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onYChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  onZChanged(handler: DslSignalHandlerValue): FlickableBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FlickableBuilder;
  layer(setup: (b: LayerBuilder) => void): FlickableBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FlickableBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FlickableBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FlickableBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FlickableBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FlickableBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FlickableBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FlickableBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FlickableBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FlickableBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FlickableBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FlickableBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FlickableBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FlickableBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FlickableBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FlickableBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FlickableBuilder;
}

const FLICKABLE_META: TypeMetadata = {
  typeName: 'Flickable',
  properties: [
    { name: 'acceptedButtons', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomMargin', hasValue: true, hasBinding: true },
    { name: 'boundsBehavior', hasValue: true, hasBinding: true },
    { name: 'boundsMovement', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'contentX', hasValue: true, hasBinding: true },
    { name: 'contentY', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'flickDeceleration', hasValue: true, hasBinding: true },
    { name: 'flickableDirection', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'interactive', hasValue: true, hasBinding: true },
    { name: 'leftMargin', hasValue: true, hasBinding: true },
    { name: 'maximumFlickVelocity', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pixelAligned', hasValue: true, hasBinding: true },
    { name: 'pressDelay', hasValue: true, hasBinding: true },
    { name: 'rebound', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'synchronousDrag', hasValue: true, hasBinding: true },
    { name: 'topMargin', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAcceptedButtonsChanged', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAtXBeginningChanged', paramCount: 0 },
    { handlerName: 'onAtXEndChanged', paramCount: 0 },
    { handlerName: 'onAtYBeginningChanged', paramCount: 0 },
    { handlerName: 'onAtYEndChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomMarginChanged', paramCount: 0 },
    { handlerName: 'onBoundsBehaviorChanged', paramCount: 0 },
    { handlerName: 'onBoundsMovementChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onContentXChanged', paramCount: 0 },
    { handlerName: 'onContentYChanged', paramCount: 0 },
    { handlerName: 'onDragEnded', paramCount: 0 },
    { handlerName: 'onDragStarted', paramCount: 0 },
    { handlerName: 'onDraggingChanged', paramCount: 0 },
    { handlerName: 'onDraggingHorizontallyChanged', paramCount: 0 },
    { handlerName: 'onDraggingVerticallyChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFlickDecelerationChanged', paramCount: 0 },
    { handlerName: 'onFlickEnded', paramCount: 0 },
    { handlerName: 'onFlickStarted', paramCount: 0 },
    { handlerName: 'onFlickableDirectionChanged', paramCount: 0 },
    { handlerName: 'onFlickingChanged', paramCount: 0 },
    { handlerName: 'onFlickingHorizontallyChanged', paramCount: 0 },
    { handlerName: 'onFlickingVerticallyChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalOvershootChanged', paramCount: 0 },
    { handlerName: 'onHorizontalVelocityChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInteractiveChanged', paramCount: 0 },
    { handlerName: 'onIsAtBoundaryChanged', paramCount: 0 },
    { handlerName: 'onLeftMarginChanged', paramCount: 0 },
    { handlerName: 'onMaximumFlickVelocityChanged', paramCount: 0 },
    { handlerName: 'onMovementEnded', paramCount: 0 },
    { handlerName: 'onMovementStarted', paramCount: 0 },
    { handlerName: 'onMovingChanged', paramCount: 0 },
    { handlerName: 'onMovingHorizontallyChanged', paramCount: 0 },
    { handlerName: 'onMovingVerticallyChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOriginXChanged', paramCount: 0 },
    { handlerName: 'onOriginYChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPixelAlignedChanged', paramCount: 0 },
    { handlerName: 'onPressDelayChanged', paramCount: 0 },
    { handlerName: 'onReboundChanged', paramCount: 0 },
    { handlerName: 'onRightMarginChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSynchronousDragChanged', paramCount: 0 },
    { handlerName: 'onTopMarginChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalOvershootChanged', paramCount: 0 },
    { handlerName: 'onVerticalVelocityChanged', paramCount: 0 },
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
  defaultProperty: 'flickableData',
};

export function Flickable(): FlickableBuilder {
  return createFluentBuilder('Flickable', FLICKABLE_META) as unknown as FlickableBuilder;
}

export namespace Flickable {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('Flickable', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('Flickable', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken(
      'Flickable',
      'BoundsBehavior',
      'OvershootBounds',
    );
    export const DragAndOvershootBounds = createEnumToken(
      'Flickable',
      'BoundsBehavior',
      'DragAndOvershootBounds',
    );
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken(
      'Flickable',
      'BoundsMovement',
      'FollowBoundsBehavior',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Flickable',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Flickable',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Flickable', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Flickable', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Flickable', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Flickable', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Flickable',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'AutoFlickDirection',
    );
    export const HorizontalFlick = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'HorizontalFlick',
    );
    export const VerticalFlick = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'VerticalFlick',
    );
    export const HorizontalAndVerticalFlick = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'HorizontalAndVerticalFlick',
    );
    export const AutoFlickIfNeeded = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'AutoFlickIfNeeded',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Flickable', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PositionMode {
    export const AlignLeft = createEnumToken('Flickable', 'PositionMode', 'AlignLeft');
    export const AlignRight = createEnumToken('Flickable', 'PositionMode', 'AlignRight');
    export const AlignHCenter = createEnumToken('Flickable', 'PositionMode', 'AlignHCenter');
    export const AlignTop = createEnumToken('Flickable', 'PositionMode', 'AlignTop');
    export const AlignBottom = createEnumToken('Flickable', 'PositionMode', 'AlignBottom');
    export const AlignVCenter = createEnumToken('Flickable', 'PositionMode', 'AlignVCenter');
    export const AlignCenter = createEnumToken('Flickable', 'PositionMode', 'AlignCenter');
    export const Visible = createEnumToken('Flickable', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('Flickable', 'PositionMode', 'Contain');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Flickable', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Flickable', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Flickable', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Flickable', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Flickable', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Flickable', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Flickable', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Flickable', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Flickable', 'TransformOrigin', 'BottomRight');
  }
}
