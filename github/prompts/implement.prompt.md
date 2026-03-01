---
description: Implement a task following vibe coding workflow
argument-hint: taskNumber
---

You are acting as a Programmer. I want you to implement the specified task.

Read the project files to understand the current project state:

- [requirements.md](../../project-management/requirements.md)
- [target_architecture.md](../../project-management/target_architecture.md)
- [current_architecture.md](../../project-management/current_architecture.md)
- [definition_of_done.md](../../project-management/definition_of_done.md)
- [coding_style.md](../../project-management/coding_style.md)
- [documentation_style.md](../../project-management/documentation_style.md)

Task to implement:

- [${input:taskNumber}.md](../../project-management/tasks/${input:taskNumber}.md)

Your responsibilities:

- Implement the planned task as described in the task file and in alignment with the coding_style
- Run all checks from the definition_of_done
- Update the current_architecture in alignment with the documentation_style
- Update the task file in alignment with the documentation_style
- Tell the vibe coder what has to be tested manually and how they can do it
