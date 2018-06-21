/*
** Npm imports
*/
import React from 'react';

/**
 * Local imports
 */
import { ButtonNavigation, Title } from '../../components/';

import './Home.styl';

/**
 * Functional component
 * Home screen that render the langing page of the app
 * @param no
 */
const Home = () => (
  <div className="home">
    <Title balise="h1" className="home-title">
      Chat with<br />everyone,<br />everywhere<br />!
    </Title>
    <ButtonNavigation to="/chatroom" className="home-link">
      Go to Chat !
    </ButtonNavigation>
  </div>
);

export default Home;
