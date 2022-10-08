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
  
  module.exports = getPokemonDetails; 