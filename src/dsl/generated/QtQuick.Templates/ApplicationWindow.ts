// AUTO-GENERATED — DO NOT EDIT
// Type: ApplicationWindow
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
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
export interface ApplicationWindowBuilder {
  id(id: string): ApplicationWindowBuilder;
  child(obj: QmlObjectBuilder): ApplicationWindowBuilder;
  children(...objs: QmlObjectBuilder[]): ApplicationWindowBuilder;

  background(value: ItemBuilder): ApplicationWindowBuilder;
  backgroundBind(expr: string): ApplicationWindowBuilder;
  bottomPadding(value: number): ApplicationWindowBuilder;
  bottomPaddingBind(expr: string): ApplicationWindowBuilder;
  color(value: QmlColor): ApplicationWindowBuilder;
  colorBind(expr: string): ApplicationWindowBuilder;
  contentOrientation(value: QmlEnumToken): ApplicationWindowBuilder;
  contentOrientationBind(expr: string): ApplicationWindowBuilder;
  flags(value: QmlEnumToken): ApplicationWindowBuilder;
  flagsBind(expr: string): ApplicationWindowBuilder;
  font(value: QmlFont): ApplicationWindowBuilder;
  fontBind(expr: string): ApplicationWindowBuilder;
  footer(value: ItemBuilder): ApplicationWindowBuilder;
  footerBind(expr: string): ApplicationWindowBuilder;
  header(value: ItemBuilder): ApplicationWindowBuilder;
  headerBind(expr: string): ApplicationWindowBuilder;
  height(value: number): ApplicationWindowBuilder;
  heightBind(expr: string): ApplicationWindowBuilder;
  leftPadding(value: number): ApplicationWindowBuilder;
  leftPaddingBind(expr: string): ApplicationWindowBuilder;
  locale(value: string): ApplicationWindowBuilder;
  localeBind(expr: string): ApplicationWindowBuilder;
  maximumHeight(value: number): ApplicationWindowBuilder;
  maximumHeightBind(expr: string): ApplicationWindowBuilder;
  maximumWidth(value: number): ApplicationWindowBuilder;
  maximumWidthBind(expr: string): ApplicationWindowBuilder;
  menuBar(value: ItemBuilder): ApplicationWindowBuilder;
  menuBarBind(expr: string): ApplicationWindowBuilder;
  minimumHeight(value: number): ApplicationWindowBuilder;
  minimumHeightBind(expr: string): ApplicationWindowBuilder;
  minimumWidth(value: number): ApplicationWindowBuilder;
  minimumWidthBind(expr: string): ApplicationWindowBuilder;
  modality(value: QmlEnumToken): ApplicationWindowBuilder;
  modalityBind(expr: string): ApplicationWindowBuilder;
  objectName(value: string): ApplicationWindowBuilder;
  objectNameBind(expr: string): ApplicationWindowBuilder;
  opacity(value: number): ApplicationWindowBuilder;
  opacityBind(expr: string): ApplicationWindowBuilder;
  palette(value: PaletteBuilder): ApplicationWindowBuilder;
  paletteBind(expr: string): ApplicationWindowBuilder;
  rightPadding(value: number): ApplicationWindowBuilder;
  rightPaddingBind(expr: string): ApplicationWindowBuilder;
  screen(value: QmlValue): ApplicationWindowBuilder;
  screenBind(expr: string): ApplicationWindowBuilder;
  title(value: string): ApplicationWindowBuilder;
  titleBind(expr: string): ApplicationWindowBuilder;
  topPadding(value: number): ApplicationWindowBuilder;
  topPaddingBind(expr: string): ApplicationWindowBuilder;
  transientParent(value: QmlValue): ApplicationWindowBuilder;
  transientParentBind(expr: string): ApplicationWindowBuilder;
  visibility(value: QmlEnumToken): ApplicationWindowBuilder;
  visibilityBind(expr: string): ApplicationWindowBuilder;
  visible(value: boolean): ApplicationWindowBuilder;
  visibleBind(expr: string): ApplicationWindowBuilder;
  width(value: number): ApplicationWindowBuilder;
  widthBind(expr: string): ApplicationWindowBuilder;
  x(value: number): ApplicationWindowBuilder;
  xBind(expr: string): ApplicationWindowBuilder;
  y(value: number): ApplicationWindowBuilder;
  yBind(expr: string): ApplicationWindowBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onActiveFocusControlChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onActiveFocusItemChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onAfterAnimating(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onAfterFrameEnd(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onAfterRenderPassRecording(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onAfterRendering(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onAfterSynchronizing(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onBeforeFrameBegin(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onBeforeRenderPassRecording(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onBeforeRendering(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onBeforeSynchronizing(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onClosing(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onColorChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onContentOrientationChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onDevicePixelRatioChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onFlagsChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onFocusObjectChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onFontChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onFooterChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onFrameSwapped(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onHeaderChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onMaximumHeightChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onMaximumWidthChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onMenuBarChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onMinimumHeightChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onMinimumWidthChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onModalityChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onSafeAreaMarginsChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onSceneGraphAboutToStop(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onSceneGraphError(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onSceneGraphInitialized(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onSceneGraphInvalidated(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onScreenChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onTransientParentChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onVisibilityChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onWindowStateChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onWindowTitleChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onXChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  onYChanged(handler: DslSignalHandlerValue): ApplicationWindowBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ApplicationWindowBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ApplicationWindowBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ApplicationWindowBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ApplicationWindowBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ApplicationWindowBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ApplicationWindowBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ApplicationWindowBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ApplicationWindowBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): ApplicationWindowBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ApplicationWindowBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ApplicationWindowBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ApplicationWindowBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ApplicationWindowBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ApplicationWindowBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ApplicationWindowBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ApplicationWindowBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ApplicationWindowBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ApplicationWindowBuilder;
}

const APPLICATIONWINDOW_META: TypeMetadata = {
  typeName: 'ApplicationWindow',
  properties: [
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'contentOrientation', hasValue: true, hasBinding: true },
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'footer', hasValue: true, hasBinding: true },
    { name: 'header', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'maximumHeight', hasValue: true, hasBinding: true },
    { name: 'maximumWidth', hasValue: true, hasBinding: true },
    { name: 'menuBar', hasValue: true, hasBinding: true },
    { name: 'minimumHeight', hasValue: true, hasBinding: true },
    { name: 'minimumWidth', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'screen', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transientParent', hasValue: true, hasBinding: true },
    { name: 'visibility', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
    { handlerName: 'onActiveFocusControlChanged', paramCount: 0 },
    { handlerName: 'onActiveFocusItemChanged', paramCount: 0 },
    { handlerName: 'onAfterAnimating', paramCount: 0 },
    { handlerName: 'onAfterFrameEnd', paramCount: 0 },
    { handlerName: 'onAfterRenderPassRecording', paramCount: 0 },
    { handlerName: 'onAfterRendering', paramCount: 0 },
    { handlerName: 'onAfterSynchronizing', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBeforeFrameBegin', paramCount: 0 },
    { handlerName: 'onBeforeRenderPassRecording', paramCount: 0 },
    { handlerName: 'onBeforeRendering', paramCount: 0 },
    { handlerName: 'onBeforeSynchronizing', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onClosing', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onContentOrientationChanged', paramCount: 1 },
    { handlerName: 'onDevicePixelRatioChanged', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 1 },
    { handlerName: 'onFocusObjectChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onFooterChanged', paramCount: 0 },
    { handlerName: 'onFrameSwapped', paramCount: 0 },
    { handlerName: 'onHeaderChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMaximumHeightChanged', paramCount: 1 },
    { handlerName: 'onMaximumWidthChanged', paramCount: 1 },
    { handlerName: 'onMenuBarChanged', paramCount: 0 },
    { handlerName: 'onMinimumHeightChanged', paramCount: 1 },
    { handlerName: 'onMinimumWidthChanged', paramCount: 1 },
    { handlerName: 'onModalityChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 1 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onSafeAreaMarginsChanged', paramCount: 1 },
    { handlerName: 'onSceneGraphAboutToStop', paramCount: 0 },
    { handlerName: 'onSceneGraphError', paramCount: 2 },
    { handlerName: 'onSceneGraphInitialized', paramCount: 0 },
    { handlerName: 'onSceneGraphInvalidated', paramCount: 0 },
    { handlerName: 'onScreenChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransientParentChanged', paramCount: 1 },
    { handlerName: 'onVisibilityChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
    { handlerName: 'onWindowStateChanged', paramCount: 1 },
    { handlerName: 'onWindowTitleChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 1 },
    { handlerName: 'onYChanged', paramCount: 1 },
  ],
  grouped: [],
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

export function ApplicationWindow(): ApplicationWindowBuilder {
  return createFluentBuilder(
    'ApplicationWindow',
    APPLICATIONWINDOW_META,
  ) as unknown as ApplicationWindowBuilder;
}

export namespace ApplicationWindow {
  export namespace AncestorMode {
    export const ExcludeTransients = createEnumToken(
      'ApplicationWindow',
      'AncestorMode',
      'ExcludeTransients',
    );
    export const IncludeTransients = createEnumToken(
      'ApplicationWindow',
      'AncestorMode',
      'IncludeTransients',
    );
  }
  export namespace CreateTextureOptions {
    export const TextureHasAlphaChannel = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureHasAlphaChannel',
    );
    export const TextureHasMipmaps = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureHasMipmaps',
    );
    export const TextureOwnsGLTexture = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureOwnsGLTexture',
    );
    export const TextureCanUseAtlas = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureCanUseAtlas',
    );
    export const TextureIsOpaque = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureIsOpaque',
    );
  }
  export namespace SceneGraphError {
    export const ContextNotAvailable = createEnumToken(
      'ApplicationWindow',
      'SceneGraphError',
      'ContextNotAvailable',
    );
  }
  export namespace TextRenderType {
    export const QtTextRendering = createEnumToken(
      'ApplicationWindow',
      'TextRenderType',
      'QtTextRendering',
    );
    export const NativeTextRendering = createEnumToken(
      'ApplicationWindow',
      'TextRenderType',
      'NativeTextRendering',
    );
    export const CurveTextRendering = createEnumToken(
      'ApplicationWindow',
      'TextRenderType',
      'CurveTextRendering',
    );
  }
  export namespace Visibility {
    export const Hidden = createEnumToken('ApplicationWindow', 'Visibility', 'Hidden');
    export const AutomaticVisibility = createEnumToken(
      'ApplicationWindow',
      'Visibility',
      'AutomaticVisibility',
    );
    export const Windowed = createEnumToken('ApplicationWindow', 'Visibility', 'Windowed');
    export const Minimized = createEnumToken('ApplicationWindow', 'Visibility', 'Minimized');
    export const Maximized = createEnumToken('ApplicationWindow', 'Visibility', 'Maximized');
    export const FullScreen = createEnumToken('ApplicationWindow', 'Visibility', 'FullScreen');
  }
}
