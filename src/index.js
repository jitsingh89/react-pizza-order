import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import  pizzaReducer from './redux/reducer/pizza';
import cartReducer from './redux/reducer/cart';
import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({
  cart: cartReducer,
  pizza: pizzaReducer,
});


const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
   <App />
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
