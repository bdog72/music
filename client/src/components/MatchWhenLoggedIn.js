import React from 'react';

import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';

import { client } from '../Client';

const MatchWhenLoggedIn = ({ component: Component, ...rest }) => (
<Match {...rest} render={(props) => (
  client.isLoggedIn() ? (
<Component {...props} />
  ) : (
<Redirect to={{
  pathname: '/login',
  state: { from: props.location },
}} />
  )
)} />
);

export default MatchWhenLoggedIn;
