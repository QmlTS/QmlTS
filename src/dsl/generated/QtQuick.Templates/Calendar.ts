// AUTO-GENERATED — DO NOT EDIT
// Type: Calendar
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
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
export interface CalendarBuilder {
  id(id: string): CalendarBuilder;
  child(obj: QmlObjectBuilder): CalendarBuilder;

  objectName(value: string): CalendarBuilder;
  objectNameBind(expr: string): CalendarBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): CalendarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): CalendarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): CalendarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): CalendarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): CalendarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): CalendarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): CalendarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): CalendarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): CalendarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): CalendarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): CalendarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): CalendarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): CalendarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): CalendarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): CalendarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): CalendarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): CalendarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): CalendarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): CalendarBuilder;
}

export function Calendar(): CalendarBuilder {
  return new DslBuilderImpl('Calendar') as unknown as CalendarBuilder;
}

export namespace Calendar {
  export namespace Month {
    export const January = createEnumToken('Calendar', 'Month', 'January');
    export const February = createEnumToken('Calendar', 'Month', 'February');
    export const March = createEnumToken('Calendar', 'Month', 'March');
    export const April = createEnumToken('Calendar', 'Month', 'April');
    export const May = createEnumToken('Calendar', 'Month', 'May');
    export const June = createEnumToken('Calendar', 'Month', 'June');
    export const July = createEnumToken('Calendar', 'Month', 'July');
    export const August = createEnumToken('Calendar', 'Month', 'August');
    export const September = createEnumToken('Calendar', 'Month', 'September');
    export const October = createEnumToken('Calendar', 'Month', 'October');
    export const November = createEnumToken('Calendar', 'Month', 'November');
    export const December = createEnumToken('Calendar', 'Month', 'December');
  }
}
