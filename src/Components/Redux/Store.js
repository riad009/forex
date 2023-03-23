// store.js

import { createStore } from 'redux';

const SET_SCHOOLS = 'SET_SCHOOLS';

export const setSchools = (schools) => ({
  type: SET_SCHOOLS,
  payload: schools,
});

const initialState = {
  schools: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCHOOLS:
      return {
        ...state,
        schools: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
