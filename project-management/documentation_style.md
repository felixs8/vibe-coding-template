# Documentation Style Guidelines

This document defines how we write and maintain documentation across all project artifacts. These guidelines prevent documentation bloat while ensuring essential information remains accessible and current.

## Core Principles

### Avoid Bloat

When adding documentation, evaluate its importance within the overall context. Avoid over-documenting features by checking how much detail actually serves the reader. Ask: "Does this information help someone understand or use this feature, or is it implementation detail that belongs in code comments?"

### Conciseness Over Completeness

- **Be brief and purposeful**: Include only information that serves a specific need
- **Avoid context dumping**: Don't include information just because it exists or was discussed
- **One source of truth**: Each piece of information should live in exactly one place
- **Link rather than duplicate**: Reference other artifacts instead of copying their content
- **Proportional documentation**: Documentation volume should match feature scope relative to the overall application (a small feature gets brief documentation, a major system gets comprehensive coverage)

### Audience-Focused Writing

- **Assume intelligent readers**: Don't over-explain obvious concepts
- **Provide context, not history**: Explain current decisions without lengthy background narratives
- **Use active voice**: Write clearly and directly

## Artifact-Specific Guidelines

### Requirements Documentation

- **Focus on what, not why**: Describe desired functionality without extensive justification
- **Use user stories or clear specifications**: Structure requirements as testable statements
- **Group related features**: Organize by functional area or user journey
- **Avoid implementation details**: Stay at the functional level

### Current Architecture Documentation

- **Document current state only**: Describe what exists now. Never record what was removed, replaced, or changed — that is history, not state. "Placeholder X removed" or "Y no longer exists" have no place here.
- **Rewrite, don't annotate**: When updating after a task, revise the affected sections to reflect the new reality. Don't append change notes or transition comments.
- **Remove outdated information**: Delete sections that no longer apply
- **Consolidate scattered information**: Merge redundant content
- **Update links and references**: Ensure cross-references remain valid

### Task Documentation

- **What, not how**: Describe what will be achieved, not how it will be implemented. Tasks are not development plans.
- **Acceptance criteria over descriptions**: Focus on verifiable outcomes, not process steps.
- **No code snippets**: Code belongs in the implementation, not the task file.
- **Reference, don't repeat**: Link to relevant code or tests instead of describing them.
