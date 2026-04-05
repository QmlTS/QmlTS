// AUTO-GENERATED — DO NOT EDIT
// Type: ViewSection
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
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
export interface ViewSectionBuilder {
  id(id: string): ViewSectionBuilder;
  child(obj: QmlObjectBuilder): ViewSectionBuilder;

  criteria(value: QmlValue): ViewSectionBuilder;
  criteriaBind(expr: string): ViewSectionBuilder;
  delegate(value: QmlComponent): ViewSectionBuilder;
  delegateBind(expr: string): ViewSectionBuilder;
  labelPositioning(value: number): ViewSectionBuilder;
  labelPositioningBind(expr: string): ViewSectionBuilder;
  objectName(value: string): ViewSectionBuilder;
  objectNameBind(expr: string): ViewSectionBuilder;
  property(value: string): ViewSectionBuilder;
  propertyBind(expr: string): ViewSectionBuilder;
  onCriteriaChanged(handler: () => void): ViewSectionBuilder;
  onDelegateChanged(handler: () => void): ViewSectionBuilder;
  onLabelPositioningChanged(handler: () => void): ViewSectionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ViewSectionBuilder;
  onPropertyChanged(handler: () => void): ViewSectionBuilder;
  onSectionsChanged(handler: () => void): ViewSectionBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ViewSectionBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ViewSectionBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ViewSectionBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ViewSectionBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ViewSectionBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ViewSectionBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ViewSectionBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ViewSectionBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ViewSectionBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ViewSectionBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ViewSectionBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ViewSectionBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ViewSectionBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ViewSectionBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ViewSectionBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ViewSectionBuilder;
}

export function ViewSection(): ViewSectionBuilder {
  return new DslBuilderImpl('ViewSection') as unknown as ViewSectionBuilder;
}

export namespace ViewSection {
  export namespace LabelPositioning {
    export const InlineLabels = createEnumToken('ViewSection', 'LabelPositioning', 'InlineLabels');
    export const CurrentLabelAtStart = createEnumToken(
      'ViewSection',
      'LabelPositioning',
      'CurrentLabelAtStart',
    );
    export const NextLabelAtEnd = createEnumToken(
      'ViewSection',
      'LabelPositioning',
      'NextLabelAtEnd',
    );
  }
  export namespace SectionCriteria {
    export const FullString = createEnumToken('ViewSection', 'SectionCriteria', 'FullString');
    export const FirstCharacter = createEnumToken(
      'ViewSection',
      'SectionCriteria',
      'FirstCharacter',
    );
  }
}
