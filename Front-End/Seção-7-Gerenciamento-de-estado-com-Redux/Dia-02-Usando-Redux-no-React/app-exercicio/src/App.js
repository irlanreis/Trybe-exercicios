import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';
import './App.css';

class App extends Component {
  render() {
    const { dispatch, countState } = this.props;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button onClick={() => dispatch(actionCreator())}>Incrementar 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementar 5</button>
        {/* Importamos o action creator;
        Pegamos o dispatch por meio das props;
        No clique dos botões, enviamos a informação da ação para o reducer, por meio da função dispatch. */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
