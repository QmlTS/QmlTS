// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: FileDialogImpl
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue } from '../../runtime/index.js';
import type { ListViewBuilder } from '../QtQuick/ListView.js';
import type { ComboBoxBuilder } from '../QtQuick.Templates/ComboBox.js';
import type { DialogBuilder } from '../QtQuick.Templates/Dialog.js';
import type { DialogButtonBoxBuilder } from '../QtQuick.Templates/DialogButtonBox.js';
import type { LabelBuilder } from '../QtQuick.Templates/Label.js';
import type { TextFieldBuilder } from '../QtQuick.Templates/TextField.js';
import type { FolderBreadcrumbBarBuilder } from './FolderBreadcrumbBar.js';
import type { SideBarBuilder } from './SideBar.js';
export interface FileDialogImplAttachedBuilder {
  breadcrumbBar(value: FolderBreadcrumbBarBuilder): FileDialogImplAttachedBuilder;
  breadcrumbBarBind(expr: string): FileDialogImplAttachedBuilder;
  buttonBox(value: DialogButtonBoxBuilder): FileDialogImplAttachedBuilder;
  buttonBoxBind(expr: string): FileDialogImplAttachedBuilder;
  fileDialogListView(value: ListViewBuilder): FileDialogImplAttachedBuilder;
  fileDialogListViewBind(expr: string): FileDialogImplAttachedBuilder;
  fileNameLabel(value: LabelBuilder): FileDialogImplAttachedBuilder;
  fileNameLabelBind(expr: string): FileDialogImplAttachedBuilder;
  fileNameTextField(value: TextFieldBuilder): FileDialogImplAttachedBuilder;
  fileNameTextFieldBind(expr: string): FileDialogImplAttachedBuilder;
  filterLabel(value: LabelBuilder): FileDialogImplAttachedBuilder;
  filterLabelBind(expr: string): FileDialogImplAttachedBuilder;
  nameFiltersComboBox(value: ComboBoxBuilder): FileDialogImplAttachedBuilder;
  nameFiltersComboBoxBind(expr: string): FileDialogImplAttachedBuilder;
  overwriteConfirmationDialog(value: DialogBuilder): FileDialogImplAttachedBuilder;
  overwriteConfirmationDialogBind(expr: string): FileDialogImplAttachedBuilder;
  sideBar(value: SideBarBuilder): FileDialogImplAttachedBuilder;
  sideBarBind(expr: string): FileDialogImplAttachedBuilder;
  objectName(value: string): FileDialogImplAttachedBuilder;
  objectNameBind(expr: string): FileDialogImplAttachedBuilder;
  onBreadcrumbBarChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
  onButtonBoxChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
  onFileDialogListViewChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
  onFileNameLabelChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
  onFileNameTextFieldChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
  onFilterLabelChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
  onNameFiltersComboBoxChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
  onOverwriteConfirmationDialogChanged(
    handler: DslSignalHandlerValue,
  ): FileDialogImplAttachedBuilder;
  onSideBarChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FileDialogImplAttachedBuilder;
}
