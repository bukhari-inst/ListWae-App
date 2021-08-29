import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth, db } from 'config/Firebase';
import LandingPage from 'pages/LandingPage';
// import { HomePage } from 'pages/HomePage';
import { SignupPage } from 'pages/SignupPage';
import { SigninPage } from 'pages/SigninPage';

export class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    // getting current user
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection('users')
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            this.setState({
              currentUser: snapshot.data().Name,
            });
          });
      } else {
        console.log('user is not signed in to retrive username');
      }
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LandingPage currentUser={this.state.currentUser} />
            )}
          />
          {/* <Route exact path="/HomePage" component={HomePage} /> */}
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={SigninPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
