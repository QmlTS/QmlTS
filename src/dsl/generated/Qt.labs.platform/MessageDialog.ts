// AUTO-GENERATED — DO NOT EDIT
// Type: MessageDialog
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface MessageDialogBuilder {
  id(id: string): MessageDialogBuilder;
  child(obj: QmlObjectBuilder): MessageDialogBuilder;
  children(...objs: QmlObjectBuilder[]): MessageDialogBuilder;

  buttons(value: QmlEnumToken): MessageDialogBuilder;
  buttonsBind(expr: string): MessageDialogBuilder;
  detailedText(value: string): MessageDialogBuilder;
  detailedTextBind(expr: string): MessageDialogBuilder;
  flags(value: QmlEnumToken): MessageDialogBuilder;
  flagsBind(expr: string): MessageDialogBuilder;
  informativeText(value: string): MessageDialogBuilder;
  informativeTextBind(expr: string): MessageDialogBuilder;
  modality(value: QmlEnumToken): MessageDialogBuilder;
  modalityBind(expr: string): MessageDialogBuilder;
  objectName(value: string): MessageDialogBuilder;
  objectNameBind(expr: string): MessageDialogBuilder;
  parentWindow(value: QmlValue): MessageDialogBuilder;
  parentWindowBind(expr: string): MessageDialogBuilder;
  result(value: number): MessageDialogBuilder;
  resultBind(expr: string): MessageDialogBuilder;
  text(value: string): MessageDialogBuilder;
  textBind(expr: string): MessageDialogBuilder;
  title(value: string): MessageDialogBuilder;
  titleBind(expr: string): MessageDialogBuilder;
  visible(value: boolean): MessageDialogBuilder;
  visibleBind(expr: string): MessageDialogBuilder;
  onAbortClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onAccepted(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onApplyClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onButtonsChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onCancelClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onCloseClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onDetailedTextChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onDiscardClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onFlagsChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onHelpClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onIgnoreClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onInformativeTextChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onModalityChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onNoClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onNoToAllClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onOkClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onOpenClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onParentWindowChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onRejected(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onResetClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onRestoreDefaultsClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onResultChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onRetryClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onSaveAllClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onSaveClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onTextChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onTitleChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onYesClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
  onYesToAllClicked(handler: DslSignalHandlerValue): MessageDialogBuilder;
}

const MESSAGEDIALOG_META: TypeMetadata = {
  typeName: 'MessageDialog',
  properties: [
    { name: 'buttons', hasValue: true, hasBinding: true },
    { name: 'detailedText', hasValue: true, hasBinding: true },
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'informativeText', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parentWindow', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAbortClicked', paramCount: 0 },
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onApplyClicked', paramCount: 0 },
    { handlerName: 'onButtonsChanged', paramCount: 0 },
    { handlerName: 'onCancelClicked', paramCount: 0 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onCloseClicked', paramCount: 0 },
    { handlerName: 'onDetailedTextChanged', paramCount: 0 },
    { handlerName: 'onDiscardClicked', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 0 },
    { handlerName: 'onHelpClicked', paramCount: 0 },
    { handlerName: 'onIgnoreClicked', paramCount: 0 },
    { handlerName: 'onInformativeTextChanged', paramCount: 0 },
    { handlerName: 'onModalityChanged', paramCount: 0 },
    { handlerName: 'onNoClicked', paramCount: 0 },
    { handlerName: 'onNoToAllClicked', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOkClicked', paramCount: 0 },
    { handlerName: 'onOpenClicked', paramCount: 0 },
    { handlerName: 'onParentWindowChanged', paramCount: 0 },
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onResetClicked', paramCount: 0 },
    { handlerName: 'onRestoreDefaultsClicked', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onRetryClicked', paramCount: 0 },
    { handlerName: 'onSaveAllClicked', paramCount: 0 },
    { handlerName: 'onSaveClicked', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onYesClicked', paramCount: 0 },
    { handlerName: 'onYesToAllClicked', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function MessageDialog(): MessageDialogBuilder {
  return createFluentBuilder(
    'MessageDialog',
    MESSAGEDIALOG_META,
  ) as unknown as MessageDialogBuilder;
}

export namespace MessageDialog {
  export namespace StandardCode {
    export const Rejected = createEnumToken('MessageDialog', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('MessageDialog', 'StandardCode', 'Accepted');
  }
}
