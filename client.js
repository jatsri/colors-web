import React from 'react'
import {hydrate} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const state = window.__STATE__;

delete window.__STATE__;

const store = createStore((state, action) => {
    if(state === undefined) {
        return initialState
    } else {
        return state;
    }
}, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

hydrate(
    <Provider store={store}>
        <div>Hello World</div>
    </Provider>,
    document.getElementById('app')
);
