import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
      <Route path='/categories' component={Categories} />
    </div>
  </Router>
)

render(<App />, document.getElementById('app'));