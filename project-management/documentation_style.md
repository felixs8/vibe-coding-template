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

## SAP ABAP-Specific Documentation Rules

### Class `.md` files

Each class folder contains exactly one `.md` file that acts as the SE80 class frame. It must document:

- The `CLASS ... DEFINITION` block (visibility, `FINAL`, `CREATE PUBLIC`)
- All `PUBLIC SECTION` method signatures with parameter types and exceptions
- Constants and type aliases that are part of the public interface
- A note on any `PRIVATE` types (just acknowledge they exist; do not list them — they are implementation details)

Do **not** document private method implementations in the `.md` file. Those details live in the `.abap` method body.

### Database `.md` files

Each DB table `.md` file must contain:

- Status emoji: ✅ Created in SAP (SE11) · 🔲 Not yet created · ⚠️ Needs extension
- Package name and delivery class
- Domain list (name, type, length, decimals, description)
- Data element list (name, domain, short/medium/long labels)
- Full field list (name, key flag, data element, description)
- Primary key statement
- Table type name if one exists

Keep the table `.md` as the single source of truth. Do not duplicate field lists in `current_architecture.md` \u2014 link to the `.md` file instead.

### Task files

- Write acceptance criteria as checkable statements before implementation begins.
- Mark `[test]` on criteria that require an ABAP Unit Test.
- Fill in **Implementation Details** and **Manual Test Instructions** after implementation, not before.
- Use the **Out of Scope** section to prevent creep \u2014 list what was explicitly deferred.
