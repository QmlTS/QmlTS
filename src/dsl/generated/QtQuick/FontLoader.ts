// AUTO-GENERATED — DO NOT EDIT
// Type: FontLoader
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
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
export interface FontLoaderBuilder {
  id(id: string): FontLoaderBuilder;
  child(obj: QmlObjectBuilder): FontLoaderBuilder;

  objectName(value: string): FontLoaderBuilder;
  objectNameBind(expr: string): FontLoaderBuilder;
  source(value: QmlUrl): FontLoaderBuilder;
  sourceBind(expr: string): FontLoaderBuilder;
  onFontChanged(handler: () => void): FontLoaderBuilder;
  onNameChanged(handler: () => void): FontLoaderBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FontLoaderBuilder;
  onSourceChanged(handler: () => void): FontLoaderBuilder;
  onStatusChanged(handler: () => void): FontLoaderBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FontLoaderBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FontLoaderBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FontLoaderBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FontLoaderBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FontLoaderBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FontLoaderBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FontLoaderBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FontLoaderBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FontLoaderBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FontLoaderBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FontLoaderBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FontLoaderBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FontLoaderBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FontLoaderBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FontLoaderBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FontLoaderBuilder;
}

export function FontLoader(): FontLoaderBuilder {
  return new DslBuilderImpl('FontLoader') as unknown as FontLoaderBuilder;
}

export namespace FontLoader {
  export namespace Status {
    export const Null = createEnumToken('FontLoader', 'Status', 'Null');
    export const Ready = createEnumToken('FontLoader', 'Status', 'Ready');
    export const Loading = createEnumToken('FontLoader', 'Status', 'Loading');
    export const Error = createEnumToken('FontLoader', 'Status', 'Error');
  }
}
