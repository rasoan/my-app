import App from './components/App/App.js';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import store from './redux/redux-store.js';
import StoreContext from './StoreContext';

let rerenderEntireTree = (state) => {

    ReactDOM.render(
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>,
        document.getElementById('root')
       );     
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});