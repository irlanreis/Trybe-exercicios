function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
                   //Exercício 1

  createDaysOfTheWeek();
  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth () {
        let getDaysList = document.querySelector('#days');

        for (let index = 0; index < decemberDaysList.length; index += 1) {
            // Este loop vai ocorrer enquanto o index for menor que o tamanho do decemberDaysList

             // A cada iteração do _loop for_ selecione o dia atual armazenado-o na variável `day`,  ao mesmo tempo em que a variável `dayItem` armazena a criação de novas `<li>`;
            let day = decemberDaysList[index];
            let dayItem = document.createElement('li');
            //O innerHTML fornece uma forma simples de trocar completamente o conteúdo de um elemento.
            dayItem.innerHTML = day;
             // Adicione o valor do dia atual para cada <li> criado.

             if (day === 24 || day === 31 ) {
                // Caso o dia for 24 ou 31
                dayItem.className = 'day holiday';//className retorna e define o valor do atributo class do elemento especificado.// Atribua a classe 'day friday' ao li criado
                getDaysList.appendChild(dayItem);//appendChild adiciona um nó ao final da lista de filhos de um nó pai especificado. Se o nó já existir no documento, ele é removido de seu nó pai atual antes de ser adicionado ao novo pai.
                //Anexe o li criado como elemento filho do ul
             } else if (day === 4 || day === 11 || day === 18) {
                // Caso o dia for 4, 11 ou 18
                dayItem.className = 'day friday';// Atribua a classe 'day friday' ao li criado.
                getDaysList.appendChild(dayItem);
             } else if (day === 25) {
                // Caso o dia for 25
                dayItem.className = 'day holiday friday';// Atribua a classe 'day holiday friday' ao li criado             
                getDaysList.appendChild(dayItem)
             } else {
                // Caso o dia for qualquer outro dia que não seja os de cima
                dayItem.className = 'day'; 
                getDaysList.appendChild(dayItem);
             }
        }
  }
  createDaysOfTheMonth ();

                         //Exercício 2

  function createHolidayButton(buttonName) {
   //Cria a variável que armazena o seletor do container do botão.
    let buttonConteiner = document.querySelector('.buttons-container');

    //Em um documento HTML, o método Document.createElement() cria o elemento HTML especificado ou um HTMLUnknownElement (en-US) se o nome do elemento dado não for conhecido.
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    //Faça com que o nome do botão seja o mesmo passado por parâmetro à função e o id do botão seja o mesmo que o id armazenado na variável.
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;

    buttonConteiner.appendChild(newButton);
  }
  createHolidayButton('Feriados')

                            //Exercício 3

  function displayHolidays () {

   let getHolidayButton = document.querySelector('#btn-holiday'); // seleciona o botão "Feriados";
   let getHolidays = document.querySelectorAll('.holiday')// Seleciona todos os feriados como um array de elementos;
   let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
   let setNewColor = 'white';  // armazena a nova cor que será utilizada ao pressionar o botão.

   getHolidayButton.addEventListener('click', function() { //Adiciona um escutador de eventos ao botão, esse escutador deve aguardar um clique.

      for (let index = 0; index < getHolidays.length; index += 1) {
         //Altere a cor caso as condições sejam atendidas:

         if (getHolidays[index].getElementsByClassName.backgroundColor === setNewColor) {
            // Se a cor do elemento for a nova cor
            getHolidays[index].style.backgroundColor = backgroundColor;
         } else {
            // Se a cor do elemento for qualquer outra cor diferente da armazenada na variável setNewColor
            getHolidays[index].style.backgroundColor = setNewColor;
         }
      }
   })
  }

  displayHolidays();

                      //Exercício 4

                      //Implemente uma função que crie dinamicamente um botão.
                      //Com o nome "Sexta-feira".
                      // A função deve receber como parâmetro a string "Sexta-feira".

   function createFridayButton (buttonName) {

      let buttonContainer = document.querySelector('.buttons-container');// Armazena o container de botões;
      let newButton = document.createElement('button'); //cria um botão
      let newButtonID = 'btn-friday';//armazena o id do botão

      newButton.innerHTML = buttonName; //adiciona o nome do botão.
      newButton.id = newButtonID;; //adiciona o id do botão.

      buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões.
   }

   createFridayButton('sexta-feira');

                      //Exercício 5

//Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
//👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

//Crie a função e dentro dela as variáveis para armazenar:

//o botão "Sexta-feira";

//um array de elementos com a classe friday;

//uma string que será exibida nos dias que são sextas-feiras.


   function displayFridays(fridayArrays) {
      //Crie a função e dentro dela as variáveis para armazenar:
      let getFridayButton = document.querySelector('#btn-friday')
      let fridays = document.getElementsByClassName('friday')
      let newfridayText = 'SEXTOU o/'

      getFridayButton.addEventListener('click', function() {// cria o escutador de eventos

         for (let index = 0; index < fridays.length; index += 1) {
         // loop responsável pela iteração com elementos de classe 'friday'.
            if (fridays[index].innerHTML !== newfridayText) {
         // caso o texto da Sexta-feira seja diferente do novo texto.
              fridays[index].innerHTML = newfridayText; 
            } else {
         // caso o texto da Sexta-feira seja igual ao novo texto.
              fridays[index].innerHTML = fridayArrays[index]
            }
         }
      })
   }

   let decemberFridays = [ 4, 11, 18, 25 ];//Determine o parâmetro que será passado a função e execute-a
   displayFridays(decemberFridays);

                   //Exercício 6

//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

//Primeiro passo: Crie duas funções, uma para cada ação do mouse,
   function dayMouseOver() {

//Segundo passo: Crie uma variável que selecione o id days para ambas as funções,
    let days = document.querySelector('#days');

//Terceiro passo: Adicione o addEventListener à variável days,
    days.addEventListener('mouseover', function(event) {// Este addEventListener recebe como primeiro parâmetro o mouseover, que dispara a função ao passar o mouse por cima

//Quarto passo: Aumente o fontSize e fontWeight
      event.target.style.fontSize = '30px'; // Ele pega o evento alvo e altera o estilo de fontSize para 30px
      event.target.style.fontWeigth = '600'//Ele pega o evento alvo e altera o estilo de fontWeight para 600
    })
   }
   function dayMouseOut() {
      let days = document.querySelector('#days');
      days.addEventListener('mouseout', function(event) { // Este addEventListener recebe como primeiro parâmetro o mouseout, que dispara a função ao tirar o mouse de cima do elemento
      event.target.style.fontSize = '20px'// Ele pega o evento alvo e altera o estilo de fontSize para 20px
      event.target.style.fontWeigth = '200'// Ele pega o evento alvo e altera o estilo de fontWeight para 20
      })
   }

   //Quinto passo: Executar as funções

   dayMouseOver();
   dayMouseOut();

                         //Exercício 7

   //Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

   //Primeiro passo: Crie a função e dentro dela crie duas variáveis:
   function newTaskSpan (task) {
//* uma responsável por armazenar o elemento com classe igual a `my-tasks`;
//* outra por criar um elemento do tipo `span`.
      let taskcontainer = document.querySelector('.my-tasks'); // armazena o elemento com classe igual a 'my-tasks'
      let taskName = document.createElement('span'); // armazena a criação de um elemento do tipo 'span'

//Segundo passo: Atribua à task criada o texto passado como parâmetro da função.
      taskName.innerHTML = task;

//Terceiro passo: Anexe a task criada como filha do elemento cuja classe é my-tasks.
      taskcontainer.appendChild(taskName) // Anexando a task como filha de taskContainer

   }
// Execute a função e passe como parâmetro a task desejada
newTaskSpan('Concluir Pixel-Art')

                         //Exercício 8

//Implemente uma função que adicione uma legenda com cor para a tarefa.
//* Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

      //Primeiro passo: Crie a função que recebe uma cor por parâmetro.
      function newTaskDiv (color) {

         //Segundo passo: Recupere os elementos que tenham a classe my-tasks.
         let taskscontainer = document.querySelector ('.my-tasks')

         //Terceiro passo: Crie uma div.
         let newTask =  document.createElement('div'); //Criando nova div

         //Quarto passo: Adicione a classe task para a div criada.
         newTask.className = 'task'; // Adicionando className task à newTask

         //Quinto passo: Adicione a cor passada por parâmetro como backgroundColor da div criada.
         newTask.style.backgroundColor = color; // Adicionando a cor recebida por parametro como backgroundColor.

         //Sexto passo: Anexe a task criada como filha do elemento cuja classe é my-tasks.
         taskscontainer.appendChild(newTask);
      }
         //Sétimo passo: Execute a função e passe a cor desejada como parâmetro.
         newTaskDiv('green')
      

                      //Exercício 9
