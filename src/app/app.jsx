import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Categories } from './pages/categories/categories';
import { Dashboard } from './pages/dashboard/dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/categories' component={Categories} />
      </div>
    </Router>
  )
}

render(<App />, document.getElementById('app'));