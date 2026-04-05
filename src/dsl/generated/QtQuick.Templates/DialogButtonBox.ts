// AUTO-GENERATED — DO NOT EDIT
// Type: DialogButtonBox
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { AbstractButtonBuilder } from './AbstractButton.js';
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
export interface DialogButtonBoxBuilder {
  id(id: string): DialogButtonBoxBuilder;
  child(obj: QmlObjectBuilder): DialogButtonBoxBuilder;

  activeFocusOnTab(value: boolean): DialogButtonBoxBuilder;
  activeFocusOnTabBind(expr: string): DialogButtonBoxBuilder;
  alignment(value: QmlEnumToken): DialogButtonBoxBuilder;
  alignmentBind(expr: string): DialogButtonBoxBuilder;
  antialiasing(value: boolean): DialogButtonBoxBuilder;
  antialiasingBind(expr: string): DialogButtonBoxBuilder;
  background(value: ItemBuilder): DialogButtonBoxBuilder;
  backgroundBind(expr: string): DialogButtonBoxBuilder;
  baselineOffset(value: number): DialogButtonBoxBuilder;
  baselineOffsetBind(expr: string): DialogButtonBoxBuilder;
  bottomInset(value: number): DialogButtonBoxBuilder;
  bottomInsetBind(expr: string): DialogButtonBoxBuilder;
  bottomPadding(value: number): DialogButtonBoxBuilder;
  bottomPaddingBind(expr: string): DialogButtonBoxBuilder;
  buttonLayout(value: QmlEnumToken): DialogButtonBoxBuilder;
  buttonLayoutBind(expr: string): DialogButtonBoxBuilder;
  clip(value: boolean): DialogButtonBoxBuilder;
  clipBind(expr: string): DialogButtonBoxBuilder;
  containmentMask(value: QtObjectBuilder): DialogButtonBoxBuilder;
  containmentMaskBind(expr: string): DialogButtonBoxBuilder;
  contentHeight(value: number): DialogButtonBoxBuilder;
  contentHeightBind(expr: string): DialogButtonBoxBuilder;
  contentItem(value: ItemBuilder): DialogButtonBoxBuilder;
  contentItemBind(expr: string): DialogButtonBoxBuilder;
  contentWidth(value: number): DialogButtonBoxBuilder;
  contentWidthBind(expr: string): DialogButtonBoxBuilder;
  currentIndex(value: number): DialogButtonBoxBuilder;
  currentIndexBind(expr: string): DialogButtonBoxBuilder;
  defaultButton(value: AbstractButtonBuilder): DialogButtonBoxBuilder;
  defaultButtonBind(expr: string): DialogButtonBoxBuilder;
  defaultStandardButton(value: QmlEnumToken): DialogButtonBoxBuilder;
  defaultStandardButtonBind(expr: string): DialogButtonBoxBuilder;
  delegate(value: QmlComponent): DialogButtonBoxBuilder;
  delegateBind(expr: string): DialogButtonBoxBuilder;
  enabled(value: boolean): DialogButtonBoxBuilder;
  enabledBind(expr: string): DialogButtonBoxBuilder;
  focus(value: boolean): DialogButtonBoxBuilder;
  focusBind(expr: string): DialogButtonBoxBuilder;
  focusPolicy(value: QmlEnumToken): DialogButtonBoxBuilder;
  focusPolicyBind(expr: string): DialogButtonBoxBuilder;
  focusReason(value: QmlEnumToken): DialogButtonBoxBuilder;
  focusReasonBind(expr: string): DialogButtonBoxBuilder;
  font(value: QmlFont): DialogButtonBoxBuilder;
  fontBind(expr: string): DialogButtonBoxBuilder;
  height(value: number): DialogButtonBoxBuilder;
  heightBind(expr: string): DialogButtonBoxBuilder;
  horizontalPadding(value: number): DialogButtonBoxBuilder;
  horizontalPaddingBind(expr: string): DialogButtonBoxBuilder;
  hoverEnabled(value: boolean): DialogButtonBoxBuilder;
  hoverEnabledBind(expr: string): DialogButtonBoxBuilder;
  implicitHeight(value: number): DialogButtonBoxBuilder;
  implicitHeightBind(expr: string): DialogButtonBoxBuilder;
  implicitWidth(value: number): DialogButtonBoxBuilder;
  implicitWidthBind(expr: string): DialogButtonBoxBuilder;
  leftInset(value: number): DialogButtonBoxBuilder;
  leftInsetBind(expr: string): DialogButtonBoxBuilder;
  leftPadding(value: number): DialogButtonBoxBuilder;
  leftPaddingBind(expr: string): DialogButtonBoxBuilder;
  locale(value: string): DialogButtonBoxBuilder;
  localeBind(expr: string): DialogButtonBoxBuilder;
  objectName(value: string): DialogButtonBoxBuilder;
  objectNameBind(expr: string): DialogButtonBoxBuilder;
  opacity(value: number): DialogButtonBoxBuilder;
  opacityBind(expr: string): DialogButtonBoxBuilder;
  padding(value: number): DialogButtonBoxBuilder;
  paddingBind(expr: string): DialogButtonBoxBuilder;
  palette(value: PaletteBuilder): DialogButtonBoxBuilder;
  paletteBind(expr: string): DialogButtonBoxBuilder;
  parent(value: ItemBuilder): DialogButtonBoxBuilder;
  parentBind(expr: string): DialogButtonBoxBuilder;
  position(value: QmlEnumToken): DialogButtonBoxBuilder;
  positionBind(expr: string): DialogButtonBoxBuilder;
  rightInset(value: number): DialogButtonBoxBuilder;
  rightInsetBind(expr: string): DialogButtonBoxBuilder;
  rightPadding(value: number): DialogButtonBoxBuilder;
  rightPaddingBind(expr: string): DialogButtonBoxBuilder;
  rotation(value: number): DialogButtonBoxBuilder;
  rotationBind(expr: string): DialogButtonBoxBuilder;
  scale(value: number): DialogButtonBoxBuilder;
  scaleBind(expr: string): DialogButtonBoxBuilder;
  smooth(value: boolean): DialogButtonBoxBuilder;
  smoothBind(expr: string): DialogButtonBoxBuilder;
  spacing(value: number): DialogButtonBoxBuilder;
  spacingBind(expr: string): DialogButtonBoxBuilder;
  standardButtons(value: QmlEnumToken): DialogButtonBoxBuilder;
  standardButtonsBind(expr: string): DialogButtonBoxBuilder;
  state(value: string): DialogButtonBoxBuilder;
  stateBind(expr: string): DialogButtonBoxBuilder;
  topInset(value: number): DialogButtonBoxBuilder;
  topInsetBind(expr: string): DialogButtonBoxBuilder;
  topPadding(value: number): DialogButtonBoxBuilder;
  topPaddingBind(expr: string): DialogButtonBoxBuilder;
  transformOrigin(value: QmlEnumToken): DialogButtonBoxBuilder;
  transformOriginBind(expr: string): DialogButtonBoxBuilder;
  verticalPadding(value: number): DialogButtonBoxBuilder;
  verticalPaddingBind(expr: string): DialogButtonBoxBuilder;
  visible(value: boolean): DialogButtonBoxBuilder;
  visibleBind(expr: string): DialogButtonBoxBuilder;
  wheelEnabled(value: boolean): DialogButtonBoxBuilder;
  wheelEnabledBind(expr: string): DialogButtonBoxBuilder;
  width(value: number): DialogButtonBoxBuilder;
  widthBind(expr: string): DialogButtonBoxBuilder;
  x(value: number): DialogButtonBoxBuilder;
  xBind(expr: string): DialogButtonBoxBuilder;
  y(value: number): DialogButtonBoxBuilder;
  yBind(expr: string): DialogButtonBoxBuilder;
  z(value: number): DialogButtonBoxBuilder;
  zBind(expr: string): DialogButtonBoxBuilder;
  onAccepted(body: string): DialogButtonBoxBuilder;
  onActiveFocusChanged(body: string): DialogButtonBoxBuilder;
  onActiveFocusOnTabChanged(body: string): DialogButtonBoxBuilder;
  onAlignmentChanged(body: string): DialogButtonBoxBuilder;
  onAntialiasingChanged(body: string): DialogButtonBoxBuilder;
  onApplied(body: string): DialogButtonBoxBuilder;
  onAvailableHeightChanged(body: string): DialogButtonBoxBuilder;
  onAvailableWidthChanged(body: string): DialogButtonBoxBuilder;
  onBackgroundChanged(body: string): DialogButtonBoxBuilder;
  onBaselineOffsetChanged(body: string): DialogButtonBoxBuilder;
  onBottomInsetChanged(body: string): DialogButtonBoxBuilder;
  onBottomPaddingChanged(body: string): DialogButtonBoxBuilder;
  onButtonLayoutChanged(body: string): DialogButtonBoxBuilder;
  onChildrenChanged(body: string): DialogButtonBoxBuilder;
  onChildrenRectChanged(body: string): DialogButtonBoxBuilder;
  onClicked(body: string): DialogButtonBoxBuilder;
  onClipChanged(body: string): DialogButtonBoxBuilder;
  onContainmentMaskChanged(body: string): DialogButtonBoxBuilder;
  onContentChildrenChanged(body: string): DialogButtonBoxBuilder;
  onContentHeightChanged(body: string): DialogButtonBoxBuilder;
  onContentItemChanged(body: string): DialogButtonBoxBuilder;
  onContentWidthChanged(body: string): DialogButtonBoxBuilder;
  onCountChanged(body: string): DialogButtonBoxBuilder;
  onCurrentIndexChanged(body: string): DialogButtonBoxBuilder;
  onCurrentItemChanged(body: string): DialogButtonBoxBuilder;
  onDefaultButtonChanged(body: string): DialogButtonBoxBuilder;
  onDefaultStandardButtonChanged(body: string): DialogButtonBoxBuilder;
  onDelegateChanged(body: string): DialogButtonBoxBuilder;
  onDiscarded(body: string): DialogButtonBoxBuilder;
  onEnabledChanged(body: string): DialogButtonBoxBuilder;
  onFocusChanged(body: string): DialogButtonBoxBuilder;
  onFocusPolicyChanged(body: string): DialogButtonBoxBuilder;
  onFocusReasonChanged(body: string): DialogButtonBoxBuilder;
  onFontChanged(body: string): DialogButtonBoxBuilder;
  onHeightChanged(body: string): DialogButtonBoxBuilder;
  onHelpRequested(body: string): DialogButtonBoxBuilder;
  onHorizontalPaddingChanged(body: string): DialogButtonBoxBuilder;
  onHoverEnabledChanged(body: string): DialogButtonBoxBuilder;
  onHoveredChanged(body: string): DialogButtonBoxBuilder;
  onImplicitBackgroundHeightChanged(body: string): DialogButtonBoxBuilder;
  onImplicitBackgroundWidthChanged(body: string): DialogButtonBoxBuilder;
  onImplicitContentHeightChanged(body: string): DialogButtonBoxBuilder;
  onImplicitContentWidthChanged(body: string): DialogButtonBoxBuilder;
  onImplicitHeightChanged(body: string): DialogButtonBoxBuilder;
  onImplicitWidthChanged(body: string): DialogButtonBoxBuilder;
  onLeftInsetChanged(body: string): DialogButtonBoxBuilder;
  onLeftPaddingChanged(body: string): DialogButtonBoxBuilder;
  onLocaleChanged(body: string): DialogButtonBoxBuilder;
  onMirroredChanged(body: string): DialogButtonBoxBuilder;
  onObjectNameChanged(body: string): DialogButtonBoxBuilder;
  onOpacityChanged(body: string): DialogButtonBoxBuilder;
  onPaddingChanged(body: string): DialogButtonBoxBuilder;
  onPaletteChanged(body: string): DialogButtonBoxBuilder;
  onPaletteCreated(body: string): DialogButtonBoxBuilder;
  onParentChanged(body: string): DialogButtonBoxBuilder;
  onPositionChanged(body: string): DialogButtonBoxBuilder;
  onRejected(body: string): DialogButtonBoxBuilder;
  onReset(body: string): DialogButtonBoxBuilder;
  onRightInsetChanged(body: string): DialogButtonBoxBuilder;
  onRightPaddingChanged(body: string): DialogButtonBoxBuilder;
  onRotationChanged(body: string): DialogButtonBoxBuilder;
  onScaleChanged(body: string): DialogButtonBoxBuilder;
  onSmoothChanged(body: string): DialogButtonBoxBuilder;
  onSpacingChanged(body: string): DialogButtonBoxBuilder;
  onStandardButtonsChanged(body: string): DialogButtonBoxBuilder;
  onStateChanged(body: string): DialogButtonBoxBuilder;
  onTopInsetChanged(body: string): DialogButtonBoxBuilder;
  onTopPaddingChanged(body: string): DialogButtonBoxBuilder;
  onTransformOriginChanged(body: string): DialogButtonBoxBuilder;
  onVerticalPaddingChanged(body: string): DialogButtonBoxBuilder;
  onVisibleChanged(body: string): DialogButtonBoxBuilder;
  onVisibleChildrenChanged(body: string): DialogButtonBoxBuilder;
  onVisualFocusChanged(body: string): DialogButtonBoxBuilder;
  onWheelEnabledChanged(body: string): DialogButtonBoxBuilder;
  onWidthChanged(body: string): DialogButtonBoxBuilder;
  onWindowChanged(body: string): DialogButtonBoxBuilder;
  onXChanged(body: string): DialogButtonBoxBuilder;
  onYChanged(body: string): DialogButtonBoxBuilder;
  onZChanged(body: string): DialogButtonBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DialogButtonBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): DialogButtonBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DialogButtonBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DialogButtonBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DialogButtonBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DialogButtonBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DialogButtonBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DialogButtonBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DialogButtonBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DialogButtonBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DialogButtonBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DialogButtonBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DialogButtonBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DialogButtonBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DialogButtonBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DialogButtonBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DialogButtonBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DialogButtonBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DialogButtonBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DialogButtonBoxBuilder;
}

