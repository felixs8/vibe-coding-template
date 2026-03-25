# Target Architecture

## Tech Stack

- **Runtime:** ABAP on SAP NetWeaver _[version]_ (ECC / S/4HANA)
- **HTTP:** `CL_HTTP_CLIENT` via RFC-Destination (maintained in SM59)
- **JSON Parsing:** `/UI2/CL_JSON`
- **ALV output:** `CL_SALV_TABLE` for monitoring/utility reports
- **Unit Tests:** ABAP Unit (local test classes in SE80)

## Repository & File Layout

Workflow: edit files in this repository → copy/paste method bodies and report code into SAP GUI SE80.

**Rule:** `.abap` files contain only the code for one SE80 code window (METHOD body or full REPORT). Each class folder has a sibling `.md` file that describes how the development object is configured in SE80: its attributes, method signatures, constants, and any types that are part of the public interface. This `.md` is the single source of truth for the class frame — the AI agent reads it to understand the class before editing any method body.

```
src/
  classes/
    [CLASSNAME]/
      [CLASSNAME].md    <- SE80 class configuration: attributes, signatures, constants
      method_name.abap  <- METHOD body only (copy into SE80)
  reports/
    [REPORTNAME].abap   <- full REPORT (REPORT statement included)
  db/
    [TABLENAME].md      <- transparent table definition (domains, data elements, fields)
```

## Naming Conventions

- **Only modify objects whose names start with `Z`** — never touch SAP standard objects.
- **Method parameters:** ABAP Hungarian notation — `iv_` import value, `is_` import structure, `it_` import table, `ev_` export value, `rv_` return value; locals: `lv_`, `ls_`, `lt_`.

## High-level Components

_List the classes and reports that are part of this project. One bullet per object, with its single responsibility._

## Database Objects

_Define transparent tables here. Each table must include `CLIENT` (MANDT) as first key field._

### Table: `[TABLENAME]`

| Field        | Key | Type / Data Element | Description          |
| ------------ | --- | ------------------- | -------------------- |
| `CLIENT`     | ✓   | `MANDT`             | Mandant              |
| `[ID_FIELD]` | ✓   | `[DATA_ELEMENT]`    | Primary business key |
| `[OTHER]`    |     | `[DATA_ELEMENT]`    | ...                  |

Duplicate protection via primary key `CLIENT` + `[ID_FIELD]`.

## Data Flow

_Describe how data moves through the system._

## Risks and Constraints

- _Note API rate limits, authentication token rotation, or schema change risks._
- _List SAP release constraints (e.g. minimum NetWeaver version for certain classes)._
- Credentials may not be stored in source code; must use RFC-Destination or a Customizing table.

## Open Questions

_Capture architectural decisions still to be made._
