// AUTO-GENERATED — DO NOT EDIT
// Type: FolderDialogImpl
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlUrl,
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
export interface FolderDialogImplBuilder {
  id(id: string): FolderDialogImplBuilder;
  child(obj: QmlObjectBuilder): FolderDialogImplBuilder;

  background(value: ItemBuilder): FolderDialogImplBuilder;
  backgroundBind(expr: string): FolderDialogImplBuilder;
  bottomInset(value: number): FolderDialogImplBuilder;
  bottomInsetBind(expr: string): FolderDialogImplBuilder;
  bottomMargin(value: number): FolderDialogImplBuilder;
  bottomMarginBind(expr: string): FolderDialogImplBuilder;
  bottomPadding(value: number): FolderDialogImplBuilder;
  bottomPaddingBind(expr: string): FolderDialogImplBuilder;
  clip(value: boolean): FolderDialogImplBuilder;
  clipBind(expr: string): FolderDialogImplBuilder;
  closePolicy(value: QmlEnumToken): FolderDialogImplBuilder;
  closePolicyBind(expr: string): FolderDialogImplBuilder;
  contentHeight(value: number): FolderDialogImplBuilder;
  contentHeightBind(expr: string): FolderDialogImplBuilder;
  contentItem(value: ItemBuilder): FolderDialogImplBuilder;
  contentItemBind(expr: string): FolderDialogImplBuilder;
  contentWidth(value: number): FolderDialogImplBuilder;
  contentWidthBind(expr: string): FolderDialogImplBuilder;
  currentFolder(value: QmlUrl): FolderDialogImplBuilder;
  currentFolderBind(expr: string): FolderDialogImplBuilder;
  dim(value: boolean): FolderDialogImplBuilder;
  dimBind(expr: string): FolderDialogImplBuilder;
  enabled(value: boolean): FolderDialogImplBuilder;
  enabledBind(expr: string): FolderDialogImplBuilder;
  enter(value: TransitionBuilder): FolderDialogImplBuilder;
  enterBind(expr: string): FolderDialogImplBuilder;
  exit(value: TransitionBuilder): FolderDialogImplBuilder;
  exitBind(expr: string): FolderDialogImplBuilder;
  focus(value: boolean): FolderDialogImplBuilder;
  focusBind(expr: string): FolderDialogImplBuilder;
  font(value: QmlFont): FolderDialogImplBuilder;
  fontBind(expr: string): FolderDialogImplBuilder;
  footer(value: ItemBuilder): FolderDialogImplBuilder;
  footerBind(expr: string): FolderDialogImplBuilder;
  header(value: ItemBuilder): FolderDialogImplBuilder;
  headerBind(expr: string): FolderDialogImplBuilder;
  height(value: number): FolderDialogImplBuilder;
  heightBind(expr: string): FolderDialogImplBuilder;
  horizontalPadding(value: number): FolderDialogImplBuilder;
  horizontalPaddingBind(expr: string): FolderDialogImplBuilder;
  implicitHeight(value: number): FolderDialogImplBuilder;
  implicitHeightBind(expr: string): FolderDialogImplBuilder;
  implicitWidth(value: number): FolderDialogImplBuilder;
  implicitWidthBind(expr: string): FolderDialogImplBuilder;
  leftInset(value: number): FolderDialogImplBuilder;
  leftInsetBind(expr: string): FolderDialogImplBuilder;
  leftMargin(value: number): FolderDialogImplBuilder;
  leftMarginBind(expr: string): FolderDialogImplBuilder;
  leftPadding(value: number): FolderDialogImplBuilder;
  leftPaddingBind(expr: string): FolderDialogImplBuilder;
  locale(value: string): FolderDialogImplBuilder;
  localeBind(expr: string): FolderDialogImplBuilder;
  margins(value: number): FolderDialogImplBuilder;
  marginsBind(expr: string): FolderDialogImplBuilder;
  modal(value: boolean): FolderDialogImplBuilder;
  modalBind(expr: string): FolderDialogImplBuilder;
  objectName(value: string): FolderDialogImplBuilder;
  objectNameBind(expr: string): FolderDialogImplBuilder;
  opacity(value: number): FolderDialogImplBuilder;
  opacityBind(expr: string): FolderDialogImplBuilder;
  padding(value: number): FolderDialogImplBuilder;
  paddingBind(expr: string): FolderDialogImplBuilder;
  palette(value: PaletteBuilder): FolderDialogImplBuilder;
  paletteBind(expr: string): FolderDialogImplBuilder;
  parent(value: ItemBuilder): FolderDialogImplBuilder;
  parentBind(expr: string): FolderDialogImplBuilder;
  popupType(value: QmlEnumToken): FolderDialogImplBuilder;
  popupTypeBind(expr: string): FolderDialogImplBuilder;
  result(value: number): FolderDialogImplBuilder;
  resultBind(expr: string): FolderDialogImplBuilder;
  rightInset(value: number): FolderDialogImplBuilder;
  rightInsetBind(expr: string): FolderDialogImplBuilder;
  rightMargin(value: number): FolderDialogImplBuilder;
  rightMarginBind(expr: string): FolderDialogImplBuilder;
  rightPadding(value: number): FolderDialogImplBuilder;
  rightPaddingBind(expr: string): FolderDialogImplBuilder;
  scale(value: number): FolderDialogImplBuilder;
  scaleBind(expr: string): FolderDialogImplBuilder;
  selectedFolder(value: QmlUrl): FolderDialogImplBuilder;
  selectedFolderBind(expr: string): FolderDialogImplBuilder;
  spacing(value: number): FolderDialogImplBuilder;
  spacingBind(expr: string): FolderDialogImplBuilder;
  standardButtons(value: QmlEnumToken): FolderDialogImplBuilder;
  standardButtonsBind(expr: string): FolderDialogImplBuilder;
  title(value: string): FolderDialogImplBuilder;
  titleBind(expr: string): FolderDialogImplBuilder;
  topInset(value: number): FolderDialogImplBuilder;
  topInsetBind(expr: string): FolderDialogImplBuilder;
  topMargin(value: number): FolderDialogImplBuilder;
  topMarginBind(expr: string): FolderDialogImplBuilder;
  topPadding(value: number): FolderDialogImplBuilder;
  topPaddingBind(expr: string): FolderDialogImplBuilder;
  transformOrigin(value: QmlEnumToken): FolderDialogImplBuilder;
  transformOriginBind(expr: string): FolderDialogImplBuilder;
  verticalPadding(value: number): FolderDialogImplBuilder;
  verticalPaddingBind(expr: string): FolderDialogImplBuilder;
  visible(value: boolean): FolderDialogImplBuilder;
  visibleBind(expr: string): FolderDialogImplBuilder;
  width(value: number): FolderDialogImplBuilder;
  widthBind(expr: string): FolderDialogImplBuilder;
  x(value: number): FolderDialogImplBuilder;
  xBind(expr: string): FolderDialogImplBuilder;
  y(value: number): FolderDialogImplBuilder;
  yBind(expr: string): FolderDialogImplBuilder;
  z(value: number): FolderDialogImplBuilder;
  zBind(expr: string): FolderDialogImplBuilder;
  onAboutToHide(body: string): FolderDialogImplBuilder;
  onAboutToShow(body: string): FolderDialogImplBuilder;
  onAccepted(body: string): FolderDialogImplBuilder;
  onActiveFocusChanged(body: string): FolderDialogImplBuilder;
  onApplied(body: string): FolderDialogImplBuilder;
  onAvailableHeightChanged(body: string): FolderDialogImplBuilder;
  onAvailableWidthChanged(body: string): FolderDialogImplBuilder;
  onBackgroundChanged(body: string): FolderDialogImplBuilder;
  onBottomInsetChanged(body: string): FolderDialogImplBuilder;
  onBottomMarginChanged(body: string): FolderDialogImplBuilder;
  onBottomPaddingChanged(body: string): FolderDialogImplBuilder;
  onClipChanged(body: string): FolderDialogImplBuilder;
  onClosePolicyChanged(body: string): FolderDialogImplBuilder;
  onClosed(body: string): FolderDialogImplBuilder;
  onContentChildrenChanged(body: string): FolderDialogImplBuilder;
  onContentHeightChanged(body: string): FolderDialogImplBuilder;
  onContentItemChanged(body: string): FolderDialogImplBuilder;
  onContentWidthChanged(body: string): FolderDialogImplBuilder;
  onCurrentFolderChanged(body: string): FolderDialogImplBuilder;
  onDimChanged(body: string): FolderDialogImplBuilder;
  onDiscarded(body: string): FolderDialogImplBuilder;
  onEnabledChanged(body: string): FolderDialogImplBuilder;
  onEnterChanged(body: string): FolderDialogImplBuilder;
  onExitChanged(body: string): FolderDialogImplBuilder;
  onFocusChanged(body: string): FolderDialogImplBuilder;
  onFontChanged(body: string): FolderDialogImplBuilder;
  onFooterChanged(body: string): FolderDialogImplBuilder;
  onHeaderChanged(body: string): FolderDialogImplBuilder;
  onHeightChanged(body: string): FolderDialogImplBuilder;
  onHelpRequested(body: string): FolderDialogImplBuilder;
  onHorizontalPaddingChanged(body: string): FolderDialogImplBuilder;
  onImplicitBackgroundHeightChanged(body: string): FolderDialogImplBuilder;
  onImplicitBackgroundWidthChanged(body: string): FolderDialogImplBuilder;
  onImplicitContentHeightChanged(body: string): FolderDialogImplBuilder;
  onImplicitContentWidthChanged(body: string): FolderDialogImplBuilder;
  onImplicitFooterHeightChanged(body: string): FolderDialogImplBuilder;
  onImplicitFooterWidthChanged(body: string): FolderDialogImplBuilder;
  onImplicitHeaderHeightChanged(body: string): FolderDialogImplBuilder;
  onImplicitHeaderWidthChanged(body: string): FolderDialogImplBuilder;
  onImplicitHeightChanged(body: string): FolderDialogImplBuilder;
  onImplicitWidthChanged(body: string): FolderDialogImplBuilder;
  onLeftInsetChanged(body: string): FolderDialogImplBuilder;
  onLeftMarginChanged(body: string): FolderDialogImplBuilder;
  onLeftPaddingChanged(body: string): FolderDialogImplBuilder;
  onLocaleChanged(body: string): FolderDialogImplBuilder;
  onMarginsChanged(body: string): FolderDialogImplBuilder;
  onMirroredChanged(body: string): FolderDialogImplBuilder;
  onModalChanged(body: string): FolderDialogImplBuilder;
  onNameFiltersChanged(body: string): FolderDialogImplBuilder;
  onObjectNameChanged(body: string): FolderDialogImplBuilder;
  onOpacityChanged(body: string): FolderDialogImplBuilder;
  onOpened(body: string): FolderDialogImplBuilder;
  onOpenedChanged(body: string): FolderDialogImplBuilder;
  onPaddingChanged(body: string): FolderDialogImplBuilder;
  onPaletteChanged(body: string): FolderDialogImplBuilder;
  onPaletteCreated(body: string): FolderDialogImplBuilder;
  onParentChanged(body: string): FolderDialogImplBuilder;
  onPopupTypeChanged(body: string): FolderDialogImplBuilder;
  onRejected(body: string): FolderDialogImplBuilder;
  onReset(body: string): FolderDialogImplBuilder;
  onResultChanged(body: string): FolderDialogImplBuilder;
  onRightInsetChanged(body: string): FolderDialogImplBuilder;
  onRightMarginChanged(body: string): FolderDialogImplBuilder;
  onRightPaddingChanged(body: string): FolderDialogImplBuilder;
  onScaleChanged(body: string): FolderDialogImplBuilder;
  onSelectedFolderChanged(body: string): FolderDialogImplBuilder;
  onSpacingChanged(body: string): FolderDialogImplBuilder;
  onStandardButtonsChanged(body: string): FolderDialogImplBuilder;
  onTitleChanged(body: string): FolderDialogImplBuilder;
  onTopInsetChanged(body: string): FolderDialogImplBuilder;
  onTopMarginChanged(body: string): FolderDialogImplBuilder;
  onTopPaddingChanged(body: string): FolderDialogImplBuilder;
  onVerticalPaddingChanged(body: string): FolderDialogImplBuilder;
  onVisibleChanged(body: string): FolderDialogImplBuilder;
  onWidthChanged(body: string): FolderDialogImplBuilder;
  onWindowChanged(body: string): FolderDialogImplBuilder;
  onXChanged(body: string): FolderDialogImplBuilder;
  onYChanged(body: string): FolderDialogImplBuilder;
  onZChanged(body: string): FolderDialogImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FolderDialogImplBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): FolderDialogImplBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): FolderDialogImplBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): FolderDialogImplBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): FolderDialogImplBuilder;
  messageDialogImpl(setup: (b: MessageDialogImplAttachedBuilder) => void): FolderDialogImplBuilder;
}

