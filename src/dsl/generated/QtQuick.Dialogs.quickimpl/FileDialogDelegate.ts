// AUTO-GENERATED — DO NOT EDIT
// Type: FileDialogDelegate
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { ActionBuilder } from '../QtQuick.Templates/Action.js';
import type { DialogBuilder } from '../QtQuick.Templates/Dialog.js';
import type { ColorDialogImplAttachedBuilder } from './QQuickColorDialogImplAttached.js';
import type { FileDialogImplAttachedBuilder } from './QQuickFileDialogImplAttached.js';
import type { FolderDialogImplAttachedBuilder } from './QQuickFolderDialogImplAttached.js';
import type { FontDialogImplAttachedBuilder } from './QQuickFontDialogImplAttached.js';
import type { MessageDialogImplAttachedBuilder } from './QQuickMessageDialogImplAttached.js';
export interface FileDialogDelegateBuilder {
  id(id: string): FileDialogDelegateBuilder;
  child(obj: QmlObjectBuilder): FileDialogDelegateBuilder;

  action(value: ActionBuilder): FileDialogDelegateBuilder;
  actionBind(expr: string): FileDialogDelegateBuilder;
  activeFocusOnTab(value: boolean): FileDialogDelegateBuilder;
  activeFocusOnTabBind(expr: string): FileDialogDelegateBuilder;
  antialiasing(value: boolean): FileDialogDelegateBuilder;
  antialiasingBind(expr: string): FileDialogDelegateBuilder;
  autoExclusive(value: boolean): FileDialogDelegateBuilder;
  autoExclusiveBind(expr: string): FileDialogDelegateBuilder;
  autoRepeat(value: boolean): FileDialogDelegateBuilder;
  autoRepeatBind(expr: string): FileDialogDelegateBuilder;
  autoRepeatDelay(value: number): FileDialogDelegateBuilder;
  autoRepeatDelayBind(expr: string): FileDialogDelegateBuilder;
  autoRepeatInterval(value: number): FileDialogDelegateBuilder;
  autoRepeatIntervalBind(expr: string): FileDialogDelegateBuilder;
  background(value: ItemBuilder): FileDialogDelegateBuilder;
  backgroundBind(expr: string): FileDialogDelegateBuilder;
  baselineOffset(value: number): FileDialogDelegateBuilder;
  baselineOffsetBind(expr: string): FileDialogDelegateBuilder;
  bottomInset(value: number): FileDialogDelegateBuilder;
  bottomInsetBind(expr: string): FileDialogDelegateBuilder;
  bottomPadding(value: number): FileDialogDelegateBuilder;
  bottomPaddingBind(expr: string): FileDialogDelegateBuilder;
  checkable(value: boolean): FileDialogDelegateBuilder;
  checkableBind(expr: string): FileDialogDelegateBuilder;
  checked(value: boolean): FileDialogDelegateBuilder;
  checkedBind(expr: string): FileDialogDelegateBuilder;
  clip(value: boolean): FileDialogDelegateBuilder;
  clipBind(expr: string): FileDialogDelegateBuilder;
  containmentMask(value: QtObjectBuilder): FileDialogDelegateBuilder;
  containmentMaskBind(expr: string): FileDialogDelegateBuilder;
  contentItem(value: ItemBuilder): FileDialogDelegateBuilder;
  contentItemBind(expr: string): FileDialogDelegateBuilder;
  dialog(value: DialogBuilder): FileDialogDelegateBuilder;
  dialogBind(expr: string): FileDialogDelegateBuilder;
  display(value: QmlEnumToken): FileDialogDelegateBuilder;
  displayBind(expr: string): FileDialogDelegateBuilder;
  down(value: boolean): FileDialogDelegateBuilder;
  downBind(expr: string): FileDialogDelegateBuilder;
  enabled(value: boolean): FileDialogDelegateBuilder;
  enabledBind(expr: string): FileDialogDelegateBuilder;
  file(value: QmlUrl): FileDialogDelegateBuilder;
  fileBind(expr: string): FileDialogDelegateBuilder;
  focus(value: boolean): FileDialogDelegateBuilder;
  focusBind(expr: string): FileDialogDelegateBuilder;
  focusPolicy(value: QmlEnumToken): FileDialogDelegateBuilder;
  focusPolicyBind(expr: string): FileDialogDelegateBuilder;
  focusReason(value: QmlEnumToken): FileDialogDelegateBuilder;
  focusReasonBind(expr: string): FileDialogDelegateBuilder;
  font(value: QmlFont): FileDialogDelegateBuilder;
  fontBind(expr: string): FileDialogDelegateBuilder;
  height(value: number): FileDialogDelegateBuilder;
  heightBind(expr: string): FileDialogDelegateBuilder;
  highlighted(value: boolean): FileDialogDelegateBuilder;
  highlightedBind(expr: string): FileDialogDelegateBuilder;
  horizontalPadding(value: number): FileDialogDelegateBuilder;
  horizontalPaddingBind(expr: string): FileDialogDelegateBuilder;
  hoverEnabled(value: boolean): FileDialogDelegateBuilder;
  hoverEnabledBind(expr: string): FileDialogDelegateBuilder;
  icon(value: QmlValue): FileDialogDelegateBuilder;
  iconBind(expr: string): FileDialogDelegateBuilder;
  implicitHeight(value: number): FileDialogDelegateBuilder;
  implicitHeightBind(expr: string): FileDialogDelegateBuilder;
  implicitWidth(value: number): FileDialogDelegateBuilder;
  implicitWidthBind(expr: string): FileDialogDelegateBuilder;
  indicator(value: ItemBuilder): FileDialogDelegateBuilder;
  indicatorBind(expr: string): FileDialogDelegateBuilder;
  leftInset(value: number): FileDialogDelegateBuilder;
  leftInsetBind(expr: string): FileDialogDelegateBuilder;
  leftPadding(value: number): FileDialogDelegateBuilder;
  leftPaddingBind(expr: string): FileDialogDelegateBuilder;
  locale(value: string): FileDialogDelegateBuilder;
  localeBind(expr: string): FileDialogDelegateBuilder;
  objectName(value: string): FileDialogDelegateBuilder;
  objectNameBind(expr: string): FileDialogDelegateBuilder;
  opacity(value: number): FileDialogDelegateBuilder;
  opacityBind(expr: string): FileDialogDelegateBuilder;
  padding(value: number): FileDialogDelegateBuilder;
  paddingBind(expr: string): FileDialogDelegateBuilder;
  palette(value: PaletteBuilder): FileDialogDelegateBuilder;
  paletteBind(expr: string): FileDialogDelegateBuilder;
  parent(value: ItemBuilder): FileDialogDelegateBuilder;
  parentBind(expr: string): FileDialogDelegateBuilder;
  rightInset(value: number): FileDialogDelegateBuilder;
  rightInsetBind(expr: string): FileDialogDelegateBuilder;
  rightPadding(value: number): FileDialogDelegateBuilder;
  rightPaddingBind(expr: string): FileDialogDelegateBuilder;
  rotation(value: number): FileDialogDelegateBuilder;
  rotationBind(expr: string): FileDialogDelegateBuilder;
  scale(value: number): FileDialogDelegateBuilder;
  scaleBind(expr: string): FileDialogDelegateBuilder;
  smooth(value: boolean): FileDialogDelegateBuilder;
  smoothBind(expr: string): FileDialogDelegateBuilder;
  spacing(value: number): FileDialogDelegateBuilder;
  spacingBind(expr: string): FileDialogDelegateBuilder;
  state(value: string): FileDialogDelegateBuilder;
  stateBind(expr: string): FileDialogDelegateBuilder;
  text(value: string): FileDialogDelegateBuilder;
  textBind(expr: string): FileDialogDelegateBuilder;
  topInset(value: number): FileDialogDelegateBuilder;
  topInsetBind(expr: string): FileDialogDelegateBuilder;
  topPadding(value: number): FileDialogDelegateBuilder;
  topPaddingBind(expr: string): FileDialogDelegateBuilder;
  transformOrigin(value: QmlEnumToken): FileDialogDelegateBuilder;
  transformOriginBind(expr: string): FileDialogDelegateBuilder;
  verticalPadding(value: number): FileDialogDelegateBuilder;
  verticalPaddingBind(expr: string): FileDialogDelegateBuilder;
  visible(value: boolean): FileDialogDelegateBuilder;
  visibleBind(expr: string): FileDialogDelegateBuilder;
  wheelEnabled(value: boolean): FileDialogDelegateBuilder;
  wheelEnabledBind(expr: string): FileDialogDelegateBuilder;
  width(value: number): FileDialogDelegateBuilder;
  widthBind(expr: string): FileDialogDelegateBuilder;
  x(value: number): FileDialogDelegateBuilder;
  xBind(expr: string): FileDialogDelegateBuilder;
  y(value: number): FileDialogDelegateBuilder;
  yBind(expr: string): FileDialogDelegateBuilder;
  z(value: number): FileDialogDelegateBuilder;
  zBind(expr: string): FileDialogDelegateBuilder;
  onActionChanged(body: string): FileDialogDelegateBuilder;
  onActiveFocusChanged(body: string): FileDialogDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): FileDialogDelegateBuilder;
  onAntialiasingChanged(body: string): FileDialogDelegateBuilder;
  onAutoExclusiveChanged(body: string): FileDialogDelegateBuilder;
  onAutoRepeatChanged(body: string): FileDialogDelegateBuilder;
  onAutoRepeatDelayChanged(body: string): FileDialogDelegateBuilder;
  onAutoRepeatIntervalChanged(body: string): FileDialogDelegateBuilder;
  onAvailableHeightChanged(body: string): FileDialogDelegateBuilder;
  onAvailableWidthChanged(body: string): FileDialogDelegateBuilder;
  onBackgroundChanged(body: string): FileDialogDelegateBuilder;
  onBaselineOffsetChanged(body: string): FileDialogDelegateBuilder;
  onBottomInsetChanged(body: string): FileDialogDelegateBuilder;
  onBottomPaddingChanged(body: string): FileDialogDelegateBuilder;
  onCanceled(body: string): FileDialogDelegateBuilder;
  onCheckableChanged(body: string): FileDialogDelegateBuilder;
  onCheckedChanged(body: string): FileDialogDelegateBuilder;
  onChildrenChanged(body: string): FileDialogDelegateBuilder;
  onChildrenRectChanged(body: string): FileDialogDelegateBuilder;
  onClicked(body: string): FileDialogDelegateBuilder;
  onClipChanged(body: string): FileDialogDelegateBuilder;
  onContainmentMaskChanged(body: string): FileDialogDelegateBuilder;
  onContentItemChanged(body: string): FileDialogDelegateBuilder;
  onDialogChanged(body: string): FileDialogDelegateBuilder;
  onDisplayChanged(body: string): FileDialogDelegateBuilder;
  onDoubleClicked(body: string): FileDialogDelegateBuilder;
  onDownChanged(body: string): FileDialogDelegateBuilder;
  onEnabledChanged(body: string): FileDialogDelegateBuilder;
  onFileChanged(body: string): FileDialogDelegateBuilder;
  onFocusChanged(body: string): FileDialogDelegateBuilder;
  onFocusPolicyChanged(body: string): FileDialogDelegateBuilder;
  onFocusReasonChanged(body: string): FileDialogDelegateBuilder;
  onFontChanged(body: string): FileDialogDelegateBuilder;
  onHeightChanged(body: string): FileDialogDelegateBuilder;
  onHighlightedChanged(body: string): FileDialogDelegateBuilder;
  onHorizontalPaddingChanged(body: string): FileDialogDelegateBuilder;
  onHoverEnabledChanged(body: string): FileDialogDelegateBuilder;
  onHoveredChanged(body: string): FileDialogDelegateBuilder;
  onIconChanged(body: string): FileDialogDelegateBuilder;
  onImplicitBackgroundHeightChanged(body: string): FileDialogDelegateBuilder;
  onImplicitBackgroundWidthChanged(body: string): FileDialogDelegateBuilder;
  onImplicitContentHeightChanged(body: string): FileDialogDelegateBuilder;
  onImplicitContentWidthChanged(body: string): FileDialogDelegateBuilder;
  onImplicitHeightChanged(body: string): FileDialogDelegateBuilder;
  onImplicitIndicatorHeightChanged(body: string): FileDialogDelegateBuilder;
  onImplicitIndicatorWidthChanged(body: string): FileDialogDelegateBuilder;
  onImplicitWidthChanged(body: string): FileDialogDelegateBuilder;
  onIndicatorChanged(body: string): FileDialogDelegateBuilder;
  onLeftInsetChanged(body: string): FileDialogDelegateBuilder;
  onLeftPaddingChanged(body: string): FileDialogDelegateBuilder;
  onLocaleChanged(body: string): FileDialogDelegateBuilder;
  onMirroredChanged(body: string): FileDialogDelegateBuilder;
  onObjectNameChanged(body: string): FileDialogDelegateBuilder;
  onOpacityChanged(body: string): FileDialogDelegateBuilder;
  onPaddingChanged(body: string): FileDialogDelegateBuilder;
  onPaletteChanged(body: string): FileDialogDelegateBuilder;
  onPaletteCreated(body: string): FileDialogDelegateBuilder;
  onParentChanged(body: string): FileDialogDelegateBuilder;
  onPressAndHold(body: string): FileDialogDelegateBuilder;
  onPressXChanged(body: string): FileDialogDelegateBuilder;
  onPressYChanged(body: string): FileDialogDelegateBuilder;
  onPressed(body: string): FileDialogDelegateBuilder;
  onPressedChanged(body: string): FileDialogDelegateBuilder;
  onReleased(body: string): FileDialogDelegateBuilder;
  onRightInsetChanged(body: string): FileDialogDelegateBuilder;
  onRightPaddingChanged(body: string): FileDialogDelegateBuilder;
  onRotationChanged(body: string): FileDialogDelegateBuilder;
  onScaleChanged(body: string): FileDialogDelegateBuilder;
  onSmoothChanged(body: string): FileDialogDelegateBuilder;
  onSpacingChanged(body: string): FileDialogDelegateBuilder;
  onStateChanged(body: string): FileDialogDelegateBuilder;
  onTextChanged(body: string): FileDialogDelegateBuilder;
  onToggled(body: string): FileDialogDelegateBuilder;
  onTopInsetChanged(body: string): FileDialogDelegateBuilder;
  onTopPaddingChanged(body: string): FileDialogDelegateBuilder;
  onTransformOriginChanged(body: string): FileDialogDelegateBuilder;
  onVerticalPaddingChanged(body: string): FileDialogDelegateBuilder;
  onVisibleChanged(body: string): FileDialogDelegateBuilder;
  onVisibleChildrenChanged(body: string): FileDialogDelegateBuilder;
  onVisualFocusChanged(body: string): FileDialogDelegateBuilder;
  onWheelEnabledChanged(body: string): FileDialogDelegateBuilder;
  onWidthChanged(body: string): FileDialogDelegateBuilder;
  onWindowChanged(body: string): FileDialogDelegateBuilder;
  onXChanged(body: string): FileDialogDelegateBuilder;
  onYChanged(body: string): FileDialogDelegateBuilder;
  onZChanged(body: string): FileDialogDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FileDialogDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): FileDialogDelegateBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): FileDialogDelegateBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): FileDialogDelegateBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): FileDialogDelegateBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): FileDialogDelegateBuilder;
  messageDialogImpl(
    setup: (b: MessageDialogImplAttachedBuilder) => void,
  ): FileDialogDelegateBuilder;
}

