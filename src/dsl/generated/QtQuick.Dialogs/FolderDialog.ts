// AUTO-GENERATED — DO NOT EDIT
// Type: FolderDialog
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface FolderDialogBuilder {
  id(id: string): FolderDialogBuilder;
  child(obj: QmlObjectBuilder): FolderDialogBuilder;
  children(...objs: QmlObjectBuilder[]): FolderDialogBuilder;

  acceptLabel(value: string): FolderDialogBuilder;
  acceptLabelBind(expr: string): FolderDialogBuilder;
  currentFolder(value: QmlUrl): FolderDialogBuilder;
  currentFolderBind(expr: string): FolderDialogBuilder;
  flags(value: QmlEnumToken): FolderDialogBuilder;
  flagsBind(expr: string): FolderDialogBuilder;
  modality(value: QmlEnumToken): FolderDialogBuilder;
  modalityBind(expr: string): FolderDialogBuilder;
  objectName(value: string): FolderDialogBuilder;
  objectNameBind(expr: string): FolderDialogBuilder;
  options(value: QmlEnumToken): FolderDialogBuilder;
  optionsBind(expr: string): FolderDialogBuilder;
  parentWindow(value: QmlValue): FolderDialogBuilder;
  parentWindowBind(expr: string): FolderDialogBuilder;
  popupType(value: QmlEnumToken): FolderDialogBuilder;
  popupTypeBind(expr: string): FolderDialogBuilder;
  rejectLabel(value: string): FolderDialogBuilder;
  rejectLabelBind(expr: string): FolderDialogBuilder;
  result(value: number): FolderDialogBuilder;
  resultBind(expr: string): FolderDialogBuilder;
  selectedFolder(value: QmlUrl): FolderDialogBuilder;
  selectedFolderBind(expr: string): FolderDialogBuilder;
  title(value: string): FolderDialogBuilder;
  titleBind(expr: string): FolderDialogBuilder;
  visible(value: boolean): FolderDialogBuilder;
  visibleBind(expr: string): FolderDialogBuilder;
  onAcceptLabelChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onAccepted(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onCurrentFolderChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onFlagsChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onModalityChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onOptionsChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onParentWindowChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onPopupTypeChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onRejectLabelChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onRejected(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onResultChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onSelectedFolderChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onTitleChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): FolderDialogBuilder;
}

const FOLDERDIALOG_META: TypeMetadata = {
  typeName: 'FolderDialog',
  properties: [
    { name: 'acceptLabel', hasValue: true, hasBinding: true },
    { name: 'currentFolder', hasValue: true, hasBinding: true },
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'options', hasValue: true, hasBinding: true },
    { name: 'parentWindow', hasValue: true, hasBinding: true },
    { name: 'popupType', hasValue: true, hasBinding: true },
    { name: 'rejectLabel', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'selectedFolder', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAcceptLabelChanged', paramCount: 0 },
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onCurrentFolderChanged', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 0 },
    { handlerName: 'onModalityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOptionsChanged', paramCount: 0 },
    { handlerName: 'onParentWindowChanged', paramCount: 0 },
    { handlerName: 'onPopupTypeChanged', paramCount: 0 },
    { handlerName: 'onRejectLabelChanged', paramCount: 0 },
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onSelectedFolderChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function FolderDialog(): FolderDialogBuilder {
  return createFluentBuilder('FolderDialog', FOLDERDIALOG_META) as unknown as FolderDialogBuilder;
}

export namespace FolderDialog {
  export namespace StandardCode {
    export const Rejected = createEnumToken('FolderDialog', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('FolderDialog', 'StandardCode', 'Accepted');
  }
}
