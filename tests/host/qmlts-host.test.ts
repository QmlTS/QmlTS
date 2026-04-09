/**
 * Unit tests for QmltsHost TypeScript wrapper.
 *
 * These tests require the native module to be built.
 * If the module is not built, tests will be skipped.
 */

import { beforeAll, describe, expect, test } from 'bun:test';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const nativeModulePaths = [
	fileURLToPath(
		new URL(
			'../../native/npm/qmlts-host/qmlts-host.win32-x64-msvc.node',
			import.meta.url,
		),
	),
	fileURLToPath(
		new URL(
			'../../native/npm/qmlts-host/qmlts-host.linux-x64-gnu.node',
			import.meta.url,
		),
	),
];

const isNativeModuleAvailable = nativeModulePaths.some((p) => existsSync(p));

describe.skipIf(!isNativeModuleAvailable)('host/qmlts-host', () => {
	let QmltsHost: typeof import('../../native/npm/qmlts-host/src/qmlts-host').QmltsHost;

	beforeAll(async () => {
		const mod = await import(
			'../../native/npm/qmlts-host/src/qmlts-host.ts'
		);
		QmltsHost = mod.QmltsHost;
	});

	test('TH-01: constructor creates engine, version is accessible', () => {
		const host = new QmltsHost();
		expect(host.version).toMatch(/^\d+\.\d+\.\d+/);
		host.dispose();
	});

	test('TH-02: dispose() makes subsequent calls throw', () => {
		const host = new QmltsHost();
		host.dispose();
		expect(() => host.version).toThrow(/disposed/i);
		expect(() => host.qtVersion).toThrow(/disposed/i);
	});

	test('TH-03: double dispose does not throw', () => {
		const host = new QmltsHost();
		host.dispose();
		expect(() => host.dispose()).not.toThrow();
	});

	test('TH-04: registerViewModel sets up a bridge', () => {
		const host = new QmltsHost();
		expect(() =>
			host.registerViewModel('LoginViewModel'),
		).not.toThrow();
		host.dispose();
	});

	test('TH-05: registerViewModel throws for unknown type', () => {
		const host = new QmltsHost();
		expect(() => host.registerViewModel('FakeVM')).toThrow(
			/not found/i,
		);
		host.dispose();
	});

	test('TH-06: syncState + getProperty roundtrip', () => {
		const host = new QmltsHost();
		host.registerViewModel('LoginViewModel');

		host.syncState('LoginViewModel', 'username', '"round-trip"');
		const value = host.getProperty('LoginViewModel', 'username');
		expect(value).toBe('"round-trip"');
		host.dispose();
	});

	test('TH-07: syncStateBatch sets multiple properties', () => {
		const host = new QmltsHost();
		host.registerViewModel('LoginViewModel');

		host.syncStateBatch(
			'LoginViewModel',
			JSON.stringify({ username: 'batch-u', password: 'batch-p' }),
		);
		expect(host.getProperty('LoginViewModel', 'username')).toBe(
			'"batch-u"',
		);
		expect(host.getProperty('LoginViewModel', 'password')).toBe(
			'"batch-p"',
		);
		host.dispose();
	});

	test('TH-08: syncState throws for property not found', () => {
		const host = new QmltsHost();
		host.registerViewModel('LoginViewModel');

		expect(() =>
			host.syncState('LoginViewModel', 'nope', '"x"'),
		).toThrow(/not found/i);
		host.dispose();
	});

	test('TH-09: loadString and processEvents work', () => {
		const host = new QmltsHost();
		host.registerViewModel('LoginViewModel');
		host.syncState('LoginViewModel', 'username', '"qml-test"');

		expect(() =>
			host.loadString(
				'import QtQuick\nItem { property string u: vm.username }',
			),
		).not.toThrow();
		host.processEvents();
		host.dispose();
	});

	test('TH-10: isDisposed reflects state', () => {
		const host = new QmltsHost();
		expect(host.isDisposed).toBe(false);
		host.dispose();
		expect(host.isDisposed).toBe(true);
	});

	test('TH-11: registeredTypes returns known types', () => {
		const host = new QmltsHost();
		const types = host.registeredTypes;
		expect(types).toContain('LoginViewModel');
		expect(types).toContain('CounterViewModel');
		host.dispose();
	});

	test('TH-12: hasBridgeType checks correctly', () => {
		const host = new QmltsHost();
		expect(host.hasBridgeType('LoginViewModel')).toBe(true);
		expect(host.hasBridgeType('NoSuchVM')).toBe(false);
		host.dispose();
	});
});

describe('host/qmlts-host (skip check)', () => {
	test('check native module availability', () => {
		if (!isNativeModuleAvailable) {
			console.log(
				'⚠️  Native module not built. Skipping QmltsHost tests.',
			);
		}
		expect(true).toBe(true);
	});
});
