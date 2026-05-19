# Definition of Done

## Definition of Done for Next.js Vibe Coding Template

### Precondition

- **Dev Server Running**: Before executing any checklist item, verify the dev server is reachable at `http://localhost:3000`. If it is not running, stop immediately and inform the user — it is the user's responsibility to start the server before the checklist is run.

### Build

- **Next.js Build**: Project builds successfully with `npm run build` using Turbopack without errors or warnings
- **TypeScript**: All TypeScript compilation passes without errors (`tsc --noEmit`)
- **ESLint**: Code passes all linting rules with `npm run lint`
- **Dependencies**: No critical vulnerabilities in `npm audit`

### Acceptance Criteria

- **All Criteria Met**: Every acceptance criterion listed in the task file is demonstrably fulfilled
- **All Tests Pass**: Component tests pass with `npm run cypress:component` and E2E tests pass with `npm run cypress:run`. No existing tests broken by new changes

### Documentation

- **Current Architecture Updated**: `current_architecture.md` reflects new features and file changes
- **Task File Complete**: Implementation details, file changes, and outcomes documented in task file
