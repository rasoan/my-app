import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers from './reducers/index';

// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// export default store;
import rootReducer from './reducers/app-state.reducer.js'

function logger(state) {
    return function(next) {
        return function(action) {
            console.log('State', state);
            console.log('State', action)
            return next(action)
        }
    }
}


let store = createStore( rootReducer, 0, applyMiddleware(thunk, logger) );
export default store;