// AUTO-GENERATED — DO NOT EDIT
// Type: ControlStateStyle
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface ControlStateStyleBuilder {
  id(id: string): ControlStateStyleBuilder;
  child(obj: QmlObjectBuilder): ControlStateStyleBuilder;

  bottomPadding(value: number): ControlStateStyleBuilder;
  bottomPaddingBind(expr: string): ControlStateStyleBuilder;
  leftPadding(value: number): ControlStateStyleBuilder;
  leftPaddingBind(expr: string): ControlStateStyleBuilder;
  objectName(value: string): ControlStateStyleBuilder;
  objectNameBind(expr: string): ControlStateStyleBuilder;
  padding(value: number): ControlStateStyleBuilder;
  paddingBind(expr: string): ControlStateStyleBuilder;
  rightPadding(value: number): ControlStateStyleBuilder;
  rightPaddingBind(expr: string): ControlStateStyleBuilder;
  spacing(value: number): ControlStateStyleBuilder;
  spacingBind(expr: string): ControlStateStyleBuilder;
  topPadding(value: number): ControlStateStyleBuilder;
  topPaddingBind(expr: string): ControlStateStyleBuilder;
  transition(value: TransitionBuilder): ControlStateStyleBuilder;
  transitionBind(expr: string): ControlStateStyleBuilder;
  onBackgroundChanged(body: string): ControlStateStyleBuilder;
  onBottomPaddingChanged(body: string): ControlStateStyleBuilder;
  onCheckedChanged(body: string): ControlStateStyleBuilder;
  onDisabledChanged(body: string): ControlStateStyleBuilder;
  onFocusedChanged(body: string): ControlStateStyleBuilder;
  onHandleChanged(body: string): ControlStateStyleBuilder;
  onHighlightedChanged(body: string): ControlStateStyleBuilder;
  onHoveredChanged(body: string): ControlStateStyleBuilder;
  onIndicatorChanged(body: string): ControlStateStyleBuilder;
  onLeftPaddingChanged(body: string): ControlStateStyleBuilder;
  onObjectNameChanged(body: string): ControlStateStyleBuilder;
  onPaddingChanged(body: string): ControlStateStyleBuilder;
  onPressedChanged(body: string): ControlStateStyleBuilder;
  onRightPaddingChanged(body: string): ControlStateStyleBuilder;
  onSpacingChanged(body: string): ControlStateStyleBuilder;
  onTextChanged(body: string): ControlStateStyleBuilder;
  onTopPaddingChanged(body: string): ControlStateStyleBuilder;
  onTransitionChanged(body: string): ControlStateStyleBuilder;
  onVerticalChanged(body: string): ControlStateStyleBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): ControlStateStyleBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): ControlStateStyleBuilder;
}

const CONTROLSTATESTYLE_META: TypeMetadata = {
  typeName: 'ControlStateStyle',
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

export function ControlStateStyle(): ControlStateStyleBuilder {
  return createFluentBuilder('ControlStateStyle', CONTROLSTATESTYLE_META) as unknown as ControlStateStyleBuilder;
}

export namespace ControlStateStyle {
  export namespace EmitFlag {
    export const AllProperties = createEnumToken('ControlStateStyle', 'EmitFlag', 'AllProperties');
    export const Colors = createEnumToken('ControlStateStyle', 'EmitFlag', 'Colors');
  }
}
