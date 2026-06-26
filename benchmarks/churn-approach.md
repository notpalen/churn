# Benchmark: Churn Approach

**Scenario**: User needs 20 portfolio project ideas for AI/coding.

**Approach**: Single `/churn` call with no quality filter.

---

## Single Request

**User**: `/churn "AI coding portfolio projects" 20`

**Claude**: 
```
1. AI code reviewer with style enforcement
2. Chatbot that explains error messages
3. Automated test case generator from specs
4. Voice-to-code dictation system
5. AI pair programmer with context memory
6. Blockchain-based code licensing marketplace
7. Neural network that predicts bugs
8. Sentiment analysis for code review comments
9. AI-powered documentation auto-generator
10. Smart git commit message writer
11. Code complexity visualizer with heatmaps
12. AI tutor for algorithm interviews
13. Automated refactoring suggestion tool
14. Emotion-detecting IDE that adjusts UI
15. Quantum computing code optimizer
16. Real-time collaborative debugging assistant
17. AI-powered merge conflict resolver
18. Voice-controlled git workflow system
19. Predictive code completion with intent detection
20. AI-generated unit test suite from implementation
```

**Estimated tokens**:
- User input: ~10 tokens (includes `/churn` command parsing)
- Claude output: ~280 tokens (raw numbered list, no explanations)
- **Total**: **290 tokens**

---

## Analysis

**Conversation overhead**: 1 round trip only.

**Output format**: Clean numbered list, ready to scan.

**Time to filter**: User scans 20 items in 30-60 seconds.

**Spectrum**: Mix of practical (#2, #9, #10) and wild (#6, #14, #15) ideas.

**No premature filtering**: All 20 ideas delivered, including "bad" ones that might spark better ones.
