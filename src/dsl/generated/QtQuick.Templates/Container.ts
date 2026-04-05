// AUTO-GENERATED — DO NOT EDIT
// Type: Container
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
export interface ContainerBuilder {
  id(id: string): ContainerBuilder;
  child(obj: QmlObjectBuilder): ContainerBuilder;

  activeFocusOnTab(value: boolean): ContainerBuilder;
  activeFocusOnTabBind(expr: string): ContainerBuilder;
  antialiasing(value: boolean): ContainerBuilder;
  antialiasingBind(expr: string): ContainerBuilder;
  background(value: ItemBuilder): ContainerBuilder;
  backgroundBind(expr: string): ContainerBuilder;
  baselineOffset(value: number): ContainerBuilder;
  baselineOffsetBind(expr: string): ContainerBuilder;
  bottomInset(value: number): ContainerBuilder;
  bottomInsetBind(expr: string): ContainerBuilder;
  bottomPadding(value: number): ContainerBuilder;
  bottomPaddingBind(expr: string): ContainerBuilder;
  clip(value: boolean): ContainerBuilder;
  clipBind(expr: string): ContainerBuilder;
  containmentMask(value: QtObjectBuilder): ContainerBuilder;
  containmentMaskBind(expr: string): ContainerBuilder;
  contentHeight(value: number): ContainerBuilder;
  contentHeightBind(expr: string): ContainerBuilder;
  contentItem(value: ItemBuilder): ContainerBuilder;
  contentItemBind(expr: string): ContainerBuilder;
  contentWidth(value: number): ContainerBuilder;
  contentWidthBind(expr: string): ContainerBuilder;
  currentIndex(value: number): ContainerBuilder;
  currentIndexBind(expr: string): ContainerBuilder;
  enabled(value: boolean): ContainerBuilder;
  enabledBind(expr: string): ContainerBuilder;
  focus(value: boolean): ContainerBuilder;
  focusBind(expr: string): ContainerBuilder;
  focusPolicy(value: QmlEnumToken): ContainerBuilder;
  focusPolicyBind(expr: string): ContainerBuilder;
  focusReason(value: QmlEnumToken): ContainerBuilder;
  focusReasonBind(expr: string): ContainerBuilder;
  font(value: QmlFont): ContainerBuilder;
  fontBind(expr: string): ContainerBuilder;
  height(value: number): ContainerBuilder;
  heightBind(expr: string): ContainerBuilder;
  horizontalPadding(value: number): ContainerBuilder;
  horizontalPaddingBind(expr: string): ContainerBuilder;
  hoverEnabled(value: boolean): ContainerBuilder;
  hoverEnabledBind(expr: string): ContainerBuilder;
  implicitHeight(value: number): ContainerBuilder;
  implicitHeightBind(expr: string): ContainerBuilder;
  implicitWidth(value: number): ContainerBuilder;
  implicitWidthBind(expr: string): ContainerBuilder;
  leftInset(value: number): ContainerBuilder;
  leftInsetBind(expr: string): ContainerBuilder;
  leftPadding(value: number): ContainerBuilder;
  leftPaddingBind(expr: string): ContainerBuilder;
  locale(value: QmlValue): ContainerBuilder;
  localeBind(expr: string): ContainerBuilder;
  objectName(value: string): ContainerBuilder;
  objectNameBind(expr: string): ContainerBuilder;
  opacity(value: number): ContainerBuilder;
  opacityBind(expr: string): ContainerBuilder;
  padding(value: number): ContainerBuilder;
  paddingBind(expr: string): ContainerBuilder;
  palette(value: PaletteBuilder): ContainerBuilder;
  paletteBind(expr: string): ContainerBuilder;
  parent(value: ItemBuilder): ContainerBuilder;
  parentBind(expr: string): ContainerBuilder;
  rightInset(value: number): ContainerBuilder;
  rightInsetBind(expr: string): ContainerBuilder;
  rightPadding(value: number): ContainerBuilder;
  rightPaddingBind(expr: string): ContainerBuilder;
  rotation(value: number): ContainerBuilder;
  rotationBind(expr: string): ContainerBuilder;
  scale(value: number): ContainerBuilder;
  scaleBind(expr: string): ContainerBuilder;
  smooth(value: boolean): ContainerBuilder;
  smoothBind(expr: string): ContainerBuilder;
  spacing(value: number): ContainerBuilder;
  spacingBind(expr: string): ContainerBuilder;
  state(value: string): ContainerBuilder;
  stateBind(expr: string): ContainerBuilder;
  topInset(value: number): ContainerBuilder;
  topInsetBind(expr: string): ContainerBuilder;
  topPadding(value: number): ContainerBuilder;
  topPaddingBind(expr: string): ContainerBuilder;
  transformOrigin(value: QmlEnumToken): ContainerBuilder;
  transformOriginBind(expr: string): ContainerBuilder;
  verticalPadding(value: number): ContainerBuilder;
  verticalPaddingBind(expr: string): ContainerBuilder;
  visible(value: boolean): ContainerBuilder;
  visibleBind(expr: string): ContainerBuilder;
  wheelEnabled(value: boolean): ContainerBuilder;
  wheelEnabledBind(expr: string): ContainerBuilder;
  width(value: number): ContainerBuilder;
  widthBind(expr: string): ContainerBuilder;
  x(value: number): ContainerBuilder;
  xBind(expr: string): ContainerBuilder;
  y(value: number): ContainerBuilder;
  yBind(expr: string): ContainerBuilder;
  z(value: number): ContainerBuilder;
  zBind(expr: string): ContainerBuilder;
  onActiveFocusChanged(body: string): ContainerBuilder;
  onActiveFocusOnTabChanged(body: string): ContainerBuilder;
  onAntialiasingChanged(body: string): ContainerBuilder;
  onAvailableHeightChanged(body: string): ContainerBuilder;
  onAvailableWidthChanged(body: string): ContainerBuilder;
  onBackgroundChanged(body: string): ContainerBuilder;
  onBaselineOffsetChanged(body: string): ContainerBuilder;
  onBottomInsetChanged(body: string): ContainerBuilder;
  onBottomPaddingChanged(body: string): ContainerBuilder;
  onChildrenChanged(body: string): ContainerBuilder;
  onChildrenRectChanged(body: string): ContainerBuilder;
  onClipChanged(body: string): ContainerBuilder;
  onContainmentMaskChanged(body: string): ContainerBuilder;
  onContentChildrenChanged(body: string): ContainerBuilder;
  onContentHeightChanged(body: string): ContainerBuilder;
  onContentItemChanged(body: string): ContainerBuilder;
  onContentWidthChanged(body: string): ContainerBuilder;
  onCountChanged(body: string): ContainerBuilder;
  onCurrentIndexChanged(body: string): ContainerBuilder;
  onCurrentItemChanged(body: string): ContainerBuilder;
  onEnabledChanged(body: string): ContainerBuilder;
  onFocusChanged(body: string): ContainerBuilder;
  onFocusPolicyChanged(body: string): ContainerBuilder;
  onFocusReasonChanged(body: string): ContainerBuilder;
  onFontChanged(body: string): ContainerBuilder;
  onHeightChanged(body: string): ContainerBuilder;
  onHorizontalPaddingChanged(body: string): ContainerBuilder;
  onHoverEnabledChanged(body: string): ContainerBuilder;
  onHoveredChanged(body: string): ContainerBuilder;
  onImplicitBackgroundHeightChanged(body: string): ContainerBuilder;
  onImplicitBackgroundWidthChanged(body: string): ContainerBuilder;
  onImplicitContentHeightChanged(body: string): ContainerBuilder;
  onImplicitContentWidthChanged(body: string): ContainerBuilder;
  onImplicitHeightChanged(body: string): ContainerBuilder;
  onImplicitWidthChanged(body: string): ContainerBuilder;
  onLeftInsetChanged(body: string): ContainerBuilder;
  onLeftPaddingChanged(body: string): ContainerBuilder;
  onLocaleChanged(body: string): ContainerBuilder;
  onMirroredChanged(body: string): ContainerBuilder;
  onObjectNameChanged(body: string): ContainerBuilder;
  onOpacityChanged(body: string): ContainerBuilder;
  onPaddingChanged(body: string): ContainerBuilder;
  onPaletteChanged(body: string): ContainerBuilder;
  onPaletteCreated(body: string): ContainerBuilder;
  onParentChanged(body: string): ContainerBuilder;
  onRightInsetChanged(body: string): ContainerBuilder;
  onRightPaddingChanged(body: string): ContainerBuilder;
  onRotationChanged(body: string): ContainerBuilder;
  onScaleChanged(body: string): ContainerBuilder;
  onSmoothChanged(body: string): ContainerBuilder;
  onSpacingChanged(body: string): ContainerBuilder;
  onStateChanged(body: string): ContainerBuilder;
  onTopInsetChanged(body: string): ContainerBuilder;
  onTopPaddingChanged(body: string): ContainerBuilder;
  onTransformOriginChanged(body: string): ContainerBuilder;
  onVerticalPaddingChanged(body: string): ContainerBuilder;
  onVisibleChanged(body: string): ContainerBuilder;
  onVisibleChildrenChanged(body: string): ContainerBuilder;
  onVisualFocusChanged(body: string): ContainerBuilder;
  onWheelEnabledChanged(body: string): ContainerBuilder;
  onWidthChanged(body: string): ContainerBuilder;
  onWindowChanged(body: string): ContainerBuilder;
  onXChanged(body: string): ContainerBuilder;
  onYChanged(body: string): ContainerBuilder;
  onZChanged(body: string): ContainerBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ContainerBuilder;
  layer(setup: (b: LayerBuilder) => void): ContainerBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ContainerBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ContainerBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ContainerBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ContainerBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ContainerBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ContainerBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ContainerBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ContainerBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ContainerBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ContainerBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ContainerBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ContainerBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ContainerBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ContainerBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ContainerBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ContainerBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ContainerBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ContainerBuilder;
}

const CONTAINER_META: TypeMetadata = {
  typeName: 'Container',
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

export function Container(): ContainerBuilder {
  return createFluentBuilder('Container', CONTAINER_META) as unknown as ContainerBuilder;
}

export namespace Container {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Container',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Container',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Container', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Container', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Container', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Container', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Container',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Container',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Container',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Container', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Container', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Container', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Container', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Container', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Container', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Container', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Container', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Container', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Container', 'TransformOrigin', 'BottomRight');
  }
}
