# Churn

High-volume ideation tool for Claude Code. Generates ideas with zero quality filter to break analysis paralysis.

## Problem

Quality filtering during brainstorming kills volume. You need 50 ideas to find 3 good ones, but premature evaluation stops you at 10. The "this won't work" voice activates too early.

## Solution

Separate divergent (generation) from convergent (filtering) thinking. `/churn` generates maximum ideas with explicit no-filter instruction. You filter afterward with full context Claude doesn't have.

**Core insight**: Bad ideas lead to good ones. Wild ideas spark practical ones. Quantity produces quality through iteration, not gatekeeping.

## Installation

### Option 1: Manual Installation

Copy the `churn` directory to `~/.claude/skills/`:

```bash
git clone https://github.com/notpalen/churn.git
cp -r churn ~/.claude/skills/
```

Restart Claude Code or reload skills.

### Option 2: npm Installation

```bash
npm install -g churn-ideate
cp -r "$(npm root -g)/churn-ideate" ~/.claude/skills/churn
```

Or install locally and copy:

```bash
npm install churn-ideate
cp -r node_modules/churn-ideate ~/.claude/skills/churn
```

Restart Claude Code or reload skills.

## Usage

```bash
/churn "portfolio project ideas" 30
/churn "API endpoint names for auth service" 20 names  
/churn "edge cases for payment flow" 15 questions
/churn "refactoring approaches for UserService" 10 ideas
/churn "feature ideas" 20 --format json
/churn "test scenarios" 15 --output tests.md
/churn "migration tasks" 10 --to-tasks
```

### Output Formats

Control output format with `--format <type>`:

- `list` (default) - Numbered list
- `json` - JSON array for scripting
- `checklist` - Markdown checkboxes for tracking
- `csv` - Spreadsheet import

**Examples:**
```bash
# JSON for programmatic processing
/churn "API endpoints" 15 features --format json

# Checklist for task tracking
/churn "release tasks" 12 --format checklist

# CSV for spreadsheet analysis
/churn "feature ideas" 25 --format csv
```

### File Export

Save directly to file with `--output <path>`:

```bash
/churn "project ideas" 30 --output brainstorm.md
/churn "test cases" 20 --format json --output tests.json
```

Output still shown in conversation. File created/overwritten in current directory.

### Task Integration

Convert churned ideas to tracked tasks with `--to-tasks`:

```bash
/churn "migration steps" 10 --to-tasks
```

Creates one pending task per item. Useful for converting brainstormed work into actionable tracked items.

### Modes

- `ideas` (default) - Concepts, approaches, solutions
- `names` - Product/project/feature/variable naming
- `features` - Feature lists for apps/tools/systems
- `questions` - Questions to ask, edge cases to consider
- `variations` - Variations on a theme
- `hypotheses` - Debugging hypotheses, root cause theories
- `risks` - What could go wrong, failure modes
- `critiques` - Problems with approach, weaknesses
- `alternatives` - Different paths, other options
- `proscons` - Pros and cons evaluation
- `metaphors` - Analogies for explanation
- `objections` - Counterarguments, pushback

## Output Format

Terse numbered list. 3-10 words per item. No explanations. No filtering.

**Example**:
```
1. Real-time collaborative code editor
2. AI-powered commit message generator
3. Blockchain-based code ownership NFTs
4. Voice-controlled IDE commands
5. Biometric authentication for git push
...
```

## Use Cases

| Scenario | Command |
|----------|---------|
| Breaking writer's block | `/churn "blog post topics on AI coding" 25` |
| Product naming | `/churn "names for invoice tracking SaaS" 30 names` |
| API design | `/churn "REST endpoints for inventory system" 20 features` |
| Testing edge cases | `/churn "edge cases for user registration" 15 questions` |
| Debugging | `/churn "why is this SQL query slow" 10 hypotheses` |
| Refactoring | `/churn "ways to simplify this auth flow" 12 ideas` |
| Architecture | `/churn "database schema patterns for multi-tenant" 15 variations` |

## When NOT to Use

- Need evaluated/ranked recommendations → use normal conversation
- Need explanations → use normal conversation
- Need ONE best answer → use normal conversation
- Quality > quantity matters → use normal conversation

## Safety & Limitations

### Safety Boundaries

**"No quality filter" ≠ "no safety filter"**. `/churn` skips subjective quality judgment (practical vs impractical, good vs bad ideas) but Claude's safety guidelines still apply. Harmful, illegal, or abusive content will be filtered regardless of mode.

The tool generates ideas, not instructions. Output should be evaluated by a human with domain knowledge before implementation.

### Limitations

**Where `/churn` doesn't work well:**

1. **Sensitive domains** - Medical diagnosis, legal advice, financial recommendations require expert evaluation, not volume generation
2. **Safety-critical systems** - Aviation, medical devices, infrastructure code need rigorous analysis, not rapid brainstorming
3. **Time-critical decisions** - If you need one answer in 30 seconds, don't generate 50 options
4. **Highly constrained problems** - If only 2-3 valid solutions exist, churn wastes tokens
5. **Deep technical problems** - "Why is my kernel panicking" needs debugging, not idea volume

**When filtering is too expensive:**

- Reviewing 50 items takes 2-5 minutes of focused attention
- If you're context-switching constantly, batch churn sessions
- If your domain is unfamiliar, high volume may overwhelm rather than help

