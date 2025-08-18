# Vibe Coding Guidelines

This document describes how a human **vibe coder** works together with AI agents to create a software product in a structured but lightweight way. The method is built around a small set of **artifacts**—shared documents in the repository that guide and record the process. Artifacts evolve as the project evolves, and they keep knowledge available to all agents and contributors.

## Purpose of the Artifacts

The artifacts exist to provide **context**. Any AI agent that joins the project must be able to continue working without relying on previous chat history. By reading the artifacts, the agent knows what has been built, how it works, what remains to do, and how to judge if a task is done.

This makes it possible to switch AI agents at any time. The human does not need to supply missing context; the artifacts carry it. The repository itself becomes the single source of truth for both product knowledge and process knowledge.

## Artifacts and Their Role

Artifacts are the backbone of the workflow. Each artifact lives in the Git repository, can change over time, and is accessible to everyone involved.

The main artifacts are:

1. **This Guideline Document** – explains the process and the role of each artifact.
2. **Requirements** – what we want to build.
3. **Architecture** – how we intend to build it.
4. **Definition of Done** – what it means for work to be complete.
5. **Documentation** – what the system currently contains and how it works.
6. **Tasks** – the full list of increments we have given to the AI coder.

### Guideline Document in Detail

The guideline document is the entry point for the project. It explains how the process works, which artifacts exist, and how they interact. Its purpose is to give any participant or AI agent an overview of the development method before they begin.

This document is updated when the process changes. It should always reflect the current rules of collaboration.

### Requirements in Detail

The requirements artifact describes **what** we want to build. It is the reference for the desired functionality of the product.

- It may start rough and incomplete.
- It evolves as new insights appear.
- It provides a common understanding of the goals.

The requirements file is not a contract but a living plan. It is always valid only for the current state of the project.

### Architecture in Detail

The architecture artifact explains **how** we plan to build the system. It documents the technical foundation and the structural choices.

- It lists the chosen technology stack.
- It describes the overall system structure.
- It may evolve as the system grows and constraints change.

The architecture document ensures that every contributor works from the same technical baseline.

### Definition of Done in Detail

The definition of done artifact describes **what it means for work to be finished**. It sets the quality standard for tasks.

Examples of items that may be included:
- The project builds without errors.
- The acceptance criteria for the task are fulfilled.
- All automated tests pass, including those from previous tasks.
- The documentation artifact is updated.

The definition of done may change as the team gains experience, but it always functions as the common bar for completion.

### Documentation in Detail

The documentation artifact describes the **current state of the system**. It complements the requirements (future) and the architecture (design) by recording what actually exists now.

It may include:
- A list of files and their purpose.
- Features currently implemented.
- Known placeholders or temporary code marked for removal.
- Acceptance criteria and the location of automated tests.
- A history of tasks completed so far.

Documentation is updated incrementally, task by task.

### Tasks in Detail

Tasks are the **unit of progress**. Every task describes one increment of work and records its own outcome.

- Each task is stored as a separate file in the repository.
- Files are named and ordered numerically: `task1.md`, `task2.md`, `task3.md`, and so on.
- A task file contains:
  - The description of the task.
  - Its acceptance criteria (including which are automated).
  - Its status (*Planned*, *Ready*, *In Progress*, *Done*).
  - References to code, tests, and documentation updated by this task.

Together the tasks form a step-by-step history of how the product was built.

## Step 1: Business Analysis

The first step is to clarify the requirements. In this phase, the AI agent takes the role of business analyst. The purpose is to figure out *what* we want to build. The output is the **requirements artifact**, a document that lists the current understanding of the product.

The requirements document does not have to be complete. It is expected to change as we learn more. What matters is that we always have a shared artifact that reflects our current understanding of the system.

## Step 2: Architecture

Once we know what to build, we move to architecture. Here the AI agent acts as system architect. The result is the **architecture artifact**, a document describing the chosen technology stack and the structural design of the application.

Like requirements, architecture is not fixed forever. It evolves as the system evolves. The document ensures that every contributor has a common picture of the technical foundation.

## Step 3: Definition of Done

The third step defines how we decide that work is finished. This is written down in the **definition of done artifact**.

## Step 4: Task Cycle

Development proceeds in small, repeatable cycles. Each cycle focuses on exactly one task.

1. **Analysis and Planning** – The AI agent and the vibe coder decide what the next task should be. The AI challenges the scope, suggests smaller steps, and asks clarifying questions.
2. **Acceptance Criteria** – Once the task is clear, acceptance criteria are written. Some of these criteria will be automated tests. When the criteria are defined and agreed on, the task is marked *Ready*.
3. **Implementation** – The AI agent acting as vibe coder carries out the work. It ensures that the project builds, all relevant tests pass, and the definition of done is satisfied.
4. **Documentation Update** – As part of the task, the documentation artifact is updated.
5. **Task File Update** – The task artifact is updated with final status, acceptance results, and references to changes.
6. **Review and Check-in** – The human reviews the result. If accepted, the work is committed to the repository.

## Step 5: Retrospective

After each task, there may be a short retrospective. In this step we review whether the process or any artifact needs to change. Requirements, architecture, definition of done, documentation, or task files may all be adjusted. The retrospective ensures that the process itself improves along with the product.

## Summary

The workflow begins with requirements and architecture, sets a definition of done, and then advances through task cycles. Each cycle produces working software, updates artifacts, and keeps tests green. Artifacts provide continuity: they preserve context, make switching agents possible, and ensure that both the system and the process move forward in small, reliable increments.
