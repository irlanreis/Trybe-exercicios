SELECT rating, rental_rate, COUNT(*)  
AS total  FROM film 
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate ;

USE sakila;

SELECT first_name, COUNT(*)
FROM actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado.

SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar.alter

SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM actor
GROUP BY first_name
HAVING nomes_cadastrados;

-- Usando o Having em mais de uma coluna.

SELECT rating, rental_rate, COUNT(1) AS total FROM film
GROUP BY rental_rate, rating
HAVING total < 70
ORDER BY rating, rental_rate;

-- FIXAR

-- Usando a query a seguir, modifique-a de forma que exiba apenas
-- as durações médias que estão entre 115.0 a 121.50. Além disso, 
-- dê um alias (apelido) à coluna gerada por AVG(length), de forma
-- que deixe a query mais legível. Finalize ordenando os resultados
-- de forma decrescente.

SELECT rating, AVG(length) duracao_media
FROM film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND  121.50
ORDER BY duracao_media DESC;

-- Usando a query a seguir, exiba apenas os valores de total do 
-- custo de substituição que estão acima de $3950.50. Dê um alias
-- que faça sentido para SUM(replacement_cost), de forma que deixe
-- a query mais legível. Finalize ordenando os resultados de forma 
-- crescente.

SELECT replacement_cost FROM film;

SELECT rating, SUM(replacement_cost) AS custo_de_substituicao 
FROM film
GROUP BY rating
HAVING 	custo_de_substituicao > 3950.50
ORDER BY custo_de_substituicao;












