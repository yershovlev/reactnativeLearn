import {
  GET_LISTINGS,
  ADD_LISTING,
  LOGIN,
  LOGOUT,
} from "../actions/actionTypes";

const initialState = {
  listings: new Map(),
};

function reducer(state = { ...initialState }, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return { ...state, listings: action.payload };
    case ADD_LISTING: {
      state.listings.set(action.payload.id, action.payload);
      return state;
    }
    case LOGIN: {
      return { ...state, login: action.payload };
    }
    case LOGOUT: {
      return { ...state, login: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
