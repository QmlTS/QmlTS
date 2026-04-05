// AUTO-GENERATED — DO NOT EDIT
// Type: StateChangeScript
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
export interface StateChangeScriptBuilder {
  id(id: string): StateChangeScriptBuilder;
  child(obj: QmlObjectBuilder): StateChangeScriptBuilder;

  name(value: string): StateChangeScriptBuilder;
  nameBind(expr: string): StateChangeScriptBuilder;
  objectName(value: string): StateChangeScriptBuilder;
  objectNameBind(expr: string): StateChangeScriptBuilder;
  script(value: QmlValue): StateChangeScriptBuilder;
  scriptBind(expr: string): StateChangeScriptBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): StateChangeScriptBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): StateChangeScriptBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): StateChangeScriptBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): StateChangeScriptBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): StateChangeScriptBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): StateChangeScriptBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): StateChangeScriptBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): StateChangeScriptBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): StateChangeScriptBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): StateChangeScriptBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): StateChangeScriptBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): StateChangeScriptBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): StateChangeScriptBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): StateChangeScriptBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): StateChangeScriptBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): StateChangeScriptBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): StateChangeScriptBuilder;
}

export function StateChangeScript(): StateChangeScriptBuilder {
  return new DslBuilderImpl('StateChangeScript') as unknown as StateChangeScriptBuilder;
}
