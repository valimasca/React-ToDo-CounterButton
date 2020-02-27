import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };

  incrementBy5 = () => {
    this.props.dispatch({
      type: 'INCREMENTBY5'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };

  decrementBy10 = () => {
    this.props.dispatch({
      type: 'DECREMENTBY10'
    });
  }

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <br/>
          <button onClick={this.decrement}>Decrease by 1</button>
          <br />   
          <button onClick={this.increment}>Increase by 1</button>
          <br />
          <button onClick={this.incrementBy5}>Increase by 5</button>
          <br/>
          <button onClick={this.decrementBy10}>Decrease by 10</button>
          <br/>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);