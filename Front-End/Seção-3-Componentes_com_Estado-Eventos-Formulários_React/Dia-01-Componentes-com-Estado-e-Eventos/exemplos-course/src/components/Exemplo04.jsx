import React, { Component } from 'react'

class Exemplo04 extends Component {
    constructor() {
        super();// uso a função super para sobrescrever a função padrão do js e passar a ler primeiro a função externa .
        this.state = {//seto um estado inicial para o componente
            numeroDeCliques: 0,
        }
        this.handleClick = this.handleClick.bind(this)//liga a nossa função ao this(objeto com propriedades importântes de uso fundamental para manipulação de eventos e os estados do componente)
    }
    handleClick() {//função encarregada de passar a lógica para atualizar o valor do estado do botão!
        this.setState((estadoInicial, _propes) => ({
            /* Passando uma callback à função setState, que recebe de parâmetros
       o estado anterior e as props do componente,garantimos que as atualizações
       do estado acontecerão uma depois da outra! */
            numeroDeCliques: estadoInicial.numeroDeCliques + 1,
        }));
    }
    render() {
        const { numeroDeCliques } = this.state;
        return (
            <button type='button'
                onClick={this.handleClick}
                className='button'>{numeroDeCliques}
            </button>
        )
    }
};

export default Exemplo04;