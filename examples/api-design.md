# Example: API Endpoint Design

**Command**: `/churn "REST endpoints for e-commerce inventory system" 25 features`

**Context**: Designing API for multi-tenant inventory management. Need comprehensive endpoint coverage.

**Output**:

1. GET /inventory/items - list all items
2. POST /inventory/items - create new item
3. PUT /inventory/items/:id - update item
4. DELETE /inventory/items/:id - remove item
5. GET /inventory/items/:id/stock - current stock level
6. POST /inventory/items/:id/adjust - adjust stock quantity
7. GET /inventory/low-stock - items below threshold
8. GET /inventory/categories - list categories
9. POST /inventory/bulk-import - CSV upload
10. GET /inventory/audit-log - stock change history
11. POST /inventory/items/:id/reserve - reserve for order
12. DELETE /inventory/items/:id/reserve - cancel reservation
13. GET /inventory/suppliers - list suppliers
14. POST /inventory/reorder - trigger automatic reorder
15. GET /inventory/forecasts - demand prediction
16. GET /inventory/expiring - items near expiration
17. POST /inventory/transfer - move between warehouses
18. GET /inventory/warehouse/:id - warehouse-specific view
19. PUT /inventory/items/:id/tags - update tags
20. GET /inventory/search - full-text search
21. POST /inventory/bundle - create product bundle
22. GET /inventory/analytics - stock metrics
23. POST /inventory/snapshot - backup current state
24. GET /inventory/items/:id/history - price history
25. POST /inventory/alerts - set low-stock alerts

**Outcome**: Refined to 12 core endpoints. Ideas #9 (bulk import), #10 (audit log), #14 (auto-reorder), and #25 (alerts) made the v1 cut. #15 (forecasts) and #22 (analytics) marked for v2. The wild ones (#23 snapshot) didn't make it but sparked the conversation about backup strategy.
