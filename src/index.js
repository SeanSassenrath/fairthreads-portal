import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app/app', () => {
    render(App)
  });
}