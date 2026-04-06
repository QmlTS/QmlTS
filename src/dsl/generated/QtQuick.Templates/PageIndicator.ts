// AUTO-GENERATED — DO NOT EDIT
// Type: PageIndicator
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
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
export interface PageIndicatorBuilder {
  id(id: string): PageIndicatorBuilder;
  child(obj: QmlObjectBuilder): PageIndicatorBuilder;
  children(...objs: QmlObjectBuilder[]): PageIndicatorBuilder;

  activeFocusOnTab(value: boolean): PageIndicatorBuilder;
  activeFocusOnTabBind(expr: string): PageIndicatorBuilder;
  antialiasing(value: boolean): PageIndicatorBuilder;
  antialiasingBind(expr: string): PageIndicatorBuilder;
  background(value: ItemBuilder): PageIndicatorBuilder;
  backgroundBind(expr: string): PageIndicatorBuilder;
  baselineOffset(value: number): PageIndicatorBuilder;
  baselineOffsetBind(expr: string): PageIndicatorBuilder;
  bottomInset(value: number): PageIndicatorBuilder;
  bottomInsetBind(expr: string): PageIndicatorBuilder;
  bottomPadding(value: number): PageIndicatorBuilder;
  bottomPaddingBind(expr: string): PageIndicatorBuilder;
  clip(value: boolean): PageIndicatorBuilder;
  clipBind(expr: string): PageIndicatorBuilder;
  containmentMask(value: QtObjectBuilder): PageIndicatorBuilder;
  containmentMaskBind(expr: string): PageIndicatorBuilder;
  contentItem(value: ItemBuilder): PageIndicatorBuilder;
  contentItemBind(expr: string): PageIndicatorBuilder;
  count(value: number): PageIndicatorBuilder;
  countBind(expr: string): PageIndicatorBuilder;
  currentIndex(value: number): PageIndicatorBuilder;
  currentIndexBind(expr: string): PageIndicatorBuilder;
  delegate(value: QmlComponent): PageIndicatorBuilder;
  delegateBind(expr: string): PageIndicatorBuilder;
  enabled(value: boolean): PageIndicatorBuilder;
  enabledBind(expr: string): PageIndicatorBuilder;
  focus(value: boolean): PageIndicatorBuilder;
  focusBind(expr: string): PageIndicatorBuilder;
  focusPolicy(value: QmlEnumToken): PageIndicatorBuilder;
  focusPolicyBind(expr: string): PageIndicatorBuilder;
  focusReason(value: QmlEnumToken): PageIndicatorBuilder;
  focusReasonBind(expr: string): PageIndicatorBuilder;
  font(value: QmlFont): PageIndicatorBuilder;
  fontBind(expr: string): PageIndicatorBuilder;
  height(value: number): PageIndicatorBuilder;
  heightBind(expr: string): PageIndicatorBuilder;
  horizontalPadding(value: number): PageIndicatorBuilder;
  horizontalPaddingBind(expr: string): PageIndicatorBuilder;
  hoverEnabled(value: boolean): PageIndicatorBuilder;
  hoverEnabledBind(expr: string): PageIndicatorBuilder;
  implicitHeight(value: number): PageIndicatorBuilder;
  implicitHeightBind(expr: string): PageIndicatorBuilder;
  implicitWidth(value: number): PageIndicatorBuilder;
  implicitWidthBind(expr: string): PageIndicatorBuilder;
  interactive(value: boolean): PageIndicatorBuilder;
  interactiveBind(expr: string): PageIndicatorBuilder;
  leftInset(value: number): PageIndicatorBuilder;
  leftInsetBind(expr: string): PageIndicatorBuilder;
  leftPadding(value: number): PageIndicatorBuilder;
  leftPaddingBind(expr: string): PageIndicatorBuilder;
  locale(value: string): PageIndicatorBuilder;
  localeBind(expr: string): PageIndicatorBuilder;
  objectName(value: string): PageIndicatorBuilder;
  objectNameBind(expr: string): PageIndicatorBuilder;
  opacity(value: number): PageIndicatorBuilder;
  opacityBind(expr: string): PageIndicatorBuilder;
  padding(value: number): PageIndicatorBuilder;
  paddingBind(expr: string): PageIndicatorBuilder;
  palette(value: PaletteBuilder): PageIndicatorBuilder;
  paletteBind(expr: string): PageIndicatorBuilder;
  parent(value: ItemBuilder): PageIndicatorBuilder;
  parentBind(expr: string): PageIndicatorBuilder;
  rightInset(value: number): PageIndicatorBuilder;
  rightInsetBind(expr: string): PageIndicatorBuilder;
  rightPadding(value: number): PageIndicatorBuilder;
  rightPaddingBind(expr: string): PageIndicatorBuilder;
  rotation(value: number): PageIndicatorBuilder;
  rotationBind(expr: string): PageIndicatorBuilder;
  scale(value: number): PageIndicatorBuilder;
  scaleBind(expr: string): PageIndicatorBuilder;
  smooth(value: boolean): PageIndicatorBuilder;
  smoothBind(expr: string): PageIndicatorBuilder;
  spacing(value: number): PageIndicatorBuilder;
  spacingBind(expr: string): PageIndicatorBuilder;
  state(value: string): PageIndicatorBuilder;
  stateBind(expr: string): PageIndicatorBuilder;
  topInset(value: number): PageIndicatorBuilder;
  topInsetBind(expr: string): PageIndicatorBuilder;
  topPadding(value: number): PageIndicatorBuilder;
  topPaddingBind(expr: string): PageIndicatorBuilder;
  transformOrigin(value: QmlEnumToken): PageIndicatorBuilder;
  transformOriginBind(expr: string): PageIndicatorBuilder;
  verticalPadding(value: number): PageIndicatorBuilder;
  verticalPaddingBind(expr: string): PageIndicatorBuilder;
  visible(value: boolean): PageIndicatorBuilder;
  visibleBind(expr: string): PageIndicatorBuilder;
  wheelEnabled(value: boolean): PageIndicatorBuilder;
  wheelEnabledBind(expr: string): PageIndicatorBuilder;
  width(value: number): PageIndicatorBuilder;
  widthBind(expr: string): PageIndicatorBuilder;
  x(value: number): PageIndicatorBuilder;
  xBind(expr: string): PageIndicatorBuilder;
  y(value: number): PageIndicatorBuilder;
  yBind(expr: string): PageIndicatorBuilder;
  z(value: number): PageIndicatorBuilder;
  zBind(expr: string): PageIndicatorBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onClipChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onCountChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onFontChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onInteractiveChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onStateChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onXChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onYChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  onZChanged(handler: DslSignalHandlerValue): PageIndicatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PageIndicatorBuilder;
  layer(setup: (b: LayerBuilder) => void): PageIndicatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): PageIndicatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): PageIndicatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): PageIndicatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): PageIndicatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): PageIndicatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): PageIndicatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): PageIndicatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): PageIndicatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): PageIndicatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): PageIndicatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): PageIndicatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): PageIndicatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): PageIndicatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): PageIndicatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): PageIndicatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): PageIndicatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): PageIndicatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): PageIndicatorBuilder;
}

const PAGEINDICATOR_META: TypeMetadata = {
  typeName: 'PageIndicator',
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
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
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
    { name: 'interactive', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
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
    { handlerName: 'onInteractiveChanged', paramCount: 0 },
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

export function PageIndicator(): PageIndicatorBuilder {
  return createFluentBuilder(
    'PageIndicator',
    PAGEINDICATOR_META,
  ) as unknown as PageIndicatorBuilder;
}

export namespace PageIndicator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PageIndicator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PageIndicator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PageIndicator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PageIndicator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PageIndicator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PageIndicator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PageIndicator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PageIndicator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PageIndicator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PageIndicator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PageIndicator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PageIndicator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PageIndicator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PageIndicator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PageIndicator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PageIndicator', 'TransformOrigin', 'BottomRight');
  }
}
