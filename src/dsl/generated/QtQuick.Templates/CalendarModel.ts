// AUTO-GENERATED — DO NOT EDIT
// Type: CalendarModel
// Generated from Qt 6.11.0

import type { QmlDate, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
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
export interface CalendarModelBuilder {
  id(id: string): CalendarModelBuilder;
  child(obj: QmlObjectBuilder): CalendarModelBuilder;

  from(value: QmlDate): CalendarModelBuilder;
  fromBind(expr: string): CalendarModelBuilder;
  objectName(value: string): CalendarModelBuilder;
  objectNameBind(expr: string): CalendarModelBuilder;
  to(value: QmlDate): CalendarModelBuilder;
  toBind(expr: string): CalendarModelBuilder;
  onColumnsAboutToBeInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onColumnsAboutToBeMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationColumn: number,
    ) => void,
  ): CalendarModelBuilder;
  onColumnsAboutToBeRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onColumnsInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onColumnsMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationColumn: number,
    ) => void,
  ): CalendarModelBuilder;
  onColumnsRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onCountChanged(handler: () => void): CalendarModelBuilder;
  onDataChanged(
    handler: (topLeft: QmlValue, bottomRight: QmlValue, roles: number) => void,
  ): CalendarModelBuilder;
  onFromChanged(handler: () => void): CalendarModelBuilder;
  onHeaderDataChanged(
    handler: (orientation: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onLayoutAboutToBeChanged(
    handler: (parents: QmlValue, hint: QmlValue) => void,
  ): CalendarModelBuilder;
  onLayoutChanged(handler: (parents: QmlValue, hint: QmlValue) => void): CalendarModelBuilder;
  onModelAboutToBeReset(handler: () => void): CalendarModelBuilder;
  onModelReset(handler: () => void): CalendarModelBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): CalendarModelBuilder;
  onRowsAboutToBeInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onRowsAboutToBeMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationRow: number,
    ) => void,
  ): CalendarModelBuilder;
  onRowsAboutToBeRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onRowsInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onRowsMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationRow: number,
    ) => void,
  ): CalendarModelBuilder;
  onRowsRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): CalendarModelBuilder;
  onToChanged(handler: () => void): CalendarModelBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): CalendarModelBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): CalendarModelBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): CalendarModelBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): CalendarModelBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): CalendarModelBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): CalendarModelBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): CalendarModelBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): CalendarModelBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): CalendarModelBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): CalendarModelBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): CalendarModelBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): CalendarModelBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): CalendarModelBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): CalendarModelBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): CalendarModelBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): CalendarModelBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): CalendarModelBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): CalendarModelBuilder;
}

export function CalendarModel(): CalendarModelBuilder {
  return new DslBuilderImpl('CalendarModel') as unknown as CalendarModelBuilder;
}

export namespace CalendarModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('CalendarModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken(
      'CalendarModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'CalendarModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'CalendarModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'CalendarModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'CalendarModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'CalendarModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
