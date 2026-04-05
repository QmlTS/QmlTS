// AUTO-GENERATED — DO NOT EDIT
// Type: AbstractDayOfWeekRow
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlEnumToken, QmlFont, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
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
export interface AbstractDayOfWeekRowBuilder {
  id(id: string): AbstractDayOfWeekRowBuilder;
  child(obj: QmlObjectBuilder): AbstractDayOfWeekRowBuilder;

  activeFocusOnTab(value: boolean): AbstractDayOfWeekRowBuilder;
  activeFocusOnTabBind(expr: string): AbstractDayOfWeekRowBuilder;
  antialiasing(value: boolean): AbstractDayOfWeekRowBuilder;
  antialiasingBind(expr: string): AbstractDayOfWeekRowBuilder;
  background(value: ItemBuilder): AbstractDayOfWeekRowBuilder;
  backgroundBind(expr: string): AbstractDayOfWeekRowBuilder;
  baselineOffset(value: number): AbstractDayOfWeekRowBuilder;
  baselineOffsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  bottomInset(value: number): AbstractDayOfWeekRowBuilder;
  bottomInsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  bottomPadding(value: number): AbstractDayOfWeekRowBuilder;
  bottomPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  clip(value: boolean): AbstractDayOfWeekRowBuilder;
  clipBind(expr: string): AbstractDayOfWeekRowBuilder;
  containmentMask(value: QtObjectBuilder): AbstractDayOfWeekRowBuilder;
  containmentMaskBind(expr: string): AbstractDayOfWeekRowBuilder;
  contentItem(value: ItemBuilder): AbstractDayOfWeekRowBuilder;
  contentItemBind(expr: string): AbstractDayOfWeekRowBuilder;
  delegate(value: QmlComponent): AbstractDayOfWeekRowBuilder;
  delegateBind(expr: string): AbstractDayOfWeekRowBuilder;
  enabled(value: boolean): AbstractDayOfWeekRowBuilder;
  enabledBind(expr: string): AbstractDayOfWeekRowBuilder;
  focus(value: boolean): AbstractDayOfWeekRowBuilder;
  focusBind(expr: string): AbstractDayOfWeekRowBuilder;
  focusPolicy(value: QmlEnumToken): AbstractDayOfWeekRowBuilder;
  focusPolicyBind(expr: string): AbstractDayOfWeekRowBuilder;
  focusReason(value: QmlEnumToken): AbstractDayOfWeekRowBuilder;
  focusReasonBind(expr: string): AbstractDayOfWeekRowBuilder;
  font(value: QmlFont): AbstractDayOfWeekRowBuilder;
  fontBind(expr: string): AbstractDayOfWeekRowBuilder;
  height(value: number): AbstractDayOfWeekRowBuilder;
  heightBind(expr: string): AbstractDayOfWeekRowBuilder;
  horizontalPadding(value: number): AbstractDayOfWeekRowBuilder;
  horizontalPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  hoverEnabled(value: boolean): AbstractDayOfWeekRowBuilder;
  hoverEnabledBind(expr: string): AbstractDayOfWeekRowBuilder;
  implicitHeight(value: number): AbstractDayOfWeekRowBuilder;
  implicitHeightBind(expr: string): AbstractDayOfWeekRowBuilder;
  implicitWidth(value: number): AbstractDayOfWeekRowBuilder;
  implicitWidthBind(expr: string): AbstractDayOfWeekRowBuilder;
  leftInset(value: number): AbstractDayOfWeekRowBuilder;
  leftInsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  leftPadding(value: number): AbstractDayOfWeekRowBuilder;
  leftPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  locale(value: string): AbstractDayOfWeekRowBuilder;
  localeBind(expr: string): AbstractDayOfWeekRowBuilder;
  objectName(value: string): AbstractDayOfWeekRowBuilder;
  objectNameBind(expr: string): AbstractDayOfWeekRowBuilder;
  opacity(value: number): AbstractDayOfWeekRowBuilder;
  opacityBind(expr: string): AbstractDayOfWeekRowBuilder;
  padding(value: number): AbstractDayOfWeekRowBuilder;
  paddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  palette(value: PaletteBuilder): AbstractDayOfWeekRowBuilder;
  paletteBind(expr: string): AbstractDayOfWeekRowBuilder;
  parent(value: ItemBuilder): AbstractDayOfWeekRowBuilder;
  parentBind(expr: string): AbstractDayOfWeekRowBuilder;
  rightInset(value: number): AbstractDayOfWeekRowBuilder;
  rightInsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  rightPadding(value: number): AbstractDayOfWeekRowBuilder;
  rightPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  rotation(value: number): AbstractDayOfWeekRowBuilder;
  rotationBind(expr: string): AbstractDayOfWeekRowBuilder;
  scale(value: number): AbstractDayOfWeekRowBuilder;
  scaleBind(expr: string): AbstractDayOfWeekRowBuilder;
  smooth(value: boolean): AbstractDayOfWeekRowBuilder;
  smoothBind(expr: string): AbstractDayOfWeekRowBuilder;
  source(value: QmlValue): AbstractDayOfWeekRowBuilder;
  sourceBind(expr: string): AbstractDayOfWeekRowBuilder;
  spacing(value: number): AbstractDayOfWeekRowBuilder;
  spacingBind(expr: string): AbstractDayOfWeekRowBuilder;
  state(value: string): AbstractDayOfWeekRowBuilder;
  stateBind(expr: string): AbstractDayOfWeekRowBuilder;
  topInset(value: number): AbstractDayOfWeekRowBuilder;
  topInsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  topPadding(value: number): AbstractDayOfWeekRowBuilder;
  topPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  transformOrigin(value: QmlEnumToken): AbstractDayOfWeekRowBuilder;
  transformOriginBind(expr: string): AbstractDayOfWeekRowBuilder;
  verticalPadding(value: number): AbstractDayOfWeekRowBuilder;
  verticalPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  visible(value: boolean): AbstractDayOfWeekRowBuilder;
  visibleBind(expr: string): AbstractDayOfWeekRowBuilder;
  wheelEnabled(value: boolean): AbstractDayOfWeekRowBuilder;
  wheelEnabledBind(expr: string): AbstractDayOfWeekRowBuilder;
  width(value: number): AbstractDayOfWeekRowBuilder;
  widthBind(expr: string): AbstractDayOfWeekRowBuilder;
  x(value: number): AbstractDayOfWeekRowBuilder;
  xBind(expr: string): AbstractDayOfWeekRowBuilder;
  y(value: number): AbstractDayOfWeekRowBuilder;
  yBind(expr: string): AbstractDayOfWeekRowBuilder;
  z(value: number): AbstractDayOfWeekRowBuilder;
  zBind(expr: string): AbstractDayOfWeekRowBuilder;
  onActiveFocusChanged(body: string): AbstractDayOfWeekRowBuilder;
  onActiveFocusOnTabChanged(body: string): AbstractDayOfWeekRowBuilder;
  onAntialiasingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onAvailableHeightChanged(body: string): AbstractDayOfWeekRowBuilder;
  onAvailableWidthChanged(body: string): AbstractDayOfWeekRowBuilder;
  onBackgroundChanged(body: string): AbstractDayOfWeekRowBuilder;
  onBaselineOffsetChanged(body: string): AbstractDayOfWeekRowBuilder;
  onBottomInsetChanged(body: string): AbstractDayOfWeekRowBuilder;
  onBottomPaddingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onChildrenChanged(body: string): AbstractDayOfWeekRowBuilder;
  onChildrenRectChanged(body: string): AbstractDayOfWeekRowBuilder;
  onClipChanged(body: string): AbstractDayOfWeekRowBuilder;
  onContainmentMaskChanged(body: string): AbstractDayOfWeekRowBuilder;
  onContentItemChanged(body: string): AbstractDayOfWeekRowBuilder;
  onDelegateChanged(body: string): AbstractDayOfWeekRowBuilder;
  onEnabledChanged(body: string): AbstractDayOfWeekRowBuilder;
  onFocusChanged(body: string): AbstractDayOfWeekRowBuilder;
  onFocusPolicyChanged(body: string): AbstractDayOfWeekRowBuilder;
  onFocusReasonChanged(body: string): AbstractDayOfWeekRowBuilder;
  onFontChanged(body: string): AbstractDayOfWeekRowBuilder;
  onHeightChanged(body: string): AbstractDayOfWeekRowBuilder;
  onHorizontalPaddingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onHoverEnabledChanged(body: string): AbstractDayOfWeekRowBuilder;
  onHoveredChanged(body: string): AbstractDayOfWeekRowBuilder;
  onImplicitBackgroundHeightChanged(body: string): AbstractDayOfWeekRowBuilder;
  onImplicitBackgroundWidthChanged(body: string): AbstractDayOfWeekRowBuilder;
  onImplicitContentHeightChanged(body: string): AbstractDayOfWeekRowBuilder;
  onImplicitContentWidthChanged(body: string): AbstractDayOfWeekRowBuilder;
  onImplicitHeightChanged(body: string): AbstractDayOfWeekRowBuilder;
  onImplicitWidthChanged(body: string): AbstractDayOfWeekRowBuilder;
  onLeftInsetChanged(body: string): AbstractDayOfWeekRowBuilder;
  onLeftPaddingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onLocaleChanged(body: string): AbstractDayOfWeekRowBuilder;
  onMirroredChanged(body: string): AbstractDayOfWeekRowBuilder;
  onObjectNameChanged(body: string): AbstractDayOfWeekRowBuilder;
  onOpacityChanged(body: string): AbstractDayOfWeekRowBuilder;
  onPaddingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onPaletteChanged(body: string): AbstractDayOfWeekRowBuilder;
  onPaletteCreated(body: string): AbstractDayOfWeekRowBuilder;
  onParentChanged(body: string): AbstractDayOfWeekRowBuilder;
  onRightInsetChanged(body: string): AbstractDayOfWeekRowBuilder;
  onRightPaddingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onRotationChanged(body: string): AbstractDayOfWeekRowBuilder;
  onScaleChanged(body: string): AbstractDayOfWeekRowBuilder;
  onSmoothChanged(body: string): AbstractDayOfWeekRowBuilder;
  onSourceChanged(body: string): AbstractDayOfWeekRowBuilder;
  onSpacingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onStateChanged(body: string): AbstractDayOfWeekRowBuilder;
  onTopInsetChanged(body: string): AbstractDayOfWeekRowBuilder;
  onTopPaddingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onTransformOriginChanged(body: string): AbstractDayOfWeekRowBuilder;
  onVerticalPaddingChanged(body: string): AbstractDayOfWeekRowBuilder;
  onVisibleChanged(body: string): AbstractDayOfWeekRowBuilder;
  onVisibleChildrenChanged(body: string): AbstractDayOfWeekRowBuilder;
  onVisualFocusChanged(body: string): AbstractDayOfWeekRowBuilder;
  onWheelEnabledChanged(body: string): AbstractDayOfWeekRowBuilder;
  onWidthChanged(body: string): AbstractDayOfWeekRowBuilder;
  onWindowChanged(body: string): AbstractDayOfWeekRowBuilder;
  onXChanged(body: string): AbstractDayOfWeekRowBuilder;
  onYChanged(body: string): AbstractDayOfWeekRowBuilder;
  onZChanged(body: string): AbstractDayOfWeekRowBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AbstractDayOfWeekRowBuilder;
  layer(setup: (b: LayerBuilder) => void): AbstractDayOfWeekRowBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
}

const ABSTRACTDAYOFWEEKROW_META: TypeMetadata = {
  typeName: 'AbstractDayOfWeekRow',
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
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
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
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
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
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisualFocusChanged', paramCount: 0 },
    { handlerName: 'onWheelEnabledChanged', paramCount: 0 },
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function AbstractDayOfWeekRow(): AbstractDayOfWeekRowBuilder {
  return createFluentBuilder('AbstractDayOfWeekRow', ABSTRACTDAYOFWEEKROW_META) as unknown as AbstractDayOfWeekRowBuilder;
}

export namespace AbstractDayOfWeekRow {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('AbstractDayOfWeekRow', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('AbstractDayOfWeekRow', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('AbstractDayOfWeekRow', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('AbstractDayOfWeekRow', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('AbstractDayOfWeekRow', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('AbstractDayOfWeekRow', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('AbstractDayOfWeekRow', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('AbstractDayOfWeekRow', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'BottomRight');
  }
}
