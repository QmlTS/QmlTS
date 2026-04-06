// AUTO-GENERATED — DO NOT EDIT
// Type: ScrollView
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
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
export interface ScrollViewBuilder {
  id(id: string): ScrollViewBuilder;
  child(obj: QmlObjectBuilder): ScrollViewBuilder;
  children(...objs: QmlObjectBuilder[]): ScrollViewBuilder;

  activeFocusOnTab(value: boolean): ScrollViewBuilder;
  activeFocusOnTabBind(expr: string): ScrollViewBuilder;
  antialiasing(value: boolean): ScrollViewBuilder;
  antialiasingBind(expr: string): ScrollViewBuilder;
  background(value: ItemBuilder): ScrollViewBuilder;
  backgroundBind(expr: string): ScrollViewBuilder;
  baselineOffset(value: number): ScrollViewBuilder;
  baselineOffsetBind(expr: string): ScrollViewBuilder;
  bottomInset(value: number): ScrollViewBuilder;
  bottomInsetBind(expr: string): ScrollViewBuilder;
  bottomPadding(value: number): ScrollViewBuilder;
  bottomPaddingBind(expr: string): ScrollViewBuilder;
  clip(value: boolean): ScrollViewBuilder;
  clipBind(expr: string): ScrollViewBuilder;
  containmentMask(value: QtObjectBuilder): ScrollViewBuilder;
  containmentMaskBind(expr: string): ScrollViewBuilder;
  contentHeight(value: number): ScrollViewBuilder;
  contentHeightBind(expr: string): ScrollViewBuilder;
  contentItem(value: ItemBuilder): ScrollViewBuilder;
  contentItemBind(expr: string): ScrollViewBuilder;
  contentWidth(value: number): ScrollViewBuilder;
  contentWidthBind(expr: string): ScrollViewBuilder;
  enabled(value: boolean): ScrollViewBuilder;
  enabledBind(expr: string): ScrollViewBuilder;
  focus(value: boolean): ScrollViewBuilder;
  focusBind(expr: string): ScrollViewBuilder;
  focusPolicy(value: QmlEnumToken): ScrollViewBuilder;
  focusPolicyBind(expr: string): ScrollViewBuilder;
  focusReason(value: QmlEnumToken): ScrollViewBuilder;
  focusReasonBind(expr: string): ScrollViewBuilder;
  font(value: QmlFont): ScrollViewBuilder;
  fontBind(expr: string): ScrollViewBuilder;
  height(value: number): ScrollViewBuilder;
  heightBind(expr: string): ScrollViewBuilder;
  horizontalPadding(value: number): ScrollViewBuilder;
  horizontalPaddingBind(expr: string): ScrollViewBuilder;
  hoverEnabled(value: boolean): ScrollViewBuilder;
  hoverEnabledBind(expr: string): ScrollViewBuilder;
  implicitHeight(value: number): ScrollViewBuilder;
  implicitHeightBind(expr: string): ScrollViewBuilder;
  implicitWidth(value: number): ScrollViewBuilder;
  implicitWidthBind(expr: string): ScrollViewBuilder;
  leftInset(value: number): ScrollViewBuilder;
  leftInsetBind(expr: string): ScrollViewBuilder;
  leftPadding(value: number): ScrollViewBuilder;
  leftPaddingBind(expr: string): ScrollViewBuilder;
  locale(value: string): ScrollViewBuilder;
  localeBind(expr: string): ScrollViewBuilder;
  objectName(value: string): ScrollViewBuilder;
  objectNameBind(expr: string): ScrollViewBuilder;
  opacity(value: number): ScrollViewBuilder;
  opacityBind(expr: string): ScrollViewBuilder;
  padding(value: number): ScrollViewBuilder;
  paddingBind(expr: string): ScrollViewBuilder;
  palette(value: PaletteBuilder): ScrollViewBuilder;
  paletteBind(expr: string): ScrollViewBuilder;
  parent(value: ItemBuilder): ScrollViewBuilder;
  parentBind(expr: string): ScrollViewBuilder;
  rightInset(value: number): ScrollViewBuilder;
  rightInsetBind(expr: string): ScrollViewBuilder;
  rightPadding(value: number): ScrollViewBuilder;
  rightPaddingBind(expr: string): ScrollViewBuilder;
  rotation(value: number): ScrollViewBuilder;
  rotationBind(expr: string): ScrollViewBuilder;
  scale(value: number): ScrollViewBuilder;
  scaleBind(expr: string): ScrollViewBuilder;
  smooth(value: boolean): ScrollViewBuilder;
  smoothBind(expr: string): ScrollViewBuilder;
  spacing(value: number): ScrollViewBuilder;
  spacingBind(expr: string): ScrollViewBuilder;
  state(value: string): ScrollViewBuilder;
  stateBind(expr: string): ScrollViewBuilder;
  topInset(value: number): ScrollViewBuilder;
  topInsetBind(expr: string): ScrollViewBuilder;
  topPadding(value: number): ScrollViewBuilder;
  topPaddingBind(expr: string): ScrollViewBuilder;
  transformOrigin(value: QmlEnumToken): ScrollViewBuilder;
  transformOriginBind(expr: string): ScrollViewBuilder;
  verticalPadding(value: number): ScrollViewBuilder;
  verticalPaddingBind(expr: string): ScrollViewBuilder;
  visible(value: boolean): ScrollViewBuilder;
  visibleBind(expr: string): ScrollViewBuilder;
  wheelEnabled(value: boolean): ScrollViewBuilder;
  wheelEnabledBind(expr: string): ScrollViewBuilder;
  width(value: number): ScrollViewBuilder;
  widthBind(expr: string): ScrollViewBuilder;
  x(value: number): ScrollViewBuilder;
  xBind(expr: string): ScrollViewBuilder;
  y(value: number): ScrollViewBuilder;
  yBind(expr: string): ScrollViewBuilder;
  z(value: number): ScrollViewBuilder;
  zBind(expr: string): ScrollViewBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onClipChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onContentChildrenChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onEffectiveScrollBarHeightChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onEffectiveScrollBarWidthChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onFontChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onXChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onYChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  onZChanged(handler: DslSignalHandlerValue): ScrollViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ScrollViewBuilder;
  layer(setup: (b: LayerBuilder) => void): ScrollViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ScrollViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ScrollViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ScrollViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ScrollViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ScrollViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ScrollViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ScrollViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ScrollViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ScrollViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ScrollViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ScrollViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ScrollViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ScrollViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ScrollViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ScrollViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ScrollViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ScrollViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ScrollViewBuilder;
}

const SCROLLVIEW_META: TypeMetadata = {
  typeName: 'ScrollView',
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
    { handlerName: 'onEffectiveScrollBarHeightChanged', paramCount: 0 },
    { handlerName: 'onEffectiveScrollBarWidthChanged', paramCount: 0 },
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

export function ScrollView(): ScrollViewBuilder {
  return createFluentBuilder('ScrollView', SCROLLVIEW_META) as unknown as ScrollViewBuilder;
}

export namespace ScrollView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ScrollView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ScrollView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ScrollView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ScrollView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ScrollView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ScrollView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ScrollView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ScrollView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ScrollView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ScrollView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ScrollView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ScrollView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ScrollView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ScrollView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ScrollView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ScrollView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ScrollView', 'TransformOrigin', 'BottomRight');
  }
}
