// AUTO-GENERATED — DO NOT EDIT
// Type: IntValidator
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
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
export interface IntValidatorBuilder {
  id(id: string): IntValidatorBuilder;
  child(obj: QmlObjectBuilder): IntValidatorBuilder;

  bottom(value: number): IntValidatorBuilder;
  bottomBind(expr: string): IntValidatorBuilder;
  locale(value: string): IntValidatorBuilder;
  localeBind(expr: string): IntValidatorBuilder;
  objectName(value: string): IntValidatorBuilder;
  objectNameBind(expr: string): IntValidatorBuilder;
  top(value: number): IntValidatorBuilder;
  topBind(expr: string): IntValidatorBuilder;
  onBottomChanged(handler: (bottom: number) => void): IntValidatorBuilder;
  onChanged(handler: () => void): IntValidatorBuilder;
  onLocaleNameChanged(handler: () => void): IntValidatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): IntValidatorBuilder;
  onTopChanged(handler: (top: number) => void): IntValidatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): IntValidatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): IntValidatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): IntValidatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): IntValidatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): IntValidatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): IntValidatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): IntValidatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): IntValidatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): IntValidatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): IntValidatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): IntValidatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): IntValidatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): IntValidatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): IntValidatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): IntValidatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): IntValidatorBuilder;
}

export function IntValidator(): IntValidatorBuilder {
  return new DslBuilderImpl('IntValidator') as unknown as IntValidatorBuilder;
}

export namespace IntValidator {
  export namespace State {
    export const Invalid = createEnumToken('IntValidator', 'State', 'Invalid');
    export const Intermediate = createEnumToken('IntValidator', 'State', 'Intermediate');
    export const Acceptable = createEnumToken('IntValidator', 'State', 'Acceptable');
  }
}
