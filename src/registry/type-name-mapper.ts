const BUILTIN_CPP_TO_QML: ReadonlyMap<string, string> = new Map([
  ['QString', 'string'],
  ['bool', 'bool'],
  ['int', 'int'],
  ['double', 'double'],
  ['float', 'real'],
  ['qreal', 'real'],
  ['QColor', 'color'],
  ['QUrl', 'url'],
  ['QDateTime', 'date'],
  ['QDate', 'date'],
  ['QPointF', 'point'],
  ['QPoint', 'point'],
  ['QSizeF', 'size'],
  ['QSize', 'size'],
  ['QRectF', 'rect'],
  ['QRect', 'rect'],
  ['QFont', 'font'],
  ['QMatrix4x4', 'matrix4x4'],
  ['QVector2D', 'vector2d'],
  ['QVector3D', 'vector3d'],
  ['QVector4D', 'vector4d'],
  ['QQuaternion', 'quaternion'],
  ['QVariant', 'var'],
  ['QJSValue', 'var'],
  ['QVariantList', 'list'],
  ['QVariantMap', 'var'],
  ['QStringList', 'list<string>'],
  ['void', 'void'],
]);

// Pre-built reverse map (first C++ type wins for duplicate QML names)
const BUILTIN_QML_TO_CPP: ReadonlyMap<string, string> = (() => {
  const reverse = new Map<string, string>();
  for (const [cpp, qml] of BUILTIN_CPP_TO_QML) {
    if (!reverse.has(qml)) {
      reverse.set(qml, cpp);
    }
  }
  return reverse;
})();

export class TypeNameMapper {
  private readonly forwardCustom = new Map<string, string>();
  private readonly reverseCustom = new Map<string, string>();

  mapCppToQml(cppType: string): string {
    const builtin = BUILTIN_CPP_TO_QML.get(cppType);
    if (builtin !== undefined) return builtin;

    const custom = this.forwardCustom.get(cppType);
    if (custom !== undefined) return custom;

    return cppType;
  }

  mapQmlToCpp(qmlType: string): string {
    const custom = this.reverseCustom.get(qmlType);
    if (custom !== undefined) return custom;

    const builtin = BUILTIN_QML_TO_CPP.get(qmlType);
    if (builtin !== undefined) return builtin;

    return qmlType;
  }

  addMapping(cppType: string, qmlType: string): void {
    this.forwardCustom.set(cppType, qmlType);
    this.reverseCustom.set(qmlType, cppType);
  }
}
