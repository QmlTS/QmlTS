// AUTO-GENERATED — DO NOT EDIT
// Type: ProgressBar
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
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
export interface ProgressBarBuilder {
  id(id: string): ProgressBarBuilder;
  child(obj: QmlObjectBuilder): ProgressBarBuilder;

  activeFocusOnTab(value: boolean): ProgressBarBuilder;
  activeFocusOnTabBind(expr: string): ProgressBarBuilder;
  antialiasing(value: boolean): ProgressBarBuilder;
  antialiasingBind(expr: string): ProgressBarBuilder;
  background(value: ItemBuilder): ProgressBarBuilder;
  backgroundBind(expr: string): ProgressBarBuilder;
  baselineOffset(value: number): ProgressBarBuilder;
  baselineOffsetBind(expr: string): ProgressBarBuilder;
  bottomInset(value: number): ProgressBarBuilder;
  bottomInsetBind(expr: string): ProgressBarBuilder;
  bottomPadding(value: number): ProgressBarBuilder;
  bottomPaddingBind(expr: string): ProgressBarBuilder;
  clip(value: boolean): ProgressBarBuilder;
  clipBind(expr: string): ProgressBarBuilder;
  containmentMask(value: QtObjectBuilder): ProgressBarBuilder;
  containmentMaskBind(expr: string): ProgressBarBuilder;
  contentItem(value: ItemBuilder): ProgressBarBuilder;
  contentItemBind(expr: string): ProgressBarBuilder;
  enabled(value: boolean): ProgressBarBuilder;
  enabledBind(expr: string): ProgressBarBuilder;
  focus(value: boolean): ProgressBarBuilder;
  focusBind(expr: string): ProgressBarBuilder;
  focusPolicy(value: QmlEnumToken): ProgressBarBuilder;
  focusPolicyBind(expr: string): ProgressBarBuilder;
  focusReason(value: QmlEnumToken): ProgressBarBuilder;
  focusReasonBind(expr: string): ProgressBarBuilder;
  font(value: QmlFont): ProgressBarBuilder;
  fontBind(expr: string): ProgressBarBuilder;
  from(value: number): ProgressBarBuilder;
  fromBind(expr: string): ProgressBarBuilder;
  height(value: number): ProgressBarBuilder;
  heightBind(expr: string): ProgressBarBuilder;
  horizontalPadding(value: number): ProgressBarBuilder;
  horizontalPaddingBind(expr: string): ProgressBarBuilder;
  hoverEnabled(value: boolean): ProgressBarBuilder;
  hoverEnabledBind(expr: string): ProgressBarBuilder;
  implicitHeight(value: number): ProgressBarBuilder;
  implicitHeightBind(expr: string): ProgressBarBuilder;
  implicitWidth(value: number): ProgressBarBuilder;
  implicitWidthBind(expr: string): ProgressBarBuilder;
  indeterminate(value: boolean): ProgressBarBuilder;
  indeterminateBind(expr: string): ProgressBarBuilder;
  leftInset(value: number): ProgressBarBuilder;
  leftInsetBind(expr: string): ProgressBarBuilder;
  leftPadding(value: number): ProgressBarBuilder;
  leftPaddingBind(expr: string): ProgressBarBuilder;
  locale(value: string): ProgressBarBuilder;
  localeBind(expr: string): ProgressBarBuilder;
  objectName(value: string): ProgressBarBuilder;
  objectNameBind(expr: string): ProgressBarBuilder;
  opacity(value: number): ProgressBarBuilder;
  opacityBind(expr: string): ProgressBarBuilder;
  padding(value: number): ProgressBarBuilder;
  paddingBind(expr: string): ProgressBarBuilder;
  palette(value: PaletteBuilder): ProgressBarBuilder;
  paletteBind(expr: string): ProgressBarBuilder;
  parent(value: ItemBuilder): ProgressBarBuilder;
  parentBind(expr: string): ProgressBarBuilder;
  rightInset(value: number): ProgressBarBuilder;
  rightInsetBind(expr: string): ProgressBarBuilder;
  rightPadding(value: number): ProgressBarBuilder;
  rightPaddingBind(expr: string): ProgressBarBuilder;
  rotation(value: number): ProgressBarBuilder;
  rotationBind(expr: string): ProgressBarBuilder;
  scale(value: number): ProgressBarBuilder;
  scaleBind(expr: string): ProgressBarBuilder;
  smooth(value: boolean): ProgressBarBuilder;
  smoothBind(expr: string): ProgressBarBuilder;
  spacing(value: number): ProgressBarBuilder;
  spacingBind(expr: string): ProgressBarBuilder;
  state(value: string): ProgressBarBuilder;
  stateBind(expr: string): ProgressBarBuilder;
  to(value: number): ProgressBarBuilder;
  toBind(expr: string): ProgressBarBuilder;
  topInset(value: number): ProgressBarBuilder;
  topInsetBind(expr: string): ProgressBarBuilder;
  topPadding(value: number): ProgressBarBuilder;
  topPaddingBind(expr: string): ProgressBarBuilder;
  transformOrigin(value: QmlEnumToken): ProgressBarBuilder;
  transformOriginBind(expr: string): ProgressBarBuilder;
  value(value: number): ProgressBarBuilder;
  valueBind(expr: string): ProgressBarBuilder;
  verticalPadding(value: number): ProgressBarBuilder;
  verticalPaddingBind(expr: string): ProgressBarBuilder;
  visible(value: boolean): ProgressBarBuilder;
  visibleBind(expr: string): ProgressBarBuilder;
  wheelEnabled(value: boolean): ProgressBarBuilder;
  wheelEnabledBind(expr: string): ProgressBarBuilder;
  width(value: number): ProgressBarBuilder;
  widthBind(expr: string): ProgressBarBuilder;
  x(value: number): ProgressBarBuilder;
  xBind(expr: string): ProgressBarBuilder;
  y(value: number): ProgressBarBuilder;
  yBind(expr: string): ProgressBarBuilder;
  z(value: number): ProgressBarBuilder;
  zBind(expr: string): ProgressBarBuilder;
  onActiveFocusChanged(body: string): ProgressBarBuilder;
  onActiveFocusOnTabChanged(body: string): ProgressBarBuilder;
  onAntialiasingChanged(body: string): ProgressBarBuilder;
  onAvailableHeightChanged(body: string): ProgressBarBuilder;
  onAvailableWidthChanged(body: string): ProgressBarBuilder;
  onBackgroundChanged(body: string): ProgressBarBuilder;
  onBaselineOffsetChanged(body: string): ProgressBarBuilder;
  onBottomInsetChanged(body: string): ProgressBarBuilder;
  onBottomPaddingChanged(body: string): ProgressBarBuilder;
  onChildrenChanged(body: string): ProgressBarBuilder;
  onChildrenRectChanged(body: string): ProgressBarBuilder;
  onClipChanged(body: string): ProgressBarBuilder;
  onContainmentMaskChanged(body: string): ProgressBarBuilder;
  onContentItemChanged(body: string): ProgressBarBuilder;
  onEnabledChanged(body: string): ProgressBarBuilder;
  onFocusChanged(body: string): ProgressBarBuilder;
  onFocusPolicyChanged(body: string): ProgressBarBuilder;
  onFocusReasonChanged(body: string): ProgressBarBuilder;
  onFontChanged(body: string): ProgressBarBuilder;
  onFromChanged(body: string): ProgressBarBuilder;
  onHeightChanged(body: string): ProgressBarBuilder;
  onHorizontalPaddingChanged(body: string): ProgressBarBuilder;
  onHoverEnabledChanged(body: string): ProgressBarBuilder;
  onHoveredChanged(body: string): ProgressBarBuilder;
  onImplicitBackgroundHeightChanged(body: string): ProgressBarBuilder;
  onImplicitBackgroundWidthChanged(body: string): ProgressBarBuilder;
  onImplicitContentHeightChanged(body: string): ProgressBarBuilder;
  onImplicitContentWidthChanged(body: string): ProgressBarBuilder;
  onImplicitHeightChanged(body: string): ProgressBarBuilder;
  onImplicitWidthChanged(body: string): ProgressBarBuilder;
  onIndeterminateChanged(body: string): ProgressBarBuilder;
  onLeftInsetChanged(body: string): ProgressBarBuilder;
  onLeftPaddingChanged(body: string): ProgressBarBuilder;
  onLocaleChanged(body: string): ProgressBarBuilder;
  onMirroredChanged(body: string): ProgressBarBuilder;
  onObjectNameChanged(body: string): ProgressBarBuilder;
  onOpacityChanged(body: string): ProgressBarBuilder;
  onPaddingChanged(body: string): ProgressBarBuilder;
  onPaletteChanged(body: string): ProgressBarBuilder;
  onPaletteCreated(body: string): ProgressBarBuilder;
  onParentChanged(body: string): ProgressBarBuilder;
  onPositionChanged(body: string): ProgressBarBuilder;
  onRightInsetChanged(body: string): ProgressBarBuilder;
  onRightPaddingChanged(body: string): ProgressBarBuilder;
  onRotationChanged(body: string): ProgressBarBuilder;
  onScaleChanged(body: string): ProgressBarBuilder;
  onSmoothChanged(body: string): ProgressBarBuilder;
  onSpacingChanged(body: string): ProgressBarBuilder;
  onStateChanged(body: string): ProgressBarBuilder;
  onToChanged(body: string): ProgressBarBuilder;
  onTopInsetChanged(body: string): ProgressBarBuilder;
  onTopPaddingChanged(body: string): ProgressBarBuilder;
  onTransformOriginChanged(body: string): ProgressBarBuilder;
  onValueChanged(body: string): ProgressBarBuilder;
  onVerticalPaddingChanged(body: string): ProgressBarBuilder;
  onVisibleChanged(body: string): ProgressBarBuilder;
  onVisibleChildrenChanged(body: string): ProgressBarBuilder;
  onVisualFocusChanged(body: string): ProgressBarBuilder;
  onVisualPositionChanged(body: string): ProgressBarBuilder;
  onWheelEnabledChanged(body: string): ProgressBarBuilder;
  onWidthChanged(body: string): ProgressBarBuilder;
  onWindowChanged(body: string): ProgressBarBuilder;
  onXChanged(body: string): ProgressBarBuilder;
  onYChanged(body: string): ProgressBarBuilder;
  onZChanged(body: string): ProgressBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ProgressBarBuilder;
  layer(setup: (b: LayerBuilder) => void): ProgressBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ProgressBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ProgressBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ProgressBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ProgressBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ProgressBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ProgressBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ProgressBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ProgressBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ProgressBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ProgressBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ProgressBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ProgressBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ProgressBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ProgressBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ProgressBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ProgressBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ProgressBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ProgressBarBuilder;
}

const PROGRESSBAR_META: TypeMetadata = {
  typeName: 'ProgressBar',
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
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'indeterminate', hasValue: true, hasBinding: true },
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
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
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
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onFromChanged', paramCount: 0 },
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
    { handlerName: 'onIndeterminateChanged', paramCount: 0 },
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
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onToChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 0 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisualFocusChanged', paramCount: 0 },
    { handlerName: 'onVisualPositionChanged', paramCount: 0 },
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

export function ProgressBar(): ProgressBarBuilder {
  return createFluentBuilder('ProgressBar', PROGRESSBAR_META) as unknown as ProgressBarBuilder;
}

export namespace ProgressBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ProgressBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ProgressBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ProgressBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ProgressBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ProgressBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ProgressBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ProgressBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ProgressBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ProgressBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ProgressBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ProgressBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ProgressBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ProgressBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ProgressBar', 'TransformOrigin', 'BottomRight');
  }
}