const FOLDERDIALOGIMPL_META: TypeMetadata = {
  typeName: 'FolderDialogImpl',
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
    { name: 'currentFolder', hasValue: true, hasBinding: true },
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
    { name: 'selectedFolder', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCurrentFolderChanged', paramCount: 1 },
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
    { handlerName: 'onNameFiltersChanged', paramCount: 0 },
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
    { handlerName: 'onSelectedFolderChanged', paramCount: 1 },
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

export function FolderDialogImpl(): FolderDialogImplBuilder {
  return createFluentBuilder(
    'FolderDialogImpl',
    FOLDERDIALOGIMPL_META,
  ) as unknown as FolderDialogImplBuilder;
}

export namespace FolderDialogImpl {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('FolderDialogImpl', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'FolderDialogImpl',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'FolderDialogImpl',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'FolderDialogImpl',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'FolderDialogImpl',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
    export const CloseOnEscape = createEnumToken(
      'FolderDialogImpl',
      'ClosePolicy',
      'CloseOnEscape',
    );
  }
  export namespace PopupType {
    export const Item = createEnumToken('FolderDialogImpl', 'PopupType', 'Item');
    export const Window = createEnumToken('FolderDialogImpl', 'PopupType', 'Window');
    export const Native = createEnumToken('FolderDialogImpl', 'PopupType', 'Native');
  }
  export namespace StandardCode {
    export const Rejected = createEnumToken('FolderDialogImpl', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('FolderDialogImpl', 'StandardCode', 'Accepted');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FolderDialogImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FolderDialogImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FolderDialogImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FolderDialogImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FolderDialogImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FolderDialogImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('FolderDialogImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('FolderDialogImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'FolderDialogImpl',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
