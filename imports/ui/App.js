import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './TeamList';
import TeamStats from './TeamStats';
import Player from './Player';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      players: []
    };
  }

  componentWillMount() {
    this.setState({ players: [
      {
        _id: 1,
        name: 'Russel Viola',
        ballManipulation: 10,
        kickingAbilities: 3,
        passingAbilities: 4,
        duelTackling: 6,
        fieldCoverage: 2,
        blockingAblilities: 7,
        gameStrategy: 1,
        playmakingrisks: 10,
      },
      {
        _id: 2,
        name: 'aloiV lessuR',
        ballManipulation: 10,
        kickingAbilities: 3,
        passingAbilities: 4,
        duelTackling: 6,
        fieldCoverage: 2,
        blockingAblilities: 7,
        gameStrategy: 1,
        playmakingrisks: 10,
      },
      {
        _id: 3,
        name: 'Viola Russel',
        ballManipulation: 10,
        kickingAbilities: 3,
        passingAbilities: 4,
        duelTackling: 6,
        fieldCoverage: 2,
        blockingAblilities: 7,
        gameStrategy: 1,
        playmakingrisks: 10,
      }
    ]});
  }

  renderPlayers() {
    return this.state.players.map((player) => (
      <TeamList
        key={player._id}
        player={player}
      />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">

          <AppBar
            title="Team-Player Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
          />

          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
              <h2>Team List</h2>
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
