import React from 'react';
import ReactDOM from 'react-dom/client';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './middlewares';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const copmposedEnhancers = composeAlt( 
  applyMiddleware(thunk, logger),
);

const store = createStore( rootReducer, copmposedEnhancers );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);