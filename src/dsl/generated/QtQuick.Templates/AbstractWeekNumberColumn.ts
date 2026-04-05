// AUTO-GENERATED — DO NOT EDIT
// Type: AbstractWeekNumberColumn
// Generated from Qt 6.11.0

import type {
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
export interface AbstractWeekNumberColumnBuilder {
  id(id: string): AbstractWeekNumberColumnBuilder;
  child(obj: QmlObjectBuilder): AbstractWeekNumberColumnBuilder;

  activeFocusOnTab(value: boolean): AbstractWeekNumberColumnBuilder;
  activeFocusOnTabBind(expr: string): AbstractWeekNumberColumnBuilder;
  antialiasing(value: boolean): AbstractWeekNumberColumnBuilder;
  antialiasingBind(expr: string): AbstractWeekNumberColumnBuilder;
  background(value: ItemBuilder): AbstractWeekNumberColumnBuilder;
  backgroundBind(expr: string): AbstractWeekNumberColumnBuilder;
  baselineOffset(value: number): AbstractWeekNumberColumnBuilder;
  baselineOffsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  bottomInset(value: number): AbstractWeekNumberColumnBuilder;
  bottomInsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  bottomPadding(value: number): AbstractWeekNumberColumnBuilder;
  bottomPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  clip(value: boolean): AbstractWeekNumberColumnBuilder;
  clipBind(expr: string): AbstractWeekNumberColumnBuilder;
  containmentMask(value: QtObjectBuilder): AbstractWeekNumberColumnBuilder;
  containmentMaskBind(expr: string): AbstractWeekNumberColumnBuilder;
  contentItem(value: ItemBuilder): AbstractWeekNumberColumnBuilder;
  contentItemBind(expr: string): AbstractWeekNumberColumnBuilder;
  delegate(value: QmlComponent): AbstractWeekNumberColumnBuilder;
  delegateBind(expr: string): AbstractWeekNumberColumnBuilder;
  enabled(value: boolean): AbstractWeekNumberColumnBuilder;
  enabledBind(expr: string): AbstractWeekNumberColumnBuilder;
  focus(value: boolean): AbstractWeekNumberColumnBuilder;
  focusBind(expr: string): AbstractWeekNumberColumnBuilder;
  focusPolicy(value: QmlEnumToken): AbstractWeekNumberColumnBuilder;
  focusPolicyBind(expr: string): AbstractWeekNumberColumnBuilder;
  focusReason(value: QmlEnumToken): AbstractWeekNumberColumnBuilder;
  focusReasonBind(expr: string): AbstractWeekNumberColumnBuilder;
  font(value: QmlFont): AbstractWeekNumberColumnBuilder;
  fontBind(expr: string): AbstractWeekNumberColumnBuilder;
  height(value: number): AbstractWeekNumberColumnBuilder;
  heightBind(expr: string): AbstractWeekNumberColumnBuilder;
  horizontalPadding(value: number): AbstractWeekNumberColumnBuilder;
  horizontalPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  hoverEnabled(value: boolean): AbstractWeekNumberColumnBuilder;
  hoverEnabledBind(expr: string): AbstractWeekNumberColumnBuilder;
  implicitHeight(value: number): AbstractWeekNumberColumnBuilder;
  implicitHeightBind(expr: string): AbstractWeekNumberColumnBuilder;
  implicitWidth(value: number): AbstractWeekNumberColumnBuilder;
  implicitWidthBind(expr: string): AbstractWeekNumberColumnBuilder;
  leftInset(value: number): AbstractWeekNumberColumnBuilder;
  leftInsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  leftPadding(value: number): AbstractWeekNumberColumnBuilder;
  leftPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  locale(value: QmlValue): AbstractWeekNumberColumnBuilder;
  localeBind(expr: string): AbstractWeekNumberColumnBuilder;
  month(value: number): AbstractWeekNumberColumnBuilder;
  monthBind(expr: string): AbstractWeekNumberColumnBuilder;
  objectName(value: string): AbstractWeekNumberColumnBuilder;
  objectNameBind(expr: string): AbstractWeekNumberColumnBuilder;
  opacity(value: number): AbstractWeekNumberColumnBuilder;
  opacityBind(expr: string): AbstractWeekNumberColumnBuilder;
  padding(value: number): AbstractWeekNumberColumnBuilder;
  paddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  palette(value: PaletteBuilder): AbstractWeekNumberColumnBuilder;
  paletteBind(expr: string): AbstractWeekNumberColumnBuilder;
  parent(value: ItemBuilder): AbstractWeekNumberColumnBuilder;
  parentBind(expr: string): AbstractWeekNumberColumnBuilder;
  rightInset(value: number): AbstractWeekNumberColumnBuilder;
  rightInsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  rightPadding(value: number): AbstractWeekNumberColumnBuilder;
  rightPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  rotation(value: number): AbstractWeekNumberColumnBuilder;
  rotationBind(expr: string): AbstractWeekNumberColumnBuilder;
  scale(value: number): AbstractWeekNumberColumnBuilder;
  scaleBind(expr: string): AbstractWeekNumberColumnBuilder;
  smooth(value: boolean): AbstractWeekNumberColumnBuilder;
  smoothBind(expr: string): AbstractWeekNumberColumnBuilder;
  source(value: QmlValue): AbstractWeekNumberColumnBuilder;
  sourceBind(expr: string): AbstractWeekNumberColumnBuilder;
  spacing(value: number): AbstractWeekNumberColumnBuilder;
  spacingBind(expr: string): AbstractWeekNumberColumnBuilder;
  state(value: string): AbstractWeekNumberColumnBuilder;
  stateBind(expr: string): AbstractWeekNumberColumnBuilder;
  topInset(value: number): AbstractWeekNumberColumnBuilder;
  topInsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  topPadding(value: number): AbstractWeekNumberColumnBuilder;
  topPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  transformOrigin(value: QmlEnumToken): AbstractWeekNumberColumnBuilder;
  transformOriginBind(expr: string): AbstractWeekNumberColumnBuilder;
  verticalPadding(value: number): AbstractWeekNumberColumnBuilder;
  verticalPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  visible(value: boolean): AbstractWeekNumberColumnBuilder;
  visibleBind(expr: string): AbstractWeekNumberColumnBuilder;
  wheelEnabled(value: boolean): AbstractWeekNumberColumnBuilder;
  wheelEnabledBind(expr: string): AbstractWeekNumberColumnBuilder;
  width(value: number): AbstractWeekNumberColumnBuilder;
  widthBind(expr: string): AbstractWeekNumberColumnBuilder;
  x(value: number): AbstractWeekNumberColumnBuilder;
  xBind(expr: string): AbstractWeekNumberColumnBuilder;
  y(value: number): AbstractWeekNumberColumnBuilder;
  yBind(expr: string): AbstractWeekNumberColumnBuilder;
  year(value: number): AbstractWeekNumberColumnBuilder;
  yearBind(expr: string): AbstractWeekNumberColumnBuilder;
  z(value: number): AbstractWeekNumberColumnBuilder;
  zBind(expr: string): AbstractWeekNumberColumnBuilder;
  onActiveFocusChanged(body: string): AbstractWeekNumberColumnBuilder;
  onActiveFocusOnTabChanged(body: string): AbstractWeekNumberColumnBuilder;
  onAntialiasingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onAvailableHeightChanged(body: string): AbstractWeekNumberColumnBuilder;
  onAvailableWidthChanged(body: string): AbstractWeekNumberColumnBuilder;
  onBackgroundChanged(body: string): AbstractWeekNumberColumnBuilder;
  onBaselineOffsetChanged(body: string): AbstractWeekNumberColumnBuilder;
  onBottomInsetChanged(body: string): AbstractWeekNumberColumnBuilder;
  onBottomPaddingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onChildrenChanged(body: string): AbstractWeekNumberColumnBuilder;
  onChildrenRectChanged(body: string): AbstractWeekNumberColumnBuilder;
  onClipChanged(body: string): AbstractWeekNumberColumnBuilder;
  onContainmentMaskChanged(body: string): AbstractWeekNumberColumnBuilder;
  onContentItemChanged(body: string): AbstractWeekNumberColumnBuilder;
  onDelegateChanged(body: string): AbstractWeekNumberColumnBuilder;
  onEnabledChanged(body: string): AbstractWeekNumberColumnBuilder;
  onFocusChanged(body: string): AbstractWeekNumberColumnBuilder;
  onFocusPolicyChanged(body: string): AbstractWeekNumberColumnBuilder;
  onFocusReasonChanged(body: string): AbstractWeekNumberColumnBuilder;
  onFontChanged(body: string): AbstractWeekNumberColumnBuilder;
  onHeightChanged(body: string): AbstractWeekNumberColumnBuilder;
  onHorizontalPaddingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onHoverEnabledChanged(body: string): AbstractWeekNumberColumnBuilder;
  onHoveredChanged(body: string): AbstractWeekNumberColumnBuilder;
  onImplicitBackgroundHeightChanged(body: string): AbstractWeekNumberColumnBuilder;
  onImplicitBackgroundWidthChanged(body: string): AbstractWeekNumberColumnBuilder;
  onImplicitContentHeightChanged(body: string): AbstractWeekNumberColumnBuilder;
  onImplicitContentWidthChanged(body: string): AbstractWeekNumberColumnBuilder;
  onImplicitHeightChanged(body: string): AbstractWeekNumberColumnBuilder;
  onImplicitWidthChanged(body: string): AbstractWeekNumberColumnBuilder;
  onLeftInsetChanged(body: string): AbstractWeekNumberColumnBuilder;
  onLeftPaddingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onLocaleChanged(body: string): AbstractWeekNumberColumnBuilder;
  onMirroredChanged(body: string): AbstractWeekNumberColumnBuilder;
  onMonthChanged(body: string): AbstractWeekNumberColumnBuilder;
  onObjectNameChanged(body: string): AbstractWeekNumberColumnBuilder;
  onOpacityChanged(body: string): AbstractWeekNumberColumnBuilder;
  onPaddingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onPaletteChanged(body: string): AbstractWeekNumberColumnBuilder;
  onPaletteCreated(body: string): AbstractWeekNumberColumnBuilder;
  onParentChanged(body: string): AbstractWeekNumberColumnBuilder;
  onRightInsetChanged(body: string): AbstractWeekNumberColumnBuilder;
  onRightPaddingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onRotationChanged(body: string): AbstractWeekNumberColumnBuilder;
  onScaleChanged(body: string): AbstractWeekNumberColumnBuilder;
  onSmoothChanged(body: string): AbstractWeekNumberColumnBuilder;
  onSourceChanged(body: string): AbstractWeekNumberColumnBuilder;
  onSpacingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onStateChanged(body: string): AbstractWeekNumberColumnBuilder;
  onTopInsetChanged(body: string): AbstractWeekNumberColumnBuilder;
  onTopPaddingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onTransformOriginChanged(body: string): AbstractWeekNumberColumnBuilder;
  onVerticalPaddingChanged(body: string): AbstractWeekNumberColumnBuilder;
  onVisibleChanged(body: string): AbstractWeekNumberColumnBuilder;
  onVisibleChildrenChanged(body: string): AbstractWeekNumberColumnBuilder;
  onVisualFocusChanged(body: string): AbstractWeekNumberColumnBuilder;
  onWheelEnabledChanged(body: string): AbstractWeekNumberColumnBuilder;
  onWidthChanged(body: string): AbstractWeekNumberColumnBuilder;
  onWindowChanged(body: string): AbstractWeekNumberColumnBuilder;
  onXChanged(body: string): AbstractWeekNumberColumnBuilder;
  onYChanged(body: string): AbstractWeekNumberColumnBuilder;
  onYearChanged(body: string): AbstractWeekNumberColumnBuilder;
  onZChanged(body: string): AbstractWeekNumberColumnBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AbstractWeekNumberColumnBuilder;
  layer(setup: (b: LayerBuilder) => void): AbstractWeekNumberColumnBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  applicationWindow(
    setup: (b: ApplicationWindowAttachedBuilder) => void,
  ): AbstractWeekNumberColumnBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  dialogButtonBox(
    setup: (b: DialogButtonBoxAttachedBuilder) => void,
  ): AbstractWeekNumberColumnBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  scrollIndicator(
    setup: (b: ScrollIndicatorAttachedBuilder) => void,
  ): AbstractWeekNumberColumnBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): AbstractWeekNumberColumnBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
}

