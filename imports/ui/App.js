import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// database - Collection
import { Players } from '../api/Players';

import TeamList from './TeamList';
import TeamStats from './TeamStats';
import Player from './Player';
import AccountsWrapper from './AccountsWrapper';

const tempPlayer = {
  name: 'Temp player',
  team: 'Temp Team',
  ballManipulation: 2,
  kickingAbilities: 3,
  passingAbilities: 2,
  duelTackling: 2,
  fieldCoverage: 1,
  blockingAblilities: 4,
  gameStrategy: 2,
  playmakingRisks: 1,
  notes: 'This is a test player',
}

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentPlayer: tempPlayer
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList
        key={player._id}
        player={player}
        updateCurrentPlayer={this.updateCurrentPlayer}
      />
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">

          <AppBar
            title="Team-Player Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}>
            <AccountsWrapper />
          </AppBar>

          <div className="row">
            <div className="col s12 m7">
              <Player
                player={this.state.currentPlayer}
              />
            </div>
            <div className="col s12 m5">
              <h2>Team List</h2><Link to="/NewPlayer" className="waves-effect waves-light btn">Add player</Link>
              <Divider />
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider />
            </div>
            <div className="col s12 m5"><TeamStats /></div>
          </div>
        </div>

      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('players');
  const user = Meteor.userId();

  return {
    players: Players.find({ owner: user }, {sort: { name: 1 }}).fetch(),
  };
}, App);
