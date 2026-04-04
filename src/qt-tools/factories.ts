import { parseLintJson, parseStderr } from './diagnostic.js';
import * as runner from './qml-runner.js';
import * as cachegen from './qmlcachegen.js';
import * as dom from './qmldom.js';
import * as format from './qmlformat.js';
import * as importScanner from './qmlimportscanner.js';
import * as lint from './qmllint.js';
import * as qmltcMod from './qmltc.js';
import * as typeReg from './qmltyperegistrar.js';
import * as gate from './quality-gate.js';
import * as rccMod from './rcc.js';
import { checkTools, discover, getImportPaths, getToolPath } from './toolchain.js';
import type { QtInstallation, QtToolchainConfig } from './types.js';

export function createQtToolchain(config?: QtToolchainConfig) {
  return {
    discover: () => discover(config),
    checkTools: (inst: QtInstallation) => checkTools(inst),
    getToolPath: (inst: QtInstallation, tool: Parameters<typeof getToolPath>[1]) =>
      getToolPath(inst, tool),
    getImportPaths: (inst: QtInstallation, extra?: readonly string[]) =>
      getImportPaths(inst, extra),
  };
}

export function createQmlFormat(installation: QtInstallation) {
  return {
    formatFile: (path: string, opts?: Parameters<typeof format.formatFile>[2]) =>
      format.formatFile(installation, path, opts),
    formatString: (src: string, opts?: Parameters<typeof format.formatString>[2]) =>
      format.formatString(installation, src, opts),
    formatFiles: (paths: readonly string[], opts?: Parameters<typeof format.formatFiles>[2]) =>
      format.formatFiles(installation, paths, opts),
    getDefaultOptions: () => format.getDefaultOptions(installation),
  };
}

export function createQmlLint(installation: QtInstallation) {
  return {
    lintFile: (path: string, opts?: Parameters<typeof lint.lintFile>[2]) =>
      lint.lintFile(installation, path, opts),
    lintString: (src: string, opts?: Parameters<typeof lint.lintString>[2]) =>
      lint.lintString(installation, src, opts),
    lintFiles: (paths: readonly string[], opts?: Parameters<typeof lint.lintFiles>[2]) =>
      lint.lintFiles(installation, paths, opts),
    lintModule: (name: string, opts?: Parameters<typeof lint.lintModule>[2]) =>
      lint.lintModule(installation, name, opts),
    listPlugins: () => lint.listPlugins(installation),
  };
}

export function createQmlCachegen(installation: QtInstallation) {
  return {
    compile: (path: string, opts?: Parameters<typeof cachegen.compile>[2]) =>
      cachegen.compile(installation, path, opts),
    compileString: (src: string, opts?: Parameters<typeof cachegen.compileString>[2]) =>
      cachegen.compileString(installation, src, opts),
    compileFiles: (paths: readonly string[], opts?: Parameters<typeof cachegen.compileFiles>[2]) =>
      cachegen.compileFiles(installation, paths, opts),
  };
}

export function createQmltc(installation: QtInstallation) {
  return {
    compile: (path: string, opts: Parameters<typeof qmltcMod.compile>[2]) =>
      qmltcMod.compile(installation, path, opts),
    compileString: (src: string, opts: Parameters<typeof qmltcMod.compileString>[2]) =>
      qmltcMod.compileString(installation, src, opts),
  };
}

export function createQmlImportScanner(installation: QtInstallation) {
  return {
    scanDir: (
      root: string,
      paths: readonly string[],
      opts?: Parameters<typeof importScanner.scanDir>[3],
    ) => importScanner.scanDir(installation, root, paths, opts),
    scanFiles: (files: readonly string[], paths: readonly string[]) =>
      importScanner.scanFiles(installation, files, paths),
    scanQrcFiles: (files: readonly string[], paths: readonly string[]) =>
      importScanner.scanQrcFiles(installation, files, paths),
    scanString: (src: string, paths: readonly string[]) =>
      importScanner.scanString(installation, src, paths),
  };
}

export function createQmlDom(installation: QtInstallation) {
  return {
    dumpDom: (path: string, opts?: Parameters<typeof dom.dumpDom>[2]) =>
      dom.dumpDom(installation, path, opts),
    dumpAst: (path: string, opts?: Parameters<typeof dom.dumpAst>[2]) =>
      dom.dumpAst(installation, path, opts),
    dumpString: (src: string, opts?: Parameters<typeof dom.dumpString>[2]) =>
      dom.dumpString(installation, src, opts),
  };
}

export function createQmlRunner(installation: QtInstallation) {
  return {
    run: (path: string, opts?: Parameters<typeof runner.run>[2]) =>
      runner.run(installation, path, opts),
    runString: (src: string, opts?: Parameters<typeof runner.runString>[2]) =>
      runner.runString(installation, src, opts),
    smokeTest: (path: string, opts?: Parameters<typeof runner.smokeTest>[2]) =>
      runner.smokeTest(installation, path, opts),
    listConfigs: () => runner.listConfigs(installation),
  };
}

export function createRcc(installation: QtInstallation) {
  return {
    compile: (qrc: string, opts?: Parameters<typeof rccMod.compile>[2]) =>
      rccMod.compile(installation, qrc, opts),
    listEntries: (qrc: string) => rccMod.listEntries(installation, qrc),
    listMappings: (qrc: string) => rccMod.listMappings(installation, qrc),
    generateProjectQrc: (dir: string) => rccMod.generateProjectQrc(installation, dir),
    createQrcXml: rccMod.createQrcXml,
  };
}

export function createQmlTypeRegistrar(installation: QtInstallation) {
  return {
    register: (files: readonly string[], opts: Parameters<typeof typeReg.register>[2]) =>
      typeReg.register(installation, files, opts),
    generateQmltypes: (
      files: readonly string[],
      out: string,
      opts?: Parameters<typeof typeReg.generateQmltypes>[3],
    ) => typeReg.generateQmltypes(installation, files, out, opts),
  };
}

export function createQualityGate(installation: QtInstallation) {
  return {
    check: (path: string, opts: Parameters<typeof gate.check>[2]) =>
      gate.check(installation, path, opts),
    checkString: (src: string, opts: Parameters<typeof gate.checkString>[2]) =>
      gate.checkString(installation, src, opts),
    checkFiles: (paths: readonly string[], opts: Parameters<typeof gate.checkFiles>[2]) =>
      gate.checkFiles(installation, paths, opts),
  };
}

export function createDiagnosticParser() {
  return { parseStderr, parseLintJson };
}
