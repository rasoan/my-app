import App from './components/App/App.js';
import React from "react";
import ReactDOM from 'react-dom'
import {addPost, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import state, {subscribe} from './redux/state.js';




let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>,
        document.getElementById('root')
       );
     
    }

rerenderEntireTree(state);

subscribe(rerenderEntireTree);