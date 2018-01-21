import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Player from './components/Player.jsx';

const Application = (props) => {

  return (
    <div className="scoreboard">
      <Header title={props.title}/>

      <div className="players">
        <Player name="David Inoa" score={7} />
      </div>
    </div>
  );

};

Application.propTypes = {
  title: React.PropTypes.string
};

Application.defaultProps = {
  title: 'Scoreboard'
};

ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('app'));