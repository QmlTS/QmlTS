// AUTO-GENERATED — DO NOT EDIT
// Type: FontDialogImpl
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
import type { AnchorsBuilder } from '../QtQuick.Templates/QQuickPopupAnchors.js';
import type { ColorDialogImplAttachedBuilder } from './QQuickColorDialogImplAttached.js';
import type { FileDialogImplAttachedBuilder } from './QQuickFileDialogImplAttached.js';
import type { FolderDialogImplAttachedBuilder } from './QQuickFolderDialogImplAttached.js';
import type { FontDialogImplAttachedBuilder } from './QQuickFontDialogImplAttached.js';
import type { MessageDialogImplAttachedBuilder } from './QQuickMessageDialogImplAttached.js';
export interface FontDialogImplBuilder {
  id(id: string): FontDialogImplBuilder;
  child(obj: QmlObjectBuilder): FontDialogImplBuilder;
  children(...objs: QmlObjectBuilder[]): FontDialogImplBuilder;

  background(value: ItemBuilder): FontDialogImplBuilder;
  backgroundBind(expr: string): FontDialogImplBuilder;
  bottomInset(value: number): FontDialogImplBuilder;
  bottomInsetBind(expr: string): FontDialogImplBuilder;
  bottomMargin(value: number): FontDialogImplBuilder;
  bottomMarginBind(expr: string): FontDialogImplBuilder;
  bottomPadding(value: number): FontDialogImplBuilder;
  bottomPaddingBind(expr: string): FontDialogImplBuilder;
  clip(value: boolean): FontDialogImplBuilder;
  clipBind(expr: string): FontDialogImplBuilder;
  closePolicy(value: QmlEnumToken): FontDialogImplBuilder;
  closePolicyBind(expr: string): FontDialogImplBuilder;
  contentHeight(value: number): FontDialogImplBuilder;
  contentHeightBind(expr: string): FontDialogImplBuilder;
  contentItem(value: ItemBuilder): FontDialogImplBuilder;
  contentItemBind(expr: string): FontDialogImplBuilder;
  contentWidth(value: number): FontDialogImplBuilder;
  contentWidthBind(expr: string): FontDialogImplBuilder;
  currentFont(value: QmlFont): FontDialogImplBuilder;
  currentFontBind(expr: string): FontDialogImplBuilder;
  dim(value: boolean): FontDialogImplBuilder;
  dimBind(expr: string): FontDialogImplBuilder;
  enabled(value: boolean): FontDialogImplBuilder;
  enabledBind(expr: string): FontDialogImplBuilder;
  enter(value: TransitionBuilder): FontDialogImplBuilder;
  enterBind(expr: string): FontDialogImplBuilder;
  exit(value: TransitionBuilder): FontDialogImplBuilder;
  exitBind(expr: string): FontDialogImplBuilder;
  focus(value: boolean): FontDialogImplBuilder;
  focusBind(expr: string): FontDialogImplBuilder;
  font(value: QmlFont): FontDialogImplBuilder;
  fontBind(expr: string): FontDialogImplBuilder;
  footer(value: ItemBuilder): FontDialogImplBuilder;
  footerBind(expr: string): FontDialogImplBuilder;
  header(value: ItemBuilder): FontDialogImplBuilder;
  headerBind(expr: string): FontDialogImplBuilder;
  height(value: number): FontDialogImplBuilder;
  heightBind(expr: string): FontDialogImplBuilder;
  horizontalPadding(value: number): FontDialogImplBuilder;
  horizontalPaddingBind(expr: string): FontDialogImplBuilder;
  implicitHeight(value: number): FontDialogImplBuilder;
  implicitHeightBind(expr: string): FontDialogImplBuilder;
  implicitWidth(value: number): FontDialogImplBuilder;
  implicitWidthBind(expr: string): FontDialogImplBuilder;
  leftInset(value: number): FontDialogImplBuilder;
  leftInsetBind(expr: string): FontDialogImplBuilder;
  leftMargin(value: number): FontDialogImplBuilder;
  leftMarginBind(expr: string): FontDialogImplBuilder;
  leftPadding(value: number): FontDialogImplBuilder;
  leftPaddingBind(expr: string): FontDialogImplBuilder;
  locale(value: string): FontDialogImplBuilder;
  localeBind(expr: string): FontDialogImplBuilder;
  margins(value: number): FontDialogImplBuilder;
  marginsBind(expr: string): FontDialogImplBuilder;
  modal(value: boolean): FontDialogImplBuilder;
  modalBind(expr: string): FontDialogImplBuilder;
  objectName(value: string): FontDialogImplBuilder;
  objectNameBind(expr: string): FontDialogImplBuilder;
  opacity(value: number): FontDialogImplBuilder;
  opacityBind(expr: string): FontDialogImplBuilder;
  padding(value: number): FontDialogImplBuilder;
  paddingBind(expr: string): FontDialogImplBuilder;
  palette(value: PaletteBuilder): FontDialogImplBuilder;
  paletteBind(expr: string): FontDialogImplBuilder;
  parent(value: ItemBuilder): FontDialogImplBuilder;
  parentBind(expr: string): FontDialogImplBuilder;
  popupType(value: QmlEnumToken): FontDialogImplBuilder;
  popupTypeBind(expr: string): FontDialogImplBuilder;
  result(value: number): FontDialogImplBuilder;
  resultBind(expr: string): FontDialogImplBuilder;
  rightInset(value: number): FontDialogImplBuilder;
  rightInsetBind(expr: string): FontDialogImplBuilder;
  rightMargin(value: number): FontDialogImplBuilder;
  rightMarginBind(expr: string): FontDialogImplBuilder;
  rightPadding(value: number): FontDialogImplBuilder;
  rightPaddingBind(expr: string): FontDialogImplBuilder;
  scale(value: number): FontDialogImplBuilder;
  scaleBind(expr: string): FontDialogImplBuilder;
  spacing(value: number): FontDialogImplBuilder;
  spacingBind(expr: string): FontDialogImplBuilder;
  standardButtons(value: QmlEnumToken): FontDialogImplBuilder;
  standardButtonsBind(expr: string): FontDialogImplBuilder;
  title(value: string): FontDialogImplBuilder;
  titleBind(expr: string): FontDialogImplBuilder;
  topInset(value: number): FontDialogImplBuilder;
  topInsetBind(expr: string): FontDialogImplBuilder;
  topMargin(value: number): FontDialogImplBuilder;
  topMarginBind(expr: string): FontDialogImplBuilder;
  topPadding(value: number): FontDialogImplBuilder;
  topPaddingBind(expr: string): FontDialogImplBuilder;
  transformOrigin(value: QmlEnumToken): FontDialogImplBuilder;
  transformOriginBind(expr: string): FontDialogImplBuilder;
  verticalPadding(value: number): FontDialogImplBuilder;
  verticalPaddingBind(expr: string): FontDialogImplBuilder;
  visible(value: boolean): FontDialogImplBuilder;
  visibleBind(expr: string): FontDialogImplBuilder;
  width(value: number): FontDialogImplBuilder;
  widthBind(expr: string): FontDialogImplBuilder;
  x(value: number): FontDialogImplBuilder;
  xBind(expr: string): FontDialogImplBuilder;
  y(value: number): FontDialogImplBuilder;
  yBind(expr: string): FontDialogImplBuilder;
  z(value: number): FontDialogImplBuilder;
  zBind(expr: string): FontDialogImplBuilder;
  onAboutToHide(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onAboutToShow(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onAccepted(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onApplied(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onBottomMarginChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onClipChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onClosePolicyChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onClosed(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onContentChildrenChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onCurrentFontChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onDimChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onDiscarded(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onEnterChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onExitChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onFontChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onFooterChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onHeaderChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onHelpRequested(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitFooterHeightChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitFooterWidthChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitHeaderHeightChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitHeaderWidthChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onLeftMarginChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onMarginsChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onModalChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onOpened(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onOpenedChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onOptionsChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onPopupTypeChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onRejected(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onReset(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onResultChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onRightMarginChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onStandardButtonsChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onTitleChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onTopMarginChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onXChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onYChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  onZChanged(handler: DslSignalHandlerValue): FontDialogImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FontDialogImplBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): FontDialogImplBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): FontDialogImplBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): FontDialogImplBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): FontDialogImplBuilder;
  messageDialogImpl(setup: (b: MessageDialogImplAttachedBuilder) => void): FontDialogImplBuilder;
}

const FONTDIALOGIMPL_META: TypeMetadata = {
  typeName: 'FontDialogImpl',
  properties: [
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomMargin', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'closePolicy', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'currentFont', hasValue: true, hasBinding: true },
    { name: 'dim', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'enter', hasValue: true, hasBinding: true },
    { name: 'exit', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'footer', hasValue: true, hasBinding: true },
    { name: 'header', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftMargin', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'margins', hasValue: true, hasBinding: true },
    { name: 'modal', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'popupType', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'standardButtons', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topMargin', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
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
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onCurrentFontChanged', paramCount: 1 },
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
    { handlerName: 'onOptionsChanged', paramCount: 0 },
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
      properties: [{ name: 'centerIn', hasValue: true, hasBinding: true }],
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

export function FontDialogImpl(): FontDialogImplBuilder {
  return createFluentBuilder(
    'FontDialogImpl',
    FONTDIALOGIMPL_META,
  ) as unknown as FontDialogImplBuilder;
}

export namespace FontDialogImpl {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('FontDialogImpl', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'FontDialogImpl',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'FontDialogImpl',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'FontDialogImpl',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'FontDialogImpl',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
    export const CloseOnEscape = createEnumToken('FontDialogImpl', 'ClosePolicy', 'CloseOnEscape');
  }
  export namespace PopupType {
    export const Item = createEnumToken('FontDialogImpl', 'PopupType', 'Item');
    export const Window = createEnumToken('FontDialogImpl', 'PopupType', 'Window');
    export const Native = createEnumToken('FontDialogImpl', 'PopupType', 'Native');
  }
  export namespace StandardCode {
    export const Rejected = createEnumToken('FontDialogImpl', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('FontDialogImpl', 'StandardCode', 'Accepted');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FontDialogImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FontDialogImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FontDialogImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FontDialogImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FontDialogImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FontDialogImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('FontDialogImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('FontDialogImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('FontDialogImpl', 'TransformOrigin', 'BottomRight');
  }
}
