# Documentation Style Guidelines

This document defines how we write and maintain documentation across all project artifacts. These guidelines prevent documentation bloat while ensuring essential information remains accessible and current.

## Core Principles

### Conciseness Over Completeness
- **Be brief and purposeful**: Include only information that serves a specific need
- **Avoid context dumping**: Don't include information just because it exists or was discussed
- **One source of truth**: Each piece of information should live in exactly one place
- **Link rather than duplicate**: Reference other artifacts instead of copying their content

### Audience-Focused Writing
- **Write for the next person**: Consider who will read this document and what they need to know
- **Assume intelligent readers**: Don't over-explain obvious concepts
- **Provide context, not history**: Explain current decisions without lengthy background narratives
- **Use active voice**: Write clearly and directly

## Artifact-Specific Guidelines

### Requirements Documentation
- **Focus on what, not why**: Describe desired functionality without extensive justification
- **Use user stories or clear specifications**: Structure requirements as testable statements
- **Group related features**: Organize by functional area or user journey
- **Avoid implementation details**: Stay at the functional level

**Template structure:**
```markdown
# Project Requirements

## Core Functionality
- [Brief, testable requirement]
- [Brief, testable requirement]

## User Interface Requirements
- [Specific UI requirements]

## Technical Constraints
- [Hard constraints only]

## Success Criteria
- [Measurable outcomes]
```

### Architecture Documentation
- **Diagram over description**: Use visual representations where they clarify structure
- **Focus on decisions and rationale**: Explain key choices and their implications
- **Document interfaces, not implementations**: Focus on how components interact
- **Include non-functional requirements**: Address performance, security, scalability concerns

**Template structure:**
```markdown
# Target Architecture

## Technology Stack
- [Key technologies with brief justification]

## System Structure
- [High-level component organization]

## Key Design Decisions
- [Decision]: [Brief rationale]

## Data Flow
- [How information moves through the system]

## Architectural Risks
- [Risk]: [Mitigation strategy]
```

### Task Documentation
- **Acceptance criteria over descriptions**: Focus on verifiable outcomes
- **Implementation notes, not implementation details**: Record what changed, not how every line works
- **Reference, don't repeat**: Link to relevant code or tests instead of describing them
- **Update current_architecture with significant changes**

**Template structure:**
```markdown
# Task [X]: [Clear Title]

## Acceptance Criteria
- [ ] [Testable criterion] (automated)
- [ ] [Testable criterion] (manual)

## Implementation Notes
- Modified: [File] - [Brief description of changes]
- Added: [File] - [Purpose]
- Tests: [Location and coverage]

## Dependencies
- Requires: [Prerequisites]
- Enables: [Future capabilities]
```

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

## Content Standards

### Structure and Formatting
- **Use consistent markdown formatting**: Follow established heading levels and list styles
- **Include table of contents for long documents**: Help readers navigate
- **Use code blocks for examples**: Distinguish code from prose
- **Keep line lengths reasonable**: Aim for readability in various editors

### Language and Tone
- **Use clear, simple language**: Avoid jargon unless necessary and defined
- **Write in present tense**: Describe current state, not past decisions
- **Be specific**: Use concrete examples rather than abstract descriptions
- **Avoid redundant phrases**: Cut unnecessary words

### Information Hierarchy
- **Most important information first**: Front-load critical details
- **Group related concepts**: Use logical organization and clear headings
- **Provide scannable content**: Use bullet points and short paragraphs
- **Include quick reference sections**: Summary tables or checklists where helpful

## Anti-Patterns to Avoid

### Documentation Bloat
- ❌ **Meeting notes as documentation**: Don't include discussion history in artifacts
- ❌ **Copy-paste from other sources**: Don't duplicate content available elsewhere
- ❌ **Explaining obvious code**: Don't document what the code already makes clear
- ❌ **Future planning details**: Don't include speculative implementation details

### Maintenance Problems
- ❌ **Orphaned documentation**: Don't create documents that won't be maintained
- ❌ **Duplicate information**: Don't repeat the same information in multiple places
- ❌ **Stale references**: Don't leave broken links or outdated examples
- ❌ **Implementation documentation in wrong place**: Keep implementation details in code comments, not architecture docs

## Quality Checklist

Before updating any documentation, verify:
- [ ] Information is necessary and serves a clear purpose
- [ ] Content is placed in the most appropriate artifact
- [ ] Writing is concise and focused on the audience's needs
- [ ] Links and references are current and correct
- [ ] Formatting follows established conventions
- [ ] Information doesn't duplicate content elsewhere
- [ ] Document structure supports easy scanning and navigation

## Evolution of This Guide

This documentation style guide should be updated when:
- Patterns of documentation bloat are identified
- New types of documentation needs emerge
- Review processes reveal recurring issues
- Project scale changes documentation requirements

Any changes should maintain the core principle: documentation should help, not hinder, development velocity and quality.
