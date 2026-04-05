// AUTO-GENERATED — DO NOT EDIT
// Type: ControlStyle
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface ControlStyleBuilder {
  id(id: string): ControlStyleBuilder;
  child(obj: QmlObjectBuilder): ControlStyleBuilder;

  bottomPadding(value: number): ControlStyleBuilder;
  bottomPaddingBind(expr: string): ControlStyleBuilder;
  leftPadding(value: number): ControlStyleBuilder;
  leftPaddingBind(expr: string): ControlStyleBuilder;
  objectName(value: string): ControlStyleBuilder;
  objectNameBind(expr: string): ControlStyleBuilder;
  padding(value: number): ControlStyleBuilder;
  paddingBind(expr: string): ControlStyleBuilder;
  rightPadding(value: number): ControlStyleBuilder;
  rightPaddingBind(expr: string): ControlStyleBuilder;
  spacing(value: number): ControlStyleBuilder;
  spacingBind(expr: string): ControlStyleBuilder;
  topPadding(value: number): ControlStyleBuilder;
  topPaddingBind(expr: string): ControlStyleBuilder;
  transition(value: TransitionBuilder): ControlStyleBuilder;
  transitionBind(expr: string): ControlStyleBuilder;
  onBackgroundChanged(body: string): ControlStyleBuilder;
  onBottomPaddingChanged(body: string): ControlStyleBuilder;
  onCheckedChanged(body: string): ControlStyleBuilder;
  onDisabledChanged(body: string): ControlStyleBuilder;
  onFocusedChanged(body: string): ControlStyleBuilder;
  onHandleChanged(body: string): ControlStyleBuilder;
  onHighlightedChanged(body: string): ControlStyleBuilder;
  onHoveredChanged(body: string): ControlStyleBuilder;
  onIndicatorChanged(body: string): ControlStyleBuilder;
  onLeftPaddingChanged(body: string): ControlStyleBuilder;
  onObjectNameChanged(body: string): ControlStyleBuilder;
  onPaddingChanged(body: string): ControlStyleBuilder;
  onPressedChanged(body: string): ControlStyleBuilder;
  onRightPaddingChanged(body: string): ControlStyleBuilder;
  onSpacingChanged(body: string): ControlStyleBuilder;
  onTextChanged(body: string): ControlStyleBuilder;
  onTopPaddingChanged(body: string): ControlStyleBuilder;
  onTransitionChanged(body: string): ControlStyleBuilder;
  onVerticalChanged(body: string): ControlStyleBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): ControlStyleBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): ControlStyleBuilder;
}

const CONTROLSTYLE_META: TypeMetadata = {
  typeName: 'ControlStyle',
  properties: [
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transition', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onCheckedChanged', paramCount: 0 },
    { handlerName: 'onDisabledChanged', paramCount: 0 },
    { handlerName: 'onFocusedChanged', paramCount: 0 },
    { handlerName: 'onHandleChanged', paramCount: 0 },
    { handlerName: 'onHighlightedChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onIndicatorChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransitionChanged', paramCount: 0 },
    { handlerName: 'onVerticalChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
    {
      methodName: 'styleKit',
      attachedTypeName: 'StyleKit',
      properties: [
        { name: 'style', hasValue: true, hasBinding: true },
        { name: 'styleUrl', hasValue: true, hasBinding: true },
        { name: 'transitionsEnabled', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onStyleChanged', paramCount: 0 },
        { handlerName: 'onStyleUrlChanged', paramCount: 0 },
        { handlerName: 'onTransitionsEnabledChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'styleVariation',
      attachedTypeName: 'StyleVariation',
      properties: [
        { name: 'controlType', hasValue: true, hasBinding: true },
        { name: 'variations', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onControlTypeChanged', paramCount: 0 },
        { handlerName: 'onVariationsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function ControlStyle(): ControlStyleBuilder {
  return createFluentBuilder('ControlStyle', CONTROLSTYLE_META) as unknown as ControlStyleBuilder;
}

export namespace ControlStyle {
  export namespace EmitFlag {
    export const AllProperties = createEnumToken('ControlStyle', 'EmitFlag', 'AllProperties');
    export const Colors = createEnumToken('ControlStyle', 'EmitFlag', 'Colors');
  }
}
