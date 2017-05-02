import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './configure-store';
import Categories from './pages/categories/categories';
import Products from './pages/products/products';
import EditProduct from './pages/edit-product/edit-product';
import Brands from './pages/brands/brands';
import { Dashboard } from './pages/dashboard/dashboard';
import MainNav from './components/main-nav/main-nav';
import NotificationContainer from './containers/notification-container/notification-container';
import styles from './app.css';

// Get the Redux store
const store = configureStore();

// Provider gives all children a reference to the store
// Avoids passing the store reference manually as a prop to each child container
const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div className={styles}>
          <MainNav />
          <NotificationContainer />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/categories/:gender?/:category?' component={Categories} />
          <Route path='/brands/:gender?/:category?' component={Brands} />
          <Route path='/products/:gender?/:category?/:subcategory?' component={Products} />
          <Route path='/edit/product/:gender?/:category?/:id?' component={EditProduct} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

export default App;