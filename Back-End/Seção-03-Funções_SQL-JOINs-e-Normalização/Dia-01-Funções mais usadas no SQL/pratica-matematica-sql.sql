-- Desafios matemática com MySQL.

-- Monte uma query usando o MOD juntamente com o IF para descobrir 
-- se o valor 15 é par ou ímpar. Chame essa coluna 
-- de ‘Par ou Ímpar’, onde ela pode dizer ‘Par’ ou ‘Ímpar’.

SELECT 
	CASE
	WHEN 15 MOD 2 = 0 THEN 'PAR'
	WHEN 15 MOD 2 = 1 THEN 'Ímpar'
END AS 'Par ou Ímpar';

-- Temos uma sala de cinema que comporta 220 pessoas. 
-- Quantos grupos completos de 12 pessoas podemos levar ao
-- cinema sem que ninguém fique de fora?

SELECT 220 DIV 12 AS podemos_levar;
-- 18 pessoas!

-- Utilizando o resultado anterior, responda à seguinte pergunta: temos
-- lugares sobrando? Se sim, quantos?

SELECT 220 MOD 12 Lugares_sobrando;
-- 4