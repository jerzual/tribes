# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## Project

Tribes is a real-time strategy game (planetary scale, rogue-like elements) with population
simulation and resource management, rendered as an isometric hex-tile world. It is an **Nx
monorepo** using **pnpm** as the package manager (`pnpm@10.30.1` — a stray `bun.lock` may be
present but pnpm is canonical; the Dockerfile and CI use pnpm).

## Commands

All builds/tests/lints run through Nx. Default project is `tribes-web`.

```bash
pnpm install                          # install deps
pnpm start                            # serve tribes-web (vite dev server)
nx serve tribes-api                   # run the backend (needs postgres + .env)
nx build <project>                    # build one project; nx run-many -t build for all
nx test <project>                     # run a project's vitest suite
nx lint <project>                     # eslint a project
pnpm format / pnpm format:check       # prettier (nx format:write / format:check)
nx e2e tribes-web-e2e                 # cypress e2e (boots tribes-web)
nx affected -t lint test build        # only what changed (mirrors CI)
```

Run a **single test file or test name** (vitest passthrough after `--`):

```bash
nx test tribes-engine -- src/generators/planet.builder.spec.ts
nx test tribes-engine -- -t "builds a galaxy"
```

Local stack via Docker (`compose.yml`): postgres 18, `tribes-api`, `tribes-web`. The Dockerfile
is multi-stage with `api` and `web` targets built from `nx run-many -t build`.

## Architecture

Two apps and two libraries; apps depend on both libs (declared via `implicitDependencies`):

- **`libs/tribes-model`** — pure data models / interfaces, shared by everything. Imported as
  `@tribes-nx/tribes-model` (path alias in `tsconfig.base.json`). Contains the world hierarchy:
  `Galaxy → Sector[16][16] → SolarSystem → Planet`, plus `Hex`/`Cube`/`Chunk` (hex-grid math
  on cube coordinates, see redblobgames) and `Seed` (deterministic seeded RNG wrapping
  `seedrandom`).
- **`libs/tribes-engine`** — game logic, imported as `@tribes-nx/tribes-engine`. Two concerns:
  - **World generation** (`generators/*.builder.ts`): seed-driven, deterministic. `buildGalaxy`
    makes a grid of sector stubs; `buildSector` expands one sector into solar systems and
    planets. Child seeds are derived via `Seed.deriveChildSeed()` so the same seed always
    reproduces the same world. `world.perf.spec.ts` guards generation performance.
  - **ECS-style runtime** (`entity.ts`, `behavior.ts`, `system.ts`, `behaviors/`, `systems/`):
    entities carry `Behavior`s, systems operate over entities. Currently mostly scaffolding.
- **`apps/tribes-web`** — React 19 + Three.js front-end. 3D rendering uses
  `@react-three/fiber`; all 3D components live under `src/app/three/`. UI under `src/app/ui/`,
  routed screens under `src/app/screens/` (react-router). State is **Redux + redux-observable
  (epics)**: `state/modules/<feature>/` each export an epic, reducer, and actions; combined in
  `state/modules/index.ts` (`rootReducer`, `rootEpic$`). HMR hot-reloads epics via a
  `BehaviorSubject` + `switchMap` when `environment.livereload` is set.
- **`apps/tribes-api`** — MarbleJS HTTP backend (functional, RxJS-based). Routes are `r.pipe(...)`
  effects registered in `app/http.listener.ts`; `main.ts` wires a Kysely + `pg` Postgres pool
  injected via a MarbleJS context token. DB table types are the `*.entity.ts` files aggregated
  into the `Database` interface in `app/entities/index.ts`. Config comes from `.env` (dotenv),
  `TRIBES_DB_*` / `TRIBES_API_PORT`.

## Conventions

- File naming is suffix-based by role: `*.model.ts`, `*.builder.ts`, `*.entity.ts`,
  `*.epic.ts`, `*.reducer.ts`, `*.actions.ts`, `*.component.tsx`, `*.screen.tsx`,
  `*.mesh.tsx`, `*.system.ts`, `*.behavior.ts`. Tests are colocated `*.spec.ts(x)`.
- ESLint flat config (`eslint.config.mjs`) with `rxjs-x` rules enforced as errors and
  `max-classes-per-file` (disable inline when intentionally grouping classes, as in `system.ts`).
- Front-end and engine both depend on `three` (Vector3 used for hex coordinates).
- New cross-app shared types belong in `tribes-model`; new game logic in `tribes-engine` — keep
  apps thin.

## CI

`.github/workflows/ci-build.yml` runs format-check, lint, test, build as parallel jobs over
`nx affected` (Node 24, pnpm), posting a results table on PRs. `ci-e2e.yml` runs
`docker compose build`. CI and `nx affected` use `main` as the base branch.
