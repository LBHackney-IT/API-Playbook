---
id: postgresql
title: Creating users in PostgreSQL
---

## How to add a Read-Only User to a PostgreSQL Database


** 1. Create a new user: **

```sql
CREATE USER username WITH PASSWORD 'your_password';
```

This creates a new user with given username and password. By default password is set to never expire.

** 2. Grant user access to connect to the database: **

```sql
GRANT CONNECT ON DATABASE database_name TO username;
```

** 3. Grant user access to specific schema: **

```sql
GRANT USAGE ON SCHEMA schema_name TO username;
```

** 4. Grant select access to table(s) **

For a specific table:

```sql
GRANT SELECT ON table_name TO username;
```

For all tables in specific schema:

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA schema_name TO username;
```

##  Optional

If you want user to have select access to all new tables created in the future:

```sql
ALTER DEFAULT PRIVILEGES IN SCHEMA schema_name

GRANT SELECT ON TABLES TO username;
```