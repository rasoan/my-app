const INITIALIZE_THE_APPLICATION = "INITIALIZE_THE_APPLICATION";

let initialState = {
  initializeTheApplication: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_THE_APPLICATION:
      return {
              ...state,
              initializeTheApplication: action.initializeTheApplication,
             }
      default:
        return state;
  }
}

export let initializeTheApplicationAC = (initializeTheApplication) => {
  return {
          type: INITIALIZE_THE_APPLICATION,
          initializeTheApplication,
         }
}

export const initializeTheApplication = (initializeTheApplication) => {
  return (dispatch) => {
           dispatch(initializeTheApplicationAC(initializeTheApplication));
  }
}

export default app;