import React from 'react';
import Stats from './Stats.jsx';
import Stopwatch from './Stopwatch.jsx';

const Header = (props) => (
  <div className="header">
    <Stats players={props.players}/>
    <h1> {props.title} </h1>
    <Stopwatch />    
  </div>
);

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};

export default Header;