// AUTO-GENERATED — DO NOT EDIT
// Type: AnimationController
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
export interface AnimationControllerBuilder {
  id(id: string): AnimationControllerBuilder;
  child(obj: QmlObjectBuilder): AnimationControllerBuilder;

  animation(value: QmlValue): AnimationControllerBuilder;
  animationBind(expr: string): AnimationControllerBuilder;
  objectName(value: string): AnimationControllerBuilder;
  objectNameBind(expr: string): AnimationControllerBuilder;
  progress(value: number): AnimationControllerBuilder;
  progressBind(expr: string): AnimationControllerBuilder;
  onAnimationChanged(handler: () => void): AnimationControllerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AnimationControllerBuilder;
  onProgressChanged(handler: () => void): AnimationControllerBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): AnimationControllerBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): AnimationControllerBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): AnimationControllerBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): AnimationControllerBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): AnimationControllerBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): AnimationControllerBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): AnimationControllerBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): AnimationControllerBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): AnimationControllerBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): AnimationControllerBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): AnimationControllerBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): AnimationControllerBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): AnimationControllerBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): AnimationControllerBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): AnimationControllerBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): AnimationControllerBuilder;
}

export function AnimationController(): AnimationControllerBuilder {
  return new DslBuilderImpl('AnimationController') as unknown as AnimationControllerBuilder;
}
