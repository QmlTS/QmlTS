// AUTO-GENERATED — DO NOT EDIT
// Type: ColorInputsImpl
// Generated from Qt 6.11.0

import type {
  QmlColor,
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
import type { ColorDialogImplAttachedBuilder } from './QQuickColorDialogImplAttached.js';
import type { FileDialogImplAttachedBuilder } from './QQuickFileDialogImplAttached.js';
import type { FolderDialogImplAttachedBuilder } from './QQuickFolderDialogImplAttached.js';
import type { FontDialogImplAttachedBuilder } from './QQuickFontDialogImplAttached.js';
import type { MessageDialogImplAttachedBuilder } from './QQuickMessageDialogImplAttached.js';
export interface ColorInputsImplBuilder {
  id(id: string): ColorInputsImplBuilder;
  child(obj: QmlObjectBuilder): ColorInputsImplBuilder;

  activeFocusOnTab(value: boolean): ColorInputsImplBuilder;
  activeFocusOnTabBind(expr: string): ColorInputsImplBuilder;
  antialiasing(value: boolean): ColorInputsImplBuilder;
  antialiasingBind(expr: string): ColorInputsImplBuilder;
  background(value: ItemBuilder): ColorInputsImplBuilder;
  backgroundBind(expr: string): ColorInputsImplBuilder;
  baselineOffset(value: number): ColorInputsImplBuilder;
  baselineOffsetBind(expr: string): ColorInputsImplBuilder;
  bottomInset(value: number): ColorInputsImplBuilder;
  bottomInsetBind(expr: string): ColorInputsImplBuilder;
  bottomPadding(value: number): ColorInputsImplBuilder;
  bottomPaddingBind(expr: string): ColorInputsImplBuilder;
  clip(value: boolean): ColorInputsImplBuilder;
  clipBind(expr: string): ColorInputsImplBuilder;
  color(value: QmlColor): ColorInputsImplBuilder;
  colorBind(expr: string): ColorInputsImplBuilder;
  containmentMask(value: QtObjectBuilder): ColorInputsImplBuilder;
  containmentMaskBind(expr: string): ColorInputsImplBuilder;
  contentHeight(value: number): ColorInputsImplBuilder;
  contentHeightBind(expr: string): ColorInputsImplBuilder;
  contentItem(value: ItemBuilder): ColorInputsImplBuilder;
  contentItemBind(expr: string): ColorInputsImplBuilder;
  contentWidth(value: number): ColorInputsImplBuilder;
  contentWidthBind(expr: string): ColorInputsImplBuilder;
  currentIndex(value: number): ColorInputsImplBuilder;
  currentIndexBind(expr: string): ColorInputsImplBuilder;
  delegate(value: QmlComponent): ColorInputsImplBuilder;
  delegateBind(expr: string): ColorInputsImplBuilder;
  enabled(value: boolean): ColorInputsImplBuilder;
  enabledBind(expr: string): ColorInputsImplBuilder;
  focus(value: boolean): ColorInputsImplBuilder;
  focusBind(expr: string): ColorInputsImplBuilder;
  focusPolicy(value: QmlEnumToken): ColorInputsImplBuilder;
  focusPolicyBind(expr: string): ColorInputsImplBuilder;
  focusReason(value: QmlEnumToken): ColorInputsImplBuilder;
  focusReasonBind(expr: string): ColorInputsImplBuilder;
  font(value: QmlFont): ColorInputsImplBuilder;
  fontBind(expr: string): ColorInputsImplBuilder;
  height(value: number): ColorInputsImplBuilder;
  heightBind(expr: string): ColorInputsImplBuilder;
  horizontalPadding(value: number): ColorInputsImplBuilder;
  horizontalPaddingBind(expr: string): ColorInputsImplBuilder;
  hoverEnabled(value: boolean): ColorInputsImplBuilder;
  hoverEnabledBind(expr: string): ColorInputsImplBuilder;
  implicitHeight(value: number): ColorInputsImplBuilder;
  implicitHeightBind(expr: string): ColorInputsImplBuilder;
  implicitWidth(value: number): ColorInputsImplBuilder;
  implicitWidthBind(expr: string): ColorInputsImplBuilder;
  leftInset(value: number): ColorInputsImplBuilder;
  leftInsetBind(expr: string): ColorInputsImplBuilder;
  leftPadding(value: number): ColorInputsImplBuilder;
  leftPaddingBind(expr: string): ColorInputsImplBuilder;
  locale(value: string): ColorInputsImplBuilder;
  localeBind(expr: string): ColorInputsImplBuilder;
  mode(value: QmlEnumToken): ColorInputsImplBuilder;
  modeBind(expr: string): ColorInputsImplBuilder;
  objectName(value: string): ColorInputsImplBuilder;
  objectNameBind(expr: string): ColorInputsImplBuilder;
  opacity(value: number): ColorInputsImplBuilder;
  opacityBind(expr: string): ColorInputsImplBuilder;
  padding(value: number): ColorInputsImplBuilder;
  paddingBind(expr: string): ColorInputsImplBuilder;
  palette(value: PaletteBuilder): ColorInputsImplBuilder;
  paletteBind(expr: string): ColorInputsImplBuilder;
  parent(value: ItemBuilder): ColorInputsImplBuilder;
  parentBind(expr: string): ColorInputsImplBuilder;
  rightInset(value: number): ColorInputsImplBuilder;
  rightInsetBind(expr: string): ColorInputsImplBuilder;
  rightPadding(value: number): ColorInputsImplBuilder;
  rightPaddingBind(expr: string): ColorInputsImplBuilder;
  rotation(value: number): ColorInputsImplBuilder;
  rotationBind(expr: string): ColorInputsImplBuilder;
  scale(value: number): ColorInputsImplBuilder;
  scaleBind(expr: string): ColorInputsImplBuilder;
  showAlpha(value: boolean): ColorInputsImplBuilder;
  showAlphaBind(expr: string): ColorInputsImplBuilder;
  smooth(value: boolean): ColorInputsImplBuilder;
  smoothBind(expr: string): ColorInputsImplBuilder;
  spacing(value: number): ColorInputsImplBuilder;
  spacingBind(expr: string): ColorInputsImplBuilder;
  state(value: string): ColorInputsImplBuilder;
  stateBind(expr: string): ColorInputsImplBuilder;
  topInset(value: number): ColorInputsImplBuilder;
  topInsetBind(expr: string): ColorInputsImplBuilder;
  topPadding(value: number): ColorInputsImplBuilder;
  topPaddingBind(expr: string): ColorInputsImplBuilder;
  transformOrigin(value: QmlEnumToken): ColorInputsImplBuilder;
  transformOriginBind(expr: string): ColorInputsImplBuilder;
  verticalPadding(value: number): ColorInputsImplBuilder;
  verticalPaddingBind(expr: string): ColorInputsImplBuilder;
  visible(value: boolean): ColorInputsImplBuilder;
  visibleBind(expr: string): ColorInputsImplBuilder;
  wheelEnabled(value: boolean): ColorInputsImplBuilder;
  wheelEnabledBind(expr: string): ColorInputsImplBuilder;
  width(value: number): ColorInputsImplBuilder;
  widthBind(expr: string): ColorInputsImplBuilder;
  x(value: number): ColorInputsImplBuilder;
  xBind(expr: string): ColorInputsImplBuilder;
  y(value: number): ColorInputsImplBuilder;
  yBind(expr: string): ColorInputsImplBuilder;
  z(value: number): ColorInputsImplBuilder;
  zBind(expr: string): ColorInputsImplBuilder;
  onActiveFocusChanged(body: string): ColorInputsImplBuilder;
  onActiveFocusOnTabChanged(body: string): ColorInputsImplBuilder;
  onAntialiasingChanged(body: string): ColorInputsImplBuilder;
  onAvailableHeightChanged(body: string): ColorInputsImplBuilder;
  onAvailableWidthChanged(body: string): ColorInputsImplBuilder;
  onBackgroundChanged(body: string): ColorInputsImplBuilder;
  onBaselineOffsetChanged(body: string): ColorInputsImplBuilder;
  onBottomInsetChanged(body: string): ColorInputsImplBuilder;
  onBottomPaddingChanged(body: string): ColorInputsImplBuilder;
  onChildrenChanged(body: string): ColorInputsImplBuilder;
  onChildrenRectChanged(body: string): ColorInputsImplBuilder;
  onClipChanged(body: string): ColorInputsImplBuilder;
  onColorChanged(body: string): ColorInputsImplBuilder;
  onColorModified(body: string): ColorInputsImplBuilder;
  onContainmentMaskChanged(body: string): ColorInputsImplBuilder;
  onContentChildrenChanged(body: string): ColorInputsImplBuilder;
  onContentHeightChanged(body: string): ColorInputsImplBuilder;
  onContentItemChanged(body: string): ColorInputsImplBuilder;
  onContentWidthChanged(body: string): ColorInputsImplBuilder;
  onCountChanged(body: string): ColorInputsImplBuilder;
  onCurrentIndexChanged(body: string): ColorInputsImplBuilder;
  onCurrentItemChanged(body: string): ColorInputsImplBuilder;
  onCurrentModeChanged(body: string): ColorInputsImplBuilder;
  onDelegateChanged(body: string): ColorInputsImplBuilder;
  onEnabledChanged(body: string): ColorInputsImplBuilder;
  onFocusChanged(body: string): ColorInputsImplBuilder;
  onFocusPolicyChanged(body: string): ColorInputsImplBuilder;
  onFocusReasonChanged(body: string): ColorInputsImplBuilder;
  onFontChanged(body: string): ColorInputsImplBuilder;
  onHeightChanged(body: string): ColorInputsImplBuilder;
  onHorizontalPaddingChanged(body: string): ColorInputsImplBuilder;
  onHoverEnabledChanged(body: string): ColorInputsImplBuilder;
  onHoveredChanged(body: string): ColorInputsImplBuilder;
  onHslChanged(body: string): ColorInputsImplBuilder;
  onImplicitBackgroundHeightChanged(body: string): ColorInputsImplBuilder;
  onImplicitBackgroundWidthChanged(body: string): ColorInputsImplBuilder;
  onImplicitContentHeightChanged(body: string): ColorInputsImplBuilder;
  onImplicitContentWidthChanged(body: string): ColorInputsImplBuilder;
  onImplicitHeightChanged(body: string): ColorInputsImplBuilder;
  onImplicitWidthChanged(body: string): ColorInputsImplBuilder;
  onLeftInsetChanged(body: string): ColorInputsImplBuilder;
  onLeftPaddingChanged(body: string): ColorInputsImplBuilder;
  onLocaleChanged(body: string): ColorInputsImplBuilder;
  onMirroredChanged(body: string): ColorInputsImplBuilder;
  onObjectNameChanged(body: string): ColorInputsImplBuilder;
  onOpacityChanged(body: string): ColorInputsImplBuilder;
  onPaddingChanged(body: string): ColorInputsImplBuilder;
  onPaletteChanged(body: string): ColorInputsImplBuilder;
  onPaletteCreated(body: string): ColorInputsImplBuilder;
  onParentChanged(body: string): ColorInputsImplBuilder;
  onRightInsetChanged(body: string): ColorInputsImplBuilder;
  onRightPaddingChanged(body: string): ColorInputsImplBuilder;
  onRotationChanged(body: string): ColorInputsImplBuilder;
  onScaleChanged(body: string): ColorInputsImplBuilder;
  onShowAlphaChanged(body: string): ColorInputsImplBuilder;
  onSmoothChanged(body: string): ColorInputsImplBuilder;
  onSpacingChanged(body: string): ColorInputsImplBuilder;
  onStateChanged(body: string): ColorInputsImplBuilder;
  onTopInsetChanged(body: string): ColorInputsImplBuilder;
  onTopPaddingChanged(body: string): ColorInputsImplBuilder;
  onTransformOriginChanged(body: string): ColorInputsImplBuilder;
  onVerticalPaddingChanged(body: string): ColorInputsImplBuilder;
  onVisibleChanged(body: string): ColorInputsImplBuilder;
  onVisibleChildrenChanged(body: string): ColorInputsImplBuilder;
  onVisualFocusChanged(body: string): ColorInputsImplBuilder;
  onWheelEnabledChanged(body: string): ColorInputsImplBuilder;
  onWidthChanged(body: string): ColorInputsImplBuilder;
  onWindowChanged(body: string): ColorInputsImplBuilder;
  onXChanged(body: string): ColorInputsImplBuilder;
  onYChanged(body: string): ColorInputsImplBuilder;
  onZChanged(body: string): ColorInputsImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ColorInputsImplBuilder;
  layer(setup: (b: LayerBuilder) => void): ColorInputsImplBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): ColorInputsImplBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): ColorInputsImplBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): ColorInputsImplBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): ColorInputsImplBuilder;
  messageDialogImpl(setup: (b: MessageDialogImplAttachedBuilder) => void): ColorInputsImplBuilder;
}

