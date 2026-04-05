// AUTO-GENERATED — DO NOT EDIT
// Type: MenuSeparator
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
export interface MenuSeparatorBuilder {
  id(id: string): MenuSeparatorBuilder;
  child(obj: QmlObjectBuilder): MenuSeparatorBuilder;

  activeFocusOnTab(value: boolean): MenuSeparatorBuilder;
  activeFocusOnTabBind(expr: string): MenuSeparatorBuilder;
  antialiasing(value: boolean): MenuSeparatorBuilder;
  antialiasingBind(expr: string): MenuSeparatorBuilder;
  background(value: ItemBuilder): MenuSeparatorBuilder;
  backgroundBind(expr: string): MenuSeparatorBuilder;
  baselineOffset(value: number): MenuSeparatorBuilder;
  baselineOffsetBind(expr: string): MenuSeparatorBuilder;
  bottomInset(value: number): MenuSeparatorBuilder;
  bottomInsetBind(expr: string): MenuSeparatorBuilder;
  bottomPadding(value: number): MenuSeparatorBuilder;
  bottomPaddingBind(expr: string): MenuSeparatorBuilder;
  clip(value: boolean): MenuSeparatorBuilder;
  clipBind(expr: string): MenuSeparatorBuilder;
  containmentMask(value: QtObjectBuilder): MenuSeparatorBuilder;
  containmentMaskBind(expr: string): MenuSeparatorBuilder;
  contentItem(value: ItemBuilder): MenuSeparatorBuilder;
  contentItemBind(expr: string): MenuSeparatorBuilder;
  enabled(value: boolean): MenuSeparatorBuilder;
  enabledBind(expr: string): MenuSeparatorBuilder;
  focus(value: boolean): MenuSeparatorBuilder;
  focusBind(expr: string): MenuSeparatorBuilder;
  focusPolicy(value: QmlEnumToken): MenuSeparatorBuilder;
  focusPolicyBind(expr: string): MenuSeparatorBuilder;
  focusReason(value: QmlEnumToken): MenuSeparatorBuilder;
  focusReasonBind(expr: string): MenuSeparatorBuilder;
  font(value: QmlFont): MenuSeparatorBuilder;
  fontBind(expr: string): MenuSeparatorBuilder;
  height(value: number): MenuSeparatorBuilder;
  heightBind(expr: string): MenuSeparatorBuilder;
  horizontalPadding(value: number): MenuSeparatorBuilder;
  horizontalPaddingBind(expr: string): MenuSeparatorBuilder;
  hoverEnabled(value: boolean): MenuSeparatorBuilder;
  hoverEnabledBind(expr: string): MenuSeparatorBuilder;
  implicitHeight(value: number): MenuSeparatorBuilder;
  implicitHeightBind(expr: string): MenuSeparatorBuilder;
  implicitWidth(value: number): MenuSeparatorBuilder;
  implicitWidthBind(expr: string): MenuSeparatorBuilder;
  leftInset(value: number): MenuSeparatorBuilder;
  leftInsetBind(expr: string): MenuSeparatorBuilder;
  leftPadding(value: number): MenuSeparatorBuilder;
  leftPaddingBind(expr: string): MenuSeparatorBuilder;
  locale(value: QmlValue): MenuSeparatorBuilder;
  localeBind(expr: string): MenuSeparatorBuilder;
  objectName(value: string): MenuSeparatorBuilder;
  objectNameBind(expr: string): MenuSeparatorBuilder;
  opacity(value: number): MenuSeparatorBuilder;
  opacityBind(expr: string): MenuSeparatorBuilder;
  padding(value: number): MenuSeparatorBuilder;
  paddingBind(expr: string): MenuSeparatorBuilder;
  palette(value: PaletteBuilder): MenuSeparatorBuilder;
  paletteBind(expr: string): MenuSeparatorBuilder;
  parent(value: ItemBuilder): MenuSeparatorBuilder;
  parentBind(expr: string): MenuSeparatorBuilder;
  rightInset(value: number): MenuSeparatorBuilder;
  rightInsetBind(expr: string): MenuSeparatorBuilder;
  rightPadding(value: number): MenuSeparatorBuilder;
  rightPaddingBind(expr: string): MenuSeparatorBuilder;
  rotation(value: number): MenuSeparatorBuilder;
  rotationBind(expr: string): MenuSeparatorBuilder;
  scale(value: number): MenuSeparatorBuilder;
  scaleBind(expr: string): MenuSeparatorBuilder;
  smooth(value: boolean): MenuSeparatorBuilder;
  smoothBind(expr: string): MenuSeparatorBuilder;
  spacing(value: number): MenuSeparatorBuilder;
  spacingBind(expr: string): MenuSeparatorBuilder;
  state(value: string): MenuSeparatorBuilder;
  stateBind(expr: string): MenuSeparatorBuilder;
  topInset(value: number): MenuSeparatorBuilder;
  topInsetBind(expr: string): MenuSeparatorBuilder;
  topPadding(value: number): MenuSeparatorBuilder;
  topPaddingBind(expr: string): MenuSeparatorBuilder;
  transformOrigin(value: QmlEnumToken): MenuSeparatorBuilder;
  transformOriginBind(expr: string): MenuSeparatorBuilder;
  verticalPadding(value: number): MenuSeparatorBuilder;
  verticalPaddingBind(expr: string): MenuSeparatorBuilder;
  visible(value: boolean): MenuSeparatorBuilder;
  visibleBind(expr: string): MenuSeparatorBuilder;
  wheelEnabled(value: boolean): MenuSeparatorBuilder;
  wheelEnabledBind(expr: string): MenuSeparatorBuilder;
  width(value: number): MenuSeparatorBuilder;
  widthBind(expr: string): MenuSeparatorBuilder;
  x(value: number): MenuSeparatorBuilder;
  xBind(expr: string): MenuSeparatorBuilder;
  y(value: number): MenuSeparatorBuilder;
  yBind(expr: string): MenuSeparatorBuilder;
  z(value: number): MenuSeparatorBuilder;
  zBind(expr: string): MenuSeparatorBuilder;
  onActiveFocusChanged(body: string): MenuSeparatorBuilder;
  onActiveFocusOnTabChanged(body: string): MenuSeparatorBuilder;
  onAntialiasingChanged(body: string): MenuSeparatorBuilder;
  onAvailableHeightChanged(body: string): MenuSeparatorBuilder;
  onAvailableWidthChanged(body: string): MenuSeparatorBuilder;
  onBackgroundChanged(body: string): MenuSeparatorBuilder;
  onBaselineOffsetChanged(body: string): MenuSeparatorBuilder;
  onBottomInsetChanged(body: string): MenuSeparatorBuilder;
  onBottomPaddingChanged(body: string): MenuSeparatorBuilder;
  onChildrenChanged(body: string): MenuSeparatorBuilder;
  onChildrenRectChanged(body: string): MenuSeparatorBuilder;
  onClipChanged(body: string): MenuSeparatorBuilder;
  onContainmentMaskChanged(body: string): MenuSeparatorBuilder;
  onContentItemChanged(body: string): MenuSeparatorBuilder;
  onEnabledChanged(body: string): MenuSeparatorBuilder;
  onFocusChanged(body: string): MenuSeparatorBuilder;
  onFocusPolicyChanged(body: string): MenuSeparatorBuilder;
  onFocusReasonChanged(body: string): MenuSeparatorBuilder;
  onFontChanged(body: string): MenuSeparatorBuilder;
  onHeightChanged(body: string): MenuSeparatorBuilder;
  onHorizontalPaddingChanged(body: string): MenuSeparatorBuilder;
  onHoverEnabledChanged(body: string): MenuSeparatorBuilder;
  onHoveredChanged(body: string): MenuSeparatorBuilder;
  onImplicitBackgroundHeightChanged(body: string): MenuSeparatorBuilder;
  onImplicitBackgroundWidthChanged(body: string): MenuSeparatorBuilder;
  onImplicitContentHeightChanged(body: string): MenuSeparatorBuilder;
  onImplicitContentWidthChanged(body: string): MenuSeparatorBuilder;
  onImplicitHeightChanged(body: string): MenuSeparatorBuilder;
  onImplicitWidthChanged(body: string): MenuSeparatorBuilder;
  onLeftInsetChanged(body: string): MenuSeparatorBuilder;
  onLeftPaddingChanged(body: string): MenuSeparatorBuilder;
  onLocaleChanged(body: string): MenuSeparatorBuilder;
  onMirroredChanged(body: string): MenuSeparatorBuilder;
  onObjectNameChanged(body: string): MenuSeparatorBuilder;
  onOpacityChanged(body: string): MenuSeparatorBuilder;
  onPaddingChanged(body: string): MenuSeparatorBuilder;
  onPaletteChanged(body: string): MenuSeparatorBuilder;
  onPaletteCreated(body: string): MenuSeparatorBuilder;
  onParentChanged(body: string): MenuSeparatorBuilder;
  onRightInsetChanged(body: string): MenuSeparatorBuilder;
  onRightPaddingChanged(body: string): MenuSeparatorBuilder;
  onRotationChanged(body: string): MenuSeparatorBuilder;
  onScaleChanged(body: string): MenuSeparatorBuilder;
  onSmoothChanged(body: string): MenuSeparatorBuilder;
  onSpacingChanged(body: string): MenuSeparatorBuilder;
  onStateChanged(body: string): MenuSeparatorBuilder;
  onTopInsetChanged(body: string): MenuSeparatorBuilder;
  onTopPaddingChanged(body: string): MenuSeparatorBuilder;
  onTransformOriginChanged(body: string): MenuSeparatorBuilder;
  onVerticalPaddingChanged(body: string): MenuSeparatorBuilder;
  onVisibleChanged(body: string): MenuSeparatorBuilder;
  onVisibleChildrenChanged(body: string): MenuSeparatorBuilder;
  onVisualFocusChanged(body: string): MenuSeparatorBuilder;
  onWheelEnabledChanged(body: string): MenuSeparatorBuilder;
  onWidthChanged(body: string): MenuSeparatorBuilder;
  onWindowChanged(body: string): MenuSeparatorBuilder;
  onXChanged(body: string): MenuSeparatorBuilder;
  onYChanged(body: string): MenuSeparatorBuilder;
  onZChanged(body: string): MenuSeparatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuSeparatorBuilder;
  layer(setup: (b: LayerBuilder) => void): MenuSeparatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuSeparatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuSeparatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuSeparatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuSeparatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuSeparatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuSeparatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuSeparatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuSeparatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuSeparatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuSeparatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuSeparatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuSeparatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuSeparatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuSeparatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuSeparatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuSeparatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuSeparatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuSeparatorBuilder;
}

const MENUSEPARATOR_META: TypeMetadata = {
  typeName: 'MenuSeparator',
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

export function MenuSeparator(): MenuSeparatorBuilder {
  return createFluentBuilder(
    'MenuSeparator',
    MENUSEPARATOR_META,
  ) as unknown as MenuSeparatorBuilder;
}

export namespace MenuSeparator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MenuSeparator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MenuSeparator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MenuSeparator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MenuSeparator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MenuSeparator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MenuSeparator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MenuSeparator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MenuSeparator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MenuSeparator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MenuSeparator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MenuSeparator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MenuSeparator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MenuSeparator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MenuSeparator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MenuSeparator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MenuSeparator', 'TransformOrigin', 'BottomRight');
  }
}