### Failure Modes

**Output quality issues:**

- **All duplicates**: Topic too narrow. Broaden scope or reduce quantity.
- **All generic**: Topic too vague. Add specificity: "API endpoints" → "REST endpoints for inventory management system"
- **All wild, no practical**: Increase quantity (generates broader spectrum) or rephrase topic
- **All practical, no wild**: Working as designed - filter for what's useful

**Token efficiency:**

One `/churn` call (20 items, ~800 tokens) is cheaper than iterative refinement (5 rounds, ~2000+ tokens with conversation overhead). But if you only need 5 ideas and can articulate constraints precisely, normal conversation may be more efficient.

**Integration gaps:**

- No built-in export to task managers, note apps, or files
- No follow-up "refine these 3 ideas" mode (yet)
- No analytics on which churned ideas get built

## Design Philosophy

### Why no quality filter?

Premature filtering kills volume. Filtering is cheap after generation, expensive during. Generate 50, evaluate 50 → better outcomes than generate 10, evaluate 10.

### Why no explanations?

Explanations anchor thinking. "Blockchain git" with explanation locks you into that framing. Raw "blockchain git" lets you reinterpret as "distributed code ownership" → "contribution tracking" → "team dashboard."

### Why terse format?

Forces clarity. Long descriptions hide weak ideas in prose. "3-10 words" constraint surfaces the core concept.

### Why include bad ideas?

Bad ideas spark good ones. Chain reaction: "blockchain git" (stupid) → "distributed ownership tracking" (interesting) → "team contribution dashboard" (buildable).

### Why external filtering?

You have domain knowledge Claude doesn't. You know your constraints, your users, your tech stack. Claude generates possibilities; you apply judgment.

## Comparison to Other Tools

| Tool | Purpose | Filter | Explanations |
|------|---------|--------|--------------|
| `/churn` | Divergent ideation | None | None |
| Normal chat | Convergent evaluation | Heavy | Detailed |
| Web search | Information retrieval | Relevance | Contextual |

## Configuration

Customize default behavior with a `config.json` file in the skill directory:

```json
{
  "defaultQuantity": 20,
  "defaultMode": "ideas",
  "terseFormat": true,
  "includeWildIdeas": true
}
```

See [CONFIG.md](CONFIG.md) for full configuration options and examples.

## Technical Details

Built on Claude Code skills framework. Instructs Claude to:
1. Generate specified quantity (10-50 range)
2. Output numbered list only
3. Apply zero quality filter
4. Use terse format (3-10 words)
5. Skip preamble/conclusion/meta-commentary

## Related Concepts

- **IDEO principle**: Quantity leads to quality
- **Design Thinking**: Separate ideation from evaluation
- **Brainstorming**: Divergent thinking phase
- **SCAMPER technique**: Systematic ideation
- **Lateral thinking**: Non-linear problem solving

## Research Foundation

This tool is grounded in decades of creativity and ideation research:

### Quantity → Quality

**Osborn's Brainstorming Rules (1953)** - "Defer judgment" and "go for quantity" are two of the four fundamental rules. Early evaluation kills volume.

**IDEO's Design Thinking** - "Diverge before you converge." Generate maximum possibilities in ideation phase, then narrow during prototyping. Mixing the two phases reduces both.

**Paulus & Yang (2000)** - Meta-analysis showing groups generating ideas without evaluation produced 2x more ideas and higher-rated solutions than groups evaluating during generation.

### Bad Ideas → Good Ideas

**Simonton's Blind Variation (1999)** - Creative breakthroughs follow a quantity model. Most ideas fail, but high producers generate both more failures AND more successes. You can't predict which ideas will work without generating volume.

**Csikszentmihalyi's Flow Research** - Premature evaluation interrupts flow state. Creative work requires suspension of critical judgment during generation phase.

### External Filtering

**Domain Knowledge Advantage** - The generator (AI) lacks your context: constraints, users, tech stack, org politics, timeline. You filter better than the model can because you have information it doesn't.

**Cognitive Load Distribution** - Generation is computationally expensive for LLMs. Filtering is fast for humans (pattern matching, not generation). Optimize by putting generation load on the model, filtering load on the human.

### Why It Works

1. **Volume produces variance** - 20 ideas span more solution space than 5 filtered ideas
2. **Unexpected combinations** - "Bad" idea #7 + "bad" idea #14 = good idea #21
3. **Anchoring avoided** - No explanations means no premature commitment to framing
4. **Lower cognitive barrier** - Easier to start generating without quality gate

### References

- Osborn, A. F. (1953). *Applied Imagination*. Scribner.
- Paulus, P. B., & Yang, H. C. (2000). Idea generation in groups: A basis for creativity in organizations. *Organizational Behavior and Human Decision Processes*, 82(1), 76-87.
- Simonton, D. K. (1999). *Origins of Genius: Darwinian Perspectives on Creativity*. Oxford University Press.
- Csikszentmihalyi, M. (1996). *Creativity: Flow and the Psychology of Discovery and Invention*. Harper Collins.
- Brown, T. (2008). Design thinking. *Harvard Business Review*, 86(6), 84-92.

## Contributing

Issues and PRs welcome. See [SKILL.md](SKILL.md) for full documentation.

## License

MIT

## Author

Palen Forrest Wilson ([@notpalen](https://github.com/notpalen))

## Version

1.1.0 (2026-06-24)