// //Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
      
      //Primeiro passo: Crie uma função e dentro dela crie variáveis para armazenar:
      // os elementos com a classe "task selected";
      // o elemento com o id "tasks".
      function setTaskClass() {
         let selectedTask = document.getElementsByClassName ('task selected');
         let mytasks = document.querySelector('.task');

         // Segundo passo: Insira um evento de click na variável myTasks
         mytasks.addEventListener('click', function(event) {
         
         // Terceiro passo: Crie condicionais para o evento
            if (selectedTask.length === 0) {
               // Caso selectedTask retornar um array com nenhum item

               // Quarto passo: Altere a classe do alvo
               event.target.className = 'task'
            } else {
               // Caso a primeira condição retornar falso
               event.target.className = 'task';
            }
         });
      } 
      // Quinto passo: Execute a função para atribuir o addEventListener em "myTasks"
      setTaskClass();


                      // Exercício 10

//  Implemente uma função que atribua a cor da tarefa ao dia do calendário.
//  Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
//  Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).                     

// Primeiro passo: Crie a função e dentro dela salve os seletores em variáveis distintas:
   function setDayColor () {
      let selectedTask = document.getElementsByClassName('task selected'); // Retorna um array com todos os elementos com a classe "task selected"
      let days = document.querySelector('#days');// Seleciona a primeira ul com id "days"
      let taskDiv = document.querySelector('.task');// Seleciona o primeiro elemento com a classe "task"
      let taskColor = taskDiv.style.backgroundColor;// Salva o Background Color da classe task na variável "taskColor"

      // Segundo passo: Atribua um evento à variável days que armazena a <ul>, usando addEventListener
      days.addEventListener('click', function(event) {
         
         // Terceiro passo: Crie uma variável para salvar a cor do evento alvo
         let eventTargetColor = event.target.style.color// Para pegar o evento alvo, precisamos declarar o evento como parâmetro da função

         // Quarto passo: Crie condicionais para a função
         if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            // Caso não houver nenhum elemento com a classe "task selected" E o evento alvo não tiver a mesma cor de fundo da variável "taskColor"

            // Quinto passo: Faça a alteração da cor do evento alvo
            let color = selectedTask[0].style.backgroundColor;// Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
            event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
         } else if (eventTargetColor == taskColor) {
            // Caso a cor do evento alvo seja igual à da variável "taskColor"

            event.target.style.color = 'rgb(119,119,119)';// Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
         }
      })
   }
   setDayColor();


   //Bônus

   // Implemente uma função que adiciona compromissos à lista "MEUS COMPROMISSOS"
   // Ao digitar um compromisso na caixa de texto "COMPROMISSOS" e clicar no botão "ADICIONAR", o compromisso digitado deve ser adicionado à lista "MEUS COMPROMISSOS".

   function addNewTask () {
      let getInputField = document.querySelector('#task-input');
      let addInputButton = document.querySelector('#btn-add');
      let getTaskList = document.querySelector('.task-list');
      // Segundo Passo: Insira um addEventListener para as variáveis addInputField e getInputField
      addInputButton.addEventListener('click', function (){
         // erceiro Passo: Para o addInputButton, crie uma condicional de validação
         if (getInputField.value.length > 0) {
            // Caso o input tenha um valor de caracteres maior que 0
            let newLi = document.createElement('li');
            newLi.innerText = getInputField.value;

            getTaskList.appendChild(newLi);
            getInputField.value = "";
         } else {
            // Caso o input não tenha nada digitado
         alert('error: Digite ao menos 1 caractere.'); // cria um alerta para informar que não tem texto digitado.
         }
      })
      getInputField.addEventListener('keyup', function (event){
         if (event.key === 'enter' && getInputField.value.length > 0) {
            let newLi = document.createElement.apply('li');
            newLi.innerText = getInputField.value;

            getTaskList.appendChild(newLi);
            getInputField.value = '';
         } 
      })
   }
   addNewTask();