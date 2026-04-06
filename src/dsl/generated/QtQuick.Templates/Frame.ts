// AUTO-GENERATED — DO NOT EDIT
// Type: Frame
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
export interface FrameBuilder {
  id(id: string): FrameBuilder;
  child(obj: QmlObjectBuilder): FrameBuilder;
  children(...objs: QmlObjectBuilder[]): FrameBuilder;

  activeFocusOnTab(value: boolean): FrameBuilder;
  activeFocusOnTabBind(expr: string): FrameBuilder;
  antialiasing(value: boolean): FrameBuilder;
  antialiasingBind(expr: string): FrameBuilder;
  background(value: ItemBuilder): FrameBuilder;
  backgroundBind(expr: string): FrameBuilder;
  baselineOffset(value: number): FrameBuilder;
  baselineOffsetBind(expr: string): FrameBuilder;
  bottomInset(value: number): FrameBuilder;
  bottomInsetBind(expr: string): FrameBuilder;
  bottomPadding(value: number): FrameBuilder;
  bottomPaddingBind(expr: string): FrameBuilder;
  clip(value: boolean): FrameBuilder;
  clipBind(expr: string): FrameBuilder;
  containmentMask(value: QtObjectBuilder): FrameBuilder;
  containmentMaskBind(expr: string): FrameBuilder;
  contentHeight(value: number): FrameBuilder;
  contentHeightBind(expr: string): FrameBuilder;
  contentItem(value: ItemBuilder): FrameBuilder;
  contentItemBind(expr: string): FrameBuilder;
  contentWidth(value: number): FrameBuilder;
  contentWidthBind(expr: string): FrameBuilder;
  enabled(value: boolean): FrameBuilder;
  enabledBind(expr: string): FrameBuilder;
  focus(value: boolean): FrameBuilder;
  focusBind(expr: string): FrameBuilder;
  focusPolicy(value: QmlEnumToken): FrameBuilder;
  focusPolicyBind(expr: string): FrameBuilder;
  focusReason(value: QmlEnumToken): FrameBuilder;
  focusReasonBind(expr: string): FrameBuilder;
  font(value: QmlFont): FrameBuilder;
  fontBind(expr: string): FrameBuilder;
  height(value: number): FrameBuilder;
  heightBind(expr: string): FrameBuilder;
  horizontalPadding(value: number): FrameBuilder;
  horizontalPaddingBind(expr: string): FrameBuilder;
  hoverEnabled(value: boolean): FrameBuilder;
  hoverEnabledBind(expr: string): FrameBuilder;
  implicitHeight(value: number): FrameBuilder;
  implicitHeightBind(expr: string): FrameBuilder;
  implicitWidth(value: number): FrameBuilder;
  implicitWidthBind(expr: string): FrameBuilder;
  leftInset(value: number): FrameBuilder;
  leftInsetBind(expr: string): FrameBuilder;
  leftPadding(value: number): FrameBuilder;
  leftPaddingBind(expr: string): FrameBuilder;
  locale(value: string): FrameBuilder;
  localeBind(expr: string): FrameBuilder;
  objectName(value: string): FrameBuilder;
  objectNameBind(expr: string): FrameBuilder;
  opacity(value: number): FrameBuilder;
  opacityBind(expr: string): FrameBuilder;
  padding(value: number): FrameBuilder;
  paddingBind(expr: string): FrameBuilder;
  palette(value: PaletteBuilder): FrameBuilder;
  paletteBind(expr: string): FrameBuilder;
  parent(value: ItemBuilder): FrameBuilder;
  parentBind(expr: string): FrameBuilder;
  rightInset(value: number): FrameBuilder;
  rightInsetBind(expr: string): FrameBuilder;
  rightPadding(value: number): FrameBuilder;
  rightPaddingBind(expr: string): FrameBuilder;
  rotation(value: number): FrameBuilder;
  rotationBind(expr: string): FrameBuilder;
  scale(value: number): FrameBuilder;
  scaleBind(expr: string): FrameBuilder;
  smooth(value: boolean): FrameBuilder;
  smoothBind(expr: string): FrameBuilder;
  spacing(value: number): FrameBuilder;
  spacingBind(expr: string): FrameBuilder;
  state(value: string): FrameBuilder;
  stateBind(expr: string): FrameBuilder;
  topInset(value: number): FrameBuilder;
  topInsetBind(expr: string): FrameBuilder;
  topPadding(value: number): FrameBuilder;
  topPaddingBind(expr: string): FrameBuilder;
  transformOrigin(value: QmlEnumToken): FrameBuilder;
  transformOriginBind(expr: string): FrameBuilder;
  verticalPadding(value: number): FrameBuilder;
  verticalPaddingBind(expr: string): FrameBuilder;
  visible(value: boolean): FrameBuilder;
  visibleBind(expr: string): FrameBuilder;
  wheelEnabled(value: boolean): FrameBuilder;
  wheelEnabledBind(expr: string): FrameBuilder;
  width(value: number): FrameBuilder;
  widthBind(expr: string): FrameBuilder;
  x(value: number): FrameBuilder;
  xBind(expr: string): FrameBuilder;
  y(value: number): FrameBuilder;
  yBind(expr: string): FrameBuilder;
  z(value: number): FrameBuilder;
  zBind(expr: string): FrameBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onClipChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onContentChildrenChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onFontChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): FrameBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onStateChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onXChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onYChanged(handler: DslSignalHandlerValue): FrameBuilder;
  onZChanged(handler: DslSignalHandlerValue): FrameBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FrameBuilder;
  layer(setup: (b: LayerBuilder) => void): FrameBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): FrameBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): FrameBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): FrameBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): FrameBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): FrameBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): FrameBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): FrameBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): FrameBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): FrameBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): FrameBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): FrameBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): FrameBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): FrameBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): FrameBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): FrameBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): FrameBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): FrameBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): FrameBuilder;
}

const FRAME_META: TypeMetadata = {
  typeName: 'Frame',
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

export function Frame(): FrameBuilder {
  return createFluentBuilder('Frame', FRAME_META) as unknown as FrameBuilder;
}

export namespace Frame {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Frame',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Frame',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Frame', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Frame', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Frame', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Frame', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Frame', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Frame', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Frame', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Frame', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Frame', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Frame', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Frame', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Frame', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Frame', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Frame', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Frame', 'TransformOrigin', 'BottomRight');
  }
}
