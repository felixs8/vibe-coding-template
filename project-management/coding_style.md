# Coding Style Guidelines

This document establishes coding conventions and practices that all AI agents must follow when implementing tasks. These guidelines ensure consistency, maintainability, and quality across the codebase.

## Core Principles

### Single Responsibility

- **One responsibility per file, class, function, or variable**: Each should serve a single, well-defined purpose.
- **Keep files small**: Aim for files under 100 lines; 200 is acceptable, 300 is debatable, and files over 500 lines should be split.
- **Prefer small, focused functions**: Break large functions into smaller, more specific ones.
- **Limit try/catch scope**: A try/catch block should wrap only one function or operation.
- **Keep foreach blocks concise**: Ideally, each iteration should call a single function.

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

## Language-Specific Guidelines

_This section should be expanded based on the chosen technology stack. Common patterns include:_

### General Patterns

- **Follow established conventions**: Use the community-standard formatting, naming, and organizational patterns for the chosen language/framework
- **Use type annotations where available**: Leverage type systems to catch errors early and improve code clarity
- **Prefer immutability**: Use immutable data structures when possible to reduce bugs and improve predictability
- **Handle null/undefined safely**: Use safe navigation, optional chaining, or null-checking patterns appropriate to the language
