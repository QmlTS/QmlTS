// AUTO-GENERATED — DO NOT EDIT
// Type: ColorDialogImpl
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { AnchorsBuilder } from '../QtQuick.Templates/QQuickPopupAnchors.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
import type { ColorDialogImplAttachedBuilder } from './QQuickColorDialogImplAttached.js';
import type { FileDialogImplAttachedBuilder } from './QQuickFileDialogImplAttached.js';
import type { FolderDialogImplAttachedBuilder } from './QQuickFolderDialogImplAttached.js';
import type { FontDialogImplAttachedBuilder } from './QQuickFontDialogImplAttached.js';
import type { MessageDialogImplAttachedBuilder } from './QQuickMessageDialogImplAttached.js';
export interface ColorDialogImplBuilder {
  id(id: string): ColorDialogImplBuilder;
  child(obj: QmlObjectBuilder): ColorDialogImplBuilder;

  alpha(value: number): ColorDialogImplBuilder;
  alphaBind(expr: string): ColorDialogImplBuilder;
  background(value: ItemBuilder): ColorDialogImplBuilder;
  backgroundBind(expr: string): ColorDialogImplBuilder;
  blue(value: number): ColorDialogImplBuilder;
  blueBind(expr: string): ColorDialogImplBuilder;
  bottomInset(value: number): ColorDialogImplBuilder;
  bottomInsetBind(expr: string): ColorDialogImplBuilder;
  bottomMargin(value: number): ColorDialogImplBuilder;
  bottomMarginBind(expr: string): ColorDialogImplBuilder;
  bottomPadding(value: number): ColorDialogImplBuilder;
  bottomPaddingBind(expr: string): ColorDialogImplBuilder;
  clip(value: boolean): ColorDialogImplBuilder;
  clipBind(expr: string): ColorDialogImplBuilder;
  closePolicy(value: QmlEnumToken): ColorDialogImplBuilder;
  closePolicyBind(expr: string): ColorDialogImplBuilder;
  color(value: QmlColor): ColorDialogImplBuilder;
  colorBind(expr: string): ColorDialogImplBuilder;
  contentHeight(value: number): ColorDialogImplBuilder;
  contentHeightBind(expr: string): ColorDialogImplBuilder;
  contentItem(value: ItemBuilder): ColorDialogImplBuilder;
  contentItemBind(expr: string): ColorDialogImplBuilder;
  contentWidth(value: number): ColorDialogImplBuilder;
  contentWidthBind(expr: string): ColorDialogImplBuilder;
  dim(value: boolean): ColorDialogImplBuilder;
  dimBind(expr: string): ColorDialogImplBuilder;
  enabled(value: boolean): ColorDialogImplBuilder;
  enabledBind(expr: string): ColorDialogImplBuilder;
  enter(value: TransitionBuilder): ColorDialogImplBuilder;
  enterBind(expr: string): ColorDialogImplBuilder;
  exit(value: TransitionBuilder): ColorDialogImplBuilder;
  exitBind(expr: string): ColorDialogImplBuilder;
  focus(value: boolean): ColorDialogImplBuilder;
  focusBind(expr: string): ColorDialogImplBuilder;
  font(value: QmlFont): ColorDialogImplBuilder;
  fontBind(expr: string): ColorDialogImplBuilder;
  footer(value: ItemBuilder): ColorDialogImplBuilder;
  footerBind(expr: string): ColorDialogImplBuilder;
  green(value: number): ColorDialogImplBuilder;
  greenBind(expr: string): ColorDialogImplBuilder;
  header(value: ItemBuilder): ColorDialogImplBuilder;
  headerBind(expr: string): ColorDialogImplBuilder;
  height(value: number): ColorDialogImplBuilder;
  heightBind(expr: string): ColorDialogImplBuilder;
  horizontalPadding(value: number): ColorDialogImplBuilder;
  horizontalPaddingBind(expr: string): ColorDialogImplBuilder;
  hue(value: number): ColorDialogImplBuilder;
  hueBind(expr: string): ColorDialogImplBuilder;
  implicitHeight(value: number): ColorDialogImplBuilder;
  implicitHeightBind(expr: string): ColorDialogImplBuilder;
  implicitWidth(value: number): ColorDialogImplBuilder;
  implicitWidthBind(expr: string): ColorDialogImplBuilder;
  isHsl(value: boolean): ColorDialogImplBuilder;
  isHslBind(expr: string): ColorDialogImplBuilder;
  leftInset(value: number): ColorDialogImplBuilder;
  leftInsetBind(expr: string): ColorDialogImplBuilder;
  leftMargin(value: number): ColorDialogImplBuilder;
  leftMarginBind(expr: string): ColorDialogImplBuilder;
  leftPadding(value: number): ColorDialogImplBuilder;
  leftPaddingBind(expr: string): ColorDialogImplBuilder;
  lightness(value: number): ColorDialogImplBuilder;
  lightnessBind(expr: string): ColorDialogImplBuilder;
  locale(value: string): ColorDialogImplBuilder;
  localeBind(expr: string): ColorDialogImplBuilder;
  margins(value: number): ColorDialogImplBuilder;
  marginsBind(expr: string): ColorDialogImplBuilder;
  modal(value: boolean): ColorDialogImplBuilder;
  modalBind(expr: string): ColorDialogImplBuilder;
  objectName(value: string): ColorDialogImplBuilder;
  objectNameBind(expr: string): ColorDialogImplBuilder;
  opacity(value: number): ColorDialogImplBuilder;
  opacityBind(expr: string): ColorDialogImplBuilder;
  padding(value: number): ColorDialogImplBuilder;
  paddingBind(expr: string): ColorDialogImplBuilder;
  palette(value: PaletteBuilder): ColorDialogImplBuilder;
  paletteBind(expr: string): ColorDialogImplBuilder;
  parent(value: ItemBuilder): ColorDialogImplBuilder;
  parentBind(expr: string): ColorDialogImplBuilder;
  popupType(value: QmlEnumToken): ColorDialogImplBuilder;
  popupTypeBind(expr: string): ColorDialogImplBuilder;
  red(value: number): ColorDialogImplBuilder;
  redBind(expr: string): ColorDialogImplBuilder;
  result(value: number): ColorDialogImplBuilder;
  resultBind(expr: string): ColorDialogImplBuilder;
  rightInset(value: number): ColorDialogImplBuilder;
  rightInsetBind(expr: string): ColorDialogImplBuilder;
  rightMargin(value: number): ColorDialogImplBuilder;
  rightMarginBind(expr: string): ColorDialogImplBuilder;
  rightPadding(value: number): ColorDialogImplBuilder;
  rightPaddingBind(expr: string): ColorDialogImplBuilder;
  saturation(value: number): ColorDialogImplBuilder;
  saturationBind(expr: string): ColorDialogImplBuilder;
  scale(value: number): ColorDialogImplBuilder;
  scaleBind(expr: string): ColorDialogImplBuilder;
  spacing(value: number): ColorDialogImplBuilder;
  spacingBind(expr: string): ColorDialogImplBuilder;
  standardButtons(value: QmlEnumToken): ColorDialogImplBuilder;
  standardButtonsBind(expr: string): ColorDialogImplBuilder;
  title(value: string): ColorDialogImplBuilder;
  titleBind(expr: string): ColorDialogImplBuilder;
  topInset(value: number): ColorDialogImplBuilder;
  topInsetBind(expr: string): ColorDialogImplBuilder;
  topMargin(value: number): ColorDialogImplBuilder;
  topMarginBind(expr: string): ColorDialogImplBuilder;
  topPadding(value: number): ColorDialogImplBuilder;
  topPaddingBind(expr: string): ColorDialogImplBuilder;
  transformOrigin(value: QmlEnumToken): ColorDialogImplBuilder;
  transformOriginBind(expr: string): ColorDialogImplBuilder;
  value(value: number): ColorDialogImplBuilder;
  valueBind(expr: string): ColorDialogImplBuilder;
  verticalPadding(value: number): ColorDialogImplBuilder;
  verticalPaddingBind(expr: string): ColorDialogImplBuilder;
  visible(value: boolean): ColorDialogImplBuilder;
  visibleBind(expr: string): ColorDialogImplBuilder;
  width(value: number): ColorDialogImplBuilder;
  widthBind(expr: string): ColorDialogImplBuilder;
  x(value: number): ColorDialogImplBuilder;
  xBind(expr: string): ColorDialogImplBuilder;
  y(value: number): ColorDialogImplBuilder;
  yBind(expr: string): ColorDialogImplBuilder;
  z(value: number): ColorDialogImplBuilder;
  zBind(expr: string): ColorDialogImplBuilder;
  onAboutToHide(body: string): ColorDialogImplBuilder;
  onAboutToShow(body: string): ColorDialogImplBuilder;
  onAccepted(body: string): ColorDialogImplBuilder;
  onActiveFocusChanged(body: string): ColorDialogImplBuilder;
  onApplied(body: string): ColorDialogImplBuilder;
  onAvailableHeightChanged(body: string): ColorDialogImplBuilder;
  onAvailableWidthChanged(body: string): ColorDialogImplBuilder;
  onBackgroundChanged(body: string): ColorDialogImplBuilder;
  onBottomInsetChanged(body: string): ColorDialogImplBuilder;
  onBottomMarginChanged(body: string): ColorDialogImplBuilder;
  onBottomPaddingChanged(body: string): ColorDialogImplBuilder;
  onClipChanged(body: string): ColorDialogImplBuilder;
  onClosePolicyChanged(body: string): ColorDialogImplBuilder;
  onClosed(body: string): ColorDialogImplBuilder;
  onColorChanged(body: string): ColorDialogImplBuilder;
  onContentChildrenChanged(body: string): ColorDialogImplBuilder;
  onContentHeightChanged(body: string): ColorDialogImplBuilder;
  onContentItemChanged(body: string): ColorDialogImplBuilder;
  onContentWidthChanged(body: string): ColorDialogImplBuilder;
  onDimChanged(body: string): ColorDialogImplBuilder;
  onDiscarded(body: string): ColorDialogImplBuilder;
  onEnabledChanged(body: string): ColorDialogImplBuilder;
  onEnterChanged(body: string): ColorDialogImplBuilder;
  onExitChanged(body: string): ColorDialogImplBuilder;
  onFocusChanged(body: string): ColorDialogImplBuilder;
  onFontChanged(body: string): ColorDialogImplBuilder;
  onFooterChanged(body: string): ColorDialogImplBuilder;
  onHeaderChanged(body: string): ColorDialogImplBuilder;
  onHeightChanged(body: string): ColorDialogImplBuilder;
  onHelpRequested(body: string): ColorDialogImplBuilder;
  onHorizontalPaddingChanged(body: string): ColorDialogImplBuilder;
  onImplicitBackgroundHeightChanged(body: string): ColorDialogImplBuilder;
  onImplicitBackgroundWidthChanged(body: string): ColorDialogImplBuilder;
  onImplicitContentHeightChanged(body: string): ColorDialogImplBuilder;
  onImplicitContentWidthChanged(body: string): ColorDialogImplBuilder;
  onImplicitFooterHeightChanged(body: string): ColorDialogImplBuilder;
  onImplicitFooterWidthChanged(body: string): ColorDialogImplBuilder;
  onImplicitHeaderHeightChanged(body: string): ColorDialogImplBuilder;
  onImplicitHeaderWidthChanged(body: string): ColorDialogImplBuilder;
  onImplicitHeightChanged(body: string): ColorDialogImplBuilder;
  onImplicitWidthChanged(body: string): ColorDialogImplBuilder;
  onLeftInsetChanged(body: string): ColorDialogImplBuilder;
  onLeftMarginChanged(body: string): ColorDialogImplBuilder;
  onLeftPaddingChanged(body: string): ColorDialogImplBuilder;
  onLocaleChanged(body: string): ColorDialogImplBuilder;
  onMarginsChanged(body: string): ColorDialogImplBuilder;
  onMirroredChanged(body: string): ColorDialogImplBuilder;
  onModalChanged(body: string): ColorDialogImplBuilder;
  onObjectNameChanged(body: string): ColorDialogImplBuilder;
  onOpacityChanged(body: string): ColorDialogImplBuilder;
  onOpened(body: string): ColorDialogImplBuilder;
  onOpenedChanged(body: string): ColorDialogImplBuilder;
  onPaddingChanged(body: string): ColorDialogImplBuilder;
  onPaletteChanged(body: string): ColorDialogImplBuilder;
  onPaletteCreated(body: string): ColorDialogImplBuilder;
  onParentChanged(body: string): ColorDialogImplBuilder;
  onPopupTypeChanged(body: string): ColorDialogImplBuilder;
  onRejected(body: string): ColorDialogImplBuilder;
  onReset(body: string): ColorDialogImplBuilder;
  onResultChanged(body: string): ColorDialogImplBuilder;
  onRightInsetChanged(body: string): ColorDialogImplBuilder;
  onRightMarginChanged(body: string): ColorDialogImplBuilder;
  onRightPaddingChanged(body: string): ColorDialogImplBuilder;
  onScaleChanged(body: string): ColorDialogImplBuilder;
  onSpacingChanged(body: string): ColorDialogImplBuilder;
  onSpecChanged(body: string): ColorDialogImplBuilder;
  onStandardButtonsChanged(body: string): ColorDialogImplBuilder;
  onTitleChanged(body: string): ColorDialogImplBuilder;
  onTopInsetChanged(body: string): ColorDialogImplBuilder;
  onTopMarginChanged(body: string): ColorDialogImplBuilder;
  onTopPaddingChanged(body: string): ColorDialogImplBuilder;
  onVerticalPaddingChanged(body: string): ColorDialogImplBuilder;
  onVisibleChanged(body: string): ColorDialogImplBuilder;
  onWidthChanged(body: string): ColorDialogImplBuilder;
  onWindowChanged(body: string): ColorDialogImplBuilder;
  onXChanged(body: string): ColorDialogImplBuilder;
  onYChanged(body: string): ColorDialogImplBuilder;
  onZChanged(body: string): ColorDialogImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ColorDialogImplBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): ColorDialogImplBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): ColorDialogImplBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): ColorDialogImplBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): ColorDialogImplBuilder;
  messageDialogImpl(setup: (b: MessageDialogImplAttachedBuilder) => void): ColorDialogImplBuilder;
}

