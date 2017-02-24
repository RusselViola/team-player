import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { indigo200, indigo300, indigo900, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  }
};

export default class Player extends Component {
  render() {
    const player = this.props.player;
    const defense = player.duelTackling + player.fieldCoverage + player.blockingAblilities + player.gameStrategy + player.playmakingRisks;
    const offense = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.playmakingRisks;
    const total = defense + offense + player.duelTackling + player.blockingAblilities;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={player.name} subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`} />}
        >
          <img src="profile-pic.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={indigo200}
              style={styles.chip}
              >
              <Avatar size={32} color={indigo300} backgroundColor={blue900}>
                {player.ballManipulation}
              </Avatar>
              Ball manipulation
            </Chip>
            <Chip
              backgroundColor={indigo200}
              style={styles.chip}
              >
              <Avatar size={32} color={indigo300} backgroundColor={blue900}>
                {player.kickingAbilities}
              </Avatar>
              Kicking abilities
            </Chip>
            <Chip
              backgroundColor={indigo200}
              style={styles.chip}
              >
              <Avatar size={32} color={indigo300} backgroundColor={blue900}>
                {player.passingAbilities}
              </Avatar>
              Passing ablilities
            </Chip>
            <Chip
              backgroundColor={indigo200}
              style={styles.chip}
              >
              <Avatar size={32} color={indigo300} backgroundColor={blue900}>
                {player.duelTackling}
              </Avatar>
              Duel/Tackling ablilities
            </Chip>
            <Chip
              backgroundColor={indigo200}
              style={styles.chip}
              >
              <Avatar size={32} color={indigo300} backgroundColor={blue900}>
                {player.fieldCoverage}
              </Avatar>
              Field speed coverage
            </Chip>
            <Chip
              backgroundColor={indigo200}
              style={styles.chip}
              >
              <Avatar size={32} color={indigo300} backgroundColor={blue900}>
                {player.blockingAblilities}
              </Avatar>
              Blocking ablitites
            </Chip>
            <Chip
              backgroundColor={indigo200}
              style={styles.chip}
              >
              <Avatar size={32} color={indigo300} backgroundColor={blue900}>
                {player.gameStrategy}
              </Avatar>
              Game strategy
            </Chip>
            <Chip
              backgroundColor={indigo200}
              style={styles.chip}
              >
              <Avatar size={32} color={indigo300} backgroundColor={blue900}>
                {player.playmakingRisks}
              </Avatar>
              Playmaking Risks
            </Chip>
          </div>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
