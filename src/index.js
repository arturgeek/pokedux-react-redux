import React from 'react';
import ReactDOM from 'react-dom/client';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import { featuring, logger } from './middlewares';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const copmposedEnhancers = compose( 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger),
  applyMiddleware(featuring),
);

const store = createStore( 
  pokemonsReducer,
  copmposedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);