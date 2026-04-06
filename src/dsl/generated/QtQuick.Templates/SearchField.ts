// AUTO-GENERATED — DO NOT EDIT
// Type: SearchField
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
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
import type { PopupBuilder } from './Popup.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { UpBuilder } from './QQuickIndicatorButton.js';
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
export interface SearchFieldBuilder {
  id(id: string): SearchFieldBuilder;
  child(obj: QmlObjectBuilder): SearchFieldBuilder;
  children(...objs: QmlObjectBuilder[]): SearchFieldBuilder;

  activeFocusOnTab(value: boolean): SearchFieldBuilder;
  activeFocusOnTabBind(expr: string): SearchFieldBuilder;
  antialiasing(value: boolean): SearchFieldBuilder;
  antialiasingBind(expr: string): SearchFieldBuilder;
  background(value: ItemBuilder): SearchFieldBuilder;
  backgroundBind(expr: string): SearchFieldBuilder;
  baselineOffset(value: number): SearchFieldBuilder;
  baselineOffsetBind(expr: string): SearchFieldBuilder;
  bottomInset(value: number): SearchFieldBuilder;
  bottomInsetBind(expr: string): SearchFieldBuilder;
  bottomPadding(value: number): SearchFieldBuilder;
  bottomPaddingBind(expr: string): SearchFieldBuilder;
  clip(value: boolean): SearchFieldBuilder;
  clipBind(expr: string): SearchFieldBuilder;
  containmentMask(value: QtObjectBuilder): SearchFieldBuilder;
  containmentMaskBind(expr: string): SearchFieldBuilder;
  contentItem(value: ItemBuilder): SearchFieldBuilder;
  contentItemBind(expr: string): SearchFieldBuilder;
  currentIndex(value: number): SearchFieldBuilder;
  currentIndexBind(expr: string): SearchFieldBuilder;
  delegate(value: QmlComponent): SearchFieldBuilder;
  delegateBind(expr: string): SearchFieldBuilder;
  enabled(value: boolean): SearchFieldBuilder;
  enabledBind(expr: string): SearchFieldBuilder;
  focus(value: boolean): SearchFieldBuilder;
  focusBind(expr: string): SearchFieldBuilder;
  focusPolicy(value: QmlEnumToken): SearchFieldBuilder;
  focusPolicyBind(expr: string): SearchFieldBuilder;
  focusReason(value: QmlEnumToken): SearchFieldBuilder;
  focusReasonBind(expr: string): SearchFieldBuilder;
  font(value: QmlFont): SearchFieldBuilder;
  fontBind(expr: string): SearchFieldBuilder;
  height(value: number): SearchFieldBuilder;
  heightBind(expr: string): SearchFieldBuilder;
  horizontalPadding(value: number): SearchFieldBuilder;
  horizontalPaddingBind(expr: string): SearchFieldBuilder;
  hoverEnabled(value: boolean): SearchFieldBuilder;
  hoverEnabledBind(expr: string): SearchFieldBuilder;
  implicitHeight(value: number): SearchFieldBuilder;
  implicitHeightBind(expr: string): SearchFieldBuilder;
  implicitWidth(value: number): SearchFieldBuilder;
  implicitWidthBind(expr: string): SearchFieldBuilder;
  leftInset(value: number): SearchFieldBuilder;
  leftInsetBind(expr: string): SearchFieldBuilder;
  leftPadding(value: number): SearchFieldBuilder;
  leftPaddingBind(expr: string): SearchFieldBuilder;
  live(value: boolean): SearchFieldBuilder;
  liveBind(expr: string): SearchFieldBuilder;
  locale(value: string): SearchFieldBuilder;
  localeBind(expr: string): SearchFieldBuilder;
  objectName(value: string): SearchFieldBuilder;
  objectNameBind(expr: string): SearchFieldBuilder;
  opacity(value: number): SearchFieldBuilder;
  opacityBind(expr: string): SearchFieldBuilder;
  padding(value: number): SearchFieldBuilder;
  paddingBind(expr: string): SearchFieldBuilder;
  palette(value: PaletteBuilder): SearchFieldBuilder;
  paletteBind(expr: string): SearchFieldBuilder;
  parent(value: ItemBuilder): SearchFieldBuilder;
  parentBind(expr: string): SearchFieldBuilder;
  popup(value: PopupBuilder): SearchFieldBuilder;
  popupBind(expr: string): SearchFieldBuilder;
  rightInset(value: number): SearchFieldBuilder;
  rightInsetBind(expr: string): SearchFieldBuilder;
  rightPadding(value: number): SearchFieldBuilder;
  rightPaddingBind(expr: string): SearchFieldBuilder;
  rotation(value: number): SearchFieldBuilder;
  rotationBind(expr: string): SearchFieldBuilder;
  scale(value: number): SearchFieldBuilder;
  scaleBind(expr: string): SearchFieldBuilder;
  smooth(value: boolean): SearchFieldBuilder;
  smoothBind(expr: string): SearchFieldBuilder;
  spacing(value: number): SearchFieldBuilder;
  spacingBind(expr: string): SearchFieldBuilder;
  state(value: string): SearchFieldBuilder;
  stateBind(expr: string): SearchFieldBuilder;
  suggestionModel(value: QmlValue): SearchFieldBuilder;
  suggestionModelBind(expr: string): SearchFieldBuilder;
  text(value: string): SearchFieldBuilder;
  textBind(expr: string): SearchFieldBuilder;
  textRole(value: string): SearchFieldBuilder;
  textRoleBind(expr: string): SearchFieldBuilder;
  topInset(value: number): SearchFieldBuilder;
  topInsetBind(expr: string): SearchFieldBuilder;
  topPadding(value: number): SearchFieldBuilder;
  topPaddingBind(expr: string): SearchFieldBuilder;
  transformOrigin(value: QmlEnumToken): SearchFieldBuilder;
  transformOriginBind(expr: string): SearchFieldBuilder;
  verticalPadding(value: number): SearchFieldBuilder;
  verticalPaddingBind(expr: string): SearchFieldBuilder;
  visible(value: boolean): SearchFieldBuilder;
  visibleBind(expr: string): SearchFieldBuilder;
  wheelEnabled(value: boolean): SearchFieldBuilder;
  wheelEnabledBind(expr: string): SearchFieldBuilder;
  width(value: number): SearchFieldBuilder;
  widthBind(expr: string): SearchFieldBuilder;
  x(value: number): SearchFieldBuilder;
  xBind(expr: string): SearchFieldBuilder;
  y(value: number): SearchFieldBuilder;
  yBind(expr: string): SearchFieldBuilder;
  z(value: number): SearchFieldBuilder;
  zBind(expr: string): SearchFieldBuilder;
  onAccepted(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onActivated(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onClearButtonPressed(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onClipChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onDelegateModelChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onFontChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onHighlighted(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onHighlightedIndexChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onLiveChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onPopupChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onSearchButtonPressed(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onSearchTriggered(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onSuggestionCountChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onSuggestionModelChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onTextChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onTextEdited(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onTextRoleChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onXChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onYChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onZChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SearchFieldBuilder;
  clearIndicator(setup: (b: UpBuilder) => void): SearchFieldBuilder;
  layer(setup: (b: LayerBuilder) => void): SearchFieldBuilder;
  searchIndicator(setup: (b: UpBuilder) => void): SearchFieldBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SearchFieldBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SearchFieldBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SearchFieldBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SearchFieldBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SearchFieldBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SearchFieldBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SearchFieldBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SearchFieldBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SearchFieldBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SearchFieldBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SearchFieldBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SearchFieldBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SearchFieldBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SearchFieldBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SearchFieldBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SearchFieldBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SearchFieldBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SearchFieldBuilder;
}

const SEARCHFIELD_META: TypeMetadata = {
  typeName: 'SearchField',
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
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'live', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'popup', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'suggestionModel', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'textRole', hasValue: true, hasBinding: true },
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
    { handlerName: 'onActivated', paramCount: 1 },
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
    { handlerName: 'onClearButtonPressed', paramCount: 0 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDelegateModelChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHighlighted', paramCount: 1 },
    { handlerName: 'onHighlightedIndexChanged', paramCount: 0 },
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
    { handlerName: 'onLiveChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPopupChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSearchButtonPressed', paramCount: 0 },
    { handlerName: 'onSearchTriggered', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSuggestionCountChanged', paramCount: 0 },
    { handlerName: 'onSuggestionModelChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTextEdited', paramCount: 0 },
    { handlerName: 'onTextRoleChanged', paramCount: 0 },
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
      methodName: 'clearIndicator',
      groupName: 'clearIndicator',
      properties: [
        { name: 'hovered', hasValue: true, hasBinding: true },
        { name: 'indicator', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
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
    {
      methodName: 'searchIndicator',
      groupName: 'searchIndicator',
      properties: [
        { name: 'hovered', hasValue: true, hasBinding: true },
        { name: 'indicator', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
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

export function SearchField(): SearchFieldBuilder {
  return createFluentBuilder('SearchField', SEARCHFIELD_META) as unknown as SearchFieldBuilder;
}

export namespace SearchField {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SearchField',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SearchField',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SearchField', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SearchField', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SearchField', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SearchField', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SearchField',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SearchField', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SearchField', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SearchField', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SearchField', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SearchField', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SearchField', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SearchField', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SearchField', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SearchField', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SearchField', 'TransformOrigin', 'BottomRight');
  }
}
