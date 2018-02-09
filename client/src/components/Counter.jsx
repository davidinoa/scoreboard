import React from 'react';

const Counter = (props) => (
  <div className="counter">
    <button 
      className="counter-action decrement"
      onClick={() => props.updatePlayerScore(props.index, -1)}> 
        - 
    </button>
    <div className="counter-score"> {props.score} </div>
    <button 
      className="counter-action increment"
      onClick={() => props.updatePlayerScore(props.index, 1)}> 
        + 
    </button>
  </div>
);

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  number: React.PropTypes.number.isRequired,
  updatePlayerScore: React.PropTypes.func.isRequired
};

export default Counter;