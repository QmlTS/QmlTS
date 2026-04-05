// AUTO-GENERATED — DO NOT EDIT
// Type: Gradient
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
export interface GradientBuilder {
  id(id: string): GradientBuilder;
  child(obj: QmlObjectBuilder): GradientBuilder;

  objectName(value: string): GradientBuilder;
  objectNameBind(expr: string): GradientBuilder;
  orientation(value: QmlValue): GradientBuilder;
  orientationBind(expr: string): GradientBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): GradientBuilder;
  onOrientationChanged(handler: () => void): GradientBuilder;
  onUpdated(handler: () => void): GradientBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): GradientBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): GradientBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): GradientBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): GradientBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): GradientBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): GradientBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): GradientBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): GradientBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): GradientBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): GradientBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): GradientBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): GradientBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): GradientBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): GradientBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): GradientBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): GradientBuilder;
}

export function Gradient(): GradientBuilder {
  return new DslBuilderImpl('Gradient') as unknown as GradientBuilder;
}

export namespace Gradient {
  export namespace Orientation {
    export const Vertical = createEnumToken('Gradient', 'Orientation', 'Vertical');
    export const Horizontal = createEnumToken('Gradient', 'Orientation', 'Horizontal');
  }
}
