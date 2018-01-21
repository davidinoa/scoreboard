import React from 'react';
import Counter from './Counter.jsx';

const Player = (props) => (
  <div className="player">
    <div className="player-name">
      {props.name}
    </div>
    <div className="player-score">
      <Counter 
        score={props.score} 
        onChange={props.onScoreChange} />
    </div>
  </div>
);

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired
};

export default Player;