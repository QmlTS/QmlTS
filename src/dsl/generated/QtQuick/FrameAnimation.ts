// AUTO-GENERATED — DO NOT EDIT
// Type: FrameAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
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
export interface FrameAnimationBuilder {
  id(id: string): FrameAnimationBuilder;
  child(obj: QmlObjectBuilder): FrameAnimationBuilder;

  objectName(value: string): FrameAnimationBuilder;
  objectNameBind(expr: string): FrameAnimationBuilder;
  paused(value: boolean): FrameAnimationBuilder;
  pausedBind(expr: string): FrameAnimationBuilder;
  running(value: boolean): FrameAnimationBuilder;
  runningBind(expr: string): FrameAnimationBuilder;
  onCurrentFrameChanged(handler: () => void): FrameAnimationBuilder;
  onElapsedTimeChanged(handler: () => void): FrameAnimationBuilder;
  onFrameTimeChanged(handler: () => void): FrameAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FrameAnimationBuilder;
  onPausedChanged(handler: () => void): FrameAnimationBuilder;
  onRunningChanged(handler: () => void): FrameAnimationBuilder;
  onSmoothFrameTimeChanged(handler: () => void): FrameAnimationBuilder;
  onTriggered(handler: () => void): FrameAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FrameAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FrameAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FrameAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FrameAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FrameAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FrameAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FrameAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FrameAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FrameAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FrameAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FrameAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FrameAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FrameAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FrameAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FrameAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FrameAnimationBuilder;
}

export function FrameAnimation(): FrameAnimationBuilder {
  return new DslBuilderImpl('FrameAnimation') as unknown as FrameAnimationBuilder;
}
