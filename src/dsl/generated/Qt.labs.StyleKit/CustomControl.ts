// AUTO-GENERATED — DO NOT EDIT
// Type: CustomControl
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface CustomControlBuilder {
  id(id: string): CustomControlBuilder;
  child(obj: QmlObjectBuilder): CustomControlBuilder;

  bottomPadding(value: number): CustomControlBuilder;
  bottomPaddingBind(expr: string): CustomControlBuilder;
  controlType(value: number): CustomControlBuilder;
  controlTypeBind(expr: string): CustomControlBuilder;
  leftPadding(value: number): CustomControlBuilder;
  leftPaddingBind(expr: string): CustomControlBuilder;
  objectName(value: string): CustomControlBuilder;
  objectNameBind(expr: string): CustomControlBuilder;
  padding(value: number): CustomControlBuilder;
  paddingBind(expr: string): CustomControlBuilder;
  rightPadding(value: number): CustomControlBuilder;
  rightPaddingBind(expr: string): CustomControlBuilder;
  spacing(value: number): CustomControlBuilder;
  spacingBind(expr: string): CustomControlBuilder;
  topPadding(value: number): CustomControlBuilder;
  topPaddingBind(expr: string): CustomControlBuilder;
  transition(value: TransitionBuilder): CustomControlBuilder;
  transitionBind(expr: string): CustomControlBuilder;
  onBackgroundChanged(body: string): CustomControlBuilder;
  onBottomPaddingChanged(body: string): CustomControlBuilder;
  onCheckedChanged(body: string): CustomControlBuilder;
  onControlTypeChanged(body: string): CustomControlBuilder;
  onDisabledChanged(body: string): CustomControlBuilder;
  onFocusedChanged(body: string): CustomControlBuilder;
  onHandleChanged(body: string): CustomControlBuilder;
  onHighlightedChanged(body: string): CustomControlBuilder;
  onHoveredChanged(body: string): CustomControlBuilder;
  onIndicatorChanged(body: string): CustomControlBuilder;
  onLeftPaddingChanged(body: string): CustomControlBuilder;
  onObjectNameChanged(body: string): CustomControlBuilder;
  onPaddingChanged(body: string): CustomControlBuilder;
  onPressedChanged(body: string): CustomControlBuilder;
  onRightPaddingChanged(body: string): CustomControlBuilder;
  onSpacingChanged(body: string): CustomControlBuilder;
  onTextChanged(body: string): CustomControlBuilder;
  onTopPaddingChanged(body: string): CustomControlBuilder;
  onTransitionChanged(body: string): CustomControlBuilder;
  onVerticalChanged(body: string): CustomControlBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): CustomControlBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): CustomControlBuilder;
}

const CUSTOMCONTROL_META: TypeMetadata = {
  typeName: 'CustomControl',
  properties: [
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'controlType', hasValue: true, hasBinding: true },
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
    { handlerName: 'onControlTypeChanged', paramCount: 0 },
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

export function CustomControl(): CustomControlBuilder {
  return createFluentBuilder('CustomControl', CUSTOMCONTROL_META) as unknown as CustomControlBuilder;
}

export namespace CustomControl {
  export namespace EmitFlag {
    export const AllProperties = createEnumToken('CustomControl', 'EmitFlag', 'AllProperties');
    export const Colors = createEnumToken('CustomControl', 'EmitFlag', 'Colors');
  }
}
