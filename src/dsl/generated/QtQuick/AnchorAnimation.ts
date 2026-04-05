// AUTO-GENERATED — DO NOT EDIT
// Type: AnchorAnimation
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
export interface AnchorAnimationBuilder {
  id(id: string): AnchorAnimationBuilder;
  child(obj: QmlObjectBuilder): AnchorAnimationBuilder;

  alwaysRunToEnd(value: boolean): AnchorAnimationBuilder;
  alwaysRunToEndBind(expr: string): AnchorAnimationBuilder;
  duration(value: number): AnchorAnimationBuilder;
  durationBind(expr: string): AnchorAnimationBuilder;
  easing(value: QmlValue): AnchorAnimationBuilder;
  easingBind(expr: string): AnchorAnimationBuilder;
  loops(value: number): AnchorAnimationBuilder;
  loopsBind(expr: string): AnchorAnimationBuilder;
  objectName(value: string): AnchorAnimationBuilder;
  objectNameBind(expr: string): AnchorAnimationBuilder;
  paused(value: boolean): AnchorAnimationBuilder;
  pausedBind(expr: string): AnchorAnimationBuilder;
  running(value: boolean): AnchorAnimationBuilder;
  runningBind(expr: string): AnchorAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): AnchorAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): AnchorAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): AnchorAnimationBuilder;
  onFinished(handler: () => void): AnchorAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): AnchorAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AnchorAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): AnchorAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): AnchorAnimationBuilder;
  onStarted(handler: () => void): AnchorAnimationBuilder;
  onStopped(handler: () => void): AnchorAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): AnchorAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): AnchorAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): AnchorAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): AnchorAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): AnchorAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): AnchorAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): AnchorAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): AnchorAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): AnchorAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): AnchorAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): AnchorAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): AnchorAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): AnchorAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): AnchorAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): AnchorAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): AnchorAnimationBuilder;
}

export function AnchorAnimation(): AnchorAnimationBuilder {
  return new DslBuilderImpl('AnchorAnimation') as unknown as AnchorAnimationBuilder;
}

export namespace AnchorAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('AnchorAnimation', 'Loops', 'Infinite');
  }
}
