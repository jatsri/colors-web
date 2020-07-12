import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import receiveColors from './reducer/receiveColors';
import addColors from './reducer/addColors';
import removeColor from './reducer/removeColor';
import App from './components/App'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const state = window.__STATE__;

delete window.__STATE__;

const store = createStore(combineReducers({
    colors: receiveColors,
    addedColors: addColors,
    removedColor: removeColor
}), state, composeEnhancers(applyMiddleware(...middlewares)));

hydrate(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
