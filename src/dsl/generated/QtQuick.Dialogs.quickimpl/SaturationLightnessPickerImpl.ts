// AUTO-GENERATED — DO NOT EDIT
// Type: SaturationLightnessPickerImpl
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
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
import type { ColorDialogImplAttachedBuilder } from './QQuickColorDialogImplAttached.js';
import type { FileDialogImplAttachedBuilder } from './QQuickFileDialogImplAttached.js';
import type { FolderDialogImplAttachedBuilder } from './QQuickFolderDialogImplAttached.js';
import type { FontDialogImplAttachedBuilder } from './QQuickFontDialogImplAttached.js';
import type { MessageDialogImplAttachedBuilder } from './QQuickMessageDialogImplAttached.js';
export interface SaturationLightnessPickerImplBuilder {
  id(id: string): SaturationLightnessPickerImplBuilder;
  child(obj: QmlObjectBuilder): SaturationLightnessPickerImplBuilder;
  children(...objs: QmlObjectBuilder[]): SaturationLightnessPickerImplBuilder;

  activeFocusOnTab(value: boolean): SaturationLightnessPickerImplBuilder;
  activeFocusOnTabBind(expr: string): SaturationLightnessPickerImplBuilder;
  alpha(value: number): SaturationLightnessPickerImplBuilder;
  alphaBind(expr: string): SaturationLightnessPickerImplBuilder;
  antialiasing(value: boolean): SaturationLightnessPickerImplBuilder;
  antialiasingBind(expr: string): SaturationLightnessPickerImplBuilder;
  background(value: ItemBuilder): SaturationLightnessPickerImplBuilder;
  backgroundBind(expr: string): SaturationLightnessPickerImplBuilder;
  baselineOffset(value: number): SaturationLightnessPickerImplBuilder;
  baselineOffsetBind(expr: string): SaturationLightnessPickerImplBuilder;
  bottomInset(value: number): SaturationLightnessPickerImplBuilder;
  bottomInsetBind(expr: string): SaturationLightnessPickerImplBuilder;
  bottomPadding(value: number): SaturationLightnessPickerImplBuilder;
  bottomPaddingBind(expr: string): SaturationLightnessPickerImplBuilder;
  clip(value: boolean): SaturationLightnessPickerImplBuilder;
  clipBind(expr: string): SaturationLightnessPickerImplBuilder;
  color(value: QmlColor): SaturationLightnessPickerImplBuilder;
  colorBind(expr: string): SaturationLightnessPickerImplBuilder;
  containmentMask(value: QtObjectBuilder): SaturationLightnessPickerImplBuilder;
  containmentMaskBind(expr: string): SaturationLightnessPickerImplBuilder;
  contentItem(value: ItemBuilder): SaturationLightnessPickerImplBuilder;
  contentItemBind(expr: string): SaturationLightnessPickerImplBuilder;
  enabled(value: boolean): SaturationLightnessPickerImplBuilder;
  enabledBind(expr: string): SaturationLightnessPickerImplBuilder;
  focus(value: boolean): SaturationLightnessPickerImplBuilder;
  focusBind(expr: string): SaturationLightnessPickerImplBuilder;
  focusPolicy(value: QmlEnumToken): SaturationLightnessPickerImplBuilder;
  focusPolicyBind(expr: string): SaturationLightnessPickerImplBuilder;
  focusReason(value: QmlEnumToken): SaturationLightnessPickerImplBuilder;
  focusReasonBind(expr: string): SaturationLightnessPickerImplBuilder;
  font(value: QmlFont): SaturationLightnessPickerImplBuilder;
  fontBind(expr: string): SaturationLightnessPickerImplBuilder;
  handle(value: ItemBuilder): SaturationLightnessPickerImplBuilder;
  handleBind(expr: string): SaturationLightnessPickerImplBuilder;
  height(value: number): SaturationLightnessPickerImplBuilder;
  heightBind(expr: string): SaturationLightnessPickerImplBuilder;
  horizontalPadding(value: number): SaturationLightnessPickerImplBuilder;
  horizontalPaddingBind(expr: string): SaturationLightnessPickerImplBuilder;
  hoverEnabled(value: boolean): SaturationLightnessPickerImplBuilder;
  hoverEnabledBind(expr: string): SaturationLightnessPickerImplBuilder;
  hue(value: number): SaturationLightnessPickerImplBuilder;
  hueBind(expr: string): SaturationLightnessPickerImplBuilder;
  implicitHeight(value: number): SaturationLightnessPickerImplBuilder;
  implicitHeightBind(expr: string): SaturationLightnessPickerImplBuilder;
  implicitWidth(value: number): SaturationLightnessPickerImplBuilder;
  implicitWidthBind(expr: string): SaturationLightnessPickerImplBuilder;
  leftInset(value: number): SaturationLightnessPickerImplBuilder;
  leftInsetBind(expr: string): SaturationLightnessPickerImplBuilder;
  leftPadding(value: number): SaturationLightnessPickerImplBuilder;
  leftPaddingBind(expr: string): SaturationLightnessPickerImplBuilder;
  lightness(value: number): SaturationLightnessPickerImplBuilder;
  lightnessBind(expr: string): SaturationLightnessPickerImplBuilder;
  locale(value: string): SaturationLightnessPickerImplBuilder;
  localeBind(expr: string): SaturationLightnessPickerImplBuilder;
  objectName(value: string): SaturationLightnessPickerImplBuilder;
  objectNameBind(expr: string): SaturationLightnessPickerImplBuilder;
  opacity(value: number): SaturationLightnessPickerImplBuilder;
  opacityBind(expr: string): SaturationLightnessPickerImplBuilder;
  padding(value: number): SaturationLightnessPickerImplBuilder;
  paddingBind(expr: string): SaturationLightnessPickerImplBuilder;
  palette(value: PaletteBuilder): SaturationLightnessPickerImplBuilder;
  paletteBind(expr: string): SaturationLightnessPickerImplBuilder;
  parent(value: ItemBuilder): SaturationLightnessPickerImplBuilder;
  parentBind(expr: string): SaturationLightnessPickerImplBuilder;
  pressed(value: boolean): SaturationLightnessPickerImplBuilder;
  pressedBind(expr: string): SaturationLightnessPickerImplBuilder;
  rightInset(value: number): SaturationLightnessPickerImplBuilder;
  rightInsetBind(expr: string): SaturationLightnessPickerImplBuilder;
  rightPadding(value: number): SaturationLightnessPickerImplBuilder;
  rightPaddingBind(expr: string): SaturationLightnessPickerImplBuilder;
  rotation(value: number): SaturationLightnessPickerImplBuilder;
  rotationBind(expr: string): SaturationLightnessPickerImplBuilder;
  saturation(value: number): SaturationLightnessPickerImplBuilder;
  saturationBind(expr: string): SaturationLightnessPickerImplBuilder;
  scale(value: number): SaturationLightnessPickerImplBuilder;
  scaleBind(expr: string): SaturationLightnessPickerImplBuilder;
  smooth(value: boolean): SaturationLightnessPickerImplBuilder;
  smoothBind(expr: string): SaturationLightnessPickerImplBuilder;
  spacing(value: number): SaturationLightnessPickerImplBuilder;
  spacingBind(expr: string): SaturationLightnessPickerImplBuilder;
  state(value: string): SaturationLightnessPickerImplBuilder;
  stateBind(expr: string): SaturationLightnessPickerImplBuilder;
  topInset(value: number): SaturationLightnessPickerImplBuilder;
  topInsetBind(expr: string): SaturationLightnessPickerImplBuilder;
  topPadding(value: number): SaturationLightnessPickerImplBuilder;
  topPaddingBind(expr: string): SaturationLightnessPickerImplBuilder;
  transformOrigin(value: QmlEnumToken): SaturationLightnessPickerImplBuilder;
  transformOriginBind(expr: string): SaturationLightnessPickerImplBuilder;
  value(value: number): SaturationLightnessPickerImplBuilder;
  valueBind(expr: string): SaturationLightnessPickerImplBuilder;
  verticalPadding(value: number): SaturationLightnessPickerImplBuilder;
  verticalPaddingBind(expr: string): SaturationLightnessPickerImplBuilder;
  visible(value: boolean): SaturationLightnessPickerImplBuilder;
  visibleBind(expr: string): SaturationLightnessPickerImplBuilder;
  wheelEnabled(value: boolean): SaturationLightnessPickerImplBuilder;
  wheelEnabledBind(expr: string): SaturationLightnessPickerImplBuilder;
  width(value: number): SaturationLightnessPickerImplBuilder;
  widthBind(expr: string): SaturationLightnessPickerImplBuilder;
  x(value: number): SaturationLightnessPickerImplBuilder;
  xBind(expr: string): SaturationLightnessPickerImplBuilder;
  y(value: number): SaturationLightnessPickerImplBuilder;
  yBind(expr: string): SaturationLightnessPickerImplBuilder;
  z(value: number): SaturationLightnessPickerImplBuilder;
  zBind(expr: string): SaturationLightnessPickerImplBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onClipChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onColorChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onColorPicked(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onFontChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onHandleChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onImplicitBackgroundHeightChanged(
    handler: DslSignalHandlerValue,
  ): SaturationLightnessPickerImplBuilder;
  onImplicitBackgroundWidthChanged(
    handler: DslSignalHandlerValue,
  ): SaturationLightnessPickerImplBuilder;
  onImplicitContentHeightChanged(
    handler: DslSignalHandlerValue,
  ): SaturationLightnessPickerImplBuilder;
  onImplicitContentWidthChanged(
    handler: DslSignalHandlerValue,
  ): SaturationLightnessPickerImplBuilder;
  onImplicitHandleHeightChanged(
    handler: DslSignalHandlerValue,
  ): SaturationLightnessPickerImplBuilder;
  onImplicitHandleWidthChanged(
    handler: DslSignalHandlerValue,
  ): SaturationLightnessPickerImplBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onXChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onYChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  onZChanged(handler: DslSignalHandlerValue): SaturationLightnessPickerImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SaturationLightnessPickerImplBuilder;
  layer(setup: (b: LayerBuilder) => void): SaturationLightnessPickerImplBuilder;
  colorDialogImpl(
    setup: (b: ColorDialogImplAttachedBuilder) => void,
  ): SaturationLightnessPickerImplBuilder;
  fileDialogImpl(
    setup: (b: FileDialogImplAttachedBuilder) => void,
  ): SaturationLightnessPickerImplBuilder;
  folderDialogImpl(
    setup: (b: FolderDialogImplAttachedBuilder) => void,
  ): SaturationLightnessPickerImplBuilder;
  fontDialogImpl(
    setup: (b: FontDialogImplAttachedBuilder) => void,
  ): SaturationLightnessPickerImplBuilder;
  messageDialogImpl(
    setup: (b: MessageDialogImplAttachedBuilder) => void,
  ): SaturationLightnessPickerImplBuilder;
}

const SATURATIONLIGHTNESSPICKERIMPL_META: TypeMetadata = {
  typeName: 'SaturationLightnessPickerImpl',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'alpha', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'handle', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'hue', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'lightness', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pressed', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'saturation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
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
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onColorPicked', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
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
    { handlerName: 'onImplicitHandleHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHandleWidthChanged', paramCount: 0 },
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
    { handlerName: 'onPressedChanged', paramCount: 0 },
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

export function SaturationLightnessPickerImpl(): SaturationLightnessPickerImplBuilder {
  return createFluentBuilder(
    'SaturationLightnessPickerImpl',
    SATURATIONLIGHTNESSPICKERIMPL_META,
  ) as unknown as SaturationLightnessPickerImplBuilder;
}

export namespace SaturationLightnessPickerImpl {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SaturationLightnessPickerImpl',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SaturationLightnessPickerImpl',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'SaturationLightnessPickerImpl',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'SaturationLightnessPickerImpl',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'SaturationLightnessPickerImpl',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken(
      'SaturationLightnessPickerImpl',
      'Flags',
      'ItemIsViewport',
    );
    export const ItemObservesViewport = createEnumToken(
      'SaturationLightnessPickerImpl',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SaturationLightnessPickerImpl',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken(
      'SaturationLightnessPickerImpl',
      'TransformOrigin',
      'TopLeft',
    );
    export const Top = createEnumToken('SaturationLightnessPickerImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken(
      'SaturationLightnessPickerImpl',
      'TransformOrigin',
      'TopRight',
    );
    export const Left = createEnumToken('SaturationLightnessPickerImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken(
      'SaturationLightnessPickerImpl',
      'TransformOrigin',
      'Center',
    );
    export const Right = createEnumToken(
      'SaturationLightnessPickerImpl',
      'TransformOrigin',
      'Right',
    );
    export const BottomLeft = createEnumToken(
      'SaturationLightnessPickerImpl',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken(
      'SaturationLightnessPickerImpl',
      'TransformOrigin',
      'Bottom',
    );
    export const BottomRight = createEnumToken(
      'SaturationLightnessPickerImpl',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
