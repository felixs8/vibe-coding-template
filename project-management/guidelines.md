# Vibe Coding Guidelines

This document describes how a human **vibe coder** works together with AI agents to create a software product using a quality-focused, structured approach that prevents the productivity losses common in unstructured development. The method is built around a small set of **artifacts**—shared documents in the repository that guide and record the process. Artifacts evolve as the project evolves, and they keep knowledge available to all agents and contributors.

## Purpose of the Artifacts

The artifacts exist to provide **context**. Any AI agent that joins the project must be able to continue working without relying on previous chat history. By reading the artifacts, the agent knows what has been built, how it works, what remains to do, and how to judge if a task is done.

This makes it possible to switch AI agents at any time. The human does not need to supply missing context; the artifacts carry it. The repository itself becomes the single source of truth for both product knowledge and process knowledge.

## Incremental development

Development proceeds in small, self-contained increments. For each feature we create a task file that specifies the next increment and its acceptance criteria. After implementing a task we ensure the repository remains in a stable, high-quality state: the project builds, automated tests and a brief smoke test pass, and the `current_architecture.md` artifact is updated. Quality is enforced by the Definition of Done artifact — a checklist run for every task. This keeps progress predictable, reversible, and preserves steady productivity.

## Artifacts and Their Role

Artifacts are the backbone of the workflow. Each artifact lives in the Git repository, can change over time, and is accessible to everyone involved.

The artifacts are:

1. **This Guideline Document** – explains the process and the role of each artifact.
2. **Requirements** – what we want to build.
3. **Target Architecture** – how we intend to build it.
4. **Current Architecture** – what the system currently contains and how it works.
5. **Definition of Done** – what it means for work to be complete.
6. **Coding Style** – how we write code, including conventions, testing philosophy, and quality standards.
7. **Documentation Style** – how we write and maintain documentation to avoid bloat while preserving essential information.
8. **Tasks** – the full list of increments we have given to the AI coder.

### Guideline Document in Detail

The guideline document is the entry point for the project. It explains how the process works, which artifacts exist, and how they interact. Its purpose is to give any participant or AI agent an overview of the development method before they begin.

This document is updated when the process changes. It should always reflect the current rules of collaboration.

### Requirements in Detail

The requirements artifact describes **what** we want to build. It is the reference for the desired functionality of the product.

- It may start rough and incomplete.
- It evolves as new insights appear.
- It provides a common understanding of the goals.

The requirements file is not a contract but a living plan. It is always valid only for the current state of the project.

### Target Architecture in Detail

The target architecture artifact explains **how** we plan to build the system. It documents the technical foundation and the structural choices.

- It lists the chosen technology stack.
- It describes the overall system structure.
- It may evolve as the system grows and constraints change.

The target architecture document ensures that every contributor works from the same technical baseline.

### Current Architecture in Detail

The current architecture artifact describes the **current state of the system**. It complements the requirements (future) and the target architecture (design) by recording what actually exists now.

It may include:

- Features currently implemented.
- A list of files and their purpose.
- Known placeholders or temporary code marked for removal.
- Acceptance criteria and the location of automated tests.
- A history of tasks completed so far.

The current architecture is updated incrementally, task by task.

### Definition of Done in Detail

The definition of done artifact describes **what it means for work to be finished**. It sets the quality standard for tasks.

Examples of items that may be included:

- The project builds without errors.
- All automated tests pass, including those from previous tasks.
- The current architecture artifact is updated.

### Coding Style in Detail

The coding style artifact establishes **how we write code** across the entire project. It prevents inconsistency and reduces the need to repeat coding preferences to AI agents.

It may include:

- Component creation guidelines (when to extract reusable components).
- Naming conventions and patterns specific to the chosen technology stack.
- Testing philosophy (focus on functionality, avoid repetitive assertions).
- Code organization and quality standards.
- Language-specific best practices.

This artifact ensures that all AI agents follow the same coding standards without needing repeated instruction.

### Documentation Style in Detail

The documentation style artifact defines **how we write and maintain all project documentation**. It prevents documentation bloat while ensuring essential information remains accessible.

It covers:

- How to avoid bloat in AI documentation and stay concise (what to include and what to avoid).
- Artifact-specific guidelines for requirements, architecture, and task documentation.
- Standards for structure, formatting, and content organization.
- Anti-patterns that lead to maintenance problems or information overload.

This artifact helps AI agents produce focused, useful documentation without dumping excessive context.

### Tasks in Detail

Tasks are the **unit of progress**. Every task describes one increment of work and records its own outcome.

- Each task is stored as a separate file in the repository.
- Files are named and ordered numerically: `task1.md`, `task2.md`, `task3.md`, and so on.
- A task file contains:
  - The description of the task.
  - Its acceptance criteria (including which are automated).
  - Implementation details documenting all files changed.
  - References to code, tests, and documentation updated by this task.

