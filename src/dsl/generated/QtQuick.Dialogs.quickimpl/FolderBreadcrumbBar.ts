// AUTO-GENERATED — DO NOT EDIT
// Type: FolderBreadcrumbBar
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
import type { AbstractButtonBuilder } from '../QtQuick.Templates/AbstractButton.js';
import type { DialogBuilder } from '../QtQuick.Templates/Dialog.js';
import type { TextFieldBuilder } from '../QtQuick.Templates/TextField.js';
import type { ColorDialogImplAttachedBuilder } from './QQuickColorDialogImplAttached.js';
import type { FileDialogImplAttachedBuilder } from './QQuickFileDialogImplAttached.js';
import type { FolderDialogImplAttachedBuilder } from './QQuickFolderDialogImplAttached.js';
import type { FontDialogImplAttachedBuilder } from './QQuickFontDialogImplAttached.js';
import type { MessageDialogImplAttachedBuilder } from './QQuickMessageDialogImplAttached.js';
export interface FolderBreadcrumbBarBuilder {
  id(id: string): FolderBreadcrumbBarBuilder;
  child(obj: QmlObjectBuilder): FolderBreadcrumbBarBuilder;

  activeFocusOnTab(value: boolean): FolderBreadcrumbBarBuilder;
  activeFocusOnTabBind(expr: string): FolderBreadcrumbBarBuilder;
  antialiasing(value: boolean): FolderBreadcrumbBarBuilder;
  antialiasingBind(expr: string): FolderBreadcrumbBarBuilder;
  background(value: ItemBuilder): FolderBreadcrumbBarBuilder;
  backgroundBind(expr: string): FolderBreadcrumbBarBuilder;
  baselineOffset(value: number): FolderBreadcrumbBarBuilder;
  baselineOffsetBind(expr: string): FolderBreadcrumbBarBuilder;
  bottomInset(value: number): FolderBreadcrumbBarBuilder;
  bottomInsetBind(expr: string): FolderBreadcrumbBarBuilder;
  bottomPadding(value: number): FolderBreadcrumbBarBuilder;
  bottomPaddingBind(expr: string): FolderBreadcrumbBarBuilder;
  buttonDelegate(value: QmlComponent): FolderBreadcrumbBarBuilder;
  buttonDelegateBind(expr: string): FolderBreadcrumbBarBuilder;
  clip(value: boolean): FolderBreadcrumbBarBuilder;
  clipBind(expr: string): FolderBreadcrumbBarBuilder;
  containmentMask(value: QtObjectBuilder): FolderBreadcrumbBarBuilder;
  containmentMaskBind(expr: string): FolderBreadcrumbBarBuilder;
  contentHeight(value: number): FolderBreadcrumbBarBuilder;
  contentHeightBind(expr: string): FolderBreadcrumbBarBuilder;
  contentItem(value: ItemBuilder): FolderBreadcrumbBarBuilder;
  contentItemBind(expr: string): FolderBreadcrumbBarBuilder;
  contentWidth(value: number): FolderBreadcrumbBarBuilder;
  contentWidthBind(expr: string): FolderBreadcrumbBarBuilder;
  currentIndex(value: number): FolderBreadcrumbBarBuilder;
  currentIndexBind(expr: string): FolderBreadcrumbBarBuilder;
  dialog(value: DialogBuilder): FolderBreadcrumbBarBuilder;
  dialogBind(expr: string): FolderBreadcrumbBarBuilder;
  enabled(value: boolean): FolderBreadcrumbBarBuilder;
  enabledBind(expr: string): FolderBreadcrumbBarBuilder;
  focus(value: boolean): FolderBreadcrumbBarBuilder;
  focusBind(expr: string): FolderBreadcrumbBarBuilder;
  focusPolicy(value: QmlEnumToken): FolderBreadcrumbBarBuilder;
  focusPolicyBind(expr: string): FolderBreadcrumbBarBuilder;
  focusReason(value: QmlEnumToken): FolderBreadcrumbBarBuilder;
  focusReasonBind(expr: string): FolderBreadcrumbBarBuilder;
  font(value: QmlFont): FolderBreadcrumbBarBuilder;
  fontBind(expr: string): FolderBreadcrumbBarBuilder;
  height(value: number): FolderBreadcrumbBarBuilder;
  heightBind(expr: string): FolderBreadcrumbBarBuilder;
  horizontalPadding(value: number): FolderBreadcrumbBarBuilder;
  horizontalPaddingBind(expr: string): FolderBreadcrumbBarBuilder;
  hoverEnabled(value: boolean): FolderBreadcrumbBarBuilder;
  hoverEnabledBind(expr: string): FolderBreadcrumbBarBuilder;
  implicitHeight(value: number): FolderBreadcrumbBarBuilder;
  implicitHeightBind(expr: string): FolderBreadcrumbBarBuilder;
  implicitWidth(value: number): FolderBreadcrumbBarBuilder;
  implicitWidthBind(expr: string): FolderBreadcrumbBarBuilder;
  leftInset(value: number): FolderBreadcrumbBarBuilder;
  leftInsetBind(expr: string): FolderBreadcrumbBarBuilder;
  leftPadding(value: number): FolderBreadcrumbBarBuilder;
  leftPaddingBind(expr: string): FolderBreadcrumbBarBuilder;
  locale(value: string): FolderBreadcrumbBarBuilder;
  localeBind(expr: string): FolderBreadcrumbBarBuilder;
  objectName(value: string): FolderBreadcrumbBarBuilder;
  objectNameBind(expr: string): FolderBreadcrumbBarBuilder;
  opacity(value: number): FolderBreadcrumbBarBuilder;
  opacityBind(expr: string): FolderBreadcrumbBarBuilder;
  padding(value: number): FolderBreadcrumbBarBuilder;
  paddingBind(expr: string): FolderBreadcrumbBarBuilder;
  palette(value: PaletteBuilder): FolderBreadcrumbBarBuilder;
  paletteBind(expr: string): FolderBreadcrumbBarBuilder;
  parent(value: ItemBuilder): FolderBreadcrumbBarBuilder;
  parentBind(expr: string): FolderBreadcrumbBarBuilder;
  rightInset(value: number): FolderBreadcrumbBarBuilder;
  rightInsetBind(expr: string): FolderBreadcrumbBarBuilder;
  rightPadding(value: number): FolderBreadcrumbBarBuilder;
  rightPaddingBind(expr: string): FolderBreadcrumbBarBuilder;
  rotation(value: number): FolderBreadcrumbBarBuilder;
  rotationBind(expr: string): FolderBreadcrumbBarBuilder;
  scale(value: number): FolderBreadcrumbBarBuilder;
  scaleBind(expr: string): FolderBreadcrumbBarBuilder;
  separatorDelegate(value: QmlComponent): FolderBreadcrumbBarBuilder;
  separatorDelegateBind(expr: string): FolderBreadcrumbBarBuilder;
  smooth(value: boolean): FolderBreadcrumbBarBuilder;
  smoothBind(expr: string): FolderBreadcrumbBarBuilder;
  spacing(value: number): FolderBreadcrumbBarBuilder;
  spacingBind(expr: string): FolderBreadcrumbBarBuilder;
  state(value: string): FolderBreadcrumbBarBuilder;
  stateBind(expr: string): FolderBreadcrumbBarBuilder;
  textField(value: TextFieldBuilder): FolderBreadcrumbBarBuilder;
  textFieldBind(expr: string): FolderBreadcrumbBarBuilder;
  topInset(value: number): FolderBreadcrumbBarBuilder;
  topInsetBind(expr: string): FolderBreadcrumbBarBuilder;
  topPadding(value: number): FolderBreadcrumbBarBuilder;
  topPaddingBind(expr: string): FolderBreadcrumbBarBuilder;
  transformOrigin(value: QmlEnumToken): FolderBreadcrumbBarBuilder;
  transformOriginBind(expr: string): FolderBreadcrumbBarBuilder;
  upButton(value: AbstractButtonBuilder): FolderBreadcrumbBarBuilder;
  upButtonBind(expr: string): FolderBreadcrumbBarBuilder;
  upButtonSpacing(value: number): FolderBreadcrumbBarBuilder;
  upButtonSpacingBind(expr: string): FolderBreadcrumbBarBuilder;
  verticalPadding(value: number): FolderBreadcrumbBarBuilder;
  verticalPaddingBind(expr: string): FolderBreadcrumbBarBuilder;
  visible(value: boolean): FolderBreadcrumbBarBuilder;
  visibleBind(expr: string): FolderBreadcrumbBarBuilder;
  wheelEnabled(value: boolean): FolderBreadcrumbBarBuilder;
  wheelEnabledBind(expr: string): FolderBreadcrumbBarBuilder;
  width(value: number): FolderBreadcrumbBarBuilder;
  widthBind(expr: string): FolderBreadcrumbBarBuilder;
  x(value: number): FolderBreadcrumbBarBuilder;
  xBind(expr: string): FolderBreadcrumbBarBuilder;
  y(value: number): FolderBreadcrumbBarBuilder;
  yBind(expr: string): FolderBreadcrumbBarBuilder;
  z(value: number): FolderBreadcrumbBarBuilder;
  zBind(expr: string): FolderBreadcrumbBarBuilder;
  onActiveFocusChanged(body: string): FolderBreadcrumbBarBuilder;
  onActiveFocusOnTabChanged(body: string): FolderBreadcrumbBarBuilder;
  onAntialiasingChanged(body: string): FolderBreadcrumbBarBuilder;
  onAvailableHeightChanged(body: string): FolderBreadcrumbBarBuilder;
  onAvailableWidthChanged(body: string): FolderBreadcrumbBarBuilder;
  onBackgroundChanged(body: string): FolderBreadcrumbBarBuilder;
  onBaselineOffsetChanged(body: string): FolderBreadcrumbBarBuilder;
  onBottomInsetChanged(body: string): FolderBreadcrumbBarBuilder;
  onBottomPaddingChanged(body: string): FolderBreadcrumbBarBuilder;
  onButtonDelegateChanged(body: string): FolderBreadcrumbBarBuilder;
  onChildrenChanged(body: string): FolderBreadcrumbBarBuilder;
  onChildrenRectChanged(body: string): FolderBreadcrumbBarBuilder;
  onClipChanged(body: string): FolderBreadcrumbBarBuilder;
  onContainmentMaskChanged(body: string): FolderBreadcrumbBarBuilder;
  onContentChildrenChanged(body: string): FolderBreadcrumbBarBuilder;
  onContentHeightChanged(body: string): FolderBreadcrumbBarBuilder;
  onContentItemChanged(body: string): FolderBreadcrumbBarBuilder;
  onContentWidthChanged(body: string): FolderBreadcrumbBarBuilder;
  onCountChanged(body: string): FolderBreadcrumbBarBuilder;
  onCurrentIndexChanged(body: string): FolderBreadcrumbBarBuilder;
  onCurrentItemChanged(body: string): FolderBreadcrumbBarBuilder;
  onDialogChanged(body: string): FolderBreadcrumbBarBuilder;
  onEnabledChanged(body: string): FolderBreadcrumbBarBuilder;
  onFocusChanged(body: string): FolderBreadcrumbBarBuilder;
  onFocusPolicyChanged(body: string): FolderBreadcrumbBarBuilder;
  onFocusReasonChanged(body: string): FolderBreadcrumbBarBuilder;
  onFontChanged(body: string): FolderBreadcrumbBarBuilder;
  onHeightChanged(body: string): FolderBreadcrumbBarBuilder;
  onHorizontalPaddingChanged(body: string): FolderBreadcrumbBarBuilder;
  onHoverEnabledChanged(body: string): FolderBreadcrumbBarBuilder;
  onHoveredChanged(body: string): FolderBreadcrumbBarBuilder;
  onImplicitBackgroundHeightChanged(body: string): FolderBreadcrumbBarBuilder;
  onImplicitBackgroundWidthChanged(body: string): FolderBreadcrumbBarBuilder;
  onImplicitContentHeightChanged(body: string): FolderBreadcrumbBarBuilder;
  onImplicitContentWidthChanged(body: string): FolderBreadcrumbBarBuilder;
  onImplicitHeightChanged(body: string): FolderBreadcrumbBarBuilder;
  onImplicitWidthChanged(body: string): FolderBreadcrumbBarBuilder;
  onLeftInsetChanged(body: string): FolderBreadcrumbBarBuilder;
  onLeftPaddingChanged(body: string): FolderBreadcrumbBarBuilder;
  onLocaleChanged(body: string): FolderBreadcrumbBarBuilder;
  onMirroredChanged(body: string): FolderBreadcrumbBarBuilder;
  onObjectNameChanged(body: string): FolderBreadcrumbBarBuilder;
  onOpacityChanged(body: string): FolderBreadcrumbBarBuilder;
  onPaddingChanged(body: string): FolderBreadcrumbBarBuilder;
  onPaletteChanged(body: string): FolderBreadcrumbBarBuilder;
  onPaletteCreated(body: string): FolderBreadcrumbBarBuilder;
  onParentChanged(body: string): FolderBreadcrumbBarBuilder;
  onRightInsetChanged(body: string): FolderBreadcrumbBarBuilder;
  onRightPaddingChanged(body: string): FolderBreadcrumbBarBuilder;
  onRotationChanged(body: string): FolderBreadcrumbBarBuilder;
  onScaleChanged(body: string): FolderBreadcrumbBarBuilder;
  onSeparatorDelegateChanged(body: string): FolderBreadcrumbBarBuilder;
  onSmoothChanged(body: string): FolderBreadcrumbBarBuilder;
  onSpacingChanged(body: string): FolderBreadcrumbBarBuilder;
  onStateChanged(body: string): FolderBreadcrumbBarBuilder;
  onTextFieldChanged(body: string): FolderBreadcrumbBarBuilder;
  onTopInsetChanged(body: string): FolderBreadcrumbBarBuilder;
  onTopPaddingChanged(body: string): FolderBreadcrumbBarBuilder;
  onTransformOriginChanged(body: string): FolderBreadcrumbBarBuilder;
  onUpButtonChanged(body: string): FolderBreadcrumbBarBuilder;
  onUpButtonSpacingChanged(body: string): FolderBreadcrumbBarBuilder;
  onVerticalPaddingChanged(body: string): FolderBreadcrumbBarBuilder;
  onVisibleChanged(body: string): FolderBreadcrumbBarBuilder;
  onVisibleChildrenChanged(body: string): FolderBreadcrumbBarBuilder;
  onVisualFocusChanged(body: string): FolderBreadcrumbBarBuilder;
  onWheelEnabledChanged(body: string): FolderBreadcrumbBarBuilder;
  onWidthChanged(body: string): FolderBreadcrumbBarBuilder;
  onWindowChanged(body: string): FolderBreadcrumbBarBuilder;
  onXChanged(body: string): FolderBreadcrumbBarBuilder;
  onYChanged(body: string): FolderBreadcrumbBarBuilder;
  onZChanged(body: string): FolderBreadcrumbBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FolderBreadcrumbBarBuilder;
  layer(setup: (b: LayerBuilder) => void): FolderBreadcrumbBarBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): FolderBreadcrumbBarBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): FolderBreadcrumbBarBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): FolderBreadcrumbBarBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): FolderBreadcrumbBarBuilder;
  messageDialogImpl(
    setup: (b: MessageDialogImplAttachedBuilder) => void,
  ): FolderBreadcrumbBarBuilder;
}

