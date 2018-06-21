/*
** Npm imports
*/
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * Local imports
 */
import { Home, ChatRoom } from '~/containers/';

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
  // TODO: dynamiser les routes
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/chatroom" component={ChatRoom} />
      </React.Fragment>
    </Router>
  );
};

export default Root;