Together the tasks form a step-by-step history of how the product was built.

## Steps

The project is executed doing step 1-4.

- step1: Business Analysis: create requirements.md
- step2: Target Architecture: create target_archictecture.md
- step3: Task Planning: create the next taskfile.
- step4: Task Implementation: implement the next taskfile.

Step 1 and 2 are executed once in the beginning of the project.
Step 3 and 4 can be repeated indefinetly.

## Step 1: Business Analysis

The first step is to clarify the requirements. In this phase, the AI agent takes the role of business analyst. The purpose is to figure out _what_ we want to build. The output is the **requirements artifact**, a document that lists the current understanding of the product.

The requirements document does not have to be complete. It is expected to change as we learn more. What matters is that we always have a shared artifact that reflects our current understanding of the system.

To create the requirements, use the `/business-analysis` prompt file:

1. **Open the Copilot Chat view** in VS Code
2. **Type** `/business-analysis` followed by your project description
3. **Press Enter** to execute the prompt

The prompt file automatically reads the guidelines and helps you create a complete requirements.md file with clarifying questions and initial task suggestions.

The prompt file is located at `.github/prompts/business-analysis.prompt.md`.

## Step 2: Target Architecture

Once we know what to build, we move to target architecture. Here the AI agent acts as system architect. The result is the **target architecture artifact**, a document describing the chosen technology stack and the structural design of the application.

Like requirements, the target architecture is not fixed forever. It evolves as the system evolves. The document ensures that every contributor has a common picture of the technical foundation.

To create the target architecture, use the `/architecture` prompt file:

1. **Open the Copilot Chat view** in VS Code
2. **Type** `/architecture` optionally followed by your technology preferences
3. **Press Enter** to execute the prompt

Example: `/architecture React, Node.js, PostgreSQL` or just `/architecture` to get recommendations.

The prompt file automatically reads the guidelines and requirements, then helps you create a complete target_architecture.md file with justified technology choices and risk assessment.

The prompt file is located at `.github/prompts/architecture.prompt.md`.

## Step 3: Task Planning

This step focuses on deciding what to build next and preparing the task. The AI agent takes the role of **Product Owner**.

1. **Backlog Creation** – The AI agent and vibe coder create a prioritized list of potential tasks that would provide value to the project.
2. **Task Selection** – The vibe coder selects which feature from the backlog should be implemented next.
3. **Task Definition** – The AI agent creates a detailed task file with acceptance criteria and identifies which criteria should be automated tests.
4. **Documentation Review** – Before implementation begins, review if the planned task requires updates to the requirements or the target architecture artifact. As implementation details become clearer, the documentation may need refinement.

### Backlog Creation

To create a prioritized backlog, use the `/backlog` prompt file:

1. **Open the Copilot Chat view** in VS Code
2. **Type** `/backlog`
3. **Press Enter** to execute the prompt

The prompt file automatically reads all project documentation and generates 8-10 prioritized task suggestions with business value, dependencies, and complexity estimates.

The prompt file is located at `.github/prompts/backlog.prompt.md`.

### Task File Creation

To create a task file, use the `/create-task` prompt file:

1. **Open the Copilot Chat view** in VS Code
2. **Type** `/create-task` followed by either:
   - A backlog item reference (e.g., "item 3 from backlog")
   - A task description (e.g., "user authentication with email and password")
3. **Press Enter** to execute the prompt

Examples:

- `/create-task item 1 from backlog`
- `/create-task add user profile page with edit functionality`

The prompt file automatically reads all project documentation, determines the next task number, and creates a complete task file with acceptance criteria and automated test identification.

The prompt file is located at `.github/prompts/create-task.prompt.md`.

## Step 4: Implementation

Here we actually implement the planned task. The AI agent takes the role of **Programmer**. Implementation proceeds with careful attention to quality and the Definition of Done.

1. **Implementation** – When the vibe coder decides the task is ready, they give the command to implement to the AI agent. The AI agent carries out the work, ensuring that the project builds, all relevant tests pass, and the definition of done is satisfied.
2. **Documentation Update** – As part of the task, the current_architecture artifact is updated.
3. **Task File Update** – The AI agent documents all changes made, including which files were modified, created, or deleted.
4. **Review and Check-in** – The vibe coder reviews the implementation, validates that all acceptance criteria are met, checks code quality, and ensures tests are meaningful. If accepted, the work is committed to the repository.

To implement a task, use the `/implement` prompt file:

1. **Open the Copilot Chat view** in VS Code
2. **Type** `/implement taskN` (e.g., `/implement task1`, `/implement task2`)
3. **Press Enter** to execute the prompt

The prompt file automatically:

- Reads all relevant project documentation files
- References the specific task file
- Instructs the AI to follow coding style and definition of done
- Updates current architecture and task documentation
- Provides manual testing instructions

The prompt file is located at `.github/prompts/implement.prompt.md` and can be modified if needed.
