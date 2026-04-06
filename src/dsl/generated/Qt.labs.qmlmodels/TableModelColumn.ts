// AUTO-GENERATED — DO NOT EDIT
// Type: TableModelColumn
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TableModelColumnBuilder {
  id(id: string): TableModelColumnBuilder;
  child(obj: QmlObjectBuilder): TableModelColumnBuilder;
  children(...objs: QmlObjectBuilder[]): TableModelColumnBuilder;

  accessibleDescription(value: QmlValue): TableModelColumnBuilder;
  accessibleDescriptionBind(expr: string): TableModelColumnBuilder;
  accessibleText(value: QmlValue): TableModelColumnBuilder;
  accessibleTextBind(expr: string): TableModelColumnBuilder;
  background(value: QmlValue): TableModelColumnBuilder;
  backgroundBind(expr: string): TableModelColumnBuilder;
  checkState(value: QmlValue): TableModelColumnBuilder;
  checkStateBind(expr: string): TableModelColumnBuilder;
  decoration(value: QmlValue): TableModelColumnBuilder;
  decorationBind(expr: string): TableModelColumnBuilder;
  display(value: QmlValue): TableModelColumnBuilder;
  displayBind(expr: string): TableModelColumnBuilder;
  edit(value: QmlValue): TableModelColumnBuilder;
  editBind(expr: string): TableModelColumnBuilder;
  font(value: QmlValue): TableModelColumnBuilder;
  fontBind(expr: string): TableModelColumnBuilder;
  foreground(value: QmlValue): TableModelColumnBuilder;
  foregroundBind(expr: string): TableModelColumnBuilder;
  objectName(value: string): TableModelColumnBuilder;
  objectNameBind(expr: string): TableModelColumnBuilder;
  sizeHint(value: QmlValue): TableModelColumnBuilder;
  sizeHintBind(expr: string): TableModelColumnBuilder;
  statusTip(value: QmlValue): TableModelColumnBuilder;
  statusTipBind(expr: string): TableModelColumnBuilder;
  textAlignment(value: QmlValue): TableModelColumnBuilder;
  textAlignmentBind(expr: string): TableModelColumnBuilder;
  toolTip(value: QmlValue): TableModelColumnBuilder;
  toolTipBind(expr: string): TableModelColumnBuilder;
  whatsThis(value: QmlValue): TableModelColumnBuilder;
  whatsThisBind(expr: string): TableModelColumnBuilder;
  onAccessibleDescriptionChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onAccessibleTextChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onCheckStateChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onDecorationChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onDisplayChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onEditChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onFontChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onForegroundChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onIndexChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onSizeHintChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onStatusTipChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onTextAlignmentChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onToolTipChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
  onWhatsThisChanged(handler: DslSignalHandlerValue): TableModelColumnBuilder;
}

const TABLEMODELCOLUMN_META: TypeMetadata = {
  typeName: 'TableModelColumn',
  properties: [
    { name: 'accessibleDescription', hasValue: true, hasBinding: true },
    { name: 'accessibleText', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'checkState', hasValue: true, hasBinding: true },
    { name: 'decoration', hasValue: true, hasBinding: true },
    { name: 'display', hasValue: true, hasBinding: true },
    { name: 'edit', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'foreground', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'sizeHint', hasValue: true, hasBinding: true },
    { name: 'statusTip', hasValue: true, hasBinding: true },
    { name: 'textAlignment', hasValue: true, hasBinding: true },
    { name: 'toolTip', hasValue: true, hasBinding: true },
    { name: 'whatsThis', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccessibleDescriptionChanged', paramCount: 0 },
    { handlerName: 'onAccessibleTextChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onCheckStateChanged', paramCount: 0 },
    { handlerName: 'onDecorationChanged', paramCount: 0 },
    { handlerName: 'onDisplayChanged', paramCount: 0 },
    { handlerName: 'onEditChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onForegroundChanged', paramCount: 0 },
    { handlerName: 'onIndexChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSizeHintChanged', paramCount: 0 },
    { handlerName: 'onStatusTipChanged', paramCount: 0 },
    { handlerName: 'onTextAlignmentChanged', paramCount: 0 },
    { handlerName: 'onToolTipChanged', paramCount: 0 },
    { handlerName: 'onWhatsThisChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function TableModelColumn(): TableModelColumnBuilder {
  return createFluentBuilder(
    'TableModelColumn',
    TABLEMODELCOLUMN_META,
  ) as unknown as TableModelColumnBuilder;
}
