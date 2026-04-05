// AUTO-GENERATED — DO NOT EDIT
// Type: FileDialogImpl
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
import type { SelectedNameFilterBuilder } from './QQuickFileNameFilter.js';
import type { FolderDialogImplAttachedBuilder } from './QQuickFolderDialogImplAttached.js';
import type { FontDialogImplAttachedBuilder } from './QQuickFontDialogImplAttached.js';
import type { MessageDialogImplAttachedBuilder } from './QQuickMessageDialogImplAttached.js';
export interface FileDialogImplBuilder {
  id(id: string): FileDialogImplBuilder;
  child(obj: QmlObjectBuilder): FileDialogImplBuilder;

  background(value: ItemBuilder): FileDialogImplBuilder;
  backgroundBind(expr: string): FileDialogImplBuilder;
  bottomInset(value: number): FileDialogImplBuilder;
  bottomInsetBind(expr: string): FileDialogImplBuilder;
  bottomMargin(value: number): FileDialogImplBuilder;
  bottomMarginBind(expr: string): FileDialogImplBuilder;
  bottomPadding(value: number): FileDialogImplBuilder;
  bottomPaddingBind(expr: string): FileDialogImplBuilder;
  clip(value: boolean): FileDialogImplBuilder;
  clipBind(expr: string): FileDialogImplBuilder;
  closePolicy(value: QmlEnumToken): FileDialogImplBuilder;
  closePolicyBind(expr: string): FileDialogImplBuilder;
  contentHeight(value: number): FileDialogImplBuilder;
  contentHeightBind(expr: string): FileDialogImplBuilder;
  contentItem(value: ItemBuilder): FileDialogImplBuilder;
  contentItemBind(expr: string): FileDialogImplBuilder;
  contentWidth(value: number): FileDialogImplBuilder;
  contentWidthBind(expr: string): FileDialogImplBuilder;
  currentFolder(value: QmlUrl): FileDialogImplBuilder;
  currentFolderBind(expr: string): FileDialogImplBuilder;
  dim(value: boolean): FileDialogImplBuilder;
  dimBind(expr: string): FileDialogImplBuilder;
  enabled(value: boolean): FileDialogImplBuilder;
  enabledBind(expr: string): FileDialogImplBuilder;
  enter(value: TransitionBuilder): FileDialogImplBuilder;
  enterBind(expr: string): FileDialogImplBuilder;
  exit(value: TransitionBuilder): FileDialogImplBuilder;
  exitBind(expr: string): FileDialogImplBuilder;
  fileName(value: string): FileDialogImplBuilder;
  fileNameBind(expr: string): FileDialogImplBuilder;
  focus(value: boolean): FileDialogImplBuilder;
  focusBind(expr: string): FileDialogImplBuilder;
  font(value: QmlFont): FileDialogImplBuilder;
  fontBind(expr: string): FileDialogImplBuilder;
  footer(value: ItemBuilder): FileDialogImplBuilder;
  footerBind(expr: string): FileDialogImplBuilder;
  header(value: ItemBuilder): FileDialogImplBuilder;
  headerBind(expr: string): FileDialogImplBuilder;
  height(value: number): FileDialogImplBuilder;
  heightBind(expr: string): FileDialogImplBuilder;
  horizontalPadding(value: number): FileDialogImplBuilder;
  horizontalPaddingBind(expr: string): FileDialogImplBuilder;
  implicitHeight(value: number): FileDialogImplBuilder;
  implicitHeightBind(expr: string): FileDialogImplBuilder;
  implicitWidth(value: number): FileDialogImplBuilder;
  implicitWidthBind(expr: string): FileDialogImplBuilder;
  leftInset(value: number): FileDialogImplBuilder;
  leftInsetBind(expr: string): FileDialogImplBuilder;
  leftMargin(value: number): FileDialogImplBuilder;
  leftMarginBind(expr: string): FileDialogImplBuilder;
  leftPadding(value: number): FileDialogImplBuilder;
  leftPaddingBind(expr: string): FileDialogImplBuilder;
  locale(value: string): FileDialogImplBuilder;
  localeBind(expr: string): FileDialogImplBuilder;
  margins(value: number): FileDialogImplBuilder;
  marginsBind(expr: string): FileDialogImplBuilder;
  modal(value: boolean): FileDialogImplBuilder;
  modalBind(expr: string): FileDialogImplBuilder;
  objectName(value: string): FileDialogImplBuilder;
  objectNameBind(expr: string): FileDialogImplBuilder;
  opacity(value: number): FileDialogImplBuilder;
  opacityBind(expr: string): FileDialogImplBuilder;
  padding(value: number): FileDialogImplBuilder;
  paddingBind(expr: string): FileDialogImplBuilder;
  palette(value: PaletteBuilder): FileDialogImplBuilder;
  paletteBind(expr: string): FileDialogImplBuilder;
  parent(value: ItemBuilder): FileDialogImplBuilder;
  parentBind(expr: string): FileDialogImplBuilder;
  popupType(value: QmlEnumToken): FileDialogImplBuilder;
  popupTypeBind(expr: string): FileDialogImplBuilder;
  result(value: number): FileDialogImplBuilder;
  resultBind(expr: string): FileDialogImplBuilder;
  rightInset(value: number): FileDialogImplBuilder;
  rightInsetBind(expr: string): FileDialogImplBuilder;
  rightMargin(value: number): FileDialogImplBuilder;
  rightMarginBind(expr: string): FileDialogImplBuilder;
  rightPadding(value: number): FileDialogImplBuilder;
  rightPaddingBind(expr: string): FileDialogImplBuilder;
  scale(value: number): FileDialogImplBuilder;
  scaleBind(expr: string): FileDialogImplBuilder;
  selectedFile(value: QmlUrl): FileDialogImplBuilder;
  selectedFileBind(expr: string): FileDialogImplBuilder;
  spacing(value: number): FileDialogImplBuilder;
  spacingBind(expr: string): FileDialogImplBuilder;
  standardButtons(value: QmlEnumToken): FileDialogImplBuilder;
  standardButtonsBind(expr: string): FileDialogImplBuilder;
  title(value: string): FileDialogImplBuilder;
  titleBind(expr: string): FileDialogImplBuilder;
  topInset(value: number): FileDialogImplBuilder;
  topInsetBind(expr: string): FileDialogImplBuilder;
  topMargin(value: number): FileDialogImplBuilder;
  topMarginBind(expr: string): FileDialogImplBuilder;
  topPadding(value: number): FileDialogImplBuilder;
  topPaddingBind(expr: string): FileDialogImplBuilder;
  transformOrigin(value: QmlEnumToken): FileDialogImplBuilder;
  transformOriginBind(expr: string): FileDialogImplBuilder;
  verticalPadding(value: number): FileDialogImplBuilder;
  verticalPaddingBind(expr: string): FileDialogImplBuilder;
  visible(value: boolean): FileDialogImplBuilder;
  visibleBind(expr: string): FileDialogImplBuilder;
  width(value: number): FileDialogImplBuilder;
  widthBind(expr: string): FileDialogImplBuilder;
  x(value: number): FileDialogImplBuilder;
  xBind(expr: string): FileDialogImplBuilder;
  y(value: number): FileDialogImplBuilder;
  yBind(expr: string): FileDialogImplBuilder;
  z(value: number): FileDialogImplBuilder;
  zBind(expr: string): FileDialogImplBuilder;
  onAboutToHide(body: string): FileDialogImplBuilder;
  onAboutToShow(body: string): FileDialogImplBuilder;
  onAccepted(body: string): FileDialogImplBuilder;
  onActiveFocusChanged(body: string): FileDialogImplBuilder;
  onApplied(body: string): FileDialogImplBuilder;
  onAvailableHeightChanged(body: string): FileDialogImplBuilder;
  onAvailableWidthChanged(body: string): FileDialogImplBuilder;
  onBackgroundChanged(body: string): FileDialogImplBuilder;
  onBottomInsetChanged(body: string): FileDialogImplBuilder;
  onBottomMarginChanged(body: string): FileDialogImplBuilder;
  onBottomPaddingChanged(body: string): FileDialogImplBuilder;
  onClipChanged(body: string): FileDialogImplBuilder;
  onClosePolicyChanged(body: string): FileDialogImplBuilder;
  onClosed(body: string): FileDialogImplBuilder;
  onContentChildrenChanged(body: string): FileDialogImplBuilder;
  onContentHeightChanged(body: string): FileDialogImplBuilder;
  onContentItemChanged(body: string): FileDialogImplBuilder;
  onContentWidthChanged(body: string): FileDialogImplBuilder;
  onCurrentFolderChanged(body: string): FileDialogImplBuilder;
  onDimChanged(body: string): FileDialogImplBuilder;
  onDiscarded(body: string): FileDialogImplBuilder;
  onEnabledChanged(body: string): FileDialogImplBuilder;
  onEnterChanged(body: string): FileDialogImplBuilder;
  onExitChanged(body: string): FileDialogImplBuilder;
  onFileSelected(body: string): FileDialogImplBuilder;
  onFilterSelected(body: string): FileDialogImplBuilder;
  onFocusChanged(body: string): FileDialogImplBuilder;
  onFontChanged(body: string): FileDialogImplBuilder;
  onFooterChanged(body: string): FileDialogImplBuilder;
  onHeaderChanged(body: string): FileDialogImplBuilder;
  onHeightChanged(body: string): FileDialogImplBuilder;
  onHelpRequested(body: string): FileDialogImplBuilder;
  onHorizontalPaddingChanged(body: string): FileDialogImplBuilder;
  onImplicitBackgroundHeightChanged(body: string): FileDialogImplBuilder;
  onImplicitBackgroundWidthChanged(body: string): FileDialogImplBuilder;
  onImplicitContentHeightChanged(body: string): FileDialogImplBuilder;
  onImplicitContentWidthChanged(body: string): FileDialogImplBuilder;
  onImplicitFooterHeightChanged(body: string): FileDialogImplBuilder;
  onImplicitFooterWidthChanged(body: string): FileDialogImplBuilder;
  onImplicitHeaderHeightChanged(body: string): FileDialogImplBuilder;
  onImplicitHeaderWidthChanged(body: string): FileDialogImplBuilder;
  onImplicitHeightChanged(body: string): FileDialogImplBuilder;
  onImplicitWidthChanged(body: string): FileDialogImplBuilder;
  onLeftInsetChanged(body: string): FileDialogImplBuilder;
  onLeftMarginChanged(body: string): FileDialogImplBuilder;
  onLeftPaddingChanged(body: string): FileDialogImplBuilder;
  onLocaleChanged(body: string): FileDialogImplBuilder;
  onMarginsChanged(body: string): FileDialogImplBuilder;
  onMirroredChanged(body: string): FileDialogImplBuilder;
  onModalChanged(body: string): FileDialogImplBuilder;
  onNameFiltersChanged(body: string): FileDialogImplBuilder;
  onObjectNameChanged(body: string): FileDialogImplBuilder;
  onOpacityChanged(body: string): FileDialogImplBuilder;
  onOpened(body: string): FileDialogImplBuilder;
  onOpenedChanged(body: string): FileDialogImplBuilder;
  onPaddingChanged(body: string): FileDialogImplBuilder;
  onPaletteChanged(body: string): FileDialogImplBuilder;
  onPaletteCreated(body: string): FileDialogImplBuilder;
  onParentChanged(body: string): FileDialogImplBuilder;
  onPopupTypeChanged(body: string): FileDialogImplBuilder;
  onRejected(body: string): FileDialogImplBuilder;
  onReset(body: string): FileDialogImplBuilder;
  onResultChanged(body: string): FileDialogImplBuilder;
  onRightInsetChanged(body: string): FileDialogImplBuilder;
  onRightMarginChanged(body: string): FileDialogImplBuilder;
  onRightPaddingChanged(body: string): FileDialogImplBuilder;
  onScaleChanged(body: string): FileDialogImplBuilder;
  onSelectedFileChanged(body: string): FileDialogImplBuilder;
  onSpacingChanged(body: string): FileDialogImplBuilder;
  onStandardButtonsChanged(body: string): FileDialogImplBuilder;
  onTitleChanged(body: string): FileDialogImplBuilder;
  onTopInsetChanged(body: string): FileDialogImplBuilder;
  onTopMarginChanged(body: string): FileDialogImplBuilder;
  onTopPaddingChanged(body: string): FileDialogImplBuilder;
  onVerticalPaddingChanged(body: string): FileDialogImplBuilder;
  onVisibleChanged(body: string): FileDialogImplBuilder;
  onWidthChanged(body: string): FileDialogImplBuilder;
  onWindowChanged(body: string): FileDialogImplBuilder;
  onXChanged(body: string): FileDialogImplBuilder;
  onYChanged(body: string): FileDialogImplBuilder;
  onZChanged(body: string): FileDialogImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FileDialogImplBuilder;
  selectedNameFilter(setup: (b: SelectedNameFilterBuilder) => void): FileDialogImplBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): FileDialogImplBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): FileDialogImplBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): FileDialogImplBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): FileDialogImplBuilder;
  messageDialogImpl(setup: (b: MessageDialogImplAttachedBuilder) => void): FileDialogImplBuilder;
}

