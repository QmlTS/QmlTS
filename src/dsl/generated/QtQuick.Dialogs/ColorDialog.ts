// AUTO-GENERATED — DO NOT EDIT
// Type: ColorDialog
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ColorDialogBuilder {
  id(id: string): ColorDialogBuilder;
  child(obj: QmlObjectBuilder): ColorDialogBuilder;

  flags(value: QmlEnumToken): ColorDialogBuilder;
  flagsBind(expr: string): ColorDialogBuilder;
  modality(value: QmlEnumToken): ColorDialogBuilder;
  modalityBind(expr: string): ColorDialogBuilder;
  objectName(value: string): ColorDialogBuilder;
  objectNameBind(expr: string): ColorDialogBuilder;
  options(value: QmlEnumToken): ColorDialogBuilder;
  optionsBind(expr: string): ColorDialogBuilder;
  parentWindow(value: QmlValue): ColorDialogBuilder;
  parentWindowBind(expr: string): ColorDialogBuilder;
  popupType(value: QmlEnumToken): ColorDialogBuilder;
  popupTypeBind(expr: string): ColorDialogBuilder;
  result(value: number): ColorDialogBuilder;
  resultBind(expr: string): ColorDialogBuilder;
  selectedColor(value: QmlColor): ColorDialogBuilder;
  selectedColorBind(expr: string): ColorDialogBuilder;
  title(value: string): ColorDialogBuilder;
  titleBind(expr: string): ColorDialogBuilder;
  visible(value: boolean): ColorDialogBuilder;
  visibleBind(expr: string): ColorDialogBuilder;
  onAccepted(body: string): ColorDialogBuilder;
  onFlagsChanged(body: string): ColorDialogBuilder;
  onModalityChanged(body: string): ColorDialogBuilder;
  onObjectNameChanged(body: string): ColorDialogBuilder;
  onOptionsChanged(body: string): ColorDialogBuilder;
  onParentWindowChanged(body: string): ColorDialogBuilder;
  onPopupTypeChanged(body: string): ColorDialogBuilder;
  onRejected(body: string): ColorDialogBuilder;
  onResultChanged(body: string): ColorDialogBuilder;
  onSelectedColorChanged(body: string): ColorDialogBuilder;
  onTitleChanged(body: string): ColorDialogBuilder;
  onVisibleChanged(body: string): ColorDialogBuilder;
}

const COLORDIALOG_META: TypeMetadata = {
  typeName: 'ColorDialog',
  properties: [
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'options', hasValue: true, hasBinding: true },
    { name: 'parentWindow', hasValue: true, hasBinding: true },
    { name: 'popupType', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'selectedColor', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 0 },
    { handlerName: 'onModalityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOptionsChanged', paramCount: 0 },
    { handlerName: 'onParentWindowChanged', paramCount: 0 },
    { handlerName: 'onPopupTypeChanged', paramCount: 0 },
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onSelectedColorChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function ColorDialog(): ColorDialogBuilder {
  return createFluentBuilder('ColorDialog', COLORDIALOG_META) as unknown as ColorDialogBuilder;
}

export namespace ColorDialog {
  export namespace StandardCode {
    export const Rejected = createEnumToken('ColorDialog', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('ColorDialog', 'StandardCode', 'Accepted');
  }
}
