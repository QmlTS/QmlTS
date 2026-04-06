// AUTO-GENERATED — DO NOT EDIT
// Type: PathView
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
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
import type { PathBuilder } from './Path.js';
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
export interface PathViewBuilder {
  id(id: string): PathViewBuilder;
  child(obj: QmlObjectBuilder): PathViewBuilder;
  children(...objs: QmlObjectBuilder[]): PathViewBuilder;

  activeFocusOnTab(value: boolean): PathViewBuilder;
  activeFocusOnTabBind(expr: string): PathViewBuilder;
  antialiasing(value: boolean): PathViewBuilder;
  antialiasingBind(expr: string): PathViewBuilder;
  baselineOffset(value: number): PathViewBuilder;
  baselineOffsetBind(expr: string): PathViewBuilder;
  cacheItemCount(value: number): PathViewBuilder;
  cacheItemCountBind(expr: string): PathViewBuilder;
  clip(value: boolean): PathViewBuilder;
  clipBind(expr: string): PathViewBuilder;
  containmentMask(value: QtObjectBuilder): PathViewBuilder;
  containmentMaskBind(expr: string): PathViewBuilder;
  currentIndex(value: number): PathViewBuilder;
  currentIndexBind(expr: string): PathViewBuilder;
  delegate(value: QmlComponent): PathViewBuilder;
  delegateBind(expr: string): PathViewBuilder;
  dragMargin(value: number): PathViewBuilder;
  dragMarginBind(expr: string): PathViewBuilder;
  enabled(value: boolean): PathViewBuilder;
  enabledBind(expr: string): PathViewBuilder;
  flickDeceleration(value: number): PathViewBuilder;
  flickDecelerationBind(expr: string): PathViewBuilder;
  focus(value: boolean): PathViewBuilder;
  focusBind(expr: string): PathViewBuilder;
  focusPolicy(value: QmlEnumToken): PathViewBuilder;
  focusPolicyBind(expr: string): PathViewBuilder;
  height(value: number): PathViewBuilder;
  heightBind(expr: string): PathViewBuilder;
  highlight(value: QmlComponent): PathViewBuilder;
  highlightBind(expr: string): PathViewBuilder;
  highlightMoveDuration(value: number): PathViewBuilder;
  highlightMoveDurationBind(expr: string): PathViewBuilder;
  highlightRangeMode(value: QmlEnumToken): PathViewBuilder;
  highlightRangeModeBind(expr: string): PathViewBuilder;
  implicitHeight(value: number): PathViewBuilder;
  implicitHeightBind(expr: string): PathViewBuilder;
  implicitWidth(value: number): PathViewBuilder;
  implicitWidthBind(expr: string): PathViewBuilder;
  interactive(value: boolean): PathViewBuilder;
  interactiveBind(expr: string): PathViewBuilder;
  maximumFlickVelocity(value: number): PathViewBuilder;
  maximumFlickVelocityBind(expr: string): PathViewBuilder;
  model(value: QmlValue): PathViewBuilder;
  modelBind(expr: string): PathViewBuilder;
  movementDirection(value: QmlEnumToken): PathViewBuilder;
  movementDirectionBind(expr: string): PathViewBuilder;
  objectName(value: string): PathViewBuilder;
  objectNameBind(expr: string): PathViewBuilder;
  offset(value: number): PathViewBuilder;
  offsetBind(expr: string): PathViewBuilder;
  opacity(value: number): PathViewBuilder;
  opacityBind(expr: string): PathViewBuilder;
  palette(value: PaletteBuilder): PathViewBuilder;
  paletteBind(expr: string): PathViewBuilder;
  parent(value: ItemBuilder): PathViewBuilder;
  parentBind(expr: string): PathViewBuilder;
  path(value: PathBuilder): PathViewBuilder;
  pathBind(expr: string): PathViewBuilder;
  pathItemCount(value: number): PathViewBuilder;
  pathItemCountBind(expr: string): PathViewBuilder;
  preferredHighlightBegin(value: number): PathViewBuilder;
  preferredHighlightBeginBind(expr: string): PathViewBuilder;
  preferredHighlightEnd(value: number): PathViewBuilder;
  preferredHighlightEndBind(expr: string): PathViewBuilder;
  rotation(value: number): PathViewBuilder;
  rotationBind(expr: string): PathViewBuilder;
  scale(value: number): PathViewBuilder;
  scaleBind(expr: string): PathViewBuilder;
  smooth(value: boolean): PathViewBuilder;
  smoothBind(expr: string): PathViewBuilder;
  snapMode(value: QmlEnumToken): PathViewBuilder;
  snapModeBind(expr: string): PathViewBuilder;
  state(value: string): PathViewBuilder;
  stateBind(expr: string): PathViewBuilder;
  transformOrigin(value: QmlEnumToken): PathViewBuilder;
  transformOriginBind(expr: string): PathViewBuilder;
  visible(value: boolean): PathViewBuilder;
  visibleBind(expr: string): PathViewBuilder;
  width(value: number): PathViewBuilder;
  widthBind(expr: string): PathViewBuilder;
  x(value: number): PathViewBuilder;
  xBind(expr: string): PathViewBuilder;
  y(value: number): PathViewBuilder;
  yBind(expr: string): PathViewBuilder;
  z(value: number): PathViewBuilder;
  zBind(expr: string): PathViewBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onCacheItemCountChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onClipChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onCountChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onCurrentItemChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onDragEnded(handler: DslSignalHandlerValue): PathViewBuilder;
  onDragMarginChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onDragStarted(handler: DslSignalHandlerValue): PathViewBuilder;
  onDraggingChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onFlickDecelerationChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onFlickEnded(handler: DslSignalHandlerValue): PathViewBuilder;
  onFlickStarted(handler: DslSignalHandlerValue): PathViewBuilder;
  onFlickingChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onHighlightChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onHighlightItemChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onHighlightMoveDurationChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onHighlightRangeModeChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onInteractiveChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onMaximumFlickVelocityChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onModelChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onMovementDirectionChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onMovementEnded(handler: DslSignalHandlerValue): PathViewBuilder;
  onMovementStarted(handler: DslSignalHandlerValue): PathViewBuilder;
  onMovingChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onOffsetChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): PathViewBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onPathChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onPathItemCountChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onPreferredHighlightBeginChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onPreferredHighlightEndChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onSnapModeChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onSnapPositionChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onStateChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onXChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onYChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  onZChanged(handler: DslSignalHandlerValue): PathViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PathViewBuilder;
  layer(setup: (b: LayerBuilder) => void): PathViewBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathViewBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathViewBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathViewBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathViewBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathViewBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathViewBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathViewBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathViewBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathViewBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathViewBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathViewBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathViewBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathViewBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathViewBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathViewBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathViewBuilder;
}

