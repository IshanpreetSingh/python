import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Balance from './Balance';
import Withdraw from './Withdraw';
import Deposit from './Deposit';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/balance" component={Balance} />
      <Route exact path="/withdraw" component={Withdraw} />
      <Route exact path="/deposit" component={Deposit} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
