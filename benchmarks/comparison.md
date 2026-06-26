# Token Economics Comparison

Comparing iterative refinement vs `/churn` for the same task: generating 20 portfolio project ideas.

## Summary

| Approach | User Tokens | Claude Tokens | Total Tokens | Round Trips |
|----------|-------------|---------------|--------------|-------------|
| **Iterative** | 48 | 745 | **793** | 4 |
| **Churn** | 10 | 280 | **290** | 1 |
| **Savings** | 38 (79%) | 465 (62%) | **503 (63%)** | 3 (75%) |

## Why Churn is More Efficient

### 1. Conversation Overhead Eliminated

**Iterative approach includes:**
- Preambles ("Here are 5 portfolio project ideas...")
- Transitions ("Would you like me to...")
- Explanations for each idea
- Meta-commentary ("These are more experimental...")

**Churn approach:**
- Raw numbered list
- 3-10 words per item
- No prose overhead

### 2. Single Context Load

**Iterative**: Each round reloads conversation context. By round 4, the model is processing:
- Original request
- Round 1 output
- Round 2 request + output
- Round 3 request + output
- Round 4 request

**Churn**: One request, one response. No context accumulation.

### 3. No Filtering During Generation

**Iterative**: Model internally evaluates each idea ("Is this good enough?", "Should I include this?") before outputting. That compute cost is hidden but real.

**Churn**: Explicit no-filter instruction means model generates without evaluation. Faster generation, no wasted compute on ideas that get discarded internally.

### 4. User Time Efficiency

**Iterative**: User must:
- Read 4 prose responses (~800 words total)
- Extract ideas from narrative
- Decide if they have enough
- Request more multiple times

**Churn**: User:
- Scans 20-item list (30-60 seconds)
- Filters with domain knowledge
- Done

## When Iterative Might Be More Efficient

The analysis above assumes the user needs volume (15-20+ ideas). Iterative may be more token-efficient if:

1. **Very precise constraints** - "I need a portfolio project that uses Claude API, runs on Cloudflare Workers, and demonstrates vision capabilities" → One targeted conversation may yield the answer faster than generating 20 ideas and filtering.

2. **Need explanations** - If you want to understand tradeoffs for each idea, churn's terse format won't help.

3. **Highly constrained problem space** - If only 3-4 valid solutions exist, generating 20 wastes tokens.

4. **Ongoing refinement** - If you're iterating on one idea ("make it more creative", "simpler tech stack"), conversation is the right tool.

## Real-World Token Costs

The benchmarks above use estimated tokens. Actual costs vary by:
- Model used (Opus vs Sonnet vs Haiku)
- Prompt caching (repeated context costs less)
- Response length variance

Typical ranges:
- **Iterative** (4 rounds, 20 ideas): 700-1000 tokens
- **Churn** (1 call, 20 ideas): 250-350 tokens

**Savings: 60-70% token reduction for high-volume ideation.**

## Conclusion

For divergent thinking (brainstorming, ideation, hypothesis generation), `/churn` is 2-3x more token-efficient than iterative refinement. The savings come from:

1. Eliminating conversation overhead
2. Single context load
3. No hidden filtering cost
4. Terse output format

The trade-off: user does the filtering work (but that's fast, free, and better informed by domain context).

For convergent thinking (evaluation, refinement, explanation), normal conversation remains the right tool.
