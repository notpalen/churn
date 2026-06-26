# Example: Checklist Format Output

**Command**: `/churn "release tasks for v2.0" 12 --format checklist`

**Context**: Need trackable checklist for manual execution of release tasks.

**Output**:

```markdown
- [ ] Bump version in package.json to 2.0.0
- [ ] Update CHANGELOG with v2.0 features
- [ ] Run full test suite and verify
- [ ] Build production bundles
- [ ] Deploy to staging environment
- [ ] Run smoke tests on staging
- [ ] Create GitHub release with notes
- [ ] Tag commit with v2.0.0
- [ ] Deploy to production
- [ ] Monitor error rates for 1 hour
- [ ] Post release announcement in Slack
- [ ] Update documentation site with v2.0 changes
```

**Use case**: Copy into GitHub issue, Notion doc, or any markdown-compatible tool. Check items off as completed.

**Outcome**: Structured checklist ready for team execution. Each item is actionable and can be assigned or tracked independently.
