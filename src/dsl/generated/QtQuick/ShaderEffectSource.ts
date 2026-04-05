// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderEffectSource
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlRect,
  QmlSize,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PaletteBuilder } from './Palette.js';
import type { AnchorsBuilder } from './QQuickAnchors.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { LayerBuilder } from './QQuickItemLayer.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface ShaderEffectSourceBuilder {
  id(id: string): ShaderEffectSourceBuilder;
  child(obj: QmlObjectBuilder): ShaderEffectSourceBuilder;

  activeFocusOnTab(value: boolean): ShaderEffectSourceBuilder;
  activeFocusOnTabBind(expr: string): ShaderEffectSourceBuilder;
  antialiasing(value: boolean): ShaderEffectSourceBuilder;
  antialiasingBind(expr: string): ShaderEffectSourceBuilder;
  baselineOffset(value: number): ShaderEffectSourceBuilder;
  baselineOffsetBind(expr: string): ShaderEffectSourceBuilder;
  clip(value: boolean): ShaderEffectSourceBuilder;
  clipBind(expr: string): ShaderEffectSourceBuilder;
  containmentMask(value: QtObjectBuilder): ShaderEffectSourceBuilder;
  containmentMaskBind(expr: string): ShaderEffectSourceBuilder;
  enabled(value: boolean): ShaderEffectSourceBuilder;
  enabledBind(expr: string): ShaderEffectSourceBuilder;
  focus(value: boolean): ShaderEffectSourceBuilder;
  focusBind(expr: string): ShaderEffectSourceBuilder;
  focusPolicy(value: QmlEnumToken): ShaderEffectSourceBuilder;
  focusPolicyBind(expr: string): ShaderEffectSourceBuilder;
  format(value: QmlEnumToken): ShaderEffectSourceBuilder;
  formatBind(expr: string): ShaderEffectSourceBuilder;
  height(value: number): ShaderEffectSourceBuilder;
  heightBind(expr: string): ShaderEffectSourceBuilder;
  hideSource(value: boolean): ShaderEffectSourceBuilder;
  hideSourceBind(expr: string): ShaderEffectSourceBuilder;
  implicitHeight(value: number): ShaderEffectSourceBuilder;
  implicitHeightBind(expr: string): ShaderEffectSourceBuilder;
  implicitWidth(value: number): ShaderEffectSourceBuilder;
  implicitWidthBind(expr: string): ShaderEffectSourceBuilder;
  live(value: boolean): ShaderEffectSourceBuilder;
  liveBind(expr: string): ShaderEffectSourceBuilder;
  mipmap(value: boolean): ShaderEffectSourceBuilder;
  mipmapBind(expr: string): ShaderEffectSourceBuilder;
  objectName(value: string): ShaderEffectSourceBuilder;
  objectNameBind(expr: string): ShaderEffectSourceBuilder;
  opacity(value: number): ShaderEffectSourceBuilder;
  opacityBind(expr: string): ShaderEffectSourceBuilder;
  palette(value: PaletteBuilder): ShaderEffectSourceBuilder;
  paletteBind(expr: string): ShaderEffectSourceBuilder;
  parent(value: ItemBuilder): ShaderEffectSourceBuilder;
  parentBind(expr: string): ShaderEffectSourceBuilder;
  recursive(value: boolean): ShaderEffectSourceBuilder;
  recursiveBind(expr: string): ShaderEffectSourceBuilder;
  rotation(value: number): ShaderEffectSourceBuilder;
  rotationBind(expr: string): ShaderEffectSourceBuilder;
  samples(value: number): ShaderEffectSourceBuilder;
  samplesBind(expr: string): ShaderEffectSourceBuilder;
  scale(value: number): ShaderEffectSourceBuilder;
  scaleBind(expr: string): ShaderEffectSourceBuilder;
  smooth(value: boolean): ShaderEffectSourceBuilder;
  smoothBind(expr: string): ShaderEffectSourceBuilder;
  sourceItem(value: ItemBuilder): ShaderEffectSourceBuilder;
  sourceItemBind(expr: string): ShaderEffectSourceBuilder;
  sourceRect(value: QmlRect): ShaderEffectSourceBuilder;
  sourceRectBind(expr: string): ShaderEffectSourceBuilder;
  state(value: string): ShaderEffectSourceBuilder;
  stateBind(expr: string): ShaderEffectSourceBuilder;
  textureMirroring(value: QmlEnumToken): ShaderEffectSourceBuilder;
  textureMirroringBind(expr: string): ShaderEffectSourceBuilder;
  textureSize(value: QmlSize): ShaderEffectSourceBuilder;
  textureSizeBind(expr: string): ShaderEffectSourceBuilder;
  transformOrigin(value: QmlEnumToken): ShaderEffectSourceBuilder;
  transformOriginBind(expr: string): ShaderEffectSourceBuilder;
  visible(value: boolean): ShaderEffectSourceBuilder;
  visibleBind(expr: string): ShaderEffectSourceBuilder;
  width(value: number): ShaderEffectSourceBuilder;
  widthBind(expr: string): ShaderEffectSourceBuilder;
  wrapMode(value: QmlEnumToken): ShaderEffectSourceBuilder;
  wrapModeBind(expr: string): ShaderEffectSourceBuilder;
  x(value: number): ShaderEffectSourceBuilder;
  xBind(expr: string): ShaderEffectSourceBuilder;
  y(value: number): ShaderEffectSourceBuilder;
  yBind(expr: string): ShaderEffectSourceBuilder;
  z(value: number): ShaderEffectSourceBuilder;
  zBind(expr: string): ShaderEffectSourceBuilder;
  onActiveFocusChanged(body: string): ShaderEffectSourceBuilder;
  onActiveFocusOnTabChanged(body: string): ShaderEffectSourceBuilder;
  onAntialiasingChanged(body: string): ShaderEffectSourceBuilder;
  onBaselineOffsetChanged(body: string): ShaderEffectSourceBuilder;
  onChildrenChanged(body: string): ShaderEffectSourceBuilder;
  onChildrenRectChanged(body: string): ShaderEffectSourceBuilder;
  onClipChanged(body: string): ShaderEffectSourceBuilder;
  onContainmentMaskChanged(body: string): ShaderEffectSourceBuilder;
  onEnabledChanged(body: string): ShaderEffectSourceBuilder;
  onFocusChanged(body: string): ShaderEffectSourceBuilder;
  onFocusPolicyChanged(body: string): ShaderEffectSourceBuilder;
  onFormatChanged(body: string): ShaderEffectSourceBuilder;
  onHeightChanged(body: string): ShaderEffectSourceBuilder;
  onHideSourceChanged(body: string): ShaderEffectSourceBuilder;
  onImplicitHeightChanged(body: string): ShaderEffectSourceBuilder;
  onImplicitWidthChanged(body: string): ShaderEffectSourceBuilder;
  onLiveChanged(body: string): ShaderEffectSourceBuilder;
  onMipmapChanged(body: string): ShaderEffectSourceBuilder;
  onObjectNameChanged(body: string): ShaderEffectSourceBuilder;
  onOpacityChanged(body: string): ShaderEffectSourceBuilder;
  onPaletteChanged(body: string): ShaderEffectSourceBuilder;
  onPaletteCreated(body: string): ShaderEffectSourceBuilder;
  onParentChanged(body: string): ShaderEffectSourceBuilder;
  onRecursiveChanged(body: string): ShaderEffectSourceBuilder;
  onRotationChanged(body: string): ShaderEffectSourceBuilder;
  onSamplesChanged(body: string): ShaderEffectSourceBuilder;
  onScaleChanged(body: string): ShaderEffectSourceBuilder;
  onScheduledUpdateCompleted(body: string): ShaderEffectSourceBuilder;
  onSmoothChanged(body: string): ShaderEffectSourceBuilder;
  onSourceItemChanged(body: string): ShaderEffectSourceBuilder;
  onSourceRectChanged(body: string): ShaderEffectSourceBuilder;
  onStateChanged(body: string): ShaderEffectSourceBuilder;
  onTextureMirroringChanged(body: string): ShaderEffectSourceBuilder;
  onTextureSizeChanged(body: string): ShaderEffectSourceBuilder;
  onTransformOriginChanged(body: string): ShaderEffectSourceBuilder;
  onVisibleChanged(body: string): ShaderEffectSourceBuilder;
  onVisibleChildrenChanged(body: string): ShaderEffectSourceBuilder;
  onWidthChanged(body: string): ShaderEffectSourceBuilder;
  onWindowChanged(body: string): ShaderEffectSourceBuilder;
  onWrapModeChanged(body: string): ShaderEffectSourceBuilder;
  onXChanged(body: string): ShaderEffectSourceBuilder;
  onYChanged(body: string): ShaderEffectSourceBuilder;
  onZChanged(body: string): ShaderEffectSourceBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ShaderEffectSourceBuilder;
  layer(setup: (b: LayerBuilder) => void): ShaderEffectSourceBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ShaderEffectSourceBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ShaderEffectSourceBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ShaderEffectSourceBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ShaderEffectSourceBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ShaderEffectSourceBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ShaderEffectSourceBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ShaderEffectSourceBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ShaderEffectSourceBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ShaderEffectSourceBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ShaderEffectSourceBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ShaderEffectSourceBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ShaderEffectSourceBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ShaderEffectSourceBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ShaderEffectSourceBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ShaderEffectSourceBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ShaderEffectSourceBuilder;
}

