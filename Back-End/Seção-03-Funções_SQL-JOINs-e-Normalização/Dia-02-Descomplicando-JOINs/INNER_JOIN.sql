USE sakila;

-- 1.Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele
-- já atuou, usando as tabelas actor e film_actor.

SELECT 
    a.actor_id, a.first_name, film_id
FROM
    actor AS a
INNER JOIN
    film_actor AS f ON a.actor_id = f.actor_id;
    
-- 2.Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários 
-- do banco. Use as tabelas staff e address.

SELECT 
    s.first_name, s.last_name, a.address
FROM
    staff AS s
INNER JOIN
    address AS a ON s.address_id = a.address_id;
    
-- 3.Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados
-- pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da 
-- rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas 
-- customer e address.
    
SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id,
    a.address
FROM customer AS c
INNER JOIN address AS a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
    
-- 4.Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram 
-- no distrito da California e que contêm “rene” em seus nomes. As informações podem 
-- ser encontradas nas tabelas address e customer.

SELECT
	c.first_name,
	c.email,
	a.address_id,
    a.district
FROM customer AS c
INNER JOIN address AS a ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

-- 5.Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente 
-- cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba 
-- somente os clientes ativos. As informações podem ser encontradas nas tabelas 
-- customer e rental.
    
SELECT 
    c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS 'QUANTIDADE DE DILMES ALUGADOS'
FROM
    customer AS c
INNER JOIN
    rental AS r ON r.customer_id = c.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name;
    
    
    
    
    
    
    
    
    
