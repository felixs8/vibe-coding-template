# Coding Style Guidelines

This document establishes coding conventions and practices that all AI agents must follow when implementing tasks. These guidelines ensure consistency, maintainability, and quality across the codebase.

## Core Principles

### Code partitioning

When coding keep in mind the following limits:

- **Max lines of code per file**: Each file should be less than 500 lines of code.
- **Max lines of code per function**: Each function should be less than 100 lines of code.
  These limits are shoulds (nice-tohaves). If exceeded, mention it in chat and suggest ways to split up the code.

### Component Creation

- **Create components when useful**: Extract reusable UI elements, business logic, or data structures into components when they appear more than once or when they encapsulate a clear responsibility
- **Single Responsibility**: Each component should have one clear purpose
- **Composition over inheritance**: Prefer composing functionality rather than deep inheritance hierarchies

### Naming Conventions

- **Be descriptive and consistent**: Names should clearly indicate purpose and follow established patterns
- **Use conventional prefixes/suffixes**: Follow language-specific conventions (e.g., `is/has` for booleans, `on` for event handlers)
- **Avoid abbreviations**: Prefer `userRepository` over `userRepo` unless the abbreviation is widely understood
- **Match domain language**: Use terminology that matches the business domain and requirements

### Code Organization

- **Group related functionality**: Keep related functions, classes, and utilities together
- **Clear separation of concerns**: Separate business logic from presentation logic from data access
- **Consistent file structure**: Follow established patterns for organizing files and directories
- **Minimize dependencies**: Reduce coupling between modules and components

## Testing Philosophy

### Test Functionality, Not Implementation Details

- **Focus on behavior**: Test what the code does, not how it does it
- **Test user-visible outcomes**: Verify the effects that matter to users or other parts of the system
- **Avoid testing private methods**: Test through public interfaces
- **Mock external dependencies**: Isolate the unit under test from external systems

### Avoid Repetitive Assertions

- **Don't repeat the same assertions across multiple tests**: If multiple tests verify the same thing, consolidate or use helper functions
- **One concept per test**: Each test should verify one specific behavior or scenario
- **Use descriptive test names**: Test names should clearly indicate what behavior is being verified
- **Setup helpers for common scenarios**: Create reusable setup functions instead of duplicating test preparation code

### Test Structure

- **Follow Arrange-Act-Assert pattern**: Clearly separate test setup, execution, and verification
- **Use meaningful test data**: Choose test values that make the test intent clear
- **Test edge cases**: Include tests for boundary conditions, error scenarios, and empty states
- **Keep tests independent**: Each test should be able to run in isolation

## Code Quality Standards

### Error Handling

- **Handle errors gracefully**: Provide meaningful error messages and appropriate fallbacks
- **Use consistent error patterns**: Follow established error handling conventions for the chosen technology stack
- **Log appropriately**: Include sufficient context in error logs without exposing sensitive information
- **Fail fast when appropriate**: Catch errors early rather than allowing invalid states to propagate

### Performance Considerations

- **Avoid premature optimization**: Focus on correct, readable code first
- **Consider algorithmic complexity**: Be aware of performance implications of data structures and algorithms chosen
- **Lazy load when beneficial**: Load resources only when needed, especially for large datasets or expensive operations
- **Cache when appropriate**: Cache expensive computations or frequently accessed data

### Documentation in Code

- **Use self-documenting code**: Prefer clear naming and structure over extensive comments
- **Comment the "why", not the "what"**: Explain reasoning and context, not obvious implementation details
- **Keep comments current**: Update comments when code changes
- **Document public APIs**: Provide clear documentation for interfaces that other parts of the system will use

## ABAP-Specific Guidelines

### Class Design

- **PUBLIC FINAL CREATE PUBLIC** is the default class template for new utility/service classes.
- **CLASS-METHODS (static)** are preferred over instance methods for stateless logic. Use instance methods only when state must be maintained across calls.
- **Private types:** Types that are pure implementation detail belong in the `PRIVATE` section and must never be referenced from outside the class.
- **One method per `.abap` file:** Each file contains exactly one METHOD body. The class frame (DEFINITION/IMPLEMENTATION shell, all attributes, method declarations) lives in the sibling `.md` file. Always read the `.md` file before editing any method body.

### Parameter Naming (Hungarian Notation)

| Prefix | Meaning                              |
| ------ | ------------------------------------ |
| `iv_`  | Importing, passed by value           |
| `is_`  | Importing, structure                 |
| `it_`  | Importing, internal table            |
| `ev_`  | Exporting, passed by value           |
| `es_`  | Exporting, structure                 |
| `et_`  | Exporting, internal table            |
| `rv_`  | Returning value                      |
| `lv_`  | Local variable                       |
| `ls_`  | Local structure                      |
| `lt_`  | Local internal table                 |
| `mv_`  | Instance attribute (member variable) |
| `gv_`  | Global variable in a report          |

### Naming Conventions

- **Only modify objects whose names start with `Z`** — never touch SAP standard objects.
- Object names are ALL CAPS (SAP standard).
- Follow the naming pattern already established in the SAP system for this project.
