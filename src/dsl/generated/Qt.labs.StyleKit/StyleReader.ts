// AUTO-GENERATED — DO NOT EDIT
// Type: StyleReader
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { GlobalBuilder } from './QQStyleKitControlProperties.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface StyleReaderBuilder {
  id(id: string): StyleReaderBuilder;
  child(obj: QmlObjectBuilder): StyleReaderBuilder;

  bottomPadding(value: number): StyleReaderBuilder;
  bottomPaddingBind(expr: string): StyleReaderBuilder;
  checked(value: boolean): StyleReaderBuilder;
  checkedBind(expr: string): StyleReaderBuilder;
  controlType(value: QmlValue): StyleReaderBuilder;
  controlTypeBind(expr: string): StyleReaderBuilder;
  enabled(value: boolean): StyleReaderBuilder;
  enabledBind(expr: string): StyleReaderBuilder;
  focused(value: boolean): StyleReaderBuilder;
  focusedBind(expr: string): StyleReaderBuilder;
  highlighted(value: boolean): StyleReaderBuilder;
  highlightedBind(expr: string): StyleReaderBuilder;
  hovered(value: boolean): StyleReaderBuilder;
  hoveredBind(expr: string): StyleReaderBuilder;
  leftPadding(value: number): StyleReaderBuilder;
  leftPaddingBind(expr: string): StyleReaderBuilder;
  objectName(value: string): StyleReaderBuilder;
  objectNameBind(expr: string): StyleReaderBuilder;
  padding(value: number): StyleReaderBuilder;
  paddingBind(expr: string): StyleReaderBuilder;
  palette(value: PaletteBuilder): StyleReaderBuilder;
  paletteBind(expr: string): StyleReaderBuilder;
  pressed(value: boolean): StyleReaderBuilder;
  pressedBind(expr: string): StyleReaderBuilder;
  rightPadding(value: number): StyleReaderBuilder;
  rightPaddingBind(expr: string): StyleReaderBuilder;
  spacing(value: number): StyleReaderBuilder;
  spacingBind(expr: string): StyleReaderBuilder;
  topPadding(value: number): StyleReaderBuilder;
  topPaddingBind(expr: string): StyleReaderBuilder;
  transition(value: TransitionBuilder): StyleReaderBuilder;
  transitionBind(expr: string): StyleReaderBuilder;
  vertical(value: boolean): StyleReaderBuilder;
  verticalBind(expr: string): StyleReaderBuilder;
  onBackgroundChanged(body: string): StyleReaderBuilder;
  onBottomPaddingChanged(body: string): StyleReaderBuilder;
  onCheckedChanged(body: string): StyleReaderBuilder;
  onControlTypeChanged(body: string): StyleReaderBuilder;
  onCustomTypeChanged(body: string): StyleReaderBuilder;
  onEnabledChanged(body: string): StyleReaderBuilder;
  onFocusedChanged(body: string): StyleReaderBuilder;
  onFontChanged(body: string): StyleReaderBuilder;
  onHandleChanged(body: string): StyleReaderBuilder;
  onHighlightedChanged(body: string): StyleReaderBuilder;
  onHoveredChanged(body: string): StyleReaderBuilder;
  onIndicatorChanged(body: string): StyleReaderBuilder;
  onLeftPaddingChanged(body: string): StyleReaderBuilder;
  onObjectNameChanged(body: string): StyleReaderBuilder;
  onPaddingChanged(body: string): StyleReaderBuilder;
  onPaletteChanged(body: string): StyleReaderBuilder;
  onPressedChanged(body: string): StyleReaderBuilder;
  onPropertiesChanged(body: string): StyleReaderBuilder;
  onRightPaddingChanged(body: string): StyleReaderBuilder;
  onSpacingChanged(body: string): StyleReaderBuilder;
  onTextChanged(body: string): StyleReaderBuilder;
  onTopPaddingChanged(body: string): StyleReaderBuilder;
  onTransitionChanged(body: string): StyleReaderBuilder;
  onVerticalChanged(body: string): StyleReaderBuilder;
  global(setup: (b: GlobalBuilder) => void): StyleReaderBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): StyleReaderBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): StyleReaderBuilder;
}

