import React from 'react';
import ReactDOM from 'react-dom';
import AddPlayerForm from './AddPlayerForm.jsx';
import Header from './Header.jsx';
import Player from './Player.jsx';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: 'David Inoa', score: 17, id: 1 },
        { name: 'Efrain Marquez', score: 13, id: 2 },
        { name: 'Joe Neckles', score: 14, id: 3 }
      ],
      nextId: 4
    };
  }

  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAdd(name) {
    this.state.players.push({ name: name, score: 0, id: this.state.nextId});
    this.state.nextId++;
    this.setState(this.state);
  }

  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map((player, index) => {
            return <Player 
              key={player.id} 
              name={player.name} 
              score={player.score}
              onScoreChange={ (delta) => {
                this.onScoreChange(index, delta);
              }} 
              onRemove={ () => this.onRemovePlayer(index) }
            />;
          })}
        </div>

        <AddPlayerForm onAdd={this.onPlayerAdd.bind(this)}/>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  title: React.PropTypes.string,
  // initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
  //   name: React.PropTypes.string.isRequired,
  //   score: React.PropTypes.number.isRequired,
  //   id: React.PropTypes.number.isRequired
  // })).isRequired
};

Scoreboard.defaultProps = {
  title: 'Scoreboard'
};

export default Scoreboard;