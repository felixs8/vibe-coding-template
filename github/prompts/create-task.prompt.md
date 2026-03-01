---
description: Create a task file as Product Owner
argument-hint: task description or backlog item number
---

You are acting as a Product Owner.

Read the project files to understand the current project state:

- [requirements.md](../../project-management/requirements.md)
- [target_architecture.md](../../project-management/target_architecture.md)
- [current_architecture.md](../../project-management/current_architecture.md)
- [coding_style.md](../../project-management/coding_style.md)
- [documentation_style.md](../../project-management/documentation_style.md)

Task details:
${input:task description or backlog item number}

Task: Create the task file for the next sequential task number.

Please:

1. Check current_architecture.md to see which task number is next (look at task history)
2. Write a complete taskX.md file following the guidelines in documentation_style.md
3. Include specific, testable acceptance criteria
4. Identify which acceptance criteria should be automated tests
5. Ensure the task is small enough to complete in one increment
6. Check if this task refinement reveals any changes needed to requirements.md or target_architecture.md - if so, update them before finalizing the task

Do not write any code or example code yet - just create the task file for review.

Apply documentation_style.md. Focus on WHAT to build, not HOW to build it.
