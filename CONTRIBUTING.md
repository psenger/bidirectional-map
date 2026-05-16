# Contributing

## Prerequisites

- Node.js v22 or later (use `.nvmrc` with `nvm use`)
- npm

## Setup

```bash
git clone https://github.com/psenger/bidirectional-map.git
cd bidirectional-map
npm install
```

## Branching

All work branches off `dev`. Open pull requests against `dev`, not `main`. The `main` branch is reserved for releases.

## Making changes

The entire library lives in one file: `src/com/cngr/bidirectionalmap/index.js`. Tests are co-located at `src/com/cngr/bidirectionalmap/index.spec.js`.

Do not edit `README.md` directly. It is generated from `.README.md`, JSDoc in the source file, and the `INSTALLATION.md` / `TUTORIAL.md` partials. Run `npm run docs` to regenerate it after changing any of those sources.

The `dist/` directory is also generated. Run `npm run build` to rebuild it. Do not commit changes to `dist/` manually.

## Linting and tests

```bash
# Lint source files
npm run test:lint

# Run tests with coverage
npm test
```

CI runs against Node 22.x and 24.x on every pull request. Ensure both commands pass locally before pushing.

## Code style

This project uses [StandardJS](https://standardjs.com). Run `npm run test:lint` to check. ESLint is configured to skip `*.spec.js` files, but test code should still follow the same conventions.

## Commit messages

Use concise, imperative commit messages that describe what changed and why. No need for a specific format beyond that.
