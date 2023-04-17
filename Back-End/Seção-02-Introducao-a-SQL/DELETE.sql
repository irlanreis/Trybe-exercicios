USE sakila;

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM actor
WHERE first_name = 'JULIA';

UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

UPDATE actor
SET first_name = 'JULIA'
WHERE first_name = 'JULES';

SELECT * FROM category;

UPDATE category
SET name = 'science-Fiction'
WHERE name = 'sci-Fi';

UPDATE film
SET rental_rate = 25
WHERE length > 100
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

SELECT * FROM film
WHERE rental_rate BETWEEN 10 AND 20;

UPDATE film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
	END
);


