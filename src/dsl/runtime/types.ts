// ─── Semantic Branded Aliases ───────────────────────────────────────────

/** QML color value (e.g., "red", "#ff0000", Qt.rgba(1,0,0,1)) */
export type QmlColor = string & { readonly __qmlType: 'color' };

/** QML URL value */
export type QmlUrl = string & { readonly __qmlType: 'url' };

/** QML date value */
export type QmlDate = string & { readonly __qmlType: 'date' };

/** QML binding expression (not a literal value — evaluated at runtime) */
export type QmlBinding = string & { readonly __qmlType: 'binding' };

/** QML Component reference */
export type QmlComponent = { readonly __qmlType: 'component' };

// ─── Structured Value Types ─────────────────────────────────────────────

export interface QmlPoint {
  readonly x: number;
  readonly y: number;
}

export interface QmlSize {
  readonly width: number;
  readonly height: number;
}

export interface QmlRect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface QmlFont {
  family?: string;
  pointSize?: number;
  pixelSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikeout?: boolean;
  weight?: number;
  capitalization?: number;
  letterSpacing?: number;
  wordSpacing?: number;
  hintingPreference?: number;
  kerning?: boolean;
  preferShaping?: boolean;
  styleName?: string;
}

export interface QmlVector2d {
  readonly x: number;
  readonly y: number;
}

export interface QmlVector3d {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export interface QmlVector4d {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly w: number;
}

export interface QmlMatrix4x4 {
  readonly values: readonly number[];
}

export interface QmlQuaternion {
  readonly scalar: number;
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

// ─── Catch-all Union ────────────────────────────────────────────────────

/** QML var/variant — accepts any value type */
export type QmlValue =
  | number
  | string
  | boolean
  | null
  | QmlColor
  | QmlUrl
  | QmlDate
  | QmlPoint
  | QmlSize
  | QmlRect
  | QmlFont
  | QmlVector2d
  | QmlVector3d
  | QmlVector4d
  | QmlMatrix4x4
  | QmlQuaternion
  | QmlComponent
  | QmlValue[]
  | Record<string, unknown>;

// ─── QML→TS Type Map ────────────────────────────────────────────────────

/** Static map from QML/C++ type names to TypeScript type names */
export const QML_TYPE_MAP: Readonly<Record<string, string>> = {
  // Primitives
  int: 'number',
  double: 'number',
  real: 'number',
  float: 'number',
  qreal: 'number',
  string: 'string',
  QString: 'string',
  QByteArray: 'string',
  bool: 'boolean',

  // Semantic aliases
  color: 'QmlColor',
  QColor: 'QmlColor',
  url: 'QmlUrl',
  QUrl: 'QmlUrl',
  date: 'QmlDate',
  QDate: 'QmlDate',
  QDateTime: 'QmlDate',
  QTime: 'QmlDate',
  font: 'QmlFont',
  QFont: 'QmlFont',

  // Structured value types
  point: 'QmlPoint',
  QPointF: 'QmlPoint',
  QPoint: 'QmlPoint',
  size: 'QmlSize',
  QSizeF: 'QmlSize',
  QSize: 'QmlSize',
  rect: 'QmlRect',
  QRectF: 'QmlRect',
  QRect: 'QmlRect',

  // Vectors and spatial
  vector2d: 'QmlVector2d',
  QVector2D: 'QmlVector2d',
  vector3d: 'QmlVector3d',
  QVector3D: 'QmlVector3d',
  vector4d: 'QmlVector4d',
  QVector4D: 'QmlVector4d',
  matrix4x4: 'QmlMatrix4x4',
  QMatrix4x4: 'QmlMatrix4x4',
  quaternion: 'QmlQuaternion',
  QQuaternion: 'QmlQuaternion',

  // Catch-all
  var: 'QmlValue',
  variant: 'QmlValue',
  QVariant: 'QmlValue',
  QJSValue: 'QmlValue',
};

// ─── Classification Helpers ─────────────────────────────────────────────

const PRIMITIVES = new Set(['number', 'string', 'boolean']);
const SEMANTIC_ALIASES = new Set(['QmlColor', 'QmlUrl', 'QmlDate', 'QmlBinding']);
const VALUE_TYPES = new Set([
  'QmlPoint',
  'QmlSize',
  'QmlRect',
  'QmlFont',
  'QmlVector2d',
  'QmlVector3d',
  'QmlVector4d',
  'QmlMatrix4x4',
  'QmlQuaternion',
]);

export function isQmlPrimitive(tsType: string): boolean {
  return PRIMITIVES.has(tsType);
}

export function isQmlSemanticAlias(tsType: string): boolean {
  return SEMANTIC_ALIASES.has(tsType);
}

export function isQmlValueType(tsType: string): boolean {
  return VALUE_TYPES.has(tsType);
}
