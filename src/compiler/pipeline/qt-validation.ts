import type { Diagnostic } from '../diagnostics.js';
import { compile } from './compiler.js';
import { writeCompilationOutput } from './output-writer.js';
import type {
	CompilationResult,
	CompilerOptions,
	QtValidationOptions,
	QtValidationResult,
} from './pipeline-types.js';

/**
 * Compile a project and validate output with Qt tools.
 * Calls sync compile() internally, materializes output, then runs Qt validation.
 */
export async function compileWithQt(
	options: CompilerOptions,
): Promise<CompilationResult> {
	const result = compile(options);

	if (!options.qt) return result;
	if (!result.success || result.units.length === 0) return result;

	writeCompilationOutput(result);

	const qtResult = await validateCompilationOutput(result, options.qt);

	const mergedDiagnostics = [...result.diagnostics, ...qtResult.diagnostics];
	const success =
		result.success &&
		!qtResult.diagnostics.some((d) => d.severity === 'error');

	return {
		...result,
		diagnostics: mergedDiagnostics,
		success,
		qtValidation: qtResult,
	};
}

/**
 * Validate already-materialized compilation output with Qt tools.
 * Files must already exist at their qmlOutputPath locations.
 */
export async function validateCompilationOutput(
	result: CompilationResult,
	qtOptions: QtValidationOptions,
): Promise<QtValidationResult> {
	const { discover, lintFile, formatString, scanFiles, getImportPaths } =
		await import('../../qt-tools/index.js');
	type QmlLintResult = import('../../qt-tools/types.js').QmlLintResult;
	type QmlFormatResult = import('../../qt-tools/types.js').QmlFormatResult;
	type QmlImportScannerResult =
		import('../../qt-tools/types.js').QmlImportScannerResult;

	const qtDir = qtOptions.qtDir ?? process.env['QT_DIR'];
	const installation = await discover({ qtDir });

	const qmlFiles = result.units
		.filter((u) => u.qmlContent)
		.map((u) => u.qmlOutputPath);

	const shouldLint = qtOptions.lint !== false;
	const shouldFormat = qtOptions.format === true;
	const shouldScanImports = qtOptions.importScan !== false;

	const lintResults = new Map<string, QmlLintResult>();
	const formatResults = new Map<string, QmlFormatResult>();
	let importScanResult: QmlImportScannerResult | undefined;
	const diagnostics: Diagnostic[] = [];

	if (shouldLint) {
		for (const qmlPath of qmlFiles) {
			try {
				const lintResult = await lintFile(installation, qmlPath);
				lintResults.set(qmlPath, lintResult);

				for (const diag of lintResult.diagnostics) {
					diagnostics.push({
						severity:
							diag.level === 'error'
								? 'error'
								: diag.level === 'warning'
									? 'warning'
									: 'info',
						code: 'QMLTS-Q001',
						message: `[qmllint] ${diag.message}`,
						file: qmlPath,
						line: diag.line,
						column: diag.column,
					});
				}
			} catch (e) {
				diagnostics.push({
					severity: 'warning',
					code: 'QMLTS-Q002',
					message: `qmllint failed for ${qmlPath}: ${e instanceof Error ? e.message : String(e)}`,
					file: qmlPath,
				});
			}
		}
	}

	if (shouldFormat) {
		for (const unit of result.units) {
			if (!unit.qmlContent) continue;
			try {
				const fmtResult = await formatString(
					installation,
					unit.qmlContent,
				);
				formatResults.set(unit.qmlOutputPath, fmtResult);

				if (fmtResult.hasChanges) {
					diagnostics.push({
						severity: 'info',
						code: 'QMLTS-Q003',
						message: `[qmlformat] ${unit.qmlOutputPath} would be reformatted`,
						file: unit.qmlOutputPath,
					});
				}
			} catch (e) {
				diagnostics.push({
					severity: 'warning',
					code: 'QMLTS-Q002',
					message: `qmlformat failed for ${unit.qmlOutputPath}: ${e instanceof Error ? e.message : String(e)}`,
					file: unit.qmlOutputPath,
				});
			}
		}
	}

	if (shouldScanImports && qmlFiles.length > 0) {
		try {
			const importPaths = getImportPaths(
				installation,
				qtOptions.importPaths ? [...qtOptions.importPaths] : undefined,
			);
			importScanResult = await scanFiles(
				installation,
				qmlFiles,
				importPaths,
			);
		} catch (e) {
			diagnostics.push({
				severity: 'warning',
				code: 'QMLTS-Q002',
				message: `qmlimportscanner failed: ${e instanceof Error ? e.message : String(e)}`,
			});
		}
	}

	const allValid = !diagnostics.some((d) => d.severity === 'error');

	return {
		lintResults,
		formatResults,
		importScanResult,
		diagnostics,
		allValid,
	};
}
