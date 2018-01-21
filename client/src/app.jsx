import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Player from './components/Player.jsx';

const PLAYERS = [
  { name: 'David Inoa', score: 17, id: 1 },
  { name: 'Efrain Marquez', score: 13, id: 2 },
  { name: 'Joe Neckles', score: 14, id: 3 }
];

const Application = (props) => {

  return (
    <div className="scoreboard">
      <Header title={props.title}/>

      <div className="players">
        {props.players.map(player => {
          return <Player 
            key={player.id} 
            name={player.name} 
            score={player.score} 
          />;
        })}
      </div>
    </div>
  );

};

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired
  })).isRequired
};

Application.defaultProps = {
  title: 'Scoreboard'
};

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('app'));