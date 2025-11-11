# Question 2

**Task**: Write SQL queries for the following operations on the `MenuItem` table:

1. **Insert three menu items in one query**
2. **Update the price of any one item**
3. **Delete one item using `item_id`**
4. **Find the average price of all items**
5. **Find the sum of all prices**

---

## SQL Queries:

### 1. Insert three menu items in one query:
```sql
INSERT INTO MenuItem (item_id, item_name, price, category)
VALUES 
(1, 'Burger', 120, 'Fast Food'),
(2, 'Pizza', 250, 'Fast Food'),
(3, 'Coffee', 80, 'Beverage');

UPDATE MenuItem SET price = 100 WHERE item_id = 3;

DELETE FROM MenuItem WHERE item_id = 2;

SELECT AVG(price) AS AveragePrice FROM MenuItem;

SELECT SUM(price) AS TotalPrice FROM MenuItem;