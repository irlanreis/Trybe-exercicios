USE sakila;
SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

SELECT first_name FROM actor
WHERE first_name = 'KARL';

SET SQL_SAFE_UPDATES = 0;

DELETE  FROM actor
WHERE first_name = 'KARL';

SELECT actor_id
FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

SELECT actor_id
FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM actor 
WHERE first_name = 'MATTHEW';

DELETE FROM film_text
WHERE DESCRIPTION LIKE '%saga%';

TRUNCATE film_actor;
TRUNCATE film_category;
