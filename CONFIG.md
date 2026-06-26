# Configuration Example

Copy this file to `config.json` in the same directory to customize Churn's behavior.

```json
{
  "defaultQuantity": 20,
  "defaultMode": "ideas",
  "terseFormat": true,
  "includeWildIdeas": true
}
```

## Options

### `defaultQuantity` (integer, 10-50)
Default: `20`

Number of items generated when quantity is not specified in the command.

**Examples:**
- Set to `15` for faster, lower-volume brainstorming
- Set to `30` for exhaustive ideation sessions

### `defaultMode` (string)
Default: `"ideas"`

Output mode used when mode is not specified in the command.

**Valid values:** `ideas`, `names`, `features`, `questions`, `variations`, `hypotheses`, `risks`, `critiques`, `alternatives`, `proscons`, `metaphors`, `objections`

**Examples:**
- Set to `"names"` if you primarily use churn for naming
- Set to `"questions"` for QA/testing workflows

### `terseFormat` (boolean)
Default: `true`

Use terse format (3-10 words per item). Setting to `false` allows longer descriptions but increases token cost.

**Note:** Terse format is core to the tool's efficiency. Only disable if you need explanatory descriptions and understand the token trade-off.

### `includeWildIdeas` (boolean)
Default: `true`

Include impractical/wild ideas in output. This is the "no quality filter" philosophy.

**Warning:** Setting to `false` defeats the core purpose of the tool (divergent thinking). Only disable if your use case truly requires pre-filtered output and you understand you're sacrificing the quantity→quality benefit.

## Configuration Loading

Churn checks for `config.json` in:
1. Current directory (`./.churn/config.json`)
2. Skill directory (`~/.claude/skills/churn/config.json`)

If both exist, current directory config takes precedence (project-specific overrides).

## Example: Speed-Focused Config

For quick brainstorming sessions with lower volume:

```json
{
  "defaultQuantity": 15,
  "defaultMode": "ideas",
  "terseFormat": true,
  "includeWildIdeas": true
}
```

## Example: Naming-Focused Config

For users who primarily use churn for product/feature naming:

```json
{
  "defaultQuantity": 30,
  "defaultMode": "names",
  "terseFormat": true,
  "includeWildIdeas": true
}
```

## Example: Conservative Config (Not Recommended)

Filtered output for constrained use cases (reduces token savings):

```json
{
  "defaultQuantity": 10,
  "defaultMode": "ideas",
  "terseFormat": false,
  "includeWildIdeas": false
}
```

**Note:** This configuration undermines the tool's core design. Consider using normal Claude conversation instead.
