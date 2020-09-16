import React from "react";
import ReactDOM from 'react-dom'
import {addPost, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import state, {subscribe} from './redux/state.js';
import App from './components/App';



let rerenderEntireTree = () => {
    ReactDOM.render(
      <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>,
        document.getElementById('root')
       );
     
    }

subscribe(rerenderEntireTree);