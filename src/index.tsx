import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './redux/store';
import { App } from './App';
import './firebase';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