const DIALOGBUTTONBOX_META: TypeMetadata = {
  typeName: 'DialogButtonBox',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'buttonLayout', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'defaultButton', hasValue: true, hasBinding: true },
    { name: 'defaultStandardButton', hasValue: true, hasBinding: true },
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
    { name: 'standardButtons', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAlignmentChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onApplied', paramCount: 0 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onButtonLayoutChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onDefaultButtonChanged', paramCount: 0 },
    { handlerName: 'onDefaultStandardButtonChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDiscarded', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHelpRequested', paramCount: 0 },
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
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onReset', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStandardButtonsChanged', paramCount: 0 },
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
  defaultProperty: 'contentData',
};

export function DialogButtonBox(): DialogButtonBoxBuilder {
  return createFluentBuilder('DialogButtonBox', DIALOGBUTTONBOX_META) as unknown as DialogButtonBoxBuilder;
}

export namespace DialogButtonBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('DialogButtonBox', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('DialogButtonBox', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('DialogButtonBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DialogButtonBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DialogButtonBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DialogButtonBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('DialogButtonBox', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('DialogButtonBox', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace Position {
    export const Header = createEnumToken('DialogButtonBox', 'Position', 'Header');
    export const Footer = createEnumToken('DialogButtonBox', 'Position', 'Footer');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DialogButtonBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DialogButtonBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DialogButtonBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DialogButtonBox', 'TransformOrigin', 'BottomRight');
  }
}
