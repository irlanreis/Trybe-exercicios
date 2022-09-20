function verifyIsNumber(value1, value2) {
    //Crie uma função que receba os dois valores dos inputs por parâmetro.

    if (!value1 || !value2) {// A condição do if só será satisfeita se ao menos um dos campos não tenha sido preenchido
        //Lance um Error caso um dos campos não tenha sido preenchido.
        throw new Error ('Preencha os campos para realizar a soma');// Lançando erro descritivo
    }
    if (isNaN(value1) || isNaN(value2)) {// A condição do if só será satisfeita se ao menos um dos campos não seja um número
        throw new Error ('Informe dois números para realiza a soma');// Lançando erro descritivo
    }
}
const sum = () => {
    try {// Adicione o bloco try para caso ocorra algum erro durante a soma dos valores sejá possível recuperar e tratar o erro no bloco catch

        const value1 = document.getElementById('value1').value;// Recupera o valor do input com o id value1
        const value2 = document.getElementById('value2').value;// Recupera o valor do input com o id value2
        verifyIsNumber(value1, value2);// Executa a função verifyIsNumber

        //Some os valores armazenados nas variáveis value1 e value2.
        const result = Number(value1) + Number(value2);// Somando value1 + value2

        //Exiba uma mensagem com o resultado no elemento com o id = result;
        document.getElementById('result').innerHTML = `Resultado: ${result}`;// Adiciona a mensagem com o resultado da operação no elemento que contém o id result

        //Oitavo passo: Implemente tratativas no bloco catch, para caso ocorra algum erro.
    } catch (error) {
        document.getElementById('result').innerHTML = `Erro: ${error.messege}`;// Adiciona a mensagem de erro ao elemento que contém o id result

        //Nono passo: Utilize o finally, para resetar os valores dos inputs.
    } finally {
        document.getElementById('value1').value = '';// Apagar os valores do elemento que possui o id value1
        document.getElementById('value2').value = '';// Apagar os valores do elemento que possui o id value2
    }
}
window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}