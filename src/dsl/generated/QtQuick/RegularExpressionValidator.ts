// AUTO-GENERATED — DO NOT EDIT
// Type: RegularExpressionValidator
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
export interface RegularExpressionValidatorBuilder {
  id(id: string): RegularExpressionValidatorBuilder;
  child(obj: QmlObjectBuilder): RegularExpressionValidatorBuilder;

  objectName(value: string): RegularExpressionValidatorBuilder;
  objectNameBind(expr: string): RegularExpressionValidatorBuilder;
  regularExpression(value: QmlValue): RegularExpressionValidatorBuilder;
  regularExpressionBind(expr: string): RegularExpressionValidatorBuilder;
  onChanged(handler: () => void): RegularExpressionValidatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RegularExpressionValidatorBuilder;
  onRegularExpressionChanged(handler: (re: QmlValue) => void): RegularExpressionValidatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  keyNavigation(
    setup: (b: KeyNavigationAttachedBuilder) => void,
  ): RegularExpressionValidatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  layoutMirroring(
    setup: (b: LayoutMirroringAttachedBuilder) => void,
  ): RegularExpressionValidatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): RegularExpressionValidatorBuilder;
  viewTransition(
    setup: (b: ViewTransitionAttachedBuilder) => void,
  ): RegularExpressionValidatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): RegularExpressionValidatorBuilder;
}

export function RegularExpressionValidator(): RegularExpressionValidatorBuilder {
  return new DslBuilderImpl(
    'RegularExpressionValidator',
  ) as unknown as RegularExpressionValidatorBuilder;
}

export namespace RegularExpressionValidator {
  export namespace State {
    export const Invalid = createEnumToken('RegularExpressionValidator', 'State', 'Invalid');
    export const Intermediate = createEnumToken(
      'RegularExpressionValidator',
      'State',
      'Intermediate',
    );
    export const Acceptable = createEnumToken('RegularExpressionValidator', 'State', 'Acceptable');
  }
}