const COLORINPUTSIMPL_META: TypeMetadata = {
  typeName: 'ColorInputsImpl',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
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
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'mode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'showAlpha', hasValue: true, hasBinding: true },
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
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onColorModified', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onCurrentModeChanged', paramCount: 0 },
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
    { handlerName: 'onHslChanged', paramCount: 0 },
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
    { handlerName: 'onShowAlphaChanged', paramCount: 1 },
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
  defaultProperty: 'contentData',
};

export function ColorInputsImpl(): ColorInputsImplBuilder {
  return createFluentBuilder(
    'ColorInputsImpl',
    COLORINPUTSIMPL_META,
  ) as unknown as ColorInputsImplBuilder;
}

export namespace ColorInputsImpl {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ColorInputsImpl',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ColorInputsImpl',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ColorInputsImpl', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ColorInputsImpl', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ColorInputsImpl', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ColorInputsImpl', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ColorInputsImpl',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ColorInputsImpl',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Mode {
    export const Hex = createEnumToken('ColorInputsImpl', 'Mode', 'Hex');
    export const Rgb = createEnumToken('ColorInputsImpl', 'Mode', 'Rgb');
    export const Hsv = createEnumToken('ColorInputsImpl', 'Mode', 'Hsv');
    export const Hsl = createEnumToken('ColorInputsImpl', 'Mode', 'Hsl');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ColorInputsImpl', 'TransformOrigin', 'BottomRight');
  }
}
