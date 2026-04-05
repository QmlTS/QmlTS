// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: TableView
// Generated from Qt 6.11.0

import type { QmlComponent } from '../../runtime/index.js';
export interface TableViewAttachedBuilder {
  editDelegate(value: QmlComponent): TableViewAttachedBuilder;
  editDelegateBind(expr: string): TableViewAttachedBuilder;
  objectName(value: string): TableViewAttachedBuilder;
  objectNameBind(expr: string): TableViewAttachedBuilder;
  onCommit(handler: () => void): TableViewAttachedBuilder;
  onEditDelegateChanged(handler: () => void): TableViewAttachedBuilder;
  onPooled(handler: () => void): TableViewAttachedBuilder;
  onReused(handler: () => void): TableViewAttachedBuilder;
  onViewChanged(handler: () => void): TableViewAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TableViewAttachedBuilder;
}
