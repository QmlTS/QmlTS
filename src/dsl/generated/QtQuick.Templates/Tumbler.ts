// AUTO-GENERATED — DO NOT EDIT
// Type: Tumbler
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { OverlayAttachedBuilder } from './QQuickOverlayAttached.js';
import type { ScrollBarAttachedBuilder } from './QQuickScrollBarAttached.js';
import type { ScrollIndicatorAttachedBuilder } from './QQuickScrollIndicatorAttached.js';
import type { SelectionRectangleAttachedBuilder } from './QQuickSelectionRectangleAttached.js';
import type { SplitViewAttachedBuilder } from './QQuickSplitViewAttached.js';
import type { StackViewAttachedBuilder } from './QQuickStackViewAttached.js';
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface TumblerBuilder {
  id(id: string): TumblerBuilder;
  child(obj: QmlObjectBuilder): TumblerBuilder;
  children(...objs: QmlObjectBuilder[]): TumblerBuilder;

  activeFocusOnTab(value: boolean): TumblerBuilder;
  activeFocusOnTabBind(expr: string): TumblerBuilder;
  antialiasing(value: boolean): TumblerBuilder;
  antialiasingBind(expr: string): TumblerBuilder;
  background(value: ItemBuilder): TumblerBuilder;
  backgroundBind(expr: string): TumblerBuilder;
  baselineOffset(value: number): TumblerBuilder;
  baselineOffsetBind(expr: string): TumblerBuilder;
  bottomInset(value: number): TumblerBuilder;
  bottomInsetBind(expr: string): TumblerBuilder;
  bottomPadding(value: number): TumblerBuilder;
  bottomPaddingBind(expr: string): TumblerBuilder;
  clip(value: boolean): TumblerBuilder;
  clipBind(expr: string): TumblerBuilder;
  containmentMask(value: QtObjectBuilder): TumblerBuilder;
  containmentMaskBind(expr: string): TumblerBuilder;
  contentItem(value: ItemBuilder): TumblerBuilder;
  contentItemBind(expr: string): TumblerBuilder;
  currentIndex(value: number): TumblerBuilder;
  currentIndexBind(expr: string): TumblerBuilder;
  delegate(value: QmlComponent): TumblerBuilder;
  delegateBind(expr: string): TumblerBuilder;
  enabled(value: boolean): TumblerBuilder;
  enabledBind(expr: string): TumblerBuilder;
  flickDeceleration(value: number): TumblerBuilder;
  flickDecelerationBind(expr: string): TumblerBuilder;
  focus(value: boolean): TumblerBuilder;
  focusBind(expr: string): TumblerBuilder;
  focusPolicy(value: QmlEnumToken): TumblerBuilder;
  focusPolicyBind(expr: string): TumblerBuilder;
  focusReason(value: QmlEnumToken): TumblerBuilder;
  focusReasonBind(expr: string): TumblerBuilder;
  font(value: QmlFont): TumblerBuilder;
  fontBind(expr: string): TumblerBuilder;
  height(value: number): TumblerBuilder;
  heightBind(expr: string): TumblerBuilder;
  horizontalPadding(value: number): TumblerBuilder;
  horizontalPaddingBind(expr: string): TumblerBuilder;
  hoverEnabled(value: boolean): TumblerBuilder;
  hoverEnabledBind(expr: string): TumblerBuilder;
  implicitHeight(value: number): TumblerBuilder;
  implicitHeightBind(expr: string): TumblerBuilder;
  implicitWidth(value: number): TumblerBuilder;
  implicitWidthBind(expr: string): TumblerBuilder;
  leftInset(value: number): TumblerBuilder;
  leftInsetBind(expr: string): TumblerBuilder;
  leftPadding(value: number): TumblerBuilder;
  leftPaddingBind(expr: string): TumblerBuilder;
  locale(value: string): TumblerBuilder;
  localeBind(expr: string): TumblerBuilder;
  model(value: QmlValue): TumblerBuilder;
  modelBind(expr: string): TumblerBuilder;
  objectName(value: string): TumblerBuilder;
  objectNameBind(expr: string): TumblerBuilder;
  opacity(value: number): TumblerBuilder;
  opacityBind(expr: string): TumblerBuilder;
  padding(value: number): TumblerBuilder;
  paddingBind(expr: string): TumblerBuilder;
  palette(value: PaletteBuilder): TumblerBuilder;
  paletteBind(expr: string): TumblerBuilder;
  parent(value: ItemBuilder): TumblerBuilder;
  parentBind(expr: string): TumblerBuilder;
  rightInset(value: number): TumblerBuilder;
  rightInsetBind(expr: string): TumblerBuilder;
  rightPadding(value: number): TumblerBuilder;
  rightPaddingBind(expr: string): TumblerBuilder;
  rotation(value: number): TumblerBuilder;
  rotationBind(expr: string): TumblerBuilder;
  scale(value: number): TumblerBuilder;
  scaleBind(expr: string): TumblerBuilder;
  smooth(value: boolean): TumblerBuilder;
  smoothBind(expr: string): TumblerBuilder;
  spacing(value: number): TumblerBuilder;
  spacingBind(expr: string): TumblerBuilder;
  state(value: string): TumblerBuilder;
  stateBind(expr: string): TumblerBuilder;
  topInset(value: number): TumblerBuilder;
  topInsetBind(expr: string): TumblerBuilder;
  topPadding(value: number): TumblerBuilder;
  topPaddingBind(expr: string): TumblerBuilder;
  transformOrigin(value: QmlEnumToken): TumblerBuilder;
  transformOriginBind(expr: string): TumblerBuilder;
  verticalPadding(value: number): TumblerBuilder;
  verticalPaddingBind(expr: string): TumblerBuilder;
  visible(value: boolean): TumblerBuilder;
  visibleBind(expr: string): TumblerBuilder;
  visibleItemCount(value: number): TumblerBuilder;
  visibleItemCountBind(expr: string): TumblerBuilder;
  wheelEnabled(value: boolean): TumblerBuilder;
  wheelEnabledBind(expr: string): TumblerBuilder;
  width(value: number): TumblerBuilder;
  widthBind(expr: string): TumblerBuilder;
  wrap(value: boolean): TumblerBuilder;
  wrapBind(expr: string): TumblerBuilder;
  x(value: number): TumblerBuilder;
  xBind(expr: string): TumblerBuilder;
  y(value: number): TumblerBuilder;
  yBind(expr: string): TumblerBuilder;
  z(value: number): TumblerBuilder;
  zBind(expr: string): TumblerBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onClipChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onCountChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onCurrentItemChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onFlickDecelerationChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onFontChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onModelChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onMovingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): TumblerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onVisibleItemCountChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onWrapChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onXChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onYChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  onZChanged(handler: DslSignalHandlerValue): TumblerBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TumblerBuilder;
  layer(setup: (b: LayerBuilder) => void): TumblerBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TumblerBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TumblerBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TumblerBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TumblerBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TumblerBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TumblerBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TumblerBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TumblerBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TumblerBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TumblerBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TumblerBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TumblerBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TumblerBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TumblerBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TumblerBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TumblerBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TumblerBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TumblerBuilder;
}

