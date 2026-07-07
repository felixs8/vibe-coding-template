# Target Architecture

## Tech Stack

- **Frontend Framework**: Next.js 16+ with App Router
- **Styling**: Tailwind CSS + DaisyUI component library
- **Testing**: Playwright for E2E tests, Cypress for component tests, Jest for unit tests (see Testing Strategy below)
- **Language**: TypeScript for full type safety
- **Deployment**: Vercel (optimized for Next.js)
- **Build Tool**: Turbopack for fast development and builds

## High-level Components

- **Next.js App Router**: Server-side rendering and client components
- **UI Component Layer**: DaisyUI components styled with Tailwind CSS
- **API Layer**: Next.js API routes (`/api/*`) for backend functionality
- **Testing Suite**: Playwright, Cypress and Jest for quality assurance
- **Type System**: TypeScript across all components and configurations

## Testing Strategy

Each tool covers a distinct layer. A project derived from this template may use all three or drop the ones it doesn't need.

- **Playwright (`/e2e`)**: End-to-end tests that drive a real browser against the running app to verify user-facing behavior.
- **Cypress (`/cypress/component`)**: Component tests that mount React components in isolation, without a full page or backend.
- **Jest (co-located `*.test.ts(x)`)**: Unit tests for pure TypeScript/JavaScript logic with no DOM or browser involved.

## Data Flows / APIs

1. User interacts with Next.js frontend components
2. Client-side requests to Next.js API routes (`/api/*`) when needed
3. API routes handle business logic and external integrations
4. Data flows back through React component hierarchy
5. Playwright validates end-to-end user flows, Cypress validates component behavior in isolation, and Jest validates pure logic units

## Risks and Constraints

- **Vercel Build Limits**: Free tier has execution time limits; may need Pro plan for complex builds
- **Bundle Size Management**: DaisyUI and Tailwind need proper tree-shaking to avoid bloat
- **Testing Pipeline Integration**: Running three separate test tools (Playwright, Cypress, Jest) in CI/CD requires careful configuration and adds pipeline time

## Open Questions

- Which database technology best fits future project requirements?
- Should we use Next.js API routes or integrate with external services?
- Do we need server-side authentication or client-side session management?
