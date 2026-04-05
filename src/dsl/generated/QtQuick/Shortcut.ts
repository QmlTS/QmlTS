// AUTO-GENERATED — DO NOT EDIT
// Type: Shortcut
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
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
export interface ShortcutBuilder {
  id(id: string): ShortcutBuilder;
  child(obj: QmlObjectBuilder): ShortcutBuilder;

  autoRepeat(value: boolean): ShortcutBuilder;
  autoRepeatBind(expr: string): ShortcutBuilder;
  context(value: QmlValue): ShortcutBuilder;
  contextBind(expr: string): ShortcutBuilder;
  enabled(value: boolean): ShortcutBuilder;
  enabledBind(expr: string): ShortcutBuilder;
  objectName(value: string): ShortcutBuilder;
  objectNameBind(expr: string): ShortcutBuilder;
  sequence(value: QmlValue): ShortcutBuilder;
  sequenceBind(expr: string): ShortcutBuilder;
  sequences(value: QmlValue): ShortcutBuilder;
  sequencesBind(expr: string): ShortcutBuilder;
  onActivated(handler: () => void): ShortcutBuilder;
  onActivatedAmbiguously(handler: () => void): ShortcutBuilder;
  onAutoRepeatChanged(handler: () => void): ShortcutBuilder;
  onContextChanged(handler: () => void): ShortcutBuilder;
  onEnabledChanged(handler: () => void): ShortcutBuilder;
  onNativeTextChanged(handler: () => void): ShortcutBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ShortcutBuilder;
  onPortableTextChanged(handler: () => void): ShortcutBuilder;
  onSequenceChanged(handler: () => void): ShortcutBuilder;
  onSequencesChanged(handler: () => void): ShortcutBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ShortcutBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ShortcutBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ShortcutBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ShortcutBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ShortcutBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ShortcutBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ShortcutBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ShortcutBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ShortcutBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ShortcutBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ShortcutBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ShortcutBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ShortcutBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ShortcutBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ShortcutBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ShortcutBuilder;
}

export function Shortcut(): ShortcutBuilder {
  return new DslBuilderImpl('Shortcut') as unknown as ShortcutBuilder;
}
