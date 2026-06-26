# Example: JSON Format Output

**Command**: `/churn "API endpoints for user service" 10 features --format json`

**Context**: Need structured output for programmatic processing or feeding into another tool.

**Output**:

```json
[
  {
    "id": 1,
    "text": "GET /users - list all users",
    "category": "features"
  },
  {
    "id": 2,
    "text": "POST /users - create new user",
    "category": "features"
  },
  {
    "id": 3,
    "text": "PUT /users/:id - update user",
    "category": "features"
  },
  {
    "id": 4,
    "text": "DELETE /users/:id - remove user",
    "category": "features"
  },
  {
    "id": 5,
    "text": "GET /users/:id/profile - user profile",
    "category": "features"
  },
  {
    "id": 6,
    "text": "POST /users/:id/avatar - upload avatar",
    "category": "features"
  },
  {
    "id": 7,
    "text": "GET /users/search - search users",
    "category": "features"
  },
  {
    "id": 8,
    "text": "POST /users/bulk-import - CSV import",
    "category": "features"
  },
  {
    "id": 9,
    "text": "GET /users/:id/activity - activity log",
    "category": "features"
  },
  {
    "id": 10,
    "text": "PUT /users/:id/permissions - update permissions",
    "category": "features"
  }
]
```

**Use case**: Pipe to `jq` for filtering, feed into API testing scripts, import into documentation generators.
