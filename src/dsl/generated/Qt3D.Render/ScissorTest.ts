// AUTO-GENERATED — DO NOT EDIT
// Type: ScissorTest
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ScissorTestBuilder {
  id(id: string): ScissorTestBuilder;
  child(obj: QmlObjectBuilder): ScissorTestBuilder;
  children(...objs: QmlObjectBuilder[]): ScissorTestBuilder;

  bottom(value: number): ScissorTestBuilder;
  bottomBind(expr: string): ScissorTestBuilder;
  enabled(value: boolean): ScissorTestBuilder;
  enabledBind(expr: string): ScissorTestBuilder;
  height(value: number): ScissorTestBuilder;
  heightBind(expr: string): ScissorTestBuilder;
  left(value: number): ScissorTestBuilder;
  leftBind(expr: string): ScissorTestBuilder;
  objectName(value: string): ScissorTestBuilder;
  objectNameBind(expr: string): ScissorTestBuilder;
  parent(value: QmlValue): ScissorTestBuilder;
  parentBind(expr: string): ScissorTestBuilder;
  width(value: number): ScissorTestBuilder;
  widthBind(expr: string): ScissorTestBuilder;
  onBottomChanged(handler: DslSignalHandlerValue): ScissorTestBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ScissorTestBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ScissorTestBuilder;
  onLeftChanged(handler: DslSignalHandlerValue): ScissorTestBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ScissorTestBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ScissorTestBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ScissorTestBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ScissorTestBuilder;
}

const SCISSORTEST_META: TypeMetadata = {
  typeName: 'ScissorTest',
  properties: [
    { name: 'bottom', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'left', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBottomChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onLeftChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ScissorTest(): ScissorTestBuilder {
  return createFluentBuilder('ScissorTest', SCISSORTEST_META) as unknown as ScissorTestBuilder;
}
