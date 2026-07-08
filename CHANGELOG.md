# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-07-08

### Added
- Google Antigravity (AGY) support — YAML frontmatter in SKILL.md for AGY skill discovery
- AGY-specific behavior section in SKILL.md: no-plan-phase rule, `--to-artifact` flag, artifact output
- Comprehensive AGY installation docs in README: global, workspace, submodule, and git worktree methods
- Worktree setup guide for syncing Claude Code + AGY from one repo (single source of truth)
- Broader natural-language trigger patterns for AGY skill loader

### Changed
- README tagline updated to reflect dual-platform support (Claude Code + AGY)
- SKILL.md version bumped to 1.2.0



### Added
- Output format options: `--format json`, `--format checklist`, `--format csv`
- File export: `--output <file>` to save results directly to file
- Task integration: `--to-tasks` flag to create TaskCreate items from output
- Six new modes: `risks`, `critiques`, `alternatives`, `proscons`, `metaphors`, `objections`
- Configuration support via `config.json` with schema validation
- Research foundation section in README with academic citations
- Format examples (csv-format.md, json-format.md, checklist-format.md)

### Changed
- Expanded modes from 6 to 12 total
- Updated documentation with workflow integration examples

## [1.0.0] - 2026-06-23

### Added
- Initial release of Churn skill
- Core `/churn <topic> [quantity] [mode]` command
- Six output modes: ideas, names, features, questions, variations, hypotheses
- No-quality-filter philosophy for divergent thinking
- Terse output format (3-10 words per item, numbered list)
- Quantity parameter (default 20, range 10-50)
- Comprehensive documentation (SKILL.md, README.md)
- Real-world examples demonstrating different use cases
- Token economics benchmarks showing 63% savings vs iterative approach
- Safety and limitations documentation
- Contributing guidelines
- MIT license

### Design Philosophy
- Separate divergent (generation) from convergent (filtering) thinking
- Quantity leads to quality through iteration
- Bad ideas spark good ones
- External filtering by user with domain knowledge
- No explanations or meta-commentary

[1.1.0]: https://github.com/notpalen/churn/releases/tag/v1.1.0
[1.0.0]: https://github.com/notpalen/churn/releases/tag/v1.0.0