const FOLDERBREADCRUMBBAR_META: TypeMetadata = {
  typeName: 'FolderBreadcrumbBar',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'buttonDelegate', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'dialog', hasValue: true, hasBinding: true },
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
    { name: 'separatorDelegate', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textField', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'upButton', hasValue: true, hasBinding: true },
    { name: 'upButtonSpacing', hasValue: true, hasBinding: true },
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
    { handlerName: 'onButtonDelegateChanged', paramCount: 0 },
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
    { handlerName: 'onDialogChanged', paramCount: 0 },
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
    { handlerName: 'onSeparatorDelegateChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextFieldChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onUpButtonChanged', paramCount: 0 },
    { handlerName: 'onUpButtonSpacingChanged', paramCount: 0 },
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
  defaultProperty: 'contentData',
};

export function FolderBreadcrumbBar(): FolderBreadcrumbBarBuilder {
  return createFluentBuilder(
    'FolderBreadcrumbBar',
    FOLDERBREADCRUMBBAR_META,
  ) as unknown as FolderBreadcrumbBarBuilder;
}

export namespace FolderBreadcrumbBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'FolderBreadcrumbBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'FolderBreadcrumbBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'FolderBreadcrumbBar',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'FolderBreadcrumbBar',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'FolderBreadcrumbBar',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('FolderBreadcrumbBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'FolderBreadcrumbBar',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'FolderBreadcrumbBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FolderBreadcrumbBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FolderBreadcrumbBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FolderBreadcrumbBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FolderBreadcrumbBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FolderBreadcrumbBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FolderBreadcrumbBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'FolderBreadcrumbBar',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('FolderBreadcrumbBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'FolderBreadcrumbBar',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
