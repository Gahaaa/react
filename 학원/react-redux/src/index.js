import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, composeWithDevTools());
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
