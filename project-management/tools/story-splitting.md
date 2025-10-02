# How to Split a User Story

## Workflow Steps

- Does the story describe a workflow?
  - Can you split the story so you do the beginning and end of the workflow first and enhance with stories from the middle later?
  - Can you take a thin slice through the workflow first and enhance it with more stories later?

## Operations

- Does the story include multiple operations (e.g., managing vs configuring something)?
  - Can you split the operations into separate stories?

## Business Rule Variations

- Does the story have a variety of business rules (e.g., flexible dates, domain-specific terms)?
  - Can you split the story to do a subset of the rules first and enhance with additional rules later?

## Variations in Data

- Does the story do the same thing to different kinds of data?
  - Can you split the story to process one kind of data first and enhance with the other kinds later?

## Interface Variations

- Does the story get the same kind of data via multiple interfaces?
  - Can you split the story to handle data from one interface first and enhance with the others later?

## Simple/Complex

- Does the story have a simple core that provides most of the value/learning?
  - Could you split the story to do that simple core first and enhance with later stories?

## Defer Performance

- Does the story get much of its complexity from satisfying non-functional requirements like performance?
  - Could you split the story to just make it work first and then enhance it to satisfy the non-functional requirement?

## Major Effort

- When you apply the obvious split, is whichever story you do first the most difficult?
  - Could you group the later stories and defer the decision about which comes first?

## Break Out a Spike

- Are you still baffled about how to split the story?
  - Can you find a small piece you understand well enough to start?
    - Write that story first, build it, and start again at the top of this process.
  - Can you define the 1–3 questions most holding you back?
    - Write a spike with those questions, do the minimum to answer them, and start again at the top of this process.
    - Or take a break and try again.

---

# Evaluate the Split

- Are the new stories roughly equal in size?
  - **Yes** → Is each story about ½ to ¼ of your velocity?
    - **Yes** → Do each of the stories satisfy INVEST?
      - **Yes** → Are there stories you can deprioritize or delete?
        - If no obvious next step → You’re done, though you could try another pattern to see if it works better.
    - **No** → Try another pattern.
  - **No** → Try another pattern on the original story or the larger post-split stories.

---

## INVEST Criteria

Stories should be:

- **I**ndependent
- **N**egotiable
- **V**aluable
- **E**stimable
- **S**mall
- **T**estable

---

Source: [Humanizing Work](http://www.richardlawrence.info/splitting-user-stories)  
Copyright © 2011–2020 Humanizing Work. All rights reserved.
