const emailList = [
    'isa@email.com',
    'lipe@email.com',
    'digo@email.com',
    'greg@gmail.com',
];
//Função callback que recebe o array emailList como parâmetro.
const showEmailList = (list) => {
    const div = document.querySelector('#email-list');
    div.innerHTML = '';

    // Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso!'
list.forEach((email) => {
    const p = document.createElement('p');
    p.innerHTML = `${email}: Enviado com sucesso!`
    div.appendChild(p);
});
};

const btnFilter = document.querySelector('#btn-filter');
btnFilter.addEventListener('click', () => showEmailList(emailList));