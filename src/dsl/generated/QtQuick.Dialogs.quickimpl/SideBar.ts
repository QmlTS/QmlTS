// AUTO-GENERATED — DO NOT EDIT
// Type: SideBar
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
import type { DialogBuilder } from '../QtQuick.Templates/Dialog.js';
import type { ColorDialogImplAttachedBuilder } from './QQuickColorDialogImplAttached.js';
import type { FileDialogImplAttachedBuilder } from './QQuickFileDialogImplAttached.js';
import type { FolderDialogImplAttachedBuilder } from './QQuickFolderDialogImplAttached.js';
import type { FontDialogImplAttachedBuilder } from './QQuickFontDialogImplAttached.js';
import type { MessageDialogImplAttachedBuilder } from './QQuickMessageDialogImplAttached.js';
export interface SideBarBuilder {
  id(id: string): SideBarBuilder;
  child(obj: QmlObjectBuilder): SideBarBuilder;
  children(...objs: QmlObjectBuilder[]): SideBarBuilder;

  activeFocusOnTab(value: boolean): SideBarBuilder;
  activeFocusOnTabBind(expr: string): SideBarBuilder;
  addFavoriteDelegate(value: QmlComponent): SideBarBuilder;
  addFavoriteDelegateBind(expr: string): SideBarBuilder;
  antialiasing(value: boolean): SideBarBuilder;
  antialiasingBind(expr: string): SideBarBuilder;
  background(value: ItemBuilder): SideBarBuilder;
  backgroundBind(expr: string): SideBarBuilder;
  baselineOffset(value: number): SideBarBuilder;
  baselineOffsetBind(expr: string): SideBarBuilder;
  bottomInset(value: number): SideBarBuilder;
  bottomInsetBind(expr: string): SideBarBuilder;
  bottomPadding(value: number): SideBarBuilder;
  bottomPaddingBind(expr: string): SideBarBuilder;
  buttonDelegate(value: QmlComponent): SideBarBuilder;
  buttonDelegateBind(expr: string): SideBarBuilder;
  clip(value: boolean): SideBarBuilder;
  clipBind(expr: string): SideBarBuilder;
  containmentMask(value: QtObjectBuilder): SideBarBuilder;
  containmentMaskBind(expr: string): SideBarBuilder;
  contentHeight(value: number): SideBarBuilder;
  contentHeightBind(expr: string): SideBarBuilder;
  contentItem(value: ItemBuilder): SideBarBuilder;
  contentItemBind(expr: string): SideBarBuilder;
  contentWidth(value: number): SideBarBuilder;
  contentWidthBind(expr: string): SideBarBuilder;
  currentIndex(value: number): SideBarBuilder;
  currentIndexBind(expr: string): SideBarBuilder;
  dialog(value: DialogBuilder): SideBarBuilder;
  dialogBind(expr: string): SideBarBuilder;
  enabled(value: boolean): SideBarBuilder;
  enabledBind(expr: string): SideBarBuilder;
  focus(value: boolean): SideBarBuilder;
  focusBind(expr: string): SideBarBuilder;
  focusPolicy(value: QmlEnumToken): SideBarBuilder;
  focusPolicyBind(expr: string): SideBarBuilder;
  focusReason(value: QmlEnumToken): SideBarBuilder;
  focusReasonBind(expr: string): SideBarBuilder;
  folderPaths(value: QmlEnumToken): SideBarBuilder;
  folderPathsBind(expr: string): SideBarBuilder;
  font(value: QmlFont): SideBarBuilder;
  fontBind(expr: string): SideBarBuilder;
  height(value: number): SideBarBuilder;
  heightBind(expr: string): SideBarBuilder;
  horizontalPadding(value: number): SideBarBuilder;
  horizontalPaddingBind(expr: string): SideBarBuilder;
  hoverEnabled(value: boolean): SideBarBuilder;
  hoverEnabledBind(expr: string): SideBarBuilder;
  implicitHeight(value: number): SideBarBuilder;
  implicitHeightBind(expr: string): SideBarBuilder;
  implicitWidth(value: number): SideBarBuilder;
  implicitWidthBind(expr: string): SideBarBuilder;
  leftInset(value: number): SideBarBuilder;
  leftInsetBind(expr: string): SideBarBuilder;
  leftPadding(value: number): SideBarBuilder;
  leftPaddingBind(expr: string): SideBarBuilder;
  locale(value: string): SideBarBuilder;
  localeBind(expr: string): SideBarBuilder;
  objectName(value: string): SideBarBuilder;
  objectNameBind(expr: string): SideBarBuilder;
  opacity(value: number): SideBarBuilder;
  opacityBind(expr: string): SideBarBuilder;
  padding(value: number): SideBarBuilder;
  paddingBind(expr: string): SideBarBuilder;
  palette(value: PaletteBuilder): SideBarBuilder;
  paletteBind(expr: string): SideBarBuilder;
  parent(value: ItemBuilder): SideBarBuilder;
  parentBind(expr: string): SideBarBuilder;
  rightInset(value: number): SideBarBuilder;
  rightInsetBind(expr: string): SideBarBuilder;
  rightPadding(value: number): SideBarBuilder;
  rightPaddingBind(expr: string): SideBarBuilder;
  rotation(value: number): SideBarBuilder;
  rotationBind(expr: string): SideBarBuilder;
  scale(value: number): SideBarBuilder;
  scaleBind(expr: string): SideBarBuilder;
  separatorDelegate(value: QmlComponent): SideBarBuilder;
  separatorDelegateBind(expr: string): SideBarBuilder;
  smooth(value: boolean): SideBarBuilder;
  smoothBind(expr: string): SideBarBuilder;
  spacing(value: number): SideBarBuilder;
  spacingBind(expr: string): SideBarBuilder;
  state(value: string): SideBarBuilder;
  stateBind(expr: string): SideBarBuilder;
  topInset(value: number): SideBarBuilder;
  topInsetBind(expr: string): SideBarBuilder;
  topPadding(value: number): SideBarBuilder;
  topPaddingBind(expr: string): SideBarBuilder;
  transformOrigin(value: QmlEnumToken): SideBarBuilder;
  transformOriginBind(expr: string): SideBarBuilder;
  verticalPadding(value: number): SideBarBuilder;
  verticalPaddingBind(expr: string): SideBarBuilder;
  visible(value: boolean): SideBarBuilder;
  visibleBind(expr: string): SideBarBuilder;
  wheelEnabled(value: boolean): SideBarBuilder;
  wheelEnabledBind(expr: string): SideBarBuilder;
  width(value: number): SideBarBuilder;
  widthBind(expr: string): SideBarBuilder;
  x(value: number): SideBarBuilder;
  xBind(expr: string): SideBarBuilder;
  y(value: number): SideBarBuilder;
  yBind(expr: string): SideBarBuilder;
  z(value: number): SideBarBuilder;
  zBind(expr: string): SideBarBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onAddFavoriteDelegateChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onButtonDelegateChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onClipChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onContentChildrenChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onCountChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onCurrentItemChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onDialogChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onEffectiveFolderPathsChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onFavoritePathsChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onFolderPathsChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onFontChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): SideBarBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onSeparatorDelegateChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onXChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onYChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  onZChanged(handler: DslSignalHandlerValue): SideBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SideBarBuilder;
  layer(setup: (b: LayerBuilder) => void): SideBarBuilder;
  colorDialogImpl(setup: (b: ColorDialogImplAttachedBuilder) => void): SideBarBuilder;
  fileDialogImpl(setup: (b: FileDialogImplAttachedBuilder) => void): SideBarBuilder;
  folderDialogImpl(setup: (b: FolderDialogImplAttachedBuilder) => void): SideBarBuilder;
  fontDialogImpl(setup: (b: FontDialogImplAttachedBuilder) => void): SideBarBuilder;
  messageDialogImpl(setup: (b: MessageDialogImplAttachedBuilder) => void): SideBarBuilder;
}

const SIDEBAR_META: TypeMetadata = {
  typeName: 'SideBar',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'addFavoriteDelegate', hasValue: true, hasBinding: true },
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
    { name: 'folderPaths', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAddFavoriteDelegateChanged', paramCount: 0 },
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
    { handlerName: 'onEffectiveFolderPathsChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFavoritePathsChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFolderPathsChanged', paramCount: 0 },
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

export function SideBar(): SideBarBuilder {
  return createFluentBuilder('SideBar', SIDEBAR_META) as unknown as SideBarBuilder;
}

export namespace SideBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SideBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SideBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SideBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SideBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SideBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SideBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('SideBar', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SideBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SideBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SideBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SideBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SideBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SideBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SideBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SideBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SideBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SideBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SideBar', 'TransformOrigin', 'BottomRight');
  }
}
