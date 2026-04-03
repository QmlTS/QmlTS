# QmlTS

> Write QML interfaces with TypeScript Fluent DSL, compile to `.qml`, and run natively on Qt 6.

[![CI](https://github.com/QmlTS/QmlTS/actions/workflows/ci.yml/badge.svg)](https://github.com/QmlTS/QmlTS/actions/workflows/ci.yml)

## Overview

QmlTS is a TypeScript-to-QML development framework that lets you build Qt Quick interfaces using a type-safe Fluent DSL. It compiles TypeScript source code into standard `.qml` files, which run natively on the Qt 6 engine — no Node.js runtime required in production.

### Key Features

- **Type-safe DSL**: Write `Rectangle().width(100).color("red")` with full IntelliSense
- **Compile to QML**: Generate standard `.qml` files from TypeScript
- **Qt 6.11+ support**: Built for the latest Qt, targeting QtQuick and QtQml
- **Native performance**: Production output is pure `.qml` + C++ executable
- **Hot reload**: Snapshot → destroy → rebuild → restore cycle for instant dev feedback

## Architecture

QmlTS consists of an npm toolchain (TypeScript) and a C++ host library, communicating via pure C FFI + JSON:

```
┌─────────────────────────────────────────┐
│         npm Toolchain (TypeScript)       │
│                                         │
│  @qmlts/registry   Qt type scanner      │
│  @qmlts/ast        QML AST              │
│  @qmlts/emitter    AST → QML text       │
│  @qmlts/dsl        Fluent DSL generator  │
│  @qmlts/compiler   TS DSL → QML         │
│  @qmlts/cli        Command-line tool     │
└─────────────────────────────────────────┘
```

## Current Status

**Phase 1: Registry Builder** — Scans Qt installations and builds a unified type registry from `.qmltypes`, `qmldir`, and `*_metatypes.json` files.

### Module: `@qmlts/registry`

The registry module is the foundation of QmlTS. It discovers and parses Qt type metadata to build a queryable type registry.

| Component | Description |
|-----------|-------------|
| **Scanner** | Discovers `.qmltypes`, `qmldir`, and `*_metatypes.json` files in Qt installations |
| **QmltypesParser** | Parses the custom declarative `.qmltypes` format |
| **QmldirParser** | Parses line-based `qmldir` module definition files |
| **MetatypesParser** | Parses `*_metatypes.json` C++ metadata files |
| **TypeNameMapper** | Maps C++ type names to QML type names (e.g., `QString` → `string`) |
| **Normalizer** | Merges three data sources into a unified type registry |
| **RegistryQuery** | Provides efficient queries over the registry (type lookup, inheritance, etc.) |
| **Snapshot** | Serializes/deserializes the registry for caching |
| **RegistryBuilder** | One-stop entry point orchestrating all components |

### Qt 6.11 Data

| Metric | Value |
|--------|-------|
| `.qmltypes` files | 113 (4.41 MB, 1785 Components) |
| `qmldir` files | 113 |
| `*_metatypes.json` files | 175 (15.35 MB) |

## Development

### Prerequisites

- [Bun](https://bun.sh/) (latest)
- TypeScript 5.8+
- Qt 6.11+ installation (for integration tests only)

### Getting Started

```bash
# Install dependencies
bun install

# Run tests
bun test

# Type check
bun run typecheck

# Build
bun run build
```

### Project Structure

```
QmlTS/
├── .github/workflows/ci.yml   # CI (self-hosted Linux runner)
├── src/
│   ├── index.ts                # Root exports
│   └── registry/               # @qmlts/registry module
│       ├── index.ts            # Module exports
│       ├── types.ts            # Type definitions
│       ├── errors.ts           # Error classes
│       ├── scanner.ts          # File discovery
│       ├── qmltypes-parser.ts  # .qmltypes parser
│       ├── qmldir-parser.ts    # qmldir parser
│       ├── metatypes-parser.ts # metatypes JSON parser
│       ├── type-name-mapper.ts # C++ → QML type mapping
│       ├── normalizer.ts       # Three-source merge
│       ├── registry-query.ts   # Query engine
│       ├── snapshot.ts         # Serialization/caching
│       └── builder.ts          # Builder entry point
├── tests/
│   └── registry/               # Registry module tests
│       ├── *.test.ts           # Test files
│       └── fixtures/           # Test fixture files
├── .gitignore
├── bunfig.toml                 # Bun configuration
├── package.json
├── tsconfig.json
└── README.md
```

### Running Integration Tests

Integration tests that require a Qt installation look for the `QT_DIR` environment variable:

```bash
QT_DIR=/path/to/qt/6.11.0/gcc_64 bun test
```

## License

[MIT](LICENSE)
