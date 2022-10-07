const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {

  const maxTemperature = 58;

  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    const temperaturaAtual = getMarsTemperature()
    // console.log(temperaturaAtual);
    console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`);
};
setTimeout(() => sendMarsTemperature(), 4_000); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo