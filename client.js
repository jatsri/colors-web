import React from 'react'
import {hydrate} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import receiveColors from './reducer/receiveColors';
import addColors from './reducer/addColors';
import removeColor from './reducer/removeColor';
import App from './components/App'

const state = window.__STATE__;

delete window.__STATE__;

const store = createStore(combineReducers({
    receiveColors,
    addColors,
    removeColor
}), state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

hydrate(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
