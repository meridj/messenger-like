/*
** Npm imports
*/
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Local imports
 */
import { Home, ChatRoom } from '~/containers/';

import store from '../../store/';

import '~/styles/reset.css';
import '~/styles/index.styl';

/**
 * Functional component
 * Root component make alive the application
 * It generate Router and Redux Provider
 *
 * So, there is the best component ever !
 *
 * @param - no
 */
const Root = () => {
  // TODO: dynamiser les routecomposeWithDevTools()s
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chatroom" component={ChatRoom} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
