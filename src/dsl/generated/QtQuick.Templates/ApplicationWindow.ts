// AUTO-GENERATED — DO NOT EDIT
// Type: ApplicationWindow
// Generated from Qt 6.11.0

import type { QmlColor, QmlFont, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
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
export interface ApplicationWindowBuilder {
  id(id: string): ApplicationWindowBuilder;
  child(obj: QmlObjectBuilder): ApplicationWindowBuilder;

  background(value: ItemBuilder): ApplicationWindowBuilder;
  backgroundBind(expr: string): ApplicationWindowBuilder;
  bottomPadding(value: number): ApplicationWindowBuilder;
  bottomPaddingBind(expr: string): ApplicationWindowBuilder;
  color(value: QmlColor): ApplicationWindowBuilder;
  colorBind(expr: string): ApplicationWindowBuilder;
  contentOrientation(value: QmlValue): ApplicationWindowBuilder;
  contentOrientationBind(expr: string): ApplicationWindowBuilder;
  flags(value: QmlValue): ApplicationWindowBuilder;
  flagsBind(expr: string): ApplicationWindowBuilder;
  font(value: QmlFont): ApplicationWindowBuilder;
  fontBind(expr: string): ApplicationWindowBuilder;
  footer(value: ItemBuilder): ApplicationWindowBuilder;
  footerBind(expr: string): ApplicationWindowBuilder;
  header(value: ItemBuilder): ApplicationWindowBuilder;
  headerBind(expr: string): ApplicationWindowBuilder;
  height(value: number): ApplicationWindowBuilder;
  heightBind(expr: string): ApplicationWindowBuilder;
  leftPadding(value: number): ApplicationWindowBuilder;
  leftPaddingBind(expr: string): ApplicationWindowBuilder;
  locale(value: QmlValue): ApplicationWindowBuilder;
  localeBind(expr: string): ApplicationWindowBuilder;
  maximumHeight(value: number): ApplicationWindowBuilder;
  maximumHeightBind(expr: string): ApplicationWindowBuilder;
  maximumWidth(value: number): ApplicationWindowBuilder;
  maximumWidthBind(expr: string): ApplicationWindowBuilder;
  menuBar(value: ItemBuilder): ApplicationWindowBuilder;
  menuBarBind(expr: string): ApplicationWindowBuilder;
  minimumHeight(value: number): ApplicationWindowBuilder;
  minimumHeightBind(expr: string): ApplicationWindowBuilder;
  minimumWidth(value: number): ApplicationWindowBuilder;
  minimumWidthBind(expr: string): ApplicationWindowBuilder;
  modality(value: QmlValue): ApplicationWindowBuilder;
  modalityBind(expr: string): ApplicationWindowBuilder;
  objectName(value: string): ApplicationWindowBuilder;
  objectNameBind(expr: string): ApplicationWindowBuilder;
  opacity(value: number): ApplicationWindowBuilder;
  opacityBind(expr: string): ApplicationWindowBuilder;
  palette(value: PaletteBuilder): ApplicationWindowBuilder;
  paletteBind(expr: string): ApplicationWindowBuilder;
  rightPadding(value: number): ApplicationWindowBuilder;
  rightPaddingBind(expr: string): ApplicationWindowBuilder;
  screen(value: QmlValue): ApplicationWindowBuilder;
  screenBind(expr: string): ApplicationWindowBuilder;
  title(value: string): ApplicationWindowBuilder;
  titleBind(expr: string): ApplicationWindowBuilder;
  topPadding(value: number): ApplicationWindowBuilder;
  topPaddingBind(expr: string): ApplicationWindowBuilder;
  transientParent(value: QmlValue): ApplicationWindowBuilder;
  transientParentBind(expr: string): ApplicationWindowBuilder;
  visibility(value: QmlValue): ApplicationWindowBuilder;
  visibilityBind(expr: string): ApplicationWindowBuilder;
  visible(value: boolean): ApplicationWindowBuilder;
  visibleBind(expr: string): ApplicationWindowBuilder;
  width(value: number): ApplicationWindowBuilder;
  widthBind(expr: string): ApplicationWindowBuilder;
  x(value: number): ApplicationWindowBuilder;
  xBind(expr: string): ApplicationWindowBuilder;
  y(value: number): ApplicationWindowBuilder;
  yBind(expr: string): ApplicationWindowBuilder;
  onActiveChanged(handler: () => void): ApplicationWindowBuilder;
  onActiveFocusControlChanged(handler: () => void): ApplicationWindowBuilder;
  onActiveFocusItemChanged(handler: () => void): ApplicationWindowBuilder;
  onAfterAnimating(handler: () => void): ApplicationWindowBuilder;
  onAfterFrameEnd(handler: () => void): ApplicationWindowBuilder;
  onAfterRenderPassRecording(handler: () => void): ApplicationWindowBuilder;
  onAfterRendering(handler: () => void): ApplicationWindowBuilder;
  onAfterSynchronizing(handler: () => void): ApplicationWindowBuilder;
  onBackgroundChanged(handler: () => void): ApplicationWindowBuilder;
  onBeforeFrameBegin(handler: () => void): ApplicationWindowBuilder;
  onBeforeRenderPassRecording(handler: () => void): ApplicationWindowBuilder;
  onBeforeRendering(handler: () => void): ApplicationWindowBuilder;
  onBeforeSynchronizing(handler: () => void): ApplicationWindowBuilder;
  onBottomPaddingChanged(handler: () => void): ApplicationWindowBuilder;
  onClosing(handler: (close: QmlValue) => void): ApplicationWindowBuilder;
  onColorChanged(handler: (arg0: QmlColor) => void): ApplicationWindowBuilder;
  onContentOrientationChanged(handler: (orientation: QmlValue) => void): ApplicationWindowBuilder;
  onDevicePixelRatioChanged(handler: () => void): ApplicationWindowBuilder;
  onFlagsChanged(handler: (flags: QmlValue) => void): ApplicationWindowBuilder;
  onFocusObjectChanged(handler: (object: QtObjectBuilder) => void): ApplicationWindowBuilder;
  onFontChanged(handler: () => void): ApplicationWindowBuilder;
  onFooterChanged(handler: () => void): ApplicationWindowBuilder;
  onFrameSwapped(handler: () => void): ApplicationWindowBuilder;
  onHeaderChanged(handler: () => void): ApplicationWindowBuilder;
  onHeightChanged(handler: (arg: number) => void): ApplicationWindowBuilder;
  onLeftPaddingChanged(handler: () => void): ApplicationWindowBuilder;
  onLocaleChanged(handler: () => void): ApplicationWindowBuilder;
  onMaximumHeightChanged(handler: (arg: number) => void): ApplicationWindowBuilder;
  onMaximumWidthChanged(handler: (arg: number) => void): ApplicationWindowBuilder;
  onMenuBarChanged(handler: () => void): ApplicationWindowBuilder;
  onMinimumHeightChanged(handler: (arg: number) => void): ApplicationWindowBuilder;
  onMinimumWidthChanged(handler: (arg: number) => void): ApplicationWindowBuilder;
  onModalityChanged(handler: (modality: QmlValue) => void): ApplicationWindowBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ApplicationWindowBuilder;
  onOpacityChanged(handler: (opacity: number) => void): ApplicationWindowBuilder;
  onPaletteChanged(handler: () => void): ApplicationWindowBuilder;
  onPaletteCreated(handler: () => void): ApplicationWindowBuilder;
  onRightPaddingChanged(handler: () => void): ApplicationWindowBuilder;
  onSafeAreaMarginsChanged(handler: (arg: QmlValue) => void): ApplicationWindowBuilder;
  onSceneGraphAboutToStop(handler: () => void): ApplicationWindowBuilder;
  onSceneGraphError(handler: (error: QmlValue, message: string) => void): ApplicationWindowBuilder;
  onSceneGraphInitialized(handler: () => void): ApplicationWindowBuilder;
  onSceneGraphInvalidated(handler: () => void): ApplicationWindowBuilder;
  onScreenChanged(handler: () => void): ApplicationWindowBuilder;
  onTopPaddingChanged(handler: () => void): ApplicationWindowBuilder;
  onTransientParentChanged(handler: (transientParent: QmlValue) => void): ApplicationWindowBuilder;
  onVisibilityChanged(handler: (visibility: QmlValue) => void): ApplicationWindowBuilder;
  onVisibleChanged(handler: (arg: boolean) => void): ApplicationWindowBuilder;
  onWidthChanged(handler: (arg: number) => void): ApplicationWindowBuilder;
  onWindowStateChanged(handler: (windowState: QmlValue) => void): ApplicationWindowBuilder;
  onWindowTitleChanged(handler: (title: string) => void): ApplicationWindowBuilder;
  onXChanged(handler: (arg: number) => void): ApplicationWindowBuilder;
  onYChanged(handler: (arg: number) => void): ApplicationWindowBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ApplicationWindowBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ApplicationWindowBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ApplicationWindowBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ApplicationWindowBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ApplicationWindowBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ApplicationWindowBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ApplicationWindowBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ApplicationWindowBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): ApplicationWindowBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ApplicationWindowBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ApplicationWindowBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ApplicationWindowBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ApplicationWindowBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ApplicationWindowBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ApplicationWindowBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ApplicationWindowBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ApplicationWindowBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ApplicationWindowBuilder;
}

