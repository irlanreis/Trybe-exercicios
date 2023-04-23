// Lendo Arquivos com métodos síncronos.

// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }

// Lendo arquivos com métodos assíncronos

// const fs = require('fs').promises;

// async function main() {
//   try {
//     const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// }

// main();

// Escrever dados

const fs = require('fs').promises;

const main = async () => {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.log.error(`Erro ao escrecver o arquivo: ${err.message}`);
  }
};

main();