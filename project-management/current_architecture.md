# Current Architecture

Template for a nextjs tailwind daisui app created with vibecoding. Remove this text and describe the project in one sentance.

## Rules for changing this document for AI Agents

- **Document current state only**: Describe what exists now. Never record what was removed, replaced, or changed — that is history, not state. "Placeholder X removed" or "Y no longer exists" have no place here.
- **Rewrite, don't annotate**: When updating after a task, revise the affected sections to reflect the new reality. Don't append change notes or transition comments.
- **Remove outdated information**: Delete sections that no longer apply
- **Consolidate scattered information**: Merge redundant content
- **Update links and references**: Ensure cross-references remain valid

## Implemented Features

- **Homepage with DaisyUI Hero Component**: Landing page displays "Hello World" with centered hero layout

## Current Techstack

- **Next.js App Router Setup**: Modern Next.js 16+ with App Router architecture
- **Tailwind + DaisyUI Styling**: Utility-first CSS with component library integration
- **Playwright E2E Testing**: Browser-based end-to-end testing configured and working
- **Cypress Component Testing**: Isolated React component testing configured and working
- **Jest Unit Testing**: Pure TypeScript/JavaScript unit testing configured and working
- **TypeScript Support**: Full TypeScript configuration across the project

## File Index

### Components

- `/app/page.tsx` – Home component with DaisyUI hero section

### E2E Tests

- `/e2e/homepage.spec.ts` – Playwright E2E test for homepage functionality

### Component Test

- `/cypress/component/Home.cy.tsx` – Cypress component test for Home component

### Unit Tests

- `/app/simple.test.ts` – Jest smoke test placeholder

### Configuration

- `/package.json` – Project dependencies and npm scripts configuration
- `/playwright.config.ts` – Playwright E2E testing configuration
- `/cypress.config.ts` – Cypress component testing configuration
- `/jest.config.ts` – Jest unit testing configuration
- `/next.config.ts` – Next.js configuration with TypeScript
- `/tsconfig.json` – TypeScript compiler configuration
- `/postcss.config.mjs` – PostCSS configuration for Tailwind CSS
- `/eslint.config.mjs` – ESLint configuration for code quality

## Package.json Scripts

- `npm run dev` – Start development server with Turbopack
- `npm run build` – Build production application with Turbopack
- `npm run start` – Start production server
- `npm run test:unit` – Run Jest unit tests
- `npm run test:component` – Run Cypress component tests headlessly
- `npm run test:component:open` – Open Cypress interactive component test runner
- `npm run test:e2e` – Run Playwright E2E tests (requires the dev server running at `http://localhost:3000`)
- `npm run test:e2e:ui` – Run Playwright tests in interactive UI mode

## Placeholders

- Content in hero section is placeholder "Hello World" text
- No actual business logic implemented yet
- No database or API integration

## Task History
