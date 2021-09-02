import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth, db } from 'config/Firebase';
import { SwitchPage } from 'pages/SwitchPage';
import { SignupPage } from 'pages/SignupPage';
import { SigninPage } from 'pages/SigninPage';
import { JudulKebutuhan } from 'pages/Kebutuhan/JudulKebutuhan';
import { Selesai } from 'pages/Kebutuhan/Selesai';
import { DetailItems } from 'pages/Kebutuhan/DetailItems';
// import { Kebutuhan } from 'pages/JudulKebutuhan';

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
              <SwitchPage currentUser={this.state.currentUser} />
            )}
          />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={SigninPage} />
          <Route exact path="/judulkebutuhan" component={JudulKebutuhan} />
          <Route exact path="/detailitems" component={DetailItems} />
          <Route exact path="/selesai" component={Selesai} />
          {/* <Route exact path="/kebutuhan" component={Kebutuhan} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
