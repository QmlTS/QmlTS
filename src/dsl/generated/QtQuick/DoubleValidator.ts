// AUTO-GENERATED — DO NOT EDIT
// Type: DoubleValidator
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
export interface DoubleValidatorBuilder {
  id(id: string): DoubleValidatorBuilder;
  child(obj: QmlObjectBuilder): DoubleValidatorBuilder;

  bottom(value: number): DoubleValidatorBuilder;
  bottomBind(expr: string): DoubleValidatorBuilder;
  decimals(value: number): DoubleValidatorBuilder;
  decimalsBind(expr: string): DoubleValidatorBuilder;
  locale(value: string): DoubleValidatorBuilder;
  localeBind(expr: string): DoubleValidatorBuilder;
  notation(value: QmlValue): DoubleValidatorBuilder;
  notationBind(expr: string): DoubleValidatorBuilder;
  objectName(value: string): DoubleValidatorBuilder;
  objectNameBind(expr: string): DoubleValidatorBuilder;
  top(value: number): DoubleValidatorBuilder;
  topBind(expr: string): DoubleValidatorBuilder;
  onBottomChanged(handler: (bottom: number) => void): DoubleValidatorBuilder;
  onChanged(handler: () => void): DoubleValidatorBuilder;
  onDecimalsChanged(handler: (decimals: number) => void): DoubleValidatorBuilder;
  onLocaleNameChanged(handler: () => void): DoubleValidatorBuilder;
  onNotationChanged(handler: (notation: QmlValue) => void): DoubleValidatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DoubleValidatorBuilder;
  onTopChanged(handler: (top: number) => void): DoubleValidatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): DoubleValidatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): DoubleValidatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): DoubleValidatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): DoubleValidatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): DoubleValidatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): DoubleValidatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): DoubleValidatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): DoubleValidatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): DoubleValidatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): DoubleValidatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): DoubleValidatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): DoubleValidatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): DoubleValidatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): DoubleValidatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): DoubleValidatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): DoubleValidatorBuilder;
}

export function DoubleValidator(): DoubleValidatorBuilder {
  return new DslBuilderImpl('DoubleValidator') as unknown as DoubleValidatorBuilder;
}

export namespace DoubleValidator {
  export namespace Notation {
    export const StandardNotation = createEnumToken(
      'DoubleValidator',
      'Notation',
      'StandardNotation',
    );
    export const ScientificNotation = createEnumToken(
      'DoubleValidator',
      'Notation',
      'ScientificNotation',
    );
  }
  export namespace State {
    export const Invalid = createEnumToken('DoubleValidator', 'State', 'Invalid');
    export const Intermediate = createEnumToken('DoubleValidator', 'State', 'Intermediate');
    export const Acceptable = createEnumToken('DoubleValidator', 'State', 'Acceptable');
  }
}
