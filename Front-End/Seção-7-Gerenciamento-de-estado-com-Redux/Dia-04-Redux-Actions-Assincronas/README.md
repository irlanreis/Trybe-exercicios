# Dia 04 Redux no React  Actions Assíncronas e Redux-thunk

Neste dia teremos uma introdução a ações assíncronas para que possamos desenvolver algumas habilidades
como:

<Strong>Criar actions assíncronas na sua aplicação com Redux.</Strong>

<Strong>Utilização da biblioteca redux-thunk.</Strong>

<Strong>Entender o que é um middleware no Redux.</Strong>

# O que vamos aprender?

Hoje, focaremos no fluxo de dados de uma aplicação Redux. Você deve ter percebido que o Redux suporta somente o fluxo síncrono de dados, ou seja, apenas informações e dados já prontos na nossa aplicação.

Uma action é um objeto JavaScript que descreve algum evento que já aconteceu, esse objeto é enviado para o reducer para que o estado global seja atualizado.

Mas, e se fosse necessário uma action assíncrona, a qual precisa fazer uma requisição para uma API, de forma que os devidos dados necessários estejam presentes para, somente então, alterar o estado global?

A função responsável por alterar o estado global é o reducer, que é uma função síncrona e pura. Isso significa que a função reducer não admite assincronicidade (por promises, por exemplo) nem efeitos colaterais.

Para que a gente consiga assincronicidade no Redux, podemos criar actions assíncronas (também chamadas de thunks). E isso é possível através da biblioteca redux-thunk

# Por que isso é importante?

Na minha carreira como pessoa desenvolvedora, operações assíncronas serão extremamente recorrentes. Agora que estou usando Redux, será comum precisar salvar na store algum dado que veio de forma assíncrona (uma chamada de API que retorna informações do banco de dados, para que esteja disponível para sua aplicação, por exemplo).

Tal necessidade, por si só, não é sanada pelo pacote Redux, uma vez que ele suporta somente fluxo síncrono de dados. Isso faz com que seja necessário utilizar outros pacotes, entre eles o mais popular: <Strong>redux-thunk</Strong>. Tal pacote provê uma interface simples para dar suporte aos thunks, que geram actions assíncronas, de modo a tornar sua aplicação mais completa.