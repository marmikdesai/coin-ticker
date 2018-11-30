import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import HeaderMenu from './components/HeaderMenu';

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={HeaderMenu}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
        </div>
      </Router>
    );
  }
}
export default Routing;
