// AUTO-GENERATED — DO NOT EDIT
// Type: MessageDialogImpl
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
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
export interface MessageDialogImplBuilder {
  id(id: string): MessageDialogImplBuilder;
  child(obj: QmlObjectBuilder): MessageDialogImplBuilder;

  background(value: ItemBuilder): MessageDialogImplBuilder;
  backgroundBind(expr: string): MessageDialogImplBuilder;
  bottomInset(value: number): MessageDialogImplBuilder;
  bottomInsetBind(expr: string): MessageDialogImplBuilder;
  bottomMargin(value: number): MessageDialogImplBuilder;
  bottomMarginBind(expr: string): MessageDialogImplBuilder;
  bottomPadding(value: number): MessageDialogImplBuilder;
  bottomPaddingBind(expr: string): MessageDialogImplBuilder;
  clip(value: boolean): MessageDialogImplBuilder;
  clipBind(expr: string): MessageDialogImplBuilder;
  closePolicy(value: QmlEnumToken): MessageDialogImplBuilder;
  closePolicyBind(expr: string): MessageDialogImplBuilder;
  contentHeight(value: number): MessageDialogImplBuilder;
  contentHeightBind(expr: string): MessageDialogImplBuilder;
  contentItem(value: ItemBuilder): MessageDialogImplBuilder;
  contentItemBind(expr: string): MessageDialogImplBuilder;
  contentWidth(value: number): MessageDialogImplBuilder;
  contentWidthBind(expr: string): MessageDialogImplBuilder;
  dim(value: boolean): MessageDialogImplBuilder;
  dimBind(expr: string): MessageDialogImplBuilder;
  enabled(value: boolean): MessageDialogImplBuilder;
  enabledBind(expr: string): MessageDialogImplBuilder;
  enter(value: TransitionBuilder): MessageDialogImplBuilder;
  enterBind(expr: string): MessageDialogImplBuilder;
  exit(value: TransitionBuilder): MessageDialogImplBuilder;
  exitBind(expr: string): MessageDialogImplBuilder;
  focus(value: boolean): MessageDialogImplBuilder;
  focusBind(expr: string): MessageDialogImplBuilder;
  font(value: QmlFont): MessageDialogImplBuilder;
  fontBind(expr: string): MessageDialogImplBuilder;
  footer(value: ItemBuilder): MessageDialogImplBuilder;
  footerBind(expr: string): MessageDialogImplBuilder;
  header(value: ItemBuilder): MessageDialogImplBuilder;
  headerBind(expr: string): MessageDialogImplBuilder;
  height(value: number): MessageDialogImplBuilder;
  heightBind(expr: string): MessageDialogImplBuilder;
  horizontalPadding(value: number): MessageDialogImplBuilder;
  horizontalPaddingBind(expr: string): MessageDialogImplBuilder;
  implicitHeight(value: number): MessageDialogImplBuilder;
  implicitHeightBind(expr: string): MessageDialogImplBuilder;
  implicitWidth(value: number): MessageDialogImplBuilder;
  implicitWidthBind(expr: string): MessageDialogImplBuilder;
  leftInset(value: number): MessageDialogImplBuilder;
  leftInsetBind(expr: string): MessageDialogImplBuilder;
  leftMargin(value: number): MessageDialogImplBuilder;
  leftMarginBind(expr: string): MessageDialogImplBuilder;
  leftPadding(value: number): MessageDialogImplBuilder;
  leftPaddingBind(expr: string): MessageDialogImplBuilder;
  locale(value: string): MessageDialogImplBuilder;
  localeBind(expr: string): MessageDialogImplBuilder;
  margins(value: number): MessageDialogImplBuilder;
  marginsBind(expr: string): MessageDialogImplBuilder;
  modal(value: boolean): MessageDialogImplBuilder;
  modalBind(expr: string): MessageDialogImplBuilder;
  objectName(value: string): MessageDialogImplBuilder;
  objectNameBind(expr: string): MessageDialogImplBuilder;
  opacity(value: number): MessageDialogImplBuilder;
  opacityBind(expr: string): MessageDialogImplBuilder;
  padding(value: number): MessageDialogImplBuilder;
  paddingBind(expr: string): MessageDialogImplBuilder;
  palette(value: PaletteBuilder): MessageDialogImplBuilder;
  paletteBind(expr: string): MessageDialogImplBuilder;
  parent(value: ItemBuilder): MessageDialogImplBuilder;
  parentBind(expr: string): MessageDialogImplBuilder;
  popupType(value: QmlEnumToken): MessageDialogImplBuilder;
  popupTypeBind(expr: string): MessageDialogImplBuilder;
  result(value: number): MessageDialogImplBuilder;
  resultBind(expr: string): MessageDialogImplBuilder;
  rightInset(value: number): MessageDialogImplBuilder;
  rightInsetBind(expr: string): MessageDialogImplBuilder;
  rightMargin(value: number): MessageDialogImplBuilder;
  rightMarginBind(expr: string): MessageDialogImplBuilder;
  rightPadding(value: number): MessageDialogImplBuilder;
  rightPaddingBind(expr: string): MessageDialogImplBuilder;
  scale(value: number): MessageDialogImplBuilder;
  scaleBind(expr: string): MessageDialogImplBuilder;
  spacing(value: number): MessageDialogImplBuilder;
  spacingBind(expr: string): MessageDialogImplBuilder;
  standardButtons(value: QmlEnumToken): MessageDialogImplBuilder;
  standardButtonsBind(expr: string): MessageDialogImplBuilder;
  title(value: string): MessageDialogImplBuilder;
  titleBind(expr: string): MessageDialogImplBuilder;
  topInset(value: number): MessageDialogImplBuilder;
  topInsetBind(expr: string): MessageDialogImplBuilder;
  topMargin(value: number): MessageDialogImplBuilder;
  topMarginBind(expr: string): MessageDialogImplBuilder;
  topPadding(value: number): MessageDialogImplBuilder;
  topPaddingBind(expr: string): MessageDialogImplBuilder;
  transformOrigin(value: QmlEnumToken): MessageDialogImplBuilder;
  transformOriginBind(expr: string): MessageDialogImplBuilder;
  verticalPadding(value: number): MessageDialogImplBuilder;
  verticalPaddingBind(expr: string): MessageDialogImplBuilder;
  visible(value: boolean): MessageDialogImplBuilder;
  visibleBind(expr: string): MessageDialogImplBuilder;
  width(value: number): MessageDialogImplBuilder;
  widthBind(expr: string): MessageDialogImplBuilder;
  x(value: number): MessageDialogImplBuilder;
  xBind(expr: string): MessageDialogImplBuilder;
  y(value: number): MessageDialogImplBuilder;
  yBind(expr: string): MessageDialogImplBuilder;
  z(value: number): MessageDialogImplBuilder;
  zBind(expr: string): MessageDialogImplBuilder;
  onAboutToHide(body: string): MessageDialogImplBuilder;
  onAboutToShow(body: string): MessageDialogImplBuilder;
  onAccepted(body: string): MessageDialogImplBuilder;
  onActiveFocusChanged(body: string): MessageDialogImplBuilder;
  onApplied(body: string): MessageDialogImplBuilder;
  onAvailableHeightChanged(body: string): MessageDialogImplBuilder;
  onAvailableWidthChanged(body: string): MessageDialogImplBuilder;
  onBackgroundChanged(body: string): MessageDialogImplBuilder;
  onBottomInsetChanged(body: string): MessageDialogImplBuilder;
  onBottomMarginChanged(body: string): MessageDialogImplBuilder;
  onBottomPaddingChanged(body: string): MessageDialogImplBuilder;
  onButtonClicked(body: string): MessageDialogImplBuilder;
  onClipChanged(body: string): MessageDialogImplBuilder;
  onClosePolicyChanged(body: string): MessageDialogImplBuilder;
  onClosed(body: string): MessageDialogImplBuilder;
  onContentChildrenChanged(body: string): MessageDialogImplBuilder;
  onContentHeightChanged(body: string): MessageDialogImplBuilder;
  onContentItemChanged(body: string): MessageDialogImplBuilder;
  onContentWidthChanged(body: string): MessageDialogImplBuilder;
  onDimChanged(body: string): MessageDialogImplBuilder;
  onDiscarded(body: string): MessageDialogImplBuilder;
  onEnabledChanged(body: string): MessageDialogImplBuilder;
  onEnterChanged(body: string): MessageDialogImplBuilder;
  onExitChanged(body: string): MessageDialogImplBuilder;
  onFocusChanged(body: string): MessageDialogImplBuilder;
  onFontChanged(body: string): MessageDialogImplBuilder;
  onFooterChanged(body: string): MessageDialogImplBuilder;
  onHeaderChanged(body: string): MessageDialogImplBuilder;
  onHeightChanged(body: string): MessageDialogImplBuilder;
  onHelpRequested(body: string): MessageDialogImplBuilder;
  onHorizontalPaddingChanged(body: string): MessageDialogImplBuilder;
  onImplicitBackgroundHeightChanged(body: string): MessageDialogImplBuilder;
  onImplicitBackgroundWidthChanged(body: string): MessageDialogImplBuilder;
  onImplicitContentHeightChanged(body: string): MessageDialogImplBuilder;
  onImplicitContentWidthChanged(body: string): MessageDialogImplBuilder;
  onImplicitFooterHeightChanged(body: string): MessageDialogImplBuilder;
  onImplicitFooterWidthChanged(body: string): MessageDialogImplBuilder;
  onImplicitHeaderHeightChanged(body: string): MessageDialogImplBuilder;
  onImplicitHeaderWidthChanged(body: string): MessageDialogImplBuilder;
  onImplicitHeightChanged(body: string): MessageDialogImplBuilder;
  onImplicitWidthChanged(body: string): MessageDialogImplBuilder;
  onLeftInsetChanged(body: string): MessageDialogImplBuilder;
  onLeftMarginChanged(body: string): MessageDialogImplBuilder;
  onLeftPaddingChanged(body: string): MessageDialogImplBuilder;
  onLocaleChanged(body: string): MessageDialogImplBuilder;
  onMarginsChanged(body: string): MessageDialogImplBuilder;
  onMirroredChanged(body: string): MessageDialogImplBuilder;
  onModalChanged(body: string): MessageDialogImplBuilder;
  onObjectNameChanged(body: string): MessageDialogImplBuilder;
  onOpacityChanged(body: string): MessageDialogImplBuilder;
  onOpened(body: string): MessageDialogImplBuilder;
  onOpenedChanged(body: string): MessageDialogImplBuilder;
  onOptionsChanged(body: string): MessageDialogImplBuilder;
  onPaddingChanged(body: string): MessageDialogImplBuilder;
  onPaletteChanged(body: string): MessageDialogImplBuilder;
  onPaletteCreated(body: string): MessageDialogImplBuilder;
  onParentChanged(body: string): MessageDialogImplBuilder;
  onPopupTypeChanged(body: string): MessageDialogImplBuilder;
  onRejected(body: string): MessageDialogImplBuilder;
  onReset(body: string): MessageDialogImplBuilder;
  onResultChanged(body: string): MessageDialogImplBuilder;
  onRightInsetChanged(body: string): MessageDialogImplBuilder;
  onRightMarginChanged(body: string): MessageDialogImplBuilder;
  onRightPaddingChanged(body: string): MessageDialogImplBuilder;
  onScaleChanged(body: string): MessageDialogImplBuilder;
  onShowDetailedTextChanged(body: string): MessageDialogImplBuilder;
  onSpacingChanged(body: string): MessageDialogImplBuilder;
  onStandardButtonsChanged(body: string): MessageDialogImplBuilder;
  onTitleChanged(body: string): MessageDialogImplBuilder;
  onTopInsetChanged(body: string): MessageDialogImplBuilder;
  onTopMarginChanged(body: string): MessageDialogImplBuilder;
  onTopPaddingChanged(body: string): MessageDialogImplBuilder;
  onVerticalPaddingChanged(body: string): MessageDialogImplBuilder;
  onVisibleChanged(body: string): MessageDialogImplBuilder;
  onWidthChanged(body: string): MessageDialogImplBuilder;
  onWindowChanged(body: string): MessageDialogImplBuilder;
  onXChanged(body: string): MessageDialogImplBuilder;
  onYChanged(body: string): MessageDialogImplBuilder;
  onZChanged(body: string): MessageDialogImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MessageDialogImplBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): MessageDialogImplBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): MessageDialogImplBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): MessageDialogImplBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): MessageDialogImplBuilder;
  messageDialogImpl(setup: (b: MessageDialogImplAttachedBuilder) => void): MessageDialogImplBuilder;
}

