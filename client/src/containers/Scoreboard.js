import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';

class Scoreboard extends Component {

  render() {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayersActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayersActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayersActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name} 
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer} />
    ));

    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={players} />

        <div className="players">
          {playerComponents}
        </div>

        <AddPlayerForm addPlayer={addPlayer}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  {
    players: state
  }
}

export default connect(mapStateToProps)(Scoreboard);