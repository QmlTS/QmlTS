// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: FolderDialogImpl
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue } from '../../runtime/index.js';
import type { ListViewBuilder } from '../QtQuick/ListView.js';
import type { FolderBreadcrumbBarBuilder } from './FolderBreadcrumbBar.js';
export interface FolderDialogImplAttachedBuilder {
  breadcrumbBar(value: FolderBreadcrumbBarBuilder): FolderDialogImplAttachedBuilder;
  breadcrumbBarBind(expr: string): FolderDialogImplAttachedBuilder;
  folderDialogListView(value: ListViewBuilder): FolderDialogImplAttachedBuilder;
  folderDialogListViewBind(expr: string): FolderDialogImplAttachedBuilder;
  objectName(value: string): FolderDialogImplAttachedBuilder;
  objectNameBind(expr: string): FolderDialogImplAttachedBuilder;
  onBreadcrumbBarChanged(handler: DslSignalHandlerValue): FolderDialogImplAttachedBuilder;
  onFolderDialogListViewChanged(handler: DslSignalHandlerValue): FolderDialogImplAttachedBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FolderDialogImplAttachedBuilder;
}
