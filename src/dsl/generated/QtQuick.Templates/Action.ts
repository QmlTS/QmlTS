// AUTO-GENERATED — DO NOT EDIT
// Type: Action
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
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
export interface ActionBuilder {
  id(id: string): ActionBuilder;
  child(obj: QmlObjectBuilder): ActionBuilder;

  checkable(value: boolean): ActionBuilder;
  checkableBind(expr: string): ActionBuilder;
  checked(value: boolean): ActionBuilder;
  checkedBind(expr: string): ActionBuilder;
  enabled(value: boolean): ActionBuilder;
  enabledBind(expr: string): ActionBuilder;
  icon(value: QmlValue): ActionBuilder;
  iconBind(expr: string): ActionBuilder;
  objectName(value: string): ActionBuilder;
  objectNameBind(expr: string): ActionBuilder;
  shortcut(value: QmlValue): ActionBuilder;
  shortcutBind(expr: string): ActionBuilder;
  text(value: string): ActionBuilder;
  textBind(expr: string): ActionBuilder;
  onCheckableChanged(handler: (checkable: boolean) => void): ActionBuilder;
  onCheckedChanged(handler: (checked: boolean) => void): ActionBuilder;
  onEnabledChanged(handler: (enabled: boolean) => void): ActionBuilder;
  onIconChanged(handler: (icon: QmlValue) => void): ActionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ActionBuilder;
  onShortcutChanged(handler: (shortcut: QmlValue) => void): ActionBuilder;
  onTextChanged(handler: (text: string) => void): ActionBuilder;
  onToggled(handler: (source: QtObjectBuilder) => void): ActionBuilder;
  onTriggered(handler: (source: QtObjectBuilder) => void): ActionBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ActionBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ActionBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ActionBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ActionBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ActionBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ActionBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ActionBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ActionBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ActionBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ActionBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ActionBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ActionBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ActionBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ActionBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ActionBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ActionBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ActionBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ActionBuilder;
}

export function Action(): ActionBuilder {
  return new DslBuilderImpl('Action') as unknown as ActionBuilder;
}
