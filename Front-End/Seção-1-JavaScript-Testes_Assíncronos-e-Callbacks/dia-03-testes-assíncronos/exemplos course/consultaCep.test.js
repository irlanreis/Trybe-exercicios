
const fetch = require('node-fetch');

const { consultaCep } = require('./consultarCep');

describe('Testa a função consultaCep', () => {
    test('Verifica se retorna o logradouro', async () => {
        expect(await consultaCep('69313616')).toEqual('Rua Soldado-Polícia Militar Arineu Ferreira Lima');
    })
})