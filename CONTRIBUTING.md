# Contributing to Churn

Thanks for your interest in improving Churn. This document outlines how to contribute.

## Reporting Issues

**Bug reports:**
- Describe what you expected vs what happened
- Include the exact command you ran
- Share the output (or relevant excerpt)
- Mention your Claude Code version if applicable

**Feature requests:**
- Explain the use case (what problem you're trying to solve)
- Describe the desired behavior
- Note if you're willing to implement it

**Questions:**
- Check existing issues first
- Open a discussion issue rather than a bug report

## Submitting Changes

### Pull Requests

1. **Fork and branch** - Create a feature branch from `main`
2. **Make your changes** - Edit SKILL.md, README.md, or docs
3. **Test locally** - Install the skill and verify it works as expected
4. **Update docs** - If you change behavior, update README and examples
5. **Submit PR** - Describe what changed and why

### What makes a good PR

**Good:**
- Adds a new mode (e.g., `risks`, `critiques`, `alternatives`)
- Improves documentation clarity
- Adds real-world examples to `examples/`
- Fixes incorrect behavior
- Improves token efficiency

**Needs discussion first:**
- Changes to core philosophy (e.g., adding quality filter)
- Major rewrites of SKILL.md instructions
- Breaking changes to command syntax
- New dependencies or external tools

### Code style

This is a skill file, not compiled code. Focus on:
- **Clarity** - Instructions should be unambiguous
- **Conciseness** - Remove unnecessary words
- **Consistency** - Match existing formatting and terminology

## Testing

There's no automated test suite (how do you test "no quality filter"?). Manual testing checklist:

- [ ] Install skill in `~/.claude/skills/churn/`
- [ ] Run `/churn "test topic" 15` - verify output is numbered list
- [ ] Verify output is 15 items
- [ ] Check items are 3-10 words each
- [ ] Confirm no preamble/conclusion
- [ ] Try different modes (`names`, `features`, `questions`)
- [ ] Verify mode-specific behavior (e.g., `names` outputs names, not descriptions)

## Development Setup

No special setup needed. To work on the skill:

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/churn.git
cd churn

# Install locally
cp -r . ~/.claude/skills/churn/

# Test
# (in Claude Code)
/churn "your test topic" 10
```

## Project Structure

```
churn/
├── SKILL.md           # Skill definition (loaded by Claude Code)
├── README.md          # GitHub-facing documentation
├── CONTRIBUTING.md    # This file
├── LICENSE            # MIT license
├── CHANGELOG.md       # Version history
└── examples/          # Real usage examples
    ├── portfolio-projects.md
    ├── feature-naming.md
    ├── debugging-hypotheses.md
    └── api-design.md
```

## Adding Examples

Good examples to contribute:

- **Show real usage** - Actual command + output + outcome
- **Demonstrate value** - Highlight which ideas were useful
- **Vary use cases** - Cover different modes and domains
- **Include filtering** - Show how user refined 20 → 3

Example template:

```markdown
# Example: Your Title

**Command**: `/churn "your topic" 20 mode`

**Context**: Why you ran this command, what problem you were solving.

**Output**:

1. First idea
2. Second idea
...
20. Twentieth idea

**Outcome**: Which ideas you picked, why, and what you built.
```

## Review Process

1. Maintainer reviews within 3-5 days
2. Feedback given if changes needed
3. Once approved, PR is merged
4. Version bumped if user-facing changes

## Questions?

Open an issue or discussion. For real-time chat, tag @notpalen.

## License

By contributing, you agree your contributions will be licensed under the MIT License.
