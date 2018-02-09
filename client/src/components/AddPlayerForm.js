import React from 'react';

class AddPlayerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  addPlayer(e) {
    e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer.bind(this)}>
          <input 
            type="text" 
            value={this.state.name}
            onChange={this.onNameChange.bind(this)} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }

}

AddPlayerForm.propTypes = {
  addPlayer: React.PropTypes.func.isRequired
};

export default AddPlayerForm;