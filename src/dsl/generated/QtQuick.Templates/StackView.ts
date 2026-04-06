// AUTO-GENERATED — DO NOT EDIT
// Type: StackView
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
import type { TransitionBuilder } from '../QtQuick/Transition.js';
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
export interface StackViewBuilder {
  id(id: string): StackViewBuilder;
  child(obj: QmlObjectBuilder): StackViewBuilder;
  children(...objs: QmlObjectBuilder[]): StackViewBuilder;

  activeFocusOnTab(value: boolean): StackViewBuilder;
  activeFocusOnTabBind(expr: string): StackViewBuilder;
  antialiasing(value: boolean): StackViewBuilder;
  antialiasingBind(expr: string): StackViewBuilder;
  background(value: ItemBuilder): StackViewBuilder;
  backgroundBind(expr: string): StackViewBuilder;
  baselineOffset(value: number): StackViewBuilder;
  baselineOffsetBind(expr: string): StackViewBuilder;
  bottomInset(value: number): StackViewBuilder;
  bottomInsetBind(expr: string): StackViewBuilder;
  bottomPadding(value: number): StackViewBuilder;
  bottomPaddingBind(expr: string): StackViewBuilder;
  clip(value: boolean): StackViewBuilder;
  clipBind(expr: string): StackViewBuilder;
  containmentMask(value: QtObjectBuilder): StackViewBuilder;
  containmentMaskBind(expr: string): StackViewBuilder;
  contentItem(value: ItemBuilder): StackViewBuilder;
  contentItemBind(expr: string): StackViewBuilder;
  enabled(value: boolean): StackViewBuilder;
  enabledBind(expr: string): StackViewBuilder;
  focus(value: boolean): StackViewBuilder;
  focusBind(expr: string): StackViewBuilder;
  focusPolicy(value: QmlEnumToken): StackViewBuilder;
  focusPolicyBind(expr: string): StackViewBuilder;
  focusReason(value: QmlEnumToken): StackViewBuilder;
  focusReasonBind(expr: string): StackViewBuilder;
  font(value: QmlFont): StackViewBuilder;
  fontBind(expr: string): StackViewBuilder;
  height(value: number): StackViewBuilder;
  heightBind(expr: string): StackViewBuilder;
  horizontalPadding(value: number): StackViewBuilder;
  horizontalPaddingBind(expr: string): StackViewBuilder;
  hoverEnabled(value: boolean): StackViewBuilder;
  hoverEnabledBind(expr: string): StackViewBuilder;
  implicitHeight(value: number): StackViewBuilder;
  implicitHeightBind(expr: string): StackViewBuilder;
  implicitWidth(value: number): StackViewBuilder;
  implicitWidthBind(expr: string): StackViewBuilder;
  initialItem(value: QmlValue): StackViewBuilder;
  initialItemBind(expr: string): StackViewBuilder;
  leftInset(value: number): StackViewBuilder;
  leftInsetBind(expr: string): StackViewBuilder;
  leftPadding(value: number): StackViewBuilder;
  leftPaddingBind(expr: string): StackViewBuilder;
  locale(value: string): StackViewBuilder;
  localeBind(expr: string): StackViewBuilder;
  objectName(value: string): StackViewBuilder;
  objectNameBind(expr: string): StackViewBuilder;
  opacity(value: number): StackViewBuilder;
  opacityBind(expr: string): StackViewBuilder;
  padding(value: number): StackViewBuilder;
  paddingBind(expr: string): StackViewBuilder;
  palette(value: PaletteBuilder): StackViewBuilder;
  paletteBind(expr: string): StackViewBuilder;
  parent(value: ItemBuilder): StackViewBuilder;
  parentBind(expr: string): StackViewBuilder;
  popEnter(value: TransitionBuilder): StackViewBuilder;
  popEnterBind(expr: string): StackViewBuilder;
  popExit(value: TransitionBuilder): StackViewBuilder;
  popExitBind(expr: string): StackViewBuilder;
  pushEnter(value: TransitionBuilder): StackViewBuilder;
  pushEnterBind(expr: string): StackViewBuilder;
  pushExit(value: TransitionBuilder): StackViewBuilder;
  pushExitBind(expr: string): StackViewBuilder;
  replaceEnter(value: TransitionBuilder): StackViewBuilder;
  replaceEnterBind(expr: string): StackViewBuilder;
  replaceExit(value: TransitionBuilder): StackViewBuilder;
  replaceExitBind(expr: string): StackViewBuilder;
  rightInset(value: number): StackViewBuilder;
  rightInsetBind(expr: string): StackViewBuilder;
  rightPadding(value: number): StackViewBuilder;
  rightPaddingBind(expr: string): StackViewBuilder;
  rotation(value: number): StackViewBuilder;
  rotationBind(expr: string): StackViewBuilder;
  scale(value: number): StackViewBuilder;
  scaleBind(expr: string): StackViewBuilder;
  smooth(value: boolean): StackViewBuilder;
  smoothBind(expr: string): StackViewBuilder;
  spacing(value: number): StackViewBuilder;
  spacingBind(expr: string): StackViewBuilder;
  state(value: string): StackViewBuilder;
  stateBind(expr: string): StackViewBuilder;
  topInset(value: number): StackViewBuilder;
  topInsetBind(expr: string): StackViewBuilder;
  topPadding(value: number): StackViewBuilder;
  topPaddingBind(expr: string): StackViewBuilder;
  transformOrigin(value: QmlEnumToken): StackViewBuilder;
  transformOriginBind(expr: string): StackViewBuilder;
  verticalPadding(value: number): StackViewBuilder;
  verticalPaddingBind(expr: string): StackViewBuilder;
  visible(value: boolean): StackViewBuilder;
  visibleBind(expr: string): StackViewBuilder;
  wheelEnabled(value: boolean): StackViewBuilder;
  wheelEnabledBind(expr: string): StackViewBuilder;
  width(value: number): StackViewBuilder;
  widthBind(expr: string): StackViewBuilder;
  x(value: number): StackViewBuilder;
  xBind(expr: string): StackViewBuilder;
  y(value: number): StackViewBuilder;
  yBind(expr: string): StackViewBuilder;
  z(value: number): StackViewBuilder;
  zBind(expr: string): StackViewBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onBusyChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onClipChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onCurrentItemChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onDepthChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onEmptyChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onFontChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): StackViewBuilder;
  onParentChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onPopEnterChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onPopExitChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onPushEnterChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onPushExitChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onReplaceEnterChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onReplaceExitChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onStateChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onXChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onYChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  onZChanged(handler: DslSignalHandlerValue): StackViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): StackViewBuilder;
  layer(setup: (b: LayerBuilder) => void): StackViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): StackViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): StackViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): StackViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): StackViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): StackViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): StackViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): StackViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): StackViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): StackViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): StackViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): StackViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): StackViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): StackViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): StackViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): StackViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): StackViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): StackViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): StackViewBuilder;
}

