// AUTO-GENERATED — DO NOT EDIT
// Type: Pane
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
export interface PaneBuilder {
  id(id: string): PaneBuilder;
  child(obj: QmlObjectBuilder): PaneBuilder;
  children(...objs: QmlObjectBuilder[]): PaneBuilder;

  activeFocusOnTab(value: boolean): PaneBuilder;
  activeFocusOnTabBind(expr: string): PaneBuilder;
  antialiasing(value: boolean): PaneBuilder;
  antialiasingBind(expr: string): PaneBuilder;
  background(value: ItemBuilder): PaneBuilder;
  backgroundBind(expr: string): PaneBuilder;
  baselineOffset(value: number): PaneBuilder;
  baselineOffsetBind(expr: string): PaneBuilder;
  bottomInset(value: number): PaneBuilder;
  bottomInsetBind(expr: string): PaneBuilder;
  bottomPadding(value: number): PaneBuilder;
  bottomPaddingBind(expr: string): PaneBuilder;
  clip(value: boolean): PaneBuilder;
  clipBind(expr: string): PaneBuilder;
  containmentMask(value: QtObjectBuilder): PaneBuilder;
  containmentMaskBind(expr: string): PaneBuilder;
  contentHeight(value: number): PaneBuilder;
  contentHeightBind(expr: string): PaneBuilder;
  contentItem(value: ItemBuilder): PaneBuilder;
  contentItemBind(expr: string): PaneBuilder;
  contentWidth(value: number): PaneBuilder;
  contentWidthBind(expr: string): PaneBuilder;
  enabled(value: boolean): PaneBuilder;
  enabledBind(expr: string): PaneBuilder;
  focus(value: boolean): PaneBuilder;
  focusBind(expr: string): PaneBuilder;
  focusPolicy(value: QmlEnumToken): PaneBuilder;
  focusPolicyBind(expr: string): PaneBuilder;
  focusReason(value: QmlEnumToken): PaneBuilder;
  focusReasonBind(expr: string): PaneBuilder;
  font(value: QmlFont): PaneBuilder;
  fontBind(expr: string): PaneBuilder;
  height(value: number): PaneBuilder;
  heightBind(expr: string): PaneBuilder;
  horizontalPadding(value: number): PaneBuilder;
  horizontalPaddingBind(expr: string): PaneBuilder;
  hoverEnabled(value: boolean): PaneBuilder;
  hoverEnabledBind(expr: string): PaneBuilder;
  implicitHeight(value: number): PaneBuilder;
  implicitHeightBind(expr: string): PaneBuilder;
  implicitWidth(value: number): PaneBuilder;
  implicitWidthBind(expr: string): PaneBuilder;
  leftInset(value: number): PaneBuilder;
  leftInsetBind(expr: string): PaneBuilder;
  leftPadding(value: number): PaneBuilder;
  leftPaddingBind(expr: string): PaneBuilder;
  locale(value: string): PaneBuilder;
  localeBind(expr: string): PaneBuilder;
  objectName(value: string): PaneBuilder;
  objectNameBind(expr: string): PaneBuilder;
  opacity(value: number): PaneBuilder;
  opacityBind(expr: string): PaneBuilder;
  padding(value: number): PaneBuilder;
  paddingBind(expr: string): PaneBuilder;
  palette(value: PaletteBuilder): PaneBuilder;
  paletteBind(expr: string): PaneBuilder;
  parent(value: ItemBuilder): PaneBuilder;
  parentBind(expr: string): PaneBuilder;
  rightInset(value: number): PaneBuilder;
  rightInsetBind(expr: string): PaneBuilder;
  rightPadding(value: number): PaneBuilder;
  rightPaddingBind(expr: string): PaneBuilder;
  rotation(value: number): PaneBuilder;
  rotationBind(expr: string): PaneBuilder;
  scale(value: number): PaneBuilder;
  scaleBind(expr: string): PaneBuilder;
  smooth(value: boolean): PaneBuilder;
  smoothBind(expr: string): PaneBuilder;
  spacing(value: number): PaneBuilder;
  spacingBind(expr: string): PaneBuilder;
  state(value: string): PaneBuilder;
  stateBind(expr: string): PaneBuilder;
  topInset(value: number): PaneBuilder;
  topInsetBind(expr: string): PaneBuilder;
  topPadding(value: number): PaneBuilder;
  topPaddingBind(expr: string): PaneBuilder;
  transformOrigin(value: QmlEnumToken): PaneBuilder;
  transformOriginBind(expr: string): PaneBuilder;
  verticalPadding(value: number): PaneBuilder;
  verticalPaddingBind(expr: string): PaneBuilder;
  visible(value: boolean): PaneBuilder;
  visibleBind(expr: string): PaneBuilder;
  wheelEnabled(value: boolean): PaneBuilder;
  wheelEnabledBind(expr: string): PaneBuilder;
  width(value: number): PaneBuilder;
  widthBind(expr: string): PaneBuilder;
  x(value: number): PaneBuilder;
  xBind(expr: string): PaneBuilder;
  y(value: number): PaneBuilder;
  yBind(expr: string): PaneBuilder;
  z(value: number): PaneBuilder;
  zBind(expr: string): PaneBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onClipChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onContentChildrenChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onFontChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): PaneBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onStateChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onXChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onYChanged(handler: DslSignalHandlerValue): PaneBuilder;
  onZChanged(handler: DslSignalHandlerValue): PaneBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PaneBuilder;
  layer(setup: (b: LayerBuilder) => void): PaneBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): PaneBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): PaneBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): PaneBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): PaneBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): PaneBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): PaneBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): PaneBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): PaneBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): PaneBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): PaneBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): PaneBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): PaneBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): PaneBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): PaneBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): PaneBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): PaneBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): PaneBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): PaneBuilder;
}

const PANE_META: TypeMetadata = {
  typeName: 'Pane',
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

export function Pane(): PaneBuilder {
  return createFluentBuilder('Pane', PANE_META) as unknown as PaneBuilder;
}

export namespace Pane {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Pane',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Pane',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Pane', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Pane', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Pane', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Pane', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Pane', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Pane', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Pane', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Pane', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Pane', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Pane', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Pane', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Pane', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Pane', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Pane', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Pane', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Pane', 'TransformOrigin', 'BottomRight');
  }
}
