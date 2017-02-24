import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/Players';

Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  },

  updatePlayer(player) {
    Players.update(player._id,
    { $set: player });
  }
});
