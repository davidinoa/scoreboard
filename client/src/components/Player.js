import React from 'react';
import Counter from './Counter.jsx';

const Player = (props) => (
  <div className="player">
    <div className="player-name">
      <a className="remove-player" onClick={() => props.removePlayer(props.index)}> ✘ </a>
      {props.name}
    </div>
    <div className="player-score">
      <Counter 
        score={props.score}
        index={props.index}
        updatePlayerScore={props.updatePlayerScore} />
    </div>
  </div>
);

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  score: React.PropTypes.number.isRequired,
  removePlayer: React.PropTypes.func.isRequired,
  updatePlayerScore: React.PropTypes.func.isRequired
};

export default Player;