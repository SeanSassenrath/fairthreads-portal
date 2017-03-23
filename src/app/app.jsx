import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import Categories from './pages/categories/categories';
import { Dashboard } from './pages/dashboard/dashboard';
import MainNav from './components/main-nav/main-nav';
import styles from './app.css';

const App = () => (
  <Router>
    <div className={styles}>
      <MainNav />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/categories/:gender/:type' component={Categories} />
    </div>
  </Router>
)

export default App;