# Example: Debugging Hypotheses

**Command**: `/churn "why is this Postgres query taking 8 seconds" 15 hypotheses`

**Context**: Production issue. Query that normally takes 50ms spiked to 8s. Need to generate all possible root causes quickly.

**Output**:

1. Missing index on JOIN column
2. Table not vacuumed, bloated with dead rows
3. Query planner choosing wrong index
4. Lock contention from concurrent writes
5. Network latency to database server
6. RAM exhaustion forcing disk swaps
7. Statistics outdated, bad cardinality estimates
8. Connection pool exhausted, query queued
9. N+1 query pattern in application layer
10. Full table scan on large table
11. Slow disk I/O on database server
12. Query timeout too high, masking issue
13. Suboptimal WHERE clause ordering
14. Missing composite index
15. Recent schema change broke optimization

**Outcome**: Ran `EXPLAIN ANALYZE` first. #1 (missing index) was the root cause - recent migration dropped an index. #7 (outdated statistics) was also true and fixed with `ANALYZE`. The churn generated 15 hypotheses in 10 seconds; methodically testing each would have taken an hour. Found the issue in 5 minutes.
