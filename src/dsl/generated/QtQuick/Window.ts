// AUTO-GENERATED — DO NOT EDIT
// Type: Window
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
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
  contentOrientation(value: QmlValue): WindowBuilder;
  contentOrientationBind(expr: string): WindowBuilder;
  flags(value: QmlValue): WindowBuilder;
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
  modality(value: QmlValue): WindowBuilder;
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
  visibility(value: QmlValue): WindowBuilder;
  visibilityBind(expr: string): WindowBuilder;
  visible(value: boolean): WindowBuilder;
  visibleBind(expr: string): WindowBuilder;
  width(value: number): WindowBuilder;
  widthBind(expr: string): WindowBuilder;
  x(value: number): WindowBuilder;
  xBind(expr: string): WindowBuilder;
  y(value: number): WindowBuilder;
  yBind(expr: string): WindowBuilder;
  onActiveChanged(handler: () => void): WindowBuilder;
  onActiveFocusItemChanged(handler: () => void): WindowBuilder;
  onAfterAnimating(handler: () => void): WindowBuilder;
  onAfterFrameEnd(handler: () => void): WindowBuilder;
  onAfterRenderPassRecording(handler: () => void): WindowBuilder;
  onAfterRendering(handler: () => void): WindowBuilder;
  onAfterSynchronizing(handler: () => void): WindowBuilder;
  onBeforeFrameBegin(handler: () => void): WindowBuilder;
  onBeforeRenderPassRecording(handler: () => void): WindowBuilder;
  onBeforeRendering(handler: () => void): WindowBuilder;
  onBeforeSynchronizing(handler: () => void): WindowBuilder;
  onClosing(handler: (close: QmlValue) => void): WindowBuilder;
  onColorChanged(handler: (arg0: QmlColor) => void): WindowBuilder;
  onContentOrientationChanged(handler: (orientation: QmlValue) => void): WindowBuilder;
  onDevicePixelRatioChanged(handler: () => void): WindowBuilder;
  onFlagsChanged(handler: (flags: QmlValue) => void): WindowBuilder;
  onFocusObjectChanged(handler: (object: QtObjectBuilder) => void): WindowBuilder;
  onFrameSwapped(handler: () => void): WindowBuilder;
  onHeightChanged(handler: (arg: number) => void): WindowBuilder;
  onMaximumHeightChanged(handler: (arg: number) => void): WindowBuilder;
  onMaximumWidthChanged(handler: (arg: number) => void): WindowBuilder;
  onMinimumHeightChanged(handler: (arg: number) => void): WindowBuilder;
  onMinimumWidthChanged(handler: (arg: number) => void): WindowBuilder;
  onModalityChanged(handler: (modality: QmlValue) => void): WindowBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): WindowBuilder;
  onOpacityChanged(handler: (opacity: number) => void): WindowBuilder;
  onPaletteChanged(handler: () => void): WindowBuilder;
  onPaletteCreated(handler: () => void): WindowBuilder;
  onSafeAreaMarginsChanged(handler: (arg: QmlValue) => void): WindowBuilder;
  onSceneGraphAboutToStop(handler: () => void): WindowBuilder;
  onSceneGraphError(handler: (error: QmlValue, message: string) => void): WindowBuilder;
  onSceneGraphInitialized(handler: () => void): WindowBuilder;
  onSceneGraphInvalidated(handler: () => void): WindowBuilder;
  onScreenChanged(handler: () => void): WindowBuilder;
  onTransientParentChanged(handler: (transientParent: QmlValue) => void): WindowBuilder;
  onVisibilityChanged(handler: (visibility: QmlValue) => void): WindowBuilder;
  onVisibleChanged(handler: (arg: boolean) => void): WindowBuilder;
  onWidthChanged(handler: (arg: number) => void): WindowBuilder;
  onWindowStateChanged(handler: (windowState: QmlValue) => void): WindowBuilder;
  onWindowTitleChanged(handler: (title: string) => void): WindowBuilder;
  onXChanged(handler: (arg: number) => void): WindowBuilder;
  onYChanged(handler: (arg: number) => void): WindowBuilder;
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

export function Window(): WindowBuilder {
  return new DslBuilderImpl('Window') as unknown as WindowBuilder;
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