const PATHVIEW_META: TypeMetadata = {
  typeName: 'PathView',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'cacheItemCount', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'dragMargin', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'flickDeceleration', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'highlight', hasValue: true, hasBinding: true },
    { name: 'highlightMoveDuration', hasValue: true, hasBinding: true },
    { name: 'highlightRangeMode', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'interactive', hasValue: true, hasBinding: true },
    { name: 'maximumFlickVelocity', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'movementDirection', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'offset', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'path', hasValue: true, hasBinding: true },
    { name: 'pathItemCount', hasValue: true, hasBinding: true },
    { name: 'preferredHighlightBegin', hasValue: true, hasBinding: true },
    { name: 'preferredHighlightEnd', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'snapMode', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCacheItemCountChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDragEnded', paramCount: 0 },
    { handlerName: 'onDragMarginChanged', paramCount: 0 },
    { handlerName: 'onDragStarted', paramCount: 0 },
    { handlerName: 'onDraggingChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFlickDecelerationChanged', paramCount: 0 },
    { handlerName: 'onFlickEnded', paramCount: 0 },
    { handlerName: 'onFlickStarted', paramCount: 0 },
    { handlerName: 'onFlickingChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHighlightChanged', paramCount: 0 },
    { handlerName: 'onHighlightItemChanged', paramCount: 0 },
    { handlerName: 'onHighlightMoveDurationChanged', paramCount: 0 },
    { handlerName: 'onHighlightRangeModeChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInteractiveChanged', paramCount: 0 },
    { handlerName: 'onMaximumFlickVelocityChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onMovementDirectionChanged', paramCount: 0 },
    { handlerName: 'onMovementEnded', paramCount: 0 },
    { handlerName: 'onMovementStarted', paramCount: 0 },
    { handlerName: 'onMovingChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOffsetChanged', paramCount: 0 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPathChanged', paramCount: 0 },
    { handlerName: 'onPathItemCountChanged', paramCount: 0 },
    { handlerName: 'onPreferredHighlightBeginChanged', paramCount: 0 },
    { handlerName: 'onPreferredHighlightEndChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSnapModeChanged', paramCount: 0 },
    { handlerName: 'onSnapPositionChanged', paramCount: 0 },
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

export function PathView(): PathViewBuilder {
  return createFluentBuilder('PathView', PATHVIEW_META) as unknown as PathViewBuilder;
}

export namespace PathView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PathView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PathView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PathView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PathView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PathView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PathView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PathView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HighlightRangeMode {
    export const NoHighlightRange = createEnumToken(
      'PathView',
      'HighlightRangeMode',
      'NoHighlightRange',
    );
    export const ApplyRange = createEnumToken('PathView', 'HighlightRangeMode', 'ApplyRange');
    export const StrictlyEnforceRange = createEnumToken(
      'PathView',
      'HighlightRangeMode',
      'StrictlyEnforceRange',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('PathView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace MovementDirection {
    export const Shortest = createEnumToken('PathView', 'MovementDirection', 'Shortest');
    export const Negative = createEnumToken('PathView', 'MovementDirection', 'Negative');
    export const Positive = createEnumToken('PathView', 'MovementDirection', 'Positive');
  }
  export namespace PositionMode {
    export const Beginning = createEnumToken('PathView', 'PositionMode', 'Beginning');
    export const Center = createEnumToken('PathView', 'PositionMode', 'Center');
    export const End = createEnumToken('PathView', 'PositionMode', 'End');
    export const Contain = createEnumToken('PathView', 'PositionMode', 'Contain');
    export const SnapPosition = createEnumToken('PathView', 'PositionMode', 'SnapPosition');
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('PathView', 'SnapMode', 'NoSnap');
    export const SnapToItem = createEnumToken('PathView', 'SnapMode', 'SnapToItem');
    export const SnapOneItem = createEnumToken('PathView', 'SnapMode', 'SnapOneItem');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PathView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PathView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PathView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PathView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PathView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PathView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PathView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PathView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PathView', 'TransformOrigin', 'BottomRight');
  }
}