const ABSTRACTWEEKNUMBERCOLUMN_META: TypeMetadata = {
  typeName: 'AbstractWeekNumberColumn',
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
    { name: 'month', hasValue: true, hasBinding: true },
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
    { name: 'source', hasValue: true, hasBinding: true },
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
    { name: 'year', hasValue: true, hasBinding: true },
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
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onMonthChanged', paramCount: 0 },
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
    { handlerName: 'onSourceChanged', paramCount: 0 },
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
    { handlerName: 'onYearChanged', paramCount: 0 },
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

export function AbstractWeekNumberColumn(): AbstractWeekNumberColumnBuilder {
  return createFluentBuilder(
    'AbstractWeekNumberColumn',
    ABSTRACTWEEKNUMBERCOLUMN_META,
  ) as unknown as AbstractWeekNumberColumnBuilder;
}

export namespace AbstractWeekNumberColumn {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemIsViewport',
    );
    export const ItemObservesViewport = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken(
      'AbstractWeekNumberColumn',
      'TransformOrigin',
      'TopLeft',
    );
    export const Top = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken(
      'AbstractWeekNumberColumn',
      'TransformOrigin',
      'TopRight',
    );
    export const Left = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'AbstractWeekNumberColumn',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'AbstractWeekNumberColumn',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
