import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for MaterialUI
injectTapEventPlugin();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app/app', () => {
    render(App)
  });
}