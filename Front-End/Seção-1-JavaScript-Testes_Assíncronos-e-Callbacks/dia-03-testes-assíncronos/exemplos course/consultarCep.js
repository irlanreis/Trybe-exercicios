const fetch = require('node-fetch');

const consultaCep = async (cep) => {
    try {
        const requisição = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resposta = await requisição.json();

        const { logradouro } = resposta;
        //  console.log(logradouro);

        return logradouro;
    } catch (error) {
        return error.message;
    }
}
consultaCep('69313616');
module.exports = { consultaCep };