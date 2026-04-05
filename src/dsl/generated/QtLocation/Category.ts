// AUTO-GENERATED — DO NOT EDIT
// Type: Category
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PluginBuilder } from './Plugin.js';
export interface CategoryBuilder {
  id(id: string): CategoryBuilder;
  child(obj: QmlObjectBuilder): CategoryBuilder;

  category(value: QmlValue): CategoryBuilder;
  categoryBind(expr: string): CategoryBuilder;
  categoryId(value: string): CategoryBuilder;
  categoryIdBind(expr: string): CategoryBuilder;
  icon(value: QmlValue): CategoryBuilder;
  iconBind(expr: string): CategoryBuilder;
  name(value: string): CategoryBuilder;
  nameBind(expr: string): CategoryBuilder;
  objectName(value: string): CategoryBuilder;
  objectNameBind(expr: string): CategoryBuilder;
  plugin(value: PluginBuilder): CategoryBuilder;
  pluginBind(expr: string): CategoryBuilder;
  visibility(value: QmlEnumToken): CategoryBuilder;
  visibilityBind(expr: string): CategoryBuilder;
  onCategoryIdChanged(body: string): CategoryBuilder;
  onIconChanged(body: string): CategoryBuilder;
  onNameChanged(body: string): CategoryBuilder;
  onObjectNameChanged(body: string): CategoryBuilder;
  onPluginChanged(body: string): CategoryBuilder;
  onStatusChanged(body: string): CategoryBuilder;
  onVisibilityChanged(body: string): CategoryBuilder;
}

const CATEGORY_META: TypeMetadata = {
  typeName: 'Category',
  properties: [
    { name: 'category', hasValue: true, hasBinding: true },
    { name: 'categoryId', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'plugin', hasValue: true, hasBinding: true },
    { name: 'visibility', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCategoryIdChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPluginChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onVisibilityChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Category(): CategoryBuilder {
  return createFluentBuilder('Category', CATEGORY_META) as unknown as CategoryBuilder;
}

export namespace Category {
  export namespace Status {
    export const Ready = createEnumToken('Category', 'Status', 'Ready');
    export const Saving = createEnumToken('Category', 'Status', 'Saving');
    export const Removing = createEnumToken('Category', 'Status', 'Removing');
    export const Error = createEnumToken('Category', 'Status', 'Error');
  }
  export namespace Visibility {
    export const UnspecifiedVisibility = createEnumToken(
      'Category',
      'Visibility',
      'UnspecifiedVisibility',
    );
    export const DeviceVisibility = createEnumToken('Category', 'Visibility', 'DeviceVisibility');
    export const PrivateVisibility = createEnumToken('Category', 'Visibility', 'PrivateVisibility');
    export const PublicVisibility = createEnumToken('Category', 'Visibility', 'PublicVisibility');
  }
}
