import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import Categories from './pages/categories/categories';
import { Dashboard } from './pages/dashboard/dashboard';
import MainNav from './components/main-nav/main-nav';
import styles from './app.css';

const store = configureStore();

// Provider gives all children a reference to the store
// Avoids passing the store reference manually as a prop to each child container

const App = () => (
  <Provider store={store}>
    <Router>
      <div className={styles}>
        <MainNav />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/categories' component={Categories} />
      </div>
    </Router>
  </Provider>
)

export default App;