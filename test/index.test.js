const { describe, expect, it } = require('@jest/globals');
const ServiceExercicios = require('../src/services/exercicio.js')

describe('Testes dos Exercicios', () => {
    const service = new ServiceExercicios()

    beforeAll(async () => {
        console.info('Iniciando TDD com Jest!');
    });

    afterAll(() => {
        console.info('Testes Encerrados!');
    });

    // ============================= NOMES ============================= //
    it('Should add a name', () => {
        const valueBefore = service.GetNomes().length
        service.Add("João")
        const valueAfter = service.GetNomes().length

        expect(valueAfter).toBe(valueBefore+1)
    })
})