const STYLEREADER_META: TypeMetadata = {
  typeName: 'StyleReader',
  properties: [
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'checked', hasValue: true, hasBinding: true },
    { name: 'controlType', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focused', hasValue: true, hasBinding: true },
    { name: 'highlighted', hasValue: true, hasBinding: true },
    { name: 'hovered', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'pressed', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transition', hasValue: true, hasBinding: true },
    { name: 'vertical', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onCheckedChanged', paramCount: 0 },
    { handlerName: 'onControlTypeChanged', paramCount: 0 },
    { handlerName: 'onCustomTypeChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusedChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHandleChanged', paramCount: 0 },
    { handlerName: 'onHighlightedChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onIndicatorChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onPropertiesChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransitionChanged', paramCount: 0 },
    { handlerName: 'onVerticalChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'global',
      groupName: 'global',
      properties: [
        { name: 'bottomPadding', hasValue: true, hasBinding: true },
        { name: 'leftPadding', hasValue: true, hasBinding: true },
        { name: 'padding', hasValue: true, hasBinding: true },
        { name: 'rightPadding', hasValue: true, hasBinding: true },
        { name: 'spacing', hasValue: true, hasBinding: true },
        { name: 'topPadding', hasValue: true, hasBinding: true },
        { name: 'transition', hasValue: true, hasBinding: true },
      ],
    },
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

export function StyleReader(): StyleReaderBuilder {
  return createFluentBuilder('StyleReader', STYLEREADER_META) as unknown as StyleReaderBuilder;
}

export namespace StyleReader {
  export namespace AlternateState {
    export const Alternate1 = createEnumToken('StyleReader', 'AlternateState', 'Alternate1');
    export const Alternate2 = createEnumToken('StyleReader', 'AlternateState', 'Alternate2');
  }
  export namespace ControlType {
    export const Unspecified = createEnumToken('StyleReader', 'ControlType', 'Unspecified');
    export const Control = createEnumToken('StyleReader', 'ControlType', 'Control');
    export const AbstractButton = createEnumToken('StyleReader', 'ControlType', 'AbstractButton');
    export const ApplicationWindow = createEnumToken(
      'StyleReader',
      'ControlType',
      'ApplicationWindow',
    );
    export const Button = createEnumToken('StyleReader', 'ControlType', 'Button');
    export const CheckBox = createEnumToken('StyleReader', 'ControlType', 'CheckBox');
    export const ComboBox = createEnumToken('StyleReader', 'ControlType', 'ComboBox');
    export const FlatButton = createEnumToken('StyleReader', 'ControlType', 'FlatButton');
    export const ProgressBar = createEnumToken('StyleReader', 'ControlType', 'ProgressBar');
    export const ScrollBar = createEnumToken('StyleReader', 'ControlType', 'ScrollBar');
    export const ScrollIndicator = createEnumToken('StyleReader', 'ControlType', 'ScrollIndicator');
    export const ScrollView = createEnumToken('StyleReader', 'ControlType', 'ScrollView');
    export const Slider = createEnumToken('StyleReader', 'ControlType', 'Slider');
    export const SpinBox = createEnumToken('StyleReader', 'ControlType', 'SpinBox');
    export const SwitchControl = createEnumToken('StyleReader', 'ControlType', 'SwitchControl');
    export const SearchField = createEnumToken('StyleReader', 'ControlType', 'SearchField');
    export const TabBar = createEnumToken('StyleReader', 'ControlType', 'TabBar');
    export const TabButton = createEnumToken('StyleReader', 'ControlType', 'TabButton');
    export const TextArea = createEnumToken('StyleReader', 'ControlType', 'TextArea');
    export const TextField = createEnumToken('StyleReader', 'ControlType', 'TextField');
    export const TextInput = createEnumToken('StyleReader', 'ControlType', 'TextInput');
    export const ToolBar = createEnumToken('StyleReader', 'ControlType', 'ToolBar');
    export const ToolButton = createEnumToken('StyleReader', 'ControlType', 'ToolButton');
    export const ToolSeparator = createEnumToken('StyleReader', 'ControlType', 'ToolSeparator');
    export const RadioButton = createEnumToken('StyleReader', 'ControlType', 'RadioButton');
    export const ItemDelegate = createEnumToken('StyleReader', 'ControlType', 'ItemDelegate');
    export const Popup = createEnumToken('StyleReader', 'ControlType', 'Popup');
    export const Menu = createEnumToken('StyleReader', 'ControlType', 'Menu');
    export const Dialog = createEnumToken('StyleReader', 'ControlType', 'Dialog');
    export const Pane = createEnumToken('StyleReader', 'ControlType', 'Pane');
    export const Page = createEnumToken('StyleReader', 'ControlType', 'Page');
    export const Frame = createEnumToken('StyleReader', 'ControlType', 'Frame');
    export const Label = createEnumToken('StyleReader', 'ControlType', 'Label');
    export const GroupBox = createEnumToken('StyleReader', 'ControlType', 'GroupBox');
  }
  export namespace EmitFlag {
    export const AllProperties = createEnumToken('StyleReader', 'EmitFlag', 'AllProperties');
    export const Colors = createEnumToken('StyleReader', 'EmitFlag', 'Colors');
  }
}
