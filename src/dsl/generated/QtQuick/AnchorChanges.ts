// AUTO-GENERATED — DO NOT EDIT
// Type: AnchorChanges
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { AnchorsBuilder } from './QQuickAnchorSet.js';
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
export interface AnchorChangesBuilder {
  id(id: string): AnchorChangesBuilder;
  child(obj: QmlObjectBuilder): AnchorChangesBuilder;

  objectName(value: string): AnchorChangesBuilder;
  objectNameBind(expr: string): AnchorChangesBuilder;
  target(value: ItemBuilder): AnchorChangesBuilder;
  targetBind(expr: string): AnchorChangesBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AnchorChangesBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AnchorChangesBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): AnchorChangesBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): AnchorChangesBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): AnchorChangesBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): AnchorChangesBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): AnchorChangesBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): AnchorChangesBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): AnchorChangesBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): AnchorChangesBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): AnchorChangesBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): AnchorChangesBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): AnchorChangesBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): AnchorChangesBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): AnchorChangesBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): AnchorChangesBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): AnchorChangesBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): AnchorChangesBuilder;
}

export function AnchorChanges(): AnchorChangesBuilder {
  return new DslBuilderImpl('AnchorChanges') as unknown as AnchorChangesBuilder;
}
