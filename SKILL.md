---
name: churn
description: High-volume rapid ideation tool. Zero quality filter. Generates 10-50 terse ideas instantly. Activate when user says /churn, wants bulk brainstorming, rapid naming, edge case generation, hypothesis dumping, or any divergent thinking task. Also activates for phrases like "give me a bunch of ideas", "brainstorm X", "list ideas for Y".
---

# Churn - Rapid Ideation Tool

**Trigger**: `/churn <topic> [quantity] [mode]`

Divergent thinking tool. Generates high-quantity ideas with zero quality filter. Designed to break analysis paralysis by separating divergent (idea generation) from convergent (filtering) phases.

## Philosophy

Quality filtering during brainstorming kills volume. `/churn` inverts this: generate maximum ideas first, filter externally after. No self-censorship, no explanations, no "this might not work" hedging.

**Core principle**: Bad ideas lead to good ones. Wild ideas spark practical ones. Quantity produces quality through iteration, not gatekeeping.

## Usage

```bash
/churn "portfolio project ideas" 30
/churn "API endpoint names for auth service" 20 names
/churn "edge cases for payment flow" 15 questions
/churn "refactoring approaches for UserService" 10 ideas
/churn "feature ideas for dashboard" 20 --format json
/churn "test scenarios" 15 --output tests.md
/churn "tasks for migration" 10 --to-tasks
```

### Parameters

- `<topic>` (required): What to brainstorm about
- `[quantity]` (optional): Number of items to generate (default: 20)
- `[mode]` (optional): Output type (default: ideas)
- `--format <type>` (optional): Output format (default: list)
- `--output <file>` (optional): Save output to file
- `--to-tasks` (optional): Create TaskCreate items from output

### Modes

- `ideas` (default) - General concepts, approaches, solutions
- `names` - Product/project/feature/variable naming
- `features` - Feature lists for apps/tools/systems
- `questions` - Questions to ask, edge cases to consider
- `variations` - Variations on a theme or approach
- `hypotheses` - Debugging hypotheses, root cause theories
- `risks` - What could go wrong, failure modes
- `critiques` - Problems with approach, weaknesses, flaws
- `alternatives` - Different paths, other options
- `proscons` - Pros and cons evaluation
- `metaphors` - Analogies for explanation
- `objections` - Counterarguments, pushback, concerns

### Output Formats

Use `--format <type>` to change output format:

- `list` (default) - Numbered list, plain text
- `json` - JSON array of objects with id, text, category
- `checklist` - Markdown checklist format
- `csv` - Comma-separated values for spreadsheet import

**Examples:**
```bash
/churn "feature ideas" 20 --format json
# Output: [{"id": 1, "text": "Real-time sync", "category": "ideas"}, ...]

/churn "tasks for v2" 15 --format checklist
# Output:
# - [ ] Task 1
# - [ ] Task 2
# ...

/churn "API endpoints" 10 features --format csv
# Output: id,text,type
# 1,GET /users,features
# 2,POST /auth,features
# ...
```

### File Output

Use `--output <file>` to save results directly to file:

```bash
/churn "project ideas" 30 --output ideas.md
/churn "test cases" 20 --format json --output tests.json
```

File is created/overwritten in current directory. Output still shown in conversation.

### Task Integration

Use `--to-tasks` to automatically create TaskCreate items from output:

```bash
/churn "migration steps" 10 --to-tasks
```

Creates one task per generated item with:
- Subject: the churned idea text
- Description: Generated from topic context
- Status: pending

Useful for converting brainstormed work into tracked tasks.

## Output Format (Default)

**Example output:**
```
1. Real-time collaborative code editor
2. AI-powered commit message generator
3. Blockchain-based code ownership NFTs
4. Voice-controlled IDE commands
5. Biometric authentication for git push
...
```

## Use Cases

| Scenario | Example |
|----------|---------|
| **Breaking writer's block** | `/churn "blog post topics on AI coding" 25` |
| **Product naming** | `/churn "names for invoice tracking SaaS" 30 names` |
| **API design** | `/churn "REST endpoints for inventory system" 20 features` |
| **Testing** | `/churn "edge cases for user registration" 15 questions` |
| **Debugging** | `/churn "why is this SQL query slow" 10 hypotheses` |
| **Refactoring** | `/churn "ways to simplify this auth flow" 12 ideas` |
| **Architecture** | `/churn "database schema patterns for multi-tenant" 15 variations` |
| **Marketing** | `/churn "taglines for developer tools" 20 names` |
| **Interview prep** | `/churn "behavioral questions for senior eng role" 20 questions` |

## When NOT to Use

- When you need evaluated/ranked recommendations → use normal conversation
- When you need explanations → use normal conversation  
- When you need ONE best answer → use normal conversation
- When quality > quantity matters → use normal conversation

`/churn` is for divergent phase only. Converge afterward.

## Design Decisions

**Why no quality filter?**
Premature filtering kills volume. Filtering is cheap after generation, expensive during.

**Why no explanations?**
Explanations anchor thinking. Raw ideas allow fresh interpretation.

**Why terse format?**
Forces clarity. Long descriptions hide weak ideas in prose.

**Why include bad ideas?**
Bad ideas spark good ones. "Blockchain git" is stupid, but leads to "distributed code ownership tracking" which leads to "team contribution dashboard."

**Why external filtering?**
Separates divergent/convergent thinking. Different cognitive modes. User applies domain knowledge to filter - Claude doesn't have full context.

## Technical Implementation

When invoked:
1. Parse topic, quantity, mode from args
2. Set quantity (default 20, range 10-50)
3. Generate ideas with explicit no-filter instruction
4. Output numbered list only
5. No preamble, no conclusion, no meta-commentary

## Comparison to Other Tools

| Tool | Purpose | Filter | Explanations |
|------|---------|--------|--------------|
| `/churn` | Divergent ideation | None | None |
| Normal chat | Convergent evaluation | Heavy | Detailed |
| Web search | Information retrieval | Relevance-based | Contextual |
| Code generation | Implementation | Correctness-based | Comments |

## Related Concepts

- Brainstorming (divergent thinking)
- SCAMPER technique
- Lateral thinking
- Quantity leads to quality (IDEO principle)
- Separate ideation from evaluation (Design Thinking)

## Status

**Version**: 1.1.0  
**Author**: Palen Forrest Wilson ([@notpalen](https://github.com/notpalen))  
**Created**: 2026-06-23  
**Updated**: 2026-06-24  
**License**: MIT

## Future Enhancements

- `--filter` flag: apply quality filter after generation
- `--combine` flag: blend multiple topics
- `--constraints` flag: force ideas within boundaries
- `--format` flag: custom output formats (markdown table, JSON, CSV)

## AGY-Specific Behavior

*This section applies to Antigravity only.*

**Critical rules for AGY:**
1. **No planning phase** — churn never triggers planning mode, execute immediately
2. **No preamble/conclusion** — start at `1.`, end at last item
3. **Artifact output** — if `--to-artifact` or `--output artifact`: write to artifacts dir as UserFacing `.md`
4. **File output** — if `--output <file>`: use `write_to_file` to workspace root, still show inline

**Trigger patterns for AGY skill loader:**
- Explicit: `/churn`
- Natural: "give me a bunch of ideas", "brainstorm X", "list N ideas for Y", "dump ideas on X"
