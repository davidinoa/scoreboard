import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Player from './components/Player.jsx';

const PLAYERS = [
  { name: 'David Inoa', score: 17, id: 1 },
  { name: 'Efrain Marquez', score: 13, id: 2 },
  { name: 'Joe Neckles', score: 14, id: 3 }
];

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers
    };
  }

  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>

        <div className="players">
          {this.state.players.map((player, index) => {
            return <Player 
              key={player.id} 
              name={player.name} 
              score={player.score}
              onScoreChange={ (delta) => {
                this.onScoreChange(index, delta);
              }} 
            />;
          })}
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  title: React.PropTypes.string,
  initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired
  })).isRequired
};

Application.defaultProps = {
  title: 'Scoreboard'
};

ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('app'));