const FILEDIALOGDELEGATE_META: TypeMetadata = {
  typeName: 'FileDialogDelegate',
  properties: [
    { name: 'action', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoExclusive', hasValue: true, hasBinding: true },
    { name: 'autoRepeat', hasValue: true, hasBinding: true },
    { name: 'autoRepeatDelay', hasValue: true, hasBinding: true },
    { name: 'autoRepeatInterval', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'checkable', hasValue: true, hasBinding: true },
    { name: 'checked', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'dialog', hasValue: true, hasBinding: true },
    { name: 'display', hasValue: true, hasBinding: true },
    { name: 'down', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'file', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'highlighted', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'indicator', hasValue: true, hasBinding: true },
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
    { name: 'text', hasValue: true, hasBinding: true },
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
    { handlerName: 'onActionChanged', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAutoExclusiveChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatDelayChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatIntervalChanged', paramCount: 0 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onCanceled', paramCount: 0 },
    { handlerName: 'onCheckableChanged', paramCount: 0 },
    { handlerName: 'onCheckedChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 0 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onDialogChanged', paramCount: 0 },
    { handlerName: 'onDisplayChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 0 },
    { handlerName: 'onDownChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFileChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHighlightedChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitIndicatorHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitIndicatorWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onIndicatorChanged', paramCount: 0 },
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
    { handlerName: 'onPressAndHold', paramCount: 0 },
    { handlerName: 'onPressXChanged', paramCount: 0 },
    { handlerName: 'onPressYChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 0 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onReleased', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onToggled', paramCount: 0 },
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
      methodName: 'colorDialogImpl',
      attachedTypeName: 'ColorDialogImpl',
      properties: [
        { name: 'alphaSlider', hasValue: true, hasBinding: true },
        { name: 'buttonBox', hasValue: true, hasBinding: true },
        { name: 'colorInputs', hasValue: true, hasBinding: true },
        { name: 'colorPicker', hasValue: true, hasBinding: true },
        { name: 'eyeDropperButton', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAlphaSliderChanged', paramCount: 0 },
        { handlerName: 'onButtonBoxChanged', paramCount: 0 },
        { handlerName: 'onColorInputsChanged', paramCount: 0 },
        { handlerName: 'onColorPickerChanged', paramCount: 0 },
        { handlerName: 'onEyeDropperButtonChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'fileDialogImpl',
      attachedTypeName: 'FileDialogImpl',
      properties: [
        { name: 'breadcrumbBar', hasValue: true, hasBinding: true },
        { name: 'buttonBox', hasValue: true, hasBinding: true },
        { name: 'fileDialogListView', hasValue: true, hasBinding: true },
        { name: 'fileNameLabel', hasValue: true, hasBinding: true },
        { name: 'fileNameTextField', hasValue: true, hasBinding: true },
        { name: 'filterLabel', hasValue: true, hasBinding: true },
        { name: 'nameFiltersComboBox', hasValue: true, hasBinding: true },
        { name: 'overwriteConfirmationDialog', hasValue: true, hasBinding: true },
        { name: 'sideBar', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onBreadcrumbBarChanged', paramCount: 0 },
        { handlerName: 'onButtonBoxChanged', paramCount: 0 },
        { handlerName: 'onFileDialogListViewChanged', paramCount: 0 },
        { handlerName: 'onFileNameLabelChanged', paramCount: 0 },
        { handlerName: 'onFileNameTextFieldChanged', paramCount: 0 },
        { handlerName: 'onFilterLabelChanged', paramCount: 0 },
        { handlerName: 'onNameFiltersComboBoxChanged', paramCount: 0 },
        { handlerName: 'onOverwriteConfirmationDialogChanged', paramCount: 0 },
        { handlerName: 'onSideBarChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'folderDialogImpl',
      attachedTypeName: 'FolderDialogImpl',
      properties: [
        { name: 'breadcrumbBar', hasValue: true, hasBinding: true },
        { name: 'folderDialogListView', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onBreadcrumbBarChanged', paramCount: 0 },
        { handlerName: 'onFolderDialogListViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'fontDialogImpl',
      attachedTypeName: 'FontDialogImpl',
      properties: [
        { name: 'buttonBox', hasValue: true, hasBinding: true },
        { name: 'familyEdit', hasValue: true, hasBinding: true },
        { name: 'familyListView', hasValue: true, hasBinding: true },
        { name: 'sampleEdit', hasValue: true, hasBinding: true },
        { name: 'sizeEdit', hasValue: true, hasBinding: true },
        { name: 'sizeListView', hasValue: true, hasBinding: true },
        { name: 'strikeoutCheckBox', hasValue: true, hasBinding: true },
        { name: 'styleEdit', hasValue: true, hasBinding: true },
        { name: 'styleListView', hasValue: true, hasBinding: true },
        { name: 'underlineCheckBox', hasValue: true, hasBinding: true },
        { name: 'writingSystemComboBox', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onButtonBoxChanged', paramCount: 0 },
        { handlerName: 'onFamilyEditChanged', paramCount: 0 },
        { handlerName: 'onFamilyListViewChanged', paramCount: 0 },
        { handlerName: 'onSampleEditChanged', paramCount: 0 },
        { handlerName: 'onSizeEditChanged', paramCount: 0 },
        { handlerName: 'onSizeListViewChanged', paramCount: 0 },
        { handlerName: 'onStrikeoutCheckBoxChanged', paramCount: 0 },
        { handlerName: 'onStyleEditChanged', paramCount: 0 },
        { handlerName: 'onStyleListViewChanged', paramCount: 0 },
        { handlerName: 'onUnderlineCheckBoxChanged', paramCount: 0 },
        { handlerName: 'onWritingSystemComboBoxChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'messageDialogImpl',
      attachedTypeName: 'MessageDialogImpl',
      properties: [
        { name: 'buttonBox', hasValue: true, hasBinding: true },
        { name: 'detailedTextButton', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onButtonBoxChanged', paramCount: 0 },
        { handlerName: 'onDetailedTextButtonChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function FileDialogDelegate(): FileDialogDelegateBuilder {
  return createFluentBuilder(
    'FileDialogDelegate',
    FILEDIALOGDELEGATE_META,
  ) as unknown as FileDialogDelegateBuilder;
}

export namespace FileDialogDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('FileDialogDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('FileDialogDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken(
      'FileDialogDelegate',
      'Display',
      'TextBesideIcon',
    );
    export const TextUnderIcon = createEnumToken('FileDialogDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'FileDialogDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'FileDialogDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'FileDialogDelegate',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'FileDialogDelegate',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'FileDialogDelegate',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('FileDialogDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'FileDialogDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'FileDialogDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FileDialogDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FileDialogDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FileDialogDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FileDialogDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FileDialogDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FileDialogDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'FileDialogDelegate',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('FileDialogDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'FileDialogDelegate',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
