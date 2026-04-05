// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ListView
// Generated from Qt 6.11.0

export interface ListViewAttachedBuilder {
  delayRemove(value: boolean): ListViewAttachedBuilder;
  delayRemoveBind(expr: string): ListViewAttachedBuilder;
  objectName(value: string): ListViewAttachedBuilder;
  objectNameBind(expr: string): ListViewAttachedBuilder;
  onAdd(handler: () => void): ListViewAttachedBuilder;
  onCurrentItemChanged(handler: () => void): ListViewAttachedBuilder;
  onDelayRemoveChanged(handler: () => void): ListViewAttachedBuilder;
  onNextSectionChanged(handler: () => void): ListViewAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ListViewAttachedBuilder;
  onPooled(handler: () => void): ListViewAttachedBuilder;
  onPrevSectionChanged(handler: () => void): ListViewAttachedBuilder;
  onRemove(handler: () => void): ListViewAttachedBuilder;
  onReused(handler: () => void): ListViewAttachedBuilder;
  onSectionChanged(handler: () => void): ListViewAttachedBuilder;
  onViewChanged(handler: () => void): ListViewAttachedBuilder;
}
