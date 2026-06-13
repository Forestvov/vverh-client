# Project Rules

## Stack

- React 19
- TanStack Start
- TanStack Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- FSD (Feature-Sliced Design)

---

## Architecture

Follow Feature-Sliced Design.

Layers:

- app
- pages
- widgets
- features
- entities
- shared

Dependency rule:

- Higher layers may import lower layers.
- Lower layers must never import higher layers.

Allowed:

- pages → widgets
- widgets → features
- features → entities
- entities → shared

Forbidden:

- shared → entities
- shared → features
- entities → features
- entities → widgets

---

## Routing

All route definitions must live in:

src/routes

Business logic must not be implemented inside route files.

Route files should only connect pages to TanStack Router.

---

## UI

Use shadcn/ui components from:

src/shared/ui

Do not create duplicate button, input, dialog, select implementations.

Prefer composition over inheritance.

---

## Styling

Use Tailwind CSS v4.

Design tokens must be defined in:

src/app/styles/theme.css

Never hardcode colors in components.

Prefer semantic tokens:

- bg-primary
- text-foreground
- border-border

instead of raw color values.

---

## Imports

Use aliases:

@/app
@/pages
@/widgets
@/features
@/entities
@/shared

Prefer absolute imports over relative imports.

---

## Components

Keep components small.

If a component exceeds ~200 lines:

- split logic
- extract hooks
- extract subcomponents

---

## Types

Avoid any.

Prefer explicit types.

Export public types from index.ts.

---

## Before finishing a task

Always:

1. Run type checks.
2. Run linting.
3. Fix TypeScript errors.
4. Fix ESLint errors.
5. Ensure imports follow FSD boundaries.

Never mark a task as completed if the project does not build.
