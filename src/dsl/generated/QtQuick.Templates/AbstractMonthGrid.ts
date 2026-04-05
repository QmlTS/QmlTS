// AUTO-GENERATED — DO NOT EDIT
// Type: AbstractMonthGrid
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
export interface AbstractMonthGridBuilder {
  id(id: string): AbstractMonthGridBuilder;
  child(obj: QmlObjectBuilder): AbstractMonthGridBuilder;

  activeFocusOnTab(value: boolean): AbstractMonthGridBuilder;
  activeFocusOnTabBind(expr: string): AbstractMonthGridBuilder;
  antialiasing(value: boolean): AbstractMonthGridBuilder;
  antialiasingBind(expr: string): AbstractMonthGridBuilder;
  background(value: ItemBuilder): AbstractMonthGridBuilder;
  backgroundBind(expr: string): AbstractMonthGridBuilder;
  baselineOffset(value: number): AbstractMonthGridBuilder;
  baselineOffsetBind(expr: string): AbstractMonthGridBuilder;
  bottomInset(value: number): AbstractMonthGridBuilder;
  bottomInsetBind(expr: string): AbstractMonthGridBuilder;
  bottomPadding(value: number): AbstractMonthGridBuilder;
  bottomPaddingBind(expr: string): AbstractMonthGridBuilder;
  clip(value: boolean): AbstractMonthGridBuilder;
  clipBind(expr: string): AbstractMonthGridBuilder;
  containmentMask(value: QtObjectBuilder): AbstractMonthGridBuilder;
  containmentMaskBind(expr: string): AbstractMonthGridBuilder;
  contentItem(value: ItemBuilder): AbstractMonthGridBuilder;
  contentItemBind(expr: string): AbstractMonthGridBuilder;
  delegate(value: QmlComponent): AbstractMonthGridBuilder;
  delegateBind(expr: string): AbstractMonthGridBuilder;
  enabled(value: boolean): AbstractMonthGridBuilder;
  enabledBind(expr: string): AbstractMonthGridBuilder;
  focus(value: boolean): AbstractMonthGridBuilder;
  focusBind(expr: string): AbstractMonthGridBuilder;
  focusPolicy(value: QmlEnumToken): AbstractMonthGridBuilder;
  focusPolicyBind(expr: string): AbstractMonthGridBuilder;
  focusReason(value: QmlEnumToken): AbstractMonthGridBuilder;
  focusReasonBind(expr: string): AbstractMonthGridBuilder;
  font(value: QmlFont): AbstractMonthGridBuilder;
  fontBind(expr: string): AbstractMonthGridBuilder;
  height(value: number): AbstractMonthGridBuilder;
  heightBind(expr: string): AbstractMonthGridBuilder;
  horizontalPadding(value: number): AbstractMonthGridBuilder;
  horizontalPaddingBind(expr: string): AbstractMonthGridBuilder;
  hoverEnabled(value: boolean): AbstractMonthGridBuilder;
  hoverEnabledBind(expr: string): AbstractMonthGridBuilder;
  implicitHeight(value: number): AbstractMonthGridBuilder;
  implicitHeightBind(expr: string): AbstractMonthGridBuilder;
  implicitWidth(value: number): AbstractMonthGridBuilder;
  implicitWidthBind(expr: string): AbstractMonthGridBuilder;
  leftInset(value: number): AbstractMonthGridBuilder;
  leftInsetBind(expr: string): AbstractMonthGridBuilder;
  leftPadding(value: number): AbstractMonthGridBuilder;
  leftPaddingBind(expr: string): AbstractMonthGridBuilder;
  locale(value: string): AbstractMonthGridBuilder;
  localeBind(expr: string): AbstractMonthGridBuilder;
  month(value: number): AbstractMonthGridBuilder;
  monthBind(expr: string): AbstractMonthGridBuilder;
  objectName(value: string): AbstractMonthGridBuilder;
  objectNameBind(expr: string): AbstractMonthGridBuilder;
  opacity(value: number): AbstractMonthGridBuilder;
  opacityBind(expr: string): AbstractMonthGridBuilder;
  padding(value: number): AbstractMonthGridBuilder;
  paddingBind(expr: string): AbstractMonthGridBuilder;
  palette(value: PaletteBuilder): AbstractMonthGridBuilder;
  paletteBind(expr: string): AbstractMonthGridBuilder;
  parent(value: ItemBuilder): AbstractMonthGridBuilder;
  parentBind(expr: string): AbstractMonthGridBuilder;
  rightInset(value: number): AbstractMonthGridBuilder;
  rightInsetBind(expr: string): AbstractMonthGridBuilder;
  rightPadding(value: number): AbstractMonthGridBuilder;
  rightPaddingBind(expr: string): AbstractMonthGridBuilder;
  rotation(value: number): AbstractMonthGridBuilder;
  rotationBind(expr: string): AbstractMonthGridBuilder;
  scale(value: number): AbstractMonthGridBuilder;
  scaleBind(expr: string): AbstractMonthGridBuilder;
  smooth(value: boolean): AbstractMonthGridBuilder;
  smoothBind(expr: string): AbstractMonthGridBuilder;
  source(value: QmlValue): AbstractMonthGridBuilder;
  sourceBind(expr: string): AbstractMonthGridBuilder;
  spacing(value: number): AbstractMonthGridBuilder;
  spacingBind(expr: string): AbstractMonthGridBuilder;
  state(value: string): AbstractMonthGridBuilder;
  stateBind(expr: string): AbstractMonthGridBuilder;
  title(value: string): AbstractMonthGridBuilder;
  titleBind(expr: string): AbstractMonthGridBuilder;
  topInset(value: number): AbstractMonthGridBuilder;
  topInsetBind(expr: string): AbstractMonthGridBuilder;
  topPadding(value: number): AbstractMonthGridBuilder;
  topPaddingBind(expr: string): AbstractMonthGridBuilder;
  transformOrigin(value: QmlEnumToken): AbstractMonthGridBuilder;
  transformOriginBind(expr: string): AbstractMonthGridBuilder;
  verticalPadding(value: number): AbstractMonthGridBuilder;
  verticalPaddingBind(expr: string): AbstractMonthGridBuilder;
  visible(value: boolean): AbstractMonthGridBuilder;
  visibleBind(expr: string): AbstractMonthGridBuilder;
  wheelEnabled(value: boolean): AbstractMonthGridBuilder;
  wheelEnabledBind(expr: string): AbstractMonthGridBuilder;
  width(value: number): AbstractMonthGridBuilder;
  widthBind(expr: string): AbstractMonthGridBuilder;
  x(value: number): AbstractMonthGridBuilder;
  xBind(expr: string): AbstractMonthGridBuilder;
  y(value: number): AbstractMonthGridBuilder;
  yBind(expr: string): AbstractMonthGridBuilder;
  year(value: number): AbstractMonthGridBuilder;
  yearBind(expr: string): AbstractMonthGridBuilder;
  z(value: number): AbstractMonthGridBuilder;
  zBind(expr: string): AbstractMonthGridBuilder;
  onActiveFocusChanged(body: string): AbstractMonthGridBuilder;
  onActiveFocusOnTabChanged(body: string): AbstractMonthGridBuilder;
  onAntialiasingChanged(body: string): AbstractMonthGridBuilder;
  onAvailableHeightChanged(body: string): AbstractMonthGridBuilder;
  onAvailableWidthChanged(body: string): AbstractMonthGridBuilder;
  onBackgroundChanged(body: string): AbstractMonthGridBuilder;
  onBaselineOffsetChanged(body: string): AbstractMonthGridBuilder;
  onBottomInsetChanged(body: string): AbstractMonthGridBuilder;
  onBottomPaddingChanged(body: string): AbstractMonthGridBuilder;
  onChildrenChanged(body: string): AbstractMonthGridBuilder;
  onChildrenRectChanged(body: string): AbstractMonthGridBuilder;
  onClicked(body: string): AbstractMonthGridBuilder;
  onClipChanged(body: string): AbstractMonthGridBuilder;
  onContainmentMaskChanged(body: string): AbstractMonthGridBuilder;
  onContentItemChanged(body: string): AbstractMonthGridBuilder;
  onDelegateChanged(body: string): AbstractMonthGridBuilder;
  onEnabledChanged(body: string): AbstractMonthGridBuilder;
  onFocusChanged(body: string): AbstractMonthGridBuilder;
  onFocusPolicyChanged(body: string): AbstractMonthGridBuilder;
  onFocusReasonChanged(body: string): AbstractMonthGridBuilder;
  onFontChanged(body: string): AbstractMonthGridBuilder;
  onHeightChanged(body: string): AbstractMonthGridBuilder;
  onHorizontalPaddingChanged(body: string): AbstractMonthGridBuilder;
  onHoverEnabledChanged(body: string): AbstractMonthGridBuilder;
  onHoveredChanged(body: string): AbstractMonthGridBuilder;
  onImplicitBackgroundHeightChanged(body: string): AbstractMonthGridBuilder;
  onImplicitBackgroundWidthChanged(body: string): AbstractMonthGridBuilder;
  onImplicitContentHeightChanged(body: string): AbstractMonthGridBuilder;
  onImplicitContentWidthChanged(body: string): AbstractMonthGridBuilder;
  onImplicitHeightChanged(body: string): AbstractMonthGridBuilder;
  onImplicitWidthChanged(body: string): AbstractMonthGridBuilder;
  onLeftInsetChanged(body: string): AbstractMonthGridBuilder;
  onLeftPaddingChanged(body: string): AbstractMonthGridBuilder;
  onLocaleChanged(body: string): AbstractMonthGridBuilder;
  onMirroredChanged(body: string): AbstractMonthGridBuilder;
  onMonthChanged(body: string): AbstractMonthGridBuilder;
  onObjectNameChanged(body: string): AbstractMonthGridBuilder;
  onOpacityChanged(body: string): AbstractMonthGridBuilder;
  onPaddingChanged(body: string): AbstractMonthGridBuilder;
  onPaletteChanged(body: string): AbstractMonthGridBuilder;
  onPaletteCreated(body: string): AbstractMonthGridBuilder;
  onParentChanged(body: string): AbstractMonthGridBuilder;
  onPressAndHold(body: string): AbstractMonthGridBuilder;
  onPressed(body: string): AbstractMonthGridBuilder;
  onReleased(body: string): AbstractMonthGridBuilder;
  onRightInsetChanged(body: string): AbstractMonthGridBuilder;
  onRightPaddingChanged(body: string): AbstractMonthGridBuilder;
  onRotationChanged(body: string): AbstractMonthGridBuilder;
  onScaleChanged(body: string): AbstractMonthGridBuilder;
  onSmoothChanged(body: string): AbstractMonthGridBuilder;
  onSourceChanged(body: string): AbstractMonthGridBuilder;
  onSpacingChanged(body: string): AbstractMonthGridBuilder;
  onStateChanged(body: string): AbstractMonthGridBuilder;
  onTitleChanged(body: string): AbstractMonthGridBuilder;
  onTopInsetChanged(body: string): AbstractMonthGridBuilder;
  onTopPaddingChanged(body: string): AbstractMonthGridBuilder;
  onTransformOriginChanged(body: string): AbstractMonthGridBuilder;
  onVerticalPaddingChanged(body: string): AbstractMonthGridBuilder;
  onVisibleChanged(body: string): AbstractMonthGridBuilder;
  onVisibleChildrenChanged(body: string): AbstractMonthGridBuilder;
  onVisualFocusChanged(body: string): AbstractMonthGridBuilder;
  onWheelEnabledChanged(body: string): AbstractMonthGridBuilder;
  onWidthChanged(body: string): AbstractMonthGridBuilder;
  onWindowChanged(body: string): AbstractMonthGridBuilder;
  onXChanged(body: string): AbstractMonthGridBuilder;
  onYChanged(body: string): AbstractMonthGridBuilder;
  onYearChanged(body: string): AbstractMonthGridBuilder;
  onZChanged(body: string): AbstractMonthGridBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AbstractMonthGridBuilder;
  layer(setup: (b: LayerBuilder) => void): AbstractMonthGridBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): AbstractMonthGridBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): AbstractMonthGridBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): AbstractMonthGridBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): AbstractMonthGridBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): AbstractMonthGridBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): AbstractMonthGridBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): AbstractMonthGridBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): AbstractMonthGridBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): AbstractMonthGridBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): AbstractMonthGridBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): AbstractMonthGridBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): AbstractMonthGridBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): AbstractMonthGridBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): AbstractMonthGridBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): AbstractMonthGridBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): AbstractMonthGridBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): AbstractMonthGridBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): AbstractMonthGridBuilder;
}

const ABSTRACTMONTHGRID_META: TypeMetadata = {
  typeName: 'AbstractMonthGrid',
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
    { name: 'month', hasValue: true, hasBinding: true },
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
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'year', hasValue: true, hasBinding: true },
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
    { handlerName: 'onClicked', paramCount: 1 },
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
    { handlerName: 'onMonthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPressAndHold', paramCount: 1 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
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
    { handlerName: 'onYearChanged', paramCount: 0 },
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

export function AbstractMonthGrid(): AbstractMonthGridBuilder {
  return createFluentBuilder('AbstractMonthGrid', ABSTRACTMONTHGRID_META) as unknown as AbstractMonthGridBuilder;
}

export namespace AbstractMonthGrid {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('AbstractMonthGrid', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'BottomRight');
  }
}
