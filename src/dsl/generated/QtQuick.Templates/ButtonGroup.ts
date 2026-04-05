// AUTO-GENERATED — DO NOT EDIT
// Type: ButtonGroup
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { AbstractButtonBuilder } from './AbstractButton.js';
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
export interface ButtonGroupBuilder {
  id(id: string): ButtonGroupBuilder;
  child(obj: QmlObjectBuilder): ButtonGroupBuilder;

  checkState(value: QmlValue): ButtonGroupBuilder;
  checkStateBind(expr: string): ButtonGroupBuilder;
  checkedButton(value: AbstractButtonBuilder): ButtonGroupBuilder;
  checkedButtonBind(expr: string): ButtonGroupBuilder;
  exclusive(value: boolean): ButtonGroupBuilder;
  exclusiveBind(expr: string): ButtonGroupBuilder;
  objectName(value: string): ButtonGroupBuilder;
  objectNameBind(expr: string): ButtonGroupBuilder;
  onButtonsChanged(handler: () => void): ButtonGroupBuilder;
  onCheckStateChanged(handler: () => void): ButtonGroupBuilder;
  onCheckedButtonChanged(handler: () => void): ButtonGroupBuilder;
  onClicked(handler: (button: AbstractButtonBuilder) => void): ButtonGroupBuilder;
  onExclusiveChanged(handler: () => void): ButtonGroupBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ButtonGroupBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ButtonGroupBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ButtonGroupBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ButtonGroupBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ButtonGroupBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ButtonGroupBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ButtonGroupBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ButtonGroupBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ButtonGroupBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ButtonGroupBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ButtonGroupBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ButtonGroupBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ButtonGroupBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ButtonGroupBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ButtonGroupBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ButtonGroupBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ButtonGroupBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ButtonGroupBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ButtonGroupBuilder;
}

export function ButtonGroup(): ButtonGroupBuilder {
  return new DslBuilderImpl('ButtonGroup') as unknown as ButtonGroupBuilder;
}
