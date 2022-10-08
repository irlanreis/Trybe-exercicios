// Verifique se a importação do arquivo correto está sendo feita.
// const getPokemonDetails = require('./getPokemonDetails.test.js');
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

// Colocamos o parâmetro selectedPokemon na função getPokemonDetails;
// Criamos um if/else dentro da função handlePokemonSearch;
// Colocamos o parâmetro error como condição do if;
// Colocamos um console.log(error) para imprimir o erro caso ele seja true; e
// Colocamos um console.log(message) para imprimir a mensagem caso o error seja false.
const handlePokemonSearch = (error, selectedPokemon) => {
  if(error){console.log(error)} console.log(selectedPokemon)};

getPokemonDetails('Charmander' , handlePokemonSearch);

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :('); // 1. Criamos o erro esperado

    getPokemonDetails('Pikachu', (error, _message) => { // 2, 3. Chamamos a função passando os parâmetros
      try { // 4. Adiciona um `try/catch`
        expect(error).toEqual(expectedError); // 5. Criamos o expect
        done(); // 6. Chamamos a função `done()`
      } catch (error) {
        done(error); // 7. Chamamos a função `done()` com o parâmetro `error`
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => { // 8. Os mesmos processos do primeira `it` com seus ajustes
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas';

    getPokemonDetails('Charmander',(_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});