const MESSAGEDIALOGIMPL_META: TypeMetadata = {
  typeName: 'MessageDialogImpl',
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
    { handlerName: 'onButtonClicked', paramCount: 2 },
    { handlerName: 'onClipChanged', paramCount: 0 },
    { handlerName: 'onClosePolicyChanged', paramCount: 0 },
    { handlerName: 'onClosed', paramCount: 0 },
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
    { handlerName: 'onShowDetailedTextChanged', paramCount: 0 },
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

export function MessageDialogImpl(): MessageDialogImplBuilder {
  return createFluentBuilder(
    'MessageDialogImpl',
    MESSAGEDIALOGIMPL_META,
  ) as unknown as MessageDialogImplBuilder;
}

export namespace MessageDialogImpl {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('MessageDialogImpl', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'MessageDialogImpl',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'MessageDialogImpl',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'MessageDialogImpl',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'MessageDialogImpl',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
    export const CloseOnEscape = createEnumToken(
      'MessageDialogImpl',
      'ClosePolicy',
      'CloseOnEscape',
    );
  }
  export namespace PopupType {
    export const Item = createEnumToken('MessageDialogImpl', 'PopupType', 'Item');
    export const Window = createEnumToken('MessageDialogImpl', 'PopupType', 'Window');
    export const Native = createEnumToken('MessageDialogImpl', 'PopupType', 'Native');
  }
  export namespace StandardCode {
    export const Rejected = createEnumToken('MessageDialogImpl', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('MessageDialogImpl', 'StandardCode', 'Accepted');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MessageDialogImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MessageDialogImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MessageDialogImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MessageDialogImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MessageDialogImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MessageDialogImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MessageDialogImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MessageDialogImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'MessageDialogImpl',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
