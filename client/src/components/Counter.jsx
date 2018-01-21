import React from 'react';

const Counter = (props) => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <div className="counter-score"> {props.score} </div>
    <button className="counter-action increment"> + </button>
  </div>
);

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
};

export default Counter;