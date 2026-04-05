// AUTO-GENERATED — DO NOT EDIT
// Type: TabBar
// Generated from Qt 6.11.0

import type {
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
export interface TabBarBuilder {
  id(id: string): TabBarBuilder;
  child(obj: QmlObjectBuilder): TabBarBuilder;

  activeFocusOnTab(value: boolean): TabBarBuilder;
  activeFocusOnTabBind(expr: string): TabBarBuilder;
  antialiasing(value: boolean): TabBarBuilder;
  antialiasingBind(expr: string): TabBarBuilder;
  background(value: ItemBuilder): TabBarBuilder;
  backgroundBind(expr: string): TabBarBuilder;
  baselineOffset(value: number): TabBarBuilder;
  baselineOffsetBind(expr: string): TabBarBuilder;
  bottomInset(value: number): TabBarBuilder;
  bottomInsetBind(expr: string): TabBarBuilder;
  bottomPadding(value: number): TabBarBuilder;
  bottomPaddingBind(expr: string): TabBarBuilder;
  clip(value: boolean): TabBarBuilder;
  clipBind(expr: string): TabBarBuilder;
  containmentMask(value: QtObjectBuilder): TabBarBuilder;
  containmentMaskBind(expr: string): TabBarBuilder;
  contentHeight(value: number): TabBarBuilder;
  contentHeightBind(expr: string): TabBarBuilder;
  contentItem(value: ItemBuilder): TabBarBuilder;
  contentItemBind(expr: string): TabBarBuilder;
  contentWidth(value: number): TabBarBuilder;
  contentWidthBind(expr: string): TabBarBuilder;
  currentIndex(value: number): TabBarBuilder;
  currentIndexBind(expr: string): TabBarBuilder;
  enabled(value: boolean): TabBarBuilder;
  enabledBind(expr: string): TabBarBuilder;
  focus(value: boolean): TabBarBuilder;
  focusBind(expr: string): TabBarBuilder;
  focusPolicy(value: QmlEnumToken): TabBarBuilder;
  focusPolicyBind(expr: string): TabBarBuilder;
  focusReason(value: QmlEnumToken): TabBarBuilder;
  focusReasonBind(expr: string): TabBarBuilder;
  font(value: QmlFont): TabBarBuilder;
  fontBind(expr: string): TabBarBuilder;
  height(value: number): TabBarBuilder;
  heightBind(expr: string): TabBarBuilder;
  horizontalPadding(value: number): TabBarBuilder;
  horizontalPaddingBind(expr: string): TabBarBuilder;
  hoverEnabled(value: boolean): TabBarBuilder;
  hoverEnabledBind(expr: string): TabBarBuilder;
  implicitHeight(value: number): TabBarBuilder;
  implicitHeightBind(expr: string): TabBarBuilder;
  implicitWidth(value: number): TabBarBuilder;
  implicitWidthBind(expr: string): TabBarBuilder;
  leftInset(value: number): TabBarBuilder;
  leftInsetBind(expr: string): TabBarBuilder;
  leftPadding(value: number): TabBarBuilder;
  leftPaddingBind(expr: string): TabBarBuilder;
  locale(value: QmlValue): TabBarBuilder;
  localeBind(expr: string): TabBarBuilder;
  objectName(value: string): TabBarBuilder;
  objectNameBind(expr: string): TabBarBuilder;
  opacity(value: number): TabBarBuilder;
  opacityBind(expr: string): TabBarBuilder;
  padding(value: number): TabBarBuilder;
  paddingBind(expr: string): TabBarBuilder;
  palette(value: PaletteBuilder): TabBarBuilder;
  paletteBind(expr: string): TabBarBuilder;
  parent(value: ItemBuilder): TabBarBuilder;
  parentBind(expr: string): TabBarBuilder;
  position(value: QmlEnumToken): TabBarBuilder;
  positionBind(expr: string): TabBarBuilder;
  rightInset(value: number): TabBarBuilder;
  rightInsetBind(expr: string): TabBarBuilder;
  rightPadding(value: number): TabBarBuilder;
  rightPaddingBind(expr: string): TabBarBuilder;
  rotation(value: number): TabBarBuilder;
  rotationBind(expr: string): TabBarBuilder;
  scale(value: number): TabBarBuilder;
  scaleBind(expr: string): TabBarBuilder;
  smooth(value: boolean): TabBarBuilder;
  smoothBind(expr: string): TabBarBuilder;
  spacing(value: number): TabBarBuilder;
  spacingBind(expr: string): TabBarBuilder;
  state(value: string): TabBarBuilder;
  stateBind(expr: string): TabBarBuilder;
  topInset(value: number): TabBarBuilder;
  topInsetBind(expr: string): TabBarBuilder;
  topPadding(value: number): TabBarBuilder;
  topPaddingBind(expr: string): TabBarBuilder;
  transformOrigin(value: QmlEnumToken): TabBarBuilder;
  transformOriginBind(expr: string): TabBarBuilder;
  verticalPadding(value: number): TabBarBuilder;
  verticalPaddingBind(expr: string): TabBarBuilder;
  visible(value: boolean): TabBarBuilder;
  visibleBind(expr: string): TabBarBuilder;
  wheelEnabled(value: boolean): TabBarBuilder;
  wheelEnabledBind(expr: string): TabBarBuilder;
  width(value: number): TabBarBuilder;
  widthBind(expr: string): TabBarBuilder;
  x(value: number): TabBarBuilder;
  xBind(expr: string): TabBarBuilder;
  y(value: number): TabBarBuilder;
  yBind(expr: string): TabBarBuilder;
  z(value: number): TabBarBuilder;
  zBind(expr: string): TabBarBuilder;
  onActiveFocusChanged(body: string): TabBarBuilder;
  onActiveFocusOnTabChanged(body: string): TabBarBuilder;
  onAntialiasingChanged(body: string): TabBarBuilder;
  onAvailableHeightChanged(body: string): TabBarBuilder;
  onAvailableWidthChanged(body: string): TabBarBuilder;
  onBackgroundChanged(body: string): TabBarBuilder;
  onBaselineOffsetChanged(body: string): TabBarBuilder;
  onBottomInsetChanged(body: string): TabBarBuilder;
  onBottomPaddingChanged(body: string): TabBarBuilder;
  onChildrenChanged(body: string): TabBarBuilder;
  onChildrenRectChanged(body: string): TabBarBuilder;
  onClipChanged(body: string): TabBarBuilder;
  onContainmentMaskChanged(body: string): TabBarBuilder;
  onContentChildrenChanged(body: string): TabBarBuilder;
  onContentHeightChanged(body: string): TabBarBuilder;
  onContentItemChanged(body: string): TabBarBuilder;
  onContentWidthChanged(body: string): TabBarBuilder;
  onCountChanged(body: string): TabBarBuilder;
  onCurrentIndexChanged(body: string): TabBarBuilder;
  onCurrentItemChanged(body: string): TabBarBuilder;
  onEnabledChanged(body: string): TabBarBuilder;
  onFocusChanged(body: string): TabBarBuilder;
  onFocusPolicyChanged(body: string): TabBarBuilder;
  onFocusReasonChanged(body: string): TabBarBuilder;
  onFontChanged(body: string): TabBarBuilder;
  onHeightChanged(body: string): TabBarBuilder;
  onHorizontalPaddingChanged(body: string): TabBarBuilder;
  onHoverEnabledChanged(body: string): TabBarBuilder;
  onHoveredChanged(body: string): TabBarBuilder;
  onImplicitBackgroundHeightChanged(body: string): TabBarBuilder;
  onImplicitBackgroundWidthChanged(body: string): TabBarBuilder;
  onImplicitContentHeightChanged(body: string): TabBarBuilder;
  onImplicitContentWidthChanged(body: string): TabBarBuilder;
  onImplicitHeightChanged(body: string): TabBarBuilder;
  onImplicitWidthChanged(body: string): TabBarBuilder;
  onLeftInsetChanged(body: string): TabBarBuilder;
  onLeftPaddingChanged(body: string): TabBarBuilder;
  onLocaleChanged(body: string): TabBarBuilder;
  onMirroredChanged(body: string): TabBarBuilder;
  onObjectNameChanged(body: string): TabBarBuilder;
  onOpacityChanged(body: string): TabBarBuilder;
  onPaddingChanged(body: string): TabBarBuilder;
  onPaletteChanged(body: string): TabBarBuilder;
  onPaletteCreated(body: string): TabBarBuilder;
  onParentChanged(body: string): TabBarBuilder;
  onPositionChanged(body: string): TabBarBuilder;
  onRightInsetChanged(body: string): TabBarBuilder;
  onRightPaddingChanged(body: string): TabBarBuilder;
  onRotationChanged(body: string): TabBarBuilder;
  onScaleChanged(body: string): TabBarBuilder;
  onSmoothChanged(body: string): TabBarBuilder;
  onSpacingChanged(body: string): TabBarBuilder;
  onStateChanged(body: string): TabBarBuilder;
  onTopInsetChanged(body: string): TabBarBuilder;
  onTopPaddingChanged(body: string): TabBarBuilder;
  onTransformOriginChanged(body: string): TabBarBuilder;
  onVerticalPaddingChanged(body: string): TabBarBuilder;
  onVisibleChanged(body: string): TabBarBuilder;
  onVisibleChildrenChanged(body: string): TabBarBuilder;
  onVisualFocusChanged(body: string): TabBarBuilder;
  onWheelEnabledChanged(body: string): TabBarBuilder;
  onWidthChanged(body: string): TabBarBuilder;
  onWindowChanged(body: string): TabBarBuilder;
  onXChanged(body: string): TabBarBuilder;
  onYChanged(body: string): TabBarBuilder;
  onZChanged(body: string): TabBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TabBarBuilder;
  layer(setup: (b: LayerBuilder) => void): TabBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TabBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TabBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TabBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TabBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TabBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TabBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TabBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TabBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TabBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TabBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TabBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TabBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TabBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TabBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TabBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TabBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TabBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TabBarBuilder;
}

const TABBAR_META: TypeMetadata = {
  typeName: 'TabBar',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
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
    { name: 'position', hasValue: true, hasBinding: true },
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
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
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
    { handlerName: 'onPositionChanged', paramCount: 0 },
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
  defaultProperty: 'contentData',
};

export function TabBar(): TabBarBuilder {
  return createFluentBuilder('TabBar', TABBAR_META) as unknown as TabBarBuilder;
}

export namespace TabBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TabBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TabBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TabBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TabBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TabBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TabBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('TabBar', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TabBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Position {
    export const Header = createEnumToken('TabBar', 'Position', 'Header');
    export const Footer = createEnumToken('TabBar', 'Position', 'Footer');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TabBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TabBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TabBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TabBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TabBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TabBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TabBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TabBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TabBar', 'TransformOrigin', 'BottomRight');
  }
}
