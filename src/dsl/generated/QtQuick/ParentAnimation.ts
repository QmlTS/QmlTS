// AUTO-GENERATED — DO NOT EDIT
// Type: ParentAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
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
export interface ParentAnimationBuilder {
  id(id: string): ParentAnimationBuilder;
  child(obj: QmlObjectBuilder): ParentAnimationBuilder;

  alwaysRunToEnd(value: boolean): ParentAnimationBuilder;
  alwaysRunToEndBind(expr: string): ParentAnimationBuilder;
  loops(value: number): ParentAnimationBuilder;
  loopsBind(expr: string): ParentAnimationBuilder;
  newParent(value: ItemBuilder): ParentAnimationBuilder;
  newParentBind(expr: string): ParentAnimationBuilder;
  objectName(value: string): ParentAnimationBuilder;
  objectNameBind(expr: string): ParentAnimationBuilder;
  paused(value: boolean): ParentAnimationBuilder;
  pausedBind(expr: string): ParentAnimationBuilder;
  running(value: boolean): ParentAnimationBuilder;
  runningBind(expr: string): ParentAnimationBuilder;
  target(value: ItemBuilder): ParentAnimationBuilder;
  targetBind(expr: string): ParentAnimationBuilder;
  via(value: ItemBuilder): ParentAnimationBuilder;
  viaBind(expr: string): ParentAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): ParentAnimationBuilder;
  onFinished(handler: () => void): ParentAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): ParentAnimationBuilder;
  onNewParentChanged(handler: () => void): ParentAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ParentAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): ParentAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): ParentAnimationBuilder;
  onStarted(handler: () => void): ParentAnimationBuilder;
  onStopped(handler: () => void): ParentAnimationBuilder;
  onTargetChanged(handler: () => void): ParentAnimationBuilder;
  onViaChanged(handler: () => void): ParentAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ParentAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ParentAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ParentAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ParentAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ParentAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ParentAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ParentAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ParentAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ParentAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ParentAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ParentAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ParentAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ParentAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ParentAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ParentAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ParentAnimationBuilder;
}

export function ParentAnimation(): ParentAnimationBuilder {
  return new DslBuilderImpl('ParentAnimation') as unknown as ParentAnimationBuilder;
}

export namespace ParentAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('ParentAnimation', 'Loops', 'Infinite');
  }
}
