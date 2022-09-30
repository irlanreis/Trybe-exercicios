const sum = require('./02.js')

describe('Testando função do exercício 02', () => {
    it('verifica se a função sum existe', () => {
        expect(typeof sum).toBe('function')
    })
});
describe('testa funcionamento da função', () => {
    it('verifica se a função soma todos os argumentos passados como parâmetro', () => {
        expect(sum(2, 3, 5)).toBe(10)
        expect(sum(2, 3, 5, 5)).toBe(15)
    })
})
