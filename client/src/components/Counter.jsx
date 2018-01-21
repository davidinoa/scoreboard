import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  incrementScore() {
    this.setState({
      score: ++this.state.score
    });
  }

  decrementScore() {
    this.setState({
      score: --this.state.score
    });
  }

  render() {
    return (
      <div className="counter">
        <button 
          className="counter-action decrement" 
          onClick={this.decrementScore.bind(this)}>
            - 
        </button>
        <div className="counter-score"> {this.state.score} </div>
        <button 
          className="counter-action increment" 
          onClick={this.incrementScore.bind(this)}> 
            + 
        </button>
      </div>
    );
  }

}

export default Counter;