const FILEDIALOGIMPL_META: TypeMetadata = {
  typeName: 'FileDialogImpl',
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
    { name: 'fileName', hasValue: true, hasBinding: true },
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
    { name: 'selectedFile', hasValue: true, hasBinding: true },
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
    { handlerName: 'onFileSelected', paramCount: 1 },
    { handlerName: 'onFilterSelected', paramCount: 1 },
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
    { handlerName: 'onSelectedFileChanged', paramCount: 1 },
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
    {
      methodName: 'selectedNameFilter',
      groupName: 'selectedNameFilter',
      properties: [{ name: 'index', hasValue: true, hasBinding: true }],
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

export function FileDialogImpl(): FileDialogImplBuilder {
  return createFluentBuilder(
    'FileDialogImpl',
    FILEDIALOGIMPL_META,
  ) as unknown as FileDialogImplBuilder;
}

export namespace FileDialogImpl {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('FileDialogImpl', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'FileDialogImpl',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'FileDialogImpl',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'FileDialogImpl',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'FileDialogImpl',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
    export const CloseOnEscape = createEnumToken('FileDialogImpl', 'ClosePolicy', 'CloseOnEscape');
  }
  export namespace PopupType {
    export const Item = createEnumToken('FileDialogImpl', 'PopupType', 'Item');
    export const Window = createEnumToken('FileDialogImpl', 'PopupType', 'Window');
    export const Native = createEnumToken('FileDialogImpl', 'PopupType', 'Native');
  }
  export namespace StandardCode {
    export const Rejected = createEnumToken('FileDialogImpl', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('FileDialogImpl', 'StandardCode', 'Accepted');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FileDialogImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FileDialogImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FileDialogImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FileDialogImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FileDialogImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FileDialogImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('FileDialogImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('FileDialogImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('FileDialogImpl', 'TransformOrigin', 'BottomRight');
  }
}
