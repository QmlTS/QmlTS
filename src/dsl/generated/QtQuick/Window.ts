// AUTO-GENERATED — DO NOT EDIT
// Type: Window
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PaletteBuilder } from './Palette.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface WindowBuilder {
  id(id: string): WindowBuilder;
  child(obj: QmlObjectBuilder): WindowBuilder;

  color(value: QmlColor): WindowBuilder;
  colorBind(expr: string): WindowBuilder;
  contentOrientation(value: QmlEnumToken): WindowBuilder;
  contentOrientationBind(expr: string): WindowBuilder;
  flags(value: QmlEnumToken): WindowBuilder;
  flagsBind(expr: string): WindowBuilder;
  height(value: number): WindowBuilder;
  heightBind(expr: string): WindowBuilder;
  maximumHeight(value: number): WindowBuilder;
  maximumHeightBind(expr: string): WindowBuilder;
  maximumWidth(value: number): WindowBuilder;
  maximumWidthBind(expr: string): WindowBuilder;
  minimumHeight(value: number): WindowBuilder;
  minimumHeightBind(expr: string): WindowBuilder;
  minimumWidth(value: number): WindowBuilder;
  minimumWidthBind(expr: string): WindowBuilder;
  modality(value: QmlEnumToken): WindowBuilder;
  modalityBind(expr: string): WindowBuilder;
  objectName(value: string): WindowBuilder;
  objectNameBind(expr: string): WindowBuilder;
  opacity(value: number): WindowBuilder;
  opacityBind(expr: string): WindowBuilder;
  palette(value: PaletteBuilder): WindowBuilder;
  paletteBind(expr: string): WindowBuilder;
  screen(value: QmlValue): WindowBuilder;
  screenBind(expr: string): WindowBuilder;
  title(value: string): WindowBuilder;
  titleBind(expr: string): WindowBuilder;
  transientParent(value: QmlValue): WindowBuilder;
  transientParentBind(expr: string): WindowBuilder;
  visibility(value: QmlEnumToken): WindowBuilder;
  visibilityBind(expr: string): WindowBuilder;
  visible(value: boolean): WindowBuilder;
  visibleBind(expr: string): WindowBuilder;
  width(value: number): WindowBuilder;
  widthBind(expr: string): WindowBuilder;
  x(value: number): WindowBuilder;
  xBind(expr: string): WindowBuilder;
  y(value: number): WindowBuilder;
  yBind(expr: string): WindowBuilder;
  onActiveChanged(body: string): WindowBuilder;
  onActiveFocusItemChanged(body: string): WindowBuilder;
  onAfterAnimating(body: string): WindowBuilder;
  onAfterFrameEnd(body: string): WindowBuilder;
  onAfterRenderPassRecording(body: string): WindowBuilder;
  onAfterRendering(body: string): WindowBuilder;
  onAfterSynchronizing(body: string): WindowBuilder;
  onBeforeFrameBegin(body: string): WindowBuilder;
  onBeforeRenderPassRecording(body: string): WindowBuilder;
  onBeforeRendering(body: string): WindowBuilder;
  onBeforeSynchronizing(body: string): WindowBuilder;
  onClosing(body: string): WindowBuilder;
  onColorChanged(body: string): WindowBuilder;
  onContentOrientationChanged(body: string): WindowBuilder;
  onDevicePixelRatioChanged(body: string): WindowBuilder;
  onFlagsChanged(body: string): WindowBuilder;
  onFocusObjectChanged(body: string): WindowBuilder;
  onFrameSwapped(body: string): WindowBuilder;
  onHeightChanged(body: string): WindowBuilder;
  onMaximumHeightChanged(body: string): WindowBuilder;
  onMaximumWidthChanged(body: string): WindowBuilder;
  onMinimumHeightChanged(body: string): WindowBuilder;
  onMinimumWidthChanged(body: string): WindowBuilder;
  onModalityChanged(body: string): WindowBuilder;
  onObjectNameChanged(body: string): WindowBuilder;
  onOpacityChanged(body: string): WindowBuilder;
  onPaletteChanged(body: string): WindowBuilder;
  onPaletteCreated(body: string): WindowBuilder;
  onSafeAreaMarginsChanged(body: string): WindowBuilder;
  onSceneGraphAboutToStop(body: string): WindowBuilder;
  onSceneGraphError(body: string): WindowBuilder;
  onSceneGraphInitialized(body: string): WindowBuilder;
  onSceneGraphInvalidated(body: string): WindowBuilder;
  onScreenChanged(body: string): WindowBuilder;
  onTransientParentChanged(body: string): WindowBuilder;
  onVisibilityChanged(body: string): WindowBuilder;
  onVisibleChanged(body: string): WindowBuilder;
  onWidthChanged(body: string): WindowBuilder;
  onWindowStateChanged(body: string): WindowBuilder;
  onWindowTitleChanged(body: string): WindowBuilder;
  onXChanged(body: string): WindowBuilder;
  onYChanged(body: string): WindowBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): WindowBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): WindowBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): WindowBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): WindowBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): WindowBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): WindowBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): WindowBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): WindowBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): WindowBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): WindowBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): WindowBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): WindowBuilder;
  screenAttached(setup: (b: ScreenAttachedBuilder) => void): WindowBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): WindowBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): WindowBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): WindowBuilder;
}