const TUMBLER_META: TypeMetadata = {
  typeName: 'Tumbler',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'flickDeceleration', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'visibleItemCount', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrap', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFlickDecelerationChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onMovingChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisibleItemCountChanged', paramCount: 0 },
    { handlerName: 'onVisualFocusChanged', paramCount: 0 },
    { handlerName: 'onWheelEnabledChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWrapChanged', paramCount: 0 },
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
      methodName: 'actionGroup',
      attachedTypeName: 'ActionGroup',
      properties: [
        { name: 'group', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'applicationWindow',
      attachedTypeName: 'ApplicationWindow',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onActiveFocusControlChanged', paramCount: 0 },
        { handlerName: 'onContentItemChanged', paramCount: 0 },
        { handlerName: 'onFooterChanged', paramCount: 0 },
        { handlerName: 'onHeaderChanged', paramCount: 0 },
        { handlerName: 'onMenuBarChanged', paramCount: 0 },
        { handlerName: 'onWindowChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'buttonGroup',
      attachedTypeName: 'ButtonGroup',
      properties: [
        { name: 'group', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'contextMenu',
      attachedTypeName: 'ContextMenu',
      properties: [
        { name: 'menu', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onMenuChanged', paramCount: 0 },
        { handlerName: 'onRequested', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'dialogButtonBox',
      attachedTypeName: 'DialogButtonBox',
      properties: [
        { name: 'buttonRole', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onButtonBoxChanged', paramCount: 0 },
        { handlerName: 'onButtonRoleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'overlay',
      attachedTypeName: 'Overlay',
      properties: [
        { name: 'modal', hasValue: true, hasBinding: true },
        { name: 'modeless', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onModalChanged', paramCount: 0 },
        { handlerName: 'onModelessChanged', paramCount: 0 },
        { handlerName: 'onOverlayChanged', paramCount: 0 },
        { handlerName: 'onPressed', paramCount: 0 },
        { handlerName: 'onReleased', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'scrollBar',
      attachedTypeName: 'ScrollBar',
      properties: [
        { name: 'horizontal', hasValue: true, hasBinding: true },
        { name: 'vertical', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHorizontalChanged', paramCount: 0 },
        { handlerName: 'onVerticalChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'scrollIndicator',
      attachedTypeName: 'ScrollIndicator',
      properties: [
        { name: 'horizontal', hasValue: true, hasBinding: true },
        { name: 'vertical', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHorizontalChanged', paramCount: 0 },
        { handlerName: 'onVerticalChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'selectionRectangle',
      attachedTypeName: 'SelectionRectangle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onHoveredChanged', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitView',
      attachedTypeName: 'SplitView',
      properties: [
        { name: 'fillHeight', hasValue: true, hasBinding: true },
        { name: 'fillWidth', hasValue: true, hasBinding: true },
        { name: 'maximumHeight', hasValue: true, hasBinding: true },
        { name: 'maximumWidth', hasValue: true, hasBinding: true },
        { name: 'minimumHeight', hasValue: true, hasBinding: true },
        { name: 'minimumWidth', hasValue: true, hasBinding: true },
        { name: 'preferredHeight', hasValue: true, hasBinding: true },
        { name: 'preferredWidth', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onFillHeightChanged', paramCount: 0 },
        { handlerName: 'onFillWidthChanged', paramCount: 0 },
        { handlerName: 'onMaximumHeightChanged', paramCount: 0 },
        { handlerName: 'onMaximumWidthChanged', paramCount: 0 },
        { handlerName: 'onMinimumHeightChanged', paramCount: 0 },
        { handlerName: 'onMinimumWidthChanged', paramCount: 0 },
        { handlerName: 'onPreferredHeightChanged', paramCount: 0 },
        { handlerName: 'onPreferredWidthChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'stackView',
      attachedTypeName: 'StackView',
      properties: [
        { name: 'visible', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActivated', paramCount: 0 },
        { handlerName: 'onActivating', paramCount: 0 },
        { handlerName: 'onDeactivated', paramCount: 0 },
        { handlerName: 'onDeactivating', paramCount: 0 },
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onRemoved', paramCount: 0 },
        { handlerName: 'onStatusChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onVisibleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeDelegate',
      attachedTypeName: 'SwipeDelegate',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onIsNextItemChanged', paramCount: 0 },
        { handlerName: 'onIsPreviousItemChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'tabBar',
      attachedTypeName: 'TabBar',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onPositionChanged', paramCount: 0 },
        { handlerName: 'onTabBarChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'textArea',
      attachedTypeName: 'TextArea',
      properties: [
        { name: 'flickable', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onFlickableChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'toolTip',
      attachedTypeName: 'ToolTip',
      properties: [
        { name: 'delay', hasValue: true, hasBinding: true },
        { name: 'text', hasValue: true, hasBinding: true },
        { name: 'timeout', hasValue: true, hasBinding: true },
        { name: 'visible', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDelayChanged', paramCount: 0 },
        { handlerName: 'onTextChanged', paramCount: 0 },
        { handlerName: 'onTimeoutChanged', paramCount: 0 },
        { handlerName: 'onVisibleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'tumbler',
      attachedTypeName: 'Tumbler',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function Tumbler(): TumblerBuilder {
  return createFluentBuilder('Tumbler', TUMBLER_META) as unknown as TumblerBuilder;
}

export namespace Tumbler {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Tumbler',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Tumbler',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Tumbler', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Tumbler', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Tumbler', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Tumbler', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Tumbler', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Tumbler', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PositionMode {
    export const Beginning = createEnumToken('Tumbler', 'PositionMode', 'Beginning');
    export const Center = createEnumToken('Tumbler', 'PositionMode', 'Center');
    export const End = createEnumToken('Tumbler', 'PositionMode', 'End');
    export const Visible = createEnumToken('Tumbler', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('Tumbler', 'PositionMode', 'Contain');
    export const SnapPosition = createEnumToken('Tumbler', 'PositionMode', 'SnapPosition');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Tumbler', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Tumbler', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Tumbler', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Tumbler', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Tumbler', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Tumbler', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Tumbler', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Tumbler', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Tumbler', 'TransformOrigin', 'BottomRight');
  }
}
