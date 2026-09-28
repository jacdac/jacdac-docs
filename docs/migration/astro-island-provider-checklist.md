# Astro Island Provider Checklist

Purpose: prevent no-op UI regressions when mounting legacy React roots inside Astro islands.

## Scope audited

- Island entry: `astro-starlight/src/components/dashboard/LegacyDashboardIsland.tsx`
- Island route: `astro-starlight/src/pages/dashboard/index.astro`
- Legacy root mounted by island: `src/components/dashboard/Dashboard.tsx`

## Current islands using legacy React roots

- `astro-starlight/src/pages/dashboard/index.astro`
  - mounts `LegacyDashboardIsland` with `client:only="react"`

No other Astro page currently mounts legacy `src/**` React roots.

## Provider dependency map (dashboard)

Required providers for working behavior:

1. `JacdacContext.Provider`
- Why: bus access via `useBus`/`useBusWithMode` in dashboard and dialog flows.
- Primary consumers:
  - `src/components/dashboard/Dashboard.tsx`
  - `src/components/dialogs/StartSimulatorDialog.tsx`

2. `HostedSimulatorsProvider`
- Why: simulator classification and lifecycle (`isHostedSimulator`, `clearHostedSimulators`, hosted iframe sims).
- Primary consumer:
  - `src/components/dashboard/Dashboard.tsx`

3. `PacketsProvider`
- Why: `Dashboard` reads tracing state from `PacketsContext`.
- Primary consumer:
  - `src/components/dashboard/Dashboard.tsx`

4. `AppProvider`
- Why: dialog context uses `AppContext.setToolsMenu`.
- Primary consumers:
  - `src/components/SimulatorsDialogContext.tsx`
  - `src/components/dashboard/DashboardDeviceItem.tsx`

5. `SimulatorDialogsProvider`
- Why: powers Start Simulator (+) open/close state and renders `StartSimulatorDialog`.
- Primary consumers:
  - `src/components/buttons/StartSimulatorButton.tsx`
  - `src/components/alert/SimulateDeviceAlert.tsx`

6. `SnackbarProvider` (notistack)
- Why: `StartSimulatorDialog` uses snackbar notifications.
- Primary consumer:
  - `src/components/dialogs/StartSimulatorDialog.tsx`

7. `WebAudioProvider`
- Why: buzzer/vibration widgets need audio activation and playback state.
- Primary consumers:
  - `src/components/dashboard/DashboardBuzzer.tsx`
  - `src/components/dashboard/DashboardVibrationMotor.tsx`

Optional provider (cosmetic/state quality):

- `DarkModeContext` provider
  - Used by `src/components/dashboard/DashboardIndexedScreen.tsx`
  - Missing provider does not break interaction flow, but can affect style behavior.

## Known failures this checklist prevents

1. Start Simulator + button no-op
- Root cause: `SimulatorDialogsProvider` missing in island wrapper.

2. Buzzer unlock appears clickable but does not activate
- Root cause: `WebAudioProvider` missing in island wrapper.

## Minimal safe wrapper pattern

For dashboard islands, ensure this order is present around `Dashboard`:

1. `JacdacContext.Provider`
2. `SnackbarProvider`
3. `WebAudioProvider`
4. `HostedSimulatorsProvider`
5. `PacketsProvider`
6. `AppProvider`
7. `SimulatorDialogsProvider`

## Pre-merge verification checklist (for any new legacy island)

1. List all `useContext(...)` calls reachable from the mounted root.
2. Map each context to a provider and ensure the provider is wrapped in island entry.
3. Exercise at least one interaction per provider-dependent feature.
4. Confirm no `Outdated Optimize Dep` error before triage; if present, restart dev server.
5. Validate production build after provider wiring changes.

## Suggested command snippets

Context scan in a subtree:

- `rg "useContext\(" src/components/dashboard src/components/buttons src/components/alert src/components/dialogs`

Astro island scan:

- `rg "client:only=|client:load=|client:visible=|client:idle=" astro-starlight/src`
- `rg "../../../../src/" astro-starlight/src`

CI guard:

- `node scripts/check-astro-island-checklist.mjs`
- Enforced in `.github/workflows/astro-preview.yml`

## Notes

- Keep provider wrappers as close as possible to island root to avoid accidental omission.
- If behavior is only broken in dev and mentions optimize deps, restart Astro dev server before code changes.
