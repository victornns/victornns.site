# victornns.site

Personal portfolio and CV built with Next.js App Router, React, TypeScript and Tailwind.

Read relevant existing code before proposing or implementing a pattern. Do not infer project conventions from filenames alone.

## Validation

Never run `next build` while the development server is running; both write to `.next/`.

For normal validation, use the project's available scripts or equivalent checks:

```bash
npx tsc --noEmit
npx next lint --dir src
npx prettier --check .
```

Ask before running a production build.

## Architecture

Use **feature-based architecture** as the main organizational direction.

Keep code in the smallest appropriate ownership scope:

```text
route-specific     → app
feature-specific   → features/<feature>
shared UI          → components
content            → content
i18n/routing       → i18n
shared utilities   → lib
```

Within that shared layer, the real order is `lib → i18n → content →
components`. `i18n` and `lib` never import `content`.

Dependencies should generally flow:

```text
app
 ↓
features
 ↓
components / content / i18n / lib
```

Shared layers must not depend on `features` or `app`.

Avoid cross-feature dependencies when a higher-level composition can coordinate them instead.

Do not create architectural layers for hypothetical future needs.

## Features

Keep small features flat.

As a feature grows, organize it by real responsibilities:

```text
features/projects/
├── components/
├── server/
├── lib/
├── model/
└── ...
```

Create these folders only when the feature has code that justifies them.

Feature-specific components, hooks, types, helpers and state stay inside the feature unless they become genuinely shared.

Do not create `index.ts` barrel files automatically. Use a public entry point only when it creates a useful module boundary.

## Components and files

Avoid files that accumulate unrelated responsibilities.

Split code when the extracted part has a clear responsibility, such as:

- meaningful UI composition;
- isolated interaction or state;
- server/client separation;
- pure transformation or routing logic;
- independently understandable or testable behavior.

A component does not need multiple consumers to deserve its own file.

Do not split by line count.

Do not create a folder around every component. Use a folder when the component becomes a module with related files.

Optimize for cohesive files, not fewer files.

## Functions and control flow

Functions should expose intent through clear names and focused responsibilities.

Avoid large procedural functions that mix parsing, validation, transformation, branching and side effects.

Extract meaningful operations or decisions when doing so makes the main flow easier to understand.

Prefer named conditions, early returns and clear functions over deeply nested `if`/`else`, complex ternaries or important transformations written inline.

Do not extract trivial helpers mechanically.

## Server and Client Components

Server Components are the default.

Use `"use client"` only when client-side behavior is required, such as state, effects, browser APIs or interactive event handling.

Keep Client boundaries focused and cohesive.

Do not make a large parent Client Component only because a descendant requires interactivity.

Keep server-only code outside the client dependency graph.

Pass serializable data from Server to Client using the smallest **coherent** contract needed by the client.

## Content

All application and editorial content belongs in `src/content`.

Do not scatter labels, descriptions or other content through components when they belong to the content layer.

Organize content by domain, for example:

```text
content/
├── projects/
├── resume/
├── about/
└── common/
```

Use `common` only for genuinely shared content or values without a clear domain owner.

Do not use `common` as a dumping ground.

## UI and Tailwind

Reuse existing UI primitives, utilities and design tokens before creating new ones.

Tailwind classes may be written normally inside `className`.

Tailwind class strings stored outside JSX must use `tw`:

```ts
const BUTTON_CLASSNAME = tw`inline-flex items-center justify-center`;
```

Use `joinClassNames` for conditional class composition when appropriate.

Do not recreate existing Tailwind tokens with equivalent arbitrary values.

## Feature internals

Use feature-local `lib/` for pure or non-UI logic owned by that feature.

Use shared `src/lib` only for genuinely cross-cutting or infrastructural code.

Avoid generic global `utils` or `helpers` dumping grounds.

A function should not become a React hook unless it actually uses React hooks.

Use feature-local `model/` when domain types, schemas, state, constants or contracts form a meaningful scope.

Keep small local types close to their owner instead of creating type files unnecessarily.

## Imports

Use the project's `@/` alias consistently.

Use `import type` for type-only imports.

Prefer imports that make ownership and dependencies explicit.

Avoid circular dependencies and hidden cross-feature coupling.

Avoid broad `export *` barrels.

## Routing and state

Localized paths and route aliases belong to `src/i18n`.

Do not duplicate route knowledge across features when it can be centralized there.

Use URL state when state represents meaningful navigation that should be linkable, restorable or reflected in browser history.

Keep ephemeral UI state local.

Preserve existing project-specific navigation behavior when modifying related code, but do not generalize implementation details into rules for unrelated features.

## Comments

Avoid comments when naming, structure, types or decomposition can communicate the intent.

Never add comments that narrate the code, the refactor or the change being made.

Comments should explain only non-obvious constraints or decisions that cannot reasonably be expressed by the code itself.

## Refactoring workflow

Preserve existing behavior unless a behavioral change is explicitly requested.

Make only changes required by the task. Do not refactor surrounding code unless necessary.

Prefer improving ownership, responsibilities and boundaries before introducing abstractions.

Do not add libraries, layers, wrappers, hooks or generic abstractions for hypothetical future requirements.

When existing code conflicts with these guidelines, inspect the surrounding implementation before applying a rule mechanically.
