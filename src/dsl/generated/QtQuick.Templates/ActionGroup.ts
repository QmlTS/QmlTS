// AUTO-GENERATED — DO NOT EDIT
// Type: ActionGroup
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { ActionBuilder } from './Action.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { OverlayAttachedBuilder } from './QQuickOverlayAttached.js';
import type { ScrollBarAttachedBuilder } from './QQuickScrollBarAttached.js';
import type { ScrollIndicatorAttachedBuilder } from './QQuickScrollIndicatorAttached.js';
import type { SelectionRectangleAttachedBuilder } from './QQuickSelectionRectangleAttached.js';
import type { SplitViewAttachedBuilder } from './QQuickSplitViewAttached.js';
import type { StackViewAttachedBuilder } from './QQuickStackViewAttached.js';
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface ActionGroupBuilder {
  id(id: string): ActionGroupBuilder;
  child(obj: QmlObjectBuilder): ActionGroupBuilder;

  checkedAction(value: ActionBuilder): ActionGroupBuilder;
  checkedActionBind(expr: string): ActionGroupBuilder;
  enabled(value: boolean): ActionGroupBuilder;
  enabledBind(expr: string): ActionGroupBuilder;
  exclusive(value: boolean): ActionGroupBuilder;
  exclusiveBind(expr: string): ActionGroupBuilder;
  objectName(value: string): ActionGroupBuilder;
  objectNameBind(expr: string): ActionGroupBuilder;
  onActionsChanged(handler: () => void): ActionGroupBuilder;
  onCheckedActionChanged(handler: () => void): ActionGroupBuilder;
  onEnabledChanged(handler: () => void): ActionGroupBuilder;
  onExclusiveChanged(handler: () => void): ActionGroupBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ActionGroupBuilder;
  onTriggered(handler: (action: ActionBuilder) => void): ActionGroupBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ActionGroupBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ActionGroupBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ActionGroupBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ActionGroupBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ActionGroupBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ActionGroupBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ActionGroupBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ActionGroupBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ActionGroupBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ActionGroupBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ActionGroupBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ActionGroupBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ActionGroupBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ActionGroupBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ActionGroupBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ActionGroupBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ActionGroupBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ActionGroupBuilder;
}

export function ActionGroup(): ActionGroupBuilder {
  return new DslBuilderImpl('ActionGroup') as unknown as ActionGroupBuilder;
}
