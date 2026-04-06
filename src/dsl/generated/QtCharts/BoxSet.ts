// AUTO-GENERATED — DO NOT EDIT
// Type: BoxSet
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface BoxSetBuilder {
  id(id: string): BoxSetBuilder;
  child(obj: QmlObjectBuilder): BoxSetBuilder;
  children(...objs: QmlObjectBuilder[]): BoxSetBuilder;

  brush(value: QmlValue): BoxSetBuilder;
  brushBind(expr: string): BoxSetBuilder;
  brushFilename(value: string): BoxSetBuilder;
  brushFilenameBind(expr: string): BoxSetBuilder;
  label(value: string): BoxSetBuilder;
  labelBind(expr: string): BoxSetBuilder;
  objectName(value: string): BoxSetBuilder;
  objectNameBind(expr: string): BoxSetBuilder;
  pen(value: QmlValue): BoxSetBuilder;
  penBind(expr: string): BoxSetBuilder;
  values(value: QmlValue[]): BoxSetBuilder;
  valuesBind(expr: string): BoxSetBuilder;
  onBrushChanged(handler: DslSignalHandlerValue): BoxSetBuilder;
  onBrushFilenameChanged(handler: DslSignalHandlerValue): BoxSetBuilder;
  onChangedValue(handler: DslSignalHandlerValue): BoxSetBuilder;
  onChangedValues(handler: DslSignalHandlerValue): BoxSetBuilder;
  onCleared(handler: DslSignalHandlerValue): BoxSetBuilder;
  onClicked(handler: DslSignalHandlerValue): BoxSetBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): BoxSetBuilder;
  onHovered(handler: DslSignalHandlerValue): BoxSetBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): BoxSetBuilder;
  onPenChanged(handler: DslSignalHandlerValue): BoxSetBuilder;
  onPressed(handler: DslSignalHandlerValue): BoxSetBuilder;
  onReleased(handler: DslSignalHandlerValue): BoxSetBuilder;
  onValueChanged(handler: DslSignalHandlerValue): BoxSetBuilder;
  onValuesChanged(handler: DslSignalHandlerValue): BoxSetBuilder;
}

const BOXSET_META: TypeMetadata = {
  typeName: 'BoxSet',
  properties: [
    { name: 'brush', hasValue: true, hasBinding: true },
    { name: 'brushFilename', hasValue: true, hasBinding: true },
    { name: 'label', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'pen', hasValue: true, hasBinding: true },
    { name: 'values', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBrushChanged', paramCount: 0 },
    { handlerName: 'onBrushFilenameChanged', paramCount: 1 },
    { handlerName: 'onChangedValue', paramCount: 1 },
    { handlerName: 'onChangedValues', paramCount: 0 },
    { handlerName: 'onCleared', paramCount: 0 },
    { handlerName: 'onClicked', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 0 },
    { handlerName: 'onHovered', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPenChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 0 },
    { handlerName: 'onReleased', paramCount: 0 },
    { handlerName: 'onValueChanged', paramCount: 1 },
    { handlerName: 'onValuesChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function BoxSet(): BoxSetBuilder {
  return createFluentBuilder('BoxSet', BOXSET_META) as unknown as BoxSetBuilder;
}

export namespace BoxSet {
  export namespace ValuePositions {
    export const LowerExtreme = createEnumToken('BoxSet', 'ValuePositions', 'LowerExtreme');
    export const LowerQuartile = createEnumToken('BoxSet', 'ValuePositions', 'LowerQuartile');
    export const Median = createEnumToken('BoxSet', 'ValuePositions', 'Median');
    export const UpperQuartile = createEnumToken('BoxSet', 'ValuePositions', 'UpperQuartile');
    export const UpperExtreme = createEnumToken('BoxSet', 'ValuePositions', 'UpperExtreme');
  }
}
