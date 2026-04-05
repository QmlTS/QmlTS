// AUTO-GENERATED — DO NOT EDIT
// Type: ComboBox
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
export interface ComboBoxBuilder {
  id(id: string): ComboBoxBuilder;
  child(obj: QmlObjectBuilder): ComboBoxBuilder;

  activeFocusOnTab(value: boolean): ComboBoxBuilder;
  activeFocusOnTabBind(expr: string): ComboBoxBuilder;
  antialiasing(value: boolean): ComboBoxBuilder;
  antialiasingBind(expr: string): ComboBoxBuilder;
  background(value: ItemBuilder): ComboBoxBuilder;
  backgroundBind(expr: string): ComboBoxBuilder;
  baselineOffset(value: number): ComboBoxBuilder;
  baselineOffsetBind(expr: string): ComboBoxBuilder;
  bottomInset(value: number): ComboBoxBuilder;
  bottomInsetBind(expr: string): ComboBoxBuilder;
  bottomPadding(value: number): ComboBoxBuilder;
  bottomPaddingBind(expr: string): ComboBoxBuilder;
  clip(value: boolean): ComboBoxBuilder;
  clipBind(expr: string): ComboBoxBuilder;
  containmentMask(value: QtObjectBuilder): ComboBoxBuilder;
  containmentMaskBind(expr: string): ComboBoxBuilder;
  contentItem(value: ItemBuilder): ComboBoxBuilder;
  contentItemBind(expr: string): ComboBoxBuilder;
  currentIndex(value: number): ComboBoxBuilder;
  currentIndexBind(expr: string): ComboBoxBuilder;
  currentValue(value: QmlValue): ComboBoxBuilder;
  currentValueBind(expr: string): ComboBoxBuilder;
  delegate(value: QmlComponent): ComboBoxBuilder;
  delegateBind(expr: string): ComboBoxBuilder;
  displayText(value: string): ComboBoxBuilder;
  displayTextBind(expr: string): ComboBoxBuilder;
  down(value: boolean): ComboBoxBuilder;
  downBind(expr: string): ComboBoxBuilder;
  editText(value: string): ComboBoxBuilder;
  editTextBind(expr: string): ComboBoxBuilder;
  editable(value: boolean): ComboBoxBuilder;
  editableBind(expr: string): ComboBoxBuilder;
  enabled(value: boolean): ComboBoxBuilder;
  enabledBind(expr: string): ComboBoxBuilder;
  flat(value: boolean): ComboBoxBuilder;
  flatBind(expr: string): ComboBoxBuilder;
  focus(value: boolean): ComboBoxBuilder;
  focusBind(expr: string): ComboBoxBuilder;
  focusPolicy(value: QmlValue): ComboBoxBuilder;
  focusPolicyBind(expr: string): ComboBoxBuilder;
  focusReason(value: QmlValue): ComboBoxBuilder;
  focusReasonBind(expr: string): ComboBoxBuilder;
  font(value: QmlFont): ComboBoxBuilder;
  fontBind(expr: string): ComboBoxBuilder;
  height(value: number): ComboBoxBuilder;
  heightBind(expr: string): ComboBoxBuilder;
  horizontalPadding(value: number): ComboBoxBuilder;
  horizontalPaddingBind(expr: string): ComboBoxBuilder;
  hoverEnabled(value: boolean): ComboBoxBuilder;
  hoverEnabledBind(expr: string): ComboBoxBuilder;
  implicitContentWidthPolicy(value: QmlValue): ComboBoxBuilder;
  implicitContentWidthPolicyBind(expr: string): ComboBoxBuilder;
  implicitHeight(value: number): ComboBoxBuilder;
  implicitHeightBind(expr: string): ComboBoxBuilder;
  implicitWidth(value: number): ComboBoxBuilder;
  implicitWidthBind(expr: string): ComboBoxBuilder;
  indicator(value: ItemBuilder): ComboBoxBuilder;
  indicatorBind(expr: string): ComboBoxBuilder;
  inputMethodHints(value: QmlValue): ComboBoxBuilder;
  inputMethodHintsBind(expr: string): ComboBoxBuilder;
  leftInset(value: number): ComboBoxBuilder;
  leftInsetBind(expr: string): ComboBoxBuilder;
  leftPadding(value: number): ComboBoxBuilder;
  leftPaddingBind(expr: string): ComboBoxBuilder;
  locale(value: QmlValue): ComboBoxBuilder;
  localeBind(expr: string): ComboBoxBuilder;
  model(value: QmlValue): ComboBoxBuilder;
  modelBind(expr: string): ComboBoxBuilder;
  objectName(value: string): ComboBoxBuilder;
  objectNameBind(expr: string): ComboBoxBuilder;
  opacity(value: number): ComboBoxBuilder;
  opacityBind(expr: string): ComboBoxBuilder;
  padding(value: number): ComboBoxBuilder;
  paddingBind(expr: string): ComboBoxBuilder;
  palette(value: PaletteBuilder): ComboBoxBuilder;
  paletteBind(expr: string): ComboBoxBuilder;
  parent(value: ItemBuilder): ComboBoxBuilder;
  parentBind(expr: string): ComboBoxBuilder;
  popup(value: PopupBuilder): ComboBoxBuilder;
  popupBind(expr: string): ComboBoxBuilder;
  rightInset(value: number): ComboBoxBuilder;
  rightInsetBind(expr: string): ComboBoxBuilder;
  rightPadding(value: number): ComboBoxBuilder;
  rightPaddingBind(expr: string): ComboBoxBuilder;
  rotation(value: number): ComboBoxBuilder;
  rotationBind(expr: string): ComboBoxBuilder;
  scale(value: number): ComboBoxBuilder;
  scaleBind(expr: string): ComboBoxBuilder;
  selectTextByMouse(value: boolean): ComboBoxBuilder;
  selectTextByMouseBind(expr: string): ComboBoxBuilder;
  smooth(value: boolean): ComboBoxBuilder;
  smoothBind(expr: string): ComboBoxBuilder;
  spacing(value: number): ComboBoxBuilder;
  spacingBind(expr: string): ComboBoxBuilder;
  state(value: string): ComboBoxBuilder;
  stateBind(expr: string): ComboBoxBuilder;
  textRole(value: string): ComboBoxBuilder;
  textRoleBind(expr: string): ComboBoxBuilder;
  topInset(value: number): ComboBoxBuilder;
  topInsetBind(expr: string): ComboBoxBuilder;
  topPadding(value: number): ComboBoxBuilder;
  topPaddingBind(expr: string): ComboBoxBuilder;
  transformOrigin(value: QmlValue): ComboBoxBuilder;
  transformOriginBind(expr: string): ComboBoxBuilder;
  validator(value: QmlValue): ComboBoxBuilder;
  validatorBind(expr: string): ComboBoxBuilder;
  valueRole(value: string): ComboBoxBuilder;
  valueRoleBind(expr: string): ComboBoxBuilder;
  verticalPadding(value: number): ComboBoxBuilder;
  verticalPaddingBind(expr: string): ComboBoxBuilder;
  visible(value: boolean): ComboBoxBuilder;
  visibleBind(expr: string): ComboBoxBuilder;
  wheelEnabled(value: boolean): ComboBoxBuilder;
  wheelEnabledBind(expr: string): ComboBoxBuilder;
  width(value: number): ComboBoxBuilder;
  widthBind(expr: string): ComboBoxBuilder;
  x(value: number): ComboBoxBuilder;
  xBind(expr: string): ComboBoxBuilder;
  y(value: number): ComboBoxBuilder;
  yBind(expr: string): ComboBoxBuilder;
  z(value: number): ComboBoxBuilder;
  zBind(expr: string): ComboBoxBuilder;
  onAcceptableInputChanged(handler: () => void): ComboBoxBuilder;
  onAccepted(handler: () => void): ComboBoxBuilder;
  onActivated(handler: (index: number) => void): ComboBoxBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ComboBoxBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ComboBoxBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ComboBoxBuilder;
  onAvailableHeightChanged(handler: () => void): ComboBoxBuilder;
  onAvailableWidthChanged(handler: () => void): ComboBoxBuilder;
  onBackgroundChanged(handler: () => void): ComboBoxBuilder;
  onBaselineOffsetChanged(handler: () => void): ComboBoxBuilder;
  onBottomInsetChanged(handler: () => void): ComboBoxBuilder;
  onBottomPaddingChanged(handler: () => void): ComboBoxBuilder;
  onChildrenChanged(handler: () => void): ComboBoxBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ComboBoxBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ComboBoxBuilder;
  onContainmentMaskChanged(handler: () => void): ComboBoxBuilder;
  onContentItemChanged(handler: () => void): ComboBoxBuilder;
  onCountChanged(handler: () => void): ComboBoxBuilder;
  onCurrentIndexChanged(handler: () => void): ComboBoxBuilder;
  onCurrentTextChanged(handler: () => void): ComboBoxBuilder;
  onCurrentValueChanged(handler: () => void): ComboBoxBuilder;
  onDelegateChanged(handler: () => void): ComboBoxBuilder;
  onDelegateModelChanged(handler: () => void): ComboBoxBuilder;
  onDisplayTextChanged(handler: () => void): ComboBoxBuilder;
  onDownChanged(handler: () => void): ComboBoxBuilder;
  onEditTextChanged(handler: () => void): ComboBoxBuilder;
  onEditableChanged(handler: () => void): ComboBoxBuilder;
  onEnabledChanged(handler: () => void): ComboBoxBuilder;
  onFlatChanged(handler: () => void): ComboBoxBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ComboBoxBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ComboBoxBuilder;
  onFocusReasonChanged(handler: () => void): ComboBoxBuilder;
  onFontChanged(handler: () => void): ComboBoxBuilder;
  onHeightChanged(handler: () => void): ComboBoxBuilder;
  onHighlighted(handler: (index: number) => void): ComboBoxBuilder;
  onHighlightedIndexChanged(handler: () => void): ComboBoxBuilder;
  onHorizontalPaddingChanged(handler: () => void): ComboBoxBuilder;
  onHoverEnabledChanged(handler: () => void): ComboBoxBuilder;
  onHoveredChanged(handler: () => void): ComboBoxBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ComboBoxBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ComboBoxBuilder;
  onImplicitContentHeightChanged(handler: () => void): ComboBoxBuilder;
  onImplicitContentWidthChanged(handler: () => void): ComboBoxBuilder;
  onImplicitContentWidthPolicyChanged(handler: () => void): ComboBoxBuilder;
  onImplicitHeightChanged(handler: () => void): ComboBoxBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): ComboBoxBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): ComboBoxBuilder;
  onImplicitWidthChanged(handler: () => void): ComboBoxBuilder;
  onIndicatorChanged(handler: () => void): ComboBoxBuilder;
  onInputMethodComposingChanged(handler: () => void): ComboBoxBuilder;
  onInputMethodHintsChanged(handler: () => void): ComboBoxBuilder;
  onLeftInsetChanged(handler: () => void): ComboBoxBuilder;
  onLeftPaddingChanged(handler: () => void): ComboBoxBuilder;
  onLocaleChanged(handler: () => void): ComboBoxBuilder;
  onMirroredChanged(handler: () => void): ComboBoxBuilder;
  onModelChanged(handler: () => void): ComboBoxBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ComboBoxBuilder;
  onOpacityChanged(handler: () => void): ComboBoxBuilder;
  onPaddingChanged(handler: () => void): ComboBoxBuilder;
  onPaletteChanged(handler: () => void): ComboBoxBuilder;
  onPaletteCreated(handler: () => void): ComboBoxBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ComboBoxBuilder;
  onPopupChanged(handler: () => void): ComboBoxBuilder;
  onPressedChanged(handler: () => void): ComboBoxBuilder;
  onRightInsetChanged(handler: () => void): ComboBoxBuilder;
  onRightPaddingChanged(handler: () => void): ComboBoxBuilder;
  onRotationChanged(handler: () => void): ComboBoxBuilder;
  onScaleChanged(handler: () => void): ComboBoxBuilder;
  onSelectTextByMouseChanged(handler: () => void): ComboBoxBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ComboBoxBuilder;
  onSpacingChanged(handler: () => void): ComboBoxBuilder;
  onStateChanged(handler: (arg0: string) => void): ComboBoxBuilder;
  onTextRoleChanged(handler: () => void): ComboBoxBuilder;
  onTopInsetChanged(handler: () => void): ComboBoxBuilder;
  onTopPaddingChanged(handler: () => void): ComboBoxBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ComboBoxBuilder;
  onValidatorChanged(handler: () => void): ComboBoxBuilder;
  onValueRoleChanged(handler: () => void): ComboBoxBuilder;
  onVerticalPaddingChanged(handler: () => void): ComboBoxBuilder;
  onVisibleChanged(handler: () => void): ComboBoxBuilder;
  onVisibleChildrenChanged(handler: () => void): ComboBoxBuilder;
  onVisualFocusChanged(handler: () => void): ComboBoxBuilder;
  onWheelEnabledChanged(handler: () => void): ComboBoxBuilder;
  onWidthChanged(handler: () => void): ComboBoxBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ComboBoxBuilder;
  onXChanged(handler: () => void): ComboBoxBuilder;
  onYChanged(handler: () => void): ComboBoxBuilder;
  onZChanged(handler: () => void): ComboBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ComboBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): ComboBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ComboBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ComboBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ComboBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ComboBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ComboBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ComboBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ComboBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ComboBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ComboBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ComboBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ComboBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ComboBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ComboBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ComboBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ComboBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ComboBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ComboBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ComboBoxBuilder;
}

export function ComboBox(): ComboBoxBuilder {
  return new DslBuilderImpl('ComboBox') as unknown as ComboBoxBuilder;
}

export namespace ComboBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ComboBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ComboBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ComboBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ComboBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ComboBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ComboBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ComboBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ImplicitContentWidthPolicy {
    export const ContentItemImplicitWidth = createEnumToken(
      'ComboBox',
      'ImplicitContentWidthPolicy',
      'ContentItemImplicitWidth',
    );
    export const WidestText = createEnumToken(
      'ComboBox',
      'ImplicitContentWidthPolicy',
      'WidestText',
    );
    export const WidestTextWhenCompleted = createEnumToken(
      'ComboBox',
      'ImplicitContentWidthPolicy',
      'WidestTextWhenCompleted',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ComboBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ComboBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ComboBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ComboBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ComboBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ComboBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ComboBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ComboBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ComboBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ComboBox', 'TransformOrigin', 'BottomRight');
  }
}
