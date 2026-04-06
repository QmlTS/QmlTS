// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ColorDialogImpl
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlValue } from '../../runtime/index.js';
import type { AbstractButtonBuilder } from '../QtQuick.Templates/AbstractButton.js';
import type { DialogButtonBoxBuilder } from '../QtQuick.Templates/DialogButtonBox.js';
import type { SliderBuilder } from '../QtQuick.Templates/Slider.js';
import type { ColorInputsImplBuilder } from './ColorInputsImpl.js';
export interface ColorDialogImplAttachedBuilder {
  alphaSlider(value: SliderBuilder): ColorDialogImplAttachedBuilder;
  alphaSliderBind(expr: string): ColorDialogImplAttachedBuilder;
  buttonBox(value: DialogButtonBoxBuilder): ColorDialogImplAttachedBuilder;
  buttonBoxBind(expr: string): ColorDialogImplAttachedBuilder;
  colorInputs(value: ColorInputsImplBuilder): ColorDialogImplAttachedBuilder;
  colorInputsBind(expr: string): ColorDialogImplAttachedBuilder;
  colorPicker(value: QmlValue): ColorDialogImplAttachedBuilder;
  colorPickerBind(expr: string): ColorDialogImplAttachedBuilder;
  eyeDropperButton(value: AbstractButtonBuilder): ColorDialogImplAttachedBuilder;
  eyeDropperButtonBind(expr: string): ColorDialogImplAttachedBuilder;
  objectName(value: string): ColorDialogImplAttachedBuilder;
  objectNameBind(expr: string): ColorDialogImplAttachedBuilder;
  onAlphaSliderChanged(handler: DslSignalHandlerValue): ColorDialogImplAttachedBuilder;
  onButtonBoxChanged(handler: DslSignalHandlerValue): ColorDialogImplAttachedBuilder;
  onColorInputsChanged(handler: DslSignalHandlerValue): ColorDialogImplAttachedBuilder;
  onColorPickerChanged(handler: DslSignalHandlerValue): ColorDialogImplAttachedBuilder;
  onEyeDropperButtonChanged(handler: DslSignalHandlerValue): ColorDialogImplAttachedBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ColorDialogImplAttachedBuilder;
}
