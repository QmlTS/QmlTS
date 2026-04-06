const KNOWN_QT_MODULES: ReadonlySet<string> = new Set([
	"QML",
	"QmlTime",
	"Qt.labs.animation",
	"Qt.labs.assetdownloader",
	"Qt.labs.folderlistmodel",
	"Qt.labs.lottieqt",
	"Qt.labs.lottieqt.VectorImageHelpers",
	"Qt.labs.platform",
	"Qt.labs.qmlmodels",
	"Qt.labs.settings",
	"Qt.labs.StyleKit",
	"Qt.labs.StyleKit.impl",
	"Qt.labs.synchronizer",
	"Qt.labs.wavefrontmesh",
	"Qt.test.controls",
	"Qt3D.Animation",
	"Qt3D.Core",
	"Qt3D.Extras",
	"Qt3D.Input",
	"Qt3D.Logic",
	"Qt3D.Render",
	"Qt5Compat.GraphicalEffects.private",
	"QtCharts",
	"QtCore",
	"QtDataVisualization",
	"QtGraphs",
	"QtGrpc",
	"QtLocation",
	"QtMultimedia",
	"QtNetwork",
	"QtPositioning",
	"QtQml",
	"QtQml.Models",
	"QtQml.StateMachine",
	"QtQml.WorkerScript",
	"QtQml.XmlListModel",
	"QtQuick",
	"QtQuick.Controls.Basic.impl",
	"QtQuick.Controls.FluentWinUI3.impl",
	"QtQuick.Controls.Fusion",
	"QtQuick.Controls.Fusion.impl",
	"QtQuick.Controls.Imagine",
	"QtQuick.Controls.impl",
	"QtQuick.Controls.Material",
	"QtQuick.Controls.Material.impl",
	"QtQuick.Controls.Universal",
	"QtQuick.Controls.Universal.impl",
	"QtQuick.Dialogs",
	"QtQuick.Dialogs.quickimpl",
	"QtQuick.Effects",
	"QtQuick.Layouts",
	"QtQuick.LocalStorage",
	"QtQuick.NativeStyle",
	"QtQuick.Particles",
	"QtQuick.Pdf",
	"QtQuick.Scene2D",
	"QtQuick.Scene3D",
	"QtQuick.Shapes",
	"QtQuick.Shapes.DesignHelpers",
	"QtQuick.Templates",
	"QtQuick.Timeline",
	"QtQuick.Timeline.BlendTrees",
	"QtQuick.VectorImage",
	"QtQuick.VectorImage.Helpers",
	"QtQuick.VirtualKeyboard.Core",
	"QtQuick.VirtualKeyboard.Plugins.Hangul",
	"QtQuick.VirtualKeyboard.Plugins.OpenWNN",
	"QtQuick.VirtualKeyboard.Plugins.Pinyin",
	"QtQuick.VirtualKeyboard.Plugins.TCIme",
	"QtQuick.VirtualKeyboard.Plugins.Thai",
	"QtQuick.VirtualKeyboard.Settings",
	"QtQuick3D",
	"QtQuick3D.AssetUtils",
	"QtQuick3D.Helpers",
	"QtQuick3D.Helpers.impl",
	"QtQuick3D.lightmapviewer",
	"QtQuick3D.MaterialEditor",
	"QtQuick3D.Particles3D",
	"QtQuick3D.Physics",
	"QtQuick3D.Physics.Helpers",
	"QtQuick3D.SpatialAudio",
	"QtQuick3D.Xr",
	"QtRemoteObjects",
	"QtScxml",
	"QtSensors",
	"QtTest",
	"QtTextToSpeech",
	"QtWebChannel",
	"QtWebEngine",
	"QtWebSockets",
	"QtWebView",
]);

export interface ImportClassification {
	readonly isDslImport: boolean;
	readonly qtModuleUri?: string;
}

const DSL_GENERATED_RE = /dsl\/generated\/([^/]+)\//;

export function classifyImport(
	moduleSpecifier: string,
): ImportClassification {
	const match = DSL_GENERATED_RE.exec(moduleSpecifier);
	if (match?.[1] && KNOWN_QT_MODULES.has(match[1])) {
		return { isDslImport: true, qtModuleUri: match[1] };
	}
	return { isDslImport: false };
}

export function isKnownQtModule(name: string): boolean {
	return KNOWN_QT_MODULES.has(name);
}
