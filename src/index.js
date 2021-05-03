import App from './components/App';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import store from './redux/redux-store.js';
import {Provider} from "react-redux";



ReactDOM.render(<BrowserRouter>
                  <Provider store={store}>
                    <App />
                  </Provider>
                </BrowserRouter>, document.getElementById('root'));
