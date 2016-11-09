import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/app';
import Home from './components/home';
import News from './components/news';
import Collections from './components/collections';
import Center from './components/center';
import Contact from './components/contact';


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='news' component={News} />
      <Route path='collections' component={Collections} />
      <Route path='center' component={Center} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
);

export default routes;
