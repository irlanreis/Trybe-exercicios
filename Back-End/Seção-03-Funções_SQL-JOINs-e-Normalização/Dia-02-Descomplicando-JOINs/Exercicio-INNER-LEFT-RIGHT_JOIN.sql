USE pixar;

SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    movies AS m
        INNER JOIN
    box_office AS b ON b.movie_id = m.id;
    
-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número
-- de vendas para cada filme que possui um número maior de vendas internacionais
-- (international_sales) do que vendas nacionais (domestic_sales).
SELECT m.title, b.international_sales
FROM movies AS m
INNER JOIN box_office AS b
ON b.international_sales >  b.domestic_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes 
-- e sua avaliação (rating) em ordem decrescente.

SELECT 
    f.title, a.rating
FROM
    movies AS f
        INNER JOIN
    box_office AS a ON rating > 0
    ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados
-- dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados
-- dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem 
-- alfabética.
SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
        LEFT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;
-- Exercício 5 Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados
-- dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos 
-- cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas 
-- em ordem alfabética.

SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
        RIGHT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;

-- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos 
-- filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação
-- maior que 8.

SELECT 
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id,
    b.rating
FROM
    movies AS m
        INNER JOIN
    box_office AS b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;














































