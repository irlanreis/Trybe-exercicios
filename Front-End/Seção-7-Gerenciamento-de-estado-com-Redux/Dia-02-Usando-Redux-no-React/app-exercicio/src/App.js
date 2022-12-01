import React, { Component } from 'react'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { countState } = this.props;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button>Incrementar 1</button>
        <button>Incrementar 5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
    countState: state.count,
});

export default connect(mapStateToProps)(App);
