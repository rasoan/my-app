import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT
} from '../types/action-types';

export function increment() {
  return {
   type: INCREMENT
  }
};

export function asyncIncrement() {
  return function(dispatch) {
    setTimeout( () => {
      dispatch( {type: ASYNC_INCREMENT} )
      console.log("time")
    }, 1500)
  }
};