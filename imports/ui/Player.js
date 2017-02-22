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
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Russel" subtitle="Offense: 999 - Defense: 1" />}
        >
          <img src="profile-pic.jpg" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          <Chip
            backgroundColor={indigo200}
            style={styles.chip}
            >
            <Avatar size={32} color={indigo300} backgroundColor={blue900}>
              10
            </Avatar>
            Ball manipulation
          </Chip>
          <Chip
            backgroundColor={indigo200}
            style={styles.chip}
            >
            <Avatar size={32} color={indigo300} backgroundColor={blue900}>
              3
            </Avatar>
            Kicking abilities
          </Chip>
          <Chip
            backgroundColor={indigo200}
            style={styles.chip}
            >
            <Avatar size={32} color={indigo300} backgroundColor={blue900}>
              5
            </Avatar>
            Passing ablilities
          </Chip>
          <Chip
            backgroundColor={indigo200}
            style={styles.chip}
            >
            <Avatar size={32} color={indigo300} backgroundColor={blue900}>
              3
            </Avatar>
            Duel/Tackling ablilities
          </Chip>
          <Chip
            backgroundColor={indigo200}
            style={styles.chip}
            >
            <Avatar size={32} color={indigo300} backgroundColor={blue900}>
              3
            </Avatar>
            Field speed coverage
          </Chip>
          <Chip
            backgroundColor={indigo200}
            style={styles.chip}
            >
            <Avatar size={32} color={indigo300} backgroundColor={blue900}>
              2
            </Avatar>
            Blocking ablitites
          </Chip>
          <Chip
            backgroundColor={indigo200}
            style={styles.chip}
            >
            <Avatar size={32} color={indigo300} backgroundColor={blue900}>
              1
            </Avatar>
            Game strategy
          </Chip>
          <Chip
            backgroundColor={indigo200}
            style={styles.chip}
            >
            <Avatar size={32} color={indigo300} backgroundColor={blue900}>
              10
            </Avatar>
            Playmaking Risks
          </Chip>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
