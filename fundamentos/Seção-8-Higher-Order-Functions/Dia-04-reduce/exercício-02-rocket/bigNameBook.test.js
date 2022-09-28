const longestNamedBook = require('./bigNameBook.js')

describe('Testando a existência de funções', () => {
    it('Verifica se a função longestNameBook existe', () => {
        expect(typeof longestNamedBook).toBe('function')
    })
    it('Verifica se a função longestNameBook está definifa', () => {
        expect(longestNamedBook).toBeDefined()
    })
    it('Verifica se o type de saída na função longestNameBook é object', () => {
        expect(typeof longestNamedBook()).toBe('object')
    })
})
