// AUTO-GENERATED — DO NOT EDIT
// Type: SystemPalette
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
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
export interface SystemPaletteBuilder {
  id(id: string): SystemPaletteBuilder;
  child(obj: QmlObjectBuilder): SystemPaletteBuilder;

  colorGroup(value: QmlValue): SystemPaletteBuilder;
  colorGroupBind(expr: string): SystemPaletteBuilder;
  objectName(value: string): SystemPaletteBuilder;
  objectNameBind(expr: string): SystemPaletteBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SystemPaletteBuilder;
  onPaletteChanged(handler: () => void): SystemPaletteBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): SystemPaletteBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): SystemPaletteBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): SystemPaletteBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): SystemPaletteBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): SystemPaletteBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): SystemPaletteBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): SystemPaletteBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): SystemPaletteBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): SystemPaletteBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): SystemPaletteBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): SystemPaletteBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): SystemPaletteBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): SystemPaletteBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): SystemPaletteBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): SystemPaletteBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): SystemPaletteBuilder;
}

export function SystemPalette(): SystemPaletteBuilder {
  return new DslBuilderImpl('SystemPalette') as unknown as SystemPaletteBuilder;
}

export namespace SystemPalette {
  export namespace ColorGroup {
    export const Active = createEnumToken('SystemPalette', 'ColorGroup', 'Active');
    export const Inactive = createEnumToken('SystemPalette', 'ColorGroup', 'Inactive');
    export const Disabled = createEnumToken('SystemPalette', 'ColorGroup', 'Disabled');
  }
}