const WINDOW_META: TypeMetadata = {
  typeName: 'Window',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'contentOrientation', hasValue: true, hasBinding: true },
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'maximumHeight', hasValue: true, hasBinding: true },
    { name: 'maximumWidth', hasValue: true, hasBinding: true },
    { name: 'minimumHeight', hasValue: true, hasBinding: true },
    { name: 'minimumWidth', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'screen', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'transientParent', hasValue: true, hasBinding: true },
    { name: 'visibility', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
    { handlerName: 'onActiveFocusItemChanged', paramCount: 0 },
    { handlerName: 'onAfterAnimating', paramCount: 0 },
    { handlerName: 'onAfterFrameEnd', paramCount: 0 },
    { handlerName: 'onAfterRenderPassRecording', paramCount: 0 },
    { handlerName: 'onAfterRendering', paramCount: 0 },
    { handlerName: 'onAfterSynchronizing', paramCount: 0 },
    { handlerName: 'onBeforeFrameBegin', paramCount: 0 },
    { handlerName: 'onBeforeRenderPassRecording', paramCount: 0 },
    { handlerName: 'onBeforeRendering', paramCount: 0 },
    { handlerName: 'onBeforeSynchronizing', paramCount: 0 },
    { handlerName: 'onClosing', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onContentOrientationChanged', paramCount: 1 },
    { handlerName: 'onDevicePixelRatioChanged', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 1 },
    { handlerName: 'onFocusObjectChanged', paramCount: 1 },
    { handlerName: 'onFrameSwapped', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onMaximumHeightChanged', paramCount: 1 },
    { handlerName: 'onMaximumWidthChanged', paramCount: 1 },
    { handlerName: 'onMinimumHeightChanged', paramCount: 1 },
    { handlerName: 'onMinimumWidthChanged', paramCount: 1 },
    { handlerName: 'onModalityChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 1 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onSafeAreaMarginsChanged', paramCount: 1 },
    { handlerName: 'onSceneGraphAboutToStop', paramCount: 0 },
    { handlerName: 'onSceneGraphError', paramCount: 2 },
    { handlerName: 'onSceneGraphInitialized', paramCount: 0 },
    { handlerName: 'onSceneGraphInvalidated', paramCount: 0 },
    { handlerName: 'onScreenChanged', paramCount: 0 },
    { handlerName: 'onTransientParentChanged', paramCount: 1 },
    { handlerName: 'onVisibilityChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
    { handlerName: 'onWindowStateChanged', paramCount: 1 },
    { handlerName: 'onWindowTitleChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 1 },
    { handlerName: 'onYChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [
    {
      methodName: 'accessible',
      attachedTypeName: 'Accessible',
      properties: [
        { name: 'checkStateMixed', hasValue: true, hasBinding: true },
        { name: 'checkable', hasValue: true, hasBinding: true },
        { name: 'checked', hasValue: true, hasBinding: true },
        { name: 'defaultButton', hasValue: true, hasBinding: true },
        { name: 'description', hasValue: true, hasBinding: true },
        { name: 'editable', hasValue: true, hasBinding: true },
        { name: 'focusable', hasValue: true, hasBinding: true },
        { name: 'focused', hasValue: true, hasBinding: true },
        { name: 'id', hasValue: true, hasBinding: true },
        { name: 'ignored', hasValue: true, hasBinding: true },
        { name: 'labelFor', hasValue: true, hasBinding: true },
        { name: 'labelledBy', hasValue: true, hasBinding: true },
        { name: 'multiLine', hasValue: true, hasBinding: true },
        { name: 'name', hasValue: true, hasBinding: true },
        { name: 'passwordEdit', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
        { name: 'readOnly', hasValue: true, hasBinding: true },
        { name: 'role', hasValue: true, hasBinding: true },
        { name: 'searchEdit', hasValue: true, hasBinding: true },
        { name: 'selectable', hasValue: true, hasBinding: true },
        { name: 'selectableText', hasValue: true, hasBinding: true },
        { name: 'selected', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCheckStateMixedChanged', paramCount: 1 },
        { handlerName: 'onCheckableChanged', paramCount: 1 },
        { handlerName: 'onCheckedChanged', paramCount: 1 },
        { handlerName: 'onDecreaseAction', paramCount: 0 },
        { handlerName: 'onDefaultButtonChanged', paramCount: 1 },
        { handlerName: 'onDescriptionChanged', paramCount: 0 },
        { handlerName: 'onEditableChanged', paramCount: 1 },
        { handlerName: 'onFocusableChanged', paramCount: 1 },
        { handlerName: 'onFocusedChanged', paramCount: 1 },
        { handlerName: 'onIdChanged', paramCount: 0 },
        { handlerName: 'onIgnoredChanged', paramCount: 0 },
        { handlerName: 'onIncreaseAction', paramCount: 0 },
        { handlerName: 'onLabelForChanged', paramCount: 0 },
        { handlerName: 'onLabelledByChanged', paramCount: 0 },
        { handlerName: 'onMultiLineChanged', paramCount: 1 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onNextPageAction', paramCount: 0 },
        { handlerName: 'onPasswordEditChanged', paramCount: 1 },
        { handlerName: 'onPressAction', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 1 },
        { handlerName: 'onPreviousPageAction', paramCount: 0 },
        { handlerName: 'onReadOnlyChanged', paramCount: 1 },
        { handlerName: 'onRoleChanged', paramCount: 0 },
        { handlerName: 'onScrollDownAction', paramCount: 0 },
        { handlerName: 'onScrollLeftAction', paramCount: 0 },
        { handlerName: 'onScrollRightAction', paramCount: 0 },
        { handlerName: 'onScrollUpAction', paramCount: 0 },
        { handlerName: 'onSearchEditChanged', paramCount: 1 },
        { handlerName: 'onSelectableChanged', paramCount: 1 },
        { handlerName: 'onSelectableTextChanged', paramCount: 1 },
        { handlerName: 'onSelectedChanged', paramCount: 1 },
        { handlerName: 'onToggleAction', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'drag',
      attachedTypeName: 'Drag',
      properties: [
        { name: 'active', hasValue: true, hasBinding: true },
        { name: 'dragType', hasValue: true, hasBinding: true },
        { name: 'hotSpot', hasValue: true, hasBinding: true },
        { name: 'imageSource', hasValue: true, hasBinding: true },
        { name: 'imageSourceSize', hasValue: true, hasBinding: true },
        { name: 'keys', hasValue: true, hasBinding: true },
        { name: 'mimeData', hasValue: true, hasBinding: true },
        { name: 'proposedAction', hasValue: true, hasBinding: true },
        { name: 'source', hasValue: true, hasBinding: true },
        { name: 'supportedActions', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActiveChanged', paramCount: 0 },
        { handlerName: 'onDragFinished', paramCount: 1 },
        { handlerName: 'onDragStarted', paramCount: 0 },
        { handlerName: 'onDragTypeChanged', paramCount: 0 },
        { handlerName: 'onHotSpotChanged', paramCount: 0 },
        { handlerName: 'onImageSourceChanged', paramCount: 0 },
        { handlerName: 'onImageSourceSizeChanged', paramCount: 0 },
        { handlerName: 'onKeysChanged', paramCount: 0 },
        { handlerName: 'onMimeDataChanged', paramCount: 0 },
        { handlerName: 'onProposedActionChanged', paramCount: 0 },
        { handlerName: 'onSourceChanged', paramCount: 0 },
        { handlerName: 'onSupportedActionsChanged', paramCount: 0 },
        { handlerName: 'onTargetChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'enterKey',
      attachedTypeName: 'EnterKey',
      properties: [
        { name: 'type', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onTypeChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'graphicsInfo',
      attachedTypeName: 'GraphicsInfo',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onApiChanged', paramCount: 0 },
        { handlerName: 'onMajorVersionChanged', paramCount: 0 },
        { handlerName: 'onMinorVersionChanged', paramCount: 0 },
        { handlerName: 'onProfileChanged', paramCount: 0 },
        { handlerName: 'onRenderableTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderCompilationTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderSourceTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderTypeChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'gridView',
      attachedTypeName: 'GridView',
      properties: [
        { name: 'delayRemove', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdd', paramCount: 0 },
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onDelayRemoveChanged', paramCount: 0 },
        { handlerName: 'onNextSectionChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onPrevSectionChanged', paramCount: 0 },
        { handlerName: 'onRemove', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onSectionChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'keyNavigation',
      attachedTypeName: 'KeyNavigation',
      properties: [
        { name: 'backtab', hasValue: true, hasBinding: true },
        { name: 'down', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'priority', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'tab', hasValue: true, hasBinding: true },
        { name: 'up', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onBacktabChanged', paramCount: 0 },
        { handlerName: 'onDownChanged', paramCount: 0 },
        { handlerName: 'onLeftChanged', paramCount: 0 },
        { handlerName: 'onPriorityChanged', paramCount: 0 },
        { handlerName: 'onRightChanged', paramCount: 0 },
        { handlerName: 'onTabChanged', paramCount: 0 },
        { handlerName: 'onUpChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'keys',
      attachedTypeName: 'Keys',
      properties: [
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'priority', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAsteriskPressed', paramCount: 1 },
        { handlerName: 'onBackPressed', paramCount: 1 },
        { handlerName: 'onBacktabPressed', paramCount: 1 },
        { handlerName: 'onCallPressed', paramCount: 1 },
        { handlerName: 'onCancelPressed', paramCount: 1 },
        { handlerName: 'onContext1Pressed', paramCount: 1 },
        { handlerName: 'onContext2Pressed', paramCount: 1 },
        { handlerName: 'onContext3Pressed', paramCount: 1 },
        { handlerName: 'onContext4Pressed', paramCount: 1 },
        { handlerName: 'onDeletePressed', paramCount: 1 },
        { handlerName: 'onDigit0Pressed', paramCount: 1 },
        { handlerName: 'onDigit1Pressed', paramCount: 1 },
        { handlerName: 'onDigit2Pressed', paramCount: 1 },
        { handlerName: 'onDigit3Pressed', paramCount: 1 },
        { handlerName: 'onDigit4Pressed', paramCount: 1 },
        { handlerName: 'onDigit5Pressed', paramCount: 1 },
        { handlerName: 'onDigit6Pressed', paramCount: 1 },
        { handlerName: 'onDigit7Pressed', paramCount: 1 },
        { handlerName: 'onDigit8Pressed', paramCount: 1 },
        { handlerName: 'onDigit9Pressed', paramCount: 1 },
        { handlerName: 'onDownPressed', paramCount: 1 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onEnterPressed', paramCount: 1 },
        { handlerName: 'onEscapePressed', paramCount: 1 },
        { handlerName: 'onFlipPressed', paramCount: 1 },
        { handlerName: 'onHangupPressed', paramCount: 1 },
        { handlerName: 'onLeftPressed', paramCount: 1 },
        { handlerName: 'onMenuPressed', paramCount: 1 },
        { handlerName: 'onNoPressed', paramCount: 1 },
        { handlerName: 'onNumberSignPressed', paramCount: 1 },
        { handlerName: 'onPressed', paramCount: 1 },
        { handlerName: 'onPriorityChanged', paramCount: 0 },
        { handlerName: 'onReleased', paramCount: 1 },
        { handlerName: 'onReturnPressed', paramCount: 1 },
        { handlerName: 'onRightPressed', paramCount: 1 },
        { handlerName: 'onSelectPressed', paramCount: 1 },
        { handlerName: 'onShortcutOverride', paramCount: 1 },
        { handlerName: 'onSpacePressed', paramCount: 1 },
        { handlerName: 'onTabPressed', paramCount: 1 },
        { handlerName: 'onUpPressed', paramCount: 1 },
        { handlerName: 'onVolumeDownPressed', paramCount: 1 },
        { handlerName: 'onVolumeUpPressed', paramCount: 1 },
        { handlerName: 'onYesPressed', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'layoutMirroring',
      attachedTypeName: 'LayoutMirroring',
      properties: [
        { name: 'childrenInherit', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onChildrenInheritChanged', paramCount: 0 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'listView',
      attachedTypeName: 'ListView',
      properties: [
        { name: 'delayRemove', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdd', paramCount: 0 },
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onDelayRemoveChanged', paramCount: 0 },
        { handlerName: 'onNextSectionChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onPrevSectionChanged', paramCount: 0 },
        { handlerName: 'onRemove', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onSectionChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'pathView',
      attachedTypeName: 'PathView',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onPathChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'positioner',
      attachedTypeName: 'Positioner',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsFirstItemChanged', paramCount: 0 },
        { handlerName: 'onIsLastItemChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'safeArea',
      attachedTypeName: 'SafeArea',
      properties: [
        { name: 'additionalMargins', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdditionalMarginsChanged', paramCount: 0 },
        { handlerName: 'onMarginsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'screenAttached',
      attachedTypeName: 'Screen',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onDesktopGeometryChanged', paramCount: 0 },
        { handlerName: 'onDevicePixelRatioChanged', paramCount: 0 },
        { handlerName: 'onHeightChanged', paramCount: 0 },
        { handlerName: 'onLogicalPixelDensityChanged', paramCount: 0 },
        { handlerName: 'onManufacturerChanged', paramCount: 0 },
        { handlerName: 'onModelChanged', paramCount: 0 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onOrientationChanged', paramCount: 0 },
        { handlerName: 'onPixelDensityChanged', paramCount: 0 },
        { handlerName: 'onPrimaryOrientationChanged', paramCount: 0 },
        { handlerName: 'onSerialNumberChanged', paramCount: 0 },
        { handlerName: 'onVirtualXChanged', paramCount: 0 },
        { handlerName: 'onVirtualYChanged', paramCount: 0 },
        { handlerName: 'onWidthChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'tableView',
      attachedTypeName: 'TableView',
      properties: [
        { name: 'editDelegate', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCommit', paramCount: 0 },
        { handlerName: 'onEditDelegateChanged', paramCount: 0 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'viewTransition',
      attachedTypeName: 'ViewTransition',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onDestinationChanged', paramCount: 0 },
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onItemChanged', paramCount: 0 },
        { handlerName: 'onTargetIndexesChanged', paramCount: 0 },
        { handlerName: 'onTargetItemsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'window',
      attachedTypeName: 'Window',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onActiveChanged', paramCount: 0 },
        { handlerName: 'onActiveFocusItemChanged', paramCount: 0 },
        { handlerName: 'onContentItemChanged', paramCount: 0 },
        { handlerName: 'onHeightChanged', paramCount: 0 },
        { handlerName: 'onVisibilityChanged', paramCount: 0 },
        { handlerName: 'onWidthChanged', paramCount: 0 },
        { handlerName: 'onWindowChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
  defaultProperty: 'data',
};

export function Window(): WindowBuilder {
  return createFluentBuilder('Window', WINDOW_META) as unknown as WindowBuilder;
}

export namespace Window {
  export namespace AncestorMode {
    export const ExcludeTransients = createEnumToken('Window', 'AncestorMode', 'ExcludeTransients');
    export const IncludeTransients = createEnumToken('Window', 'AncestorMode', 'IncludeTransients');
  }
  export namespace CreateTextureOptions {
    export const TextureHasAlphaChannel = createEnumToken(
      'Window',
      'CreateTextureOptions',
      'TextureHasAlphaChannel',
    );
    export const TextureHasMipmaps = createEnumToken(
      'Window',
      'CreateTextureOptions',
      'TextureHasMipmaps',
    );
    export const TextureOwnsGLTexture = createEnumToken(
      'Window',
      'CreateTextureOptions',
      'TextureOwnsGLTexture',
    );
    export const TextureCanUseAtlas = createEnumToken(
      'Window',
      'CreateTextureOptions',
      'TextureCanUseAtlas',
    );
    export const TextureIsOpaque = createEnumToken(
      'Window',
      'CreateTextureOptions',
      'TextureIsOpaque',
    );
  }
  export namespace SceneGraphError {
    export const ContextNotAvailable = createEnumToken(
      'Window',
      'SceneGraphError',
      'ContextNotAvailable',
    );
  }
  export namespace TextRenderType {
    export const QtTextRendering = createEnumToken('Window', 'TextRenderType', 'QtTextRendering');
    export const NativeTextRendering = createEnumToken(
      'Window',
      'TextRenderType',
      'NativeTextRendering',
    );
    export const CurveTextRendering = createEnumToken(
      'Window',
      'TextRenderType',
      'CurveTextRendering',
    );
  }
  export namespace Visibility {
    export const Hidden = createEnumToken('Window', 'Visibility', 'Hidden');
    export const AutomaticVisibility = createEnumToken(
      'Window',
      'Visibility',
      'AutomaticVisibility',
    );
    export const Windowed = createEnumToken('Window', 'Visibility', 'Windowed');
    export const Minimized = createEnumToken('Window', 'Visibility', 'Minimized');
    export const Maximized = createEnumToken('Window', 'Visibility', 'Maximized');
    export const FullScreen = createEnumToken('Window', 'Visibility', 'FullScreen');
  }
}