export function ApplicationWindow(): ApplicationWindowBuilder {
  return new DslBuilderImpl('ApplicationWindow') as unknown as ApplicationWindowBuilder;
}

export namespace ApplicationWindow {
  export namespace AncestorMode {
    export const ExcludeTransients = createEnumToken(
      'ApplicationWindow',
      'AncestorMode',
      'ExcludeTransients',
    );
    export const IncludeTransients = createEnumToken(
      'ApplicationWindow',
      'AncestorMode',
      'IncludeTransients',
    );
  }
  export namespace CreateTextureOptions {
    export const TextureHasAlphaChannel = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureHasAlphaChannel',
    );
    export const TextureHasMipmaps = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureHasMipmaps',
    );
    export const TextureOwnsGLTexture = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureOwnsGLTexture',
    );
    export const TextureCanUseAtlas = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureCanUseAtlas',
    );
    export const TextureIsOpaque = createEnumToken(
      'ApplicationWindow',
      'CreateTextureOptions',
      'TextureIsOpaque',
    );
  }
  export namespace SceneGraphError {
    export const ContextNotAvailable = createEnumToken(
      'ApplicationWindow',
      'SceneGraphError',
      'ContextNotAvailable',
    );
  }
  export namespace TextRenderType {
    export const QtTextRendering = createEnumToken(
      'ApplicationWindow',
      'TextRenderType',
      'QtTextRendering',
    );
    export const NativeTextRendering = createEnumToken(
      'ApplicationWindow',
      'TextRenderType',
      'NativeTextRendering',
    );
    export const CurveTextRendering = createEnumToken(
      'ApplicationWindow',
      'TextRenderType',
      'CurveTextRendering',
    );
  }
  export namespace Visibility {
    export const Hidden = createEnumToken('ApplicationWindow', 'Visibility', 'Hidden');
    export const AutomaticVisibility = createEnumToken(
      'ApplicationWindow',
      'Visibility',
      'AutomaticVisibility',
    );
    export const Windowed = createEnumToken('ApplicationWindow', 'Visibility', 'Windowed');
    export const Minimized = createEnumToken('ApplicationWindow', 'Visibility', 'Minimized');
    export const Maximized = createEnumToken('ApplicationWindow', 'Visibility', 'Maximized');
    export const FullScreen = createEnumToken('ApplicationWindow', 'Visibility', 'FullScreen');
  }
}
