// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ToolTip
// Generated from Qt 6.11.0

export interface ToolTipAttachedBuilder {
  delay(value: number): ToolTipAttachedBuilder;
  delayBind(expr: string): ToolTipAttachedBuilder;
  text(value: string): ToolTipAttachedBuilder;
  textBind(expr: string): ToolTipAttachedBuilder;
  timeout(value: number): ToolTipAttachedBuilder;
  timeoutBind(expr: string): ToolTipAttachedBuilder;
  visible(value: boolean): ToolTipAttachedBuilder;
  visibleBind(expr: string): ToolTipAttachedBuilder;
  objectName(value: string): ToolTipAttachedBuilder;
  objectNameBind(expr: string): ToolTipAttachedBuilder;
  onDelayChanged(handler: () => void): ToolTipAttachedBuilder;
  onTextChanged(handler: () => void): ToolTipAttachedBuilder;
  onTimeoutChanged(handler: () => void): ToolTipAttachedBuilder;
  onVisibleChanged(handler: () => void): ToolTipAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ToolTipAttachedBuilder;
}
