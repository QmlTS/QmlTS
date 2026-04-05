// AUTO-GENERATED — DO NOT EDIT
// Type: Control
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
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
export interface ControlBuilder {
  id(id: string): ControlBuilder;
  child(obj: QmlObjectBuilder): ControlBuilder;

  activeFocusOnTab(value: boolean): ControlBuilder;
  activeFocusOnTabBind(expr: string): ControlBuilder;
  antialiasing(value: boolean): ControlBuilder;
  antialiasingBind(expr: string): ControlBuilder;
  background(value: ItemBuilder): ControlBuilder;
  backgroundBind(expr: string): ControlBuilder;
  baselineOffset(value: number): ControlBuilder;
  baselineOffsetBind(expr: string): ControlBuilder;
  bottomInset(value: number): ControlBuilder;
  bottomInsetBind(expr: string): ControlBuilder;
  bottomPadding(value: number): ControlBuilder;
  bottomPaddingBind(expr: string): ControlBuilder;
  clip(value: boolean): ControlBuilder;
  clipBind(expr: string): ControlBuilder;
  containmentMask(value: QtObjectBuilder): ControlBuilder;
  containmentMaskBind(expr: string): ControlBuilder;
  contentItem(value: ItemBuilder): ControlBuilder;
  contentItemBind(expr: string): ControlBuilder;
  enabled(value: boolean): ControlBuilder;
  enabledBind(expr: string): ControlBuilder;
  focus(value: boolean): ControlBuilder;
  focusBind(expr: string): ControlBuilder;
  focusPolicy(value: QmlEnumToken): ControlBuilder;
  focusPolicyBind(expr: string): ControlBuilder;
  focusReason(value: QmlEnumToken): ControlBuilder;
  focusReasonBind(expr: string): ControlBuilder;
  font(value: QmlFont): ControlBuilder;
  fontBind(expr: string): ControlBuilder;
  height(value: number): ControlBuilder;
  heightBind(expr: string): ControlBuilder;
  horizontalPadding(value: number): ControlBuilder;
  horizontalPaddingBind(expr: string): ControlBuilder;
  hoverEnabled(value: boolean): ControlBuilder;
  hoverEnabledBind(expr: string): ControlBuilder;
  implicitHeight(value: number): ControlBuilder;
  implicitHeightBind(expr: string): ControlBuilder;
  implicitWidth(value: number): ControlBuilder;
  implicitWidthBind(expr: string): ControlBuilder;
  leftInset(value: number): ControlBuilder;
  leftInsetBind(expr: string): ControlBuilder;
  leftPadding(value: number): ControlBuilder;
  leftPaddingBind(expr: string): ControlBuilder;
  locale(value: string): ControlBuilder;
  localeBind(expr: string): ControlBuilder;
  objectName(value: string): ControlBuilder;
  objectNameBind(expr: string): ControlBuilder;
  opacity(value: number): ControlBuilder;
  opacityBind(expr: string): ControlBuilder;
  padding(value: number): ControlBuilder;
  paddingBind(expr: string): ControlBuilder;
  palette(value: PaletteBuilder): ControlBuilder;
  paletteBind(expr: string): ControlBuilder;
  parent(value: ItemBuilder): ControlBuilder;
  parentBind(expr: string): ControlBuilder;
  rightInset(value: number): ControlBuilder;
  rightInsetBind(expr: string): ControlBuilder;
  rightPadding(value: number): ControlBuilder;
  rightPaddingBind(expr: string): ControlBuilder;
  rotation(value: number): ControlBuilder;
  rotationBind(expr: string): ControlBuilder;
  scale(value: number): ControlBuilder;
  scaleBind(expr: string): ControlBuilder;
  smooth(value: boolean): ControlBuilder;
  smoothBind(expr: string): ControlBuilder;
  spacing(value: number): ControlBuilder;
  spacingBind(expr: string): ControlBuilder;
  state(value: string): ControlBuilder;
  stateBind(expr: string): ControlBuilder;
  topInset(value: number): ControlBuilder;
  topInsetBind(expr: string): ControlBuilder;
  topPadding(value: number): ControlBuilder;
  topPaddingBind(expr: string): ControlBuilder;
  transformOrigin(value: QmlEnumToken): ControlBuilder;
  transformOriginBind(expr: string): ControlBuilder;
  verticalPadding(value: number): ControlBuilder;
  verticalPaddingBind(expr: string): ControlBuilder;
  visible(value: boolean): ControlBuilder;
  visibleBind(expr: string): ControlBuilder;
  wheelEnabled(value: boolean): ControlBuilder;
  wheelEnabledBind(expr: string): ControlBuilder;
  width(value: number): ControlBuilder;
  widthBind(expr: string): ControlBuilder;
  x(value: number): ControlBuilder;
  xBind(expr: string): ControlBuilder;
  y(value: number): ControlBuilder;
  yBind(expr: string): ControlBuilder;
  z(value: number): ControlBuilder;
  zBind(expr: string): ControlBuilder;
  onActiveFocusChanged(body: string): ControlBuilder;
  onActiveFocusOnTabChanged(body: string): ControlBuilder;
  onAntialiasingChanged(body: string): ControlBuilder;
  onAvailableHeightChanged(body: string): ControlBuilder;
  onAvailableWidthChanged(body: string): ControlBuilder;
  onBackgroundChanged(body: string): ControlBuilder;
  onBaselineOffsetChanged(body: string): ControlBuilder;
  onBottomInsetChanged(body: string): ControlBuilder;
  onBottomPaddingChanged(body: string): ControlBuilder;
  onChildrenChanged(body: string): ControlBuilder;
  onChildrenRectChanged(body: string): ControlBuilder;
  onClipChanged(body: string): ControlBuilder;
  onContainmentMaskChanged(body: string): ControlBuilder;
  onContentItemChanged(body: string): ControlBuilder;
  onEnabledChanged(body: string): ControlBuilder;
  onFocusChanged(body: string): ControlBuilder;
  onFocusPolicyChanged(body: string): ControlBuilder;
  onFocusReasonChanged(body: string): ControlBuilder;
  onFontChanged(body: string): ControlBuilder;
  onHeightChanged(body: string): ControlBuilder;
  onHorizontalPaddingChanged(body: string): ControlBuilder;
  onHoverEnabledChanged(body: string): ControlBuilder;
  onHoveredChanged(body: string): ControlBuilder;
  onImplicitBackgroundHeightChanged(body: string): ControlBuilder;
  onImplicitBackgroundWidthChanged(body: string): ControlBuilder;
  onImplicitContentHeightChanged(body: string): ControlBuilder;
  onImplicitContentWidthChanged(body: string): ControlBuilder;
  onImplicitHeightChanged(body: string): ControlBuilder;
  onImplicitWidthChanged(body: string): ControlBuilder;
  onLeftInsetChanged(body: string): ControlBuilder;
  onLeftPaddingChanged(body: string): ControlBuilder;
  onLocaleChanged(body: string): ControlBuilder;
  onMirroredChanged(body: string): ControlBuilder;
  onObjectNameChanged(body: string): ControlBuilder;
  onOpacityChanged(body: string): ControlBuilder;
  onPaddingChanged(body: string): ControlBuilder;
  onPaletteChanged(body: string): ControlBuilder;
  onPaletteCreated(body: string): ControlBuilder;
  onParentChanged(body: string): ControlBuilder;
  onRightInsetChanged(body: string): ControlBuilder;
  onRightPaddingChanged(body: string): ControlBuilder;
  onRotationChanged(body: string): ControlBuilder;
  onScaleChanged(body: string): ControlBuilder;
  onSmoothChanged(body: string): ControlBuilder;
  onSpacingChanged(body: string): ControlBuilder;
  onStateChanged(body: string): ControlBuilder;
  onTopInsetChanged(body: string): ControlBuilder;
  onTopPaddingChanged(body: string): ControlBuilder;
  onTransformOriginChanged(body: string): ControlBuilder;
  onVerticalPaddingChanged(body: string): ControlBuilder;
  onVisibleChanged(body: string): ControlBuilder;
  onVisibleChildrenChanged(body: string): ControlBuilder;
  onVisualFocusChanged(body: string): ControlBuilder;
  onWheelEnabledChanged(body: string): ControlBuilder;
  onWidthChanged(body: string): ControlBuilder;
  onWindowChanged(body: string): ControlBuilder;
  onXChanged(body: string): ControlBuilder;
  onYChanged(body: string): ControlBuilder;
  onZChanged(body: string): ControlBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ControlBuilder;
  layer(setup: (b: LayerBuilder) => void): ControlBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ControlBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ControlBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ControlBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ControlBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ControlBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ControlBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ControlBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ControlBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ControlBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ControlBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ControlBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ControlBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ControlBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ControlBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ControlBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ControlBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ControlBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ControlBuilder;
}

const CONTROL_META: TypeMetadata = {
  typeName: 'Control',
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
    { handlerName: 'onContentItemChanged', paramCount: 0 },
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
  defaultProperty: 'data',
};

export function Control(): ControlBuilder {
  return createFluentBuilder('Control', CONTROL_META) as unknown as ControlBuilder;
}

export namespace Control {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Control', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Control', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Control', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Control', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Control', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Control', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Control', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Control', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Control', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Control', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Control', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Control', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Control', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Control', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Control', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Control', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Control', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Control', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Control', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Control', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Control', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Control', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Control', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Control', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Control', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Control', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Control', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Control', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Control', 'TransformOrigin', 'BottomRight');
  }
}