const COLORDIALOGIMPL_META: TypeMetadata = {
  typeName: 'ColorDialogImpl',
  properties: [
    { name: 'alpha', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'blue', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomMargin', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'closePolicy', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'dim', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'enter', hasValue: true, hasBinding: true },
    { name: 'exit', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'footer', hasValue: true, hasBinding: true },
    { name: 'green', hasValue: true, hasBinding: true },
    { name: 'header', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hue', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'isHsl', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftMargin', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'lightness', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'margins', hasValue: true, hasBinding: true },
    { name: 'modal', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'popupType', hasValue: true, hasBinding: true },
    { name: 'red', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'saturation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'standardButtons', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topMargin', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAboutToHide', paramCount: 0 },
    { handlerName: 'onAboutToShow', paramCount: 0 },
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 0 },
    { handlerName: 'onApplied', paramCount: 0 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomMarginChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onClipChanged', paramCount: 0 },
    { handlerName: 'onClosePolicyChanged', paramCount: 0 },
    { handlerName: 'onClosed', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onDimChanged', paramCount: 0 },
    { handlerName: 'onDiscarded', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEnterChanged', paramCount: 0 },
    { handlerName: 'onExitChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onFooterChanged', paramCount: 0 },
    { handlerName: 'onHeaderChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHelpRequested', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitFooterHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitFooterWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeaderHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeaderWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftMarginChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMarginsChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onModalChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOpened', paramCount: 0 },
    { handlerName: 'onOpenedChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPopupTypeChanged', paramCount: 0 },
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onReset', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightMarginChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onSpecChanged', paramCount: 0 },
    { handlerName: 'onStandardButtonsChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopMarginChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
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
        { name: 'centerIn', hasValue: true, hasBinding: true },
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

export function ColorDialogImpl(): ColorDialogImplBuilder {
  return createFluentBuilder('ColorDialogImpl', COLORDIALOGIMPL_META) as unknown as ColorDialogImplBuilder;
}

export namespace ColorDialogImpl {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('ColorDialogImpl', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken('ColorDialogImpl', 'ClosePolicy', 'CloseOnPressOutside');
    export const CloseOnPressOutsideParent = createEnumToken('ColorDialogImpl', 'ClosePolicy', 'CloseOnPressOutsideParent');
    export const CloseOnReleaseOutside = createEnumToken('ColorDialogImpl', 'ClosePolicy', 'CloseOnReleaseOutside');
    export const CloseOnReleaseOutsideParent = createEnumToken('ColorDialogImpl', 'ClosePolicy', 'CloseOnReleaseOutsideParent');
    export const CloseOnEscape = createEnumToken('ColorDialogImpl', 'ClosePolicy', 'CloseOnEscape');
  }
  export namespace PopupType {
    export const Item = createEnumToken('ColorDialogImpl', 'PopupType', 'Item');
    export const Window = createEnumToken('ColorDialogImpl', 'PopupType', 'Window');
    export const Native = createEnumToken('ColorDialogImpl', 'PopupType', 'Native');
  }
  export namespace StandardCode {
    export const Rejected = createEnumToken('ColorDialogImpl', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('ColorDialogImpl', 'StandardCode', 'Accepted');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ColorDialogImpl', 'TransformOrigin', 'BottomRight');
  }
}
