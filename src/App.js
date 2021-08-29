import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignupPage } from 'pages/SignupPage';
import { SigninPage } from 'pages/SigninPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignupPage} />
        <Route exact path="/login" component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
