# Question 1

**Task**: Write an SQL query to create a table `MenuItem` with the following columns:

- **item_id**: `INT` (Primary Key)
- **item_name**: `VARCHAR(50)` (Unique)
- **price**: `INT` (NOT NULL)
- **category**: `VARCHAR(30)`

---

## SQL Query:

```sql
CREATE TABLE MenuItem (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(50) UNIQUE,
    price INT NOT NULL,
    category VARCHAR(30)
);