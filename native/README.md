# QmlTS Native Host

This directory contains the Rust native host for QmlTS, providing the bridge between TypeScript and Qt QML via napi-rs and cxx-qt.

## Architecture

```
┌─────────────────────────────────────────┐
│  TypeScript Runtime                      │
│  @qmlts/host (napi-rs bindings)          │
├─────────────────────────────────────────┤
│  napi-rs boundary                        │
│  .node native plugin                     │
├─────────────────────────────────────────┤
│  Rust Host (qmlts-host crate)            │
│  QmltsEngine + PropertySync + Commands   │
├─────────────────────────────────────────┤
│  cxx-qt generated QObject types          │
├─────────────────────────────────────────┤
│  Qt 6.11.0 (QtQml, QtQuick)              │
└─────────────────────────────────────────┘
```

## Directory Structure

```
native/
├── Cargo.toml              # Workspace root
├── crates/
│   └── qmlts-host/         # Main crate
│       ├── Cargo.toml
│       ├── build.rs        # napi-rs + cxx-qt build integration
│       └── src/
│           ├── lib.rs      # Crate root
│           ├── engine.rs   # QmltsEngine (Qt lifecycle)
│           ├── error.rs    # QmltsError types
│           └── exports.rs  # #[napi] exported functions
└── npm/
    └── qmlts-host/         # npm package
        ├── package.json
        ├── index.js        # ESM entry point
        ├── index.cjs       # CJS entry point
        ├── index.d.ts      # Published TypeScript types
        └── src/
            ├── index.ts    # Entry point
            └── types.ts    # TypeScript types
```

## Building

### Prerequisites

- Rust 1.85+ (stable)
- Qt 6.11.0 SDK
- Node.js 18+ or Bun

### Build Commands

```bash
# Build the published N-API addon (.node)
cd npm/qmlts-host
bunx @napi-rs/cli build \
  --manifest-path ../../crates/qmlts-host/Cargo.toml \
  --package-json-path package.json \
  --output-dir . \
  --platform \
  --release \
  --no-js

# Or from the package scripts
bun run build

# Build debug addon
bun run build:debug

# Return to the workspace root for Rust-only commands
cd ../..

# Run tests
cargo test

# Check formatting
cargo fmt --check

# Run clippy
cargo clippy --all-targets
```

The consumable native artifact is a platform-tagged `.node` file written into
`native/npm/qmlts-host/`, for example:

- `qmlts-host.win32-x64-msvc.node`
- `qmlts-host.linux-x64-gnu.node`
- `qmlts-host.darwin-arm64.node`

Use the `mock-qt` feature only for bootstrap-stage Rust-only validation in
environments where you do not want to exercise real Qt integration yet. The
normal Step 1 CI path still builds and tests against a real Qt installation.

## Exported API (Step 1)

The following functions are exported via napi-rs in this step:

### Engine Lifecycle
- `createEngine(config?)` - Create a new QmlTS engine
- `destroyEngine(engine)` - Explicitly destroy an engine
- `version()` - Get QmlTS version
- `qtVersion()` - Get Qt version

### QML Loading
- `loadFile(engine, path)` - Load QML from file
- `loadString(engine, source, baseUrl?)` - Load QML from string
- `addImportPath(engine, path)` - Add QML import path
- `addPluginPath(engine, path)` - Add Qt plugin path

### Event Loop
- `exec(engine)` - Start blocking event loop
- `quit(engine, exitCode?)` - Request event loop quit
- `processEvents(engine)` - Process pending events
- `processEventsFor(engine, timeoutMs)` - Process events with timeout

## Future Steps

Steps 2-6 will add:
- Property synchronization (TS State → Qt QProperty)
- Command dispatch (QML → TS handlers)
- Effect emission (TS → QML signals)
- List model support
- Hot reload capabilities

## License

MIT
