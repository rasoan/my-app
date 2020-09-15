import React from 'react';
import ReactDOM from 'react-dom';
import {rerenderEntireTree} from './render.js';
import state from './redux/state.js';



rerenderEntireTree(state);
