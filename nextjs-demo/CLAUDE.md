# CLAUDE.md

This file provides guidance to Claude Code when working with this project.

## Project Overview

Standalone Next.js application for frontend development.

## Quick Commands

```bash
bun run dev      # Start development server (http://localhost:3000)
bun run build    # Production build
bun run start    # Run production build
bun run lint     # Run linting checks (oxlint + ESLint)
bun run format   # Format code with oxfmt
bun run storybook # Start Storybook (http://localhost:6006)
```

## Architecture

- **Framework**: Next.js 16 with App Router and Turbopack
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3.4
- **UI Components**: shadcn/ui (Radix UI + Tailwind)
- **Package Manager**: bun
- **Linting**: oxlint + ESLint 9 (flat config)
- **Formatting**: oxfmt
- **React**: React 19
- **Storybook**: Component documentation and testing

## Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   └── button.tsx
│   └── Button/             # Custom components with Storybook
│       ├── Button.tsx
│       ├── Button.stories.tsx
│       └── index.ts
└── lib/
    └── utils.ts            # Utility functions (cn helper)
```

## Key Configuration Files

| File                 | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `tsconfig.json`      | TypeScript config, path alias `@/*` → `./src/*` |
| `tailwind.config.ts` | Tailwind + shadcn/ui color tokens               |
| `components.json`    | shadcn/ui configuration                         |
| `eslint.config.mjs`  | ESLint 9 flat config                            |
| `.oxlintrc.json`     | Oxlint configuration                            |
| `.oxfmtrc.json`      | Oxfmt configuration                             |

## shadcn/ui

Components are installed via CLI and stored in `src/components/ui/`.

```bash
bunx shadcn@latest add [component]  # Add new component
```

Available components use CSS variables defined in `globals.css` for theming.

## Import Aliases

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Code Quality

- Run `bun run lint` before commits
- Run `bun run format` to format code
- TypeScript strict mode is enabled

## Git Workflow

- Main branch: `main`
- Feature branches: `feature/[description]`
- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, etc.
