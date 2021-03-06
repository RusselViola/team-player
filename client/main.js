import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';

import App from '../imports/ui/App';
import Example from '../imports/ui/NewPlayer';
import Lost from '../imports/ui/Lost';

injectTapEventPlugin();

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/NewPlayer" component={Example} />
      <Route path="*" component={Lost} />
    </Router>
  ),
    document.getElementById('render-target')
  );
});