const SHADEREFFECTSOURCE_META: TypeMetadata = {
  typeName: 'ShaderEffectSource',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'format', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'hideSource', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'live', hasValue: true, hasBinding: true },
    { name: 'mipmap', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'recursive', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'samples', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'sourceItem', hasValue: true, hasBinding: true },
    { name: 'sourceRect', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textureMirroring', hasValue: true, hasBinding: true },
    { name: 'textureSize', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrapMode', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFormatChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHideSourceChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLiveChanged', paramCount: 0 },
    { handlerName: 'onMipmapChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRecursiveChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onSamplesChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScheduledUpdateCompleted', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceItemChanged', paramCount: 0 },
    { handlerName: 'onSourceRectChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextureMirroringChanged', paramCount: 0 },
    { handlerName: 'onTextureSizeChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWrapModeChanged', paramCount: 0 },
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
      methodName: 'screen',
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

export function ShaderEffectSource(): ShaderEffectSourceBuilder {
  return createFluentBuilder(
    'ShaderEffectSource',
    SHADEREFFECTSOURCE_META,
  ) as unknown as ShaderEffectSourceBuilder;
}

export namespace ShaderEffectSource {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('ShaderEffectSource', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace Format {
    export const RGBA8 = createEnumToken('ShaderEffectSource', 'Format', 'RGBA8');
    export const RGBA16F = createEnumToken('ShaderEffectSource', 'Format', 'RGBA16F');
    export const RGBA32F = createEnumToken('ShaderEffectSource', 'Format', 'RGBA32F');
    export const Alpha = createEnumToken('ShaderEffectSource', 'Format', 'Alpha');
    export const RGB = createEnumToken('ShaderEffectSource', 'Format', 'RGB');
    export const RGBA = createEnumToken('ShaderEffectSource', 'Format', 'RGBA');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TextureMirroring {
    export const NoMirroring = createEnumToken(
      'ShaderEffectSource',
      'TextureMirroring',
      'NoMirroring',
    );
    export const MirrorHorizontally = createEnumToken(
      'ShaderEffectSource',
      'TextureMirroring',
      'MirrorHorizontally',
    );
    export const MirrorVertically = createEnumToken(
      'ShaderEffectSource',
      'TextureMirroring',
      'MirrorVertically',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'ShaderEffectSource',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'ShaderEffectSource',
      'TransformOrigin',
      'BottomRight',
    );
  }
  export namespace WrapMode {
    export const ClampToEdge = createEnumToken('ShaderEffectSource', 'WrapMode', 'ClampToEdge');
    export const RepeatHorizontally = createEnumToken(
      'ShaderEffectSource',
      'WrapMode',
      'RepeatHorizontally',
    );
    export const RepeatVertically = createEnumToken(
      'ShaderEffectSource',
      'WrapMode',
      'RepeatVertically',
    );
    export const Repeat = createEnumToken('ShaderEffectSource', 'WrapMode', 'Repeat');
  }
}
