import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Global Styles
import '@styles/variables.scss';
import '@styles/medias.scss';
import '@styles/theme.scss';

// Components
import NotificationScreen from '@components/notification-screen';

// Pages
import Home from '@pages/home';
import Chat from '@pages/chat';

function App() {
  return (
    <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/:slug" component={Chat} />
        </Switch>
        <NotificationScreen />
    </Fragment>
  );
}

export default App;