const STACKVIEW_META: TypeMetadata = {
  typeName: 'StackView',
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
    { name: 'initialItem', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'popEnter', hasValue: true, hasBinding: true },
    { name: 'popExit', hasValue: true, hasBinding: true },
    { name: 'pushEnter', hasValue: true, hasBinding: true },
    { name: 'pushExit', hasValue: true, hasBinding: true },
    { name: 'replaceEnter', hasValue: true, hasBinding: true },
    { name: 'replaceExit', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBusyChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onDepthChanged', paramCount: 0 },
    { handlerName: 'onEmptyChanged', paramCount: 0 },
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
    { handlerName: 'onPopEnterChanged', paramCount: 0 },
    { handlerName: 'onPopExitChanged', paramCount: 0 },
    { handlerName: 'onPushEnterChanged', paramCount: 0 },
    { handlerName: 'onPushExitChanged', paramCount: 0 },
    { handlerName: 'onReplaceEnterChanged', paramCount: 0 },
    { handlerName: 'onReplaceExitChanged', paramCount: 0 },
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

export function StackView(): StackViewBuilder {
  return createFluentBuilder('StackView', STACKVIEW_META) as unknown as StackViewBuilder;
}

export namespace StackView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'StackView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'StackView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('StackView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('StackView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('StackView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('StackView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'StackView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('StackView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadBehavior {
    export const DontLoad = createEnumToken('StackView', 'LoadBehavior', 'DontLoad');
    export const ForceLoad = createEnumToken('StackView', 'LoadBehavior', 'ForceLoad');
  }
  export namespace Operation {
    export const Transition = createEnumToken('StackView', 'Operation', 'Transition');
    export const Immediate = createEnumToken('StackView', 'Operation', 'Immediate');
    export const PushTransition = createEnumToken('StackView', 'Operation', 'PushTransition');
    export const ReplaceTransition = createEnumToken('StackView', 'Operation', 'ReplaceTransition');
    export const PopTransition = createEnumToken('StackView', 'Operation', 'PopTransition');
  }
  export namespace Status {
    export const Inactive = createEnumToken('StackView', 'Status', 'Inactive');
    export const Deactivating = createEnumToken('StackView', 'Status', 'Deactivating');
    export const Activating = createEnumToken('StackView', 'Status', 'Activating');
    export const Active = createEnumToken('StackView', 'Status', 'Active');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('StackView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('StackView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('StackView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('StackView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('StackView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('StackView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('StackView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('StackView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('StackView', 'TransformOrigin', 'BottomRight');
  }
}
