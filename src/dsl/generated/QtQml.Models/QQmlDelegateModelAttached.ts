// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: DelegateModel
// Generated from Qt 6.11.0

export interface DelegateModelAttachedBuilder {
  groups(value: string[]): DelegateModelAttachedBuilder;
  groupsBind(expr: string): DelegateModelAttachedBuilder;
  inItems(value: boolean): DelegateModelAttachedBuilder;
  inItemsBind(expr: string): DelegateModelAttachedBuilder;
  inPersistedItems(value: boolean): DelegateModelAttachedBuilder;
  inPersistedItemsBind(expr: string): DelegateModelAttachedBuilder;
  objectName(value: string): DelegateModelAttachedBuilder;
  objectNameBind(expr: string): DelegateModelAttachedBuilder;
  onGroupsChanged(handler: () => void): DelegateModelAttachedBuilder;
  onUnresolvedChanged(handler: () => void): DelegateModelAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DelegateModelAttachedBuilder;
}
