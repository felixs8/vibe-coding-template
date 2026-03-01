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

### Architecture Documentation

- **Diagram over description**: Use visual representations where they clarify structure
- **Focus on decisions and rationale**: Explain key choices and their implications
- **Document interfaces, not implementations**: Focus on how components interact
- **Include non-functional requirements**: Address performance, security, scalability concerns

### Task Documentation

- **Acceptance criteria over descriptions**: Focus on verifiable outcomes
- **Implementation notes, not implementation details**: Record what changed, not how every line works
- **Reference, don't repeat**: Link to relevant code or tests instead of describing them
- **Update current_architecture with significant changes**

## Documentation Maintenance

### Regular Review and Pruning

- **Remove outdated information**: Delete sections that no longer apply
- **Consolidate scattered information**: Merge redundant content
- **Update links and references**: Ensure cross-references remain valid
- **Verify accuracy**: Check that documentation matches current implementation

### Version Control for Documentation

- **Update documentation with code changes**: Keep artifacts current with implementation
- **Use meaningful commit messages**: Explain documentation changes clearly
- **Review documentation in code reviews**: Ensure changes are consistent and necessary
