// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: GridView
// Generated from Qt 6.11.0

export interface GridViewAttachedBuilder {
  delayRemove(value: boolean): GridViewAttachedBuilder;
  delayRemoveBind(expr: string): GridViewAttachedBuilder;
  objectName(value: string): GridViewAttachedBuilder;
  objectNameBind(expr: string): GridViewAttachedBuilder;
  onAdd(handler: () => void): GridViewAttachedBuilder;
  onCurrentItemChanged(handler: () => void): GridViewAttachedBuilder;
  onDelayRemoveChanged(handler: () => void): GridViewAttachedBuilder;
  onNextSectionChanged(handler: () => void): GridViewAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): GridViewAttachedBuilder;
  onPooled(handler: () => void): GridViewAttachedBuilder;
  onPrevSectionChanged(handler: () => void): GridViewAttachedBuilder;
  onRemove(handler: () => void): GridViewAttachedBuilder;
  onReused(handler: () => void): GridViewAttachedBuilder;
  onSectionChanged(handler: () => void): GridViewAttachedBuilder;
  onViewChanged(handler: () => void): GridViewAttachedBuilder;
}
