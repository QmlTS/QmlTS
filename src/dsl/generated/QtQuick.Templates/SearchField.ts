// AUTO-GENERATED — DO NOT EDIT
// Type: SearchField
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlFont,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
} from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { WindowBuilder } from '../QtQuick/Window.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { PopupBuilder } from './Popup.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { UpBuilder } from './QQuickIndicatorButton.js';
import type { OverlayAttachedBuilder } from './QQuickOverlayAttached.js';
import type { ScrollBarAttachedBuilder } from './QQuickScrollBarAttached.js';
import type { ScrollIndicatorAttachedBuilder } from './QQuickScrollIndicatorAttached.js';
import type { SelectionRectangleAttachedBuilder } from './QQuickSelectionRectangleAttached.js';
import type { SplitViewAttachedBuilder } from './QQuickSplitViewAttached.js';
import type { StackViewAttachedBuilder } from './QQuickStackViewAttached.js';
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface SearchFieldBuilder {
  id(id: string): SearchFieldBuilder;
  child(obj: QmlObjectBuilder): SearchFieldBuilder;

  activeFocusOnTab(value: boolean): SearchFieldBuilder;
  activeFocusOnTabBind(expr: string): SearchFieldBuilder;
  antialiasing(value: boolean): SearchFieldBuilder;
  antialiasingBind(expr: string): SearchFieldBuilder;
  background(value: ItemBuilder): SearchFieldBuilder;
  backgroundBind(expr: string): SearchFieldBuilder;
  baselineOffset(value: number): SearchFieldBuilder;
  baselineOffsetBind(expr: string): SearchFieldBuilder;
  bottomInset(value: number): SearchFieldBuilder;
  bottomInsetBind(expr: string): SearchFieldBuilder;
  bottomPadding(value: number): SearchFieldBuilder;
  bottomPaddingBind(expr: string): SearchFieldBuilder;
  clip(value: boolean): SearchFieldBuilder;
  clipBind(expr: string): SearchFieldBuilder;
  containmentMask(value: QtObjectBuilder): SearchFieldBuilder;
  containmentMaskBind(expr: string): SearchFieldBuilder;
  contentItem(value: ItemBuilder): SearchFieldBuilder;
  contentItemBind(expr: string): SearchFieldBuilder;
  currentIndex(value: number): SearchFieldBuilder;
  currentIndexBind(expr: string): SearchFieldBuilder;
  delegate(value: QmlComponent): SearchFieldBuilder;
  delegateBind(expr: string): SearchFieldBuilder;
  enabled(value: boolean): SearchFieldBuilder;
  enabledBind(expr: string): SearchFieldBuilder;
  focus(value: boolean): SearchFieldBuilder;
  focusBind(expr: string): SearchFieldBuilder;
  focusPolicy(value: QmlValue): SearchFieldBuilder;
  focusPolicyBind(expr: string): SearchFieldBuilder;
  focusReason(value: QmlValue): SearchFieldBuilder;
  focusReasonBind(expr: string): SearchFieldBuilder;
  font(value: QmlFont): SearchFieldBuilder;
  fontBind(expr: string): SearchFieldBuilder;
  height(value: number): SearchFieldBuilder;
  heightBind(expr: string): SearchFieldBuilder;
  horizontalPadding(value: number): SearchFieldBuilder;
  horizontalPaddingBind(expr: string): SearchFieldBuilder;
  hoverEnabled(value: boolean): SearchFieldBuilder;
  hoverEnabledBind(expr: string): SearchFieldBuilder;
  implicitHeight(value: number): SearchFieldBuilder;
  implicitHeightBind(expr: string): SearchFieldBuilder;
  implicitWidth(value: number): SearchFieldBuilder;
  implicitWidthBind(expr: string): SearchFieldBuilder;
  leftInset(value: number): SearchFieldBuilder;
  leftInsetBind(expr: string): SearchFieldBuilder;
  leftPadding(value: number): SearchFieldBuilder;
  leftPaddingBind(expr: string): SearchFieldBuilder;
  live(value: boolean): SearchFieldBuilder;
  liveBind(expr: string): SearchFieldBuilder;
  locale(value: QmlValue): SearchFieldBuilder;
  localeBind(expr: string): SearchFieldBuilder;
  objectName(value: string): SearchFieldBuilder;
  objectNameBind(expr: string): SearchFieldBuilder;
  opacity(value: number): SearchFieldBuilder;
  opacityBind(expr: string): SearchFieldBuilder;
  padding(value: number): SearchFieldBuilder;
  paddingBind(expr: string): SearchFieldBuilder;
  palette(value: PaletteBuilder): SearchFieldBuilder;
  paletteBind(expr: string): SearchFieldBuilder;
  parent(value: ItemBuilder): SearchFieldBuilder;
  parentBind(expr: string): SearchFieldBuilder;
  popup(value: PopupBuilder): SearchFieldBuilder;
  popupBind(expr: string): SearchFieldBuilder;
  rightInset(value: number): SearchFieldBuilder;
  rightInsetBind(expr: string): SearchFieldBuilder;
  rightPadding(value: number): SearchFieldBuilder;
  rightPaddingBind(expr: string): SearchFieldBuilder;
  rotation(value: number): SearchFieldBuilder;
  rotationBind(expr: string): SearchFieldBuilder;
  scale(value: number): SearchFieldBuilder;
  scaleBind(expr: string): SearchFieldBuilder;
  smooth(value: boolean): SearchFieldBuilder;
  smoothBind(expr: string): SearchFieldBuilder;
  spacing(value: number): SearchFieldBuilder;
  spacingBind(expr: string): SearchFieldBuilder;
  state(value: string): SearchFieldBuilder;
  stateBind(expr: string): SearchFieldBuilder;
  suggestionModel(value: QmlValue): SearchFieldBuilder;
  suggestionModelBind(expr: string): SearchFieldBuilder;
  text(value: string): SearchFieldBuilder;
  textBind(expr: string): SearchFieldBuilder;
  textRole(value: string): SearchFieldBuilder;
  textRoleBind(expr: string): SearchFieldBuilder;
  topInset(value: number): SearchFieldBuilder;
  topInsetBind(expr: string): SearchFieldBuilder;
  topPadding(value: number): SearchFieldBuilder;
  topPaddingBind(expr: string): SearchFieldBuilder;
  transformOrigin(value: QmlValue): SearchFieldBuilder;
  transformOriginBind(expr: string): SearchFieldBuilder;
  verticalPadding(value: number): SearchFieldBuilder;
  verticalPaddingBind(expr: string): SearchFieldBuilder;
  visible(value: boolean): SearchFieldBuilder;
  visibleBind(expr: string): SearchFieldBuilder;
  wheelEnabled(value: boolean): SearchFieldBuilder;
  wheelEnabledBind(expr: string): SearchFieldBuilder;
  width(value: number): SearchFieldBuilder;
  widthBind(expr: string): SearchFieldBuilder;
  x(value: number): SearchFieldBuilder;
  xBind(expr: string): SearchFieldBuilder;
  y(value: number): SearchFieldBuilder;
  yBind(expr: string): SearchFieldBuilder;
  z(value: number): SearchFieldBuilder;
  zBind(expr: string): SearchFieldBuilder;
  onAccepted(handler: () => void): SearchFieldBuilder;
  onActivated(handler: (index: number) => void): SearchFieldBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SearchFieldBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SearchFieldBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SearchFieldBuilder;
  onAvailableHeightChanged(handler: () => void): SearchFieldBuilder;
  onAvailableWidthChanged(handler: () => void): SearchFieldBuilder;
  onBackgroundChanged(handler: () => void): SearchFieldBuilder;
  onBaselineOffsetChanged(handler: () => void): SearchFieldBuilder;
  onBottomInsetChanged(handler: () => void): SearchFieldBuilder;
  onBottomPaddingChanged(handler: () => void): SearchFieldBuilder;
  onChildrenChanged(handler: () => void): SearchFieldBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SearchFieldBuilder;
  onClearButtonPressed(handler: () => void): SearchFieldBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SearchFieldBuilder;
  onContainmentMaskChanged(handler: () => void): SearchFieldBuilder;
  onContentItemChanged(handler: () => void): SearchFieldBuilder;
  onCurrentIndexChanged(handler: () => void): SearchFieldBuilder;
  onDelegateChanged(handler: () => void): SearchFieldBuilder;
  onDelegateModelChanged(handler: () => void): SearchFieldBuilder;
  onEnabledChanged(handler: () => void): SearchFieldBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SearchFieldBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SearchFieldBuilder;
  onFocusReasonChanged(handler: () => void): SearchFieldBuilder;
  onFontChanged(handler: () => void): SearchFieldBuilder;
  onHeightChanged(handler: () => void): SearchFieldBuilder;
  onHighlighted(handler: (index: number) => void): SearchFieldBuilder;
  onHighlightedIndexChanged(handler: () => void): SearchFieldBuilder;
  onHorizontalPaddingChanged(handler: () => void): SearchFieldBuilder;
  onHoverEnabledChanged(handler: () => void): SearchFieldBuilder;
  onHoveredChanged(handler: () => void): SearchFieldBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SearchFieldBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SearchFieldBuilder;
  onImplicitContentHeightChanged(handler: () => void): SearchFieldBuilder;
  onImplicitContentWidthChanged(handler: () => void): SearchFieldBuilder;
  onImplicitHeightChanged(handler: () => void): SearchFieldBuilder;
  onImplicitWidthChanged(handler: () => void): SearchFieldBuilder;
  onLeftInsetChanged(handler: () => void): SearchFieldBuilder;
  onLeftPaddingChanged(handler: () => void): SearchFieldBuilder;
  onLiveChanged(handler: () => void): SearchFieldBuilder;
  onLocaleChanged(handler: () => void): SearchFieldBuilder;
  onMirroredChanged(handler: () => void): SearchFieldBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SearchFieldBuilder;
  onOpacityChanged(handler: () => void): SearchFieldBuilder;
  onPaddingChanged(handler: () => void): SearchFieldBuilder;
  onPaletteChanged(handler: () => void): SearchFieldBuilder;
  onPaletteCreated(handler: () => void): SearchFieldBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SearchFieldBuilder;
  onPopupChanged(handler: () => void): SearchFieldBuilder;
  onRightInsetChanged(handler: () => void): SearchFieldBuilder;
  onRightPaddingChanged(handler: () => void): SearchFieldBuilder;
  onRotationChanged(handler: () => void): SearchFieldBuilder;
  onScaleChanged(handler: () => void): SearchFieldBuilder;
  onSearchButtonPressed(handler: () => void): SearchFieldBuilder;
  onSearchTriggered(handler: () => void): SearchFieldBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SearchFieldBuilder;
  onSpacingChanged(handler: () => void): SearchFieldBuilder;
  onStateChanged(handler: (arg0: string) => void): SearchFieldBuilder;
  onSuggestionCountChanged(handler: () => void): SearchFieldBuilder;
  onSuggestionModelChanged(handler: () => void): SearchFieldBuilder;
  onTextChanged(handler: () => void): SearchFieldBuilder;
  onTextEdited(handler: () => void): SearchFieldBuilder;
  onTextRoleChanged(handler: () => void): SearchFieldBuilder;
  onTopInsetChanged(handler: () => void): SearchFieldBuilder;
  onTopPaddingChanged(handler: () => void): SearchFieldBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SearchFieldBuilder;
  onVerticalPaddingChanged(handler: () => void): SearchFieldBuilder;
  onVisibleChanged(handler: () => void): SearchFieldBuilder;
  onVisibleChildrenChanged(handler: () => void): SearchFieldBuilder;
  onVisualFocusChanged(handler: () => void): SearchFieldBuilder;
  onWheelEnabledChanged(handler: () => void): SearchFieldBuilder;
  onWidthChanged(handler: () => void): SearchFieldBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SearchFieldBuilder;
  onXChanged(handler: () => void): SearchFieldBuilder;
  onYChanged(handler: () => void): SearchFieldBuilder;
  onZChanged(handler: () => void): SearchFieldBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SearchFieldBuilder;
  clearIndicator(setup: (b: UpBuilder) => void): SearchFieldBuilder;
  layer(setup: (b: LayerBuilder) => void): SearchFieldBuilder;
  searchIndicator(setup: (b: UpBuilder) => void): SearchFieldBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SearchFieldBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SearchFieldBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SearchFieldBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SearchFieldBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SearchFieldBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SearchFieldBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SearchFieldBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SearchFieldBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SearchFieldBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SearchFieldBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SearchFieldBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SearchFieldBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SearchFieldBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SearchFieldBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SearchFieldBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SearchFieldBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SearchFieldBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SearchFieldBuilder;
}

export function SearchField(): SearchFieldBuilder {
  return new DslBuilderImpl('SearchField') as unknown as SearchFieldBuilder;
}

export namespace SearchField {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SearchField',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SearchField',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SearchField', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SearchField', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SearchField', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SearchField', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SearchField',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SearchField', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SearchField', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SearchField', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SearchField', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SearchField', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SearchField', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SearchField', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SearchField', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SearchField', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SearchField', 'TransformOrigin', 'BottomRight');
  }
}
