import express from 'express';
import React from 'react';
import path from 'path';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { renderToString } from 'react-dom/server';

import receiveColors from './reducer/receiveColors';
import addColors from './reducer/addColors';
import validation from './reducer/validation';
import App from './components/App';
import fetchColors from './services/getColors';

const app = express();

const middlewares = [thunk];

app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

app.listen('5000', () => {
    console.log('Server is listening on 5000');
})

const initialState = {
    colors: [],
    addedColors: []
};
const store = createStore(combineReducers({
    receivedColors: receiveColors,
    addedColors: addColors,
    isFormValid: validation
}), initialState, applyMiddleware(...middlewares));

store.dispatch(fetchColors());

const html = renderToString(
    <Provider store={store}>
        <App/>
    </Provider>
)

app.get('/', (req, res) => {
    const preloadedState = store.getState();
    const scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(preloadedState)}
                </script>
                <script src="/dist/client.js"></script>
                `;

    const html = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> react-app </title>
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${html}
                   </div>
                </div>
                ${scripts}
              </body>`

    res.send(html);
});
