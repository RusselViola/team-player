import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/Players';

Meteor.startup(() => {
  Meteor.publish('players', function() {
    return Players.find({});
  })
});
