// AUTO-GENERATED — DO NOT EDIT
// Type: GroupBox
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
export interface GroupBoxBuilder {
  id(id: string): GroupBoxBuilder;
  child(obj: QmlObjectBuilder): GroupBoxBuilder;

  activeFocusOnTab(value: boolean): GroupBoxBuilder;
  activeFocusOnTabBind(expr: string): GroupBoxBuilder;
  antialiasing(value: boolean): GroupBoxBuilder;
  antialiasingBind(expr: string): GroupBoxBuilder;
  background(value: ItemBuilder): GroupBoxBuilder;
  backgroundBind(expr: string): GroupBoxBuilder;
  baselineOffset(value: number): GroupBoxBuilder;
  baselineOffsetBind(expr: string): GroupBoxBuilder;
  bottomInset(value: number): GroupBoxBuilder;
  bottomInsetBind(expr: string): GroupBoxBuilder;
  bottomPadding(value: number): GroupBoxBuilder;
  bottomPaddingBind(expr: string): GroupBoxBuilder;
  clip(value: boolean): GroupBoxBuilder;
  clipBind(expr: string): GroupBoxBuilder;
  containmentMask(value: QtObjectBuilder): GroupBoxBuilder;
  containmentMaskBind(expr: string): GroupBoxBuilder;
  contentHeight(value: number): GroupBoxBuilder;
  contentHeightBind(expr: string): GroupBoxBuilder;
  contentItem(value: ItemBuilder): GroupBoxBuilder;
  contentItemBind(expr: string): GroupBoxBuilder;
  contentWidth(value: number): GroupBoxBuilder;
  contentWidthBind(expr: string): GroupBoxBuilder;
  enabled(value: boolean): GroupBoxBuilder;
  enabledBind(expr: string): GroupBoxBuilder;
  focus(value: boolean): GroupBoxBuilder;
  focusBind(expr: string): GroupBoxBuilder;
  focusPolicy(value: QmlEnumToken): GroupBoxBuilder;
  focusPolicyBind(expr: string): GroupBoxBuilder;
  focusReason(value: QmlEnumToken): GroupBoxBuilder;
  focusReasonBind(expr: string): GroupBoxBuilder;
  font(value: QmlFont): GroupBoxBuilder;
  fontBind(expr: string): GroupBoxBuilder;
  height(value: number): GroupBoxBuilder;
  heightBind(expr: string): GroupBoxBuilder;
  horizontalPadding(value: number): GroupBoxBuilder;
  horizontalPaddingBind(expr: string): GroupBoxBuilder;
  hoverEnabled(value: boolean): GroupBoxBuilder;
  hoverEnabledBind(expr: string): GroupBoxBuilder;
  implicitHeight(value: number): GroupBoxBuilder;
  implicitHeightBind(expr: string): GroupBoxBuilder;
  implicitWidth(value: number): GroupBoxBuilder;
  implicitWidthBind(expr: string): GroupBoxBuilder;
  label(value: ItemBuilder): GroupBoxBuilder;
  labelBind(expr: string): GroupBoxBuilder;
  leftInset(value: number): GroupBoxBuilder;
  leftInsetBind(expr: string): GroupBoxBuilder;
  leftPadding(value: number): GroupBoxBuilder;
  leftPaddingBind(expr: string): GroupBoxBuilder;
  locale(value: QmlValue): GroupBoxBuilder;
  localeBind(expr: string): GroupBoxBuilder;
  objectName(value: string): GroupBoxBuilder;
  objectNameBind(expr: string): GroupBoxBuilder;
  opacity(value: number): GroupBoxBuilder;
  opacityBind(expr: string): GroupBoxBuilder;
  padding(value: number): GroupBoxBuilder;
  paddingBind(expr: string): GroupBoxBuilder;
  palette(value: PaletteBuilder): GroupBoxBuilder;
  paletteBind(expr: string): GroupBoxBuilder;
  parent(value: ItemBuilder): GroupBoxBuilder;
  parentBind(expr: string): GroupBoxBuilder;
  rightInset(value: number): GroupBoxBuilder;
  rightInsetBind(expr: string): GroupBoxBuilder;
  rightPadding(value: number): GroupBoxBuilder;
  rightPaddingBind(expr: string): GroupBoxBuilder;
  rotation(value: number): GroupBoxBuilder;
  rotationBind(expr: string): GroupBoxBuilder;
  scale(value: number): GroupBoxBuilder;
  scaleBind(expr: string): GroupBoxBuilder;
  smooth(value: boolean): GroupBoxBuilder;
  smoothBind(expr: string): GroupBoxBuilder;
  spacing(value: number): GroupBoxBuilder;
  spacingBind(expr: string): GroupBoxBuilder;
  state(value: string): GroupBoxBuilder;
  stateBind(expr: string): GroupBoxBuilder;
  title(value: string): GroupBoxBuilder;
  titleBind(expr: string): GroupBoxBuilder;
  topInset(value: number): GroupBoxBuilder;
  topInsetBind(expr: string): GroupBoxBuilder;
  topPadding(value: number): GroupBoxBuilder;
  topPaddingBind(expr: string): GroupBoxBuilder;
  transformOrigin(value: QmlEnumToken): GroupBoxBuilder;
  transformOriginBind(expr: string): GroupBoxBuilder;
  verticalPadding(value: number): GroupBoxBuilder;
  verticalPaddingBind(expr: string): GroupBoxBuilder;
  visible(value: boolean): GroupBoxBuilder;
  visibleBind(expr: string): GroupBoxBuilder;
  wheelEnabled(value: boolean): GroupBoxBuilder;
  wheelEnabledBind(expr: string): GroupBoxBuilder;
  width(value: number): GroupBoxBuilder;
  widthBind(expr: string): GroupBoxBuilder;
  x(value: number): GroupBoxBuilder;
  xBind(expr: string): GroupBoxBuilder;
  y(value: number): GroupBoxBuilder;
  yBind(expr: string): GroupBoxBuilder;
  z(value: number): GroupBoxBuilder;
  zBind(expr: string): GroupBoxBuilder;
  onActiveFocusChanged(body: string): GroupBoxBuilder;
  onActiveFocusOnTabChanged(body: string): GroupBoxBuilder;
  onAntialiasingChanged(body: string): GroupBoxBuilder;
  onAvailableHeightChanged(body: string): GroupBoxBuilder;
  onAvailableWidthChanged(body: string): GroupBoxBuilder;
  onBackgroundChanged(body: string): GroupBoxBuilder;
  onBaselineOffsetChanged(body: string): GroupBoxBuilder;
  onBottomInsetChanged(body: string): GroupBoxBuilder;
  onBottomPaddingChanged(body: string): GroupBoxBuilder;
  onChildrenChanged(body: string): GroupBoxBuilder;
  onChildrenRectChanged(body: string): GroupBoxBuilder;
  onClipChanged(body: string): GroupBoxBuilder;
  onContainmentMaskChanged(body: string): GroupBoxBuilder;
  onContentChildrenChanged(body: string): GroupBoxBuilder;
  onContentHeightChanged(body: string): GroupBoxBuilder;
  onContentItemChanged(body: string): GroupBoxBuilder;
  onContentWidthChanged(body: string): GroupBoxBuilder;
  onEnabledChanged(body: string): GroupBoxBuilder;
  onFocusChanged(body: string): GroupBoxBuilder;
  onFocusPolicyChanged(body: string): GroupBoxBuilder;
  onFocusReasonChanged(body: string): GroupBoxBuilder;
  onFontChanged(body: string): GroupBoxBuilder;
  onHeightChanged(body: string): GroupBoxBuilder;
  onHorizontalPaddingChanged(body: string): GroupBoxBuilder;
  onHoverEnabledChanged(body: string): GroupBoxBuilder;
  onHoveredChanged(body: string): GroupBoxBuilder;
  onImplicitBackgroundHeightChanged(body: string): GroupBoxBuilder;
  onImplicitBackgroundWidthChanged(body: string): GroupBoxBuilder;
  onImplicitContentHeightChanged(body: string): GroupBoxBuilder;
  onImplicitContentWidthChanged(body: string): GroupBoxBuilder;
  onImplicitHeightChanged(body: string): GroupBoxBuilder;
  onImplicitLabelHeightChanged(body: string): GroupBoxBuilder;
  onImplicitLabelWidthChanged(body: string): GroupBoxBuilder;
  onImplicitWidthChanged(body: string): GroupBoxBuilder;
  onLabelChanged(body: string): GroupBoxBuilder;
  onLeftInsetChanged(body: string): GroupBoxBuilder;
  onLeftPaddingChanged(body: string): GroupBoxBuilder;
  onLocaleChanged(body: string): GroupBoxBuilder;
  onMirroredChanged(body: string): GroupBoxBuilder;
  onObjectNameChanged(body: string): GroupBoxBuilder;
  onOpacityChanged(body: string): GroupBoxBuilder;
  onPaddingChanged(body: string): GroupBoxBuilder;
  onPaletteChanged(body: string): GroupBoxBuilder;
  onPaletteCreated(body: string): GroupBoxBuilder;
  onParentChanged(body: string): GroupBoxBuilder;
  onRightInsetChanged(body: string): GroupBoxBuilder;
  onRightPaddingChanged(body: string): GroupBoxBuilder;
  onRotationChanged(body: string): GroupBoxBuilder;
  onScaleChanged(body: string): GroupBoxBuilder;
  onSmoothChanged(body: string): GroupBoxBuilder;
  onSpacingChanged(body: string): GroupBoxBuilder;
  onStateChanged(body: string): GroupBoxBuilder;
  onTitleChanged(body: string): GroupBoxBuilder;
  onTopInsetChanged(body: string): GroupBoxBuilder;
  onTopPaddingChanged(body: string): GroupBoxBuilder;
  onTransformOriginChanged(body: string): GroupBoxBuilder;
  onVerticalPaddingChanged(body: string): GroupBoxBuilder;
  onVisibleChanged(body: string): GroupBoxBuilder;
  onVisibleChildrenChanged(body: string): GroupBoxBuilder;
  onVisualFocusChanged(body: string): GroupBoxBuilder;
  onWheelEnabledChanged(body: string): GroupBoxBuilder;
  onWidthChanged(body: string): GroupBoxBuilder;
  onWindowChanged(body: string): GroupBoxBuilder;
  onXChanged(body: string): GroupBoxBuilder;
  onYChanged(body: string): GroupBoxBuilder;
  onZChanged(body: string): GroupBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GroupBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): GroupBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): GroupBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): GroupBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): GroupBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): GroupBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): GroupBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): GroupBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): GroupBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): GroupBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): GroupBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): GroupBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): GroupBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): GroupBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): GroupBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): GroupBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): GroupBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): GroupBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): GroupBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): GroupBoxBuilder;
}

const GROUPBOX_META: TypeMetadata = {
  typeName: 'GroupBox',
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
    { name: 'label', hasValue: true, hasBinding: true },
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
    { handlerName: 'onImplicitLabelHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitLabelWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLabelChanged', paramCount: 0 },
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

export function GroupBox(): GroupBoxBuilder {
  return createFluentBuilder('GroupBox', GROUPBOX_META) as unknown as GroupBoxBuilder;
}

export namespace GroupBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('GroupBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('GroupBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('GroupBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('GroupBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('GroupBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('GroupBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('GroupBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('GroupBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('GroupBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('GroupBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('GroupBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('GroupBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('GroupBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('GroupBox', 'TransformOrigin', 'BottomRight');
  }
}
