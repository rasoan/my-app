import App from './components/App/App.js';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import store from './redux/redux-store.js';

let rerenderEntireTree = (state) => {

    ReactDOM.render(
      <BrowserRouter>
          <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>,
        document.getElementById('root')
       );     
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});