INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;

USE sakila;
INSERT INTO sakila.actor (first_name, last_name)
VALUE('Marcelo', 'Santos');

SELECT actor_id, first_name, last_name FROM actor; 

SELECT first_name, last_name FROM staff;

INSERT INTO actor (first_name, Last_name)
SELECT first_name, last_name FROM staff;

SELECT first_name, Last_name FROM actor;

INSERT INTO `sakila`.`staff`
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
	('Ana', 'Alves', 2, 'user2@user2.com', 2, 1, 'betania', 'anaA'),
	('PAULO', 'Gonzaga', 3, 'user@test.com', 2, 1, 'pipo', 'xablau');

INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');
    
SELECT * FROM staff;

INSERT INTO actor(first_name, last_name)
SELECT first_name, last_name
FROM customer
ORDER BY  customer_id
LIMIT 5;

SELECT * FROM customer;

INSERT INTO category (name) 
VALUES
	('sci-fi'),
    ('Fantasy'),
    ('Biography');

SELECT * FROM store;

INSERT INTO `store` (manager_staff_id, address_id)
VALUES (3, 3);

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);



















