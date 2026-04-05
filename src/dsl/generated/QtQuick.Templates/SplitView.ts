// AUTO-GENERATED — DO NOT EDIT
// Type: SplitView
// Generated from Qt 6.11.0

import type {
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
export interface SplitViewBuilder {
  id(id: string): SplitViewBuilder;
  child(obj: QmlObjectBuilder): SplitViewBuilder;

  activeFocusOnTab(value: boolean): SplitViewBuilder;
  activeFocusOnTabBind(expr: string): SplitViewBuilder;
  antialiasing(value: boolean): SplitViewBuilder;
  antialiasingBind(expr: string): SplitViewBuilder;
  background(value: ItemBuilder): SplitViewBuilder;
  backgroundBind(expr: string): SplitViewBuilder;
  baselineOffset(value: number): SplitViewBuilder;
  baselineOffsetBind(expr: string): SplitViewBuilder;
  bottomInset(value: number): SplitViewBuilder;
  bottomInsetBind(expr: string): SplitViewBuilder;
  bottomPadding(value: number): SplitViewBuilder;
  bottomPaddingBind(expr: string): SplitViewBuilder;
  clip(value: boolean): SplitViewBuilder;
  clipBind(expr: string): SplitViewBuilder;
  containmentMask(value: QtObjectBuilder): SplitViewBuilder;
  containmentMaskBind(expr: string): SplitViewBuilder;
  contentHeight(value: number): SplitViewBuilder;
  contentHeightBind(expr: string): SplitViewBuilder;
  contentItem(value: ItemBuilder): SplitViewBuilder;
  contentItemBind(expr: string): SplitViewBuilder;
  contentWidth(value: number): SplitViewBuilder;
  contentWidthBind(expr: string): SplitViewBuilder;
  currentIndex(value: number): SplitViewBuilder;
  currentIndexBind(expr: string): SplitViewBuilder;
  enabled(value: boolean): SplitViewBuilder;
  enabledBind(expr: string): SplitViewBuilder;
  focus(value: boolean): SplitViewBuilder;
  focusBind(expr: string): SplitViewBuilder;
  focusPolicy(value: QmlEnumToken): SplitViewBuilder;
  focusPolicyBind(expr: string): SplitViewBuilder;
  focusReason(value: QmlEnumToken): SplitViewBuilder;
  focusReasonBind(expr: string): SplitViewBuilder;
  font(value: QmlFont): SplitViewBuilder;
  fontBind(expr: string): SplitViewBuilder;
  handle(value: QmlComponent): SplitViewBuilder;
  handleBind(expr: string): SplitViewBuilder;
  height(value: number): SplitViewBuilder;
  heightBind(expr: string): SplitViewBuilder;
  horizontalPadding(value: number): SplitViewBuilder;
  horizontalPaddingBind(expr: string): SplitViewBuilder;
  hoverEnabled(value: boolean): SplitViewBuilder;
  hoverEnabledBind(expr: string): SplitViewBuilder;
  implicitHeight(value: number): SplitViewBuilder;
  implicitHeightBind(expr: string): SplitViewBuilder;
  implicitWidth(value: number): SplitViewBuilder;
  implicitWidthBind(expr: string): SplitViewBuilder;
  leftInset(value: number): SplitViewBuilder;
  leftInsetBind(expr: string): SplitViewBuilder;
  leftPadding(value: number): SplitViewBuilder;
  leftPaddingBind(expr: string): SplitViewBuilder;
  locale(value: string): SplitViewBuilder;
  localeBind(expr: string): SplitViewBuilder;
  objectName(value: string): SplitViewBuilder;
  objectNameBind(expr: string): SplitViewBuilder;
  opacity(value: number): SplitViewBuilder;
  opacityBind(expr: string): SplitViewBuilder;
  orientation(value: QmlEnumToken): SplitViewBuilder;
  orientationBind(expr: string): SplitViewBuilder;
  padding(value: number): SplitViewBuilder;
  paddingBind(expr: string): SplitViewBuilder;
  palette(value: PaletteBuilder): SplitViewBuilder;
  paletteBind(expr: string): SplitViewBuilder;
  parent(value: ItemBuilder): SplitViewBuilder;
  parentBind(expr: string): SplitViewBuilder;
  rightInset(value: number): SplitViewBuilder;
  rightInsetBind(expr: string): SplitViewBuilder;
  rightPadding(value: number): SplitViewBuilder;
  rightPaddingBind(expr: string): SplitViewBuilder;
  rotation(value: number): SplitViewBuilder;
  rotationBind(expr: string): SplitViewBuilder;
  scale(value: number): SplitViewBuilder;
  scaleBind(expr: string): SplitViewBuilder;
  smooth(value: boolean): SplitViewBuilder;
  smoothBind(expr: string): SplitViewBuilder;
  spacing(value: number): SplitViewBuilder;
  spacingBind(expr: string): SplitViewBuilder;
  state(value: string): SplitViewBuilder;
  stateBind(expr: string): SplitViewBuilder;
  topInset(value: number): SplitViewBuilder;
  topInsetBind(expr: string): SplitViewBuilder;
  topPadding(value: number): SplitViewBuilder;
  topPaddingBind(expr: string): SplitViewBuilder;
  transformOrigin(value: QmlEnumToken): SplitViewBuilder;
  transformOriginBind(expr: string): SplitViewBuilder;
  verticalPadding(value: number): SplitViewBuilder;
  verticalPaddingBind(expr: string): SplitViewBuilder;
  visible(value: boolean): SplitViewBuilder;
  visibleBind(expr: string): SplitViewBuilder;
  wheelEnabled(value: boolean): SplitViewBuilder;
  wheelEnabledBind(expr: string): SplitViewBuilder;
  width(value: number): SplitViewBuilder;
  widthBind(expr: string): SplitViewBuilder;
  x(value: number): SplitViewBuilder;
  xBind(expr: string): SplitViewBuilder;
  y(value: number): SplitViewBuilder;
  yBind(expr: string): SplitViewBuilder;
  z(value: number): SplitViewBuilder;
  zBind(expr: string): SplitViewBuilder;
  onActiveFocusChanged(body: string): SplitViewBuilder;
  onActiveFocusOnTabChanged(body: string): SplitViewBuilder;
  onAntialiasingChanged(body: string): SplitViewBuilder;
  onAvailableHeightChanged(body: string): SplitViewBuilder;
  onAvailableWidthChanged(body: string): SplitViewBuilder;
  onBackgroundChanged(body: string): SplitViewBuilder;
  onBaselineOffsetChanged(body: string): SplitViewBuilder;
  onBottomInsetChanged(body: string): SplitViewBuilder;
  onBottomPaddingChanged(body: string): SplitViewBuilder;
  onChildrenChanged(body: string): SplitViewBuilder;
  onChildrenRectChanged(body: string): SplitViewBuilder;
  onClipChanged(body: string): SplitViewBuilder;
  onContainmentMaskChanged(body: string): SplitViewBuilder;
  onContentChildrenChanged(body: string): SplitViewBuilder;
  onContentHeightChanged(body: string): SplitViewBuilder;
  onContentItemChanged(body: string): SplitViewBuilder;
  onContentWidthChanged(body: string): SplitViewBuilder;
  onCountChanged(body: string): SplitViewBuilder;
  onCurrentIndexChanged(body: string): SplitViewBuilder;
  onCurrentItemChanged(body: string): SplitViewBuilder;
  onEnabledChanged(body: string): SplitViewBuilder;
  onFocusChanged(body: string): SplitViewBuilder;
  onFocusPolicyChanged(body: string): SplitViewBuilder;
  onFocusReasonChanged(body: string): SplitViewBuilder;
  onFontChanged(body: string): SplitViewBuilder;
  onHandleChanged(body: string): SplitViewBuilder;
  onHeightChanged(body: string): SplitViewBuilder;
  onHorizontalPaddingChanged(body: string): SplitViewBuilder;
  onHoverEnabledChanged(body: string): SplitViewBuilder;
  onHoveredChanged(body: string): SplitViewBuilder;
  onImplicitBackgroundHeightChanged(body: string): SplitViewBuilder;
  onImplicitBackgroundWidthChanged(body: string): SplitViewBuilder;
  onImplicitContentHeightChanged(body: string): SplitViewBuilder;
  onImplicitContentWidthChanged(body: string): SplitViewBuilder;
  onImplicitHeightChanged(body: string): SplitViewBuilder;
  onImplicitWidthChanged(body: string): SplitViewBuilder;
  onLeftInsetChanged(body: string): SplitViewBuilder;
  onLeftPaddingChanged(body: string): SplitViewBuilder;
  onLocaleChanged(body: string): SplitViewBuilder;
  onMirroredChanged(body: string): SplitViewBuilder;
  onObjectNameChanged(body: string): SplitViewBuilder;
  onOpacityChanged(body: string): SplitViewBuilder;
  onOrientationChanged(body: string): SplitViewBuilder;
  onPaddingChanged(body: string): SplitViewBuilder;
  onPaletteChanged(body: string): SplitViewBuilder;
  onPaletteCreated(body: string): SplitViewBuilder;
  onParentChanged(body: string): SplitViewBuilder;
  onResizingChanged(body: string): SplitViewBuilder;
  onRightInsetChanged(body: string): SplitViewBuilder;
  onRightPaddingChanged(body: string): SplitViewBuilder;
  onRotationChanged(body: string): SplitViewBuilder;
  onScaleChanged(body: string): SplitViewBuilder;
  onSmoothChanged(body: string): SplitViewBuilder;
  onSpacingChanged(body: string): SplitViewBuilder;
  onStateChanged(body: string): SplitViewBuilder;
  onTopInsetChanged(body: string): SplitViewBuilder;
  onTopPaddingChanged(body: string): SplitViewBuilder;
  onTransformOriginChanged(body: string): SplitViewBuilder;
  onVerticalPaddingChanged(body: string): SplitViewBuilder;
  onVisibleChanged(body: string): SplitViewBuilder;
  onVisibleChildrenChanged(body: string): SplitViewBuilder;
  onVisualFocusChanged(body: string): SplitViewBuilder;
  onWheelEnabledChanged(body: string): SplitViewBuilder;
  onWidthChanged(body: string): SplitViewBuilder;
  onWindowChanged(body: string): SplitViewBuilder;
  onXChanged(body: string): SplitViewBuilder;
  onYChanged(body: string): SplitViewBuilder;
  onZChanged(body: string): SplitViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SplitViewBuilder;
  layer(setup: (b: LayerBuilder) => void): SplitViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SplitViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SplitViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SplitViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SplitViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SplitViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SplitViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SplitViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SplitViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SplitViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SplitViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SplitViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SplitViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SplitViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SplitViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SplitViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SplitViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SplitViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SplitViewBuilder;
}

const SPLITVIEW_META: TypeMetadata = {
  typeName: 'SplitView',
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
    { name: 'handle', hasValue: true, hasBinding: true },
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
    { name: 'orientation', hasValue: true, hasBinding: true },
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
    { handlerName: 'onHandleChanged', paramCount: 0 },
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
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onResizingChanged', paramCount: 0 },
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

export function SplitView(): SplitViewBuilder {
  return createFluentBuilder('SplitView', SPLITVIEW_META) as unknown as SplitViewBuilder;
}

export namespace SplitView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SplitView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SplitView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SplitView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SplitView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SplitView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SplitView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SplitView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SplitView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SplitView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SplitView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SplitView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SplitView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SplitView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SplitView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SplitView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SplitView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SplitView', 'TransformOrigin', 'BottomRight');
  }
}
